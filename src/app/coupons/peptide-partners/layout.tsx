export const metadata = {
  title: "Peptide Partners Discount Code — Save 10% (April 2026) | Prof. Peptide",
  description:
    "Use Peptide Partners discount code PROFPEPTIDE to save 10% on research peptides. Four independent test types per batch. Purity, endotoxin, heavy metals, and sterility verified.",
};

export default function PeptidePartnersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Peptide Partners Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at Peptide Partners\",\"url\":\"https://www.profpeptide.com/coupons/peptide-partners\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Peptide Partners\"}}" }} />
      {children}
    </>
  );
}
