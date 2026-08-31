# SCS Ref Doc Index — v7

**Date:** July 28, 2026
**Status:** ACTIVE — the map of every reference doc, **PP-first**. **Supersedes v6.**
**v7 changes:** 🔴 **CRAWL FREQUENCY diagnosed as the underlying constraint** — every one of four GSC findings today was already fixed in deployed code, some for months · **#36, #37, #39 all CLOSE as recrawl lag, no code change** · **#35 narrowed to 32 real content pages — 19 of 53 supplement pages declined (36%)** · **#13d rescoped: breadcrumbs are absent sitewide, not missing on two routes** · **#1 and M1 elevated — they are the levers on crawl authority** · dead-link guard commissioned · HR site git-vs-production divergence closed, SC/WN unchecked.

> ⚠️ ~201 markdown files; ~30 current. Superseded versions stay searchable and don't announce themselves. **Check here first.**

---

## 1) 🔴 READ-FIRST AT SESSION START

| Order | Doc |
|---|---|
| 1 | **SCS_MP v6.16 + v6.19 ADDENDUM** — RULE #0, execution model, prompt discipline |
| 2 | **This index** — which version of everything is current |
| 3 | The master doc for the workstream in play (§2) |

**RULE #0 governs all: verify before asserting.** Corollary — *a doc records what was believed at a moment, and belief moves faster than versioning.* **Verify current state against the artifact.**

> **CC session-restart behaviour.** After an auth failure and restart, a fresh CC session **resumes its prior task from git state** rather than waiting. **The first message to a restarted CC session must redirect it explicitly.**

> **Commit date ≠ deploy date.** CC parks commits until Mark approves a push, so authored-in-May routinely means deployed-in-July. When commit metadata and the served artifact disagree, **the artifact wins**.

> **🔴 GSC REPORTS THE PAST, NOT THE PRESENT.** Aggregate reports lag days; crawl records lag **months**. On July 28, four separate findings were investigated and **all four were already fixed in deployed code** — some since May. GSC's *referring page* data was stale too, naming a source page whose link had been removed. **Before treating any GSC finding as a defect, check the last-crawl date and confirm against current source.** See §3 Phase 0 for the full table.

> **This is a DOMAIN property (`sc-domain:profpeptide.com`).** It reports every host and protocol variant. Working canonicalization redirects appear as "not indexed" — that is success, not a fault.

> **🆕 CLI deploys can leave git behind.** `hybridrockstar.app` was deployed from a working tree via the Vercel CLI for weeks; three live assets existed **only locally** and `origin/main` would have shipped a broken site. Closed July 28. **SC and WN use the same CLI pattern and have not been checked.** See §5.

---

## 2) 🧪 PROF. PEPTIDE — 118 files, 12 live docs

### 2a) Strategy and content

| Doc | Current | Covers |
|---|---|---|
| **PP_MASTER** | **v15 + ADDENDUM v4** | Portfolio state, site structure, editorial rules, spot-check routine |
| **PP_SEO** | **v21** ⚠️ *§P0 superseded; §2 partly stale* | Core diagnosis · full audit · competitive analysis · phase sequence (§5) · metrics log (§6) |
| **PP_SEO_LEDGER** | **v3** | Operational per-URL tracker |
| **PP_VENDOR_PAGES** | **v4** | Coupon-page structure · product-card spec · build sequence · density ceiling · internal first-mention linking (LOCKED) |
| **PP_SITE_DESIGN** | **v3 ADDENDUM** | Palette, templates, rich-template rollout |
| **PP_X_POSTS** | **v45/46 + v47 ADDENDUM** | 4-post anatomy · sale-post pattern · **hub link is `?v=N`, never bare `/coupons`** · X card mechanics |

> ⚠️ **PP_SEO v21 needs a v22.** §P0's premise was wrong. Its schema table lists `priceValidUntil` as open (closed) and states four expired dates (actually 21). **§3 of this index is authoritative on schema, indexing, and Phase 0.**

