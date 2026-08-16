# Coupon-page salience + title-alignment experiment

**Record maintained from 2026-08-16.** Canonical log for the longitudinal SERP series on the vendor
coupon pages. After the interventions below, the series is uninterpretable without it — do not lose it.

## Hypothesis

Coupon pages sit **rewritten-title / no-snippet** on SERP observation rounds. Suspected cause: low
passage salience — the first grammatical sentence joining {vendor, code, discount} sits ~979 tokens
down (FAQ), the code renders only inside a styled box (not prose), and the copy uses only "discount",
never "coupon"/"promo". Google's About-this-result panel for `/coupons/amino-club` confirmed it matched
the vendor name and pulled "coupons" from the **URL path**, not the content.

## THE TREATMENT — five changes (evolved 2026-08-16)

Originally three changes; expanded to five on 2026-08-16 and **retrofitted to all treated pages** so
every treated page carries the identical treatment:

1. **H1 ↔ title code alignment** — `{Vendor} Discount Code: {code} — Save {pct}%` (per-page).
2. **Two derived prose sentences** (opt-in `COUPON_SENTENCE_VENDORS`, rendered by `CouponCodeCard`):
   > Use code {CODE} at {VENDOR} to save {PCT} on your order. The {VENDOR} coupon code is verified
   > as of {MONTH YEAR} and gives you a {PCT} discount at checkout.

   Adds "coupon code" (page had zero); code appears once → 3× above the fold (H1, prose, box).
3. **FAQ Q1** — `Does {Vendor} have a discount code?` → `…coupon code?` (Q2 kept as "discount code").
4. **Sentences ABOVE the card** — the two sentences render as a sibling *before* the card `<div>`
   (was inside it), so with #5 they are the first body text under the H1.
5. **Facts line removed** — the `<CouponFacts>` line (US-based · ≥99% purity · per-batch COAs) is
   deleted on treated pages, so nothing sits between the H1 and the salience prose.

All values derived (`vendors.ts` + `CODES_VERIFIED_DATE`, one `pct` source); no scope claim.

## COHORTS

### Cohort A — stripped (the original five)
**amino-club · glacier-aminos · ez-peptides · midwest-peptide · mile-high-compounds**
Rewritten title, no snippet, every round; no recorded conversions. The primary test.

### Cohort B — nura-peptide (added 2026-08-16, separate cohort)
Its **vendor page never ranked** in observation — the `/coupons` hub ranked for its queries instead.
**Different starting state** from the stripped five. Tests whether the treatment makes the vendor page
**surface at all**. Same five changes; structure confirmed identical (facts line + FAQ Q1 present).

### Cohort C — capstone-peptides (added 2026-08-16, separate cohort)
**Never crawled by Google — no baseline.** Shipped ~2026-08-15. Will be **indexed WITH the treatment
from the start**, so there is no before/after; it measures the treated state's cold-start behavior.
Same five changes; structure confirmed identical to the five.

## CONTROL — four pages, untouched (the valid control)
**almighty-peptides · spartan-peptides · royal-peptides · amino-x**
Same starting state as Cohort A (rewritten title, no snippet, no recorded conversions). Untouched on
all five variables. Do NOT edit until the series concludes, or the comparison is destroyed.

## EXCLUDED — four pages, untouched, NOT controls
**ameano-peptides · modern-aminos · peptide-partners · purerawz**
Already hold their own titles and render full snippets every round — they cannot improve, so they
measure nothing as controls. Held out only as **caution around an unproven change**. peptide-partners
in particular is the **top earner** — nothing to gain, something to lose. (An earlier version of this
experiment wrongly named these four as the control group; corrected 2026-08-16.)

## Scope invariant
Seven treated (A: 5, B: 1, C: 1); **43 of 50 coupon pages byte-identical**. Any future rollout must
keep the four CONTROL slugs untouched until the series concludes.
