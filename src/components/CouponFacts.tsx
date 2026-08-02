import { vendorFactsLine } from "@/data/vendors";

/**
 * The coupon page's facts SUBTITLE, directly under the H1 — region, the vendor's purity
 * STANDARD, and COA/lab testing, as neutral description rather than trust-badge claims.
 * Replaces the old three-pill header row (a bare "Verified" pill + a "Purity Verified" pill
 * that read as Prof. Peptide attesting purity — PP tests nothing).
 *
 * Fully DATA-DRIVEN: the text is composed by vendorFactsLine(slug) from structured fields in
 * vendors.ts, so there is no per-page string to drift into the hardcoded-value rot this
 * replaces. Renders nothing if the slug is unknown. Styled larger/darker than a caption but
 * still clearly secondary to the H1.
 */
export function CouponFacts({ slug }: { slug: string }) {
  const line = vendorFactsLine(slug);
  if (!line) return null;
  return <p className="text-sm text-gray-600 dark:text-slate-300 mb-6">{line}</p>;
}
