# PP SEO LEDGER — operational GSC tracker

**Status:** ACTIVE. **Supersedes v3 (June 28, 2026).**
**Version:** v4 (July 29, 2026)
**Pairs with:** **PP_SEO v22** (strategy — read alongside, not instead of)

> 🔴 **v3's hard rules were right and were ignored on July 28.** v3 already stated that GSC bucket reports lag and that flagged action items must be live-verified before acting — and recorded that on 6/28 all three flagged items turned out already-resolved. On July 28 four more investigations were opened and **all four were already fixed in deployed code**, two of them for months. **The rules below are not new. They are the ones that were not followed.**

---

## 🔒 HARD RULES

1. **GSC reports the past, not the present.** Bucket reports lag days; crawl records lag **months**. Never treat a GSC row as current state.
2. **Check the last-crawl date before opening any investigation.** It is visible on every URL Inspection and in every drill-down list. It would have closed all four July 28 investigations in seconds.
3. **Verify against the artifact before acting on a flagged item.** The repo and the live HTML are truth; GSC is a lagging observation of them.
4. **Use a control page.** A known-good URL inspected alongside a suspect one separates a real defect from a reporting artefact.
5. **Population before sample.** Read Indexing → Pages in full before hand-sampling URLs.
6. **Classify before counting.** Intentional redirects, deliberate noindex, and machine routes are not defects.
7. **Never re-run validation on a deliberate exclusion.** It cannot pass, and it generates "Some fixes failed" messages that look like defects.
8. **This is a DOMAIN property** (`sc-domain:profpeptide.com`). It reports every host and protocol variant. Working `www`→apex and `http`→`https` redirects appear as "not indexed" — that is success.

---

## ⚠️ DATA CURRENCY — READ FIRST

| Source | Covers | Status |
|---|---|---|
| **Queries / Pages / Countries CSV exports in project knowledge** | **June 10 – July 7, 2026** (28 days) | 🔴 **STALE.** Predates the price section (Jul 25), the four new vendors, and everything shipped Jul 28–29 |
| **Indexing → Pages report** | Last update **July 23, 2026** | Predates the canonical fix and both SERP passes |
| **Breadcrumbs report** | Last update July 26, 2026 | Current-ish |
| **HTTPS report** | Last update July 27, 2026 | Current |

**Pull a fresh 28-day export before acting on any number.** The stale export is directionally sound (Amino Club dominates, question-queries are small) but numerically wrong for anything after July 7.

---

## 📊 PROPERTY BASELINE (Pages report, last update Jul 23, 2026)

**152 indexed · 100 not indexed.**

| Reason | Pages | Classification |
|---|---|---|
| Crawled — currently not indexed | 51 → **32 real** | 🔴 **The only genuine problem** |
| Page with redirect | 18 | ✅ Intentional — host variants + `/research/*` legacy |
| Redirect error | 12 | ✅ **Closed** — fixed pre-May, stale crawl |
| Duplicate without user-selected canonical | 8 | 🟡 Pre-fix snapshot. **Re-check ~Aug 5** |
| Discovered — currently not indexed | 4 | 🟡 In sitemap, simply uncrawled |
| Excluded by 'noindex' | 3 | ✅ Intentional (`/vendors`, `/contact` ×2) |
| Not found (404) | 3 | ✅ **Closed** — removed May/June, stale crawl |
| Duplicate, Google chose different canonical | 1 | ✅ **Closed** — deleted + 301'd May 11 |
| Alternate page with proper canonical | 0 | — |

---

## 🔴 OPEN — the only real item

### Crawled and declined: 32 content pages

Raw 51 minus 14 machine routes (11 OG/Twitter image routes, `site.webmanifest`, `apple-icon`, `favicon.ico`) and 5 www host variants.

