import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "integrative-peptides",
  title: "Integrative Peptides Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  ogTitle: "Integrative Peptides Coupon — Save 10% | Prof. Peptide",
  description:
    "Save 10% at Integrative Peptides with discount code PROFPEPTIDE — verified promo code for 2026. Physician-trusted oral peptide supplements.",
});

export default function IntegrativePeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("integrative-peptides")} />
      {children}
    </>
  );
}
