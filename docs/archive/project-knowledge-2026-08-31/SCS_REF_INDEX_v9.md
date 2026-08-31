# SCS REF INDEX — v9

**Date:** August 2, 2026
**Status:** ACTIVE. Supersedes v8. Start here for any workstream load.

---

## 📚 CURRENT GOVERNING VERSIONS

| Doc | Version | Covers |
|---|---|---|
| **SCS_MP** | **v6.21** ⬅️ new | Studio rules · deploy discipline · terminal exceptions · automation |
| **PP_MASTER** | **v16** ⬅️ new | PP state · coupon layout · facts model · freshness · evidence honesty |
| **PP_PRICES** | **v3** ⬅️ new | Price pull · adapters · deep links · guards · scope |
| **PP_VENDOR_PROSPECTING** | **v22** ⬅️ new | Applications · vetting standard · build queue |
| **PP_X_POSTS** | v48 ADDENDUM | Post anatomy · OG card fallback · `?v=` mechanics |
| **PP_SEO** | v22 | Search workstream · the 29-item plan |
| **PP_SEO_LEDGER** | v4 | GSC tracker |
| **PP_BIOREGULATORS** | v1 ⚠️ *needs v2* | Hub-and-spoke · no-fabrication rule |
| **PP_SITE_DESIGN** | v3 ADDENDUM ⚠️ *stale* | Predates the card-top restructure |
| **HR_MASTER** | v14 | App state · monetization |
| **HR_SOCIAL** | v15 ADDENDUM ⚠️ *needs v16* | Distribution map · 7 surfaces |
| **HR_YOUTUBE_TITLES_DESCRIPTIONS** | v4 | 64 titles + descriptions |
| **HR_TIKTOK_CAPTIONS_W1** | v1 | Week 1 captions + overlays |
| **SC_MASTER_ACTIVE** | v5.14 | — |
| **WN_MASTER_ACTIVE** | v1.2 | Pre-build, methodology spec |
| **WL_MASTER_ACTIVE** | v2.4 | Capstone operational tracker |

---

## 🗺️ TASK → DOCS

| Working on | Read |
|---|---|
| A new vendor page | PP_VENDOR_PROSPECTING v22 → PP_MASTER v16 → PP_PRICES v3 |
| Price pull / adapters | PP_PRICES v3 |
| X posts | PP_X_POSTS v48 → PP_MASTER v16 (OG cards) |
| Anything deploying | **SCS_MP v6.21 first** — push-then-verify |
| Search / rankings | PP_SEO v22 + PP_SEO_LEDGER v4 |
| HR social | HR_SOCIAL v15 → the platform-specific doc |
| Coupon page layout | PP_MASTER v16 (PP_SITE_DESIGN is stale) |

> ⚠️ **One doc is never the whole picture.** The vendor workstream spans PROSPECTING, MASTER, PRICES, and X_POSTS.

---

## 🔴 RULES THAT CHANGED THIS SESSION

1. **"Push is the deploy" is rescinded.** Four webhook failures in three days. Push, then verify live; CLI-deploy if nothing fires in ~3 min. *(SCS_MP v6.21)*
2. **Terminal exception extended** to interactive OAuth scope grants. *(SCS_MP v6.21)*
3. **BLOCKED entries must be verified against the data, not the page.** Two vendors were wrongly blocked for weeks. *(PP_PRICES v3)*
4. **Description budget is computed against "September"**, the longest month name. *(PP_MASTER v16)*
5. **Guard severity:** output-correctness bugs fail; staleness and coverage warn. *(PP_PRICES v3)*
6. **Codes are case-insensitive at checkout; PP renders uppercase.** Settled — stop checking per vendor. *(PP_VENDOR_PROSPECTING v22)*

---

## 📅 RECURRING OBLIGATIONS

| When | What |
|---|---|
| **1st of month** | `check:vendors` — **now automated** via GitHub Actions. Watch for a failure notification. |
| **Weekends** | GSC query-mining export → bucket A/B/C *(PP_SEO)* |
| **After any push** | Verify the deploy fired. Not optional. |
| **Adding a vendor** | Run `check:vendors` so the verified pill renders |

---

## 🎯 OPEN — priority order

### The ranking levers (untouched)
1. **The 32 declined pages** — the only thing Google has actively rejected; gates blend/stack expansion
2. **Backlinks** — never measured; the direct lever on crawl frequency
3. **Core Web Vitals** — never measured; PureRawz ~2,731 DOM nodes

### Build queue
4. **Nura Peptide** — ready; ⚠️ test whether their 20% signup offer stacks with `PROFPEPTIDE15`
5. **99 Purity Peptides** — publish **10%** (dashboard says 15%; understating is deliberate)
6. **BioPure Peptides** — approved but **held**: 5% code, and their own site offers 10% to any signup. Ask for a better rate or skip.

### Known gaps
7. **~200 hardcoded profile vendor-card entries** across ~40 pages — largest remaining instance of the hardcoded pattern
8. **17 vendors "Pending"** in the testing index — needs a research pass
9. **`ez-peptides` X card** renders text-only; post the hub until resolved
10. **`purity_api` and `cinc` adapters** emit no slug — homepage-only links for those two vendors

### Vendor pipeline
11. **GLP1 Research Lab** — 30%, best rate on the list, PP's top-converting category
12. 3 outstanding codes: Certified-Pep, Modern Research, Lumera Labs — **dormancy rule applies** (2 follow-ups, 30 days)
13. **PureRx Q1 unanswered** — is commission earned when a customer uses PureRx's own public code?

### HR
14. **Reel duration** now content-aware (W6D3+); ~30 reels through W5 stay at 20.2s
15. **Reels are silent** — add trending audio at upload on TikTok
16. **YouTube views declining** 96 → 45 → 34 → 5; TikTok returned 73 in minutes on identical content

---

## 📌 THE RECURRING FAILURE MODE

**Hardcoded values in individual pages.** Six instances in three days — stale months, expired dates, an exposed affiliate cookie window, a pill wired to nothing, purity claims two vendors don't make, and a "every vendor" table missing 17 of 37.

**Remedy, proven four times:** structured data + central composition + a build guard.

> If a fact appears on more than one page, or could change without anyone editing that page, it belongs in data.

---

## 📅 Changelog

**v9 (August 2, 2026):** SCS_MP → v6.21, PP_MASTER → v16, PP_PRICES → v3, PP_VENDOR_PROSPECTING → v22. Six changed rules listed. Board reorganised to lead with the untouched ranking levers. PP_SITE_DESIGN and PP_BIOREGULATORS flagged stale; HR_SOCIAL v16 flagged needed.

---

*Start here. One doc is never the whole picture.*
