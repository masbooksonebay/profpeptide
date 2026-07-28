import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";
import { vendors } from "@/data/vendors";

const v = vendors["amino-x"];

export const metadata = buildCouponMetadata({
  slug: "amino-x",
  title: `Amino X Discount Code: ${v.code} — Save 15%`,
  description: `Use code ${v.code} at Amino X to save 15% sitewide — verified and working for 2026. US-based, third-party tested research peptides with a COA on request.`,
});

export default function AminoXLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("amino-x")} />
      {children}
    </>
  );
}
