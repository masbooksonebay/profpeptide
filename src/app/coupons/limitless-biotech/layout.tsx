import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "limitless-biotech",
  title: "Limitless Biotech Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  ogTitle: "Limitless Biotech Coupon — Save 10% | Prof. Peptide",
  description:
    "Save 10% at Limitless Biotech with discount code PROFPEPTIDE — verified promo code for 2026. 90+ compounds, HPLC + LC-MS testing, worldwide shipping, 30-day guarantee.",
});

export default function LimitlessBiotechLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("limitless-biotech")} />
      {children}
    </>
  );
}
