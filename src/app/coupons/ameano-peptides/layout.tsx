import { buildPageMetadata } from "@/lib/seo";
import { vendors } from "@/data/vendors";

const v = vendors["ameano-peptides"];

export const metadata = buildPageMetadata({
  path: "/coupons/ameano-peptides",
  title: `Ameano Peptides Discount Code: ${v.code} — Save 10%`,
  description: `Use code ${v.code} at Ameano Peptides to save 10% sitewide — verified and working for 2026. Lab-tested to 99%+ purity with a published COA per product.`,
});

export default function AmeanoPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Offer", name: "Ameano Peptides Discount Code - Save 10%", description: "Use code PROF10 for 10% off at Ameano Peptides", url: "https://profpeptide.com/coupons/ameano-peptides", validFrom: "2026-07-01", priceValidUntil: "2026-12-31", seller: { "@type": "Organization", name: "Ameano Peptides" } }) }} />
      {children}
    </>
  );
}