| Group | Count | Note |
|---|---|---|
| `/supplements/*` | **19** | **36% of a 53-page library.** Crawled Jul 22–25 — recent, so staleness does not apply |
| `/peptides/*` | 10 | Almost all blends/combos — see below |
| `/compare/*` | 2 | |
| `/guides/*` | 1 | `guides/peptide-research-basics` |

**Declined supplements:** probiotics, melatonin, magnesium, vitamin-d3, collagen-peptides, collagen-peptides-skin, glycine, coq10, prebiotics, chromium, vitamin-c, glutamine, hyaluronic-acid, green-tea-extract, apigenin, tart-cherry, curcumin, gaba, l-theanine.

**Declined peptides:** mots-c, ss-31, **cjc-1295-dac-ipamorelin**, **kpv-bpc-157**, **cagrisema**, **gh-stack**, **tesamorelin-ipamorelin**, ipamorelin, cjc-1295, melanotan-ii.

> ⚠️ **The blend signal.** Seven of ten are blends, combos, or components of them. The roadmap plans 15–25 new blend/stack profiles. **Google is already declining the blend pages that exist.** Diagnose before building more.

**Next step, not yet done:** compare 3–4 declined pages against 3–4 indexed ones and isolate what differs.

---

## ✅ CLOSED THIS CYCLE — all were stale crawl, zero code changes

| Item | Actually fixed | GSC crawl | Gap |
|---|---|---|---|
| Canonical / 747live.bet | ~Jul 26 (served) | Jul 23 report | days |
| Redirect error (12) — 11 trailing-slash `/supplements/[name]/` + `/research` | before May | May 4 / May 9 | ~3 months |
| `/coupons/nordic-peptides` 404 | May 13 (`a126305`) | Jul 12 | 2 months |
| `/coupons/apollo-peptide-sciences` 404 | Jun 9 (`ec23364`) | Jul 14 | 5 weeks |
| `/news/rfk-peptide-ban-2026-v2` duplicate | May 11 (`3d2ccbb`) | May 8 | 2.5 months |
| `/prices/glow` + `/prices/klow` | By design — zero dataset rows → `notFound()` | — | Not a defect |
| `/methodology` HTTPS anomaly | Did not reproduce | — | 53 HTTPS, 0 non-HTTPS |

**Also confirmed stale: GSC's *referring page* field.** It named `/research/cagrilintide` as linking to Apollo; that path redirects to a page whose only coupon link is the hub.

**`/coupons/amino-x` — indexed.** Requested 6/28, appears in no not-indexed bucket as of Jul 23. Dropped from the watch list.

---

## ⛔ VALIDATION STATE — three must never be re-run

| Issue | State | Re-run? |
|---|---|---|
| Page with redirect (18) | Failed | ❌ **Never** — the redirects are intentional |
| Excluded by 'noindex' (3) | Failed | ❌ **Never** — deliberate |
| Not found (404) (3) | Failed | ❌ **Never** — the pages are supposed to 404 |
| Duplicate without user-selected canonical (8) | Failed | 🟡 **Only permitted retry** — after ~Aug 5 |
| Duplicate, Google chose different canonical (1) | Started | 🟡 Leave alone |

> July 3 produced **three separate** "Some fixes failed" messages, not one. All three were run against deliberate exclusions and were structurally impossible to pass.

---

## 📈 QUERY DEMAND (June 10 – July 7 — stale, directional only)

**Total: 9,372 impressions, 57 clicks, 0.6% CTR.**

| Vendor | Impressions | Clicks | Queries |
|---|---|---|---|
| **Amino Club** | **3,668** | 29 | 28 |
| **Glacier Aminos** | **988** | 6 | 21 |
| Royal | 110 | 0 | 8 |
| Oasis | 94 | 0 | 7 |
| Midwest | 51 | 4 | 5 |
| Ignite | 20 | 0 | 4 |
| Peptide Partners | 14 | 0 | 8 |
| Peptidology | 11 | 0 | 7 |
| Ascension | 8 | 0 | 4 |
| *remainder* | ≤4 each | | |

