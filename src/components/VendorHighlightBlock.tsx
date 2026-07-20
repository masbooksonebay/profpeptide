"use client";

import { useState } from "react";
import Link from "next/link";
import { vendors } from "@/data/vendors";

export interface VendorHighlight {
  slug: string;
  note?: string;
}

export interface VendorHighlightBlockProps {
  highlights: VendorHighlight[];
}

function CodeBox({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      aria-label={`Copy code ${code}`}
      className="block w-full bg-white dark:bg-[#0f172a] border border-[#D9DEE4] dark:border-slate-600 px-3 py-2 rounded-lg text-sm font-mono font-bold text-[#16181B] dark:text-slate-100 tracking-widest text-center cursor-pointer hover:border-[#3A759F]/40 transition-colors"
    >
      {copied ? (
        <span className="text-[#3A759F] font-sans font-medium tracking-normal">Copied!</span>
      ) : (
        code
      )}
    </button>
  );
}

export default function VendorHighlightBlock({ highlights }: VendorHighlightBlockProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {highlights.map((h) => {
        const v = vendors[h.slug];
        if (!v) return null;
        return (
          <div
            key={h.slug}
            className="flex flex-col rounded-xl border border-[#D9DEE4] dark:border-slate-600 bg-gray-50 dark:bg-[#1e293b] overflow-hidden"
          >
            <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-gray-100 dark:border-slate-700">
              <Link
                href={v.detailPage}
                className="text-sm font-bold text-[#16181B] dark:text-slate-100 hover:text-[#3A759F] transition-colors"
              >
                {v.name}
              </Link>
              <span className="text-xs font-bold text-[#3A759F] bg-[#3A759F]/15 px-2 py-0.5 rounded-full whitespace-nowrap">
                {v.discount}
              </span>
            </div>

            <div className="flex flex-col gap-2 px-4 py-3 flex-1">
              {(v.editorsPick || v.bestDeal) && (
                <div className="flex flex-wrap gap-1.5">
                  {v.editorsPick && (
                    <span className="text-xs bg-[#eab308] text-[#1c1917] border border-[#ca8a04] px-2 py-0.5 rounded-full font-semibold">
                      Editor&apos;s Pick
                    </span>
                  )}
                  {v.bestDeal && (
                    <span className="text-xs bg-green-100 text-green-800 border border-green-300 px-2 py-0.5 rounded-full font-medium">
                      Best Deal
                    </span>
                  )}
                </div>
              )}

              {h.note && (
                <p className="text-xs text-gray-500 dark:text-slate-400 italic leading-relaxed">
                  {h.note}
                </p>
              )}

              <div className="mt-auto space-y-2 pt-2">
                <p className="text-[10px] text-gray-400 dark:text-slate-500 uppercase tracking-wider font-medium">
                  Click to copy code
                </p>
                <CodeBox code={v.code} />
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block text-xs py-2"
                >
                  Shop {v.name} &rarr;
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
