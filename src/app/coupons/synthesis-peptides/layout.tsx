import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/synthesis-peptides",
  title: "Synthesis Peptides Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  description:
    "Save 10% at Synthesis Peptides with discount code PROFPEPTIDE10 — verified promo code for 2026. Per-batch third-party HPLC testing, ≥99% verified purity, COA on request.",
});

export default function SynthesisPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Synthesis Peptides Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE10 for 10% off at Synthesis Peptides\",\"url\":\"https://profpeptide.com/coupons/synthesis-peptides\",\"validFrom\":\"2026-06-01\",\"priceValidUntil\":\"2026-06-30\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Synthesis Peptides\"}}" }} />
      {children}
    </>
  );
}
