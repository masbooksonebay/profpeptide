"use client";

import { useState } from "react";
import Link from "next/link";
import { priceCompounds } from "@/data/prices";
import CompoundPriceTable from "@/components/CompoundPriceTable";

type Unit = "total" | "permg";

export default function PricesMaster() {
  const compounds = priceCompounds();
  const [filter, setFilter] = useState<string>("all");
  const [unit, setUnit] = useState<Unit>("total");

  const shown = filter === "all" ? compounds : compounds.filter((c) => c.slug === filter);

  return (
    <div>
      {/* Controls: filter chips + global unit toggle */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`text-sm px-3 py-1 rounded-full border ${filter === "all" ? "bg-[#0891b2] text-white border-[#0891b2]" : "bg-white dark:bg-[#1e293b] text-gray-600 dark:text-slate-300 border-gray-200 dark:border-slate-600"}`}
        >
          All
        </button>
        {compounds.map((c) => (
          <button
            key={c.slug}
            onClick={() => setFilter(c.slug)}
            className={`text-sm px-3 py-1 rounded-full border ${filter === c.slug ? "bg-[#0891b2] text-white border-[#0891b2]" : "bg-white dark:bg-[#1e293b] text-gray-600 dark:text-slate-300 border-gray-200 dark:border-slate-600"}`}
          >
            {c.name}
          </button>
        ))}

        <div className="ml-auto inline-flex rounded-lg border border-gray-200 dark:border-slate-600 overflow-hidden text-sm">
          <button
            onClick={() => setUnit("total")}
            className={`px-3 py-1 ${unit === "total" ? "bg-[#0891b2] text-white" : "bg-white dark:bg-[#1e293b] text-gray-600 dark:text-slate-300"}`}
          >
            Total price
          </button>
          <button
            onClick={() => setUnit("permg")}
            className={`px-3 py-1 ${unit === "permg" ? "bg-[#0891b2] text-white" : "bg-white dark:bg-[#1e293b] text-gray-600 dark:text-slate-300"}`}
          >
            $ / mg
          </button>
        </div>
      </div>

      <p className="text-xs text-gray-400 dark:text-slate-500 mb-6">
        Prices show the post-code price first, base price struck-through. Each compound&apos;s vendors are sorted cheapest-first by {unit === "permg" ? "price per mg" : "total price"}.
      </p>

      {/* One card per compound */}
      <div className="space-y-8">
        {shown.map((c) => (
          <div key={c.slug} className="panel-card p-5">
            <div className="flex items-center justify-between gap-3 mb-4">
              <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100">
                <Link href={`/peptides/${c.slug}`} className="hover:text-[#0891b2] transition-colors">{c.name}</Link>
              </h2>
              <Link href={`/prices/${c.slug}`} className="text-sm font-medium text-[#0891b2] hover:underline whitespace-nowrap">
                All {c.name} prices &rarr;
              </Link>
            </div>
            <CompoundPriceTable compoundSlug={c.slug} unit={unit} />
          </div>
        ))}
      </div>
    </div>
  );
}
