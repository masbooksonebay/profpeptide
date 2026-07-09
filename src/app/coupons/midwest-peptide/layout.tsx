import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/midwest-peptide",
  title: "Midwest Peptide Discount Code — Save 10% (Verified 2026)",
  ogTitle: "Midwest Peptide Coupon — Save 10% | Prof. Peptide",
  description:
    "Midwest Peptide discount code PROF10 saves 10% sitewide. Verified for 2026 — 99%+ purity, third-party tested with a COA per product and free same-day US shipping.",
});

export default function MidwestPeptideLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Midwest Peptide Discount Code - Save 10%\",\"description\":\"Use code PROF10 for 10% off at Midwest Peptide\",\"url\":\"https://profpeptide.com/coupons/midwest-peptide\",\"validFrom\":\"2026-06-01\",\"priceValidUntil\":\"2026-06-30\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Midwest Peptide\"}}" }} />
      {children}
    </>
  );
}
