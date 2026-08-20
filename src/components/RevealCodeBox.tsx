"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CopyCode } from "@/components/CopyCode";
import { CouponPills } from "@/components/CouponPills";
import { vendors } from "@/data/vendors";

/**
 * Gated discount-code box + reveal modal. Reusable across every vendor in REVEAL_GATE_VENDORS —
 * CouponCodeCard renders this instead of the plain code box for a gated slug.
 *
 * WHY THE CODE IS BEHIND A CLICK: the code must NOT appear on any crawlable surface (see
 * reveal-gate-vendors.ts). The modal — the ONLY place the code text renders — is conditionally
 * mounted (`{open && …}`), so during SSR/prerender (open=false) the code is NOT in the HTML. A
 * crawler that doesn't click never sees it. (The code string is in the client JS bundle because
 * CopyCode reads vendors[slug].code — as it already was before this change — but that is not
 * rendered page content; the prerendered HTML carries no code, verified at build time.)
 *
 * Every path to the vendor routes through /go/{slug}?from=reveal-modal so these clicks are
 * counted and separable from the normal coupon-card traffic on the other 47 pages.
 *
 * ACCESSIBILITY: role="dialog" aria-modal, labelled by the heading; opens with focus on Close;
 * Esc closes; Tab is trapped within the dialog; background scroll is locked; focus returns to the
 * trigger on close. Backdrop click and the Close button both dismiss.
 */
export function RevealCodeBox({ slug, className = "" }: { slug: string; className?: string }) {
  const v = vendors[slug];
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    // Focus the Close control once the dialog mounts.
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (f.length === 0) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      // Restore focus to the element that had it before the dialog opened (the trigger).
      (prevFocus ?? triggerRef.current)?.focus();
    };
  }, [open]);

  if (!v) return null;
  const goHref = `/go/${slug}?from=reveal-modal`;

  return (
    <div className={`border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b] ${className}`}>
      <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
      {/* Closed state: NO code here — just the reveal affordance. */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="w-full text-center rounded-lg border-2 border-dashed border-[#3A759F]/50 dark:border-[#3A759F]/60 bg-white dark:bg-[#0f172a] py-4 text-base font-semibold text-[#3A759F] hover:bg-[#3A759F]/5 dark:hover:bg-[#3A759F]/10 transition-colors"
        aria-haspopup="dialog"
      >
        Reveal discount code
      </button>
      <CouponPills slug={slug} discount={false} />
      <a
        href={goHref}
        target="_blank"
        rel="sponsored nofollow noopener"
        className="btn-primary w-full text-center block"
      >
        Shop {v.name}
      </a>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={close}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="reveal-code-title"
            className="relative w-full max-w-sm rounded-2xl bg-white dark:bg-[#1e293b] p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-gray-600 dark:hover:text-slate-200"
            >
              <span aria-hidden="true" className="text-xl leading-none">&times;</span>
            </button>
            <h2 id="reveal-code-title" className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-1 pr-8">
              Your {v.name} discount code
            </h2>
            <p className="text-sm text-gray-500 dark:text-slate-400 mb-4">Copy it, then apply it at checkout.</p>
            <CopyCode code={v.code} size="large" />
            <a
              href={goHref}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="btn-primary w-full text-center block mt-4"
            >
              Shop {v.name} &rarr;
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
