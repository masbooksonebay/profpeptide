import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import { CODES_VERIFIED_DATE } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "swiss-chems",
  title: `Swiss Chems Coupon Code & Discount — Save 10% with PROF10 (${CODES_VERIFIED_DATE}) | Prof. Peptide`,
  ogTitle: "Swiss Chems Coupon — Save 10% | Prof. Peptide",
});

export default function SwissChemsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("swiss-chems")} />
      {children}
    </>
  );
}
