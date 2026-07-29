import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import { CODES_VERIFIED_DATE } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "almighty-peptides",
  title: `Almighty Peptides Coupon Code & Discount — Save 20% (${CODES_VERIFIED_DATE}) | Prof. Peptide`,
  ogTitle: "Almighty Peptides Coupon — Save 20% | Prof. Peptide",
});

export default function AlmightyPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("almighty-peptides")} />
      {children}
    </>
  );
}
