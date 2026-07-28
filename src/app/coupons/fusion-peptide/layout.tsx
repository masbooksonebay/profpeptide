import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "fusion-peptide",
  title: "Fusion Peptide Coupon Code & Discount — Save 15% (2026) | Prof. Peptide",
  ogTitle: "Fusion Peptide Coupon — Save 15% | Prof. Peptide",
  description:
    "Save 15% at Fusion Peptide with discount code PROFPEPTIDE — verified promo code for 2026. Topical and nasal spray formats available.",
});

export default function FusionPeptideLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("fusion-peptide")} />
      {children}
    </>
  );
}
