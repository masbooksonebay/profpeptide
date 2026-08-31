# PP_SEO — ADDENDUM v28: THE SETTLED-DIAGNOSIS LEDGER

🔴 **v28 (Aug 31, 2026 — evening) adds the GSC Performance data that CLOSED the recrawl-lag caveat, the scope finding (the hub absorbs ~20 vendors' brand queries), and the SHIPPED state of the fix (card system + foot block). v27 SUPERSEDED one settled diagnosis and resolves another.** The Aug 9 "templated similarity" cause for Glacier's suppressed snippet was **WRONG** — refuted by measurement three weeks later — and is replaced by the internal-link-authority finding below. The stale-lastmod entry is **RESOLVED** by the Aug 30 content-based lastmod ship. Read the new §0 first.

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

## 🔴 §0 — SETTLED Aug 31, 2026: INTERNAL LINK AUTHORITY decides which coupon page Google serves

**This supersedes the Aug 9 Glacier diagnosis below. Do not re-propose "templated similarity."**

### The symptom — three outcomes from one identical template
| Vendor | Live SERP (Aug 31) |
|---|---|
| **amino-club** | ✅ Right page, PP's H1 as title, salience sentence quoted verbatim |
| **glacier-aminos** | ⚠️ Right page, title REWRITTEN to "Glacier Aminos - Prof. Peptide", **no description at all** |
| **royal-peptides** | 🔴 **Google serves `/coupons` — the HUB** — for "royal peptides coupon code", with a snippet assembled from the hub's vendor-list card. The vendor page loses its own brand query to its parent |

All three carry the same H1/salience format, same `CouponCodeCard`, same 6 FAQItems, same head tags. **The format is not the variable.**

### The cause — two independent metrics rank-correlate perfectly with the outcomes
| | amino-club | glacier-aminos | royal-peptides |
|---|---|---|---|
| **Distinct referring pages** | **98** | 59 | **32** |
| **Position on the hub** | **1 of 53** | 21 of 53 | **44 of 53** |

**Broken down by section, this is the whole story:**
| Section | amino-club | glacier | royal |
|---|---|---|---|
| `/prices` | 37 | 42 | 29 |
| `/peptides` profiles | **33** | 13 | **0** |
| `/faq` spokes | **24** | 0 | **0** |
| other | 4 | 4 | 3 |

🔴 **Royal Peptides is reachable from ONE section of the site.** Against a hub carrying **953 links from 356 distinct pages**, a vendor page with 32 referrers from `/prices` alone is not a strong enough signal for Google to prefer it over its own parent. **Spread is the variable, not volume** — Royal has 114 links but from 32 pages (the same price tables repeating); Amino Club has 149 from 98.

### 🔴 The root cause is STRUCTURAL — vendor pinning
Amino Club appears **20 times in `src/data/vendor-pins.ts`** and is hardcoded into the FAQ template's **`WHERE_TO_BUY_TRIO`**. Royal and Glacier appear in `vendor-pins.ts` **zero times**. That is where the 33 profile referrers and 24 FAQ referrers come from.

**It is NOT earned by catalog breadth** — Glacier carries 37 compounds vs Amino Club's 33, yet has 39 fewer distinct referrers. Amino Club is also the only vendor with `editorsPick: true`, which is why it renders first on the hub.

⚠️ **Every compound FAQ spoke shipped Aug 28–31 renders that trio. The FAQ build-out has been steadily WIDENING Amino Club's internal-authority lead over the rest of the roster** — a decision made once, inherited on every new page since, chosen per-page by nobody.

### Glacier fits the same gradient
Middle on both metrics → intermediate outcome: Google picks the right page but declines to quote it. The behaviour of a page judged relevant but not authoritative enough to use its own words.

### ❌ REFUTED — the "templated similarity / boilerplate" hypothesis
Measured with 8-word shingles across all 55 coupon pages:
```
glacier-aminos   75.5% unique   rank 12/55   ← NO snippet
amino-club       73.2% unique   rank 18/55   ← WORKING
royal-peptides   72.2% unique   rank 21/55   ← loses to hub
roster range: 37.2% – 87.7%
```
A 3.3-point spread against a 50-point roster range is noise — **and the MOST unique page is the one Google refuses to quote.** Template-identical pages are not being discounted as boilerplate. The Aug 9 fix (45 fact-led descriptions) was not wrong to ship, but it did not address the cause.

### ❌ Also ruled out — all three IDENTICAL
title↔H1 match · meta description present (108/110/111 chars, all 55 leads distinct) · self-referencing canonical · JSON-LD Offer + BreadcrumbList · no robots restriction · sitemap lastmod · page structure · anchor text · retired status. **Body word count runs INVERSE to outcome** — Glacier is longest at 1,882 words and gets no snippet.

### ✅ RESOLVED CAVEATS + SHIPPED STATE (Aug 31 evening)

**CINC's GSC Performance pull (28 days) closed the open questions:**
- **Recrawl lag is ruled out.** Glacier is fully crawled and ranking — position 7.3, 1,130 impressions, its page owns 594/594 impressions of its brand query. 🔴 **Glacier's problem is CTR, not cannibalization**: 0.4% vs Amino Club's 0.8% — the cost of the stripped snippet. Royal's IS cannibalization (hub takes 55% of its brand-query impressions) but small volume (21 vs 17).
- 🔴 **THE SCOPE IS THE ROSTER:** the hub absorbs brand queries for ~20 vendors — Legendary (28 imp, pos 6.6), Ignite (22), Royal (18), Crush, Treasure Coast, Peptidology, Iron, more — ALL with zero clicks. Every unpinned vendor loses its brand query to the hub. Royal was the one Mark happened to search, not the outlier.

**THE FIX SHIPPED, two commits (Aug 31):**
1. **Card system** (`18c972f`): 4 priority vendors — Capstone → Amino Club → Peptide Partners → Glacier, in that order — get large profile cards ONLY where the matrix (prices.generated.ts) confirms stock. Nura dropped everywhere (not converting — Mark). FAQ WHERE_TO_BUY trio now derives from the same logic. Top-up fills unfilled slots from stock-verified vendors → earned placement by construction. Matrix doc: docs/PP_VENDOR_PLACEMENT.md, regenerated via `node scripts/gen-vendor-placement.mjs`.
2. **Foot block** (`dcf3295`): "Also stocking {compound}" on 24 profiles with ≥3 surplus stock-verified vendors. Vendor names → /coupons/{vendor} (scarce equity); ONE trailing "Compare all {N} vendors" → /prices/{slug}.

**Referrer deltas (distinct profile referrers):** Glacier 13 → 44 → **58** · Peptide Partners 20 → 35 → **47** · six under-linked vendors +15–30 each (Biolongevity, Limitless, Modern Aminos, Peptides.gg, Simple, Core). Amino Club unchanged (was at catalog ceiling).

**Still open:** 12 blend-slug profiles untracked in the matrix (gh-stack rows live under cjc-1295-no-dac-ipamorelin — data-model call, Mark's). Nura remains on /best-peptide-vendors? NO — removed `dcf3295`. Next measure point: ~2 weeks post-recrawl, watch whether unpinned-vendor brand queries shift from hub to vendor pages.

### ⚠️ Honest limit
This explains the **ranking**. It does not prove causation for Glacier's specific title rewrite — that's Google's presentation choice and may also turn on off-page signals (backlinks, brand-query volume, click behaviour). And Royal only joined the salience treatment **Aug 23** vs Amino Club in the original cohort — some gap may be recrawl lag. **GSC Performance data (impressions by URL per vendor query) separates "not enough authority" from "not recrawled yet."** Not yet pulled as of this writing.

### 🔒 THE FIX IS A DECISION, NOT A PATCH
Linking to Royal and Glacier more is the symptom fix. The actual question is **how the site distributes internal authority across 53 vendors** — `WHERE_TO_BUY_TRIO` and `vendor-pins.ts` currently concentrate it on one. Options, each with revenue consequences for Amino Club (PP's largest earner):
1. Rotate the trio per compound
2. Derive it — from Finnrick rank, test cadence, catalog match to the compound
3. Drop the hardcode; let profiles link their actual stockists
4. Leave it, and accept that non-pinned vendors will keep losing brand queries to the hub

**Mark's call. Not made as of Aug 31.**

### 📐 How to check this next time — before proposing any fix
For any vendor page with a snippet problem: **count distinct referring pages by section against the rendered HTML** (not source — vendor links are built dynamically from `detailPage`, so source grep is the wrong instrument). Compare to a working page. If the referrer spread explains the outcome, the fix is link distribution, not on-page.

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

### 🔴 SETTLED: "User-declared canonical: None" — Glacier (Aug 9), ROYAL (Aug 31)

**Symptom:** GSC reports no user-declared canonical for a coupon page. Seen on `/coupons/glacier-aminos` Aug 9 and **`/coupons/royal-peptides` Aug 31** (CINC inspection). ⚠️ **Same artifact, second vendor — CC's Aug 31 curl confirmed Royal's canonical IS self-referencing in the served HTML.**
**Cause:** **The canonical IS in the initial server HTML `<head>`** — present in a no-JS curl, not RSC-injected. Coupon pages are `"use client"` but metadata comes from the per-slug server `layout.tsx`, so it's always server-rendered. Identical across all 46 pages.
**Established:** CC, Aug 9, 2026.
**Actionable?** No. GSC crawl-state artifact.

---

### ❌ SUPERSEDED (Aug 31): Glacier's suppressed snippet — the Aug 9 diagnosis was WRONG

🔴 **Read §0 above instead.** The cause recorded here — "templated similarity" — was **refuted by measurement on Aug 31**: Glacier is the MOST unique of the three compared pages and still gets no snippet. The real variable is internal link authority (59 distinct referrers vs Amino Club's 98, zero from `/faq`). The Aug 9 entry is kept for the record of what was believed and why it was superseded.

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
**✅ RESOLVED Aug 30, 2026:** content-based lastmod SHIPPED (`444d442`) — `MAX(vendorPulled, couponContentDate)` via a committed hash→date map (`src/data/content-dates.generated.json`), guarded by `check:content-dates`. Royal's lastmod moved 08-16 → 08-26 (the day its code actually changed). ⚠️ Standing consequence: **site-wide sweeps re-collapse the lastmod spread** (the Aug 30 glyph sweep took 54 distinct dates → 1). Batch sweeps rather than landing them one at a time.

---

## How to add to this ledger

When CC or CINC establishes a cause, add a row **in the same session**, before the finding is lost to compaction. Include the symptom as it appeared, the cause as established, the date, the source, and whether anything is actionable.

**A diagnosis that isn't written down will be re-investigated.**

---
