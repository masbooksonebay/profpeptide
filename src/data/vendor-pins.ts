// src/data/vendor-pins.ts — EXPLICIT vendor-block pins for peptide profiles.
//
// WHAT THIS IS
// A profile listed here renders EXACTLY this ordered vendor set in its
// VendorHighlightBlock, overriding the derived ranking (deriveHighlightVendors,
// which orders proven → editorsPick → bestDeal → alpha). This is an editorial
// override expressed as data, NOT a tier-flag change — so it can never ripple into
// any OTHER profile's ordering (a tier flag would). Profiles absent from this map
// keep deriving exactly as before.
//
// INVARIANTS (enforced by scripts/check-vendor-pins.mjs at build time)
//   1. The profile slug exists (src/app/peptides/<slug>).
//   2. Every vendor in the set is in the attribution allowlist (LISTED).
//   3. Every vendor in the set has a real price row for that compound (single grid
//      or blend grid) — pinning a vendor onto a compound it doesn't stock is worse
//      than not pinning at all, so the guard fails the build if a row disappears
//      (e.g. a future price pull drops one). That is how a pin "survives" a
//      derivation change: the guard breaks loudly instead of rendering a phantom.
//
// SCOPE (added 2026-08-13): Nura Peptide first, on the 8 profiles where all three of
// { nura-peptide, amino-club, peptide-partners } carry a price row. ss-31 was
// REQUESTED but is intentionally ABSENT — Amino Club has no ss-31 price row, so the
// fixed set can't be honored there (held pending a decision). The 6 no-row profiles
// (retatrutide, tirzepatide, wolverine-stack, tesamorelin-ipamorelin, and the two
// non-existent slugs) are left on derivation, unchanged.
//
// ⚠️ PINS REDISTRIBUTE — THEY DO NOT ADD. A pin REPLACES the derived top-3 on that profile, so
// every slot it hands to a pinned vendor is a slot TAKEN from whoever derivation would have shown.
// Measured for the Nura rollout across these 16 profiles: nura +16 profile referrers, amino-club
// +3, peptide-partners +3 — but glacier-aminos LOST 12 and ascension-peptides LOST 1 (they were
// the derived top-3 vendors the pins displaced). This was framed at the time as "giving Nura 16
// profiles," not as "taking 12 from Glacier" — but it was both. Before adding any pin, check the
// derived top-3 it displaces: every pin on a compound a PROVEN vendor would have won is a silent
// −1 to that vendor's profile link-equity.
export const VENDOR_PINS: Record<string, string[]> = {
  // ss-31 uses a DIFFERENT trio ON PURPOSE — this is not an inconsistency. Amino Club
  // has NO ss-31 price row, so the standard { nura, amino-club, peptide-partners } set
  // can't be honored here. BioCollex (PROVEN, and carries ss-31) takes Amino Club's
  // slot; Peptide Partners is retained — that fills the trio, so Ascension is not pinned
  // here. (Ascension's 50% PROFPEPTIDE rate is VERIFIED — Mark cart-tested it at checkout
  // multiple times; see scripts/price-pull/README.md. The earlier "flagged unverified in the
  // rate audit" note here was WRONG and is removed.) All three below carry an ss-31 row.
  "ss-31": ["nura-peptide", "peptide-partners", "biocollex"],
  // ── CAPSTONE SWAP 2026-08-18 ──────────────────────────────────────────────────
  // Once Capstone's price rows landed, the third pin slot moves from Peptide Partners to Capstone on
  // the 18 profiles Capstone STOCKS -> { nura-peptide, capstone-peptides, amino-club }. That is 11
  // single swaps + glow + wolverine-stack (2 blends) = 13 slots taken from peptide-partners, plus 5
  // NEW pins (epitalon, melanotan-ii, selank, semax, thymosin-alpha-1) that were previously derived.
  // peptide-partners keeps its coupon page, Professor's-Picks membership, and /vendors — only the
  // profile block slot moves. cagrisema is deliberately NOT pinned: nura and amino-club carry no
  // cagrisema row (Capstone is its only vendor), so no valid trio exists — it stays derived. kpv,
  // klow and ss-31 are unchanged (Capstone doesn't stock them). Every vendor in each set below
  // carries a price row for that compound (single or blend), so check:vendor-pins holds.
  //   Historical (pre-swap, preserved in git): the Nura rollout added these 2026-08-13; cagrilintide
  //   was excluded because Nura carries it only inside its GLP-3R/CAG blend (no standalone row).
  tesamorelin: ["nura-peptide", "capstone-peptides", "amino-club"],
  "nad-plus": ["nura-peptide", "capstone-peptides", "amino-club"],
  "mots-c": ["nura-peptide", "capstone-peptides", "amino-club"],
  kpv: ["nura-peptide", "amino-club", "peptide-partners"],
  sermorelin: ["nura-peptide", "capstone-peptides", "amino-club"],
  "pt-141": ["nura-peptide", "capstone-peptides", "amino-club"],
  glow: ["nura-peptide", "capstone-peptides", "amino-club"],
  klow: ["nura-peptide", "amino-club", "peptide-partners"],
  "wolverine-stack": ["nura-peptide", "capstone-peptides", "amino-club"],
  retatrutide: ["nura-peptide", "capstone-peptides", "amino-club"],
  tirzepatide: ["nura-peptide", "capstone-peptides", "amino-club"],
  semaglutide: ["nura-peptide", "capstone-peptides", "amino-club"],
  ipamorelin: ["nura-peptide", "capstone-peptides", "amino-club"],
  "bpc-157": ["nura-peptide", "capstone-peptides", "amino-club"],
  "tb-500": ["nura-peptide", "capstone-peptides", "amino-club"],
  // 5 new pins — Capstone provides the third proven slot on profiles that were deriving before:
  epitalon: ["nura-peptide", "capstone-peptides", "amino-club"],
  "melanotan-ii": ["nura-peptide", "capstone-peptides", "amino-club"],
  selank: ["nura-peptide", "capstone-peptides", "amino-club"],
  semax: ["nura-peptide", "capstone-peptides", "amino-club"],
  "thymosin-alpha-1": ["nura-peptide", "capstone-peptides", "amino-club"],
};
