"use client";

import { useState } from "react";
import Link from "next/link";
import { compoundRows, type Unit, type PriceRow } from "@/data/prices";

function fmt(n: number): string {
  return "$" + n.toFixed(2);
}

// Neutral pill (existing gray tokens — no new colour) marking that the struck figure is a
// sale price with a deeper markdown off list. Kept distinct from the accent "Best" badges.
const SALE_TAG =
  "ml-1.5 text-[10px] bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-300 px-1.5 py-0.5 rounded-full font-medium align-middle";

/** Click-to-copy code pill. Code text always rendered (readable/selectable if JS fails). */
function CopyCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(code).catch(() => {});
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      aria-label={`Copy discount code ${code}`}
      title="Click to copy"
      className="font-mono text-xs font-semibold tracking-wide px-2.5 py-1.5 rounded-md border border-[#3A759F]/40 bg-[#3A759F]/10 text-[#3A759F] hover:bg-[#3A759F]/20 transition-colors whitespace-nowrap"
    >
      {copied ? "Copied ✓" : code}
    </button>
  );
}

/**
 * One compound's vendor prices as a scannable columnar grid.
 *  - Default $/mg (vials span 2mg–1500mg). Toggle drives figures + sort.
 *  - Desktop (≥ sm / 640px): labeled header row (Vendor · Size · Stock · Price · Code · —);
 *    labels live in the header, never repeated per row. Numeric columns use tabular-nums
 *    with aligned decimals. Thin dividers, continuous list, left-aligned column system.
 *  - Mobile (< sm): collapses to a stacked per-vendor block.
 *  - ALL rows sorted by price in the active mode; out-of-stock stays inline with an "Out"
 *    indicator (not pushed to the bottom). "Best $/mg" badge only on an in-stock row.
 */
