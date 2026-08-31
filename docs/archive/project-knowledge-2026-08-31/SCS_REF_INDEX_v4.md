# SCS Ref Doc Index — v4

**Date:** July 28, 2026
**Status:** ACTIVE — the map of every reference doc, **PP-first**. **Supersedes v3.**
**v4 changes:** records the **schema / freshness / check-script session** (2 new commits, 5 ahead total) · **8b closed** — `priceValidUntil` now derived, with a stated approximation · expired-date count **corrected from 4 to 21** · **P0-1 status corrected — the recon was never run** · P0-1 scope widened to cover the new coupon metadata helper · four new tracked items (meta-description over-length, two 403 vendors, breadcrumbs on coupons/prices, GitHub Action) · **schema-type assessments recorded as decisions** so they aren't re-litigated.

> ⚠️ **THE PROBLEM THIS SOLVES.** The project holds ~201 markdown files; ~30 are current. Superseded versions stay searchable and don't announce themselves. **Check here first.**
>
> **Postscript, carried and reinforced.** v2 was stale within a day. v3 was stale within hours — a single CC session closed one tracked item, corrected a count by 5×, and produced four new ones. **The tracker is only as good as its last reissue. Reissue it at the end of any session that ships code.**

---

## 1) 🔴 READ-FIRST AT SESSION START

| Order | Doc |
|---|---|
| 1 | **SCS_MP v6.16 + v6.19 ADDENDUM** — RULE #0, execution model, prompt discipline, cross-cutting rules |
| 2 | **This index** — which version of everything is current |
| 3 | The master doc for the workstream in play (§2) |

**RULE #0 governs all: verify before asserting.** Corollary — *a doc records what was believed at a moment, and belief moves faster than versioning.* **Verify current state against the artifact** (the repo, ASC, the live site) before acting on any doc's claim about present state.

> **🆕 CC session-restart behaviour (learned July 28).** After an auth failure and a Claude Desktop restart, a fresh CC session **resumed its prior task from the git state** rather than waiting for direction — and shipped two commits of Phase 1 work while a Phase 0 recon sat unsent. **The first message to a restarted CC session must redirect it explicitly**, or it will re-enter whatever it was last doing.

---

## 2) 🧪 PROF. PEPTIDE — 118 files, 12 live docs

### 2a) Strategy and content

| Doc | Current | Covers |
|---|---|---|
| **PP_MASTER** | **v15 + ADDENDUM v4** | Portfolio state, site structure, editorial rules, spot-check routine |
| **PP_SEO** | **v21** ⚠️ *partially superseded by this index's §3 — see note* | ⭐ **P0 canonical defect (§P0) — gates everything** · three-part core diagnosis · full audit (E-E-A-T, backlinks, templated similarity, freshness, Core Web Vitals, schema) · daily verification design · competitive analysis (PeptideStack) · **corrected phase sequence (§5)** · metrics log (§6) |
| **PP_SEO_LEDGER** | **v3** | Operational per-URL tracker. **Read alongside PP_SEO, not instead of it** |
| **PP_VENDOR_PAGES** | **v4** | ⭐ Coupon-page structure · **product-card spec** · Amino Club pilot · **five-phase build sequence** · density ceiling · internal first-mention linking (LOCKED) |
| **PP_SITE_DESIGN** | **v3 ADDENDUM** | Palette, templates, rich-template rollout |
| **PP_X_POSTS** | **v46 + ADDENDUM (sale posts)** | 4-post anatomy · research standard · **time-limited sale pattern** · `/coupons` hub card · **X card mechanics** (validator dead; `?v=` is the only cache-buster) |

> ⚠️ **PP_SEO v21 is stale in two places** and needs an addendum: its schema-gaps table lists `priceValidUntil` as open (now closed, see 8b) and states the expired count as four (actually 21). **Until that addendum exists, §3 of this index is authoritative on schema state.**

### 2b) Prices and data

