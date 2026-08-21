import Link from "next/link";
import { CopyCode } from "@/components/CopyCode";
import { REVEAL_GATE_VENDORS } from "@/data/reveal-gate-vendors";

/**
 * The discount-code affordance for a vendor CARD (the /coupons hub and /vendors directory). For a
 * GATED vendor (reveal-gate-vendors.ts) the code must not display on these crawlable surfaces, so
 * render a compact "Reveal code →" link to that vendor's coupon page — where RevealCodeBox reveals
 * the code behind a click that routes through /go/ for attribution. Every non-gated vendor branches
 * to exactly the CopyCode it renders today, so those cards are byte-identical.
 *
 * Scope note: price tables (CompoundPriceTable / BlendPriceTable) deliberately keep their code — an
 * accepted residual on the low-traffic, compound-first /prices surface; do NOT route those here.
 */
export function VendorCodeChip({
  slug,
  code,
  size = "chip",
  className = "",
}: {
  slug: string;
  code: string;
  size?: "chip" | "large";
  className?: string;
}) {
  if (REVEAL_GATE_VENDORS.has(slug)) {
    return (
      <Link
        href={`/coupons/${slug}`}
        className={
          size === "large"
            ? "flex w-full items-center justify-center gap-1 px-4 py-3 rounded-lg text-base font-semibold border-2 border-dashed border-[#3A759F]/50 dark:border-[#3A759F]/60 bg-white dark:bg-[#0f172a] text-[#3A759F] hover:bg-[#3A759F]/5 dark:hover:bg-[#3A759F]/10 transition-colors"
            : "inline-flex h-9 items-center gap-1 px-2.5 rounded-md text-xs font-semibold border border-[#3A759F]/40 bg-[#3A759F]/10 text-[#3A759F] hover:bg-[#3A759F]/20 transition-colors whitespace-nowrap"
        }
      >
        Reveal code &rarr;
      </Link>
    );
  }
  return <CopyCode code={code} size={size} className={className} />;
}
