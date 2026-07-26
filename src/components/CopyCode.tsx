"use client";

import { useState } from "react";

/**
 * Shared click-to-copy code chip — the SINGLE implementation used for every
 * discount/coupon code across the site (price tables, /vendors, /coupons, the
 * per-vendor coupon pages, and the peptide-profile vendor cards) so a code looks
 * and behaves identically everywhere. The code text is always rendered, so it stays
 * selectable/readable if JS fails. `className` is for layout only (e.g. flex sizing
 * in the mobile price row) — never for restyling the chip.
 */
export function CopyCode({ code, className = "" }: { code: string; className?: string }) {
  const [copied, setCopied] = useState(false);
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
      className={`h-9 inline-flex items-center justify-center font-mono text-xs font-semibold tracking-wide px-2.5 rounded-md border border-[#3A759F]/40 bg-[#3A759F]/10 text-[#3A759F] hover:bg-[#3A759F]/20 transition-colors whitespace-nowrap ${className}`}
    >
      {copied ? "Copied ✓" : code}
    </button>
  );
}

export default CopyCode;
