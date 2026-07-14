import { buildPageMetadata } from "@/lib/seo";
import { vendors } from "@/data/vendors";

const v = vendors["aero-peptides"];

export const metadata = buildPageMetadata({
  path: "/coupons/aero-peptides",
  title: `Aero Peptides Discount Code: ${v.code} — Save 15%`,
  description: `Use code ${v.code} at Aero Peptides to save 15% sitewide — verified and working for 2026. Third-party ISO-lab tested to ≥98% purity; COA on request.`,
});

export default function AeroPeptidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Offer", name: "Aero Peptides Discount Code - Save 15%", description: "Use code PROFPEPTIDE15 for 15% off at Aero Peptides", url: "https://profpeptide.com/coupons/aero-peptides", validFrom: "2026-07-01", priceValidUntil: "2026-12-31", seller: { "@type": "Organization", name: "Aero Peptides" } }) }} />
      {children}
    </>
  );
}
