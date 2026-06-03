import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/ez-peptides",
  title: "EZ Peptides Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  description:
    "Save 10% at EZ Peptides with discount code PROFPEPTIDE — verified promo code for 2026. U.S.-based, same-day shipping, 4.7/5 rating, third-party tested.",
});

export default function EZPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"EZ Peptides Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at EZ Peptides\",\"url\":\"https://profpeptide.com/coupons/ez-peptides\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"EZ Peptides\"}}" }} />
      {children}
    </>
  );
}
