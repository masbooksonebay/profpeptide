import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";
import { vendors } from "@/data/vendors";

const v = vendors["aero-peptides"];

export const metadata = buildCouponMetadata({
  slug: "aero-peptides",
  title: `Aero Peptides Discount Code: ${v.code} — Save 15%`,
  description: `Use code ${v.code} at Aero Peptides to save 15% sitewide — verified and working for 2026. Third-party ISO-lab tested to ≥98% purity; COA on request.`,
});

export default function AeroPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("aero-peptides")} />
      {children}
    </>
  );
}
