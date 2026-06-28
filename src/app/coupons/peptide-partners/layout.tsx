import { buildPageMetadata } from "@/lib/seo";
import { vendors } from "@/data/vendors";

const v = vendors["peptide-partners"];

export const metadata = buildPageMetadata({
  path: "/coupons/peptide-partners",
  title: "Peptide Partners Coupon & Promo Code 2026 — Verified 10% Off",
  description: `Verified, working Peptide Partners coupon, promo & discount code: ${v.code} = 10% off — not a fake aggregator. 4 independent batch tests, published COAs.`,
});

export default function PeptidePartnersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Peptide Partners Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at Peptide Partners\",\"url\":\"https://profpeptide.com/coupons/peptide-partners\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Peptide Partners\"}}" }} />
      {children}
    </>
  );
}
