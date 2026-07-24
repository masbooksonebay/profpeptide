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
- **sale posture:** Minimal product-level sale (1/70); no cart auto-coupon. Base=regular_price. GLP coded: GLA-1 SM=Semaglutide, GLA-2 TRZ=Tirzepatide, GLA-3 RT=Retatrutide.

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
| Retatrutide (listed as GLA-3 RT) | 10mg | $61.99 | $6.20 | ✓ |
| Retatrutide (listed as GLA-3 RT) | 20mg | $110.99 | $5.55 | ✓ |
| Retatrutide (listed as GLA-3 RT) | 30mg | $149.99 | $5.00 | ✓ |
| Retatrutide (listed as GLA-3 RT) | 50mg | $213.99 | $4.28 | ✓ |
| Retatrutide (listed as GLA-3 RT) | 60mg | $248.99 | $4.15 | ✓ |
| Selank | 10mg | $40.99 | $4.10 | ✓ |
| Selank | 20mg | $81.99 | $4.10 | ✓ |
| Semaglutide (listed as GLA-1 SM) | 15mg | $71.99 | $4.80 | ✓ |
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
| Tirzepatide (listed as GLA-2 TRZ) | 10mg | $62.99 | $6.30 | ✓ |
| Tirzepatide (listed as GLA-2 TRZ) | 20mg | $77.99 | $3.90 | ✓ |
| Tirzepatide (listed as GLA-2 TRZ) | 30mg | $97.99 | $3.27 | ✓ |
| Tirzepatide (listed as GLA-2 TRZ) | 45mg | $131.99 | $2.93 | ✓ |
| Tirzepatide (listed as GLA-2 TRZ) | 60mg | $164.99 | $2.75 | ✓ |
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

## VENDOR: [next vendor — append here in same format]
