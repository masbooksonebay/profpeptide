import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import { CODES_VERIFIED_DATE } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "alpha-peptides",
  title: `Alpha Peptides Coupon Code & Discount — Save 10% with PROFPEPTIDE (${CODES_VERIFIED_DATE}) | Prof. Peptide`,
  ogTitle: "Alpha Peptides Coupon — Save 10% | Prof. Peptide",
});

export default function AlphaPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("alpha-peptides")} />
      {children}
    </>
  );
}
