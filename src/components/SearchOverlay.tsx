"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { searchIndex, categoryLabels, type SearchCategory, type SearchEntry } from "@/lib/search-index";
import { expandQuery } from "@/data/search-aliases";
import { routes } from "@/data/routes";

// Order + vocabulary mirror the top nav. Labels/hrefs/sublines come from the canonical route
// registry (src/data/routes.ts) so they can't drift from the nav/hero/footer. The Vendors slot
// uses featuredVendors (→ /best-peptide-vendors, "Featured Vendors") — NOT the nav's top-level
// "Vendors" → /vendors (Verified directory); the two are different pages, labeled distinctly.
const quick = (r: (typeof routes)[keyof typeof routes]): SearchEntry => ({
  title: r.navLabel,
  url: r.href,
  category: "page",
  description: r.subline,
  tags: [],
});
const QUICK_LINKS: SearchEntry[] = [
  quick(routes.peptides),
  quick(routes.featuredVendors),
  quick(routes.prices),
  quick(routes.coupons),
  quick(routes.calculator),
];

// Tiebreak order only — groups actually render ordered by their best match score (below), so the
// category holding the strongest hit is shown first. Used when two categories tie on score.
const CATEGORY_ORDER: SearchCategory[] = [
  "peptide", "guide", "comparison", "price", "coupon", "supplement", "glossary", "news", "page",
];
const MAX_RESULTS = 12;
// Tuning (verified against real queries — see the task report). threshold gates Fuse's fuzzy
// matcher; SCORE_FLOOR then drops weak matches that slipped under it (0 = perfect, 1 = worst), so
// a stray fuzzy near-miss like "syringe"→"serine" no longer surfaces once real content is indexed.
const THRESHOLD = 0.34;
const SCORE_FLOOR = 0.4;
// Glossary entries are reference micro-terms that all point to the single /glossary page, so they
// must never outrank a dedicated content page for the same word (e.g. "syringe" → the guide, not
// the "Insulin Syringe" glossary line). They render below every primary-content group.
const referenceTier = (cat: SearchCategory): number => (cat === "glossary" ? 1 : 0);

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const fuse = useMemo(
    () =>
      new Fuse(searchIndex, {
        keys: [
          { name: "title", weight: 0.7 },
          { name: "tags", weight: 0.2 },
          { name: "description", weight: 0.1 },
        ],
        threshold: THRESHOLD,
        ignoreLocation: true,
        includeScore: true,
        minMatchCharLength: 2,
      }),
    []
  );

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return [] as { item: SearchEntry; score: number }[];
    // Expand synonyms/abbreviations/brands (src/data/search-aliases.ts) BEFORE matching, then drop
    // weak fuzzy matches with the score floor so only genuine hits surface.
    const expanded = expandQuery(q);
    return fuse
      .search(expanded)
      .filter((r) => (r.score ?? 1) <= SCORE_FLOOR)
      .slice(0, MAX_RESULTS)
      .map((r) => ({ item: r.item, score: r.score ?? 1 }));
  }, [query, fuse]);

  // Group by category, ordering the groups by their best (lowest) score so the category holding the
  // single strongest match renders first — the top result is always the first thing shown.
  const orderedGroups = useMemo(() => {
    const map = new Map<SearchCategory, SearchEntry[]>();
    const best = new Map<SearchCategory, number>();
    for (const { item, score } of results) {
      const arr = map.get(item.category) ?? [];
      arr.push(item);
      map.set(item.category, arr);
      best.set(item.category, Math.min(best.get(item.category) ?? 1, score));
    }
    return Array.from(map.keys())
      .sort(
        (a, b) =>
          referenceTier(a) - referenceTier(b) ||
          (best.get(a)! - best.get(b)!) ||
          CATEGORY_ORDER.indexOf(a) - CATEGORY_ORDER.indexOf(b)
      )
      .map((cat) => [cat, map.get(cat)!] as const);
  }, [results]);

  if (!isOpen) return null;

  const handleSelect = (url: string) => {
    onClose();
    router.push(url);
  };

  const trimmed = query.trim();

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[10vh] sm:pt-[15vh] bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Site search"
    >
      <div
        className="w-full max-w-xl bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-gray-100 dark:border-slate-700 px-4">
          <svg
            className="w-5 h-5 text-gray-400 dark:text-slate-500 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.3-4.3M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search peptides, comparisons, vendors…"
            className="flex-1 py-4 bg-transparent text-base text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 outline-none"
            autoComplete="off"
            spellCheck={false}
          />
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 rounded border border-[#D9DEE4] dark:border-slate-600 text-gray-500 dark:text-slate-400 hover:text-gray-800 dark:hover:text-slate-100"
            aria-label="Close search"
          >
            ESC
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {!trimmed && (
            <div className="py-2">
              <div className="px-4 pt-3 pb-2 text-xs uppercase tracking-wide text-gray-400 dark:text-slate-500">
                Quick links
              </div>
              {QUICK_LINKS.map((entry) => (
                <ResultRow key={entry.url} entry={entry} onSelect={handleSelect} />
              ))}
            </div>
          )}

          {trimmed && results.length === 0 && (
            <div className="px-4 py-8 text-center text-sm text-gray-500 dark:text-slate-400">
              No results for &ldquo;{trimmed}&rdquo;. Try a different search term.
            </div>
          )}

          {trimmed && results.length > 0 &&
            orderedGroups.map(([cat, items]) => (
              <div key={cat} className="py-2">
                <div className="px-4 pt-3 pb-2 text-xs uppercase tracking-wide text-gray-400 dark:text-slate-500">
                  {categoryLabels[cat]}
                </div>
                {items.map((entry) => (
                  <ResultRow key={entry.url} entry={entry} onSelect={handleSelect} />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function ResultRow({ entry, onSelect }: { entry: SearchEntry; onSelect: (url: string) => void }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(entry.url)}
      className="w-full text-left px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-slate-700/60 transition-colors flex items-center justify-between gap-3 group"
    >
      <div className="min-w-0">
        <div className="text-sm text-gray-800 dark:text-slate-100 truncate group-hover:text-[#3A759F]">
          {entry.title}
        </div>
        {entry.description && (
          <div className="text-xs text-gray-500 dark:text-slate-400 truncate">
            {entry.description}
          </div>
        )}
      </div>
      <span className="text-xs text-gray-400 dark:text-slate-500 truncate flex-shrink-0">
        {entry.url}
      </span>
    </button>
  );
}
