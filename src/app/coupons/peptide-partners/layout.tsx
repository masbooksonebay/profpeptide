import { buildPageMetadata } from "@/lib/seo";
import { vendors } from "@/data/vendors";

const v = vendors["peptide-partners"];
const pct = v.discount.replace(" off", "");

export const metadata = buildPageMetadata({
  path: "/coupons/peptide-partners",
  title: `Peptide Partners Discount Code — Save ${pct} (2026)`,
  description: `Use code ${v.code} for ${v.discount} at Peptide Partners (US) — our Editor's Pick. Four tests per batch: purity, endotoxin, heavy metals, sterility.`,
});

export default function PeptidePartnersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Peptide Partners Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at Peptide Partners\",\"url\":\"https://profpeptide.com/coupons/peptide-partners\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Peptide Partners\"}}" }} />
      {children}
    </>
  );
}
