export const metadata = {
  title: "Fusion Peptide Discount Code (April 2026) — Save 15% | Prof. Peptide",
  description:
    "Use Fusion Peptide discount code MARK15 to save 15% on research peptides. Verified promo code updated April 2026. Topical and nasal spray formats available.",
};

export default function FusionPeptideLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Fusion Peptide Discount Code - Save 15%\",\"description\":\"Use code PROFPEPTIDE for 15% off at Fusion Peptide\",\"url\":\"https://www.profpeptide.com/coupons/fusion-peptide\",\"validFrom\":\"2026-04-01\",\"priceValidUntil\":\"2026-04-30\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Fusion Peptide\"}}" }} />
      {children}
    </>
  );
}
