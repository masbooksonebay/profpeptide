# SCS Ref Doc Index — v3

**Date:** July 28, 2026
**Status:** ACTIVE — the map of every reference doc, **PP-first**. **Supersedes v2.**
**v3 changes:** every **PP_SEO v20** reference updated to **v21** with corrected section pointers · **🔴 Phase 0 added to the §3 tracker** for the canonical defect · tracker items **#4 and #5 re-pointed** as canonical-defect symptoms rather than independent diagnostics · three stale statuses corrected (#9, #29, and the PP_SEO row itself).

> ⚠️ **THE PROBLEM THIS SOLVES.** The project holds **201 markdown files**; ~30 are current. Superseded versions stay searchable and don't announce themselves. On July 27 two recommendations came from stale docs: Refersion proposed as the next discovery channel (researched and found dead — never written down), and applications proposed to Spartan and Purity Peptides (both already live vendors — the roster wasn't recorded). **Check here first.**
>
> **v3 postscript — this index is not exempt.** v2 was written July 27 and was stale within a day: it named PP_SEO v20 as current after v21 superseded it, and its §3 tracker had no row for the P0 canonical defect — the single highest-priority item on the board was absent from the board. **When a doc is reissued, reissue this index in the same batch.**

---

## 1) 🔴 READ-FIRST AT SESSION START

| Order | Doc |
|---|---|
| 1 | **SCS_MP v6.16 + v6.19 ADDENDUM** — RULE #0, execution model, prompt discipline, cross-cutting rules |
| 2 | **This index** — which version of everything is current |
| 3 | The master doc for the workstream in play (§2) |

**RULE #0 governs all: verify before asserting.** Corollary — *a doc records what was believed at a moment, and belief moves faster than versioning.* **Verify current state against the artifact** (the repo, ASC, the live site) before acting on any doc's claim about present state.

---

## 2) 🧪 PROF. PEPTIDE — 118 files, 12 live docs

### 2a) Strategy and content

| Doc | Current | Covers |
|---|---|---|
| **PP_MASTER** | **v15 + ADDENDUM v4** | Portfolio state, site structure, editorial rules, spot-check routine |
| **PP_SEO** | **v21** | ⭐ **P0 canonical defect (§P0) — gates everything** · three-part core diagnosis · full audit (E-E-A-T, backlinks, templated similarity, freshness, Core Web Vitals, schema) · daily verification design · competitive analysis (PeptideStack) · **corrected phase sequence (§5)** · metrics log (§6) |
| **PP_SEO_LEDGER** | **v3** | Operational per-URL tracker. **Read alongside PP_SEO, not instead of it** |
| **PP_VENDOR_PAGES** | **v4** | ⭐ Coupon-page structure · **product-card spec** · Amino Club pilot · **five-phase build sequence** · density ceiling · internal first-mention linking (LOCKED) |
| **PP_SITE_DESIGN** | **v3 ADDENDUM** | Palette, templates, rich-template rollout |
| **PP_X_POSTS** | **v46 + ADDENDUM (sale posts)** | 4-post anatomy · research standard · **time-limited sale pattern** · `/coupons` hub card · **X card mechanics** (validator dead; `?v=` is the only cache-buster) |

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
**PP_INDEXING** (v18–v23) — renamed to **PP_SEO** at v1. Indexing is now one section of PP_SEO. Do not read.
**PP_SEO v20 and earlier** — superseded by v21. v20's section numbering does **not** map to v21; do not follow a v20 section pointer.

### 📌 PP task → doc

| Task | Read |
|---|---|
| **Anything touching indexability / canonicals** | **PP_SEO v21 §P0** — gates all other SEO work |
| SEO / rankings / content strategy | **PP_SEO v21** (§1 diagnosis, §2 audit, §5 sequence) + **PP_SEO_LEDGER v3** |
| Building or editing a vendor coupon page | **PP_VENDOR_PAGES v4** + PP_SITE_DESIGN |
| Anything touching `/prices` or the price pull | **PP_PRICES v2** + PP_PRICE_DATA_MASTER |
| Applying to a vendor / affiliate status | **PP_VENDOR_PROSPECTING v19** — roster is §1 |
| Writing X posts | **PP_X_POSTS v46 + sale addendum** |
| GSC indexing run | **PP_SEO v21 §1** — indexing is *not* the bottleneck; new pages are picked up in ~24h via sitemap. Manual requests only for URLs GSC reports as genuinely unknown to Google. See also §P0 |
| Any CC / CINC / CD prompt | **SCS_MP v6.19** |

