"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CategoryIcon } from "@/components/CategoryIcon";
import { priceIndexByCategory, type Unit } from "@/data/prices";

function fmt(n: number): string {
  return "$" + n.toFixed(2);
}

// Shared column template for every card. Desktop (≥ sm): the hard-won four-column grid
// (name · vendor-count · from-price · Compare), fixed widths, only the name column flexes.
// Mobile (< sm): two columns — name LEFT, from-price RIGHT on one line — with the Compare
// link spanning a second row beneath, so the card fills the width instead of stacking flush
// left. Same gap rhythm and left-edge across both.
const CARD =
  "panel-card px-4 py-3 grid grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[minmax(0,1fr)_6rem_8rem_7.5rem] items-center gap-x-4 gap-y-1 text-left";

/**
 * Master compound INDEX (not a table of tables). Grouped by the /peptides library
 * taxonomy in its display order; compounds alphabetical within each category. Each row
 * is compact — name, vendor count, and a single cheapest post-code teaser — linking to
 * the per-compound page for the full vendor comparison. Search + grouping is the whole
 * navigation model; there is no cross-compound price sort (rows are different compounds).
 */
export default function PricesMaster() {
  const [q, setQ] = useState("");
  const [unit, setUnit] = useState<Unit>("permg");
  const groups = useMemo(() => priceIndexByCategory(unit), [unit]);

  const query = q.trim().toLowerCase();
  const shown = query
    ? groups
        .map((g) => ({ ...g, compounds: g.compounds.filter((c) => c.name.toLowerCase().includes(query)) }))
        .filter((g) => g.compounds.length > 0)
    : groups;

  const total = groups.reduce((n, g) => n + g.compounds.length, 0);

  return (
    <div>
      {/* items-start on mobile: the stacked (flex-col) column would otherwise stretch the
          inline-flex toggle to full width (default align-items:stretch) and run it to the
          edge. Start-align keeps the toggle at its intrinsic width, like the compound page's
          `flex items-center` row. The w-full search keeps its explicit width regardless. */}
      <div className="flex flex-col items-start sm:flex-row sm:items-center gap-3 mb-3">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={`Search ${total} compounds…`}
          className="w-full sm:max-w-xs text-sm px-3 py-2 rounded-lg border border-[#D9DEE4] dark:border-slate-600 bg-white dark:bg-[#1e293b] text-[#16181B] dark:text-slate-100 placeholder:text-gray-400"
        />
        <div className="sm:ml-auto inline-flex rounded-lg border border-[#D9DEE4] dark:border-slate-600 overflow-hidden text-sm">
          <button
            onClick={() => setUnit("permg")}
            className={`px-3 py-1.5 ${unit === "permg" ? "bg-[#3A759F] text-white" : "bg-white dark:bg-[#1e293b] text-gray-600 dark:text-slate-300"}`}
          >
            $ / mg
          </button>
          <button
            onClick={() => setUnit("total")}
            className={`px-3 py-1.5 ${unit === "total" ? "bg-[#3A759F] text-white" : "bg-white dark:bg-[#1e293b] text-gray-600 dark:text-slate-300"}`}
          >
            Total price
          </button>
        </div>
      </div>

      <p className="text-xs text-gray-400 dark:text-slate-500 mb-6">
        Cheapest price per compound, post-code where an affiliate code applies. Open a compound for the full per-vendor comparison.
      </p>

      {shown.length === 0 && (
        <p className="text-sm text-gray-500 dark:text-slate-400">No compounds match &ldquo;{q}&rdquo;.</p>
      )}

      <div className="space-y-8 tabular-nums">
        {shown.map((g) => (
          <div key={g.category}>
            {/* Bolder, darker section header — primary structure, not de-emphasised */}
            <h2 className="text-lg font-bold text-[#16181B] dark:text-slate-100 mb-3 pb-2 border-b-2 border-[#D9DEE4] dark:border-slate-700 flex items-center gap-2">
              <CategoryIcon name={g.category} /> {g.category}
            </h2>
            <div className="space-y-2">
              {g.compounds.map((c) => (
                <div key={c.slug} className={CARD}>
                  {/* compound name */}
                  {c.hasProfile ? (
                    <Link href={`/peptides/${c.slug}`} className="text-sm font-semibold text-[#16181B] dark:text-slate-100 hover:text-[#3A759F] transition-colors min-w-0 truncate">
                      {c.name}
                    </Link>
                  ) : (
                    <span className="text-sm font-semibold text-[#16181B] dark:text-slate-100 min-w-0 truncate">{c.name}</span>
                  )}
                  {/* vendor count */}
                  <span className="hidden sm:block text-xs text-gray-500 dark:text-slate-400 whitespace-nowrap">
                    {c.vendorCount} vendor{c.vendorCount === 1 ? "" : "s"}
                  </span>
                  {/* from-price — right-aligned beside the name on mobile, left in its column on desktop */}
                  <span className="text-sm text-gray-600 dark:text-slate-300 whitespace-nowrap justify-self-end sm:justify-self-start">
                    {c.cheapest != null && (
                      <>
                        <span className="text-gray-400 dark:text-slate-500 text-xs">from </span>
                        <span className="font-semibold text-[#16181B] dark:text-slate-100">{fmt(c.cheapest)}</span>
                        {unit === "permg" && <span className="text-xs text-gray-400 dark:text-slate-500">/mg</span>}
                      </>
                    )}
                  </span>
                  {/* compare link — spans the second row on mobile; own column on desktop.
                      A single vendor has nothing to compare, so "View price". */}
                  <Link href={`/prices/${c.slug}`} className="col-span-2 sm:col-span-1 justify-self-start text-sm font-medium text-[#3A759F] hover:underline whitespace-nowrap">
                    {c.vendorCount === 1 ? "View price" : `Compare ${c.vendorCount}`} &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
