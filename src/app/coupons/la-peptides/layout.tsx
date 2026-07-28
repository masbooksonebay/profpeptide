import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "la-peptides",
  title: "LA Peptides Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  ogTitle: "LA Peptides Coupon — Save 10% | Prof. Peptide",
  description:
    "Save 10% at LA Peptides with discount code PROFPEPTIDE — verified promo code for 2026. ≥99% purity, every batch third-party tested, made in the USA.",
});

export default function LAPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("la-peptides")} />
      {children}
    </>
  );
}
