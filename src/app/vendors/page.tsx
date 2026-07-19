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
// Each row links to that vendor's own profile page via its detailPage field.
const activeVendors = Object.values(vendors)
  .filter((v) => !v.retired)
  .sort((a, b) => a.name.localeCompare(b.name));

export default function VendorProfilesPage() {
  return (
    <div className="section max-w-3xl">
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-4">Vendor Profiles</h1>
      <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl">
        An alphabetical directory of the research-peptide vendors we profile — each with its
        discount code and savings. Select a vendor to open its full profile.
      </p>
      <ul className="divide-y divide-gray-100 dark:divide-slate-800">
        {activeVendors.map((v) => (
          <li key={v.detailPage} className="py-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <Link
              href={v.detailPage}
              className="text-sm font-medium text-[#1e2d3d] dark:text-slate-100 hover:text-[#0891b2] transition-colors"
            >
              {v.name}
            </Link>
            <span className="text-gray-300 dark:text-slate-600" aria-hidden="true">&mdash;</span>
            <span className="text-sm font-mono text-[#0891b2]">{v.code}</span>
            <span className="text-gray-300 dark:text-slate-600" aria-hidden="true">&mdash;</span>
            <span className="text-sm text-gray-500 dark:text-slate-400">{v.discount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
