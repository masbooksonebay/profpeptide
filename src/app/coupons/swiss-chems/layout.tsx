import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/swiss-chems",
  title: "Swiss Chems Coupon Code & Discount — Save 10% with PROF10 (2026) | Prof. Peptide",
  ogTitle: "Swiss Chems Coupon — Save 10% | Prof. Peptide",
  description:
    "Save 10% at Swiss Chems with code PROF10 — a peptide-forward vendor with a public independent test-results page, per-product verification, and third-party HPLC/mass-spec testing to a 99%+ purity standard.",
});

export default function SwissChemsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Offer\",\"name\":\"Swiss Chems Discount Code - Save 10%\",\"description\":\"Use code PROF10 for 10% off at Swiss Chems\",\"url\":\"https://profpeptide.com/coupons/swiss-chems\",\"seller\":{\"@type\":\"Organization\",\"name\":\"Swiss Chems\"}}" }} />
      {children}
    </>
  );
}
