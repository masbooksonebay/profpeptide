# SCS Ref Doc Index — v2

**Date:** July 27, 2026
**Status:** ACTIVE — the map of every reference doc, **PP-first**.
**v2 changes:** PP moved to the top and expanded · **implementation tracker added** (§3) so planned work doesn't get lost between sessions · other properties condensed to a single table.

> ⚠️ **THE PROBLEM THIS SOLVES.** The project holds **201 markdown files**; ~30 are current. Superseded versions stay searchable and don't announce themselves. On July 27 two recommendations came from stale docs: Refersion proposed as the next discovery channel (researched and found dead — never written down), and applications proposed to Spartan and Purity Peptides (both already live vendors — the roster wasn't recorded). **Check here first.**

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
| **PP_SEO** | **v20** | ⭐ Core diagnosis (position/CTR, not indexing) · **query-shaped vs entity-shaped finding** · FAQ hub plan · competitive analysis (PeptideStack) · schema gaps · GSC routine · metrics log |
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

### 📌 PP task → doc

| Task | Read |
|---|---|
| SEO / rankings / content strategy | **PP_SEO v20** + **PP_SEO_LEDGER v3** |
| Building or editing a vendor coupon page | **PP_VENDOR_PAGES v4** + PP_SITE_DESIGN |
| Anything touching `/prices` or the price pull | **PP_PRICES v2** + PP_PRICE_DATA_MASTER |
| Applying to a vendor / affiliate status | **PP_VENDOR_PROSPECTING v19** — roster is §1 |
| Writing X posts | **PP_X_POSTS v46 + sale addendum** |
| GSC indexing run | **PP_SEO v20 §7** + PP_SEO_LEDGER |
| Any CC / CINC / CD prompt | **SCS_MP v6.19** |

---

## 3) 🆕 PP IMPLEMENTATION TRACKER

**Why this exists:** a great deal has been researched and planned; the risk is that plans sit in docs and never ship. This is the single place to see what's outstanding. **Update it whenever an item moves.**

Full detail for each item lives in the referenced doc — this is the status board, not the spec.

### Phase 1 — Fix what's broken (no new pages)
| # | Item | Doc | Status |
|---|---|---|---|
| 1 | **`sameAs` + Organization schema** — 3 social URLs already in the footer, plus `@id` publisher link. Highest-leverage entity fix; Google currently describes an unrelated podcaster on PP's brand query | PP_SEO v20 §6 | ⬜ Not started |
| 2 | **Stale "(May 2026)" titles** — `/coupons/ez-peptides`, `/particle-peptides`, `/royal-peptides` | PP_VENDOR_PAGES v4 §5 | ⬜ Not started |
| 3 | **`/coupons/amino-club`** title rewrite + "up to 30%" vs 20% discrepancy | PP_SEO v20 §5 | 🟡 Recon prompt drafted, not sent |
| 4 | **`/prices/glow` + `/prices/klow`** — indexing rejected, live-test render issue | PP_SEO v20 §7 | 🟡 Diagnostic prompt drafted, not sent |
| 5 | **`/prices/5-amino-1mq`** — duplicate without user-selected canonical | PP_SEO v20 §7 | 🟡 Diagnostic prompt drafted, not sent |
| 6 | **Search index rebuild** — hand-maintained, covers **27 of 62 peptides and ZERO price pages** | PP_SEO v20 §8 | ⬜ Not started |
| 7 | **Hardcoded coupon codes** — 27 pages + `/best-peptide-vendors` (live Featured contradiction: Oasis on `/coupons`, Peptides.gg on Featured) | PP_PRICES v2 | ⬜ Not started |
| 8 | **Delete dead `WhereToBuy.tsx`** — zero renders | PP_PRICES v2 | ⬜ Not started |

### Phase 2 — Vendor product cards
| # | Item | Doc | Status |
|---|---|---|---|
| 9 | **Amino Club pilot** — compound name (internally linked to `/peptides/[slug]`) · sizes · price · stock · shop link. **No images in v1** | PP_VENDOR_PAGES v4 §3–4 | 🟡 **NEXT — agreed, prompt pending** |
| 10 | Review pilot → decide rollout to remaining vendors | PP_VENDOR_PAGES v4 §4 | ⬜ Gated on #9 |
| 11 | *(If images wanted)* capture image URLs + per-product deep links on a re-pull | PP_VENDOR_PAGES v4 §3 | ⬜ Optional |

### Phase 3 — Freshness + internal linking
| # | Item | Doc | Status |
|---|---|---|---|
| 12 | **Generated check-dates** on `/coupons` + vendor pages (the `PRICES_UPDATED_DATE` pattern) | PP_VENDOR_PAGES v4 §6 | ⬜ Not started |
| 13 | **Internal-link block** on vendor pages — the PeptideStack footer pattern | PP_VENDOR_PAGES v4 §6 | ⬜ Not started |

