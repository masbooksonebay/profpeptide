import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";
import { vendors } from "@/data/vendors";

const v = vendors["ameano-peptides"];

export const metadata = buildCouponMetadata({
  slug: "ameano-peptides",
  title: `Ameano Peptides Discount Code: ${v.code} — Save 10%`,
  description: `Use code ${v.code} at Ameano Peptides to save 10% sitewide — verified and working for 2026. Lab-tested to 99%+ purity with a published COA per product.`,
});

export default function AmeanoPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("ameano-peptides")} />
      {children}
    </>
  );
}
