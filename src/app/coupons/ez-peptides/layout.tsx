import { buildPageMetadata } from "@/lib/seo";
import { vendors } from "@/data/vendors";

const v = vendors["ez-peptides"];
const pct = v.discount.replace(" off", "");

export const metadata = buildPageMetadata({
  path: "/coupons/ez-peptides",
  title: `EZ Peptides Discount Code — Save ${pct} (2026) | Prof. Peptide`,
  description: `Use code ${v.code} for ${v.discount} at EZ Peptides (US) — verified 2026 promo. Same-day shipping, 4.7/5 across 176+ reviews, third-party tested.`,
});

export default function EZPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"EZ Peptides Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at EZ Peptides\",\"url\":\"https://profpeptide.com/coupons/ez-peptides\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"EZ Peptides\"}}" }} />
      {children}
    </>
  );
}
