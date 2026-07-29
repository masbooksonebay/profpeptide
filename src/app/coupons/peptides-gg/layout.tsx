import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "peptides-gg",
  title: "Peptides.gg Discount Code: PROF15 — Save 15%",
});

export default function PeptidesGgLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("peptides-gg")} />
      {children}
    </>
  );
}
