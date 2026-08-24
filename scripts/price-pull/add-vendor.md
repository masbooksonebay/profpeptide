# Onboarding a new vendor — runbook

The exact sequence to add a vendor to the price pull, written so it can be followed
without re-deriving the platform/variation findings from batches 1–3. Everything the
suite already knows is in `pricepull/`; this is the human decision path around it.

Run from `scripts/price-pull/`. Read-only until the final `--write`.

> **Scope.** This is the *price-pull* path (steps 1–6). A **coupon-page-only** vendor —
> one added to `vendors.ts` with a `/coupons/<slug>` page but no price grid (capstone,
> valkyrie, particle) — skips steps 1–6 entirely and never opens this doc. It still needs
> **[step 7 (Activate the verified pill)](#7-activate-the-verified-pill)** — that step is the
> one thing every onboarding path shares. There is no separate runbook for the coupon-only
> path yet; until there is, treat step 7 as its checklist.

---

## 1. Detect the platform

```bash
python3 refresh.py --detect vendordomain.com
```

Reads out `platform`, `adapter`, `confidence`, and `notes`. Map the result:

| Detector says | adapter | Action |
|---|---|---|
| WooCommerce | `woo` | standard path — proceed |
| WooCommerce (Cloudflare-blocked API) | `cinc` | Store API 403s; storefront renders. **Do not `refresh.py` it** — pull read-only from the embedded per-page product JSON (aero pattern). Mark `adapter: "cinc"` so the CLI skips it. |
| Next.js custom (/api/products) | `purity_api` | proceed; may need a path/field tweak if the JSON shape differs from Purity's |
| Next.js (per-product-page) | `nextjs` | proceed; confirm the sitemap path + product-URL pattern |
| Shopify | `shopify` | **new adapter needed** — none built yet (see README). `/products.json` is the endpoint |
| BigCommerce | (none) | usually B2B / login-gated. If prices are behind a "Professional Pricing" login → **BLOCKED** (add to `registry.BLOCKED`, do not pull). If public, needs a per-page scraper |
| WordPress, REST disabled | (none) | client-rendered React front (spartan pattern) — often age-gated/partial. Investigate; may be BLOCKED |
| unknown | (none) | investigate manually |

If it lands in BLOCKED, add a one-line reason to `registry.BLOCKED` and stop — the point of that set is to not keep retrying.

## 2. Identify the variation model

Pull the raw catalog once and look at how sizes are carried. The detector output plus a
glance at one variable product's `attributes` tells you which of the five it is:

| Model | Signature | Handling (auto in `variation_models`) |
|---|---|---|
| `dosage` | variation attribute value **is** the mg (`"10mg"`) | default; nothing special |
| `pack-size` | attribute named `Pack Size` / `Quantity`, values `1 vial` / `3 vials`… | mg comes from the **product name**; base = single-vial (min-qty) price |
| `ten-vial-kit` | simple product named `Nmgx10vials` | per-vial = kit price **÷ 10** |
| `vial-kit-axis` | variant values `Vial` / `KIT (10 vials)` | mg from the **name**; keep the Vial (non-kit) variant |
| `form-strength` | two attrs `Form` + `Strength` | mg from **Strength**; `Nasal Spray` → sprays, tablets/sublingual → excluded |

`extract_rows` auto-detects all five, so `variation_model` in the registry is mostly
documentation. Set it to what the vendor actually uses so the next maintainer knows.

Quick check for a WooCommerce vendor:
```bash
curl -s -A "Mozilla/5.0" "https://DOMAIN/wp-json/wc/store/v1/products?per_page=100" \
  | python3 -c 'import sys,json; [print(p["name"], [ (a["name"],a["value"]) for v in p.get("variations",[])[:1] for a in v.get("attributes",[]) ]) for p in json.load(sys.stdin) if p.get("variations")]' | head
```

## 3. Check for coded GLP names — and VERIFY before asserting

Scan the catalog for relabeled GLP-1s. Patterns seen so far: `GLP-3 RT`, `GLP-3 (RT)`,
`GLP3(R)`, `R-30`/`T-30`, `AX-RT`, `EZP-3P`, `GLA-3 RT`, `GLP-1.2`, `GLP-1S`.

**A decode is asserted only from EVIDENCE, never the code convention:**

1. **COA** — open the product's COA (render image PDFs). Confirm identity via molecular
   weight (**Reta ≈ 4731 · Tirz ≈ 4813 · Sema ≈ 4114**), molecular formula, CAS number, or
   the compound named in an identity field. This is the gold standard.
2. **Vendor's own title/spec** — e.g. `GLP-1 (Semaglutide)`, `GLP3 – Reta` self-identify.
3. **Unique mechanistic spec** — "39-aa **triple** agonist incl. **glucagon**" is uniquely
   Retatrutide; "39-aa **dual** agonist GIP/GLP-1" is uniquely Tirzepatide.

If none confirm it → write the row under the coded name with **`[coded, UNVERIFIED]`** and
assert no mapping (see Glacier/PureRawz/Synthesis/Vital Core decoders for the pattern).

Where to look, in order: the product's COA image/PDF → the product page description →
a `/coa` page → the Store API `description`. Add a decoder to `pricepull/decoders.py`
with a comment recording exactly how you confirmed it (`# verified: COA formula C221H342N46O68…`)
or why it's unverified.

## 4. Add the registry entry

`code`, `discount`, `url` are **not** put here — they're read from `src/data/vendors.ts`
(master-doc rule 5). Add the vendor there first if it isn't present. Then in
`pricepull/registry.py`:

```python
"new-vendor": dict(
    name="New Vendor", domain="newvendor.com", adapter="woo",
    variation_model="dosage",          # from step 2
    coded_decoder=True,                # True if you added a decoder in step 3
    sale_posture="…",                  # from step 5
    notes="…"),                        # quirks worth recording
```

## 5. Determine sale posture (product-level vs cart-level)

- **Product-level** `sale_price` shows up in the product data — count how many are on sale.
- **Cart-level auto-coupons are INVISIBLE in product data.** Add one item to the cart and
  inspect the applied coupons (WooCommerce: `POST /wp-json/wc/store/v1/cart/add-item`, then
  read `coupons[]`). Biolongevity's `longevityvip` (sitewide 50%, mutually exclusive with
  the code) only appears this way.
