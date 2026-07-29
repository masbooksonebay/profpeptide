// scripts/check-links.mjs — the dead-internal-link guard.
//
// Two internal links to REMOVED vendor coupon pages (apollo-peptide-sciences,
// nordic-peptides) survived months undetected and only surfaced when Google
// crawled them and reported 404s. This makes that class of defect loud instead
// of silent, across every internal route family that can go dead the same way.
//
// It scans the repo for internal links of the form /<family>/<slug> and, for each,
// asserts the URL actually resolves. A link that resolves to nothing (would 404) is
// a DEAD LINK and fails the check with file:line + slug.
//
// Per-family resolvers (a link resolves if ANY path holds):
//   /coupons/<slug>     — real page dir  OR  explicit next.config.js redirect
//   /peptides/<slug>    — real page dir  OR  present in the [slug] peptideData map
//   /supplements/<slug> — real page dir
//   /compare/<slug>     — real page dir
//   /guides/<slug>      — real page dir
//   /news/<slug>        — real page dir  OR  in the news.ts registry  OR  redirect
//   /<top>              — single-segment top-level route (e.g. /bioregulators,
//                         /calculator, /faq): real src/app/<top>/page.tsx  OR redirect
//
// DELIBERATELY OUT OF SCOPE: /prices/<slug>. It has zero literal links (they are
// built dynamically as /prices/${slug} from the price dataset), and validating it
// would need a different resolver — dataset membership in prices.generated.ts, not
// directory existence (a dataset-absent slug 404s via notFound()). Not forgotten;
// add it as its own resolver if literal /prices links ever appear.
//
// Distinctions encoded (from the 2026-07 audit):
//   - A link to a RETIRED vendor whose route 301s to /coupons is NOT dead — it's a
//     working redirect. Not flagged.
//   - Registry / price DATA that references retired/other entries is NOT a link.
//     vendors.ts (detailPage), vendors.slugs.json, prices.generated.ts,
//     prices.index.json and peptide-vendors.json are excluded from the scan; the
//     render layers filter those, so only rendered hrefs are treated as links.
//   - Comments aren't links: block and // line comments are stripped first, while
//     `https://` is preserved.
//
// PURE LOCAL ANALYSIS — no network calls, so it is safe to run on every build / in
// CI (unlike check:vendors, which fetches external hosts).
//
// Run:  npm run check:links
// Exit: 0 = all links resolve; 1 = at least one dead link (prints file:line + slug).

import ts from "typescript";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const vendorsPath = join(root, "src/data/vendors.ts");
const newsPath = join(root, "src/data/news.ts");
const peptideDynamicPath = join(root, "src/app/peptides/[slug]/page.tsx");
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

// ── loaders ───────────────────────────────────────────────────────────────────