**Amino Club + Glacier ≈ 95% of vendor-query demand.** Spend indexing quota and effort accordingly.

**NextGen: zero rows** — onboarded ~Jul 26, after the export window. **Commissions are already arriving with no search data at all**, which is the code-channel thesis in its purest form.

**Phrase demand:** promo code 1,987 · discount code 1,563 · coupon code 832. **Terminology does not drive impressions** — PP ranks for the promo query with a "Discount Code" title, and ranks *best* on the coupon query.

**Question-shaped:** 87 queries, 261 impressions, **0 clicks** (2.8% of impressions). Needle/syringe cluster: 85 queries, 187 impressions, 20 already page 1. ⚠️ **GSC cannot see demand PP is invisible for** — this does not refute the query-shaped-pages thesis.

---

## 🗓️ SCHEDULED CHECKS

| When | What |
|---|---|
| **~Aug 1** | Re-inspect `/coupons/amino-club` — did the snippet and title return after the 20% fix? *(Indexing requested Jul 28.)* **Do not re-request; it was byte-identical through the title pass.** |
| **~Aug 5** | Re-check "Duplicate without user-selected canonical" — expect it to fall from 8 unaided. Only then consider the one permitted validation retry |
| **~Aug 22** | `/prices` impressions at 4 weeks (section live Jul 25) |
| **~Sep 19** | `/prices` impressions at 8 weeks |
| **Anytime** | Pull a fresh 28-day export — the one in project knowledge ends July 7 |

**Worth a request if quota allows:** Royal (110 impr) and Oasis (94 impr) — both changed in the title/description passes and both have enough demand to matter. Skip the other 28.

---

## 🔎 STRUCTURAL GAPS MEASURED THIS CYCLE

**Breadcrumbs — 19 valid items, 0 errors, against 152 indexed pages.**
Recognised on: 14 `/peptides/*` (of 62 profiles) — ll-37, bpc-157, epitalon, mk-677-ipamorelin, pt-141, semax-selank, mgf, igf-1-des, cibinetide, ghrp-2, ghrp-6, hexarelin, adipotide — plus `/best-peptide-vendors`, `/bioregulators`, `/compare`, `/news`, `/news/endo-2026-glp1-recap-june-2026`, `/about`.
**Zero on `/coupons/*`, `/prices/*`, `/supplements/*`, `/guides/*`.** Breadcrumbs are effectively absent sitewide.

**HTTPS — clean.** 53 HTTPS URLs, 0 non-HTTPS, no issues.

**Two App Store support pages never crawled** — `/hybrid-rockstar/support` and `/strength-cycle/support`. Both in the sitemap, discovered via `sitemap-0.xml`; the SC one also has an Apple App Store referrer. Nothing broken.

**Externally-discovered non-existent URLs** — `/prices/glow`, `/prices/klow`. Not linked internally, not in the sitemap, so something outside the site is generating PP URLs.

---

## 📅 Changelog

**v4 (July 29, 2026):** Hard rules restated with the finding that **all four July 28 investigations were already fixed in deployed code** — v3's rules had already warned about this. Added the **data-currency table** (the CSV exports end July 7 and predate the price section and four vendors). Full property baseline from the Jul 23 Pages report. Crawled-and-declined narrowed to **32 real pages, 19 supplements (36%)**, with the blend signal flagged against the roadmap. Redirect error, both 404s, and the `-v2` duplicate closed as stale crawl. `amino-x` confirmed indexed and dropped. Validation-state table with the three that must never be re-run. Vendor demand ranked — **Amino Club + Glacier ≈ 95%**. Breadcrumb coverage measured at 19 URLs. Scheduled checks table.

**v3 (June 28, 2026):** Hard rules established. Three flagged action items all found already-resolved.

---

*GSC reports the past. Check the crawl date first. The only real item is the 32 declined pages.*
