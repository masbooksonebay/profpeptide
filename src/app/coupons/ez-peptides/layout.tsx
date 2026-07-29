import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";
import { vendors, CODES_VERIFIED_DATE } from "@/data/vendors";

const v = vendors["ez-peptides"];
const pct = v.discount.replace(" off", "");

export const metadata = buildCouponMetadata({
  slug: "ez-peptides",
  title: `EZ Peptides Discount Code — Save ${pct} (${CODES_VERIFIED_DATE}) | Prof. Peptide`,
});

export default function EZPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("ez-peptides")} />
      {children}
    </>
  );
}
