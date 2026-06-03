import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/apollo-peptide-sciences",
  title: "Apollo Peptide Sciences Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  description:
    "Save 10% at Apollo Peptide Sciences with discount code PROFPEPTIDE — verified promo code for 2026. COA and endotoxin reports on every product, third-party tested.",
});

export default function ApolloPeptideSciencesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Apollo Peptide Sciences Discount Code - Save 10%\",\"description\":\"Use code PROFPEPTIDE for 10% off at Apollo Peptide Sciences\",\"url\":\"https://profpeptide.com/coupons/apollo-peptide-sciences\",\"validFrom\":\"2026-05-01\",\"priceValidUntil\":\"2026-05-31\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Apollo Peptide Sciences\"}}" }} />
      {children}
    </>
  );
}
