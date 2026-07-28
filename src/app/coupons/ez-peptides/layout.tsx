import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";
import { vendors } from "@/data/vendors";

const v = vendors["ez-peptides"];
const pct = v.discount.replace(" off", "");

export const metadata = buildCouponMetadata({
  slug: "ez-peptides",
  title: `EZ Peptides Discount Code — Save ${pct} (2026) | Prof. Peptide`,
  description: `Use code ${v.code} for ${v.discount} at EZ Peptides (US) — verified 2026 promo. Same-day shipping, 4.7/5 across 176+ reviews, third-party tested.`,
});

export default function EZPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("ez-peptides")} />
      {children}
    </>
  );
}
