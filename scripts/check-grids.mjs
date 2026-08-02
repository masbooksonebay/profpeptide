// scripts/check-grids.mjs — the empty-grid / thin-page guard.
//
// The product grid (src/components/VendorProductGrid.tsx) renders one row per price
// entry. A coupon page that renders it for a vendor with ZERO price rows ships an empty
// table; and an active vendor with a coupon page but no price data at all is a "thin
// page" — a registry entry + coupon page with nothing behind it. Both classes shipped
// during the four-vendor onboarding gap. This makes them loud instead of silent.
//
// Pure LOCAL analysis — reads vendors.ts, prices.generated.ts, the price-pull registry's
// BLOCKED set, and the coupon page files. No network, no scraping — safe on every build.
//
// FAILS (exit 1) when:
//   1. a coupon page renders <VendorProductGrid> but the vendor has 0 price rows
//      (an empty table would render) — ALWAYS a hard fail, never allowlisted; OR
//   2. an active (non-retired, non-BLOCKED) vendor has a coupon page and 0 price rows
//      and is NOT on the KNOWN_ZERO_ROW baseline below.
//
// KNOWN_ZERO_ROW is the current onboarding backlog — vendors with a coupon page but no
// price pull yet. Baselined so the build stays green while the gap stays visible; a NEW
// zero-row vendor (a fifth) still fails. Remove a slug here to force onboard-or-remove;
// onboard a vendor (rows appear) and the stale-entry check below will tell you to drop it.
//
// Run:  npm run check:grids
// Exit: 0 = clean (backlog only); 1 = at least one real violation.

import ts from "typescript";
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const vendorsPath = join(root, "src/data/vendors.ts");
const pricesGenPath = join(root, "src/data/prices.generated.ts");
const registryPath = join(root, "scripts/price-pull/pricepull/registry.py");

// The onboarding backlog — a coupon page exists but the price pull hasn't run yet.
// Kept in lockstep with reality by the stale-entry check at the end.
const KNOWN_ZERO_ROW = new Set([
  "integrative-peptides",     // in registry (woo) but scope filter yields 0 peptide rows
  "peptide-giants",           // new coupon page; not yet onboarded to the price pull
  "purerx-peptides",          // new coupon page; not yet onboarded to the price pull
]);

// ── loaders ─────────────────────────────────────────────────────────────────
// Execute an import-light TS data module (transpile → CJS → run), same pattern as
// check-links.mjs. Type-only imports elide; a require guard trips on real requires.
function execModule(path, label) {
  const { outputText } = ts.transpileModule(readFileSync(path, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const moduleObj = { exports: {} };
  const requireGuard = (name) => {
    throw new Error(`${label} must stay import-free for check:grids (saw require("${name}"))`);
  };
  new Function("module", "exports", "require", outputText)(moduleObj, moduleObj.exports, requireGuard);
  return moduleObj.exports;
}

const vendors = execModule(vendorsPath, "vendors.ts").vendors;
const entries = execModule(pricesGenPath, "prices.generated.ts").generatedPriceEntries;
if (!vendors || !Array.isArray(entries)) {
  console.error("check:grids: could not load vendors.ts / prices.generated.ts");
  process.exit(1);
}

// BLOCKED = vendors the price pull can't reach (login-gated / unpullable). Parsed from the
// registry so the two can't drift. These are legitimately zero-row and must NOT be flagged.
function loadBlocked() {
  const src = readFileSync(registryPath, "utf8");
  const m = src.match(/BLOCKED\s*=\s*\{([\s\S]*?)\n\}/);
  const set = new Set();
  if (m) for (const k of m[1].matchAll(/"([a-z0-9-]+)"\s*:/g)) set.add(k[1]);
  return set;
}
const blocked = loadBlocked();

// rows per vendor
const rowsByVendor = {};
for (const e of entries) rowsByVendor[e.vendor] = (rowsByVendor[e.vendor] || 0) + 1;

const couponPage = (slug) => join(root, "src/app/coupons", slug, "page.tsx");
const rendersGrid = (slug) =>
  existsSync(couponPage(slug)) && readFileSync(couponPage(slug), "utf8").includes("<VendorProductGrid");

// ── run ───────────────────────────────────────────────────────────────────────
const failures = [];
const backlog = [];
const staleAllowlist = [];

for (const slug of Object.keys(vendors)) {
  const v = vendors[slug];
  const hasPage = existsSync(couponPage(slug));
  const rows = rowsByVendor[slug] || 0;

  // (1) renders the grid but has no rows → empty table. Always a hard fail.
  if (rendersGrid(slug) && rows === 0) {
    failures.push(`${slug} — renders <VendorProductGrid> but has 0 price rows (empty table)`);
    continue;
  }

  // (2) active vendor + coupon page + 0 rows → thin page (unless BLOCKED or baselined).
  if (hasPage && rows === 0 && !v.retired && !blocked.has(slug)) {
    if (KNOWN_ZERO_ROW.has(slug)) backlog.push(slug);
    else failures.push(`${slug} — active vendor with a coupon page but 0 price rows (not allowlisted)`);
  }
}

// stale baseline: a KNOWN_ZERO_ROW slug that now has rows, is retired, is BLOCKED, or lost
// its page — the allowlist entry is no longer needed and should be removed.
for (const slug of KNOWN_ZERO_ROW) {
  const v = vendors[slug];
  const rows = rowsByVendor[slug] || 0;
  if (!v || rows > 0 || v.retired || blocked.has(slug) || !existsSync(couponPage(slug))) {
    staleAllowlist.push(slug);
  }
}

if (failures.length) {
  console.error("check:grids FAILED — empty grid / thin page:\n");
  for (const f of failures) console.error(`  ✗ ${f}`);
  console.error("\nFix: onboard the vendor to the price pull (add rows), remove the grid /");
  console.error("coupon page, mark it retired, or (backlog only) add it to KNOWN_ZERO_ROW.");
  process.exit(1);
}

console.log("check:grids OK — no empty grids or unaccounted thin pages.");
if (backlog.length) {
  console.log(`  known thin pages (baselined, awaiting price pull): ${backlog.sort().join(", ")}`);
}
if (blocked.size) {
  console.log(`  blocked vendors (unpullable, exempt): ${[...blocked].sort().join(", ")}`);
}
if (staleAllowlist.length) {
  console.log(`  ⚠ stale KNOWN_ZERO_ROW entries (now onboarded/retired/blocked — remove them): ${staleAllowlist.sort().join(", ")}`);
}
