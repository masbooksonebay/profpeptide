export const metadata = {
  alternates: { canonical: "/coupons/ez-peptides" },
  title: "EZ Peptides Discount Code (April 2026) — Save 10% | Prof. Peptide",
  description:
    "Use EZ Peptides discount code PROFPEPTIDE to save 10%. U.S.-based supplier with same-day shipping, 4.7/5 rating, and third-party tested peptides.",
};

export default function EZPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"EZ Peptides Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at EZ Peptides\",\"url\":\"https://profpeptide.com/coupons/ez-peptides\",\"validFrom\":\"2026-04-01\",\"priceValidUntil\":\"2026-04-30\",\"seller\":{\"@type\":\"Organization\",\"name\":\"EZ Peptides\"}}" }} />
      {children}
    </>
  );
}
