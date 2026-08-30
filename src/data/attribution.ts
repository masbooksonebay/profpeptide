// src/data/attribution.ts — the profile-listing attribution allowlist.
//
// WHY THIS EXISTS
// Peptide profiles promote vendors via two surfaces (WhereToBuy + VendorHighlightBlock).
// Some vendors have a discount code that WORKS at checkout but credits nobody — the
// "unlinked-coupon" failure. Sending readers there earns nothing and costs the click.
// So both profile surfaces filter their vendor list through LISTED below: a vendor must
// have a PROVEN attribution record, or be a genuinely-new GRACED vendor, to be promoted.
//
// This is the SINGLE source of truth for that decision, consumed by both components and
// enforced at build time by scripts/check-attribution.mjs (a profile surface may not list
// a slug outside LISTED). Keeping it here — rather than as a boolean scattered across ~40
// vendor blocks in vendors.ts — keeps an EXTERNAL LEDGER FACT in one reviewable place.
//
// ⚠️ COUPON PAGES ARE NOT FILTERED BY THIS. Every vendor keeps its own /coupons/<slug>
// page regardless of attribution. This governs only which vendors get PROMOTED on profiles.
//
// SOURCE OF THE DERIVATION
// Derived from the affiliate commission ledger (PP_COMMISSIONS_v3.md — the July 4, 2026
// CINC dashboard pull; Notion "PP Affiliate Tracker" is the live mirror). The ledger itself
// lives outside the repo (~/Downloads), so this file IS the committed, reviewable derivation.
// When the ledger is refreshed, reconcile the three sets below against it.

// ── PROVEN ──────────────────────────────────────────────────────────────────────
// Recorded commission > $0 in the ledger (attribution demonstrably fires). Ranked by
// recorded total at last pull: peptide-partners $4,283.94 · amino-club $659.46 ·
// glacier-aminos $614.81 · oasis-labs $467.88 · ez-peptides $424.08 · peptides-gg $252.63 ·
// midwest-peptide $183.61 · royal-peptides $143.19 · ascension-peptides $134.99 ·
// biocollex $94.00 · vital-core-research $87.89 · integrative-peptides $44.70.
// limitless-biotech — PROVEN from portal config AND conversion data (Everflow, code ID 1294 bound
//   to offer 1; 4 of 5 lifetime conversions code-attributed). Verified 2026-08-11.
// biolongevity-labs — PROVEN from portal config AND conversion data (TUNE, PROFPEPTIDE in Offer
//   Details → Promo Codes; 4 of 4 conversions code-attributed). Verified 2026-08-11; moved up
//   from GRACED once its binding + attribution were confirmed.
// ignite-peptides — RESTORED from CUT 2026-08-19 on first-hand vendor confirmation. Antonio at
//   Ignite confirmed by email that PROF10 is bound to Mark's affiliate account 5024, credits
//   WITHOUT a click, and has been used 3× (paid out). WHY THE ORIGINAL CUT WAS WRONG: it rested on
//   a speculative "Post Affiliate Pro cluster" hypothesis (almighty + spartan + ignite all on PAP)
//   — but Ignite's OWN fingerprint is AffiliateWP, not PAP (the premise contradicted its own data),
//   and the ledger already recorded $36.45 "resolved" for it, which the cut discounted as stale.
//   The cut note itself said to revisit on fresh first-hand confirmation; this is it. AffiliateWP,
//   <$100 recorded, HIGH conf. (Code switch PROF10 → PROFPEPTIDE is HELD separately, pending
//   Antonio confirming PROF10 still credits post-switch — see the coupon page + vendors.ts.)
const PROVEN_LIST = [
  "peptide-partners",
  "amino-club",
  "glacier-aminos",
  "oasis-labs",
  "ez-peptides",
  "peptides-gg",
  "midwest-peptide",
  "royal-peptides",
  "ascension-peptides",
  "vital-core-research",
  "biocollex",
  "integrative-peptides",
  "limitless-biotech",
  "biolongevity-labs",
  "ignite-peptides",
];
export const PROVEN = new Set<string>(PROVEN_LIST);

