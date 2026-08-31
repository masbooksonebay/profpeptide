# PP SEO — v23

**Date:** August 2, 2026
**Status:** ACTIVE. Supersedes v22 on §7 status and §4's premise.
**Purpose:** correct the phase-sequence tracker. Three items closed, one reframed, one figure was stale by 8×.

---

## ✅ CLOSED SINCE v22

### #1 — `sameAs` + `@id` on Organization ✅

Shipped, then **corrected**. The first pass replaced 145 inline publisher objects with bare `@id` references pointing at a node defined only on the homepage. **`@id` resolves within a single page's graph; Google processes pages independently and does not fetch other pages to resolve a reference** — so those 145 publishers described nothing on their own page.

Corrected so every publisher carries **both** the `@id` and the properties: self-describing per page, still consolidating on the shared identifier.

> ⚠️ **Found while fixing:** 5 pages used an unquoted `publisher:` JS key, so every `"publisher"`-matching codemod had silently skipped them — including `/about` and `/methodology`, the two E-E-A-T pages. **A count from a codemod is a count of matches, not of instances.**

### #8 — Hardcoded coupon codes ✅

Resolved structurally. Title, description, JSON-LD Offer, and on-page copy all derive from one `discount` field in `vendors.ts`. The Amino Club 30%/20% contradiction that suppressed its snippet is now impossible to reproduce.

### #10 — Vendor product grids ✅

**Complete: 1 → 33 vendors.** Deep links with attribution across three woo permalink bases, Medusa, nextjs, and path-based affiliate URLs. See PP_PRICES v3.

---

## 🔵 #5 — BREADCRUMBS: the figure was stale by 8×

v22 recorded **19 URLs recognised** and treated it as a sitewide absence. That was a GSC dashboard reading, and GSC reports the past.

**Actual emission when audited August 2: 152 URLs.** Peptides had gone 14/62 → **62/62**; supplements 0 → **54/54**; compare and news complete.

**The real gaps were coupons (0/40) and prices (0/69)** — the two revenue families, and the pages where a SERP breadcrumb replacing a raw URL is worth most.

**Now closed. Emission: 152 → 262.**

| Family | Before → After |
|---|---|
| coupons | 0 → 38 *(37 live + index; 3 retired redirect stubs correctly emit none)* |
| prices | 0 → 70 |
| /guides index · /vendor-testing-index | 0 → 1 each |
| all pre-existing families | unchanged, **0 changed, 0 lost** on a byte-for-byte diff |

Built on a shared `breadcrumbJsonLd()` helper rather than 110 more hand-written literals — the 152 legacy literals were migrated in the same pass, byte-identical.

> 🔒 **Lesson: check what the site EMITS before treating a GSC figure as current state.** This is the second time a stale dashboard reading drove a wrong premise — the first was the Phase 0 canonical alarm, which cost hours and turned out to be a stale-crawl artifact.

---

## 🟡 #9 — Core Web Vitals: measured, not assessed

Page weight measured for the first time. PureRawz, the largest grid at 117 rows:

| | |
|---|---|
| Raw HTML | 232 KB |
| **Gzipped transfer** | **15.4 KB** |
| **DOM nodes** | **2,731** |

Transfer is a non-issue — the markup compresses ~15×. **DOM count is ~1.8× Lighthouse's ~1,500 guideline**, and the concern is mobile render cost, not bandwidth.

**Lighthouse has still never been run.** PureRawz is the page to test. Measured ≠ assessed — this item stays open.

---

## 🔄 #3–4 REFRAMED — the boilerplate problem is materially smaller

v22 framed the templated-similarity problem as measured by §4's symptom: 30 coupon and 53 supplement pages substantially identical apart from a swapped clause.

**That premise has changed for the coupon set without the item being worked.** 33 coupon pages now carry:

- A product grid — real compounds, sizes, list and post-code prices, stock, varying row counts (12 to 117)
- A data-driven facts subtitle composed from per-vendor structured fields
- A hand-written differentiator in the description

