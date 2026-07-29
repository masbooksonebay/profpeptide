import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import { CODES_VERIFIED_DATE } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "vital-core-research",
  title: `Vital Core Research Coupon Code & Discount — Save 20% (${CODES_VERIFIED_DATE}) | Prof. Peptide`,
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
