import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import { CODES_VERIFIED_DATE } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "nextgen-peptides",
  title: `NextGen Peptides Coupon Code & Discount — Save 10% (${CODES_VERIFIED_DATE}) | Prof. Peptide`,
  ogTitle: "NextGen Peptides Coupon — Save 10% | Prof. Peptide",
});

export default function NextGenPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("nextgen-peptides")} />
      {children}
    </>
  );
}
