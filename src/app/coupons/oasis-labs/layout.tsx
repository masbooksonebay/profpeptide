export const metadata = {
  title: "Oasis Labs Discount Code (April 2026) — Save 10% | Prof. Peptide",
  description:
    "Use Oasis Labs discount code PROFPEPTIDE to save 10% on research peptides. Veteran-owned, US-based, QR-verified COAs, medical-grade -20\u00B0C storage, FedEx 2Day shipping.",
};

export default function OasisLabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Oasis Labs Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at Oasis Labs\",\"url\":\"https://www.profpeptide.com/coupons/oasis-labs\",\"validFrom\":\"2026-04-01\",\"priceValidUntil\":\"2026-04-30\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Oasis Labs\"}}" }} />
      {children}
    </>
  );
}
