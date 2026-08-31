# SCS Ref Doc Index — v6

**Date:** July 28, 2026
**Status:** ACTIVE — the map of every reference doc, **PP-first**. **Supersedes v5.**
**v6 changes:** property-wide GSC audit folded in — **P0 sized at last: 8 pages, on a report that predates the fix** · **🆕 "Redirect error" (12 pages) — a bucket nobody knew existed** · **🆕 "Crawled — currently not indexed" (51), clustered in `/supplements/*` — now the largest real SEO problem on the board** · five failed validations explained, three of which could never have passed · **P0-4 closed at property level** · breadcrumb coverage measured at **19 of 152** · six new tracked items · two hygiene rules.

> ⚠️ ~201 markdown files; ~30 current. Superseded versions stay searchable and don't announce themselves. **Check here first.**
>
> **Postscript.** v2 stale in a day, v3 in hours, v4 in an afternoon, v5 within one GSC session. **Reissue at the end of any session that ships code or resolves an open question.**

---

## 1) 🔴 READ-FIRST AT SESSION START

| Order | Doc |
|---|---|
| 1 | **SCS_MP v6.16 + v6.19 ADDENDUM** — RULE #0, execution model, prompt discipline |
| 2 | **This index** — which version of everything is current |
| 3 | The master doc for the workstream in play (§2) |

**RULE #0 governs all: verify before asserting.** Corollary — *a doc records what was believed at a moment, and belief moves faster than versioning.* **Verify current state against the artifact.**

> **CC session-restart behaviour (Jul 28).** After an auth failure and restart, a fresh CC session **resumed its prior task from git state** rather than waiting, and shipped two commits of Phase 1 work while a Phase 0 recon sat unsent. **The first message to a restarted CC session must redirect it explicitly.**

> **Commit date ≠ deploy date (Jul 28).** CC dated the canonical mechanism to a May 11 commit and concluded canonicals had been served for ten weeks. Crawl records contradicted it. **Because CC parks commits until Mark approves a push, authored-in-May routinely means deployed-in-July.** When commit metadata and the served artifact disagree, **the artifact wins**.

> **🆕 GSC aggregate reports lag by days (Jul 28).** The Pages report was dated **Jul 23** while URL Inspection on the same pages, run Jul 28, returned different and better results. `/methodology` appeared in a defect list it had already exited. **Read the "Last update" date on every GSC report before acting on its numbers**, and prefer live inspection for anything recent.

> **🆕 This is a DOMAIN property (`sc-domain:profpeptide.com`).** It reports **every host and protocol variant** — `http://`, `www.`, apex. Working canonicalization redirects therefore appear as "not indexed," which is what success looks like, not a fault. Do not treat host-variant URLs in exclusion lists as defects without checking which variant they are.

---

## 2) 🧪 PROF. PEPTIDE — 118 files, 12 live docs

### 2a) Strategy and content

| Doc | Current | Covers |
|---|---|---|
| **PP_MASTER** | **v15 + ADDENDUM v4** | Portfolio state, site structure, editorial rules, spot-check routine |
| **PP_SEO** | **v21** ⚠️ *§P0 superseded; §2 partly stale — see §3* | Core diagnosis · full audit · daily verification design · competitive analysis · phase sequence (§5) · metrics log (§6) |
| **PP_SEO_LEDGER** | **v3** | Operational per-URL tracker |
| **PP_VENDOR_PAGES** | **v4** | Coupon-page structure · product-card spec · Amino Club pilot · build sequence · density ceiling · internal first-mention linking (LOCKED) |
| **PP_SITE_DESIGN** | **v3 ADDENDUM** | Palette, templates, rich-template rollout |
| **PP_X_POSTS** | **v45/46 + v47 ADDENDUM** | 4-post anatomy · research standard · sale-post pattern · **hub link is `?v=N`, never bare `/coupons`** · X card mechanics |

