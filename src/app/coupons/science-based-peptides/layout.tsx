import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import { CODES_VERIFIED_DATE } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "science-based-peptides",
  title: `Science Based Peptides Coupon Code & Discount — Save 10% with PROFPEPTIDE (${CODES_VERIFIED_DATE}) | Prof. Peptide`,
  ogTitle: "Science Based Peptides Coupon — Save 10% | Prof. Peptide",
});

export default function ScienceBasedPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("science-based-peptides")} />
      {children}
    </>
  );
}
