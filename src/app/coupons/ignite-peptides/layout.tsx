export const metadata = {
  title: "Ignite Peptides Discount Code (April 2026) — Save 10% | Prof. Peptide",
  description:
    "Use Ignite Peptides discount code welcome10 to save 10% on research peptides. 99%+ purity, two-stage independent testing, COA on every product. US-based, 40+ compounds.",
};

export default function IgnitePeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Ignite Peptides Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at Ignite Peptides\",\"url\":\"https://www.profpeptide.com/coupons/ignite-peptides\",\"validFrom\":\"2026-04-01\",\"priceValidUntil\":\"2026-04-30\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Ignite Peptides\"}}" }} />
      {children}
    </>
  );
}
