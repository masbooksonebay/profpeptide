export const metadata = {
  title: "Royal Peptides Discount Code (April 2026) — Save 10% | Prof. Peptide",
  description:
    "Use Royal Peptides discount code PROFPEPTIDE to save 10%. cGMP & ISO-certified labs, 99%+ purity, purity/pH/vacuum-integrity tested per batch. US and global fulfillment.",
};

export default function RoyalPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Royal Peptides Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at Royal Peptides\",\"url\":\"https://www.profpeptide.com/coupons/royal-peptides\",\"validFrom\":\"2026-04-01\",\"priceValidUntil\":\"2026-04-30\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Royal Peptides\"}}" }} />
      {children}
    </>
  );
}