> ⚠️ **PP_SEO v21 needs a v22.** §P0's premise was wrong (see §3). Its schema table lists `priceValidUntil` as open (closed Jul 28) and states four expired dates (actually 21). **§3 of this index is authoritative on schema, indexing, and Phase 0 until v22 exists.**

### 2b) Prices and data

| Doc | Current | Covers |
|---|---|---|
| **PP_PRICES** | **v2** | Section architecture · sale-vs-coupon rule (LOCKED) · scope exclusions · coded-vendor decodes · refresh mechanics · known fragilities |
| **PP_PRICE_DATA_MASTER** | **v1** | The data itself. Regenerated each pull |
| **PP_PRICE_COMPARISON_PLAN** | v5 | ⚠️ Superseded by PP_PRICES v2. Historical only |

### 2c) Vendors and revenue

| Doc | Current | Covers |
|---|---|---|
| **PP_VENDOR_PROSPECTING** | **v19** | **LIVE ROSTER — §1, check before suggesting any vendor** · GoAffPro status · three-stage pipeline · dead channels |
| **PP_COMMISSIONS** | **v4 + v5 note** | Commission tracking · AffiliateWP findings · code-is-the-asset thesis · Amino Club ≥ $1,000 lifetime |

### 2d) App and specialist
**PP_APP_REDESIGN v3** · **PP_APP_THEME_SPEC v1** · **PP_BIOREGULATORS v1**

### ❌ Retired
**PP_INDEXING** (v18–v23) — renamed to **PP_SEO** at v1. **PP_SEO v20 and earlier** — section numbers don't map to v21.

### 📌 PP task → doc

| Task | Read |
|---|---|
| **Indexing / canonicals / GSC** | **§3 of this index** — PP_SEO v21 §P0 is superseded |
| **Schema — current state** | **§3 of this index** |
| SEO / rankings / content strategy | **PP_SEO v21** §1, §2, §5 + **PP_SEO_LEDGER v3** |
| Vendor coupon pages | **PP_VENDOR_PAGES v4** + PP_SITE_DESIGN |
| `/prices` or the price pull | **PP_PRICES v2** + PP_PRICE_DATA_MASTER |
| Vendor applications / affiliate status | **PP_VENDOR_PROSPECTING v19** §1 |
| X posts | **PP_X_POSTS v45/46 + v47 ADDENDUM** |
| Any CC / CINC / CD prompt | **SCS_MP v6.19** |

---

## 3) 🆕 PP IMPLEMENTATION TRACKER

> ⚠️ **Numbering note.** This tracker's numbers are **not** PP_SEO v21 §5's. Always name the source.

### 📦 PARKED — 5 commits ahead of origin, unpushed
Amino Club product-card pilot (`b718da0`, `6b4b2b5`, `d0a5fa0`) · `check:vendors` + `coupon-page.ts` refactor ×2. Also: `lockup-parked` branch · `/public/logo-mark.png` · untracked `public/_preview/` · SC privacy-link fix.

### 📊 PROPERTY BASELINE (GSC Pages report, last update Jul 23, 2026)

**152 indexed · 100 not indexed.** Full reason table:

| Reason | Pages | Read |
|---|---|---|
| Crawled — currently not indexed | **51** | 🔴 **The real problem** — see #35 |
| Page with redirect | 18 | ✅ Intentional — host variants + `/research/*` legacy. Not a defect |
| **Redirect error** | **12** | 🔴 **Unexplained** — see #36 |
| Duplicate without user-selected canonical | **8** | 🟡 Pre-fix snapshot — see Phase 0 |
| Discovered — currently not indexed | 4 | 🟡 Includes 2 app support pages — see #38 |
| Excluded by 'noindex' tag | 3 | ✅ All intentional (`/vendors`, `/contact` ×2) |
| Not found (404) | 3 | 🟡 See #37 |
| Duplicate, Google chose different canonical | 1 | 🟡 `/news/rfk-peptide-ban-2026-v2` — see #39 |
| Alternate page with proper canonical tag | 0 | — |

