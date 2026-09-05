import { activeVendorCount } from "@/data/vendors";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = {
  ...buildPageMetadata({
    path: "/vendors",
    title: "Verified Vendors — Third-Party Lab Testing Directory | Prof. Peptide",
    description: `Which lab tested which research-peptide vendor, drawn from ${activeVendorCount} vendors' own published certificates — named labs, not marketing claims.`,
    // /vendors keeps its existing generic content OG card (generateContentOg, via
    // opengraph-image.tsx) — untouched by this redesign, and the new title doesn't make it wrong:
    // that card was already a static, page-agnostic brand card ("Independent Peptide &
    // Supplement Research"), never a "Verified Vendors"-specific one to begin with.
  }),
  // FLIPPED 2026-09: was `{ index: false, follow: true }` — "a thin directory that duplicates
  // /coupons on vendors, codes, discounts, and link targets." That was true when this page WAS a
  // duplicate. It no longer duplicates /coupons — /coupons answers "what's the code," this page
  // answers "who tested it and how would I know," a real, non-thin, differently-searched question.
  // Mark's call. Also removed from next-sitemap.config.js's DROP_EXACT — the noindex-in-sitemap
  // contradiction that set existed to prevent no longer applies once this page IS indexed.
  robots: { index: true, follow: true },
};

// No affiliate-disclosure footer (unlike /coupons' layout): this page carries no outbound
// affiliate link at all — every card's action is "View Profile," an internal Link to
// /coupons/{slug}, not a /go/ redirect. If an outbound link is ever added back to this page, it
// needs the same disclosure /coupons carries.
export default function VendorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
