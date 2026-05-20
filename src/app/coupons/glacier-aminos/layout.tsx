import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/glacier-aminos",
  title: "Glacier Aminos Discount Code (May 2026) — Save 10% | Prof. Peptide",
  description:
    "Use Glacier Aminos discount code PROF10 to save 10% on research peptides. US-based labs, cold-chain shipping, batch-traceable COAs, and the lowest tracked Retatrutide pricing.",
});

export default function GlacierAminosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Offer","name":"Glacier Aminos Discount Code - Save 10%","description":"Use code PROF10 for 10% off at Glacier Aminos","url":"https://profpeptide.com/coupons/glacier-aminos","validFrom":"2026-05-01","priceValidUntil":"2026-05-31","seller":{"@type":"Organization","name":"Glacier Aminos"}}) }} />
      {children}
    </>
  );
}