### 🟢 Phase 0 — CLOSED. No code fix was required.

**What was believed:** Google was assigning `https://www.747live.bet/` as canonical to PP pages lacking a self-canonical; a sitewide fix was needed and gated all SEO work.

**What the evidence showed:**
1. **Live production HTML carries a correct self-referencing canonical**, verified by URL Inspection live tests on four pages. `747` appears in none of them, and nowhere in the repo.
2. **The dividing line was crawl date, not page.** Pages crawled before ~Jul 26 showed no user-declared canonical; the one crawled Jul 28 showed it. The canonical began serving in the last week.
3. **`/coupons/amino-club` was never affected** — indexed, Google-selected canonical = Inspected URL.
4. **`/vendor-testing-index` is deliberately `noindex`** (page incomplete — Mark, Jul 28). Removed from the defect set → #32.
5. **`747live.bet` is a Philippine online-casino brand running a multi-domain SEO spam network** (`747livee.com`, `747liveph.dev`, `747casino.uk.com`, `www-747live.ph`, `747live.org`, plus profile spam across GitLab, MyAnimeList, Habr, StackShare, Behance, Issuu). No repo footprint. **The countermeasure is entity strength — see #1.**
6. **`/prices/glow` and `/prices/klow` are 404s**, not canonical omissions — zero rows in the dataset, not linked, not in the sitemap. See #33.
7. **P0-4 closed at property level:** HTTPS report shows **53 HTTPS URLs, 0 non-HTTPS, no issues.** Did not reproduce.

**Final size: 8 pages**, on a report dated **Jul 23 — before the fix deployed**. `/methodology` sits on that list of 8 yet inspected clean on Jul 28. **Expect the number to fall without intervention. Re-check ~Aug 5 before treating any remainder as real.**

| # | Item | Status |
|---|---|---|
| P0-1 | Repo recon | ✅ Done |
| P0-2 | Add self-canonicals sitewide | ✅ **Closed — no action.** Already served |
| P0-3 | Determine 747live cause | ✅ **Closed — external.** Countermeasure is #1 |
| P0-4 | `/methodology` HTTPS anomaly | ✅ Closed — 0 non-HTTPS property-wide |

### ⛔ VALIDATION STATE — DO NOT RE-RUN THREE OF THESE

Five validations sit in **Failed**. Jul 3 produced **three separate messages**, not one.

| Issue | Validation | Re-run? |
|---|---|---|
| Page with redirect (18) | Failed | ❌ **Never.** These redirects are intentional; validation checks whether the exclusion stopped, and it won't |
| Excluded by 'noindex' (3) | Failed | ❌ **Never.** `/vendors` and `/contact` are deliberately noindexed |
| Not found (404) (3) | Failed | ❌ Not until the URLs are actually fixed — see #37 |
| Duplicate without user-selected canonical (8) | Failed | 🟡 **The only one worth retrying** — but only after the canonical fix has been recrawled (~Aug 5) |
| Duplicate, Google chose different canonical (1) | Started | 🟡 In progress, leave alone |

> **Why this matters:** requesting validation on pages that are *supposed* to be excluded guarantees a Failed state and generates "Some fixes failed" messages that look like defects. Three of the five failures were structurally impossible to pass.

### Phase 1 — UNBLOCKED