---

## 3) 🆕 PP IMPLEMENTATION TRACKER

**Why this exists:** a great deal has been researched and planned; the risk is that plans sit in docs and never ship. This is the single place to see what's outstanding. **Update it whenever an item moves.**

Full detail for each item lives in the referenced doc — this is the status board, not the spec.

> ⚠️ **Numbering note.** This tracker's item numbers (1–29) are **not** the same as PP_SEO v21 §5's item numbers (1–29). Two independent 1–29 sequences now exist for overlapping work. When citing an item, always name the source — "tracker #9" or "PP_SEO v21 §5 item 18". Reconciling the two into one numbering is worth doing but has not been done; doing it will break every existing cross-reference, so it should happen deliberately rather than incidentally.

### 🔴 Phase 0 — Indexability (blocks every other phase)

**Source: PP_SEO v21 §P0.** Google is assigning `https://www.747live.bet/` as the Google-selected canonical for PP pages that declare no self-referencing canonical. Affected pages are effectively deindexed — this is page loss, not a ranking problem. Two of fourteen sampled pages confirmed; **the true count is unknown until P0-1 completes.** Better schema, better titles, and new pages are worthless on a page Google will not index.

| # | Item | Doc | Status |
|---|---|---|---|
| **P0-1** | **Recon** — which routes declare a self-canonical and which don't; how canonicals are currently produced in the app; any `747live.bet` reference, cross-domain canonical, off-domain hreflang, or injected head markup in the codebase | PP_SEO v21 §P0 | 🟡 **IN FLIGHT — read-only CC prompt sent** |
| **P0-2** | **Add a self-referencing canonical to every page**, extending the existing metadata pattern rather than introducing a second one. Ships regardless of root cause | PP_SEO v21 §P0 | ⬜ Gated on P0-1 |
| **P0-3** | **Determine the cause of the 747live.bet association** — scraping, stray markup, or compromise. Runs in parallel with P0-2, does not block it | PP_SEO v21 §P0 | ⬜ Gated on P0-1 |
| **P0-4** | **`/methodology` "not served over HTTPS"** — reported in one GSC inspection view while other pages showed HTTPS served. Indexed, but unexplained | PP_SEO v21 §P0 | ⬜ Not started |

### Phase 1 — Fix what's broken (no new pages)
| # | Item | Doc | Status |
|---|---|---|---|
| 1 | **`sameAs` + Organization schema** — 3 social URLs already in the footer, plus `@id` publisher link. Highest-leverage entity fix; Google currently describes an unrelated podcaster on PP's brand query | PP_SEO v21 §2 (schema gaps) | ⬜ Not started |
| 2 | **Stale "(May 2026)" titles** — `/coupons/ez-peptides`, `/particle-peptides`, `/royal-peptides` | PP_VENDOR_PAGES v4 §5 · PP_SEO v21 §5 | ⬜ Not started |
| 3 | **`/coupons/amino-club`** title rewrite. *(Discount discrepancy resolved — 20% is definite, "up to 30%" removed)* | PP_SEO v21 §5 | 🟡 Recon prompt drafted, not sent |
| 4 | **`/prices/glow` + `/prices/klow`** — rejected in GSC live testing. **Suspected Phase 0 symptom:** `/vendor-testing-index` showed the same live-test rejection and is a confirmed canonical casualty. PP_SEO v21 still lists these separately as a render issue, so the two causes are **not yet distinguished** — P0-1 recon covers both pages and will settle it. Do not run a separate diagnostic before then | PP_SEO v21 §P0 + §5 | 🟡 **Folded into P0-1** |
| 5 | **`/prices/5-amino-1mq`** — **confirmed Phase 0 casualty.** Google-selected canonical is `747live.bet`; user-declared canonical is None. Not an independent duplicate-content problem. Resolves with P0-2 | PP_SEO v21 §P0 | 🟡 **Superseded by P0-2** |
| 6 | **Search index rebuild** — hand-maintained, covers **27 of 62 peptides and ZERO price pages** | PP_SEO v21 §5 | ⬜ Not started |
| 7 | **Hardcoded coupon codes** — 27 pages + `/best-peptide-vendors` (live Featured contradiction: Oasis on `/coupons`, Peptides.gg on Featured) | PP_PRICES v2 · PP_SEO v21 §5 | ⬜ Not started |
| 8 | **Delete dead `WhereToBuy.tsx`** — zero renders | PP_PRICES v2 | ⬜ Not started |
| 8b | **Expired `priceValidUntil: 2026-06-30`** → derived, not hardcoded. Expired four weeks ago; worse than no date | PP_SEO v21 §2, §5 | ⬜ Not started |

