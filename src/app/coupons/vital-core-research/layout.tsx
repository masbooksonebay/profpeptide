import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "vital-core-research",
  ogTitle: "Vital Core Research Coupon — Save 20% | Prof. Peptide",
});

export default function VitalCoreResearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("vital-core-research")} />
      {children}
    </>
  );
}
