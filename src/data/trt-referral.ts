// TRT Nation — CJ Affiliate referral link config for the 7 TRT FAQ pages.
//
// Advertiser: TRT Nation (Nation Medical Inc. d/b/a TRT Nation, Florida). Patient Affiliate
// Program via CJ Affiliate. LINK ONLY — no discount code exists; there is nothing to put in
// vendors.ts or route through /go/ (that resolves exclusively from the vendor registry — see
// lib/go.ts). Commission 8%, rising to 10% at 3+ actions, action type "Website Purchase",
// 30-day last-click window. Verified 2026-09-04 from the CJ dashboard + TRT Nation's own site.
//
// 🔴 CC DOES NOT HAVE THE PID OR LINK_ID — placeholder below, DO NOT GUESS. Mark fills this in
// from the CJ dashboard. Tracking-link shape: https://www.dpbolvw.net/click-{PID}-{LINK_ID}
// (direct linking is enabled on the CJ side, so this can point at any TRT Nation page, not just
// its homepage, once the real PID/LINK_ID are known).
//
// null is the unconfigured state, not a placeholder STRING — TrtReferralCard.tsx treats null as
// "do not render the card" (see that file). A placeholder string risks silently shipping as a
// real-looking but dead href if someone forgets it's a placeholder; null can't be mistaken for a
// working link by any code that reads it.
export const TRT_NATION_TRACKING_URL: string | null = null;
