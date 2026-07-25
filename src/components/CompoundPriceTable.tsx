"use client";

import { useState } from "react";
import Link from "next/link";
import { compoundRows, type Unit } from "@/data/prices";

function fmt(n: number): string {
  return "$" + n.toFixed(2);
}

/** Click-to-copy discount-code pill. The code text is always rendered (readable +
 *  selectable even if JS fails); the click-to-copy is a progressive enhancement. */
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
      className="font-mono text-sm font-semibold tracking-wide px-3 py-2 rounded-lg border border-[#3A759F]/40 bg-[#3A759F]/10 text-[#3A759F] hover:bg-[#3A759F]/20 transition-colors whitespace-nowrap"
    >
      {copied ? "Copied ✓" : code}
    </button>
  );
}

/**
 * One compound's vendor price table.
 *  - Total ↔ $/mg toggle, default $/mg (vial sizes span 2mg–1500mg, so a total-price
 *    ranking across them is meaningless). Drives both the figures and the sort.
 *  - RIGHT of each row, in reading order: price (headline + struck base + secondary
 *    metric beneath, both labeled) → click-to-copy code → Shop.
 *  - "Best $/mg" badge: exactly one per compound, on the lowest $/mg IN-STOCK row,
 *    independent of the active toggle (lowest total is just the smallest vial).
 *  - Affiliate rows: dual pricing + code + Shop. Non-affiliate: single price, no code
 *    chip, no Shop link — ranked honestly on that price.
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

  const figure = (r: ReturnType<typeof compoundRows>[number]) =>
    unit === "permg" ? r.effectivePerMg : r.effectivePrice;

  const rows = compoundRows(compoundSlug)
    .slice()
    // in-stock first, then cheapest post-code in the active unit
    .sort((a, b) => (a.inStock === b.inStock ? figure(a) - figure(b) : a.inStock ? -1 : 1));

  // Best value = lowest $/mg among in-stock rows, regardless of the active toggle.
  const inStockRows = rows.filter((r) => r.inStock);
  const bestPerMg = inStockRows.length
    ? inStockRows.reduce((a, b) => (b.effectivePerMg < a.effectivePerMg ? b : a))
    : null;

  if (rows.length === 0) {
    return <p className="text-sm text-gray-500 dark:text-slate-400">No price data yet for this compound.</p>;
  }

  return (
    <div>
      {showToggle && (
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mr-1">Compare by</span>
          <div className="inline-flex rounded-lg border border-[#D9DEE4] dark:border-slate-600 overflow-hidden text-sm">
            <button
              onClick={() => setLocalUnit("permg")}
              className={`px-3 py-1 ${unit === "permg" ? "bg-[#3A759F] text-white" : "bg-white dark:bg-[#1e293b] text-gray-600 dark:text-slate-300"}`}
            >
              $ / mg
            </button>
            <button
              onClick={() => setLocalUnit("total")}
              className={`px-3 py-1 ${unit === "total" ? "bg-[#3A759F] text-white" : "bg-white dark:bg-[#1e293b] text-gray-600 dark:text-slate-300"}`}
            >
              Total price
            </button>
          </div>
        </div>
      )}

      <div className="space-y-2">
        {rows.map((r, i) => {
          const prominent = unit === "permg" ? r.effectivePerMg : r.effectivePrice;
          const baseFig = unit === "permg" ? r.basePerMg : r.basePrice;
          const headlineLabel = unit === "permg" ? "/ mg" : "total";
          const secondary =
            unit === "permg" ? `${fmt(r.effectivePrice)} total` : `${fmt(r.effectivePerMg)} per mg`;
          return (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 panel-card p-4"
            >
              {/* LEFT: vendor identity */}
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  {r.couponPage ? (
                    <Link href={r.couponPage} className="text-sm font-semibold text-[#3A759F] hover:underline">
                      {r.vendorName}
                    </Link>
                  ) : (
                    <span className="text-sm font-semibold text-[#16181B] dark:text-slate-100">{r.vendorName}</span>
                  )}
                  <span className="text-xs text-gray-400 dark:text-slate-500">{r.entry.sizeMg} mg</span>
                  {r.inStock ? (
                    <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full">In stock</span>
                  ) : (
                    <span className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 border border-[#D9DEE4] dark:border-slate-600 px-2 py-0.5 rounded-full">Out of stock</span>
                  )}
                  {r === bestPerMg && (
                    <span className="text-xs bg-[#3A759F]/10 text-[#3A759F] border border-[#3A759F]/20 px-2 py-0.5 rounded-full font-medium">Best $/mg</span>
                  )}
                </div>
                {r.entry.listedAs && (
                  <p className="text-xs text-gray-400 dark:text-slate-500 mt-0.5 italic">
                    {compoundName} (listed as {r.entry.listedAs})
                  </p>
                )}
              </div>

              {/* RIGHT: price → code → Shop */}
              <div className="flex items-center gap-3 sm:justify-end flex-shrink-0">
                <div className="text-right">
                  <div className="flex items-baseline justify-end gap-1.5">
                    <span className="text-lg font-bold text-[#16181B] dark:text-slate-100">{fmt(prominent)}</span>
                    <span className="text-xs text-gray-400 dark:text-slate-500">{headlineLabel}</span>
                    {r.isAffiliate && r.discountPct > 0 && (
                      <span className="text-xs text-gray-400 dark:text-slate-500 line-through">{fmt(baseFig)}</span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-slate-500 mt-0.5">{secondary}</div>
                </div>
                {r.isAffiliate && r.code && <CopyCode code={r.code} />}
                {r.isAffiliate && r.affiliateUrl && (
                  <a
                    href={r.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm whitespace-nowrap"
                  >
                    Shop
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
