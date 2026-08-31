# PP X Posts — v25

**Status:** ACTIVE REFERENCE — vendor-day cycle log + rotation advance
**Version:** v25 (June 1, 2026) — logs the **Peptide Partners** vendor day (full standard-4, fired) and advances the rotation table.
**Supersedes:** nothing in the v24 spec. **All v24 sections — the 4-canonical-post anatomy, category line, standard post types + anchors, category substitution, content rules, pre-flight check, errors-to-never-repeat — carry forward UNCHANGED.** This doc only adds the new vendor day + rotation row. (Compaction guard still applies: re-read the v24 format spec before drafting any post; pull live `vendors.ts` + the vendor's live catalog every time.)

---

## 🔁 Account rotation (updated)

Accounts: **PP** = @peptide_pros · **PREM** = @premierpeptides · **PEAK** = @peakpeptides · **CORE** = @corepeptides.

| Vendor-day position | PP | PREM | CORE | PEAK |
|---|---|---|---|---|
| Ascension (May 30) | Retatrutide | All-3 GLPs | GH | Recovery |
| Ignite (May 31) | GLP pair | — | Recovery | GH |
| Limitless (May 31) | Skin/Anti-aging | GH | Recovery | Metabolic |
| **Peptide Partners (June 1)** | **GH** | **Retatrutide** | **All-3 GLPs** | **Recovery** |

Rotation check (no account repeats its prior group): PREM was GH → now Retatrutide ✓ · CORE was Recovery → now All-3 ✓ · PP was Skin → now GH ✓ · PEAK was Metabolic → now Recovery ✓.

---

## ✅ Peptide Partners — Cycle 4 vendor day (FIRED June 1)

- **Slug/link:** `/coupons/peptide-partners` (editor's pick; dedicated page ranks ~pos 1.8). **Code: `PROFPEPTIDE` · 10% off** — confirmed from `vendors.ts` (gap-check read) AND the v19 exception map. **NOTE: 10% is the Peptide Partners exception, NOT the 15% default.**
- **Vendor site:** **peptide.partners** (genuine vendor — @PeptidePartners, Sarasota FL, 99%+ purity, independent-certifications page, free shipping >$400). Lookalikes to avoid: peptidepartners.store, peptides-partners.com.
- **Stock verified June 1** (all "Select options"/purchasable on peptide.partners/shop): GLP — Semaglutide, Tirzepatide, Retatrutide (all 3). GH — CJC-1295 no DAC, Ipamorelin, Sermorelin, Tesamorelin. Recovery — BPC-157, TB-500, GHK-Cu, KPV.
- **Non-carried defaults swapped out:** MK-677 (not stocked → dropped from GH line), Epitalon (not stocked → dropped from Recovery line). Replaced with in-stock same-group peptides.
- **Char counts (X-weighted):** 266 / 239 / 270 / 263 — all under 275.
- **Pre-post flags carried at delivery:** (1) confirm the per-vendor OG card renders (code already confirmed via vendors.ts); (2) confirm peptide.partners matches the `vendors.ts` `url` field. Append `?x=N` per post to force a fresh card scrape.

**The 4 posts as fired:**

PREM — Retatrutide (GLP):
```
Peptide Partners has Retatrutide in stock!

Use code PROFPEPTIDE for 10% off. 🔥

Peptide Partners has other popular GLP peptides, including Semaglutide and Tirzepatide.

99%+ purity, independent lab testing, public COAs. US-based (Florida).

https://profpeptide.com/coupons/peptide-partners
```

CORE — All 3 GLPs:
```
Peptide Partners has all 3 GLPs — Semaglutide, Tirzepatide, and Retatrutide — in stock!

Use code PROFPEPTIDE for 10% off. 🔥

Independent third-party lab testing, 99%+ purity, public COAs. US-based out of Florida.

https://profpeptide.com/coupons/peptide-partners
```

PP — GH (CJC-1295 + Ipamorelin):
```
Peptide Partners has CJC-1295 and Ipamorelin in stock!

Use code PROFPEPTIDE for 10% off. 🔥

Peptide Partners has other popular growth hormone peptides, including Sermorelin and Tesamorelin.

Independent lab testing, public COAs. US-based (FL).

https://profpeptide.com/coupons/peptide-partners
```

PEAK — Recovery (BPC-157 + TB-500):
```
Peptide Partners has BPC-157 and TB-500 in stock!

Use code PROFPEPTIDE for 10% off. 🔥

Peptide Partners has other popular recovery peptides, including GHK-Cu and KPV.

99%+ purity, independently lab-verified, public COAs. US-based (FL).

https://profpeptide.com/coupons/peptide-partners
```

---

## 🔗 Cross-references
- **PP_X_POSTS v24** — the locked v3.3 format spec (anatomy, category line, substitution, content rules, pre-flight, errors). Re-read before drafting.
- **PP_MASTER v13** · **PP_SEO v1** (vendor demand / acquisition signals from GSC) · **SCS_MP v6.9**

---

## 📅 Changelog
**v25 (June 1, 2026):** Logged the Peptide Partners vendor day (standard-4, fired) — code PROFPEPTIDE / 10% (exception), stock verified at peptide.partners, MK-677 + Epitalon swapped out as non-carried, all 4 under 275. Advanced the rotation table (PP=GH / PREM=Retatrutide / CORE=All-3 / PEAK=Recovery). All v24 spec sections unchanged.

---

*v25 adds one vendor day + the rotation advance. The v24 format spec remains the source of truth for HOW to draft.*
