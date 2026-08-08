// Shared FAQ accordion for the coupon pages. Uses native <details>/<summary> so
// the ANSWER is present in the server-rendered HTML whether or not the item is
// open — unlike the previous per-page `{open && (<div>…</div>)}` pattern, whose
// answer was absent from the initial HTML (open started false) and therefore
// invisible to crawlers. No hooks, no "use client": it renders identically in a
// server or client boundary, so the 45 coupon pages can keep importing it as-is.
export default function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border border-gray-100 dark:border-slate-700 rounded-xl overflow-hidden">
      <summary className="cursor-pointer list-none flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors [&::-webkit-details-marker]:hidden">
        <span className="text-sm font-medium text-[#16181B] dark:text-slate-100 pr-4">{q}</span>
        <span className="text-[#3A759F] flex-shrink-0 text-lg leading-none" aria-hidden="true">
          <span className="group-open:hidden">+</span>
          <span className="hidden group-open:inline">&minus;</span>
        </span>
      </summary>
      <div className="px-5 pb-4 text-sm text-gray-600 dark:text-slate-300 leading-relaxed border-t border-gray-50 dark:border-slate-800 pt-3">
        {a}
      </div>
    </details>
  );
}
