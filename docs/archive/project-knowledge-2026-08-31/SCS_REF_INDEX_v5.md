# SCS Ref Doc Index — v5

**Date:** July 28, 2026
**Status:** ACTIVE — the map of every reference doc, **PP-first**. **Supersedes v4.**
**v5 changes:** **🟢 PHASE 0 CLOSED** — the canonical defect was not a code defect; live HTML on all four inspected pages carries a correct self-canonical and no `747` string. P0-1 through P0-4 all resolved, none requiring a commit · **`/coupons/amino-club` was never affected** — it is indexed and healthy; the earlier reading was wrong · **`/vendor-testing-index` is deliberately `noindex`** (page incomplete — Mark, July 28), which removes it from the defect set entirely · the real affected count from the sample is **one page, not three** · Phase 1 unblocked, `sameAs` elevated to next action · four new tracked items · two hygiene rules added.

> ⚠️ **THE PROBLEM THIS SOLVES.** ~201 markdown files; ~30 current. Superseded versions stay searchable and don't announce themselves. **Check here first.**
>
> **Postscript.** v2 was stale in a day, v3 in hours, v4 in a single afternoon. **Reissue at the end of any session that ships code or resolves an open question.**

---

## 1) 🔴 READ-FIRST AT SESSION START

| Order | Doc |
|---|---|
| 1 | **SCS_MP v6.16 + v6.19 ADDENDUM** — RULE #0, execution model, prompt discipline |
| 2 | **This index** — which version of everything is current |
| 3 | The master doc for the workstream in play (§2) |

**RULE #0 governs all: verify before asserting.** Corollary — *a doc records what was believed at a moment, and belief moves faster than versioning.* **Verify current state against the artifact.**

> **CC session-restart behaviour (July 28).** After an auth failure and a Claude Desktop restart, a fresh CC session **resumed its prior task from git state** rather than waiting for direction, and shipped two commits of Phase 1 work while a Phase 0 recon sat unsent. **The first message to a restarted CC session must redirect it explicitly.**

> **🆕 Commit date ≠ deploy date (July 28).** CC dated the canonical mechanism to a May 11 commit and concluded canonicals had been served for ten weeks. Google's crawl records contradict it: every page crawled before ~July 26 shows no user-declared canonical; the one crawled July 28 shows it present. **Because CC parks commits until Mark approves a push, authored-in-May routinely means deployed-in-July.** When commit metadata and the served artifact disagree, **the artifact wins** — and a crawl record is an artifact observation.

---

## 2) 🧪 PROF. PEPTIDE — 118 files, 12 live docs

### 2a) Strategy and content

| Doc | Current | Covers |
|---|---|---|
| **PP_MASTER** | **v15 + ADDENDUM v4** | Portfolio state, site structure, editorial rules, spot-check routine |
| **PP_SEO** | **v21** ⚠️ *§P0 now superseded — see §3 of this index* | Three-part core diagnosis · full audit (E-E-A-T, backlinks, templated similarity, freshness, CWV, schema) · daily verification design · competitive analysis (PeptideStack) · phase sequence (§5) · metrics log (§6) |
| **PP_SEO_LEDGER** | **v3** | Operational per-URL tracker. Read alongside PP_SEO, not instead of it |
| **PP_VENDOR_PAGES** | **v4** | Coupon-page structure · product-card spec · Amino Club pilot · five-phase build sequence · density ceiling · internal first-mention linking (LOCKED) |
| **PP_SITE_DESIGN** | **v3 ADDENDUM** | Palette, templates, rich-template rollout |
| **PP_X_POSTS** | **v46 + ADDENDUM (sale posts)** | 4-post anatomy · research standard · time-limited sale pattern · `/coupons` hub card · X card mechanics |

> ⚠️ **PP_SEO v21 is stale in three places** and needs a v22: **§P0 is resolved and its premise was wrong** (see §3 below); its schema-gaps table lists `priceValidUntil` as open (closed July 28); and it states the expired-date count as four (actually 21). **Until v22 exists, §3 of this index is authoritative on both schema state and Phase 0.**