### Phase 4 — FAQ hub-and-spoke
| # | Item | Doc | Status |
|---|---|---|---|
| 14 | **Recon `/faq`** — report what exists today | PP_SEO v20 §3 | ⬜ Not started |
| 15 | **Mine GSC exports** for question-shaped queries (*how/what/does/is/can/why*) — demand PP already receives impressions for with no page answering | PP_SEO v20 §3 | ⬜ Not started |
| 16 | **Build the hub** — FAQPage schema, 2–4 sentence answers, link to existing pages first | PP_SEO v20 §3 | ⬜ Gated on #14–15 |

### Phase 5 — Query-shaped commercial pages
| # | Item | Doc | Status |
|---|---|---|---|
| 17 | **Validate volume** on candidate phrases before building | PP_SEO v20 §2 | ⬜ Not started |
| 18 | **Vendor-alternative pages** — Core, Biotech, Verified, **Peptide Sciences (closed — demand permanently orphaned)** | PP_SEO v20 §2 | ⬜ Proposed in v14, never built |
| 19 | **Commercial-phrase pages** (5–8) — "best place to buy peptides online" etc. | PP_SEO v20 §2 | ⬜ Not started |
| 20 | **Reuse the product-card component** on these pages | PP_VENDOR_PAGES v4 §6 | ⬜ Gated on #9 |

### Ongoing / vendor pipeline
| # | Item | Doc | Status |
|---|---|---|---|
| 21 | **Chase 7 outstanding codes** — PureRx, Certified-Pep, Crush Research, Modern Research, Modern Aminos ×2, Lumera Labs. **This is the bottleneck, not page-building** | PP_VENDOR_PROSPECTING v19 §5 | 🟡 All requested, awaiting reply |
| 22 | **Apply:** LiveWell, Onyx Biolabs, GLP1 Research Lab, Licensed Peptides | PP_VENDOR_PROSPECTING v19 §6 | ⬜ Not started |
| 23 | **Check Eternal Peptides** — open since v2 | PP_VENDOR_PROSPECTING v19 §6 | ⬜ Not started |
| 24 | **Follow up or close Wolverine** — pending since July 13 | PP_VENDOR_PROSPECTING v19 §5 | ⬜ Not started |
| 25 | **Audit Peptide Sciences references** — they've closed | PP_VENDOR_PROSPECTING v19 §4 | ⬜ Not started |
| 26 | **Re-check `/prices` impressions at 4 and 8 weeks** (live July 25) | PP_SEO v20 §9 | ⬜ Due ~Aug 22 / ~Sep 19 |
| 27 | **Spot-check Sale rows** against vendor sites — 190 rows, most perishable data on the site | PP_PRICES v2 | ⬜ Not started |
| 28 | **Onboard 4 new vendors to price pull** — done Jul 26; **remaining: dated sale field** so time-limited promos auto-expire | PP_PRICES v2 | ⬜ Not started |
| 29 | **Logo / favicon** — glasses mark wired, parked at `ccd88bd`, unpushed | — | 🟡 Awaiting review |

**Legend:** ⬜ not started · 🟡 in progress or gated · ✅ done

---

## 4) 🏛️ STUDIO-LEVEL

| Doc | Current | Covers |
|---|---|---|
| **SCS_MP** | **v6.16 + v6.19 ADDENDUM** | RULE #0 · execution model (CC owns build + all terminal commands; Claude instructs and asks before drafting) · prompt discipline · GSC quota rule · EAS signing rule · X card mechanics · portfolio · recurring failure patterns |
| **SCS_REF_INDEX** | **v2** *(this doc)* | The map + PP implementation tracker |

Superseded addendums: v6.15, v6.16, v6.17, v6.18. **v6.19 supersedes v6.17 and v6.18 entirely.**

---

## 5) OTHER PROPERTIES

| Property | Doc | Current | Notes |
|---|---|---|---|
| **HR** | **HR_MASTER** | **v14** | App state · v1.0.3 · **monetization = freemium (v13 was wrong)** · rulebook corrections · EAS/HealthKit learnings · testers · v1.0.4 scope |
| HR | **HR_SOCIAL** | **v12** | Carousel + reel prompt rules. Templates read from GitHub, never from chat |
| HR | HR_PROGRAM_EXPORT | — | ⚠️ Ad-hoc transcription, no generator, not in the repo. Verify against `hr-cycle-1.json` |
| HR | ~~HR_INSTAGRAM~~ | — | ❌ Superseded by HR_SOCIAL |
| **SC** | SC_MASTER_ACTIVE / FROZEN | v5.14 / v5.3 | |
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

---

## 📅 Changelog
**v2 (July 27, 2026):** PP front-loaded and expanded; **implementation tracker added (§3, 29 items across five phases)**; other properties condensed. Rationale: the volume of PP research and planning made an ordered status board necessary so plans get implemented rather than archived.

**v1 (July 27, 2026):** Created. 201 files across ~30 families indexed; retired docs marked; task-to-doc mapping; hygiene rules recorded after two same-day recommendations were made from superseded versions.

---

*201 files, ~30 live docs. Old versions don't announce themselves — check here first. §3 is the board: if it isn't tracked there, it won't ship.*
