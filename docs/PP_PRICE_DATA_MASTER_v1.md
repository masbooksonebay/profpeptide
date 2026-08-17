# PP Price-Comparison — MASTER PRICE DATA (all vendors, one doc)

**Status:** ACTIVE data source for the price-comparison page. ONE doc for ALL vendors (don't split per-vendor).
**Version:** v1
**PRICES_UPDATED:** July 31, 2026
**How to use:** Each vendor = one section below. New vendor pulls APPEND a new section in the same format. CC reads this to populate src/data/prices.ts. Base prices pulled by CINC (read-only from vendor sites); with-code = base × (1 − discount) from vendors.ts; per-mg computed.

---

## 📋 DATA RULES (apply to every vendor)
1. **Single compounds:** per-mg is honest → base $/mg = basePrice / sizeMg.
2. **Blends — RESOLVED (pilot of 4 vendors: Amino Club, Alpha, Science Based, Biolongevity):**
   - **GLOW (70mg total) and KLOW (80mg total)** are **consistent across every vendor pulled** → compare blend-to-blend **by total mg**.
   - **Wolverine totals VARY** (Biolongevity 10mg · Science Based 5mg/10mg · Alpha 20mg) → **keep size-explicit; do NOT compare Wolverine across vendors.** **CJC-Ipa** likewise size-explicit.
   - **Show the component ratio wherever the vendor publishes it.** Only **Biolongevity** publishes component ratios (GLOW 50/10/10, KLOW 50/10/10/10, Wolverine 5/5, Tesa/Ipa 6/2, NAD/MOTS/5A 100/10/10) — treat these as the documented **de facto standard** and use them to seed a ratio column. No $/mg on blends.
3. **Sprays / strips:** separate format sub-category (different SKU) — never merge with vials. No $/mg.
4. **Bac water / supplies:** excluded from compound comparison (no per-mg); list inline on the Excluded line.
5. **With-code price:** base × (1 − vendorDiscount). Pull discount from vendors.ts, don't hardcode. Do NOT store with-code in this doc — **base only**.
6. **Stock:** note in-stock ✓ / OOS ✗ **per size**. Where a product has variations, use **PER-VARIATION stock** — the parent in-stock flag can read true while individual sizes are OOS (WooCommerce). Read stock at the variation level, not the parent.
7. **Only pull compounds PP has (or will have) profiles for** where possible → ecosystem linking. Mark build-backlog compounds "[backlog]".
8. **Units — $/mg must be UNIT-AWARE:** convert **mcg → mg** (÷1000) before dividing. A 500mcg vial is 0.5mg. *(Pilot bug: Tesofensine 500mcg computed as $0.22/mg instead of the correct $217.90/mg — always normalize the unit first.)*

## 🧾 VENDOR-SECTION FIELDS (header)
Each vendor header carries: **slug · code · discount · url**, **traffic · pulled** (date), and **sale posture**.

- **sale posture** (revenue-relevant — determines whether the code earns anything during a promotion): does the vendor run sitewide sales? Are they **cart-level auto-coupons** or **product-level `sale_price`**? Is the sale **MUTUALLY EXCLUSIVE** with the affiliate code, or does the code **STACK** on top? Populate per vendor.

## 🔎 METHOD — capturing the TRUE BASE price
- WooCommerce Store API: use **`regular_price`**, never `sale_price`.
- **Cart-level auto-coupons do NOT appear in product data at all** — a sitewide "N% off" can be invisible in the product API. **Check the cart** (add an item, inspect the totals/applied coupons) to detect the sale and confirm whether it's exclusive with the affiliate code.

---

## VENDOR: Amino Club
- **slug:** amino-club | **code:** PROFPEPTIDE | **discount:** 20% off | **url:** aminoclub.com?utm_source=affiliate_marketing&code=PROFPEPTIDE
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** ENJOY30 (30% off) is COUPON-GATED — requires typing the code, so it is EXCLUDED under the sale-vs-coupon rule (see top of file). Evaluated 2026-07 and deliberately NOT applied (no sitewide_sale) — do NOT 'rediscover' it as an oversight. base = no-code price (original_amount). If ENJOY30 ever becomes an automatic no-code cart discount, only then set sitewide_sale.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 50mg | $49.99 | $1.00 | — | ✗ | us/products/5-amino-1mq |
| AOD-9604 | 5mg | $49.99 | $10.00 | — | ✓ | us/products/aod-9604 |
| BPC-157 | 10mg | $39.99 | $4.00 | — | ✓ | us/products/bpc-157 |
| Cagrilintide | 10mg | $69.99 | $7.00 | — | ✓ | us/products/cagrilintide |
| Cartalax [backlog] | 20mg | $69.99 | $3.50 | — | ✓ | us/products/cartalax |
| Cibinetide | 10mg | $49.99 | $5.00 | — | ✓ | us/products/ara-290 |
| Dihexa [backlog] | 10mg | $59.99 | $6.00 | — | ✓ | us/products/dihexa |
| DSIP | 5mg | $29.99 | $6.00 | — | ✓ | us/products/dsip |
| Epitalon | 10mg | $29.99 | $3.00 | — | ✓ | us/products/epithalon |
| GHK-Cu | 50mg | $29.99 | $0.60 | — | ✗ | us/products/ghk-cu |
| GHK-Cu | 100mg | $57.99 | $0.58 | — | ✓ | us/products/ghk-cu |
| Glutathione | 1500mg | $59.99 | $0.04 | — | ✓ | us/products/glutathione |
| IGF-1 LR3 | 1mg | $69.99 | $69.99 | — | ✓ | us/products/igf-1-lr3 |
| Ipamorelin | 10mg | $49.99 | $5.00 | — | ✓ | us/products/ipamorelin |
| Kisspeptin-10 | 10mg | $49.99 | $5.00 | — | ✓ | us/products/kisspeptin |
| KPV | 10mg | $39.99 | $4.00 | — | ✓ | us/products/kpv |
| LL-37 | 5mg | $34.99 | $7.00 | — | ✓ | us/products/ll-37 |
| Melanotan I | 10mg | $29.95 | $3.00 | — | ✓ | us/products/melanotan-i |
| Melanotan II | 10mg | $29.95 | $3.00 | — | ✓ | us/products/melanotan-ii |
| MOTS-C | 10mg | $39.99 | $4.00 | — | ✓ | us/products/mots-c |
| MOTS-C | 40mg | $134.99 | $3.37 | — | ✓ | us/products/mots-c |
| NAD+ | 500mg | $69.99 | $0.14 | — | ✓ | us/products/nad-plus |
| Pinealon | 10mg | $49.99 | $5.00 | — | ✓ | us/products/pinealon |
| PT-141 | 10mg | $29.99 | $3.00 | — | ✓ | us/products/pt-141 |
| Retatrutide (listed as GLP-3 (RT)) | 10mg | $69.99 | $7.00 | — | ✓ | us/products/glp-3 |
| Retatrutide (listed as GLP-3 (RT)) | 20mg | $134.99 | $6.75 | — | ✓ | us/products/glp-3 |
| Retatrutide (listed as GLP-3 (RT)) | 30mg | $199.99 | $6.67 | — | ✓ | us/products/glp-3 |
| Selank | 10mg | $29.95 | $3.00 | — | ✓ | us/products/selank |
| Semaglutide (listed as GLP-1 (SM)) | 10mg | $49.99 | $5.00 | — | ✓ | us/products/glp-1 |
| Semax | 10mg | $29.95 | $3.00 | — | ✓ | us/products/semax |
| Sermorelin | 10mg | $59.99 | $6.00 | — | ✗ | us/products/sermorelin |
| SNAP-8 [backlog] | 10mg | $29.99 | $3.00 | — | ✓ | us/products/snap-8 |
| TB-500 | 10mg | $39.99 | $4.00 | — | ✓ | us/products/tb-500 |
| Tesamorelin | 10mg | $69.99 | $7.00 | — | ✓ | us/products/tesamorlin |
| Thymosin Alpha-1 | 10mg | $39.99 | $4.00 | — | ✓ | us/products/thymosin-alpha-1 |
| Tirzepatide (listed as GLP-2 (TR)) | 30mg | $59.99 | $2.00 | — | ✓ | us/products/glp-2 |
| Tirzepatide (listed as GLP-2 (TR)) | 60mg | $109.99 | $1.83 | — | ✓ | us/products/glp-2 |
| VIP | 10mg | $49.99 | $5.00 | — | ✓ | us/products/vip |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $59.99 | not published | ✓ | us/products/cjc-ipa-no-dac |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $89.99 | not published | ✓ | us/products/glow |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $99.99 | not published | ✓ | us/products/klow |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 30mg | $99.99 | not published | ✓ | us/products/bpc-tb-spray |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $149.99 | not published | ✓ | us/products/wolverine-stack |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $79.99 | not published | ✓ | us/products/wolverine-stack |

### Sprays / strips (separate format, no $/mg)
| Product | Size | Base | Stock |
| --- | --- | --- | --- |
| Adamax (spray) | 15mg | $89.99 | ✓ |
| BPC-157 (spray) | 15mg | $59.99 | ✓ |
| DSIP (spray) | 15mg | $59.99 | ✓ |
| GHK-Cu (spray) | 25mg | $49.99 | ✓ |
| Melanotan II (spray) | 15mg | $59.99 | ✓ |
| NAD+ (spray) | 750mg | $49.99 | ✓ |
| PT-141 (spray) | 15mg | $54.99 | ✓ |
| Selank (spray) | 20mg | $59.99 | ✓ |
| Semax (spray) | 25mg | $59.99 | ✓ |

### Excluded: out-of-scope (SARMs/Rx/cosmetics) — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Biolongevity Labs
- **slug:** biolongevity-labs | **code:** PROFPEPTIDE | **discount:** 15% off | **url:** go.biolongevitylabs.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** ⚠️ Sitewide CART-LEVEL auto-coupon 'longevityvip' (50% off) — invisible in product data, so applied here via sitewide_sale=0.50 (base = list x 0.50). Registry previously noted the coupon as EXCLUSIVE with the PP code; per Mark (2026-07) PP codes STACK, so the code applies on top. Re-check the live cart each refresh (coupon %, and whether stacking still holds).

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $37.48 | $3.75 | $74.97 | ✓ | product/5-amino-1mq-10mg/ |
| BPC-157 | 10mg | $49.98 | $5.00 | $99.97 | ✓ | product/bpc157-10mg/ |
| Bronchogen [backlog] | 20mg | $34.98 | $1.75 | $69.97 | ✓ | product/bronchogen-20mg/ |
| Cagrilintide | 5mg | $85.00 | $17.00 | $170.00 | ✓ | product/cagrilintide-amylin-analog/ |
| Cardiogen | 20mg | $34.98 | $1.75 | $69.97 | ✓ | product/cardiogen-20mg/ |
| Cartalax [backlog] | 20mg | $34.98 | $1.75 | $69.97 | ✓ | product/cartalax-20mg/ |
| Chonluten [backlog] | 20mg | $34.98 | $1.75 | $69.97 | ✓ | product/chonluten-20mg/ |
| Cibinetide | 15mg | $47.50 | $3.17 | $95.00 | ✓ | product/ara-290-15mg/ |
| Cortagen | 20mg | $34.98 | $1.75 | $69.97 | ✓ | product/cortagen-20mg/ |
| DSIP | 5mg | $27.98 | $5.60 | $55.97 | ✓ | product/dsip-5mg/ |
| Epitalon | 20mg | $47.48 | $2.37 | $94.97 | ✓ | product/epithalon-20mg/ |
| Follistatin | 10mg | $249.50 | $24.95 | $499.00 | ✓ | product/follistatin/ |
| FOXO4-DRI [backlog] | 10mg | $137.49 | $13.75 | $274.97 | ✓ | product/foxo4-dri-10-mg/ |
| GHK-Cu | 50mg | $42.48 | $0.85 | $84.97 | ✓ | product/ghk-cu-50mg/ |
| Ipamorelin | 10mg | $39.98 | $4.00 | $79.97 | ✓ | product/ipamorelin-10mg/ |
| Kisspeptin-10 | 10mg | $32.48 | $3.25 | $64.97 | ✓ | product/kisspeptin-10mg/ |
| Klotho [backlog] | 20mcg | $249.50 | $12,475.00 | $499.00 | ✗ | product/klotho/ |
| KPV | 10mg | $49.98 | $5.00 | $99.97 | ✓ | product/kpv-10mg/ |
| Livagen [backlog] | 20mg | $39.98 | $2.00 | $79.97 | ✓ | product/livagen-20mg/ |
| LL-37 | 5mg | $47.48 | $9.50 | $94.97 | ✓ | product/ll-37-5mg/ |
| Melanotan I | 10mg | $27.98 | $2.80 | $55.97 | ✓ | product/melanotan-1-10mg/ |
| MOTS-C | 10mg | $54.98 | $5.50 | $109.97 | ✓ | product/motsc-10mg/ |
| NA-Selank [backlog] | 20mg | $67.48 | $3.37 | $134.97 | ✓ | product/n-acetyl-selank-amidate-20mg/ |
| NAD+ | 500mg | $124.98 | $0.25 | $249.97 | ✓ | product/nad-500mg/ |
| Ovagen [backlog] | 20mg | $39.98 | $2.00 | $79.97 | ✓ | product/ovagen-20mg/ |
| Oxytocin | 10mg | $32.48 | $3.25 | $64.97 | ✓ | product/oxytocin-10mg/ |
| Pancragen [backlog] | 20mg | $47.48 | $2.37 | $94.97 | ✓ | product/pancragen-20mg/ |
| PEG-MGF [backlog] | 5mg | $47.48 | $9.50 | $94.97 | ✓ | product/peg-mgf-5mg/ |
| Pinealon | 20mg | $34.98 | $1.75 | $69.97 | ✓ | product/pinealon-20mg/ |
| PNC-27 [backlog] | 10mg | $139.99 | $14.00 | $279.97 | ✓ | product/pnc-27-10mg/ |
| Prostamax [backlog] | 20mg | $39.98 | $2.00 | $79.97 | ✓ | product/prostamax-20mg/ |
| PT-141 | 5mg | $23.98 | $4.80 | $47.97 | ✓ | product/pt141-5mg/ |
| Semax | 20mg | $32.48 | $1.62 | $64.97 | ✓ | product/n-acetyl-semax-amidate-20mg/ |
| SlimAssist [backlog] | 2mg | $62.50 | $31.25 | $125.00 | ✓ | product/slimassist/ |
| TB-500 | 10mg | $82.48 | $8.25 | $164.97 | ✓ | product/tb500-10mg/ |
| Tesamorelin | 10mg | $74.98 | $7.50 | $149.97 | ✓ | product/tesamorelin-10mg/ |
| Testagen [backlog] | 20mg | $39.98 | $2.00 | $79.97 | ✓ | product/testagen-20mg/ |
| Thymogen | 20mg | $39.98 | $2.00 | $79.97 | ✓ | product/thymagen-20mg/ |
| Thymosin Alpha-1 | 10mg | $64.98 | $6.50 | $129.97 | ✓ | product/thymosin-alpha-1-10mg/ |
| Thymulin [backlog] | 10mg | $32.48 | $3.25 | $64.97 | ✓ | product/thymulin-peptide-10mg/ |
| Vesilute [backlog] | 20mg | $42.48 | $2.12 | $84.97 | ✓ | product/vesilute-20mg/ |
| Vesugen [backlog] | 20mg | $42.48 | $2.12 | $84.97 | ✓ | product/vesugen-20mg/ |
| Vilon [backlog] | 20mg | $39.98 | $2.00 | $79.97 | ✓ | product/vilon-20mg/ |
| VIP | 5mg | $37.48 | $7.50 | $74.97 | ✓ | product/vip-5mg/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| BPC-157/TB-500/Cartalax | BPC-157/TB-500/Cartalax | 30mg | $139.99 | not published | ✓ | product/bpc-157-tb-500-cartalax-blend-30mg-10mg-10mg-10mg/ |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $49.98 | not published | ✓ | product/cjc-1295-no-dac-ipamorelin-blend-10mg/ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $129.99 | not published | ✓ | product/glow-blend-ghk-cu-bpc-157-tb-500/ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $137.49 | not published | ✓ | product/klow-blend-ghk-cu-bpc-157-tb-500-kpv/ |
| NAD+/MOTS-C/5-Amino-1MQ | NAD+/MOTS-C/5-Amino-1MQ | 120mg | $150.00 | 120/100/10/10 (published) | ✓ | product/nad-mots-c-5-amino-1mq-blend-120mg-100mg-10mg-10mg/ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 8mg | $57.50 | not published | ✓ | product/tesamorelin-6mg-ipamorelin-2mg-blend/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $59.98 | not published | ✓ | product/blend-bpc157-tb500-10mg-blend/ |

### Sprays: none
### Excluded: multi-vial kit / pack (by name), no parseable size (Rule 4), oral/capsule, out-of-scope (SARMs/Rx/cosmetics), subscription product (recurring price — not a one-time headline), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Science Based Peptides
- **slug:** science-based-peptides | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** www.sciencebasedpeptides.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** No sitewide sale (compareAt null).

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $39.99 | $4.00 | — | ✗ | products/5-amino-1mq |
| AOD-9604 | 10mg | $39.99 | $4.00 | — | ✓ | products/aod-9604 |
| BPC-157 | 10mg | $39.99 | $4.00 | $48.99 | ✓ | products/bpc-157 |
| CJC-1295 | 10mg | $39.99 | $4.00 | — | ✓ | products/cjc-1295-no-dac |
| DSIP | 5mg | $29.99 | $6.00 | — | ✓ | products/dsip |
| Epitalon | 10mg | $29.99 | $3.00 | — | ✓ | products/epitalon |
| GHK-Cu | 50mg | $29.99 | $0.60 | — | ✓ | products/ghk-cu |
| GHK-Cu | 100mg | $57.99 | $0.58 | — | ✓ | products/ghk-cu |
| Glutathione | 600mg | $37.99 | $0.06 | — | ✓ | products/glutathione |
| Glutathione | 1500mg | $59.99 | $0.04 | — | ✓ | products/glutathione |
| IGF-1 LR3 | 1mg | $69.99 | $69.99 | — | ✓ | products/igf-1 |
| Ipamorelin | 5mg | $37.99 | $7.60 | — | ✓ | products/ipamorelin |
| Ipamorelin | 10mg | $49.99 | $5.00 | — | ✓ | products/ipamorelin |
| KPV | 10mg | $39.99 | $4.00 | — | ✓ | products/kpv |
| Melanotan I | 10mg | $34.99 | $3.50 | — | ✓ | products/melanotan-i |
| Melanotan II | 10mg | $34.99 | $3.50 | — | ✓ | products/melanotan-ii |
| MOTS-C | 10mg | $32.99 | $3.30 | — | ✓ | products/mots-c |
| MOTS-C | 15mg | $39.99 | $2.67 | — | ✓ | products/mots-c |
| NAD+ | 500mg | $69.99 | $0.14 | — | ✓ | products/nad-plus |
| NAD+ | 1000mg | $74.99 | $0.07 | — | ✓ | products/nad-plus |
| PT-141 | 10mg | $29.99 | $3.00 | — | ✓ | products/pt-141 |
| Retatrutide (listed as GLP 3-(RT)) | 10mg | $69.99 | $7.00 | — | ✗ | products/GLP3-(RT) |
| Retatrutide (listed as GLP 3-(RT)) | 30mg | $199.99 | $6.67 | — | ✓ | products/GLP3-(RT) |
| Selank | 5mg | $24.99 | $5.00 | — | ✓ | products/selank |
| Selank | 10mg | $34.99 | $3.50 | — | ✓ | products/selank |
| Semax | 5mg | $24.99 | $5.00 | — | ✓ | products/semax |
| Semax | 10mg | $34.99 | $3.50 | — | ✓ | products/semax |
| SNAP-8 [backlog] | 10mg | $29.99 | $3.00 | — | ✗ | products/snap-8 |
| TB-500 | 10mg | $39.99 | $4.00 | — | ✓ | products/tb-500 |
| Tesamorelin | 10mg | $69.99 | $7.00 | — | ✓ | products/tesamorelin |
| Tesamorelin | 20mg | $110.00 | $5.50 | — | ✓ | products/tesamorelin |
| Thymosin Alpha-1 | 10mg | $39.99 | $4.00 | — | ✓ | products/thymosin-alpha-1 |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $59.99 | not published | ✓ | products/cjc-1295-ipamorelin-blend |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $114.99 | not published | ✓ | products/glow |
| GLOW | GHK-Cu/BPC-157/TB-500 | 50mg | $97.99 | not published | ✓ | products/glow |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $129.99 | not published | ✓ | products/klow |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $109.99 | not published | ✓ | products/bpc-157-tb-500-blend |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 5mg | $71.98 | not published | ✓ | products/bpc-157-tb-500-blend |

### Sprays: none
### Excluded: supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Alpha Peptides
- **slug:** alpha-peptides | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** alpha-peptides.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** Product-level sale_price on ~25/59; code STACKS.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $33.12 | $3.31 | — | ✗ | product/5-amino-1mq/ |
| Adamax | 10mg | $71.58 | $7.16 | — | ✗ | product/adamax/ |
| AOD-9604 | 5mg | $32.99 | $6.60 | $39.59 | ✗ | product/aod-9604/ |
| AOD-9604 | 10mg | $45.75 | $4.58 | $54.90 | ✗ | product/aod-9604/ |
| BPC-157 | 10mg | $25.99 | $2.60 | $27.59 | ✓ | product/bpc-157/ |
| Cagrilintide | 5mg | $56.99 | $11.40 | $68.39 | ✗ | product/cagrilintide/ |
| Cagrilintide | 10mg | $95.99 | $9.60 | $115.19 | ✗ | product/cagrilintide/ |
| Cibinetide | 10mg | $36.00 | $3.60 | — | ✗ | product/ara-290/ |
| CJC-1295 | 5mg | $52.99 | $10.60 | $63.59 | ✗ | product/cjc-1295-no-dac/ |
| CJC-1295 | 5mg | $33.99 | $6.80 | $40.79 | ✗ | product/cjc-1295-dac/ |
| CJC-1295 | 10mg | $28.41 | $2.84 | $34.09 | ✗ | product/cjc-1295-no-dac/ |
| Dihexa [backlog] | 5mg | $35.79 | $7.16 | — | ✗ | product/dihexa/ |
| DSIP | 5mg | $21.45 | $4.29 | $25.74 | ✓ | product/dsip/ |
| DSIP | 10mg | $58.99 | $5.90 | $70.79 | ✗ | product/dsip/ |
| Epitalon | 10mg | $23.68 | $2.37 | — | ✗ | product/epithalon/ |
| Follistatin | 1mg | $84.21 | $84.21 | — | ✗ | product/follistatin-344/ |
| FOXO4-DRI [backlog] | 10mg | $62.63 | $6.26 | — | ✗ | product/foxo4-dri/ |
| GHK-Cu | 50mg | $23.99 | $0.48 | $28.79 | ✗ | product/ghk-cu/ |
| GHK-Cu | 100mg | $49.99 | $0.50 | $59.99 | ✗ | product/ghk-cu/ |
| GHRP-2 | 5mg | $14.32 | $2.86 | — | ✗ | product/ghrp-2/ |
| GHRP-6 | 5mg | $14.32 | $2.86 | — | ✗ | product/ghrp-6/ |
| Glutathione | 1500mg | $36.83 | $0.02 | — | ✗ | product/glutathione/ |
| Hexarelin | 5mg | $29.53 | $5.91 | — | ✗ | product/hexarelin/ |
| HGH Fragment 176-191 [backlog] | 5mg | $28.63 | $5.73 | — | ✗ | product/hgh-fragment-176-191/ |
| Humanin [backlog] | 10mg | $108.95 | $10.89 | — | ✗ | product/humanin/ |
| IGF-1 DES | 1mg | $23.26 | $23.26 | — | ✗ | product/igf-1-des/ |
| IGF-1 LR3 | 1mg | $45.47 | $45.47 | — | ✗ | product/igf-1-lr3/ |
| Ipamorelin | 10mg | $42.99 | $4.30 | $51.59 | ✗ | product/ipamorelin/ |
| Kisspeptin-10 | 10mg | $27.37 | $2.74 | — | ✗ | product/kisspeptin/ |
| KPV | 10mg | $25.25 | $2.52 | $30.30 | ✓ | product/kpv/ |
| LL-37 | 5mg | $35.79 | $7.16 | — | ✗ | product/ll-37/ |
| Mazdutide [backlog] | 10mg | $66.43 | $6.64 | — | ✗ | product/mazdutide/ |
| Melanotan I | 10mg | $21.05 | $2.10 | — | ✗ | product/melanotan-1/ |
| Melanotan II | 5mg | $19.99 | $4.00 | $23.99 | ✗ | product/mt-2/ |
| Melanotan II | 10mg | $21.05 | $2.10 | $25.26 | ✓ | product/mt-2/ |
| MGF | 2mg | $23.26 | $11.63 | — | ✗ | product/mgf/ |
| MOTS-C | 10mg | $27.55 | $2.75 | $33.06 | ✓ | product/mots-c/ |
| NAD+ | 500mg | $30.52 | $0.06 | — | ✗ | product/nad/ |
| Oxytocin | 10mg | $39.59 | $3.96 | — | ✗ | product/oxytocin/ |
| Pinealon | 10mg | $33.16 | $3.32 | — | ✗ | product/pinealon/ |
| PT-141 | 10mg | $22.07 | $2.21 | $26.48 | ✓ | product/pt-141/ |
| Retatrutide (listed as GLP-3 RT) | 10mg | $41.99 | $4.20 | $49.25 | ✓ | product/glp-3-rt/ |
| Retatrutide (listed as GLP-3 RT) | 15mg | $67.99 | $4.53 | $77.99 | ✓ | product/glp-3-rt/ |
| Retatrutide (listed as GLP-3 RT) | 30mg | $88.99 | $2.97 | $107.99 | ✓ | product/glp-3-rt/ |
| Retatrutide (listed as GLP-3 RT) | 50mg | $169.99 | $3.40 | $198.00 | ✓ | product/glp-3-rt/ |
| Selank | 10mg | $23.15 | $2.31 | $27.78 | ✗ | product/selank/ |
| Semaglutide (listed as GLP-1 SM) | 5mg | $44.99 | $9.00 | $53.99 | ✗ | product/glp-1-sm/ |
| Semaglutide (listed as GLP-1 SM) | 10mg | $64.99 | $6.50 | $77.99 | ✗ | product/glp-1-sm/ |
| Semax | 10mg | $20.84 | $2.08 | $25.01 | ✗ | product/semax/ |
| Sermorelin | 10mg | $44.53 | $4.45 | — | ✗ | product/sermorelin/ |
| SLU-PP-332 [backlog] | 5mg | $84.21 | $16.84 | — | ✗ | product/slu-pp-332/ |
| SNAP-8 [backlog] | 10mg | $22.11 | $2.21 | — | ✗ | product/snap-8/ |
| SS-31 | 10mg | $35.79 | $3.58 | $42.95 | ✓ | product/ss-31/ |
| Survodutide [backlog] | 10mg | $73.89 | $7.39 | — | ✗ | product/survodutide/ |
| TB-500 | 10mg | $31.32 | $3.13 | $37.58 | ✗ | product/tb-500/ |
| Tesamorelin | 10mg | $43.22 | $4.32 | $51.86 | ✓ | product/tesamorelin/ |
| Tesofensine [backlog] | 500mcg | $108.95 | $217.90 | — | ✗ | product/tesofensine/ |
| Thymalin [backlog] | 10mg | $50.53 | $5.05 | — | ✗ | product/thymalin/ |
| Thymosin Alpha-1 | 10mg | $41.44 | $4.14 | — | ✗ | product/thymosin-alpha-1/ |
| Tirzepatide (listed as GLP-2 TZ) | 30mg | $55.26 | $1.84 | $66.31 | ✓ | product/glp-2-tz/ |
| Tirzepatide (listed as GLP-2 TZ) | 60mg | $84.99 | $1.42 | $101.99 | ✓ | product/glp-2-tz/ |
| VIP | 10mg | $37.89 | $3.79 | — | ✗ | product/vip/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $48.41 | not published | ✓ | product/glow/ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $67.42 | not published | ✓ | product/klow/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $49.22 | not published | ✗ | product/bpc-157-tb-500/ |

### Sprays: none
### Excluded: out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Almighty Peptides
- **slug:** almighty-peptides | **code:** PROFPEPTIDE | **discount:** 20% off | **url:** www.almightypeptides.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** Product sale 2/61; code stacks.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| BPC-157 | 10mg | $148.99 | $14.90 | — | ✓ | product/bpc-157-peptide-10mg/ |
| CJC-1295 | 5mg | $89.99 | $18.00 | — | ✓ | product/cjc-1295-w-out-dac-2mg/ |
| CJC-1295 | 5mg | $143.00 | $28.60 | — | ✓ | product/cjc-1295-peptide-2-mg-with-dac/ |
| DSIP | 5mg | $48.00 | $9.60 | — | ✓ | product/dsip-delta-sleep-inducing-peptide-5mg/ |
| Epitalon | 10mg | $88.00 | $8.80 | — | ✓ | product/epitalon-peptide-10-mg/ |
| GHK-Cu | 50mg | $88.00 | $1.76 | — | ✓ | product/ghk-cu-50mg/ |
| GHRP-2 | 5mg | $36.00 | $7.20 | — | ✓ | product/ghrp-2-5mg/ |
| GHRP-6 | 10mg | $36.00 | $3.60 | — | ✓ | product/ghrp-6-peptide-10-mg/ |
| Glutathione | 1500mg | $299.00 | $0.20 | — | ✓ | product/glutathione-1500mg/ |
| IGF-1 LR3 | 1mg | $228.99 | $228.99 | — | ✓ | product/igf1-lr3-1-mg/ |
| Ipamorelin | 5mg | $132.00 | $26.40 | — | ✓ | product/modgrf1-29-ipamorelin-combo-10mg/ |
| Ipamorelin | 5mg | $72.99 | $14.60 | — | ✓ | product/ipamorelin-2mg/ |
| LL-37 | 5mg | $149.00 | $29.80 | — | ✓ | product/ll-37-5mg-cap-18/ |
| Melanotan II | 10mg | $65.99 | $6.60 | — | ✓ | product/melanotan-2-peptide-10-mg/ |
| MGF | 2mg | $52.99 | $26.50 | — | ✓ | product/mgf-2mg/ |
| MK-677 | 25mg | $150.99 | $6.04 | — | ✓ | product/mk-677-25mg-per-ml-30ml/ |
| MOTS-C | 10mg | $140.99 | $14.10 | — | ✓ | product/mots-c-peptide-10mg/ |
| NAD+ | 500mg | $165.00 | $0.33 | — | ✓ | product/nad-500mg/ |
| Oxytocin | 5mg | $59.99 | $12.00 | — | ✓ | product/oxytocin-peptide-2-mg/ |
| PEG-MGF [backlog] | 2mg | $109.00 | $54.50 | — | ✓ | product/peg-mgf-peptide-2-mg/ |
| PT-141 | 10mg | $70.99 | $7.10 | — | ✓ | product/pt-141-10mg/ |
| Retatrutide | 10mg | $329.00 | $32.90 | — | ✓ | product/retatrutide-10-mg/ |
| Semaglutide | 2mg | $89.99 | $44.99 | $99.00 | ✗ | product/semaglutide-peptide-2-mg/ |
| Semaglutide | 5mg | $175.00 | $35.00 | — | ✓ | product/semaglutide-5mg/ |
| Sermorelin | 5mg | $61.00 | $12.20 | — | ✓ | product/sermorelin-5mg/ |
| TB-500 | 5mg | $93.50 | $18.70 | — | ✓ | product/buy-tesamorelin-peptide-online-promote-muscle-growth/ |
| Tesamorelin | 5mg | $77.00 | $15.40 | — | ✓ | product/tesamorelin-5mg/ |
| Tirzepatide | 10mg | $233.00 | $23.30 | $258.00 | ✓ | product/tirzepatide-10mg/ |
| Tirzepatide | 30mg | $384.00 | $12.80 | — | ✓ | product/tirzepatide-30mg/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $175.00 | 5/5 (published) | ✓ | product/tb-500-5mg-bpc-157-5mg-combo/ |

### Sprays: none
### Excluded: oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Ameano Peptides
- **slug:** ameano-peptides | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** ameanopeptides.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** No sale.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 50mg | $68.00 | $1.36 | — | ✓ | product/5-amino-1mq-50mg/ |
| Adamax | 10mg | $108.00 | $10.80 | $158.00 | ✓ | product/adamax-10mg/ |
| AOD-9604 | 2mg | $38.00 | $19.00 | — | ✓ | product/aod-9604-2mg/ |
| AOD-9604 | 5mg | $58.00 | $11.60 | — | ✗ | product/aod-9604-5mg/ |
| BPC-157 | 10mg | $44.00 | $4.40 | — | ✓ | product/bpc-157-10mg/ |
| Bronchogen [backlog] | 10mg | $58.00 | $5.80 | $88.00 | ✓ | product/bronchogen-10mg/ |
| Cagrilintide | 5mg | $49.00 | $9.80 | — | ✓ | product/cagrilintide-5mg/ |
| Cagrilintide | 10mg | $88.00 | $8.80 | — | ✓ | product/cagrilintide-10mg/ |
| Cartalax [backlog] | 10mg | $58.00 | $5.80 | — | ✓ | product/cartalax-10mg/ |
| Cibinetide | 10mg | $48.00 | $4.80 | — | ✓ | product/ara-290-10mg/ |
| CJC-1295 | 5mg | $38.00 | $7.60 | — | ✓ | product/cjc-1295-no-dac-5mg/ |
| DSIP | 10mg | $58.00 | $5.80 | — | ✓ | product/dsip-10mg/ |
| Epitalon | 10mg | $38.00 | $3.80 | — | ✓ | product/epitalon-10mg/ |
| GHK-Cu | 50mg | $35.00 | $0.70 | — | ✓ | product/ghk-cu-50mg/ |
| GHK-Cu | 100mg | $53.00 | $0.53 | — | ✓ | product/ghk-cu-100mg/ |
| Ipamorelin | 10mg | $44.00 | $4.40 | — | ✓ | product/ipamorelin-10mg/ |
| Kisspeptin-10 | 10mg | $48.00 | $4.80 | — | ✗ | product/kisspeptin-10mg/ |
| KPV | 10mg | $44.00 | $4.40 | — | ✓ | product/kpv-10mg/ |
| LL-37 | 10mg | $80.00 | $8.00 | — | ✓ | product/ll-37-10mg/ |
| Melanotan I | 10mg | $44.00 | $4.40 | — | ✓ | product/melanotan-i-10mg/ |
| Melanotan II | 10mg | $44.00 | $4.40 | — | ✓ | product/melanotan-ii-10mg/ |
| MOTS-C | 10mg | $54.00 | $5.40 | — | ✓ | product/mots-c-10mg/ |
| NA-Selank [backlog] | 10mg | $44.00 | $4.40 | — | ✓ | product/n-acetyl-selank-amidate-10mg-research-peptide/ |
| NAD+ | 250mg | $44.00 | $0.18 | — | ✓ | product/nad-250mg-buffered/ |
| NAD+ | 500mg | $68.00 | $0.14 | — | ✓ | product/nad-500mg/ |
| Oxytocin | 10mg | $58.00 | $5.80 | — | ✓ | product/oxytocin-10mg/ |
| PDA | 10mg | $44.00 | $4.40 | — | ✓ | product/pda-10mg/ |
| PT-141 | 10mg | $44.00 | $4.40 | — | ✓ | product/pt-141-10mg-research-peptide/ |
| Retatrutide (listed as AMP-3P) | 6mg | $53.00 | $8.83 | — | ✓ | product/amp-3p-6mg/ |
| Retatrutide (listed as AMP-3P) | 10mg | $78.00 | $7.80 | — | ✓ | product/amp-3p-10mg/ |
| Retatrutide (listed as AMP-3P) | 12mg | $82.00 | $6.83 | — | ✓ | product/amp-3p-12mg/ |
| Retatrutide (listed as AMP-3P) | 20mg | $108.00 | $5.40 | — | ✓ | product/amp-3p-20mg-copy/ |
| Retatrutide (listed as AMP-3P) | 24mg | $118.00 | $4.92 | — | ✓ | product/amp-3p-24mg/ |
| Retatrutide (listed as AMP-3P) | 48mg | $215.00 | $4.48 | — | ✓ | product/amp-3p-48mg/ |
| Semaglutide (listed as AMP-1P) | 5mg | $35.00 | $7.00 | — | ✓ | product/amp-1p-5mg/ |
| Semaglutide (listed as AMP-1P) | 10mg | $54.00 | $5.40 | — | ✓ | product/amp-1p-10mg/ |
| Semax | 10mg | $44.00 | $4.40 | — | ✓ | product/n-acetyl-semax-amidate-10mg-research-peptide/ |
| Sermorelin | 5mg | $44.00 | $8.80 | — | ✓ | product/sermorelin-5mg/ |
| SNAP-8 [backlog] | 10mg | $40.00 | $4.00 | — | ✓ | product/snap-8-10mg/ |
| Survodutide [backlog] | 10mg | $95.00 | $9.50 | — | ✓ | product/survodutide-10mg/ |
| TB-500 | 10mg | $48.00 | $4.80 | — | ✓ | product/tb-500-frag-17-23-10mg/ |
| Tesamorelin | 10mg | $68.00 | $6.80 | — | ✓ | product/tesamorelin-10mg-research-peptide/ |
| Thymosin Alpha-1 | 5mg | $35.00 | $7.00 | — | ✓ | product/thymosin-alpha-1-5mg/ |
| Thymosin Alpha-1 | 10mg | $62.00 | $6.20 | — | ✓ | product/thymosin-alpha-1-10mg/ |
| Tirzepatide (listed as AMP-2P) | 10mg | $53.00 | $5.30 | — | ✓ | product/amp-2p-10mg/ |
| Tirzepatide (listed as AMP-2P) | 15mg | $71.00 | $4.73 | — | ✓ | product/amp-2p-15mg/ |
| Tirzepatide (listed as AMP-2P) | 20mg | $88.00 | $4.40 | — | ✓ | product/amp-2p-20mg/ |
| Tirzepatide (listed as AMP-2P) | 30mg | $98.00 | $3.27 | — | ✓ | product/amp-2p-30mg/ |
| Tirzepatide (listed as AMP-2P) | 60mg | $168.00 | $2.80 | — | ✓ | product/amp-2p-60mg/ |
| VIP | 10mg | $58.00 | $5.80 | — | ✓ | product/vip-10mg/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| BPC-157/TB-500/Cartalax | BPC-157/TB-500/Cartalax | 30mg | $138.00 | 10/10/10 (published) | ✓ | product/deadpool-blend-bpc-157-tb4-cartalax-10mg-10mg-10mg/ |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $53.00 | 5/5 (published) | ✓ | product/cjc-no-dac-ipamorelin-blend-5mg-5mg/ |
| GHK-Cu/KPV | GHK-Cu/KPV | 70mg | $85.00 | 50/20 (published) | ✓ | product/beauty-blend-ghk-cu-kpv-50mg-20mg/ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $88.00 | not published | ✓ | product/glow-blend-10mg/ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $98.00 | not published | ✓ | product/klow-blend-80mg-research-peptide/ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 13mg | $88.00 | 10/3 (published) | ✓ | product/tesamorelin-ipamorelin-blend-10mg-3mg/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $88.00 | 10/10 (published) | ✓ | product/bpc-157-tb4-blend-10mg-10mg/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $53.00 | 5/5 (published) | ✓ | product/bpc-157-tb4-blend-5mg-5mg/ |

### Sprays: none
### Excluded: blend leak (Rule A): selank + semax — blend-registry candidate, manually excluded — blend leak: Retatrutide/Cagrilintide blend -> Cagrilintide 12.5mg ($10.80/mg)., out-of-scope (SARMs/Rx/cosmetics), supply, topical/transdermal — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Amino X
- **slug:** amino-x | **code:** PROFPEPTIDE | **discount:** 15% off | **url:** aminox.net
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** No sale.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| BPC-157 | 5mg | $69.99 | $14.00 | — | ✗ | product/bpc-157/ |
| BPC-157 | 10mg | $89.99 | $9.00 | — | ✗ | product/bpc-157/ |
| CJC-1295 | 2mg | $39.99 | $20.00 | — | ✗ | product/cjc-1295-with-dac/ |
| CJC-1295 | 5mg | $59.99 | $12.00 | — | ✗ | product/cjc-1295-with-dac/ |
| CJC-1295 | 10mg | $79.99 | $8.00 | — | ✗ | product/cjc-1295-with-dac/ |
| GHK-Cu | 50mg | $29.99 | $0.60 | — | ✓ | product/ghk-cu/ |
| MOTS-C | 20mg | $49.99 | $2.50 | — | ✗ | product/mots-c/ |
| MOTS-C | 40mg | $69.99 | $1.75 | — | ✗ | product/mots-c/ |
| Retatrutide (listed as AX-RT) | 10mg | $49.99 | $5.00 | — | ✗ | product/ax-rt/ |
| Retatrutide (listed as AX-RT) | 20mg | $69.99 | $3.50 | — | ✓ | product/ax-rt/ |
| Selank | 5mg | $29.99 | $6.00 | — | ✗ | product/selank/ |
| Selank | 10mg | $39.99 | $4.00 | — | ✗ | product/selank/ |
| TB-500 | 5mg | $49.99 | $10.00 | — | ✗ | product/tb-500/ |
| TB-500 | 10mg | $69.99 | $7.00 | — | ✗ | product/tb-500/ |
| TB-500 | 20mg | $89.99 | $4.50 | — | ✗ | product/tb-500/ |
| Tesamorelin | 10mg | $64.99 | $6.50 | — | ✓ | product/tesamorelin/ |
| Tirzepatide (listed as AX-TR) | 10mg | $34.99 | $3.50 | — | ✗ | product/ax-tr/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $79.99 | not published | ✗ | product/klow/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $64.99 | not published | ✓ | product/bpc-157-tb-500-blend/ |

### Sprays: none
### Excluded: supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Ascension Peptides
- **slug:** ascension-peptides | **code:** PROFPEPTIDE | **discount:** 50% off | **url:** ascensionpeptides.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** ⚠️ Near-sitewide product-level sale_price (39/42); base=regular_price; code STACKS.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $52.00 | $5.20 | $94.99 | ✓ | product/5-amino-1mq-10-mg/ |
| AOD-9604 | 5mg | $55.00 | $11.00 | $74.99 | ✓ | product/aod-9604-5mg/ |
| BPC-157 | 10mg | $49.00 | $4.90 | $74.99 | ✓ | product/bpc-157-10mg/ |
| Cagrilintide (listed as C-10) | 10mg | $120.00 | $12.00 | $199.99 | ✓ | product/c-10/ |
| Cibinetide | 10mg | $70.00 | $7.00 | $79.99 | ✓ | product/ara-290-10mg/ |
| CJC-1295 | 5mg | $50.00 | $10.00 | $64.99 | ✓ | product/cjc-1295-5mg/ |
| CJC-1295 | 10mg | $80.00 | $8.00 | $109.99 | ✓ | product/cjc-1295-no-dac-10mg/ |
| DSIP | 10mg | $65.00 | $6.50 | $94.99 | ✓ | product/dsip-10mg/ |
| Epitalon | 10mg | $50.00 | $5.00 | $69.99 | ✓ | product/epithalon-10mg/ |
| FOXO4-DRI [backlog] | 10mg | $134.00 | $13.40 | $199.99 | ✓ | product/fox04-dri/ |
| GHK-Cu | 100mg | $65.00 | $0.65 | $84.99 | ✓ | product/ghk-cu-100mg-3ml/ |
| Ipamorelin | 5mg | $50.00 | $10.00 | $64.99 | ✓ | product/ipamorelin-5mg/ |
| Kisspeptin-10 | 10mg | $70.00 | $7.00 | $74.99 | ✓ | product/kisspeptin-10mg/ |
| KPV | 10mg | $50.00 | $5.00 | $79.99 | ✓ | product/kpv-10mg/ |
| LL-37 | 10mg | $89.00 | $8.90 | $119.99 | ✓ | product/ll37-10mg/ |
| Melanotan I | 10mg | $50.00 | $5.00 | $59.99 | ✓ | product/melanotan-i-10mg/ |
| Melanotan II | 10mg | $43.00 | $4.30 | $59.99 | ✓ | product/melanotan-ii-10mg/ |
| MOTS-C | 10mg | $75.00 | $7.50 | $89.99 | ✓ | product/mots-c-10mg/ |
| NAD+ | 1000mg | $104.00 | $0.10 | $179.99 | ✓ | product/nad-1000mg/ |
| Oxytocin | 2mg | $49.99 | $25.00 | — | ✓ | product/oxytocin-2mg/ |
| Pinealon | 10mg | $50.00 | $5.00 | $89.99 | ✓ | product/pinealon-10mg/ |
| PT-141 | 10mg | $49.00 | $4.90 | $59.99 | ✓ | product/pt-141-10mg/ |
| Retatrutide (listed as R-10) | 10mg | $99.00 | $9.90 | $149.99 | ✓ | product/r-10/ |
| Retatrutide (listed as R-30) | 30mg | $250.00 | $8.33 | $299.99 | ✓ | product/r-30/ |
| Selank | 10mg | $47.50 | $4.75 | $60.00 | ✓ | product/selank-10mg/ |
| Semaglutide (listed as S-5) | 5mg | $65.00 | $13.00 | $99.99 | ✓ | product/s-5/ |
| Semax | 10mg | $59.99 | $6.00 | — | ✓ | product/semax-10mg/ |
| Sermorelin | 10mg | $72.00 | $7.20 | $99.99 | ✓ | product/sermorelin-10mg/ |
| SS-31 | 10mg | $60.00 | $6.00 | $79.99 | ✓ | product/ss-31-10mg/ |
| TB-500 | 5mg | $54.00 | $10.80 | $60.00 | ✓ | product/tb-500-5mg/ |
| Tesamorelin | 5mg | $50.00 | $10.00 | $89.99 | ✓ | product/tesamorelin-5mg/ |
| Thymosin Alpha-1 | 10mg | $71.00 | $7.10 | $99.99 | ✓ | product/thymosin-alpha-1-10mg/ |
| Tirzepatide (listed as T-10) | 10mg | $105.00 | $10.50 | $124.99 | ✓ | product/t-10/ |
| Tirzepatide (listed as T-30) | 30mg | $224.00 | $7.47 | $249.99 | ✓ | product/t-30/ |
| VIP | 10mg | $80.00 | $8.00 | $149.99 | ✓ | product/vip-10mg/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 20mg | $118.00 | 10/10/20 (published) | ✗ | product/cjc-1295-no-dac-10mg-ipamorelin-10mg-20mg/ |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $70.00 | 5/5/10 (published) | ✓ | product/fit-stack-cjc-1295-ipamorelin/ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $125.00 | 50/10/10/70 (published) | ✓ | product/glow-advanced-peptide-blend-for-radiance-recovery/ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $150.00 | 50/10/10/10/80 (published) | ✓ | product/klow-ghk-cu-bpc-157-thymosin-beta4-kpv/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $90.00 | 10/10/20 (published) | ✓ | product/wolverine-stack/ |

### Sprays: none
### Excluded: clinical/other — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Behemoth Labz
- **slug:** behemoth-labz | **code:** PROF10 | **discount:** 10% off | **url:** behemothlabz.com
- **traffic:** (not pulled) | **pulled:** August 8 2026
- **sale posture:** Product sale 20/100; code stacks.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| Adamax | 5mg | $55.17 | $11.03 | — | ✓ | product/buy-adamax-peptide-online/ |
| Adamax | 10mg | $55.96 | $5.60 | $68.12 | ✓ | product/adamax-peptide/ |
| Adipotide | 5mg | $77.39 | $15.48 | — | ✓ | product/adipotide-peptide/ |
| Adipotide | 10mg | $102.62 | $10.26 | — | ✓ | product/adipotide-peptide/ |
| AOD-9604 | 5mg | $76.76 | $15.35 | — | ✓ | product/aod-9064-peptide/ |
| AOD-9604 | 10mg | $114.09 | $11.41 | — | ✓ | product/aod-9064-peptide/ |
| BPC-157 | 5mg | $62.27 | $12.45 | — | ✓ | product/bpc-157/ |
| BPC-157 | 10mg | $124.54 | $12.45 | — | ✓ | product/bpc-157/ |
| Bronchogen [backlog] | 20mg | $69.47 | $3.47 | — | ✓ | product/bronchogen/ |
| Cardiogen | 20mg | $61.48 | $3.07 | — | ✓ | product/cardiogen/ |
| Cartalax [backlog] | 20mg | $66.48 | $3.32 | — | ✗ | product/cartalax/ |
| Chonluten [backlog] | 20mg | $60.48 | $3.02 | — | ✓ | product/chonluten/ |
| Cibinetide | 16mg | $108.12 | $6.76 | — | ✓ | product/ara-290-peptide/ |
| CJC-1295 | 2mg | $41.45 | $20.73 | — | ✓ | product/cjc-1295-with-dac/ |
| CJC-1295 | 5mg | $58.13 | $11.63 | — | ✓ | product/cjc-1295-with-dac/ |
| Cortagen | 20mg | $54.48 | $2.72 | — | ✓ | product/cortagen/ |
| DSIP | 2mg | $49.48 | $24.74 | — | ✓ | product/dsip-delta-sleep-inducing-peptide/ |
| DSIP | 5mg | $56.48 | $11.30 | — | ✓ | product/dsip-delta-sleep-inducing-peptide/ |
| Epitalon | 20mg | $96.57 | $4.83 | — | ✓ | product/epithalon/ |
| Epitalon | 100mg | $112.94 | $1.13 | — | ✓ | product/n-acetyl-epithalon-peptide/ |
| Follistatin | 1mg | $143.09 | $143.09 | — | ✗ | product/follistatin-344-85-peptide/ |
| FOXO4-DRI [backlog] | 10mg | $342.40 | $34.24 | — | ✓ | product/foxo4-dri-peptide/ |
| GHRP-2 | 10mg | $44.33 | $4.43 | — | ✓ | product/buy-ghrp-2-growth-hormone-releasing-peptide-2-online/ |
| GHRP-6 | 10mg | $81.91 | $8.19 | — | ✓ | product/ghrp-6/ |
| Glutathione | 1200mg | $133.25 | $0.11 | — | ✓ | product/reduced-glutathione-peptide/ |
| Hexarelin | 5mg | $95.54 | $19.11 | — | ✓ | product/hexarelin-acetate/ |
| Humanin [backlog] | 10mg | $177.48 | $17.75 | — | ✓ | product/humanin-peptide/ |
| IGF-1 DES | 1mg | $196.05 | $196.05 | — | ✓ | product/igf1-des/ |
| IGF-1 LR3 | 0.2mg | $13.49 | $67.45 | — | ✓ | product/igf1-lr3-receptor-grade/ |
| IGF-1 LR3 | 1mg | $67.46 | $67.46 | — | ✓ | product/igf1-lr3-media/ |
| Ipamorelin | 5mg | $80.62 | $16.12 | — | ✓ | product/ipamorelin/ |
| Kisspeptin-10 | 5mg | $72.23 | $14.45 | — | ✓ | product/kisspeptin-10-peptide/ |
| Kisspeptin-10 | 10mg | $149.26 | $14.93 | — | ✓ | product/kisspeptin-10-peptide/ |
| KPV | 5mg | $57.28 | $11.46 | — | ✓ | product/kpv-lysine-proline-valine-peptide/ |
| KPV | 50mg | $228.27 | $4.57 | — | ✓ | product/kpv-lysine-proline-valine-peptide/ |
| Livagen [backlog] | 20mg | $72.72 | $3.64 | — | ✓ | product/livagen-peptide-20mg/ |
| LL-37 | 5mg | $108.66 | $21.73 | — | ✓ | product/ll-37-cap-18-peptide/ |
| Melanotan II | 10mg | $66.24 | $6.62 | — | ✓ | product/melanotan-2/ |
| MGF | 10mg | $143.09 | $14.31 | — | ✓ | product/mgf-peptide/ |
| MOTS-C | 10mg | $78.69 | $7.87 | — | ✓ | product/mots-c-peptide/ |
| MOTS-C | 20mg | $157.39 | $7.87 | — | ✓ | product/mots-c-peptide/ |
| NAD+ | 100mg | $65.94 | $0.66 | — | ✓ | product/nad-peptide/ |
| NAD+ | 500mg | $204.70 | $0.41 | — | ✓ | product/nad-peptide/ |
| Ovagen [backlog] | 5mg | $21.48 | $4.30 | — | ✓ | product/ovagen/ |
| Ovagen [backlog] | 20mg | $65.98 | $3.30 | — | ✓ | product/ovagen/ |
| Oxytocin | 5mg | $76.83 | $15.37 | — | ✓ | product/oxytocin-peptide/ |
| Pancragen [backlog] | 20mg | $61.48 | $3.07 | — | ✓ | product/pancragen/ |
| Pinealon | 5mg | $66.88 | $13.38 | — | ✓ | product/buy-pinealon-edr-peptide-online/ |
| Pinealon | 10mg | $89.72 | $8.97 | — | ✓ | product/buy-pinealon-edr-peptide-online/ |
| Pinealon | 20mg | $83.53 | $4.18 | — | ✓ | product/pinealon-peptide/ |
| PNC-27 [backlog] | 5mg | $170.38 | $34.08 | — | ✓ | product/pnc-27-peptide/ |
| PNC-27 [backlog] | 10mg | $314.00 | $31.40 | — | ✓ | product/pnc-27/ |
| PT-141 | 10mg | $73.45 | $7.35 | — | ✓ | product/n-acetyl-pt-141/ |
| Selank | 10mg | $68.53 | $6.85 | — | ✓ | product/ac-selank-nh2-10mg/ |
| Selank | 20mg | $98.48 | $4.92 | — | ✓ | product/selank/ |
| Selank | 40mg | $108.98 | $2.72 | — | ✓ | product/selank/ |
| Semax | 5mg | $30.98 | $6.20 | — | ✓ | product/semax-peptide/ |
| Semax | 10mg | $56.48 | $5.65 | — | ✓ | product/semax-peptide/ |
| Semax | 30mg | $83.22 | $2.77 | — | ✓ | product/semax-peptide/ |
| Semax | 60mg | $200.69 | $3.34 | — | ✓ | product/n-acetyl-semax-amidate/ |
| Sermorelin | 10mg | $128.87 | $12.89 | — | ✓ | product/sermorelin/ |
| SNAP-8 [backlog] | 10mg | $41.79 | $4.18 | — | ✓ | product/buy-snap-8-acetyl-octapeptide-3/ |
| SNAP-8 [backlog] | 100mg | $258.41 | $2.58 | — | ✓ | product/buy-snap-8-acetyl-octapeptide-3/ |
| SS-31 | 5mg | $40.15 | $8.03 | — | ✓ | product/ss31-elamipretide/ |
| SS-31 | 10mg | $74.98 | $7.50 | — | ✓ | product/ss31-elamipretide/ |
| Tesamorelin | 5mg | $97.99 | $19.60 | — | ✗ | product/tesamorelin-peptide/ |
| Tesamorelin | 10mg | $118.11 | $11.81 | — | ✓ | product/tesamorelin-peptide/ |
| Testagen [backlog] | 20mg | $60.98 | $3.05 | — | ✗ | product/testagen/ |
| Thymalin [backlog] | 5mg | $78.98 | $15.80 | — | ✓ | product/thymalin-peptide/ |
| Thymalin [backlog] | 20mg | $120.97 | $6.05 | — | ✓ | product/thymalin-peptide/ |
| Thymalin [backlog] | 50mg | $319.19 | $6.38 | — | ✓ | product/thymalin-peptide/ |
| Thymogen | 20mg | $76.97 | $3.85 | — | ✓ | product/thymagen/ |
| Thymosin Alpha-1 | 5mg | $84.86 | $16.97 | — | ✓ | product/thymosin-alpha-1-peptide/ |
| Thymosin Alpha-1 | 50mg | $326.04 | $6.52 | — | ✓ | product/thymosin-alpha-1-peptide/ |
| Vesilute [backlog] | 10mg | $58.99 | $5.90 | — | ✓ | product/vesilute-10mg/ |
| Vesugen [backlog] | 20mg | $61.48 | $3.07 | — | ✓ | product/vesugen/ |
| Vilon [backlog] | 20mg | $64.48 | $3.22 | — | ✓ | product/vilon/ |
| VIP | 5mg | $41.98 | $8.40 | — | ✓ | product/vip-vasoactive-intestinal-peptide/ |
| VIP | 10mg | $77.39 | $7.74 | — | ✗ | product/vip-vasoactive-intestinal-peptide/ |
| VIP | 12mg | $94.22 | $7.85 | — | ✓ | product/vip-vasoactive-intestinal-peptide/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 8mg | $199.96 | not published | ✓ |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 4mg | $102.97 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $168.49 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $216.05 | not published | ✓ |

### Sprays / strips (separate format, no $/mg)
| Product | Size | Base | Stock |
| --- | --- | --- | --- |
| Adipotide (spray) | 100mcg | $105.55 | ✓ |
| AOD-9604 (spray) | 100mcg | $122.66 | ✓ |
| BPC-157 (spray) | 100mcg | $124.54 | ✓ |
| CJC-1295 (spray) | 20mcg | $44.74 | ✓ |
| CJC-1295 (spray) | 50mcg | $112.01 | ✓ |
| DSIP (spray) | 50mcg | $90.01 | ✓ |
| Epitalon (spray) | 1mg | $186.77 | ✓ |
| Epitalon (spray) | 1mg | $174.19 | ✓ |
| GHRP-2 (spray) | 100mcg | $71.66 | ✓ |
| GHRP-6 (spray) | 100mcg | $55.44 | ✓ |
| Glutathione (spray) | 1.2mg | $146.34 | ✓ |
| Glutathione (spray) | 10mcg | $108.12 | ✓ |
| HGH Fragment 176-191 [backlog] (spray) | 50mcg | $78.41 | ✓ |
| Ipamorelin (spray) | 50mcg | $80.62 | ✓ |
| KPV (spray) | 500mcg | $262.67 | ✓ |
| Melanotan I (spray) | 100mcg | $66.24 | ✗ |
| Melanotan II (spray) | 100mcg | $66.24 | ✓ |
| MGF (spray) | 20mcg | $88.46 | ✓ |
| MOTS-C (spray) | 200mcg | $157.39 | ✓ |
| NAD+ (spray) | 5mg | $222.48 | ✓ |
| Oxytocin (spray) | 100mcg | $143.35 | ✓ |
| PT-141 (spray) | 100mcg | $75.35 | ✓ |
| Selank (spray) | 400mcg | $128.44 | ✓ |
| Semax (spray) | 300mcg | $108.95 | ✓ |
| Semax (spray) | 600mcg | $200.69 | ✓ |
| Semax (spray) | 1200mcg | $401.38 | ✓ |
| Sermorelin (spray) | 100mcg | $123.40 | ✓ |
| Tesamorelin (spray) | 1mg | $1,122.22 | ✓ |
| Tesamorelin (spray) | 200mcg | $325.71 | ✓ |

### Excluded: blend leak (Rule A): ghrp-6 + sermorelin — blend-registry candidate, liquid/concentration (per-ml, not a vial), manually excluded — blend leak: BPC-157/Arg/TB-500/GHK-Cu 4-way blend -> BPC-157 30mg., manually excluded — blend leak: BPC-157/TB-500 blend -> BPC-157 (4/15mg). Also catches the igf-lr3-bpc-157-tb-500 blend (11mg)., manually excluded — blend leak: IGF-1 LR3/BPC-157 (+TB-500) blends -> BPC-157 (6/11mg)., manually excluded — blend leak: Ipamorelin/GHRP-2 blend -> Ipamorelin 20mg., manually excluded — blend leak: Sermorelin/GHRP-2 blend -> Sermorelin 10mg., manually excluded — blend leak: Sermorelin/Ipamorelin blend -> Sermorelin 20mg., manually excluded — form-strength product (powder/liquid/tabs); its '10mg per ml' liquid mis-parses as a 10mg vial ($9.18 = $0.92/mg). Not a vial price. (MK-777 is the same class — reported, not yet excluded.), multi-vial kit / pack (by name), oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply, topical/transdermal — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: BioCollex
- **slug:** biocollex | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** biocollexresearch.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** No sale.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| GHK-Cu | 50mg | $40.00 | $0.80 | — | ✓ | ghk-cu-50mg/ |
| MOTS-C | 10mg | $65.00 | $6.50 | — | ✓ | mots-c-10mg/ |
| NAD+ | 500mg | $65.00 | $0.13 | — | ✓ | nad-500mg/ |
| PT-141 | 10mg | $45.00 | $4.50 | — | ✓ | pt-141-10mg/ |
| Retatrutide (listed as GLP-3 RT) | 10mg | $90.00 | $9.00 | — | ✓ | glp3-bundle/ |
| Retatrutide (listed as GLP-3 RT) | 20mg | $155.00 | $7.75 | — | ✓ | glp3-bundle/ |
| Retatrutide (listed as GLP-3 RT) | 30mg | $185.00 | $6.17 | — | ✓ | glp3-bundle/ |
| Selank | 10mg | $55.00 | $5.50 | — | ✓ | selank-10mg/ |
| Semax | 10mg | $55.00 | $5.50 | — | ✓ | semax-10mg/ |
| SS-31 | 10mg | $60.00 | $6.00 | — | ✓ | ss-31-10mg/ |
| Tesamorelin | 10mg | $85.00 | $8.50 | — | ✓ | tesamorelin-10mg/ |
| Tirzepatide (listed as GLP-2 TZ) | 25mg | $115.00 | $4.60 | — | ✓ | glp-2-25mg/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $75.00 | 5/5 (published) | ✓ | cjc-ipa-5mg/ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $110.00 | not published | ✓ | klow-80mg/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $60.00 | not published | ✓ | wolverine-10mg/ |

### Sprays: none
### Excluded: out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: EZ Peptides
- **slug:** ez-peptides | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** ezpeptides.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** No sale.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 50mg | $68.00 | $1.36 | — | ✓ | product/5-amino-1mq-50mg/ |
| Adamax | 10mg | $108.00 | $10.80 | $158.00 | ✓ | product/adamax-10mg/ |
| AOD-9604 | 2mg | $38.00 | $19.00 | — | ✓ | product/aod-9604-2mg-research-grade-compound/ |
| AOD-9604 | 5mg | $53.00 | $10.60 | — | ✗ | product/aod-9604-5mg/ |
| BPC-157 | 10mg | $44.00 | $4.40 | — | ✓ | product/bpc-157-10mg/ |
| Bronchogen [backlog] | 10mg | $58.00 | $5.80 | $88.00 | ✓ | product/bronchogen-10mg/ |
| Cagrilintide | 5mg | $44.00 | $8.80 | — | ✓ | product/cagrilintide-5mg/ |
| Cagrilintide | 10mg | $88.00 | $8.80 | — | ✓ | product/cagrilintide-10mg/ |
| Cartalax [backlog] | 10mg | $58.00 | $5.80 | — | ✓ | product/cartalax-10mg/ |
| Cibinetide | 10mg | $48.00 | $4.80 | — | ✓ | product/ara-290-10mg/ |
| CJC-1295 | 5mg | $38.00 | $7.60 | — | ✓ | product/cjc-1295-no-dac-5mg/ |
| DSIP | 10mg | $58.00 | $5.80 | — | ✓ | product/dsip-10mg/ |
| Epitalon | 10mg | $38.00 | $3.80 | — | ✓ | product/epitalon-10mg/ |
| GHK-Cu | 50mg | $35.00 | $0.70 | — | ✓ | product/ghk-cu-50mg/ |
| GHK-Cu | 100mg | $53.00 | $0.53 | — | ✓ | product/ghk-cu-lyophilized-100mg/ |
| Ipamorelin | 10mg | $44.00 | $4.40 | — | ✓ | product/ipamorelin-10mg/ |
| Kisspeptin-10 | 10mg | $44.00 | $4.40 | — | ✗ | product/kisspeptin-10mg/ |
| KPV | 10mg | $44.00 | $4.40 | — | ✓ | product/kpv-10mg/ |
| LL-37 | 10mg | $78.00 | $7.80 | — | ✓ | product/ll-37-10mg/ |
| Melanotan I | 10mg | $44.00 | $4.40 | — | ✓ | product/melanotan-i-10mg/ |
| Melanotan II | 10mg | $44.00 | $4.40 | — | ✓ | product/melanotan-ii-10mg/ |
| MOTS-C | 10mg | $54.00 | $5.40 | — | ✓ | product/mots-c-10mg/ |
| NA-Selank [backlog] | 10mg | $44.00 | $4.40 | — | ✓ | product/selank-10mg/ |
| NAD+ | 250mg | $44.00 | $0.18 | — | ✓ | product/buffered-nad-250mg/ |
| NAD+ | 500mg | $68.00 | $0.14 | — | ✓ | product/buffered-nad-500mg/ |
| Oxytocin | 10mg | $58.00 | $5.80 | — | ✓ | product/oxytocin-10mg/ |
| PDA | 10mg | $44.00 | $4.40 | — | ✓ | product/pda-10mg/ |
| PT-141 | 10mg | $44.00 | $4.40 | — | ✓ | product/pt-141-10mg/ |
| Retatrutide (listed as EZP-3P) | 6mg | $48.00 | $8.00 | — | ✓ | product/ezp-3p-6mg/ |
| Retatrutide (listed as EZP-3P) | 10mg | $78.00 | $7.80 | — | ✓ | product/ezp-3p-10mg-glp-3rt/ |
| Retatrutide (listed as EZP-3P) | 12mg | $82.00 | $6.83 | — | ✓ | product/ezp-3p-12mg/ |
| Retatrutide (listed as EZP-3P) | 20mg | $108.00 | $5.40 | — | ✓ | product/ezp-3p-20mg/ |
| Retatrutide (listed as EZP-3P) | 24mg | $118.00 | $4.92 | — | ✓ | product/ezp-3p-24mg/ |
| Retatrutide (listed as EZP-3P) | 48mg | $208.00 | $4.33 | — | ✓ | product/ezp-3p-48mg/ |
| Semaglutide (listed as EZP-1P) | 5mg | $35.00 | $7.00 | — | ✓ | product/ezp-1p-5mg/ |
| Semaglutide (listed as EZP-1P) | 10mg | $48.00 | $4.80 | — | ✓ | product/ezp-1p-10mg/ |
| Semax | 10mg | $44.00 | $4.40 | — | ✓ | product/semax-10mg/ |
| Sermorelin | 5mg | $44.00 | $8.80 | — | ✓ | product/sermorelin-5mg/ |
| SNAP-8 [backlog] | 10mg | $35.00 | $3.50 | — | ✓ | product/snap-8-10mg/ |
| Survodutide [backlog] | 10mg | $78.00 | $7.80 | — | ✓ | product/survodutide-10mg/ |
| TB-500 | 10mg | $48.00 | $4.80 | — | ✓ | product/tb-500-frag-17-23-10mg/ |
| Tesamorelin | 10mg | $68.00 | $6.80 | — | ✓ | product/tesamorelin-10mg/ |
| Thymosin Alpha-1 | 10mg | $58.00 | $5.80 | — | ✓ | product/thymosin-alpha-1-10mg/ |
| Tirzepatide (listed as EZP-2P) | 10mg | $53.00 | $5.30 | — | ✓ | product/ezp-2p-10mg/ |
| Tirzepatide (listed as EZP-2P) | 15mg | $71.00 | $4.73 | — | ✓ | product/ezp-2p-15mg/ |
| Tirzepatide (listed as EZP-2P) | 20mg | $88.00 | $4.40 | — | ✓ | product/ezp-2p-20mg/ |
| Tirzepatide (listed as EZP-2P) | 30mg | $98.00 | $3.27 | — | ✓ | product/ezp-2p-30mg/ |
| Tirzepatide (listed as EZP-2P) | 60mg | $152.00 | $2.53 | — | ✓ | product/ezp-2p-60mg/ |
| VIP | 10mg | $58.00 | $5.80 | — | ✓ | product/vip-10mg/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| Beauty (GHK-Cu/KPV) [backlog] | GHK-Cu/KPV | 70mg | $85.00 | 50/20 (published) | ✓ | product/beauty-blend-ghk-cu-kpv-blend-50mg-20mg/ |
| BPC-157/TB-500/Cartalax | BPC-157/TB-500/Cartalax | 30mg | $138.00 | 10/10/10 (published) | ✓ | product/deadpool-blend-10mg-copy/ |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $53.00 | 5/5 (published) | ✓ | product/cjc-no-dac-ipamorelin-blend-5mg-5mg/ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $88.00 | not published | ✓ | product/glow-blend-bpc-157-tb4-ghk-cu-10mg/ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $98.00 | not published | ✓ | product/klow-blend-80mg/ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 13mg | $88.00 | 10/3 (published) | ✓ | product/tesamorelin-ipamorelin-blend-10mg-3mg/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $88.00 | 10/10 (published) | ✓ | product/bpc-157-tb4-blend-10mg-10mg/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $53.00 | 5/5 (published) | ✓ | product/bpc-157-tb4-blend-5mg-5mg/ |

### Sprays: none
### Excluded: blend leak (Rule A): selank + semax — blend-registry candidate, manually excluded — CORRECT DATA held pending the FORMAT-COMPARABILITY decision — NOT a leak, do not 'fix' the data. Rule B correctly computes 50mg x 25 tabs = 1250mg ($0.10/mg). But this ORAL BULK pack would rank against INJECTABLE vials on /prices/5-amino-1mq and take Best-$/mg at ~1/50 the vial rate — oral tabs and an injectable vial are not the same product form. Held here until oral-vs-injectable comparability is decided (Rule D territory). ez's injectable 5-amino-1mq-50mg vial is UNAFFECTED (frag is the FULL count-pack slug; FP-scanned: 1 hit, the vial untouched). Re-include if oral forms get their own lane on /prices., manually excluded — blend leak: 'Reta/Cagri Blend - 12.5mg/2.5mg' (Retatrutide/Cagrilintide combo) resolves to Cagrilintide 12.5mg. Same blend ameano excludes as 'reta-cagri-blend'. ⚠️ check:prices CANNOT catch this: at $9.44/mg vs a $9.60 cagrilintide median it is 0.98x — a NEAR-MEDIAN leak, not an outlier. Caught only by hand-reading the rows. Frag FP-scanned: 1 hit, ez's real cagrilintide-5mg / cagrilintide-10mg vials untouched. Retire when Rule A (blend guard) lands., multi-vial kit / pack (by name), oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Glacier Aminos
- **slug:** glacier-aminos | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** glacieraminos.shop
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** Product sale 1/70.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $51.99 | $5.20 | — | ✓ | product/5-amino-1mq/ |
| 5-Amino-1MQ | 50mg | $99.99 | $2.00 | — | ✓ | product/5-amino-1mq/ |
| Adamax | 9mg | $119.99 | $13.33 | — | ✗ | product/adalank-adamax-1032-research-drops/ |
| Adamax | 10mg | $49.99 | $5.00 | $64.99 | ✓ | product/adamax/ |
| AOD-9604 | 10mg | $92.99 | $9.30 | — | ✓ | product/aod-9604-10/ |
| BPC-157 | 10mg | $45.99 | $4.60 | — | ✓ | product/bpc-157/ |
| BPC-157 | 20mg | $79.99 | $4.00 | — | ✓ | product/bpc-157/ |
| Cagrilintide | 5mg | $56.99 | $11.40 | — | ✓ | product/cagrilintide/ |
| Cagrilintide | 10mg | $101.99 | $10.20 | — | ✓ | product/cagrilintide/ |
| Cartalax [backlog] | 20mg | $67.99 | $3.40 | — | ✗ | product/cartalax-20/ |
| Cibinetide | 10mg | $54.99 | $5.50 | — | ✓ | product/ara-29010/ |
| CJC-1295 | 5mg | $51.99 | $10.40 | — | ✓ | product/cjc-1295-w-dac-5mg/ |
| CJC-1295 | 10mg | $67.99 | $6.80 | — | ✓ | product/cjc-1295-w-o-dac-10mg/ |
| DSIP | 10mg | $59.99 | $6.00 | — | ✓ | product/dsip-10/ |
| Epitalon | 10mg | $32.99 | $3.30 | — | ✓ | product/epi10/ |
| FOXO4-DRI [backlog] | 10mg | $134.99 | $13.50 | — | ✓ | product/foxo4-dri/ |
| GHK-Cu | 50mg | $41.99 | $0.84 | — | ✓ | product/ghk-cu/ |
| GHK-Cu | 100mg | $62.99 | $0.63 | — | ✓ | product/ghk-cu/ |
| GLA-1 SM [coded, UNVERIFIED] | 15mg | $71.99 | $4.80 | — | ✓ | product/gla1-s/ |
| GLA-2 TRZ [coded, UNVERIFIED] | 10mg | $62.99 | $6.30 | — | ✓ | product/gla2-trz/ |
| GLA-2 TRZ [coded, UNVERIFIED] | 20mg | $77.99 | $3.90 | — | ✗ | product/gla2-trz/ |
| GLA-2 TRZ [coded, UNVERIFIED] | 30mg | $97.99 | $3.27 | — | ✓ | product/gla2-trz/ |
| GLA-2 TRZ [coded, UNVERIFIED] | 45mg | $131.99 | $2.93 | — | ✓ | product/gla2-trz/ |
| GLA-2 TRZ [coded, UNVERIFIED] | 60mg | $164.99 | $2.75 | — | ✓ | product/gla2-trz/ |
| GLA-3 RT [coded, UNVERIFIED] | 10mg | $61.99 | $6.20 | — | ✓ | product/gla3-rt/ |
| GLA-3 RT [coded, UNVERIFIED] | 20mg | $110.99 | $5.55 | — | ✓ | product/gla3-rt/ |
| GLA-3 RT [coded, UNVERIFIED] | 30mg | $149.99 | $5.00 | — | ✓ | product/gla3-rt/ |
| GLA-3 RT [coded, UNVERIFIED] | 50mg | $159.99 | $3.20 | $213.99 | ✓ | product/gla3-rt/ |
| GLA-3 RT [coded, UNVERIFIED] | 60mg | $248.99 | $4.15 | — | ✓ | product/gla3-rt/ |
| Glutathione | 1500mg | $75.99 | $0.05 | — | ✓ | product/glutathione-1500mg/ |
| IGF-1 LR3 | 1mg | $64.99 | $64.99 | — | ✗ | product/igf/ |
| Ipamorelin | 10mg | $51.99 | $5.20 | — | ✓ | product/ipamorelin-10mg/ |
| Kisspeptin-10 | 10mg | $40.99 | $4.10 | — | ✓ | product/kisspeptin/ |
| KPV | 10mg | $51.99 | $5.20 | — | ✓ | product/kpv/ |
| Melanotan I | 10mg | $33.99 | $3.40 | — | ✓ | product/mt1/ |
| Melanotan II | 10mg | $33.99 | $3.40 | — | ✓ | product/mt-2/ |
| MOTS-C | 10mg | $45.99 | $4.60 | — | ✓ | product/mots-c/ |
| MOTS-C | 20mg | $79.99 | $4.00 | — | ✓ | product/mots-c/ |
| NAD+ | 500mg | $56.99 | $0.11 | — | ✓ | product/nad-500mg-buffered/ |
| Oxytocin | 10mg | $55.99 | $5.60 | — | ✓ | product/ox10/ |
| Pinealon | 10mg | $49.99 | $5.00 | — | ✓ | product/pn10/ |
| PT-141 | 10mg | $40.99 | $4.10 | — | ✓ | product/pt-141/ |
| Selank | 10mg | $40.99 | $4.10 | — | ✓ | product/selank-10/ |
| Semax | 10mg | $40.99 | $4.10 | — | ✓ | product/s3max-10/ |
| Sermorelin | 10mg | $62.99 | $6.30 | — | ✓ | product/sermorelin/ |
| Sermorelin | 20mg | $62.99 | $3.15 | — | ✓ | product/sermorelin/ |
| SLU-PP-332 [backlog] | 5mg | $49.99 | $10.00 | — | ✓ | product/slupp-5mg/ |
| TB-500 | 10mg | $58.99 | $5.90 | — | ✓ | product/tb500/ |
| Tesamorelin | 10mg | $67.99 | $6.80 | — | ✓ | product/tesamorelin/ |
| Tesamorelin | 20mg | $117.99 | $5.90 | — | ✓ | product/tesamorelin/ |
| Testagen [backlog] | 20mg | $67.99 | $3.40 | — | ✓ | product/testagen/ |
| Thymosin Alpha-1 | 10mg | $63.99 | $6.40 | — | ✓ | product/thymosin-alpha-1/ |
| VIP | 10mg | $65.99 | $6.60 | — | ✓ | product/vip-10/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $56.99 | not published | ✓ | product/cjc-1295-no-dac-ipa-blend/ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $94.99 | not published | ✓ | product/glow/ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $114.99 | not published | ✓ | product/klow-80/ |
| Reta/Cagri blend [backlog] |  | 24mg | $129.99 | not published | ✓ | product/gla-3-cagri-20mg-4mg/ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 16mg | $104.99 | 13/3 (published) | ✓ | product/tesa-ipa-peptide-blend-13mg-3mg/ |
| Tirz/Reta blend [backlog] |  | 20mg | $109.99 | not published | ✓ | product/gla2-5-t-r-20mg/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 60mg | $145.99 | not published | ✓ | product/bpc-tb-500-research-spray-60mg/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $59.99 | not published | ✓ | product/bpc-tb-500-wolverine/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $99.99 | not published | ✓ | product/bpc-tb-500-wolverine/ |

### Sprays / strips (separate format, no $/mg)
| Product | Size | Base | Stock |
| --- | --- | --- | --- |
| Adamax (spray) | 15mg | $149.99 | ✓ |
| NAD+ (spray) | 1500mg | $114.99 | ✓ |
| PT-141 (spray) | 30mg | $119.99 | ✓ |
| Selank (spray) | 40mg | $139.99 | ✓ |
| Semax (spray) | 50mg | $139.99 | ✓ |
| SS-31 (spray) | 10mg | $45.99 | ✓ |

### Excluded: blend leak (Rule A): dsip + selank — blend-registry candidate, blend leak (Rule A): selank + semax — blend-registry candidate, blend total unresolved (Rule 4): no total in name, clinical/other, manually excluded — blend leak: Semax/Selank blend -> Selank 20mg ($4.10/mg). Was the Selank-20mg MEDIAN., multi-vial kit / pack (by name), no parseable size (Rule 4), oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Ignite Peptides
- **slug:** ignite-peptides | **code:** PROF10 | **discount:** 10% off | **url:** ignitepeptides.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** Product sale 5/34; code stacks.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 5mg | $50.00 | $10.00 | — | ✓ | product/5-amino-1mq/ |
| BPC-157 | 10mg | $50.00 | $5.00 | — | ✓ | product/bpc-157-10mg/ |
| CJC-1295 | 10mg | $50.00 | $5.00 | — | ✓ | product/cjc-1295-without-dac/ |
| DSIP | 5mg | $30.00 | $6.00 | — | ✓ | product/dsip-5mg/ |
| GHK-Cu | 100mg | $60.00 | $0.60 | $75.00 | ✓ | product/ghk-cu-100mg/ |
| Glutathione | 750mg | $45.00 | $0.06 | — | ✓ | product/glutathione-750mg/ |
| Ipamorelin | 10mg | $50.00 | $5.00 | — | ✓ | product/ipamorelin-10mg/ |
| KPV | 10mg | $30.00 | $3.00 | $45.00 | ✗ | product/kpv-10mg/ |
| Melanotan II | 10mg | $40.00 | $4.00 | — | ✓ | product/mt2-10mg/ |
| MOTS-C | 10mg | $48.00 | $4.80 | — | ✓ | product/mots-c-10mg/ |
| NA-Selank [backlog] | 10mg | $50.00 | $5.00 | — | ✗ | product/na-selank-10mg/ |
| NAD+ | 500mg | $80.00 | $0.16 | — | ✓ | product/nad-500mg/ |
| PT-141 | 10mg | $45.00 | $4.50 | — | ✓ | product/pt-141-10mg/ |
| Selank | 10mg | $30.00 | $3.00 | — | ✓ | product/selank-10mg/ |
| Semax | 10mg | $40.00 | $4.00 | — | ✓ | product/smax-10mg/ |
| Sermorelin | 5mg | $50.00 | $10.00 | — | ✓ | product/sermorelin-5mg/ |
| Sermorelin | 10mg | $80.00 | $8.00 | — | ✓ | product/sermorelin-10mg/ |
| SNAP-8 [backlog] | 10mg | $30.00 | $3.00 | $45.00 | ✓ | product/snap-8-10mg/ |
| TB-500 | 5mg | $40.00 | $8.00 | — | ✗ | product/tb-500-thymosin-beta-4-5mg/ |
| TB-500 | 10mg | $65.00 | $6.50 | — | ✓ | product/tb-500/ |
| Tesamorelin | 10mg | $100.00 | $10.00 | — | ✓ | product/tesa-10mg/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $150.00 | 10/10/50 (published) | ✓ | product/glow70-peptide/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $90.00 | 5/5 (published) | ✓ | product/bpc-157-5mg-tb-500-5mg/ |

### Sprays: none
### Excluded: blend total unresolved (Rule 4): no total in name, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Integrative Peptides
- **slug:** integrative-peptides | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** integrativepeptides.com
- **traffic:** (not pulled) | **pulled:** July 30 2026
- **sale posture:** Product sale 1/73.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |

### Sprays: none
### Excluded: oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Oasis Labs
- **slug:** oasis-labs | **code:** PROFPEPTIDE | **discount:** 15% off | **url:** myoasislabs.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** Product sale 7/54; code stacks.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $60.00 | $6.00 | $69.00 | ✓ | product/5-amino-1mq-10-mg/ |
| AOD-9604 | 5mg | $47.00 | $9.40 | — | ✓ | product/aod-9604-5mg/ |
| BPC-157 | 5mg | $30.00 | $6.00 | — | ✓ | product/bpc-157/ |
| BPC-157 | 10mg | $52.50 | $5.25 | — | ✓ | product/bpc-157/ |
| Cagrilintide | 5mg | $81.00 | $16.20 | — | ✓ | product/cagrilintide-5mg/ |
| CJC-1295 | 5mg | $39.00 | $7.80 | — | ✓ | product/cjc-no-dac-5mg-mod-grf-1-29/ |
| CJC-1295 | 5mg | $69.00 | $13.80 | — | ✓ | product/cjc-1295-dac-5mg/ |
| DSIP | 5mg | $37.50 | $7.50 | — | ✓ | product/dsip-5mg/ |
| Epitalon | 50mg | $123.00 | $2.46 | — | ✓ | product/epithalon-50mg/ |
| FOXO4-DRI [backlog] | 10mg | $217.50 | $21.75 | — | ✓ | product/foxo4-dri-10mg/ |
| GHK-Cu | 50mg | $38.50 | $0.77 | $44.28 | ✓ | product/ghk-cu/ |
| GHK-Cu | 100mg | $59.00 | $0.59 | $67.85 | ✓ | product/ghk-cu/ |
| GHRP-2 | 10mg | $47.00 | $4.70 | — | ✓ | product/ghrp-2-10mg/ |
| GHRP-6 | 10mg | $47.00 | $4.70 | — | ✓ | product/ghrp-6-10mg/ |
| Glutathione | 1500mg | $75.00 | $0.05 | — | ✗ | product/glutathione-1500mg/ |
| Humanin [backlog] | 10mg | $121.50 | $12.15 | — | ✓ | product/humanin-10mg/ |
| IGF-1 LR3 | 1mg | $67.00 | $67.00 | — | ✓ | product/igf1-lr3-1mg/ |
| Ipamorelin | 5mg | $34.50 | $6.90 | — | ✓ | product/ipamorelin-5-mg/ |
| Kisspeptin-10 | 5mg | $52.50 | $10.50 | — | ✓ | product/kisspeptin-10-5mg/ |
| KPV | 10mg | $47.00 | $4.70 | — | ✓ | product/kpv-10mg/ |
| LL-37 | 10mg | $65.00 | $6.50 | — | ✓ | product/ll-37-10mg/ |
| Melanotan II | 10mg | $34.50 | $3.45 | — | ✓ | product/mt-2-10mg/ |
| MOTS-C | 10mg | $48.50 | $4.85 | — | ✓ | product/mots-c/ |
| MOTS-C | 40mg | $132.00 | $3.30 | — | ✓ | product/mots-c/ |
| NAD+ | 500mg | $65.00 | $0.13 | — | ✓ | product/nad/ |
| NAD+ | 1000mg | $99.00 | $0.10 | $113.85 | ✓ | product/nad/ |
| PT-141 | 10mg | $36.00 | $3.60 | — | ✓ | product/pt-141-10mg/ |
| Retatrutide (listed as GLP3(R)) | 5mg | $47.00 | $9.40 | $54.05 | ✓ | product/glp3r/ |
| Retatrutide (listed as GLP3(R)) | 10mg | $73.50 | $7.35 | $84.53 | ✓ | product/glp3r/ |
| Retatrutide (listed as GLP3(R)) | 15mg | $106.50 | $7.10 | $122.48 | ✓ | product/glp3r/ |
| Retatrutide (listed as GLP3(R)) | 20mg | $142.00 | $7.10 | $163.30 | ✓ | product/glp3r/ |
| Retatrutide (listed as GLP3(R)) | 30mg | $188.00 | $6.27 | $216.20 | ✓ | product/glp3r/ |
| Retatrutide (listed as GLP3(R)) | 40mg | $250.50 | $6.26 | $288.08 | ✓ | product/glp3r/ |
| Retatrutide (listed as GLP3(R)) | 60mg | $335.00 | $5.58 | $411.70 | ✓ | product/glp3r/ |
| Selank | 10mg | $48.00 | $4.80 | — | ✓ | product/selank-10mg/ |
| Semax | 10mg | $45.00 | $4.50 | — | ✓ | product/semax-10mg/ |
| Sermorelin | 5mg | $49.00 | $9.80 | — | ✓ | product/sermorelin-5mg/ |
| SLU-PP-332 [backlog] | 5mg | $74.50 | $14.90 | — | ✓ | product/slu-pp-332-5mg/ |
| SNAP-8 [backlog] | 10mg | $47.00 | $4.70 | — | ✓ | product/snap-8-10mg/ |
| TB-500 | 10mg | $57.00 | $5.70 | — | ✓ | product/tb-500-10mg/ |
| Tesamorelin | 10mg | $74.00 | $7.40 | — | ✓ | product/th9507-tesa-10mg/ |
| Thymosin Alpha-1 | 10mg | $65.00 | $6.50 | — | ✓ | product/thymosin-alpha-10mg/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $82.00 | not published | ✓ | product/cjc-ipa-blend-5-5mg/ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $104.50 | not published | ✓ | product/glow-70mg-ghk-cu-bpc-157-tb-500-50-10-10mg-blend/ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $126.00 | not published | ✓ | product/klow-80mg-ghk-cu-bpc-157-tb-500-kpv-50-10-10-10mg-blend/ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 11mg | $98.00 | not published | ✓ | product/th9507-tesa-ipa-10mg/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $56.00 | not published | ✓ | product/bpc-157-tb-500-blend/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $94.00 | not published | ✓ | product/bpc-157-tb-500-blend/ |

### Sprays: none
### Excluded: blend leak (Rule A): selank + semax — blend-registry candidate, oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Peptide Partners
- **slug:** peptide-partners | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** peptide.partners
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** Product sale 16/38; code stacks.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 20mg | $56.00 | $2.80 | — | ✓ | product/5-amino-1mq-10mg-vials/ |
| 5-Amino-1MQ | 50mg | $120.00 | $2.40 | — | ✓ | product/5-amino-1mq-10mg-vials/ |
| 5-Amino-1MQ | 100mg | $195.00 | $1.95 | — | ✓ | product/5-amino-1mq-10mg-vials/ |
| AOD-9604 | 20mg | $134.00 | $6.70 | — | ✓ | product/aod-9604-10mg-vials/ |
| AOD-9604 | 50mg | $300.00 | $6.00 | — | ✓ | product/aod-9604-10mg-vials/ |
| AOD-9604 | 100mg | $520.00 | $5.20 | — | ✓ | product/aod-9604-10mg-vials/ |
| BPC-157 | 20mg | $106.00 | $5.30 | $200.00 | ✓ | product/bpc-157-10mg-vials/ |
| BPC-157 | 50mg | $244.00 | $4.88 | $400.00 | ✓ | product/bpc-157-10mg-vials/ |
| BPC-157 | 100mg | $450.00 | $4.50 | $540.00 | ✓ | product/bpc-157-10mg-vials/ |
| BPC-157 | 200mg | $780.00 | $3.90 | $1,080.00 | ✓ | product/bpc-157-10mg-vials/ |
| Cagrilintide | 50mg | $335.00 | $6.70 | — | ✓ | product/cagrilintide/ |
| Cagrilintide | 100mg | $610.00 | $6.10 | — | ✓ | product/cagrilintide/ |
| Cagrilintide | 150mg | $835.00 | $5.57 | — | ✓ | product/cagrilintide/ |
| Cagrilintide | 200mg | $1,050.00 | $5.25 | — | ✓ | product/cagrilintide/ |
| CJC-1295 | 20mg | $117.00 | $5.85 | $175.00 | ✓ | product/cjc-1295-no-dac-20mg-200mg/ |
| CJC-1295 | 50mg | $268.00 | $5.36 | $440.00 | ✓ | product/cjc-1295-no-dac-20mg-200mg/ |
| CJC-1295 | 100mg | $498.00 | $4.98 | $880.00 | ✓ | product/cjc-1295-no-dac-20mg-200mg/ |
| CJC-1295 | 200mg | $888.00 | $4.44 | $1,760.00 | ✓ | product/cjc-1295-no-dac-20mg-200mg/ |
| DSIP | 10mg | $75.00 | $7.50 | $110.00 | ✓ | product/dsip-10mg-50mg/ |
| DSIP | 25mg | $170.00 | $6.80 | $275.00 | ✓ | product/dsip-10mg-50mg/ |
| DSIP | 50mg | $305.00 | $6.10 | $550.00 | ✓ | product/dsip-10mg-50mg/ |
| Epitalon | 80mg | $216.00 | $2.70 | — | ✓ | product/epithalon-40mg-vials/ |
| Epitalon | 200mg | $480.00 | $2.40 | — | ✓ | product/epithalon-40mg-vials/ |
| Epitalon | 400mg | $792.00 | $1.98 | — | ✓ | product/epithalon-40mg-vials/ |
| GHK-Cu | 200mg | $150.00 | $0.75 | $275.00 | ✓ | product/ghk-cu-200mg-2000mg/ |
| GHK-Cu | 500mg | $335.00 | $0.67 | $550.00 | ✓ | product/ghk-cu-200mg-2000mg/ |
| GHK-Cu | 1000mg | $550.00 | $0.55 | $1,320.00 | ✓ | product/ghk-cu-200mg-2000mg/ |
| GHK-Cu | 2000mg | $900.00 | $0.45 | $2,625.00 | ✓ | product/ghk-cu-200mg-2000mg/ |
| Humanin [backlog] | 20mg | $165.00 | $8.25 | $330.00 | ✗ | product/humanin-20mg-100mg/ |
| Humanin [backlog] | 50mg | $395.00 | $7.90 | $825.00 | ✗ | product/humanin-20mg-100mg/ |
| Humanin [backlog] | 100mg | $720.00 | $7.20 | $1,750.00 | ✗ | product/humanin-20mg-100mg/ |
| Ipamorelin | 20mg | $82.00 | $4.10 | $165.00 | ✓ | product/ipamorelin/ |
| Ipamorelin | 50mg | $187.00 | $3.74 | $420.00 | ✓ | product/ipamorelin/ |
| Ipamorelin | 100mg | $326.00 | $3.26 | $840.00 | ✓ | product/ipamorelin/ |
| Ipamorelin | 200mg | $577.00 | $2.88 | $1,670.00 | ✓ | product/ipamorelin/ |
| KPV | 20mg | $88.00 | $4.40 | — | ✓ | product/kpv-20mg-100mg/ |
| KPV | 50mg | $190.00 | $3.80 | — | ✓ | product/kpv-20mg-100mg/ |
| KPV | 100mg | $320.00 | $3.20 | — | ✓ | product/kpv-20mg-100mg/ |
| MOTS-C | 20mg | $79.00 | $3.95 | $240.00 | ✗ | product/mots-c/ |
| MOTS-C | 50mg | $188.00 | $3.76 | $605.00 | ✗ | product/mots-c/ |
| MOTS-C | 80mg | $252.00 | $3.15 | — | ✗ | product/mots-c-40mg-vials/ |
| MOTS-C | 100mg | $338.00 | $3.38 | $1,210.00 | ✗ | product/mots-c/ |
| MOTS-C | 200mg | $525.00 | $2.62 | — | ✗ | product/mots-c-40mg-vials/ |
| MOTS-C | 400mg | $800.00 | $2.00 | — | ✗ | product/mots-c-40mg-vials/ |
| NA-Selank [backlog] | 60mg | $234.00 | $3.90 | — | ✗ | product/na-selank-amidate/ |
| NA-Selank [backlog] | 150mg | $495.00 | $3.30 | — | ✗ | product/na-selank-amidate/ |
| NA-Selank [backlog] | 300mg | $840.00 | $2.80 | — | ✗ | product/na-selank-amidate/ |
| NA-Selank [backlog] | 600mg | $1,380.00 | $2.30 | — | ✗ | product/na-selank-amidate/ |
| NAD+ | 1500mg | $220.00 | $0.15 | $600.00 | ✗ | product/nad-unbuffered/ |
| NAD+ | 1800mg | $198.00 | $0.11 | $660.00 | ✓ | product/nad-buffered-900mg-vials/ |
| NAD+ | 3750mg | $450.00 | $0.12 | $1,700.00 | ✗ | product/nad-unbuffered/ |
| NAD+ | 4500mg | $427.00 | $0.09 | $1,750.00 | ✓ | product/nad-buffered-900mg-vials/ |
| NAD+ | 7500mg | $750.00 | $0.10 | $3,000.00 | ✗ | product/nad-unbuffered/ |
| NAD+ | 9000mg | $738.00 | $0.08 | $3,300.00 | ✓ | product/nad-buffered-900mg-vials/ |
| Pinealon | 40mg | $100.00 | $2.50 | — | ✗ | product/pinealon-20mg-vials/ |
| Pinealon | 100mg | $225.00 | $2.25 | — | ✗ | product/pinealon-20mg-vials/ |
| Pinealon | 200mg | $340.00 | $1.70 | — | ✗ | product/pinealon-20mg-vials/ |
| PT-141 | 20mg | $84.00 | $4.20 | — | ✓ | product/pt-141/ |
| PT-141 | 50mg | $192.00 | $3.84 | — | ✓ | product/pt-141/ |
| PT-141 | 100mg | $320.00 | $3.20 | — | ✓ | product/pt-141/ |
| Retatrutide | 24mg | $124.00 | $5.17 | — | ✗ | product/glp-3-retatrutide-12mg-vials/ |
| Retatrutide | 48mg | $230.00 | $4.79 | — | ✗ | product/glp-3-retatrutide/ |
| Retatrutide | 60mg | $290.00 | $4.83 | — | ✗ | product/glp-3-retatrutide-12mg-vials/ |
| Retatrutide | 120mg | $480.00 | $4.00 | — | ✗ | product/glp-3-retatrutide/ |
| Retatrutide | 240mg | $880.00 | $3.67 | — | ✗ | product/glp-3-retatrutide/ |
| Retatrutide | 480mg | $1,512.00 | $3.15 | — | ✗ | product/glp-3-retatrutide/ |
| Semaglutide | 50mg | $285.00 | $5.70 | — | ✓ | product/glp-1-semaglutide/ |
| Semaglutide | 100mg | $518.00 | $5.18 | — | ✓ | product/glp-1-semaglutide/ |
| Semaglutide | 150mg | $754.00 | $5.03 | — | ✓ | product/glp-1-semaglutide/ |
| Semaglutide | 200mg | $976.00 | $4.88 | — | ✓ | product/glp-1-semaglutide/ |
| Semax | 40mg | $60.00 | $1.50 | — | ✗ | product/semax-20mg-vials/ |
| Semax | 100mg | $135.00 | $1.35 | — | ✗ | product/semax-20mg-vials/ |
| Semax | 200mg | $230.00 | $1.15 | — | ✗ | product/semax-20mg-vials/ |
| Sermorelin | 20mg | $98.00 | $4.90 | — | ✓ | product/sermorelin/ |
| Sermorelin | 50mg | $212.00 | $4.24 | — | ✓ | product/sermorelin/ |
| Sermorelin | 100mg | $411.00 | $4.11 | — | ✓ | product/sermorelin/ |
| Sermorelin | 200mg | $797.00 | $3.98 | — | ✓ | product/sermorelin/ |
| SS-31 | 20mg | $110.00 | $5.50 | $145.00 | ✗ | product/ss-31/ |
| SS-31 | 50mg | $253.00 | $5.06 | $363.00 | ✗ | product/ss-31/ |
| SS-31 | 100mg | $320.00 | $3.20 | — | ✗ | product/ss-31-50mg-vials/ |
| SS-31 | 250mg | $687.00 | $2.75 | — | ✗ | product/ss-31-50mg-vials/ |
| SS-31 | 500mg | $1,125.00 | $2.25 | — | ✗ | product/ss-31-50mg-vials/ |
| TB-500 | 20mg | $130.00 | $6.50 | $230.00 | ✓ | product/tb-500-tb4-kit-20mg-100mg/ |
| TB-500 | 50mg | $290.00 | $5.80 | $450.00 | ✓ | product/tb-500-tb4-kit-20mg-100mg/ |
| TB-500 | 100mg | $490.00 | $4.90 | $630.00 | ✓ | product/tb-500-tb4-kit-20mg-100mg/ |
| Tesamorelin | 20mg | $122.00 | $6.10 | — | ✗ | product/tesamorelin/ |
| Tesamorelin | 50mg | $287.00 | $5.74 | — | ✗ | product/tesamorelin/ |
| Tesamorelin | 100mg | $514.00 | $5.14 | — | ✗ | product/tesamorelin/ |
| Tesamorelin | 200mg | $898.00 | $4.49 | — | ✗ | product/tesamorelin/ |
| Thymosin Alpha-1 | 20mg | $98.00 | $4.90 | — | ✓ | product/ta-1-10mg-vials/ |
| Thymosin Alpha-1 | 50mg | $210.00 | $4.20 | — | ✓ | product/ta-1-10mg-vials/ |
| Thymosin Alpha-1 | 100mg | $370.00 | $3.70 | — | ✓ | product/ta-1-10mg-vials/ |
| Tirzepatide | 80mg | $260.00 | $3.25 | — | ✓ | product/glp-2-tirzepatide/ |
| Tirzepatide | 200mg | $559.00 | $2.79 | — | ✓ | product/glp-2-tirzepatide/ |
| Tirzepatide | 400mg | $1,085.00 | $2.71 | — | ✓ | product/glp-2-tirzepatide/ |
| Tirzepatide | 800mg | $2,105.00 | $2.63 | — | ✓ | product/glp-2-tirzepatide/ |
| Tirzepatide | 1200mg | $3,090.00 | $2.58 | — | ✓ | product/glp-2-tirzepatide/ |
| VIP | 20mg | $150.00 | $7.50 | $230.00 | ✓ | product/vip-20mg-200mg/ |
| VIP | 50mg | $330.00 | $6.60 | $575.00 | ✓ | product/vip-20mg-200mg/ |
| VIP | 100mg | $560.00 | $5.60 | $1,200.00 | ✓ | product/vip-20mg-200mg/ |
| VIP | 200mg | $990.00 | $4.95 | $2,320.00 | ✓ | product/vip-20mg-200mg/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 20mg | $220.00 | not published | ✓ | product/combo-vial-cjc-1295-no-dac-ipamorelin/ |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 20mg | $484.00 | not published | ✓ | product/combo-vial-cjc-1295-no-dac-ipamorelin/ |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 20mg | $877.00 | not published | ✓ | product/combo-vial-cjc-1295-no-dac-ipamorelin/ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $182.00 | not published | ✓ | product/glow-blend-bpc-157-tb-500-ghk-cu/ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $390.00 | not published | ✓ | product/glow-blend-bpc-157-tb-500-ghk-cu/ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $770.00 | not published | ✓ | product/glow-blend-bpc-157-tb-500-ghk-cu/ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $240.00 | not published | ✓ | product/klow-blend-80mg-vials/ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $560.00 | not published | ✓ | product/klow-blend-80mg-vials/ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $975.00 | not published | ✓ | product/klow-blend-80mg-vials/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $224.00 | not published | ✓ | product/combo-vial-bpc-157-tb-500-kit/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $500.00 | not published | ✓ | product/combo-vial-bpc-157-tb-500-kit/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $880.00 | not published | ✓ | product/combo-vial-bpc-157-tb-500-kit/ |

### Sprays: none
### Excluded: multi-vial kit / pack (by name), out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Peptides.gg
- **slug:** peptides-gg | **code:** PROF15 | **discount:** 15% off | **url:** peptides.gg
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** No sale.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $40.00 | $4.00 | — | ✓ | 5-amino-1mq/ |
| 5-Amino-1MQ | 50mg | $169.00 | $3.38 | — | ✓ | 5-amino-1mq/ |
| Adamax | 10mg | $65.00 | $6.50 | — | ✓ | adamax/ |
| Adipotide | 5mg | $39.99 | $8.00 | — | ✓ | adipotide/ |
| Adipotide | 10mg | $75.00 | $7.50 | — | ✓ | adipotide/ |
| AOD-9604 | 2mg | $30.00 | $15.00 | — | ✓ | aod9604/ |
| AOD-9604 | 5mg | $45.00 | $9.00 | — | ✓ | aod9604/ |
| AOD-9604 | 10mg | $80.00 | $8.00 | — | ✓ | aod9604/ |
| BPC-157 | 10mg | $65.00 | $6.50 | — | ✓ | bpc-157/ |
| BPC-157 | 20mg | $125.00 | $6.25 | — | ✓ | bpc-157/ |
| Bronchogen [backlog] | 20mg | $55.00 | $2.75 | — | ✓ | bronchogen-bioregulator/ |
| Cagrilintide | 5mg | $100.00 | $20.00 | — | ✓ | cagrilintide/ |
| Cagrilintide | 10mg | $155.00 | $15.50 | — | ✓ | cagrilintide/ |
| Cardiogen | 20mg | $50.00 | $2.50 | — | ✓ | cardiogen/ |
| Cartalax [backlog] | 20mg | $55.00 | $2.75 | — | ✓ | cartalax-bioregulator/ |
| Chonluten [backlog] | 20mg | $50.00 | $2.50 | — | ✓ | chonluten/ |
| Cibinetide | 10mg | $50.00 | $5.00 | — | ✓ | ara-290/ |
| Cibinetide | 16mg | $70.00 | $4.38 | — | ✓ | ara-290/ |
| CJC-1295 | 5mg | $45.00 | $9.00 | — | ✓ | cjc-1295-w-dac/ |
| CJC-1295 | 5mg | $36.00 | $7.20 | — | ✓ | cjc-1295-no-dac/ |
| CJC-1295 | 10mg | $65.00 | $6.50 | — | ✓ | cjc-1295-no-dac/ |
| Cortagen | 20mg | $45.00 | $2.25 | — | ✓ | cortagen/ |
| DSIP | 5mg | $33.00 | $6.60 | — | ✓ | dsip/ |
| DSIP | 10mg | $55.00 | $5.50 | — | ✓ | dsip/ |
| DSIP | 15mg | $75.00 | $5.00 | — | ✓ | dsip/ |
| Epitalon | 10mg | $35.00 | $3.50 | — | ✓ | epithalon-epitalon/ |
| Epitalon | 20mg | $80.00 | $4.00 | — | ✓ | na-epitalon/ |
| Epitalon | 50mg | $120.00 | $2.40 | — | ✓ | epithalon-epitalon/ |
| FOXO4-DRI [backlog] | 10mg | $149.00 | $14.90 | — | ✓ | fox-04/ |
| GHK-Cu | 50mg | $53.00 | $1.06 | — | ✓ | ghk-cu/ |
| GHK-Cu | 100mg | $65.00 | $0.65 | — | ✓ | ghk-cu/ |
| GHRP-2 | 10mg | $36.99 | $3.70 | — | ✓ | ghrp-2/ |
| GHRP-6 | 5mg | $20.00 | $4.00 | — | ✓ | ghrp-6/ |
| GHRP-6 | 10mg | $37.00 | $3.70 | — | ✓ | ghrp-6/ |
| Glutathione | 600mg | $45.00 | $0.07 | — | ✓ | glutathione/ |
| Glutathione | 1500mg | $75.00 | $0.05 | — | ✓ | glutathione/ |
| Hexarelin | 5mg | $40.00 | $8.00 | — | ✓ | hexarelin/ |
| Humanin [backlog] | 10mg | $139.00 | $13.90 | — | ✓ | humanin/ |
| IGF-1 LR3 | 1mg | $65.00 | $65.00 | — | ✓ | igf-1-lr3/ |
| Ipamorelin | 10mg | $59.00 | $5.90 | — | ✓ | ipamorelin/ |
| Kisspeptin-10 | 5mg | $40.00 | $8.00 | — | ✓ | kisspeptin-10/ |
| Kisspeptin-10 | 10mg | $75.00 | $7.50 | — | ✓ | kisspeptin-10/ |
| KPV | 10mg | $50.00 | $5.00 | — | ✓ | kpv/ |
| KPV | 30mg | $120.00 | $4.00 | — | ✓ | kpv/ |
| Livagen [backlog] | 20mg | $60.00 | $3.00 | — | ✓ | livagen-bioregulator/ |
| LL-37 | 10mg | $150.00 | $15.00 | — | ✓ | ll-37/ |
| Mazdutide [backlog] | 6mg | $100.00 | $16.67 | — | ✓ | mazdutide/ |
| Melanotan I | 10mg | $40.00 | $4.00 | — | ✓ | melanotan-1/ |
| Melanotan II | 10mg | $36.00 | $3.60 | — | ✓ | melanotan-2/ |
| MOTS-C | 10mg | $49.00 | $4.90 | — | ✓ | mots-c/ |
| MOTS-C | 20mg | $96.00 | $4.80 | — | ✓ | mots-c/ |
| MOTS-C | 40mg | $190.00 | $4.75 | — | ✓ | mots-c/ |
| NA-Selank [backlog] | 10mg | $40.00 | $4.00 | — | ✓ | na-selank-amidate/ |
| NA-Selank [backlog] | 30mg | $65.00 | $2.17 | — | ✓ | na-selank-amidate/ |
| NAD+ | 500mg | $65.00 | $0.13 | — | ✓ | nad/ |
| NAD+ | 1000mg | $125.00 | $0.12 | — | ✓ | nad/ |
| Ovagen [backlog] | 20mg | $60.00 | $3.00 | — | ✓ | ovagen/ |
| Oxytocin | 10mg | $50.00 | $5.00 | — | ✓ | oxytocin/ |
| Pancragen [backlog] | 20mg | $60.00 | $3.00 | — | ✓ | pancragen/ |
| PEG-MGF [backlog] | 2mg | $40.00 | $20.00 | — | ✓ | peg-mgf/ |
| Pinealon | 10mg | $35.00 | $3.50 | — | ✓ | pinealon/ |
| Pinealon | 20mg | $60.00 | $3.00 | — | ✓ | pinealon/ |
| PNC-27 [backlog] | 30mg | $100.00 | $3.33 | — | ✓ | pnc-27/ |
| Prostamax [backlog] | 20mg | $60.00 | $3.00 | — | ✓ | prostamax-bioregulator/ |
| PT-141 | 10mg | $30.00 | $3.00 | — | ✓ | pt-141/ |
| Selank | 10mg | $33.00 | $3.30 | — | ✓ | selank/ |
| Semax | 30mg | $69.00 | $2.30 | — | ✓ | n-acetyl-semax-amidate/ |
| Sermorelin | 2mg | $25.00 | $12.50 | — | ✓ | sermorelin/ |
| Sermorelin | 5mg | $43.00 | $8.60 | — | ✓ | sermorelin/ |
| SNAP-8 [backlog] | 20mg | $37.99 | $1.90 | — | ✓ | snap-8/ |
| SS-31 | 10mg | $75.00 | $7.50 | — | ✓ | ss-31/ |
| SS-31 | 50mg | $200.00 | $4.00 | — | ✓ | ss-31/ |
| SS-31 | 100mg | $350.00 | $3.50 | — | ✓ | ss-31/ |
| Survodutide [backlog] | 10mg | $110.00 | $11.00 | — | ✓ | survodutide/ |
| TB-500 | 10mg | $65.00 | $6.50 | — | ✓ | tb-500thymosin-beta-4/ |
| Tesamorelin | 10mg | $68.00 | $6.80 | — | ✓ | tesamorelin/ |
| Tesamorelin | 20mg | $130.00 | $6.50 | — | ✓ | tesamorelin/ |
| Testagen [backlog] | 20mg | $60.00 | $3.00 | — | ✓ | testagen-bioregulator/ |
| Thymogen | 20mg | $60.00 | $3.00 | — | ✓ | thymogen/ |
| Thymosin Alpha-1 | 5mg | $55.00 | $11.00 | — | ✓ | thymosin-alpha-1/ |
| Thymosin Alpha-1 | 10mg | $95.00 | $9.50 | — | ✓ | thymosin-alpha-1/ |
| Thymulin [backlog] | 10mg | $40.00 | $4.00 | — | ✓ | thymulin/ |
| Vesilute [backlog] | 20mg | $60.00 | $3.00 | — | ✓ | vesilute/ |
| Vesugen [backlog] | 20mg | $60.00 | $3.00 | — | ✓ | vesugen-bioregulator/ |
| Vilon [backlog] | 20mg | $60.00 | $3.00 | — | ✓ | vilon-bioregulator/ |
| VIP | 5mg | $55.00 | $11.00 | — | ✓ | vip/ |
| VIP | 10mg | $99.00 | $9.90 | — | ✓ | vip/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $75.00 | not published | ✓ | ipamorelin-cjc-1295-blend/ |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 20mg | $150.00 | not published | ✓ | ipamorelin-cjc-1295-blend/ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $110.00 | not published | ✓ | glow-ghk-cu-bpc-157-tb-500-blend/ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $120.00 | not published | ✓ | ghk-cu-bpc-157-tb-500-kpv-klow-blend/ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 15mg | $90.00 | not published | ✓ | ipa-tesa-blend/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $80.00 | not published | ✓ | bpc-157-tb-500-blend/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $140.00 | not published | ✓ | bpc-157-tb-500-blend/ |

### Sprays: none
### Excluded: blend leak (Rule A): selank + semax — blend-registry candidate, liquid/concentration (per-ml, not a vial), oral/capsule, oral/tablet/sublingual, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: PureRawz
- **slug:** purerawz | **code:** PROF10 | **discount:** 10% off | **url:** purerawz.co
- **traffic:** (not pulled) | **pulled:** August 8 2026
- **sale posture:** Product sale 28/200; code stacks.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| Adamax | 5mg | $55.00 | $11.00 | — | ✓ | product/adamax/ |
| Adamax | 10mg | $67.77 | $6.78 | — | ✓ | product/adamax/ |
| Adipotide | 2mg | $50.62 | $25.31 | — | ✓ | product/adipotide/ |
| Adipotide | 5mg | $70.10 | $14.02 | — | ✓ | product/adipotide/ |
| Adipotide | 10mg | $94.03 | $9.40 | — | ✓ | product/adipotide/ |
| AOD-9604 | 5mg | $77.49 | $15.50 | — | ✓ | product/tyr-hgh-177-191/ |
| AOD-9604 | 10mg | $109.02 | $10.90 | — | ✓ | product/tyr-hgh-177-191/ |
| BPC-157 | 5mg | $70.35 | $14.07 | — | ✓ | product/bpc-157/ |
| BPC-157 | 10mg | $140.59 | $14.06 | — | ✓ | product/bpc-157/ |
| Bronchogen [backlog] | 20mg | $69.98 | $3.50 | — | ✓ | product/bronchogen/ |
| Cagrilintide | 5mg | $77.76 | $15.55 | — | ✓ | product/am833/ |
| Cagrilintide | 10mg | $155.54 | $15.55 | — | ✓ | product/am833/ |
| Cardiogen | 20mg | $61.78 | $3.09 | — | ✓ | product/cardiogen/ |
| Cartalax [backlog] | 20mg | $66.92 | $3.35 | — | ✗ | product/cartalax/ |
| Chonluten [backlog] | 20mg | $62.57 | $3.13 | — | ✓ | product/chonluten/ |
| Cibinetide | 16mg | $103.28 | $6.46 | — | ✓ | product/ara-290/ |
| CJC-1295 | 2mg | $23.77 | $11.88 | — | ✓ | product/cjc-1295/ |
| CJC-1295 | 5mg | $55.64 | $11.13 | — | ✗ | product/mod-grf-1-29/ |
| Cortagen | 20mg | $54.57 | $2.73 | — | ✓ | product/cortagen/ |
| Dihexa [backlog] | 10mg | $104.99 | $10.50 | — | ✓ | product/dihexa-10mg/ |
| Dihexa [backlog] | 500mg | $469.18 | $0.94 | — | ✓ | product/dihexa/ |
| Dihexa [backlog] | 1000mg | $938.35 | $0.94 | — | ✓ | product/dihexa/ |
| DSIP | 2mg | $49.90 | $24.95 | — | ✓ | product/emideltide/ |
| DSIP | 5mg | $56.79 | $11.36 | — | ✓ | product/emideltide/ |
| Epitalon | 10mg | $42.32 | $4.23 | — | ✓ | product/epithalon/ |
| Epitalon | 20mg | $81.96 | $4.10 | — | ✓ | product/epithalon/ |
| Epitalon | 50mg | $161.66 | $3.23 | — | ✓ | product/epithalon/ |
| Epitalon | 100mg | $171.57 | $1.72 | — | ✓ | product/n-acetyl-epithalon-amidate/ |
| Follistatin | 1mg | $132.12 | $132.12 | — | ✗ | product/follistatin/ |
| FOXO4-DRI [backlog] | 10mg | $271.69 | $27.17 | $327.39 | ✓ | product/foxo4-dri/ |
| GHRP-2 | 10mg | $42.50 | $4.25 | — | ✓ | product/ghrp-2-pralmorelin-10mg/ |
| GHRP-6 | 5mg | $37.28 | $7.46 | — | ✓ | product/skf-110679/ |
| GHRP-6 | 10mg | $48.20 | $4.82 | — | ✓ | product/skf-110679/ |
| Glutathione | 600mg | $76.30 | $0.13 | — | ✓ | product/reduced-glutathione/ |
| Glutathione | 1200mg | $132.55 | $0.11 | — | ✓ | product/reduced-glutathione/ |
| Glutathione | 1500mg | $166.40 | $0.11 | — | ✓ | product/reduced-glutathione/ |
| Hexarelin | 2mg | $34.98 | $17.49 | — | ✓ | product/ep-23905/ |
| Hexarelin | 5mg | $52.77 | $10.55 | — | ✓ | product/ep-23905/ |
| HGH Fragment 176-191 [backlog] | 2mg | $32.06 | $16.03 | — | ✓ | product/hgh-fragment-176-191/ |
| HGH Fragment 176-191 [backlog] | 5mg | $80.16 | $16.03 | — | ✓ | product/hgh-fragment-176-191/ |
| HGH Fragment 176-191 [backlog] | 10mg | $160.30 | $16.03 | — | ✓ | product/hgh-fragment-176-191/ |
| Humanin [backlog] | 5mg | $92.92 | $18.58 | — | ✓ | product/humanin/ |
| Humanin [backlog] | 10mg | $168.87 | $16.89 | — | ✓ | product/humanin/ |
| IGF-1 DES | 1mg | $109.93 | $109.93 | — | ✓ | product/igf-1-des/ |
| IGF-1 LR3 | 200mcg | $17.32 | $86.60 | — | ✓ | product/igf-1-lr3/ |
| IGF-1 LR3 | 1mg | $68.95 | $68.95 | — | ✓ | product/igf-1-lr3/ |
| Ipamorelin | 2mg | $29.23 | $14.62 | — | ✓ | product/ipamorelin/ |
| Ipamorelin | 5mg | $54.88 | $10.98 | — | ✓ | product/ipamorelin/ |
| Kisspeptin-10 | 5mg | $74.00 | $14.80 | — | ✓ | product/kp-10/ |
| Kisspeptin-10 | 10mg | $129.20 | $12.92 | — | ✓ | product/kp-10/ |
| KPV | 5mg | $36.80 | $7.36 | — | ✓ | product/kpv/ |
| KPV | 10mg | $90.45 | $9.04 | — | ✓ | product/kpv/ |
| KPV | 50mg | $275.20 | $5.50 | — | ✓ | product/kpv/ |
| Livagen [backlog] | 20mg | $70.48 | $3.52 | — | ✓ | product/livagen/ |
| LL-37 | 5mg | $104.37 | $20.87 | — | ✓ | product/ll-37-cap-18/ |
| Melanotan II | 10mg | $62.61 | $6.26 | — | ✓ | product/mt-ii/ |
| MGF | 2mg | $33.31 | $16.66 | — | ✓ | product/mgf/ |
| MGF | 5mg | $82.51 | $16.50 | — | ✓ | product/mgf/ |
| MGF | 10mg | $136.06 | $13.61 | — | ✓ | product/mgf/ |
| MOTS-C | 5mg | $50.59 | $10.12 | — | ✓ | product/mots-c/ |
| MOTS-C | 10mg | $101.18 | $10.12 | — | ✓ | product/mots-c/ |
| MOTS-C | 20mg | $202.36 | $10.12 | — | ✓ | product/mots-c/ |
| MOTS-C | 40mg | $404.72 | $10.12 | — | ✓ | product/mots-c/ |
| Ovagen [backlog] | 5mg | $21.98 | $4.40 | — | ✓ | product/ovagen/ |
| Ovagen [backlog] | 20mg | $66.41 | $3.32 | — | ✓ | product/ovagen/ |
| Oxytocin | 2mg | $36.14 | $18.07 | — | ✓ | product/ot-9-amino/ |
| Oxytocin | 5mg | $59.63 | $11.93 | — | ✓ | product/ot-9-amino/ |
| Pancragen [backlog] | 20mg | $61.78 | $3.09 | — | ✓ | product/pancragen/ |
| Pinealon | 5mg | $65.00 | $13.00 | — | ✓ | product/pinealon/ |
| Pinealon | 10mg | $90.00 | $9.00 | — | ✓ | product/pinealon/ |
| Pinealon | 20mg | $130.00 | $6.50 | — | ✓ | product/pinealon/ |
| PNC-27 [backlog] | 5mg | $163.40 | $32.68 | — | ✓ | product/pnc-27/ |
| PT-141 | 10mg | $57.12 | $5.71 | — | ✓ | product/a-melanocyte-stimulating-hormone/ |
| Selank | 5mg | $37.75 | $7.55 | — | ✓ | product/tp-7/ |
| NA-Selank [backlog] | 10mg | $32.42 | $3.24 | — | ✓ | product/n-acetyl-selank-amidate/ |
| Selank | 20mg | $110.98 | $5.55 | — | ✓ | product/tp-7/ |
| NA-Selank [backlog] | 30mg | $71.16 | $2.37 | — | ✓ | product/n-acetyl-selank-amidate/ |
| Selank | 40mg | $183.70 | $4.59 | — | ✓ | product/tp-7/ |
| NA-Selank [backlog] | 50mg | $157.87 | $3.16 | — | ✓ | product/n-acetyl-selank-amidate/ |
| Semax | 5mg | $34.50 | $6.90 | — | ✓ | product/acth-4-7-pro-gly-pro/ |
| Semax | 10mg | $68.80 | $6.88 | — | ✓ | product/acth-4-7-pro-gly-pro/ |
| Semax | 30mg | $100.94 | $3.36 | — | ✓ | product/acth-4-7-pro-gly-pro/ |
| Semax | 60mg | $205.15 | $3.42 | — | ✓ | product/n-acetyl-semax-amidate/ |
| Sermorelin | 2mg | $27.60 | $13.80 | — | ✓ | product/ghrh-1-29/ |
| Sermorelin | 10mg | $115.23 | $11.52 | — | ✓ | product/ghrh-1-29/ |
| SNAP-8 [backlog] | 10mg | $42.00 | $4.20 | — | ✓ | product/snap-8/ |
| SNAP-8 [backlog] | 100mg | $260.00 | $2.60 | — | ✓ | product/snap-8/ |
| SS-31 | 5mg | $45.62 | $9.12 | — | ✓ | product/ss31-elamipretide/ |
| SS-31 | 10mg | $91.24 | $9.12 | — | ✓ | product/ss31-elamipretide/ |
| Tesamorelin | 0.5mg | $6.95 | $13.90 | — | ✓ | product/th9507/ |
| Tesamorelin | 2mg | $32.14 | $16.07 | — | ✓ | product/th9507/ |
| Tesamorelin | 5mg | $69.44 | $13.89 | — | ✗ | product/th9507/ |
| Tesamorelin | 10mg | $138.85 | $13.88 | — | ✓ | product/th9507/ |
| Tesamorelin | 20mg | $320.50 | $16.02 | — | ✓ | product/th9507/ |
| Testagen [backlog] | 20mg | $61.26 | $3.06 | — | ✗ | product/testagen/ |
| Thymalin [backlog] | 5mg | $76.92 | $15.38 | — | ✓ | product/thymalin/ |
| Thymalin [backlog] | 20mg | $121.47 | $6.07 | — | ✓ | product/thymalin/ |
| Thymalin [backlog] | 50mg | $321.92 | $6.44 | — | ✓ | product/thymalin/ |
| Thymosin Alpha-1 | 5mg | $79.45 | $15.89 | — | ✓ | product/thymosin-alpha-1/ |
| Thymosin Alpha-1 | 10mg | $148.60 | $14.86 | — | ✓ | product/thymosin-alpha-1/ |
| Thymosin Alpha-1 | 20mg | $231.27 | $11.56 | — | ✗ | product/thymosin-alpha-1/ |
| Thymosin Alpha-1 | 50mg | $424.10 | $8.48 | — | ✓ | product/thymosin-alpha-1/ |
| Vesugen [backlog] | 20mg | $61.78 | $3.09 | — | ✓ | product/vesugen/ |
| Vilon [backlog] | 20mg | $64.87 | $3.24 | — | ✓ | product/vilon/ |
| VIP | 5mg | $42.48 | $8.50 | — | ✓ | product/vip/ |
| VIP | 10mg | $79.06 | $7.91 | — | ✓ | product/vip/ |
| VIP | 12mg | $95.35 | $7.95 | — | ✓ | product/vip/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 6mg | $82.10 | not published | ✓ |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 1.1mg | $292.44 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $170.00 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $215.00 | not published | ✓ |

### Sprays / strips (separate format, no $/mg)
| Product | Size | Base | Stock |
| --- | --- | --- | --- |
| Adipotide | 100mcg | $119.07 | ✓ |
| AOD-9604 | 100mcg | $138.87 | ✓ |
| BPC-157 | 100mcg | $140.59 | ✓ |
| BPC-157 | 100mcg | $178.39 | ✓ |
| BPC-157 (spray) | 385mcg | $573.88 | ✗ |
| BPC-157 (spray) | 192.5mcg | $323.67 | ✗ |
| CJC-1295 | 50mcg | $81.75 | ✓ |
| CJC-1295 | 20mcg | $47.60 | ✓ |
| DSIP | 1.05mg | $96.98 | ✓ |
| DSIP | 50mcg | $90.09 | ✓ |
| Epitalon | 1mg | $196.81 | ✓ |
| Epitalon | 1mg | $249.94 | ✓ |
| GHRP-6 | 100mcg | $64.25 | ✓ |
| Glutathione | 24mg | $109.84 | ✓ |
| Glutathione | 1200mg | $150.91 | ✓ |
| Glutathione | 600mg | $88.37 | ✓ |
| Hexarelin | 50mcg | $60.83 | ✓ |
| HGH Fragment 176-191 [backlog] | 50mcg | $80.16 | ✓ |
| IGF-1 DES | 10mcg | $138.42 | ✓ |
| IGF-1 LR3 | 10mcg | $68.95 | ✓ |
| Ipamorelin | 20mcg | $63.85 | ✓ |
| Ipamorelin | 50mcg | $111.58 | ✓ |
| Kisspeptin-10 | 100mcg | $135.15 | ✓ |
| KPV | 500mcg | $275.20 | ✓ |
| MGF | 20mcg | $84.37 | ✓ |
| MOTS-C | 200mcg | $257.22 | ✓ |
| Oxytocin | 100mcg | $147.02 | ✓ |
| PT-141 | 100mcg | $115.33 | ✓ |
| Selank | 400mcg | $183.70 | ✓ |
| Selank | 200mcg | $110.98 | ✓ |
| Selank | 300mcg | $144.03 | ✓ |
| Semax | 30mg | $102.57 | ✓ |
| Semax | 60mg | $205.15 | ✓ |
| Semax | 120mg | $410.30 | ✓ |
| Semax | 300mcg | $100.94 | ✓ |
| Sermorelin | 100mcg | $115.23 | ✓ |
| Tesamorelin | 200mcg | $320.50 | ✓ |
| Tesamorelin | 1mg | $1,392.51 | ✓ |

### Excluded: blend leak (Rule A): bpc-157 + ghk-cu — blend-registry candidate, blend leak (Rule A): glutathione + nad-plus — blend-registry candidate, blend leak (Rule A): oxytocin + pt-141 — blend-registry candidate, liquid/concentration (per-ml, not a vial), manually excluded — blend leak: BPC-157/TB-500/GHK-Cu blend -> BPC-157 30mg., manually excluded — blend leak: KPV/BPC-157/Arg blend -> BPC-157 15mg., manually excluded — blend leak: Sermorelin/GHRP-2 blend -> Sermorelin 5mg., manually excluded — blend leak: Sermorelin/GHRP-6 blend -> Sermorelin 10mg., manually excluded — blend leak: Sermorelin/Ipamorelin blend -> Sermorelin 20mg., manually excluded — blend leak: multi-component 'Alpha Blend' -> BPC-157 6mg ($27.41/mg)., multi-vial kit / pack (by name), no parseable size (Rule 4), oral/capsule, oral/tablet/sublingual, out-of-scope (SARMs/Rx/cosmetics), supply, topical/transdermal — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Royal Peptides
- **slug:** royal-peptides | **code:** PROF10 | **discount:** 10% off | **url:** royal-peptides.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** No sale.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 50mg | $80.00 | $1.60 | — | ✓ | shop/5-amino-1mq/ |
| AOD-9604 | 5mg | $65.00 | $13.00 | — | ✗ | shop/aod-5mg-kit/ |
| BPC-157 | 10mg | $55.00 | $5.50 | — | ✓ | shop/bpc-157-10mg-vial-kit/ |
| BPC-157 | 20mg | $80.00 | $4.00 | — | ✗ | shop/bpc-157-10mg-vial-kit/ |
| Cagrilintide | 10mg | $90.00 | $9.00 | — | ✓ | shop/cagrilintide-5mg-vial/ |
| Cibinetide | 10mg | $65.00 | $6.50 | — | ✓ | shop/ara-290-peptide-cibinetide/ |
| DSIP | 5mg | $45.00 | $9.00 | — | ✓ | shop/dsip-5mg-vial/ |
| Epitalon | 10mg | $55.00 | $5.50 | — | ✓ | shop/epitalon-kit/ |
| GHK-Cu | 50mg | $45.00 | $0.90 | — | ✓ | shop/ghk-cu-peptide/ |
| GHK-Cu | 100mg | $70.00 | $0.70 | — | ✓ | shop/ghk-cu-peptide/ |
| Glutathione | 1500mg | $65.00 | $0.04 | — | ✓ | shop/buy-glutathione/ |
| IGF-1 LR3 | 1mg | $78.00 | $78.00 | — | ✓ | shop/igf-1-lr3-1mg-kit/ |
| Ipamorelin | 5mg | $45.00 | $9.00 | — | ✗ | shop/ipamorelin-10mg-kit10-vials/ |
| Ipamorelin | 10mg | $65.00 | $6.50 | — | ✓ | shop/ipamorelin-10mg-kit10-vials/ |
| KPV | 10mg | $55.00 | $5.50 | — | ✓ | shop/kpv-10mg-vial/ |
| MOTS-C | 10mg | $60.00 | $6.00 | — | ✓ | shop/mots-c-peptide/ |
| MOTS-C | 40mg | $130.00 | $3.25 | — | ✓ | shop/mots-c-peptide/ |
| NAD+ | 100mg | $35.00 | $0.35 | — | ✓ | shop/nad-500mg-vial-kit-buffered/ |
| NAD+ | 500mg | $60.00 | $0.12 | — | ✓ | shop/nad-500mg-vial-kit-buffered/ |
| NAD+ | 1000mg | $85.00 | $0.09 | — | ✓ | shop/nad-500mg-vial-kit-buffered/ |
| Oxytocin | 10mg | $70.00 | $7.00 | — | ✓ | shop/oxyt-10mg/ |
| PT-141 | 10mg | $50.00 | $5.00 | — | ✓ | shop/pt-141-10mg-vial/ |
| Retatrutide | 5mg | $55.00 | $11.00 | — | ✗ | shop/retatrutide-vial/ |
| Retatrutide | 10mg | $80.00 | $8.00 | — | ✓ | shop/retatrutide-vial/ |
| Retatrutide | 15mg | $105.00 | $7.00 | — | ✓ | shop/retatrutide-vial/ |
| Retatrutide | 20mg | $135.00 | $6.75 | — | ✓ | shop/retatrutide-vial/ |
| Retatrutide | 30mg | $185.00 | $6.17 | — | ✓ | shop/retatrutide-vial/ |
| Retatrutide | 50mg | $285.00 | $5.70 | — | ✓ | shop/retatrutide-vial/ |
| Retatrutide | 60mg | $330.00 | $5.50 | — | ✓ | shop/retatrutide-vial/ |
| Selank | 10mg | $65.00 | $6.50 | — | ✓ | shop/selank-10mg-vial/ |
| Semaglutide | 5mg | $45.00 | $9.00 | — | ✓ | shop/semaglutide/ |
| Semaglutide | 10mg | $75.00 | $7.50 | — | ✓ | shop/semaglutide/ |
| Semaglutide | 15mg | $110.00 | $7.33 | — | ✗ | shop/semaglutide/ |
| Semaglutide | 20mg | $155.00 | $7.75 | — | ✓ | shop/semaglutide/ |
| Semax | 10mg | $65.00 | $6.50 | — | ✓ | shop/semax-10mg/ |
| Sermorelin | 10mg | $65.00 | $6.50 | — | ✓ | shop/sermorelin-10mg-kit/ |
| SS-31 | 10mg | $65.00 | $6.50 | — | ✓ | shop/31pv/ |
| SS-31 | 50mg | $120.00 | $2.40 | — | ✓ | shop/31pv/ |
| TB-500 | 10mg | $70.00 | $7.00 | — | ✓ | shop/tb-500-10mg-kit/ |
| Tesamorelin | 10mg | $75.00 | $7.50 | — | ✓ | shop/tesamorelin-10mg/ |
| Tesamorelin | 20mg | $120.00 | $6.00 | — | ✓ | shop/tesamorelin-10mg/ |
| Thymosin Alpha-1 | 5mg | $55.00 | $11.00 | — | ✓ | shop/thymosin-alpha-1-ta-1-10mg-kit/ |
| Tirzepatide | 5mg | $36.00 | $7.20 | — | ✓ | shop/tirzepatide-vials/ |
| Tirzepatide | 10mg | $50.00 | $5.00 | — | ✓ | shop/tirzepatide-vials/ |
| Tirzepatide | 15mg | $75.00 | $5.00 | — | ✓ | shop/tirzepatide-vials/ |
| Tirzepatide | 20mg | $110.00 | $5.50 | — | ✓ | shop/tirzepatide-vials/ |
| Tirzepatide | 30mg | $150.00 | $5.00 | — | ✓ | shop/tirzepatide-vials/ |
| Tirzepatide | 40mg | $190.00 | $4.75 | — | ✓ | shop/tirzepatide-vials/ |
| Tirzepatide | 60mg | $255.00 | $4.25 | — | ✓ | shop/tirzepatide-vials/ |
| Tirzepatide | 100mg | $380.00 | $3.80 | — | ✗ | shop/tirzepatide-vials/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 20mg | $95.00 | not published | ✓ | shop/cjcno-dac-ipamorelin-10mg-kit/ |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $70.00 | not published | ✓ | shop/cjcno-dac-ipamorelin-10mg-kit/ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $70.00 | not published | ✓ | shop/glow-blend-vial-kit/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $115.00 | not published | ✓ | shop/wolverine-bpc-157-tb-500-blend/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $75.00 | not published | ✓ | shop/wolverine-bpc-157-tb-500-blend/ |

### Sprays: none
### Excluded: blend total unresolved (Rule 4): no total in name, manually excluded — 10-vial kit whose NAME carries no kit marker (only the slug does), so is_kit_name misses it — $360 = $72/mg vs a ~$11/mg median., manually excluded — 10-vial kit whose NAME carries no kit marker — $430 = $86/mg vs a ~$10/mg median., manually excluded — blend leak: Semax/Selank blend mis-classified as Selank 20mg ($4.50/mg). check:prices passed it (near the corrupted Selank-20mg median)., manually excluded — oral/count — UNRESOLVABLE: variable product 'SLU-PP-332 50/100 count bottles' (5 variants). Count is stated as '50/100' with no reliable per-variant mapping, so the package total can't be computed from public data. Stays excluded (absent beats a guessed total). Re-add per-variant once the count is confirmed., manually excluded — pricing error: this single 10mg is listed at $465, ABOVE the same vendor's 10-vial kit ($330) — internally impossible, so removed as an error, not a premium., multi-vial kit / pack (by name), multi-vial kit landing page (by slug), oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Swiss Chems
- **slug:** swiss-chems | **code:** PROF10 | **discount:** 10% off | **url:** swisschems.is
- **traffic:** (not pulled) | **pulled:** August 3 2026
- **sale posture:** Product sale 46/145; code stacks.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| KPV | 15mg | $139.95 | $9.33 | — | ✓ | product/kpv-lysine-proline-valine-250mcg-60caps/ |
| Orforglipron [backlog] | 540mg | $198.95 | $0.37 | — | ✓ | product/orforglipron-6mg-90caps/ |
| BPC-157 | 5mg | $39.99 | $8.00 | $49.99 | ✓ | product/bpc157-with-arginine-salt/ |
| BPC-157 | 10mg | $59.95 | $6.00 | — | ✓ | product/bpc157-with-arginine-salt/ |
| Bronchogen [backlog] | 20mg | $64.95 | $3.25 | $70.00 | ✓ | product/bronchogen-20mg/ |
| Cardiogen | 20mg | $63.95 | $3.20 | — | ✓ | product/cardiogen-20mg/ |
| Cartalax [backlog] | 20mg | $61.95 | $3.10 | $70.00 | ✓ | product/cartalax-20mg/ |
| Chonluten [backlog] | 20mg | $58.99 | $2.95 | — | ✓ | product/chonluten-20mg/ |
| Cibinetide | 16mg | $85.60 | $5.35 | — | ✗ | product/cibinitide-ara-290-16mg/ |
| CJC-1295 | 2mg | $42.95 | $21.48 | — | ✓ | product/cjc-1295-without-dac-2-mg/ |
| Cortagen | 20mg | $46.95 | $2.35 | $65.00 | ✓ | product/cortagen-20mg/ |
| Dihexa [backlog] | 500mg | $97.99 | $0.20 | — | ✓ | product/dihexa-powder-500mg/ |
| Epitalon | 10mg | $23.16 | $2.32 | $28.95 | ✓ | product/epitalon-10-mg/ |
| Follistatin | 1mg | $139.99 | $139.99 | — | ✓ | product/follistatin-344-1mg/ |
| GHK-Cu | 10mg | $24.70 | $2.47 | — | ✓ | product/ghk-cu-copper-peptide/ |
| GHK-Cu | 50mg | $68.95 | $1.38 | — | ✓ | product/ghk-cu-copper-peptide/ |
| GHRP-2 | 5mg | $19.95 | $3.99 | — | ✓ | product/ghrp-2-5-mg/ |
| GHRP-6 | 5mg | $19.95 | $3.99 | — | ✓ | product/ghrp-6-5-mg/ |
| Glutathione | 600mg | $29.95 | $0.05 | — | ✓ | product/glutathione-600mg/ |
| Hexarelin | 2mg | $21.56 | $10.78 | — | ✓ | product/hexarelin-examorelin-2mg/ |
| HGH Fragment 176-191 [backlog] | 5mg | $38.36 | $7.67 | $47.95 | ✓ | product/hgh-fragment-176-191-5-mg/ |
| IGF-1 DES | 1mg | $55.95 | $55.95 | — | ✗ | product/igf-1-des-1-mg/ |
| IGF-1 LR3 | 1mg | $59.96 | $59.96 | $104.98 | ✓ | product/igf-1-lr3-1mg/ |
| Ipamorelin | 2mg | $17.56 | $8.78 | $21.95 | ✓ | product/ipamorelin-2-mg/ |
| Kisspeptin-10 | 10mg | $59.99 | $6.00 | — | ✓ | product/kisspeptin-10-10mg/ |
| Livagen [backlog] | 20mg | $62.95 | $3.15 | — | ✓ | product/livagen-20mg/ |
| LL-37 | 5mg | $71.99 | $14.40 | — | ✓ | product/ll-37-cap-18-5-mg/ |
| Melanotan II | 10mg | $27.96 | $2.80 | $34.95 | ✓ | product/melanotan-ii-10mg/ |
| MGF | 2mg | $29.99 | $14.99 | $37.94 | ✓ | product/mgf-without-peg-2-mg/ |
| MOTS-C | 10mg | $69.95 | $7.00 | — | ✓ | product/mots-c-10mg/ |
| NAD+ | 100mg | $47.95 | $0.48 | — | ✓ | product/nad-nicotinamide-adenine-dinucleotide-100-mg/ |
| Ovagen [backlog] | 20mg | $57.50 | $2.88 | $65.00 | ✓ | product/ovagen-20mg/ |
| Oxytocin | 2mg | $21.95 | $10.97 | — | ✓ | product/oxytocin/ |
| Oxytocin | 5mg | $31.95 | $6.39 | — | ✓ | product/oxytocin/ |
| Pancragen [backlog] | 20mg | $59.95 | $3.00 | $65.00 | ✓ | product/pancragen-20mg/ |
| Pinealon | 20mg | $57.95 | $2.90 | — | ✓ | product/pinealon-20mg/ |
| Prostamax [backlog] | 20mg | $59.95 | $3.00 | — | ✓ | product/prostamax-20mg/ |
| PT-141 | 10mg | $49.99 | $5.00 | — | ✓ | product/pt-141-bremenalotide-10mg/ |
| Selank | 5mg | $25.95 | $5.19 | — | ✓ | product/selank-5mg/ |
| Semax | 30mg | $73.95 | $2.47 | — | ✓ | product/semax-30mg/ |
| Sermorelin | 2mg | $25.95 | $12.97 | — | ✓ | product/sermorelin-2mg/ |
| SS-31 | 5mg | $41.95 | $8.39 | — | ✓ | product/ss31-elamipretide/ |
| SS-31 | 10mg | $74.95 | $7.50 | — | ✓ | product/ss31-elamipretide/ |
| TB-500 | 2mg | $23.96 | $11.98 | $29.95 | ✓ | product/tb-500-thymosin-beta-4/ |
| TB-500 | 5mg | $35.16 | $7.03 | $38.95 | ✓ | product/tb-500-thymosin-beta-4/ |
| TB-500 | 10mg | $42.36 | $4.24 | $63.98 | ✓ | product/tb-500-thymosin-beta-4/ |
| Tesamorelin | 2mg | $27.95 | $13.97 | — | ✓ | product/tesamorelin-2mg/ |
| Testagen [backlog] | 20mg | $59.95 | $3.00 | — | ✓ | product/testagen-20mg/ |
| Thymogen | 20mg | $67.95 | $3.40 | $80.95 | ✓ | product/thymogen-20mg/ |
| Thymosin Alpha-1 | 5mg | $63.99 | $12.80 | — | ✓ | product/thymosin-alpha-1/ |
| Vilon [backlog] | 20mg | $63.00 | $3.15 | $74.00 | ✗ | product/vilon-20mg/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 5mg | $119.95 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $134.95 | not published | ✓ |

### Sprays: none
### Excluded: multi-vial kit / pack (by name), no parseable size (Rule 4), oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply, wholesale-only SKU (not a retail price) — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---
## VENDOR: Synthesis Peptides
- **slug:** synthesis-peptides | **code:** PROFPEPTIDE10 | **discount:** 10% off | **url:** synthesispeptides.io
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** No product-level sale (single price per variant).

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $36.99 | $3.70 | — | ✓ | products/5-amino-1mq |
| 5-Amino-1MQ | 50mg | $74.99 | $1.50 | — | ✓ | products/5-amino-1mq |
| AOD-9604 | 5mg | $59.99 | $12.00 | — | ✓ | products/aod-9604 |
| BPC-157 | 10mg | $49.99 | $5.00 | — | ✓ | products/bpc-157 |
| Cagrilintide | 5mg | $62.99 | $12.60 | — | ✗ | products/cagrilintide-amylin-analogue |
| DSIP | 5mg | $36.99 | $7.40 | — | ✓ | products/dsip |
| DSIP | 10mg | $47.99 | $4.80 | — | ✓ | products/dsip |
| Epitalon | 10mg | $43.99 | $4.40 | — | ✓ | products/epithalon |
| Epitalon | 50mg | $139.99 | $2.80 | — | ✓ | products/epithalon |
| GHK-Cu | 50mg | $36.99 | $0.74 | — | ✓ | products/ghk-cu |
| Glutathione | 1500mg | $73.99 | $0.05 | — | ✓ | products/glutathione |
| IGF-1 LR3 | 1mg | $78.99 | $78.99 | — | ✓ | products/igf-1-lr3 |
| Ipamorelin | 10mg | $64.99 | $6.50 | — | ✓ | products/ipamorelin |
| KPV | 10mg | $57.99 | $5.80 | — | ✓ | products/kpv |
| Melanotan II | 10mg | $34.99 | $3.50 | — | ✓ | products/mt2-melanotan-2 |
| MOTS-C | 10mg | $49.99 | $5.00 | — | ✓ | products/mots-c |
| MOTS-C | 40mg | $149.99 | $3.75 | — | ✓ | products/mots-c |
| NAD+ | 500mg | $63.99 | $0.13 | — | ✓ | products/nad |
| PT-141 | 10mg | $52.99 | $5.30 | — | ✓ | products/pt-141 |
| Retatrutide (listed as GLP-3R) | 10mg | $89.99 | $9.00 | — | ✓ | products/glp-3r |
| Retatrutide (listed as GLP-3R) | 15mg | $119.99 | $8.00 | — | ✗ | products/glp-3r |
| Retatrutide (listed as GLP-3R) | 20mg | $139.99 | $7.00 | — | ✓ | products/glp-3r |
| Retatrutide (listed as GLP-3R) | 30mg | $189.99 | $6.33 | — | ✗ | products/glp-3r |
| Retatrutide (listed as GLP-3R) | 40mg | $229.99 | $5.75 | — | ✓ | products/glp-3r |
| Selank | 10mg | $41.99 | $4.20 | — | ✓ | products/selank |
| Selank | 30mg | $74.99 | $2.50 | — | ✓ | products/selank |
| Semaglutide (listed as GLP-1S) | 10mg | $72.99 | $7.30 | — | ✓ | products/glp-1s |
| Semax | 10mg | $36.99 | $3.70 | — | ✓ | products/semax |
| Semax | 30mg | $74.99 | $2.50 | — | ✗ | products/semax |
| Sermorelin | 10mg | $74.99 | $7.50 | — | ✓ | products/sermorelin-10mg |
| TB-500 | 10mg | $74.99 | $7.50 | — | ✓ | products/tb-500 |
| Tesamorelin | 10mg | $79.99 | $8.00 | — | ✓ | products/tesamorelin |
| Thymosin Alpha-1 | 10mg | $74.99 | $7.50 | — | ✓ | products/thymosin-alpha-1 |
| Tirzepatide (listed as GLP-2T) | 10mg | $59.99 | $6.00 | — | ✓ | products/glp-2t |
| Tirzepatide (listed as GLP-2T) | 15mg | $79.99 | $5.33 | — | ✓ | products/glp-2t |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $63.99 | not published | ✓ | products/cjc-1295-no-dac-ipamorelin |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $119.99 | not published | ✓ | products/glow-70-blend |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $129.99 | not published | ✓ | products/klow-80 |
| NAD+/MOTS-C/5-Amino-1MQ | NAD+/MOTS-C/5-Amino-1MQ | 120mg | $119.99 | not published | ✓ | products/5-amino-1mq-mots-c-nad |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $64.99 | not published | ✓ | products/bpc-157-tb-500 |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $99.99 | not published | ✓ | products/bpc-157-tb-500 |

### Sprays: none
### Excluded: no parseable size (Rule 4), oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Vital Core Research
- **slug:** vital-core-research | **code:** PROF20 | **discount:** 20% off | **url:** vitalcoreresearch.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** No sale.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 5mg | $40.99 | $8.20 | — | ✓ | product/5-amino-1mq/ |
| 5-Amino-1MQ | 10mg | $70.99 | $7.10 | — | ✓ | product/5-amino-1mq/ |
| AOD-9604 | 5mg | $44.99 | $9.00 | — | ✓ | product/aod-9604/ |
| BPC-157 | 2mg | $29.99 | $14.99 | — | ✓ | product/bpc-157/ |
| BPC-157 | 5mg | $34.99 | $7.00 | — | ✓ | product/bpc-157/ |
| BPC-157 | 10mg | $63.99 | $6.40 | — | ✓ | product/bpc-157/ |
| Cagrilintide | 5mg | $79.99 | $16.00 | — | ✓ | product/cagrilintide/ |
| Cagrilintide | 10mg | $159.99 | $16.00 | — | ✓ | product/cagrilintide/ |
| CJC-1295 | 2mg | $40.99 | $20.50 | — | ✓ | product/cjc-1295-with-dac/ |
| CJC-1295 | 2mg | $40.99 | $20.50 | — | ✓ | product/cjc-1295-no-dac/ |
| CJC-1295 | 5mg | $59.99 | $12.00 | — | ✓ | product/cjc-1295-with-dac/ |
| CJC-1295 | 5mg | $49.99 | $10.00 | — | ✓ | product/cjc-1295-no-dac/ |
| CJC-1295 | 10mg | $89.99 | $9.00 | — | ✓ | product/cjc-1295-no-dac/ |
| DSIP | 5mg | $29.99 | $6.00 | — | ✓ | product/dsip/ |
| Epitalon | 10mg | $34.99 | $3.50 | — | ✓ | product/epithalon/ |
| Epitalon | 50mg | $99.99 | $2.00 | — | ✓ | product/epithalon/ |
| GHK-Cu | 50mg | $39.99 | $0.80 | — | ✓ | product/ghk-cu/ |
| GHK-Cu | 100mg | $69.99 | $0.70 | — | ✓ | product/ghk-cu/ |
| GHRP-2 | 5mg | $29.99 | $6.00 | — | ✓ | product/ghrp-2/ |
| GHRP-2 | 10mg | $58.99 | $5.90 | — | ✓ | product/ghrp-2/ |
| GHRP-6 | 5mg | $29.99 | $6.00 | — | ✓ | product/ghrp-6/ |
| GHRP-6 | 10mg | $58.99 | $5.90 | — | ✓ | product/ghrp-6/ |
| Hexarelin | 5mg | $44.99 | $9.00 | — | ✓ | product/hexarelin/ |
| HGH Fragment 176-191 [backlog] | 6mg | $49.99 | $8.33 | — | ✓ | product/hgh-frag-176-191/ |
| IGF-1 LR3 | 1mg | $99.99 | $99.99 | — | ✓ | product/igf-1-lr3/ |
| Ipamorelin | 5mg | $34.99 | $7.00 | — | ✓ | product/ipamorelin/ |
| Ipamorelin | 10mg | $68.99 | $6.90 | — | ✓ | product/ipamorelin/ |
| Mazdutide [backlog] | 10mg | $109.99 | $11.00 | — | ✓ | product/mazdutide/ |
| MK-677 | 12.5mg | $69.99 | $5.60 | — | ✓ | product/mk-677/ |
| NAD+ | 100mg | $39.99 | $0.40 | — | ✓ | product/nad/ |
| NAD+ | 500mg | $100.99 | $0.20 | — | ✓ | product/nad/ |
| NAD+ | 1000mg | $150.99 | $0.15 | — | ✓ | product/nad/ |
| Selank | 10mg | $49.99 | $5.00 | — | ✓ | product/selank/ |
| Semax | 10mg | $49.99 | $5.00 | — | ✓ | product/semax/ |
| Sermorelin | 5mg | $44.99 | $9.00 | — | ✓ | product/sermorelin/ |
| SNAP-8 [backlog] | 10mg | $49.99 | $5.00 | — | ✓ | product/snap-8/ |
| TB-500 | 2mg | $29.99 | $14.99 | — | ✓ | product/tb-500/ |
| TB-500 | 5mg | $39.99 | $8.00 | — | ✓ | product/tb-500/ |
| TB-500 | 10mg | $74.99 | $7.50 | — | ✓ | product/tb-500/ |
| Tesamorelin | 5mg | $41.99 | $8.40 | — | ✓ | product/tesamorelin/ |
| Tesamorelin | 10mg | $54.95 | $5.50 | — | ✓ | product/tesamorelin/ |
| Thymosin Alpha-1 | 5mg | $37.50 | $7.50 | — | ✓ | product/thymosin-alpha-1/ |
| Thymosin Alpha-1 | 10mg | $74.99 | $7.50 | — | ✓ | product/thymosin-alpha-1/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 5mg | $74.99 | not published | ✓ | product/cjc-1295-no-dac-ipamorelin-blend/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $74.99 | not published | ✓ | product/bpc-157-tb-500-blend/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $140.99 | not published | ✓ | product/bpc-157-tb-500-blend/ |

### Sprays: none
### Excluded: blend total unresolved (Rule 4): no total in name, no parseable size (Rule 4), oral/capsule, oral/tablet/sublingual, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Purity Peptides
- **slug:** purity-peptides | **code:** PROF15 | **discount:** 15% off | **url:** puritypeptides.is
- **traffic:** (not pulled) | **pulled:** August 11 2026
- **sale posture:** No sale (single price per product).

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 50mg | $119.99 | $2.40 | — | ✓ | product/5-amino-1mq-50mg |
| AOD-9604 | 5mg | $69.99 | $14.00 | — | ✓ | product/aod-9604-5mg |
| BPC-157 | 5mg | $59.99 | $12.00 | — | ✓ | product/bpc-157-5mg |
| BPC-157 | 10mg | $94.99 | $9.50 | — | ✓ | product/bpc-157-10mg |
| BPC-157 | 20mg | $124.99 | $6.25 | — | ✓ | product/bpc-157-20mg |
| CJC-1295 | 2mg | $49.99 | $25.00 | — | ✓ | product/cjc-with-dac-2mg |
| CJC-1295 | 5mg | $69.99 | $14.00 | — | ✓ | product/cjc-1295-5mg |
| CJC-1295 | 10mg | $99.99 | $10.00 | — | ✓ | product/cjc-1295-no-dac-10mg |
| Dihexa [backlog] | 10mg | $119.99 | $12.00 | — | ✓ | product/dihexa-10mg |
| DSIP | 5mg | $49.99 | $10.00 | — | ✓ | product/dsip-5mg |
| Epitalon | 10mg | $89.99 | $9.00 | — | ✓ | product/epitalon-10mg |
| GHK-Cu | 50mg | $79.99 | $1.60 | — | ✓ | product/ghk-50mg |
| GHK-Cu | 100mg | $119.99 | $1.20 | — | ✓ | product/ghk-cu-100mg-peptide |
| GHRP-2 | 5mg | $60.49 | $12.10 | — | ✓ | product/ghrp-2-5mg |
| GHRP-6 | 5mg | $49.99 | $10.00 | — | ✓ | product/ghrp-6 |
| Glutathione | 1500mg | $109.99 | $0.07 | — | ✓ | product/glutathione-1500mg |
| Ipamorelin | 5mg | $59.99 | $12.00 | — | ✓ | product/ipamorelin-5mg |
| Ipamorelin | 10mg | $119.99 | $12.00 | — | ✓ | product/ipamorelin-10mg |
| Kisspeptin-10 | 5mg | $64.99 | $13.00 | — | ✓ | product/kisspepptin-5mg |
| Kisspeptin-10 | 10mg | $89.99 | $9.00 | — | ✓ | product/kisspepptin |
| KPV | 5mg | $40.99 | $8.20 | — | ✓ | product/kpv-5mg-2 |
| KPV | 10mg | $64.99 | $6.50 | — | ✓ | product/kpv-5mg |
| Melanotan I | 10mg | $54.99 | $5.50 | — | ✓ | product/melanotan-i-10mg |
| Melanotan II | 10mg | $54.99 | $5.50 | — | ✓ | product/melanotan-ii-10mg |
| MOTS-C | 10mg | $59.99 | $6.00 | — | ✓ | product/mots-c-10mg |
| MOTS-C | 20mg | $99.99 | $5.00 | — | ✓ | product/mots-c-20mg |
| NAD+ | 500mg | $126.49 | $0.25 | — | ✓ | product/nad-adjusted-ph-500mg |
| Pancragen [backlog] | 20mg | $99.99 | $5.00 | — | ✓ | product/prancragen-20mg |
| Pinealon | 10mg | $76.99 | $7.70 | — | ✗ | product/pinealon-10mg |
| PT-141 | 10mg | $82.49 | $8.25 | — | ✓ | product/pt-141-10mg |
| Retatrutide | 10mg | $104.99 | $10.50 | — | ✓ | product/retatrutide-10mg |
| Retatrutide | 15mg | $159.99 | $10.67 | — | ✓ | product/glp-3-reta-15mg |
| Retatrutide | 20mg | $199.00 | $9.95 | — | ✓ | product/retatrutide-20mg |
| Retatrutide | 30mg | $299.99 | $10.00 | — | ✓ | product/glp-3-reta-30mg |
| Selank | 10mg | $84.99 | $8.50 | — | ✓ | product/selank-10mg |
| Semaglutide | 5mg | $89.99 | $18.00 | — | ✓ | product/glp-5mg |
| Semaglutide | 10mg | $119.99 | $12.00 | — | ✓ | product/glp1-10mg |
| Semax | 10mg | $109.99 | $11.00 | — | ✓ | product/semax-10mg |
| Sermorelin | 5mg | $59.99 | $12.00 | — | ✓ | product/sermorelin-5mg |
| Sermorelin | 10mg | $89.99 | $9.00 | — | ✓ | product/sermorelin-10mg |
| SS-31 | 10mg | $79.99 | $8.00 | — | ✓ | product/ss-31-10mg |
| TB-500 | 5mg | $72.59 | $14.52 | — | ✓ | product/tb-500-thymosin-beta-4-5mg |
| TB-500 | 10mg | $89.99 | $9.00 | — | ✓ | product/tb-500-thymosin-beta-4-10mg |
| Tesamorelin | 5mg | $79.99 | $16.00 | — | ✓ | product/tesamorelin-5mg |
| Tesamorelin | 10mg | $139.99 | $14.00 | — | ✓ | product/tesamorelin-10mg |
| Thymogen | 20mg | $69.99 | $3.50 | — | ✓ | product/thymagen-20mg |
| Thymosin Alpha-1 | 5mg | $72.59 | $14.52 | — | ✓ | product/thymosin-alpha-1-5mg |
| Thymosin Alpha-1 | 10mg | $89.99 | $9.00 | — | ✓ | product/thymosin-alpha-1-10mg |
| Tirzepatide | 10mg | $104.99 | $10.50 | — | ✓ | product/tirzepatide-10 |
| Tirzepatide | 20mg | $159.99 | $8.00 | — | ✓ | product/tirzepatide-20 |
| Vesugen [backlog] | 20mg | $99.99 | $5.00 | — | ✓ | product/vesugen-20mg |
| Vilon [backlog] | 20mg | $79.99 | $4.00 | — | ✓ | product/vilon-20mg |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $89.99 | 5/5 (published) | ✓ | product/cjc-1295-ipamorelin-blend-5mg-5mg |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $179.99 | not published | ✓ | product/glow-blend-tb-500-bpc-157-ghk-cu-nasal-spray-70mg |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $144.99 | not published | ✓ | product/glow-ghk-cu-bpc-157-tb-500 |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $199.99 | not published | ✓ | product/klow-blend |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 5mg | $159.99 | not published | ✗ | product/tesamorelin-ipamorelin-blend-5-5mg |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $124.99 | 10/5/5 (published) | ✓ | product/bpc-157-tb-500-blend-10mg-bpc-157-5mg-tb-500-5mg |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 40mg | $199.99 | 20/10/10 (published) | ✓ | product/bpc-157-tb-500-blend-10mg-bpc-157-10mg-tb-500-10mg |

### Sprays / strips (separate format, no $/mg)
| Product | Size | Base | Stock |
| --- | --- | --- | --- |
| BPC-157 (spray) | 10mg | $99.99 | ✓ |
| DSIP (spray) | 10mg | $99.99 | ✓ |
| GHK-Cu (spray) | 50mg | $89.99 | ✓ |
| Melanotan II (spray) | 10mg | $99.99 | ✓ |
| NAD+ (spray) | 500mg | $139.99 | ✓ |
| PT-141 (spray) | 10mg | $99.99 | ✓ |
| Selank (spray) | 10mg | $109.99 | ✗ |
| Semaglutide (spray) | 10mg | $139.99 | ✓ |
| Semax (spray) | 10mg | $78.99 | ✗ |
| TB-500 (spray) | 10mg | $109.99 | ✓ |

### Excluded: blend leak (Rule A): selank + semax — blend-registry candidate, oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Midwest Peptide
- **slug:** midwest-peptide | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** midwestpeptide.com?ref=PROFPEPTIDE
- **traffic:** (not pulled) | **pulled:** August 8 2026
- **sale posture:** No cart auto-coupon; anchors compare_at — base = current price.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 20mg | $49.99 | $2.50 | — | ✗ | products/5-amino-1mq |
| BPC-157 | 10mg | $39.99 | $4.00 | — | ✓ | products/bpc-157-10mg |
| Cagrilintide | 10mg | $69.99 | $7.00 | — | ✓ | products/cagrilintide |
| CJC-1295 | 10mg | $69.99 | $7.00 | — | ✗ | products/cjc-1295-no-dac |
| GHK-Cu | 50mg | $29.99 | $0.60 | $39.99 | ✓ | products/ghk-cu-50mg |
| GHK-Cu | 100mg | $57.99 | $0.58 | $69.99 | ✗ | products/ghk-cu-50mg |
| Glutathione | 1500mg | $59.99 | $0.04 | — | ✓ | products/glutathione-1500mg |
| Melanotan I | 10mg | $29.99 | $3.00 | — | ✓ | products/mt-1-10mg |
| Melanotan II | 10mg | $29.99 | $3.00 | — | ✓ | products/mt-2-10mg |
| MOTS-C | 10mg | $39.99 | $4.00 | — | ✓ | products/mots-c-10mg |
| NAD+ | 500mg | $69.99 | $0.14 | — | ✗ | products/nad-plus-500mg |
| Retatrutide (listed as GLP-3 RT) | 10mg | $69.99 | $7.00 | $89.99 | ✗ | products/glp-3-rt |
| Retatrutide (listed as GLP-3 RT) | 20mg | $134.99 | $6.75 | $169.99 | ✓ | products/glp-3-rt |
| Retatrutide (listed as GLP-3 RT) | 30mg | $199.99 | $6.67 | $224.99 | ✓ | products/glp-3-rt |
| Selank | 10mg | $29.99 | $3.00 | — | ✓ | products/selank-10mg |
| Semax | 10mg | $29.99 | $3.00 | — | ✗ | products/semax-10mg |
| SS-31 | 10mg | $59.99 | $6.00 | — | ✗ | products/ss-31 |
| TB-500 | 10mg | $39.99 | $4.00 | — | ✓ | products/tb-500 |
| Tesamorelin | 10mg | $69.99 | $7.00 | — | ✓ | products/tesamorelin-10mg |
| VIP | 10mg | $64.99 | $6.50 | — | ✓ | products/vip |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $69.99 | 5/5 (published) | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $114.99 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $119.99 | not published | ✓ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 10mg | $79.99 | not published | ✗ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | — | $109.99 | not published | ✓ |

### Sprays: none
### Excluded: no parseable size (Rule 4), oral/capsule, supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Aero Peptides
- **slug:** aero-peptides | **code:** PROFPEPTIDE | **discount:** 15% off | **url:** https://aeropeptides.com/?ref=PROF15
- **traffic:** (not pulled) | **pulled:** August 17 2026
- **sale posture:** 

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| Adamax | 10mg | $59.99 | $6.00 | — | ✓ | adamax-10mg |
| BPC-157 | 10mg | $44.99 | $4.50 | — | ✓ | bpc-157-10mg |
| CJC-1295 | 10mg | $69.99 | $7.00 | — | ✓ | cjc-1295-no-dac-10mg |
| GHK-Cu | 100mg | $44.99 | $0.45 | — | ✓ | ghk-cu-100mg |
| Glutathione | 1500mg | $74.99 | $0.05 | — | ✓ | glutathione-1500mg |
| IGF-1 LR3 | 1mg | $69.99 | $69.99 | — | ✓ | igf1-lr3-1mg |
| Kisspeptin-10 | 10mg | $39.99 | $4.00 | — | ✓ | kisspeptin-10-10mg |
| KPV | 10mg | $39.99 | $4.00 | — | ✓ | kpv-10mg |
| Melanotan I | 10mg | $24.99 | $2.50 | — | ✓ | melanotan-i-10mg |
| Melanotan II | 5mg | $29.99 | $6.00 | — | ✓ | melanotan-ii-5mg |
| MOTS-C | 10mg | $39.99 | $4.00 | — | ✓ | mots-c-10mg |
| NAD+ | 100mg | $59.99 | $0.60 | — | ✓ | nad-100mg |
| Retatrutide (listed as GLP3 – Reta) | 10mg | $79.99 | $8.00 | — | ✓ | glp3-reta-10mg |
| Semaglutide (listed as GLP1 – Semaglutide) | 10mg | $69.99 | $7.00 | — | ✓ | glp1-semaglutide-10mg |
| Semax | 10mg | $44.99 | $4.50 | — | ✓ | semax-10mg |
| SS-31 | 10mg | $64.99 | $6.50 | — | ✓ | ss-31-10mg |
| TB-500 | 5mg | $39.99 | $8.00 | — | ✓ | tb500-5mg |
| Tesamorelin | 10mg | $64.99 | $6.50 | — | ✓ | tesamorelin-10mg |
| Tirzepatide (listed as GLP1 – Tirz) | 10mg | $74.99 | $7.50 | — | ✓ | glp1-tirz-10mg |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $69.99 | 5/5 (published) | ✓ | cjc-1295-no-dac-5mg-ipa-5mg |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $89.99 | 5/5 (published) | ✓ | bpc-5mg-tb-5mg-wolverine-blend |

### Sprays: none
### Excluded: blend total unresolved (Rule 4): no total in name, no parseable size (Rule 4), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## ⛔ BLOCKED / NOT PRICE-PULLABLE (reference — do not keep retrying)
- **Limitless Biotech** (limitlesslifenootropics.com) — **PERMANENTLY EXCLUDED from price comparison.** BigCommerce **B2B store**: every product's price is login-gated behind "Professional Pricing" (`data-product-price="Log In for Professional Pricing"`, empty public `price_range`). **No public retail price exists** — cannot be pulled read-only without an account. Catalog names/sizes are public; prices are not. (Not WooCommerce, despite an earlier assumption.)
- **Spartan Peptides** (spartanpeptides.com) — **PARTIAL.** Fully client-rendered React storefront (no `/wp-json`, no static product data). 10 of ~30 products captured via the browser; the remainder sit behind a **21+ age gate** (a consent modal — not clicked). Prices display as **ranges** ("$99.00 – $336.60"): **low = smallest size, high = bulk/kit** — sizes must be matched to each end of the range before computing $/mg. GLPs self-identify ("GLP-2(Tirz)").
- **aero-peptides** Store API is Cloudflare-403'd but the storefront JSON is readable (pulled above via CINC); its 2 variable products (TB-500, Sermorelin) have AJAX-only per-size prices.

---

## VENDOR: LA Peptides
- **slug:** la-peptides | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** lapeptides.net
- **traffic:** (not pulled) | **pulled:** August 11 2026
- **sale posture:** Check product-level sale_price each refresh; PP code stacks.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 5mg | $55.99 | $11.20 | — | ✓ | product/5-amino-1mq/ |
| 5-Amino-1MQ | 50mg | $99.99 | $2.00 | — | ✓ | product/5-amino-1mq/ |
| AOD-9604 | 10mg | $49.99 | $5.00 | — | ✓ | product/aod-9604/ |
| BPC-157 | 10mg | $59.99 | $6.00 | — | ✓ | product/bpc-157/ |
| Cagrilintide | 10mg | $99.99 | $10.00 | — | ✓ | product/cagrilinitide/ |
| Cardiogen | 20mg | $59.99 | $3.00 | — | ✓ | product/cardiogen/ |
| Cartalax [backlog] | 20mg | $59.99 | $3.00 | — | ✓ | product/cartalax/ |
| Cibinetide | 16mg | $69.99 | $4.37 | — | ✓ | product/ara-290/ |
| DSIP | 5mg | $29.99 | $6.00 | — | ✓ | product/dsip/ |
| Epitalon | 50mg | $79.99 | $1.60 | — | ✓ | product/epithalon/ |
| GHK-Cu | 100mg | $39.99 | $0.40 | — | ✓ | product/ghk-cu/ |
| GLP – 1 (S) [coded, UNVERIFIED] | 5mg | $64.99 | $13.00 | — | ✓ | product/g-1-s/ |
| GLP – 1 (S) [coded, UNVERIFIED] | 10mg | $89.99 | $9.00 | — | ✓ | product/g-1-s/ |
| GLP – 2 (T) [coded, UNVERIFIED] | 15mg | $99.99 | $6.67 | — | ✓ | product/g-2/ |
| GLP – 2 (T) [coded, UNVERIFIED] | 30mg | $169.99 | $5.67 | — | ✓ | product/g-2/ |
| GLP – 3 (R) [coded, UNVERIFIED] | 10mg | $94.99 | $9.50 | — | ✓ | product/g-3/ |
| GLP – 3 (R) [coded, UNVERIFIED] | 20mg | $169.99 | $8.50 | — | ✓ | product/g-3/ |
| GLP – 3 (R) [coded, UNVERIFIED] | 30mg | $229.99 | $7.67 | — | ✓ | product/g-3/ |
| IGF-1 LR3 | 1mg | $59.99 | $59.99 | — | ✓ | product/igf1-lr3/ |
| Ipamorelin | 10mg | $49.99 | $5.00 | — | ✓ | product/ipamorelin/ |
| Kisspeptin-10 | 10mg | $59.99 | $6.00 | — | ✓ | product/kisspeptin/ |
| KPV | 10mg | $59.99 | $6.00 | — | ✓ | product/kpv/ |
| Melanotan II | 10mg | $44.99 | $4.50 | — | ✓ | product/melanotan-2/ |
| MOTS-C | 10mg | $69.99 | $7.00 | — | ✓ | product/mots-c/ |
| NAD+ | 500mg | $74.99 | $0.15 | — | ✓ | product/nad/ |
| NAD+ | 1000mg | $119.99 | $0.12 | — | ✓ | product/nad/ |
| Ovagen [backlog] | 20mg | $59.99 | $3.00 | — | ✓ | product/ovagen/ |
| Pancragen [backlog] | 20mg | $59.99 | $3.00 | — | ✓ | product/pancragen/ |
| Pinealon | 20mg | $59.99 | $3.00 | — | ✓ | product/pinealon/ |
| PT-141 | 10mg | $69.99 | $7.00 | — | ✓ | product/pt-141/ |
| Selank | 10mg | $39.99 | $4.00 | — | ✓ | product/selank/ |
| Semax | 10mg | $39.99 | $4.00 | — | ✓ | product/semax/ |
| Sermorelin | 10mg | $69.99 | $7.00 | — | ✓ | product/sermorelin/ |
| SNAP-8 [backlog] | 10mg | $34.99 | $3.50 | — | ✓ | product/snap-8/ |
| TB-500 | 10mg | $79.99 | $8.00 | — | ✓ | product/tb500/ |
| Tesamorelin | 10mg | $74.99 | $7.50 | — | ✓ | product/tesamorelin/ |
| Testagen [backlog] | 20mg | $59.99 | $3.00 | — | ✓ | product/testagen/ |
| Thymalin [backlog] | 10mg | $69.99 | $7.00 | — | ✓ | product/thymalin/ |
| Thymosin Alpha-1 | 10mg | $59.99 | $6.00 | — | ✓ | product/thymosin-alpha-1/ |
| Vesugen [backlog] | 20mg | $59.99 | $3.00 | — | ✓ | product/vesugen/ |
| Vilon [backlog] | 20mg | $59.99 | $3.00 | — | ✓ | product/vilon/ |
| VIP | 10mg | $59.99 | $6.00 | — | ✓ | product/vip/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 5mg | $74.99 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 5mg | $89.99 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 10mg | $89.99 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 50mg | $89.99 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 25mg | $129.99 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $129.99 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 5mg | $79.99 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $69.99 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $129.99 | not published | ✓ |

### Sprays / strips (separate format, no $/mg)
| Product | Size | Base | Stock |
| --- | --- | --- | --- |
| Adamax (spray) | 10mg | $99.99 | ✓ |
| Adamax (spray) | 40mg | $189.99 | ✓ |
| BPC-157 (spray) | — | $59.99 | ✓ |
| Dihexa [backlog] (spray) | 5mg | $59.99 | ✓ |
| Melanotan II (spray) | — | $59.99 | ✓ |
| NAD+ (spray) | — | $64.99 | ✓ |
| Oxytocin (spray) | 5mg | $69.99 | ✓ |
| PT-141 (spray) | — | $59.99 | ✓ |
| Selank (spray) | — | $59.99 | ✓ |
| Semax (spray) | — | $59.99 | ✓ |
| TB-500 (spray) | — | $59.99 | ✓ |

### Excluded: blend leak (Rule A): dihexa + selank + semax — blend-registry candidate, blend leak (Rule A): selank + semax — blend-registry candidate, no parseable size (Rule 4), oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Peptidology
- **slug:** peptidology | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** peptidology.co
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** Check product-level sale_price each refresh; PP code stacks.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 59mg | $89.00 | $1.51 | — | ✓ | product/5-amino-1mq/ |
| AOD-9604 | 5mg | $44.99 | $9.00 | — | ✗ | product/aod-9604/ |
| AOD-9604 | 7mg | $60.99 | $8.71 | — | ✓ | product/aod-9604/ |
| AOD-9604 | 10mg | $69.99 | $7.00 | — | ✓ | product/aod-9604/ |
| BPC-157 | 10mg | $49.99 | $5.00 | — | ✓ | product/bc17/ |
| BPC-157 | 11mg | $49.99 | $4.54 | — | ✓ | product/bc17/ |
| BPC-157 | 20mg | $74.99 | $3.75 | — | ✓ | product/bc17/ |
| Cardiogen | 20mg | $54.99 | $2.75 | — | ✓ | product/cardiogen/ |
| Cartalax [backlog] | 20mg | $65.00 | $3.25 | — | ✗ | product/cartalax/ |
| Cibinetide | 11mg | $54.99 | $5.00 | — | ✓ | product/ara-290/ |
| CJC-1295 | 4.98mg | $44.99 | $9.03 | — | ✓ | product/cjc-nodac/ |
| CJC-1295 | 5mg | $61.99 | $12.40 | — | ✓ | product/cjc-1295-dac/ |
| CJC-1295 | 5mg | $44.99 | $9.00 | — | ✓ | product/cjc-nodac/ |
| Cortagen | 20mg | $54.99 | $2.75 | — | ✓ | product/cortagen/ |
| Dihexa [backlog] | 10mg | $69.99 | $7.00 | — | ✗ | product/dihexa/ |
| DSIP | 15mg | $58.99 | $3.93 | — | ✓ | product/dsip-delta-sleep-inducing-peptide/ |
| Epitalon | 10mg | $54.99 | $5.50 | — | ✓ | product/epitalon-epithalon/ |
| Epitalon | 60mg | $129.95 | $2.17 | — | ✓ | product/epitalon-epithalon/ |
| Follistatin | 1mg | $179.99 | $179.99 | — | ✓ | product/follistatin-344/ |
| FOXO4-DRI [backlog] | 10mg | $154.99 | $15.50 | — | ✓ | product/fox04-dri/ |
| GHK-Cu | 51.61mg | $39.00 | $0.76 | — | ✓ | product/gk-cu/ |
| GHRP-2 | 10mg | $42.99 | $4.30 | — | ✓ | product/ghrp-2/ |
| Glutathione | 1500mg | $59.99 | $0.04 | — | ✓ | product/l-glutathione/ |
| HGH Fragment 176-191 [backlog] | 9mg | $69.99 | $7.78 | — | ✓ | product/gh-fragment-176-191/ |
| IGF-1 LR3 | 1mg | $86.00 | $86.00 | — | ✗ | product/igf1lr3/ |
| Ipamorelin | 10mg | $49.99 | $5.00 | — | ✓ | product/ipamorlin/ |
| Kisspeptin-10 | 10mg | $59.00 | $5.90 | — | ✓ | product/kisspeptin/ |
| KPV | 10mg | $42.99 | $4.30 | — | ✓ | product/kp/ |
| Livagen [backlog] | 20mg | $54.99 | $2.75 | — | ✓ | product/livagen/ |
| LL-37 | 5mg | $45.00 | $9.00 | — | ✓ | product/ll38/ |
| Mazdutide [backlog] | 10mg | $79.99 | $8.00 | — | ✗ | product/mazdutide/ |
| Melanotan II | 11mg | $42.99 | $3.91 | — | ✓ | product/mt2/ |
| MOTS-C | 10mg | $45.99 | $4.60 | — | ✗ | product/mtsc/ |
| MOTS-C | 10.61mg | $43.99 | $4.15 | — | ✗ | product/mtsc/ |
| MOTS-C | 40mg | $129.99 | $3.25 | — | ✗ | product/mtsc/ |
| NA-Selank [backlog] | 11.12mg | $45.00 | $4.05 | — | ✓ | product/nac/ |
| NAD+ | 500mg | $59.99 | $0.12 | — | ✗ | product/nad/ |
| NAD+ | 552.18mg | $59.99 | $0.11 | — | ✓ | product/nad/ |
| NAD+ | 1000mg | $82.99 | $0.08 | $89.99 | ✓ | product/nad/ |
| Oxytocin | 10mg | $42.99 | $4.30 | — | ✗ | product/oxyt/ |
| Pancragen [backlog] | 23mg | $58.99 | $2.56 | — | ✓ | product/pancragen/ |
| PEG-MGF [backlog] | 5mg | $87.00 | $17.40 | — | ✓ | product/peg-mgf/ |
| PNC-27 [backlog] | 10mg | $119.99 | $12.00 | — | ✓ | product/pnc-27/ |
| PT-141 | 10mg | $43.00 | $4.30 | — | ✓ | product/pt-141/ |
| Selank | 10mg | $41.00 | $4.10 | — | ✓ | product/selank/ |
| Semax | 9.50mg | $42.00 | $4.42 | — | ✓ | product/n-acetyl-semax/ |
| Semax | 10mg | $38.00 | $3.80 | — | ✗ | product/semax/ |
| Sermorelin | 10mg | $79.95 | $8.00 | — | ✓ | product/grf-129/ |
| SNAP-8 [backlog] | 10mg | $42.99 | $4.30 | — | ✓ | product/snap8/ |
| Survodutide [backlog] | 10mg | $79.99 | $8.00 | — | ✓ | product/survodutide/ |
| TB-500 | 10mg | $56.99 | $5.70 | — | ✓ | product/t-500/ |
| Tesamorelin | 10mg | $74.99 | $7.50 | — | ✓ | product/tesa/ |
| Thymalin [backlog] | 10mg | $54.00 | $5.40 | — | ✓ | product/thymalin/ |
| Thymosin Alpha-1 | 10mg | $69.99 | $7.00 | — | ✓ | product/thymosin-alpha-1/ |
| Vesugen [backlog] | 20mg | $54.99 | $2.75 | — | ✓ | product/vesugen/ |
| Vilon [backlog] | 20mg | $54.99 | $2.75 | — | ✓ | product/vilon/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| BPC-157/TB-500/Cartalax | BPC-157/TB-500/Cartalax | 36mg | $149.99 | not published | ✗ | product/bc17-t500-ctx/ |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 15mg | $64.00 | not published | ✓ | product/cjc1295-no-dac-ipamorlin/ |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 30mg | $115.99 | not published | ✓ | product/cjc1295-no-dac-ipamorlin/ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $109.00 | not published | ✓ | product/glw/ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $119.99 | not published | ✓ | product/klow/ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 13mg | $89.99 | not published | ✓ | product/tesa-ipa-blend/ |
| Tesamorelin/Ipamorelin/CJC-1295 | Tesamorelin/Ipamorelin/CJC-1295 | 12mg | $82.99 | not published | ✗ | product/tesa-cjc-ipa-blend/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $89.95 | not published | ✓ | product/bp-tb-bl/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 40mg | $144.95 | not published | ✗ | product/bp-tb-bl/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 45.63mg | $144.95 | not published | ✓ | product/bp-tb-bl/ |

### Sprays: none
### Excluded: blend leak (Rule A): thymosin-alpha-1 + thymulin — blend-registry candidate, manually excluded — UNCERTAIN, pending verification (not confirmed bad): VIP 11.27mg — clean slug, anomalous size (VIP singles are 10mg), unresolved from generated data. Absent beats wrong; re-add if verified., manually excluded — blend leak: Semax/Selank blend -> Selank 27mg ($4.81/mg)., oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Mile High Compounds
- **slug:** mile-high-compounds | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** milehighcompounds.is
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** Check product-level sale_price each refresh; PP code stacks.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 50mg | $109.99 | $2.20 | $129.99 | ✓ | product/5-amino-1mq/ |
| Adamax | 10mg | $79.99 | $8.00 | $89.99 | ✓ | product/adamax/ |
| AOD-9604 | 5mg | $59.99 | $12.00 | $69.99 | ✓ | product/aod-9604/ |
| BPC-157 | 10mg | $49.99 | $5.00 | $59.99 | ✓ | product/bpc-157/ |
| Cagrilintide | 10mg | $119.99 | $12.00 | $129.99 | ✓ | product/cagri-10/ |
| Cardiogen | 20mg | $49.99 | $2.50 | $59.99 | ✓ | product/cardiogen/ |
| Cartalax [backlog] | 20mg | $69.99 | $3.50 | $79.99 | ✗ | product/cartalax/ |
| Cibinetide | 10mg | $49.99 | $5.00 | $59.99 | ✓ | product/ara-290/ |
| CJC-1295 | 5mg | $59.99 | $12.00 | $69.99 | ✓ | product/cjc-1295-w-dac/ |
| DSIP | 10mg | $49.99 | $5.00 | $59.99 | ✓ | product/dsip/ |
| Epitalon | 50mg | $119.99 | $2.40 | $129.99 | ✓ | product/epithalon/ |
| GHK-Cu | 50mg | $49.99 | $1.00 | $59.99 | ✓ | product/ghk-cu/ |
| Glutathione | 1500mg | $79.99 | $0.05 | $89.99 | ✓ | product/glutathione/ |
| IGF-1 LR3 | 1mg | $79.99 | $79.99 | $99.99 | ✓ | product/igf-1-lr3/ |
| Ipamorelin | 10mg | $59.99 | $6.00 | $69.99 | ✓ | product/ipamorelin/ |
| Kisspeptin-10 | 10mg | $44.99 | $4.50 | $59.99 | ✓ | product/kisspeptin/ |
| KPV | 10mg | $49.99 | $5.00 | $59.99 | ✓ | product/kpv/ |
| LL-37 | 5mg | $39.99 | $8.00 | $49.99 | ✓ | product/ll-37/ |
| Melanotan I | 10mg | $39.99 | $4.00 | $49.99 | ✓ | product/mt-1/ |
| Melanotan II | 10mg | $39.99 | $4.00 | $49.99 | ✓ | product/mt-2/ |
| MHC-1 SM [coded, UNVERIFIED] | 10mg | $69.99 | $7.00 | $89.99 | ✓ | product/mhc-1-sm/ |
| MHC-2 TRZ [coded, UNVERIFIED] | 10mg | $89.99 | $9.00 | $119.99 | ✓ | product/mhc-2-trz/ |
| MHC-2 TRZ [coded, UNVERIFIED] | 30mg | $149.99 | $5.00 | $179.99 | ✓ | product/mhc-2-trz/ |
| MHC-2 TRZ [coded, UNVERIFIED] | 60mg | $229.99 | $3.83 | $279.99 | ✓ | product/mhc-2-trz/ |
| MHC-3 RT [coded, UNVERIFIED] | 5mg | $69.99 | $14.00 | $79.99 | ✓ | product/mhc-3-rt/ |
| MHC-3 RT [coded, UNVERIFIED] | 10mg | $99.99 | $10.00 | $119.99 | ✓ | product/mhc-3-rt/ |
| MHC-3 RT [coded, UNVERIFIED] | 20mg | $169.99 | $8.50 | $199.99 | ✓ | product/mhc-3-rt/ |
| MHC-3 RT [coded, UNVERIFIED] | 30mg | $229.99 | $7.67 | $279.99 | ✓ | product/mhc-3-rt/ |
| MHC-3 RT [coded, UNVERIFIED] | 50mg | $279.99 | $5.60 | $299.99 | ✓ | product/mhc-3-rt/ |
| MOTS-C | 10mg | $49.99 | $5.00 | $59.99 | ✓ | product/mots-c/ |
| MOTS-C | 40mg | $139.99 | $3.50 | $159.99 | ✓ | product/mots-c/ |
| NAD+ | 500mg | $59.99 | $0.12 | $69.99 | ✓ | product/nad500mg/ |
| Oxytocin | 10mg | $59.99 | $6.00 | $69.99 | ✓ | product/oxytocin/ |
| Pinealon | 10mg | $49.99 | $5.00 | $59.99 | ✓ | product/pinealon/ |
| Prostamax [backlog] | 20mg | $69.99 | $3.50 | $79.99 | ✓ | product/prostamax/ |
| PT-141 | 10mg | $44.99 | $4.50 | $49.99 | ✓ | product/pt-141/ |
| Selank | 10mg | $39.99 | $4.00 | $49.99 | ✓ | product/selank/ |
| Semax | 10mg | $39.99 | $4.00 | $49.99 | ✓ | product/semax/ |
| Sermorelin | 10mg | $69.99 | $7.00 | $79.99 | ✓ | product/sermorelin/ |
| SNAP-8 [backlog] | 10mg | $39.99 | $4.00 | $49.99 | ✓ | product/snap-8/ |
| SS-31 | 10mg | $69.99 | $7.00 | $79.99 | ✓ | product/mtp-31/ |
| TB-500 | 10mg | $59.99 | $6.00 | $69.99 | ✓ | product/tb-500/ |
| Tesamorelin | 10mg | $79.99 | $8.00 | $99.99 | ✓ | product/tesamorlin/ |
| Testagen [backlog] | 20mg | $69.99 | $3.50 | $79.99 | ✓ | product/testagen/ |
| Thymogen | 20mg | $44.99 | $2.25 | $49.99 | ✓ | product/thymagen/ |
| Thymosin Alpha-1 | 10mg | $69.99 | $7.00 | $79.99 | ✓ | product/thymosin-alpha-1/ |
| VIP | 10mg | $59.99 | $6.00 | $69.99 | ✓ | product/vip/ |

### Sprays / strips (separate format, no $/mg)
| Product | Size | Base | Stock |
| --- | --- | --- | --- |
| Selank (spray) | 40mg | $159.99 | ✓ |
| Semax (spray) | 50mg | $159.99 | ✓ |

### Excluded: blend leak (Rule A): pinealon + selank + semax — blend-registry candidate, blend leak (Rule A): selank + semax — blend-registry candidate, blend total unresolved (Rule 4): no total in name, no parseable size (Rule 4), oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: NextGen Peptides
- **slug:** nextgen-peptides | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** ngpeptide.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** Check product-level sale_price each refresh; PP code stacks.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 5mg | $20.00 | $4.00 | — | ✗ | product/5-amino-mq/ |
| 5-Amino-1MQ | 50mg | $50.00 | $1.00 | — | ✓ | product/5-amino-mq/ |
| Adamax | 10mg | $55.00 | $5.50 | — | ✓ | product/adamax/ |
| AOD-9604 | 5mg | $35.00 | $7.00 | — | ✓ | product/aod/ |
| BPC-157 | 10mg | $30.00 | $3.00 | — | ✓ | product/bpc-157/ |
| BPC-157 | 20mg | $55.00 | $2.75 | — | ✓ | product/bpc-157/ |
| Cagrilintide | 5mg | $40.00 | $8.00 | — | ✓ | product/cagri/ |
| Cagrilintide | 10mg | $65.00 | $6.50 | — | ✓ | product/cagri/ |
| Cartalax [backlog] | 25mg | $70.00 | $2.80 | — | ✗ | product/cartalax/ |
| DSIP | 10mg | $35.00 | $3.50 | — | ✓ | product/dsip/ |
| Epitalon | 50mg | $75.00 | $1.50 | — | ✓ | product/epithalon/ |
| GHK-Cu | 50mg | $20.00 | $0.40 | — | ✗ | product/ghk-cu/ |
| GLP-3 [coded, UNVERIFIED] | 10mg | $42.00 | $4.20 | — | ✓ | product/glp-3/ |
| GLP-3 [coded, UNVERIFIED] | 20mg | $68.00 | $3.40 | — | ✓ | product/glp-3/ |
| GLP-3 [coded, UNVERIFIED] | 30mg | $95.00 | $3.17 | — | ✓ | product/glp-3/ |
| GLP-3 [coded, UNVERIFIED] | 50mg | $165.00 | $3.30 | — | ✓ | product/glp-3/ |
| Glutathione | 1500mg | $45.00 | $0.03 | — | ✓ | product/glutathione/ |
| Ipamorelin | 5mg | $28.00 | $5.60 | — | ✗ | product/ipamorelin/ |
| Ipamorelin | 10mg | $42.00 | $4.20 | — | ✓ | product/ipamorelin/ |
| Kisspeptin-10 | 10mg | $35.00 | $3.50 | — | ✓ | product/kisspeptin/ |
| KPV | 10mg | $35.00 | $3.50 | — | ✓ | product/kpv/ |
| Melanotan II | 10mg | $24.99 | $2.50 | — | ✓ | product/mt-2-10mg/ |
| MOTS-C | 40mg | $80.00 | $2.00 | — | ✓ | product/mots-c/ |
| NAD+ | 500mg | $50.00 | $0.10 | — | ✓ | product/nad-500mg/ |
| Prostamax [backlog] | 20mg | $60.00 | $3.00 | — | ✗ | product/prostamax/ |
| PT-141 | 10mg | $24.99 | $2.50 | — | ✓ | product/pt-141-10mg/ |
| Selank | 10mg | $30.00 | $3.00 | — | ✓ | product/selank/ |
| Semax | 10mg | $35.00 | $3.50 | — | ✓ | product/semax-10mg/ |
| Sermorelin | 10mg | $45.00 | $4.50 | — | ✓ | product/sermorelin/ |
| TB-500 | 10mg | $35.00 | $3.50 | — | ✓ | product/tb-500/ |
| TB-500 | 20mg | $64.00 | $3.20 | — | ✓ | product/tb-500/ |
| Tesamorelin | 10mg | $50.00 | $5.00 | — | ✓ | product/tesamorelin/ |
| Tesamorelin | 20mg | $90.00 | $4.50 | — | ✓ | product/tesamorelin/ |
| Testagen [backlog] | 30mg | $80.00 | $2.67 | — | ✗ | product/testagen/ |
| Thymosin Alpha-1 | 10mg | $45.00 | $4.50 | — | ✓ | product/thymosin-alpha-1-2/ |
| VIP | 5mg | $40.00 | $8.00 | — | ✗ | product/vip/ |
| VIP | 10mg | $45.00 | $4.50 | — | ✓ | product/vip/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $40.00 | not published | ✓ | product/cjc-ipa-5-5mg-no-dac/ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 13mg | $60.00 | 10/3 (published) | ✗ | product/tesa-ipa-blend-10mg-3mg/ |
| Tesamorelin/Ipamorelin/CJC-1295 | Tesamorelin/Ipamorelin/CJC-1295 | 12mg | $75.00 | not published | ✓ | product/tesa-ipa-cjc-6-3-3-mg/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 15mg | $55.00 | not published | ✓ | product/bpc-tb-blend/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 30mg | $65.00 | not published | ✗ | product/bpc-tb-blend/ |

### Sprays / strips (separate format, no $/mg)
| Product | Size | Base | Stock |
| --- | --- | --- | --- |
| Adamax (spray) | — | $165.00 | ✓ |
| KPV (spray) | — | $160.00 | ✓ |
| NAD+ (spray) | — | $115.00 | ✓ |
| Selank (spray) | — | $160.00 | ✓ |
| Semax (spray) | — | $140.00 | ✓ |

### Excluded: blend total unresolved (Rule 4): no total in name, clinical/other, manually excluded — blend leak (≥10x): 'NAD+5-AMINO-MQ 50MG each' is a NAD+/5-Amino-1MQ blend rendering as NAD+ 50mg ($2.70/mg = 20.8x median). Frag is 'nad5-amino-mq' (NOT bare 'nad+' — the compound name itself contains '+', so a careless frag would catch real NAD+ rows; FP-scanned: hits only this blend, leaves nextgen's real product/nad-500mg untouched)., manually excluded — blend leak: Semax/Selank/Pinealon 3-way blend -> Pinealon 60mg ($2.42/mg) (match() picked Pinealon as the LONGEST alias, not the first-named)., multi-vial kit / pack (by name), oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Modern Aminos
- **slug:** modern-aminos | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** modernaminos.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** Product-level markdown: the 20% GLP-1/Amylin discount populates on_sale/sale_price/regular_price in the Store API (visible without a code), so per PP_PRICES v2 Locked Rule 1 that IS the price and regular_price is the struck list. ⚠️ The banner also advertises 40% off GW-501516/MK-2866, but those show on_sale=false with no markdown in the data — the banner overstates; both are SARMs and out of scope anyway.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $49.00 | $4.90 | — | ✓ | product/5-amino-1mq/ |
| 5-Amino-1MQ | 50mg | $99.00 | $1.98 | — | ✓ | product/5-amino-1mq/ |
| AOD-9604 | 5mg | $39.00 | $7.80 | — | ✓ | product/aod-9604-5mg/ |
| BPC-157 | 500mcg | $89.00 | $178.00 | — | ✓ | product/bpc-157-arginate/ |
| BPC-157 | 5mg | $89.00 | $17.80 | — | ✓ | product/bpc-157-arginate/ |
| BPC-157 | 10mg | $89.00 | $8.90 | — | ✓ | product/bpc-157-arginate/ |
| Bronchogen [backlog] | 20mg | $54.00 | $2.70 | — | ✓ | product/bronchogen-20mg/ |
| Cagrilintide | 10mg | $119.00 | $11.90 | — | ✓ | product/cagrilintide-10mg/ |
| Cardiogen | 20mg | $54.00 | $2.70 | — | ✓ | product/cardiogen-20mg/ |
| Cartalax [backlog] | 20mg | $54.00 | $2.70 | — | ✓ | product/cartalax-20mg/ |
| Chonluten [backlog] | 20mg | $54.00 | $2.70 | — | ✓ | product/chonluten-20mg/ |
| Cibinetide | 5mg | $51.00 | $10.20 | — | ✗ | product/ara-290-10mg/ |
| Cibinetide | 10mg | $51.00 | $5.10 | — | ✗ | product/ara-290-10mg/ |
| Cibinetide | 12mg | $51.00 | $4.25 | — | ✗ | product/ara-290-10mg/ |
| Cibinetide | 20mg | $51.00 | $2.55 | — | ✗ | product/ara-290-10mg/ |
| Cibinetide | 30mg | $51.00 | $1.70 | — | ✗ | product/ara-290-10mg/ |
| CJC-1295 | 2mg | $24.00 | $12.00 | — | ✓ | product/cjc-1295-no-dac-2mg/ |
| CJC-1295 | 5mg | $52.00 | $10.40 | — | ✓ | product/cjc-1295-dac-5mg/ |
| Dihexa [backlog] | 5mg | $94.00 | $18.80 | — | ✓ | product/dihexa-5mg/ |
| DSIP | 5mg | $35.00 | $7.00 | — | ✓ | product/dsip-5mg/ |
| Epitalon | 10mg | $40.00 | $4.00 | — | ✓ | product/epithalon-10mg-2/ |
| Follistatin | 1mg | $88.00 | $88.00 | — | ✗ | product/follistatin-344-1mg/ |
| GHK-Cu | 2mg | $109.00 | $54.50 | — | ✓ | product/ghk-cu/ |
| GHK-Cu | 50mg | $42.00 | $0.84 | — | ✓ | product/ghk-cu/ |
| GHK-Cu | 100mg | $57.60 | $0.58 | $64.00 | ✓ | product/ghk-cu/ |
| Glutathione | 200mg | $48.00 | $0.24 | — | ✓ | product/s-acetyl-glutathione-200mg/ |
| Glutathione | 600mg | $54.00 | $0.09 | — | ✓ | product/glutathione/ |
| Hexarelin | 5mg | $68.00 | $13.60 | — | ✓ | product/hexarelin-10mg/ |
| Hexarelin | 10mg | $68.00 | $6.80 | — | ✓ | product/hexarelin-10mg/ |
| Hexarelin | 12mg | $68.00 | $5.67 | — | ✓ | product/hexarelin-10mg/ |
| Hexarelin | 20mg | $68.00 | $3.40 | — | ✓ | product/hexarelin-10mg/ |
| Hexarelin | 30mg | $68.00 | $2.27 | — | ✓ | product/hexarelin-10mg/ |
| HGH Fragment 176-191 [backlog] | 5mg | $44.00 | $8.80 | — | ✓ | product/hgh-frag-176-191-5mg/ |
| IGF-1 LR3 | 1mg | $64.00 | $64.00 | — | ✓ | product/igf-lr3-1mg/ |
| Ipamorelin | 10mg | $64.00 | $6.40 | — | ✓ | product/ipamorelin-10mg/ |
| Kisspeptin-10 | 10mg | $49.00 | $4.90 | — | ✓ | product/kisspeptin-10-10mg/ |
| KPV | 500mcg | $89.00 | $178.00 | — | ✓ | product/kpv/ |
| KPV | 10mg | $46.00 | $4.60 | — | ✓ | product/kpv/ |
| Livagen [backlog] | 20mg | $54.00 | $2.70 | — | ✓ | product/livagen-20mg/ |
| LL-37 | 5mg | $35.25 | $7.05 | $47.00 | ✓ | product/ll-37-5mg/ |
| MA-1S [coded, UNVERIFIED] | 5mg | $49.00 | $9.80 | — | ✓ | product/ma-1s/ |
| MA-1S [coded, UNVERIFIED] | 10mg | $84.00 | $8.40 | — | ✓ | product/ma-1s/ |
| MA-2TZ [coded, UNVERIFIED] | 5mg | $51.00 | $10.20 | — | ✓ | product/ma-2tz/ |
| MA-2TZ [coded, UNVERIFIED] | 10mg | $81.00 | $8.10 | — | ✓ | product/ma-2tz/ |
| MA-2TZ [coded, UNVERIFIED] | 20mg | $139.00 | $6.95 | — | ✓ | product/ma-2tz/ |
| MA-2TZ [coded, UNVERIFIED] | 40mg | $249.00 | $6.22 | — | ✓ | product/ma-2tz/ |
| Mazdutide [backlog] | 5mg | $78.00 | $15.60 | — | ✗ | product/mazdutide-5mg/ |
| Melanotan II | 10mg | $38.00 | $3.80 | — | ✓ | product/melanotan-2-10mg/ |
| MK-677 | 25mg | $89.00 | $3.56 | — | ✓ | product/mk-677/ |
| MOTS-C | 10mg | $42.00 | $4.20 | — | ✓ | product/mots-c/ |
| MOTS-C | 40mg | $115.00 | $2.88 | — | ✓ | product/mots-c/ |
| NA-Selank [backlog] | 10mg | $45.00 | $4.50 | — | ✓ | product/selank-10mg/ |
| NAD+ | 500mg | $58.00 | $0.12 | — | ✓ | product/nad-20ml/ |
| Ovagen [backlog] | 20mg | $54.00 | $2.70 | — | ✓ | product/ovagen-20mg/ |
| Oxytocin | 5mg | $29.00 | $5.80 | — | ✓ | product/oxytocin-5mg/ |
| PEG-MGF [backlog] | 2mg | $39.00 | $19.50 | — | ✗ | product/peg-mgf-2mg/ |
| Petrelintide (listed as MA-1P) | 10mg | $159.00 | $15.90 | — | ✗ | product/petrelintide-zp8396/ |
| Pinealon | 5mg | $61.00 | $12.20 | — | ✓ | product/pinealon-20mg/ |
| Pinealon | 10mg | $61.00 | $6.10 | — | ✓ | product/pinealon-20mg/ |
| Pinealon | 12mg | $61.00 | $5.08 | — | ✓ | product/pinealon-20mg/ |
| Pinealon | 20mg | $61.00 | $3.05 | — | ✓ | product/pinealon-20mg/ |
| Pinealon | 30mg | $61.00 | $2.03 | — | ✓ | product/pinealon-20mg/ |
| Prostamax [backlog] | 20mg | $54.00 | $2.70 | — | ✓ | product/prostamax-20mg/ |
| PT-141 | 10mg | $41.00 | $4.10 | — | ✓ | product/pt-141-10mg/ |
| Retatrutide (listed as MA-3RT) | 5mg | $54.00 | $10.80 | — | ✓ | product/ma-3rt/ |
| Retatrutide (listed as MA-3RT) | 10mg | $94.00 | $9.40 | — | ✓ | product/ma-3rt/ |
| Retatrutide (listed as MA-3RT) | 12mg | $112.00 | $9.33 | — | ✓ | product/ma-3rt/ |
| Retatrutide (listed as MA-3RT) | 20mg | $169.00 | $8.45 | — | ✓ | product/ma-3rt/ |
| Retatrutide (listed as MA-3RT) | 30mg | $234.00 | $7.80 | — | ✓ | product/ma-3rt/ |
| Retatrutide (listed as MA-3RT) | 50mg | $299.00 | $5.98 | — | ✗ | product/ma-3rt/ |
| Retatrutide (listed as MA-3RT) | 60mg | $349.00 | $5.82 | — | ✓ | product/ma-3rt/ |
| Semax | 10mg | $42.00 | $4.20 | — | ✓ | product/semax-10mg/ |
| Sermorelin | 2mg | $46.00 | $23.00 | — | ✓ | product/sermorelin-5mg/ |
| Sermorelin | 5mg | $46.00 | $9.20 | — | ✓ | product/sermorelin-5mg/ |
| SLU-PP-332 [backlog] | 250mcg | $78.00 | $312.00 | — | ✓ | product/slu-pp-332/ |
| SLU-PP-332 [backlog] | 500mcg | $149.00 | $298.00 | — | ✓ | product/slu-pp-332/ |
| SLU-PP-332 [backlog] | 10mg | $278.00 | $27.80 | — | ✓ | product/slu-pp-332/ |
| TB-500 | 5mg | $34.00 | $6.80 | — | ✓ | product/tb-500-thymosin-beta-4/ |
| TB-500 | 10mg | $59.00 | $5.90 | — | ✓ | product/tb-500-thymosin-beta-4/ |
| Tesamorelin | 5mg | $71.00 | $14.20 | — | ✓ | product/tesamorelin/ |
| Tesamorelin | 10mg | $71.00 | $7.10 | — | ✓ | product/tesamorelin/ |
| Tesofensine [backlog] | 250mcg | $99.00 | $396.00 | — | ✓ | product/tesofensine-powder/ |
| Tesofensine [backlog] | 500mcg | $159.00 | $318.00 | — | ✓ | product/tesofensine-powder/ |
| Testagen [backlog] | 20mg | $54.00 | $2.70 | — | ✓ | product/testagen-20mg/ |
| Thymogen | 20mg | $69.00 | $3.45 | — | ✓ | product/thymogen-thymagen/ |
| Thymosin Alpha-1 | 5mg | $41.00 | $8.20 | — | ✗ | product/thymosin-alpha-1/ |
| Thymosin Alpha-1 | 10mg | $80.00 | $8.00 | — | ✗ | product/thymosin-alpha-1/ |
| Vesugen [backlog] | 20mg | $54.00 | $2.70 | — | ✓ | product/vesugen-20mg/ |
| Vilon [backlog] | 20mg | $54.00 | $2.70 | — | ✓ | product/vilon-20mg/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $65.00 | not published | ✓ | product/cjc-1295-no-dac-ipamorelin/ |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 20mg | $119.00 | not published | ✓ | product/cjc-1295-no-dac-ipamorelin/ |
| GHRP-2/Tesamorelin/MGF/Ipamorelin | GHRP-2/Tesamorelin/MGF/Ipamorelin | 13mg | $84.00 | 5/5/2.5 (published) | ✗ | product/4x-blend-ghrp-2-5mg-tesamorelin-5mg-mgf-500mcg-ipamorelin-2-5mg/ |
| Retatrutide/Cagrilintide blend [backlog] |  | 10mg | $117.00 | not published | ✓ | product/ma-3rt-cagrilintide-8mg-2mg/ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 10mg | $84.00 | 8/2 (published) | ✓ | product/tesamorelin-ipamorelin-blend-8mg-2mg/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $128.00 | not published | ✓ | product/bpc-157tb-500-blend/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $68.00 | not published | ✓ | product/bpc-157tb-500-blend/ |

### Sprays: none
### Excluded: blend leak (Rule A): 5-amino-1mq + mots-c — blend-registry candidate, blend leak (Rule A): cjc-1295 + hexarelin — blend-registry candidate, blend total unresolved (Rule 4): no total in name, liquid/concentration (per-ml, not a vial), manually excluded — blend leak: Semax/Selank blend mis-classified as Selank 5/12/20/30mg. modern ALSO sells a real Selank 10mg single (product/selank-10mg) which is UNAFFECTED and stays on /prices — only the blend rows are removed., manually excluded — blend/combo leak (≥10x): 'BPC-157 (Pentadecapeptide) & PDA (Pentadeca Arginate)' is a BPC-157+PDA combo whose 3 size variants ALL render as BPC-157 — the 500mcg dry-fill at $178/mg = 32.4x median. modern has NO pure-BPC-157 single, so this removes modern from /prices/bpc-157 entirely (correct: it doesn't sell clean BPC-157). NOTE the slug 'pentadecapeptide' contains 'cap' — a Rule-A word-boundary FP case (below)., no parseable size (Rule 4), oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply, topical/transdermal — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Treasure Coast
- **slug:** treasure-coast-peptides | **code:** PROFPEPTIDE | **discount:** 15% off | **url:** treasurecoastpeptides.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** Check product-level sale_price each refresh; PP code stacks.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 5mg | $29.00 | $5.80 | $40.99 | ✓ | product/5-amino-1mq-5mg/ |
| Adamax | 10mg | $53.99 | $5.40 | $79.00 | ✓ | product/adamax/ |
| AOD-9604 | 5mg | $29.99 | $6.00 | $65.99 | ✓ | product/aod-9604-peptide/ |
| BPC-157 | 5mg | $28.50 | $5.70 | $34.99 | ✓ | product/bpc-157-peptide/ |
| BPC-157 | 10mg | $35.50 | $3.55 | $63.99 | ✓ | product/bpc-157-peptide/ |
| Cagrilintide | 5mg | $48.50 | $9.70 | $79.99 | ✓ | product/cagrilintide-peptide/ |
| Cibinetide | 10mg | $35.99 | $3.60 | $68.99 | ✓ | product/ara-290-10mg/ |
| DSIP | 5mg | $24.75 | $4.95 | $36.00 | ✓ | product/dsip-peptide/ |
| DSIP | 10mg | $44.75 | $4.47 | $89.00 | ✓ | product/dsip-peptide/ |
| Epitalon | 10mg | $32.75 | $3.27 | $49.99 | ✓ | product/epitalon/ |
| Epitalon | 50mg | $93.99 | $1.88 | $165.00 | ✓ | product/epitalon/ |
| GHK-Cu | 100mg | $42.00 | $0.42 | $69.99 | ✗ | product/ghk-cu-peptide/ |
| GHRP-6 | 10mg | $58.00 | $5.80 | $79.99 | ✓ | product/ghrp-6-10mg/ |
| Glutathione | 1500mg | $40.00 | $0.03 | $89.00 | ✗ | product/glutathione-1500mg/ |
| IGF-1 LR3 | 1mg | $45.25 | $45.25 | $99.00 | ✓ | product/igf-1lr3-1mg/ |
| KPV | 10mg | $42.25 | $4.22 | $79.99 | ✓ | product/kpv-10mg-peptide/ |
| Melanotan I | 10mg | $24.89 | $2.49 | $35.00 | ✓ | product/melanotan-1-peptide/ |
| MOTS-C | 10mg | $33.49 | $3.35 | $59.99 | ✓ | product/mots-c-peptide/ |
| MOTS-C | 40mg | $80.00 | $2.00 | $139.65 | ✓ | product/mots-c-peptide/ |
| Oxytocin | 2mg | $22.00 | $11.00 | $34.99 | ✓ | product/oxytocin-2mg/ |
| Selank | 5mg | $23.10 | $4.62 | $34.99 | ✓ | product/selank-peptide/ |
| Selank | 10mg | $34.99 | $3.50 | $50.95 | ✗ | product/selank-peptide/ |
| Semax | 5mg | $23.10 | $4.62 | $35.99 | ✓ | product/semax-peptide/ |
| Semax | 10mg | $34.75 | $3.48 | $49.00 | ✓ | product/semax-peptide/ |
| Sermorelin | 5mg | $35.90 | $7.18 | $50.00 | ✓ | product/sermorelin-peptide/ |
| Sermorelin | 10mg | $58.50 | $5.85 | $69.99 | ✓ | product/sermorelin-peptide/ |
| TB-500 | 5mg | $28.75 | $5.75 | $42.99 | ✓ | product/tb-500-10mg/ |
| TB-500 | 10mg | $32.50 | $3.25 | $63.00 | ✓ | product/tb-500-10mg/ |
| Tesamorelin | 5mg | $32.50 | $6.50 | $45.00 | ✓ | product/tesamorelin-peptide/ |
| Tesamorelin | 10mg | $44.50 | $4.45 | $59.00 | ✓ | product/tesamorelin-peptide/ |
| Thymosin Alpha-1 | 5mg | $35.25 | $7.05 | $59.00 | ✓ | product/thymosin-alpha-1-peptide/ |
| VIP | 5mg | $33.50 | $6.70 | $55.00 | ✓ | product/vip-5mg-peptide/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $108.50 | 80/10/10/10/50 (published) | ✓ | product/bpc-157-tb-500-kpv-80mg/ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 16mg | $98.00 | 13/3 (published) | ✓ | product/tesamorelin-10mg-ipamorelin-3mg/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $47.50 | 5/5 (published) | ✓ | product/wolverine-blend-bpc-157-tb-500/ |

### Sprays: none
### Excluded: blend total unresolved (Rule 4): no total in name, no parseable size (Rule 4), out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Crush Research
- **slug:** crush-research | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** crushresearch.shop
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** No product-level sale (originalPrice null across the catalog); PP code is a query-param affiliate ref (?ref=), applied at checkout, not an automatic markdown — so base = lowestPrice.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| Adamax | 10mg | $53.10 | $5.31 | — | ✗ | product/adamax-1032-grade-10mg |
| BPC-157 | 5mg | $26.10 | $5.22 | — | ✗ | product/bpc-157-5mg |
| BPC-157 | 10mg | $35.10 | $3.51 | — | ✓ | product/bpc-157-10mg |
| DSIP | 10mg | $35.10 | $3.51 | — | ✓ | product/dsip-10mg |
| GHK-Cu | 50mg | $26.10 | $0.52 | — | ✗ | product/ghk-cu-50mg |
| GHK-Cu | 100mg | $35.10 | $0.35 | — | ✓ | product/ghk-cu-100mg |
| Glutathione | 1500mg | $53.10 | $0.04 | — | ✗ | product/glutathione-1500mg |
| Ipamorelin | 10mg | $35.10 | $3.51 | — | ✗ | product/ipamorelin-10mg-vial |
| KPV | 10mg | $35.10 | $3.51 | — | ✗ | product/kpv-10mg |
| Melanotan I | 10mg | $35.10 | $3.51 | — | ✓ | product/melanotan-1-10mg-vial |
| Melanotan II | 10mg | $35.10 | $3.51 | — | ✓ | product/melanotan-2-10mg-vial |
| MOTS-C | 10mg | $35.10 | $3.51 | — | ✓ | product/mots-c-10mg |
| MOTS-C | 20mg | $53.10 | $2.66 | — | ✓ | product/mots-c-20mg |
| MOTS-C | 40mg | $71.10 | $1.78 | — | ✗ | product/mots-c-40mg |
| NAD+ | 500mg | $44.10 | $0.09 | — | ✗ | product/nad-500mg-buffered |
| NAD+ | 1000mg | $71.10 | $0.07 | — | ✓ | product/nad-plus-1000mg |
| Pinealon | 10mg | $35.10 | $3.51 | — | ✗ | product/pinealon-10mg-vial |
| PT-141 | 10mg | $35.10 | $3.51 | — | ✗ | product/pt-141-10mg |
| Retatrutide (listed as Triple Agonist) | 10mg | $44.10 | $4.41 | — | ✓ | product/triple-agonist-10mg |
| Retatrutide (listed as Triple Agonist) | 15mg | $53.10 | $3.54 | — | ✓ | product/triple-agonist-15mg |
| Retatrutide (listed as Triple Agonist) | 20mg | $62.10 | $3.10 | — | ✓ | product/triple-agonist-20mg |
| Retatrutide (listed as Triple Agonist) | 30mg | $80.10 | $2.67 | — | ✓ | product/triple-agonist-30mg |
| Retatrutide (listed as Triple Agonist) | 50mg | $108.00 | $2.16 | — | ✗ | product/triple-agonist-50mg |
| Selank | 5mg | $26.10 | $5.22 | — | ✗ | product/selank-5mg-vial |
| Semax | 10mg | $35.10 | $3.51 | — | ✗ | product/semax-10mg-vial |
| Sermorelin | 10mg | $35.10 | $3.51 | — | ✗ | product/sermorelin-10mg-vial |
| TB-500 | 5mg | $26.10 | $5.22 | — | ✓ | product/tb-500-5mg-vial |
| Tesamorelin | 10mg | $49.00 | $4.90 | — | ✓ | product/tesamorelin-10mg |
| Tesamorelin | 20mg | $80.10 | $4.00 | — | ✗ | product/tesamorelin-20mg |
| Tirzepatide (listed as Double Agonist) | 20mg | $53.10 | $2.66 | — | ✗ | product/double-agonist-20mg |
| Tirzepatide (listed as Double Agonist) | 30mg | $62.10 | $2.07 | — | ✗ | product/double-agonist-30mg |
| Tirzepatide (listed as Double Agonist) | 40mg | $71.10 | $1.78 | — | ✗ | product/double-agonist-40mg |
| Tirzepatide (listed as Double Agonist) | 50mg | $80.10 | $1.60 | — | ✓ | product/double-agonist-50mg |
| Tirzepatide (listed as Double Agonist) | 60mg | $80.10 | $1.33 | — | ✗ | product/double-agonist-60mg |
| VIP | 10mg | $35.10 | $3.51 | — | ✗ | product/vip-10mg |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $44.10 | not published | ✗ | product/cjc-1295-ipamorelin-blend-10mg |
| GHK-Cu/KPV | GHK-Cu/KPV | 60mg | $53.10 | not published | ✗ | product/ghk-cu-kpv-60mg-vial |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $62.10 | not published | ✗ | product/klow-80mg |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $62.10 | not published | ✗ | product/bpc-tb-20mg |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $44.10 | not published | ✓ | product/bpc-tb-10mg |

### Sprays: none
### Excluded: out-of-scope (SARMs/Rx/cosmetics) — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Spartan Peptides
- **slug:** spartan-peptides | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** spartanpeptides.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** Per-variant regular_price is in the data (base = single-vial current price; on-sale when regular>price). Multi-vial (2/4) kits dropped. PP code applied at checkout (a_aid affiliate query param, not an automatic markdown). NOTE — MOTS-c is the one row in this pull classified by PATTERN not field: its three variants are all named '10mg' with no vial count, priced at the 1 / 1.8 / 3.2x ladder (= 1/2/4 vials), so the single vial was inferred as the lowest ($149); every other row's single-vial was read from an explicit ', 1' vial count.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| AOD-9604 | 5mg | $99.00 | $19.80 | — | ✓ | products/aod-9604/ |
| BPC-157 | 5mg | $119.00 | $23.80 | — | ✓ | products/bpc-157/ |
| BPC-157 | 10mg | $199.00 | $19.90 | — | ✓ | products/bpc-157/ |
| Epitalon | 25mg | $199.00 | $7.96 | — | ✓ | products/epithalon-20mg/ |
| GHK-Cu | 50mg | $179.00 | $3.58 | — | ✓ | products/ghk-cu-copper-peptide-50mg/ |
| Kisspeptin-10 | 10mg | $149.00 | $14.90 | — | ✓ | products/kisspeptin/ |
| MOTS-C | 10mg | $149.00 | $14.90 | — | ✓ | products/mots-c/ |
| NAD+ | 750mg | $279.00 | $0.37 | — | ✓ | products/nad/ |
| Pinealon | 20mg | $159.00 | $7.95 | — | ✓ | products/pinealon/ |
| PT-141 | 10mg | $139.00 | $13.90 | — | ✓ | products/pt-141/ |
| Retatrutide (listed as GLP-3(Reta)) | 6mg | $180.00 | $30.00 | — | ✓ | products/glp-3reta/ |
| Retatrutide (listed as GLP-3(Reta)) | 8mg | $205.00 | $25.62 | — | ✓ | products/glp-3reta/ |
| Semaglutide (listed as GLP-1(Sema)) | 3mg | $179.00 | $59.67 | — | ✓ | products/glp-1sema/ |
| Semaglutide (listed as GLP-1(Sema)) | 5mg | $225.00 | $45.00 | — | ✓ | products/glp-1sema/ |
| Semax | 30mg | $159.00 | $5.30 | — | ✓ | products/semax/ |
| TB-500 | 5mg | $169.00 | $33.80 | — | ✓ | products/tb-500/ |
| TB-500 | 10mg | $335.00 | $33.50 | — | ✓ | products/tb-500/ |
| Tesamorelin | 5mg | $159.00 | $31.80 | — | ✓ | products/tesamorelin-5-mg/ |
| Thymosin Alpha-1 | 5mg | $99.00 | $19.80 | — | ✓ | products/thymosin-alpha/ |
| Tirzepatide (listed as GLP-2(Tirz)) | 10mg | $250.00 | $25.00 | — | ✓ | products/glp-2tirz/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $199.00 | not published | ✓ | products/cjc-ipa-10-mg-blend/ |

### Sprays: none
### Excluded: blend total unresolved (Rule 4): no total in name, out-of-scope (SARMs/Rx/cosmetics) — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: PureRx Peptides
- **slug:** purerx-peptides | **code:** PROFPEPTIDE | **discount:** 15% off | **url:** purerxpeptides.com
- **traffic:** (not pulled) | **pulled:** August 2 2026
- **sale posture:** Check product-level sale_price each refresh; PP code stacks.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| AOD-9604 | 10mg | $28.00 | $2.80 | — | ✓ | product/aod-9604-10mg/ |
| BPC-157 | 10mg | $23.00 | $2.30 | — | ✓ | product/bpc-157-10mg/ |
| BPC-157 | 20mg | $51.00 | $2.55 | — | ✓ | product/bpc-157-20mg/ |
| Cagrilintide | 10mg | $65.00 | $6.50 | — | ✓ | product/cagrilintide-10mg/ |
| Cardiogen | 20mg | $37.00 | $1.85 | — | ✓ | product/cardiogen-20mg/ |
| Cartalax [backlog] | 20mg | $45.00 | $2.25 | — | ✓ | product/cartalax-20mg/ |
| Cibinetide | 10mg | $30.00 | $3.00 | — | ✓ | product/ara-290-10mg/ |
| CJC-1295 | 5mg | $32.00 | $6.40 | — | ✓ | product/cjc-1295-dac-5mg/ |
| Cortagen | 20mg | $31.00 | $1.55 | — | ✓ | product/cortagen-20mg/ |
| Dihexa [backlog] | 50mg | $83.00 | $1.66 | — | ✗ | product/dihexa-50mg/ |
| DSIP | 10mg | $37.00 | $3.70 | — | ✓ | product/dsip-10mg/ |
| Epitalon | 10mg | $24.00 | $2.40 | — | ✓ | product/epithalon-quality-10mg-for-research-purereactive-peptides/ |
| Epitalon | 50mg | $85.00 | $1.70 | — | ✓ | product/epithalon-50mg/ |
| Glutathione | 1500mg | $42.00 | $0.03 | — | ✓ | product/glutathione-1500mg/ |
| Hexarelin | 5mg | $44.00 | $8.80 | — | ✓ | product/hexarelin-5mg/ |
| IGF-1 LR3 | 1mg | $55.00 | $55.00 | — | ✓ | product/igf1-ir3-1mg/ |
| Ipamorelin | 10mg | $21.00 | $2.10 | — | ✓ | product/ipamorelin-10mg/ |
| KPV | 5mg | $28.00 | $5.60 | — | ✗ | product/kpv-5mg/ |
| KPV | 10mg | $52.00 | $5.20 | — | ✓ | product/kpv-10mg/ |
| LL-37 | 5mg | $49.00 | $9.80 | — | ✓ | product/ll-37-5mg/ |
| Mazdutide [backlog] | 10mg | $84.00 | $8.40 | — | ✓ | product/mazdutide-10mg/ |
| Melanotan I | 10mg | $28.00 | $2.80 | — | ✓ | product/melanotan-1-10mg/ |
| Melanotan II | 10mg | $30.00 | $3.00 | — | ✓ | product/melanotan-2-10mg/ |
| MOTS-C | 10mg | $28.00 | $2.80 | — | ✓ | product/mots-c-10mg/ |
| MOTS-C | 20mg | $62.00 | $3.10 | — | ✓ | product/mots-c-20mg/ |
| NAD+ | 500mg | $45.00 | $0.09 | — | ✓ | product/nad-500mg/ |
| NAD+ | 1000mg | $80.00 | $0.08 | — | ✓ | product/nad-1000mg/ |
| Ovagen [backlog] | 20mg | $48.00 | $2.40 | — | ✓ | product/ovagen-20mg/ |
| Oxytocin | 10mg | $42.00 | $4.20 | — | ✓ | product/oxytocin-10mg/ |
| Pinealon | 20mg | $32.00 | $1.60 | — | ✓ | product/pinealon-20mg/ |
| PNC-27 [backlog] | 5mg | $50.00 | $10.00 | — | ✓ | product/pnc-27-5mg/ |
| PNC-27 [backlog] | 10mg | $65.00 | $6.50 | — | ✓ | product/shop-pure-pnc-27-peptide-purerx-peptides/ |
| PT-141 | 10mg | $18.00 | $1.80 | — | ✓ | product/pt-141-10mg-shop-pt-141-10mg/ |
| Retatrutide (listed as Reta) | 15mg | $99.00 | $6.60 | — | ✓ | product/reta-15mg-shop-reta-15mg/ |
| Retatrutide (listed as Reta) | 30mg | $185.00 | $6.17 | — | ✓ | product/reta-30mg-shop-reta-30mg/ |
| Retatrutide (listed as Reta) | 60mg | $220.00 | $3.67 | — | ✗ | product/reta-60mg/ |
| Selank | 10mg | $28.00 | $2.80 | — | ✓ | product/selank-10mg/ |
| Semaglutide (listed as Sema) | 15mg | $65.00 | $4.33 | — | ✓ | product/sema-15mg-research/ |
| Semaglutide (listed as Sema) | 30mg | $115.00 | $3.83 | — | ✗ | product/sema-30mg-shop-sema-30mg/ |
| Semax | 10mg | $18.00 | $1.80 | — | ✓ | product/semax-10mg/ |
| Sermorelin | 10mg | $36.00 | $3.60 | — | ✓ | product/sermorelin-10mg/ |
| SLU-PP-332 [backlog] | 5mg | $51.00 | $10.20 | — | ✓ | product/slu-pp-332-5mg/ |
| SS-31 | 50mg | $125.00 | $2.50 | — | ✓ | product/ss-31-50mg/ |
| Survodutide [backlog] | 20mg | $95.00 | $4.75 | — | ✓ | product/survodutide-20mg/ |
| TB-500 | 10mg | $45.00 | $4.50 | — | ✓ | product/thymosin-beta-4-tb-500-10mg/ |
| Tesamorelin | 10mg | $61.00 | $6.10 | — | ✓ | product/tesamorelin-10mg/ |
| Testagen [backlog] | 20mg | $34.00 | $1.70 | — | ✓ | product/testagen-20mg/ |
| Thymosin Alpha-1 | 10mg | $68.00 | $6.80 | — | ✓ | product/thymosin-alpha-1-10mg/ |
| Tirzepatide (listed as Tirz) | 30mg | $105.00 | $3.50 | — | ✓ | product/shop-tirz-30mg/ |
| Tirzepatide (listed as Tirz) | 60mg | $145.00 | $2.42 | — | ✓ | product/tirz-60mg/ |
| Tirzepatide (listed as Tirz) | 120mg | $240.00 | $2.00 | — | ✓ | product/tirz-120mg/ |
| Vilon [backlog] | 20mg | $56.00 | $2.80 | — | ✓ | product/vilon-20mg/ |
| VIP | 10mg | $60.00 | $6.00 | — | ✓ | product/unlock-benefits-of-vip-peptide/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 5mg | $31.00 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $133.00 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $90.00 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $75.00 | not published | ✓ |

### Sprays: none
### Excluded: no parseable size (Rule 4), out-of-scope (SARMs/Rx/cosmetics) — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Peptide Giants
- **slug:** peptide-giants | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** peptidegiants.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** Check product-level sale_price each refresh; PP code stacks.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 5mg | $32.99 | $6.60 | $66.00 | ✓ | product/5-amino-1mq/ |
| 5-Amino-1MQ | 50mg | $65.99 | $1.32 | $132.00 | ✓ | product/5-amino-1mq/ |
| Adipotide | 5mg | $44.99 | $9.00 | $90.00 | ✓ | product/adipotide-5mg/ |
| AOD-9604 | 2mg | $21.99 | $10.99 | $44.00 | ✓ | product/aod-9604/ |
| AOD-9604 | 5mg | $49.49 | $9.90 | $99.00 | ✓ | product/aod-9604/ |
| AOD-9604 | 10mg | $73.69 | $7.37 | $147.40 | ✓ | product/aod-9604/ |
| BPC-157 | 5mg | $25.29 | $5.06 | $50.60 | ✓ | product/bpc-157/ |
| BPC-157 | 10mg | $43.99 | $4.40 | $88.00 | ✓ | product/bpc-157/ |
| Cagrilintide | 5mg | $49.49 | $9.90 | $99.00 | ✓ | product/cagrilintide/ |
| Cagrilintide | 10mg | $98.99 | $9.90 | $198.00 | ✓ | product/cagrilintide/ |
| Cibinetide | 6mg | $38.49 | $6.42 | $77.00 | ✓ | product/ara-290/ |
| Cibinetide | 10mg | $52.99 | $5.30 | $106.00 | ✗ | product/ara-290/ |
| CJC-1295 | 5mg | $43.99 | $8.80 | $88.00 | ✓ | product/cjc-1295-no-dac/ |
| CJC-1295 | 5mg | $49.49 | $9.90 | $99.00 | ✓ | product/cjc-1295-dac-5mg/ |
| CJC-1295 | 10mg | $82.49 | $8.25 | $165.00 | ✓ | product/cjc-1295-no-dac/ |
| DSIP | 5mg | $21.99 | $4.40 | $44.00 | ✓ | product/dsip/ |
| DSIP | 10mg | $41.79 | $4.18 | $83.60 | ✓ | product/dsip/ |
| Epitalon | 10mg | $32.99 | $3.30 | $66.00 | ✓ | product/epithalon/ |
| Epitalon | 50mg | $82.49 | $1.65 | $165.00 | ✓ | product/epithalon/ |
| FOXO4-DRI [backlog] | 10mg | $199.99 | $20.00 | $400.00 | ✓ | product/foxo4-dri-10mg/ |
| GHK-Cu | 50mg | $41.79 | $0.84 | $83.60 | ✓ | product/ghk-cu/ |
| GHK-Cu | 100mg | $54.99 | $0.55 | $110.00 | ✓ | product/ghk-cu/ |
| Glutathione | 500mg | $40.99 | $0.08 | $82.00 | ✓ | product/glutathione/ |
| Glutathione | 1500mg | $59.99 | $0.04 | $120.00 | ✓ | product/glutathione/ |
| Hexarelin | 5mg | $54.90 | $10.98 | $110.00 | ✓ | product/hexarelin-acetate-5mg/ |
| IGF-1 LR3 | 1mg | $65.99 | $65.99 | $132.00 | ✓ | product/igf-1-lr3-1mg/ |
| Ipamorelin | 5mg | $32.99 | $6.60 | $66.00 | ✓ | product/ipamorelin/ |
| Ipamorelin | 10mg | $49.49 | $4.95 | $99.00 | ✓ | product/ipamorelin/ |
| Kisspeptin-10 | 5mg | $27.49 | $5.50 | $55.00 | ✓ | product/kisspeptin-10/ |
| Kisspeptin-10 | 10mg | $37.49 | $3.75 | $77.00 | ✓ | product/kisspeptin-10/ |
| KPV | 10mg | $38.49 | $3.85 | $77.00 | ✓ | product/kpv/ |
| LL-37 | 5mg | $44.49 | $8.90 | $89.99 | ✓ | product/ll37-5mg/ |
| Melanotan I | 10mg | $39.99 | $4.00 | $80.00 | ✓ | product/melanotan-1/ |
| Melanotan II | 10mg | $38.49 | $3.85 | $77.00 | ✓ | product/melanotan-2-10mg/ |
| MOTS-C | 10mg | $57.74 | $5.77 | $115.50 | ✓ | product/mots-c/ |
| MOTS-C | 20mg | $87.99 | $4.40 | $176.00 | ✗ | product/mots-c/ |
| MOTS-C | 40mg | $148.49 | $3.71 | $297.00 | ✓ | product/mots-c/ |
| NAD+ | 100mg | $32.99 | $0.33 | $66.00 | ✓ | product/nad/ |
| NAD+ | 500mg | $63.79 | $0.13 | $127.60 | ✓ | product/nad/ |
| NAD+ | 1000mg | $98.99 | $0.10 | $198.00 | ✓ | product/nad/ |
| Oxytocin | 2mg | $21.99 | $10.99 | $44.00 | ✓ | product/oxytocin-acetate/ |
| Oxytocin | 5mg | $27.49 | $5.50 | $55.00 | ✓ | product/oxytocin-acetate/ |
| Oxytocin | 10mg | $49.49 | $4.95 | $99.00 | ✓ | product/oxytocin-acetate/ |
| PEG-MGF [backlog] | 2mg | $39.99 | $20.00 | $80.00 | ✓ | product/peg-mgf-2mg/ |
| PG-1SG [coded, UNVERIFIED] | 5mg | $32.99 | $6.60 | $66.00 | ✓ | product/pg-1sg/ |
| PG-1SG [coded, UNVERIFIED] | 10mg | $49.49 | $4.95 | $99.00 | ✓ | product/pg-1sg/ |
| PG-2TZ [coded, UNVERIFIED] | 10mg | $43.99 | $4.40 | $88.00 | ✓ | product/pg-2tz/ |
| PG-2TZ [coded, UNVERIFIED] | 15mg | $52.79 | $3.52 | $105.60 | ✓ | product/pg-2tz/ |
| PG-2TZ [coded, UNVERIFIED] | 20mg | $69.29 | $3.46 | $138.60 | ✓ | product/pg-2tz/ |
| PG-2TZ [coded, UNVERIFIED] | 30mg | $82.49 | $2.75 | $165.00 | ✓ | product/pg-2tz/ |
| PG-2TZ [coded, UNVERIFIED] | 60mg | $126.49 | $2.11 | $253.00 | ✓ | product/pg-2tz/ |
| PG-2TZ [coded, UNVERIFIED] | 120mg | $236.49 | $1.97 | $473.00 | ✓ | product/pg-2tz/ |
| PT-141 | 10mg | $32.99 | $3.30 | $66.00 | ✓ | product/pt-141-10mg/ |
| Retatrutide (listed as PG-3RT) | 5mg | $65.99 | $13.20 | $132.00 | ✓ | product/pg-3rt/ |
| Retatrutide (listed as PG-3RT) | 10mg | $76.99 | $7.70 | $154.00 | ✓ | product/pg-3rt/ |
| Retatrutide (listed as PG-3RT) | 20mg | $129.99 | $6.50 | $260.00 | ✓ | product/pg-3rt/ |
| Retatrutide (listed as PG-3RT) | 30mg | $219.99 | $7.33 | $440.00 | ✓ | product/pg-3rt/ |
| Retatrutide (listed as PG-3RT) | 40mg | $247.49 | $6.19 | $495.00 | ✓ | product/pg-3rt/ |
| Retatrutide (listed as PG-3RT) | 60mg | $302.49 | $5.04 | $605.00 | ✓ | product/pg-3rt/ |
| Selank | 5mg | $32.99 | $6.60 | $66.00 | ✓ | product/selank/ |
| Selank | 10mg | $59.99 | $6.00 | $120.00 | ✓ | product/selank/ |
| Semax | 5mg | $27.49 | $5.50 | $55.00 | ✓ | product/semax/ |
| Semax | 10mg | $38.49 | $3.85 | $77.00 | ✓ | product/semax/ |
| Sermorelin | 5mg | $49.49 | $9.90 | $99.00 | ✓ | product/sermorelin-acetate/ |
| Sermorelin | 10mg | $76.99 | $7.70 | $154.00 | ✓ | product/sermorelin-acetate/ |
| SNAP-8 [backlog] | 10mg | $43.99 | $4.40 | $88.00 | ✓ | product/snap-8-10mg/ |
| SS-31 | 10mg | $76.99 | $7.70 | $154.00 | ✓ | product/ss-31/ |
| SS-31 | 50mg | $174.99 | $3.50 | $350.00 | ✓ | product/ss-31/ |
| TB-500 | 5mg | $32.99 | $6.60 | $66.00 | ✓ | product/tb-500-thymosin-b4-acetate/ |
| TB-500 | 10mg | $49.49 | $4.95 | $99.00 | ✓ | product/tb-500-thymosin-b4-acetate/ |
| Tesamorelin | 10mg | $87.99 | $8.80 | $176.00 | ✓ | product/tesamorelin/ |
| Tesamorelin | 20mg | $131.99 | $6.60 | $264.00 | ✓ | product/tesamorelin/ |
| Thymosin Alpha-1 | 5mg | $36.25 | $7.25 | $72.50 | ✓ | product/thymosin-alpha-1/ |
| Thymosin Alpha-1 | 10mg | $65.99 | $6.60 | $132.00 | ✓ | product/thymosin-alpha-1/ |
| VIP | 10mg | $82.49 | $8.25 | $165.00 | ✓ | product/vip/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $60.49 | 5/5 (published) | ✓ | product/cjc1295-no-dac-5mgipamorelin-5mg/ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $82.49 | not published | ✓ | product/glow-70mg/ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $131.99 | not published | ✓ | product/klow-80mg/ |
| PG-3RT+C [coded, UNVERIFIED] |  | 12.5mg | $114.99 | not published | ✓ | product/pg-3rtc/ |
| PG-3RT+C [coded, UNVERIFIED] |  | 25mg | $180.00 | not published | ✓ | product/pg-3rtc/ |
| PG-3RT+C [coded, UNVERIFIED] |  | 37.5mg | $249.99 | not published | ✓ | product/pg-3rtc/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $82.49 | not published | ✓ | product/bpc-157-tb-500/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $49.49 | not published | ✓ | product/bpc-157-tb-500/ |

### Sprays: none
### Excluded: blend leak (Rule A): bpc-157 + cjc-1295 — blend-registry candidate, multi-vial kit / pack (by name), out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Nura Peptide
- **slug:** nura-peptide | **code:** PROFPEPTIDE | **discount:** 25% off | **url:** nurapeptide.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** No known cart-level auto-coupon; product-level sale_price priced if present (re-verify at write).

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $55.00 | $5.50 | $65.00 | ✓ | product/5-amino-1mq-10mg/ |
| 5-Amino-1MQ | 50mg | $95.00 | $1.90 | — | ✓ | product/5-amino-1mq-10mg/ |
| AOD-9604 | 5mg | $40.00 | $8.00 | — | ✓ | product/aod-9604-5mg/ |
| BPC-157 | 10mg | $65.00 | $6.50 | — | ✓ | product/bpc-157-10mg/ |
| CJC-1295 | 5mg | $67.00 | $13.40 | — | ✓ | product/cjc-1295-with-dac-5mg/ |
| CJC-1295 | 5mg | $78.00 | $15.60 | — | ✓ | product/cjc-1295-no-dac-5mg/ |
| DSIP | 5mg | $33.00 | $6.60 | — | ✓ | product/dsip-5mg/ |
| Epitalon | 10mg | $49.00 | $4.90 | — | ✓ | product/epitalon-10mg/ |
| GHK-Cu | 100mg | $55.00 | $0.55 | $60.00 | ✓ | product/ghk-cu-100mg/ |
| Glutathione | 1500mg | $73.00 | $0.05 | — | ✓ | product/glutathione-peptide-1500mg/ |
| IGF-1 LR3 | 1mg | $65.00 | $65.00 | — | ✓ | product/igf1-lr3-1mg/ |
| Ipamorelin | 10mg | $63.00 | $6.30 | — | ✓ | product/ipamorelin-10mg/ |
| KPV | 10mg | $45.00 | $4.50 | — | ✓ | product/kpv-10mg/ |
| Melanotan II | 10mg | $40.00 | $4.00 | — | ✓ | product/melanotan-ii-10mg/ |
| MOTS-C | 10mg | $45.00 | $4.50 | — | ✓ | product/mots-c-10mg/ |
| NAD+ | 500mg | $65.00 | $0.13 | — | ✓ | product/nad-500mg/ |
| PT-141 | 10mg | $40.00 | $4.00 | — | ✓ | product/pt-141-peptide-10mg/ |
| Retatrutide (listed as GLP-3R) | 10mg | $65.00 | $6.50 | — | ✓ | product/glp-3r/ |
| Retatrutide (listed as GLP-3R) | 30mg | $180.00 | $6.00 | — | ✓ | product/glp-3r/ |
| Selank | 10mg | $45.00 | $4.50 | — | ✓ | product/selank-peptide-10mg/ |
| Semaglutide (listed as GLP-1SG) | 10mg | $69.00 | $6.90 | — | ✓ | product/glp-1sg-10mg/ |
| Semax | 10mg | $45.00 | $4.50 | — | ✓ | product/semax-peptide-10mg/ |
| Sermorelin | 5mg | $45.00 | $9.00 | — | ✓ | product/sermorelin-5mg/ |
| SS-31 | 50mg | $145.00 | $2.90 | — | ✓ | product/ss-31-50mg/ |
| TB-500 | 10mg | $63.00 | $6.30 | — | ✓ | product/tb-500-10mg/ |
| Tesamorelin | 10mg | $80.00 | $8.00 | — | ✓ | product/tesamorelin/ |
| Tesamorelin | 20mg | $140.00 | $7.00 | — | ✓ | product/tesamorelin/ |
| Thymosin Alpha-1 | 10mg | $85.00 | $8.50 | — | ✓ | product/thymosin-alpha-1/ |
| Tirzepatide (listed as GLP-2T) | 10mg | $69.00 | $6.90 | $79.00 | ✓ | product/glp-2t-2/ |
| Tirzepatide (listed as GLP-2T) | 30mg | $170.00 | $5.67 | — | ✓ | product/glp-2t-2/ |
| Tirzepatide (listed as GLP-2T) | 60mg | $250.00 | $4.17 | — | ✓ | product/glp-2t-2/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $55.00 | not published | ✓ | product/ipamorelin-cjc-1295-no-dac-5-5mg/ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $100.00 | not published | ✓ | product/glow-bpc-157-ghk-cu-tb-500-blend/ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $110.00 | not published | ✓ | product/klow-bpc-157-ghk-cu-tb-500-kpv-blend/ |
| Retatrutide/Cagrilintide | Retatrutide/Cagrilintide | 15mg | $105.00 | not published | ✓ | product/glp-3r-cag-12-5mg-2-5mg/ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 16mg | $109.00 | not published | ✓ | product/tesamorelin-ipamorelin-13-3-mg/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $106.00 | not published | ✓ | product/bpc-157-tb-500-5-5mg/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $53.00 | not published | ✓ | product/bpc-157-tb-500-5-5mg/ |

### Sprays / strips (separate format, no $/mg)
| Product | Size | Base | Stock |
| --- | --- | --- | --- |
| NAD+ (spray) | 500mg | $80.00 | ✓ |
| PT-141 (spray) | — | $69.00 | ✓ |
| Selank (spray) | 10mg | $75.00 | ✓ |
| Semax (spray) | 10mg | $75.00 | ✓ |

### Excluded: multi-vial kit / pack (by name), oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Legendary Peptides
- **slug:** legendary-peptides | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** www.legendarypeptides.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** No known cart-level auto-coupon; free shipping over $200 (not a price discount). Re-verify at write.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $60.00 | $6.00 | — | ✓ | product/5-amino-1mq/ |
| Adamax | 10mg | $50.00 | $5.00 | — | ✓ | product/adamax-984da/ |
| BPC-157 | 10mg | $45.00 | $4.50 | — | ✓ | product/bpc-157-10-mg/ |
| Cagrilintide | 10mg | $87.00 | $8.70 | — | ✓ | product/cagrilintide-10mg/ |
| DSIP | 10mg | $45.00 | $4.50 | — | ✓ | product/dsip-10mg/ |
| Epitalon | 50mg | $95.00 | $1.90 | — | ✓ | product/epithalon-50mg/ |
| GHK-Cu | 90mg | $30.00 | $0.33 | — | ✓ | product/ghk-cu-100-mg/ |
| GHK-Cu | 100mg | $55.00 | $0.55 | — | ✓ | product/ghk-cu-100-mg/ |
| Glutathione | 600mg | $50.00 | $0.08 | — | ✓ | product/glutathione-600-mg/ |
| Kisspeptin-10 | 10mg | $50.00 | $5.00 | — | ✓ | product/kisspeptin-10mg/ |
| KPV | 10mg | $55.00 | $5.50 | — | ✓ | product/kpv-10mg/ |
| Melanotan II | 10mg | $45.00 | $4.50 | — | ✓ | product/melanotan-ii-10mg/ |
| MOTS-C | 40mg | $99.00 | $2.48 | — | ✓ | product/mots-c-40-mg/ |
| NAD+ | 500mg | $54.00 | $0.11 | — | ✓ | product/nad-500-mg/ |
| PT-141 | 10mg | $40.00 | $4.00 | — | ✓ | product/pt-141/ |
| Retatrutide (listed as Reta) | 10mg | $60.00 | $6.00 | — | ✓ | product/reta/ |
| Retatrutide (listed as Reta) | 15mg | $85.00 | $5.67 | — | ✓ | product/reta/ |
| Retatrutide (listed as Reta) | 20mg | $105.00 | $5.25 | — | ✗ | product/reta/ |
| Retatrutide (listed as Reta) | 30mg | $145.00 | $4.83 | — | ✓ | product/reta/ |
| Selank | 10mg | $45.00 | $4.50 | — | ✓ | product/selank-10-mg/ |
| Semax | 10mg | $45.00 | $4.50 | — | ✓ | product/semax-10-mg/ |
| Sermorelin | 5mg | $48.00 | $9.60 | — | ✓ | product/sermorelin-5mg/ |
| SS-31 | 10mg | $45.00 | $4.50 | — | ✓ | product/ss-31/ |
| SS-31 | 50mg | $130.00 | $2.60 | — | ✓ | product/ss-31/ |
| TB-500 | 10mg | $45.00 | $4.50 | — | ✓ | product/tb-500-10-mg/ |
| Tesamorelin | 10mg | $59.00 | $5.90 | — | ✓ | product/tesamorelin-10-mg/ |
| Thymosin Alpha-1 | 10mg | $65.00 | $6.50 | — | ✓ | product/thymosin-alpha-1/ |
| Tirzepatide (listed as Tirz) | 60mg | $150.00 | $2.50 | — | ✓ | product/tirz-60mg/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $55.00 | 5/5 (published) | ✓ | product/cjc-ipa-no-dac-10mg/ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $69.00 | not published | ✓ | product/glow-70-mg/ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $94.50 | not published | ✓ | product/klow-80mg/ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 15mg | $95.00 | 10/5 (published) | ✓ | product/tesamorelin-10mg-ipamorelin-5mg/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $70.00 | 10/10 (published) | ✓ | product/bpc-157-10mg-tb-500-10mg/ |

### Sprays: none
### Excluded: clinical/other, multi-vial kit / pack (by name), out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: 99 Purity Peptides
- **slug:** 99-purity-peptides | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** 99puritypeptides.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** No product-level sale in the API (salePrice null across the catalog); re-verify at write.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 50mg | $70.00 | $1.40 | — | ✓ | products/5-amino-1mq |
| AOD-9604 | 5mg | $70.00 | $14.00 | — | ✓ | products/aod-9604-5mg-10mg |
| AOD-9604 | 10mg | $105.00 | $10.50 | — | ✓ | products/aod-9604-5mg-10mg |
| BPC-157 | 5mg | $55.00 | $11.00 | — | ✓ | products/bpc-157 |
| BPC-157 | 10mg | $75.00 | $7.50 | — | ✓ | products/bpc-157 |
| Cagrilintide | 10mg | $90.00 | $9.00 | — | ✓ | products/cagrilintide |
| Cibinetide | 10mg | $70.00 | $7.00 | — | ✓ | products/ara-290-10mg |
| CJC-1295 | 5mg | $75.00 | $15.00 | — | ✓ | products/cjc-1295-dac-5mg |
| CJC-1295 | 10mg | $75.00 | $7.50 | — | ✓ | products/cjc-1295-no-dac-10mg |
| DSIP | 10mg | $60.00 | $6.00 | — | ✓ | products/dsip-delta-sleep-inducing-peptide |
| Epitalon | 10mg | $60.00 | $6.00 | — | ✓ | products/epithalon |
| Epitalon | 50mg | $85.00 | $1.70 | — | ✓ | products/epithalon |
| GHK-Cu | 50mg | $60.00 | $1.20 | — | ✓ | products/ghk-cu |
| GHK-Cu | 100mg | $80.00 | $0.80 | — | ✓ | products/ghk-cu |
| GHRP-2 | 10mg | $65.00 | $6.50 | — | ✓ | products/ghrp-2-10mg |
| GHRP-6 | 10mg | $65.00 | $6.50 | — | ✓ | products/ghrp-6-10mg |
| Glutathione | 600mg | $65.00 | $0.11 | — | ✓ | products/glutathione-600-1500 |
| Glutathione | 1500mg | $85.00 | $0.06 | — | ✓ | products/glutathione-600-1500 |
| Ipamorelin | 5mg | $65.00 | $13.00 | — | ✓ | products/ipamorelin |
| Ipamorelin | 10mg | $85.00 | $8.50 | — | ✓ | products/ipamorelin |
| Kisspeptin-10 | 10mg | $75.00 | $7.50 | — | ✓ | products/kisspeptin |
| KPV | 10mg | $70.00 | $7.00 | — | ✓ | products/kpv |
| Melanotan I | 10mg | $55.00 | $5.50 | — | ✓ | products/mt-1-10mg |
| Melanotan II | 10mg | $55.00 | $5.50 | — | ✓ | products/mt-2-melanotan-ii |
| MOTS-C | 10mg | $70.00 | $7.00 | — | ✓ | products/mots-c |
| MOTS-C | 40mg | $115.00 | $2.88 | — | ✓ | products/mots-c |
| PT-141 | 10mg | $70.00 | $7.00 | — | ✓ | products/pt-141-bremelanotide |
| Retatrutide | 10mg | $105.00 | $10.50 | $140.00 | ✓ | products/retatrutide |
| Retatrutide | 20mg | $145.00 | $7.25 | — | ✓ | products/retatrutide |
| Retatrutide | 30mg | $185.00 | $6.17 | — | ✓ | products/retatrutide |
| Retatrutide | 60mg | $285.00 | $4.75 | — | ✓ | products/retatrutide |
| Selank | 10mg | $65.00 | $6.50 | — | ✓ | products/selank |
| Semaglutide | 5mg | $65.00 | $13.00 | — | ✓ | products/semaglutide |
| Semaglutide | 10mg | $85.00 | $8.50 | — | ✓ | products/semaglutide |
| Semaglutide | 20mg | $125.00 | $6.25 | — | ✓ | products/semaglutide |
| Semaglutide | 30mg | $165.00 | $5.50 | — | ✓ | products/semaglutide |
| Semax | 10mg | $65.00 | $6.50 | — | ✓ | products/semax |
| Semax | 30mg | $95.00 | $3.17 | — | ✓ | products/semax |
| Sermorelin | 10mg | $80.00 | $8.00 | — | ✓ | products/sermorelin |
| Sermorelin | 20mg | $115.00 | $5.75 | — | ✓ | products/sermorelin |
| SNAP-8 [backlog] | 10mg | $70.00 | $7.00 | — | ✓ | products/snap-8 |
| SNAP-8 [backlog] | 20mg | $90.00 | $4.50 | — | ✓ | products/snap-8 |
| SS-31 | 10mg | $85.00 | $8.50 | — | ✓ | products/ss-31-elamipretide |
| SS-31 | 50mg | $175.00 | $3.50 | — | ✓ | products/ss-31-elamipretide |
| TB-500 | 5mg | $65.00 | $13.00 | — | ✓ | products/tb-500 |
| TB-500 | 10mg | $100.00 | $10.00 | — | ✓ | products/tb-500 |
| Tesamorelin | 10mg | $95.00 | $9.50 | — | ✓ | products/tesamorelin |
| Tesamorelin | 20mg | $135.00 | $6.75 | — | ✓ | products/tesamorelin |
| Thymosin Alpha-1 | 10mg | $80.00 | $8.00 | — | ✓ | products/thymosin-alpha-1 |
| VIP | 10mg | $85.00 | $8.50 | — | ✓ | products/vip-vasoactive-intestinal-peptide |

### Sprays / strips (separate format, no $/mg)
| Product | Size | Base | Stock |
| --- | --- | --- | --- |
| BPC-157 (spray) | 5mg | $75.00 | ✓ |
| BPC-157 (spray) | 10mg | $85.00 | ✓ |
| Epitalon (spray) | 10mg | $75.00 | ✓ |
| Epitalon (spray) | 50mg | $85.00 | ✓ |
| GHK-Cu (spray) | 50mg | $75.00 | ✓ |
| GHK-Cu (spray) | 100mg | $85.00 | ✓ |
| NAD+ (spray) | — | $75.00 | ✓ |
| NAD+ (spray) | — | $85.00 | ✓ |
| Selank (spray) | 100mcg | $75.00 | ✓ |
| Selank (spray) | 300mcg | $85.00 | ✓ |

### Excluded: blend leak (Rule A): selank + semax — blend-registry candidate, blend total unresolved (Rule 4): no total in name, no parseable size (Rule 4), out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: BioPure Peptides
- **slug:** biopure-peptides | **code:** PROFPEPTIDE | **discount:** 5% off | **url:** biopurepeptides.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** No product-level sale (on_sale=false across all 38); re-verify at write.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| AOD-9604 | 10mg | $74.99 | $7.50 | — | ✓ | product/aod-9604-10/ |
| BPC-157 | 10mg | $79.99 | $8.00 | — | ✓ | product/bpc-157-10mg/ |
| Cibinetide | 20mg | $89.99 | $4.50 | — | ✓ | product/ara-290-20mg/ |
| DSIP | 5mg | $59.99 | $12.00 | — | ✗ | product/dsip/ |
| DSIP | 10mg | $99.99 | $10.00 | — | ✓ | product/dsip-10mg/ |
| Epitalon | 50mg | $149.99 | $3.00 | — | ✓ | product/epithalon-epitalon/ |
| GHK-Cu | 50mg | $74.99 | $1.50 | — | ✓ | product/ghk-cu-lyophilized/ |
| Glutathione | 600mg | $99.99 | $0.17 | — | ✗ | product/l-glutathione-600mg/ |
| Glutathione | 6000mg | $119.99 | $0.02 | — | ✓ | product/l-glutathione-6000mg/ |
| KPV | 10mg | $79.99 | $8.00 | — | ✓ | product/kpv-10mg/ |
| LL-37 | 10mg | $119.99 | $12.00 | — | ✓ | product/ll37-10mg/ |
| Melanotan II | 10mg | $79.99 | $8.00 | — | ✓ | product/melanotan-ii/ |
| MOTS-C | 10mg | $79.99 | $8.00 | — | ✓ | product/mots-c/ |
| NAD+ | 1000mg | $169.99 | $0.17 | — | ✓ | product/nad/ |
| PT-141 | 10mg | $64.99 | $6.50 | — | ✓ | product/pt-141/ |
| Retatrutide | 10mg | $179.99 | $18.00 | — | ✓ | product/reta-10mg/ |
| Retatrutide | 30mg | $279.99 | $9.33 | — | ✓ | product/reta-30mg/ |
| Selank | 5mg | $49.99 | $10.00 | — | ✓ | product/selank-5mg/ |
| Selank | 20mg | $74.99 | $3.75 | — | ✓ | product/selank-20mg/ |
| Semax | 20mg | $84.99 | $4.25 | — | ✓ | product/semax-20mg/ |
| SS-31 | 10mg | $99.99 | $10.00 | — | ✓ | product/ss-31/ |
| TB-500 | 10mg | $104.99 | $10.50 | — | ✓ | product/tb500-thymosin-beta-4-10mg/ |
| Tesamorelin | 6mg | $74.99 | $12.50 | — | ✗ | product/tesamorelin-6mg/ |
| Tesamorelin | 10mg | $99.99 | $10.00 | — | ✓ | product/tesamorelin-10mg/ |
| Thymosin Alpha-1 | 10mg | $119.99 | $12.00 | — | ✓ | product/ta1-thymosin-alpha-10mg/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $109.99 | not published | ✓ | product/cjc-1295-ipamorelin/ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 10mg | $94.99 | 5/5 (published) | ✓ | product/tesamorelin-ipamorelin-blend/ |

### Sprays: none
### Excluded: blend leak (Rule A): thymalin + thymosin-alpha-1 — blend-registry candidate, blend total unresolved (Rule 4): no total in name, manually excluded — 'BPC Wolverine + KPV - 14.5mg' is a 3-component blend (Wolverine BPC-157/TB-500 + KPV) that the shared classifier mis-reads as a KPV 14.5mg SINGLE ($129.99 = $8.97/mg of 'KPV', wrong). Not in the blend registry, so excluded here rather than shipped as a bad single., no parseable size (Rule 4), out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Real Peptides
- **slug:** real-peptides | **code:** PROFPEPTIDE | **discount:** 20% off | **url:** www.realpeptides.co
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** No cart-level auto-discount; base = current price (product sale_price auto-applied per rule). Re-verify at write.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $70.00 | $7.00 | — | ✓ | products/5-amino-1mq/ |
| 5-Amino-1MQ | 50mg | $150.00 | $3.00 | — | ✓ | products/5-amino-1mq/ |
| Adamax | 10mg | $140.00 | $14.00 | — | ✓ | products/adamax-peptide/ |
| AOD-9604 | 5mg | $50.00 | $10.00 | — | ✗ | products/aod9604/ |
| AOD-9604 | 10mg | $70.00 | $7.00 | — | ✓ | products/aod9604/ |
| BPC-157 | 10mg | $90.00 | $9.00 | — | ✓ | products/bpc-157-peptide/ |
| Cagrilintide | 5mg | $160.00 | $32.00 | — | ✓ | products/calgrilintide-10mg/ |
| Cagrilintide | 10mg | $325.00 | $32.50 | — | ✓ | products/calgrilintide-10mg/ |
| Cartalax [backlog] | 20mg | $70.00 | $3.50 | — | ✓ | products/cartalax-peptide/ |
| Cibinetide | 16mg | $85.00 | $5.31 | — | ✗ | products/ara-290/ |
| CJC-1295 | 5mg | $65.00 | $13.00 | — | ✓ | products/cjc-1295-no-dac/ |
| CJC-1295 | 10mg | $90.00 | $9.00 | — | ✓ | products/cjc-1295-no-dac/ |
| DSIP | 5mg | $50.00 | $10.00 | — | ✓ | products/dsip-peptide/ |
| DSIP | 10mg | $80.00 | $8.00 | — | ✗ | products/dsip-peptide/ |
| Epitalon | 10mg | $50.00 | $5.00 | — | ✓ | products/epithalon-peptide/ |
| FOXO4-DRI [backlog] | 10mg | $300.00 | $30.00 | — | ✓ | products/foxo4-dri/ |
| GHK-Cu | 50mg | $55.00 | $1.10 | — | ✓ | products/ghk-cu-copper-peptide/ |
| GHK-Cu | 100mg | $105.00 | $1.05 | — | ✓ | products/ghk-cu-copper-peptide/ |
| GHRP-2 | 10mg | $50.00 | $5.00 | — | ✓ | products/ghrp-2/ |
| GHRP-6 | 10mg | $50.00 | $5.00 | — | ✓ | products/ghrp-6/ |
| Glutathione | 600mg | $85.00 | $0.14 | — | ✗ | products/glutathione/ |
| Hexarelin | 5mg | $60.00 | $12.00 | — | ✓ | products/hexarelin/ |
| IGF-1 LR3 | 0.1mg | $40.00 | $400.00 | — | ✓ | products/igf-1-lr3/ |
| IGF-1 LR3 | 1mg | $90.00 | $90.00 | — | ✓ | products/igf-1-lr3/ |
| Ipamorelin | 10mg | $80.00 | $8.00 | — | ✓ | products/ipamorelin/ |
| Kisspeptin-10 | 10mg | $100.00 | $10.00 | — | ✓ | products/kisspeptin-10/ |
| KPV | 10mg | $85.00 | $8.50 | — | ✓ | products/kpv-5mg/ |
| LL-37 | 5mg | $80.00 | $16.00 | — | ✓ | products/ll-37/ |
| Melanotan I | 10mg | $60.00 | $6.00 | — | ✓ | products/melanotan-1/ |
| Melanotan II | 10mg | $50.00 | $5.00 | — | ✓ | products/melanotan-2-mt2-10mg/ |
| MK-677 | 10mg | $150.00 | $15.00 | — | ✓ | products/mk-677/ |
| MOTS-C | 10mg | $90.00 | $9.00 | — | ✓ | products/mots-c-peptide/ |
| MOTS-C | 40mg | $280.00 | $7.00 | — | ✓ | products/mots-c-peptide/ |
| NAD+ | 500mg | $125.00 | $0.25 | — | ✓ | products/nad-100mg/ |
| NAD+ | 1000mg | $240.00 | $0.24 | — | ✓ | products/nad-100mg/ |
| Oxytocin | 5mg | $70.00 | $14.00 | — | ✓ | products/oxytocin/ |
| Oxytocin | 10mg | $90.00 | $9.00 | — | ✓ | products/oxytocin/ |
| Pinealon | 10mg | $50.00 | $5.00 | — | ✓ | products/pinealon/ |
| PT-141 | 10mg | $65.00 | $6.50 | — | ✓ | products/pt-141-bremelanotide/ |
| Selank | 10mg | $60.00 | $6.00 | — | ✓ | products/selank-amidate-peptide/ |
| Semax | 10mg | $60.00 | $6.00 | — | ✓ | products/semax-amidate-peptide/ |
| Sermorelin | 5mg | $60.00 | $12.00 | — | ✓ | products/sermorelin/ |
| Sermorelin | 10mg | $80.00 | $8.00 | — | ✓ | products/sermorelin/ |
| SNAP-8 [backlog] | 10mg | $80.00 | $8.00 | — | ✓ | products/snap-8-peptide/ |
| SS-31 | 10mg | $60.00 | $6.00 | — | ✓ | products/ss-31-elamipretide/ |
| SS-31 | 50mg | $270.00 | $5.40 | — | ✓ | products/ss-31-elamipretide/ |
| Survodutide [backlog] | 12mg | $240.00 | $20.00 | — | ✓ | products/survodutide-peptide/ |
| TB-500 | 10mg | $100.00 | $10.00 | — | ✓ | products/tb-500-thymosin-beta-4/ |
| Tesamorelin | 10mg | $95.00 | $9.50 | — | ✓ | products/tesamorelin-peptide/ |
| Thymalin [backlog] | 10mg | $60.00 | $6.00 | — | ✓ | products/thymalin/ |
| Thymosin Alpha-1 | 10mg | $115.00 | $11.50 | — | ✓ | products/thymosin-alpha-1-peptide/ |
| Tirzepatide (listed as GLYCON-X) | 15mg | $150.00 | $10.00 | — | ✓ | products/glycon-x/ |
| Tirzepatide (listed as GLYCON-X) | 30mg | $270.00 | $9.00 | — | ✓ | products/glycon-x/ |
| Tirzepatide (listed as GLYCON-X) | 60mg | $500.00 | $8.33 | — | ✓ | products/glycon-x/ |
| VIP | 5mg | $65.00 | $13.00 | — | ✓ | products/vip/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $80.00 | 5/5 (published) | ✓ | products/cjc1295-ipamorelin-5mg-5mg/ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 15mg | $90.00 | not published | ✗ | products/tesamorelin-ipamorelin-growth-hormone-stack/ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 13mg | $90.00 | not published | ✓ | products/tesamorelin-ipamorelin-growth-hormone-stack/ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 15mg | $95.00 | not published | ✗ | products/tesamorelin-ipamorelin-growth-hormone-stack/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $120.00 | not published | ✓ | products/wolverine-peptide-stack/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $85.00 | not published | ✓ | products/wolverine-peptide-stack/ |

### Sprays / strips (separate format, no $/mg)
| Product | Size | Base | Stock |
| --- | --- | --- | --- |
| MOTS-C (spray) | 15mg | $150.00 | ✓ |
| MOTS-C (spray) | 25mg | $200.00 | ✓ |
| Selank (spray) | 45mg | $200.00 | ✓ |
| Semax (spray) | 45mg | $200.00 | ✓ |

### Excluded: blend total unresolved (Rule 4): no total in name, clinical/other, multi-vial kit / pack (by name), no parseable size (Rule 4), oral/capsule, oral/tablet/sublingual, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: AMP Peptides
- **slug:** amp-peptides | **code:** PROFPEPTIDE | **discount:** 15% off | **url:** amp-peptides.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** No product sale_price / no auto cart discount observed; base = list. Re-verify at write.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| BPC-157 | 10mg | $50.00 | $5.00 | $60.00 | ✓ | product/bpc-157-10mg/ |
| BPC-157 | 20mg | $90.00 | $4.50 | $110.00 | ✓ | product/bpc-157-10mg/ |
| GHK-Cu | 100mg | $65.00 | $0.65 | $80.00 | ✓ | product/ghk-cu/ |
| GHK-Cu | 200mg | $120.00 | $0.60 | $150.00 | ✓ | product/ghk-cu/ |
| MOTS-C | 10mg | $50.00 | $5.00 | $65.00 | ✓ | product/mots-c/ |
| MOTS-C | 40mg | $80.00 | $2.00 | $100.00 | ✓ | product/mots-c/ |
| NAD+ | 500mg | $70.00 | $0.14 | $85.00 | ✓ | product/nad/ |
| NAD+ | 1000mg | $80.00 | $0.08 | $100.00 | ✓ | product/nad/ |
| Retatrutide (listed as GLP3RT) | 10mg | $125.00 | $12.50 | — | ✓ | product/glp3rt/ |
| Retatrutide (listed as GLP3RT) | 20mg | $145.00 | $7.25 | — | ✓ | product/glp3rt/ |
| TB-500 | 5mg | $40.00 | $8.00 | $50.00 | ✓ | product/tb-500/ |
| TB-500 | 10mg | $90.00 | $9.00 | $95.00 | ✓ | product/tb-500/ |
| Tesamorelin | 10mg | $100.00 | $10.00 | $120.00 | ✓ | product/tesamorelin/ |
| Tesamorelin | 20mg | $165.00 | $8.25 | $200.00 | ✓ | product/tesamorelin/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $70.00 | not published | ✓ | product/cjc-ipamorelin/ |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 20mg | $120.00 | not published | ✓ | product/cjc-ipamorelin/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $65.00 | not published | ✓ | product/bpc-157-tb500/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $95.00 | not published | ✓ | product/bpc-157-tb500/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 40mg | $170.00 | not published | ✓ | product/bpc-157-tb500/ |

### Sprays: none
### Excluded: blend total unresolved (Rule 4): no total in name, clinical/other, no parseable size (Rule 4) — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Improved Peptides
- **slug:** improved-peptides | **code:** PROFPEPTIDE | **discount:** 15% off | **url:** improvedpeptides.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** BOGO 'buy 2 get 1 free' is CODE-EXCLUSIVE (does not stack with promo codes) and is a cart quantity offer, NOT a per-vial markdown — so it is NOT modeled; base = single-vial LIST (the code-eligible price). No product sale_price. The Store API returns single-vial list prices (BOGO is cart-level, no separate SKUs).

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 50mg | $65.00 | $1.30 | — | ✓ | product/5-amino-1mq-50mg/ |
| BPC-157 | 10mg | $65.00 | $6.50 | — | ✓ | product/bpc-157/ |
| DSIP | 5mg | $45.00 | $9.00 | — | ✓ | product/dsip-5mg/ |
| Epitalon | 10mg | $55.00 | $5.50 | — | ✓ | product/epithalon-10mg/ |
| GHK-Cu | 50mg | $39.00 | $0.78 | — | ✓ | product/ghk-cu-50mg/ |
| KPV | 10mg | $60.00 | $6.00 | — | ✓ | product/kpv-10mg/ |
| Melanotan I | 10mg | $49.00 | $4.90 | — | ✓ | product/mt-1-10mg/ |
| Melanotan II | 10mg | $49.00 | $4.90 | — | ✓ | product/mt-2-10mg/ |
| MOTS-C | 10mg | $69.00 | $6.90 | — | ✓ | product/mots-c-10mg/ |
| NAD+ | 500mg | $75.00 | $0.15 | — | ✓ | product/nad-500mg/ |
| PT-141 | 10mg | $45.00 | $4.50 | — | ✓ | product/pt-141-10mg/ |
| Retatrutide (listed as GLP-3R) | 10mg | $95.00 | $9.50 | — | ✓ | product/glp-3r-10mg/ |
| Selank | 10mg | $49.00 | $4.90 | — | ✓ | product/selank-10mg/ |
| Semaglutide (listed as GLP-1S) | 5mg | $59.00 | $11.80 | — | ✓ | product/glp-1s-10mg/ |
| Semaglutide (listed as GLP-1S) | 10mg | $79.00 | $7.90 | — | ✓ | product/glp-1s-10mg/ |
| Semax | 10mg | $49.00 | $4.90 | — | ✓ | product/semax-10mg/ |
| TB-500 | 10mg | $65.00 | $6.50 | — | ✓ | product/tb-500-10mg/ |
| Tesamorelin | 5mg | $89.00 | $17.80 | — | ✓ | product/tesamorelin-10mg/ |
| Tesamorelin | 10mg | $130.00 | $13.00 | — | ✓ | product/tesamorelin-10mg/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 20mg | $105.00 | not published | ✓ | product/cjc-1295-ipa-no-dac/ |
| CJC-1295 (DAC)/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $59.00 | not published | ✓ | product/cjc-1295-ipa-no-dac/ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $115.00 | not published | ✓ | product/glow-70mg/ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $145.00 | not published | ✓ | product/klow-80mg/ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $110.00 | not published | ✓ | product/wolverine-bpc-157-tb-500-20mg/ |

### Sprays: none
### Excluded: no parseable size (Rule 4), out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Ion Peptide
- **slug:** ion-peptide | **code:** PROFPEPTIDE | **discount:** 15% off | **url:** ionpeptide.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** Confirm at write — product-level sale_price priced if present.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $49.00 | $4.90 | — | ✓ | product/5a1mq/ |
| 5-Amino-1MQ | 20mg | $79.00 | $3.95 | — | ✓ | product/5a1mq/ |
| 5-Amino-1MQ | 50mg | $115.00 | $2.30 | — | ✗ | product/5a1mq/ |
| Adamax | 10mg | $69.00 | $6.90 | — | ✗ | product/adx10/ |
| AOD-9604 | 30mg | $139.00 | $4.63 | — | ✓ | product/daod30/ |
| Bronchogen [backlog] | 20mg | $79.00 | $3.95 | — | ✗ | product/bron20/ |
| Cagrilintide | 5mg | $59.00 | $11.80 | — | ✓ | product/cag/ |
| Cagrilintide | 10mg | $99.00 | $9.90 | — | ✓ | product/cag/ |
| Cardiogen | 25mg | $59.00 | $2.36 | — | ✗ | product/cdgn/ |
| Cartalax [backlog] | 20mg | $79.00 | $3.95 | — | ✓ | product/cart20/ |
| Cibinetide | 10mg | $59.00 | $5.90 | — | ✓ | product/ara290/ |
| Cibinetide | 16mg | $75.00 | $4.69 | — | ✓ | product/ara290/ |
| Cibinetide | 50mg | $179.00 | $3.58 | — | ✗ | product/ara290/ |
| CJC-1295 | 30mg | $139.00 | $4.63 | — | ✓ | product/dcjc30/ |
| DSIP | 10mg | $45.00 | $4.50 | — | ✗ | product/dsip/ |
| Epitalon | 10mg | $35.00 | $3.50 | — | ✓ | product/epi/ |
| Epitalon | 50mg | $119.00 | $2.38 | — | ✓ | product/epi/ |
| FOXO4-DRI [backlog] | 10mg | $119.00 | $11.90 | — | ✓ | product/fdri10/ |
| GHRP-2 | 5mg | $29.00 | $5.80 | — | ✗ | product/ghrp25/ |
| GHRP-6 | 5mg | $29.00 | $5.80 | — | ✓ | product/ghp65/ |
| Glutathione | 600mg | $29.00 | $0.05 | — | ✓ | product/glu/ |
| Glutathione | 750mg | $35.00 | $0.05 | — | ✗ | product/glu/ |
| Glutathione | 1500mg | $55.00 | $0.04 | — | ✓ | product/glu/ |
| IGF-1 LR3 | 1mg | $90.00 | $90.00 | — | ✓ | product/iglr1/ |
| Ipamorelin | 5mg | $35.00 | $7.00 | — | ✓ | product/ipamo/ |
| Ipamorelin | 10mg | $42.00 | $4.20 | — | ✓ | product/ipamo/ |
| Ipamorelin | 30mg | $99.00 | $3.30 | — | ✓ | product/di30/ |
| KPV | 10mg | $49.00 | $4.90 | — | ✓ | product/kpv10/ |
| KPV | 20mg | $69.00 | $3.45 | — | ✗ | product/kpv10/ |
| LL-37 | 5mg | $45.00 | $9.00 | — | ✓ | product/ll375/ |
| MOTS-C | 10mg | $42.00 | $4.20 | — | ✓ | product/mtsc/ |
| MOTS-C | 40mg | $115.00 | $2.88 | — | ✓ | product/mtsc/ |
| NAD+ | 500mg | $44.00 | $0.09 | — | ✓ | product/nadp/ |
| NAD+ | 1000mg | $85.00 | $0.09 | — | ✓ | product/nadp/ |
| PDA | 10mg | $49.00 | $4.90 | — | ✓ | product/pda10/ |
| PEG-MGF [backlog] | 2mg | $39.00 | $19.50 | — | ✓ | product/pegmgf2/ |
| Pinealon | 10mg | $45.00 | $4.50 | — | ✗ | product/pin10/ |
| PNC-27 [backlog] | 10mg | $119.00 | $11.90 | — | ✓ | product/pnc10/ |
| PT-141 | 30mg | $109.00 | $3.63 | — | ✓ | product/dpt30/ |
| Retatrutide (listed as ION-3R) | 5mg | $39.00 | $7.80 | — | ✓ | product/ion3r/ |
| Retatrutide (listed as ION-3R) | 7mg | $49.00 | $7.00 | — | ✓ | product/ion3r/ |
| Retatrutide (listed as ION-3R) | 10mg | $58.50 | $5.85 | — | ✓ | product/ion3r/ |
| Retatrutide (listed as ION-3R) | 20mg | $99.95 | $5.00 | — | ✓ | product/ion3r/ |
| Retatrutide (listed as ION-3R) | 30mg | $139.00 | $4.63 | — | ✓ | product/ion3r/ |
| Retatrutide (listed as ION-3R) | 40mg | $165.00 | $4.12 | — | ✗ | product/ion3r/ |
| Retatrutide (listed as ION-3R) | 50mg | $189.00 | $3.78 | — | ✗ | product/ion3r/ |
| Retatrutide (listed as ION-3R) | 60mg | $219.00 | $3.65 | — | ✓ | product/ion3r/ |
| Selank | 5mg | $25.00 | $5.00 | — | ✗ | product/slk/ |
| Selank | 10mg | $34.65 | $3.46 | — | ✓ | product/slk/ |
| Semaglutide (listed as ION-1S) | 5mg | $39.00 | $7.80 | — | ✓ | product/ion1s/ |
| Semaglutide (listed as ION-1S) | 10mg | $55.00 | $5.50 | — | ✓ | product/ion1s/ |
| Semaglutide (listed as ION-1S) | 20mg | $69.00 | $3.45 | — | ✓ | product/ion1s/ |
| Semaglutide (listed as ION-1S) | 30mg | $99.00 | $3.30 | — | ✓ | product/ion1s/ |
| Semax | 10mg | $49.00 | $4.90 | — | ✓ | product/smxa/ |
| Semax | 30mg | $99.00 | $3.30 | — | ✓ | product/smxa/ |
| Sermorelin | 5mg | $39.00 | $7.80 | — | ✓ | product/smo/ |
| Sermorelin | 10mg | $65.00 | $6.50 | — | ✓ | product/smo/ |
| SLU-PP-332 [backlog] | 30mg | $59.00 | $1.97 | — | ✓ | product/dslupp30/ |
| SNAP-8 [backlog] | 10mg | $39.00 | $3.90 | — | ✓ | product/sn810/ |
| TB-500 | 30mg | $149.00 | $4.97 | — | ✓ | product/dtb530/ |
| Tesamorelin | 5mg | $45.00 | $9.00 | — | ✗ | product/tesa/ |
| Tesamorelin | 10mg | $69.95 | $7.00 | — | ✓ | product/tesa/ |
| Tesamorelin | 20mg | $109.00 | $5.45 | — | ✓ | product/tesa/ |
| Thymalin [backlog] | 10mg | $59.00 | $5.90 | — | ✓ | product/thy10/ |
| Thymosin Alpha-1 | 5mg | $42.00 | $8.40 | — | ✓ | product/ta1/ |
| Thymosin Alpha-1 | 10mg | $65.00 | $6.50 | — | ✓ | product/ta1/ |
| Tirzepatide (listed as ION-2T) | 10mg | $49.00 | $4.90 | — | ✓ | product/ion2t/ |
| Tirzepatide (listed as ION-2T) | 20mg | $85.00 | $4.25 | — | ✓ | product/ion2t/ |
| Tirzepatide (listed as ION-2T) | 30mg | $108.50 | $3.62 | — | ✓ | product/ion2t/ |
| Tirzepatide (listed as ION-2T) | 40mg | $129.00 | $3.23 | — | ✓ | product/ion2t/ |
| Tirzepatide (listed as ION-2T) | 60mg | $149.00 | $2.48 | — | ✓ | product/ion2t/ |
| Tirzepatide (listed as ION-2T) | 100mg | $199.00 | $1.99 | — | ✓ | product/ion2t/ |
| VIP | 10mg | $79.00 | $7.90 | — | ✓ | product/vip10/ |
| VIP | 20mg | $79.00 | $3.95 | — | ✓ | product/vip10/ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $169.00 | not published | ✓ | product/dgs70/ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $89.00 | not published | ✓ | product/glow70/ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $109.00 | not published | ✓ | product/klow80/ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 13mg | $99.00 | not published | ✓ | product/tipa/ |

### Sprays / strips (separate format, no $/mg)
| Product | Size | Base | Stock |
| --- | --- | --- | --- |
| Adamax (spray) | 10mg | $79.95 | ✓ |
| NAD+ (spray) | 500mg | $59.95 | ✓ |
| PT-141 (spray) | 10mg | $59.95 | ✓ |
| Selank (spray) | 10mg | $59.95 | ✓ |
| Semax (spray) | 10mg | $59.95 | ✓ |

### Excluded: blend leak (Rule A): adamax + selank — blend-registry candidate, blend leak (Rule A): selank + semax — blend-registry candidate, multi-vial kit / pack (by name), no parseable size (Rule 4), out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Licensed Peptides
- **slug:** licensed-peptides | **code:** PROFPEPTIDE | **discount:** 5% off | **url:** licensedpeptides.com
- **traffic:** (not pulled) | **pulled:** August 16 2026
- **sale posture:** Check product-level sale_price each refresh; PP code (5%) stacks.

### Single compounds
| Compound | Size | Base | $/mg | Regular | Stock | Vendor Slug |
| --- | --- | --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 5mg | $68.99 | $13.80 | $76.66 | ✓ | product/5-amino-1mq-5mg/ |
| Cagrilintide | 5mg | $107.99 | $21.60 | $119.99 | ✓ | product/cagrilintide/ |
| Cagrilintide | 10mg | $122.99 | $12.30 | $136.66 | ✓ | product/cagrilintide/ |
| Cibinetide | 16mg | $94.99 | $5.94 | $104.49 | ✓ | product/ara-290/ |
| CJC-1295 | 5mg | $38.99 | $7.80 | $43.33 | ✓ | product/cjc-1295-no-dac/ |
| CJC-1295 | 5mg | $91.99 | $18.40 | $102.22 | ✓ | product/cjc-1295-dac-5mg/ |
| CJC-1295 | 10mg | $57.99 | $5.80 | $64.44 | ✓ | product/cjc-1295-no-dac/ |
| DSIP | 5mg | $53.99 | $10.80 | $59.99 | ✓ | product/dsip-5mg/ |
| Epitalon | 10mg | $91.99 | $9.20 | $102.22 | ✓ | product/epithalon/ |
| Epitalon | 50mg | $191.99 | $3.84 | $213.33 | ✓ | product/epithalon/ |
| GHK-Cu | 50mg | $61.99 | $1.24 | $68.88 | ✓ | product/ghk-cu/ |
| GHK-Cu | 100mg | $114.99 | $1.15 | $127.77 | ✓ | product/ghk-cu/ |
| IGF-1 LR3 | 100mcg | $45.99 | $459.90 | $51.10 | ✓ | product/igf-1-lr3/ |
| IGF-1 LR3 | 1mg | $124.99 | $124.99 | $138.88 | ✓ | product/igf-1-lr3/ |
| Ipamorelin | 5mg | $43.32 | $8.66 | $48.14 | ✓ | product/ipamorelin/ |
| Ipamorelin | 10mg | $68.99 | $6.90 | $76.66 | ✓ | product/ipamorelin/ |
| Kisspeptin-10 | 5mg | $68.99 | $13.80 | $76.66 | ✓ | product/kisspeptin-10/ |
| Kisspeptin-10 | 10mg | $107.99 | $10.80 | $119.99 | ✓ | product/kisspeptin-10/ |
| KPV | 10mg | $76.99 | $7.70 | $85.55 | ✓ | product/kpv-10mg/ |
| MOTS-C | 10mg | $76.99 | $7.70 | $85.54 | ✓ | product/mots-c/ |
| MOTS-C | 40mg | $139.99 | $3.50 | $158.88 | ✓ | product/mots-c/ |
| NAD+ | 500mg | $129.99 | $0.26 | $144.44 | ✓ | product/nad/ |
| Oxytocin | 10mg | $76.99 | $7.70 | $85.55 | ✓ | product/oxytocin-10mg/ |
| Pinealon | 10mg | $76.99 | $7.70 | $85.55 | ✓ | product/pinealon-10mg/ |
| PT-141 | 10mg | $87.99 | $8.80 | $97.77 | ✓ | product/pt-141-10mg/ |
| Retatrutide (listed as LP3-R) | 5mg | $57.99 | $11.60 | $64.44 | ✓ | product/lp3-r/ |
| Retatrutide (listed as LP3-R) | 10mg | $124.99 | $12.50 | $138.88 | ✓ | product/lp3-r/ |
| Retatrutide (listed as LP3-R) | 15mg | $129.99 | $8.67 | $144.44 | ✓ | product/lp3-r/ |
| Retatrutide (listed as LP3-R) | 20mg | $154.99 | $7.75 | $172.22 | ✓ | product/lp3-r/ |
| Retatrutide (listed as LP3-R) | 30mg | $189.99 | $6.33 | $211.10 | ✓ | product/lp3-r/ |
| Retatrutide (listed as LP3-R) | 40mg | $239.99 | $6.00 | $266.66 | ✓ | product/lp3-r/ |
| Retatrutide (listed as LP3-R) | 50mg | $274.99 | $5.50 | $305.55 | ✓ | product/lp3-r/ |
| Retatrutide (listed as LP3-R) | 60mg | $309.99 | $5.17 | $344.44 | ✓ | product/lp3-r/ |
| Selank | 10mg | $61.99 | $6.20 | $68.88 | ✓ | product/selank-10mg/ |
| Semax | 30mg | $76.99 | $2.57 | $85.55 | ✓ | product/semax-30mg/ |
| Sermorelin | 5mg | $68.99 | $13.80 | $76.66 | ✓ | product/sermorelin/ |
| Sermorelin | 10mg | $114.99 | $11.50 | $127.77 | ✓ | product/sermorelin/ |
| SS-31 | 10mg | $99.99 | $10.00 | $111.10 | ✓ | product/ss-31/ |
| SS-31 | 50mg | $244.99 | $4.90 | $272.21 | ✓ | product/ss-31/ |
| TB-500 | 10mg | $99.99 | $10.00 | $111.10 | ✓ | product/tb-500-thymosin-beta-4-10mg/ |
| Tesamorelin | 10mg | $130.99 | $13.10 | $145.55 | ✓ | product/tesamorelin-10mg/ |
| Thymosin Alpha-1 | 5mg | $61.99 | $12.40 | $68.88 | ✓ | product/thymosin-alpha-1-5mg/ |
| Tirzepatide (listed as LP2-T) | 5mg | $53.99 | $10.80 | $59.99 | ✓ | product/lp2-t/ |
| Tirzepatide (listed as LP2-T) | 10mg | $71.99 | $7.20 | $79.99 | ✓ | product/lp2-t/ |
| Tirzepatide (listed as LP2-T) | 15mg | $94.49 | $6.30 | $104.99 | ✓ | product/lp2-t/ |
| Tirzepatide (listed as LP2-T) | 20mg | $114.99 | $5.75 | $127.77 | ✓ | product/lp2-t/ |
| Tirzepatide (listed as LP2-T) | 30mg | $145.99 | $4.87 | $162.21 | ✓ | product/lp2-t/ |
| Tirzepatide (listed as LP2-T) | 40mg | $183.99 | $4.60 | $204.43 | ✓ | product/lp2-t/ |
| Tirzepatide (listed as LP2-T) | 45mg | $206.99 | $4.60 | $229.99 | ✓ | product/lp2-t/ |
| Tirzepatide (listed as LP2-T) | 50mg | $244.99 | $4.90 | $272.21 | ✓ | product/lp2-t/ |
| Tirzepatide (listed as LP2-T) | 60mg | $290.99 | $4.85 | $323.33 | ✓ | product/lp2-t/ |

### Sprays: none
### Excluded: blend leak (Rule A): bpc-157 + klow + mots-c — blend-registry candidate, manually excluded — PACK-ONLY, no single vial — STANDING EXCLUSION (Mark, 2026-08-15, do not re-litigate). The base 'BPC-157' variable product's VARIATIONS are 3/5/10-pack only (no 1-pack), so the dosage model read the 3-pack price as a single-vial mg — $137.64/5mg and $235.14/10mg were ~3x inflated $/mg (bulk leak, same class as the blend bulk inflation; check:prices flagged 4.7x). Licensed sells NO single BPC-157 vial (every other BPC SKU is an explicit 2/4/10-vial pack), so ANY per-vial price would be DERIVED, not real. Pack-division needs a policy call on which pack represents a single purchase — a bigger decision than this row — so BPC-157 stays out for licensed until that policy exists. FP-scan: 'product/bpc-157/' (trailing slash) matches ONLY the base product — blends carry 'bpc-157-tb-...' with a dash after 157, and licensed blends are SINGLES_ONLY-suppressed anyway., multi-vial kit / pack (by name), no parseable size (Rule 4), oral/capsule, out-of-scope (SARMs/Rx/cosmetics), subscription product (recurring price — not a one-time headline), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

