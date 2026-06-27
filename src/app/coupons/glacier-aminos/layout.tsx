import { buildPageMetadata } from "@/lib/seo";
import { vendors } from "@/data/vendors";

const v = vendors["glacier-aminos"];

export const metadata = buildPageMetadata({
  path: "/coupons/glacier-aminos",
  title: "Glacier Aminos Coupon & Promo Code 2026 — Verified 10% Off",
  description: `Verified, working Glacier Aminos coupon, promo & discount code: ${v.code} = 10% off — not a fake aggregator. Batch-traceable COAs + lowest-tracked Reta price.`,
});

export default function GlacierAminosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Offer","name":"Glacier Aminos Discount Code - Save 10%","description":"Use code PROF10 for 10% off at Glacier Aminos","url":"https://profpeptide.com/coupons/glacier-aminos","validFrom":"2026-05-01","priceValidUntil":"2026-05-31","seller":{"@type":"Organization","name":"Glacier Aminos"}}) }} />
      {children}
    </>
  );
}
