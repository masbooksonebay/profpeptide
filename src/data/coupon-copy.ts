// IMPORT-FREE BY DESIGN. The build-time budget guard (scripts/check-freshness.mjs)
// transpiles + executes this module directly to verify every composed coupon description
// fits ≤155 chars under the LONGEST month name ("September", 9 chars) — so no month
// transition can ever push a description past the SERP cutoff. A require() here would break
// both that guard and the transpile-exec, so keep this file free of imports.

/**
 * Per-vendor LEADING clause — the distinguishing fact each coupon description opens with.
 *
 * WHY THIS LEADS (not trails): all 45 descriptions once shared one identical opening —
 * "Use code {CODE} at {Vendor} to save {X}% sitewide — verified …" — with only a trailing
 * differentiator varying. Google treats a templated meta description as boilerplate and
 * commonly suppresses it (Glacier's snippet was dropped despite every surface reconciling).
 * The fix is to VARY THE LEAD: open with the vendor's own strongest established fact, then
 * append the compact code/discount/month tail. The first ~120 chars — what Google weighs —
 * are now unique per vendor.
 *
 * SOURCING (100% derived, nothing invented): each lead is composed from that vendor's
 * VERIFIED facts in src/data/vendors.ts (labName / labAccreditation / purityStandard / coa /
 * testMethods / coldChain / catalog) and matches how its own page characterizes them. A
 * lead NEVER implies a claim the page doesn't make — it won't name an accreditation a vendor
 * only informally claims, or attach a method the facts don't record (Job 2 corrected nine
 * such overstatements; do not reintroduce one here).
 *
 * TIER WATERFALL (first match wins), tagged per line:
 *   A — a single, concisely-named third-party lab → lead with that lab.
 *   B — no single lab, but a stated ISO/IEC 17025 accreditation → lead with the accreditation.
 *   C — no lab/ISO lead, but a published purity standard → lead with purity.
 *   D — none of the above cleanly (multi-lab that can't compress honestly, or only a
 *       catalog/format/region fact) → lead with the vendor's established differentiator.
 *
 * BUDGET: sized so the full composed description stays ≤155 chars under the WORST-CASE month
 * "September" (the longest). Verified by check:freshness on every build — a hard fail.
 */
