import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "purerawz",
  title: "PureRawz Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  description:
    "Save 10% at PureRawz with discount code PROF10 — verified promo code for 2026. US-based, third-party tested peptides, SARMs, nootropics, research compounds.",
});

export default function PureRawzLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("purerawz")} />
      {children}
    </>
  );
}
