import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import { CODES_VERIFIED_DATE } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "spartan-peptides",
  title: `Spartan Peptides Coupon Code & Discount — Save 10% (${CODES_VERIFIED_DATE}) | Prof. Peptide`,
  ogTitle: "Spartan Peptides Coupon — Save 10% | Prof. Peptide",
});

export default function SpartanPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("spartan-peptides")} />
      {children}
    </>
  );
}
