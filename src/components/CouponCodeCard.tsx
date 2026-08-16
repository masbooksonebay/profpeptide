import { CopyCode } from "@/components/CopyCode";
import { CouponPills } from "@/components/CouponPills";
import { vendors } from "@/data/vendors";
import { COUPON_SENTENCE_VENDORS } from "@/data/coupon-sentence-vendors";
import { CODES_VERIFIED_DATE } from "@/data/codes-verified";

/**
 * The coupon code card — eyebrow + code + discount/verified pills + Shop button — as ONE
 * shared component. Extracted rather than duplicated so a rollout to the other coupon pages
 * is a swap, not a copy-paste fork. (Historical note: an earlier pilot rendered this twice on
 * Amino Club — under the H1 and again at the catalog; that second placement is gone, so today
 * every coupon page renders exactly one card.)
 *
 * `code` is read from vendors[slug].code (single source). `shopHref`/`shopLabel` default to
 * the registry URL / "Shop {name}"; pass overrides for a vendor whose Shop link is a special
 * homepage/affiliate form (Amino Club).
 *
 * PASSAGE-SALIENCE EXPERIMENT (opt-in, default OFF): when `slug` is in COUPON_SENTENCE_VENDORS,
 * TWO real prose sentences render as the FIRST node in the card — a grammatical text block adjacent
 * to the code box, ~0 tokens from the code and just below the H1 + facts line:
 *   "Use code {CODE} at {VENDOR} to save {PCT} on your order. The {VENDOR} coupon code is verified
 *    as of {MONTH YEAR} and gives you a {PCT} discount at checkout."
 * Sentence 2 adds "coupon code" — a term the page otherwise lacked (it had only "discount"; Google's
 * About-this-result panel matched vendor + got "coupons" from the URL, not the copy) — and describes
 * what the code does rather than reaching for a keyword. The code appears ONCE (sentence 1) so it
 * reads 3× above the fold, not 4× (H1, prose, box). {PCT} appears twice (both sentences) but from ONE
 * source — `pct`, parsed from vendors[slug].discount — so they can never diverge.
 * Every value is DERIVED — code/name/discount from vendors.ts,
 * the date from CODES_VERIFIED_DATE (the same constant the verified pill renders, so it can never
 * drift from the pill). No scope claim ("applies sitewide" etc.) — only facts PP can support.
 * A vendor NOT opted in renders byte-identically to before (the `&&` yields nothing).
 * `sentence={false}` suppresses it for a would-be SECOND card on a page (dedupe → top placement
 * only); no page double-renders today, so it is inert. PCT is parsed from vendor.discount
 * ("20% off" → "20%"); a discount with no "N%" (none today) renders no sentence rather than an
 * ungrammatical one.
 */
export function CouponCodeCard({
  slug,
  shopHref,
  shopLabel,
  className = "",
  sentence = true,
}: {
  slug: string;
  shopHref?: string;
  shopLabel?: string;
  className?: string;
  sentence?: boolean;
}) {
  const v = vendors[slug];
  if (!v) return null;
  const pct = v.discount.match(/(\d+)\s*%/)?.[1];
  const showSentence = sentence && COUPON_SENTENCE_VENDORS.has(slug) && pct != null;
  return (
    <div className={`border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b] ${className}`}>
      {showSentence && (
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
          Use code {v.code} at {v.name} to save {pct}% on your order. The {v.name} coupon code is verified as of {CODES_VERIFIED_DATE} and gives you a {pct}% discount at checkout.
        </p>
      )}
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
