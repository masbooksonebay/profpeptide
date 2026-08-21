import { CopyCode } from "@/components/CopyCode";
import { RevealCode } from "@/components/RevealCode";
import { REVEAL_GATE_VENDORS } from "@/data/reveal-gate-vendors";

/**
 * The discount-code affordance for a vendor CARD (the /coupons hub and /vendors directory). For a
 * GATED vendor (reveal-gate-vendors.ts) the code must not display, so render a reveal TRIGGER that
 * opens the shared modal IN PLACE (one click, code shown — no navigation to the coupon page). The
 * modal is the same one the coupon page uses; only the trigger's look and the `from` attribution
 * value differ. Every non-gated vendor branches to exactly the CopyCode it renders today, so those
 * cards are byte-identical.
 *
 * `from` is the per-surface ?from= value (coupon-hub-card / vendors-card) so revealed-code clicks
 * are separable per surface in the counter. Price tables keep their code — an accepted residual,
 * out of scope (see reveal-gate-vendors.ts) — so they never route here.
 */
export function VendorCodeChip({
  slug,
  code,
  from,
  size = "chip",
  className = "",
}: {
  slug: string;
  code: string;
  from: string;
  size?: "chip" | "large";
  className?: string;
}) {
  if (REVEAL_GATE_VENDORS.has(slug)) {
    return (
      <RevealCode
        slug={slug}
        from={from}
        triggerClassName={
          size === "large"
            ? "flex w-full items-center justify-center gap-1 px-4 py-3 rounded-lg text-base font-semibold border-2 border-dashed border-[#3A759F]/50 dark:border-[#3A759F]/60 bg-white dark:bg-[#0f172a] text-[#3A759F] hover:bg-[#3A759F]/5 dark:hover:bg-[#3A759F]/10 transition-colors"
            : "inline-flex h-9 items-center gap-1 px-2.5 rounded-md text-xs font-semibold border border-[#3A759F]/40 bg-[#3A759F]/10 text-[#3A759F] hover:bg-[#3A759F]/20 transition-colors whitespace-nowrap"
        }
      >
        {size === "large" ? "Reveal discount code" : <>Reveal code</>}
      </RevealCode>
    );
  }
  return <CopyCode code={code} size={size} className={className} />;
}