| # | Item | Doc | Status |
|---|---|---|---|
| **1** | **`sameAs` + Organization schema** — 3 social URLs already in the footer, plus `@id` publisher link. **The direct countermeasure to the 747live cluster misfire.** Google currently describes an unrelated podcaster on PP's brand query | PP_SEO v21 §2 | ⬜ **NEXT** |
| 2 | **Stale "(May 2026)" titles** — `/coupons/ez-peptides`, `/particle-peptides`, `/royal-peptides` | PP_VENDOR_PAGES v4 §5 | ⬜ Not started |
| 3 | **`/coupons/amino-club`** title rewrite *(page healthy and indexed — improvement, not a fix)* | PP_SEO v21 §5 | ⬜ Not started |
| 4 | `/prices/glow` + `/prices/klow` | — | ✅ Closed → #33 |
| 5 | `/prices/5-amino-1mq` | — | ✅ **Indexing requested Jul 28.** Re-inspect ~Aug 1 |
| 6 | **Search index rebuild** — covers **27 of 62 peptides and ZERO price pages** | PP_SEO v21 §5 | ⬜ Not started |
| 7 | **Hardcoded coupon codes** — 27 pages + `/best-peptide-vendors` (live Featured contradiction: Oasis on `/coupons`, Peptides.gg on Featured). Blast radius: `PROFPEPTIDE` → 16 vendors / 40 files · `PROF10` → 8 / 24 · `PROF15` → 4 / 14 · `PROFPEPTIDE15` → 1 / 3 · `PROF20` → 1 / 3 | PP_PRICES v2 | ⬜ Not started |
| 8 | **Delete dead `WhereToBuy.tsx`** | PP_PRICES v2 | ⬜ Not started |
| 8b | Expired `priceValidUntil` | — | ✅ **DONE Jul 28** — 21 expired, not 4. Now derived from the stamp, +1yr. *Stated approximation: a year of validity is asserted, not known* |
| 8c | **Coupon meta descriptions over-length** — 27 of 33 exceed ~160; longest `biolongevity-labs` at 273 | This index | ⬜ Not started |
| 8d | **`/prototype/logo` + `/prototype/profile` declare no canonical** — only genuine coverage gaps. Add a canonical or a `noindex` | This index | ⬜ Not started |

### 🔴 NEW — Phase 1A: the indexing findings

| # | Item | Status |
|---|---|---|
| **35** | **"Crawled — currently not indexed" — 51 pages.** Ten of the first twenty examples are `/supplements/*` (probiotics, melatonin, magnesium, vitamin D3, collagen peptides ×2, glycine, CoQ10, prebiotics, chromium). Google fetched them and declined to index. On a 53-page supplement library that is a **quality signal, not a technical fault** — and it maps exactly to **M3**, which has never been measured. **Subtract the `opengraph-image` / `twitter-image` routes and `site.webmanifest` first** — those are noindex by design and inflate the count. **This is the largest genuine SEO problem on the board, bigger than Phase 0 ever was** | 🔴 **Drill-down requested** |
| **36** | **"Redirect error" — 12 pages. Cause unknown.** Distinct from "Page with redirect" (18, all intentional). Means Google could **not complete** the redirect — a loop, an over-long chain, or a bad target. `next.config.js` review found no loop. Never appeared in any doc before Jul 28 | 🔴 **Drill-down requested** |
| **37** | **Three 404s.** `/coupons/apollo-peptide-sciences` and `/coupons/nordic-peptides` are being crawled from somewhere — sitemap or internal link. The first may relate to #25 (Peptide Sciences closure audit). Third is a www host variant, ignorable | 🟡 Drill-down requested |
| **38** | **`/hybrid-rockstar/support` and `/strength-cycle/support` have never been crawled** — "Discovered, not indexed," last crawl N/A. **These are the support URLs on the App Store listings.** Should at minimum be findable | ⬜ Not started |
| **39** | **`/news/rfk-peptide-ban-2026-v2`** — the single real duplicate. The `-v2` slug implies a v1 exists and Google chose it | 🟡 Drill-down requested |

### Phase 2 — Vendor product cards

| # | Item | Status |
|---|---|---|
| 9 | **Amino Club pilot** — compound name (linked) · sizes · price · stock · shop link. No images in v1 | 🟡 **BUILT — parked, awaiting review** |
| 10 | Review pilot → decide rollout | ⬜ Gated on #9 |
| 11 | *(If images wanted)* capture image URLs + deep links on a re-pull | ⬜ Optional |

### Phase 3 — Freshness, authorship, internal linking

