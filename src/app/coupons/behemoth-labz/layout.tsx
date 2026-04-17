export const metadata = {
  title: "Behemoth Labz Discount Code (April 2026) — Save 10% | Prof. Peptide",
  description:
    "Use Behemoth Labz discount code PROF10 to save 10% on research compounds. US-based supplier with third-party tested SARMs, peptides, nootropics, and prohormones. Testing by Colmaric Analyticals.",
};

export default function BehemothLabzLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Offer","name":"Behemoth Labz Discount Code - Save 10%","description":"Use code PROF10 for 10% off at Behemoth Labz","url":"https://profpeptide.com/coupons/behemoth-labz","validFrom":"2026-04-01","priceValidUntil":"2026-04-30","seller":{"@type":"Organization","name":"Behemoth Labz"}}) }} />
      {children}
    </>
  );
}
