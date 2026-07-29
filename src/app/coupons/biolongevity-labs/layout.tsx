import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "biolongevity-labs",
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
