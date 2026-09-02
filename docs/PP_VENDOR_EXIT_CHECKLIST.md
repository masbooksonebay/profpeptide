# Vendor exit checklist

How to take a vendor off Prof. Peptide **completely**, so it leaves no orphan route,
no stale count, and no broken link. Four vendors have exited and the process was
inconsistent — one (fusion-peptide) left a crawlable OpenGraph-image orphan behind.
This is the canonical procedure. `check:og-routes.mjs` now enforces the OG half of it.

## First decide: PERMANENT removal or TEMPORARY hide?

- **PERMANENT** — the vendor is gone for good (dead site, affiliate discontinued).
  Precedents: nordic-peptides, apollo-peptide-sciences, purerx-peptides.
- **TEMPORARY** — hidden now, data preserved for re-onboarding later.
  Precedents: fusion-peptide, synthesis-peptides, glacier-aminos (each kept its
  registry entry, price rows, and page.tsx; only display is suppressed).

Both cases 308-redirect the coupon URL to `/coupons` (never 404 — that drops the
indexed page and breaks inbound links).

## The five steps

### 1. Redirect the coupon URL
Add to `next.config.js` redirects:
```js
{ source: "/coupons/<slug>{/}?", destination: "/coupons", permanent: true },
```
The `{/}?` matches the bare path + trailing slash ONLY — it does **not** cover
`/coupons/<slug>/opengraph-image`. That gap is why step 2 matters.

### 2. Handle the page directory (`src/app/coupons/<slug>/`)
- **PERMANENT:** delete the **whole directory** (page.tsx, layout.tsx,
  opengraph-image.tsx, twitter-image.tsx). No dir → nothing to leak, nothing to scan.
- **TEMPORARY:** keep `page.tsx` (it must call `redirect("/coupons")`), keep
  `layout.tsx`, and **DELETE `opengraph-image.tsx` + `twitter-image.tsx`.** These are
  independent route segments the redirect can't cover; leaving them serves a live,
  crawlable OG image for a retired vendor. `check:og-routes.mjs` fails the build if a
  retired coupon dir still has them, or if its page.tsx has no `redirect()`.

### 3. Registry + data
- **PERMANENT:** delete the `vendors.ts` entry; remove the vendor's section from
  `docs/PP_PRICE_DATA_MASTER_v1.md`; remove it from `attribution.ts` (LISTED); remove
  its `coupon-copy.ts` line; remove any hardcoded profile-highlights entries
  (`src/app/peptides/<compound>/page.tsx`); remove pipeline entries
  (`registry.py`, `decoders.py`, `size_overrides.py`).
- **TEMPORARY:** set `retired: true` in `vendors.ts` and stop — `isRetired` filters its
  price rows from every surface, and the count/hub/testing-index/sitemap all derive
  from the flag. Keep the master-doc section and price rows for re-onboard.

### 4. Regenerate derived files
```
python3 scripts/price-pull/to_prices.py     # prices.generated.ts, prices.index.json,
                                            # prices.blends.generated.ts, blends.index.json,
                                            # blend-carries.generated.json, lastmod.generated.json
node scripts/gen-vendor-slugs.mjs           # vendors.slugs.json
```
Never hand-edit the generated files — regenerate them from the doc + registry so the
indexes stay consistent. (to_prices.py skips retired vendors and omits any vendor whose
master-doc section is gone.)

### 5. Skip-ledger + verify
- Update `scripts/price-pull/skip-ledger.json`: set the vendor's `category` to
  `"permanent"` (or the temporary category), `recheck: false` for permanent, bump
  `last_seen`, and write a dated reason.
- Run `npx tsc --noEmit` (clean) and the full guard chain (`npm run build` runs it).
- Confirm: the vendor count dropped by one everywhere it renders (all derived from
  `activeVendorCount` / `priceVendorCount`), the coupon URL + any retired siblings
  redirect, and **no `/prices/<compound>` fell below the 3-vendor indexable gate**
  (would flip a page to `noindex`).

## Reinstating a temporarily-hidden vendor

Removing `retired: true` and the two redirects is necessary but NOT sufficient. Reinstatement is
the moment to bring the page up to the current pattern, because a hidden page freezes on the day
it was hidden while every live page moves on. Synthesis Peptides (reinstated 2026-09-02, hidden
2026-07-24) came back six weeks stale: a dead `.io` domain, a purity figure the vendor had since
lowered, a raw affiliate href bypassing `/go/`, and both OG routes missing because the exit
checklist had correctly deleted them.

🔴 **A vendor on the LEGACY hardcoded-CopyCode template must be converted to `CouponCodeCard` as
part of the reinstatement, not after it.** `fusion-peptide` is the only remaining one.

Converting is not cosmetic. The legacy template ships three defects the standard pattern does not:

1. **The H1 omits the discount code**, so it no longer matches the `<title>` a SERP renders.
2. **No salience sentences** — the two-sentence passage the whole treatment exists to give Google
   is absent, because it comes from `CouponCodeCard` via `COUPON_SENTENCE_VENDORS`.
3. 🔴 **The "Verified" pill is a hand-written `<span>`, not `<CouponPills>` — so it ROUTES AROUND
   `isCodeVerified()`.** This is the important one and the reason this note exists. The gate is
   real and it works, but it lives inside a component; hand-written markup that merely *looks*
   like the component inherits none of it. Synthesis shipped a green "Verified" badge from July
   onward for a vendor that was not in the verified set, and no guard caught it, because guards
   check registry/prose consistency rather than whether a claim went through the right component.
   Same class as the ungated S2 meta-description claim fixed at `f6e85e2`.
   **Rule: any verified claim must come from `CouponPills` / `CouponCodeCard`. Never hand-write one.**

Also, on conversion: delete the whole legacy pill row rather than porting it. Nothing is lost —
the standard pattern carries the purity figure and the region in PROSE (the intro sentence and the
testing paragraph), which is where `amino-club`, the reference page, keeps them. Check the prose
actually states them before deleting the pills, then add the slug to `COUPON_SENTENCE_VENDORS`
(its header says legacy pages join "the moment they are converted").

## Guardrails that catch mistakes
- `check:og-routes.mjs` — active coupon dirs MUST have both image routes; retired dirs
  MUST have neither AND must redirect. (This is the guard that would have caught the
  fusion orphan.)
- `check:surfaces.mjs` — warns if a retired/removed slug is still in a completeness
  surface (e.g. LISTED).
- `check:sitemap-coverage.mjs` / `check:counts.mjs` — catch registry/derived drift.
