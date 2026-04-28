export const metadata = {
  alternates: { canonical: "/coupons/oasis-labs" },
  title: "Oasis Labs Discount Code (April 2026) — Save 15% | Prof. Peptide",
  description:
    "Use Oasis Labs discount code PROFPEPTIDE15 to save 15% on research peptides. Veteran-owned, US-based, QR-verified COAs, medical-grade -20\u00B0C storage, FedEx 2Day shipping.",
};

export default function OasisLabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Oasis Labs Discount Code - Save 15%\",\"description\":\"Use code PROFPEPTIDE15 for 15% off at Oasis Labs\",\"url\":\"https://profpeptide.com/coupons/oasis-labs\",\"validFrom\":\"2026-04-01\",\"priceValidUntil\":\"2026-04-30\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Oasis Labs\"}}" }} />
      {children}
    </>
  );
}
