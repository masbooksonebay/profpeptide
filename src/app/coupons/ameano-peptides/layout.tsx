import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";
import { vendors } from "@/data/vendors";

const v = vendors["ameano-peptides"];

export const metadata = buildCouponMetadata({
  slug: "ameano-peptides",
  title: `Ameano Peptides Discount Code: ${v.code} — Save 10%`,
});

export default function AmeanoPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("ameano-peptides")} />
      {children}
    </>
  );
}
