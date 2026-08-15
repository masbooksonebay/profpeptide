// scripts/check-verified-membership.mjs — the Verified-pill membership guard (WARN ONLY).
//
// The coupon-page "✓ Verified <month>" pill renders only when a vendor's slug is in
// VENDORS_VERIFIED_SLUGS (src/data/vendors-verified.generated.ts) — the machine-written set
// from the last clean check:vendors run. A vendor added to the registry AFTER that run is
// absent from the set, so its page ships with NO Verified pill and NO warning — exactly how
// capstone-peptides shipped pill-less (added 2026-08-15, four days after the 08-10 stamp).
//
// This makes that gap loud. Pure LOCAL set-difference (no network): it lists every active,
// non-retired vendor whose slug is missing from the verified set.
//
// WARN ONLY (always exit 0). A brand-new vendor LEGITIMATELY isn't verified until check:vendors
// runs — and that run needs live network access to ~48 third-party sites and re-stamps the shared
// date. Failing the build would couple every new-vendor deploy to that network operation; and a
// missing pill is cosmetic (a reassurance element, not incorrect information). Same severity class
// as check:surfaces / check:freshness's stamp-age warning: surface it, never block a deploy.
//   Fix when it fires: run `npm run check:vendors`, then commit vendors-verified.generated.ts
//   (a clean run adds the new vendor and advances the stamp).
//
// Run:  npm run check:verified-membership   (also runs in the build chain, warn-only)

import ts from "typescript";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// Execute an import-free TS data module (transpile → CJS → run); a real require() throws,
// same pattern as check-freshness / check-grids — these modules must stay import-free.
function execModule(relPath, label) {
  const { outputText } = ts.transpileModule(readFileSync(join(root, relPath), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const moduleObj = { exports: {} };
  const requireGuard = (name) => {
    throw new Error(`${label} must stay import-free for check:verified-membership (saw require("${name}"))`);
  };
  new Function("module", "exports", "require", outputText)(moduleObj, moduleObj.exports, requireGuard);
  return moduleObj.exports;
}

const { vendors } = execModule("src/data/vendors.ts", "vendors.ts");
const { VENDORS_VERIFIED_SLUGS } = execModule(
  "src/data/vendors-verified.generated.ts",
  "vendors-verified.generated.ts",
);
const verified = new Set(VENDORS_VERIFIED_SLUGS);

const active = Object.entries(vendors)
  .filter(([, v]) => !v.retired)
  .map(([slug]) => slug);

// PRIMARY: active vendors whose page will render no Verified pill.
const missing = active.filter((slug) => !verified.has(slug)).sort();

// SECONDARY (informational): slugs still in the set that are no longer active (retired/removed) —
// harmless (a retired page redirects), but worth surfacing so the set can be tidied on the next run.
const stale = [...verified].filter((slug) => !vendors[slug] || vendors[slug].retired).sort();

if (missing.length) {
  const bar = "!".repeat(74);
  console.warn(`\n${bar}`);
  console.warn(`!!  MISSING VERIFIED PILL (warning — build continues, deploys not blocked)`);
  console.warn(`!!  ${missing.length} active vendor(s) absent from VENDORS_VERIFIED_SLUGS — their`);
  console.warn(`!!  /coupons/<slug> page renders no "✓ Verified" pill:`);
  for (const slug of missing) console.warn(`!!      • ${slug}`);
  console.warn(`!!  Fix: npm run check:vendors, then commit src/data/vendors-verified.generated.ts`);
  console.warn(`${bar}\n`);
}
if (stale.length) {
  console.warn(`check:verified-membership note — ${stale.length} retired/removed slug(s) still in the set (harmless): ${stale.join(", ")}`);
}

console.log(
  `check:verified-membership OK — ${active.length} active vendor(s), ${active.length - missing.length} in the verified set` +
    `${missing.length ? `, ${missing.length} MISSING a pill (see warning above)` : " (all have a Verified pill)"}.`,
);
