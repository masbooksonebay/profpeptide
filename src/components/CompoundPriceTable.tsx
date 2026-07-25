"use client";

import { useState } from "react";
import Link from "next/link";
import { compoundRows, type Unit } from "@/data/prices";

function fmt(n: number): string {
  return "$" + n.toFixed(2);
}

/**
 * One compound's vendor price table.
 *  - Total ↔ $/mg toggle (defaults to $/mg — vial sizes span 2mg–1500mg, so a total-price
 *    ranking across them is meaningless). The toggle drives BOTH the figures and the sort.
 *  - Affiliate vendors: post-code price prominent, base struck through — in BOTH modes.
 *  - Non-affiliate vendors: a single regular price (no strikethrough, no code, no affiliate
 *    link), ranked honestly on that price alongside affiliates.
 *  - In-stock rows rank above out-of-stock; "Cheapest" only ever tags an in-stock row.
 *  - `listedAs` rows disclose the vendor's coded name: "Retatrutide (listed as GLP-3 RT)".
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

  const firstInStock = rows.findIndex((r) => r.inStock);

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
          const secondary =
            unit === "permg" ? `${fmt(r.effectivePrice)} total` : `${fmt(r.effectivePerMg)} / mg`;
          return (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 panel-card p-4"
            >
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
                  {i === firstInStock && (
                    <span className="text-xs bg-[#3A759F]/10 text-[#3A759F] border border-[#3A759F]/20 px-2 py-0.5 rounded-full font-medium">Cheapest</span>
                  )}
                </div>
                {r.entry.listedAs && (
                  <p className="text-xs text-gray-400 dark:text-slate-500 mt-0.5 italic">
                    {compoundName} (listed as {r.entry.listedAs})
                  </p>
                )}
                <p className="text-xs text-gray-400 dark:text-slate-500 mt-0.5">
                  {secondary}
                  {r.isAffiliate ? (r.code ? ` · code ${r.code}` : "") : " · regular price (no code)"}
                </p>
              </div>

              <div className="flex items-center gap-3 sm:justify-end">
                <div className="text-right">
                  <span className="text-lg font-bold text-[#16181B] dark:text-slate-100">{fmt(prominent)}</span>
                  {r.isAffiliate && r.discountPct > 0 && (
                    <span className="text-xs text-gray-400 dark:text-slate-500 line-through ml-2">{fmt(baseFig)}</span>
                  )}
                  {unit === "permg" && <span className="text-xs text-gray-400 dark:text-slate-500"> /mg</span>}
                </div>
                {r.isAffiliate && r.affiliateUrl && (
                  <a
                    href={r.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm whitespace-nowrap"
                  >
                    Shop &rarr;
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
