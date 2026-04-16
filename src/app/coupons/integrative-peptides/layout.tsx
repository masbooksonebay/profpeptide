export const metadata = {
  title: "Integrative Peptides Discount Code (April 2026) — Save 10% | Prof. Peptide",
  description:
    "Get 10% off at Integrative Peptides with code PROFPEPTIDE. Verified coupon and promo code for physician-trusted oral peptide supplements.",
};

export default function IntegrativePeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Integrative Peptides Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at Integrative Peptides\",\"url\":\"https://www.profpeptide.com/coupons/integrative-peptides\",\"validFrom\":\"2026-04-01\",\"priceValidUntil\":\"2026-04-30\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Integrative Peptides\"}}" }} />
      {children}
    </>
  );
}
