import Link from "next/link";
import { backLinkParam } from "@/data/back-link-sources";

export interface VendorTestingVendor {
  slug: string;
  name: string;
  region: string;
  detailPage?: string;
  /** Precomputed in page.tsx from facts.labs — see labLineFor() there. Never built here so this
   *  component stays a pure renderer, same split as CouponsHubCard/toCard(). */
  labLine: string;
}

/**
 * The /vendors "testing directory" card (2026-09) — same shape as CouponsHubCard (header band +
 * body row, full-bleed overlay Link, group-hover name), but answers a different question: not
 * "what code and discount," but "who tested this and how would I know." The discount pill and
 * code chip are gone entirely; in their place, a line under the name naming the lab(s) — see
 * labLineFor() in vendors/page.tsx for the 1-3-names / 4+-count / no-lab rules.
 *
 * ACTION: "View Profile", not "Shop". This page is the research surface — the place a reader
 * checks a vendor's testing claims BEFORE deciding whether to buy, not the place they buy. Shop
 * sends them outbound before they've read anything; View Profile keeps them on
 * /coupons/{slug}, which has the full testing paragraph and FAQ this card's one-line summary is
 * drawn from. Because the destination is internal (no /go/ redirect), this page carries no
 * outbound affiliate link and needs no affiliate-disclosure footer — unlike /coupons.
 *
 * Whole-card overlay Link + a real, VISIBLE "View Profile" button are the SAME destination on
 * purpose, not a redundancy to cut: /coupons' own card learned this the hard way (README: "Learn
 * More cut too far") — a name styled as a heading doesn't read as clickable, so the destination
 * needs an explicit, visible control even when the whole card already goes there.
 */
export function VendorTestingCard({ v, anchorKey }: { v: VendorTestingVendor; anchorKey?: string }) {
  return (
    <div
      id={`vendor-${v.slug}`}
      className="group relative rounded-xl overflow-hidden border border-[#D9DEE4] dark:border-slate-600 shadow-sm hover:shadow-md hover:border-[#3A759F]/40 transition-all duration-200 bg-white dark:bg-[#0f172a]"
    >
      {v.detailPage && (
        <Link
          href={`${v.detailPage}?from=${backLinkParam("vendors-card", anchorKey)}`}
          aria-label={`View ${v.name} details`}
          className="absolute inset-0 z-0"
        />
      )}

      <div className="px-5 py-3.5 bg-gray-50 dark:bg-[#1e293b] border-b border-gray-100 dark:border-slate-700">
        <h2 className="font-bold text-xl leading-tight text-[#16181B] dark:text-slate-100 group-hover:text-[#3A759F] transition-colors duration-150 truncate">
          {v.name}
        </h2>
        <p className="text-sm text-gray-500 dark:text-slate-400 mt-0.5 truncate">{v.labLine}</p>
      </div>

      <div className="px-5 py-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">
            Verified
          </span>
          {v.region && (
            <span className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-500 dark:text-slate-400 border border-[#D9DEE4] dark:border-slate-600 px-2 py-0.5 rounded-full whitespace-nowrap">
              {v.region}
            </span>
          )}
        </div>

        {v.detailPage && (
          <div className="relative z-10 flex-shrink-0">
            <Link
              href={`${v.detailPage}?from=${backLinkParam("vendors-card", anchorKey)}`}
              className="btn-primary text-center block"
            >
              View Profile
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