**Those pages are no longer near-duplicates in body content.** Row counts alone vary by an order of magnitude.

**The supplement set is unchanged**, and it remains the larger share of the problem: **19 of 53 supplement pages are among the 32 declined** — 36% of the family.

> **The audit should now scope to supplements and the declined set, not to coupons.** Re-running it against the old premise would measure a problem that's already been reduced.

**#4 is still the gate on blend/stack expansion.** Building more profiles before understanding why 32 pages were declined risks adding to the declined set.

---

## 📋 §7 — CORRECTED SEQUENCE

| # | Item | Status |
|---|---|---|
| 1 | `sameAs` + `@id` | ✅ **Done** (with correction) |
| 2 | **Backlink baseline** | ⬜ **Never examined.** The direct lever on crawl frequency. 37 affiliate vendors are the most underused asset available — it costs an email |
| 3 | Boilerplate audit | 🔄 **Reframed** — scope to supplements + the declined set |
| 4 | Act on the finding | ⬜ **Gates blend/stack expansion** |
| 5 | BreadcrumbList | ✅ **Done** — 262 URLs, helper-driven |
| 6 | Search index rebuild | ⬜ 27 of 62 peptides, zero price pages |
| 7 | Byline + author schema + `/methodology` | ⬜ E-E-A-T on YMYL |
| 8 | Hardcoded coupon codes | ✅ **Done** |
| 9 | Core Web Vitals | 🟡 **Measured, not assessed** — run Lighthouse on PureRawz |
| 10 | Vendor product grids | ✅ **Done** — 33 vendors |
| 11 | FAQ hub-and-spoke | ⬜ Build for users; PP isn't eligible for FAQ rich results |
| 12 | Query-shaped commercial pages | ⬜ Validate volume first |
| 13 | Restart news publishing | ⬜ Stopped in June |
| 14 | `/prices` impressions re-check | ⬜ **Due ~Aug 22 and ~Sep 19** |

**Five done, one partly, one reframed, seven open.**

---

## 🎯 THE THREE THAT MOVE RANKINGS

Everything closed this session was **infrastructure and correctness** — genuinely valuable, and none of it is the constraint.

| # | Item | Why |
|---|---|---|
| **2** | **Backlinks** | Never measured. Directly addresses the diagnosed crawl-frequency constraint. Cheapest available: 37 vendors who benefit from linking back |
| **3–4** | **The 32 declined pages** | The only thing Google has actively rejected |
| **9** | **Lighthouse** | Never run. The grid rollout made pages heavier without anyone checking |

---

## 📌 NEW ITEMS FROM THIS SESSION

| Item | Note |
|---|---|
| **17 vendors "Pending"** in `/vendor-testing-index` | The table is registry-derived now, so gaps are visible. A research pass fills them |
| **~200 hardcoded profile vendor-card entries** across ~40 pages | Every new vendor invisible by default |
| **`ez-peptides` X card** | Renders text-only on X, fine everywhere else. Post the hub until resolved |
| **`/prices` and `/coupons` now carry breadcrumbs** | Worth watching whether SERP presentation changes on the revenue families |

---

## 📅 Changelog

**v23 (August 2, 2026):**
- ✅ **#1, #5, #8, #10 closed.**
- 🔵 **#5's premise corrected** — 19 recognised was a stale GSC reading; the site emitted 152 and now emits 262. Coupons and prices were the real gaps and are closed with a shared helper.
- 🔄 **#3 reframed** — coupon pages are no longer near-duplicates; scope the audit to supplements and the declined set.
- 🟡 **#9 partially advanced** — page weight measured for the first time; Lighthouse still never run.
- 🎯 Three ranking levers named explicitly as the remaining constraint.
- 🔒 **Rule: check what the site emits before treating a GSC figure as current state.** Second stale-dashboard premise in two months.

---

*Infrastructure is not the constraint. Backlinks and the declined pages are.*
