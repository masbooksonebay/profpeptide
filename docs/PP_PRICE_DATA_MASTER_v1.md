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

## VENDOR: [next vendor — append here in same format]
