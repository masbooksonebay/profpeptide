"use client";

import { useState } from "react";
import JsonLd from "./JsonLd";

export type PeptideFAQItem = { q: string; a: string };

export default function PeptideFAQ({ faqs }: { faqs: PeptideFAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-gray-100 dark:border-slate-700 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
              aria-expanded={open === i}
            >
              <span className="text-sm font-medium text-[#1e2d3d] dark:text-slate-200 pr-4">
                {faq.q}
              </span>
              <span className="text-[#0891b2] flex-shrink-0 text-lg">
                {open === i ? "−" : "+"}
              </span>
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-sm text-gray-600 dark:text-slate-300 leading-relaxed border-t border-gray-50 dark:border-slate-700 pt-3">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
