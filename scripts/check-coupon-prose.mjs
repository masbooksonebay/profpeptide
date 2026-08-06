// scripts/check-coupon-prose.mjs — FACTUAL-CLAIM guard for coupon-page testing prose.
//
// Coupon pages carry hand-written prose + FAQ answers about each vendor's third-party testing.
// Twice this drifted into telling readers a vendor WITHHOLDS documentation ("does not name the
// lab", "request it directly before purchase") while the vendor was publishing certificates the
// whole time — Legendary and Licensed Peptides both. Some of these pages receive inbound links
// from the vendors themselves, so a false "they hide their COAs" claim is shown to that vendor's
// own customers. This guard makes that class of claim un-shippable.
//
// FAILS the build (not warn): these are factual claims about third parties on live pages. A
// missing row (check:surfaces) is cosmetic; a defamatory-adjacent claim is not.
//
// Patterns are NARROWED to withholding language only — they were FP-scanned against every current
// coupon page and match ZERO of them. Benign copy that mentions the same words is deliberately
// NOT matched: "does not publish a single headline purity percentage" (Nura — states it DOES
// publish a COA library), "confirm a specific lot before purchase" (NOVA — points to a public
// batch table), "confirm the current COA on the vendor's site" (Mile High / NextGen / Peptidology
// — acknowledge published COAs, no "before purchase"/"with the vendor" withholding marker). If you
// add a pattern, FP-scan it first — do NOT rewrite good prose to satisfy this guard.
//
// The standing rule this enforces: verified -> state it, naming the lab. Not verified -> say
// nothing about testing. NEVER tell a reader a vendor withholds documentation.
//
// Run:  npm run check:coupon-prose   (also runs in the build chain; FAILS it on a match)

import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const couponsDir = join(root, "src", "app", "coupons");

// Each: [label, RegExp]. A coupon page matching ANY of these fails the build.
const WITHHOLDING = [
  ["does-not-name-lab", /does not name/i],
  ["does-not-publish-docs", /does not publish[^.]{0,40}(COA|certificate|library|lab|test)/i],
  ["no-coa-library", /no COA library/i],
  ["request-it-directly", /request it directly/i],
  ["request-that-detail", /request that detail/i],
  ["confirm-before-purchase", /confirm the current (documentation|certificate|coa)[^.]{0,60}(before purchase|with the vendor)/i],
  ["we-could-not", /we could not/i],
  ["unverified", /\bunverified\b/i],
  ["not-stated", /\bnot stated\b/i],
];

const dirs = readdirSync(couponsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

const violations = [];
for (const slug of dirs) {
  let src;
  try {
    src = readFileSync(join(couponsDir, slug, "page.tsx"), "utf8");
  } catch {
    continue; // no page.tsx in this dir
  }
  for (const [label, re] of WITHHOLDING) {
    const m = re.exec(src);
    if (m) {
      const s = src.slice(Math.max(0, m.index - 40), m.index + m[0].length + 40).replace(/\s+/g, " ");
      violations.push({ slug, label, snippet: s });
    }
  }
}

if (violations.length) {
  console.error(`check:coupon-prose FAILED — ${violations.length} withholding claim(s) on coupon pages:`);
  for (const v of violations) {
    console.error(`  ✗ ${v.slug} [${v.label}]: …${v.snippet}…`);
  }
  console.error(
    "\n  A vendor that publishes COAs must not be described as withholding them. Verified -> name the\n" +
    "  lab. Not verified -> say nothing about testing. If a match is genuinely benign, narrow the\n" +
    "  pattern in scripts/check-coupon-prose.mjs (and FP-scan it) — do not reword good prose to pass.",
  );
  process.exit(1);
}

console.log(`check:coupon-prose OK — ${dirs.length} coupon pages, no withholding claims.`);
