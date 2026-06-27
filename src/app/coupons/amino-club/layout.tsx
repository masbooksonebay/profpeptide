import { buildPageMetadata } from "@/lib/seo";
import { vendors } from "@/data/vendors";

const v = vendors["amino-club"];

export const metadata = buildPageMetadata({
  path: "/coupons/amino-club",
  title: "Amino Club Coupon & Promo Code 2026 — Verified 20% Off",
  description: `Verified, working Amino Club coupon: code ${v.code} = 20% off — not a fake aggregator promo. Discount on ISO-17025, 99%+ HPLC-tested vials with COAs.`,
});

export default function AminoClubLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Amino Club Discount Code - Save 20%\",\"description\":\"Use code PROFPEPTIDE for 20% off at Amino Club\",\"url\":\"https://profpeptide.com/coupons/amino-club\",\"validFrom\":\"2026-06-01\",\"priceValidUntil\":\"2026-06-30\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Amino Club\"}}" }} />
      {children}
    </>
  );
}