// ── GRACED ──────────────────────────────────────────────────────────────────────
// New vendors with a live attribution code but no recorded conversion YET. A working code
// with no conversion is UNTESTED, not broken — cutting a functioning vendor to punish it for
// being new costs coverage and earns nothing. So they are promoted on grace.
// ⚠️ These are provisional. When the ledger refreshes, a graced-in vendor that has since
// accrued TRAFFIC and is STILL $0 is no longer untested — it is proven-broken. Move it to
// CUT at that point. (This is the exact transition swiss-chems already failed, see CUT.)
const GRACED_LIST = [
  "ameano-peptides",
  "peptide-giants",
  "peptidology",
  "aero-peptides",
  "treasure-coast-peptides",
  "modern-aminos",
  // nura-peptide — code (PROFPEPTIDE) bound in the GoAffPro portal, Referrals 0 at last
  // check: working code, no recorded conversion = GRACED by definition (PROVEN needs
  // ledger conversions, cf. biolongevity-labs). Added 2026-08-13. Being LISTED is also
  // what lets it render on profiles (it was already on the Featured Vendors page).
  "nura-peptide",
  // capstone-peptides — code (PROFPEPTIDE, 10%) newly issued, no recorded conversions yet: a
  // working code with $0 recorded is UNTESTED, not broken = GRACED by definition, same basis as
  // nura-peptide (PROVEN needs ledger conversions, cf. biolongevity-labs). Added 2026-08-15.
  "capstone-peptides",
];
export const GRACED = new Set<string>(GRACED_LIST);

// ── LISTED ──────────────────────────────────────────────────────────────────────
// The allowlist both profile surfaces filter against, and check:attribution enforces.
export const LISTED = new Set<string>(PROVEN_LIST.concat(GRACED_LIST));

// ── CUT (documented, NOT exported for filtering) ─────────────────────────────────
// Recorded here so the reasoning survives and nobody silently re-adds one. A slug being
// absent from LISTED is what actually removes it; this list is the paper trail.
//
//   almighty-peptides  — PROVEN BROKEN: $0 on 461 visits / 1 referral. Suspected Post
//                        Affiliate Pro platform-cluster (see spartan).
//   spartan-peptides   — 🔴 LEDGER CONTRADICTION. PP_COMMISSIONS_v3 (Jul 4) marks Spartan
//                        "Tracking RESOLVED" with $27.90 recorded. That is SUPERSEDED: on
//                        2026-08-10 Spartan confirmed DIRECTLY that they run Post Affiliate
//                        Pro and that PROFPEPTIDE is NOT linked to the affiliate account —
//                        the code works at checkout and credits nobody. Newer first-hand
//                        info wins over the 5-week-stale ledger. DO NOT restore from the
//                        ledger's "RESOLVED."
//   ignite-peptides    — ✅ RESTORED TO PROVEN 2026-08-19 (moved to PROVEN_LIST above). The
//                        original cut was a REASONING ERROR, recorded here so it stays visible:
//                        it assumed Ignite was in a "Post Affiliate Pro cluster," but Ignite's
//                        fingerprint is AffiliateWP (not PAP) — the cluster premise contradicted
//                        its own data — and it ignored the ledger's own $36.45 "resolved" entry
//                        as "stale." Antonio (Ignite) confirmed first-hand: PROF10 bound to acct
//                        5024, credits without a click, used 3×, paid out.
//   behemoth-labz      — $0 recorded (code PROF10). Not promoted.
//   purerawz           — $0 recorded, early-stage. Not promoted.
//   particle-peptides  — binding UNCONFIRMED + prices non-USD (EUR). Not promoted.
//   swiss-chems        — NOT a new vendor (long-established) yet absent from the ledger
//                        entirely — the red-flag case, not the untested case. Under the
//                        standing never-fetch rule. Its removal empties the four profiles
//                        that listed only swiss-chems (adipotide, mgf, cibinetide, igf-1-des)
//                        — tracked for proven-vendor backfill.
export const CUT_FOR_REFERENCE = [
  "almighty-peptides",
  "spartan-peptides",
  "particle-peptides",
  "swiss-chems",
];