// Read an import-free TS data module by transpiling to CommonJS and executing it in
// isolation. Same pattern as check-vendors.mjs / gen-vendor-slugs.mjs.
function execModule(path, label) {
  const { outputText } = ts.transpileModule(readFileSync(path, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const moduleObj = { exports: {} };
  const requireGuard = (name) => {
    throw new Error(`${label} must stay import-free for check:links (saw require("${name}"))`);
  };
  new Function("module", "exports", "require", outputText)(moduleObj, moduleObj.exports, requireGuard);
  return moduleObj.exports;
}

function loadVendors() {
  const vendors = execModule(vendorsPath, "vendors.ts").vendors;
  if (!vendors || typeof vendors !== "object") {
    throw new Error("check:links: could not read `vendors` export from vendors.ts");
  }
  return vendors;
}

function loadNewsSlugs() {
  const articles = execModule(newsPath, "news.ts").articles;
  if (!Array.isArray(articles)) {
    throw new Error("check:links: could not read `articles` export from news.ts");
  }
  return new Set(articles.map((a) => a.slug));
}

// Top-level keys of the `peptideData` map in the /peptides/[slug] dynamic route.
// That file imports next/*, so it can't be executed — read the object literal via AST.
function loadPeptideDataSlugs() {
  const src = readFileSync(peptideDynamicPath, "utf8");
  const sf = ts.createSourceFile(peptideDynamicPath, src, ts.ScriptTarget.Latest, true);
  const slugs = new Set();
  function visit(node) {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.name.text === "peptideData" &&
      node.initializer &&
      ts.isObjectLiteralExpression(node.initializer)
    ) {
      for (const prop of node.initializer.properties) {
        const name = prop.name;
        if (name && (ts.isStringLiteral(name) || ts.isIdentifier(name))) slugs.add(name.text);
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(sf);
  return slugs;
}

// Paths that an explicit next.config.js redirect resolves, split by shape:
//   .two — /<family>/<slug>   (e.g. a retired vendor 301'd to /coupons)
//   .one — /<segment>         (e.g. /retatrutide → /peptides/retatrutide)
// Executing the real config keeps this in lockstep with the deployed rules.
async function loadRedirectPaths() {
  const cfg = require(join(root, "next.config.js"));
  const rules = typeof cfg.redirects === "function" ? await cfg.redirects() : [];
  const two = new Set();
  const one = new Set();
  for (const r of rules) {
    if (typeof r.source !== "string") continue;
    // Normalize Next source syntax: drop an optional-trailing-slash marker, then a
    // trailing slash. Accept an EXACT /<family>/<slug> or /<segment> rule — never the
    // generic /:path+/ or /:path* wildcards, which don't make a 404 target valid.
    const src = r.source.replace(/\{\/\}\??$/, "").replace(/\/$/, "");
    if (/^\/[a-z0-9-]+\/[a-z0-9-]+$/.test(src)) two.add(src);
    else if (/^\/[a-z0-9-]+$/.test(src)) one.add(src);
  }
  return { two, one };
}

// ── scanning ────────────────────────────────────────────────────────────────

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

const hasPageDir = (family, slug) => existsSync(join(root, "src/app", family, slug, "page.tsx"));
// A single-segment route /<seg> is real iff src/app/<seg>/page.tsx exists. Landing
// pages whose only children are subroutes (e.g. src/app/strength-cycle/{privacy,support}
// with no top page.tsx) correctly DON'T resolve as /strength-cycle — that bare link 404s.
const hasTopPage = (seg) => existsSync(join(root, "src/app", seg, "page.tsx"));

// ── run ─────────────────────────────────────────────────────────────────────
const vendors = loadVendors();
const newsSlugs = loadNewsSlugs();
const peptideDataSlugs = loadPeptideDataSlugs();
const redirectPaths = await loadRedirectPaths();

// Per-family { linkPattern, resolver } table. resolve() returns how the link resolved
// ("dir" | "redirect" | "map" | "registry") or null when it is dead.
// Match an INTERNAL /<family>/<slug> link. Two internal forms count:
//   - site-relative   href="/news/foo"
//   - self-absolute   https://profpeptide.com/news/foo   (canonical/og/JSON-LD url)
// An EXTERNAL URL that merely contains the path — e.g. https://newsroom.heart.org/news/…
// — must NOT count. The leading (?<![:\w.-]) anchors the match at a delimiter (quote,
// space, paren, `(`), so a bare path spliced mid-external-URL can't match; the optional
// scheme+host is captured so a non-profpeptide host is filtered out below.
// m[1] = host (undefined for site-relative), m[2] = slug.
const linkPattern = (family) =>
  new RegExp(String.raw`(?<![:\w.-])(?:https?://([^/\s"')]+))?/${family}/([a-z0-9-]+)`, "g");
const INTERNAL_HOST = /^(www\.)?profpeptide\.com$/;

const FAMILIES = [
  {
    name: "coupons",
    // Redirect first: next.config redirects run BEFORE page routing, so a retired
    // vendor (its page dir kept on disk but 301'd to /coupons) resolves via redirect,
    // not via the dir that never gets served.
    resolve: (slug) =>
      redirectPaths.two.has(`/coupons/${slug}`) ? "redirect" : hasPageDir("coupons", slug) ? "dir" : null,
    // Keep the coupons dead-link detail exactly as before: vendors.ts context.
    detail: (slug) =>
      [
        Object.prototype.hasOwnProperty.call(vendors, slug) ? "in vendors.ts" : "NOT in vendors.ts",
        vendors[slug]?.retired ? "retired" : "not retired",
        hasPageDir("coupons", slug) ? "page dir exists" : "no page dir",
        redirectPaths.has(`/coupons/${slug}`) ? "has redirect" : "no redirect rule",
      ].join(", "),
  },
  {
    name: "peptides",
    resolve: (slug) =>
      hasPageDir("peptides", slug) ? "dir" : peptideDataSlugs.has(slug) ? "map" : null,
    detail: (slug) =>
      `no page dir, not in peptideData map (${peptideDataSlugs.size} slug${peptideDataSlugs.size === 1 ? "" : "s"})`,
  },
  {
    name: "supplements",
    resolve: (slug) => (hasPageDir("supplements", slug) ? "dir" : null),
    detail: () => "no page dir",
  },
  {
    name: "compare",
    resolve: (slug) => (hasPageDir("compare", slug) ? "dir" : null),
    detail: () => "no page dir",
  },
  {
    name: "guides",
    resolve: (slug) => (hasPageDir("guides", slug) ? "dir" : null),
    detail: () => "no page dir",
  },
  {
    name: "news",
    // Redirect first (same precedence reason as coupons), then a real page dir, then
    // the news.ts registry.
    resolve: (slug) =>
      redirectPaths.two.has(`/news/${slug}`)
        ? "redirect"
        : hasPageDir("news", slug)
        ? "dir"
        : newsSlugs.has(slug)
        ? "registry"
        : null,
    detail: (slug) => "no page dir, not in news.ts registry, no redirect rule",
  },
  {
    // Single-segment top-level routes: /bioregulators, /calculator, /faq, /glossary,
    // /vendors, /about, … Before this family, a bare /<segment> link (a pillar page, a
    // tool page, a legal page) was validated by NOTHING — the same silent-404 class the
    // two-segment families already guard, one level up.
    //
    // A one-segment /<word> is far more ambiguous than /<family>/<slug>: Tailwind opacity
    // (bg-[#333]/40), regex literals (/\s+/g), and prose all contain a slash+word. So this
    // pattern matches ONLY the two shapes a real internal single-segment link ever takes,
    // and requires a path terminator on the right:
    //   A) relative, quoted   — "/about"     (?<=["'`])          before the slash
    //   B) self-absolute      — https://profpeptide.com/about    host captured in m[1]
    // The right-side (?=["'`#?\s)]|$) accepts only a quote / #anchor / ?query / space / )
    // / EOL after the segment, which rejects /<a>/<b> (two-segment, owned above) and
    // /<seg>.<ext> (a /public asset like og-image.png). m[1]=host (absolute branch only,
    // filtered by INTERNAL_HOST below), m[2]=slug — same group convention as linkPattern.
    name: "top-level",
    pattern: new RegExp(
      String.raw`(?:(?<=["'` + "`" + String.raw`])|https?://([^/\s"'` + "`" + String.raw`)]+))/([a-z0-9-]+)(?=["'` + "`" + String.raw`#?\s)]|$)`,
      "g"
    ),
    resolve: (seg) =>
      hasTopPage(seg) ? "dir" : redirectPaths.one.has(`/${seg}`) ? "redirect" : null,
    detail: (seg) => "no src/app/" + seg + "/page.tsx, no redirect rule",
  },
];

const files = walk(SCAN_DIR);
const REASON_LABEL = { redirect: "via redirect", map: "via peptideData map", registry: "via news registry" };
// The href a slug renders to: /<seg> for the single-segment family, /<family>/<slug> otherwise.
const linkOf = (fam, slug) => (fam.name === "top-level" ? `/${slug}` : `/${fam.name}/${slug}`);

let anyDead = false;
const summaries = [];
const failures = [];

for (const fam of FAMILIES) {
  const pattern = fam.pattern ?? linkPattern(fam.name);
  const links = [];
  for (const file of files) {
    const lines = stripComments(readFileSync(file, "utf8")).split("\n");
    lines.forEach((line, i) => {
      let m;
      pattern.lastIndex = 0;
      while ((m = pattern.exec(line)) !== null) {
        if (m[1] && !INTERNAL_HOST.test(m[1])) continue; // external URL — not an internal link
        links.push({ file: relative(root, file), line: i + 1, slug: m[2] });
      }
    });
  }

  const uniqueSlugs = new Set(links.map((l) => l.slug)).size;
  const dead = [];
  const reasonCounts = {};
  for (const link of links) {
    const reason = fam.resolve(link.slug);
    if (reason === null) dead.push(link);
    else if (reason !== "dir") reasonCounts[reason] = (reasonCounts[reason] || 0) + 1;
  }

  const note = Object.entries(reasonCounts)
    .map(([r, n]) => `${n} ${REASON_LABEL[r]}`)
    .join(", ");
  if (dead.length) {
    anyDead = true;
    failures.push({ fam, dead });
    summaries.push(
      `${fam.name.padEnd(12)} ${String(links.length).padStart(4)} link(s) / ${String(uniqueSlugs).padStart(3)} slug(s) — ${dead.length} DEAD`
    );
  } else {
    summaries.push(
      `${fam.name.padEnd(12)} ${String(links.length).padStart(4)} link(s) / ${String(uniqueSlugs).padStart(3)} slug(s) — all resolve${note ? ` (${note})` : ""}`
    );
  }
}

if (anyDead) {
  console.error("check:links FAILED — dead internal link(s):\n");
  for (const { fam, dead } of failures) {
    console.error(`── ${fam.name} (${dead.length}) ──`);
    for (const d of dead) {
      console.error(`  ✗ ${d.file}:${d.line}  →  ${linkOf(fam, d.slug)}`);
      console.error(`      ${fam.detail(d.slug)} — resolves to nothing (would 404)`);
    }
  }
  console.error("\nPer-family summary:");
  for (const s of summaries) console.error("  " + s);
  console.error("\nFix: remove each link, or repoint it to a live page.");
  process.exit(1);
}

console.log("check:links OK — all internal links resolve.");
for (const s of summaries) console.log("  " + s);