| Doc | Current | Covers |
|---|---|---|
| **PP_PRICES** | **v2** | ⭐ Section architecture · **sale-vs-coupon rule (LOCKED)** · editorial scope exclusions · coded-vendor decodes · design decisions · refresh mechanics · known fragilities |
| **PP_PRICE_DATA_MASTER** | **v1** | The data itself — the source the transform reads. Regenerated each pull |
| **PP_PRICE_COMPARISON_PLAN** | v5 | ⚠️ Largely superseded by PP_PRICES v2. Historical planning only |

### 2c) Vendors and revenue

| Doc | Current | Covers |
|---|---|---|
| **PP_VENDOR_PROSPECTING** | **v19** | ⭐ **LIVE ROSTER — §1, check before suggesting any vendor** · GoAffPro status · three-stage pipeline (applied → approved → **code received** → live) · dead channels · prospects |
| **PP_COMMISSIONS** | **v4** | Commission tracking, AffiliateWP findings, the code-is-the-asset thesis |
| **PP_COMMISSIONS_dashboard_urls** | — | Dashboard links |

### 2d) App and specialist

| Doc | Current | Covers |
|---|---|---|
| **PP_APP_REDESIGN** | v3 | iOS app redesign |
| **PP_APP_THEME_SPEC** | v1 | App theme tokens |
| **PP_BIOREGULATORS** | v1 | Bioregulator content rules |

### ❌ Retired
**PP_INDEXING** (v18–v23) — renamed to **PP_SEO** at v1. Do not read.
**PP_SEO v20 and earlier** — superseded by v21. v20's section numbering does **not** map to v21; do not follow a v20 section pointer.

### 📌 PP task → doc

