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
//      and is in NEITHER of the two lists below (UNREACHABLE / ONBOARDING_BACKLOG).
//
// Zero-row intent is split (see the two lists below) so "unpullable forever" and "not onboarded
// yet" are no longer the same silent exemption: UNREACHABLE is permanent + silent; ONBOARDING_
// BACKLOG is a dated, per-build WARNING (with age) that gets louder past the grace window but
// never fails the build on age alone — an overdue TODO must not block an unrelated deploy.
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

// Zero-row vendors fall into two intents — the fix for the silent-exemption defect (a flat
// allowlist couldn't tell "unpullable forever" from "shipped Tuesday, not onboarded yet", so
// every new vendor got a permanent silent pass by routine):
//
//   UNREACHABLE        — structurally never has rows (unpullable). Permanent, SILENT.
//   ONBOARDING_BACKLOG — has products but isn't pulled yet. WARNS every build with a reason and
//                        an age in days; the warning gets LOUDER past the grace window. It never
//                        FAILS the build on age alone — same severity rule as check:freshness's
//                        stamp-age warning: an overdue TODO must not block an unrelated deploy.
//
// A brand-new zero-row vendor in NEITHER list still HARD-FAILS (an unaccounted thin page). Once a
// backlog vendor's rows land, the stale-entry check flags it for removal.
const GRACE_DAYS = 30;

// Structurally unpullable → silent, permanent. (Vendors in the price-pull registry BLOCKED set —
// e.g. limitless — are exempted separately below and need no entry here.)
const UNREACHABLE = new Set([
  "integrative-peptides", // in the registry (woo) but the peptide scope filter yields 0 rows
]);

