import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/vital-core-research",
  title: "Vital Core Research Coupon Code & Discount — Save 20% (2026) | Prof. Peptide",
  ogTitle: "Vital Core Research Coupon — Save 20% | Prof. Peptide",
  description:
    "Save 20% at Vital Core Research with discount code PROF20 — verified promo code for 2026. 56 compounds including GLP-1/2/3, SARMs, blends, capsule formats.",
});

export default function VitalCoreResearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Vital Core Research Discount Code - Save 20%\",\"description\":\"Use code PROF20 for 20% off at Vital Core Research\",\"url\":\"https://profpeptide.com/coupons/vital-core-research\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Vital Core Research\"}}" }} />
      {children}
    </>
  );
}
