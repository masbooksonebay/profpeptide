"use client";

import { useState } from "react";

/** Inline copy glyph (lucide "copy" path) — no dependency; stroke inherits currentColor
 *  so it takes the chip's accent / the large box's ink automatically. */
function CopyGlyph({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

/**
 * Shared click-to-copy code control — the SINGLE implementation used for every
 * discount/coupon code across the site so a code looks and behaves identically per
 * context. Two sizes, one component:
 *   - "chip"  (default): compact inline accent pill — dense contexts (price tables, /vendors).
 *   - "large": full-width prominent box (gray field, big mono, letter-spaced, centered) —
 *              contexts where the code IS the point (/coupons hub + per-vendor pages,
 *              peptide-profile vendor cards). Matches the pre-consolidation CodeBox.
 * A copy glyph precedes the code so the copy affordance is discoverable at both sizes; on
 * successful copy the whole content swaps to the "Copied ✓" confirmation (its checkmark
 * replaces the copy icon). The code text is always rendered, so it stays selectable/readable
 * if JS fails. `className` is for layout only (e.g. flex sizing in the mobile price row).
 */
export function CopyCode({
  code,
  className = "",
  size = "chip",
}: {
  code: string;
  className?: string;
  size?: "chip" | "large";
}) {
  const [copied, setCopied] = useState(false);
  const base =
    size === "large"
      ? "block w-full px-4 py-3 rounded-lg text-lg font-mono font-bold tracking-widest text-center bg-gray-50 dark:bg-[#1e293b] border border-[#D9DEE4] dark:border-slate-600 text-[#16181B] dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
      : "h-9 inline-flex items-center justify-center px-2.5 rounded-md text-xs font-mono font-semibold tracking-wide border border-[#3A759F]/40 bg-[#3A759F]/10 text-[#3A759F] hover:bg-[#3A759F]/20 transition-colors whitespace-nowrap";
  const glyph = size === "large" ? "w-4 h-4" : "w-3.5 h-3.5";
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(code).catch(() => {});
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      aria-label={`Copy discount code ${code}`}
      title="Click to copy"
      className={`${base} ${className}`}
    >
      {copied ? (
        <span className="font-sans font-medium tracking-normal text-[#3A759F]">Copied ✓</span>
      ) : (
        <span className="inline-flex items-center justify-center gap-1.5">
          <CopyGlyph className={`${glyph} shrink-0 opacity-70`} />
          {code}
        </span>
      )}
    </button>
  );
}

export default CopyCode;
