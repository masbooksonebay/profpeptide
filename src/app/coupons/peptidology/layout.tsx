import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "peptidology",
  ogTitle: "Peptidology Coupon — Save 10% | Prof. Peptide",
});

export default function PeptidologyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("peptidology")} />
      {children}
    </>
  );
}