// Not onboarded YET — slug -> { reason, since: "YYYY-MM-DD" }. Loud + dated, never a silent pass.
// 99-purity + biopure onboarded 2026-08-04 (the "cinc/Cloudflare-403" labels were both wrong:
// 99-purity is Next.js+Payload with a public /api/products, and biopure's woo Store API is
// reachable with a browser UA) — removed the moment their rows landed.
const ONBOARDING_BACKLOG = {
  // Hydro Research onboarded 2026-08-26 (coupon page live). Login-gated storefront (product pages
  // require a free account), so no price-pull adapter yet — coupon-page-only, no /prices rows until
  // the gate/adapter is handled. GLP catalog uses coded names (H-(R/S/T/C) + blends), COA-decoded.
  "hydro-research":     { reason: "login-gated storefront (no price-pull adapter) — coupon-page-only, no /prices rows", since: "2026-08-26" },
  // Paradigm Peptides onboarded 2026-08-26 (coupon page live). Wix storefront — no Store API /
  // price-pull adapter — so coupon-page-only, no /prices rows. Gate B is Finnrick-anchored.
  "paradigm-peptides":  { reason: "Wix storefront (no Store API / price-pull adapter) — coupon-page-only, no /prices rows", since: "2026-08-26" },
  // NOVA reports prices in AED; the pull stored them as USD (~3.67x inflated). Pulled its rows
  // from price data as immediate mitigation. Blocked pending a currency decision (refuse non-USD
  // at pull / convert / render native) — see the currency-handling report.
  "nova-labs":          { reason: "non-USD (AED) — excluded from price data pending currency handling", since: "2026-08-04" },
  // Particle restored 2026-08 (coupon page only). Two blockers, same class as NOVA: prices are in
  // EUR (currency decision pending) AND it's PrestaShop with no price-pull adapter. Coupon page +
  // registry listing are live; no /prices rows by design until the currency decision lands.
  "particle-peptides":  { reason: "non-USD (EUR) + PrestaShop (no price-pull adapter) — coupon-page-only, no /prices rows pending currency handling", since: "2026-08-05" },
  // licensed-peptides — price-pulled 2026-08-15 (SINGLES only; 27 compounds / 53 rows; grid live).
  // The "supplies-first" concern was a default-sort artifact — per_page=100 surfaces all 91 products.
  // Blends + sprays HELD (build.SINGLES_ONLY) pending a routing fix; entry removed now that singles ship.
  // real-peptides / amp-peptides / improved-peptides — price-pulled 2026-08-10 (grids live); entries removed.
  // Onboarded 2026-08-10 from real per-lot certs (coupon page + registry live). Store went hard
  // login-walled 2026-08-09: no read-only price pull possible, and the pre-wall homepage snapshot
  // showed contradictory prices (GLP-3 RT 10mg $70 vs $75; GLOW $150 vs $155) — so NO price is
  // published and the coupon page renders NO grid. Thin-page WARN only until a reachable price source.
  "valkyrie-peptides":  { reason: "store hard login-walled 2026-08-09; no read-only price source + pre-wall prices self-contradicted — coupon-page-only, no grid", since: "2026-08-10" },
  // Onboarded 2026-08-15 (coupon page + registry live). Public woo Store API — catalog + per-vial
  // prices readable with no account — so a price pull IS possible later; held coupon-page-only
  // pending Mark's decision on whether Capstone enters the price grid. Coded GLPs (GLP-1S=Semaglutide
  // / GLP-2T=Tirzepatide / GLP-3R=Retatrutide) decode straight from the product names. COAs are a
  // public Accumark Labs library (per-lot, AccuVerify-checkable on the lab's own domain).
  // Onboarded 2026-08-27 (coupon page + registry live). GoAffPro program (accepted PP), code
  // 'profpeptide' (lowercase), 15% customer / 20% commission, Venmo Net-3. WooCommerce with a public
  // catalog, so a price pull IS possible later; held coupon-page-only for now. Binding assumption
  // (Mark): GoAffPro codes are generally bound — built without a check-0 pause; first commission proves it.
  "order-my-peptides":  { reason: "GoAffPro coupon-only build (WooCommerce, price pull possible later) — no /prices rows yet; code-binding unconfirmed, first commission proves it", since: "2026-08-27" },
  // Onboarded 2026-08-27 (coupon page + registry live). GoAffPro program (accepted PP), code
  // 'profpeptide' (lowercase), 10% customer / 15% commission. WooCommerce, per-product COAs (2 labs:
  // Freedom Diagnostics 2025 -> Bioviridian 2026). A product-EXCLUSION list exists on the GoAffPro
  // portal (contents unread, irrelevant to the coupon page). Price pull possible later; coupon-only for now.
  "athena-peptides":    { reason: "GoAffPro coupon-only build (WooCommerce, price pull possible later) — no /prices rows yet; commission has a product-exclusion list (unread)", since: "2026-08-27" },
  // Onboarded 2026-08-30 (coupon page + registry live). GoAffPro, code PROFPEPTIDE, 10% customer /
  // 20% commission. Open WooCommerce with a public Store API — 24 products read live — so a price
  // pull IS possible later; held coupon-page-only for now. Runs a near-sitewide sale (~20%) plus
  // automatic quantity discounts from 3 items, which a pull would have to account for.
  "alera-research":     { reason: "GoAffPro coupon-only build (open WooCommerce, price pull possible later) — no /prices rows yet; near-sitewide sale + quantity tiers need a sale-posture decision first", since: "2026-08-30" },
  // Onboarded 2026-08-30 (coupon page + registry live). GoAffPro, code PROFPEPTIDE, 15% customer /
  // 15% commission (they genuinely match — not a transcription error).
  // 🔴 Storefront is REGISTER-TO-BROWSE: every HTML catalog path serves "Login Required" and renders
  // zero product tiles. Its woo Store API is nonetheless open and returns 36 products, so a pull is
  // technically possible — but publishing prices a reader cannot verify without an account is a
  // decision for Mark, not a default. Coupon-page-only, no grid.
  "level-up-peptides":  { reason: "register-to-browse storefront (HTML catalog is login-walled; Store API open) — coupon-page-only, no grid pending a decision on publishing prices readers cannot see without an account", since: "2026-08-30" },
  // Onboarded 2026-08-30 (coupon page + registry live). GoAffPro, code profpeptide (rendered
  // uppercase on PP), 10% customer / 15% commission. Open WooCommerce, 58 products read live, so a
  // price pull IS possible later. Catalog mixes peptides with research chemicals/nootropics outside
  // PP's scope, and its GLP line is coded (MOG-3 R = Retatrutide from their own lot RT103 cert;
  // MOG-2 T left undecoded) — both need handling in a pull, so coupon-page-only for now.
  "moglabs":            { reason: "GoAffPro coupon-only build (open WooCommerce, price pull possible later) — no /prices rows yet; catalog mixes non-peptide research chemicals and the GLP line is partly undecoded", since: "2026-08-30" },
};

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

  // (2) active vendor + coupon page + 0 rows → thin page (unless BLOCKED).
  if (hasPage && rows === 0 && !v.retired && !blocked.has(slug)) {
    if (UNREACHABLE.has(slug)) continue;                     // structurally zero-row — silent, permanent
    else if (ONBOARDING_BACKLOG[slug]) backlog.push(slug);   // not-yet-onboarded — warned (with age) below
    else failures.push(`${slug} — active vendor with a coupon page but 0 price rows (in neither UNREACHABLE nor ONBOARDING_BACKLOG)`);
  }
}

