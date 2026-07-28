import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "mile-high-compounds",
  title: "Mile High Compounds Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  ogTitle: "Mile High Compounds Coupon — Save 10% | Prof. Peptide",
  description:
    "Save 10% at Mile High Compounds with discount code PROFPEPTIDE — verified promo code for 2026. 99%+ purity, 8x independent American third-party testing, public COAs.",
});

export default function MileHighCompoundsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("mile-high-compounds")} />
      {children}
    </>
  );
}
