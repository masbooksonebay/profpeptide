# PP SEO ACTIONS — v1

**Date:** August 3, 2026
**Status:** ACTIVE. The working checklist. Companion to **PP_SEO v23** (strategy) and **PP_SEO_LEDGER v5** (data).
**Why this exists:** the phase plan in PP_SEO §7 is strategy; this is the list of things to actually do, ordered by leverage, with the evidence attached to each.

---

## 🥇 TIER 1 — DO FIRST

### ☐ A1. Rewrite `/guides/syringes-and-injection`

**The single highest-leverage action available.**

| | |
|---|---|
| Impressions (28d) | **1,522** — the #2 page on the whole site |
| Clicks | 6 |
| CTR | **0.39%** |
| Position | **10.5** — bottom of page one |

The demand is already there and already visible to PP. This is a title and description rewrite on a page that already ranks. Nothing else on the site has this ratio.

**Check the current title and description first** — if they don't match what people are searching, that's the whole fix.

---

### ☐ A2. Ask vendors for links — the inbound version

**Backlinks have been on the list for months with no plan, because cold outreach doesn't work and Mark said so repeatedly.** The mechanism that does work is inbound: **vendors who ask to be featured.**

Legendary Peptides asked unprompted on August 2. That's a trade, not a favour.

**🔒 The framing that keeps this safe:** PP builds vendor pages based on vetting, **never** on whether a vendor links back. Vendors who then display "as featured on profpeptide.com" do so as their own marketing decision.

> ⚠️ Google's link spam policy names *"exchanging goods or services for links"* as a link scheme. A page **conditioned** on a link is exactly that shape. A page built on merit that a vendor chooses to cite is not. Keep the distinction sharp — it's also true, since none of the 37 existing pages were built for a link.

**Process:** when a vendor asks about featuring → apply the v21/v22 vetting standard → research their site first, ask only what isn't published → build if they pass → mention the "as featured on" convention as an aside, never a condition.

---

## 🥈 TIER 2 — CHEAP, NO RISK

### ☐ B1. Retitle the commercial pages — do NOT change URLs

**The PeptideStack mechanic, verbatim: their slug IS the search phrase.**

```
/products/bpc-157-for-sale
/products/buy-tesamorelin-online
/products/buy-tb-500-online
/products/buy-pt-141-online
/products/buy-cjc-1295-dac-online
/products/ipamorelin-online
```

Not `/products/bpc-157`. Their homepage title is **"Peptides for Sale | Cheap Research Peptides"** — a query, not a brand.

**🔒 DO NOT migrate PP's URLs.** `/peptides/bpc-157` has accumulated equity. Migrating means 301s, a ranking dip, and Google treating it as a new URL. Google has been consistent that URL wording is a **minor** factor. That's a certain cost for an uncertain gain.

**The free version: retitle, don't re-URL.** `/prices/bpc-157` is already a commercial page — it just isn't *phrased* as one. Title and H1 carry far more weight than the slug, and changing them costs nothing and risks nothing.

☐ Audit what PP's 69 `/prices/*` titles currently say
☐ Rewrite toward commercial phrasing — "BPC-157 for sale", "buy BPC-157 online" shapes
☐ Check the PP homepage title — is it brand-shaped or query-shaped?

---

### ☐ B2. Request indexing — Royal and Oasis only

Both changed in the title/description passes; both have enough demand to matter (Oasis 477 impressions, Royal 112). **Skip the other 28.**

---

## 🥉 TIER 3 — NEW CONTENT, AIMED AT MEASURED DEMAND

> **Write into demand that's already measured. Not invented FAQs.**

### Unserved clusters — impressions PP already receives at position 50–90

| Cluster | Impressions (28d) | PP's position |
|---|---|---|
| **thymosin beta 4** (4 query variants) | **270** | 58–71 |
| **PT-141 / bremelanotide** (4 variants) | **116** | 74–92 |
| **bioregulators** (3 variants) | **101** | 56–77 |
| **GHRP-2 / GHRP-6** | 85 | 53–85 |
| **LL-37** (3 variants) | 80 | 78–82 |
| **MGF** | 79 | 56–68 |
| `is ozempic a peptide` | 34 | 47.9 |

**PP has profiles for nearly all of these.** The pages exist and rank at ~60. So this is not a content-coverage problem — it's a ranking problem, which is why A2 comes first.

