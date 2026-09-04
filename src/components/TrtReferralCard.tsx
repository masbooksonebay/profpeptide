import PageDisclaimer from "@/components/PageDisclaimer";
import { TRT_NATION_TRACKING_URL } from "@/data/trt-referral";

// The TRT-page equivalent of a "Where to Buy" block — but TRT Nation is a referral partner
// (CJ Affiliate, Patient Affiliate Program), not a vendor: no discount code, no product sale, a
// telehealth intake instead of a cart. Mirrors the CARD SHAPE of CouponCodeCard.tsx /
// VendorHighlightBlock.tsx (bordered rounded-xl box, a full-width primary-styled external link) —
// deliberately NOT their vendor-registry machinery (vendors[slug], CopyCode, /go/{slug}), which
// this partner has no place in: vendors.ts and /go/ model a discount-code product sale, and this
// is neither.
//
// 🔴 THE DISCLOSURE IS NOT OPTIONAL. PageDisclaimer's "referral" variant renders INSIDE this same
// component, in the same return — never as a sibling gated by a different condition elsewhere.
// That is what makes "no disclosure without the card, no card without the disclosure" true by
// construction rather than by two conditions someone could let drift apart: there is exactly one
// gate (TRT_NATION_TRACKING_URL configured) and it controls both the promotional content and the
// disclosure as a single unit.
//
// COPY CONSTRAINTS (PP's own standard, not TRT Nation's — see src/data/trt-referral.ts for the
// sourcing): every specific process/coverage claim is attributed ("TRT Nation states…"), because
// none of it is independently verifiable the way a lab certificate is. No price is stated — the
// only figure on file ($99/mo) comes from ad creative and a privacy-policy page title, both weak
// and stale-prone evidence for a current price, so it is left out rather than asserted. Coverage
// is stated as PARTIAL ("the majority of U.S. states rather than all of them") because TRT Nation
// publishes no state list — "nationwide" or "all 50 states" would be a claim PP cannot support.
// No therapeutic or outcome claim (nothing about what TRT does for a person — that's the FAQ
// pages' job, reporting published research; this card is a referral, not a claim). No imperative
// anywhere ("Visit TRT Nation" is navigational, the same shape as "Shop {vendor}" elsewhere on
// this site, not a clinical instruction like "Get your levels checked"). No "official site" or
// "authorized" — CJ's own terms bar those claims explicitly.
export default function TrtReferralCard() {
  if (!TRT_NATION_TRACKING_URL) return null; // unconfigured — see trt-referral.ts

  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-3">TRT Nation</h2>
      <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b]">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
          TRT Nation is a telehealth provider offering online testosterone replacement therapy.
          TRT Nation states its process is an online intake, lab work, and a video or phone
          consultation with a licensed provider, with medication delivered and monitored on an
          ongoing basis. TRT Nation states that lab testing is billed separately and is not
          included in the program. TRT Nation states it serves the majority of U.S. states rather
          than all of them.
        </p>
        <a
          href={TRT_NATION_TRACKING_URL}
          target="_blank"
          rel="sponsored nofollow noopener"
          className="btn-primary w-full text-center block"
        >
          Visit TRT Nation
        </a>
      </div>
      {/* Sibling, not nested — PageDisclaimer's mt-10/pt-6/border-t is a page-level trailing note
          (its shape everywhere else it's used), not sized for inside a card box. Still governed by
          the SAME `if (!TRT_NATION_TRACKING_URL) return null` above as the box itself, so the two
          are still one atomic unit — this only changes where it sits, not whether it's coupled. */}
      <PageDisclaimer variant="referral" />
    </div>
  );
}