### 2b) Prices and data

| Doc | Current | Covers |
|---|---|---|
| **PP_PRICES** | **v2** | Section architecture · sale-vs-coupon rule (LOCKED) · editorial scope exclusions · coded-vendor decodes · design decisions · refresh mechanics · known fragilities |
| **PP_PRICE_DATA_MASTER** | **v1** | The data itself. Regenerated each pull |
| **PP_PRICE_COMPARISON_PLAN** | v5 | ⚠️ Largely superseded by PP_PRICES v2. Historical only |

### 2c) Vendors and revenue

| Doc | Current | Covers |
|---|---|---|
| **PP_VENDOR_PROSPECTING** | **v19** | **LIVE ROSTER — §1, check before suggesting any vendor** · GoAffPro status · three-stage pipeline · dead channels · prospects |
| **PP_COMMISSIONS** | **v4** | Commission tracking, AffiliateWP findings, code-is-the-asset thesis |
| **PP_COMMISSIONS_dashboard_urls** | — | Dashboard links |

### 2d) App and specialist

| Doc | Current | Covers |
|---|---|---|
| **PP_APP_REDESIGN** | v3 | iOS app redesign |
| **PP_APP_THEME_SPEC** | v1 | App theme tokens |
| **PP_BIOREGULATORS** | v1 | Bioregulator content rules |

### ❌ Retired
**PP_INDEXING** (v18–v23) — renamed to **PP_SEO** at v1. Do not read.
**PP_SEO v20 and earlier** — superseded by v21; v20 section numbers do not map to v21.

### 📌 PP task → doc

