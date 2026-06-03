import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/spartan-peptides",
  title: "Spartan Peptides Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  description:
    "Save 10% at Spartan Peptides with discount code PROFPEPTIDE \u2014 verified promo code for 2026. HPLC + mass spec verified, \u226598% purity, independent third-party tested.",
});

export default function SpartanPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Spartan Peptides Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at Spartan Peptides\",\"url\":\"https://profpeptide.com/coupons/spartan-peptides\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Spartan Peptides\"}}" }} />
      {children}
    </>
  );
}
