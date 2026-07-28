import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "oasis-labs",
  title: "Oasis Labs Discount Code: PROF15 — Save 15%",
  description:
    "Use code PROF15 at Oasis Labs to save 15% sitewide \u2014 verified and working for 2026. Veteran-owned with QR-verified COAs on every vial.",
});

export default function OasisLabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("oasis-labs")} />
      {children}
    </>
  );
}
