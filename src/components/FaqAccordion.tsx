"use client";
import { useState } from "react";
import type { FaqEntry } from "@/data/faq";
import NavLink from "@/components/NavLink";

// Shared expand/collapse FAQ list. Rendered on /faq (per section) and at the bottom of
// /supplements — the same component, never a second copy. Each instance owns its open state
// (one answer open at a time within the list). The page supplies the heading in its own style.
export default function FaqAccordion({ faqs }: { faqs: FaqEntry[] }) {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="space-y-2">
      {faqs.map((faq) => {
        const key = faq.q;
        return (
          <div key={key} className="border border-gray-100 dark:border-slate-700 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(open === key ? null : key)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="text-sm font-medium text-[#16181B] dark:text-slate-200 pr-4">{faq.q}</span>
              <span className="text-[#3A759F] flex-shrink-0 text-lg">{open === key ? "−" : "+"}</span>
            </button>
            {open === key && (
              <div className="px-5 pb-4 text-sm text-gray-600 dark:text-slate-300 leading-relaxed border-t border-gray-50 dark:border-slate-700 pt-3">
                {faq.a}
                {faq.more && (
                  <div className="mt-2">
                    <NavLink href={faq.more.href} className="text-xs font-medium text-[#3A759F] hover:underline">Full answer: {faq.more.label}</NavLink>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
