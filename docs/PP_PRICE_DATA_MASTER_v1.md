# PP Price-Comparison — MASTER PRICE DATA (all vendors, one doc)

**Status:** ACTIVE data source for the price-comparison page. ONE doc for ALL vendors (don't split per-vendor).
**Version:** v1
**PRICES_UPDATED:** July 2026
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
- **slug:** amino-club | **code:** PROFPEPTIDE | **discount:** 20% off | **url:** aminoclub.com
- **traffic:** ~376K/mo ↑45% (pending re-verify) | **pulled:** July 13 2026

### Single compounds
| Compound | Size | Base | $/mg | Stock |
|---|---|---|---|---|
| Retatrutide | 10mg | $69.99 | $7.00 | ✓ |
| Retatrutide | 20mg | $134.99 | $6.75 | ✓ |
| Retatrutide | 30mg | $199.99 | $6.67 | ✓ |
| BPC-157 | 10mg | $39.99 | $4.00 | ✓ |
| TB-500 | 10mg | $39.99 | $4.00 | ✓ |
| KPV | 10mg | $39.99 | $4.00 | ✓ |
| GHK-Cu | 50mg | $29.99 | $0.60 | ✓ |
| GHK-Cu | 100mg | $57.99 | $0.58 | ✓ |
| MOTS-C | 10mg | $39.99 | $4.00 | ✓ |
| MOTS-C | 40mg | $134.99 | $3.37 | ✗ |
| Tesamorelin | 10mg | $69.99 | $7.00 | ✓ |
| NAD+ | 500mg | $69.99 | $0.14 | ✓ |
| DSIP | 5mg | $29.99 | $6.00 | ✓ |
| Selank | 10mg | $29.99 | $3.00 | ✓ |
| Semax | 10mg | $29.99 | $3.00 | ✓ |
| Melanotan II | 10mg | $29.99 | $3.00 | ✓ |
| Melanotan I | 10mg | $29.99 | $3.00 | ✓ |
| PT-141 | 10mg | $29.99 | $3.00 | ✓ |
| AOD-9604 | 5mg | $49.99 | $10.00 | ✓ |
| Cagrilintide | 10mg | $69.99 | $7.00 | ✓ |
| Ipamorelin | 10mg | $49.99 | $5.00 | ✓ |
| IGF-1 LR3 | 1mg | $69.99 | $69.99 | ✓ |
| Epithalon | 10mg | $29.99 | $3.00 | ✓ |
| 5-Amino-1MQ | 50mg | $49.99 | $1.00 | ✓ |
| Thymosin Alpha-1 | 10mg | $39.99 | $4.00 | ✓ |
| SNAP-8 | 10mg | $29.99 | $3.00 | ✓ |
| Glutathione | 1500mg | $59.99 | $0.04 | ✗ |

### Blends (total mg; ratio not published by Amino Club)
| Blend | Components | Total mg | Base | Stock |
|---|---|---|---|---|
| GLOW | BPC-157/TB-500/GHK-Cu | 70mg | $114.99 | ✓ |
| KLOW | BPC-157/TB-500/GHK-Cu/KPV | 80mg | $129.99 | ✓ |
| Wolverine | BPC-157/TB-500 | 10mg | $109.99 | ✓ |
| Wolverine | BPC-157/TB-500 | 20mg | $209.99 | ✓ |
| CJC-1295/Ipamorelin (No DAC) | ModGRF1-29+Ipamorelin | 10mg | $59.99 | ✓ |

### Sprays
| Product | Size | Base | Stock |
|---|---|---|---|
| GHK-Cu Spray | 25mg | $49.99 | ✗ |
| NAD+ Spray | 750mg | $69.99 | ✗ |
| Selank Spray | 20mg | $89.99 | ✗ |
| Semax Spray | 25mg | $89.99 | ✗ |
| PT-141 Spray | 15mg | $79.99 | ✓ |

### Excluded: Amino H2O (bac water) 10mL $16.99 / 30mL $24.99

---

## VENDOR: Biolongevity Labs
- **slug:** biolongevity-labs | **code:** PROFPEPTIDE | **discount:** 15% off | **url:** biolongevitylabs.com
- **traffic:** (not pulled) | **pulled:** July 23 2026
- **sale posture:** ⚠️ Sitewide sale ACTIVE — "Christmas in July · 50% Off Sitewide" via **cart-level auto-coupon** `longevityvip` (NOT product `sale_price`; invisible in the product API — base prices below are true `regular_price`). **MUTUALLY EXCLUSIVE** with PROFPEPTIDE (individual-use): the 50% auto-coupon beats the 15% code, so **the code is not the best offer while the sale runs**.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $74.97 | $7.50 | ✓ |
| ARA-290 (Cibinetide) | 15mg | $95.00 | $6.33 | ✓ |
| BPC-157 | 10mg | $99.97 | $10.00 | ✓ |
| Cagrilintide | 5mg | $170.00 | $34.00 | ✓ |
| Cardiogen | 20mg | $69.97 | $3.50 | ✓ |
| Cortagen | 20mg | $69.97 | $3.50 | ✓ |
| DSIP | 5mg | $55.97 | $11.19 | ✓ |
| Epithalon (Epitalon) | 20mg | $94.97 | $4.75 | ✓ |
| GHK-Cu | 50mg | $84.97 | $1.70 | ✓ |
| Ipamorelin | 10mg | $79.97 | $8.00 | ✓ |
| Kisspeptin-10 | 10mg | $64.97 | $6.50 | ✓ |
| KPV | 10mg | $99.97 | $10.00 | ✓ |
| LL-37 | 5mg | $94.97 | $18.99 | ✓ |
| Melanotan I | 10mg | $55.97 | $5.60 | ✓ |
| MOTS-c | 10mg | $109.97 | $11.00 | ✓ |
| N-Acetyl Selank (Selank) | 20mg | $134.97 | $6.75 | ✓ |
| N-Acetyl Semax (Semax) | 20mg | $64.97 | $3.25 | ✓ |
| NAD+ | 500mg | $249.97 | $0.50 | ✓ |
| Oxytocin | 10mg | $64.97 | $6.50 | ✓ |
| PEG-MGF (MGF) | 5mg | $94.97 | $18.99 | ✓ |
| Pinealon | 20mg | $69.97 | $3.50 | ✓ |
| PT-141 | 5mg | $47.97 | $9.59 | ✓ |
| TB-500 | 10mg | $164.97 | $16.50 | ✓ |
| Tesamorelin | 10mg | $149.97 | $15.00 | ✓ |
| Thymagen (Thymogen) | 20mg | $79.97 | $4.00 | ✓ |
| Thymosin Alpha-1 | 10mg | $129.97 | $13.00 | ✓ |
| VIP | 5mg | $74.97 | $14.99 | ✓ |
| Follistatin (FLGR242) | 10mg | $499.00 | $49.90 | ✓ |
| Bronchogen [backlog] | 20mg | $69.97 | $3.50 | ✓ |
| Cartalax [backlog] | 20mg | $69.97 | $3.50 | ✓ |
| Chonluten [backlog] | 20mg | $69.97 | $3.50 | ✓ |
| FOXO4-DRI [backlog] | 10mg | $274.97 | $27.50 | ✓ |
| Livagen [backlog] | 20mg | $79.97 | $4.00 | ✓ |
| Ovagen [backlog] | 20mg | $79.97 | $4.00 | ✓ |
| Pancragen [backlog] | 20mg | $94.97 | $4.75 | ✓ |
| PNC-27 [backlog] | 10mg | $279.97 | $28.00 | ✓ |
| Prostamax [backlog] | 20mg | $79.97 | $4.00 | ✓ |
| Testagen [backlog] | 20mg | $79.97 | $4.00 | ✓ |
| Thymulin [backlog] | 10mg | $64.97 | $6.50 | ✓ |
| Vesilute [backlog] | 20mg | $84.97 | $4.25 | ✓ |
| Vesugen [backlog] | 20mg | $84.97 | $4.25 | ✗ |
| Vilon [backlog] | 20mg | $79.97 | $4.00 | ✓ |

### Blends (total mg; ratio published by Biolongevity)
| Blend | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- |
| Wolverine (BPC-157/TB-500) | 10mg | $119.97 | 5/5 (published) | ✓ |
| CJC-1295/Ipamorelin (No DAC) | 10mg | $99.97 | 5/5 (published) | ✓ |
| GLOW (GHK-Cu/BPC-157/TB-500) | 70mg | $259.97 | 50/10/10 (published) | ✓ |
| KLOW (GHK-Cu/BPC-157/TB-500/KPV) | 80mg | $274.97 | 50/10/10/10 (published) | ✓ |
| NAD+/MOTS-c/5-Amino-1MQ | 120mg | $299.99 | 100/10/10 (published) | ✓ |
| Tesamorelin/Ipamorelin | 8mg | $115.00 | 6/2 (published) | ✓ |
| Regeno (BPC-157/TB-500/Cartalax) [backlog cmpt] | 30mg | $279.97 | 10/10/10 (published) | ✓ |

### Strips (transdermal — separate format, no $/mg)
| Product | Base | Stock |
| --- | --- | --- |
| BPC-157 BioStrips | $249.97 | ✗ |
| CJC-1295 BioStrips | $199.97 | ✗ |
| GHK-Cu BioStrips | $199.97 | ✗ |
| PT-141+ BioStrips | $199.97 | ✗ |
| Thymosin Alpha-1 BioStrips | $249.97 | ✗ |

### Excluded: Reconstitution Solution / BAC Water 30ml $19.97 · L-Carnitine 600mg/mL $59.97 (non-peptide) · Cold Pack $9.99 · marketing bundles · proprietary non-profiled (BioAmplify, BioSuppress, Lepto3GR, Cell Factors, SlimAssist, Klotho, Regeno single) · GLP: none carried

---

## VENDOR: Science Based Peptides
- **slug:** science-based-peptides | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** sciencebasedpeptides.com
- **traffic:** (not pulled) | **pulled:** July 23 2026
- **sale posture:** No sitewide sale — Store API `compareAt` null on every variant, so prices below are true base. The code applies normally at checkout. GLP carried: Retatrutide only (coded name GLP 3-(RT)).

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| Retatrutide (listed as GLP 3-(RT)) | 10mg | $69.99 | $7.00 | ✓ |
| Retatrutide (listed as GLP 3-(RT)) | 30mg | $199.99 | $6.67 | ✗ |
| AOD-9604 | 10mg | $39.99 | $4.00 | ✓ |
| MOTS-C | 15mg | $39.99 | $2.67 | ✗ |
| 5-Amino-1MQ | 10mg | $39.99 | $4.00 | ✗ |
| CJC-1295 (No DAC) | 10mg | $39.99 | $4.00 | ✓ |
| Ipamorelin | 5mg | $37.99 | $7.60 | ✓ |
| Ipamorelin | 10mg | $49.99 | $5.00 | ✓ |
| Tesamorelin | 10mg | $69.99 | $7.00 | ✗ |
| IGF-1 LR3 | 1mg | $69.99 | $69.99 | ✓ |
| BPC-157 | 10mg | $39.99 | $4.00 | ✓ |
| TB-500 | 10mg | $39.99 | $4.00 | ✓ |
| KPV | 10mg | $39.99 | $4.00 | ✓ |
| GHK-Cu | 50mg | $29.99 | $0.60 | ✓ |
| GHK-Cu | 100mg | $57.99 | $0.58 | ✓ |
| Melanotan I | 10mg | $34.99 | $3.50 | ✓ |
| Melanotan II | 10mg | $34.99 | $3.50 | ✓ |
| Glutathione | 600mg | $37.99 | $0.06 | ✓ |
| Glutathione | 1500mg | $59.99 | $0.04 | ✓ |
| Epitalon | 10mg | $29.99 | $3.00 | ✓ |
| NAD+ | 500mg | $69.99 | $0.14 | ✗ |
| NAD+ | 1000mg | $74.99 | $0.07 | ✓ |
| Semax | 5mg | $24.99 | $5.00 | ✓ |
| Semax | 10mg | $34.99 | $3.50 | ✓ |
| Selank | 5mg | $24.99 | $5.00 | ✓ |
| Selank | 10mg | $34.99 | $3.50 | ✓ |
| DSIP | 5mg | $29.99 | $6.00 | ✓ |
| PT-141 | 10mg | $29.99 | $3.00 | ✓ |
| Thymosin Alpha-1 | 10mg | $39.99 | $4.00 | ✓ |
| SNAP-8 [backlog] | 10mg | $29.99 | $3.00 | ✗ |

### Blends (total mg; ratio NOT published by Science Based — components only)
| Blend | Components | Total mg | Base | Stock |
| --- | --- | --- | --- | --- |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 5mg | $71.98 | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $109.99 | ✓ |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $59.99 | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 50mg | $97.99 | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $114.99 | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $129.99 | ✓ |

### Sprays: none
### Excluded: Bacteriostatic Water 3ml $3.99

---

## VENDOR: Alpha Peptides
- **slug:** alpha-peptides | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** alpha-peptides.com
- **traffic:** (not pulled) | **pulled:** July 23 2026
- **sale posture:** **Product-level `sale_price`** on 25 of 59 products (~6–17% off; no sitewide auto-coupon). Base below = `regular_price` (true base). The code **STACKS** — PROFPEPTIDE applies on top of the sale pricing at checkout (NOT mutually exclusive). GLP carried under coded names: GLP-3 RT=Retatrutide, GLP-2 TZ=Tirzepatide, GLP-1 SM=Semaglutide.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| Retatrutide (listed as GLP-3 RT) | 10mg | $49.25 | $4.92 | ✓ |
| Retatrutide (listed as GLP-3 RT) | 15mg | $77.99 | $5.20 | ✓ |
| Retatrutide (listed as GLP-3 RT) | 30mg | $107.99 | $3.60 | ✓ |
| Retatrutide (listed as GLP-3 RT) | 50mg | $198.00 | $3.96 | ✓ |
| Tirzepatide (listed as GLP-2 TZ) | 30mg | $66.31 | $2.21 | ✓ |
| Tirzepatide (listed as GLP-2 TZ) | 60mg | $101.99 | $1.70 | ✓ |
| Semaglutide (listed as GLP-1 SM) | 5mg | $53.99 | $10.80 | ✗ |
| Semaglutide (listed as GLP-1 SM) | 10mg | $77.99 | $7.80 | ✗ |
| Cagrilintide | 5mg | $68.39 | $13.68 | ✗ |
| Cagrilintide | 10mg | $115.19 | $11.52 | ✗ |
| MOTS-C | 10mg | $33.06 | $3.31 | ✓ |
| AOD-9604 | 5mg | $39.59 | $7.92 | ✗ |
| AOD-9604 | 10mg | $54.90 | $5.49 | ✗ |
| 5-Amino-1MQ | 10mg | $33.12 | $3.31 | ✓ |
| CJC-1295 (No DAC) | 5mg | $63.59 | $12.72 | ✗ |
| CJC-1295 (No DAC) | 10mg | $34.09 | $3.41 | ✗ |
| CJC-1295 (with DAC) | 5mg | $40.79 | $8.16 | ✓ |
| Ipamorelin | 10mg | $51.59 | $5.16 | ✓ |
| Sermorelin | 10mg | $44.53 | $4.45 | ✓ |
| Tesamorelin | 10mg | $51.86 | $5.19 | ✓ |
| GHRP-2 | 5mg | $14.32 | $2.86 | ✓ |
| GHRP-6 | 5mg | $14.32 | $2.86 | ✓ |
| Hexarelin | 5mg | $29.53 | $5.91 | ✓ |
| IGF-1 LR3 | 1mg | $45.47 | $45.47 | ✓ |
| IGF-1 DES | 1mg | $23.26 | $23.26 | ✓ |
| MGF | 2mg | $23.26 | $11.63 | ✓ |
| Follistatin-344 | 1mg | $84.21 | $84.21 | ✓ |
| BPC-157 | 10mg | $27.59 | $2.76 | ✓ |
| TB-500 | 10mg | $37.58 | $3.76 | ✓ |
| KPV | 10mg | $30.30 | $3.03 | ✓ |
| GHK-Cu | 50mg | $28.79 | $0.58 | ✗ |
| GHK-Cu | 100mg | $59.99 | $0.60 | ✗ |
| Melanotan I | 10mg | $21.05 | $2.10 | ✓ |
| Melanotan II | 5mg | $23.99 | $4.80 | ✗ |
| Melanotan II | 10mg | $25.26 | $2.53 | ✓ |
| Glutathione | 1500mg | $36.83 | $0.02 | ✓ |
| Epitalon | 10mg | $23.68 | $2.37 | ✓ |
| NAD+ | 500mg | $30.52 | $0.06 | ✓ |
| SS-31 | 10mg | $42.95 | $4.29 | ✓ |
| Pinealon | 10mg | $33.16 | $3.32 | ✓ |
| Semax | 10mg | $25.01 | $2.50 | ✓ |
| Selank | 10mg | $27.78 | $2.78 | ✓ |
| Adamax | 10mg | $71.58 | $7.16 | ✓ |
| DSIP | 5mg | $25.74 | $5.15 | ✓ |
| DSIP | 10mg | $70.79 | $7.08 | ✗ |
| PT-141 | 10mg | $26.48 | $2.65 | ✓ |
| Oxytocin | 10mg | $39.59 | $3.96 | ✓ |
| Kisspeptin-10 | 10mg | $27.37 | $2.74 | ✓ |
| Thymosin Alpha-1 | 10mg | $41.44 | $4.14 | ✓ |
| VIP | 10mg | $37.89 | $3.79 | ✓ |
| Cibinetide (listed as ARA-290) | 10mg | $36.00 | $3.60 | ✓ |
| Mazdutide [backlog] | 10mg | $66.43 | $6.64 | ✓ |
| Survodutide [backlog] | 10mg | $73.89 | $7.39 | ✓ |
| Tesofensine [backlog] | 500mcg | $108.95 | $217.90 | ✓ |
| SLU-PP-332 [backlog] | 5mg | $84.21 | $16.84 | ✓ |
| HGH Fragment 176-191 [backlog] | 5mg | $28.63 | $5.73 | ✓ |
| Dihexa [backlog] | 5mg | $35.79 | $7.16 | ✓ |
| FOXO4-DRI [backlog] | 10mg | $62.63 | $6.26 | ✓ |
| Humanin [backlog] | 10mg | $108.95 | $10.89 | ✓ |
| Thymalin [backlog] | 10mg | $50.53 | $5.05 | ✓ |
| SNAP-8 [backlog] | 10mg | $22.11 | $2.21 | ✓ |

### Blends (total mg; ratio where published)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $59.06 | not published (20mg total) | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $58.09 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $74.69 | not published | ✓ |

### Sprays: none
### Excluded: Gonadorelin (clinical reproductive hormone) · Acetic Acid / Reconstitution Solution · Generic & Hospira Bacteriostatic Water · Overnight Shipping

---

## VENDOR: Almighty Peptides
- **slug:** almighty-peptides | **code:** PROFPEPTIDE | **discount:** 20% off | **url:** almightypeptides.com
- **traffic:** (not pulled) | **pulled:** July 23 2026
- **sale posture:** Product-level sale_price on 2/61; no cart auto-coupon. Base=regular_price; code STACKS.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| BPC-157 | 500mcg | $80.99 | $161.98 | ✓ |
| BPC-157 | 10mg | $148.99 | $14.90 | ✓ |
| CJC-1295 | 5mg | $89.99 | $18.00 | ✓ |
| DSIP | 5mg | $48.00 | $9.60 | ✓ |
| Epitalon | 10mg | $88.00 | $8.80 | ✓ |
| GHK-Cu | 3mg | $169.00 | $56.33 | ✓ |
| GHK-Cu | 50mg | $88.00 | $1.76 | ✓ |
| GHRP-2 | 5mg | $36.00 | $7.20 | ✓ |
| GHRP-6 | 10mg | $36.00 | $3.60 | ✓ |
| Glutathione | 1500mg | $299.00 | $0.20 | ✓ |
| IGF-1 LR3 | 1mg | $228.99 | $228.99 | ✓ |
| Ipamorelin | 5mg | $72.99 | $14.60 | ✓ |
| LL-37 | 5mg | $149.00 | $29.80 | ✓ |
| Melanotan II | 10mg | $65.99 | $6.60 | ✓ |
| MGF | 2mg | $52.99 | $26.50 | ✓ |
| MK-677 | 12.5mg | $78.99 | $6.32 | ✓ |
| MK-677 | 25mg | $150.99 | $6.04 | ✓ |
| MOTS-C | 10mg | $140.99 | $14.10 | ✓ |
| NAD+ | 500mg | $165.00 | $0.33 | ✓ |
| Oxytocin | 5mg | $59.99 | $12.00 | ✓ |
| PT-141 | 10mg | $70.99 | $7.10 | ✓ |
| Retatrutide | 10mg | $329.00 | $32.90 | ✓ |
| Semaglutide | 2mg | $99.00 | $49.50 | ✗ |
| Semaglutide | 5mg | $175.00 | $35.00 | ✓ |
| Sermorelin | 5mg | $61.00 | $12.20 | ✓ |
| SLU-PP-332 [backlog] | 1mg | $169.99 | $169.99 | ✓ |
| TB-500 | 5mg | $93.99 | $18.80 | ✓ |
| Tesamorelin | 5mg | $77.00 | $15.40 | ✓ |
| Tirzepatide | 10mg | $258.00 | $25.80 | ✓ |
| Tirzepatide | 30mg | $384.00 | $12.80 | ✓ |

### Blends (total mg; ratio where published — none of these vendors publish component ratios)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $175.00 | 5/5 (published) | ✓ |

### Sprays: none
### Excluded: out-of-scope (SARMs/Rx/cosmetics), supplies — bac water/supplies, SARMs, Rx, cosmetics, clinical hormones (HCG etc.), out of PP scope

---

## VENDOR: Ameano Peptides
- **slug:** ameano-peptides | **code:** PROF10 | **discount:** 10% off | **url:** ameanopeptides.com
- **traffic:** (not pulled) | **pulled:** July 23 2026
- **sale posture:** No sitewide sale (0/75; no cart auto-coupon). Base=regular_price.

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
| GHK-Cu | — | $35.00 | — | ✓ |
| GHK-Cu | 100ml | $89.00 | — | ✗ |
| GHK-Cu | 50mg | $35.00 | $0.70 | ✓ |
| GHK-Cu | 100mg | $53.00 | $0.53 | ✓ |
| Ipamorelin | 10mg | $44.00 | $4.40 | ✓ |
| Kisspeptin-10 | 10mg | $48.00 | $4.80 | ✓ |
| KPV | 10mg | $44.00 | $4.40 | ✓ |
| LL-37 | 10mg | $80.00 | $8.00 | ✓ |
| Melanotan I | 10mg | $44.00 | $4.40 | ✓ |
| Melanotan II | 10mg | $44.00 | $4.40 | ✓ |
| MOTS-C | 10mg | $54.00 | $5.40 | ✓ |
| NAD+ | 50ml | $50.00 | — | ✓ |
| NAD+ | 250mg | $44.00 | $0.18 | ✓ |
| NAD+ | 500mg | $68.00 | $0.14 | ✓ |
| Oxytocin | 10mg | $58.00 | $5.80 | ✓ |
| PDA | 10mg | $44.00 | $4.40 | ✓ |
| PT-141 | 10mg | $44.00 | $4.40 | ✓ |
| Selank | 10mg | $44.00 | $4.40 | ✓ |
| Semax | 10mg | $44.00 | $4.40 | ✓ |
| Sermorelin | 5mg | $44.00 | $8.80 | ✓ |
| SNAP-8 [backlog] | 10mg | $40.00 | $4.00 | ✓ |
| Survodutide [backlog] | 10mg | $95.00 | $9.50 | ✓ |
| TB-500 | 10mg | $48.00 | $4.80 | ✓ |
| Tesamorelin | 10mg | $68.00 | $6.80 | ✓ |
| Thymosin Alpha-1 | 5mg | $35.00 | $7.00 | ✓ |
| Thymosin Alpha-1 | 10mg | $62.00 | $6.20 | ✓ |
| VIP | 10mg | $58.00 | $5.80 | ✓ |

### Blends (total mg; ratio where published — none of these vendors publish component ratios)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $53.00 | 5/5 (published) | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 50mg | $88.00 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $98.00 | not published | ✓ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 13mg | $88.00 | 10/3 (published) | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $88.00 | 10/10 (published) | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $53.00 | 5/5 (published) | ✓ |

### Sprays: none
### Excluded: out-of-scope (SARMs/Rx/cosmetics), supplies — bac water/supplies, SARMs, Rx, cosmetics, clinical hormones (HCG etc.), out of PP scope

---

## VENDOR: Amino X
- **slug:** amino-x | **code:** PROF15 | **discount:** 15% off | **url:** aminox.net
- **traffic:** (not pulled) | **pulled:** July 23 2026
- **sale posture:** No sitewide sale (0/12; no cart auto-coupon). Base=regular_price. GLP coded: AX-RT=Retatrutide, AX-TR=Tirzepatide.

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

### Blends (total mg; ratio where published — none of these vendors publish component ratios)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $79.99 | not published | ✗ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $64.99 | not published | ✓ |

### Sprays: none
### Excluded: supplies — bac water/supplies, SARMs, Rx, cosmetics, clinical hormones (HCG etc.), out of PP scope

---

## VENDOR: Ascension Peptides
- **slug:** ascension-peptides | **code:** PROFPEPTIDE | **discount:** 50% off | **url:** ascensionpeptides.com
- **traffic:** (not pulled) | **pulled:** July 23 2026
- **sale posture:** ⚠️ Near-sitewide PRODUCT-LEVEL sale_price (39/42). Base below=regular_price (true base); code STACKS on top. GLP coded (single-letter): R=Retatrutide, T=Tirzepatide, C=Cagrilintide, S=Semaglutide (T/C/S confirmed by molecular descriptions).

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
| SS-31 | 10mg | $79.99 | $8.00 | ✗ |
| TB-500 | 5mg | $60.00 | $12.00 | ✓ |
| Tesamorelin | 5mg | $89.99 | $18.00 | ✓ |
| Thymosin Alpha-1 | 10mg | $99.99 | $10.00 | ✓ |
| Tirzepatide (listed as T-10) | 10mg | $124.99 | $12.50 | ✓ |
| Tirzepatide (listed as T-30) | 30mg | $199.99 | $6.67 | ✓ |
| VIP | 10mg | $149.99 | $15.00 | ✓ |

### Blends (total mg; ratio where published — none of these vendors publish component ratios)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 40mg | $199.99 | 10/10/20 (published) | ✗ |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 20mg | $99.99 | 5/5/10 (published) | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 140mg | $174.99 | 50/10/10/70 (published) | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 160mg | $199.99 | 50/10/10/10/80 (published) | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 40mg | $149.99 | 10/10/20 (published) | ✓ |

### Sprays: none
### Excluded: clinical/other — bac water/supplies, SARMs, Rx, cosmetics, clinical hormones (HCG etc.), out of PP scope

---

## VENDOR: Behemoth Labz
- **slug:** behemoth-labz | **code:** PROF10 | **discount:** 10% off | **url:** behemothlabz.com
- **traffic:** (not pulled) | **pulled:** July 23 2026
- **sale posture:** Product-level sale_price on 20/100; no cart auto-coupon. Base=regular_price; code STACKS.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| Adamax | 5mg | $55.17 | $11.03 | ✓ |
| BPC-157 | — | $163.97 | — | ✓ |
| BPC-157 | 5mg | $87.26 | $17.45 | ✓ |
| BPC-157 | 10mg | $174.51 | $17.45 | ✓ |
| BPC-157 | 30mg | $274.95 | $9.16 | ✓ |
| Bronchogen [backlog] | 20mg | $69.47 | $3.47 | ✓ |
| Cagrilintide | 5mg | $111.70 | $22.34 | ✓ |
| Cagrilintide | 10mg | $208.62 | $20.86 | ✓ |
| Cagrilintide | 20mg | $379.55 | $18.98 | ✓ |
| Cardiogen | 20mg | $61.48 | $3.07 | ✓ |
| Cartalax [backlog] | 20mg | $66.48 | $3.32 | ✗ |
| Chonluten [backlog] | 20mg | $60.48 | $3.02 | ✓ |
| CJC-1295 | 2mg | $41.45 | $20.73 | ✓ |
| CJC-1295 | 5mg | $58.13 | $11.63 | ✓ |
| Cortagen | 20mg | $54.48 | $2.72 | ✓ |
| Dihexa [backlog] | — | $9.18 | — | ✓ |
| GHRP-2 | 10mg | $44.33 | $4.43 | ✓ |
| Ipamorelin | 20mg | $151.47 | $7.57 | ✓ |
| Livagen [backlog] | 20mg | $72.72 | $3.64 | ✓ |
| Mazdutide [backlog] | 6mg | $115.47 | $19.25 | ✓ |
| Mazdutide [backlog] | 12mg | $207.96 | $17.33 | ✓ |
| Ovagen [backlog] | 5mg | $21.48 | $4.30 | ✓ |
| Ovagen [backlog] | 20mg | $65.98 | $3.30 | ✓ |
| Pancragen [backlog] | 20mg | $61.48 | $3.07 | ✓ |
| Pinealon | 5mg | $66.88 | $13.38 | ✓ |
| Pinealon | 10mg | $89.72 | $8.97 | ✓ |
| PNC-27 [backlog] | 10mg | $314.00 | $31.40 | ✓ |
| PT-141 | 10mg | $73.45 | $7.35 | ✓ |
| Selank | 10mg | $68.53 | $6.85 | ✓ |
| Selank | 20mg | $98.48 | $4.92 | ✓ |
| Selank | 40mg | $108.98 | $2.72 | ✓ |
| Semax | 10mg | $68.53 | $6.85 | ✓ |
| Semax | 30mg | $100.34 | $3.34 | ✓ |
| Semax | 60mg | $200.69 | $3.34 | ✓ |
| SNAP-8 [backlog] | 10mg | $41.79 | $4.18 | ✓ |
| SNAP-8 [backlog] | 100mg | $258.41 | $2.58 | ✓ |
| Testagen [backlog] | 20mg | $60.98 | $3.05 | ✗ |
| Thymogen | 20mg | $76.97 | $3.85 | ✓ |
| Tirzepatide | 60mg | $298.52 | $4.98 | ✓ |
| Vesilute [backlog] | 10mg | $58.99 | $5.90 | ✓ |
| Vesugen [backlog] | 20mg | $61.48 | $3.07 | ✓ |
| Vilon [backlog] | 20mg | $64.48 | $3.22 | ✓ |

### Blends (total mg; ratio where published — none of these vendors publish component ratios)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 6mg | $83.90 | not published | ✓ |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 8mg | $199.96 | not published | ✓ |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 4mg | $102.97 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $168.49 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $216.05 | not published | ✓ |

### Sprays: none
### Excluded: out-of-scope (SARMs/Rx/cosmetics), supplies — bac water/supplies, SARMs, Rx, cosmetics, clinical hormones (HCG etc.), out of PP scope

---

## VENDOR: BioCollex
- **slug:** biocollex | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** biocollexresearch.com
- **traffic:** (not pulled) | **pulled:** July 23 2026
- **sale posture:** No sitewide sale (0/15; no cart auto-coupon). Base=regular_price. NOTE: variations are Pack Size (vial-count bundles) — mg taken from product name, base = single-vial (1-pack) price.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| GHK-Cu | 50mg | $25.00 | $0.50 | ✓ |
| MOTS-C | 10mg | $65.00 | $6.50 | ✓ |
| NAD+ | 500mg | $65.00 | $0.13 | ✓ |
| PT-141 | 10mg | $45.00 | $4.50 | ✓ |
| Retatrutide | 10mg | $90.00 | $9.00 | ✓ |
| Retatrutide | 20mg | $155.00 | $7.75 | ✓ |
| Retatrutide | 30mg | $185.00 | $6.17 | ✓ |
| Selank | 10mg | $55.00 | $5.50 | ✓ |
| Semax | 10mg | $55.00 | $5.50 | ✓ |
| SS-31 | 10mg | $60.00 | $6.00 | ✓ |
| Tesamorelin | 10mg | $85.00 | $8.50 | ✓ |
| Tirzepatide | 25mg | $115.00 | $4.60 | ✓ |

### Blends (total mg; ratio where published — none of these vendors publish component ratios)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $75.00 | 5/5 (published) | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $110.00 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $60.00 | not published | ✓ |

### Sprays: none
### Excluded: supplies — bac water/supplies, SARMs, Rx, cosmetics, clinical hormones (HCG etc.), out of PP scope

---

## VENDOR: EZ Peptides
- **slug:** ez-peptides | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** ezpeptides.com
- **traffic:** (not pulled) | **pulled:** July 23 2026
- **sale posture:** No product-level sale (0/80); no cart auto-coupon. Base=regular_price. GLP coded: EZP-1P=Semaglutide, EZP-2P=Tirzepatide, EZP-3P=Retatrutide, EZP-CG=Cagrilintide (EZP-CG confirmed by description).

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

### Blends (total mg; ratio where published — none of these vendors publish component ratios)
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
### Excluded: out-of-scope (SARMs/Rx/cosmetics), supplies — bac water/supplies, SARMs, Rx, cosmetics, clinical hormones (HCG etc.), out of PP scope

---

## VENDOR: Glacier Aminos
- **slug:** glacier-aminos | **code:** PROF10 | **discount:** 10% off | **url:** glacieraminos.shop
- **traffic:** (not pulled) | **pulled:** July 23 2026
- **sale posture:** Minimal product-level sale (1/70); no cart auto-coupon. Base=regular_price. ⚠️ GLP coded names GLA-1 SM / GLA-2 TRZ / GLA-3 RT are UNVERIFIED — no COA, MW, formula, or compound name published on the product pages or /coa; listed under the coded name only (naming convention suggests Semaglutide/Tirzepatide/Retatrutide but not asserted).

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $51.99 | $5.20 | ✓ |
| 5-Amino-1MQ | 50mg | $101.99 | $2.04 | ✓ |
| Adamax | 10mg | $64.99 | $6.50 | ✓ |
| AOD-9604 | 10mg | $92.99 | $9.30 | ✓ |
| BPC-157 | 500mcg | $99.99 | $199.98 | ✓ |
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
| GHK-Cu | 2mg | $79.99 | $39.99 | ✓ |
| GHK-Cu | 50mg | $41.99 | $0.84 | ✓ |
| GHK-Cu | 100mg | $62.99 | $0.63 | ✓ |
| Glutathione | 1500mg | $75.99 | $0.05 | ✓ |
| Ipamorelin | 10mg | $51.99 | $5.20 | ✓ |
| Kisspeptin-10 | 10mg | $40.99 | $4.10 | ✓ |
| KPV | 1mg | $119.99 | $119.99 | ✓ |
| KPV | 10mg | $51.99 | $5.20 | ✓ |
| Melanotan I | 10mg | $33.99 | $3.40 | ✓ |
| Melanotan II | 10mg | $33.99 | $3.40 | ✓ |
| MOTS-C | 10mg | $45.99 | $4.60 | ✓ |
| MOTS-C | 20mg | $79.99 | $4.00 | ✓ |
| NAD+ | 500mg | $56.99 | $0.11 | ✓ |
| Oxytocin | 10mg | $55.99 | $5.60 | ✓ |
| Pinealon | 10mg | $49.99 | $5.00 | ✓ |
| PT-141 | 10mg | $40.99 | $4.10 | ✓ |
| GLA-3 RT [coded, UNVERIFIED] | 10mg | $61.99 | $6.20 | ✓ |
| GLA-3 RT [coded, UNVERIFIED] | 20mg | $110.99 | $5.55 | ✓ |
| GLA-3 RT [coded, UNVERIFIED] | 30mg | $149.99 | $5.00 | ✓ |
| GLA-3 RT [coded, UNVERIFIED] | 50mg | $213.99 | $4.28 | ✓ |
| GLA-3 RT [coded, UNVERIFIED] | 60mg | $248.99 | $4.15 | ✓ |
| Selank | 10mg | $40.99 | $4.10 | ✓ |
| Selank | 20mg | $81.99 | $4.10 | ✓ |
| GLA-1 SM [coded, UNVERIFIED] | 15mg | $71.99 | $4.80 | ✓ |
| Semax | 10mg | $40.99 | $4.10 | ✓ |
| Sermorelin | 10mg | $62.99 | $6.30 | ✓ |
| SLU-PP-332 [backlog] | 5mg | $49.99 | $10.00 | ✓ |
| SLU-PP-332 [backlog] | 20mg | $119.99 | $6.00 | ✓ |
| SNAP-8 [backlog] | — | $148.99 | — | ✓ |
| TB-500 | 10mg | $58.99 | $5.90 | ✓ |
| Tesamorelin | 10mg | $67.99 | $6.80 | ✓ |
| Tesamorelin | 20mg | $117.99 | $5.90 | ✓ |
| Tesofensine [backlog] | 500mcg | $114.99 | $229.98 | ✓ |
| Testagen [backlog] | 20mg | $67.99 | $3.40 | ✓ |
| Thymosin Alpha-1 | 10mg | $63.99 | $6.40 | ✓ |
| GLA-2 TRZ [coded, UNVERIFIED] | 10mg | $62.99 | $6.30 | ✓ |
| GLA-2 TRZ [coded, UNVERIFIED] | 20mg | $77.99 | $3.90 | ✓ |
| GLA-2 TRZ [coded, UNVERIFIED] | 30mg | $97.99 | $3.27 | ✓ |
| GLA-2 TRZ [coded, UNVERIFIED] | 45mg | $131.99 | $2.93 | ✓ |
| GLA-2 TRZ [coded, UNVERIFIED] | 60mg | $164.99 | $2.75 | ✓ |
| VIP | 10mg | $65.99 | $6.60 | ✓ |

### Blends (total mg; ratio where published — none of these vendors publish component ratios)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 10mg | $56.99 | not published | ✓ |
| GHK-Cu/KPV blend [backlog] |  | — | $72.99 | not published | ✗ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $96.99 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $118.99 | not published | ✓ |
| Reta/Cagri blend [backlog] |  | 20mg | $129.99 | not published | ✗ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | 16mg | $104.99 | 13/3 (published) | ✓ |
| Tirz/Reta blend [backlog] |  | 20mg | $109.99 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $59.99 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $99.99 | not published | ✓ |

### Sprays / strips (separate format, no $/mg)
| Product | Size | Base | Stock |
| --- | --- | --- | --- |
| Adalank Research Spray 15MG [spray] | 15mg | $159.99 | ✗ |
| Adamax 1032 Research Spray 15MG [spray] | 15mg | $159.99 | ✗ |
| BPC-TB-500 Research Spray 60MG [spray] | 60mg | $145.99 | ✗ |
| NAD+ Buffered Research Spray 1500MG [spray] | 1500mg | $114.99 | ✗ |
| Neuro Triple Blend Research Spray 60MG [spray] | 60mg | $145.99 | ✗ |
| PT-141 Research Spray 30MG [spray] | 30mg | $119.99 | ✗ |
| Selank Research Spray 40MG [spray] | 40mg | $144.99 | ✗ |
| Selank/DSIP Research Spray 50MG [spray] | 50mg | $129.99 | ✗ |
| Semax Research Spray 50MG [spray] | 50mg | $149.99 | ✗ |
| SS-31 (spray) | 10mg | $49.99 | ✓ |

### Excluded: clinical/other, supplies — bac water/supplies, SARMs, Rx, cosmetics, clinical hormones (HCG etc.), out of PP scope

---

## VENDOR: Ignite Peptides
- **slug:** ignite-peptides | **code:** PROF10 | **discount:** 10% off | **url:** ignitepeptides.com
- **traffic:** (not pulled) | **pulled:** July 23 2026
- **sale posture:** Product-level sale_price on 5/34; no cart auto-coupon. Base=regular_price; code STACKS. GLP coded — GLP-3 (RT)=Retatrutide CONFIRMED (Janoshik COA), GLP-2 (TZ)=Tirzepatide / GLP-1 (S)=Semaglutide confirmed via product-page identity.

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
| MOTS-C | 10mg | $48.00 | $4.80 | ✓ |
| NAD+ | 500mg | $100.00 | $0.20 | ✓ |
| PT-141 | 10mg | $30.00 | $3.00 | ✓ |
| Retatrutide (listed as GLP-3 (RT)) | 10mg | $75.00 | $7.50 | ✓ |
| Retatrutide (listed as GLP-3 (RT)) | 20mg | $140.00 | $7.00 | ✗ |
| Selank | 10mg | $30.00 | $3.00 | ✓ |
| Semaglutide (listed as GLP-1 (S)) | 5mg | $68.50 | $13.70 | ✓ |
| Semaglutide (listed as GLP-1 (S)) | 20mg | $170.00 | $8.50 | ✓ |
| Sermorelin | 5mg | $50.00 | $10.00 | ✓ |
| Sermorelin | 10mg | $80.00 | $8.00 | ✓ |
| SNAP-8 [backlog] | 10mg | $45.00 | $4.50 | ✓ |
| TB-500 | 5mg | $40.00 | $8.00 | ✗ |
| TB-500 | 10mg | $65.00 | $6.50 | ✓ |
| Tirzepatide (listed as GLP-2 (TZ)) | 10mg | $100.00 | $10.00 | ✓ |
| Tirzepatide (listed as GLP-2 (TZ)) | 30mg | $150.00 | $5.00 | ✓ |

### Blends (total mg; ratio where published — none of these vendors publish component ratios)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | — | $100.00 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $150.00 | 10/10/50 (published) | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | — | $150.00 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $90.00 | 5/5 (published) | ✓ |

### Sprays: none
### Excluded: out-of-scope (SARMs/Rx/cosmetics), supplies — bac water/supplies, SARMs, Rx, cosmetics, clinical hormones (HCG etc.), out of PP scope

---

## VENDOR: Integrative Peptides
- **slug:** integrative-peptides | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** integrativepeptides.com
- **traffic:** (not pulled) | **pulled:** July 23 2026
- **sale posture:** Product-level sale on 1/73; no cart auto-coupon. Base=regular_price. Small peptide overlap — catalog is largely oral/topical wellness (out of scope).

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| Epitalon | — | $150.00 | — | ✓ |
| KPV | — | $150.00 | — | ✓ |
| Thymogen | — | $150.00 | — | ✓ |

### Sprays / strips (separate format, no $/mg)
| Product | Size | Base | Stock |
| --- | --- | --- | --- |
| KPV (spray) | — | $150.00 | ✓ |

### Excluded: out-of-scope (SARMs/Rx/cosmetics), supplies — bac water/supplies, SARMs, Rx, cosmetics, clinical hormones (HCG etc.), out of PP scope

---

## VENDOR: Oasis Labs
- **slug:** oasis-labs | **code:** PROF15 | **discount:** 15% off | **url:** myoasislabs.com
- **traffic:** (not pulled) | **pulled:** July 23 2026
- **sale posture:** Product-level sale_price on 7/54; no cart auto-coupon. Base=regular_price; code STACKS. GLP3(R)=Retatrutide CONFIRMED (Bioviridian COA, MW 4731.6).

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $69.00 | $6.90 | ✓ |
| 5-Amino-1MQ | 50mg | $248.50 | $4.97 | ✓ |
| AOD-9604 | 5mg | $54.50 | $10.90 | ✓ |
| BPC-157 | 500mcg | $149.00 | $298.00 | ✓ |
| BPC-157 | 5mg | $30.00 | $6.00 | ✓ |
| BPC-157 | 10mg | $52.50 | $5.25 | ✓ |
| Cagrilintide | 5mg | $81.00 | $16.20 | ✓ |
| CJC-1295 | 5mg | $42.00 | $8.40 | ✓ |
| Dihexa [backlog] | 20mg | $273.00 | $13.65 | ✓ |
| DSIP | 5mg | $37.50 | $7.50 | ✓ |
| FOXO4-DRI [backlog] | 10mg | $217.50 | $21.75 | ✓ |
| GHK-Cu | 50mg | $44.28 | $0.89 | ✓ |
| GHK-Cu | 100mg | $67.85 | $0.68 | ✓ |
| GHRP-2 | 10mg | $47.00 | $4.70 | ✓ |
| GHRP-6 | 10mg | $47.00 | $4.70 | ✓ |
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
| Retatrutide (listed as GLP3(R)) | 10mg | $54.05 | $5.40 | ✓ |
| Retatrutide (listed as GLP3(R)) | 15mg | $54.05 | $3.60 | ✓ |
| Retatrutide (listed as GLP3(R)) | 20mg | $54.05 | $2.70 | ✓ |
| Retatrutide (listed as GLP3(R)) | 30mg | $54.05 | $1.80 | ✓ |
| Retatrutide (listed as GLP3(R)) | 40mg | $54.05 | $1.35 | ✓ |
| Retatrutide (listed as GLP3(R)) | 60mg | $54.05 | $0.90 | ✓ |
| Selank | 10mg | $52.50 | $5.25 | ✓ |
| Semax | 10mg | $48.50 | $4.85 | ✓ |
| SLU-PP-332 [backlog] | 250mcg | $171.00 | $684.00 | ✓ |
| SLU-PP-332 [backlog] | 1000mcg | $174.00 | $174.00 | ✓ |
| SLU-PP-332 [backlog] | 5mg | $74.50 | $14.90 | ✓ |
| SNAP-8 [backlog] | 10mg | $47.00 | $4.70 | ✓ |
| TB-500 | 10mg | $57.00 | $5.70 | ✓ |
| Tesofensine [backlog] | 500mcg | $223.50 | $447.00 | ✓ |
| Thymosin Alpha-1 | 10mg | $65.00 | $6.50 | ✓ |

### Blends (total mg; ratio where published — none of these vendors publish component ratios)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| GLOW | GHK-Cu/BPC-157/TB-500 | 10mg | $120.18 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 10mg | $144.90 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 5mg | $64.40 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $108.10 | not published | ✓ |

### Sprays: none
### Excluded: out-of-scope (SARMs/Rx/cosmetics), supplies — bac water/supplies, SARMs, Rx, cosmetics, clinical hormones (HCG etc.), out of PP scope

---

## VENDOR: Peptide Partners
- **slug:** peptide-partners | **code:** PROFPEPTIDE | **discount:** 10% off | **url:** peptide.partners
- **traffic:** (not pulled) | **pulled:** July 23 2026
- **sale posture:** Product-level sale_price on 16/38; no cart auto-coupon. Base=regular_price; code STACKS. GLPs self-identified in product names (GLP-1 Semaglutide etc.).

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 20mg | $56.00 | $2.80 | ✓ |
| 5-Amino-1MQ | 50mg | $120.00 | $2.40 | ✓ |
| 5-Amino-1MQ | 100mg | $195.00 | $1.95 | ✓ |
| AOD-9604 | 10mg | $134.00 | $13.40 | ✓ |
| BPC-157 | 10mg | $200.00 | $20.00 | ✓ |
| Cagrilintide | 10mg | $335.00 | $33.50 | ✓ |
| CJC-1295 | 10mg | $175.00 | $17.50 | ✓ |
| DSIP | 5mg | $110.00 | $22.00 | ✓ |
| Epitalon | 40mg | $216.00 | $5.40 | ✓ |
| GHK-Cu | 100mg | $275.00 | $2.75 | ✓ |
| Humanin [backlog] | 10mg | $330.00 | $33.00 | ✗ |
| Ipamorelin | 10mg | $165.00 | $16.50 | ✓ |
| KPV | 10mg | $88.00 | $8.80 | ✓ |
| MOTS-C | 10mg | $240.00 | $24.00 | ✓ |
| MOTS-C | 40mg | $252.00 | $6.30 | ✗ |
| NAD+ | 750mg | $600.00 | $0.80 | ✗ |
| NAD+ | 900mg | $660.00 | $0.73 | ✓ |
| Pinealon | 20mg | $100.00 | $5.00 | ✗ |
| PT-141 | 10mg | $84.00 | $8.40 | ✓ |
| Retatrutide | 12mg | $124.00 | $10.33 | ✗ |
| Retatrutide | 24mg | $230.00 | $9.58 | ✓ |
| Selank | 30mg | $234.00 | $7.80 | ✗ |
| Semaglutide | 10mg | $285.00 | $28.50 | ✓ |
| Semax | 20mg | $60.00 | $3.00 | ✗ |
| Sermorelin | 10mg | $98.00 | $9.80 | ✓ |
| SS-31 | 10mg | $145.00 | $14.50 | ✓ |
| SS-31 | 50mg | $320.00 | $6.40 | ✓ |
| TB-500 | 10mg | $230.00 | $23.00 | ✓ |
| Tesamorelin | 10mg | $122.00 | $12.20 | ✗ |
| Thymosin Alpha-1 | 10mg | $98.00 | $9.80 | ✓ |
| Tirzepatide | 40mg | $260.00 | $6.50 | ✓ |
| VIP | 10mg | $230.00 | $23.00 | ✓ |

### Blends (total mg; ratio where published — none of these vendors publish component ratios)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $182.00 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $390.00 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $770.00 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $240.00 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $560.00 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $975.00 | not published | ✓ |

### Sprays: none
### Excluded: out-of-scope (SARMs/Rx/cosmetics), supplies — bac water/supplies, SARMs, Rx, cosmetics, clinical hormones (HCG etc.), out of PP scope

---

## VENDOR: Peptides.gg
- **slug:** peptides-gg | **code:** PROF15 | **discount:** 15% off | **url:** peptides.gg
- **traffic:** (not pulled) | **pulled:** July 23 2026
- **sale posture:** No product-level sale (0/85); no cart auto-coupon. Base=regular_price. GLPs named plainly.

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

### Blends (total mg; ratio where published — none of these vendors publish component ratios)
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
### Excluded: oral/tablet/sublingual forms, out-of-scope (SARMs/Rx/cosmetics), supplies — bac water/supplies, SARMs, Rx, cosmetics, clinical hormones (HCG etc.), out of PP scope

---

## VENDOR: PureRawz
- **slug:** purerawz | **code:** PROF10 | **discount:** 10% off | **url:** purerawz.co
- **traffic:** (not pulled) | **pulled:** July 23 2026
- **sale posture:** Product-level sale_price on 28/200; no cart auto-coupon. Base=regular_price; code STACKS. ⚠️ GLP-1.x coded names UNVERIFIED (no COA/MW/identity; permalinks suggest Sema/Tirz/Reta but not asserted). Large general research-chem catalog — SARMs/Rx/nootropics excluded.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 205mg | $417.55 | $2.04 | ✓ |
| Adamax | 5mg | $55.00 | $11.00 | ✓ |
| Adamax | 10mg | $67.77 | $6.78 | ✓ |
| BPC-157 | 30mg | $275.45 | $9.18 | ✓ |
| Bronchogen [backlog] | 20mg | $69.98 | $3.50 | ✓ |
| Cagrilintide | 5mg | $77.76 | $15.55 | ✓ |
| Cagrilintide | 10mg | $155.54 | $15.55 | ✓ |
| Cagrilintide | 20mg | $380.00 | $19.00 | ✓ |
| Cardiogen | 20mg | $61.78 | $3.09 | ✓ |
| Cartalax [backlog] | 20mg | $66.92 | $3.35 | ✗ |
| Chonluten [backlog] | 20mg | $62.57 | $3.13 | ✓ |
| Cortagen | 20mg | $54.57 | $2.73 | ✓ |
| Dihexa [backlog] | 10mg | $104.99 | $10.50 | ✓ |
| Epitalon | 100mg | $189.93 | $1.90 | ✓ |
| GHRP-2 | 10mg | $42.50 | $4.25 | ✓ |
| GLP-1 [coded, UNVERIFIED] | 5mg | $206.71 | $41.34 | ✓ |
| GLP-1 [coded, UNVERIFIED] | 10mg | $379.75 | $37.98 | ✓ |
| GLP-1.2 [coded, UNVERIFIED] | 60mg | $650.59 | $10.84 | ✓ |
| GLP-1.3 [coded, UNVERIFIED] | 5mg | $86.03 | $17.21 | ✗ |
| Humanin [backlog] | 5mg | $119.47 | $23.89 | ✓ |
| KPV | 5mg | $36.80 | $7.36 | ✓ |
| Livagen [backlog] | 20mg | $70.48 | $3.52 | ✓ |
| Mazdutide [backlog] | 6mg | $115.97 | $19.33 | ✓ |
| Mazdutide [backlog] | 12mg | $208.96 | $17.41 | ✓ |
| Melanotan II | 10mg | $62.61 | $6.26 | ✓ |
| Ovagen [backlog] | 5mg | $21.98 | $4.40 | ✓ |
| Ovagen [backlog] | 20mg | $66.41 | $3.32 | ✓ |
| Pancragen [backlog] | 20mg | $61.78 | $3.09 | ✓ |
| PT-141 | 10mg | $74.87 | $7.49 | ✗ |
| Semax | 30mg | $102.57 | $3.42 | ✓ |
| Semax | 60mg | $205.15 | $3.42 | ✓ |
| SNAP-8 [backlog] | 10mg | $42.00 | $4.20 | ✓ |
| SNAP-8 [backlog] | 100mg | $260.00 | $2.60 | ✓ |
| SS-31 | 5mg | $45.62 | $9.12 | ✓ |
| SS-31 | 10mg | $91.24 | $9.12 | ✓ |
| Survodutide [backlog] | 10mg | $132.80 | $13.28 | ✓ |
| Testagen [backlog] | 20mg | $61.26 | $3.06 | ✗ |
| Tirzepatide | 60mg | $300.00 | $5.00 | ✓ |
| Vesugen [backlog] | 20mg | $61.78 | $3.09 | ✓ |
| Vilon [backlog] | 20mg | $64.87 | $3.24 | ✓ |
| VIP | 5mg | $42.48 | $8.50 | ✓ |
| VIP | 10mg | $79.06 | $7.91 | ✓ |
| VIP | 12mg | $95.35 | $7.95 | ✓ |

### Blends (total mg; ratio where published — none of these vendors publish component ratios)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | 6mg | $82.10 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | 70mg | $170.00 | not published | ✓ |
| GLP-1.x blend [coded, UNVERIFIED] |  | 0.4mg | $900.48 | not published | ✓ |
| GLP-1.x blend [coded, UNVERIFIED] |  | 0.2mg | $585.48 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | 80mg | $215.00 | not published | ✓ |

### Sprays / strips (separate format, no $/mg)
| Product | Size | Base | Stock |
| --- | --- | --- | --- |
| AOD-9604 | 100mcg | $138.87 | ✓ |
| AOD-9604 | 10mg | $109.02 | ✓ |
| AOD-9604 | 5mg | $77.49 | ✓ |
| BPC-157 | 2.2mg | $268.28 | ✓ |
| BPC-157 | 30mg | $272.96 | ✓ |
| BPC-157 | 2.2mg | $270.85 | ✓ |
| BPC-157 | 220mcg | $464.44 | ✓ |
| BPC-157 | 6mg | $172.46 | ✓ |
| BPC-157 | 6mg | $164.47 | ✓ |
| BPC-157 | 220mcg | $442.84 | ✓ |
| BPC-157 | 600mcg | $370.48 | ✓ |
| BPC-157 | 15mg | $125.98 | ✓ |
| BPC-157 (spray) | 385mcg | $573.88 | ✗ |
| BPC-157 (spray) | 192.5mcg | $323.67 | ✗ |
| Epitalon | 1mg | $196.81 | ✓ |
| Epitalon | 100mg | $171.57 | ✓ |
| GLP-1 [coded, UNVERIFIED] | 200mcg | $737.62 | ✓ |
| GLP-1 [coded, UNVERIFIED] | 100mcg | $379.75 | ✓ |
| GLP-1.2 [coded, UNVERIFIED] | 200mcg | $572.97 | ✓ |
| GLP-1.2 [coded, UNVERIFIED] | 100mcg | $358.10 | ✓ |
| GLP-1.2 [coded, UNVERIFIED] | 10mg | $122.66 | ✓ |
| GLP-1.2 [coded, UNVERIFIED] | 5mg | $61.33 | ✓ |
| GLP-1.3 [coded, UNVERIFIED] | 10mcg | $47.38 | ✓ |
| GLP-1.3 [coded, UNVERIFIED] | 30mcg | $120.51 | ✓ |
| GLP-1.3 [coded, UNVERIFIED] | 1mg | $53.82 | ✓ |
| GLP-1.3 [coded, UNVERIFIED] | 3mg | $65.54 | ✓ |
| Glutathione | 24mg | $109.84 | ✓ |
| Glutathione (spray) | 28.8mg | $332.13 | ✓ |
| KPV | 500mcg | $275.20 | ✓ |
| KPV | 10mg | $90.45 | ✓ |
| KPV | 50mg | $275.20 | ✓ |
| Semax | 30mg | $102.57 | ✓ |
| Semax | 60mg | $205.15 | ✓ |
| Semax | 120mg | $410.30 | ✓ |

### Excluded: oral/tablet/sublingual forms, out-of-scope (SARMs/Rx/cosmetics) — bac water/supplies, SARMs, Rx, cosmetics, clinical hormones (HCG etc.), out of PP scope

---

## VENDOR: Royal Peptides
- **slug:** royal-peptides | **code:** PROF10 | **discount:** 10% off | **url:** royal-peptides.com
- **traffic:** (not pulled) | **pulled:** July 23 2026
- **sale posture:** No product-level sale (0/133); no cart auto-coupon. Base=regular_price. NOTE: royal sells 10-VIAL KITS only ('5mgx10vials') — per-vial base = kit price / 10; size = per-vial mg. GLPs named plainly.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 50mg | $90.00 | $1.80 | ✗ |
| 5-Amino-1MQ | 70mg | $165.00 | $2.36 | ✓ |
| AOD-9604 | 5mg | $43.00 | $8.60 | ✓ |
| BPC-157 | 500mcg | $175.00 | $350.00 | ✗ |
| BPC-157 | 10mg | $36.00 | $3.60 | ✓ |
| BPC-157 | 20mg | $80.00 | $4.00 | ✗ |
| Cagrilintide | 5mg | $30.00 | $6.00 | ✓ |
| Cagrilintide | 10mg | $46.50 | $4.65 | ✓ |
| Cibinetide | 10mg | $65.00 | $6.50 | ✓ |
| Cibinetide | 30mg | $55.00 | $1.83 | ✓ |
| CJC-1295 | 5mg | $34.50 | $6.90 | ✓ |
| CJC-1295 | 10mg | $56.00 | $5.60 | ✓ |
| Dihexa [backlog] | 7.5mg | $125.00 | $16.67 | ✓ |
| DSIP | 5mg | $45.00 | $9.00 | ✓ |
| DSIP | 10mg | $35.00 | $3.50 | ✓ |
| GHK-Cu | — | $25.00 | — | ✓ |
| GHK-Cu | 50mg | $32.00 | $0.64 | ✓ |
| GHK-Cu | 100mg | $48.00 | $0.48 | ✓ |
| Glutathione | 1500mg | $47.50 | $0.03 | ✓ |
| Ipamorelin | 5mg | $45.00 | $9.00 | ✗ |
| Ipamorelin | 10mg | $40.00 | $4.00 | ✓ |
| Kisspeptin-10 | 10mg | $42.00 | $4.20 | ✗ |
| KPV | 10mg | $37.00 | $3.70 | ✓ |
| MK-677 | — | $85.00 | — | ✓ |
| MOTS-C | 10mg | $37.50 | $3.75 | ✓ |
| MOTS-C | 40mg | $60.00 | $1.50 | ✓ |
| NAD+ | 100mg | $35.00 | $0.35 | ✓ |
| NAD+ | 500mg | $38.50 | $0.08 | ✗ |
| NAD+ | 1000mg | $56.00 | $0.06 | ✓ |
| Oxytocin | 10mg | $40.00 | $4.00 | ✓ |
| PT-141 | 10mg | $36.50 | $3.65 | ✓ |
| Retatrutide | 5mg | $32.00 | $6.40 | ✓ |
| Retatrutide | 10mg | $40.00 | $4.00 | ✓ |
| Retatrutide | 15mg | $47.00 | $3.13 | ✓ |
| Retatrutide | 20mg | $54.00 | $2.70 | ✓ |
| Retatrutide | 30mg | $65.00 | $2.17 | ✓ |
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
| Thymosin Alpha-1 | 5mg | $55.00 | $11.00 | ✓ |
| Tirzepatide | 5mg | $25.00 | $5.00 | ✓ |
| Tirzepatide | 10mg | $26.50 | $2.65 | ✓ |
| Tirzepatide | 15mg | $32.00 | $2.13 | ✓ |
| Tirzepatide | 20mg | $38.00 | $1.90 | ✓ |
| Tirzepatide | 30mg | $45.00 | $1.50 | ✓ |
| Tirzepatide | 40mg | $55.00 | $1.38 | ✓ |
| Tirzepatide | 50mg | $60.00 | $1.20 | ✓ |
| Tirzepatide | 60mg | $65.00 | $1.08 | ✓ |
| Tirzepatide | 100mg | $87.50 | $0.88 | ✗ |
| VIP | 10mg | $33.00 | $3.30 | ✗ |

### Blends (total mg; ratio where published — none of these vendors publish component ratios)
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
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 40mg | $58.00 | 10/10/20 (published) | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $35.00 | 5/5/10 (published) | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $115.00 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $75.00 | not published | ✗ |

### Sprays: none
### Excluded: out-of-scope (SARMs/Rx/cosmetics), supplies — bac water/supplies, SARMs, Rx, cosmetics, clinical hormones (HCG etc.), out of PP scope

---

## VENDOR: Swiss Chems
- **slug:** swiss-chems | **code:** PROF10 | **discount:** 10% off | **url:** swisschems.is
- **traffic:** (not pulled) | **pulled:** July 23 2026
- **sale posture:** Product-level sale_price on 46/145; no cart auto-coupon. Base=regular_price; code STACKS. GLPs named plainly (Tirzepatide (LY3298176) etc.). Large catalog — SARMs/Rx excluded.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 50mg | $119.99 | $2.40 | ✓ |
| AOD-9604 | 2mg | $6.00 | $3.00 | ✗ |
| BPC-157 | 0.5mg | $114.95 | $229.90 | ✓ |
| BPC-157 | 5mg | $49.99 | $10.00 | ✓ |
| BPC-157 | 10mg | $59.95 | $6.00 | ✓ |
| Bronchogen [backlog] | 20mg | $70.00 | $3.50 | ✓ |
| Cardiogen | 20mg | $63.95 | $3.20 | ✓ |
| Cartalax [backlog] | 20mg | $70.00 | $3.50 | ✓ |
| Chonluten [backlog] | 20mg | $58.99 | $2.95 | ✓ |
| Cibinetide | 16mg | $85.60 | $5.35 | ✗ |
| CJC-1295 | 2mg | $42.95 | $21.48 | ✓ |
| Cortagen | 20mg | $65.00 | $3.25 | ✓ |
| Dihexa [backlog] | 5mg | $69.99 | $14.00 | ✓ |
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
| MK-677 | — | $229.85 | — | ✓ |
| MK-677 | 10mg | $89.95 | $9.00 | ✓ |
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
| SLU-PP-332 [backlog] | 100mg | $196.95 | $1.97 | ✓ |
| SS-31 | 5mg | $41.95 | $8.39 | ✓ |
| SS-31 | 10mg | $74.95 | $7.50 | ✓ |
| TB-500 | 0.5mg | $254.95 | $509.90 | ✓ |
| TB-500 | 2mg | $29.95 | $14.97 | ✓ |
| TB-500 | 5mg | $38.95 | $7.79 | ✓ |
| TB-500 | 10mg | $63.98 | $6.40 | ✓ |
| Tesamorelin | 2mg | $27.95 | $13.97 | ✓ |
| Tesofensine [backlog] | 0.25mg | $185.99 | $743.96 | ✓ |
| Testagen [backlog] | 20mg | $59.95 | $3.00 | ✓ |
| Thymogen | 20mg | $80.95 | $4.05 | ✓ |
| Thymosin Alpha-1 | 5mg | $63.99 | $12.80 | ✓ |
| Vesilute [backlog] | 20mg | $65.00 | $3.25 | ✗ |
| Vilon [backlog] | 20mg | $74.00 | $3.70 | ✓ |

### Blends (total mg; ratio where published — none of these vendors publish component ratios)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 5mg | $119.95 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $134.95 | not published | ✓ |

### Sprays: none
### Excluded: out-of-scope (SARMs/Rx/cosmetics), supplies — bac water/supplies, SARMs, Rx, cosmetics, clinical hormones (HCG etc.), out of PP scope

---

## VENDOR: Synthesis Peptides
- **slug:** synthesis-peptides | **code:** PROFPEPTIDE10 | **discount:** 10% off | **url:** synthesispeptides.io
- **traffic:** (not pulled) | **pulled:** July 23 2026
- **sale posture:** Product-level sale_price on 1/42; no cart auto-coupon. Base=regular_price; code STACKS. ⚠️ GLP-1S/2T/3R coded — UNVERIFIED (no COA/MW/identity; page mentions a name but no verifiable identity field; not asserted).

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | — | $129.99 | — | ✗ |
| 5-Amino-1MQ | 10mg | $36.99 | $3.70 | ✓ |
| 5-Amino-1MQ | 50mg | $74.99 | $1.50 | ✓ |
| AOD-9604 | — | $59.99 | — | ✓ |
| BPC-157 | — | $49.99 | — | ✓ |
| Cagrilintide | — | $62.99 | — | ✗ |
| CJC-1295 | 5mg | $36.99 | $7.40 | ✓ |
| DSIP | 5mg | $36.99 | $7.40 | ✓ |
| DSIP | 10mg | $47.99 | $4.80 | ✓ |
| Epitalon | 10mg | $43.99 | $4.40 | ✓ |
| Epitalon | 40mg | $119.99 | $3.00 | ✗ |
| GHK-Cu | — | $34.99 | — | ✓ |
| GHK-Cu | 50mg | $36.99 | $0.74 | ✓ |
| GLP-1S [coded, UNVERIFIED] | 10mg | $72.99 | $7.30 | ✓ |
| GLP-2T [coded, UNVERIFIED] | 5mg | $54.99 | $11.00 | ✓ |
| GLP-2T [coded, UNVERIFIED] | 10mg | $59.99 | $6.00 | ✓ |
| GLP-2T [coded, UNVERIFIED] | 15mg | $79.99 | $5.33 | ✓ |
| GLP-3R [coded, UNVERIFIED] | 10mg | $89.99 | $9.00 | ✓ |
| GLP-3R [coded, UNVERIFIED] | 15mg | $119.99 | $8.00 | ✓ |
| GLP-3R [coded, UNVERIFIED] | 20mg | $139.99 | $7.00 | ✓ |
| GLP-3R [coded, UNVERIFIED] | 30mg | $189.99 | $6.33 | ✗ |
| GLP-3R [coded, UNVERIFIED] | 40mg | $229.99 | $5.75 | ✓ |
| Glutathione | — | $73.99 | — | ✓ |
| IGF-1 LR3 | — | $78.99 | — | ✓ |
| Ipamorelin | 10mg | $64.99 | $6.50 | ✓ |
| KPV | — | $57.99 | — | ✓ |
| MOTS-C | 10mg | $49.99 | $5.00 | ✓ |
| MOTS-C | 40mg | $149.99 | $3.75 | ✓ |
| NAD+ | — | $63.99 | — | ✓ |
| PT-141 | — | $52.99 | — | ✓ |
| Selank | — | $73.99 | — | ✓ |
| Selank | 10mg | $41.99 | $4.20 | ✓ |
| Selank | 30mg | $74.99 | $2.50 | ✗ |
| Semax | — | $74.99 | — | ✓ |
| Semax | 10mg | $36.99 | $3.70 | ✗ |
| Semax | 30mg | $74.99 | $2.50 | ✓ |
| Sermorelin | 10mg | $74.99 | $7.50 | ✓ |
| TB-500 | 10mg | $74.99 | $7.50 | ✓ |
| Tesamorelin | 10mg | $79.99 | $8.00 | ✓ |
| Thymosin Alpha-1 | 10mg | $74.99 | $7.50 | ✓ |

### Blends (total mg; ratio where published — none of these vendors publish component ratios)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | — | $63.99 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | — | $119.99 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | — | $129.99 | not published | ✓ |
| Tesamorelin/Ipamorelin | Tesamorelin/Ipamorelin | — | $114.99 | not published | ✗ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $64.99 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 20mg | $99.99 | not published | ✓ |

### Sprays: none
### Excluded: oral/tablet/sublingual forms, out-of-scope (SARMs/Rx/cosmetics), supplies — bac water/supplies, SARMs, Rx, cosmetics, clinical hormones (HCG etc.), out of PP scope

---

## VENDOR: Vital Core Research
- **slug:** vital-core-research | **code:** PROF20 | **discount:** 20% off | **url:** vitalcoreresearch.com
- **traffic:** (not pulled) | **pulled:** July 23 2026
- **sale posture:** No product-level sale (0/57); no cart auto-coupon. Base=regular_price. ⚠️ GLP-1/2/3 coded — UNVERIFIED (COAs label the vendor code 'GLP-3RT' with HPLC purity only; no MW/formula/named compound; not asserted).

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
| SLU-PP-332 [backlog] | 100mcg | $74.99 | $749.90 | ✓ |
| SLU-PP-332 [backlog] | 250mcg | $130.99 | $523.96 | ✓ |
| SNAP-8 [backlog] | — | $49.99 | — | ✓ |
| TB-500 | 2mg | $29.99 | $14.99 | ✓ |
| TB-500 | 5mg | $39.99 | $8.00 | ✓ |
| TB-500 | 10mg | $74.99 | $7.50 | ✓ |
| Tesamorelin | 5mg | $41.99 | $8.40 | ✓ |
| Tesamorelin | 10mg | $54.95 | $5.50 | ✓ |
| Tesofensine [backlog] | 250mcg | $99.99 | $399.96 | ✓ |
| Tesofensine [backlog] | 500mcg | $149.99 | $299.98 | ✓ |
| Thymosin Alpha-1 | 5mg | $37.50 | $7.50 | ✓ |
| Thymosin Alpha-1 | 10mg | $74.99 | $7.50 | ✓ |

### Blends (total mg; ratio where published — none of these vendors publish component ratios)
| Blend | Components | Total mg | Base | Ratio | Stock |
| --- | --- | --- | --- | --- | --- |
| CJC-1295/Ipamorelin | CJC-1295/Ipamorelin | — | $74.99 | not published | ✓ |
| GLOW | GHK-Cu/BPC-157/TB-500 | — | $119.99 | not published | ✓ |
| KLOW | GHK-Cu/BPC-157/TB-500/KPV | — | $149.99 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 5mg | $74.99 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | 10mg | $140.99 | not published | ✓ |
| Wolverine (BPC-157/TB-500) | BPC-157/TB-500 | — | $74.99 | not published | ✓ |

### Sprays: none
### Excluded: oral/tablet/sublingual forms, out-of-scope (SARMs/Rx/cosmetics), supplies — bac water/supplies, SARMs, Rx, cosmetics, clinical hormones (HCG etc.), out of PP scope

---

## VENDOR: Purity Peptides
- **slug:** purity-peptides | **code:** PROF15 | **discount:** 15% off | **url:** puritypeptides.is
- **traffic:** (not pulled) | **pulled:** July 23 2026
- **sale posture:** No sitewide sale (API exposes one price per product; no sale/compare field). Base=price. Next.js custom /api/products. GLPs SELF-IDENTIFIED in product titles — GLP-1 (Semaglutide), GLP-2 (Tirzepatide), GLP-3 (Reta) — CONFIRMED by the vendor's own naming.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| 5-Amino-1MQ | 10mg | $69.99 | $7.00 | ✗ |
| AOD-9604 | 5mg | $69.99 | $14.00 | ✓ |
| BPC-157 | 500mcg | $255.00 | $510.00 | ✓ |
| BPC-157 | 5mg | $59.99 | $12.00 | ✓ |
| BPC-157 | 10mg | $94.99 | $9.50 | ✓ |
| BPC-157 | 20mg | $124.99 | $6.25 | ✓ |
| CJC-1295 | 2mg | $49.99 | $25.00 | ✓ |
| CJC-1295 | 5mg | $69.99 | $14.00 | ✓ |
| CJC-1295 | 10mg | $99.99 | $10.00 | ✓ |
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
| SLU-PP-332 [backlog] | 500mcg | $114.99 | $229.98 | ✓ |
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

### Blends (total mg; ratio where published — none of these vendors publish component ratios)
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

### Excluded: out-of-scope (SARMs/Rx/cosmetics), supplies — bac water/supplies, SARMs, Rx, cosmetics, clinical hormones (HCG etc.), out of PP scope

---

## VENDOR: Midwest Peptide
- **slug:** midwest-peptide | **code:** PROF10 | **discount:** 10% off | **url:** midwestpeptide.com
- **traffic:** (not pulled) | **pulled:** July 23 2026
- **sale posture:** ⚠️ PARTIAL PULL — Next.js RSC flight data resisted reliable full extraction; only 2 of ~24 products (glp-3-rt, ghk-cu) parsed with per-size variants. Base=current 'price' (products anchor a higher compare_at_price; the current price is the true base). GLP-3 RT=Retatrutide CONFIRMED by product spec (39-aa triple GIP/GLP-1/glucagon agonist = uniquely retatrutide). Remaining catalog needs a dedicated RSC/CINC pull.

### Single compounds
| Compound | Size | Base | $/mg | Stock |
| --- | --- | --- | --- | --- |
| GHK-Cu | 50mg | $29.99 | $0.60 | ✓ |
| GHK-Cu | 100mg | $57.99 | $0.58 | ✓ |
| Retatrutide (listed as GLP-3 RT) | 10mg | $69.99 | $7.00 | ✓ |
| Retatrutide (listed as GLP-3 RT) | 20mg | $134.99 | $6.75 | ✗ |

### Sprays: none
### Excluded: none — bac water/supplies, SARMs, Rx, cosmetics, clinical hormones (HCG etc.), out of PP scope

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
