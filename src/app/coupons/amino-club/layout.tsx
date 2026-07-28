import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";
import { vendors } from "@/data/vendors";

const v = vendors["amino-club"];

export const metadata = buildCouponMetadata({
  slug: "amino-club",
  title: `Amino Club Discount Code: ${v.code} — Save 20%`,
  description: `Use code ${v.code} at Amino Club to save 20% sitewide — verified and working for 2026. ISO-17025 tested peptides with a COA on every batch.`,
});

export default function AminoClubLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("amino-club")} />
      {children}
    </>
  );
}
