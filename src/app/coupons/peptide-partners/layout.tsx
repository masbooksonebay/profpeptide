import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/peptide-partners",
  title: "Peptide Partners Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  description:
    "Save 10% at Peptide Partners with discount code PROFPEPTIDE — verified promo code for 2026. Four independent tests per batch: purity, endotoxin, heavy metals, sterility.",
});

export default function PeptidePartnersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Peptide Partners Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at Peptide Partners\",\"url\":\"https://profpeptide.com/coupons/peptide-partners\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Peptide Partners\"}}" }} />
      {children}
    </>
  );
}
