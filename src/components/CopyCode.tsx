"use client";

import { useRef, useState } from "react";

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

/** Lucide "check" — the success glyph shown after a confirmed copy. */
function CheckGlyph({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
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
 *              peptide-profile vendor cards, the reveal modal). Matches the pre-consolidation CodeBox.
 * A copy glyph precedes the code so the copy affordance is discoverable at both sizes; on a
 * CONFIRMED copy the whole content swaps to a green checkmark + "Copied!" and a persistent
 * aria-live region announces it (so the feedback is not purely visual). The code text is always
 * rendered in the resting state, so it stays selectable/readable if JS fails. `className` is for
 * layout only (e.g. flex sizing in the mobile price row).
 *
 * The success state is shown ONLY after `navigator.clipboard.writeText` actually RESOLVES — if the
 * Clipboard API is unavailable (insecure context) or the write is blocked/denied, nothing flips to
 * "Copied!", because a false confirmation is worse than none.
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
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const base =
    size === "large"
      ? "block w-full px-4 py-3 rounded-lg text-lg font-mono font-bold tracking-widest text-center bg-gray-50 dark:bg-[#1e293b] border border-[#D9DEE4] dark:border-slate-600 text-[#16181B] dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
      : "h-9 inline-flex items-center justify-center px-2.5 rounded-md text-xs font-mono font-semibold tracking-wide border border-[#3A759F]/40 bg-[#3A759F]/10 text-[#3A759F] hover:bg-[#3A759F]/20 transition-colors whitespace-nowrap";
  const glyph = size === "large" ? "w-4 h-4" : "w-3.5 h-3.5";
  const copy = () => {
    // Only CONFIRM on a resolved write. Optional chaining short-circuits to `undefined` when the
    // Clipboard API is missing (insecure context) — then we show nothing rather than a false
    // success. A blocked/denied write rejects and lands in .catch, also with no success shown.
    const write = navigator.clipboard?.writeText(code);
    if (!write) return;
    write
      .then(() => {
        setCopied(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        /* blocked/denied — leave the resting state, do not fake a confirmation */
      });
  };
  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy discount code ${code}`}
      title="Click to copy"
      className={`${base} ${className}`}
    >
      {/* Always-mounted polite live region: announces the copy to assistive tech (the swap below
          is visual only). It must persist across the state change for the announcement to fire. */}
      <span className="sr-only" role="status" aria-live="polite">{copied ? "Copied!" : ""}</span>
      {copied ? (
        <span className="inline-flex items-center justify-center gap-1.5 font-sans font-semibold tracking-normal text-emerald-600 dark:text-emerald-400">
          <CheckGlyph className={`${glyph} shrink-0`} />
          Copied!
        </span>
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