| Task | Read |
|---|---|
| **Canonicals / indexability** | **§3 Phase 0 of this index** — PP_SEO v21 §P0 is superseded and its premise was wrong |
| **Schema — current state** | **§3 of this index** (PP_SEO v21's schema table is stale) |
| SEO / rankings / content strategy | **PP_SEO v21** §1, §2, §5 + **PP_SEO_LEDGER v3** |
| Building or editing a vendor coupon page | **PP_VENDOR_PAGES v4** + PP_SITE_DESIGN |
| Anything touching `/prices` or the price pull | **PP_PRICES v2** + PP_PRICE_DATA_MASTER |
| Applying to a vendor / affiliate status | **PP_VENDOR_PROSPECTING v19** — roster is §1 |
| Writing X posts | **PP_X_POSTS v46 + sale addendum** |
| Any CC / CINC / CD prompt | **SCS_MP v6.19** |

---

## 3) 🆕 PP IMPLEMENTATION TRACKER

> ⚠️ **Numbering note.** This tracker's numbers are **not** PP_SEO v21 §5's numbers. Always name the source — "tracker #9" or "PP_SEO v21 §5 item 18".

### 📦 PARKED — 5 commits ahead of origin, unpushed

| Commits | What | Status |
|---|---|---|
| `b718da0`, `6b4b2b5`, `d0a5fa0` | Amino Club product-card pilot — price-pull slug capture, card grid, `/prices` row pattern | 🟡 Awaiting review |
| ×2 (Jul 28) | `check:vendors` script + stamp; `coupon-page.ts` helper + 32 coupon layouts refactored + `amino-x` layout created | 🟡 Awaiting review |

Also parked: **`lockup-parked`** branch · **`/public/logo-mark.png`** · untracked `public/_preview/` · **SC repo** privacy-link fix.

### 🟢 Phase 0 — CLOSED July 28. No code fix was required.

**What was believed:** Google was assigning `https://www.747live.bet/` as canonical to PP pages lacking a self-referencing canonical, effectively deindexing them; three of fourteen sampled pages affected; a sitewide canonical fix was needed and gated all other SEO work.

**What the evidence showed.** CC repo recon plus GSC URL Inspection (Pass A indexed record + Pass B live test) on four URLs, one a deliberate control:

| Page | Last crawl | Pass A canonical | Live HTML canonical | Verdict |
|---|---|---|---|---|
| `/methodology` *(control)* | **Jul 28** | ✅ present | ✅ present | Indexed, healthy |
| `/coupons/amino-club` | Jul 25 | None | ✅ present | **Indexed. Never affected** |
| `/prices/5-amino-1mq` | Jul 26 | None | ✅ present | Stale crawl only |
| `/vendor-testing-index` | **Jul 1** | None | ✅ present | **Deliberately `noindex`** |

**Findings:**
1. **Live production HTML carries a correct self-referencing canonical on all four pages**, and the string `747` appears in none of them. There was never a canonical to add.
2. **The dividing line is the crawl date, not the page.** Every page crawled before ~Jul 26 shows no user-declared canonical; the one crawled Jul 28 shows it. The canonical began being served in production in the last week — **not in May**, as the commit date suggested. See the hygiene note in §1.
3. **`/coupons/amino-club` was never affected.** Indexed, Google-selected canonical = Inspected URL. It was recorded as a casualty on the strength of the Pass-A "None" field alone. **Real affected count from the sample: one, not three.**
4. **`/vendor-testing-index` serves `noindex, follow` — deliberately.** The page is incomplete (Mark, Jul 28). It cannot be indexed by design and is removed from the defect set. See #32.
5. **`747live.bet` has no origin in the codebase or the served HTML.** It is a Philippine online-casino brand running a large multi-domain SEO spam network (`747livee.com`, `747liveph.dev`, `747casino.uk.com`, `www-747live.ph`, `747live.org`, plus seeded profile spam across GitLab, MyAnimeList, Habr, StackShare, Behance, Issuu). Google mis-clustered two PP pages into it — both of which were noindexed or staleley crawled at the time. **The countermeasure is entity strength, not code — see #1.**
6. **`/prices/glow` and `/prices/klow` are 404s**, not canonical omissions — zero rows in the price dataset. Neither is linked internally nor in the sitemap, so Google discovered them externally. See #33.
7. **P0-4 (`/methodology` "not served over HTTPS") did not reproduce.** Crawled Jul 28, page fetch successful, indexed. Closing as a one-off reporting artefact; reopen if seen again.

**Cost and verdict:** roughly half a session. The right trade — the alternative was building Phase 1 schema onto pages believed deindexed. **Nothing downstream was nullified. Phase 1 is unblocked.**

| # | Item | Status |
|---|---|---|
| P0-1 | Repo recon | ✅ Done — canonicals declared everywhere except 2 prototype pages |
| P0-2 | Add self-canonicals sitewide | ✅ **Closed — no action needed.** Already served |
| P0-3 | Determine 747live cause | ✅ **Closed — external.** Google-side cluster misfire; countermeasure is #1 |
| P0-4 | `/methodology` HTTPS anomaly | ✅ Closed — did not reproduce |

### Phase 1 — UNBLOCKED

| # | Item | Doc | Status |
|---|---|---|---|
| **1** | **`sameAs` + Organization schema** — 3 social URLs already in the footer, plus `@id` publisher link. **Now the direct countermeasure to the 747live cluster misfire, not just the cheapest win.** Google currently describes an unrelated podcaster on PP's brand query | PP_SEO v21 §2 | ⬜ **NEXT** |
| 2 | **Stale "(May 2026)" titles** — `/coupons/ez-peptides`, `/particle-peptides`, `/royal-peptides` | PP_VENDOR_PAGES v4 §5 | ⬜ Not started |
| 3 | **`/coupons/amino-club`** title rewrite *(page confirmed healthy and indexed — this is a title improvement, not a fix)* | PP_SEO v21 §5 | ⬜ Not started |
| 4 | **`/prices/glow` + `/prices/klow`** — resolved as 404s, not canonical omissions | — | ✅ Closed → see #33 |
| 5 | **`/prices/5-amino-1mq`** — canonical correct in production; needs recrawl only | — | 🟡 **Request indexing (1 click)** |
| 6 | **Search index rebuild** — hand-maintained, covers **27 of 62 peptides and ZERO price pages** | PP_SEO v21 §5 | ⬜ Not started |
| 7 | **Hardcoded coupon codes** — 27 pages + `/best-peptide-vendors` (live Featured contradiction: Oasis on `/coupons`, Peptides.gg on Featured). **Blast radius measured:** `PROFPEPTIDE` → 16 vendors / 40 files · `PROF10` → 8 / 24 · `PROF15` → 4 / 14 · `PROFPEPTIDE15` → 1 / 3 · `PROF20` → 1 / 3 | PP_PRICES v2 | ⬜ Not started |
| 8 | **Delete dead `WhereToBuy.tsx`** — zero renders | PP_PRICES v2 | ⬜ Not started |
| 8b | **Expired `priceValidUntil`** | — | ✅ **DONE Jul 28** — see below |
| 8c | **Coupon meta descriptions over-length** — 27 of 33 exceed ~160 chars; longest `biolongevity-labs` at 273. Pre-existing | This index | ⬜ Not started |
| **8d** | 🆕 **`/prototype/logo` + `/prototype/profile` declare no canonical** — the only genuine coverage gaps CC found. Unlinked prototype pages; trivial, but they should either get a canonical or a `noindex` | This index | ⬜ Not started |

> **8b detail (closed).** Real count was **21 expired, not 4** — 17 at `2026-05-31`, 4 at `2026-06-30`. Fixed structurally: `couponOffer(slug)` derives `validFrom` / `priceValidUntil` / `dateModified` from the verification stamp, `priceValidUntil = stamp + 1 year`. No expired date served anywhere (curl-verified). **Stated approximation:** one-year validity is asserted, not known — affiliate codes can change any week. Revisit if a code churns.

### Phase 2 — Vendor product cards

| # | Item | Doc | Status |
|---|---|---|---|
| 9 | **Amino Club pilot** — compound name (linked) · sizes · price · stock · shop link. No images in v1 | PP_VENDOR_PAGES v4 §3–4 | 🟡 **BUILT — parked, awaiting review** |
| 10 | Review pilot → decide rollout | PP_VENDOR_PAGES v4 §4 | ⬜ Gated on #9 |
| 11 | *(If images wanted)* capture image URLs + per-product deep links on a re-pull | PP_VENDOR_PAGES v4 §3 | ⬜ Optional |

### Phase 3 — Freshness, authorship, internal linking

| # | Item | Doc | Status |
|---|---|---|---|
| 12 | **`check:vendors` script** — OK / BLOCKED / DEAD classification + machine timestamp | PP_SEO v21 §3 | ✅ **DONE Jul 28** — see below |
| 12b | **GitHub Action for the daily run** — the script exists but nothing schedules it. Should open an issue on failure | PP_SEO v21 §3 | ⬜ **Script is manual until this lands** |
| 12c | **Two vendors returned HTTP 403** — `peptides-gg`, `purerawz`. Almost certainly Cloudflare bot-blocking, inconclusive by construction | This index | 🟡 **Mark to eyeball in a browser** |
| 13 | **Internal-link block** on vendor pages — PeptideStack footer pattern | PP_VENDOR_PAGES v4 §6 | ⬜ Not started |
| 13b | **Editorial-staff byline + `author` schema + `/methodology` substance** — a generic byline is weaker than a named credentialed author on YMYL; an improvement, not a solution | PP_SEO v21 §2 | ⬜ Not started |
| 13c | **`dateModified` on coupon pages** | — | ✅ **DONE Jul 28** |
| 13d | **`BreadcrumbList` on `/coupons/*` and `/prices/*`** — exists on peptides, supplements, compare, news, guides, about. Gap-fill reusing the proven pattern. Cheapest likely-visible schema win | PP_SEO v21 §2 | ⬜ **Ready — gate lifted** |
| 13e | **`SoftwareApplication`** on `/calculator`; **`MobileApplication`** on `/app` | PP_SEO v21 §2 | ⬜ Not started |

> **12 detail (closed).** First run Jul 28: **28/30 reachable, 0 dead, 2 blocked** → exit 0, stamp written. Reads `vendors.ts` by transpiling with the `typescript` package and executing it. **Fail-loud:** DEAD (404/DNS/timeout) fails the run and blocks the stamp; BLOCKED is surfaced but does not fail, since hard-failing on 403 would freeze the stamp permanently for Cloudflare-fronted vendors. **Not wired into `npm run build`.** **Explicitly does not prove a code applies at checkout** — no cart is placed.

### 🔵 SCHEMA DECISIONS — assessed and closed, do not re-litigate

| Type | Verdict |
|---|---|
| **BreadcrumbList on coupons/prices** | **Build it** (13d). Widely supported, hierarchy exists, pattern proven on peptide pages |
| **The bare `Offer`** | Keep correct, **expect no rich result.** No `price`/`priceCurrency`, not nested in a Product — largely ignored. The fix removed a harmful signal; it does not add a positive one |
| **Product / ItemList on `/prices/*`** | **Low priority.** Product rich results increasingly require Merchant Center and first-party selling; PP is an aggregator |
| **`aggregateRating`** | **Skip permanently — no legitimate source.** Inventing one risks a manual action |
| **FAQPage on existing accordions** | **Skip.** Google restricted FAQ rich results to authoritative government/health sites in 2023. ⚠️ *Verify before using this as grounds to REMOVE existing markup* |
| **Article on peptide pages** | Fine as-is. Article rich results largely limited to news/Top Stories |

### Phase 4 — FAQ hub-and-spoke

| # | Item | Doc | Status |
|---|---|---|---|
| 14 | **Recon `/faq`** | PP_SEO v21 §5 | ⬜ Not started |
| 15 | **Mine GSC exports** for question-shaped queries — demand PP already gets impressions for with no page answering | PP_SEO v21 §5 | ⬜ Not started |
| 16 | **Build the hub** — 2–4 sentence answers, link existing pages first. *(FAQPage schema won't render — build for users)* | PP_SEO v21 §5 | ⬜ Gated on #14–15 |

### Phase 5 — Query-shaped commercial pages

| # | Item | Doc | Status |
|---|---|---|---|
| 17 | **Validate volume** before building | PP_SEO v21 §4, §5 | ⬜ Not started |
| 18 | **Vendor-alternative pages** — Core, Biotech, Verified, **Peptide Sciences (closed — demand orphaned)** | PP_SEO v21 §5 | ⬜ Never built |
| 19 | **Commercial-phrase pages** (5–8) | PP_SEO v21 §4, §5 | ⬜ Not started |
| 20 | **Reuse the product-card component** | PP_VENDOR_PAGES v4 §6 | ⬜ Gated on #9 |

### Never measured

| # | Item | Doc | Status |
|---|---|---|---|
| M1 | **Backlink baseline** — roughly half of SEO never examined. 30 affiliate vendors are the most underused asset available; costs an email. **Also relevant to the entity problem in #1** | PP_SEO v21 §2 | ⬜ Not started |
| M2 | **Core Web Vitals** — Lighthouse + PageSpeed field data. `/prices` compound pages carry 20+ rows | PP_SEO v21 §2 | ⬜ Not started |
| M3 | **Boilerplate-vs-unique ratio** across 30 coupon and 53 supplement pages | PP_SEO v21 §2 | ⬜ Not started |

### Ongoing / vendor pipeline

| # | Item | Doc | Status |
|---|---|---|---|
| 21 | **Chase 7 outstanding codes** — PureRx, Certified-Pep, Crush Research, Modern Research, Modern Aminos ×2, Lumera Labs. **The bottleneck, not page-building** | PP_VENDOR_PROSPECTING v19 §5 | 🟡 Awaiting reply |
| 22 | **Apply:** LiveWell, Onyx Biolabs, GLP1 Research Lab, Licensed Peptides | v19 §6 | ⬜ Not started |
| 23 | **Check Eternal Peptides** | v19 §6 | ⬜ Not started |
| 24 | **Follow up or close Wolverine** — pending since Jul 13 | v19 §5 | ⬜ Not started |
| 25 | **Audit Peptide Sciences references** — they've closed | v19 §4 | ⬜ Not started |
| 26 | **Re-check `/prices` impressions at 4 and 8 weeks** (live Jul 25) | PP_SEO v21 §6 | ⬜ Due ~Aug 22 / ~Sep 19 |
| 27 | **Spot-check Sale rows** — 190 rows, most perishable data on the site | PP_PRICES v2 | ⬜ Not started |
| 28 | **Dated sale field** so time-limited promos auto-expire | PP_PRICES v2 | ⬜ Not started |
| 29 | **Logo / favicon** — glasses favicon LIVE; `/icon.png` created. Header mark on disk, unreferenced. `lockup-parked` holds the tile lockup | — | ✅ Favicon done · 🟡 Header held |
| 30 | **Restart news publishing** — stopped in June. Per-compound "further reading" only | PP_SEO v21 §2, §5 | ⬜ Not started |
| 31 | **`CODES_VERIFIED_DATE` manual constant** — hand-maintained `"July 2026"` string predating the script. Confirm nothing still reads it | This index | ⬜ Not started |
| **32** | 🆕 **`/vendor-testing-index` is incomplete and deliberately `noindex`** — but it is **linked from the `/coupons` hub as a trust asset** ("Compare vendor testing →"). Either finish the page and remove the noindex, or reconsider promoting an incomplete page from a high-traffic hub. **Decision needed, not a bug** | This index | ⬜ **Mark's call** |
| **33** | 🆕 **Externally-discovered non-existent URLs** — `/prices/glow` and `/prices/klow` are 404s, not linked internally, not in the sitemap. Something outside the site is generating PP URLs. Low priority, but worth knowing the source | This index | ⬜ Not started |
| **34** | 🆕 **Below-threshold `/prices/*` pages are `noindex` by design** (vendor-count gate). Expect GSC to report them as unindexed and possibly to mis-cluster them as it did with 747live. **This is expected behaviour — do not re-escalate as a defect** | This index | ℹ️ Reference |

**Legend:** ⬜ not started · 🟡 in progress or gated · ✅ done · ℹ️ reference

---

## 4) 🏛️ STUDIO-LEVEL

| Doc | Current | Covers |
|---|---|---|
| **SCS_MP** | **v6.16 + v6.19 ADDENDUM** | RULE #0 · execution model · prompt discipline · GSC quota rule · EAS signing · X card mechanics · recurring failure patterns |
| **PROJECT_INSTRUCTIONS** | **v3** | Rules only, no state |
| **SCS_REF_INDEX** | **v5** *(this doc)* | The map + PP implementation tracker |

Superseded addendums: v6.15–v6.18. **v6.19 supersedes v6.17 and v6.18 entirely.**

---

## 5) OTHER PROPERTIES

| Property | Doc | Current | Notes |
|---|---|---|---|
| **HR** | **HR_MASTER** | **v14** | v1.0.3 through Beta App Review, TestFlight to 10 testers · **monetization = freemium (v13 was wrong)** · rulebook corrections · v1.0.4 scope |
| HR | **HR_SOCIAL** | **v12** | Carousel + reel prompt rules. Templates read from GitHub, never from chat |
| HR | HR_PROGRAM_EXPORT | — | ⚠️ Ad-hoc transcription, no generator, not in the repo. Verify against `hr-cycle-1.json` |
| HR | ~~HR_INSTAGRAM~~ | — | ❌ Superseded by HR_SOCIAL |
| **SC** | SC_MASTER_ACTIVE / FROZEN | v5.14 / v5.3 | Privacy-link fix committed, unpushed |
| SC | SC_FORM_CUES_EXPORT | — | Source for HR carousel form slides |
| **WN** | WN_MASTER_ACTIVE / FROZEN | v1.2 / v1.1 | |
| WN | WN_Russia_Methodology_Spec | v3 | |
| WN | WN_PHASE_1A_COMPETITIVE_BRIEF | — | |
| **Capstone** | WL_MASTER_ACTIVE / FROZEN | v2.4 / — | **"WL" = WeightLifting, NOT White Label** |
| Capstone | Capstone_Brand_Assets_Spec | v1 | |
| Capstone | CAPSTONE_COMPETITIVE_HANDOFF | — | |

---

## 6) HYGIENE RULES

1. **Version in the filename; current version in this index.**
2. **Successors declare what they supersede.**
3. **Negative findings are findings — write them down.** The schema-decisions table exists because six types were assessed and five rejected; without the record they get re-proposed quarterly.
4. **Docs describing live state go stale fastest.** Regenerate from the artifact; date the claim where you can't.
5. **Update this index — and §3 — whenever anything moves.**
6. **Frozen snapshots are deliberate archives, not stale versions.**
7. **Reissue this index in the same batch as any doc it references.**
8. **Section pointers die with versions.** Re-verify every `§` on reissue.
9. **Counts in docs are claims, not facts.** "Four expired dates" survived three versions; the real number was 21. Derive from the repo and date the derivation.
10. **Distinguish *fixed* from *made-safe*.** `priceValidUntil` is no longer expired, but the one-year validity it asserts is an approximation.
11. **🆕 A dashboard field is an observation, not a diagnosis.** "User-declared canonical: None" was read as "the page has no canonical." It actually meant "the page had no canonical *at last crawl*." Three pages were recorded as defective; one was fine, one was deliberately noindexed, and one needed only a recrawl. **Always check the observation date next to the observed value** — and use a known-good control to tell a page-level defect from a reporting artefact.
12. **🆕 Diagnose the pipeline, not just the code.** The Phase 0 investigation only resolved once repo state, deploy state, and crawl state were compared against each other. Any one of the three alone was misleading.

---

## 📅 Changelog

**v5 (July 28, 2026):** **Phase 0 CLOSED — no code fix required.** GSC URL Inspection (Pass A + Pass B, with `/methodology` as control) confirmed live production HTML carries correct self-canonicals on all four pages and no `747` string. P0-1 done; **P0-2 closed with no action** (already served); **P0-3 closed as external** (747live is a multi-domain casino SEO spam network with no repo footprint; countermeasure is entity strength, #1); **P0-4 closed, did not reproduce.** `/coupons/amino-club` **corrected — never affected**, indexed and healthy; real affected count from the sample is **one, not three**. `/vendor-testing-index` confirmed **deliberately noindex** (incomplete page, Mark's call) and removed from the defect set → tracked as **#32** for the finish-or-unlink decision. Canonical deploy date corrected from May to the last week — **commit date ≠ deploy date** added to §1. Phase 1 unblocked; **#1 `sameAs` elevated to NEXT** as the direct countermeasure. New items **8d** (two prototype pages lacking canonical), **32**, **33** (externally-discovered 404 URLs), **34** (below-threshold `/prices` noindex is expected, do not re-escalate). Hygiene rules 11 and 12 added.

**v4 (July 28, 2026):** Recorded the schema / freshness / check-script session. 8b, 12, 13c closed. P0-1 status corrected. Schema-decisions table added. Hygiene rules 9, 10.

**v3 (July 28, 2026):** PP_SEO v20 → v21 throughout; Phase 0 added; #4 and #5 re-pointed; #9 and #29 corrected; hygiene rules 7, 8.

**v2 (July 27, 2026):** PP front-loaded; implementation tracker added (§3).

**v1 (July 27, 2026):** Created. 201 files indexed; retired docs marked; task-to-doc mapping; hygiene rules.

---

*~201 files, ~30 live docs. §3 is the board: if it isn't tracked there, it won't ship. **Phase 0 is closed — Phase 1 is live, starting with `sameAs`.***
