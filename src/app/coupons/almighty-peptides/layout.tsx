import { buildCouponMetadata, couponOffer } from "@/lib/coupon-page";
import JsonLd from "@/components/JsonLd";

export const metadata = buildCouponMetadata({
  slug: "almighty-peptides",
  ogTitle: "Almighty Peptides Coupon — Save 20% | Prof. Peptide",
});

export default function AlmightyPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={couponOffer("almighty-peptides")} />
      {children}
    </>
  );
}
