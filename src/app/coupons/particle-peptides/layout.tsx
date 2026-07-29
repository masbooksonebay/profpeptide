import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "particle-peptides",
  ogTitle: "Particle Peptides Coupon — Save 10% | Prof. Peptide",
});

export default function ParticlePeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("particle-peptides")} />
      {children}
    </>
  );
}
