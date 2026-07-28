import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";
import { vendors } from "@/data/vendors";

const v = vendors["peptide-partners"];

export const metadata = buildCouponMetadata({
  slug: "peptide-partners",
  title: `Peptide Partners Discount Code: ${v.code} — Save 10%`,
  description: `Use code ${v.code} at Peptide Partners to save 10% sitewide — verified and working for 2026. 4 independent batch tests with published COAs.`,
});

export default function PeptidePartnersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("peptide-partners")} />
      {children}
    </>
  );
}
