import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/nextgen-peptides",
  title: "NextGen Peptides Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  ogTitle: "NextGen Peptides Coupon — Save 10% | Prof. Peptide",
  description:
    "Save 10% at NextGen Peptides with discount code PROFPEPTIDE — verified promo code for 2026. ≥99% purity by HPLC, American third-party testing, COA library.",
});

export default function NextGenPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"NextGen Peptides Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at NextGen Peptides\",\"url\":\"https://profpeptide.com/coupons/nextgen-peptides\",\"validFrom\":\"2026-07-01\",\"priceValidUntil\":\"2026-12-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"NextGen Peptides\"}}" }} />
      {children}
    </>
  );
}
