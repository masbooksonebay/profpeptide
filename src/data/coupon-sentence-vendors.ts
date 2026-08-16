// src/data/coupon-sentence-vendors.ts — opt-in list for the coupon-code PROSE SENTENCE experiment.
//
// WHAT THIS IS
// A passage-salience intervention (measured Aug 2026): PP's first grammatical sentence joining
// {vendor name, code, discount %, coupon concept} sits ~979 tokens below the H1 — in the FAQ —
// while a competitor that wins the snippet on the same query opens with that sentence at ~0.
// The code itself renders near the top, but as a STYLED BOX with a separate "Your Discount Code"
// label, which does not read as a sentence to a snippet extractor.
//
// A vendor slug in this Set makes CouponCodeCard render a real prose sentence adjacent to the code
// box ("Use code {CODE} at {VENDOR} to save {PCT} on your order."). A vendor NOT in it renders
// exactly what it renders today — byte-for-byte.
//
// ⚠️ RANDOMIZED, NOT BLANKET. Rolled out a few deliberately-chosen slugs at a time so the change
// stays attributable, not site-wide. A vendor NOT in this Set renders byte-for-byte as before.
//
// ASSIGNMENT 2026-08 — the FIVE rewritten-title / no-snippet pages, shipped together WITH the
// code-in-H1 change as ONE intervention (title↔H1 alignment + prose density). Their four
// title-holding, snippet-winning peers (ameano-peptides, modern-aminos, peptide-partners,
// purerawz) are the CONTROL GROUP — deliberately excluded from BOTH variables; do not add them.
export const COUPON_SENTENCE_VENDORS = new Set<string>([
  "amino-club",
  "glacier-aminos",
  "ez-peptides",
  "midwest-peptide",
  "mile-high-compounds",
]);
