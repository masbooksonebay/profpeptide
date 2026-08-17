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
**Crawled Aug 15 2026 3:08 PM ET and INDEXED** (CINC GSC baseline pass) — that crawl **predates the
treatment push**, so Capstone has a genuine pre-treatment crawl/index baseline like the other six.
What it lacks is a **SERP baseline**: it was NOT in CINC's 14-page longitudinal observation set, so
nobody has observed its title/snippet state before treatment. That is the real gap — different from
"never crawled." So there is no before/after on the *observed SERP* dimension, though the crawl
baseline exists. Same five changes; structure confirmed identical to the five.
(Correction 2026-08-16: an earlier version said "never crawled, no baseline" — wrong; it was crawled
and indexed. The absent thing is the observed-SERP baseline, not the crawl.)

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

## GSC SUBMISSION RUN & BASELINES

**Index/canonical status:** all eleven pages (7 treated + 4 controls) are **indexed with a
self-selected canonical**. None is in a duplicate or excluded bucket.

**GSC daily quota = 10** (not 11). Observed: nine submissions plus one accidental duplicate hit the
ceiling — which is why the last two controls slipped a day (below).

**Submission dates (ET):**
- **Aug 16 2026** — the seven treated (amino-club, glacier-aminos, ez-peptides, midwest-peptide,
  mile-high-compounds, nura-peptide, capstone-peptides) plus controls **almighty** and **spartan**.
- **Aug 17 2026** — controls **royal** and **amino-x** — a **one-day offset on half the control
  group**, caused by the daily quota running out on Aug 16. Note this offset when reading control
  timing; it is a submission-date artifact, not a treatment effect.

**Pre-submission last-crawl baselines (ET):**

| page | role | last crawl (ET) |
|---|---|---|
| amino-club | treated (A) | Aug 10 12:53 AM |
| glacier-aminos | treated (A) | Aug 7 9:00 PM |
| ez-peptides | treated (A) | Aug 7 9:09 PM |
| midwest-peptide | treated (A) | Aug 10 9:29 PM |
| mile-high-compounds | treated (A) | Jul 26 10:17 AM |
| nura-peptide | treated (B) | Aug 13 3:59 PM |
| capstone-peptides | treated (C) | Aug 15 3:08 PM |
| almighty-peptides | control | Aug 7 9:27 PM |
| spartan-peptides | control | Aug 13 8:07 PM |
| royal-peptides | control | Aug 10 3:04 AM |
| amino-x | control | Aug 13 7:43 PM |

## Scope invariant
Seven treated (A: 5, B: 1, C: 1); **43 of 50 coupon pages byte-identical**. Any future rollout must
keep the four CONTROL slugs untouched until the series concludes.
