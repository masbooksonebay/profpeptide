# SCS Ref Doc Index — v8

**Date:** July 29, 2026 (morning batch)
**Status:** ACTIVE — the map of every reference doc, **PP-first**. **Supersedes v7.**
**v8 changes:** PP_SEO **v22** replaces v21 (§P0 deleted — wrong premise) · PP_SEO_LEDGER **v4** · SCS_MP **v6.20 ADDENDUM** · **the SERP conversion model recorded** (impression = conversion on coupon queries) · titles + descriptions shipped sitewide · `check:links` now gates the build · **GSC exports in project knowledge end July 7 and are stale** · parked stack cleared to zero.

---

## 1) 🔴 READ-FIRST AT SESSION START

| Order | Doc |
|---|---|
| 1 | **SCS_MP v6.16 + v6.20 ADDENDUM** — RULE #0, execution model, prompt discipline, deploy + CINC rules |
| 2 | **This index** |
| 3 | The master doc for the workstream in play (§2) |

**RULE #0 governs all: verify before asserting.** *A doc records what was believed at a moment, and belief moves faster than versioning.* **Verify current state against the artifact.**

**Standing execution facts:**
- A **restarted CC session resumes its prior task from git state** — the first message must redirect it explicitly.
- **Commit date ≠ deploy date.** CC parks until approved; authored-in-May can mean deployed-in-July. The artifact wins.
- **GSC reports the past.** Bucket reports lag days, crawl records lag months. **Check the last-crawl date before investigating anything.**
- **This is a DOMAIN property** — every host and protocol variant is reported. Working redirects appear as "not indexed."
- **CINC prompts must never carry their own authorization.** The grant comes from Mark, in his own words. Check whether CC can do it from the CLI first.
- **Ref-doc updates are batched** at points Mark calls, not produced continuously.

---

## 2) 🧪 PROF. PEPTIDE

### 2a) Strategy and content

