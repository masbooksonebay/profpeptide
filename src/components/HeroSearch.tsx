"use client";

// Prominent homepage search bar. It does NOT implement its own search — it
// opens the existing ⌘K command palette (<SearchOverlay>, owned by <Header>)
// by dispatching the same "open-search" event the header listens for. One
// search, one index (Fuse.js over the shared search-index).
export default function HeroSearch() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-search"))}
      aria-label="Search peptides, vendors, and comparisons"
      className="group mx-auto mb-8 flex w-full max-w-xl items-center gap-3 rounded-xl border border-[#D9DEE4] dark:border-slate-700 bg-white dark:bg-[#1e293b] px-4 py-3.5 text-left shadow-[0_1px_3px_rgba(16,24,40,0.08),0_4px_12px_-2px_rgba(16,24,40,0.08)] dark:shadow-sm hover:border-brand transition-colors"
    >
      <svg
        className="w-5 h-5 text-gray-400 group-hover:text-brand transition-colors flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.3-4.3M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" />
      </svg>
      <span className="flex-1 text-base text-gray-400 dark:text-slate-500">
        Search peptides, vendors, comparisons&hellip;
      </span>
    </button>
  );
}
