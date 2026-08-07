// scripts/check-surfaces.mjs — completeness guard for HAND-MAINTAINED vendor surfaces.
//
// Some surfaces enumerate vendors from a hand-typed local array rather than the registry, and
// at least one — /vendor-testing-index — advertises itself as "a side-by-side record of EVERY
// vendor's documented third-party testing." When a new vendor is added to the registry but not
// to that array, the claim quietly goes false. This surfaces the gap.
//
// WARN ONLY (always exit 0). Same reasoning as the stamp-age check: a missing row is cosmetic;
// an undeployable site is not. This never blocks a build — it just prints what's out of sync.
//
// Scope: ONLY surfaces that CLAIM COMPLETENESS. Editorial surfaces (/best-peptide-vendors is a
// curated ranking; peptide-profile vendor cards are a curated top-5) are intentionally NOT here —
// their omissions are a human call, not a drift bug.
//
// Run:  npm run check:surfaces   (also runs in the build chain; never fails it)

import ts from "typescript";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function execModule(relPath, label) {
  const { outputText } = ts.transpileModule(readFileSync(join(root, relPath), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const m = { exports: {} };
  const guard = (name) => { throw new Error(`${label} must stay import-free (saw require("${name}"))`); };
  new Function("module", "exports", "require", outputText)(m, m.exports, guard);
  return m.exports;
}

const { vendors } = execModule("src/data/vendors.ts", "vendors.ts");
const active = new Set(Object.entries(vendors).filter(([, v]) => !v.retired).map(([s]) => s));
const retired = new Set(Object.entries(vendors).filter(([, v]) => v.retired).map(([s]) => s));

// Hand-maintained surfaces that claim to cover EVERY vendor. Each: a label + the page whose
// local array is parsed for `slug: "..."` entries. Add a surface here only if it claims completeness.
const SURFACES = [
  { label: "/vendor-testing-index", path: "src/app/vendor-testing-index/page.tsx" },
];

// A surface that DERIVES its rows from the registry (imports `vendors` and iterates it) is
// complete by construction and can never drift — treat it as always in sync.
function isRegistryDerived(src) {
  return /from ["']@\/data\/vendors["']/.test(src) && /Object\.(entries|values|keys)\(vendors\)/.test(src);
}

let warned = false;
for (const s of SURFACES) {
  const src = readFileSync(join(root, s.path), "utf8");
  if (isRegistryDerived(src)) {
    console.log(`check:surfaces OK — ${s.label} derives from the registry (all ${active.size} active vendors, complete by construction).`);
    continue;
  }
  const listed = new Set([...src.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map((m) => m[1]));
  const missing = [...active].filter((slug) => !listed.has(slug)).sort();
  const stale = [...listed].filter((slug) => retired.has(slug) || !vendors[slug]).sort();
  if (missing.length || stale.length) {
    warned = true;
    const bar = "-".repeat(74);
    console.warn(`\n${bar}`);
    console.warn(`check:surfaces WARNING — ${s.label} claims completeness but is out of sync:`);
    if (missing.length) console.warn(`  MISSING ${missing.length} active vendor(s): ${missing.join(", ")}`);
    if (stale.length) console.warn(`  STALE (retired/unknown, still listed): ${stale.join(", ")}`);
    console.warn(`  (warning only — build continues. Add/remove rows in ${s.path}.)`);
    console.warn(bar);
  } else {
    console.log(`check:surfaces OK — ${s.label} covers all ${active.size} active vendors.`);
  }
}

if (!warned) console.log("check:surfaces OK — all completeness surfaces in sync.");

// ── Verified-stamp completeness (WARN) ───────────────────────────────────────
// Every active coupon page's code card renders "✓ Verified <month>" ONLY when its slug is in
// VENDORS_VERIFIED_SLUGS (the machine set written by a clean check:vendors run). A vendor
// onboarded AFTER the last check:vendors run ships a coupon page with NO verified pill while its
// meta still says "verified and working" — that's how real-peptides shipped stampless. The build
// chain does not run check:vendors (it hits live sites), so nothing caught it. This does: flag any
// active vendor with a live coupon page that is absent from the verified set → re-run check:vendors.
// WARN only (matches this file's discipline); a genuinely dead link is excluded from the set AND
// fails check:vendors (exit 1), so the honest fix there is to retire the vendor, not silence this.
{
  const { VENDORS_VERIFIED_SLUGS } = execModule("src/data/vendors-verified.generated.ts", "vendors-verified.generated.ts");
  const verified = new Set(VENDORS_VERIFIED_SLUGS);
  const unstamped = [...active]
    .filter((slug) => existsSync(join(root, `src/app/coupons/${slug}/page.tsx`)) && !verified.has(slug))
    .sort();
  if (unstamped.length) {
    const bar = "-".repeat(74);
    console.warn(`\n${bar}`);
    console.warn(`check:surfaces WARNING — ${unstamped.length} active coupon page(s) missing the verified stamp:`);
    console.warn(`  ${unstamped.join(", ")}`);
    console.warn(`  Their code card renders no "✓ Verified" pill (absent from VENDORS_VERIFIED_SLUGS).`);
    console.warn(`  Fix: run \`npm run check:vendors\` to re-verify links and regenerate the stamp. (warning only.)`);
    console.warn(bar);
  } else {
    console.log(`check:surfaces OK — all ${active.size} active coupon pages carry the verified stamp.`);
  }
}

// ── Derived-count drift (WARN) ───────────────────────────────────────────────
// The canonical count constants must equal the number of static routes actually on disk. If a
// /peptides/<slug> or /supplements/<slug> dir is added without the taxonomy entry (or vice-versa),
// the constant silently under/over-counts while the source and the routes disagree. This asserts
// they match. WARN only: a mismatch is a data-sync bug to fix at the source, not a deploy blocker
// (and check-counts.mjs already fails the build on the hardcoded-literal side of the problem).
function staticRouteCount(relDir) {
  return readdirSync(join(root, relDir), { withFileTypes: true }).filter(
    (d) =>
      d.isDirectory() &&
      !d.name.startsWith("[") &&
      !d.name.startsWith("_") &&
      existsSync(join(root, relDir, d.name, "page.tsx")),
  ).length;
}

const { profileCount } = execModule("src/data/peptideCategories.ts", "peptideCategories.ts");
const { supplementCount } = execModule("src/data/supplements.ts", "supplements.ts");

const driftChecks = [
  { label: "profileCount", constant: profileCount, dir: "src/app/peptides", routes: staticRouteCount("src/app/peptides") },
  { label: "supplementCount", constant: supplementCount, dir: "src/app/supplements", routes: staticRouteCount("src/app/supplements") },
];
for (const c of driftChecks) {
  if (c.constant === c.routes) {
    console.log(`check:surfaces OK — ${c.label} (${c.constant}) matches ${c.dir} route count (${c.routes}).`);
  } else {
    const bar = "-".repeat(74);
    console.warn(`\n${bar}`);
    console.warn(`check:surfaces WARNING — ${c.label} drift: constant=${c.constant} but ${c.dir} has ${c.routes} route(s).`);
    console.warn(`  Fix the SOURCE (the data module or the missing/extra page dir), not the number. (warning only — build continues.)`);
    console.warn(bar);
  }
}
// Always succeed — warn, never fail.
