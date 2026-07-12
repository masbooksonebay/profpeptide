import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/synthesis-peptides",
  title: "Synthesis Peptides Discount Code: PROFPEPTIDE10 — Save 10%",
  ogTitle: "Synthesis Peptides Coupon — Save 10% | Prof. Peptide",
  description:
    "Use code PROFPEPTIDE10 at Synthesis Peptides to save 10% sitewide — verified and working for 2026. Per-batch HPLC testing, ≥99% purity, COA on request.",
});

export default function SynthesisPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Synthesis Peptides Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE10 for 10% off at Synthesis Peptides\",\"url\":\"https://profpeptide.com/coupons/synthesis-peptides\",\"validFrom\":\"2026-06-01\",\"priceValidUntil\":\"2026-06-30\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Synthesis Peptides\"}}" }} />
      {children}
    </>
  );
}