### Phase 2 — Vendor product cards
| # | Item | Doc | Status |
|---|---|---|---|
| 9 | **Amino Club pilot** — compound name (internally linked to `/peptides/[slug]`) · sizes · price · stock · shop link. **No images in v1** | PP_VENDOR_PAGES v4 §3–4 | 🟡 **BUILT — 3 commits parked, unpushed, awaiting review** |
| 10 | Review pilot → decide rollout to remaining vendors | PP_VENDOR_PAGES v4 §4 | ⬜ Gated on #9 |
| 11 | *(If images wanted)* capture image URLs + per-product deep links on a re-pull | PP_VENDOR_PAGES v4 §3 | ⬜ Optional |

### Phase 3 — Freshness + internal linking
| # | Item | Doc | Status |
|---|---|---|---|
| 12 | **Generated check-dates** on `/coupons` + vendor pages (the `PRICES_UPDATED_DATE` pattern), fed by the `check:vendors` script + GitHub Action | PP_VENDOR_PAGES v4 §6 · PP_SEO v21 §3 | ⬜ Not started |
| 13 | **Internal-link block** on vendor pages — the PeptideStack footer pattern | PP_VENDOR_PAGES v4 §6 | ⬜ Not started |
| 13b | **Editorial-staff byline + `author` schema + `/methodology` substance** — the E-E-A-T decision. A generic byline is weaker than a named credentialed author on YMYL; this is an improvement, not a solution | PP_SEO v21 §2 | ⬜ Not started |
| 13c | **`dateModified` on coupon pages**; **`BreadcrumbList`** sitewide; **`SoftwareApplication`** on `/calculator`; **`MobileApplication`** on `/app` | PP_SEO v21 §2 | ⬜ Not started |

### Phase 4 — FAQ hub-and-spoke
| # | Item | Doc | Status |
|---|---|---|---|
| 14 | **Recon `/faq`** — report what exists today | PP_SEO v21 §5 | ⬜ Not started |
| 15 | **Mine GSC exports** for question-shaped queries (*how/what/does/is/can/why*) — demand PP already receives impressions for with no page answering | PP_SEO v21 §5 | ⬜ Not started |
| 16 | **Build the hub** — FAQPage schema, 2–4 sentence answers, link to existing pages first | PP_SEO v21 §5 | ⬜ Gated on #14–15 |

### Phase 5 — Query-shaped commercial pages
| # | Item | Doc | Status |
|---|---|---|---|
| 17 | **Validate volume** on candidate phrases before building | PP_SEO v21 §4, §5 | ⬜ Not started |
| 18 | **Vendor-alternative pages** — Core, Biotech, Verified, **Peptide Sciences (closed — demand permanently orphaned)** | PP_SEO v21 §5 | ⬜ Proposed in v14, never built |
| 19 | **Commercial-phrase pages** (5–8) — "best place to buy peptides online" etc. | PP_SEO v21 §4, §5 | ⬜ Not started |
| 20 | **Reuse the product-card component** on these pages | PP_VENDOR_PAGES v4 §6 | ⬜ Gated on #9 |

### Never measured (new phase — PP_SEO v21 §2)
| # | Item | Doc | Status |
|---|---|---|---|
| M1 | **Backlink baseline** — roughly half of SEO has never been examined. 30 affiliate vendors are the most underused asset available; costs an email | PP_SEO v21 §2 | ⬜ Not started |
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
| 28 | **Onboard 4 new vendors to price pull** — done Jul 26; **remaining: dated sale field** so time-limited promos auto-expire | PP_PRICES v2 | ⬜ Not started |
| 29 | **Logo / favicon** — **glasses favicon LIVE**; `/icon.png` created, fixing the Organization schema's 404 logo. Header mark (`/public/logo-mark.png`, arms version) on disk and unreferenced — one-line swap when wanted. `lockup-parked` branch holds the `Pr`/`Pe` tile lockup, on hold | PP_SEO v21 §2 | ✅ Favicon done · 🟡 Header held |
| 30 | **Restart news publishing** — stopped in June. A stale news section is its own negative signal. Per-compound "further reading" blocks only; the same article on all 62 profiles is boilerplate | PP_SEO v21 §2, §5 | ⬜ Not started |

