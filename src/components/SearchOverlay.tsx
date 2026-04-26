"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { searchIndex, categoryLabels, type SearchCategory, type SearchEntry } from "@/lib/search-index";

const QUICK_LINKS: SearchEntry[] = [
  { title: "Peptide Library", url: "/peptides", category: "page", description: "Browse all peptide profiles", tags: [] },
  { title: "Comparisons", url: "/compare", category: "page", description: "Side-by-side compound comparisons", tags: [] },
  { title: "Discount Codes", url: "/coupons", category: "page", description: "Vendor codes & promos", tags: [] },
  { title: "Dosage Calculator", url: "/calculator", category: "page", description: "Reconstitution & dosing", tags: [] },
  { title: "Best Peptide Vendors", url: "/best-peptide-vendors", category: "page", description: "Vetted research suppliers", tags: [] },
];

const CATEGORY_ORDER: SearchCategory[] = ["peptide", "supplement", "comparison", "news", "page"];
const MAX_RESULTS = 10;

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
        threshold: 0.4,
        ignoreLocation: true,
        includeScore: true,
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
    if (!q) return [] as SearchEntry[];
    return fuse.search(q).slice(0, MAX_RESULTS).map((r) => r.item);
  }, [query, fuse]);

  const grouped = useMemo(() => {
    const map = new Map<SearchCategory, SearchEntry[]>();
    for (const entry of results) {
      const arr = map.get(entry.category) ?? [];
      arr.push(entry);
      map.set(entry.category, arr);
    }
    return map;
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
            placeholder="Search peptides, supplements, comparisons…"
            className="flex-1 py-4 bg-transparent text-base text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 outline-none"
            autoComplete="off"
            spellCheck={false}
          />
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 rounded border border-gray-200 dark:border-slate-600 text-gray-500 dark:text-slate-400 hover:text-gray-800 dark:hover:text-slate-100"
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
            CATEGORY_ORDER.filter((cat) => grouped.has(cat)).map((cat) => (
              <div key={cat} className="py-2">
                <div className="px-4 pt-3 pb-2 text-xs uppercase tracking-wide text-gray-400 dark:text-slate-500">
                  {categoryLabels[cat]}
                </div>
                {grouped.get(cat)!.map((entry) => (
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
        <div className="text-sm text-gray-800 dark:text-slate-100 truncate group-hover:text-[#0891b2]">
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
