# SCS Ref Doc Index — v1

**Date:** July 27, 2026
**Status:** ACTIVE — the map of every reference doc across the studio.
**Purpose:** the project holds **201 markdown files**, most of them superseded versions that are still searchable. This index states **which version is current**, what each doc covers, and what to read at the start of a session — so a search doesn't surface a stale claim from six versions ago.

> ⚠️ **THE PROBLEM THIS SOLVES.** On July 27 two recommendations were made from superseded docs: Refersion was proposed as the next discovery channel (v18 lists it as "NEXT" — it had been researched and found dead, never written down), and applications were proposed to Spartan and Purity Peptides (both already live vendors — the prospecting ledger never listed the roster). **Old versions don't announce themselves. Check this index first.**

---

## 🔴 READ-FIRST AT SESSION START

| Doc | Why |
|---|---|
| **SCS_MP** (studio master playbook) | RULE #0, execution model, prompt discipline, cross-cutting rules |
| **This index** | Which version of everything is current |
| The **master doc for the workstream in play** | See tables below |

**RULE #0 governs all: verify before asserting.** And its corollary — *a doc records what was believed at a moment, and belief moves faster than versioning.* **Verify current state against the artifact** — the repo, ASC, the live site — before acting on any doc's claim about present state.

---

## 🏛️ STUDIO-LEVEL

| Doc | Current | Covers |
|---|---|---|
| **SCS_MP** | **v6.16 + v6.19 ADDENDUM** | Studio playbook. RULE #0 · execution model (CC owns build + all terminal commands; Claude instructs and asks before drafting) · prompt-delivery discipline · GSC quota rule · EAS signing rule · X card mechanics · portfolio snapshot · recurring failure patterns |
| **SCS_REF_INDEX** | **v1** *(this doc)* | The map |

**Superseded addendums:** v6.15, v6.16, v6.17, v6.18. v6.19 supersedes v6.17 and v6.18 entirely.

---

## 🧪 PROF. PEPTIDE (PP) — 118 files, 12 live docs

### Site, content, and strategy

| Doc | Current | Covers |
|---|---|---|
| **PP_MASTER** | **v15 + ADDENDUM v4** | Portfolio state, site structure, editorial rules, spot-check routine |
| **PP_SEO** | **v20** | ⭐ Core diagnosis (position/CTR, not indexing) · **query-shaped vs entity-shaped page finding** · FAQ hub plan · competitive analysis · schema gaps · GSC routine · weekly metrics |
| **PP_SEO_LEDGER** | **v3** | Operational per-URL tracker. **Read alongside PP_SEO, not instead of it** |
| **PP_VENDOR_PAGES** | **v4** | ⭐ Vendor coupon-page structure · **product-card spec** · Amino Club pilot · **five-phase build sequence** · density ceiling · internal first-mention linking rule |
| **PP_SITE_DESIGN** | **v3 ADDENDUM** | Palette, templates, rich-template rollout |
| **PP_X_POSTS** | **v46 + ADDENDUM (sale posts)** | 4-post anatomy · research standard · **time-limited sale pattern** · `/coupons` hub card · **X card mechanics** (validator dead, `?v=` cache-buster) |

### Prices and data

| Doc | Current | Covers |
|---|---|---|
| **PP_PRICES** | **v2** | ⭐ Price-section architecture · **sale-vs-coupon rule (LOCKED)** · editorial scope exclusions · coded-vendor decodes · design decisions · refresh mechanics · known fragilities |
| **PP_PRICE_DATA_MASTER** | **v1** | The data itself — the source the transform reads. Regenerated on each pull |
| **PP_PRICE_COMPARISON_PLAN** | v5 | ⚠️ **Largely superseded by PP_PRICES v2** — the section shipped. Historical planning only |

### Vendors and revenue

| Doc | Current | Covers |
|---|---|---|
| **PP_VENDOR_PROSPECTING** | **v19** | ⭐ **LIVE ROSTER (check first)** · GoAffPro full status · three-stage pipeline (applied → approved → **code received** → live) · dead channels · current prospects |
| **PP_COMMISSIONS** | **v4** | Commission tracking, AffiliateWP findings, the code-is-the-asset thesis |
| **PP_COMMISSIONS_dashboard_urls** | — | Dashboard links |

### App and specialist

