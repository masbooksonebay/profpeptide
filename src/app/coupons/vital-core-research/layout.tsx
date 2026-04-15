export const metadata = {
  title: "Vital Core Research Discount Code — Save 20% (April 2026) | Prof. Peptide",
  description:
    "Use Vital Core Research discount code PROFPEPTIDE to save 20%. 56 compounds including GLP-1/2/3, SARMs, peptide blends, and capsule formats. COA on every product page.",
};

export default function VitalCoreResearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Vital Core Research Discount Code - Save 20%\",\"description\":\"Use code PROFPEPTIDE for 20% off at Vital Core Research\",\"url\":\"https://www.profpeptide.com/coupons/vital-core-research\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Vital Core Research\"}}" }} />
      {children}
    </>
  );
}
