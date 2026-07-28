import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "ignite-peptides",
  title: "Ignite Peptides Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  ogTitle: "Ignite Peptides Coupon — Save 10% | Prof. Peptide",
  description:
    "Save 10% at Ignite Peptides with discount code PROF10 — verified promo code for 2026. 99%+ purity, two-stage independent testing, COA on every product.",
});

export default function IgnitePeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("ignite-peptides")} />
      {children}
    </>
  );
}
