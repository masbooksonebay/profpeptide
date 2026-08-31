# PP SEO LEDGER — v5

**Date:** August 3, 2026
**Status:** ACTIVE. Supersedes v4.
**Data:** GSC export **July 5 – August 1, 2026** (28d) and **May 2 – August 1** (3mo), pulled August 3. Replaces the June 10 – July 7 baseline, which predated `/prices`, eight vendors, and all title/description work.

---

## 🔒 HARD RULES (carried, unchanged)

1. **GSC reports the past.** Bucket reports lag days; crawl records lag months.
2. **Check the last-crawl date before opening any investigation.**
3. **Live-verify against the artifact before acting on a flagged item.**
4. **Never re-run validation** on *Page with redirect*, *Excluded by noindex*, or *Not found 404* — all three are deliberate.

> 🔴 **A fourth rule, added this cycle:** **check what the site EMITS before treating a GSC figure as current state.** v4 recorded breadcrumbs on 19 URLs and concluded they were "effectively absent sitewide." The site was emitting **152**. That's the second stale-dashboard premise in two months — the first was the Phase 0 canonical alarm.

---

## 📊 BASELINE — 28 days (Jul 5 – Aug 1)

| | 3 months | **28 days** |
|---|---|---|
| Clicks | 429 | **231** |
| Impressions | 51,441 | **18,205** |
| Avg CTR | 0.8% | **1.3%** |
| Avg position | 18.8 | **16.5** |

**The most recent month carries 54% of the quarter's clicks.** Position improved 18.8 → 16.5, with **Aug 1 at 13.7**. The site is trending up on every measure.

⚠️ **Too early to attribute this to the July 28–29 title and description rewrites.** GSC lag is ~17 days; the signal would appear around **August 14**.

---

## ✅ CORRECTION — `/prices` is not at zero

A CINC dashboard read reported 0 impressions. **The export disagrees:**

| | 28 days |
|---|---|
| `/prices` URLs with impressions | **30** |
| Impressions | **258** |
| Clicks | 1 |
| Hub position | 32.45 |

The section launched **July 25** — so 258 impressions in ~8 days from a standing start. Top pages: `hgh-fragment-176-191` (56), `tesamorelin` (35), `bpc-157` (34), `mots-c` (31).

Positions are deep (42–58), which is expected for a week-old section. **Re-check at the scheduled 4- and 8-week marks before drawing conclusions.**

---

## 🔴 THE CONCENTRATION PROBLEM

| Page | Impressions | Share of site |
|---|---|---|
| `/coupons/amino-club` | **5,774** | **32%** |
| `/guides/syringes-and-injection` | 1,522 | 8% |
| `/coupons/glacier-aminos` | 1,357 | 7% |
| `/coupons/peptide-partners` | 715 | 4% |
| `/coupons` hub | 627 | 3% |

**One page is a third of the site's visibility.** Amino Club also drives 91 of 231 clicks — 39%. Any change to that vendor's page, code, or standing is a material risk to total traffic.

---

## 🎯 THE BIGGEST SINGLE OPPORTUNITY — a guide, not a coupon page

**`/guides/syringes-and-injection` — 1,522 impressions, 6 clicks, 0.39% CTR, position 10.5.**

The #2 impression driver on the entire site, sitting at the bottom of page one, with almost nobody clicking. The demand is already there and already visible to PP.

**This is a Bucket A rewrite** — title and description work on a page that already ranks. Highest-leverage single action available.

---

## 📉 REAL DEMAND, ZERO CLICKS — ranking problem, not CTR

| Page | Impressions | Clicks | Position |
|---|---|---|---|
| `/peptides/tb-500` | 445 | 0 | **63.8** |
| `/peptides/tirzepatide` | 281 | 0 | **69.3** |
| `/peptides/mgf` | 264 | 0 | **51.6** |
| `/peptides/pt-141` | 223 | 0 | **76.4** |

Positions 50–76 means these are being *served* but never *seen*. Not fixable with a title rewrite — this is a ranking and authority problem, which is what the backlink item addresses.

---

## 🔬 SUPPLEMENTS — the data agrees with Google

**21 supplement pages: 160 impressions, ZERO clicks.**

That's the family where **19 of the 32 declined pages** live. GSC's judgment and the traffic data agree. Whatever is wrong with the supplement set is real, not a crawl artifact.

---

## 💡 UNSERVED DEMAND — queries with impressions and no matching page

Non-vendor queries where PP appears but ranks deep, or where no page exists:

