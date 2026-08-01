// scripts/check-freshness.mjs — build-gating freshness + SEO-budget guard.
//
// Two invariants, both fail-loud (non-zero exit) so a stale site can't ship silently:
//
//   1. STAMP AGE. The machine link-check stamp (VENDORS_VERIFIED_ISO, written by a clean
//      scripts/check-vendors.mjs run) must be no older than MAX_AGE_DAYS. The coupon
//      "verified <month>" now derives from this stamp, so an old stamp = a stale claim.
//      If it trips: run `npm run check:vendors` and commit the refreshed stamp.
//
//   2. DESCRIPTION BUDGET. Every composed coupon meta description must fit ≤155 chars (the
//      SERP cutoff) under the LONGEST month name — "September" (9 chars). July was the
//      shortest month of the year, so a description budgeted against the current month
//      breaks at the next longer month. Budgeting against September once makes every month
//      fit forever; this guard proves it stayed that way after any differentiator edit.
//
// Both read the SAME sources the site renders (vendors.ts, coupon-copy.ts, the generated
// stamp) via transpile+execute, so the guard can't drift from what ships.
//
// Run:  npm run check:freshness   (also runs in the build chain, before next build)

import ts from "typescript";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const MAX_AGE_DAYS = 35; // ~a month + a few days of slack; a monthly check:vendors keeps it green
const SERP_MAX = 155; // coupon meta description cutoff
const LONGEST_MONTH = "September"; // 9 chars — the worst case; budget against it, not the current month

// Execute an import-free TS data module (transpile → CJS → run). A real require() throws,
// same guard as check-grids/check-vendors — these modules must stay import-free.
function execModule(relPath, label) {
  const abs = join(root, relPath);
  const { outputText } = ts.transpileModule(readFileSync(abs, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const moduleObj = { exports: {} };
  const requireGuard = (name) => {
    throw new Error(`${label} must stay import-free for check:freshness (saw require("${name}"))`);
  };
  new Function("module", "exports", "require", outputText)(moduleObj, moduleObj.exports, requireGuard);
  return moduleObj.exports;
}

const failures = [];

// ── 1. stamp age ────────────────────────────────────────────────────────────────
const { VENDORS_VERIFIED_ISO } = execModule("src/data/vendors-verified.generated.ts", "vendors-verified.generated.ts");
if (!VENDORS_VERIFIED_ISO || !/^\d{4}-\d{2}-\d{2}$/.test(VENDORS_VERIFIED_ISO)) {
  failures.push(`stamp: VENDORS_VERIFIED_ISO missing/malformed ("${VENDORS_VERIFIED_ISO}")`);
} else {
  const ageDays = Math.floor((Date.now() - Date.parse(`${VENDORS_VERIFIED_ISO}T00:00:00Z`)) / 86_400_000);
  console.log(`stamp VENDORS_VERIFIED_ISO = ${VENDORS_VERIFIED_ISO} (age ${ageDays}d, limit ${MAX_AGE_DAYS}d)`);
  if (ageDays > MAX_AGE_DAYS) {
    failures.push(
      `stamp is ${ageDays} days old (> ${MAX_AGE_DAYS}) — the coupon "verified" month is stale. ` +
      `Run: npm run check:vendors  (then commit src/data/vendors-verified.generated.ts)`
    );
  }
}

// ── 2. description budget under the longest month ────────────────────────────────
const { vendors } = execModule("src/data/vendors.ts", "vendors.ts");
const { couponDescription } = execModule("src/data/coupon-copy.ts", "coupon-copy.ts");
const year = (VENDORS_VERIFIED_ISO || "2026-01-01").split("-")[0];
const worstMonth = `${LONGEST_MONTH} ${year}`;
const pctOf = (v) => { const m = v.discount?.match(/(\d+)/); return m ? +m[1] : 0; };

let checked = 0;
let tightest = { slug: null, len: -1 };
for (const [slug, v] of Object.entries(vendors)) {
  if (v.retired) continue;
  checked++;
  const desc = couponDescription(slug, v.name, v.code, pctOf(v), worstMonth);
  if (desc.length > tightest.len) tightest = { slug, len: desc.length };
  if (desc.length > SERP_MAX) {
    failures.push(`desc: ${slug} = ${desc.length} chars under "${LONGEST_MONTH}" (> ${SERP_MAX}) — trim its differentiator in src/data/coupon-copy.ts`);
  }
}
console.log(`descriptions: ${checked} checked under worst-case "${worstMonth}"; longest = ${tightest.slug} at ${tightest.len}/${SERP_MAX}`);

// ── result ───────────────────────────────────────────────────────────────────────
if (failures.length) {
  console.error(`\ncheck:freshness FAILED — ${failures.length} issue(s):`);
  for (const f of failures) console.error(`  ✗ ${f}`);
  process.exit(1);
}
console.log("check:freshness OK — stamp fresh and every coupon description fits under the longest month.");
