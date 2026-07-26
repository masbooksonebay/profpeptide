import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/la-peptides",
  title: "LA Peptides Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  ogTitle: "LA Peptides Coupon — Save 10% | Prof. Peptide",
  description:
    "Save 10% at LA Peptides with discount code PROFPEPTIDE — verified promo code for 2026. ≥99% purity, every batch third-party tested, made in the USA.",
});

export default function LAPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"LA Peptides Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at LA Peptides\",\"url\":\"https://profpeptide.com/coupons/la-peptides\",\"validFrom\":\"2026-07-01\",\"priceValidUntil\":\"2026-12-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"LA Peptides\"}}" }} />
      {children}
    </>
  );
}