### 2b) Prices and data
**PP_PRICES v2** (section architecture · sale-vs-coupon rule LOCKED · coded-vendor decodes · known fragilities) · **PP_PRICE_DATA_MASTER v1** · ~~PP_PRICE_COMPARISON_PLAN v5~~ (superseded, historical only)

### 2c) Vendors and revenue
**PP_VENDOR_PROSPECTING v19** — **LIVE ROSTER §1, check before suggesting any vendor** · **PP_COMMISSIONS v4 + v5 note**

### 2d) App and specialist
**PP_APP_REDESIGN v3** · **PP_APP_THEME_SPEC v1** · **PP_BIOREGULATORS v1**

### ❌ Retired
**PP_INDEXING** (v18–v23) → renamed **PP_SEO**. **PP_SEO v20 and earlier** — section numbers don't map to v21.

### 📌 PP task → doc

| Task | Read |
|---|---|
| **Indexing / canonicals / GSC** | **§3 of this index** |
| **Schema — current state** | **§3 of this index** |
| SEO / rankings / content strategy | **PP_SEO v21** §1, §2, §5 + LEDGER v3 |
| Vendor coupon pages | **PP_VENDOR_PAGES v4** + PP_SITE_DESIGN |
| `/prices` or the price pull | **PP_PRICES v2** + PP_PRICE_DATA_MASTER |
| Vendor applications | **PP_VENDOR_PROSPECTING v19** §1 |
| X posts | **PP_X_POSTS v45/46 + v47 ADDENDUM** |
| Any CC / CINC / CD prompt | **SCS_MP v6.19** |

---

## 3) 🆕 PP IMPLEMENTATION TRACKER

> ⚠️ **Numbering note.** This tracker's numbers are **not** PP_SEO v21 §5's. Always name the source.

