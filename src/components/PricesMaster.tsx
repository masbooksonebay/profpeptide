"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CategoryIcon } from "@/components/CategoryIcon";
import { priceIndexByCategory, type Unit } from "@/data/prices";

function fmt(n: number): string {
  return "$" + n.toFixed(2);
}

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
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
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

      <div className="space-y-8">
        {shown.map((g) => (
          <div key={g.category}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3 pb-2 border-b border-gray-100 dark:border-slate-800 flex items-center gap-2">
              <CategoryIcon name={g.category} /> {g.category}
            </h2>
            <div className="divide-y divide-gray-100 dark:divide-slate-800">
              {g.compounds.map((c) => (
                <div key={c.slug} className="flex items-center justify-between gap-3 py-2.5">
                  <div className="min-w-0">
                    {c.hasProfile ? (
                      <Link href={`/peptides/${c.slug}`} className="text-sm font-medium text-[#16181B] dark:text-slate-100 hover:text-[#3A759F] transition-colors">
                        {c.name}
                      </Link>
                    ) : (
                      <span className="text-sm font-medium text-[#16181B] dark:text-slate-100">{c.name}</span>
                    )}
                    <span className="text-xs text-gray-400 dark:text-slate-500 ml-2">
                      {c.vendorCount} vendor{c.vendorCount === 1 ? "" : "s"}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    {c.cheapest != null && (
                      <span className="text-sm text-gray-600 dark:text-slate-300">
                        <span className="text-gray-400 dark:text-slate-500 text-xs">from </span>
                        <span className="font-semibold text-[#16181B] dark:text-slate-100">{fmt(c.cheapest)}</span>
                        {unit === "permg" && <span className="text-xs text-gray-400 dark:text-slate-500">/mg</span>}
                      </span>
                    )}
                    <Link href={`/prices/${c.slug}`} className="text-sm font-medium text-[#3A759F] hover:underline whitespace-nowrap">
                      Compare {c.vendorCount} &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
