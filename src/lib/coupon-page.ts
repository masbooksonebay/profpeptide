import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { vendors, CODES_VERIFIED_DATE } from "@/data/vendors";
import { VENDORS_VERIFIED_ISO } from "@/data/vendors-verified.generated";

const SITE_URL = "https://profpeptide.com";

/** Discount percent parsed from a vendor's `discount` string ("20% off" → 20). */
function discountPct(slug: string): number {
  const m = vendors[slug]?.discount.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

/**
 * priceValidUntil = one year past the last verification. Because every monthly
 * check:vendors run pushes VENDORS_VERIFIED_ISO forward, the Offer's validity is
 * always in the future — it can never silently expire the way a hardcoded date
 * does. Derived from the stamp, never typed by hand.
 */
function priceValidUntilISO(): string {
  const [y, m, d] = VENDORS_VERIFIED_ISO.split("-");
  return `${Number(y) + 1}-${m}-${d}`;
}

/**
 * The affiliate Offer JSON-LD for a coupon page. Built entirely from vendors.ts so it
 * can't drift from what the page shows, with validFrom / priceValidUntil / dateModified
 * driven by the machine verification stamp (scripts/check-vendors.mjs) rather than
 * hardcoded dates that go stale. One Offer per coupon page.
 */
export function couponOffer(slug: string): Record<string, unknown> {
  const v = vendors[slug];
  const pct = discountPct(slug);
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: `${v.name} Discount Code - Save ${pct}%`,
    description: `Use code ${v.code} for ${pct}% off at ${v.name}`,
    url: `${SITE_URL}/coupons/${slug}`,
    validFrom: VENDORS_VERIFIED_ISO,
    priceValidUntil: priceValidUntilISO(),
    dateModified: VENDORS_VERIFIED_ISO,
    seller: { "@type": "Organization", name: v.name },
  };
}

/**
 * Per-vendor differentiator — the unique trailing clause of each coupon meta description.
 * This is the ONLY text that differs across 33 otherwise-identical descriptions, so it is
 * kept specific and true per vendor (sourced from that vendor's own coupon-page body) to
 * avoid the templated-similarity suppression that got a third of the supplement pages
 * declined. Each is budgeted so the full composed description stays ≤155 chars (the SERP
 * cutoff). Update a vendor's clause here, not in its layout.
 */
export const couponDifferentiator: Record<string, string> = {
  "aero-peptides": "≥98% purity, third-party ISO-lab tested; COA on request.",
  "almighty-peptides": "HPLC/mass-spec tested; Buy 1 Get 1 FREE on most items.",
  "alpha-peptides": "Per-lot 5-test panel, ISO 17025-aligned lab, public COAs.",
  "ameano-peptides": "Lab-tested to 99%+ purity with a published COA per product.",
  "amino-club": "ISO-17025 tested peptides with a COA on every batch.",
  "amino-x": "US-based, third-party tested research peptides; COA on request.",
  "ascension-peptides": "99%+ multi-stage tested; large blend & stack catalog.",
  "behemoth-labz": "Third-party tested by Colmaric Analyticals; peptides & SARMs.",
  "biocollex": "U.S.-based, 99% purity, same-day shipping, cGMP certified.",
  "biolongevity-labs": "Triple per-batch lab verification; HPLC + LC-MS; COAs.",
  "crush-research": "Per-batch COAs, multi-vial tested; veteran-owned, US.",
  "ez-peptides": "Same-day shipping; 4.7/5 over 176+ reviews; lab-tested.",
  "fusion-peptide": "Topical and nasal-spray peptide formats available.",
  "glacier-aminos": "Batch-traceable COAs and cold-chain shipping.",
  "ignite-peptides": "99%+ purity, two-stage independent testing, COA per product.",
  "integrative-peptides": "Physician-trusted oral peptide supplements.",
  "la-peptides": "≥99% purity, every batch third-party tested, made in USA.",
  "limitless-biotech": "90+ compounds; HPLC + LC-MS tested; 30-day guarantee.",
  "midwest-peptide": "99%+ purity, third-party tested with a COA per product.",
  "mile-high-compounds": "8x independent US third-party testing; public COAs.",
  "modern-aminos": "US; public per-batch COA library; ISO 17025 lab.",
  "nextgen-peptides": "≥99% HPLC purity, US third-party tested, COA library.",
  "oasis-labs": "Veteran-owned with QR-verified COAs on every vial.",
  "particle-peptides": "Comprehensive EU testing, Ph. Eur. compliant.",
  "peptide-partners": "4 independent batch tests with published COAs.",
  "peptides-gg": "US-made, third-party tested per batch with COAs.",
  "peptidology": "14-point per-batch testing under ISO/IEC 17025.",
  "purerawz": "US-based; third-party tested peptides, SARMs & nootropics.",
  "purity-peptides": "99%+ HPLC/mass-spec tested with third-party COAs.",
  "royal-peptides": "cGMP/ISO-lab tested to 99%+ purity with batch COAs.",
  "science-based-peptides": "Per-lot COAs with batch number and test date.",
  "spartan-peptides": "HPLC + mass-spec verified to ≥98% purity.",
  "swiss-chems": "Public test-results page; third-party HPLC/mass-spec to 99%+.",
  "synthesis-peptides": "Per-batch HPLC testing, ≥99% purity.",
  "treasure-coast-peptides": "Florida-based; purity and concentration tested.",
  "vital-core-research": "56 compounds incl. GLP-1/2/3, SARMs, blends, capsules.",
};

/**
 * Coupon-page metadata. Both the <title> and the description are COMPOSED here from
 * vendors.ts — layouts pass only a slug (a `title` or `description` is intentionally NOT
 * accepted), so there is no per-page drift and no hardcoded string to go stale.
 *
 * Title:  "{Vendor} Discount Code: {CODE} — Save {X}%" — the code-visible format proven by
 *   the two pages Google accepts (amino-club, glacier-aminos). No "| Prof. Peptide" (the
 *   domain already shows above the title) and no date (can't fit alongside the code at the
 *   ~60-char SERP cutoff; it lives in the description). Code beats freshness when one fits.
 * Description: the Style-A shape — "Use code {CODE} at {Vendor} to save {X}% sitewide —
 *   verified and working for {month}. {differentiator}" — code first (char 9), month from
 *   the single CODES_VERIFIED_DATE constant, only couponDifferentiator[slug] varies.
 */
export function buildCouponMetadata({
  slug,
  ...rest
}: { slug: string } & Omit<Parameters<typeof buildPageMetadata>[0], "path" | "title" | "description">): Metadata {
  const v = vendors[slug];
  const pct = discountPct(slug);
  const diff = couponDifferentiator[slug];
  const title = `${v.name} Discount Code: ${v.code} — Save ${pct}%`;
  const description =
    `Use code ${v.code} at ${v.name} to save ${pct}% sitewide — ` +
    `verified and working for ${CODES_VERIFIED_DATE}.` +
    (diff ? ` ${diff}` : "");
  return buildPageMetadata({ path: `/coupons/${slug}`, title, description, ...rest });
}
