import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import { CODES_VERIFIED_DATE } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "ascension-peptides",
  title: `Ascension Peptides Coupon Code & Discount — Save 50% (${CODES_VERIFIED_DATE}) | Prof. Peptide`,
  ogTitle: "Ascension Peptides Coupon — Save 50% | Prof. Peptide",
});

export default function AscensionPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("ascension-peptides")} />
      {children}
    </>
  );
}
