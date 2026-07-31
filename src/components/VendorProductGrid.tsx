import Link from "next/link";
import type { VendorProductRow } from "@/data/prices";
import { vendorDeepLink } from "@/data/prices";
import { vendors } from "@/data/vendors";

function fmt(n: number): string {
  return "$" + n.toFixed(2);
}

/**
 * Builds a row's Shop-URL function for one vendor, with a SAFE fallback baked in so
 * every rollout gets it for free (never re-implemented per page):
 *   • vendorSlug present AND a deepLink builder given → the exact product deep link
 *   • otherwise → the vendor's plain affiliate URL (its homepage) from vendors.ts
 * It never emits a bare product path (e.g. `/us/products/`), which is worse than no
 * deep link.
 *
 * Resolution order for a row: (1) no slug → homepage; (2) an explicit per-page deepLink
 * builder wins — amino-club uses one because its canonical store host (www.aminoclub.com)
 * differs from the apex host in vendors.ts, which the URL-derived composer can't know;
 * (3) otherwise the universal vendorDeepLink composer (both affiliate shapes), which
 * returns null for a cross-host redirect affiliate (biolongevity) → homepage fallback.
 */
export function makeShopUrlFor(
  vendorKey: string,
  deepLink?: (vendorSlug: string) => string,
): (vendorSlug?: string) => string {
  const homepage = vendors[vendorKey]?.url ?? "";
  return (vendorSlug) => {
    if (!vendorSlug) return homepage;
    if (deepLink) return deepLink(vendorSlug);
    return vendorDeepLink(vendorKey, vendorSlug) ?? homepage;
  };
}

/**
 * A vendor's catalog as a scannable columnar grid — one row per compound+size, matching
 * the /prices compound-page treatment (see CompoundPriceTable). Reuses the SAME approach:
 * a single explicit grid template with fixed column widths shared by the header and every
 * row (no content-based sizing → columns line up down the whole list), tabular-nums, the
 * struck list price beside a prominent post-code figure, and per-cell self-baseline so the
 * fixed-height Shop button stays in its own track. Presentational + reusable: the caller
 * supplies the rows, the discount %, and a builder for the (affiliate) shop URL.
 *
 * Prices: the bold figure is post-code (base × (1 − discountPct/100), rounded like /prices);
 * the struck figure is the vendor's list price. The name links INTERNALLY to the PP profile
 * when one exists, else renders as plain text (the row is still shown).
 */
export interface VendorProductGridProps {
  rows: VendorProductRow[];
  /** whole-number discount percent applied at checkout (e.g. 20). */
  discountPct: number;
  /** builds the fully-formed vendor product URL (incl. affiliate params) from the slug. */
  shopUrlFor: (vendorSlug?: string) => string;
}

// ONE shared, fully explicit column template applied identically to the header and every
// data row — all widths fixed except the flexible Compound column, so each independent
// per-row grid resolves to the SAME column widths (no auto/content sizing anywhere, which
// is what kept the numbers staggered before). Mirrors CompoundPriceTable's GRID.
const GRID =
  "grid grid-cols-[minmax(0,1fr)_4.5rem_9rem_5rem_5rem] items-start justify-items-start gap-x-4 text-left";

export function VendorProductGrid({ rows, discountPct, shopUrlFor }: VendorProductGridProps) {
  const postCode = (base: number) => Math.round(base * (1 - discountPct / 100) * 100) / 100;

  // Every row renders directly — no cap/show-more. Rows are alphabetical, so a cap would hide
  // by letter (everything past ~J), not by relevance; hiding Tesamorelin/TB-500/Wolverine
  // behind a click filters on nothing meaningful. Full list, always.
  const deskRow = (r: VendorProductRow, i: number) => (
    <div key={i} className={`${GRID} py-2.5 border-b border-gray-100 dark:border-slate-800`}>
      <div className="min-w-0 self-baseline">
        {r.hasProfile ? (
          <Link href={`/peptides/${r.compound}`} className="text-sm font-semibold text-[#3A759F] hover:underline">{r.compoundName}</Link>
        ) : (
          <span className="text-sm font-semibold text-[#16181B] dark:text-slate-100">{r.compoundName}</span>
        )}
      </div>
      <div className="self-baseline text-sm text-gray-600 dark:text-slate-300">{r.sizeMg} mg</div>
      <div className="self-baseline">
        <span className="text-sm font-bold text-[#16181B] dark:text-slate-100">{fmt(postCode(r.basePrice))}</span>
        <span className="ml-1.5 text-xs text-gray-400 dark:text-slate-500 line-through">{fmt(r.basePrice)}</span>
      </div>
      <div className={`self-baseline text-xs ${r.inStock ? "text-green-700" : "text-gray-400 dark:text-slate-500"}`}>{r.inStock ? "In stock" : "Out"}</div>
      <div>
        <a href={shopUrlFor(r.vendorSlug)} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary text-sm whitespace-nowrap h-9 py-0">Shop</a>
      </div>
    </div>
  );

  const mobRow = (r: VendorProductRow, i: number) => (
    <div key={i} className="panel-card p-3 tabular-nums">
      {/* items-baseline: name and headline price share one text baseline; the struck
          list price hangs beside the bold post-code figure on the right. */}
      <div className="flex items-baseline justify-between gap-2">
        <div className="flex-1 min-w-0 flex items-baseline gap-2 flex-wrap">
          {r.hasProfile ? (
            <Link href={`/peptides/${r.compound}`} className="text-sm font-semibold text-[#3A759F] hover:underline">{r.compoundName}</Link>
          ) : (
            <span className="text-sm font-semibold text-[#16181B] dark:text-slate-100">{r.compoundName}</span>
          )}
          <span className="text-xs text-gray-400 dark:text-slate-500">{r.sizeMg} mg</span>
          <span className={`text-xs ${r.inStock ? "text-green-700" : "text-gray-400 dark:text-slate-500"}`}>{r.inStock ? "In stock" : "Out"}</span>
        </div>
        <div className="shrink-0 min-w-[5rem] text-right">
          <span className="text-sm font-bold text-[#16181B] dark:text-slate-100">{fmt(postCode(r.basePrice))}</span>
          <span className="ml-1.5 text-xs text-gray-400 dark:text-slate-500 line-through">{fmt(r.basePrice)}</span>
        </div>
      </div>
      <div className="mt-2">
        <a href={shopUrlFor(r.vendorSlug)} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary text-sm h-9 py-0 w-full">Shop</a>
      </div>
    </div>
  );

  return (
    <div>
      {/* ── Desktop grid (≥ sm) ── */}
      <div className="hidden sm:block tabular-nums">
        <div className={`${GRID} pb-2 border-b border-[#D9DEE4] dark:border-slate-700 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-slate-500`}>
          <div>Compound</div>
          <div>Size</div>
          <div>
            Price
            <span className="block font-normal normal-case tracking-normal text-[10px] text-gray-400 dark:text-slate-500">after {discountPct}% code</span>
          </div>
          <div>Stock</div>
          <div />
        </div>
        {rows.map(deskRow)}
      </div>

      {/* ── Mobile stacked (< sm) ── */}
      <div className="sm:hidden space-y-2">
        {rows.map(mobRow)}
      </div>
    </div>
  );
}
