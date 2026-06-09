import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/midwest-peptide",
  title: "Midwest Peptide Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  ogTitle: "Midwest Peptide Coupon — Save 10% | Prof. Peptide",
  description:
    "Save 10% at Midwest Peptide with discount code PROF10 — verified promo code for 2026. Research-use-only peptides at 99%+ purity, third-party lab-tested with a COA per product, free same-day US shipping.",
});

export default function MidwestPeptideLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Midwest Peptide Discount Code - Save 10%\",\"description\":\"Use code PROF10 for 10% off at Midwest Peptide\",\"url\":\"https://profpeptide.com/coupons/midwest-peptide\",\"validFrom\":\"2026-06-01\",\"priceValidUntil\":\"2026-06-30\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Midwest Peptide\"}}" }} />
      {children}
    </>
  );
}
