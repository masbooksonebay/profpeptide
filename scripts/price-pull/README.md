# price-pull

Reusable extraction suite that populates the vendor sections of
[`docs/PP_PRICE_DATA_MASTER_v1.md`](../../docs/PP_PRICE_DATA_MASTER_v1.md).

It encodes the knowledge earned across the pilot + batches 1–3 so a price refresh
doesn't rediscover it every time: **four platform adapters, five variation models,
per-vendor coded-name decoders, and the shared normalizer** (unit-aware $/mg, blend
detection, scope filter). Standard-library Python only — no dependencies.

```
scripts/price-pull/
  refresh.py              CLI entry point (fetch → build → stamp date → write)
  pricepull/
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
python3 refresh.py --vendor swiss-chems --dry-run   # print the section, write nothing
python3 refresh.py --vendor swiss-chems --write      # replace that section in the doc
python3 refresh.py --all --write                     # every pullable vendor
```

The `pulled:` date is stamped automatically (today) on every build. Review the diff
before committing — prices drift, and a sale toggling on/off changes sale posture.

## Add a vendor

1. Add its code/discount/url to `src/data/vendors.ts` (the suite reads them from there — **never hardcode a discount**, master-doc rule 5).
2. Add an entry to `registry.VENDORS`:
   - `adapter`: `woo` (WooCommerce Store API), `purity_api`, or `nextjs` (per-product-page JSON-LD/RSC).
   - `variation_model`: documentation of the shape it uses (the detector auto-handles all five; see below).
   - `coded_decoder`: `True` if you add a per-vendor decoder in `decoders.py`.
   - `sale_posture`, `notes`.
3. If it relabels GLP-1s with codes, add a decoder in `decoders.py` — but only after **verifying identity** (see below).
4. `python3 refresh.py --vendor <slug> --dry-run`, eyeball it, then `--write`.

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

## Shared rules (applied to every vendor)

- **Base = `regular_price` / current price, never `sale_price`.** For sites that anchor a
  higher `compare_at_price` (Midwest), the current price is the base.
- **$/mg is unit-aware:** mcg→mg, commas stripped. Missing size ⇒ `—` (never guessed).
- **Per-variation stock**, not the parent flag.
- **$0 / hidden-price rows dropped.**
- **Blends:** keyed on components (KLOW > GLOW > Wolverine precedence); published ratios captured.
- **Scope filter (rule 7):** peptides / peptide-adjacent only — SARMs, Rx, cosmetics, capsules/oral, supplies excluded inline.
- **Cart-level sales are invisible in product data.** A sitewide auto-coupon (e.g.
  Biolongevity's `longevityvip`) must be checked against the live cart each refresh; the
  registry `sale_posture` note records the last finding.

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
