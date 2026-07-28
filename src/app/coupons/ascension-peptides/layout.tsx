import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "ascension-peptides",
  title: "Ascension Peptides Coupon Code & Discount — Save 50% (2026) | Prof. Peptide",
  ogTitle: "Ascension Peptides Coupon — Save 50% | Prof. Peptide",
  description:
    "Save 50% at Ascension Peptides with discount code PROFPEPTIDE — our largest discount, verified promo code for 2026. 99%+ purity, multi-stage third-party tested.",
});

export default function AscensionPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("ascension-peptides")} />
      {children}
    </>
  );
}
