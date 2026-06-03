import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/particle-peptides",
  title: "Particle Peptides Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  description:
    "Save 10% at Particle Peptides with discount code PROFPEPTIDE \u2014 verified promo code for 2026. Europe's most comprehensive peptide testing, Ph. Eur. compliant.",
});

export default function ParticlePeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Particle Peptides Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at Particle Peptides\",\"url\":\"https://profpeptide.com/coupons/particle-peptides\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Particle Peptides\"}}" }} />
      {children}
    </>
  );
}
