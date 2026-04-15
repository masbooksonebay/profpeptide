export const metadata = {
  title: "BioCollex Discount Code (April 2026) — Save 10% | Prof. Peptide",
  description:
    "Use BioCollex discount code PROFPEPTIDE to save 10%. U.S.-based supplier with 99% purity, same-day shipping, and C-GMP certified manufacturing.",
};

export default function BioCollexLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"BioCollex Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at BioCollex\",\"url\":\"https://www.profpeptide.com/coupons/biocollex\",\"seller\":{\"@type\":\"Organization\",\"name\":\"BioCollex\"}}" }} />
      {children}
    </>
  );
}
