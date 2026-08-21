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
// code-in-H1 change as ONE intervention (title↔H1 alignment + prose density). Their title-holding,
// snippet-winning peers were the CONTROL GROUP, deliberately excluded from BOTH variables.
// peptide-partners was PROMOTED OUT of that group on 2026-08-21 (Mark's call — it ranks low, so
// there is little snippet position to protect and its revenue is code-attributed, not
// SERP-dependent) and is now treated below. ameano-peptides, modern-aminos, and purerawz REMAIN
// controls — do not add them. (For the record: this treatment has moved PRESENTATION on every page
// it touched and moved RANK on none; if rank does not improve here, that is the expected outcome.)
export const COUPON_SENTENCE_VENDORS = new Set<string>([
  // Stripped cohort (rewritten-title / no-snippet baseline)
  "amino-club",
  "glacier-aminos",
  "ez-peptides",
  "midwest-peptide",
  "mile-high-compounds",
  // Added 2026-08-16 as SEPARATE cohorts (see docs/PP_COUPON_SALIENCE_EXPERIMENT.md):
  "nura-peptide",       // vendor page never ranked (the /coupons hub did) — tests if it surfaces at all
  "capstone-peptides",  // never crawled — indexed WITH the treatment from the start, no baseline
  // ── NON-RANKING ROLLOUT 2026-08-19 (23 slugs) ──────────────────────────────────────────────
  // The 22 non-ranking pages + the legendary pilot got the other four changes (H1 code, facts line
  // removed, FAQ "coupon code", domain in the first paragraph) in main 76d79db, but WITHOUT this
  // passage — so they shipped briefly as a 4-of-5 variant. Adding them here restores change #2 for
  // FULL PARITY with the 7 above (the passage is component-rendered, invisible in page.tsx — which
  // is exactly why the earlier "the 7 are H1→card→prose" read missed it). All 23 were in the
  // 2026-08-19 check:vendors verified set, so "verified as of {CODES_VERIFIED_DATE}" is true for
  // each. The four salience CONTROLS (almighty, spartan, royal, amino-x) are NOT here — excluded.
  "99-purity-peptides",
  "alpha-peptides",
  "amp-peptides",
  "behemoth-labz",
  "biolongevity-labs",
  "crush-research",
  "improved-peptides",
  "integrative-peptides",
  "ion-peptide",
  "la-peptides",
  "legendary-peptides",
  "licensed-peptides",
  "limitless-biotech",
  "nextgen-peptides",
  "nova-labs",
  "peptide-giants",
  "peptides-gg",
  "purity-peptides",
  "science-based-peptides",
  "swiss-chems",
  "treasure-coast-peptides",
  "valkyrie-peptides",
  "vital-core-research",
  // Promoted out of the CONTROL GROUP 2026-08-21 (see ASSIGNMENT note above): a low-ranking,
  // code-attributed page brought onto the treatment; its three former control peers stay excluded.
  "peptide-partners",
]);
