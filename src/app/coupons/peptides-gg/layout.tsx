import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "peptides-gg",
  title: "Peptides.gg Discount Code: PROF15 — Save 15%",
  description:
    "Use code PROF15 at Peptides.gg to save 15% sitewide — verified and working for 2026. US-made, third-party tested per batch with COAs.",
});

export default function PeptidesGgLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("peptides-gg")} />
      {children}
    </>
  );
}