| Doc | Current | Covers |
|---|---|---|
| **PP_MASTER** | **v15 + ADDENDUM v4** ⚠️ *six weeks stale — says 48 peptide profiles; site renders 62* | Portfolio state, site structure, editorial rules |
| **PP_SEO** | **v22** 🆕 | ⭐ **§0 the conversion model** · §1 Phase 0 closed (v21's premise was wrong) · §2 crawl frequency as the constraint · §3 the Glacier template · §4 the 32 declined pages · §5 query data + staleness caveat · §7 sequence · §8 schema decisions · §9 method rules · §10 do-not-do |
| **PP_SEO_LEDGER** | **v4** 🆕 | Operational GSC tracker · hard rules · data-currency table · property baseline · validation state · vendor demand ranking · scheduled checks |
| **PP_VENDOR_PAGES** | **v4** | Coupon-page structure · product-grid spec · Amino Club pilot (**approved**) · build sequence · density ceiling · internal first-mention linking |
| **PP_SITE_DESIGN** | **v3 ADDENDUM** | Palette, templates, rich-template rollout |
| **PP_X_POSTS** | **v45/46 + v47 ADDENDUM** | 4-post anatomy · stored vendor profiles · sale-post pattern · **hub link is `?v=N`, never bare `/coupons`** · X card mechanics |

### 2b) Prices and data
**PP_PRICES v2** · **PP_PRICE_DATA_MASTER v1** · ~~PP_PRICE_COMPARISON_PLAN v5~~ (historical)

### 2c) Vendors and revenue
**PP_VENDOR_PROSPECTING v19** — **LIVE ROSTER §1, check before suggesting any vendor** · **PP_COMMISSIONS v4** — the code-is-the-asset thesis

### 2d) App and specialist
**PP_APP_REDESIGN v3** · **PP_APP_THEME_SPEC v1** · **PP_BIOREGULATORS v1**

### ❌ Retired
**PP_INDEXING** (v18–v23) → renamed **PP_SEO**. **PP_SEO v21 and earlier** — v21's §P0 described a defect that did not exist; its section numbers do not map to v22.

### 📌 PP task → doc

| Task | Read |
|---|---|
| **Any coupon-page decision** | **PP_SEO v22 §0** — the conversion model. Impressions and snippet content are the KPIs; CTR is not |
| Indexing / canonicals / GSC | **PP_SEO_LEDGER v4** + PP_SEO v22 §1–2 |
| Title or description format | **PP_SEO v22 §3** — the Glacier template, composed centrally |
| SEO strategy / sequence | **PP_SEO v22 §7** |
| Vendor coupon pages | **PP_VENDOR_PAGES v4** |
| `/prices` or the price pull | **PP_PRICES v2** |
| Vendor applications | **PP_VENDOR_PROSPECTING v19 §1** |
| X posts | **PP_X_POSTS v45/46 + v47 ADDENDUM** |
| Any CC / CINC / CD prompt | **SCS_MP v6.20** |

---

## 3) PP IMPLEMENTATION TRACKER

### 📦 PARKED — **zero.** Everything shipped and deployed.

Still unreferenced: `lockup-parked` branch · `/public/logo-mark.png` (header glasses mark) · untracked `public/_preview/`.

### ✅ SHIPPED JULY 28–29

| Item | Result |
|---|---|
| Amino Club 20% consistency | Live. Indexing requested Jul 28 |
| All 33 descriptions | Style A, code at char 9, ≤155, composed centrally |
| All 33 titles | Code-visible, ≤60, composed centrally. **amino-club + glacier byte-identical** |
| Month derivation | `CODES_VERIFIED_DATE` → every title and description. Zero hardcoded years |
| `priceValidUntil` | Was **21 expired**, not 4. Now derived, +1 year |
| `dateModified` | Added, derived |
| `check:vendors` | 28/30 reachable, 0 dead, 2 Cloudflare-blocked (both alive in browser) |
| `check:links` | 3,510 links / 6 families. 1 dead found and fixed. **Now gates `npm run build`** |
| Amino Club product grid | Built, reviewed, **approved**, live |
| `/privacy` | 2025 → April 3, 2026 |
| Phase 0 | Closed — zero code changes required |
| HR site | git↔production divergence closed; CTA unified; templates GitHub-direct |

### 🔴 OPEN — by priority

| # | Item | Status |
|---|---|---|
| **1** | **`sameAs` + `@id` publisher link on Organization schema.** Three social URLs already in the footer. The lever on the entity problem and on crawl authority. **Prompt written, not sent** | ⬜ **NEXT** |
| **2** | **The 32 declined pages** — 19 supplements (36% of the library), 10 peptides mostly blends. Compare declined vs indexed and isolate the difference. **Blocks the 15–25 blend/stack profile expansion** | ⬜ **THE WORK** |
| **3** | **Backlink baseline** — half of SEO never examined. 30 affiliate vendors, costs an email. Lever on crawl frequency | ⬜ |
| **4** | **Vendor product-grid rollout** — recon first: row counts per vendor, `vendorSlug` coverage, which affiliate URLs auto-apply the code. **Prompt drafted** | ⬜ |
| **5** | **Favicon audit** — the SERP shows the old coupon-tag icon, not the glasses. `/icon.png` was created Jul 28 for the Organization logo and may now be what Google serves. **Prompt drafted, read-only** | ⬜ |
| **6** | **Fresh GSC export** — the one in project knowledge ends **July 7**, predating the price section and four vendors | ⬜ |
| **7** | **BreadcrumbList** — recognised on **19 URLs total**, zero on coupons/prices/supplements/guides. Absent sitewide | ⬜ |
| **8** | **Search index rebuild** — 27 of 62 peptides, zero price pages | ⬜ |
| **9** | **Editorial byline + `author` schema + `/methodology` substance** | ⬜ |
| **10** | **Hardcoded coupon codes** — 27 pages + the `/best-peptide-vendors` Featured contradiction (Oasis on `/coupons`, Peptides.gg on Featured) | ⬜ |
| **11** | **GitHub Action** for `check:vendors` — script is manual until it exists | ⬜ |
| **12** | **Core Web Vitals** — never measured | ⬜ |
| 13 | Delete dead `WhereToBuy.tsx` · `/prototype/*` canonicals · `CODES_VERIFIED_DATE` legacy-reader check | ⬜ Small |
| 14 | **`/vendor-testing-index`** — incomplete and deliberately `noindex`, but linked from the `/coupons` hub as a trust asset. **Finish it or drop the link** | ⬜ Mark's call |
| 15 | **Affiliate `rel` alignment** — coupon CTAs and `VendorHighlightBlock` lack `sponsored`; the new grid links have it. Align up, via a shared anchor component (every affiliate anchor is currently hand-written) | ⬜ |
| 16 | **Dated sale field** so promos auto-expire. Two boost events in two days each needed a manual link swap | ⬜ |
| 17 | Restart news publishing (stopped June) · per-compound further-reading only | ⬜ |
| 18 | FAQ hub (build for users — FAQPage won't render) · query-shaped commercial pages · validate volume first | ⬜ Phase 5–6 |

### 🗓️ Scheduled
**~Aug 1** re-inspect `/coupons/amino-club` (did the snippet return?) · **~Aug 5** re-check duplicate-canonical count, then the one permitted validation retry · **~Aug 22 / ~Sep 19** `/prices` impressions at 4 and 8 weeks · **~Jul 31** Amino Club 30% boost ends — **X posts saying 30% need deleting or editing**.

### 🟡 Vendor pipeline
**7 codes outstanding** — PureRx, Certified-Pep, Crush Research, Modern Research, Modern Aminos ×2, Lumera Labs. **The bottleneck.**
**PureRx split** — up to 25% divided between discount and commission, commission post-discount, excludes shipping/tax. **Four questions pending; do not commit a split until the attribution one is answered — it inverts the recommendation.**
**Apply:** LiveWell, Onyx Biolabs, GLP1 Research Lab, Licensed Peptides. **Chase:** Eternal, Wolverine (since Jul 13). **Audit:** Peptide Sciences references (closed).
**NextGen** — commissions arriving with **zero** search data. Onboarded ~Jul 26, after the export window. The code channel in its purest form.

---

## 4) 🏛️ STUDIO-LEVEL

| Doc | Current |
|---|---|
| **SCS_MP** | **v6.16 + v6.20 ADDENDUM** 🆕 — adds CLI-deploy divergence, CINC authorization, build-gate discipline, four execution corrections |
| **PROJECT_INSTRUCTIONS** | **v3** — rules only. TL;DR on long responses is line 166 |
| **SCS_REF_INDEX** | **v8** *(this doc)* |

---

## 5) OTHER PROPERTIES

| Property | Doc | Current | Notes |
|---|---|---|---|
| **HR** | HR_MASTER | **v14** | v1.0.3 through Beta App Review, TestFlight to 10 testers · freemium |
| HR | **HR_SOCIAL** | **v13** 🆕 | Four stale items fixed: carousel prompt GitHub-direct · wordmark table corrected (**reel hook is a HYBRID-only lockup**) · post state dated · comment queue item closed. **CTA unified: "The full 12-week program. Free to download."** (`22ba894`). Current position: **W5D4 shipped, W5D5 prompts drafted** |
| HR | HR_PROGRAM_EXPORT | — | ⚠️ Ad-hoc transcription, no generator, not in the repo. Verified accurate for Week 5 |
| **SC** | SC_MASTER_ACTIVE / FROZEN | v5.14 / v5.3 | Privacy-link fix committed, unpushed |
| **WN** | WN_MASTER_ACTIVE / FROZEN | v1.2 / v1.1 | |
| **Capstone** | WL_MASTER_ACTIVE / FROZEN | v2.4 / — | **"WL" = WeightLifting, NOT White Label** |

### Brand-site deploy state

| Site | Git vs production | Auto-deploy |
|---|---|---|
| profpeptide.com | ✅ In sync | ✅ Push = deploy |
| hybridrockstar.app | ✅ Closed Jul 28 | 🟡 Reconnected — **push test outstanding** |
| strengthcycle.app | ❓ **UNCHECKED** | ❌ |
| weightliftingnation.com | ❓ **UNCHECKED** | ❌ |

**Check SC and WN before connecting either.** Both used the same CLI pattern that left HR's git behind.

---

## 6) HYGIENE RULES

1. Version in the filename; current version in this index.
2. Successors declare what they supersede.
3. **Negative findings are findings.** The schema-decisions table exists because six types were assessed and five rejected.
4. Docs describing live state go stale fastest — regenerate from the artifact, date the claim.
5. Update this index whenever anything moves.
6. Frozen snapshots are deliberate archives.
7. Reissue this index in the same batch as any doc it references.
8. Section pointers die with versions.
9. **Counts in docs are claims, not facts.** "Four expired dates" survived three versions; the real number was 21.
10. **Distinguish *fixed* from *made-safe*.**
11. **A dashboard field is an observation, not a diagnosis.** Check its date; use a control.
12. **Diagnose the pipeline, not just the code.**
13. **Population before sample.**
14. **An exclusion is not automatically a defect.** Classify before counting.
15. **Check the last-crawl date before opening an investigation.**
16. **The doc holds rules; the repo holds state.** Where a doc records state, date it and cite a commit.
17. 🆕 **Data exports carry a window — record it.** The GSC CSVs in project knowledge cover June 10 – July 7 and were used all day as if current, producing figures that predate the price section and four vendors.
18. 🆕 **When a business model inverts a standard metric, write the inversion at the top of the doc.** Coupon-page CTR was read as a leak worth prioritising above everything else. It was the model working. PP_SEO v22 §0 exists so that cannot recur.

---

## 📅 Changelog

**v8 (July 29, 2026):** **PP_SEO v22** supersedes v21 — §P0 deleted, **§0 conversion model added**, Glacier template recorded as the shipped standard, crawl frequency named as the constraint. **PP_SEO_LEDGER v4** — hard rules restated after four already-fixed investigations, data-currency table, vendor demand ranked (Amino Club + Glacier ≈ 95%). **SCS_MP v6.20 ADDENDUM** — CLI-deploy divergence, CINC authorization, build-gate discipline. Titles and descriptions shipped sitewide; `check:links` gates the build; parked stack at zero. GSC exports flagged stale (end July 7). Hygiene rules 17 and 18.

**v7 (July 28):** Crawl frequency diagnosed. #36/#37/#39 closed as stale crawl. #35 narrowed to 32 pages. Hygiene 15, 16.
**v6 (July 28):** Property-wide GSC audit. Validation-state table. Hygiene 13, 14.
**v5 (July 28):** Phase 0 closed. Hygiene 11, 12.
**v4 (July 28):** Schema/freshness session. Schema-decisions table. Hygiene 9, 10.
**v3 (July 28):** PP_SEO v20 → v21; Phase 0 added. Hygiene 7, 8.
**v2 (July 27):** Implementation tracker added.
**v1 (July 27):** Created.

---

*Parked: zero. Next: `sameAs`. The work: the 32 declined pages. The constraint: crawl authority.*
