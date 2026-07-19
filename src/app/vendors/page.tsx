import Link from "next/link";
import { vendors } from "@/data/vendors";

export const metadata = {
  alternates: { canonical: "/vendors" },
  title: "Vendor Profiles — Research Peptide Suppliers | Prof. Peptide",
  description:
    "An alphabetical directory of the research-peptide vendors we profile, each with its discount code and savings. Select a vendor to open its full profile.",
  // DIRECTIVE (Mark to confirm): keep this index out of search but let crawlers
  // follow through to the individual vendor profile pages.
  robots: { index: false, follow: true },
};

// Generated from vendors.ts so the list stays in sync as vendors change:
// active (non-retired) vendors only, sorted alphabetically by display name.
// Each card links to that vendor's own profile page via its detailPage field.
const activeVendors = Object.values(vendors)
  .filter((v) => !v.retired)
  .sort((a, b) => a.name.localeCompare(b.name));

export default function VendorProfilesPage() {
  return (
    <div className="section">
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-4">Vendor Profiles</h1>
      <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
        A directory of verified peptide vendors we profile — each with its discount code and
        savings. Select a vendor to open its full profile.
      </p>
      {/* Clickable vendor cards — mirrors the homepage feature-grid .card
          (accent border + shadow lift on hover). Whole card links to the
          vendor's internal profile page; no outbound/affiliate links here. */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {activeVendors.map((v) => (
          <Link href={v.detailPage} key={v.detailPage} className="card group flex flex-col">
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 group-hover:text-[#3A759F] transition-colors">
              {v.name}
            </h2>
            <span className="tag mt-3 self-start">{v.discount}</span>
            <p className="mt-3 text-sm">
              <span className="text-gray-400 dark:text-slate-500">Code </span>
              <span className="font-mono text-gray-600 dark:text-slate-300">{v.code}</span>
            </p>
            <span className="mt-4 text-xs font-medium text-[#3A759F] group-hover:underline">
              View profile &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
