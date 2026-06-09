import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/ascension-peptides",
  title: "Ascension Peptides Coupon Code & Discount — Save 50% (2026) | Prof. Peptide",
  ogTitle: "Ascension Peptides Coupon — Save 50% | Prof. Peptide",
  description:
    "Save 50% at Ascension Peptides with discount code PROFPEPTIDE — our largest discount, verified promo code for 2026. 99%+ purity, multi-stage third-party tested.",
});

export default function AscensionPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Ascension Peptides Discount Code - Save 50%\",\"description\":\"Use code PROFPEPTIDE for 50% off at Ascension Peptides\",\"url\":\"https://profpeptide.com/coupons/ascension-peptides\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Ascension Peptides\"}}" }} />
      {children}
    </>
  );
}
