import Link from "next/link";
import { vendors } from "@/data/vendors";
import { VendorCodeChip } from "@/components/VendorCodeChip";
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
          internal profile via a full-bleed overlay Link, so the copy-code chip can be a
          real <button> sibling (not nested in an anchor) and still be clicked directly. */}
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
            <span className="mt-4 text-xs font-medium text-[#3A759F] group-hover:underline">
              View profile &rarr;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
