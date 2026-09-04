import Link from "next/link";
import { vendors } from "@/data/vendors";
import { VendorCodeChip } from "@/components/VendorCodeChip";
import { VendorShopButton } from "@/components/VendorShopButton";
import { backLinkParam } from "@/data/back-link-sources";

export const metadata = {
  alternates: { canonical: "/vendors" },
  title: "Verified Vendors — Research Peptide Suppliers | Prof. Peptide",
  description:
    "An alphabetical directory of the research-peptide vendors we profile, each with its discount code and savings. Select a vendor to open its full profile.",
  // CONFIRMED (Aug 2026): noindex, follow — deliberate and settled.
  // /vendors is a thin directory that duplicates /coupons on vendors, codes,
  // discounts, and link targets (every card links to /coupons/<slug>) but carries
  // less content. Indexing it would create a thin competitor to /coupons for the
  // same queries. noindex keeps it out of search; follow: true lets crawlers reach
  // every vendor profile through it. The nav/footer "Verified Vendors" link stays —
  // this page exists to serve READERS a scannable all-43 directory, not Google.
  // It must also stay OUT of the sitemap (next-sitemap.config.js DROP_EXACT) so the
  // noindex-in-sitemap contradiction can't return.
  robots: { index: false, follow: true },
};

// Generated from vendors.ts so the list stays in sync as vendors change:
// active (non-retired) vendors only, sorted alphabetically by display name.
// Each card links to that vendor's own profile page via its detailPage field.
const activeVendors = Object.entries(vendors)
  .filter(([, v]) => !v.retired)
  .sort(([, a], [, b]) => a.name.localeCompare(b.name));

export default function VendorProfilesPage() {
  return (
    <div className="section">
      <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-4">Verified Vendors</h1>
      <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
        A directory of verified peptide vendors we profile — each with its discount code and
        savings. Select a vendor to open its full profile.
      </p>
      {/* Clickable vendor cards — mirrors the homepage feature-grid .card
          (accent border + shadow lift on hover). Whole card links to the vendor's
          internal profile via a full-bleed overlay Link, so the copy-code chip AND the Shop
          button can both be real <button>/<a> SIBLINGS of that overlay (each its own
          `relative z-10` wrapper, never nested inside the overlay anchor — that would be
          invalid HTML and make the click ambiguous) and still be clicked directly. */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {activeVendors.map(([slug, v]) => (
          <div key={v.detailPage} className="card group relative flex flex-col">
            <Link href={`${v.detailPage}?from=${backLinkParam("vendors-card")}`} aria-label={`View ${v.name} profile`} className="absolute inset-0 z-0" />
            <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 group-hover:text-[#3A759F] transition-colors">
              {v.name}
            </h2>
            <span className="tag mt-3 self-start">{v.discount}</span>
            <div className="relative z-10 mt-3 self-start">
              <VendorCodeChip slug={slug} code={v.code} from="vendors-card" />
            </div>
            {/* Replaces "View profile →" (2026-09-04): that text duplicated the card's own
                full-bleed Link to the same profile. A Shop button is a real second destination,
                not a duplicate — routes through /go/{slug}?from=vendors-card, the surface that
                already exists in GO_SURFACES and is already wired through this page's overlay
                Link + VendorCodeChip above. Sibling of the overlay, own z-10 stacking context —
                see VendorShopButton.tsx for why gated vendors branch to the reveal modal here
                instead of linking out. */}
            <div className="relative z-10 mt-4">
              <VendorShopButton slug={slug} from="vendors-card" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