**Legend:** ⬜ not started · 🟡 in progress or gated · ✅ done

---

## 4) 🏛️ STUDIO-LEVEL

| Doc | Current | Covers |
|---|---|---|
| **SCS_MP** | **v6.16 + v6.19 ADDENDUM** | RULE #0 · execution model (CC owns build + all terminal commands; Claude instructs and asks before drafting) · prompt discipline · GSC quota rule · EAS signing rule · X card mechanics · portfolio · recurring failure patterns |
| **PROJECT_INSTRUCTIONS** | **v3** | Rules only, no state. Numbered responses · `load [workstream]` · answer directly · surface don't just mention · verify external facts · fix what was reported · open with state |
| **SCS_REF_INDEX** | **v3** *(this doc)* | The map + PP implementation tracker |

Superseded addendums: v6.15, v6.16, v6.17, v6.18. **v6.19 supersedes v6.17 and v6.18 entirely.**

---

## 5) OTHER PROPERTIES

| Property | Doc | Current | Notes |
|---|---|---|---|
| **HR** | **HR_MASTER** | **v14** | App state · v1.0.3 through Beta App Review, TestFlight live to 10 testers · **monetization = freemium (v13 was wrong)** · rulebook corrections · EAS/HealthKit learnings · v1.0.4 scope |
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
2. **Successors declare what they supersede** in their header, so a searcher landing on an old one has a pointer.
3. **Negative findings are findings — write them down.** Refersion cost a wasted recommendation because a dead end was researched and never recorded.
4. **Docs describing live state go stale fastest.** Rosters, portfolio snapshots, version numbers, counts. Regenerate from the artifact where possible; date the claim where not.
5. **Update this index — and the §3 tracker — whenever anything moves.**
6. **Frozen snapshots are deliberate archives, not stale versions.** `SC_MASTER_FROZEN`, `WN_MASTER_FROZEN`, `WL_MASTER_FROZEN` stay.
7. **🆕 Reissue this index in the same batch as any doc it references.** v2 named a superseded PP_SEO within a day of being written, and its tracker had no row for the highest-priority item in the portfolio. An index that lags the docs it maps is worse than no index, because it is trusted.
8. **🆕 Section pointers die with versions.** When a doc is superseded, its section numbers usually don't survive. Re-verify every `§` reference on reissue rather than carrying it forward.

---

## 📅 Changelog

**v3 (July 28, 2026):** All **PP_SEO v20** references updated to **v21** with re-verified section pointers (v20's numbering does not map to v21). **🔴 Phase 0 added to §3** — four items covering the canonical defect, gating every other phase. **Items #4 and #5 re-pointed** as canonical-defect symptoms: #5 confirmed and superseded by P0-2, #4 suspected and folded into P0-1 recon rather than run as a separate diagnostic. Stale statuses corrected: **#9** Amino Club pilot is built and parked, not pending; **#29** glasses favicon is live. New rows added for v21 content the v2 tracker predated — expired `priceValidUntil` (8b), E-E-A-T byline (13b), remaining schema wins (13c), the three never-measured items (M1–M3), and news restart (30). Numbering-collision warning added: this tracker's 1–29 and PP_SEO v21 §5's 1–29 are different sequences. Hygiene rules 7 and 8 added.

**v2 (July 27, 2026):** PP front-loaded and expanded; **implementation tracker added (§3, 29 items across five phases)**; other properties condensed. Rationale: the volume of PP research and planning made an ordered status board necessary so plans get implemented rather than archived.

**v1 (July 27, 2026):** Created. 201 files across ~30 families indexed; retired docs marked; task-to-doc mapping; hygiene rules recorded after two same-day recommendations were made from superseded versions.

---

*201 files, ~30 live docs. Old versions don't announce themselves — check here first. §3 is the board: if it isn't tracked there, it won't ship. **Phase 0 gates everything.***
