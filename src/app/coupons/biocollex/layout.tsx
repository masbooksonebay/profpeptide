import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import { CODES_VERIFIED_DATE } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "biocollex",
  title: `BioCollex Coupon Code & Discount — Save 10% (${CODES_VERIFIED_DATE}) | Prof. Peptide`,
});

export default function BioCollexLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("biocollex")} />
      {children}
    </>
  );
}
