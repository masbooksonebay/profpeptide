import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "royal-peptides",
  title: "Royal Peptides Discount Code: PROF10 — Save 10%",
  ogTitle: "Royal Peptides Coupon — Save 10% | Prof. Peptide",
  description:
    "Use code PROF10 at Royal Peptides to save 10% sitewide — verified and working for 2026. cGMP/ISO-lab tested to 99%+ purity with batch COAs.",
});

export default function RoyalPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("royal-peptides")} />
      {children}
    </>
  );
}
