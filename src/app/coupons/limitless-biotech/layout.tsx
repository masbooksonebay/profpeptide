import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import { CODES_VERIFIED_DATE } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "limitless-biotech",
  title: `Limitless Biotech Coupon Code & Discount — Save 10% (${CODES_VERIFIED_DATE}) | Prof. Peptide`,
  ogTitle: "Limitless Biotech Coupon — Save 10% | Prof. Peptide",
});

export default function LimitlessBiotechLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("limitless-biotech")} />
      {children}
    </>
  );
}
