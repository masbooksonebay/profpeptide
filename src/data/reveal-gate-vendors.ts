// src/data/reveal-gate-vendors.ts — vendors whose discount code is GATED behind a click.
//
// WHY THIS EXISTS
// A few vendors run a PUBLIC offer that beats PP's affiliate code (e.g. midwest-peptide's
// public SITEWIDE30 at 30% vs PP's 10%). When PP's code is visible in the SERP snippet, the
// buyer reads it, goes direct, uses the better public deal, and PP earns nothing. Gating pulls
// the code off every CRAWLABLE surface (title, meta description, H1, body prose, FAQ, JSON-LD
// Offer, OG card + alt) and puts it behind a click that opens a modal — the reveal link routes
// through /go/{slug}?from=reveal-modal so the click is attributed and counted. CTR on these
// pages falls BY DESIGN; success is measured in attributed affiliate clicks, not CTR.
//
// HOW IT WORKS
// A slug in this Set makes the shared coupon generators OMIT the code:
//   - buildCouponMetadata: title drops ": {CODE}"; description drops "code {CODE}"      (coupon-page.ts)
//   - couponOffer:         JSON-LD Offer description drops "Use code {CODE}"             (coupon-page.ts)
//   - altFor / VendorCard: OG alt + OG card drop the code                               (coupon-og.tsx)
//   - CouponCodeCard:      renders <RevealCodeBox> instead of the code box, and suppresses the
//                          COUPON_SENTENCE_VENDORS prose sentence                        (CouponCodeCard.tsx)
// The per-page FAQ answers + catalog caption must also be edited to not name the code (those are
// literal in each page.tsx). A slug NOT in this Set renders byte-for-byte as before.
//
// The code stays 100% correct in vendors.ts — this is a DISPLAY change, not a data change. The
// modal reveals the real registry code (derived), copyable, behind the click.
//
// ROLLOUT: piloted on peptidology first. midwest-peptide + real-peptides followed after the pilot
// was verified end to end.
//
// ⚠️ ACCEPTED RESIDUAL — midwest-peptide only (reviewed, NOT missed):
// midwest-peptide's affiliate URL is `https://midwestpeptide.com?ref=PROFPEPTIDE` — its ref token
// IS literally the code. So its catalog product deep-links render as `.../products/X?ref=PROFPEPTIDE`
// and the code appears ~40× in the rendered HTML as an href QUERY PARAM (never as displayed text).
// This was reviewed and ACCEPTED, not overlooked: (1) the code is absent from every DISPLAYED
// surface and from the SERP snippet — the actual threat model; (2) check:codes Tier 3 already
// exempts `?ref=CODE` as an affiliate param, not displayed prose; (3) the token yields PP's 10% vs
// midwest's PUBLIC SITEWIDE30 at 30%, so extracting it gives a WORSE deal than the vendor's own
// footer banner. Do NOT re-architect the product deep-links to remove it. peptidology (?ref=mkmhgxqi)
// and real-peptides (/ref/688/) have opaque tokens, so they render 0 code occurrences.
export const REVEAL_GATE_VENDORS = new Set<string>([
  "peptidology",
  "midwest-peptide",
  "real-peptides",
]);
