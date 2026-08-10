"use client";

// Client-side category browser for the /peptides and /supplements hubs.
//
// The hubs used to read `?category` off searchParams SERVER-side, which opted the whole route
// into DYNAMIC (ƒ) rendering — no prerendered HTML, which plausibly contributed to /peptides
// sitting "Discovered – currently not indexed" in Search Console. The server pages now prerender
// the FULL list statically (○), and this component does the filtering on the client:
//   • The initial (SSR/prerendered) markup renders EVERY category and link, so crawlers see the
//     complete list regardless of JS — the SEO-relevant win.
//   • On mount it reads `?category` from the URL ONCE (window.location, not useSearchParams, so it
//     never opts the route back into dynamic rendering) and filters to that category if valid.
//   • "Show all categories" clears the client filter. Filtering never writes to the URL, so the
//     base route stays static and prerendered.
// Existing ?category deep-links keep working (client-filtered on load); with JS off, the page
// simply shows all categories — a graceful, fully-indexable fallback.

import { useState, useEffect } from "react";
import Link from "next/link";
import { CategoryIcon } from "@/components/CategoryIcon";

export interface HubCategory {
  slug: string;
  name: string;
  items: { slug: string; name: string }[];
}

export function HubCategoryBrowser({
  categories,
  hrefPrefix,
  variant,
}: {
  categories: HubCategory[];
  hrefPrefix: string;
  variant: "peptides" | "supplements";
}) {
  const [filter, setFilter] = useState<string | null>(null);

  useEffect(() => {
    const c = new URLSearchParams(window.location.search).get("category");
    if (c && categories.some((x) => x.slug === c)) setFilter(c);
  }, [categories]);

  const shown = filter ? categories.filter((c) => c.slug === filter) : categories;

  const headerCls =
    variant === "peptides"
      ? "text-lg font-bold text-[#16181B] dark:text-slate-100 mb-3 pb-2 border-b-2 border-[#D9DEE4] dark:border-slate-700 flex items-center gap-2"
      : "text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-4 pb-2 border-b border-gray-100 dark:border-slate-800 flex items-center gap-2";
  const listCls = variant === "peptides" ? "divide-y divide-gray-100 dark:divide-slate-800" : "space-y-2";
  const itemCls =
    variant === "peptides"
      ? "flex items-center gap-2 py-2.5 text-sm font-medium text-[#16181B] dark:text-slate-200 hover:text-[#3A759F] transition-colors group"
      : "inline-flex items-center gap-2 text-sm font-medium text-[#16181B] dark:text-slate-200 hover:text-[#3A759F] transition-all duration-150 hover:scale-105 origin-left group";

  return (
    <>
      {filter && (
        <button
          type="button"
          onClick={() => setFilter(null)}
          className="text-xs text-[#3A759F] hover:underline mb-8 inline-block"
        >
          &larr; Show all categories
        </button>
      )}
      <div className="space-y-10">
        {shown.map((cat) => (
          <div key={cat.slug}>
            <h2 className={headerCls}>
              <CategoryIcon name={cat.name} /> {cat.name}
            </h2>
            <ul className={listCls}>
              {cat.items.map((it) => (
                <li key={it.slug}>
                  <Link href={`${hrefPrefix}/${it.slug}`} className={itemCls}>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-slate-600 group-hover:bg-[#3A759F] transition-colors flex-shrink-0" />
                    {it.name}
                  </Link>
                </li>
              ))}
            </ul>
            {variant === "peptides" && cat.slug === "bioregulators" && (
              <Link href="/bioregulators" className="text-sm text-[#3A759F] hover:underline mt-3 inline-block">
                Read the bioregulator guide &rarr;
              </Link>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