| # | Item | Status |
|---|---|---|
| 12 | **`check:vendors` script** — 28/30 reachable, 0 dead, 2 blocked. Fail-loud on DEAD only. Not wired into `build`. **Does not prove a code applies at checkout** | ✅ **DONE Jul 28** |
| 12b | **GitHub Action for the daily run** — nothing schedules the script | ⬜ **Manual until this lands** |
| 12c | **`peptides.gg` + `purerawz.co` 403s** — both hosts load normally in a browser, both affiliate links work. Cloudflare bot-blocking confirmed | ✅ **CLOSED Jul 28** |
| 13 | **Internal-link block** on vendor pages | ⬜ Not started |
| 13b | **Editorial-staff byline + `author` schema + `/methodology` substance** | ⬜ Not started |
| 13c | `dateModified` on coupon pages | ✅ **DONE Jul 28** |
| **13d** | **`BreadcrumbList` on `/coupons/*` and `/prices/*`.** ⚠️ **Coverage is far thinner than assumed: 19 valid items against 152 indexed pages, 0 errors.** Code review implied breadcrumbs on peptides, supplements, compare, news, guides, about — which should be far more than 19. Either coverage is narrower than believed or Google has processed a fraction. **Bigger win than it looked** | ⬜ **Ready — gate lifted** |
| 13e | `SoftwareApplication` on `/calculator`; `MobileApplication` on `/app` | ⬜ Not started |

### 🔵 SCHEMA DECISIONS — closed, do not re-litigate

| Type | Verdict |
|---|---|
| **BreadcrumbList on coupons/prices** | **Build it** (13d) |
| **The bare `Offer`** | Keep correct, expect no rich result. No `price`/`priceCurrency`, not nested in a Product |
| **Product / ItemList on `/prices/*`** | Low priority — requires Merchant Center / first-party selling; PP is an aggregator |
| **`aggregateRating`** | **Skip permanently** — no legitimate source; inventing one risks a manual action |
| **FAQPage** | **Skip** — restricted to authoritative government/health sites since 2023. ⚠️ *Verify before using this to REMOVE existing markup* |
| **Article on peptide pages** | Fine as-is |

