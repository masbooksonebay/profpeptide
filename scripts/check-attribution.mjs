// scripts/check-attribution.mjs — the profile-listing attribution guard.
//
// Peptide profiles promote vendors via two surfaces: WhereToBuy (src/data/peptide-vendors.json)
// and VendorHighlightBlock (inline `highlights={[...]}` in each profile page). Both must promote
// ONLY vendors in the attribution allowlist (src/data/attribution.ts → LISTED): a vendor whose
// discount code works at checkout but credits nobody earns nothing and costs the click.
//
// The components filter through LISTED at render, but that is invisible — a cut slug left in the
// source lists would render nothing yet silently rot. This guard makes the SOURCE honest: it
// FAILS (exit 1) if either surface lists a slug outside LISTED, naming the file and the slug.
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

const violations = [];
const emptyProfiles = new Set();

// ── surface 1: WhereToBuy (peptide-vendors.json) ────────────────────────────────
const wtbPath = "src/data/peptide-vendors.json";
const wtb = JSON.parse(readFileSync(join(root, wtbPath), "utf8")).peptides;
const wtbSurvivors = {};
for (const [pep, entry] of Object.entries(wtb)) {
  const slugs = (entry.vendors || []).map((e) => e.slug);
  wtbSurvivors[pep] = slugs.filter((s) => LISTED.has(s)).length;
  for (const s of slugs) {
    if (!LISTED.has(s)) violations.push(`${wtbPath} — peptide "${pep}" lists non-attributed vendor "${s}"`);
  }
}

// ── surface 2: VendorHighlightBlock (inline highlights in each profile page) ─────
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

// ── tracked backfill: profiles whose every vendor surface is empty ──────────────
const allProfiles = new Set([...Object.keys(wtb), ...hasHb]);
for (const p of allProfiles) {
  const w = wtbSurvivors[p] ?? 0;
  const h = hbSurvivors[p] ?? 0;
  if (w + h === 0) emptyProfiles.add(p);
}

if (violations.length) {
  console.error("check:attribution FAILED — a profile surface promotes a non-attributed vendor:\n");
  for (const v of violations) console.error(`  ✗ ${v}`);
  console.error("\nEvery vendor promoted on a profile must be in LISTED (src/data/attribution.ts).");
  console.error("Fix: remove the slug from the surface, or add it to PROVEN/GRACED if it now qualifies.");
  process.exit(1);
}

console.log(`check:attribution OK — every promoted vendor is in LISTED (${LISTED.size} allowed).`);

if (emptyProfiles.size) {
  console.warn(`\n  ⚠ TRACKED BACKFILL — ${emptyProfiles.size} profile(s) have no attributed vendor to promote`);
  console.warn(`    (block hidden by the floor rule; add a proven vendor to restore it):`);
  console.warn(`    ${[...emptyProfiles].sort().join(", ")}`);
}