// stale entries: a listed slug (either list) that now has rows, is retired, is BLOCKED, or lost
// its page — the entry is no longer needed and should be removed.
for (const slug of [...UNREACHABLE, ...Object.keys(ONBOARDING_BACKLOG)]) {
  const v = vendors[slug];
  const rows = rowsByVendor[slug] || 0;
  if (!v || rows > 0 || v.retired || blocked.has(slug) || !existsSync(couponPage(slug))) {
    staleAllowlist.push(slug);
  }
}

if (failures.length) {
  console.error("check:grids FAILED — empty grid / thin page:\n");
  for (const f of failures) console.error(`  ✗ ${f}`);
  console.error("\nFix: onboard the vendor to the price pull (add rows), remove the grid / coupon");
  console.error("page, mark it retired, add it to UNREACHABLE (structurally zero), or to");
  console.error("ONBOARDING_BACKLOG with a reason + since-date (a dated, warned TODO — not silent).");
  process.exit(1);
}

console.log("check:grids OK — no empty grids or unaccounted thin pages.");

// ONBOARDING_BACKLOG: WARN every build with age; louder past the grace window. Never fails here.
if (backlog.length) {
  const today = new Date();
  const overdue = [];
  console.warn("\n  ONBOARDING BACKLOG — coupon page live, price pull not run (WARN, not a failure):");
  for (const slug of backlog.sort()) {
    const { reason, since } = ONBOARDING_BACKLOG[slug];
    const age = Math.max(0, Math.floor((today - new Date(since)) / 86_400_000));
    const flag = age > GRACE_DAYS ? "  ⚠ OVERDUE" : "";
    console.warn(`    • ${slug} — ${age}d old (since ${since}) — ${reason}${flag}`);
    if (age > GRACE_DAYS) overdue.push(`${slug} (${age}d)`);
  }
  if (overdue.length) {
    console.warn(`  ⚠⚠ ${overdue.length} past the ${GRACE_DAYS}-day grace window: ${overdue.join(", ")} — onboard or reclassify.`);
    console.warn(`     (Warning only, exit 0 — an overdue onboarding TODO must never block an unrelated deploy.)`);
  }
}
if (blocked.size) {
  console.log(`  blocked vendors (unpullable, exempt): ${[...blocked].sort().join(", ")}`);
}
if (staleAllowlist.length) {
  console.log(`  ⚠ stale entries (now onboarded/retired/blocked — remove from UNREACHABLE/ONBOARDING_BACKLOG): ${staleAllowlist.sort().join(", ")}`);
}
