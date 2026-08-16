# Coupon-page salience + title-alignment experiment

**Started (this assignment recorded): 2026-08-16.** This file is the canonical record for the
longitudinal SERP series on the vendor coupon pages. After the interventions below, the series is
uninterpretable without it — do not lose it.

## Hypothesis

Five coupon pages are stuck **rewritten-title / no-snippet on every SERP observation round**. The
suspected cause is low passage salience: the page's first grammatical sentence joining
{vendor, code, discount} sits ~979 tokens down (in the FAQ), the code renders only inside a styled
box (not prose), and the copy uses only "discount" — never "coupon" or "promo". Google's
About-this-result panel for `/coupons/amino-club` on "amino club coupon code" confirmed it matched
the vendor name and pulled "coupons" from the **URL path**, not the content.

## TREATED — five pages, three changes each

Slugs: **amino-club · glacier-aminos · ez-peptides · midwest-peptide · mile-high-compounds**

1. **H1 ↔ title code alignment** — H1 changed from `{Vendor} Discount Code — Save {pct}%` to
   `{Vendor} Discount Code: {code} — Save {pct}%`, matching the `<title>`. (per-page `page.tsx`)
2. **Passage-salience prose** — two derived sentences render as the first node of the code card,
   ~13–25 tokens below the H1, adjacent to the code box (opt-in via `COUPON_SENTENCE_VENDORS`):
   > Use code {CODE} at {VENDOR} to save {PCT} on your order. The {VENDOR} coupon code is verified
   > as of {MONTH YEAR} and gives you a {PCT} discount at checkout.

   Adds "coupon code" (page had zero); code appears once in prose → 3× above the fold (H1, prose,
   box). All values derived (`vendors.ts` + `CODES_VERIFIED_DATE`); no scope claim.
3. **FAQ Q1** — `Does {Vendor} have a discount code?` → `Does {Vendor} have a coupon code?`
   (per-page). FAQ Q2 left as "discount code" — natural variation, not stuffing.

## CONTROL — four pages, untouched (the valid control)

Slugs: **almighty-peptides · spartan-peptides · royal-peptides · amino-x**

Same starting state as the treated five — **rewritten title, no snippet, every round** — and **none
has recorded conversions**, so holding them back forfeits nothing revenue-bearing. Untouched on all
three variables (not in `COUPON_SENTENCE_VENDORS`, no H1 code, no FAQ change). This is the control
the effect is measured against.

## EXCLUDED — four pages, untouched, but NOT controls

Slugs: **ameano-peptides · modern-aminos · peptide-partners · purerawz**

These already **hold their own titles and render full snippets every round**. They cannot improve,
so they measure nothing as a control. They are held out only as **caution around an unproven change**
— not as the comparison group. (Correction: an earlier version of this experiment named these four as
the control group; that was wrong, fixed 2026-08-16. They are excluded for a different reason than the
four true controls above.)

## Scope invariant

Every other coupon page (45 of 50) is byte-identical. Any future rollout must keep the four CONTROL
slugs untouched until the series concludes, or the comparison is destroyed.
