export const metadata = {
  title: "Behemoth Labz Discount Code (April 2026) | Prof. Peptide",
  description:
    "Behemoth Labz discount code coming soon. US-based supplier with third-party tested SARMs, peptides, nootropics, and prohormones. Testing by Colmaric Analyticals.",
};

export default function BehemothLabzLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Offer","name":"Behemoth Labz Discount Code","description":"Discount code coming soon for Behemoth Labz","url":"https://www.profpeptide.com/coupons/behemoth-labz","seller":{"@type":"Organization","name":"Behemoth Labz"}}) }} />
      {children}
    </>
  );
}
