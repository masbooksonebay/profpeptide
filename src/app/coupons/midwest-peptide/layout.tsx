import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "midwest-peptide",
  title: "Midwest Peptide Discount Code: PROF10 — Save 10%",
  ogTitle: "Midwest Peptide Coupon — Save 10% | Prof. Peptide",
  description:
    "Use code PROF10 at Midwest Peptide to save 10% sitewide — verified and working for 2026. 99%+ purity, third-party tested with a COA per product.",
});

export default function MidwestPeptideLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("midwest-peptide")} />
      {children}
    </>
  );
}
