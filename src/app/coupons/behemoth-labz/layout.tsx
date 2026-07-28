import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "behemoth-labz",
  title: "Behemoth Labz Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  description:
    "Save 10% at Behemoth Labz with discount code PROF10 — verified promo code for 2026. US-based, third-party tested by Colmaric Analyticals: peptides, SARMs, nootropics.",
});

export default function BehemothLabzLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("behemoth-labz")} />
      {children}
    </>
  );
}