### ☐ C1. Thymosin Beta-4 vs TB-500
270 impressions across four variants. `thymosin beta 4 tb-500` is literally people asking whether they're the same compound. Question-shaped, high demand, PP has both profiles already.

### ☐ C2. Bioregulators explained
101 impressions. The `/bioregulators` hub exists and ranks **56** with 281 impressions at 0.36% CTR. May be a rewrite rather than a new page — check before building.

### ☐ C3. "Is Ozempic a peptide?"
34 impressions, perfect question shape, and PP has the GLP coverage to answer it well.

### ☐ C4. Vendor-alternative pages — the pattern PP planned and never built

`aminotech coupon codes` + `aminotech discout codes` = **57 impressions at position ~32**, and PP has no Aminotech page or relationship. Orphaned brand demand.

The v14 "Peptide Sciences pattern" for no-program vendors. Also applies to **Core Peptides, Biotech Peptides, Verified Peptides** — all confirmed no-program.

### ☐ C5. Vendor review pages — PP's unique asset

PeptideStack runs `/blog/peptaura-review`. PP has coupon pages, not reviews — different query intent. **"Is [vendor] legit"** is a real query shape.

**PP is uniquely positioned:** first-hand verified data on 37 vendors — COA practices, named labs, testing panels, real prices, live stock. Nobody else has that.

### ☐ C6. A "list of peptides" page
PeptideStack has `/blog/list-of-peptides-and-what-they-do`. PP has 62 individual profiles and **no list page**. Cheap to build from existing data.

### ☐ C7. Restart `/news`
Stopped in June. The beat covers trial readouts, FDA actions, regulatory shifts, safety news, industry moves. PeptideStack runs `/blog/retatrutide-approval-status` — a regulatory-status page shape PP could own.

---

## 🔬 TIER 4 — MEASURE WHAT'S NEVER BEEN MEASURED

### ☐ D1. Run Lighthouse on `/coupons/purerawz`
Page weight measured for the first time: 232 KB raw, **15.4 KB gzipped**, **2,731 DOM nodes** — ~1.8× Lighthouse's ~1,500 guideline. Transfer is fine; render cost on mobile is the question. **Lighthouse has still never been run.**

### ☐ D2. Audit the sitemap
GSC reports a **"Temporary processing error."** If Google can't process it, discovery of new pages depends entirely on internal links — the leading candidate for why 69 price pages took a week to surface. *(CC audit prompt already written.)*

### ☐ D3. The 32 declined pages
**19 of 53 supplement pages are declined — 36% of the family.** And the traffic data agrees with Google: **21 supplement pages produce 160 impressions and ZERO clicks.**

⚠️ **Scope the audit to supplements and the declined set — not coupons.** The coupon pages are no longer near-duplicates: grids gave them real compounds, prices, stock, and row counts varying from 12 to 117.

**This gates blend/stack expansion.** Building more profiles before understanding why 32 were declined risks adding to the declined set.

---

## 📌 CONTEXT THAT SHAPES EVERYTHING

**One page is 32% of the site.** `/coupons/amino-club` — 5,774 of 18,205 impressions, 91 of 231 clicks. Any change to that vendor is a material risk to total traffic.

**Crawl frequency is NOT the constraint.** `/coupons/amino-club` was crawled August 2 at 11:42 PM. Established pages get crawled within a day. The constraints are **discovery of new pages** (see D2) and **ranking depth** (see A2).

**New pages will land at ~position 60 too**, unless authority changes. PeptideStack outranks PP with a worse site because of *structure* — but structure only helps if the domain can rank at all. **That's why A2 sits above all of Tier 3.**

---

## ✅ ALREADY DONE — don't redo

| Item | Result |
|---|---|
| `sameAs` + `@id` Organization schema | Done, with a mid-flight correction |
| BreadcrumbList | **152 → 262 URLs**; coupons and prices were the real gaps, now closed |
| Hardcoded coupon codes | Structurally impossible now — all derive from one field |
| Vendor product grids | **1 → 33 vendors** |
| Freshness system | Machine stamp, derived month, monthly automation, 4 guards |

---

## 📅 Changelog

**v1 (August 3, 2026):** Created. Consolidates the August 3 GSC analysis, the PeptideStack structural finding, and the inbound-backlink mechanism into one ordered checklist. Separates strategy (PP_SEO v23) and data (LEDGER v5) from actions.

---

*Rewrite what already ranks. Ask the vendors who ask you. Then write into measured demand.*
