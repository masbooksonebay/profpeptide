import { buildPageMetadata } from "@/lib/seo";
import { vendors } from "@/data/vendors";

const v = vendors["amino-club"];
const pct = v.discount.replace(" off", "");

export const metadata = buildPageMetadata({
  path: "/coupons/amino-club",
  title: `Amino Club Discount Code — Save ${pct} (2026) | Prof. Peptide`,
  description: `Use code ${v.code} for ${v.discount} at Amino Club (US) — verified 2026 promo. Third-party tested to 99%+ HPLC purity (ISO 17025) with batch-specific COAs.`,
});

export default function AminoClubLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Amino Club Discount Code - Save 20%\",\"description\":\"Use code PROFPEPTIDE for 20% off at Amino Club\",\"url\":\"https://profpeptide.com/coupons/amino-club\",\"validFrom\":\"2026-06-01\",\"priceValidUntil\":\"2026-06-30\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Amino Club\"}}" }} />
      {children}
    </>
  );
}
