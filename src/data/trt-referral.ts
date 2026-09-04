// TRT Nation — CJ Affiliate referral link config for the 7 TRT FAQ pages.
//
// Advertiser: TRT Nation (Nation Medical Inc. d/b/a TRT Nation, Florida). Patient Affiliate
// Program via CJ Affiliate. LINK ONLY — no discount code exists; there is nothing to put in
// vendors.ts or route through /go/ (that resolves exclusively from the vendor registry — see
// lib/go.ts). Commission 8%, rising to 10% at 3+ actions, action type "Website Purchase",
// 30-day last-click window. Verified 2026-09-04 from the CJ dashboard + TRT Nation's own site.
//
// CONFIGURED 2026-09-04 — Mark's own CJ Click URL, "TRT Referral Link 2", pasted verbatim by him
// (never guessed or typed by CC). Verified by Mark to resolve to
// https://trtnation.com/testosterone-replacement-therapy/ through three hops before this landed.
//
// While this was null (the unconfigured state, NOT a placeholder string), TrtReferralCard.tsx
// rendered nothing on any page — see that file. A placeholder string would have risked silently
// shipping as a real-looking but dead href if someone forgot it was one; null couldn't be.
export const TRT_NATION_TRACKING_URL: string | null = "https://www.dpbolvw.net/click-101871011-17101350";
