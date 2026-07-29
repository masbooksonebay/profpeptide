import Link from "next/link";
import type { VendorProductRow } from "@/data/prices";
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
 * deep link. Woo/CINC vendors (no captured slug) simply pass no deepLink, or pass one
 * that is only used on the rows that actually carry a slug.
 */
export function makeShopUrlFor(
  vendorKey: string,
  deepLink?: (vendorSlug: string) => string,
): (vendorSlug?: string) => string {
  const homepage = vendors[vendorKey]?.url ?? "";
  return (vendorSlug) => (vendorSlug && deepLink ? deepLink(vendorSlug) : homepage);
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

// Visible-row cap. Mark judged 32 rows / ~2,190px a good length; longer catalogs (16
// vendors, up to 134 rows) collapse the overflow behind a show-more. A vendor at or under
// the cap renders EXACTLY as before — the non-overflow branch below maps the original rows
// array with no wrapper, so the pilot (amino-club, 32) is byte-identical.
const ROW_CAP = 32;

export function VendorProductGrid({ rows, discountPct, shopUrlFor }: VendorProductGridProps) {
  const postCode = (base: number) => Math.round(base * (1 - discountPct / 100) * 100) / 100;

  const visible = rows.slice(0, ROW_CAP);
  const hidden = rows.slice(ROW_CAP);
  const overflow = hidden.length > 0;

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

  // Native <details> disclosure — no client JS, so the grid stays a plain component and a
  // ≤cap vendor introduces no client boundary. group-open toggles the label + chevron.
  const summary = (
    <summary className="flex cursor-pointer list-none items-center justify-center gap-1.5 py-3 text-sm font-medium text-[#3A759F] hover:underline [&::-webkit-details-marker]:hidden">
      <span className="group-open:hidden">Show all {rows.length} products</span>
      <span className="hidden group-open:inline">Show fewer</span>
      <span aria-hidden className="text-xs transition-transform group-open:rotate-180">&darr;</span>
    </summary>
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
        {overflow ? (
          <>
            {visible.map(deskRow)}
            <details className="group">
              {summary}
              {hidden.map((r, i) => deskRow(r, i + ROW_CAP))}
            </details>
          </>
        ) : (
          rows.map(deskRow)
        )}
      </div>

      {/* ── Mobile stacked (< sm) ── */}
      <div className="sm:hidden space-y-2">
        {overflow ? (
          <>
            {visible.map(mobRow)}
            <details className="group">
              {summary}
              <div className="space-y-2 mt-2">{hidden.map((r, i) => mobRow(r, i + ROW_CAP))}</div>
            </details>
          </>
        ) : (
          rows.map(mobRow)
        )}
      </div>
    </div>
  );
}
