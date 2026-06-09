import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/fusion-peptide",
  title: "Fusion Peptide Coupon Code & Discount — Save 15% (2026) | Prof. Peptide",
  ogTitle: "Fusion Peptide Coupon — Save 15% | Prof. Peptide",
  description:
    "Save 15% at Fusion Peptide with discount code PROFPEPTIDE — verified promo code for 2026. Topical and nasal spray formats available.",
});

export default function FusionPeptideLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Fusion Peptide Discount Code - Save 15%\",\"description\":\"Use code PROFPEPTIDE for 15% off at Fusion Peptide\",\"url\":\"https://profpeptide.com/coupons/fusion-peptide\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Fusion Peptide\"}}" }} />
      {children}
    </>
  );
}
