import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import { CODES_VERIFIED_DATE } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "la-peptides",
  title: `LA Peptides Coupon Code & Discount — Save 10% (${CODES_VERIFIED_DATE}) | Prof. Peptide`,
  ogTitle: "LA Peptides Coupon — Save 10% | Prof. Peptide",
});

export default function LAPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("la-peptides")} />
      {children}
    </>
  );
}
