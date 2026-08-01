// IMPORT-FREE BY DESIGN. The build-time budget guard (scripts/check-freshness.mjs)
// transpiles + executes this module directly to verify every composed coupon description
// fits ≤155 chars under the LONGEST month name ("September", 9 chars) — so no month
// transition can ever push a description past the SERP cutoff. A require() here would break
// both that guard and the transpile-exec, so keep this file free of imports.

/**
 * Per-vendor differentiator — the unique trailing clause of each coupon meta description.
 * This is the ONLY text that differs across 33 otherwise-identical descriptions, so it is
 * kept specific and true per vendor (sourced from that vendor's own coupon-page body) to
 * avoid the templated-similarity suppression that got a third of the supplement pages
 * declined.
 *
 * BUDGET: each clause is sized so the full composed description stays ≤155 chars (the SERP
 * cutoff) under the WORST-CASE month — "September" (9 chars), the longest month name. July
 * was the shortest, so budgeting against the current month broke every longer month; budget
 * against September once and every month fits forever. Verified by check:freshness on build.
 */
export const couponDifferentiator: Record<string, string> = {
  "aero-peptides": "≥98% purity, ISO-lab tested; COA on request.",
  "almighty-peptides": "HPLC/mass-spec tested; Buy 1 Get 1 FREE on most.",
  "alpha-peptides": "Per-lot 5-test panel, ISO 17025 lab, public COAs.",
  "ameano-peptides": "Lab-tested to 99%+ purity; published COA/product.",
  "amino-club": "ISO-17025 tested peptides with a COA on every batch.",
  "amino-x": "US-based, third-party tested research peptides; COA on request.",
  "ascension-peptides": "99%+ multi-stage tested; blend & stack range.",
  "behemoth-labz": "Third-party tested by Colmaric; peptides & SARMs.",
  "biocollex": "US-based, 99% purity, same-day shipping, cGMP cert.",
  "biolongevity-labs": "Triple per-batch verification; HPLC/LC-MS; COAs.",
  "crush-research": "Per-batch COAs, multi-vial tested; veteran-owned.",
  "ez-peptides": "Same-day shipping; 4.7/5 over 176+ reviews; lab-tested.",
  "fusion-peptide": "Topical and nasal-spray peptide formats available.",
  "glacier-aminos": "Batch-traceable COAs and cold-chain shipping.",
  "ignite-peptides": "99%+ purity, two-stage independent testing, COA/product.",
  "integrative-peptides": "Physician-trusted oral peptide supplements.",
  "la-peptides": "≥99% purity, batch third-party tested, made in USA.",
  "limitless-biotech": "90+ compounds; HPLC/LC-MS tested; 30-day refund.",
  "midwest-peptide": "99%+ purity, third-party tested with a COA per product.",
  "mile-high-compounds": "8x US third-party testing; public COAs.",
  "modern-aminos": "US; public per-batch COA library; ISO 17025 lab.",
  "nextgen-peptides": "≥99% HPLC, US third-party tested, COA library.",
  "oasis-labs": "Veteran-owned with QR-verified COAs on every vial.",
  "particle-peptides": "Comprehensive EU testing, Ph. Eur. compliant.",
  "peptide-partners": "4 independent batch tests with published COAs.",
  "peptides-gg": "US-made, third-party tested per batch with COAs.",
  "peptidology": "14-point per-batch testing under ISO/IEC 17025.",
  "purerawz": "US-based; third-party tested peptides, SARMs & nootropics.",
  "purity-peptides": "99%+ HPLC/mass-spec tested with third-party COAs.",
  "royal-peptides": "cGMP/ISO-lab tested to 99%+ purity with batch COAs.",
  "science-based-peptides": "Per-lot COAs with batch number & test date.",
  "spartan-peptides": "HPLC + mass-spec verified to ≥98% purity.",
  "swiss-chems": "Public results page; third-party HPLC/mass-spec to 99%+.",
  "synthesis-peptides": "Per-batch HPLC testing, ≥99% purity.",
  "treasure-coast-peptides": "Florida-based; purity and concentration tested.",
  "vital-core-research": "56 compounds incl. GLP-1/2/3, SARMs, blends.",
};

/**
 * Compose the coupon meta description — the Style-A shape:
 *   "Use code {CODE} at {Vendor} to save {X}% sitewide — verified and working for {month}. {diff}"
 * Code first (char 9), then the differentiator. `monthYear` is injected (not read here) so
 * the budget guard can substitute the longest month; buildCouponMetadata passes the real
 * CODES_VERIFIED_DATE. This is the single source of the description shape — do not inline it.
 */
export function couponDescription(
  slug: string,
  vendorName: string,
  code: string,
  pct: number,
  monthYear: string,
): string {
  const diff = couponDifferentiator[slug];
  return (
    `Use code ${code} at ${vendorName} to save ${pct}% sitewide — ` +
    `verified and working for ${monthYear}.` +
    (diff ? ` ${diff}` : "")
  );
}
