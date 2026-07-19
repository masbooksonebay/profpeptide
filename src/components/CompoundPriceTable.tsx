"use client";

import { useState } from "react";
import Link from "next/link";
import { compoundRows } from "@/data/prices";

type Unit = "total" | "permg";

function fmt(n: number): string {
  return "$" + n.toFixed(2);
}

/**
 * One compound's vendor price table. Dual pricing (with-code prominent, base
 * struck-through), per-mg normalization, stock status, cheapest-first sort by the
 * selected unit, and CTA + PP coupon-page link per vendor.
 *
 * If `unit` is passed it is controlled by the parent (master page global toggle)
 * and the local toggle is hidden. If omitted, the component owns its own toggle
 * (used on the per-compound page).
 */
export default function CompoundPriceTable({
  compoundSlug,
  unit: controlledUnit,
}: {
  compoundSlug: string;
  unit?: Unit;
}) {
  const [localUnit, setLocalUnit] = useState<Unit>("total");
  const unit = controlledUnit ?? localUnit;
  const showToggle = controlledUnit === undefined;

  const rows = compoundRows(compoundSlug)
    .slice()
    .sort((a, b) => (unit === "permg" ? a.codePerMg - b.codePerMg : a.codePrice - b.codePrice));

  if (rows.length === 0) {
    return <p className="text-sm text-gray-500 dark:text-slate-400">No price data yet for this compound.</p>;
  }

  return (
    <div>
      {showToggle && (
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mr-1">Compare by</span>
          <div className="inline-flex rounded-lg border border-gray-200 dark:border-slate-600 overflow-hidden text-sm">
            <button
              onClick={() => setLocalUnit("total")}
              className={`px-3 py-1 ${unit === "total" ? "bg-[#3A759F] text-white" : "bg-white dark:bg-[#1e293b] text-gray-600 dark:text-slate-300"}`}
            >
              Total price
            </button>
            <button
              onClick={() => setLocalUnit("permg")}
              className={`px-3 py-1 ${unit === "permg" ? "bg-[#3A759F] text-white" : "bg-white dark:bg-[#1e293b] text-gray-600 dark:text-slate-300"}`}
            >
              $ / mg
            </button>
          </div>
        </div>
      )}

      <div className="space-y-2">
        {rows.map((r, i) => {
          const prominentCode = unit === "permg" ? r.codePerMg : r.codePrice;
          const prominentBase = unit === "permg" ? r.basePerMg : r.basePrice;
          const secondary = unit === "permg" ? `${fmt(r.codePrice)} total` : `${fmt(r.codePerMg)} / mg`;
          return (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 panel-card p-4"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <Link href={r.couponPage} className="text-sm font-semibold text-[#3A759F] hover:underline">
                    {r.vendorName}
                  </Link>
                  <span className="text-xs text-gray-400 dark:text-slate-500">{r.entry.sizeMg} mg</span>
                  {r.inStock ? (
                    <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full">In stock</span>
                  ) : (
                    <span className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-600 px-2 py-0.5 rounded-full">Out of stock</span>
                  )}
                  {i === 0 && (
                    <span className="text-xs bg-[#3A759F]/10 text-[#3A759F] border border-[#3A759F]/20 px-2 py-0.5 rounded-full font-medium">Cheapest</span>
                  )}
                </div>
                <p className="text-xs text-gray-400 dark:text-slate-500 mt-0.5">{secondary}{r.code ? ` · code ${r.code}` : ""}</p>
              </div>

              <div className="flex items-center gap-3 sm:justify-end">
                <div className="text-right">
                  <span className="text-lg font-bold text-[#1e2d3d] dark:text-slate-100">{fmt(prominentCode)}</span>
                  {r.discountPct > 0 && (
                    <span className="text-xs text-gray-400 dark:text-slate-500 line-through ml-2">{fmt(prominentBase)}</span>
                  )}
                  {unit === "permg" && <span className="text-xs text-gray-400 dark:text-slate-500"> /mg</span>}
                </div>
                <a
                  href={r.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm whitespace-nowrap"
                >
                  Shop &rarr;
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
