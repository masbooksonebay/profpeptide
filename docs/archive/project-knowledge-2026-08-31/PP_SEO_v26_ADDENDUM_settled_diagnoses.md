# PP_SEO — ADDENDUM: THE SETTLED-DIAGNOSIS LEDGER

**Insert directly beneath the 20-URL indexing rule, above §1.**
**Added:** August 10, 2026

---

## 🔒 RULE — RECORD WHY, THEN CHECK BEFORE INVESTIGATING

**Every time a page's non-indexed or degraded state is diagnosed, record the reason here with the date and who established it. Before writing any investigation prompt for CC or CINC, read this section first.**

### Why this rule exists

A recurring loop has cost multiple executor turns:

1. CINC reports a Search Console state
2. Claude reads it as evidence of a site defect
3. Claude writes CC a prompt to investigate
4. CC investigates and reports the cause
5. **The cause isn't recorded, so the same investigation gets requested again later**

The "GSC state is last-crawl, not current" finding has been established **five separate times**. On the fifth, CC was asked to fix a sitemap that was already complete and correctly refused to fabricate a fix for a non-defect.

**A settled diagnosis is a fact, not a memory.** Write it down.

### What to record

Per page or per class: **the observed symptom · the established cause · the date · who established it · whether it's actionable or expected.**

---

## 📒 SETTLED DIAGNOSES — do not re-investigate

### 🔴 SETTLED: Search Console state is LAST-CRAWL, not current

**Symptom:** "No referring sitemaps," "Unknown to Google," stale cached titles.
**Cause:** GSC reports Google's most recent crawl. It does not reflect current site state.
**Established:** CC, five times through Aug 10, 2026.

**The Aug 10 case:** CINC reported four vendor coupon pages with no referring sitemap. **All four were in the live sitemap with that day's lastmod.** Full audit: 282 URLs, every route type matching its source exactly — coupons 46/46, prices 65/65, peptides 62/62, supplements 53/53, news 13, compare 17, guides 2, all hubs present.

**⚠️ Before treating any GSC report as evidence of a defect, curl the live sitemap and the live page.** The answer is almost always that the site is correct and Google is behind.

**Actionable?** No. Manual indexing requests are the correct nudge for crawl latency, not a workaround for a bug.

---

### 🔴 SETTLED: Glacier's "User-declared canonical: None"

**Symptom:** GSC reports no user-declared canonical for `/coupons/glacier-aminos`.
**Cause:** **The canonical IS in the initial server HTML `<head>`** — present in a no-JS curl, not RSC-injected. Coupon pages are `"use client"` but metadata comes from the per-slug server `layout.tsx`, so it's always server-rendered. Identical across all 46 pages.
**Established:** CC, Aug 9, 2026.
**Actionable?** No. GSC crawl-state artifact.

---

### 🟡 SETTLED: Glacier's suppressed snippet

**Symptom:** SERP shows a rewritten title and **no description at all**.
**Cause:** **Not a data bug.** Every surface reconciles — title, meta, og, twitter, JSON-LD Offer, H1, code card, FAQ, price grid, prose: 23 mentions each of `PROFPEPTIDE` and `10%`, zero disagreement. All 45 pages scanned, 136 discount-percentage mentions, no mismatch anywhere.

The cause is **templated similarity** — all 45 descriptions shared one shape with only the trailing clause varying — plus a promotional title Google rewrote to the plain site-name form.

**Established:** CC, Aug 9, 2026.
**Fix shipped:** 45 fact-led descriptions, A/B/C/D waterfall, longest 123/155.
**⚠️ Google re-crawls on its own schedule. Do not treat continued suppression as a new problem for several weeks.** Next lever if it persists: varying the tail, deliberately left alone.

---

### 🔴 SETTLED: `/prices/nad` and `/prices/sema` are phantom URLs

**Symptom:** Both 404.
**Cause:** **Claude invented both slugs** while writing CINC submission lists. The real NAD page is `/prices/nad-plus`; there is no `sema` page.
**Established:** CC (nad), CINC (sema), Aug 9–10, 2026.
**Fixed:** 308 redirect `nad → nad-plus`. Also added: `kisspeptin-10 → kisspeptin`, `melanotan-2 → melanotan-ii`, `melanotan-1 → melanotan-i`.
**⚠️ All 70 index slugs route — symmetric difference empty. Pull price slugs from the live sitemap or a CC report, never from memory.**

---

### 🟡 OPEN: `/peptides` "Discovered – currently not indexed"

**Symptom:** Google knows the URL from the sitemap and internal links but has **never fetched it**.
**Cause, partial:** The route renders **ƒ dynamic** because it reads `searchParams.category`, so there's no prerendered cacheable HTML. `/supplements` is the identical pattern.

**⚠️ CC's framing: a plausible contributor, not a proven sole cause.** Crawl scheduling alone explains "Discovered – not indexed" too.

**Established:** CC, Aug 10, 2026 — an upgrade from its earlier assessment that the `?category` restructure was "cleanup, not a fix."
**Status:** Static restructure approved. **Frame it as removing a risk factor, not a guaranteed fix.**

---

### 🟢 SETTLED: Deliberate noindex pages

Not defects. Do not investigate.

| Page | Reason |
|---|---|
| `/vendors` | Mark's directive, commit `d81291e`. Thin directory duplicating `/coupons` — zero unique prose, all cards link to `/coupons/<slug>`. `noindex, follow` keeps crawlers reaching every profile. Nav stays for readers. |
| `/vendor-testing-index` | Same class |
| `/contact` | Deliberate |
| `/prices/<compound>` with <3 vendors | Rule, not a bug. Currently 5: orforglipron, pda, petrelintide, tesofensine, thymulin |
| `/prototype/*` | Deliberate |
| All OG/twitter image routes | `X-Robots-Tag: noindex` by design |

`check:sitemap-noindex` fails the build if any of these appear in the sitemap.

---

### 🟡 SETTLED: Stale cached titles on price pages

**Symptom:** Google's stored title shows an outdated vendor count — ipamorelin cached at 19 while serving 29, semax at 22 while serving 34.
**Cause:** **Google's recrawl schedule.** Our side is correct — price pages are static, in the sitemap, robots clean, lastmod current.

**⚠️ One nuance worth knowing:** `next-sitemap` sets lastmod to **build time**, so every URL's lastmod bumps on every deploy regardless of whether content changed. With frequent deploys, Google sees uniformly-fresh-but-unchanged lastmods and **may discount the lastmod signal entirely** — weakening exactly the mechanism that would prompt these recrawls. A content-based lastmod would be a stronger signal.

**Established:** CC, Aug 10, 2026.
**Actionable?** Content-based lastmod, scoped but not built.

---

## How to add to this ledger

When CC or CINC establishes a cause, add a row **in the same session**, before the finding is lost to compaction. Include the symptom as it appeared, the cause as established, the date, the source, and whether anything is actionable.

**A diagnosis that isn't written down will be re-investigated.**

---