export const couponLead: Record<string, string> = {
  "aero-peptides": "≥98% purity, third-party tested; COA on request", // C
  "almighty-peptides": "Bioviridian-tested, BOGO on most", // A
  "amp-peptides": "99%+ purity; lot-specific Janoshik COAs on request", // C (sample COA only — no batch-matched claim)
  "alpha-peptides": "ISO-17025 lab, per-lot 5-test panel", // B
  "ameano-peptides": "Janoshik-tested to ≥99%", // A
  "amino-club": "ISO-17025 lab, ≥99% purity, per-batch COAs", // B
  "amino-x": "Kovera Labs-tested, 99%+ purity", // A
  "ascension-peptides": "MZ BioLabs per-batch COAs; blends & stacks", // A
  "behemoth-labz": "Colmaric-tested; peptides & SARMs", // A
  "biolongevity-labs": "BioRegen LC-MS per-batch COAs", // A
  "biopure-peptides": "US-made; ≥99% purity standard, COA with each order", // C (no COA published online — vendor-stated)
  "biocollex": "Freedom Diagnostics per-batch COAs, same-day ship", // A
  "crush-research": "ILS Laboratories per-batch COAs, ISO-17025", // A
  "ez-peptides": "Janoshik-tested per batch, HPLC & LC-MS; same-day", // A (replaced self-reported 4.7/5 with cert facts)
  "fusion-peptide": "Topical & nasal-spray peptide formats", // D (retired)
  "glacier-aminos": "Batch-traceable COAs, cold-chain shipping", // D (multi-lab)
  "ignite-peptides": "99%+ purity, per-product COAs", // C
  "improved-peptides": "Freedom Diagnostics & Krause LC-MS COAs; public library", // A (two named labs + rare public COA library)
  "la-peptides": "Bioviridian batch COAs, ≥99%, made in USA", // A
  "mile-high-compounds": "Public batch-matched COA library; Chromate + ISO-17025 Vanguard", // A (two named labs, one ISO-accredited)
  "modern-aminos": "ISO-17025 accredited, per-batch COAs", // B (multi-lab + ISO)
  "nextgen-peptides": "ILS-Labs COAs, ≥99% HPLC, public library", // A
  "peptidology": "ISO-17025, two-lab (Vanguard + Eagle) COAs", // B (multi-lab + ISO)
  "integrative-peptides": "Physician-trusted oral peptides, ≥99%", // C
  "legendary-peptides": "Freedom Diagnostics COAs on every product", // A
  "limitless-biotech": "90+ compounds, HPLC/LC-MS tested, 30-day refund", // D
  "midwest-peptide": "ISO-17025, ≥99% HPLC, verifiable per-batch COAs", // B (multi-lab + ISO)
  "oasis-labs": "Veteran-owned, QR-verified COAs on every vial", // D (multi-lab)
  "particle-peptides": "Liquilabs full-panel COAs, Ph. Eur. limits", // A
  "peptide-partners": "Four independent batch tests, published COAs", // D (multi-lab)
  "peptide-giants": "Every batch Janoshik-tested, public reports", // A
  "purerx-peptides": "HPLC COAs; Accumark lot verifiable", // D (multi-lab)
  "peptides-gg": "Freedom Diagnostics per-batch COAs, US-made", // A
  "purerawz": "MZ Biolabs per-batch COAs; peptides, SARMs & more", // A
  "purity-peptides": "99%+ HPLC/mass-spec, third-party COAs", // C
  "real-peptides": "Freedom Diagnostics per-product COAs, ≥99%", // A
  "royal-peptides": "Independent Janoshik batch reports, 99%+", // A
  "science-based-peptides": "Per-lot COAs with batch number & test date", // D
  "spartan-peptides": "MZ BioLabs HPLC + mass-spec, ≥98%", // A
  "swiss-chems": "Public results page; HPLC/mass-spec to 99%+", // D
  "synthesis-peptides": "Per-batch HPLC testing, ≥99% purity", // D (retired)
  "treasure-coast-peptides": "Florida-based; third-party tested for identity, purity & concentration", // D (no COA/lab published — vendor-stated)
  "vital-core-research": "56 compounds incl. GLP-1/2/3, SARMs & blends", // D
  "nova-labs": "Janoshik per-batch COAs, ≥99%, GCC cold-chain", // A
  "nura-peptide": "Freedom Diagnostics COAs, public library", // A
  "99-purity-peptides": "Eagle Analytical per-batch COAs, ≥99%", // A
  "licensed-peptides": "Vanguard per-batch COAs, ISO-17025, 99%+", // A
};

/**
 * Compose the coupon meta description — FACT-FIRST shape:
 *   "{lead} — code {CODE} saves {X}% at {Vendor}, verified {month}."
 * The lead (unique per vendor) comes first; the code, discount, and DERIVED month follow in
 * the compact tail. Code + discount are non-negotiable — the code is what a reader copies from
 * the SERP and the attribution is the revenue mechanism; the month is the freshness signal.
 * `monthYear` is injected (not read here) so the budget guard can substitute the longest month;
 * buildCouponMetadata passes the real CODES_VERIFIED_DATE. Single source of the shape — do not
 * inline it.
 */
export function couponDescription(
  slug: string,
  vendorName: string,
  code: string,
  pct: number,
  monthYear: string,
): string {
  const tail = `code ${code} saves ${pct}% at ${vendorName}, verified ${monthYear}.`;
  const lead = couponLead[slug];
  return lead ? `${lead} — ${tail}` : `${tail[0].toUpperCase()}${tail.slice(1)}`;
}
