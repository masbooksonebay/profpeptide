// scripts/check-orphan-pages.mjs — the orphaned-content guard (WARN ONLY).
//
// check:prices-orphan already fails the build for an orphaned /prices page (zero hub entry). Nothing
// covered the OTHER indexable content types — /peptides profiles + blends, /compare, /supplements,
// /vendor-testing-index — so a page reachable by ~1 internal link (a blend nobody links, a compare
// page only its two components touch) shipped invisibly. This surfaces that class.
//
// TWO CHECKS, both WARN ONLY (exit 0) — same severity class as check:surfaces / check:freshness's
// stamp age / check:verified-membership. An under-linked page is cosmetic-adjacent (a discovery/SEO
// weakness), not a correctness bug; it must never block an unrelated deploy.
//
//   A. LOW-INBOUND — an indexable content page with <= ORPHAN_MAX distinct indexable inbound
//      internal links. Threshold is 1 (zero AND one are true orphans). NOT higher: /compare pages
//      have a structural ceiling of ~2 components + a hub, so failing at <=4 would flag every
//      compare page for a ceiling, not a defect — that is a design fact, not a bug to gate on.
//
//   B. BLEND BACK-LINK DRIFT — the "Related Blends" back-links are HAND-WRITTEN JSX per profile,
//      driven by BLEND_COMPONENT_SLUGS (src/data/compounds.ts) as the source of truth but NOT
//      rendered from it. So adding a blend to that map does not auto-add the links. This reads the
//      map and warns when a component profile is missing a link to a blend it's in — closing the
//      silent-drop gap where a new blend's back-links quietly never get written.
//
// Reads prerendered HTML, so it runs in the POST-build section (after next build), like
// check:sitemap-coverage. Run: npm run check:orphan-pages
// Exit: always 0.

import ts from "typescript";
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const APP = join(root, ".next/server/app");
const ORPHAN_MAX = 1; // warn when distinct indexable inbound <= this (0 and 1 are true orphans)

// Content route types this guard covers (prices has its own orphan guard).
const COVERED = (rel) =>
  rel.startsWith("peptides/") ||
  rel.startsWith("compare/") ||
  rel.startsWith("supplements/") ||
  rel === "vendor-testing-index";

// ── gather all prerendered HTML once ────────────────────────────────────────────
function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (name.endsWith(".html")) out.push(p);
  }
  return out;
}
if (!existsSync(APP)) {
  console.log("check:orphan-pages SKIPPED — no .next build found (runs after next build).");
  process.exit(0);
}
const files = walk(APP);
const noindex = (h) => /name="robots"[^>]*content="[^"]*noindex/.test(h);

// page rel-slug (e.g. "peptides/bpc-157") -> { indexable, html }
const pages = new Map();
for (const f of files) {
  const rel = relative(APP, f).replace(/\.html$/, "");
  const html = readFileSync(f, "utf8");
  pages.set(rel, { indexable: !noindex(html), html });
}

// inbound[target] = count of DISTINCT indexable source pages with a real <a href="/target">
const inbound = new Map();
for (const [rel, { indexable, html }] of pages) {
  if (!indexable) continue; // only indexable pages pass link equity
  const targets = new Set(
    [...html.matchAll(/<a\b[^>]*href="\/([a-z0-9/-]+)"/g)].map((m) => m[1]),
  );
  for (const t of targets) {
    if (t === rel) continue; // self
    inbound.set(t, (inbound.get(t) ?? 0) + 1);
  }
}

// ── A. LOW-INBOUND ───────────────────────────────────────────────────────────────
const orphans = [];
for (const [rel, { indexable }] of pages) {
  if (!indexable || !COVERED(rel)) continue;
  const n = inbound.get(rel) ?? 0;
  if (n <= ORPHAN_MAX) orphans.push({ rel, n });
}
orphans.sort((a, b) => a.n - b.n || a.rel.localeCompare(b.rel));

// ── B. BLEND BACK-LINK DRIFT ───────────────────────────────────────────────────────
function execModule(relPath) {
  const { outputText } = ts.transpileModule(readFileSync(join(root, relPath), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const m = { exports: {} };
  new Function("module", "exports", "require", outputText)(m, m.exports, () => ({}));
  return m.exports;
}
const { BLEND_COMPONENT_SLUGS } = execModule("src/data/compounds.ts");
const drift = [];
for (const [blend, comps] of Object.entries(BLEND_COMPONENT_SLUGS ?? {})) {
  for (const c of comps) {
    const src = join(root, "src/app/peptides", c, "page.tsx");
    if (!existsSync(src)) continue; // component has no profile — nothing to link from
    if (!readFileSync(src, "utf8").includes(`href="/peptides/${blend}"`))
      drift.push(`${c} → ${blend}`);
  }
}

// ── report ─────────────────────────────────────────────────────────────────────
if (orphans.length) {
  console.warn(`\ncheck:orphan-pages — ${orphans.length} indexable content page(s) with <= ${ORPHAN_MAX} inbound internal link(s):`);
  for (const o of orphans) console.warn(`    • ${o.rel} (${o.n})`);
}
if (drift.length) {
  console.warn(`\ncheck:orphan-pages — ${drift.length} Related-Blends back-link(s) in BLEND_COMPONENT_SLUGS not yet written to the profile JSX:`);
  for (const d of drift) console.warn(`    • ${d}`);
  console.warn(`    Fix: add the <Link> to that profile's "Related Blends" box.`);
}
console.log(
  `check:orphan-pages OK — scanned ${[...pages.keys()].filter((r) => COVERED(r) && pages.get(r).indexable).length} indexable content pages; ` +
    `${orphans.length} low-inbound, ${drift.length} blend back-link drift (warnings only).`,
);
