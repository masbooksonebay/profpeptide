import { CouponPills } from "@/components/CouponPills";
import { RevealCode } from "@/components/RevealCode";
import { vendors } from "@/data/vendors";

/**
 * Gated discount-code BOX — the coupon-page (and profile VendorHighlightBlock) presentation of the
 * reveal: an eyebrow, the reveal trigger, the verified pill, and a Shop link. The trigger + modal
 * come from the shared <RevealCode> so the modal is identical to the one the /coupons hub and
 * /vendors cards open in place. `from` here is "reveal-modal" (the coupon-page surface value).
 *
 * The code renders ONLY inside RevealCode's open modal, never in the prerendered HTML — not
 * crawlable (see reveal-gate-vendors.ts).
 */
export function RevealCodeBox({ slug, className = "" }: { slug: string; className?: string }) {
  const v = vendors[slug];
  if (!v) return null;
  return (
    <div className={`border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b] ${className}`}>
      <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
      <RevealCode
        slug={slug}
        from="reveal-modal"
        triggerClassName="w-full text-center rounded-lg border-2 border-dashed border-[#3A759F]/50 dark:border-[#3A759F]/60 bg-white dark:bg-[#0f172a] py-4 text-base font-semibold text-[#3A759F] hover:bg-[#3A759F]/5 dark:hover:bg-[#3A759F]/10 transition-colors"
      >
        Reveal discount code
      </RevealCode>
      <CouponPills slug={slug} discount={false} />
      <a
        href={`/go/${slug}?from=reveal-modal`}
        target="_blank"
        rel="sponsored nofollow noopener"
        className="btn-primary w-full text-center block"
      >
        Shop {v.name}
      </a>
    </div>
  );
}
