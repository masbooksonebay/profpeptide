import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "vital-core-research",
  title: "Vital Core Research Coupon Code & Discount — Save 20% (2026) | Prof. Peptide",
  ogTitle: "Vital Core Research Coupon — Save 20% | Prof. Peptide",
  description:
    "Save 20% at Vital Core Research with discount code PROF20 — verified promo code for 2026. 56 compounds including GLP-1/2/3, SARMs, blends, capsule formats.",
});

export default function VitalCoreResearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("vital-core-research")} />
      {children}
    </>
  );
}