| Task | Read |
|---|---|
| **Anything touching indexability / canonicals** | **PP_SEO v21 §P0** — gates all other SEO work |
| SEO / rankings / content strategy | **PP_SEO v21** (§1 diagnosis, §2 audit, §5 sequence) + **PP_SEO_LEDGER v3** |
| **Schema — current state** | **§3 of this index** (PP_SEO v21's schema table is stale) |
| Building or editing a vendor coupon page | **PP_VENDOR_PAGES v4** + PP_SITE_DESIGN |
| Anything touching `/prices` or the price pull | **PP_PRICES v2** + PP_PRICE_DATA_MASTER |
| Applying to a vendor / affiliate status | **PP_VENDOR_PROSPECTING v19** — roster is §1 |
| Writing X posts | **PP_X_POSTS v46 + sale addendum** |
| GSC indexing run | **PP_SEO v21 §1** — indexing is *not* the bottleneck; new pages picked up in ~24h via sitemap. Manual requests only for URLs GSC reports as genuinely unknown. See also §P0 |
| Any CC / CINC / CD prompt | **SCS_MP v6.19** |

---

## 3) 🆕 PP IMPLEMENTATION TRACKER

**Why this exists:** a great deal has been researched and planned; the risk is that plans sit in docs and never ship. This is the single place to see what's outstanding. **Update it whenever an item moves.**

> ⚠️ **Numbering note.** This tracker's item numbers are **not** PP_SEO v21 §5's item numbers. Two independent sequences exist over overlapping work. Always name the source — "tracker #9" or "PP_SEO v21 §5 item 18". Reconciling them would break every existing cross-reference; do it deliberately or not at all.

### 📦 PARKED — 5 commits ahead of origin, unpushed

| Commits | What | Status |
|---|---|---|
| `b718da0`, `6b4b2b5`, `d0a5fa0` | Amino Club product-card pilot — price-pull slug capture, card grid, `/prices` row pattern (32 rows) | 🟡 Awaiting review |
| ×2 (July 28) | `check:vendors` script + generated stamp; `coupon-page.ts` helper + 32 coupon layouts refactored + `amino-x` layout created | 🟡 Awaiting review |

Also parked: **`lockup-parked` branch** (`Pr`/`Pe` tile lockup, wired into nothing) · **`/public/logo-mark.png`** (header glasses mark, unreferenced) · untracked `public/_preview/` · **SC repo** privacy-link fix, unpushed.

### 🔴 Phase 0 — Indexability (blocks every other phase)

**Source: PP_SEO v21 §P0.** Google is assigning `https://www.747live.bet/` as the Google-selected canonical for PP pages that declare no self-referencing canonical. Affected pages are effectively deindexed — page loss, not a ranking problem. Two of fourteen sampled pages confirmed; **the true count is unknown until P0-1 completes.**

| # | Item | Doc | Status |
|---|---|---|---|
| **P0-1** | **Recon** — which routes declare a self-canonical; how canonicals are produced here; any `747live.bet` reference, cross-domain canonical, off-domain hreflang, or injected head markup. **Scope widened July 28:** must also report whether `buildPageMetadata` / the new `buildCouponMetadata` emit `alternates.canonical`, and what the 32 rewritten coupon layouts now declare | PP_SEO v21 §P0 | ⬜ **NOT RUN — prompt written, never sent.** v3 recorded this as in flight; that was wrong. CC resumed Phase 1 work after restart instead |
| **P0-2** | **Add a self-referencing canonical to every page**, extending the existing metadata pattern rather than introducing a second one. Ships regardless of root cause. **May now be a one-function change** for the coupon group if the shared helper is the single metadata path | PP_SEO v21 §P0 | ⬜ Gated on P0-1 |
| **P0-3** | **Determine the cause of the 747live.bet association** — scraping, stray markup, or compromise. Parallel to P0-2, does not block it | PP_SEO v21 §P0 | ⬜ Gated on P0-1 |
| **P0-4** | **`/methodology` "not served over HTTPS"** — reported in one GSC inspection view while other pages showed HTTPS served. Indexed, but unexplained | PP_SEO v21 §P0 | ⬜ Not started |

### Phase 1 — Fix what's broken (no new pages)

| # | Item | Doc | Status |
|---|---|---|---|
| 1 | **`sameAs` + Organization schema** — 3 social URLs already in the footer, plus `@id` publisher link. Highest-leverage entity fix; Google currently describes an unrelated podcaster on PP's brand query | PP_SEO v21 §2 | ⬜ Not started |
| 2 | **Stale "(May 2026)" titles** — `/coupons/ez-peptides`, `/particle-peptides`, `/royal-peptides` | PP_VENDOR_PAGES v4 §5 | ⬜ Not started |
| 3 | **`/coupons/amino-club`** title rewrite. *(Discount discrepancy resolved — 20% definite)* | PP_SEO v21 §5 | ⬜ Not started |
| 4 | **`/prices/glow` + `/prices/klow`** — rejected in GSC live testing. **Suspected Phase 0 symptom** (`/vendor-testing-index` showed the same rejection and is a confirmed casualty), but PP_SEO v21 still lists them as a separate render issue. **Not yet distinguished** — P0-1 covers both. Do not run a separate diagnostic first | PP_SEO v21 §P0 + §5 | 🟡 Folded into P0-1 |
| 5 | **`/prices/5-amino-1mq`** — **confirmed Phase 0 casualty.** Google-selected canonical is `747live.bet`; user-declared is None. Resolves with P0-2 | PP_SEO v21 §P0 | 🟡 Superseded by P0-2 |
| 6 | **Search index rebuild** — hand-maintained, covers **27 of 62 peptides and ZERO price pages** | PP_SEO v21 §5 | ⬜ Not started |
| 7 | **Hardcoded coupon codes** — 27 pages + `/best-peptide-vendors` (live Featured contradiction: Oasis on `/coupons`, Peptides.gg on Featured). **Blast radius now measured:** `PROFPEPTIDE` → 16 vendors / 40 files · `PROF10` → 8 / 24 · `PROF15` → 4 / 14 · `PROFPEPTIDE15` → 1 / 3 · `PROF20` → 1 / 3 | PP_PRICES v2 | ⬜ Not started |
| 8 | **Delete dead `WhereToBuy.tsx`** — zero renders | PP_PRICES v2 | ⬜ Not started |
| **8b** | **Expired `priceValidUntil`** | PP_SEO v21 §2 | ✅ **DONE July 28** — see below |
| **8c** | 🆕 **Coupon meta descriptions over-length** — **27 of 33 exceed ~160 chars; longest `biolongevity-labs` at 273.** Pre-existing, not caused by the verified-stamp prepend. A trim pass to ~155 would require rewriting 33 bespoke descriptions | This index | ⬜ Not started |

> **8b detail (closed).** The real count was **21 expired, not 4** — 17 at `2026-05-31`, 4 at `2026-06-30`. Every prior doc said four. Fixed structurally: `couponOffer(slug)` in `src/lib/coupon-page.ts` derives `validFrom` / `priceValidUntil` / `dateModified` from the verification stamp, with `priceValidUntil = stamp + 1 year`. No expired date is served anywhere (curl-verified). **Stated approximation:** a one-year validity is asserted, not known — these are affiliate discount codes that can change any week. Large improvement over a date four weeks past; revisit if a code churns.

### Phase 2 — Vendor product cards

| # | Item | Doc | Status |
|---|---|---|---|
| 9 | **Amino Club pilot** — compound name (linked to `/peptides/[slug]`) · sizes · price · stock · shop link. **No images in v1** | PP_VENDOR_PAGES v4 §3–4 | 🟡 **BUILT — 3 commits parked, unpushed, awaiting review** |
| 10 | Review pilot → decide rollout to remaining vendors | PP_VENDOR_PAGES v4 §4 | ⬜ Gated on #9 |
| 11 | *(If images wanted)* capture image URLs + per-product deep links on a re-pull | PP_VENDOR_PAGES v4 §3 | ⬜ Optional |

### Phase 3 — Freshness, authorship, internal linking

| # | Item | Doc | Status |
|---|---|---|---|
| 12 | **`check:vendors` script** — hits every active affiliate URL, classifies **OK / BLOCKED / DEAD**, writes a machine timestamp the site renders | PP_SEO v21 §3 | ✅ **DONE July 28** — see below |
| **12b** | 🆕 **GitHub Action for the daily run** — the script exists but nothing schedules it. CC cannot run on a schedule; CI can. Should open an issue on failure | PP_SEO v21 §3 | ⬜ **Not started — the script is manual until this lands** |
| **12c** | 🆕 **Two vendors returned HTTP 403** — `peptides-gg`, `purerawz`. Almost certainly Cloudflare/WAF bot-blocking rather than dead links, but **inconclusive by construction**. Needs a human browser check that the affiliate params still land | This index | 🟡 **Mark to eyeball** |
| 13 | **Internal-link block** on vendor pages — the PeptideStack footer pattern | PP_VENDOR_PAGES v4 §6 | ⬜ Not started |
| 13b | **Editorial-staff byline + `author` schema + `/methodology` substance** — the E-E-A-T decision. A generic byline is weaker than a named credentialed author on YMYL; an improvement, not a solution | PP_SEO v21 §2 | ⬜ Not started |
| 13c | **`dateModified` on coupon pages** | PP_SEO v21 §2 | ✅ **DONE July 28** — derived from the stamp |
| **13d** | 🆕 **`BreadcrumbList` on `/coupons/*` and `/prices/*`** — already exists on peptides, supplements, compare, news, guides, about. Gap-fill reusing the proven pattern, **not** a sitewide build. Assessed as the single cheapest likely-visible schema win | PP_SEO v21 §2 | ⬜ **Ready — gated on Phase 0** |
| 13e | **`SoftwareApplication`** on `/calculator`; **`MobileApplication`** on `/app` | PP_SEO v21 §2 | ⬜ Not started |

> **12 detail (closed).** `npm run check:vendors`, first run July 28: **28/30 reachable, 0 dead, 2 blocked** → exit 0, stamp written. Reads `vendors.ts` by transpiling it with the `typescript` package and executing it (the file is import-free) — the same pattern the existing `.mjs` scripts use. **Fail-loud:** a DEAD link (404 / DNS / timeout) fails the run and blocks the stamp; BLOCKED is surfaced loudly but does not fail, because hard-failing on 403 would freeze the stamp permanently for Cloudflare-fronted vendors. **Not wired into `npm run build`** — builds must not depend on 30 external fetches. **Explicitly does not prove a code applies at checkout**; no cart is placed. Stated in the script output, its header, and the generated file.

### 🆕 SCHEMA DECISIONS — assessed and closed, do not re-litigate

| Type | Verdict |
|---|---|
| **BreadcrumbList on coupons/prices** | **Build it** (13d). Widely supported, hierarchy exists, pattern already proven on peptide pages |
| **The bare `Offer`** | Keep correct, **expect no rich result.** No `price` / `priceCurrency`, not nested in a Product — largely ignored. The fix removed an *actively harmful* signal (expired validity); it does not add a positive one |
| **Product / ItemList on `/prices/*`** | **Low priority.** Product rich results increasingly require Merchant Center and first-party selling; PP is an aggregator, not the seller. ItemList rarely renders |
| **`aggregateRating`** | **Skip permanently — no legitimate source.** PP collects no first-party ratings; inventing one risks a manual action |
| **FAQPage on existing accordions** | **Skip.** Google restricted FAQ rich results to authoritative government/health sites in 2023; PP isn't eligible. Markup would validate and render nothing. ⚠️ *Verify before using this as grounds to REMOVE existing markup — platform behaviour changes* |
| **Article on peptide pages** | Fine as-is. Article rich results largely limited to news/Top Stories |

### Phase 4 — FAQ hub-and-spoke

| # | Item | Doc | Status |
|---|---|---|---|
| 14 | **Recon `/faq`** — report what exists today | PP_SEO v21 §5 | ⬜ Not started |
| 15 | **Mine GSC exports** for question-shaped queries (*how/what/does/is/can/why*) — demand PP already receives impressions for with no page answering | PP_SEO v21 §5 | ⬜ Not started |
| 16 | **Build the hub** — 2–4 sentence answers, link to existing pages first. *(FAQPage schema won't render — see decisions above. Build for users, not rich results)* | PP_SEO v21 §5 | ⬜ Gated on #14–15 |

### Phase 5 — Query-shaped commercial pages

| # | Item | Doc | Status |
|---|---|---|---|
| 17 | **Validate volume** on candidate phrases before building | PP_SEO v21 §4, §5 | ⬜ Not started |
| 18 | **Vendor-alternative pages** — Core, Biotech, Verified, **Peptide Sciences (closed — demand permanently orphaned)** | PP_SEO v21 §5 | ⬜ Proposed in v14, never built |
| 19 | **Commercial-phrase pages** (5–8) — "best place to buy peptides online" etc. | PP_SEO v21 §4, §5 | ⬜ Not started |
| 20 | **Reuse the product-card component** on these pages | PP_VENDOR_PAGES v4 §6 | ⬜ Gated on #9 |

### Never measured

| # | Item | Doc | Status |
|---|---|---|---|
| M1 | **Backlink baseline** — roughly half of SEO never examined. 30 affiliate vendors are the most underused asset available; costs an email | PP_SEO v21 §2 | ⬜ Not started |
| M2 | **Core Web Vitals** — Lighthouse locally + PageSpeed field data. `/prices` compound pages carry 20+ rows | PP_SEO v21 §2 | ⬜ Not started |
| M3 | **Boilerplate-vs-unique ratio** across 30 coupon and 53 supplement pages | PP_SEO v21 §2 | ⬜ Not started |

### Ongoing / vendor pipeline

| # | Item | Doc | Status |
|---|---|---|---|
| 21 | **Chase 7 outstanding codes** — PureRx, Certified-Pep, Crush Research, Modern Research, Modern Aminos ×2, Lumera Labs. **This is the bottleneck, not page-building** | PP_VENDOR_PROSPECTING v19 §5 | 🟡 All requested, awaiting reply |
| 22 | **Apply:** LiveWell, Onyx Biolabs, GLP1 Research Lab, Licensed Peptides | PP_VENDOR_PROSPECTING v19 §6 | ⬜ Not started |
| 23 | **Check Eternal Peptides** — open since v2 | PP_VENDOR_PROSPECTING v19 §6 | ⬜ Not started |
| 24 | **Follow up or close Wolverine** — pending since July 13 | PP_VENDOR_PROSPECTING v19 §5 | ⬜ Not started |
| 25 | **Audit Peptide Sciences references** — they've closed | PP_VENDOR_PROSPECTING v19 §4 | ⬜ Not started |
| 26 | **Re-check `/prices` impressions at 4 and 8 weeks** (live July 25) | PP_SEO v21 §6 | ⬜ Due ~Aug 22 / ~Sep 19 |
| 27 | **Spot-check Sale rows** against vendor sites — 190 rows, most perishable data on the site | PP_PRICES v2 | ⬜ Not started |
| 28 | **Dated sale field** so time-limited promos auto-expire *(4-vendor price-pull onboarding done Jul 26)* | PP_PRICES v2 | ⬜ Not started |
| 29 | **Logo / favicon** — glasses favicon **LIVE**; `/icon.png` created, fixing the Organization schema's 404 logo. Header mark (`/public/logo-mark.png`) on disk, unreferenced — one-line swap when wanted. `lockup-parked` holds the `Pr`/`Pe` tile lockup | — | ✅ Favicon done · 🟡 Header held |
| 30 | **Restart news publishing** — stopped in June. A stale news section is its own negative signal. Per-compound "further reading" only; the same article on all 62 profiles is boilerplate | PP_SEO v21 §2, §5 | ⬜ Not started |
| **31** | 🆕 **`CODES_VERIFIED_DATE` manual constant** — a hand-maintained `"July 2026"` string predating the script. The generated stamp should supersede it; confirm nothing still reads the manual one | This index | ⬜ Not started |

**Legend:** ⬜ not started · 🟡 in progress or gated · ✅ done

---

## 4) 🏛️ STUDIO-LEVEL

| Doc | Current | Covers |
|---|---|---|
| **SCS_MP** | **v6.16 + v6.19 ADDENDUM** | RULE #0 · execution model (CC owns build + all terminal commands; Claude instructs and asks before drafting) · prompt discipline · GSC quota rule · EAS signing rule · X card mechanics · recurring failure patterns |
| **PROJECT_INSTRUCTIONS** | **v3** | Rules only, no state. Numbered responses · `load [workstream]` · answer directly · surface don't just mention · verify external facts · fix what was reported · open with state |
| **SCS_REF_INDEX** | **v4** *(this doc)* | The map + PP implementation tracker |

Superseded addendums: v6.15, v6.16, v6.17, v6.18. **v6.19 supersedes v6.17 and v6.18 entirely.**

---

## 5) OTHER PROPERTIES

| Property | Doc | Current | Notes |
|---|---|---|---|
| **HR** | **HR_MASTER** | **v14** | v1.0.3 through Beta App Review, TestFlight live to 10 testers · **monetization = freemium (v13 was wrong)** · rulebook corrections · EAS/HealthKit learnings · v1.0.4 scope |
| HR | **HR_SOCIAL** | **v12** | Carousel + reel prompt rules. Templates read from GitHub, never from chat |
| HR | HR_PROGRAM_EXPORT | — | ⚠️ Ad-hoc transcription, no generator, not in the repo. Every carousel and reel is built from it. Verify against `hr-cycle-1.json` |
| HR | ~~HR_INSTAGRAM~~ | — | ❌ Superseded by HR_SOCIAL |
| **SC** | SC_MASTER_ACTIVE / FROZEN | v5.14 / v5.3 | Privacy-link fix committed, unpushed — ships with next release |
| SC | SC_FORM_CUES_EXPORT | — | Source for HR carousel form slides |
| **WN** | WN_MASTER_ACTIVE / FROZEN | v1.2 / v1.1 | |
| WN | WN_Russia_Methodology_Spec | v3 | |
| WN | WN_PHASE_1A_COMPETITIVE_BRIEF | — | |
| **Capstone** | WL_MASTER_ACTIVE / FROZEN | v2.4 / — | **"WL" = WeightLifting, NOT White Label** |
| Capstone | Capstone_Brand_Assets_Spec | v1 | |
| Capstone | CAPSTONE_COMPETITIVE_HANDOFF | — | |

---

## 6) HYGIENE RULES

1. **Version in the filename; current version in this index.** A doc without an index entry is new or dead.
2. **Successors declare what they supersede** in their header.
3. **Negative findings are findings — write them down.** The schema-decisions table above exists for this reason: six schema types were assessed and five rejected. Without recording the rejections they get re-proposed every quarter.
4. **Docs describing live state go stale fastest.** Rosters, snapshots, version numbers, counts. Regenerate from the artifact where possible; date the claim where not.
5. **Update this index — and the §3 tracker — whenever anything moves.**
6. **Frozen snapshots are deliberate archives, not stale versions.**
7. **Reissue this index in the same batch as any doc it references.**
8. **Section pointers die with versions.** Re-verify every `§` reference on reissue.
9. **🆕 Counts in docs are claims, not facts.** "Four expired dates" survived three doc versions; the real number was 21. When a count can be derived from the repo, derive it and record the derivation date rather than copying it forward.
10. **🆕 Distinguish *fixed* from *made-safe*.** `priceValidUntil` is no longer expired, but the one-year validity it now asserts is an approximation, not knowledge. Record the approximation with the fix, or the next reader treats it as verified.

---

## 📅 Changelog

**v4 (July 28, 2026):** Records the schema / freshness / check-script session — 2 commits, **5 ahead total**. **8b closed** (`priceValidUntil` derived from the verification stamp; expired count corrected 4 → **21**, with the one-year validity flagged as a stated approximation). **12 closed** (`check:vendors` shipped: 28/30 OK, 0 dead, 2 blocked). **13c closed** (`dateModified`). **P0-1 status corrected — the recon was never run**; v3 recorded it as in flight, which was wrong, and CC resumed Phase 1 work after the auth-failure restart instead. P0-1 scope widened to cover `buildPageMetadata` / `buildCouponMetadata` canonical emission and the 32 rewritten coupon layouts. New items: **8c** meta-description over-length (27 of 33 over ~160; longest 273), **12b** GitHub Action, **12c** two 403 vendors needing a human browser check, **13d** BreadcrumbList gap-fill, **31** the legacy `CODES_VERIFIED_DATE` constant. **Schema-decisions table added** — six types assessed, five closed. Code blast radius recorded on #7. CC session-restart behaviour noted in §1. Hygiene rules 9 and 10 added.

**v3 (July 28, 2026):** PP_SEO v20 → v21 throughout with re-verified section pointers; Phase 0 added; items #4 and #5 re-pointed as canonical-defect symptoms; stale statuses on #9 and #29 corrected; numbering-collision warning; hygiene rules 7 and 8.

**v2 (July 27, 2026):** PP front-loaded; implementation tracker added (§3).

**v1 (July 27, 2026):** Created. 201 files indexed; retired docs marked; task-to-doc mapping; hygiene rules.

---

*~201 files, ~30 live docs. §3 is the board: if it isn't tracked there, it won't ship. **Phase 0 gates everything — and it still hasn't run.***