### 📦 PARKED — 5 commits ahead of origin (6 once the guard lands)
Amino Club product-card pilot (`b718da0`, `6b4b2b5`, `d0a5fa0`) · `check:vendors` + `coupon-page.ts` refactor ×2 · dead-link guard (#40, in flight). Also: `lockup-parked` branch · `/public/logo-mark.png` · untracked `public/_preview/`.

### 🔴 THE UNDERLYING CONSTRAINT — crawl frequency

**Every GSC finding investigated on July 28 was already fixed in deployed code:**

| Finding | Actually fixed | GSC crawl behind it | Gap |
|---|---|---|---|
| Missing canonicals | ~Jul 26 | Jul 23 report | days |
| Redirect error (12) | before May | May 4 / May 9 | **~3 months** |
| `/coupons/nordic-peptides` 404 | **May 13** (`a126305`) | Jul 12 | 2 months |
| `/coupons/apollo-peptide-sciences` 404 | **Jun 9** (`ec23364`) | Jul 14 | 5 weeks |
| `/news/rfk-peptide-ban-2026-v2` duplicate | **May 11** (`3d2ccbb`) | May 8 | 2.5 months |

GSC's *referring page* data was stale as well — it named `/research/cagrilintide` as linking to Apollo, but that path redirects to a page whose only coupon link is the hub.

**This is not a GSC fault. It is a crawl-rate signal.** Google is not returning to profpeptide.com often. Low crawl frequency is an authority symptom, and it shares a root with everything else on the board: the brand query returning an unrelated podcaster, an offshore casino winning a duplicate cluster, and 32 pages crawled and declined.

**Consequence for prioritisation: #1 (`sameAs` + Organization schema) and M1 (backlink baseline) are levers on the actual constraint, not tidy-ups.** They move ahead of cosmetic work.

**Consequence for method:** stop treating GSC exclusion lists as defect lists. **Check the last-crawl date first.** Four investigations today produced zero code changes.

### 📊 PROPERTY BASELINE (GSC Pages report, last update Jul 23, 2026)

**152 indexed · 100 not indexed.**

| Reason | Pages | Verdict |
|---|---|---|
| Crawled — currently not indexed | 51 → **32 real** | 🔴 **The only genuine problem** — #35 |
| Page with redirect | 18 | ✅ Intentional — host variants + `/research/*` legacy |
| Redirect error | 12 | ✅ **CLOSED** — fixed pre-May, stale crawl. #36 |
| Duplicate without user-selected canonical | 8 | ✅ Pre-fix snapshot. Re-check ~Aug 5 |
| Discovered — currently not indexed | 4 | 🟡 In sitemap, simply uncrawled. #38 |
| Excluded by 'noindex' | 3 | ✅ All intentional (`/vendors`, `/contact` ×2) |
| Not found (404) | 3 | ✅ **CLOSED** — removed May/June, stale crawl. #37 |
| Duplicate, Google chose different canonical | 1 | ✅ **CLOSED** — deleted + 301'd May 11. #39 |
| Alternate page with proper canonical | 0 | — |

### 🟢 Phase 0 — CLOSED. No code fix was required.

**Believed:** Google assigning `747live.bet` as canonical to pages lacking a self-canonical; sitewide fix needed; gated all SEO work.

**Found:**
1. **Live HTML carries a correct self-canonical on every page tested**; `747` appears in none, and nowhere in the repo.
2. **The dividing line was crawl date, not page.**
3. **`/coupons/amino-club` was never affected** — indexed, healthy.
4. **`/vendor-testing-index` is deliberately `noindex`** (page incomplete). → #32
5. **`747live.bet` is a Philippine online-casino brand running a multi-domain SEO spam network.** No repo footprint. **Countermeasure is entity strength → #1.**
6. **`/prices/glow` + `/prices/klow` are 404s** — zero dataset rows, not linked, not in sitemap. → #33
7. **P0-4 closed:** 53 HTTPS URLs, 0 non-HTTPS property-wide.

**Final size: 8 pages**, on a Jul 23 report predating the fix. **Re-check ~Aug 5.**

### ⛔ GSC — DO NOT DO

| Action | Why not |
|---|---|
| Request indexing on the #35 pages | Google crawled and **chose** not to index. A quality judgment, not a discovery failure. Burns daily quota |
| Request indexing / Removals on the 404s | They are *supposed* to 404. Google drops them unaided |
| Re-run validation on "Page with redirect" | Redirects are intentional; validation checks whether the exclusion stopped |
| Re-run validation on "Excluded by noindex" | `/vendors` and `/contact` are deliberately noindexed |
| Re-run validation on "Not found (404)" | Same — the 404s are correct |
| **Only permitted retry:** "Duplicate without user-selected canonical" | And only after ~Aug 5 recrawl |

### 🔴 Phase 1A — the one real finding

| # | Item | Status |
|---|---|---|
| **35** | **"Crawled — currently not indexed" — 32 real content pages.** Raw 51 minus 14 machine routes (11 OG/Twitter image routes, `site.webmanifest`, `apple-icon`, `favicon.ico`) and 5 www host variants. Breakdown: **19 `/supplements/*`, 10 `/peptides/*`, 2 `/compare/*`, 1 `/guides/*`.**<br>**19 of 53 supplement pages — 36% of the library — were crawled and declined.** These were crawled **Jul 22–25**, recent, so the staleness explanation does not apply. Google looked lately and said no.<br>**Second signal: the 10 declined peptide pages are almost all blends and combos** — `cjc-1295-dac-ipamorelin`, `kpv-bpc-157`, `gh-stack`, `tesamorelin-ipamorelin`, `cagrisema`, plus standalone `cjc-1295` and `ipamorelin`. **The blend/stack expansion (15–25 new profiles) is on the roadmap. Google is already declining the blend pages that exist.** Understand why before building more.<br>**Method:** compare 3–4 declined pages against 3–4 indexed ones and isolate what differs. This is **M3 with a number attached** | 🔴 **THE WORK** |
| 36 | **Redirect error (12)** — all crawled May 4/9; all three inspected pass live now. Eleven were trailing-slash `/supplements/*` from a since-fixed normalization bug | ✅ **CLOSED — stale crawl** |
| 37 | **Two 404s** — `/coupons/nordic-peptides` removed May 13, `/coupons/apollo-peptide-sciences` removed Jun 9. **Zero occurrences of either slug anywhere in the repo.** Both removals deployed | ✅ **CLOSED — stale crawl** |
| 38 | **`/hybrid-rockstar/support` + `/strength-cycle/support`** — **in the sitemap**, discovered via `sitemap-0.xml`, simply never crawled. The SC one also has an App Store referrer. Nothing broken | 🟡 Low priority |
| 39 | **`/news/rfk-peptide-ban-2026-v2`** — no source file; 301s to v1 since May 11 (`3d2ccbb`). v2 was a byte-identical duplicate created only to force a fresh OG scrape (`b32650a`), and carried stale pre-rebrand colour tokens. **No internal link points to it.** Google choosing v1 was correct | ✅ **CLOSED — stale crawl** |
| **40** | 🆕 **Dead-internal-link guard** — a local, network-free check asserting every `/coupons/<slug>` link resolves to a live, non-retired vendor. Two dead links survived months undetected and surfaced only because Google happened to crawl them. Must distinguish rendered links from registry/price data and from working 301s to `/coupons`. **Scope question pending:** extending to `/peptides/`, `/supplements/`, `/prices/`, `/compare/`, `/guides/`, `/news/` — PP's first-mention linking rule makes `/peptides/` links dense, so the same defect has far more surface there | 🟡 **In flight — CC building** |

### Phase 1 — the levers

| # | Item | Status |
|---|---|---|
| **1** | **`sameAs` + Organization schema** — 3 social URLs already in the footer, plus `@id` publisher link. ⬆️ **Now the lever on crawl authority and the countermeasure to the 747live cluster misfire.** Google currently describes an unrelated podcaster on PP's brand query | ⬜ **NEXT** |
| 2 | **Stale "(May 2026)" titles** — `/coupons/ez-peptides`, `/particle-peptides`, `/royal-peptides` | ⬜ Not started |
| 3 | **`/coupons/amino-club`** title rewrite *(page healthy — improvement, not a fix)* | ⬜ Not started |
| 5 | `/prices/5-amino-1mq` | ✅ Indexing requested Jul 28. **Re-inspect ~Aug 1** |
| 6 | **Search index rebuild** — covers **27 of 62 peptides and ZERO price pages** | ⬜ Not started |
| 7 | **Hardcoded coupon codes** — 27 pages + `/best-peptide-vendors` (Featured contradiction: Oasis on `/coupons`, Peptides.gg on Featured). Blast radius: `PROFPEPTIDE` → 16/40 · `PROF10` → 8/24 · `PROF15` → 4/14 · `PROFPEPTIDE15` → 1/3 · `PROF20` → 1/3 | ⬜ Not started |
| 8 | **Delete dead `WhereToBuy.tsx`** | ⬜ Not started |
| 8b | Expired `priceValidUntil` — 21, not 4. Now derived from the stamp, +1yr. *One-year validity is asserted, not known* | ✅ **DONE** |
| 8c | **Coupon meta descriptions over-length** — 27 of 33 exceed ~160; longest 273 | ⬜ Not started |
| 8d | **`/prototype/logo` + `/prototype/profile` declare no canonical** | ⬜ Not started |

### Phase 3 — Freshness, authorship, internal linking

| # | Item | Status |
|---|---|---|
| 12 | **`check:vendors`** — 28/30 reachable, 0 dead, 2 blocked. Fail-loud on DEAD only. Not in `build` (network). **Does not prove a code applies at checkout** | ✅ **DONE** |
| 12b | **GitHub Action for the daily run** | ⬜ **Manual until this lands** |
| 12c | `peptides.gg` + `purerawz.co` 403s — hosts load, affiliate links work. Cloudflare bot-blocking | ✅ **CLOSED** |
| 13 | **Internal-link block** on vendor pages | ⬜ Not started |
| 13b | **Editorial-staff byline + `author` schema + `/methodology` substance** | ⬜ Not started |
| 13c | `dateModified` on coupon pages | ✅ **DONE** |
| **13d** | **`BreadcrumbList` — RESCOPED.** ⚠️ Google recognises breadcrumbs on exactly **19 URLs**: 14 `/peptides/*` (of 62 profiles), plus `/best-peptide-vendors`, `/bioregulators`, `/compare`, `/news` + one article, `/about`. **Zero on coupons, prices, supplements, or guides.** This is not a two-route gap-fill — **breadcrumbs are effectively absent sitewide.** Bigger job, bigger win | ⬜ **Ready** |
| 13e | `SoftwareApplication` on `/calculator`; `MobileApplication` on `/app` | ⬜ Not started |

### 🔵 SCHEMA DECISIONS — closed, do not re-litigate

| Type | Verdict |
|---|---|
| **BreadcrumbList** | **Build it** (13d) — now sitewide scope |
| **The bare `Offer`** | Keep correct, expect no rich result |
| **Product / ItemList on `/prices/*`** | Low priority — needs Merchant Center / first-party selling |
| **`aggregateRating`** | **Skip permanently** — no legitimate source; inventing one risks a manual action |
| **FAQPage** | **Skip** — restricted to authoritative government/health sites since 2023. ⚠️ *Verify before using this to REMOVE existing markup* |
| **Article on peptide pages** | Fine as-is |

### Phase 2 · 4 · 5

**Phase 2 — product cards:** #9 Amino Club pilot **BUILT, parked** · #10 review → rollout decision · #11 images (optional).
**Phase 4 — FAQ:** #14 recon `/faq` · #15 mine GSC for question-shaped queries · #16 build the hub (for users — FAQPage won't render).
**Phase 5 — commercial pages:** #17 validate volume · #18 vendor-alternative pages (**Peptide Sciences closed — demand orphaned**) · #19 commercial-phrase pages · #20 reuse the product-card component.

### Never measured

| # | Item | Status |
|---|---|---|
| **M3** | **Boilerplate-vs-unique ratio, 30 coupon + 53 supplement pages.** ⬆️ **#35 is its measured symptom** — 36% of supplements declined. No longer speculative | ⬜ **Do with #35** |
| **M1** | **Backlink baseline.** ⬆️ **ELEVATED — a lever on crawl frequency.** 30 affiliate vendors are the most underused asset available; costs an email | ⬜ **Elevated** |
| M2 | **Core Web Vitals** — Lighthouse + PageSpeed field data. `/prices` pages carry 20+ rows | ⬜ Not started |

### Ongoing / vendor pipeline

| # | Item | Status |
|---|---|---|
| 21 | **Chase 7 outstanding codes** — PureRx, Certified-Pep, Crush Research, Modern Research, Modern Aminos ×2, Lumera Labs. **The bottleneck** | 🟡 Awaiting reply |
| 21b | **PureRx split** — up to 25% split between discount and commission, commission calculated post-discount, excludes shipping/tax. **Four questions pending:** does an affiliate-link visit still earn if the customer applies PureRx's own public code · is that public code permanent · can codes stack · is the split adjustable. **Do not commit a split until Q1 is answered — it inverts the recommendation** | 🟡 **Awaiting vendor** |
| 22–25 | Apply: LiveWell, Onyx Biolabs, GLP1 Research Lab, Licensed Peptides · check Eternal Peptides · close Wolverine (pending since Jul 13) · **audit Peptide Sciences references (closed vendor)** | ⬜ Not started |
| 26 | Re-check `/prices` impressions at 4 and 8 weeks (live Jul 25) | ⬜ ~Aug 22 / ~Sep 19 |
| 27 | **Spot-check Sale rows** — 190 rows, most perishable data on the site | ⬜ Not started |
| 28 | **Dated sale field** so promos auto-expire. ⬆️ **Two boost events in two days** (Mile High 34% Jul 27, Amino Club 30% Jul 28), each needing a manual hub-link swap. Also removes the stale-sale-post exposure | ⬜ **Earning its place** |
| 29 | Logo / favicon — glasses favicon LIVE; `/icon.png` fixes the Organization 404 logo. Header mark on disk, unreferenced | ✅ / 🟡 |
| 30 | **Restart news publishing** — stopped in June | ⬜ Not started |
| 31 | **`CODES_VERIFIED_DATE` manual constant** — confirm nothing still reads it | ⬜ Not started |
| 32 | **`/vendor-testing-index` incomplete + deliberately `noindex`**, but linked from the `/coupons` hub as a trust asset. **Finish it or drop the link** | ⬜ **Mark's call** |
| 33 | Externally-discovered non-existent URLs — `/prices/glow`, `/prices/klow` | ⬜ Low priority |
| 34 | **Below-threshold `/prices/*` are `noindex` by design** (vendor-count gate). **Not a defect — do not re-escalate** | ℹ️ Reference |

**Legend:** ⬜ not started · 🟡 in progress or gated · ✅ done · 🔴 priority · ℹ️ reference

---

## 4) 🏛️ STUDIO-LEVEL

| Doc | Current | Covers |
|---|---|---|
| **SCS_MP** | **v6.16 + v6.19 ADDENDUM** ⚠️ *needs a deploy-pattern rule* | RULE #0 · execution model · prompt discipline · GSC quota rule · EAS signing |
| **PROJECT_INSTRUCTIONS** | **v3** | Rules only, no state. TL;DR on long responses is line 166 |
| **SCS_REF_INDEX** | **v7** *(this doc)* | The map + PP implementation tracker |

> ⚠️ **SCS_MP needs a deploy-pattern addendum.** Its brand-site pattern describes `vercel deploy --prod` and says nothing about git divergence — which is exactly what let `hybridrockstar.app` run for weeks with three live assets missing from `origin/main`. Whichever way each site goes (CLI-only or git auto-deploy), the rule needs writing down. If CLI-only: *after any CLI deploy, verify git matches the deployed tree.*

---

## 5) OTHER PROPERTIES

| Property | Doc | Current | Notes |
|---|---|---|---|
| **HR** | **HR_MASTER** | **v14** | v1.0.3 through Beta App Review, TestFlight to 10 testers · monetization = freemium · v1.0.4 scope |
| HR | **HR_SOCIAL** | **v13** 🆕 | Four stale items fixed: carousel prompt now GitHub-direct · wordmark table corrected (**reel hook is a HYBRID-only lockup**) · post-tracking state dated · comment-fix queue item closed. **CTA unified to "The full 12-week program. Free to download."** (`22ba894`) |
| HR | HR_PROGRAM_EXPORT | — | ⚠️ Ad-hoc transcription, no generator, not in the repo. **Verified accurate for Week 5.** Current position: **W5D4 shipped, W5D5 prompts drafted** |
| **SC** | SC_MASTER_ACTIVE / FROZEN | v5.14 / v5.3 | Privacy-link fix committed, unpushed |
| **WN** | WN_MASTER_ACTIVE / FROZEN | v1.2 / v1.1 | |
| **Capstone** | WL_MASTER_ACTIVE / FROZEN | v2.4 / — | **"WL" = WeightLifting, NOT White Label** |

### 🆕 Brand-site deploy state (July 28, 2026)

| Site | Git vs production | Auto-deploy |
|---|---|---|
| **profpeptide.com** | ✅ In sync | ✅ Push to main = deploy |
| **hybridrockstar.app** | ✅ **Closed Jul 28** — 3 live assets (`app-icon.png`, `promo-card.png`, `vercel.json`) existed only locally; now committed. Tree clean, `origin/main` verified as a valid deploy source reference-by-reference | 🟡 **Connect in flight** |
| **strengthcycle.app** | ❓ **UNCHECKED** — same CLI pattern | ❌ Not connected |
| **weightliftingnation.com** | ❓ **UNCHECKED** — same CLI pattern | ❌ Not connected |

**Before connecting SC or WN:** run the same check — `git status`, then verify every asset referenced by the site's HTML/config resolves to a tracked file. **Connecting a site whose main is missing live assets deploys the gap straight to production.**

**Also noted:** `og-image.png` in the HR site repo is tracked but referenced by nothing (superseded by `promo-card.png`). Harmless; fold into whatever touches that repo next.

---

## 6) HYGIENE RULES

1. **Version in the filename; current version in this index.**
2. **Successors declare what they supersede.**
3. **Negative findings are findings.**
4. **Docs describing live state go stale fastest.** Regenerate from the artifact; date the claim where you can't.
5. **Update this index — and §3 — whenever anything moves.**
6. **Frozen snapshots are deliberate archives.**
7. **Reissue this index in the same batch as any doc it references.**
8. **Section pointers die with versions.**
9. **Counts in docs are claims, not facts.** "Four expired dates" survived three versions; the real number was 21.
10. **Distinguish *fixed* from *made-safe*.**
11. **A dashboard field is an observation, not a diagnosis.** Check the observation date next to the observed value; use a known-good control to separate a defect from a reporting artefact.
12. **Diagnose the pipeline, not just the code.** Repo state, deploy state, and crawl state each lied alone.
13. **Read the whole report before sampling.** Ask for the population first, the sample second.
14. **An exclusion is not automatically a defect.** Classify before counting.
15. **🆕 Check the last-crawl date before opening an investigation.** Four GSC findings were investigated on July 28 and **all four were already fixed** — two of them months earlier. The date field was visible in every case and would have closed each one in seconds.
16. **🆕 The doc holds rules; the repo holds state.** Where a doc must record state, it carries a date and a commit hash. Four stale items in HR_SOCIAL v12 shared exactly this cause.

---

## 📅 Changelog

**v7 (July 28, 2026):** 🔴 **Crawl frequency diagnosed as the underlying constraint** — all four GSC findings already fixed in deployed code, gaps up to three months; table added. **#36, #37, #39 CLOSED as stale crawl, zero code changes.** **#35 narrowed to 32 real content pages** — 19 of 53 supplements (36%) declined, crawled Jul 22–25 so staleness does not apply; the 10 declined peptide pages are almost all blends, which the roadmap plans to expand. **#13d rescoped** — breadcrumbs on 19 URLs total, zero on coupons/prices/supplements/guides; absent sitewide, not missing on two routes. **#1 and M1 elevated as levers on crawl authority.** **#40 dead-link guard commissioned.** GSC do-not-do table added. HR site git-vs-production divergence closed; **SC and WN flagged unchecked**. SCS_MP flagged for a deploy-pattern rule. HR_SOCIAL v13 recorded. Hygiene rules 15 and 16.

**v6:** Property-wide GSC audit. Phase 0 sized at 8 pages. Validation-state table. Hygiene 13, 14.
**v5:** Phase 0 closed — no code fix required. Hygiene 11, 12.
**v4:** Schema / freshness / check-script session. Schema-decisions table. Hygiene 9, 10.
**v3:** PP_SEO v20 → v21; Phase 0 added. Hygiene 7, 8.
**v2:** PP front-loaded; implementation tracker added.
**v1:** Created.

---

*~201 files, ~30 live docs. §3 is the board. **The constraint is crawl authority. The work is #35, and the levers are #1 and M1.***
