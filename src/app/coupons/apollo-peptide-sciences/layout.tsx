export const metadata = {
  title: "Apollo Peptide Sciences Discount Code — Save 10% (April 2026) | Prof. Peptide",
  description:
    "Use Apollo Peptide Sciences discount code PROFPEPTIDE to save 10% on research peptides. COA and endotoxin reports on every product. Independent third-party tested.",
};

export default function ApolloPeptideSciencesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Apollo Peptide Sciences Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at Apollo Peptide Sciences\",\"url\":\"https://www.profpeptide.com/coupons/apollo-peptide-sciences\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Apollo Peptide Sciences\"}}" }} />
      {children}
    </>
  );
}
