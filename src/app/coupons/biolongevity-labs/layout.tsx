import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import { CODES_VERIFIED_DATE } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "biolongevity-labs",
  title: `Biolongevity Labs Coupon Code & Discount — Save 15% with PROFPEPTIDE (${CODES_VERIFIED_DATE}) | Prof. Peptide`,
  ogTitle: "Biolongevity Labs Coupon — Save 15% | Prof. Peptide",
});

export default function BiolongevityLabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("biolongevity-labs")} />
      {children}
    </>
  );
}
