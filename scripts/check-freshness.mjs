// scripts/check-freshness.mjs — build-time freshness/SEO guard, SPLIT BY SEVERITY.
//
//   BUDGET (HARD FAIL, exit 1). Every composed coupon meta description must fit ≤155 chars
//     (the SERP cutoff) under the LONGEST month name — "September" (9 chars). July was the
//     shortest month, so a description budgeted against the current month breaks at the next
//     longer month. Over-155 ships a TRUNCATED description — an output bug — so this fails the
//     build; the fix (trim a differentiator in src/data/coupon-copy.ts) is immediate.
//
//   FAQ REVIEW DATES (WARN ONLY, exit 0). A handful of /faq pages are pinned to something with a
//     known expiry — a pending trial readout, a regulatory position that moves. `reviewAfter` on
//     those entries records when the content should be re-read. Past that date this prints a
//     warning naming each page; it never fails. A page that needs re-reading is a prompt to look,
//     NOT a reason to block an unrelated deploy — same severity reasoning as the stamp below.
//     🔒 reviewAfter is INTERNAL: this guard is its only consumer and it never renders.
//
//   STAMP AGE (WARN ONLY, exit 0). The machine link-check stamp (VENDORS_VERIFIED_ISO) drives
//     the cosmetic coupon "verified <month>". It only advances on a clean check:vendors run,
//     which depends on 33 third-party sites being reachable — so a single genuinely-dead
//     vendor can stall it. A stale month is cosmetic; an undeployable site is not. We must NOT
//     couple them: an old stamp prints a loud, impossible-to-miss warning but never blocks a
//     deploy (e.g. an urgent fix unrelated to vendors).
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

const MAX_AGE_DAYS = 35; // ~a month + a few days of slack; a monthly check:vendors keeps it fresh
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

const failures = []; // HARD — gate the build (exit 1)

// ── STAMP AGE — WARN ONLY, never gates the build ─────────────────────────────────
const { VENDORS_VERIFIED_ISO } = execModule("src/data/vendors-verified.generated.ts", "vendors-verified.generated.ts");
let ageWarning = null;
if (!VENDORS_VERIFIED_ISO || !/^\d{4}-\d{2}-\d{2}$/.test(VENDORS_VERIFIED_ISO)) {
  ageWarning = `VENDORS_VERIFIED_ISO missing/malformed ("${VENDORS_VERIFIED_ISO}") — run check:vendors`;
} else {
  const ageDays = Math.floor((Date.now() - Date.parse(`${VENDORS_VERIFIED_ISO}T00:00:00Z`)) / 86_400_000);
  console.log(`stamp VENDORS_VERIFIED_ISO = ${VENDORS_VERIFIED_ISO} (age ${ageDays}d, warn > ${MAX_AGE_DAYS}d)`);
  if (ageDays > MAX_AGE_DAYS) {
    ageWarning = `stamp is ${ageDays} days old (${VENDORS_VERIFIED_ISO}), over the ${MAX_AGE_DAYS}-day mark — the coupon "verified" month is drifting`;
  }
}

// ── FAQ REVIEW DATES — WARN ONLY, never gates the build ──────────────────────────
// faqQuestions.ts is import-free by contract (the search-index generator executes it the same
// way), so the same transpile+execute path reads it without a second parser to drift.
const { faqQuestions } = execModule("src/data/faqQuestions.ts", "faqQuestions.ts");
const todayIso = new Date().toISOString().slice(0, 10);
const dated = faqQuestions.filter((q) => q.reviewAfter);
const overdue = dated
  .filter((q) => q.reviewAfter < todayIso)
  .sort((a, b) => a.reviewAfter.localeCompare(b.reviewAfter));
const malformed = dated.filter((q) => !/^\d{4}-\d{2}-\d{2}$/.test(q.reviewAfter));
console.log(
  `faq review dates: ${dated.length} page(s) carry reviewAfter, ${overdue.length} past due (today ${todayIso})`
);

// ── DESCRIPTION BUDGET — HARD FAIL under the longest month ────────────────────────
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
    failures.push(`${slug} = ${desc.length} chars under "${LONGEST_MONTH}" (> ${SERP_MAX}) — trim its differentiator in src/data/coupon-copy.ts`);
  }
}
console.log(`descriptions: ${checked} checked under worst-case "${worstMonth}"; longest = ${tightest.slug} at ${tightest.len}/${SERP_MAX}`);

// ── result ───────────────────────────────────────────────────────────────────────
// Both warnings print LAST and loud (so they can't scroll away) but never set the exit code.
if (overdue.length || malformed.length) {
  const bar = "!".repeat(74);
  console.warn(`\n${bar}`);
  console.warn(`!!  FAQ PAGES DUE FOR REVIEW (warning — build continues, deploys not blocked)`);
  for (const q of overdue) {
    console.warn(`!!      • /faq/${q.slug} — reviewAfter ${q.reviewAfter}`);
  }
  for (const q of malformed) {
    console.warn(`!!      • /faq/${q.slug} — reviewAfter "${q.reviewAfter}" is not yyyy-mm-dd`);
  }
  console.warn(`!!  These pages are pinned to a pending readout or a moving regulatory position.`);
  console.warn(`!!  Fix: re-read the page against current sources, then move or clear reviewAfter`);
  console.warn(`!!       in src/data/faqQuestions.ts.`);
  console.warn(`${bar}\n`);
}

// Age warning prints LAST and loud (so it can't scroll away) but never sets exit code.
if (ageWarning) {
  const bar = "!".repeat(74);
  console.warn(`\n${bar}`);
  console.warn(`!!  STALE VERIFIED-DATE STAMP (warning — build continues, deploys not blocked)`);
  console.warn(`!!  ${ageWarning}.`);
  console.warn(`!!  Fix: npm run check:vendors, then commit src/data/vendors-verified.generated.ts`);
  console.warn(`${bar}\n`);
}

if (failures.length) {
  console.error(`check:freshness FAILED — ${failures.length} description(s) over the SERP budget:`);
  for (const f of failures) console.error(`  ✗ ${f}`);
  process.exit(1);
}
const notes = [ageWarning ? "stamp" : null, overdue.length || malformed.length ? "faq review" : null].filter(Boolean);
console.log(
  `check:freshness OK — every coupon description fits under the longest month` +
    `${notes.length ? ` (see ${notes.join(" + ")} warning${notes.length > 1 ? "s" : ""} above)` : ""}.`
);
