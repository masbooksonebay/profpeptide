# PP X Posts — v26

**Status:** ACTIVE REFERENCE — vendor-day cycle log + rotation advance
**Version:** v26 (June 2, 2026) — logs the **PureRawz** vendor day (standard-4, fired) and advances the rotation table.
**Supersedes:** nothing in the v24 spec. **All v24 sections — the 4-canonical-post anatomy, category line, standard post types + anchors, category substitution, content rules, pre-flight check, errors-to-never-repeat — carry forward UNCHANGED.** The v25 Peptide Partners vendor day also carries forward. This doc only adds the new vendor day + rotation row. (Compaction guard still applies: re-read the v24 format spec before drafting any post; pull live `vendors.ts` + the vendor's live catalog every time — the summary garbles the format and the rotation.)

---

## 🔁 Account rotation (updated)

Accounts: **PP** = @peptide_pros · **PREM** = @premierpeptides · **PEAK** = @peakpeptides · **CORE** = @corepeptides.

| Vendor-day position | PP | PREM | CORE | PEAK |
|---|---|---|---|---|
| Ascension (May 30) | Retatrutide | All-3 GLPs | GH | Recovery |
| Ignite (May 31) | GLP pair | — | Recovery | GH |
| Limitless (May 31) | Skin/Anti-aging | GH | Recovery | Metabolic |
| Peptide Partners (June 1) | GH | Retatrutide | All-3 GLPs | Recovery |
| **PureRawz (June 2)** | **Recovery** | **All-3 GLPs** | **GH** | **Retatrutide** |

Rotation check (no account repeats its prior group): PP was GH → now Recovery ✓ · PREM was Retatrutide → now All-3 ✓ · CORE was All-3 → now GH ✓ · PEAK was Recovery → now Retatrutide ✓.

---

## ✅ PureRawz — Cycle 4 vendor day (FIRED June 2)

- **Slug/link:** `/coupons/purerawz`. **Code: `PROF10` · 10% off** — PureRawz exception code (confirmed from `vendors.ts` via the June-2 18-page coupon gap read).
- **Vendor site:** **purerawz.co** (genuine shop — note the lookalike swarm; a `purerawz.net` info/SEO mirror exists. Confirm `vendors.ts` `url` points to purerawz.co).
- **Named third-party lab:** **MZ Biolabs** — HPLC + Mass Spec, ≥99% purity, public per-lot COAs (searchable by lot). US-based, same-day shipping before 2PM EST.
- **Catalog confirmed June 2** (purerawz.co live product/category pages + recent review): GLP — Semaglutide, Tirzepatide, Retatrutide (all 3, plus liraglutide). GH — CJC-1295, Ipamorelin, Sermorelin, Tesamorelin, MK-677. Recovery — BPC-157, TB-500, GHK-Cu, KPV, Epitalon. (Deep catalog, 150+ compounds.)
- **Pre-post flags carried at delivery:** (1) live in-stock glance per product page before firing (catalog presence ≠ in-stock — purerawz.co may rate-limit automated fetches, so CINC/browser is the reliable check); (2) confirm the `/coupons/purerawz` per-vendor OG card renders (not the generic fallback) via the card route `?v=N` or opengraph.xyz. Append `?x=N` per post to force a fresh card scrape.

**The 4 posts as fired:**

PP — Recovery (BPC-157 + TB-500):
```
PureRawz has BPC-157 and TB-500 in stock!

Use code PROF10 for 10% off. 🔥

PureRawz has other popular recovery peptides, including GHK-Cu, KPV, and Epitalon.

Third-party tested by MZ Biolabs, 99%+ purity, public COAs. US-based.

https://profpeptide.com/coupons/purerawz
```

PREM — All 3 GLPs:
```
PureRawz has all 3 GLPs — Semaglutide, Tirzepatide, and Retatrutide — in stock!

Use code PROF10 for 10% off. 🔥

HPLC + mass spec verified by MZ Biolabs, 99%+ purity, public batch COAs. US-based.

https://profpeptide.com/coupons/purerawz
```

CORE — GH (CJC-1295 + Ipamorelin):
```
PureRawz has CJC-1295 and Ipamorelin in stock!

Use code PROF10 for 10% off. 🔥

PureRawz has other popular growth hormone peptides, including Sermorelin, Tesamorelin, and MK-677.

HPLC-tested to 99%+ purity, public COAs by lot. US-based.

https://profpeptide.com/coupons/purerawz
```

PEAK — Retatrutide:
```
PureRawz has Retatrutide in stock!

Use code PROF10 for 10% off. 🔥

PureRawz has other popular GLP peptides, including Semaglutide and Tirzepatide.

Independently lab-tested by MZ Biolabs, 99%+ purity, public COAs. US-based.

https://profpeptide.com/coupons/purerawz
```

---

## 🔗 Cross-references
- **PP_X_POSTS v24** — the locked v3.3 format spec (anatomy, category line, substitution, content rules, pre-flight, errors). Re-read before drafting.
- **PP_X_POSTS v25** — Peptide Partners vendor day (prior rotation row).
- **PP_MASTER v13** · **PP_SEO v2** (vendor demand / coupon-page SEO) · **SCS_MP v6.9**

---

## 📅 Changelog
**v26 (June 2, 2026):** Logged the PureRawz vendor day (standard-4, fired) — code PROF10 / 10% (exception), catalog verified at purerawz.co, named lab MZ Biolabs, all 4 under 275. Advanced the rotation table (PP=Recovery / PREM=All-3 / CORE=GH / PEAK=Retatrutide). All v24 spec sections + the v25 Peptide Partners row unchanged.

---

*v26 adds one vendor day + the rotation advance. The v24 format spec remains the source of truth for HOW to draft.*