- Record: is the sale a cart auto-coupon or product markdown, and does the affiliate code
  **STACK** on top or is it **EXCLUSIVE**? Base is always `regular_price`, never `sale_price`.

## 6. Dry-run, review, write

```bash
python3 refresh.py --vendor new-vendor --dry-run    # prints the section, writes nothing
```

Eyeball it: sizes present (no stray `—` that should be real), `$/mg` sane, blends grouped,
coded GLPs verified-or-`[UNVERIFIED]`, supplies/SARMs/capsules excluded, no `$0.00` rows.
Then:

```bash
python3 refresh.py --vendor new-vendor --write      # replace/append the section in the doc
```

`pulled:` is stamped with today's date automatically. Review the diff, then commit the doc
by explicit path. **Do not push** — parked, per the standing workflow.

## 7. Activate the verified pill

Adding the vendor to `vendors.ts` with a `/coupons/<slug>` page makes it **active**, but the
coupon page's "✓ Verified" pill and its SERP-facing verified date render only for slugs in
`VENDORS_VERIFIED_SLUGS` (`src/data/vendors-verified.generated.ts`) — the machine set written by
a clean `scripts/check-vendors.mjs` run. A newly-added vendor is absent from that set until the
check runs, so **it ships pill-less**. Close that as part of the onboarding change:

```bash
npm run check:vendors      # fetches every active affiliate link; needs live network, NOT in CI
```

- Confirm the new slug lands in `VENDORS_VERIFIED_SLUGS` (a clean run means its link was reachable).
- If the run reports the vendor's link **DEAD**, it exits non-zero and **excludes** the slug — fix
  the affiliate URL (or retire the vendor) before onboarding. Never commit a pill the link didn't earn.
- Commit the regenerated `src/data/vendors-verified.generated.ts` in the **same PR** as the vendor,
  by explicit path. (The run also advances the freshness stamp to today — that's expected.)

**The trip-wire — a build-log warning is the signal, not noise.** The build chain *cannot* run
`check:vendors` (it hits ~48 live third-party sites), so three guards WARN instead of failing:
`check:verified-membership`, `check:surfaces`, `check:freshness`. A line like

```
!!  MISSING VERIFIED PILL (warning — build continues, deploys not blocked)
!!      • new-vendor-slug
!!  Fix: npm run check:vendors, then commit src/data/vendors-verified.generated.ts
```

means exactly one thing: **a new active vendor never got step 7.** It is actionable — run the check
and commit the stamp. (This is how the Forge gap was found: the warning fired correctly for days; it
just wasn't acted on. Don't let it scroll past.)
