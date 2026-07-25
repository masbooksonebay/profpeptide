# price-pull

Reusable extraction suite that populates the vendor sections of
[`docs/PP_PRICE_DATA_MASTER_v1.md`](../../docs/PP_PRICE_DATA_MASTER_v1.md).

It encodes the knowledge earned across the pilot + batches 1–3 so a price refresh
doesn't rediscover it every time: **four platform adapters, five variation models,
per-vendor coded-name decoders, and the shared normalizer** (unit-aware $/mg, blend
detection, scope filter). Standard-library Python only — no dependencies.

```
scripts/price-pull/
  refresh.py              CLI entry point (detect / fetch → build → stamp date → write)
  add-vendor.md           runbook: onboard a new vendor step-by-step
  pricepull/
    detect.py             platform auto-detection (woo / shopify / bigcommerce / next.js)
    normalize.py          $/mg (mcg→mg, strip commas), blends (KLOW>GLOW>Wolverine), scope filter, display names
    decoders.py           compound matcher + per-vendor coded-GLP decoders + the VERIFICATION STANDARD
    variation_models.py   the five variation shapes, auto-detected per product
    adapters.py           woo / purity_api / nextjs fetchers → one normalized product shape
    registry.py           the 25-vendor config + blocked set; reads code/discount from vendors.ts
    build.py              classify + render a section in the exact master-doc format
```

## Run a full refresh

```bash
cd scripts/price-pull
python3 refresh.py --list                        # registry + blocked vendors
python3 refresh.py --detect vendordomain.com     # which adapter applies to a new domain?
python3 refresh.py --vendor swiss-chems --dry-run   # print the section, write nothing
python3 refresh.py --vendor swiss-chems --write      # replace that section in the doc
python3 refresh.py --all --write                     # every pullable vendor
```

The `pulled:` date is stamped automatically (today) on every build. Review the diff
before committing — prices drift, and a sale toggling on/off changes sale posture.

## Add a vendor

Follow **[add-vendor.md](add-vendor.md)** — the full step-by-step runbook (detect platform →
identify variation model → check & verify coded GLP names → registry entry → sale posture →
dry-run → write). The short version:

1. `python3 refresh.py --detect DOMAIN` to pick the adapter.
2. Add code/discount/url to `src/data/vendors.ts` (**never hardcode a discount** — rule 5).
3. Add a `registry.VENDORS` entry (adapter, variation_model, coded_decoder, sale_posture, notes).
4. If it relabels GLP-1s, add a `decoders.py` decoder — **only after verifying identity** (COA/MW/formula/CAS/spec; else `[UNVERIFIED]`).
5. `--dry-run`, eyeball, then `--write`.

## Variation models (auto-detected, not assumed)

| Model | Vendor | How base/size is derived |
|---|---|---|
| `dosage` | most | variation attribute value *is* the mg size |
| `pack-size` | BioCollex | attr = Pack Size (1/3/5/10 vials); **mg from the product name**, base = single-vial price |
| `ten-vial-kit` | Royal | simple product `Nmgx10vials`; **per-vial = kit price ÷ 10** |
| `vial-kit-axis` | Swiss | attr values `Vial` / `KIT (10 vials)`; **mg from the name**, base = the Vial variation |
| `form-strength` | PureRawz | attrs Form + Strength; **mg from Strength**; Nasal Spray → sprays, tablets/sublingual → excluded |

`variation_models.extract_rows` detects all five from the attribute names/values plus
the product name, and always drops kit/bulk variations in favor of the single-vial
price so `$/mg` stays comparable across vendors.

## Platforms encountered (and one that hasn't)

Across **27 vendors** to date: WooCommerce (the majority), Next.js custom
(`/api/products` — Purity; per-product JSON-LD/RSC — Midwest, Science Based),
BigCommerce (Limitless — login-gated B2B, blocked), and WooCommerce-behind-Cloudflare
(Aero — CINC read-only).

**Shopify has not appeared yet.** If `--detect` reports Shopify, `/products.json?limit=1`
is the likely endpoint (returns `{"products":[{variants:[{title, price, available}]}]}`)
— but there is **no `shopify` adapter yet**; it's a new one to write in `adapters.py`
(Shopify variant `title` carries the size, `price` is a string in major units, and
`available` is the stock flag). `detect.py` already recognizes and flags it.

## Shared rules (applied to every vendor)

- **Base = the current no-code price** (woo `prices.price` = `sale_price` when on sale,
  else `regular_price`; Next.js current `price`, not `compare_at`). `regular` (the anchor)
  is captured too, and `onSale = base < regular`. See **"What counts as a price"** below.
