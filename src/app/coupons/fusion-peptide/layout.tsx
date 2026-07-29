import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import { CODES_VERIFIED_DATE } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "fusion-peptide",
  title: `Fusion Peptide Coupon Code & Discount — Save 15% (${CODES_VERIFIED_DATE}) | Prof. Peptide`,
  ogTitle: "Fusion Peptide Coupon — Save 15% | Prof. Peptide",
});

export default function FusionPeptideLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("fusion-peptide")} />
      {children}
    </>
  );
}
