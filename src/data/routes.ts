// Canonical labels + sublines for the site's primary destinations — the SINGLE SOURCE OF
// TRUTH for how these six pages are named across the nav, hero, Quick Links, cards, and footer.
// Only labels / hrefs / sublines live here; per-surface JSX and layout stay local to each
// consumer (Header, SearchOverlay, app/page.tsx, Footer).
//
//   navLabel  — short navigation form (nav items, hero CTAs, Quick Links)
//   longLabel — longer form used by cards + footer links
//   subline   — one-line description (Quick Links)
//
// Two vendor entries because /vendors (the Verified Vendors directory) and
// /best-peptide-vendors (the Featured/vetted list) are genuinely DIFFERENT pages. Bare
// "Vendors" is reserved for the nav dropdown PARENT label only — never a link label to
// either page (that's what caused the cross-surface collision this module resolves).
//
// KNOWN third-form labels that fit neither field, intentionally left INLINE in their surface
// (do not fold them in here without a decision — see the label-drift report):
//   • the /coupons CARD reads "Coupon Codes" (≠ navLabel "Codes", ≠ longLabel)
//   • the /calculator FOOTER link reads "Dosage Calculator" (≠ either field; the longLabel is
//     the SEO-tuned card title, too long for a footer row)
export interface RouteMeta {
  href: string;
  navLabel: string;
  longLabel: string;
  subline: string;
}

export const routes = {
  peptides: {
    href: "/peptides",
    navLabel: "Peptides",
    longLabel: "Peptide Library",
    subline: "Browse all peptide profiles",
  },
  // Verified Vendors directory — distinct from featuredVendors below.
  verifiedVendors: {
    href: "/vendors",
    navLabel: "Verified Vendors",
    longLabel: "Verified Vendors",
    subline: "Every vendor we track",
  },
  // Featured/vetted list — distinct from verifiedVendors above.
  featuredVendors: {
    href: "/best-peptide-vendors",
    navLabel: "Featured Vendors",
    longLabel: "Featured Vendors",
    subline: "Vetted research suppliers",
  },
  prices: {
    href: "/prices",
    navLabel: "Prices",
    longLabel: "Price Comparison",
    subline: "Compare $/mg across vendors",
  },
  coupons: {
    href: "/coupons",
    navLabel: "Codes",
    longLabel: "Vendor Discount Codes",
    subline: "Vendor codes & promos",
  },
  calculator: {
    href: "/calculator",
    navLabel: "Calculator",
    // Deliberately the long SEO form — targets the "peptide reconstitution calculator" query.
    longLabel: "Peptide Reconstitution & Dosage Calculator",
    subline: "Reconstitution & dosing",
  },
} satisfies Record<string, RouteMeta>;
