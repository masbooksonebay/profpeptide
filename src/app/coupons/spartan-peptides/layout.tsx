import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/spartan-peptides",
  title: "Spartan Peptides Discount Code (May 2026) — Save 10% | Prof. Peptide",
  description:
    "Use Spartan Peptides discount code PROFPEPTIDE to save 10% on research peptides. HPLC + mass spectrometry verified. \u226598% purity guaranteed. Independent third-party tested.",
});

export default function SpartanPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Spartan Peptides Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at Spartan Peptides\",\"url\":\"https://profpeptide.com/coupons/spartan-peptides\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Spartan Peptides\"}}" }} />
      {children}
    </>
  );
}