| Doc | Current | Covers |
|---|---|---|
| **PP_APP_REDESIGN** | v3 | iOS app redesign |
| **PP_APP_THEME_SPEC** | v1 | App theme tokens |
| **PP_BIOREGULATORS** | v1 | Bioregulator content rules |

### ❌ Retired
- **PP_INDEXING** (v18–v23) — **renamed to PP_SEO** at v1. Do not read; indexing is now one section of PP_SEO.

---

## 🏃 HYBRID ROCKSTAR (HR)

| Doc | Current | Covers |
|---|---|---|
| **HR_MASTER** | **v14** | ⭐ App state · v1.0.3 contents · **monetization (freemium — v13 was wrong)** · HYROX rulebook corrections · EAS/HealthKit learnings · testers · v1.0.4 scope |
| **HR_SOCIAL** | **v12** | Instagram carousel + reel prompt rules. **Templates are read from GitHub, never from chat** |
| **HR_PROGRAM_EXPORT** | — | ⚠️ **Ad-hoc LLM transcription, no generator, not in the repo.** Source for every carousel and reel. Verify against `hr-cycle-1.json` before trusting |
| ~~HR_INSTAGRAM~~ | — | ❌ Superseded by HR_SOCIAL |

---

## 🏋️ STRENGTH CYCLE (SC) / WEIGHTLIFTING NATION (WN) / CAPSTONE (WL)

| Doc | Current | Covers |
|---|---|---|
| **SC_MASTER_ACTIVE** | v5.14 | SC app state |
| **SC_MASTER_FROZEN** | v5.3 | Frozen snapshot |
| **SC_FORM_CUES_EXPORT** | — | Form cues — source for HR carousel form slides |
| **WN_MASTER_ACTIVE** | v1.2 | WN pre-build state |
| **WN_MASTER_FROZEN** | v1.1 | Frozen snapshot |
| **WN_Russia_Methodology_Spec** | v3 | Russian system methodology |
| **WN_PHASE_1A_COMPETITIVE_BRIEF** | — | WN competitive research |
| **WL_MASTER_ACTIVE** | v2.4 | Capstone Peptides operational tracker |
| **WL_MASTER_FROZEN** | — | Frozen snapshot |
| **Capstone_Brand_Assets_Spec** | v1 | Capstone brand system |
| **CAPSTONE_COMPETITIVE_HANDOFF** | — | Capstone competitive research |

> **"WL" = WeightLifting, NOT White Label.**

---

## 📌 WHICH DOCS TO READ FOR WHICH TASK

| Task | Read |
|---|---|
| PP SEO / rankings / content strategy | **PP_SEO v20** + **PP_SEO_LEDGER v3** |
| Building or editing a vendor coupon page | **PP_VENDOR_PAGES v4** + PP_SITE_DESIGN |
| Anything touching `/prices` or the price pull | **PP_PRICES v2** + PP_PRICE_DATA_MASTER |
| Applying to a vendor / affiliate status | **PP_VENDOR_PROSPECTING v19** — **roster is §1** |
| Writing X posts | **PP_X_POSTS v46 + sale addendum** |
| GSC indexing run | **PP_SEO v20 §7** + PP_SEO_LEDGER |
| HR app work | **HR_MASTER v14** |
| HR Instagram content | **HR_SOCIAL v12** + HR_PROGRAM_EXPORT |
| Any prompt to CC / CINC / CD | **SCS_MP v6.19** |

---

## 🧹 HYGIENE RULES

1. **Version in the filename, current version in this index.** A doc without an index entry is either new or dead.
2. **When a doc is superseded, say so in the successor's header** — "SUPERSEDES vX entirely" — so a searcher landing on the old one has a pointer.
3. **When research produces a dead end, write it down.** Refersion cost a wasted recommendation because a negative finding was never recorded. **Negative findings are findings.**
4. **Docs describing live state go stale fastest.** Rosters, portfolio snapshots, and version numbers should be regenerated from the artifact rather than hand-maintained. Where that isn't possible, date the claim.
5. **Update this index whenever a doc family gets a new version.**

---

## 📅 Changelog
**v1 (July 27, 2026):** Created. 201 files across ~30 doc families indexed; current versions stated; retired docs marked; task-to-doc mapping added; hygiene rules recorded after two same-day recommendations were made from superseded versions.

---

*201 files, ~30 live docs. Old versions don't announce themselves — check here first.*
