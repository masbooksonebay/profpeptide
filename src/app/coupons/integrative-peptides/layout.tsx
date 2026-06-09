import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/integrative-peptides",
  title: "Integrative Peptides Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  ogTitle: "Integrative Peptides Coupon — Save 10% | Prof. Peptide",
  description:
    "Save 10% at Integrative Peptides with discount code PROFPEPTIDE — verified promo code for 2026. Physician-trusted oral peptide supplements.",
});

export default function IntegrativePeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Integrative Peptides Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at Integrative Peptides\",\"url\":\"https://profpeptide.com/coupons/integrative-peptides\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Integrative Peptides\"}}" }} />
      {children}
    </>
  );
}
