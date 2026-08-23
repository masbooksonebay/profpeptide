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
// 🔴 CONTROL GROUP DISSOLVED 2026-08-23 — Mark's decision, final. This began as a RANDOMIZED rollout
// (a few slugs at a time, with the title-holding / snippet-winning peers held back as a CONTROL
// GROUP) so the change stayed attributable. That experiment is now OVER: the treatment is proven in
// live SERPs across the roster, and the Round-1 control baseline was already recorded as unusable
// (three of the four true controls never had a valid baseline). It is now a BLANKET treatment —
// every coupon page gets it, with NO exceptions. peptide-partners left the control group 2026-08-21;
// the remaining former controls — ameano-peptides, modern-aminos, purerawz (the old "do not add
// them" group) and almighty-peptides, spartan-peptides, royal-peptides, amino-x (the four true
// controls) — were ALL brought onto the treatment on 2026-08-23. Do NOT re-exclude any of them, and
// add every new coupon page here as it ships.
//
// The ONLY coupon pages not in this Set are the three legacy hardcoded-CopyCode templates —
// particle-peptides, fusion-peptide, synthesis-peptides — whose code box sits below the prose, so
// the passage cannot lead without a structural rewrite. They are HELD pending that conversion (not
// excluded), and join this Set the moment they are converted.
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
  // each. The four salience controls (almighty, spartan, royal, amino-x) were excluded here at the
  // time; they were added 2026-08-23 when the control group dissolved (see the header + bottom of Set).
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
  // Promoted out of the CONTROL GROUP 2026-08-21: a low-ranking, code-attributed page brought onto
  // the treatment ahead of the rest; its former control peers followed on 2026-08-23 (see header).
  "peptide-partners",
  // New vendor onboarded 2026-08-21 — ships on the current treatment from day one (no untreated baseline).
  "forge-performance-co",
  // Tier-A rollout PILOT 2026-08-22 (coverage-audit gap-fill): first of the untreated non-control pages
  // brought to full parity, proving the five-change mechanism before the remaining Tier-A batch.
  "ascension-peptides",
  // Tier-A rollout BATCH 2026-08-22 — the five standard-structure untreated pages, brought to parity in
  // one pass after the ascension pilot. (particle-peptides is held: it is a legacy hardcoded-CopyCode
  // template like fusion/synthesis, needing a structural conversion — handled separately, not batched.)
  "aero-peptides",
  "biocollex",
  "biopure-peptides",
  "ignite-peptides",
  "oasis-labs",
  // CONTROL GROUP DISSOLVED 2026-08-23 (Mark's decision — see header): the seven former controls
  // brought onto the treatment. ameano-peptides / modern-aminos / purerawz were the "do not add
  // them" group; almighty / spartan / royal / amino-x were the four true salience controls.
  "almighty-peptides",
  "amino-x",
  "royal-peptides",
  "spartan-peptides",
  "ameano-peptides",
  "modern-aminos",
  "purerawz",
]);
