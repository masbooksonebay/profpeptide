export const metadata = {
  alternates: { canonical: "/coupons/limitless-biotech" },
  title: "Limitless Biotech Discount Code (April 2026) — Save 10% | Prof. Peptide",
  description:
    "Use Limitless Biotech discount code PROFPEPTIDE to save 10%. 90+ compounds, HPLC + LC-MS testing, COA on every product page. Worldwide shipping, 30-day guarantee.",
};

export default function LimitlessBiotechLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Limitless Biotech Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at Limitless Biotech\",\"url\":\"https://profpeptide.com/coupons/limitless-biotech\",\"validFrom\":\"2026-04-01\",\"priceValidUntil\":\"2026-04-30\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Limitless Biotech\"}}" }} />
      {children}
    </>
  );
}
