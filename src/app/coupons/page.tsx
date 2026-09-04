"use client";

import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { Icon } from "@/components/CategoryIcon";
import { vendors as registry, regionFlag, type Vendor as RegistryVendor } from "@/data/vendors";
import { CODES_VERIFIED_DATE } from "@/data/codes-verified";
import { CouponsBrowser } from "@/components/CouponsBrowser";
import type { CouponsHubVendor } from "@/components/CouponsHubCard";

/**
 * Vendor list is DERIVED from the registry (src/data/vendors.ts) — the single source of truth.
 * Active (non-retired) vendors split into exactly two groups, both handed to CouponsBrowser:
 *   picks    → editorsPick vendors, sorted alphabetically. Rendered ONCE, as the featured
 *              "Professor's Picks" block — never repeated in the run below.
 *   vendors  → everyone else, ONE merged alphabetical run. US and International used to be
 *              separate sections; nothing downstream reads that split (confirmed before merging),
 *              and the region flag now rides on each card instead, so the split added a scroll
 *              boundary without adding information.
 * `bestDeal` is retained on CouponsHubVendor but DORMANT — no active vendor currently carries it as
 * a distinct section; the badge still renders per-card when true.
 */
function toCard(v: RegistryVendor): CouponsHubVendor {
  return {
    // detailPage is "/coupons/{slug}" for every vendor — derive the slug so the card can gate the
    // code (REVEAL_GATE_VENDORS) and link a gated card's reveal to its coupon page.
    slug: v.detailPage?.replace(/^\/coupons\//, "") ?? "",
    name: v.name,
    code: v.code,
    discount: v.discount,
    region: `${regionFlag[v.region]} ${v.region}`,
    bestDeal: v.bestDeal,
    detailPage: v.detailPage,
  };
}

const activeVendors = Object.values(registry).filter((v) => !v.retired);
const byName = (a: RegistryVendor, b: RegistryVendor) => a.name.localeCompare(b.name);

const picks = activeVendors.filter((v) => v.editorsPick).sort(byName).map(toCard);
const otherVendors = activeVendors.filter((v) => !v.editorsPick).sort(byName).map(toCard);

export default function CouponsPage() {
  return (
    // max-w-4xl (not the max-w-3xl prose column this page shipped with) — this is a directory of
    // 57 cards, not body copy. Follows /prices and /prices/[compound]'s precedent: the site's other
    // single-column list-of-rows surface at this width, one step narrower than /vendors' max-w-5xl
    // 3-column grid, whose shape doesn't apply here.
    <div className="section max-w-4xl">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Discount Codes" }])} />
      <span className="tag mb-3 inline-block">Updated Regularly</span>
      <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-8">Discount Codes</h1>

      <div className="flex items-center justify-center gap-2.5 mb-8 py-3.5 px-4 bg-[#3A759F]/10 border border-[#3A759F]/30 rounded-lg">
        <svg className="w-5 h-5 text-[#3A759F] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-base font-bold text-[#16181B] dark:text-white tracking-tight">
          Verified codes &mdash; {CODES_VERIFIED_DATE}
        </p>
      </div>

      <CouponsBrowser picks={picks} vendors={otherVendors} />

      {/* "Vendor COA & Testing-Transparency Index" card removed — /vendor-testing-index is
          under construction and currently renders data known to be wrong. The route stays live;
          only this /coupons entry point is pulled. Restore this <Link> when the page is ready.
          Placement: outside CouponsBrowser and unaffected by search — it's a "see also" nav card,
          not part of the vendor list, so it stays fixed at the very bottom of the page regardless
          of what the search box or A–Z bar are doing above it. */}
      <Link href="/best-peptide-vendors" className="card group block mb-8">
        <span className="text-[#3A759F] mb-3 block"><Icon name="shield-block-outline" /></span>
        <h3 className="text-base font-semibold text-[#16181B] dark:text-slate-100 mb-1.5 group-hover:text-[#3A759F] transition-colors">Featured Vendors</h3>
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-4">
          Our vetted list of research peptide suppliers — with third-party testing, published COAs, and the quality criteria we use to include them.
        </p>
        <span className="text-xs font-medium text-[#3A759F] group-hover:underline">See our full vetted vendor list &rarr;</span>
      </Link>
    </div>
  );
}