| Cluster | Impressions (28d) | Best position |
|---|---|---|
| **thymosin beta 4** (`thymosin beta 4`, `beta-4`, `4 peptide`, `4 tb-500`) | **270** | 58–71 |
| **PT-141 / bremelanotide** (`pt-141`, `pt 141`, `pt141`, `bremelanotide`) | **116** | 74–92 |
| **LL-37** (`ll37`, `ll-37`, `ll37 peptide`) | **80** | 78–82 |
| **bioregulators** (`bioregulator peptides`, `peptide bioregulators`, `epithalamin hormone`) | **101** | 56–77 |
| **GHRP** (`ghrp-6`, `ghrp-6 peptide`, `ghrp-2`) | 85 | 53–85 |
| **MGF** (`mgf peptide`, `mgf antibody`) | 79 | 56–68 |
| `is ozempic a peptide` | 34 | 47.9 |

**PP has profiles for most of these** — they're just ranking at position 50–90. The demand is measured and unserved.

⚠️ **`aminotech coupon codes` / `aminotech discout codes` — 57 impressions, position ~32, and PP has no Aminotech page or partnership.** Orphaned brand demand, same shape as the Peptide Sciences pattern.

⚠️ **`kovera labs discount code` — 24 impressions at position 4.0.** Kovera is a *testing lab*, not a vendor. PP ranks 4th for a discount query about a lab it merely mentions.

---

## 🗓️ SCHEDULED CHECKS

| When | What | Status |
|---|---|---|
| ~Aug 1 | Re-inspect `/coupons/amino-club` | ✅ **Done** — indexed, last crawled **Aug 2, 11:42 PM** |
| **~Aug 5** | Re-check "Duplicate without user-selected canonical" — expect 8 to fall unaided | **Due in 2 days** |
| **~Aug 14** | First read on the July 28–29 title/description rewrites (~17d lag) | Pending |
| ~Aug 22 | `/prices` impressions at 4 weeks | Pending |
| ~Sep 19 | `/prices` impressions at 8 weeks | Pending |

**Worth an indexing request if quota allows:** Royal (112 impr) and Oasis (477 impr) — both changed in the title/description passes with enough demand to matter.

---

## 🔍 CRAWL — the constraint diagnosis needs revising

v4 and PP_SEO record the constraint as **low crawl frequency, a Google authority signal**.

**`/coupons/amino-club` was crawled August 2 at 11:42 PM — the day before this pull.** Established pages are being crawled within a day.

**So crawl frequency for existing pages is not the problem.** What remains is *discovery and indexing of new pages*, and *ranking depth* on pages that are indexed. Different diagnosis, different levers.

⚠️ **GSC reports a sitemap "Temporary processing error."** If Google can't process the sitemap, discovery of new pages depends entirely on internal links. **CC audit pending** — this is the leading candidate for why 69 price pages took a week to surface.

---

## 📈 INDEX STATE

| | Count |
|---|---|
| Indexed | 152 |
| Not indexed | 100 across 8 reasons |
| Crawled – currently not indexed | **51** |
| Discovered – currently not indexed | 4 |

⚠️ **Do not read 32 → 51 as a jump.** v4's "32" was a curated subset — declined *content* pages (19 supplements + 10 peptides). The 51 is the raw bucket including redirects and parameter URLs. Not the same measure. **The Pages report also still shows last update 7/23** — eleven days stale.

---

## 🧭 OTHER OBSERVATIONS

**Retired vendor still earning:** `/coupons/synthesis-peptides` pulled **177 impressions and 5 clicks** while redirecting. Dead vendor, live demand.

**Brand query exists:** `peptide professor` — 38 impressions, 6 clicks, **15.79% CTR at position 3.08**. The brand-entity work has something to build on, and PP isn't yet #1 for its own name.

**Homepage converts:** 230 impressions, 23 clicks, **10% CTR** — the best rate on the site.

---

## 📅 Changelog

**v5 (August 3, 2026):**
- 📊 **Baseline replaced** with Jul 5 – Aug 1 data; the June 10 – Jul 7 export is retired.
- ✅ **`/prices` zero-impressions reading corrected** — 258 impressions across 30 URLs in ~8 days.
- 🎯 **`/guides/syringes-and-injection` identified** as the single biggest opportunity — 1,522 impressions at 0.39% CTR.
- 💡 **Unserved-demand clusters quantified** — thymosin beta 4 (270), PT-141 (116), bioregulators (101), LL-37 (80).
- 🔍 **Crawl-frequency diagnosis revised** — amino-club crawled within a day; the constraint is discovery of new pages and ranking depth, not crawl rate.
- ⚠️ **Sitemap processing error flagged** as the leading candidate for slow new-page discovery.
- 🔒 **Fourth hard rule added** — check what the site emits before treating a GSC figure as current state.
- 📉 Supplements confirmed at zero clicks across 21 pages, agreeing with the declined-pages judgment.

---

*One page is 32% of the site's visibility. That is the risk and the opportunity.*