### Phase 4 — FAQ hub-and-spoke
**14** recon `/faq` · **15** mine GSC for question-shaped queries · **16** build the hub (for users — FAQPage schema won't render). All ⬜.

### Phase 5 — Query-shaped commercial pages
**17** validate volume · **18** vendor-alternative pages (Core, Biotech, Verified, **Peptide Sciences — closed, demand orphaned**) · **19** commercial-phrase pages (5–8) · **20** reuse the product-card component. All ⬜.

### Never measured

| # | Item | Status |
|---|---|---|
| **M3** | **Boilerplate-vs-unique ratio across 30 coupon and 53 supplement pages.** ⬆️ **ELEVATED** — #35 is the measured symptom of exactly this. No longer speculative | ⬜ **Do this with #35** |
| M1 | **Backlink baseline** — half of SEO never examined. 30 affiliate vendors are the most underused asset available; costs an email. Also relevant to the entity problem in #1 | ⬜ Not started |
| M2 | **Core Web Vitals** — Lighthouse + PageSpeed field data. `/prices` compound pages carry 20+ rows | ⬜ Not started |

### Ongoing / vendor pipeline

| # | Item | Status |
|---|---|---|
| 21 | **Chase 7 outstanding codes** — PureRx, Certified-Pep, Crush Research, Modern Research, Modern Aminos ×2, Lumera Labs. **The bottleneck** | 🟡 Awaiting reply |
| 21b | 🆕 **PureRx split decision** — offers up to 25% divided between discount and commission (commission calculated post-discount, excludes shipping/tax). **Four questions sent/pending:** does an affiliate-link visit still earn commission if the customer applies PureRx's own public code · is that public code permanent · can codes stack · is the split adjustable later. **Do not commit a split until Q1 is answered** — it inverts the recommendation | 🟡 **Awaiting vendor reply** |
| 22 | **Apply:** LiveWell, Onyx Biolabs, GLP1 Research Lab, Licensed Peptides | ⬜ Not started |
| 23 | **Check Eternal Peptides** | ⬜ Not started |
| 24 | **Follow up or close Wolverine** — pending since Jul 13 | ⬜ Not started |
| 25 | **Audit Peptide Sciences references** — closed vendor. See also #37 | ⬜ Not started |
| 26 | **Re-check `/prices` impressions at 4 and 8 weeks** (live Jul 25) | ⬜ Due ~Aug 22 / ~Sep 19 |
| 27 | **Spot-check Sale rows** — 190 rows, most perishable data on the site | ⬜ Not started |
| 28 | **Dated sale field** so time-limited promos auto-expire. ⬆️ **Two boost events in two days** (Mile High 34% Jul 27, Amino Club 30% Jul 28), each needing a manual link swap. Also removes the stale-sale-post exposure | ⬜ **Earning its place fast** |
| 29 | **Logo / favicon** — glasses favicon LIVE; `/icon.png` fixes the Organization 404 logo. Header mark on disk, unreferenced | ✅ Favicon · 🟡 Header held |
| 30 | **Restart news publishing** — stopped in June. Per-compound "further reading" only | ⬜ Not started |
| 31 | **`CODES_VERIFIED_DATE` manual constant** — confirm nothing still reads it now the generated stamp exists | ⬜ Not started |
| 32 | **`/vendor-testing-index` incomplete and deliberately `noindex`** — but linked from the `/coupons` hub as a trust asset. **Finish it or drop the link.** Decision, not a bug | ⬜ **Mark's call** |
| 33 | **Externally-discovered non-existent URLs** — `/prices/glow`, `/prices/klow`. Not linked, not in sitemap | ⬜ Low priority |
| 34 | **Below-threshold `/prices/*` pages are `noindex` by design** (vendor-count gate). Expect GSC to report them unindexed. **Not a defect — do not re-escalate** | ℹ️ Reference |

**Legend:** ⬜ not started · 🟡 in progress or gated · ✅ done · 🔴 priority · ℹ️ reference

---

## 4) 🏛️ STUDIO-LEVEL

| Doc | Current | Covers |
|---|---|---|
| **SCS_MP** | **v6.16 + v6.19 ADDENDUM** | RULE #0 · execution model · prompt discipline · GSC quota rule · EAS signing · recurring failure patterns |
| **PROJECT_INSTRUCTIONS** | **v3** | Rules only, no state. TL;DR on long responses is line 166 |
| **SCS_REF_INDEX** | **v6** *(this doc)* | The map + PP implementation tracker |

---

## 5) OTHER PROPERTIES

| Property | Doc | Current | Notes |
|---|---|---|---|
| **HR** | **HR_MASTER** | **v14** | v1.0.3 through Beta App Review, TestFlight to 10 testers · monetization = freemium · v1.0.4 scope |
| HR | **HR_SOCIAL** | **v12** | ⚠️ **Two problems — see below** |
| HR | HR_PROGRAM_EXPORT | — | ⚠️ Ad-hoc transcription, no generator, not in the repo. **Program data verified accurate for W5**; verify against `hr-cycle-1.json` |
| **SC** | SC_MASTER_ACTIVE / FROZEN | v5.14 / v5.3 | Privacy-link fix committed, unpushed |
| SC | SC_FORM_CUES_EXPORT | — | Source for HR carousel form slides |
| **WN** | WN_MASTER_ACTIVE / FROZEN | v1.2 / v1.1 | |
| **Capstone** | WL_MASTER_ACTIVE / FROZEN | v2.4 / — | **"WL" = WeightLifting, NOT White Label** |

> ⚠️ **HR_SOCIAL v12 needs a v13.** Two live defects:
> 1. **The stored "WORKING CAROUSEL PROMPT" is the old v9 in-chat-reference version** ("use WEEK 3 DAY 1 in this document as the format reference") — the exact pattern v12 killed for reels, sitting live in the prompt anyone would copy. v12's prose says the carousel workflow is GitHub-direct; the stored prompt contradicts it. **Replace with a GitHub-direct prompt.**
> 2. **Shipped-post state is stale.** Records showed W4D5 as next in queue when W5D4 had already shipped. **Post-tracking state should be dated or dropped** — it goes stale silently and produced a wrong queue note.
>
> Also live: the reel template's build-method **comment** self-contradicts (a "both words yellow" parenthetical on the CTA line describing the hook/carousel distinction). Markup is correct; queued for the next CC session in the site repo.

---

## 6) HYGIENE RULES

1. **Version in the filename; current version in this index.**
2. **Successors declare what they supersede.**
3. **Negative findings are findings.** The schema-decisions table exists because six types were assessed and five rejected.
4. **Docs describing live state go stale fastest.** Regenerate from the artifact; date the claim where you can't.
5. **Update this index — and §3 — whenever anything moves.**
6. **Frozen snapshots are deliberate archives.**
7. **Reissue this index in the same batch as any doc it references.**
8. **Section pointers die with versions.**
9. **Counts in docs are claims, not facts.** "Four expired dates" survived three versions; the real number was 21.
10. **Distinguish *fixed* from *made-safe*.**
11. **A dashboard field is an observation, not a diagnosis.** "User-declared canonical: None" meant "none *at last crawl*." Check the observation date next to the observed value, and use a known-good control to separate a page-level defect from a reporting artefact.
12. **Diagnose the pipeline, not just the code.** Repo state, deploy state, and crawl state each lied alone.
13. **🆕 Read the whole report before sampling.** Phase 0 cost most of a session sampling 14 URLs by hand. The Pages report gave the full 100-page population, correctly bucketed, in one screen — and revealed two problems (#35, #36) that sampling never would have. **Ask for the population first, the sample second.**
14. **🆕 An exclusion is not automatically a defect.** Of 100 non-indexed pages, 21 are working as designed (18 intentional redirects, 3 intentional noindex) and several more are image routes. Three failed validations were structurally impossible to pass because they were run against deliberate exclusions. **Classify before counting.**

---

## 📅 Changelog

**v6 (July 28, 2026):** Property-wide GSC audit folded in. **Phase 0 sized: 8 pages, on a Jul 23 report predating the fix** — expect it to fall unaided; re-check ~Aug 5. **P0-4 closed at property level** (53 HTTPS, 0 non-HTTPS). New: **#35** crawled-not-indexed (51, `/supplements/*` clustered — now the largest real problem), **#36** Redirect error (12, unexplained), **#37** three 404s, **#38** two never-crawled App Store support pages, **#39** the one real duplicate, **#21b** PureRx split decision pending vendor reply. **M3 elevated** — #35 is its measured symptom. **13d elevated** — breadcrumb coverage measured at 19 of 152. **Validation state table added: three of five failed validations must never be re-run.** 12c closed. Domain-property behaviour and GSC report-lag added to §1. HR_SOCIAL flagged for v13 (stale carousel prompt + stale post-tracking). Hygiene rules 13 and 14.

**v5 (July 28, 2026):** Phase 0 closed — no code fix required. `/coupons/amino-club` corrected. `/vendor-testing-index` confirmed deliberately noindex. Commit-date-≠-deploy-date added. Hygiene 11, 12.

**v4 (July 28, 2026):** Schema / freshness / check-script session recorded. 8b, 12, 13c closed. Schema-decisions table. Hygiene 9, 10.

**v3 (July 28, 2026):** PP_SEO v20 → v21 throughout; Phase 0 added. Hygiene 7, 8.

**v2 (July 27, 2026):** PP front-loaded; implementation tracker added.

**v1 (July 27, 2026):** Created.

---

*~201 files, ~30 live docs. §3 is the board. **Phase 0 is closed. The real work is #35 — 51 pages Google crawled and declined.***
