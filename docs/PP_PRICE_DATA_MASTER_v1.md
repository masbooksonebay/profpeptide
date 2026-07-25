# PP Price-Comparison — MASTER PRICE DATA (all vendors, one doc)

**Status:** ACTIVE data source for the price-comparison page. ONE doc for ALL vendors (don't split per-vendor).
**Version:** v1
**PRICES_UPDATED:** July 24, 2026
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
- **traffic:** (not pulled) | **pulled:** July 24 2026
- **sale posture:** ⚠️ Sitewide CART-LEVEL coupon (e.g. ENJOY30, 30% off) — invisible in product data; base=regular_price (original_amount). Re-check the live coupon each refresh.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 50mg | $49.99 | $1.00 | ✓ |
| AOD-9604 | 5mg | $49.99 | $10.00 | ✓ |
| BPC-157 | 10mg | $39.99 | $4.00 | ✓ |
| Cagrilintide | 10mg | $69.99 | $7.00 | ✓ |
| DSIP | 5mg | $29.99 | $6.00 | ✓ |
| Epitalon | 10mg | $29.99 | $3.00 | ✓ |
| GHK-Cu | 50mg | $29.99 | $0.60 | ✓ |
| GHK-Cu | 100mg | $57.99 | $0.58 | ✓ |
| Glutathione | 1500mg | $59.99 | $0.04 | ✗ |
| IGF-1 LR3 | 1mg | $69.99 | $69.99 | ✓ |
| Ipamorelin | 10mg | $49.99 | $5.00 | ✓ |
| KPV | 10mg | $39.99 | $4.00 | ✓ |
| Melanotan I | 10mg | $29.95 | $3.00 | ✓ |
| Melanotan II | 10mg | $29.95 | $3.00 | ✓ |
| MOTS-C | 10mg | $39.99 | $4.00 | ✓ |
| MOTS-C | 40mg | $134.99 | $3.37 | ✓ |
| NAD+ | 500mg | $69.99 | $0.14 | ✓ |
| PT-141 | 10mg | $29.99 | $3.00 | ✓ |
| Retatrutide (listed as GLP-3 (RT)) | 10mg | $69.99 | $7.00 | ✓ |
| Retatrutide (listed as GLP-3 (RT)) | 20mg | $134.99 | $6.75 | ✓ |
| Retatrutide (listed as GLP-3 (RT)) | 30mg | $199.99 | $6.67 | ✓ |
| Selank | 10mg | $29.95 | $3.00 | ✓ |
| Semax | 10mg | $29.95 | $3.00 | ✓ |
| SNAP-8 [backlog] | 10mg | $29.99 | $3.00 | ✓ |
| TB-500 | 10mg | $39.99 | $4.00 | ✓ |
| Tesamorelin | 10mg | $69.99 | $7.00 | ✓ |
| Thymosin Alpha-1 | 10mg | $39.99 | $4.00 | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $59.99 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $89.99 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $99.99 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $79.99 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $149.99 | not published | ✓ |

### Sprays / strips (separate format, no $/mg)
| Product | Size | Base | Stock |
| --- | --- | --- | --- |
| GHK-Cu (spray) | 25mg | $49.99 | ✓ |
| NAD+ (spray) | 750mg | $59.99 | ✓ |
| PT-141 (spray) | 15mg | $59.99 | ✓ |
| Selank (spray) | 20mg | $69.99 | ✓ |
| Semax (spray) | 25mg | $69.99 | ✓ |

### Excluded: out-of-scope (SARMs/Rx/cosmetics) — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Biolongevity Labs
- **slug:** biolongevity-labs | **code:** PROFPEPTIDE | **discount:** 15% off | **url:** go.biolongevitylabs.com
- **traffic:** (not pulled) | **pulled:** July 24 2026
- **sale posture:** ⚠️ Sitewide CART-LEVEL auto-coupon 'longevityvip' (50% off), EXCLUSIVE with the code.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $74.97 | $7.50 | ✓ |
| BPC-157 | — | $249.97 | — | ✗ |
| BPC-157 | 10mg | $99.97 | $10.00 | ✓ |
| Bronchogen [backlog] | 20mg | $69.97 | $3.50 | ✓ |
| Cagrilintide | 5mg | $170.00 | $34.00 | ✓ |
| Cardiogen | 20mg | $69.97 | $3.50 | ✓ |
| Cartalax [backlog] | 20mg | $69.97 | $3.50 | ✓ |
| Cell Factors [backlog] | — | $899.00 | — | ✓ |
| Chonluten [backlog] | 20mg | $69.97 | $3.50 | ✓ |
| Cibinetide | 15mg | $95.00 | $6.33 | ✓ |
| CJC-1295 | — | $199.97 | — | ✗ |
| Cortagen | 20mg | $69.97 | $3.50 | ✓ |
| DSIP | 5mg | $55.97 | $11.19 | ✓ |
| Epitalon | 20mg | $94.97 | $4.75 | ✓ |
| Follistatin | 10mg | $449.10 | $44.91 | ✗ |
| FOXO4-DRI [backlog] | 10mg | $274.97 | $27.50 | ✓ |
| GHK-Cu | — | $199.97 | — | ✗ |
| GHK-Cu | 50mg | $84.97 | $1.70 | ✓ |
| Ipamorelin | 10mg | $79.97 | $8.00 | ✓ |
| Kisspeptin-10 | 10mg | $64.97 | $6.50 | ✓ |
| Klotho [backlog] | — | $250.00 | — | ✗ |
| Klotho [backlog] | 20mcg | $499.00 | $24,950.00 | ✓ |
| KPV | 10mg | $99.97 | $10.00 | ✓ |
| Livagen [backlog] | 20mg | $79.97 | $4.00 | ✓ |
| LL-37 | 5mg | $94.97 | $18.99 | ✓ |
| Melanotan I | 10mg | $55.97 | $5.60 | ✓ |
| MGF | 5mg | $94.97 | $18.99 | ✓ |
| MOTS-C | 10mg | $109.97 | $11.00 | ✓ |
| NAD+ | 500mg | $249.97 | $0.50 | ✓ |
| Ovagen [backlog] | 20mg | $79.97 | $4.00 | ✓ |
| Oxytocin | 10mg | $64.97 | $6.50 | ✓ |
| Pancragen [backlog] | 20mg | $94.97 | $4.75 | ✓ |
| Pinealon | 20mg | $69.97 | $3.50 | ✓ |
| PNC-27 [backlog] | 10mg | $279.97 | $28.00 | ✓ |
| Prostamax [backlog] | 20mg | $79.97 | $4.00 | ✓ |
| PT-141 | — | $199.97 | — | ✗ |
| PT-141 | 5mg | $47.97 | $9.59 | ✓ |
| Selank | 20mg | $134.97 | $6.75 | ✓ |
| Semax | 20mg | $64.97 | $3.25 | ✓ |
| SlimAssist [backlog] | 2mg | $125.00 | $62.50 | ✓ |
| TB-500 | 10mg | $164.97 | $16.50 | ✓ |
| Tesamorelin | 10mg | $149.97 | $15.00 | ✓ |
| Testagen [backlog] | 20mg | $79.97 | $4.00 | ✓ |
| Thymogen | 20mg | $79.97 | $4.00 | ✓ |
| Thymosin Alpha-1 | — | $249.97 | — | ✗ |
| Thymosin Alpha-1 | 10mg | $129.97 | $13.00 | ✓ |
| Thymulin [backlog] | 10mg | $64.97 | $6.50 | ✓ |
| Vesilute [backlog] | 20mg | $84.97 | $4.25 | ✓ |
| Vesugen [backlog] | 20mg | $84.97 | $4.25 | ✗ |
| Vilon [backlog] | 20mg | $79.97 | $4.00 | ✓ |
| VIP | 5mg | $74.97 | $14.99 | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $99.97 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $259.97 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $274.97 | not published | ✓ |
| NAD+/MOTS-C/5-Amino-1MQ | NAD+/MOTS-C/5-Amino-1MQ | 240mg | $299.99 | 120/100/10/10 (published) | ✓ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 8mg | $115.00 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $119.97 | not published | ✓ |

### Sprays: none
### Excluded: out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Science Based Peptides
- **slug:** science-based-peptides | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** www.sciencebasedpeptides.com
- **traffic:** (not pulled) | **pulled:** July 24 2026
- **sale posture:** No sitewide sale (compareAt null).

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $39.99 | $4.00 | ✗ |
| AOD-9604 | 10mg | $39.99 | $4.00 | ✓ |
| BPC-157 | 10mg | $39.99 | $4.00 | ✓ |
| CJC-1295 | 10mg | $39.99 | $4.00 | ✓ |
| DSIP | 5mg | $29.99 | $6.00 | ✓ |
| Epitalon | 10mg | $29.99 | $3.00 | ✓ |
| GHK-Cu | 50mg | $29.99 | $0.60 | ✓ |
| GHK-Cu | 100mg | $57.99 | $0.58 | ✓ |
| Glutathione | 600mg | $37.99 | $0.06 | ✓ |
| Glutathione | 1500mg | $59.99 | $0.04 | ✓ |
| IGF-1 LR3 | 1mg | $69.99 | $69.99 | ✓ |
| Ipamorelin | 5mg | $37.99 | $7.60 | ✓ |
| Ipamorelin | 10mg | $49.99 | $5.00 | ✓ |
| KPV | 10mg | $39.99 | $4.00 | ✓ |
| Melanotan I | 10mg | $34.99 | $3.50 | ✓ |
| Melanotan II | 10mg | $34.99 | $3.50 | ✓ |
| MOTS-C | 15mg | $39.99 | $2.67 | ✗ |
| NAD+ | 500mg | $69.99 | $0.14 | ✗ |
| NAD+ | 1000mg | $74.99 | $0.07 | ✓ |
| PT-141 | 10mg | $29.99 | $3.00 | ✓ |
| Retatrutide (listed as GLP 3-(RT)) | 10mg | $69.99 | $7.00 | ✗ |
| Retatrutide (listed as GLP 3-(RT)) | 30mg | $199.99 | $6.67 | ✗ |
| Selank | 5mg | $24.99 | $5.00 | ✓ |
| Selank | 10mg | $34.99 | $3.50 | ✓ |
| Semax | 5mg | $24.99 | $5.00 | ✓ |
| Semax | 10mg | $34.99 | $3.50 | ✓ |
| SNAP-8 [backlog] | 10mg | $29.99 | $3.00 | ✗ |
| TB-500 | 10mg | $39.99 | $4.00 | ✓ |
| Tesamorelin | 10mg | $69.99 | $7.00 | ✗ |
| Thymosin Alpha-1 | 10mg | $39.99 | $4.00 | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $59.99 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $114.99 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 50mg | $97.99 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $129.99 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $109.99 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 5mg | $71.98 | not published | ✓ |

### Sprays: none
### Excluded: supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Alpha Peptides
- **slug:** alpha-peptides | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** alpha-peptides.com
- **traffic:** (not pulled) | **pulled:** July 24 2026
- **sale posture:** Product-level sale_price on ~25/59; code STACKS.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $33.12 | $3.31 | ✗ |
| Adamax | 10mg | $71.58 | $7.16 | ✗ |
| AOD-9604 | 5mg | $39.59 | $7.92 | ✗ |
| AOD-9604 | 10mg | $54.90 | $5.49 | ✗ |
| BPC-157 | 10mg | $27.59 | $2.76 | ✓ |
| Cagrilintide | 5mg | $68.39 | $13.68 | ✗ |
| Cagrilintide | 10mg | $115.19 | $11.52 | ✗ |
| Cibinetide | 10mg | $36.00 | $3.60 | ✗ |
| CJC-1295 | 5mg | $40.79 | $8.16 | ✗ |
| CJC-1295 | 10mg | $34.09 | $3.41 | ✗ |
| Dihexa [backlog] | 5mg | $35.79 | $7.16 | ✗ |
| DSIP | 5mg | $25.74 | $5.15 | ✓ |
| DSIP | 10mg | $70.79 | $7.08 | ✗ |
| Epitalon | 10mg | $23.68 | $2.37 | ✗ |
| Follistatin | 1mg | $84.21 | $84.21 | ✗ |
| FOXO4-DRI [backlog] | 10mg | $62.63 | $6.26 | ✗ |
| GHK-Cu | 50mg | $28.79 | $0.58 | ✗ |
| GHK-Cu | 100mg | $59.99 | $0.60 | ✗ |
| GHRP-2 | 5mg | $14.32 | $2.86 | ✗ |
| GHRP-6 | 5mg | $14.32 | $2.86 | ✗ |
| Glutathione | 1500mg | $36.83 | $0.02 | ✗ |
| Hexarelin | 5mg | $29.53 | $5.91 | ✗ |
| HGH Fragment 176-191 [backlog] | 5mg | $28.63 | $5.73 | ✗ |
| Humanin [backlog] | 10mg | $108.95 | $10.89 | ✗ |
| IGF-1 DES | 1mg | $23.26 | $23.26 | ✗ |
| IGF-1 LR3 | 1mg | $45.47 | $45.47 | ✗ |
| Ipamorelin | 10mg | $51.59 | $5.16 | ✗ |
| Kisspeptin-10 | 10mg | $27.37 | $2.74 | ✗ |
| KPV | 10mg | $30.30 | $3.03 | ✓ |
| LL-37 | 5mg | $35.79 | $7.16 | ✗ |
| Mazdutide [backlog] | 10mg | $66.43 | $6.64 | ✗ |
| Melanotan I | 10mg | $21.05 | $2.10 | ✗ |
| Melanotan II | 5mg | $23.99 | $4.80 | ✗ |
| Melanotan II | 10mg | $25.26 | $2.53 | ✓ |
| MGF | 2mg | $23.26 | $11.63 | ✗ |
| MOTS-C | 10mg | $33.06 | $3.31 | ✓ |
| NAD+ | 500mg | $30.52 | $0.06 | ✗ |
| Oxytocin | 10mg | $39.59 | $3.96 | ✗ |
| Pinealon | 10mg | $33.16 | $3.32 | ✗ |
| PT-141 | 10mg | $26.48 | $2.65 | ✓ |
| Retatrutide (listed as GLP-3 RT) | 10mg | $49.25 | $4.92 | ✓ |
| Retatrutide (listed as GLP-3 RT) | 15mg | $77.99 | $5.20 | ✓ |
| Retatrutide (listed as GLP-3 RT) | 30mg | $107.99 | $3.60 | ✓ |
| Retatrutide (listed as GLP-3 RT) | 50mg | $198.00 | $3.96 | ✗ |
| Selank | 10mg | $27.78 | $2.78 | ✗ |
| Semaglutide (listed as GLP-1 SM) | 5mg | $53.99 | $10.80 | ✗ |
| Semaglutide (listed as GLP-1 SM) | 10mg | $77.99 | $7.80 | ✗ |
| Semax | 10mg | $25.01 | $2.50 | ✗ |
| Sermorelin | 10mg | $44.53 | $4.45 | ✗ |
| SLU-PP-332 [backlog] | 5mg | $84.21 | $16.84 | ✗ |
| SNAP-8 [backlog] | 10mg | $22.11 | $2.21 | ✗ |
| SS-31 | 10mg | $42.95 | $4.29 | ✗ |
| Survodutide [backlog] | 10mg | $73.89 | $7.39 | ✗ |
| TB-500 | 10mg | $37.58 | $3.76 | ✗ |
| Tesamorelin | 10mg | $51.86 | $5.19 | ✓ |
| Tesofensine [backlog] | 500mcg | $108.95 | $217.90 | ✗ |
| Thymalin [backlog] | 10mg | $50.53 | $5.05 | ✗ |
| Thymosin Alpha-1 | 10mg | $41.44 | $4.14 | ✗ |
| Tirzepatide (listed as GLP-2 TZ) | 30mg | $66.31 | $2.21 | ✓ |
| Tirzepatide (listed as GLP-2 TZ) | 60mg | $101.99 | $1.70 | ✓ |
| VIP | 10mg | $37.89 | $3.79 | ✗ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $58.09 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $74.69 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $59.06 | not published | ✗ |

### Sprays: none
### Excluded: out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Almighty Peptides
- **slug:** almighty-peptides | **code:** PROFPEPTIDE | **discount:** 20% off | **url:** www.almightypeptides.com
- **traffic:** (not pulled) | **pulled:** July 25 2026
- **sale posture:** Product sale 2/61; code stacks.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| BPC-157 | 10mg | $148.99 | $14.90 | ✓ |
| CJC-1295 | 5mg | $89.99 | $18.00 | ✓ |
| DSIP | 5mg | $48.00 | $9.60 | ✓ |
| Epitalon | 10mg | $88.00 | $8.80 | ✓ |
| GHK-Cu | 50mg | $88.00 | $1.76 | ✓ |
| GHRP-2 | 5mg | $36.00 | $7.20 | ✓ |
| GHRP-6 | 10mg | $36.00 | $3.60 | ✓ |
| Glutathione | 1500mg | $299.00 | $0.20 | ✓ |
| IGF-1 LR3 | 1mg | $228.99 | $228.99 | ✓ |
| Ipamorelin | 5mg | $72.99 | $14.60 | ✓ |
| LL-37 | 5mg | $149.00 | $29.80 | ✓ |
| Melanotan II | 10mg | $65.99 | $6.60 | ✓ |
| MGF | 2mg | $52.99 | $26.50 | ✓ |
| MK-677 | 25mg | $150.99 | $6.04 | ✓ |
| MOTS-C | 10mg | $140.99 | $14.10 | ✓ |
| NAD+ | 500mg | $165.00 | $0.33 | ✓ |
| Oxytocin | 5mg | $59.99 | $12.00 | ✓ |
| PT-141 | 10mg | $70.99 | $7.10 | ✓ |
| Retatrutide | 10mg | $329.00 | $32.90 | ✓ |
| Semaglutide | 2mg | $99.00 | $49.50 | ✗ |
| Semaglutide | 5mg | $175.00 | $35.00 | ✓ |
| Sermorelin | 5mg | $61.00 | $12.20 | ✓ |
| TB-500 | 5mg | $93.99 | $18.80 | ✓ |
| Tesamorelin | 5mg | $77.00 | $15.40 | ✓ |
| Tirzepatide | 10mg | $258.00 | $25.80 | ✓ |
| Tirzepatide | 30mg | $384.00 | $12.80 | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $175.00 | 5/5 (published) | ✓ |

### Sprays: none
### Excluded: oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Ameano Peptides
- **slug:** ameano-peptides | **code:** PROF10 | **discount:** 10% off | **url:** ameanopeptides.com
- **traffic:** (not pulled) | **pulled:** July 25 2026
- **sale posture:** No sale.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 50mg | $68.00 | $1.36 | ✓ |
| AOD-9604 | 2mg | $38.00 | $19.00 | ✓ |
| AOD-9604 | 5mg | $58.00 | $11.60 | ✗ |
| BPC-157 | 10mg | $44.00 | $4.40 | ✓ |
| Cagrilintide | 5mg | $49.00 | $9.80 | ✓ |
| Cagrilintide | 10mg | $88.00 | $8.80 | ✓ |
| Cartalax [backlog] | 10mg | $58.00 | $5.80 | ✓ |
| Cibinetide | 10mg | $48.00 | $4.80 | ✓ |
| CJC-1295 | 5mg | $38.00 | $7.60 | ✓ |
| DSIP | 10mg | $58.00 | $5.80 | ✓ |
| Epitalon | 10mg | $38.00 | $3.80 | ✓ |
| GHK-Cu | 50mg | $35.00 | $0.70 | ✓ |
| GHK-Cu | 100mg | $53.00 | $0.53 | ✓ |
| Ipamorelin | 10mg | $44.00 | $4.40 | ✓ |
| Kisspeptin-10 | 10mg | $48.00 | $4.80 | ✓ |
| KPV | 10mg | $44.00 | $4.40 | ✓ |
| LL-37 | 10mg | $80.00 | $8.00 | ✓ |
| Melanotan I | 10mg | $44.00 | $4.40 | ✓ |
| Melanotan II | 10mg | $44.00 | $4.40 | ✓ |
| MOTS-C | 10mg | $54.00 | $5.40 | ✓ |
| NAD+ | 250mg | $44.00 | $0.18 | ✓ |
| NAD+ | 500mg | $68.00 | $0.14 | ✓ |
| Oxytocin | 10mg | $58.00 | $5.80 | ✓ |
| PDA | 10mg | $44.00 | $4.40 | ✓ |
| PT-141 | 10mg | $44.00 | $4.40 | ✓ |
| Retatrutide (listed as AMP-3P) | 6mg | $53.00 | $8.83 | ✓ |
| Retatrutide (listed as AMP-3P) | 10mg | $78.00 | $7.80 | ✓ |
| Retatrutide (listed as AMP-3P) | 12mg | $82.00 | $6.83 | ✓ |
| Retatrutide (listed as AMP-3P) | 20mg | $108.00 | $5.40 | ✓ |
| Retatrutide (listed as AMP-3P) | 24mg | $118.00 | $4.92 | ✓ |
| Retatrutide (listed as AMP-3P) | 48mg | $215.00 | $4.48 | ✓ |
| Selank | 10mg | $44.00 | $4.40 | ✓ |
| Semaglutide (listed as AMP-1P) | 5mg | $35.00 | $7.00 | ✓ |
| Semaglutide (listed as AMP-1P) | 10mg | $54.00 | $5.40 | ✓ |
| Semax | 10mg | $44.00 | $4.40 | ✓ |
| Sermorelin | 5mg | $44.00 | $8.80 | ✓ |
| SNAP-8 [backlog] | 10mg | $40.00 | $4.00 | ✓ |
| Survodutide [backlog] | 10mg | $95.00 | $9.50 | ✓ |
| TB-500 | 10mg | $48.00 | $4.80 | ✓ |
| Tesamorelin | 10mg | $68.00 | $6.80 | ✓ |
| Thymosin Alpha-1 | 5mg | $35.00 | $7.00 | ✓ |
| Thymosin Alpha-1 | 10mg | $62.00 | $6.20 | ✓ |
| Tirzepatide (listed as AMP-2P) | 10mg | $53.00 | $5.30 | ✓ |
| Tirzepatide (listed as AMP-2P) | 15mg | $71.00 | $4.73 | ✓ |
| Tirzepatide (listed as AMP-2P) | 20mg | $88.00 | $4.40 | ✓ |
| Tirzepatide (listed as AMP-2P) | 30mg | $98.00 | $3.27 | ✓ |
| Tirzepatide (listed as AMP-2P) | 60mg | $168.00 | $2.80 | ✓ |
| VIP | 10mg | $58.00 | $5.80 | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $53.00 | 5/5 (published) | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 50mg | $88.00 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $98.00 | not published | ✓ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 13mg | $88.00 | 10/3 (published) | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $88.00 | 10/10 (published) | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $53.00 | 5/5 (published) | ✓ |

### Sprays: none
### Excluded: out-of-scope (SARMs/Rx/cosmetics), supply, topical/transdermal — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Amino X
- **slug:** amino-x | **code:** PROF15 | **discount:** 15% off | **url:** aminox.net
- **traffic:** (not pulled) | **pulled:** July 24 2026
- **sale posture:** No sale.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| BPC-157 | 5mg | $69.99 | $14.00 | ✗ |
| BPC-157 | 10mg | $89.99 | $9.00 | ✗ |
| CJC-1295 | 2mg | $39.99 | $20.00 | ✗ |
| CJC-1295 | 5mg | $59.99 | $12.00 | ✗ |
| CJC-1295 | 10mg | $79.99 | $8.00 | ✗ |
| GHK-Cu | 50mg | $29.99 | $0.60 | ✓ |
| MOTS-C | 20mg | $49.99 | $2.50 | ✗ |
| MOTS-C | 40mg | $69.99 | $1.75 | ✗ |
| Retatrutide (listed as AX-RT) | 10mg | $49.99 | $5.00 | ✗ |
| Retatrutide (listed as AX-RT) | 20mg | $69.99 | $3.50 | ✓ |
| Selank | 5mg | $29.99 | $6.00 | ✗ |
| Selank | 10mg | $39.99 | $4.00 | ✗ |
| TB-500 | 5mg | $49.99 | $10.00 | ✗ |
| TB-500 | 10mg | $69.99 | $7.00 | ✗ |
| TB-500 | 20mg | $89.99 | $4.50 | ✗ |
| Tesamorelin | 10mg | $64.99 | $6.50 | ✓ |
| Tirzepatide (listed as AX-TR) | 10mg | $34.99 | $3.50 | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $79.99 | not published | ✗ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $64.99 | not published | ✓ |

### Sprays: none
### Excluded: supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Ascension Peptides
- **slug:** ascension-peptides | **code:** PROFPEPTIDE | **discount:** 50% off | **url:** ascensionpeptides.com
- **traffic:** (not pulled) | **pulled:** July 25 2026
- **sale posture:** ⚠️ Near-sitewide product-level sale_price (39/42); base=regular_price; code STACKS.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $94.99 | $9.50 | ✓ |
| AOD-9604 | 5mg | $74.99 | $15.00 | ✓ |
| BPC-157 | 5mg | $59.99 | $12.00 | ✗ |
| BPC-157 | 10mg | $74.99 | $7.50 | ✓ |
| Cagrilintide (listed as C-10) | 10mg | $199.99 | $20.00 | ✓ |
| Cibinetide | 10mg | $79.99 | $8.00 | ✓ |
| CJC-1295 | 5mg | $64.99 | $13.00 | ✓ |
| CJC-1295 | 10mg | $109.99 | $11.00 | ✓ |
| DSIP | 10mg | $94.99 | $9.50 | ✓ |
| Epitalon | 10mg | $69.99 | $7.00 | ✓ |
| FOXO4-DRI [backlog] | 10mg | $199.99 | $20.00 | ✓ |
| GHK-Cu | 100mg | $84.99 | $0.85 | ✓ |
| Ipamorelin | 5mg | $64.99 | $13.00 | ✓ |
| Kisspeptin-10 | 10mg | $74.99 | $7.50 | ✓ |
| KPV | 10mg | $79.99 | $8.00 | ✓ |
| LL-37 | 10mg | $119.99 | $12.00 | ✓ |
| Melanotan I | 10mg | $59.99 | $6.00 | ✓ |
| Melanotan II | 10mg | $59.99 | $6.00 | ✓ |
| MOTS-C | 10mg | $89.99 | $9.00 | ✓ |
| NAD+ | 1000mg | $179.99 | $0.18 | ✓ |
| Oxytocin | 2mg | $49.99 | $25.00 | ✓ |
| Pinealon | 10mg | $89.99 | $9.00 | ✓ |
| PT-141 | 10mg | $59.99 | $6.00 | ✓ |
| Retatrutide (listed as R-10) | 10mg | $149.99 | $15.00 | ✓ |
| Retatrutide (listed as R-30) | 30mg | $269.99 | $9.00 | ✓ |
| Selank | 10mg | $60.00 | $6.00 | ✓ |
| Semaglutide (listed as S-5) | 5mg | $99.99 | $20.00 | ✓ |
| Semax | 10mg | $59.99 | $6.00 | ✓ |
| Sermorelin | 10mg | $99.99 | $10.00 | ✓ |
| SS-31 | 10mg | $79.99 | $8.00 | ✓ |
| TB-500 | 5mg | $60.00 | $12.00 | ✓ |
| Tesamorelin | 5mg | $89.99 | $18.00 | ✓ |
| Thymosin Alpha-1 | 10mg | $99.99 | $10.00 | ✓ |
| Tirzepatide (listed as T-10) | 10mg | $124.99 | $12.50 | ✓ |
| Tirzepatide (listed as T-30) | 30mg | $199.99 | $6.67 | ✓ |
| VIP | 10mg | $149.99 | $15.00 | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 40mg | $199.99 | 10/10/20 (published) | ✗ |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 20mg | $99.99 | 5/5/10 (published) | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 140mg | $174.99 | 50/10/10/70 (published) | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 160mg | $199.99 | 50/10/10/10/80 (published) | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 40mg | $149.99 | 10/10/20 (published) | ✓ |

### Sprays: none
### Excluded: clinical/other — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Behemoth Labz
- **slug:** behemoth-labz | **code:** PROF10 | **discount:** 10% off | **url:** behemothlabz.com
- **traffic:** (not pulled) | **pulled:** July 25 2026
- **sale posture:** Product sale 20/100; code stacks.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| Adamax | 5mg | $55.17 | $11.03 | ✓ |
| Adamax | 10mg | $68.12 | $6.81 | ✓ |
| Adipotide | 5mg | $77.39 | $15.48 | ✓ |
| Adipotide | 10mg | $102.62 | $10.26 | ✓ |
| AOD-9604 | 5mg | $76.76 | $15.35 | ✓ |
| AOD-9604 | 10mg | $114.09 | $11.41 | ✓ |
| BPC-157 | 4mg | $59.83 | $14.96 | ✓ |
| BPC-157 | 5mg | $62.27 | $12.45 | ✓ |
| BPC-157 | 6mg | $163.97 | $27.33 | ✓ |
| BPC-157 | 10mg | $124.54 | $12.45 | ✓ |
| BPC-157 | 11mg | $349.95 | $31.81 | ✓ |
| BPC-157 | 15mg | $207.06 | $13.80 | ✓ |
| BPC-157 | 30mg | $274.95 | $9.16 | ✓ |
| Bronchogen [backlog] | 20mg | $69.47 | $3.47 | ✓ |
| Cagrilintide | 5mg | $111.70 | $22.34 | ✓ |
| Cagrilintide | 10mg | $286.45 | $28.64 | ✓ |
| Cardiogen | 20mg | $61.48 | $3.07 | ✓ |
| Cartalax [backlog] | 20mg | $66.48 | $3.32 | ✗ |
| Chonluten [backlog] | 20mg | $60.48 | $3.02 | ✓ |
| Cibinetide | 16mg | $108.12 | $6.76 | ✓ |
| CJC-1295 | 2mg | $41.45 | $20.73 | ✓ |
| CJC-1295 | 5mg | $58.13 | $11.63 | ✓ |
| Cortagen | 20mg | $54.48 | $2.72 | ✓ |
| Dihexa [backlog] | 10mg | $9.18 | $0.92 | ✓ |
| DSIP | 2mg | $49.48 | $24.74 | ✓ |
| DSIP | 5mg | $56.48 | $11.30 | ✓ |
| Epitalon | 20mg | $96.57 | $4.83 | ✓ |
| Epitalon | 100mg | $112.94 | $1.13 | ✓ |
| Follistatin | 1mg | $143.09 | $143.09 | ✗ |
| FOXO4-DRI [backlog] | 10mg | $342.40 | $34.24 | ✓ |
| GHRP-2 | 10mg | $44.33 | $4.43 | ✓ |
| GHRP-6 | 10mg | $81.91 | $8.19 | ✓ |
| Glutathione | 1200mg | $133.25 | $0.11 | ✓ |
| Hexarelin | 5mg | $95.54 | $19.11 | ✓ |
| Humanin [backlog] | 10mg | $177.48 | $17.75 | ✓ |
| IGF-1 DES | 1mg | $196.05 | $196.05 | ✓ |
| IGF-1 LR3 | 0.2mg | $13.49 | $67.45 | ✓ |
| IGF-1 LR3 | 1mg | $67.46 | $67.46 | ✓ |
| Ipamorelin | 5mg | $80.62 | $16.12 | ✓ |
| Ipamorelin | 20mg | $151.47 | $7.57 | ✓ |
| Kisspeptin-10 | 5mg | $72.23 | $14.45 | ✓ |
| Kisspeptin-10 | 10mg | $149.26 | $14.93 | ✓ |
| KPV | 5mg | $57.28 | $11.46 | ✓ |
| KPV | 50mg | $228.27 | $4.57 | ✓ |
| Livagen [backlog] | 20mg | $72.72 | $3.64 | ✓ |
| LL-37 | 5mg | $108.66 | $21.73 | ✓ |
| Mazdutide [backlog] | 6mg | $115.47 | $19.25 | ✓ |
| Mazdutide [backlog] | 12mg | $207.96 | $17.33 | ✓ |
| Melanotan II | 10mg | $66.24 | $6.62 | ✓ |
| MGF | 10mg | $143.09 | $14.31 | ✓ |
| MK-677 | 17mg | $32.86 | $1.93 | ✓ |
| MK-677 | 33mg | $131.42 | $3.98 | ✓ |
| MK-677 | 67mg | $262.84 | $3.92 | ✓ |
| MOTS-C | 10mg | $78.69 | $7.87 | ✓ |
| MOTS-C | 20mg | $157.39 | $7.87 | ✓ |
| NAD+ | 100mg | $65.94 | $0.66 | ✓ |
| NAD+ | 500mg | $204.70 | $0.41 | ✓ |
| Ovagen [backlog] | 5mg | $21.48 | $4.30 | ✓ |
| Ovagen [backlog] | 20mg | $65.98 | $3.30 | ✓ |
| Oxytocin | 5mg | $76.83 | $15.37 | ✓ |
| Pancragen [backlog] | 20mg | $61.48 | $3.07 | ✓ |
| Pinealon | 5mg | $66.88 | $13.38 | ✓ |
| Pinealon | 10mg | $89.72 | $8.97 | ✓ |
| Pinealon | 20mg | $83.53 | $4.18 | ✓ |
| PNC-27 [backlog] | 5mg | $170.38 | $34.08 | ✓ |
| PNC-27 [backlog] | 10mg | $314.00 | $31.40 | ✓ |
| PT-141 | 10mg | $73.45 | $7.35 | ✓ |
| Retatrutide | 60mg | $298.52 | $4.98 | ✓ |
| Selank | 10mg | $68.53 | $6.85 | ✓ |
| Selank | 20mg | $98.48 | $4.92 | ✓ |
| Selank | 40mg | $108.98 | $2.72 | ✓ |
| Semaglutide | 5mg | $200.11 | $40.02 | ✗ |
| Semaglutide | 10mg | $360.12 | $36.01 | ✓ |
| Semax | 5mg | $30.98 | $6.20 | ✓ |
| Semax | 10mg | $56.48 | $5.65 | ✓ |
| Semax | 30mg | $83.22 | $2.77 | ✓ |
| Semax | 60mg | $200.69 | $3.34 | ✓ |
| Sermorelin | 10mg | $101.56 | $10.16 | ✓ |
| Sermorelin | 20mg | $236.60 | $11.83 | ✓ |
| SNAP-8 [backlog] | 10mg | $41.79 | $4.18 | ✓ |
| SNAP-8 [backlog] | 100mg | $258.41 | $2.58 | ✓ |
| SS-31 | 5mg | $40.15 | $8.03 | ✓ |
| SS-31 | 10mg | $74.98 | $7.50 | ✓ |
| Tesamorelin | 5mg | $97.99 | $19.60 | ✗ |
| Tesamorelin | 10mg | $118.11 | $11.81 | ✓ |
| Testagen [backlog] | 20mg | $60.98 | $3.05 | ✗ |
| Thymalin [backlog] | 5mg | $78.98 | $15.80 | ✓ |
| Thymalin [backlog] | 20mg | $120.97 | $6.05 | ✓ |
| Thymalin [backlog] | 50mg | $319.19 | $6.38 | ✓ |
| Thymogen | 20mg | $76.97 | $3.85 | ✓ |
| Thymosin Alpha-1 | 5mg | $84.86 | $16.97 | ✓ |
| Thymosin Alpha-1 | 50mg | $326.04 | $6.52 | ✓ |
| Vesilute [backlog] | 10mg | $58.99 | $5.90 | ✓ |
| Vesugen [backlog] | 20mg | $61.48 | $3.07 | ✓ |
| Vilon [backlog] | 20mg | $64.48 | $3.22 | ✓ |
| VIP | 5mg | $41.98 | $8.40 | ✓ |
| VIP | 10mg | $77.39 | $7.74 | ✗ |
| VIP | 12mg | $94.22 | $7.85 | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 6mg | $83.90 | not published | ✓ |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 8mg | $199.96 | not published | ✓ |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 4mg | $102.97 | not published | ✓ |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 6mg | $86.57 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $168.49 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $216.05 | not published | ✓ |

### Sprays / strips (separate format, no $/mg)
| Product | Size | Base | Stock |
| --- | --- | --- | --- |
| Adipotide (spray) | 100mcg | $130.63 | ✓ |
| AOD-9604 (spray) | 100mcg | $122.66 | ✓ |
| BPC-157 (spray) | 100mcg | $124.54 | ✓ |
| BPC-157 (spray) | 200mcg | $287.28 | ✓ |
| CJC-1295 (spray) | 20mcg | $44.74 | ✓ |
| CJC-1295 (spray) | 50mcg | $112.01 | ✓ |
| DSIP (spray) | 50mcg | $90.01 | ✓ |
| Epitalon (spray) | 1mg | $186.77 | ✓ |
| Epitalon (spray) | 1mg | $174.19 | ✓ |
| GHRP-2 (spray) | 100mcg | $71.66 | ✓ |
| GHRP-6 (spray) | 100mcg | $68.63 | ✓ |
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
| Retatrutide (spray) | 100mcg | $295.17 | ✓ |
| Selank (spray) | 400mcg | $128.44 | ✓ |
| Semax (spray) | 300mcg | $134.83 | ✓ |
| Semax (spray) | 600mcg | $200.69 | ✓ |
| Semax (spray) | 1200mcg | $401.38 | ✓ |
| Sermorelin (spray) | 100mcg | $123.40 | ✓ |
| Tesamorelin (spray) | 1mg | $1,122.22 | ✓ |
| Tesamorelin (spray) | 200mcg | $325.71 | ✓ |
| Tirzepatide (spray) | 100mcg | $300.08 | ✓ |

### Excluded: oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply, topical/transdermal — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: BioCollex
- **slug:** biocollex | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** biocollexresearch.com
- **traffic:** (not pulled) | **pulled:** July 24 2026
- **sale posture:** No sale.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| GHK-Cu | 50mg | $25.00 | $0.50 | ✓ |
| MOTS-C | 10mg | $65.00 | $6.50 | ✓ |
| NAD+ | 500mg | $65.00 | $0.13 | ✓ |
| PT-141 | 10mg | $45.00 | $4.50 | ✓ |
| Retatrutide (listed as GLP-3 RT) | 10mg | $90.00 | $9.00 | ✓ |
| Retatrutide (listed as GLP-3 RT) | 20mg | $155.00 | $7.75 | ✓ |
| Retatrutide (listed as GLP-3 RT) | 30mg | $185.00 | $6.17 | ✓ |
| Selank | 10mg | $55.00 | $5.50 | ✓ |
| Semax | 10mg | $55.00 | $5.50 | ✓ |
| SS-31 | 10mg | $60.00 | $6.00 | ✓ |
| Tesamorelin | 10mg | $85.00 | $8.50 | ✓ |
| Tirzepatide (listed as GLP-2 TZ) | 25mg | $115.00 | $4.60 | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $75.00 | 5/5 (published) | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $110.00 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $60.00 | not published | ✓ |

### Sprays: none
### Excluded: out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: EZ Peptides
- **slug:** ez-peptides | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** ezpeptides.com
- **traffic:** (not pulled) | **pulled:** July 24 2026
- **sale posture:** No sale.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 50mg | $68.00 | $1.36 | ✓ |
| AOD-9604 | 2mg | $38.00 | $19.00 | ✓ |
| AOD-9604 | 5mg | $53.00 | $10.60 | ✗ |
| BPC-157 | 500mcg | $225.00 | $450.00 | ✓ |
| BPC-157 | 10mg | $44.00 | $4.40 | ✓ |
| Cagrilintide (listed as EZP-CG) | 5mg | $44.00 | $8.80 | ✓ |
| Cagrilintide (listed as EZP-CG) | 10mg | $88.00 | $8.80 | ✓ |
| Cartalax [backlog] | 10mg | $58.00 | $5.80 | ✓ |
| Cibinetide | 10mg | $48.00 | $4.80 | ✓ |
| CJC-1295 | 5mg | $38.00 | $7.60 | ✓ |
| DSIP | 10mg | $58.00 | $5.80 | ✓ |
| Epitalon | 10mg | $38.00 | $3.80 | ✓ |
| GHK-Cu | 50mg | $35.00 | $0.70 | ✓ |
| GHK-Cu | 100mg | $53.00 | $0.53 | ✓ |
| Ipamorelin | 10mg | $44.00 | $4.40 | ✓ |
| Kisspeptin-10 | 10mg | $44.00 | $4.40 | ✗ |
| KPV | 10mg | $44.00 | $4.40 | ✓ |
| LL-37 | 10mg | $78.00 | $7.80 | ✓ |
| Melanotan I | 10mg | $44.00 | $4.40 | ✓ |
| Melanotan II | 10mg | $44.00 | $4.40 | ✓ |
| MOTS-C | 10mg | $54.00 | $5.40 | ✓ |
| NAD+ | 250mg | $44.00 | $0.18 | ✓ |
| NAD+ | 500mg | $68.00 | $0.14 | ✓ |
| Oxytocin | 10mg | $58.00 | $5.80 | ✓ |
| PDA | 10mg | $44.00 | $4.40 | ✓ |
| PT-141 | 10mg | $44.00 | $4.40 | ✓ |
| Retatrutide (listed as EZP-3P) | 6mg | $48.00 | $8.00 | ✓ |
| Retatrutide (listed as EZP-3P) | 10mg | $78.00 | $7.80 | ✓ |
| Retatrutide (listed as EZP-3P) | 12mg | $82.00 | $6.83 | ✓ |
| Retatrutide (listed as EZP-3P) | 20mg | $108.00 | $5.40 | ✓ |
| Retatrutide (listed as EZP-3P) | 24mg | $118.00 | $4.92 | ✓ |
| Retatrutide (listed as EZP-3P) | 48mg | $208.00 | $4.33 | ✓ |
| Selank | 10mg | $44.00 | $4.40 | ✓ |
| Semaglutide (listed as EZP-1P) | 5mg | $35.00 | $7.00 | ✓ |
| Semaglutide (listed as EZP-1P) | 10mg | $48.00 | $4.80 | ✓ |
| Semax | 10mg | $44.00 | $4.40 | ✓ |
| Sermorelin | 5mg | $44.00 | $8.80 | ✓ |
| SLU-PP-332 [backlog] | 50mg | $368.00 | $7.36 | ✗ |
| SNAP-8 [backlog] | 10mg | $35.00 | $3.50 | ✓ |
| Survodutide [backlog] | 10mg | $78.00 | $7.80 | ✓ |
| TB-500 | 10mg | $48.00 | $4.80 | ✓ |
| Tesamorelin | 10mg | $68.00 | $6.80 | ✓ |
| Tesofensine [backlog] | 500mcg | $168.00 | $336.00 | ✓ |
| Thymosin Alpha-1 | 10mg | $58.00 | $5.80 | ✓ |
| Tirzepatide (listed as EZP-2P) | 10mg | $53.00 | $5.30 | ✓ |
| Tirzepatide (listed as EZP-2P) | 15mg | $71.00 | $4.73 | ✓ |
| Tirzepatide (listed as EZP-2P) | 20mg | $88.00 | $4.40 | ✓ |
| Tirzepatide (listed as EZP-2P) | 30mg | $98.00 | $3.27 | ✓ |
| Tirzepatide (listed as EZP-2P) | 60mg | $152.00 | $2.53 | ✓ |
| VIP | 10mg | $58.00 | $5.80 | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| Beauty (GHK-Cu/KPV) [backlog] | GHK-Cu/KPV | 70mg | $85.00 | not published | ✓ |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $53.00 | 5/5 (published) | ✓ |
| Deadpool (BPC-157/TB-500/Cartalax) [backlog] | BPC-157/TB-500 | 30mg | $138.00 | 10/10/10 (published) | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $88.00 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $98.00 | not published | ✓ |
| Reta/Cagri blend [backlog] |  | 15mg | $118.00 | not published | ✓ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 13mg | $88.00 | 10/3 (published) | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $88.00 | 10/10 (published) | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $53.00 | 5/5 (published) | ✓ |

### Sprays: none
### Excluded: out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Glacier Aminos
- **slug:** glacier-aminos | **code:** PROF10 | **discount:** 10% off | **url:** glacieraminos.shop
- **traffic:** (not pulled) | **pulled:** July 24 2026
- **sale posture:** Product sale 1/70.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $51.99 | $5.20 | ✓ |
| 5-Amino-1MQ | 50mg | $99.99 | $2.00 | ✓ |
| Adamax | 10mg | $64.99 | $6.50 | ✓ |
| AOD-9604 | 10mg | $92.99 | $9.30 | ✓ |
| BPC-157 | 10mg | $45.99 | $4.60 | ✓ |
| BPC-157 | 20mg | $79.99 | $4.00 | ✓ |
| Cagrilintide | 5mg | $56.99 | $11.40 | ✓ |
| Cagrilintide | 10mg | $101.99 | $10.20 | ✓ |
| Cartalax [backlog] | 20mg | $67.99 | $3.40 | ✓ |
| Cibinetide | 10mg | $54.99 | $5.50 | ✓ |
| CJC-1295 | 5mg | $51.99 | $10.40 | ✓ |
| CJC-1295 | 10mg | $67.99 | $6.80 | ✓ |
| DSIP | 10mg | $59.99 | $6.00 | ✓ |
| Epitalon | 10mg | $32.99 | $3.30 | ✓ |
| FOXO4-DRI [backlog] | 10mg | $134.99 | $13.50 | ✓ |
| GHK-Cu | — | $39.99 | — | ✓ |
| GHK-Cu | 50mg | $41.99 | $0.84 | ✓ |
| GHK-Cu | 100mg | $62.99 | $0.63 | ✓ |
| GLA-1 SM [coded, UNVERIFIED] | 15mg | $71.99 | $4.80 | ✓ |
| GLA-2 TRZ [coded, UNVERIFIED] | 10mg | $62.99 | $6.30 | ✓ |
| GLA-2 TRZ [coded, UNVERIFIED] | 20mg | $77.99 | $3.90 | ✓ |
| GLA-2 TRZ [coded, UNVERIFIED] | 30mg | $97.99 | $3.27 | ✓ |
| GLA-2 TRZ [coded, UNVERIFIED] | 45mg | $131.99 | $2.93 | ✓ |
| GLA-2 TRZ [coded, UNVERIFIED] | 60mg | $164.99 | $2.75 | ✓ |
| GLA-3 RT [coded, UNVERIFIED] | 10mg | $61.99 | $6.20 | ✓ |
| GLA-3 RT [coded, UNVERIFIED] | 20mg | $110.99 | $5.55 | ✓ |
| GLA-3 RT [coded, UNVERIFIED] | 30mg | $149.99 | $5.00 | ✓ |
| GLA-3 RT [coded, UNVERIFIED] | 50mg | $213.99 | $4.28 | ✓ |
| GLA-3 RT [coded, UNVERIFIED] | 60mg | $248.99 | $4.15 | ✓ |
| Glutathione | 1500mg | $75.99 | $0.05 | ✓ |
| Ipamorelin | 10mg | $51.99 | $5.20 | ✓ |
| Kisspeptin-10 | 10mg | $40.99 | $4.10 | ✓ |
| KPV | 10mg | $51.99 | $5.20 | ✓ |
| Melanotan I | 10mg | $33.99 | $3.40 | ✓ |
| Melanotan II | 10mg | $33.99 | $3.40 | ✓ |
| MOTS-C | 10mg | $45.99 | $4.60 | ✓ |
| MOTS-C | 20mg | $79.99 | $4.00 | ✓ |
| NAD+ | 500mg | $56.99 | $0.11 | ✓ |
| Oxytocin | 10mg | $55.99 | $5.60 | ✓ |
| Pinealon | 10mg | $49.99 | $5.00 | ✓ |
| PT-141 | 10mg | $40.99 | $4.10 | ✓ |
| Selank | 10mg | $40.99 | $4.10 | ✓ |
| Selank | 20mg | $81.99 | $4.10 | ✓ |
| Semax | 10mg | $40.99 | $4.10 | ✓ |
| Sermorelin | 10mg | $62.99 | $6.30 | ✓ |
| SLU-PP-332 [backlog] | 5mg | $49.99 | $10.00 | ✓ |
| SNAP-8 [backlog] | — | $148.99 | — | ✓ |
| TB-500 | 10mg | $58.99 | $5.90 | ✓ |
| Tesamorelin | 10mg | $67.99 | $6.80 | ✓ |
| Tesamorelin | 20mg | $117.99 | $5.90 | ✓ |
| Testagen [backlog] | 20mg | $67.99 | $3.40 | ✓ |
| Thymosin Alpha-1 | 10mg | $63.99 | $6.40 | ✓ |
| VIP | 10mg | $65.99 | $6.60 | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $56.99 | not published | ✓ |
| GHK-Cu/KPV blend [backlog] |  | — | $72.99 | not published | ✗ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $96.99 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $118.99 | not published | ✓ |
| Reta/Cagri blend [backlog] |  | 24mg | $129.99 | not published | ✗ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 16mg | $104.99 | 13/3 (published) | ✓ |
| Tirz/Reta blend [backlog] |  | 20mg | $109.99 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 60mg | $145.99 | not published | ✗ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $59.99 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $99.99 | not published | ✓ |

### Sprays / strips (separate format, no $/mg)
| Product | Size | Base | Stock |
| --- | --- | --- | --- |
| Adamax (spray) | 15mg | $159.99 | ✗ |
| NAD+ (spray) | 1500mg | $114.99 | ✗ |
| PT-141 (spray) | 30mg | $119.99 | ✗ |
| Selank (spray) | 50mg | $129.99 | ✗ |
| Selank (spray) | 40mg | $144.99 | ✗ |
| Semax (spray) | 50mg | $149.99 | ✗ |
| SS-31 (spray) | 10mg | $49.99 | ✓ |

### Excluded: clinical/other, oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Ignite Peptides
- **slug:** ignite-peptides | **code:** PROF10 | **discount:** 10% off | **url:** ignitepeptides.com
- **traffic:** (not pulled) | **pulled:** July 25 2026
- **sale posture:** Product sale 5/34; code stacks.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 5mg | $50.00 | $10.00 | ✓ |
| BPC-157 | 10mg | $50.00 | $5.00 | ✗ |
| CJC-1295 | 10mg | $50.00 | $5.00 | ✓ |
| DSIP | 5mg | $30.00 | $6.00 | ✓ |
| GHK-Cu | 100mg | $75.00 | $0.75 | ✓ |
| Glutathione | 750mg | $65.00 | $0.09 | ✓ |
| Ipamorelin | 10mg | $50.00 | $5.00 | ✓ |
| KPV | 10mg | $45.00 | $4.50 | ✓ |
| Melanotan II | 10mg | $40.00 | $4.00 | ✓ |
| MOTS-C | 10mg | $48.00 | $4.80 | ✓ |
| NAD+ | 500mg | $100.00 | $0.20 | ✓ |
| PT-141 | 10mg | $30.00 | $3.00 | ✓ |
| Retatrutide (listed as GLP-3 (RT)) | 10mg | $75.00 | $7.50 | ✓ |
| Retatrutide (listed as GLP-3 (RT)) | 20mg | $140.00 | $7.00 | ✗ |
| Selank | 10mg | $30.00 | $3.00 | ✓ |
| Semaglutide (listed as GLP-1 (S)) | 5mg | $68.50 | $13.70 | ✓ |
| Semaglutide (listed as GLP-1 (S)) | 20mg | $170.00 | $8.50 | ✓ |
| Semax | 10mg | $40.00 | $4.00 | ✓ |
| Sermorelin | 5mg | $50.00 | $10.00 | ✓ |
| Sermorelin | 10mg | $80.00 | $8.00 | ✓ |
| SNAP-8 [backlog] | 10mg | $45.00 | $4.50 | ✓ |
| TB-500 | 5mg | $40.00 | $8.00 | ✗ |
| TB-500 | 10mg | $65.00 | $6.50 | ✓ |
| Tesamorelin | 10mg | $100.00 | $10.00 | ✓ |
| Tirzepatide (listed as GLP-2 (TZ)) | 10mg | $100.00 | $10.00 | ✓ |
| Tirzepatide (listed as GLP-2 (TZ)) | 30mg | $150.00 | $5.00 | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | — | $100.00 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $150.00 | 10/10/50 (published) | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | — | $150.00 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $90.00 | 5/5 (published) | ✓ |

### Sprays: none
### Excluded: out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Integrative Peptides
- **slug:** integrative-peptides | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** integrativepeptides.com
- **traffic:** (not pulled) | **pulled:** July 24 2026
- **sale posture:** Product sale 1/73.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| Epitalon | — | $150.00 | — | ✓ |
| KPV | — | $150.00 | — | ✓ |
| Thymogen | — | $150.00 | — | ✓ |

### Sprays: none
### Excluded: oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Oasis Labs
- **slug:** oasis-labs | **code:** PROF15 | **discount:** 15% off | **url:** myoasislabs.com
- **traffic:** (not pulled) | **pulled:** July 25 2026
- **sale posture:** Product sale 7/54; code stacks.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $69.00 | $6.90 | ✓ |
| AOD-9604 | 5mg | $54.50 | $10.90 | ✓ |
| BPC-157 | 5mg | $30.00 | $6.00 | ✓ |
| BPC-157 | 10mg | $52.50 | $5.25 | ✓ |
| Cagrilintide | 5mg | $81.00 | $16.20 | ✓ |
| CJC-1295 | 5mg | $42.00 | $8.40 | ✓ |
| DSIP | 5mg | $37.50 | $7.50 | ✓ |
| Epitalon | 50mg | $123.00 | $2.46 | ✓ |
| FOXO4-DRI [backlog] | 10mg | $217.50 | $21.75 | ✓ |
| GHK-Cu | 50mg | $44.28 | $0.89 | ✓ |
| GHK-Cu | 100mg | $67.85 | $0.68 | ✓ |
| GHRP-2 | 10mg | $47.00 | $4.70 | ✓ |
| GHRP-6 | 10mg | $47.00 | $4.70 | ✓ |
| Glutathione | 1500mg | $84.00 | $0.06 | ✓ |
| IGF-1 LR3 | 1mg | $74.50 | $74.50 | ✓ |
| Ipamorelin | 5mg | $34.50 | $6.90 | ✓ |
| Kisspeptin-10 | 5mg | $52.50 | $10.50 | ✓ |
| KPV | 10mg | $47.00 | $4.70 | ✓ |
| LL-37 | 10mg | $65.00 | $6.50 | ✓ |
| Melanotan II | 10mg | $34.50 | $3.45 | ✓ |
| MOTS-C | 10mg | $48.50 | $4.85 | ✓ |
| MOTS-C | 40mg | $160.50 | $4.01 | ✓ |
| NAD+ | 500mg | $79.93 | $0.16 | ✓ |
| NAD+ | 1000mg | $113.85 | $0.11 | ✓ |
| PT-141 | 10mg | $36.00 | $3.60 | ✓ |
| Retatrutide (listed as GLP3(R)) | 5mg | $54.05 | $10.81 | ✓ |
| Retatrutide (listed as GLP3(R)) | 10mg | $84.53 | $8.45 | ✓ |
| Retatrutide (listed as GLP3(R)) | 15mg | $122.48 | $8.17 | ✓ |
| Retatrutide (listed as GLP3(R)) | 20mg | $163.30 | $8.17 | ✓ |
| Retatrutide (listed as GLP3(R)) | 30mg | $216.20 | $7.21 | ✓ |
| Retatrutide (listed as GLP3(R)) | 40mg | $288.08 | $7.20 | ✓ |
| Retatrutide (listed as GLP3(R)) | 60mg | $411.70 | $6.86 | ✓ |
| Selank | 10mg | $52.50 | $5.25 | ✓ |
| Semax | 10mg | $48.50 | $4.85 | ✓ |
| Sermorelin | 5mg | $59.50 | $11.90 | ✓ |
| SLU-PP-332 [backlog] | 250mcg | $171.00 | $684.00 | ✓ |
| SLU-PP-332 [backlog] | 5mg | $74.50 | $14.90 | ✓ |
| SNAP-8 [backlog] | 10mg | $47.00 | $4.70 | ✓ |
| TB-500 | 10mg | $57.00 | $5.70 | ✓ |
| Tesamorelin | 10mg | $84.00 | $8.40 | ✓ |
| Tesofensine [backlog] | 500mcg | $223.50 | $447.00 | ✓ |
| Thymosin Alpha-1 | 10mg | $65.00 | $6.50 | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| GLOW | GHK-Cu/BPC-157/TB-500 | 10mg | $120.18 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 10mg | $144.90 | not published | ✓ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 1mg | $98.00 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 5mg | $64.40 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $108.10 | not published | ✓ |

### Sprays: none
### Excluded: oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Peptide Partners
- **slug:** peptide-partners | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** peptide.partners
- **traffic:** (not pulled) | **pulled:** July 24 2026
- **sale posture:** Product sale 16/38; code stacks.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 20mg | $56.00 | $2.80 | ✓ |
| 5-Amino-1MQ | 50mg | $120.00 | $2.40 | ✓ |
| 5-Amino-1MQ | 100mg | $195.00 | $1.95 | ✓ |
| AOD-9604 | 20mg | $134.00 | $6.70 | ✓ |
| AOD-9604 | 50mg | $300.00 | $6.00 | ✓ |
| AOD-9604 | 100mg | $520.00 | $5.20 | ✓ |
| BPC-157 | 20mg | $200.00 | $10.00 | ✓ |
| BPC-157 | 50mg | $400.00 | $8.00 | ✓ |
| BPC-157 | 100mg | $540.00 | $5.40 | ✓ |
| BPC-157 | 200mg | $1,080.00 | $5.40 | ✓ |
| Cagrilintide | 50mg | $335.00 | $6.70 | ✓ |
| Cagrilintide | 100mg | $610.00 | $6.10 | ✓ |
| Cagrilintide | 150mg | $835.00 | $5.57 | ✓ |
| Cagrilintide | 200mg | $1,050.00 | $5.25 | ✓ |
| CJC-1295 | 20mg | $175.00 | $8.75 | ✓ |
| CJC-1295 | 50mg | $440.00 | $8.80 | ✓ |
| CJC-1295 | 100mg | $880.00 | $8.80 | ✓ |
| CJC-1295 | 200mg | $1,760.00 | $8.80 | ✓ |
| DSIP | 10mg | $110.00 | $11.00 | ✓ |
| DSIP | 25mg | $275.00 | $11.00 | ✓ |
| DSIP | 50mg | $550.00 | $11.00 | ✓ |
| Epitalon | 80mg | $216.00 | $2.70 | ✓ |
| Epitalon | 200mg | $480.00 | $2.40 | ✓ |
| Epitalon | 400mg | $792.00 | $1.98 | ✓ |
| GHK-Cu | 200mg | $275.00 | $1.38 | ✓ |
| GHK-Cu | 500mg | $550.00 | $1.10 | ✓ |
| GHK-Cu | 1000mg | $1,320.00 | $1.32 | ✓ |
| GHK-Cu | 2000mg | $2,625.00 | $1.31 | ✓ |
| Humanin [backlog] | 20mg | $330.00 | $16.50 | ✗ |
| Humanin [backlog] | 50mg | $825.00 | $16.50 | ✗ |
| Humanin [backlog] | 100mg | $1,750.00 | $17.50 | ✗ |
| Ipamorelin | 20mg | $165.00 | $8.25 | ✓ |
| Ipamorelin | 50mg | $420.00 | $8.40 | ✓ |
| Ipamorelin | 100mg | $840.00 | $8.40 | ✓ |
| Ipamorelin | 200mg | $1,670.00 | $8.35 | ✓ |
| KPV | 20mg | $88.00 | $4.40 | ✓ |
| KPV | 50mg | $190.00 | $3.80 | ✓ |
| KPV | 100mg | $320.00 | $3.20 | ✓ |
| MOTS-C | 20mg | $240.00 | $12.00 | ✓ |
| MOTS-C | 50mg | $605.00 | $12.10 | ✓ |
| MOTS-C | 80mg | $252.00 | $3.15 | ✗ |
| MOTS-C | 100mg | $1,210.00 | $12.10 | ✓ |
| MOTS-C | 200mg | $525.00 | $2.62 | ✗ |
| MOTS-C | 400mg | $800.00 | $2.00 | ✗ |
| NAD+ | 1500mg | $600.00 | $0.40 | ✗ |
| NAD+ | 1800mg | $660.00 | $0.37 | ✓ |
| NAD+ | 3750mg | $1,700.00 | $0.45 | ✗ |
| NAD+ | 4500mg | $1,750.00 | $0.39 | ✓ |
| NAD+ | 7500mg | $3,000.00 | $0.40 | ✗ |
| NAD+ | 9000mg | $3,300.00 | $0.37 | ✓ |
| Pinealon | 40mg | $100.00 | $2.50 | ✗ |
| Pinealon | 100mg | $225.00 | $2.25 | ✗ |
| Pinealon | 200mg | $340.00 | $1.70 | ✗ |
| PT-141 | 20mg | $84.00 | $4.20 | ✓ |
| PT-141 | 50mg | $192.00 | $3.84 | ✓ |
| PT-141 | 100mg | $320.00 | $3.20 | ✓ |
| Retatrutide | 24mg | $124.00 | $5.17 | ✗ |
| Retatrutide | 48mg | $230.00 | $4.79 | ✓ |
| Retatrutide | 60mg | $290.00 | $4.83 | ✗ |
| Retatrutide | 120mg | $480.00 | $4.00 | ✓ |
| Retatrutide | 240mg | $880.00 | $3.67 | ✓ |
| Retatrutide | 480mg | $1,512.00 | $3.15 | ✓ |
| Selank | 60mg | $234.00 | $3.90 | ✗ |
| Selank | 150mg | $495.00 | $3.30 | ✗ |
| Selank | 300mg | $840.00 | $2.80 | ✗ |
| Selank | 600mg | $1,380.00 | $2.30 | ✗ |
| Semaglutide | 50mg | $285.00 | $5.70 | ✓ |
| Semaglutide | 100mg | $518.00 | $5.18 | ✓ |
| Semaglutide | 150mg | $754.00 | $5.03 | ✓ |
| Semaglutide | 200mg | $976.00 | $4.88 | ✓ |
| Semax | 40mg | $60.00 | $1.50 | ✗ |
| Semax | 100mg | $135.00 | $1.35 | ✗ |
| Semax | 200mg | $230.00 | $1.15 | ✗ |
| Sermorelin | 20mg | $98.00 | $4.90 | ✓ |
| Sermorelin | 50mg | $212.00 | $4.24 | ✓ |
| Sermorelin | 100mg | $411.00 | $4.11 | ✓ |
| Sermorelin | 200mg | $797.00 | $3.98 | ✓ |
| SS-31 | 20mg | $145.00 | $7.25 | ✓ |
| SS-31 | 50mg | $363.00 | $7.26 | ✓ |
| SS-31 | 100mg | $320.00 | $3.20 | ✓ |
| SS-31 | 250mg | $687.00 | $2.75 | ✓ |
| SS-31 | 500mg | $1,125.00 | $2.25 | ✓ |
| TB-500 | 20mg | $230.00 | $11.50 | ✓ |
| TB-500 | 50mg | $450.00 | $9.00 | ✓ |
| TB-500 | 100mg | $630.00 | $6.30 | ✓ |
| Tesamorelin | 20mg | $122.00 | $6.10 | ✗ |
| Tesamorelin | 50mg | $287.00 | $5.74 | ✗ |
| Tesamorelin | 100mg | $514.00 | $5.14 | ✗ |
| Tesamorelin | 200mg | $898.00 | $4.49 | ✗ |
| Thymosin Alpha-1 | 20mg | $98.00 | $4.90 | ✓ |
| Thymosin Alpha-1 | 50mg | $210.00 | $4.20 | ✓ |
| Thymosin Alpha-1 | 100mg | $370.00 | $3.70 | ✓ |
| Tirzepatide | 80mg | $260.00 | $3.25 | ✓ |
| Tirzepatide | 200mg | $559.00 | $2.79 | ✓ |
| Tirzepatide | 400mg | $1,085.00 | $2.71 | ✓ |
| Tirzepatide | 800mg | $2,105.00 | $2.63 | ✓ |
| Tirzepatide | 1200mg | $3,090.00 | $2.58 | ✓ |
| VIP | 20mg | $230.00 | $11.50 | ✓ |
| VIP | 50mg | $575.00 | $11.50 | ✓ |
| VIP | 100mg | $1,200.00 | $12.00 | ✓ |
| VIP | 200mg | $2,320.00 | $11.60 | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 20mg | $430.00 | not published | ✓ |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 20mg | $1,095.00 | not published | ✓ |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 20mg | $2,100.00 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $182.00 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $390.00 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $770.00 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $240.00 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $560.00 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $975.00 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $630.00 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $1,100.00 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $2,200.00 | not published | ✓ |

### Sprays: none
### Excluded: out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Peptides.gg
- **slug:** peptides-gg | **code:** PROF15 | **discount:** 15% off | **url:** peptides.gg
- **traffic:** (not pulled) | **pulled:** July 25 2026
- **sale posture:** No sale.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 5mg | $40.00 | $8.00 | ✓ |
| 5-Amino-1MQ | 50mg | $169.00 | $3.38 | ✓ |
| Adamax | 10mg | $65.00 | $6.50 | ✓ |
| Adipotide | 5mg | $39.99 | $8.00 | ✓ |
| Adipotide | 10mg | $75.00 | $7.50 | ✓ |
| AOD-9604 | 2mg | $30.00 | $15.00 | ✓ |
| AOD-9604 | 5mg | $45.00 | $9.00 | ✓ |
| AOD-9604 | 10mg | $80.00 | $8.00 | ✓ |
| BPC-157 | 10mg | $65.00 | $6.50 | ✓ |
| BPC-157 | 20mg | $125.00 | $6.25 | ✓ |
| Bronchogen [backlog] | 20mg | $55.00 | $2.75 | ✓ |
| Cagrilintide | 5mg | $100.00 | $20.00 | ✓ |
| Cagrilintide | 10mg | $155.00 | $15.50 | ✓ |
| Cardiogen | 20mg | $50.00 | $2.50 | ✓ |
| Cartalax [backlog] | 20mg | $55.00 | $2.75 | ✓ |
| Chonluten [backlog] | 20mg | $50.00 | $2.50 | ✓ |
| Cibinetide | 10mg | $50.00 | $5.00 | ✓ |
| Cibinetide | 16mg | $70.00 | $4.38 | ✓ |
| CJC-1295 | 5mg | $36.00 | $7.20 | ✓ |
| CJC-1295 | 10mg | $65.00 | $6.50 | ✓ |
| Cortagen | 20mg | $45.00 | $2.25 | ✓ |
| DSIP | 5mg | $33.00 | $6.60 | ✓ |
| DSIP | 10mg | $55.00 | $5.50 | ✓ |
| DSIP | 15mg | $75.00 | $5.00 | ✓ |
| Epitalon | 10mg | $35.00 | $3.50 | ✓ |
| Epitalon | 20mg | $80.00 | $4.00 | ✓ |
| Epitalon | 50mg | $120.00 | $2.40 | ✓ |
| GHK-Cu | 50mg | $53.00 | $1.06 | ✓ |
| GHK-Cu | 100mg | $65.00 | $0.65 | ✓ |
| GHRP-2 | 10mg | $36.99 | $3.70 | ✓ |
| GHRP-6 | 5mg | $20.00 | $4.00 | ✓ |
| GHRP-6 | 10mg | $37.00 | $3.70 | ✓ |
| Glutathione | 600mg | $45.00 | $0.07 | ✓ |
| Glutathione | 1500mg | $75.00 | $0.05 | ✓ |
| Hexarelin | 5mg | $40.00 | $8.00 | ✓ |
| Humanin [backlog] | 10mg | $139.00 | $13.90 | ✓ |
| IGF-1 LR3 | 1mg | $65.00 | $65.00 | ✓ |
| Ipamorelin | 10mg | $59.00 | $5.90 | ✓ |
| Kisspeptin-10 | 5mg | $40.00 | $8.00 | ✓ |
| Kisspeptin-10 | 10mg | $75.00 | $7.50 | ✓ |
| KPV | 10mg | $50.00 | $5.00 | ✓ |
| KPV | 30mg | $120.00 | $4.00 | ✓ |
| Livagen [backlog] | 20mg | $60.00 | $3.00 | ✓ |
| LL-37 | 10mg | $150.00 | $15.00 | ✓ |
| Mazdutide [backlog] | 6mg | $100.00 | $16.67 | ✓ |
| Melanotan I | 10mg | $40.00 | $4.00 | ✓ |
| Melanotan II | 10mg | $36.00 | $3.60 | ✓ |
| MGF | 2mg | $40.00 | $20.00 | ✓ |
| MOTS-C | 10mg | $49.00 | $4.90 | ✓ |
| MOTS-C | 20mg | $96.00 | $4.80 | ✓ |
| MOTS-C | 40mg | $190.00 | $4.75 | ✓ |
| NAD+ | 500mg | $65.00 | $0.13 | ✓ |
| NAD+ | 1000mg | $125.00 | $0.12 | ✓ |
| Ovagen [backlog] | 20mg | $60.00 | $3.00 | ✓ |
| Oxytocin | 10mg | $50.00 | $5.00 | ✓ |
| Pancragen [backlog] | 20mg | $60.00 | $3.00 | ✓ |
| Pinealon | 10mg | $35.00 | $3.50 | ✓ |
| Pinealon | 20mg | $60.00 | $3.00 | ✓ |
| PNC-27 [backlog] | 30mg | $100.00 | $3.33 | ✓ |
| Prostamax [backlog] | 20mg | $60.00 | $3.00 | ✓ |
| PT-141 | 10mg | $30.00 | $3.00 | ✓ |
| Selank | 10mg | $33.00 | $3.30 | ✓ |
| Selank | 30mg | $65.00 | $2.17 | ✓ |
| Semax | 30mg | $69.00 | $2.30 | ✓ |
| Sermorelin | 2mg | $25.00 | $12.50 | ✓ |
| Sermorelin | 5mg | $43.00 | $8.60 | ✓ |
| SLU-PP-332 [backlog] | 1mg | $105.00 | $105.00 | ✓ |
| SLU-PP-332 [backlog] | 5mg | $89.99 | $18.00 | ✓ |
| SNAP-8 [backlog] | 20mg | $37.99 | $1.90 | ✓ |
| SS-31 | 10mg | $75.00 | $7.50 | ✓ |
| SS-31 | 50mg | $200.00 | $4.00 | ✓ |
| SS-31 | 100mg | $350.00 | $3.50 | ✓ |
| Survodutide [backlog] | 10mg | $110.00 | $11.00 | ✓ |
| TB-500 | 10mg | $65.00 | $6.50 | ✓ |
| Tesamorelin | 10mg | $68.00 | $6.80 | ✓ |
| Tesamorelin | 20mg | $130.00 | $6.50 | ✓ |
| Testagen [backlog] | 20mg | $60.00 | $3.00 | ✓ |
| Thymogen | 20mg | $60.00 | $3.00 | ✓ |
| Thymosin Alpha-1 | 5mg | $55.00 | $11.00 | ✓ |
| Thymosin Alpha-1 | 10mg | $95.00 | $9.50 | ✓ |
| Thymulin [backlog] | 10mg | $40.00 | $4.00 | ✓ |
| Vesilute [backlog] | 20mg | $60.00 | $3.00 | ✓ |
| Vesugen [backlog] | 20mg | $60.00 | $3.00 | ✓ |
| Vilon [backlog] | 20mg | $60.00 | $3.00 | ✓ |
| VIP | 5mg | $55.00 | $11.00 | ✓ |
| VIP | 10mg | $99.00 | $9.90 | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 5mg | $75.00 | not published | ✓ |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $150.00 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $110.00 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $120.00 | not published | ✓ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 5mg | $90.00 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 5mg | $80.00 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $140.00 | not published | ✓ |

### Sprays: none
### Excluded: oral/capsule, oral/tablet/sublingual, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: PureRawz
- **slug:** purerawz | **code:** PROF10 | **discount:** 10% off | **url:** purerawz.co
- **traffic:** (not pulled) | **pulled:** July 25 2026
- **sale posture:** Product sale 28/200; code stacks.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| Adamax | 5mg | $55.00 | $11.00 | ✓ |
| Adamax | 10mg | $67.77 | $6.78 | ✓ |
| Adipotide | 2mg | $50.62 | $25.31 | ✓ |
| Adipotide | 5mg | $70.10 | $14.02 | ✓ |
| Adipotide | 10mg | $94.03 | $9.40 | ✓ |
| AOD-9604 | 5mg | $77.49 | $15.50 | ✓ |
| AOD-9604 | 10mg | $109.02 | $10.90 | ✓ |
| BPC-157 | 5mg | $40.82 | $8.16 | ✓ |
| BPC-157 | 6mg | $164.47 | $27.41 | ✓ |
| BPC-157 | 10mg | $81.64 | $8.16 | ✓ |
| BPC-157 | 15mg | $125.98 | $8.40 | ✓ |
| BPC-157 | 30mg | $272.96 | $9.10 | ✓ |
| Bronchogen [backlog] | 20mg | $69.98 | $3.50 | ✓ |
| Cagrilintide | 5mg | $77.76 | $15.55 | ✓ |
| Cagrilintide | 10mg | $155.54 | $15.55 | ✓ |
| Cagrilintide | 20mg | $380.00 | $19.00 | ✓ |
| Cardiogen | 20mg | $61.78 | $3.09 | ✓ |
| Cartalax [backlog] | 20mg | $66.92 | $3.35 | ✗ |
| Chonluten [backlog] | 20mg | $62.57 | $3.13 | ✓ |
| Cibinetide | 16mg | $103.28 | $6.46 | ✓ |
| CJC-1295 | 2mg | $23.77 | $11.88 | ✓ |
| CJC-1295 | 5mg | $55.64 | $11.13 | ✗ |
| Cortagen | 20mg | $54.57 | $2.73 | ✓ |
| Dihexa [backlog] | 10mg | $104.99 | $10.50 | ✓ |
| Dihexa [backlog] | 500mg | $469.18 | $0.94 | ✓ |
| Dihexa [backlog] | 1000mg | $938.35 | $0.94 | ✓ |
| DSIP | 2mg | $49.90 | $24.95 | ✓ |
| DSIP | 5mg | $56.79 | $11.36 | ✓ |
| Epitalon | 10mg | $42.32 | $4.23 | ✓ |
| Epitalon | 20mg | $81.96 | $4.10 | ✓ |
| Epitalon | 50mg | $161.66 | $3.23 | ✓ |
| Epitalon | 100mg | $171.57 | $1.72 | ✓ |
| Follistatin | 1mg | $132.12 | $132.12 | ✗ |
| FOXO4-DRI [backlog] | 10mg | $327.39 | $32.74 | ✓ |
| GHRP-2 | 10mg | $42.50 | $4.25 | ✓ |
| GHRP-6 | 5mg | $37.28 | $7.46 | ✓ |
| GHRP-6 | 10mg | $48.20 | $4.82 | ✓ |
| GLP-1 [coded, UNVERIFIED] | 5mg | $206.71 | $41.34 | ✓ |
| GLP-1 [coded, UNVERIFIED] | 10mg | $379.75 | $37.98 | ✓ |
| GLP-1.2 [coded, UNVERIFIED] | 5mg | $61.33 | $12.27 | ✓ |
| GLP-1.2 [coded, UNVERIFIED] | 10mg | $122.66 | $12.27 | ✓ |
| GLP-1.2 [coded, UNVERIFIED] | 60mg | $650.59 | $10.84 | ✓ |
| GLP-1.3 [coded, UNVERIFIED] | 1mg | $53.82 | $53.82 | ✓ |
| GLP-1.3 [coded, UNVERIFIED] | 3mg | $65.54 | $21.85 | ✓ |
| GLP-1.3 [coded, UNVERIFIED] | 5mg | $86.03 | $17.21 | ✗ |
| Glutathione | — | $32.22 | — | ✓ |
| Glutathione | 33mg | $40.98 | $1.24 | ✓ |
| Glutathione | 600mg | $76.30 | $0.13 | ✓ |
| Glutathione | 1200mg | $132.55 | $0.11 | ✓ |
| Glutathione | 1500mg | $166.40 | $0.11 | ✓ |
| Hexarelin | 2mg | $34.98 | $17.49 | ✓ |
| Hexarelin | 5mg | $52.77 | $10.55 | ✓ |
| HGH Fragment 176-191 [backlog] | 2mg | $32.06 | $16.03 | ✓ |
| HGH Fragment 176-191 [backlog] | 5mg | $80.16 | $16.03 | ✓ |
| HGH Fragment 176-191 [backlog] | 10mg | $160.30 | $16.03 | ✓ |
| Humanin [backlog] | 5mg | $92.92 | $18.58 | ✓ |
| Humanin [backlog] | 10mg | $168.87 | $16.89 | ✓ |
| IGF-1 DES | 1mg | $109.93 | $109.93 | ✓ |
| IGF-1 LR3 | 0.1mg | $6.90 | $69.00 | ✓ |
| IGF-1 LR3 | 200mcg | $17.32 | $86.60 | ✓ |
| IGF-1 LR3 | 1mg | $68.95 | $68.95 | ✓ |
| Ipamorelin | 2mg | $29.23 | $14.62 | ✓ |
| Ipamorelin | 5mg | $54.88 | $10.98 | ✓ |
| Kisspeptin-10 | 5mg | $74.00 | $14.80 | ✓ |
| Kisspeptin-10 | 10mg | $129.20 | $12.92 | ✓ |
| KPV | 5mg | $36.80 | $7.36 | ✓ |
| KPV | 10mg | $90.45 | $9.04 | ✓ |
| KPV | 50mg | $275.20 | $5.50 | ✓ |
| Livagen [backlog] | 20mg | $70.48 | $3.52 | ✓ |
| LL-37 | 5mg | $104.37 | $20.87 | ✓ |
| Mazdutide [backlog] | 6mg | $115.97 | $19.33 | ✓ |
| Mazdutide [backlog] | 12mg | $208.96 | $17.41 | ✓ |
| Melanotan II | 10mg | $62.61 | $6.26 | ✓ |
| MGF | 2mg | $33.31 | $16.66 | ✓ |
| MGF | 5mg | $82.51 | $16.50 | ✓ |
| MGF | 10mg | $136.06 | $13.61 | ✓ |
| MK-677 | — | $134.34 | — | ✓ |
| MK-677 | 17mg | $33.59 | $1.98 | ✓ |
| MK-677 | 33mg | $134.34 | $4.07 | ✓ |
| MK-677 | 64mg | $85.97 | $1.34 | ✗ |
| MK-677 | 67mg | $268.69 | $4.01 | ✓ |
| MOTS-C | 5mg | $50.59 | $10.12 | ✓ |
| MOTS-C | 10mg | $101.18 | $10.12 | ✓ |
| MOTS-C | 20mg | $202.36 | $10.12 | ✓ |
| MOTS-C | 40mg | $404.72 | $10.12 | ✓ |
| Ovagen [backlog] | 5mg | $21.98 | $4.40 | ✓ |
| Ovagen [backlog] | 20mg | $66.41 | $3.32 | ✓ |
| Oxytocin | 2mg | $36.14 | $18.07 | ✓ |
| Oxytocin | 5mg | $59.63 | $11.93 | ✓ |
| Pancragen [backlog] | 20mg | $61.78 | $3.09 | ✓ |
| Pinealon | 5mg | $65.00 | $13.00 | ✓ |
| Pinealon | 10mg | $90.00 | $9.00 | ✓ |
| Pinealon | 20mg | $130.00 | $6.50 | ✓ |
| PNC-27 [backlog] | 5mg | $163.40 | $32.68 | ✓ |
| PT-141 | 10mg | $57.12 | $5.71 | ✓ |
| Retatrutide | 60mg | $300.00 | $5.00 | ✓ |
| Retatrutide (listed as LY3437943) | 5mg | $95.07 | $19.01 | ✓ |
| Retatrutide (listed as LY3437943) | 8mg | $152.10 | $19.01 | ✓ |
| Retatrutide (listed as LY3437943) | 10mg | $190.13 | $19.01 | ✓ |
| Retatrutide (listed as LY3437943) | 12mg | $228.16 | $19.01 | ✓ |
| Selank | 5mg | $37.75 | $7.55 | ✓ |
| Selank | 10mg | $32.42 | $3.24 | ✓ |
| Selank | 20mg | $110.98 | $5.55 | ✓ |
| Selank | 30mg | $71.16 | $2.37 | ✓ |
| Selank | 40mg | $183.70 | $4.59 | ✓ |
| Selank | 50mg | $157.87 | $3.16 | ✓ |
| Semax | 5mg | $34.50 | $6.90 | ✓ |
| Semax | 10mg | $68.80 | $6.88 | ✓ |
| Semax | 30mg | $100.94 | $3.36 | ✓ |
| Semax | 60mg | $205.15 | $3.42 | ✓ |
| Sermorelin | 2mg | $27.60 | $13.80 | ✓ |
| Sermorelin | 5mg | $97.81 | $19.56 | ✓ |
| Sermorelin | 10mg | $97.81 | $9.78 | ✓ |
| Sermorelin | 20mg | $241.86 | $12.09 | ✓ |
| SNAP-8 [backlog] | 10mg | $42.00 | $4.20 | ✓ |
| SNAP-8 [backlog] | 100mg | $260.00 | $2.60 | ✓ |
| SS-31 | 5mg | $45.62 | $9.12 | ✓ |
| SS-31 | 10mg | $91.24 | $9.12 | ✓ |
| Survodutide [backlog] | 10mg | $132.80 | $13.28 | ✓ |
| Tesamorelin | 0.5mg | $6.95 | $13.90 | ✓ |
| Tesamorelin | 2mg | $32.14 | $16.07 | ✓ |
| Tesamorelin | 5mg | $69.44 | $13.89 | ✗ |
| Tesamorelin | 10mg | $138.85 | $13.88 | ✓ |
| Tesamorelin | 20mg | $320.50 | $16.02 | ✓ |
| Testagen [backlog] | 20mg | $61.26 | $3.06 | ✗ |
| Thymalin [backlog] | 5mg | $76.92 | $15.38 | ✓ |
| Thymalin [backlog] | 20mg | $121.47 | $6.07 | ✓ |
| Thymalin [backlog] | 50mg | $321.92 | $6.44 | ✓ |
| Thymosin Alpha-1 | 5mg | $79.45 | $15.89 | ✓ |
| Thymosin Alpha-1 | 10mg | $148.60 | $14.86 | ✓ |
| Thymosin Alpha-1 | 20mg | $231.27 | $11.56 | ✗ |
| Thymosin Alpha-1 | 50mg | $424.10 | $8.48 | ✓ |
| Vesugen [backlog] | 20mg | $61.78 | $3.09 | ✓ |
| Vilon [backlog] | 20mg | $64.87 | $3.24 | ✓ |
| VIP | 5mg | $42.48 | $8.50 | ✓ |
| VIP | 10mg | $79.06 | $7.91 | ✓ |
| VIP | 12mg | $95.35 | $7.95 | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 6mg | $82.10 | not published | ✓ |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 1.1mg | $292.44 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $170.00 | not published | ✓ |
| GLP-1.x blend [coded, UNVERIFIED] |  | 0.4mg | $900.48 | not published | ✓ |
| GLP-1.x blend [coded, UNVERIFIED] |  | 0.2mg | $585.48 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $215.00 | not published | ✓ |

### Sprays / strips (separate format, no $/mg)
| Product | Size | Base | Stock |
| --- | --- | --- | --- |
| Adipotide | 100mcg | $119.07 | ✓ |
| AOD-9604 | 100mcg | $138.87 | ✓ |
| BPC-157 | 2.2mg | $268.28 | ✓ |
| BPC-157 | 2.2mg | $270.85 | ✓ |
| BPC-157 | 220mcg | $464.44 | ✓ |
| BPC-157 | 220mcg | $442.84 | ✓ |
| BPC-157 | 600mcg | $370.48 | ✓ |
| BPC-157 | 100mcg | $122.34 | ✓ |
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
| GLP-1 [coded, UNVERIFIED] | 200mcg | $737.62 | ✓ |
| GLP-1 [coded, UNVERIFIED] | 100mcg | $379.75 | ✓ |
| GLP-1.2 [coded, UNVERIFIED] | 200mcg | $572.97 | ✓ |
| GLP-1.2 [coded, UNVERIFIED] | 100mcg | $358.10 | ✓ |
| GLP-1.3 [coded, UNVERIFIED] | 10mcg | $47.38 | ✓ |
| GLP-1.3 [coded, UNVERIFIED] | 30mcg | $120.51 | ✓ |
| Glutathione | 24mg | $109.84 | ✓ |
| Glutathione | 1200mg | $150.91 | ✓ |
| Glutathione | 600mg | $88.37 | ✓ |
| Glutathione (spray) | 28.8mg | $332.13 | ✓ |
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
| Oxytocin | 100mcg | $151.67 | ✓ |
| PT-141 | 100mcg | $115.33 | ✓ |
| Retatrutide (listed as LY3437943) | 100mcg | $381.96 | ✓ |
| Selank | 400mcg | $183.70 | ✓ |
| Selank | 200mcg | $110.98 | ✓ |
| Selank | 300mcg | $144.03 | ✓ |
| Semax | 30mg | $102.57 | ✓ |
| Semax | 60mg | $205.15 | ✓ |
| Semax | 120mg | $410.30 | ✓ |
| Semax | 300mcg | $100.94 | ✓ |
| Sermorelin | 100mcg | $115.23 | ✓ |
| Sermorelin | 200mcg | $241.86 | ✓ |
| Tesamorelin | 200mcg | $320.50 | ✓ |
| Tesamorelin | 1mg | $1,392.51 | ✓ |

### Excluded: oral/capsule, oral/tablet/sublingual, out-of-scope (SARMs/Rx/cosmetics), supply, topical/transdermal — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Royal Peptides
- **slug:** royal-peptides | **code:** PROF10 | **discount:** 10% off | **url:** royal-peptides.com
- **traffic:** (not pulled) | **pulled:** July 25 2026
- **sale posture:** No sale.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 50mg | $90.00 | $1.80 | ✗ |
| Adamax | 10mg | $485.00 | $48.50 | ✓ |
| AOD-9604 | 5mg | $43.00 | $8.60 | ✓ |
| BPC-157 | 10mg | $36.00 | $3.60 | ✓ |
| BPC-157 | 20mg | $80.00 | $4.00 | ✗ |
| Cagrilintide | 5mg | $30.00 | $6.00 | ✓ |
| Cagrilintide | 10mg | $46.50 | $4.65 | ✓ |
| Cibinetide | 10mg | $65.00 | $6.50 | ✓ |
| Cibinetide | 30mg | $55.00 | $1.83 | ✓ |
| CJC-1295 | 5mg | $34.50 | $6.90 | ✓ |
| CJC-1295 | 10mg | $56.00 | $5.60 | ✓ |
| Dihexa [backlog] | 10mg | $47.50 | $4.75 | ✓ |
| DSIP | 5mg | $45.00 | $9.00 | ✓ |
| DSIP | 10mg | $35.00 | $3.50 | ✓ |
| Epitalon | 10mg | $55.00 | $5.50 | ✓ |
| GHK-Cu | 50mg | $32.00 | $0.64 | ✓ |
| GHK-Cu | 100mg | $48.00 | $0.48 | ✓ |
| Glutathione | 1500mg | $47.50 | $0.03 | ✓ |
| IGF-1 LR3 | 1mg | $570.00 | $570.00 | ✓ |
| Ipamorelin | 5mg | $45.00 | $9.00 | ✗ |
| Ipamorelin | 10mg | $40.00 | $4.00 | ✓ |
| Kisspeptin-10 | 10mg | $42.00 | $4.20 | ✗ |
| KPV | 10mg | $37.00 | $3.70 | ✓ |
| MOTS-C | 10mg | $37.50 | $3.75 | ✓ |
| MOTS-C | 40mg | $60.00 | $1.50 | ✓ |
| NAD+ | 100mg | $35.00 | $0.35 | ✓ |
| NAD+ | 500mg | $38.50 | $0.08 | ✗ |
| NAD+ | 1000mg | $35.00 | $0.04 | ✓ |
| Oxytocin | 10mg | $40.00 | $4.00 | ✓ |
| Pinealon | 10mg | $39.00 | $3.90 | ✓ |
| PT-141 | 10mg | $36.50 | $3.65 | ✓ |
| Retatrutide | 5mg | $32.00 | $6.40 | ✓ |
| Retatrutide | 10mg | $40.00 | $4.00 | ✓ |
| Retatrutide | 15mg | $47.00 | $3.13 | ✓ |
| Retatrutide | 20mg | $54.00 | $2.70 | ✓ |
| Retatrutide | 30mg | $55.00 | $1.83 | ✓ |
| Retatrutide | 40mg | $75.00 | $1.88 | ✓ |
| Retatrutide | 50mg | $80.00 | $1.60 | ✓ |
| Retatrutide | 60mg | $87.00 | $1.45 | ✓ |
| Selank | 10mg | $35.00 | $3.50 | ✓ |
| Selank | 20mg | $50.00 | $2.50 | ✓ |
| Semaglutide | 5mg | $20.00 | $4.00 | ✓ |
| Semaglutide | 10mg | $26.00 | $2.60 | ✓ |
| Semaglutide | 15mg | $32.00 | $2.13 | ✓ |
| Semaglutide | 20mg | $40.00 | $2.00 | ✓ |
| Semaglutide | 30mg | $50.00 | $1.67 | ✓ |
| Semax | 10mg | $35.00 | $3.50 | ✓ |
| Sermorelin | 10mg | $40.00 | $4.00 | ✓ |
| SLU-PP-332 [backlog] | 250mcg | $140.00 | $560.00 | ✓ |
| SLU-PP-332 [backlog] | 500mcg | $140.00 | $280.00 | ✓ |
| SLU-PP-332 [backlog] | 2mg | $190.00 | $95.00 | ✓ |
| SLU-PP-332 [backlog] | 5mg | $245.00 | $49.00 | ✓ |
| SLU-PP-332 [backlog] | 10mg | $320.00 | $32.00 | ✓ |
| SS-31 | 10mg | $42.50 | $4.25 | ✓ |
| SS-31 | 50mg | $60.00 | $1.20 | ✗ |
| TB-500 | 10mg | $42.00 | $4.20 | ✓ |
| Tesamorelin | 10mg | $43.50 | $4.35 | ✓ |
| Tesamorelin | 20mg | $120.00 | $6.00 | ✓ |
| Tesofensine [backlog] | 500mcg | $90.00 | $180.00 | ✓ |
| Thymalin [backlog] | 10mg | $390.00 | $39.00 | ✓ |
| Thymosin Alpha-1 | 5mg | $55.00 | $11.00 | ✓ |
| Tirzepatide | 5mg | $25.00 | $5.00 | ✓ |
| Tirzepatide | 10mg | $26.50 | $2.65 | ✓ |
| Tirzepatide | 15mg | $32.00 | $2.13 | ✓ |
| Tirzepatide | 20mg | $36.00 | $1.80 | ✓ |
| Tirzepatide | 30mg | $45.00 | $1.50 | ✓ |
| Tirzepatide | 40mg | $55.00 | $1.38 | ✓ |
| Tirzepatide | 50mg | $60.00 | $1.20 | ✓ |
| Tirzepatide | 60mg | $65.00 | $1.08 | ✓ |
| Tirzepatide | 100mg | $87.50 | $0.88 | ✗ |
| VIP | 10mg | $33.00 | $3.30 | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 40mg | $60.00 | 10/10/20 (published) | ✓ |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 20mg | $45.00 | 5/5/10 (published) | ✓ |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 20mg | $95.00 | not published | ✓ |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $70.00 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 140mg | $45.00 | 10/10/50/70 (published) | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $530.00 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $70.00 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 160mg | $55.00 | 50/10/10/10/80 (published) | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $90.00 | not published | ✓ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 25mg | $51.00 | 10/5/10 (published) | ✓ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | — | $90.00 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $115.00 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $75.00 | not published | ✗ |

### Sprays: none
### Excluded: oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply, topical/transdermal — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Swiss Chems
- **slug:** swiss-chems | **code:** PROF10 | **discount:** 10% off | **url:** swisschems.is
- **traffic:** (not pulled) | **pulled:** July 25 2026
- **sale posture:** Product sale 46/145; code stacks.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| AOD-9604 | 2mg | $6.00 | $3.00 | ✗ |
| BPC-157 | 5mg | $49.99 | $10.00 | ✓ |
| BPC-157 | 10mg | $59.95 | $6.00 | ✓ |
| Bronchogen [backlog] | 20mg | $70.00 | $3.50 | ✓ |
| Cardiogen | 20mg | $63.95 | $3.20 | ✓ |
| Cartalax [backlog] | 20mg | $70.00 | $3.50 | ✓ |
| Chonluten [backlog] | 20mg | $58.99 | $2.95 | ✓ |
| Cibinetide | 16mg | $85.60 | $5.35 | ✗ |
| CJC-1295 | 2mg | $42.95 | $21.48 | ✓ |
| Cortagen | 20mg | $65.00 | $3.25 | ✓ |
| Dihexa [backlog] | 500mg | $97.99 | $0.20 | ✓ |
| Epitalon | 10mg | $28.95 | $2.90 | ✓ |
| Follistatin | 1mg | $139.99 | $139.99 | ✓ |
| GHK-Cu | 10mg | $24.70 | $2.47 | ✓ |
| GHK-Cu | 50mg | $68.95 | $1.38 | ✓ |
| GHRP-2 | 5mg | $19.95 | $3.99 | ✓ |
| GHRP-6 | 5mg | $19.95 | $3.99 | ✓ |
| Glutathione | 600mg | $29.95 | $0.05 | ✓ |
| Hexarelin | 2mg | $21.56 | $10.78 | ✓ |
| HGH Fragment 176-191 [backlog] | 5mg | $47.95 | $9.59 | ✓ |
| IGF-1 DES | 1mg | $55.95 | $55.95 | ✗ |
| IGF-1 LR3 | 1mg | $104.98 | $104.98 | ✓ |
| Ipamorelin | 2mg | $21.95 | $10.97 | ✓ |
| Kisspeptin-10 | 10mg | $59.99 | $6.00 | ✓ |
| KPV | 250mcg | $139.95 | $559.80 | ✓ |
| Livagen [backlog] | 20mg | $62.95 | $3.15 | ✓ |
| LL-37 | 5mg | $71.99 | $14.40 | ✓ |
| Melanotan II | 10mg | $34.95 | $3.50 | ✓ |
| MGF | 2mg | $37.94 | $18.97 | ✓ |
| MOTS-C | 10mg | $69.95 | $7.00 | ✓ |
| NAD+ | — | $39.99 | — | ✓ |
| NAD+ | 100mg | $47.95 | $0.48 | ✓ |
| Ovagen [backlog] | 20mg | $65.00 | $3.25 | ✓ |
| Oxytocin | 2mg | $21.95 | $10.97 | ✓ |
| Oxytocin | 5mg | $31.95 | $6.39 | ✓ |
| Pancragen [backlog] | 20mg | $65.00 | $3.25 | ✓ |
| Pinealon | 20mg | $57.95 | $2.90 | ✓ |
| Prostamax [backlog] | 20mg | $59.95 | $3.00 | ✓ |
| PT-141 | 10mg | $49.99 | $5.00 | ✓ |
| Selank | 5mg | $25.95 | $5.19 | ✓ |
| Semax | 30mg | $73.95 | $2.47 | ✓ |
| Sermorelin | 2mg | $25.95 | $12.97 | ✓ |
| SS-31 | 5mg | $41.95 | $8.39 | ✓ |
| SS-31 | 10mg | $74.95 | $7.50 | ✓ |
| TB-500 | 2mg | $29.95 | $14.97 | ✓ |
| TB-500 | 5mg | $38.95 | $7.79 | ✓ |
| TB-500 | 10mg | $63.98 | $6.40 | ✓ |
| Tesamorelin | 2mg | $27.95 | $13.97 | ✓ |
| Testagen [backlog] | 20mg | $59.95 | $3.00 | ✓ |
| Thymogen | 20mg | $80.95 | $4.05 | ✓ |
| Thymosin Alpha-1 | 5mg | $63.99 | $12.80 | ✓ |
| Vesilute [backlog] | 20mg | $65.00 | $3.25 | ✗ |
| Vilon [backlog] | 20mg | $74.00 | $3.70 | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 5mg | $119.95 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $134.95 | not published | ✓ |

### Sprays: none
### Excluded: oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Synthesis Peptides
- **slug:** synthesis-peptides | **code:** PROFPEPTIDE10 | **discount:** 10% off | **url:** synthesispeptides.io
- **traffic:** (not pulled) | **pulled:** July 24 2026
- **sale posture:** No product-level sale (single price per variant).

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $36.99 | $3.70 | ✓ |
| 5-Amino-1MQ | 50mg | $74.99 | $1.50 | ✓ |
| AOD-9604 | — | $59.99 | — | ✓ |
| BPC-157 | 10mg | $49.99 | $5.00 | ✓ |
| Cagrilintide | — | $62.99 | — | ✗ |
| CJC-1295 | 5mg | $36.99 | $7.40 | ✓ |
| DSIP | 5mg | $36.99 | $7.40 | ✓ |
| DSIP | 10mg | $47.99 | $4.80 | ✓ |
| Epitalon | 10mg | $43.99 | $4.40 | ✓ |
| Epitalon | 40mg | $119.99 | $3.00 | ✗ |
| GHK-Cu | — | $34.99 | — | ✓ |
| GHK-Cu | 50mg | $36.99 | $0.74 | ✓ |
| Glutathione | 1500mg | $73.99 | $0.05 | ✓ |
| IGF-1 LR3 | — | $78.99 | — | ✓ |
| Ipamorelin | 10mg | $64.99 | $6.50 | ✓ |
| KPV | — | $57.99 | — | ✓ |
| MOTS-C | 10mg | $49.99 | $5.00 | ✓ |
| MOTS-C | 40mg | $149.99 | $3.75 | ✓ |
| NAD+ | 500mg | $63.99 | $0.13 | ✓ |
| PT-141 | — | $52.99 | — | ✓ |
| Retatrutide (listed as GLP-3R) | 10mg | $89.99 | $9.00 | ✓ |
| Retatrutide (listed as GLP-3R) | 15mg | $119.99 | $8.00 | ✓ |
| Retatrutide (listed as GLP-3R) | 20mg | $139.99 | $7.00 | ✓ |
| Retatrutide (listed as GLP-3R) | 30mg | $189.99 | $6.33 | ✓ |
| Retatrutide (listed as GLP-3R) | 40mg | $229.99 | $5.75 | ✓ |
| Selank | — | $73.99 | — | ✓ |
| Semaglutide (listed as GLP-1S) | 10mg | $72.99 | $7.30 | ✓ |
| Semax | 10mg | $36.99 | $3.70 | ✓ |
| Semax | 30mg | $74.99 | $2.50 | ✓ |
| Sermorelin | 10mg | $74.99 | $7.50 | ✓ |
| TB-500 | 10mg | $74.99 | $7.50 | ✓ |
| Tesamorelin | 10mg | $79.99 | $8.00 | ✓ |
| Thymosin Alpha-1 | 10mg | $74.99 | $7.50 | ✓ |
| Tirzepatide (listed as GLP-2T) | 5mg | $54.99 | $11.00 | ✓ |
| Tirzepatide (listed as GLP-2T) | 10mg | $59.99 | $6.00 | ✓ |
| Tirzepatide (listed as GLP-2T) | 15mg | $79.99 | $5.33 | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $63.99 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | — | $119.99 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | — | $129.99 | not published | ✓ |
| NAD+/MOTS-C/5-Amino-1MQ | NAD+/MOTS-C/5-Amino-1MQ | — | $119.99 | not published | ✗ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | — | $114.99 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $99.99 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $64.99 | not published | ✓ |

### Sprays: none
### Excluded: oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Vital Core Research
- **slug:** vital-core-research | **code:** PROF20 | **discount:** 20% off | **url:** vitalcoreresearch.com
- **traffic:** (not pulled) | **pulled:** July 25 2026
- **sale posture:** No sale.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 5mg | $40.99 | $8.20 | ✓ |
| 5-Amino-1MQ | 10mg | $70.99 | $7.10 | ✓ |
| AOD-9604 | 5mg | $44.99 | $9.00 | ✓ |
| BPC-157 | 2mg | $29.99 | $14.99 | ✓ |
| BPC-157 | 5mg | $34.99 | $7.00 | ✓ |
| BPC-157 | 10mg | $63.99 | $6.40 | ✓ |
| Cagrilintide | — | $232.99 | — | ✓ |
| Cagrilintide | 5mg | $79.99 | $16.00 | ✓ |
| Cagrilintide | 10mg | $159.99 | $16.00 | ✓ |
| CJC-1295 | 2mg | $40.99 | $20.50 | ✓ |
| CJC-1295 | 5mg | $49.99 | $10.00 | ✓ |
| CJC-1295 | 10mg | $89.99 | $9.00 | ✓ |
| DSIP | — | $29.99 | — | ✓ |
| Epitalon | 10mg | $34.99 | $3.50 | ✓ |
| Epitalon | 50mg | $99.99 | $2.00 | ✓ |
| GHK-Cu | 50mg | $39.99 | $0.80 | ✓ |
| GHK-Cu | 100mg | $69.99 | $0.70 | ✓ |
| GHRP-2 | 5mg | $29.99 | $6.00 | ✓ |
| GHRP-2 | 10mg | $58.99 | $5.90 | ✓ |
| GHRP-6 | 5mg | $29.99 | $6.00 | ✓ |
| GHRP-6 | 10mg | $58.99 | $5.90 | ✓ |
| GLP-1 [coded, UNVERIFIED] | 5mg | $79.99 | $16.00 | ✓ |
| GLP-1 [coded, UNVERIFIED] | 10mg | $119.99 | $12.00 | ✓ |
| GLP-2 [coded, UNVERIFIED] | 10mg | $89.99 | $9.00 | ✓ |
| GLP-2 [coded, UNVERIFIED] | 30mg | $169.99 | $5.67 | ✓ |
| GLP-2 [coded, UNVERIFIED] | 60mg | $229.99 | $3.83 | ✓ |
| GLP-3 [coded, UNVERIFIED] | 10mg | $128.99 | $12.90 | ✓ |
| GLP-3 [coded, UNVERIFIED] | 30mg | $220.99 | $7.37 | ✓ |
| GLP-3 [coded, UNVERIFIED] | 50mg | $298.99 | $5.98 | ✓ |
| Hexarelin | — | $44.99 | — | ✓ |
| HGH Fragment 176-191 [backlog] | — | $49.99 | — | ✓ |
| IGF-1 LR3 | — | $99.99 | — | ✓ |
| Ipamorelin | 5mg | $34.99 | $7.00 | ✓ |
| Ipamorelin | 10mg | $68.99 | $6.90 | ✓ |
| Mazdutide [backlog] | — | $109.99 | — | ✓ |
| MK-677 | — | $69.99 | — | ✗ |
| MOTS-C | — | $49.99 | — | ✓ |
| NAD+ | 100mg | $39.99 | $0.40 | ✓ |
| NAD+ | 500mg | $100.99 | $0.20 | ✓ |
| NAD+ | 1000mg | $150.99 | $0.15 | ✓ |
| PT-141 | — | $39.99 | — | ✓ |
| Selank | — | $49.99 | — | ✓ |
| Semax | — | $49.99 | — | ✓ |
| Sermorelin | 5mg | $44.99 | $9.00 | ✓ |
| SNAP-8 [backlog] | — | $49.99 | — | ✓ |
| TB-500 | 2mg | $29.99 | $14.99 | ✓ |
| TB-500 | 5mg | $39.99 | $8.00 | ✓ |
| TB-500 | 10mg | $74.99 | $7.50 | ✓ |
| Tesamorelin | 5mg | $41.99 | $8.40 | ✓ |
| Tesamorelin | 10mg | $54.95 | $5.50 | ✓ |
| Thymosin Alpha-1 | 5mg | $37.50 | $7.50 | ✓ |
| Thymosin Alpha-1 | 10mg | $74.99 | $7.50 | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | — | $74.99 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | — | $119.99 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | — | $149.99 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 5mg | $74.99 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $140.99 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | — | $74.99 | not published | ✓ |

### Sprays: none
### Excluded: oral/capsule, oral/tablet/sublingual, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Purity Peptides
- **slug:** purity-peptides | **code:** PROF15 | **discount:** 15% off | **url:** puritypeptides.is
- **traffic:** (not pulled) | **pulled:** July 24 2026
- **sale posture:** No sale (single price per product).

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $69.99 | $7.00 | ✗ |
| AOD-9604 | 5mg | $69.99 | $14.00 | ✓ |
| BPC-157 | 5mg | $59.99 | $12.00 | ✓ |
| BPC-157 | 10mg | $94.99 | $9.50 | ✓ |
| BPC-157 | 20mg | $124.99 | $6.25 | ✓ |
| CJC-1295 | 2mg | $49.99 | $25.00 | ✓ |
| CJC-1295 | 5mg | $69.99 | $14.00 | ✓ |
| CJC-1295 | 10mg | $99.99 | $10.00 | ✓ |
| Dihexa [backlog] | 10mg | $54.99 | $5.50 | ✗ |
| DSIP | 5mg | $49.99 | $10.00 | ✓ |
| Epitalon | 10mg | $89.99 | $9.00 | ✓ |
| GHK-Cu | 50mg | $79.99 | $1.60 | ✓ |
| GHK-Cu | 100mg | $119.99 | $1.20 | ✓ |
| GHRP-2 | 5mg | $60.49 | $12.10 | ✓ |
| GHRP-6 | 5mg | $49.99 | $10.00 | ✓ |
| Glutathione | 1500mg | $109.99 | $0.07 | ✓ |
| Ipamorelin | 5mg | $59.99 | $12.00 | ✓ |
| Ipamorelin | 10mg | $119.99 | $12.00 | ✓ |
| Kisspeptin-10 | 5mg | $64.99 | $13.00 | ✓ |
| Kisspeptin-10 | 10mg | $89.99 | $9.00 | ✓ |
| KPV | 5mg | $40.99 | $8.20 | ✓ |
| KPV | 10mg | $64.99 | $6.50 | ✓ |
| Melanotan I | 10mg | $54.99 | $5.50 | ✓ |
| Melanotan II | 10mg | $54.99 | $5.50 | ✓ |
| MOTS-C | 10mg | $59.99 | $6.00 | ✓ |
| MOTS-C | 20mg | $99.99 | $5.00 | ✓ |
| MOTS-C | 40mg | $159.99 | $4.00 | ✓ |
| NAD+ | 500mg | $126.49 | $0.25 | ✓ |
| Pancragen [backlog] | 20mg | $99.99 | $5.00 | ✓ |
| Pinealon | 10mg | $76.99 | $7.70 | ✓ |
| PT-141 | 10mg | $82.49 | $8.25 | ✓ |
| Retatrutide | 10mg | $104.99 | $10.50 | ✓ |
| Retatrutide | 15mg | $159.99 | $10.67 | ✓ |
| Retatrutide | 20mg | $199.00 | $9.95 | ✓ |
| Retatrutide | 30mg | $299.99 | $10.00 | ✓ |
| Selank | 5mg | $109.99 | $22.00 | ✓ |
| Selank | 10mg | $84.99 | $8.50 | ✓ |
| Semaglutide | 5mg | $89.99 | $18.00 | ✓ |
| Semaglutide | 10mg | $119.99 | $12.00 | ✓ |
| Semax | 10mg | $109.99 | $11.00 | ✓ |
| Sermorelin | 5mg | $59.99 | $12.00 | ✓ |
| Sermorelin | 10mg | $89.99 | $9.00 | ✓ |
| SS-31 | 10mg | $79.99 | $8.00 | ✓ |
| TB-500 | 5mg | $72.59 | $14.52 | ✓ |
| TB-500 | 10mg | $89.99 | $9.00 | ✓ |
| Tesamorelin | 5mg | $79.99 | $16.00 | ✓ |
| Tesamorelin | 10mg | $139.99 | $14.00 | ✓ |
| Thymogen | 20mg | $69.99 | $3.50 | ✓ |
| Thymosin Alpha-1 | 5mg | $72.59 | $14.52 | ✓ |
| Thymosin Alpha-1 | 10mg | $89.99 | $9.00 | ✓ |
| Tirzepatide | 10mg | $104.99 | $10.50 | ✓ |
| Tirzepatide | 20mg | $159.99 | $8.00 | ✓ |
| Vesugen [backlog] | 20mg | $99.99 | $5.00 | ✓ |
| Vilon [backlog] | 20mg | $79.99 | $4.00 | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $89.99 | 5/5 (published) | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $179.99 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $144.99 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $199.99 | not published | ✓ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 5mg | $159.99 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $124.99 | 10/5/5 (published) | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 40mg | $199.99 | 20/10/10 (published) | ✓ |

### Sprays / strips (separate format, no $/mg)
| Product | Size | Base | Stock |
| --- | --- | --- | --- |
| BPC-157 (spray) | 10mg | $99.99 | ✓ |
| DSIP (spray) | 10mg | $99.99 | ✓ |
| GHK-Cu (spray) | 50mg | $89.99 | ✓ |
| Melanotan II (spray) | 10mg | $99.99 | ✓ |
| NAD+ (spray) | 500mg | $139.99 | ✓ |
| PT-141 (spray) | 10mg | $99.99 | ✓ |
| Selank (spray) | 10mg | $109.99 | ✓ |
| Semaglutide (spray) | 10mg | $139.99 | ✓ |
| Semax (spray) | 10mg | $78.99 | ✓ |
| TB-500 (spray) | 10mg | $109.99 | ✓ |

### Excluded: oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Midwest Peptide
- **slug:** midwest-peptide | **code:** PROF10 | **discount:** 10% off | **url:** midwestpeptide.com?ref=PROF10
- **traffic:** (not pulled) | **pulled:** July 24 2026
- **sale posture:** No cart auto-coupon; anchors compare_at — base = current price.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 20mg | $49.99 | $2.50 | ✗ |
| BPC-157 | 10mg | $39.99 | $4.00 | ✓ |
| Cagrilintide | 10mg | $69.99 | $7.00 | ✗ |
| CJC-1295 | 10mg | $69.99 | $7.00 | ✓ |
| DSIP | — | $29.99 | — | ✓ |
| GHK-Cu | 50mg | $29.99 | $0.60 | ✓ |
| GHK-Cu | 100mg | $57.99 | $0.58 | ✓ |
| Glutathione | 1500mg | $59.99 | $0.04 | ✓ |
| KPV | — | $39.99 | — | ✗ |
| Melanotan I | 10mg | $29.99 | $3.00 | ✓ |
| Melanotan II | 10mg | $29.99 | $3.00 | ✓ |
| MOTS-C | 10mg | $39.99 | $4.00 | ✓ |
| NAD+ | 500mg | $69.99 | $0.14 | ✗ |
| PT-141 | — | $29.99 | — | ✓ |
| Retatrutide (listed as GLP-3 RT) | 10mg | $69.99 | $7.00 | ✓ |
| Retatrutide (listed as GLP-3 RT) | 20mg | $134.99 | $6.75 | ✗ |
| Selank | 10mg | $29.99 | $3.00 | ✓ |
| Semax | 10mg | $29.99 | $3.00 | ✓ |
| SS-31 | 10mg | $59.99 | $6.00 | ✓ |
| TB-500 | 10mg | $39.99 | $4.00 | ✓ |
| Tesamorelin | 10mg | $69.99 | $7.00 | ✓ |
| Tirzepatide (listed as GLP-2 TZ) | — | $79.99 | — | ✗ |
| VIP | 10mg | $64.99 | $6.50 | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $69.99 | 5/5 (published) | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $114.99 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $119.99 | not published | ✓ |

### Sprays: none
### Excluded: oral/capsule, out-of-scope (SARMs/Rx/cosmetics), supply — bac water/supplies, capsules/oral forms, SARMs, Rx, cosmetics, clinical hormones (out of PP scope).

---

## VENDOR: Aero Peptides
- **slug:** aero-peptides | **code:** PROFPEPTIDE15 | **discount:** 15% off | **url:** aeropeptides.com
- **traffic:** (not pulled) | **pulled:** July 24 2026 (CINC read-only)
- **sale posture:** No sale running — `on_sale=false` across the catalog (these are standing prices). CINC pull: the WooCommerce Store API is Cloudflare-403'd, so prices come from each page's embedded product JSON. GLP names SELF-IDENTIFY the compound in the title (GLP3 – Reta = Retatrutide, GLP1 – Semaglutide, GLP1 – Tirz = Tirzepatide) — not coded; no verification/[UNVERIFIED] needed.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| Adamax | 10mg | $59.99 | $6.00 | ✓ |
| BPC-157 | 10mg | $44.99 | $4.50 | ✓ |
| CJC-1295 (no-DAC) | 10mg | $69.99 | $7.00 | ✓ |
| GHK-Cu | 100mg | $44.99 | $0.45 | ✓ |
| Glutathione | 1500mg | $74.99 | $0.05 | ✓ |
| IGF-1 LR3 | 1mg | $69.99 | $69.99 | ✓ |
| Kisspeptin-10 | 10mg | $39.99 | $4.00 | ✓ |
| KPV | 10mg | $39.99 | $4.00 | ✓ |
| Melanotan I | 10mg | $24.99 | $2.50 | ✓ |
| Melanotan II | 5mg | $29.99 | $6.00 | ✓ |
| MOTS-C | 10mg | $39.99 | $4.00 | ✓ |
| NAD+ | 100mg | $59.99 | $0.60 | ✓ |
| Retatrutide (listed as GLP3 – Reta) | 10mg | $79.99 | $8.00 | ✓ |
| Semaglutide (listed as GLP1 – Semaglutide) | 10mg | $69.99 | $7.00 | ✓ |
| Tirzepatide (listed as GLP1 – Tirz) | 10mg | $74.99 | $7.50 | ✓ |
| Semax | 10mg | $44.99 | $4.50 | ✓ |
| SS-31 | 10mg | $64.99 | $6.50 | ✓ |
| Tesamorelin | 10mg | $64.99 | $6.50 | ✓ |
| Sermorelin | 5–10mg | from $64.99 | — | ✓ |
| TB-500 | 5–10mg | price unavailable | — | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $89.99 | 5/5 (published) | ✓ |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $69.99 | 5/5 (published) | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | — | $139.99 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | — | $149.99 | not published | ✓ |

### Sprays: none
### Excluded: Reconstitution BAC water (supply). NOTE: TB-500 and Sermorelin are variable products whose per-size prices load via AJAX that Cloudflare blocks — TB-500 price unavailable, Sermorelin shown as "from $64.99" (not fabricated). GLOW/KLOW have no mg in the title, so no total-mg/$/mg (honest —).

---

## ⛔ BLOCKED / NOT PRICE-PULLABLE (reference — do not keep retrying)
- **Limitless Biotech** (limitlesslifenootropics.com) — **PERMANENTLY EXCLUDED from price comparison.** BigCommerce **B2B store**: every product's price is login-gated behind "Professional Pricing" (`data-product-price="Log In for Professional Pricing"`, empty public `price_range`). **No public retail price exists** — cannot be pulled read-only without an account. Catalog names/sizes are public; prices are not. (Not WooCommerce, despite an earlier assumption.)
- **Spartan Peptides** (spartanpeptides.com) — **PARTIAL.** Fully client-rendered React storefront (no `/wp-json`, no static product data). 10 of ~30 products captured via the browser; the remainder sit behind a **21+ age gate** (a consent modal — not clicked). Prices display as **ranges** ("$99.00 – $336.60"): **low = smallest size, high = bulk/kit** — sizes must be matched to each end of the range before computing $/mg. GLPs self-identify ("GLP-2(Tirz)").
- **aero-peptides** Store API is Cloudflare-403'd but the storefront JSON is readable (pulled above via CINC); its 2 variable products (TB-500, Sermorelin) have AJAX-only per-size prices.

---

## VENDOR: [next vendor — append here in same format]