export default function CompoundPriceTable({
  compoundSlug,
  compoundName,
  unit: controlledUnit,
}: {
  compoundSlug: string;
  compoundName: string;
  unit?: Unit;
}) {
  const [localUnit, setLocalUnit] = useState<Unit>("permg");
  const unit = controlledUnit ?? localUnit;
  const showToggle = controlledUnit === undefined;

  const fig = (r: PriceRow) => (unit === "permg" ? r.effectivePerMg : r.effectivePrice);
  const rows = compoundRows(compoundSlug).slice().sort((a, b) => fig(a) - fig(b));

  if (rows.length === 0) {
    return <p className="text-sm text-gray-500 dark:text-slate-400">No price data yet for this compound.</p>;
  }

  // Badges always track lowest $/mg (mode-independent). Two-badge logic:
  //   A. cheapest row is OUT      -> it gets "Best $/mg"; cheapest in-stock gets "Best in stock"
  //   B. cheapest row is IN STOCK -> it alone gets "Best" (no second badge — same row)
  //   C. every row OUT            -> cheapest gets "Best $/mg" only
  //   D. only one row             -> no badge
  const byPerMg = (a: PriceRow, b: PriceRow) => (b.effectivePerMg < a.effectivePerMg ? b : a);
  const cheapestOverall = rows.reduce(byPerMg);
  const inStock = rows.filter((r) => r.inStock);
  const cheapestInStock = inStock.length ? inStock.reduce(byPerMg) : null;

  let bestRow: PriceRow | null = null, bestLabel = "";
  let secondRow: PriceRow | null = null, secondLabel = "";
  if (rows.length > 1) {
    bestRow = cheapestOverall;
    if (cheapestOverall.inStock) {
      bestLabel = "Best $/mg";                              // B — badge measures $/mg only, not "best overall"
    } else {
      bestLabel = "Best $/mg";                              // A / C
      if (cheapestInStock) { secondRow = cheapestInStock; secondLabel = "Best in stock"; }  // A
    }
  }
  const badgeFor = (r: PriceRow) =>
    r === bestRow ? bestLabel : r === secondRow ? secondLabel : null;

  const priceHeader = unit === "permg" ? "Price ($/mg)" : "Price (total)";
  const priceSub = unit === "permg" ? "total below" : "$/mg below";
  // ONE shared, fully explicit column template applied identically to the header and
  // every data row. All widths are fixed except the flexible Vendor column, so each
  // independent per-row grid resolves to the SAME column widths — no content-based
  // (auto) sizing anywhere. justify-items-start + text-left keeps every column (incl.
  // the numeric ones) left-justified to a single x per column down the whole list.
  const GRID =
    "grid grid-cols-[minmax(0,1fr)_5rem_5rem_9rem_8rem_5rem] items-start justify-items-start gap-x-4 text-left";

  return (
    <div>
      {showToggle && (
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mr-1">Compare by</span>
          <div className="inline-flex rounded-lg border border-[#D9DEE4] dark:border-slate-600 overflow-hidden text-sm">
            <button onClick={() => setLocalUnit("permg")} className={`px-3 py-1 ${unit === "permg" ? "bg-[#3A759F] text-white" : "bg-white dark:bg-[#1e293b] text-gray-600 dark:text-slate-300"}`}>$ / mg</button>
            <button onClick={() => setLocalUnit("total")} className={`px-3 py-1 ${unit === "total" ? "bg-[#3A759F] text-white" : "bg-white dark:bg-[#1e293b] text-gray-600 dark:text-slate-300"}`}>Total price</button>
          </div>
        </div>
      )}

      {/* ── Desktop grid (≥ sm) ── */}
      <div className="hidden sm:block tabular-nums">
        <div className={`${GRID} pb-2 border-b border-[#D9DEE4] dark:border-slate-700 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-slate-500`}>
          <div>Vendor</div>
          <div>Size</div>
          <div>Stock</div>
          <div>{priceHeader}<span className="block font-normal normal-case tracking-normal text-[10px] text-gray-400 dark:text-slate-500">{priceSub}</span></div>
          <div>Code</div>
          <div />
        </div>
        {rows.map((r, i) => {
          const prom = unit === "permg" ? r.effectivePerMg : r.effectivePrice;
          const base = unit === "permg" ? r.basePerMg : r.basePrice;
          const secondary = unit === "permg" ? r.effectivePrice : r.effectivePerMg;
          return (
            <div key={i} className={`${GRID} py-2.5 border-b border-gray-100 dark:border-slate-800`}>
              <div className="min-w-0">
                {r.couponPage ? (
                  <Link href={r.couponPage} className="text-sm font-semibold text-[#3A759F] hover:underline">{r.vendorName}</Link>
                ) : (
                  <span className="text-sm font-semibold text-[#16181B] dark:text-slate-100">{r.vendorName}</span>
                )}
                {badgeFor(r) && (
                  <span className="ml-2 text-[10px] bg-[#3A759F]/10 text-[#3A759F] border border-[#3A759F]/20 px-1.5 py-0.5 rounded-full font-medium align-middle">{badgeFor(r)}</span>
                )}
                {r.entry.listedAs && (
                  <span className="block text-xs text-gray-400 dark:text-slate-500 italic">listed as {r.entry.listedAs}</span>
                )}
              </div>
              <div className="text-sm text-gray-600 dark:text-slate-300">{r.entry.sizeMg} mg</div>
              <div className={`text-xs ${r.inStock ? "text-green-700" : "text-gray-400 dark:text-slate-500"}`}>{r.inStock ? "In stock" : "Out"}</div>
              <div>
                <span className="text-sm font-bold text-[#16181B] dark:text-slate-100">{fmt(prom)}</span>
                {r.isAffiliate && r.discountPct > 0 && (
                  <span className="ml-1.5 text-xs text-gray-400 dark:text-slate-500 line-through">{fmt(base)}</span>
                )}
                {r.onSale && <span className={SALE_TAG}>Sale</span>}
                <span className="block text-xs text-gray-400 dark:text-slate-500">{fmt(secondary)}</span>
              </div>
              <div>{r.isAffiliate && r.code ? <CopyCode code={r.code} /> : <span className="text-xs text-gray-300 dark:text-slate-600">—</span>}</div>
              <div>{r.isAffiliate && r.affiliateUrl ? <a href={r.affiliateUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm whitespace-nowrap">Shop</a> : null}</div>
            </div>
          );
        })}
      </div>

      {/* ── Mobile stacked (< sm) ── */}
      <div className="sm:hidden space-y-2">
        {rows.map((r, i) => {
          const prom = unit === "permg" ? r.effectivePerMg : r.effectivePrice;
          const base = unit === "permg" ? r.basePerMg : r.basePrice;
          const secondary = unit === "permg" ? `${fmt(r.effectivePrice)} total` : `${fmt(r.effectivePerMg)} / mg`;
          return (
            <div key={i} className="panel-card p-3 tabular-nums">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2 flex-wrap">
                  {r.couponPage ? (
                    <Link href={r.couponPage} className="text-sm font-semibold text-[#3A759F] hover:underline">{r.vendorName}</Link>
                  ) : (
                    <span className="text-sm font-semibold text-[#16181B] dark:text-slate-100">{r.vendorName}</span>
                  )}
                  <span className="text-xs text-gray-400 dark:text-slate-500">{r.entry.sizeMg} mg</span>
                  <span className={`text-xs ${r.inStock ? "text-green-700" : "text-gray-400 dark:text-slate-500"}`}>{r.inStock ? "In stock" : "Out"}</span>
                  {badgeFor(r) && <span className="text-[10px] bg-[#3A759F]/10 text-[#3A759F] border border-[#3A759F]/20 px-1.5 py-0.5 rounded-full font-medium">{badgeFor(r)}</span>}
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-[#16181B] dark:text-slate-100">{fmt(prom)}</span>
                  {r.isAffiliate && r.discountPct > 0 && <span className="ml-1.5 text-xs text-gray-400 dark:text-slate-500 line-through">{fmt(base)}</span>}
                  {r.onSale && <span className={SALE_TAG}>Sale</span>}
                  <span className="block text-xs text-gray-400 dark:text-slate-500">{secondary}</span>
                </div>
              </div>
              {r.entry.listedAs && <p className="text-xs text-gray-400 dark:text-slate-500 italic mt-1">listed as {r.entry.listedAs}</p>}
              <div className="flex items-center gap-3 mt-2">
                {r.isAffiliate && r.code && <CopyCode code={r.code} />}
                {r.isAffiliate && r.affiliateUrl && <a href={r.affiliateUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">Shop</a>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
