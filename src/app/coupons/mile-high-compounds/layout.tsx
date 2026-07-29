import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import { CODES_VERIFIED_DATE } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "mile-high-compounds",
  title: `Mile High Compounds Coupon Code & Discount — Save 10% (${CODES_VERIFIED_DATE}) | Prof. Peptide`,
  ogTitle: "Mile High Compounds Coupon — Save 10% | Prof. Peptide",
});

export default function MileHighCompoundsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("mile-high-compounds")} />
      {children}
    </>
  );
}
