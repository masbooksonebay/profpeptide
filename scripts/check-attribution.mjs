// scripts/check-attribution.mjs — the profile-listing attribution guard.
//
// Peptide profiles promote vendors through VendorHighlightBlock. Its featured vendors are DERIVED
// from price rows, but each page may still carry an inline `highlights={[...]}` prop as a note
// source (and as the fallback vendor list for blends/combos the price grid can't track). Every
// slug in that prop must be in the attribution allowlist (src/data/attribution.ts → LISTED): a
// vendor whose discount code works at checkout but credits nobody earns nothing and costs the click.
//
// The component filters through LISTED at render, but that is invisible — a cut slug left in a prop
// would render nothing yet silently rot. This guard makes the SOURCE honest: it FAILS (exit 1) if
// a profile's highlights prop lists a slug outside LISTED, naming the file and the slug.
// (The dead WhereToBuy / peptide-vendors.json surface was removed; only inline highlights remain.)
//
// It also prints the TRACKED BACKFILL list: profiles whose vendor surfaces are now empty (block
// hidden by the floor rule) and need a proven vendor added. That is a report, never a failure —
// an empty profile must not block an unrelated deploy.
//
// COUPON PAGES ARE OUT OF SCOPE — this only governs profile promotion, not /coupons/<slug>.
//
// Run:  npm run check:attribution
// Exit: 0 = every promoted slug is in LISTED; 1 = at least one non-listed slug in a surface.

import ts from "typescript";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// Load LISTED from the TS data module (transpile → CJS → run; it is import-free by design).
function execModule(path, label) {
  const { outputText } = ts.transpileModule(readFileSync(path, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const moduleObj = { exports: {} };
  const requireGuard = (name) => {
    throw new Error(`${label} must stay import-free for check:attribution (saw require("${name}"))`);
  };
  new Function("module", "exports", "require", outputText)(moduleObj, moduleObj.exports, requireGuard);
  return moduleObj.exports;
}

const { LISTED } = execModule(join(root, "src/data/attribution.ts"), "attribution.ts");
if (!(LISTED instanceof Set) || LISTED.size === 0) {
  console.error("check:attribution: could not load LISTED from src/data/attribution.ts");
  process.exit(1);
}

// Price data: which LISTED vendors demonstrably carry each compound (a price row), and which
// compounds are indexable (>=3 price vendors → a /prices page + CTA). Drives the research list.
const listedPriceVendors = {}; // compound -> Set of LISTED vendors with a price row
{
  const gen = readFileSync(join(root, "src/data/prices.generated.ts"), "utf8");
  for (const m of gen.matchAll(/\{ compound: "([^"]+)",[^}]*? vendor: "([^"]+)"/g)) {
    if (!LISTED.has(m[2])) continue;
    (listedPriceVendors[m[1]] ??= new Set()).add(m[2]);
  }
}
const indexable = new Set(
  JSON.parse(readFileSync(join(root, "src/data/prices.index.json"), "utf8"))
    .filter((c) => c.indexable)
    .map((c) => c.slug),
);
// Blends price on a separate total-price surface (blends.index.json). A blend with an indexable
// price page renders a price CTA, so it is no longer a research-list content gap.
const blendIndexable = new Set(
  JSON.parse(readFileSync(join(root, "src/data/blends.index.json"), "utf8"))
    .filter((b) => b.indexable)
    .map((b) => b.slug),
);
const priceBacked = (slug) => (listedPriceVendors[slug]?.size ?? 0);

const violations = [];

// ── VendorHighlightBlock: inline highlights (note source + blend/combo fallback) ─
const pepDir = join(root, "src/app/peptides");
const hbSurvivors = {};
const hasHb = new Set();
for (const slug of readdirSync(pepDir)) {
  const page = join(pepDir, slug, "page.tsx");
  if (!existsSync(page)) continue;
  const src = readFileSync(page, "utf8");
  if (!src.includes("<VendorHighlightBlock")) continue;
  hasHb.add(slug);
  const m = src.match(/highlights=\{\[([\s\S]*?)\]\}/);
  const slugs = m ? [...m[1].matchAll(/slug:\s*"([^"]+)"/g)].map((x) => x[1]) : [];
  hbSurvivors[slug] = slugs.filter((s) => LISTED.has(s)).length;
  for (const s of slugs) {
    if (!LISTED.has(s)) violations.push(`src/app/peptides/${slug}/page.tsx — highlights list non-attributed vendor "${s}"`);
  }
}

// ── research list: profiles the price grid can't stock a vendor block for ────────
// The vendor block is DERIVED from price rows. A compound with no LISTED price-row vendor
// (notably blends/combos the per-compound grid doesn't track) renders either: its hand-curated
// fallback (curation-only), a bare price CTA (cta-only, if indexable), or nothing at all. All
// three are content gaps needing single-SKU vendor research (or the parked blend-price surface).
const BLENDS = new Set([
  "glow", "klow", "wolverine-stack", "aod-9604-mots-c", "semax-selank", "cagrisema",
  "gh-stack", "kpv-bpc-157", "nad-mots-c-5-amino-1mq", "pt-141-oxytocin",
  "semaglutide-bpc-157", "tesamorelin-ipamorelin", "tirzepatide-bpc-157",
  "cjc-1295-dac-ipamorelin", "mk-677-ipamorelin", "sermorelin-ipamorelin",
]);
const research = { nothing: [], cta: [], curation: [] };
for (const slug of readdirSync(pepDir)) {
  if (!existsSync(join(pepDir, slug, "page.tsx"))) continue;
  if (priceBacked(slug) > 0) continue; // derivation stocks the block — healthy
  if (blendIndexable.has(slug)) continue; // blend price surface resolves it (CTA renders)
  const curated = hbSurvivors[slug] ?? 0;
  const tag = BLENDS.has(slug) ? " [blend/combo — parked price surface]" : "";
  if (curated > 0) research.curation.push(`${slug}${tag}`);
  else if (indexable.has(slug)) research.cta.push(`${slug}${tag}`);
  else research.nothing.push(`${slug}${tag}`);
}

if (violations.length) {
  console.error("check:attribution FAILED — a profile surface promotes a non-attributed vendor:\n");
  for (const v of violations) console.error(`  ✗ ${v}`);
  console.error("\nEvery vendor promoted on a profile must be in LISTED (src/data/attribution.ts).");
  console.error("Fix: remove the slug from the surface, or add it to PROVEN/GRACED if it now qualifies.");
  process.exit(1);
}

console.log(`check:attribution OK — every promoted vendor is in LISTED (${LISTED.size} allowed).`);

const researchTotal = research.nothing.length + research.cta.length + research.curation.length;
if (researchTotal) {
  console.warn(`\n  ⚠ RESEARCH LIST — ${researchTotal} profile(s) have no price-row vendor to derive a block from:`);
  if (research.nothing.length)
    console.warn(`    renders nothing (needs vendor research): ${research.nothing.sort().join(", ")}`);
  if (research.cta.length)
    console.warn(`    price CTA only, no vendor cards: ${research.cta.sort().join(", ")}`);
  if (research.curation.length)
    console.warn(`    hand-curated fallback (not price-backed): ${research.curation.sort().join(", ")}`);
}
