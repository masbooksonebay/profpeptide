"use client";

import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { CopyCode } from "@/components/CopyCode";
import { vendors } from "@/data/vendors";

/**
 * Shared reveal TRIGGER + MODAL. The modal (code + copy control + attributed "Shop {vendor} →"
 * link) is defined ONCE here and reused by every surface — the coupon page (via RevealCodeBox),
 * the /coupons hub card, and the /vendors card — so the reveal is byte-identical wherever it's
 * triggered. Only the TRIGGER's look (triggerClassName + children) and the `from` attribution value
 * differ per surface; the modal itself never varies.
 *
 * The modal is PORTALED to document.body so it overlays the viewport correctly no matter what card
 * / transform / overflow ancestor holds the trigger (a plain fixed child can be trapped by a
 * transformed ancestor). The code renders ONLY inside the open modal (client-only; open=false on
 * SSR/prerender), so it is never in the crawlable HTML.
 *
 * A11y: role=dialog aria-modal, labelled by a per-slug heading id (multiple triggers can share one
 * page, e.g. /vendors); focus moves to Close on open; Esc closes; Tab is trapped; background scroll
 * is locked; focus returns to the trigger on close; backdrop click and Close both dismiss.
 */
export function RevealCode({
  slug,
  from,
  triggerClassName,
  children,
}: {
  slug: string;
  from: string;
  triggerClassName: string;
  children: ReactNode;
}) {
  const v = vendors[slug];
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement as HTMLElement | null;
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
  const goHref = `/go/${slug}?from=${from}`;
  const titleId = `reveal-code-title-${slug}`;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className={triggerClassName}
        aria-haspopup="dialog"
      >
        {children}
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={close}
          >
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
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
              <h2 id={titleId} className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-1 pr-8">
                Your {v.name} discount code
              </h2>
              <p className="text-sm text-gray-500 dark:text-slate-400 mb-4">Copy it, then click Shop to claim your discount.</p>
              <CopyCode code={v.code} size="large" />
              <a
                href={goHref}
                target="_blank"
                rel="sponsored nofollow noopener"
                className="btn-primary w-full text-center block mt-4 text-lg"
              >
                Shop &rarr;
              </a>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
