export const metadata = {
  alternates: { canonical: "/coupons/nordic-peptides" },
  title: "Nordic Peptides Discount Code (April 2026) | Prof. Peptide",
  description:
    "Get the latest Nordic Peptides discount code and promo code. Save on research-grade pen-peptides from Norway and Iceland. Verified by Prof. Peptide.",
};

export default function NordicPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Nordic Peptides Discount Code\",\"description\":\"Discount code coming soon for Nordic Peptides\",\"url\":\"https://profpeptide.com/coupons/nordic-peptides\",\"validFrom\":\"2026-04-01\",\"priceValidUntil\":\"2026-04-30\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Nordic Peptides\"}}" }} />
      {children}
    </>
  );
}
