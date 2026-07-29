// scripts/check-links.mjs — the dead-internal-link guard.
//
// Two internal links to REMOVED vendor coupon pages (apollo-peptide-sciences,
// nordic-peptides) survived months undetected and only surfaced when Google
// crawled them and reported 404s. This makes that class of defect loud instead
// of silent.
//
// It scans the repo for every internal link of the form /coupons/<slug> and, for
// each, asserts the URL actually resolves — either to a real page directory or via
// an explicit redirect rule in next.config.js. A link that resolves to neither is a
// DEAD LINK (it would 404) and fails the check.
//
// Distinctions encoded (from the 2026-07 audit):
//   - A link to a RETIRED vendor whose route 301s to /coupons is NOT dead — it's a
//     working redirect. Not flagged.
//   - Registry / price DATA that references retired vendors is NOT a link. vendors.ts
//     (detailPage), vendors.slugs.json, prices.generated.ts, prices.index.json and
//     peptide-vendors.json legitimately carry retired entries and the render layers
//     filter them, so those files are excluded from the link scan.
//   - Commented-out code is not a link (line + block comments are stripped first,
//     while `https://` is preserved).
//
// PURE LOCAL ANALYSIS — no network calls, so it is safe to run on every build / in
// CI (unlike check:vendors, which fetches external hosts).
//
// Run:  npm run check:links
// Exit: 0 = all links resolve; 1 = at least one dead link (prints file:line + slug).

import ts from "typescript";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const vendorsPath = join(root, "src/data/vendors.ts");
const require = createRequire(import.meta.url);

const SCAN_DIR = join(root, "src");
const SCAN_EXTS = new Set([".ts", ".tsx", ".md", ".mdx", ".json"]);

// DATA files (not rendered as hrefs) — excluded from the link scan, per the audit.
const EXCLUDE = new Set(
  [
    "src/data/vendors.ts",
    "src/data/vendors.slugs.json",
    "src/data/prices.generated.ts",
    "src/data/prices.index.json",
    "src/data/peptide-vendors.json",
  ].map((p) => join(root, p))
);

const COUPON_LINK = /\/coupons\/([a-z0-9-]+)/g;

// ── read the real vendors object from vendors.ts (transpile + execute) ──────────
// Same pattern as check-vendors.mjs / gen-vendor-slugs.mjs: vendors.ts is import-free,
// so transpile to CommonJS and execute it in isolation to read the real object.
function loadVendors() {
  const { outputText } = ts.transpileModule(readFileSync(vendorsPath, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const moduleObj = { exports: {} };
  const requireGuard = (name) => {
    throw new Error(`vendors.ts must stay import-free for check:links (saw require("${name}"))`);
  };
  new Function("module", "exports", "require", outputText)(moduleObj, moduleObj.exports, requireGuard);
  const vendors = moduleObj.exports.vendors;
  if (!vendors || typeof vendors !== "object") {
    throw new Error("check:links: could not read `vendors` export from vendors.ts");
  }
  return vendors;
}

// Coupon slugs that an explicit next.config.js redirect resolves (source → destination).
// Executing the real config keeps this in lockstep with the deployed rules.
async function loadRedirectCouponSlugs() {
  const cfg = require(join(root, "next.config.js"));
  const rules = typeof cfg.redirects === "function" ? await cfg.redirects() : [];
  const slugs = new Set();
  for (const r of rules) {
    if (typeof r.source !== "string") continue;
    // Normalize Next source syntax: drop an optional-trailing-slash marker, then a
    // trailing slash, and only accept an EXACT /coupons/<slug> rule (not the generic
    // /:path+/ trailing-slash normalizer, which doesn't make a 404 slug valid).
    const src = r.source.replace(/\{\/\}\??$/, "").replace(/\/$/, "");
    const m = /^\/coupons\/([a-z0-9-]+)$/.exec(src);
    if (m) slugs.add(m[1]);
  }
  return slugs;
}

// Blank out /* … */ and {/* … */} comments while preserving newlines (so line numbers
// stay accurate), then strip // line comments — but NOT the // in `https://`.
function stripComments(text) {
  const noBlock = text.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "));
  return noBlock
    .split("\n")
    .map((line) => line.replace(/(^|[^:])\/\/.*$/, "$1"))
    .join("\n");
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      walk(full, out);
    } else if (SCAN_EXTS.has(full.slice(full.lastIndexOf("."))) && !EXCLUDE.has(full)) {
      out.push(full);
    }
  }
  return out;
}

function findCouponLinks(files) {
  const links = [];
  for (const file of files) {
    const lines = stripComments(readFileSync(file, "utf8")).split("\n");
    lines.forEach((line, i) => {
      let m;
      COUPON_LINK.lastIndex = 0;
      while ((m = COUPON_LINK.exec(line)) !== null) {
        links.push({ file: relative(root, file), line: i + 1, slug: m[1] });
      }
    });
  }
  return links;
}

// ── run ─────────────────────────────────────────────────────────────────────
const vendors = loadVendors();
const redirectSlugs = await loadRedirectCouponSlugs();
const links = findCouponLinks(walk(SCAN_DIR));

const dead = [];
let redirectOk = 0;
for (const link of links) {
  const inVendors = Object.prototype.hasOwnProperty.call(vendors, link.slug);
  const retired = inVendors && vendors[link.slug].retired === true;
  const hasPageDir = existsSync(join(root, "src/app/coupons", link.slug, "page.tsx"));
  const hasRedirect = redirectSlugs.has(link.slug);
  // Resolves iff it lands somewhere: a real page, or an explicit redirect. A working
  // redirect (e.g. a retired vendor → /coupons) is NOT dead.
  const resolves = hasPageDir || hasRedirect;
  if (!resolves) {
    dead.push({ ...link, inVendors, retired, hasPageDir, hasRedirect });
  } else if (hasRedirect && (retired || !hasPageDir)) {
    redirectOk++;
  }
}

const uniqueSlugs = new Set(links.map((l) => l.slug)).size;

if (dead.length) {
  console.error(`check:links FAILED — ${dead.length} dead /coupons/<slug> link(s):\n`);
  for (const d of dead) {
    const why = [
      d.inVendors ? "in vendors.ts" : "NOT in vendors.ts",
      d.retired ? "retired" : "not retired",
      d.hasPageDir ? "page dir exists" : "no page dir",
      d.hasRedirect ? "has redirect" : "no redirect rule",
    ].join(", ");
    console.error(`  ✗ ${d.file}:${d.line}  →  /coupons/${d.slug}`);
    console.error(`      ${why} — resolves to nothing (would 404)`);
  }
  console.error(`\nFix: remove the link, or repoint it to a live vendor or /coupons.`);
  process.exit(1);
}

console.log(
  `check:links OK — ${links.length} /coupons/<slug> link(s) across ${uniqueSlugs} slug(s), all resolve` +
    (redirectOk ? ` (${redirectOk} via redirect)` : "") +
    `.`
);
