import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "particle-peptides",
  title: "Particle Peptides Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  ogTitle: "Particle Peptides Coupon — Save 10% | Prof. Peptide",
  description:
    "Save 10% at Particle Peptides with discount code PROFPEPTIDE \u2014 verified promo code for 2026. Europe's most comprehensive peptide testing, Ph. Eur. compliant.",
});

export default function ParticlePeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("particle-peptides")} />
      {children}
    </>
  );
}
