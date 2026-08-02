import { CopyCode } from "@/components/CopyCode";
import { CouponPills } from "@/components/CouponPills";
import { vendors } from "@/data/vendors";

/**
 * The coupon code card — eyebrow + code + discount/verified pills + Shop button — as ONE
 * shared component. Amino Club (pilot) renders it BOTH directly under the H1 (so someone
 * arriving from "<vendor> discount code" sees the code first) and again at the catalog
 * section. Extracted rather than duplicated so those two placements can't drift, and so a
 * later rollout to the other coupon pages is a swap, not a copy-paste fork.
 *
 * `code` is read from vendors[slug].code (single source). `shopHref`/`shopLabel` default to
 * the registry URL / "Shop {name}"; pass overrides for a vendor whose Shop link is a special
 * homepage/affiliate form (Amino Club).
 */
export function CouponCodeCard({
  slug,
  shopHref,
  shopLabel,
  className = "",
}: {
  slug: string;
  shopHref?: string;
  shopLabel?: string;
  className?: string;
}) {
  const v = vendors[slug];
  if (!v) return null;
  return (
    <div className={`border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b] ${className}`}>
      <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
      <CopyCode code={v.code} size="large" />
      {/* Only the verified pill — the discount is already in the H1 ("Save X%") right above. */}
      <CouponPills slug={slug} discount={false} />
      <a
        href={shopHref ?? v.url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="btn-primary w-full text-center block"
      >
        {shopLabel ?? `Shop ${v.name}`}</a>
    </div>
  );
}
