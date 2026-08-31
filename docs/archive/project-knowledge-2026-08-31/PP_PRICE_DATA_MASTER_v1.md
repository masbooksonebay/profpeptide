# PP Price-Comparison — MASTER PRICE DATA (all vendors, one doc)

**Status:** ACTIVE data source for the price-comparison page. ONE doc for ALL vendors (don't split per-vendor).
**Version:** v1
**PRICES_UPDATED:** July 2026
**How to use:** Each vendor = one section below. New vendor pulls APPEND a new section in the same format. CC reads this to populate src/data/prices.ts. Base prices pulled by CINC (read-only from vendor sites); with-code = base × (1 − discount) from vendors.ts; per-mg computed.

---

## 📋 DATA RULES (apply to every vendor)
1. **Single compounds:** per-mg is honest → base $/mg = basePrice / sizeMg.
2. **Blends (GLOW/KLOW/Wolverine/CJC-Ipa):** ⚠️ pending CINC standardization check — IF ratios are standard across vendors, compare blend-to-blend by total mg (+ show ratio e.g. "70mg = 50/10/10"); if ratios vary, separate. Show the ratio for transparency regardless.
3. **Sprays:** separate format sub-category (different SKU) — don't merge with vials.
4. **Bac water / supplies:** excluded from compound comparison (no per-mg).
5. **With-code price:** base × (1 − vendorDiscount). Pull discount from vendors.ts, don't hardcode.
6. **Stock:** note in-stock ✓ / OOS ✗ per size.
7. **Only pull compounds PP has (or will have) profiles for** where possible → ecosystem linking.

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

## VENDOR: [next vendor — append here in same format]

