import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";
import { vendors, CODES_VERIFIED_DATE } from "@/data/vendors";

const v = vendors["purity-peptides"];

export const metadata = buildCouponMetadata({
  slug: "purity-peptides",
  title: `Purity Peptides Coupon & Promo Code ${CODES_VERIFIED_DATE} — Verified 15% Off`,
});

export default function PurityPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("purity-peptides")} />
      {children}
    </>
  );
}
