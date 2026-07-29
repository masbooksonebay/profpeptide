import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";


export const metadata = buildCouponMetadata({
  slug: "peptide-partners",
});

export default function PeptidePartnersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("peptide-partners")} />
      {children}
    </>
  );
}
