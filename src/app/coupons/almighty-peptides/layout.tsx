export const metadata = {
  alternates: { canonical: "/coupons/almighty-peptides" },
  title: "Almighty Peptides Discount Code (April 2026) — Save 20% | Prof. Peptide",
  description:
    "Use Almighty Peptides discount code profpep to save 10%. HPLC & mass spec tested. Buy 1 Get 1 FREE on most products. Peptides, capsules, and research liquids available.",
};

export default function AlmightyPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Almighty Peptides Discount Code - Save 20%\",\"description\":\"Use code PROFPEPTIDE for 20% off at Almighty Peptides\",\"url\":\"https://profpeptide.com/coupons/almighty-peptides\",\"validFrom\":\"2026-04-01\",\"priceValidUntil\":\"2026-04-30\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Almighty Peptides\"}}" }} />
      {children}
    </>
  );
}