- **$/mg is unit-aware:** mcg→mg, commas stripped. Missing size ⇒ `—` (never guessed).
- **Per-variation stock**, not the parent flag.
- **$0 / hidden-price rows dropped.**
- **Blends:** keyed on components (KLOW > GLOW > Wolverine precedence); published ratios captured.
- **Scope filter (rule 7):** peptides / peptide-adjacent only — SARMs, Rx, cosmetics, capsules/oral, topical/transdermal, supplies excluded inline.
- **Cart-level AUTOMATIC discounts are invisible in product data.** A sitewide auto-coupon
  applied with no code entry (Biolongevity's `longevityvip`, 50%) is modelled via the
  registry `sitewide_sale` field and re-verified against the live cart each refresh.
  **Coupon-gated** promotions (a code the buyer types — Amino Club's ENJOY30) are NEVER
  modelled. See the rule below.
- **The woo `on_sale` flag is unreliable** — some products flag `on_sale: true` with no
  actual markdown (Biolongevity Klotho: `price == regular == sale`). Never trust the flag;
  `onSale` is derived from `base < regular`.

## What counts as a price (the sale-vs-coupon rule — settled)

**A price on PP is what a buyer pays WITHOUT ENTERING ANY CODE.**

- **Automatic discounts ARE priced** — product-level `sale_price` *and* cart-level
  auto-discounts that apply with no code entry.
  **Reference INCLUDE — Biolongevity:** sitewide 50%, automatic, no code; the storefront
  renders it as a sale with the regular price struck through. Modelled via
  `sitewide_sale=0.50` (the markdown is invisible in product data).
- **Coupon-gated promotions are NEVER modelled** — anything requiring the buyer to type a
  code is excluded, regardless of size.
  **Reference EXCLUDE — Amino Club:** ENJOY30 (30%, code required). Evaluated 2026-07 and
  deliberately excluded; its registry entry says so, to stop a future session
  "rediscovering" it as an oversight.
- **PP's own affiliate code is the only code represented**, applied on top of the no-code
  price (`prices.ts` `effectivePrice = base × (1 − ppDiscount)`).
- **We do not track, detect, or model any vendor's own coupon codes.** Do not build
  anything that tries to.

The `sitewide_sale` registry field (documented at the top of `registry.py`) is **only**
for no-code automatic discounts — never for coupon-gated ones.

## Refresh-cycle findings (2026-07 — don't rediscover these)

- **Manual identity verification each refresh** (text scrape can't confirm these):
  - **Glacier** publishes compound identifiers (CAS, MW) in product **label IMAGES**, not
    page text — so its GLP codes stay `[coded, UNVERIFIED]` in the pull and must be
    eyeballed on the live label images.
  - **PureRawz** and **Vital Core** GLP-1.x / GLP-1/2/3 codes are also `UNVERIFIED` (no
    COA/MW/identity in machine-readable data) — verify by hand or leave coded. PureRawz's
    `LY3437943` IS verified (Lilly's published Retatrutide dev code).
- **woo `on_sale` flag is unreliable** — flagged true with no markdown (Klotho). `onSale`
  is computed as `base < regular`, never from the flag. (Also in Shared rules.)
- **woo `max_pages`**: the old 3-page cap (300 products) silently truncated **behemoth-labz**
  and **purerawz** (both fill 3 pages). Raised to 12 in `adapters.woo`; the loop still
  breaks early for small catalogs. Re-confirm large catalogs aren't hitting the new ceiling.
- **Not auto-pullable — do not re-investigate** (see `registry.BLOCKED` + adapter `cinc`):
  **Aero** is CINC-only (Store API Cloudflare-403'd; pulled manually from embedded JSON),
  and **Limitless Biotech** is permanently excluded (BigCommerce B2B, all prices login-gated).

## Coded GLP names — VERIFICATION STANDARD (never infer from convention)

Vendors relabel GLP-1 compounds (`GLP-3 RT`, `R-30`, `AX-RT`, `EZP-3P`, `GLA-3 RT`,
`GLP3(R)`). A decode is asserted **only** when identity is confirmed from evidence:

- a **COA** stating molecular weight (Reta ≈ 4731 · Tirz ≈ 4813 · Sema ≈ 4114), molecular
  formula, or CAS number, or naming the compound in an identity field;
- the **compound name in the vendor's own title/spec**; or
- a **unique mechanistic spec** — "39-aa **triple** agonist incl. **glucagon**" is uniquely
  Retatrutide; "39-aa **dual** agonist GIP/GLP-1" is uniquely Tirzepatide.

If it can't be confirmed, the row is written under the coded name with
**`[coded, UNVERIFIED]`** and no mapping is asserted. Each decoder in `decoders.py`
carries a comment recording how it was confirmed (COA/formula/CAS/spec) or why it's
`UNVERIFIED` (e.g. Glacier, PureRawz, Synthesis, Vital Core).

## Blocked vendors (do not keep retrying — see `registry.BLOCKED`)

- **Limitless Biotech** — permanently excluded: BigCommerce B2B, all prices login-gated
  behind "Professional Pricing"; no public retail price.
- **Spartan Peptides** — partial: client-rendered React storefront behind a 21+ age gate
  (a consent modal — not clicked); prices shown as ranges.
- **Aero Peptides** — `adapter: cinc`: Store API is Cloudflare-403'd, so it's pulled
  read-only from the embedded product JSON manually (CINC), not by `refresh.py`.
