# PP SEO — v18

**Status:** ACTIVE
**Version:** v18 (July 16, 2026) — 🔴 **CORRECTS v17's BUILD SPEC.** v17 specified per-compound "where to buy cheapest [X]" guides across the catalog; **volume data shows those are EMPTY ROOMS** (where to buy bpc-157 / tb-500 / mots-c / cjc-1295 all <50/mo). **Two targets survive:** `where to buy peptides` (8.1K, peptide-vendor SERP) and `where to buy bacteriostatic water` (3.2K, Difficulty 9, stable, proven by our competitor's #1 page). GLP-1 price/buy queries are huge but owned by GoodRx/Lilly/telehealth — a drug play, not a peptide play. Adds the **fetched buying-guide structure**, the **inline price MODULE** (where $/mg belongs), and **/best/[compound] as the price URL**.
**Prior version:** v17 (July 16, 2026) — **THE MODEL + THE PLAN.** Reframes v16's vendor-name/generic split as the sharper **COMMERCIAL vs INFORMATIONAL** cut (commercial = pos 7.5, informational = pos 31–55), adds the **long-tail finding** (5+ words = pos 27.3 vs head terms = 60.2), and locks the build decision: **compound-level "where to buy cheapest [X]" BUYING GUIDES, not a /prices hub** — peptiprices' hub is 62% brand navigation and its per-compound price pages earn ~36 visits/mo each, while buying guides are the #1 page type on both search-native competitors. **The buying guide IS the price comparison, at the URL people actually search.**
**Prior version:** v16 (July 16, 2026) — **COMPETITIVE INTELLIGENCE PASS.** v15's CTR diagnosis stands and is unchanged. This adds: (1) the **vendor-name vs generic ranking split** — the structural fact under v15's finding; (2) **full competitive sizing + keyword data** on every peptide aggregator (CINC, Similarweb); (3) the **vendor-review gap** — our competitor's best traffic is a page type we decided not to build; (4) the **Ascension anomaly**; (5) **Priority 1 status: SHIPPED, unmeasurable until the next GSC pull.**
**Supersedes:** v15. All v15 content carries forward — the priority plan is *confirmed*, not replaced.
**Data sources:** GSC exports (Queries.csv 1,000 rows, Pages.csv 145 rows), 28-day window **Jun 10 – Jul 7, 2026** · Similarweb via CINC, July 16 (3-month Apr–Jun, Worldwide).

---

## ⚠️ READ FIRST — v15's plan is already executing

**v15's Priority 1 (coupon-page title/meta CTR rewrites) has SHIPPED.** Code-forward titles are live across the major vendor coupon pages (pattern: `[Vendor] Discount Code: PROFPEPTIDE — Save up to [X]%`).

**The GSC data in this doc is Jun 10 – Jul 7 — it PREDATES the fix.** Combined with GSC's ~17-day reporting lag, **the CTR numbers below cannot yet reflect the rewrite.** Do not re-diagnose the CTR problem from this data and do not conclude the titles failed. **The next GSC pull is the measurement.**

> 🔴 **Claude, July 16: I re-derived v15's entire CTR finding from the same export and presented it as new.** Read this doc before touching GSC data. The analysis is done; what's needed is *measurement*.

---

## 🎯 THE MODEL — COMMERCIAL vs INFORMATIONAL (v17 — supersedes v16's vendor-name framing)

v16 framed the split as **vendor-name vs generic**. The sharper, more useful cut is **commercial vs informational** — it explains every data point we have and it's actionable:

| PP query type | Queries | Impressions | Clicks | **Avg position** |
|---|---|---|---|---|
| **COMMERCIAL — coupon/code** | 214 | **5,249** | 45 | **7.5** ✅ page 1 |
| INFO — comparison | 52 | 167 | 0 | 31.7 ❌ |
| INFO — dosing | 20 | 32 | 0 | 47.0 ❌ |
| INFO — research/benefits | 33 | 97 | 0 | 55.0 ❌ |
| COMMERCIAL — buy/price | 5 | 10 | 0 | 47.1 ⚠️ *no pages exist* |

**PP ranks page 1 on commercial intent and page 3–5 on informational intent.**

### And PP ranks BETTER on long-tail than on head terms
Non-vendor queries by length:
| Query length | Queries | Impressions | **Avg position** |
|---|---|---|---|
| 1–2 words (head terms) | 218 | 1,323 | **60.2** |
| 3–4 words | 420 | 1,664 | 47.7 |
| **5+ words (long-tail)** | 251 | 708 | **27.3** |

**2× better on long-tail.** "Retatrutide" is unwinnable — Mayo/FDA/GoodRx own it. **"Where to buy cheapest retatrutide" is long-tail AND commercial — both of PP's better halves at once.**

⚠️ **The "COMMERCIAL — buy/price" row is 10 impressions because PP HAS NO BUY OR PRICE PAGES.** An absent page ranking for nothing proves nothing. *(Claude made this circular error twice on July 16 — do not repeat it.)*

---

## 🏗️ THE PLAN — CORRECTED (v18, July 16) — v17's per-compound spec was WRONG

> 🔴 **v17 specified "where to buy cheapest [compound]" guides across the catalog. The compound-level rooms are EMPTY.** Written from competitor page-share data without checking whether the queries existed. **Corrected below with volume data (CINC/Similarweb, June 2026 WW).**

### ❌ WHAT'S DEAD — measured, not inferred

| Query | Volume/mo | Verdict |
|---|---|---|
| where to buy **bpc-157** | **<50** | empty room |
| where to buy **tb-500** | **<50** | empty room |
| where to buy **mots-c** | **<50** | empty room |
| where to buy **cjc-1295** | **<50** | empty room |
| where to buy **ghk-cu** | 240 | tiny |
| cheapest bpc-157 / bpc-157 price | **<50** | empty room |
| cheapest retatrutide | 130 | negligible |
| **tirzepatide price per mg** / **peptide price per mg** | **<50** | 🔴 **nobody types "$/mg" — EVER** |

**Per-compound buying guides and per-compound price pages are both empty rooms.** The classic research peptides generate neither price nor "where to buy" search demand at compound level. *(Corroborated: peptiprices' 64 per-compound price pages earn ~36 visits each/month; thepeptidecatalog's `mots-c-buying-guide` earns ~270/mo.)*

### 🪤 THE GLP-1 TRAP — real volume, wrong room
| Query | Volume | Difficulty | Who owns the SERP |
|---|---|---|---|
| retatrutide cost | **35.1K** ↑52% | 47 | goodrx, mybiosource, noom, biosynth, medicadepot |
| tirzepatide price | 13.8K | 24 | goodrx, trimrx, lilly, watsons, 1mg |
| cheapest tirzepatide | 10K | **10 – Easy** | forbes, myalloy, trimrx, vitastir, reddit |
| retatrutide price | 7.8K | **18 – Easy** | mybiosource, goodrx, biosynth, medchemexpress, uksarms |
| where to buy retatrutide | 5.5K ↓75% | 17 | biosynth, mybiosource, reddit, goodrx, magellanrx |

Huge, partly Easy-difficulty — **and owned by GoodRx, Eli Lilly, Forbes, telehealth clinics and research-chem suppliers.** A *prescription-drug* buyer, not a grey-market peptide shopper. **CPC $10+** vs $0.93–6.15 on peptide queries — different audience entirely. **This is a weight-loss-drug play, not a peptide play. Skip.**

### ✅ WHAT SURVIVES — two targets, not fifty-four

| Query | Volume/mo | Trend | Difficulty | SERP |
|---|---|---|---|---|
| **where to buy peptides** | **8.1K** | ↓48% | **32 – Moderate** | 🟢 **phoenixpeptide, rpeptide, biotechpeptides, genscript, biosynth, bachem, Reddit, YouTube** |
| **where to buy bacteriostatic water** | **3.2K** | **↓6% (stable)** | **9 – Easy** | 🟢 amazon, bacteriostaticwater.com, goodrx, certified-pep, Reddit |

**1. `/where-to-buy-peptides` — the category hub.** The ONE query where the SERP is PP's world: actual peptide suppliers, no GoodRx, no telehealth. **CPC $0.93–6.15 = research-peptide audience.** Difficulty 32 is the highest here *because real vendors compete* — but they're vendors, not Mayo Clinic. **One page, not 54.**

**2. `/where-to-buy-bacteriostatic-water` — the proven, gettable page.** 3.2K, **Difficulty 9**, **stable while everything else decays**, soft SERP. **Already proven: it is thepeptidecatalog's #1 organic page at 8.21%.** Peptide-adjacent consumable, not a drug — no regulatory exposure.

### 🟡 UNTESTED — the shorter phrasing
We measured *"where to buy X."* thepeptidecatalog ranks for the **shorter** form: **"buy bacteriostatic water" (2.51%)**, **"buy cjc-1295" (2.22%)**, **"buy mk677" (1.36%)**, "sermorelin research peptide for sale on amazon" (2.65%). **Possibly a third room — unmeasured.** Low expected value (their per-compound guides earn ~270/mo) but cheap to check.

---

## 📐 THE BUYING-GUIDE STRUCTURE (fetched live from thepeptidecatalog's #1 page, July 16)

**🔑 The buying guide is NOT a price table. It's editorial with a price MODULE inside it.**

Their `/articles/where-to-buy-bacteriostatic-water`, section by section:
1. **Hook** — *"The math can be perfect, the technique can be perfect, and a sub-spec bottle of bac water can still ruin a $300 vial inside 24 hours."*
2. **RUO disclaimer** — *"This article reports what has been documented, not what should be done."*
3. **"What 'good' [X] actually means"** — a **spec table**. Criteria BEFORE vendors.
4. **Inline product CTA** — one vendor, their code, price
5. **"The three buyer paths"** — vendor-supplied / pharma-direct / marketplace, each with honest limitations
6. **🔑 "Compare Top Peptides" MODULE** — the monetization engine (see below)
7. **"Six questions to ask before purchase"** — a buyer's framework
8. **"What to skip"** — three documented failure modes
9. **FAQ** — 5 questions, schema-ready
10. **Related Reading** — 6 internal links to sibling articles
11. **References** — 5 citations **with PMIDs**
12. **Affiliate disclosure**

### 🔑 THE PRICE MODULE — this is the "do both" answer
Inline widget, headed *"Compare Top Peptides — Best vendor pricing, COA verified, with active discount codes"*:
```
BPC-157      COA  Ion Peptide  · $4.25/mg  thepeptidecatalog·15% off  [Compare vendors]
Retatrutide  COA  Nura Peptide · $6.00/mg  thepeptidecatalog·25% off  [Compare vendors]
Tirzepatide  COA  EZ Peptides  · $2.53/mg  thepeptidecatalog·10% off  [Compare vendors]
Semaglutide  COA  Ion Peptide  · $3.45/mg  thepeptidecatalog·15% off  [Compare vendors]
GHK-Cu       COA  Nura Peptide · $0.55/mg  thepeptidecatalog·25% off  [Compare vendors]
MOTS-C       COA  Nura Peptide · $4.50/mg  thepeptidecatalog·25% off  [Compare vendors]
```
**$/mg belongs HERE — on the page, in the comparison — never in a title or URL.** Mark's framing (July 16): *"the mg language isn't good for search results, but it's useful when you actually get to the page and are doing comparisons."* The volume data confirms it exactly.

### 🔑 THEIR PRICE URL IS `/best/[compound]`, NOT `/prices/[compound]`
The module links to `thepeptidecatalog.com/best/bpc-157?from=where-to-buy-bacteriostatic-water`.
**"Best [compound] vendor" is a query people search. "[Compound] price" isn't.** They also track internal attribution with `?from=`.
⚠️ **"best [compound]" volume is UNMEASURED** — worth a CINC pull before committing to the URL.

### 🔑 THE FUNNEL — and PP has the ends, not the middle
```
Editorial guide (traffic)  →  /best/[compound] (comparison + code)  →  vendor (commission)
```
**PP has `/peptides/[compound]` (profiles) and `/coupons/[vendor]`. Missing: the guide layer AND the /best/ layer.**

### 🔑 THEIR ARCHITECTURE — many doors, one dataset (Mark's observation, confirmed)
`/articles/[topic]` guides · `/best/[compound]` price-compare · `/prices` hub · `/deals` coupon hub · `/deals/[vendor]` · `/peptides/[compound]` profiles · `/blends` · `/goals` · `/compare` · `/telehealth` · `/testing-labs` · `/tools/reconstitution-calculator` · `/bulk` · `/legal/peptides-by-state` · `/methodology` (editorial policy).
**Peptidecritic runs three doors on the same data:** `/coupon-codes` hub (8.16%), `/vendor/[name]` reviews (~25% of organic across the top 20), `/peptide-price-index` (1.42%).
⚠️ **Constraint:** the doors must be **substantively different** — same table under different titles is a doorway-page pattern Google collapses. Their three pass easily: a code list, a review, a price table.

---

## ⚖️ SCALE CHECK — read before spending a month on this

**This entire content play is worth HUNDREDS of visits per page per month.** thepeptidecatalog's #1 page ≈ 800/mo. Its per-compound guides ≈ 270/mo. Its whole site earns ~9.9K organic/month.

**`/coupons/amino-club` has 6,092 impressions/month at 0.87% CTR, position 6.6.** Lifting it to Midwest's proven 3.17% = **+130 clicks/month from a page that already exists** — no build, no new data, no bet.

**Every version of this doc since v15 has said the same thing. It keeps being true.** Content is the growth play; **CTR is the free money.** Do the free money first.

---

## 🔑 THE STRUCTURAL FACT (new — sharpens v15's finding)

v15 said peptide-content queries "barely register." The data says something stronger and more strategic:

| Query type | Queries | Impressions | Clicks | **Impr-weighted avg position** |
|---|---|---|---|---|
| **Contains a vendor name** | 126 | 5,707 | 47 | **6.8** |
| **No vendor name** | 874 | 3,665 | 10 | **48.4** |

**PP ranks page 1 when a vendor name is in the query and page 5 when it isn't.** A 7× gap.

The 132 generic queries that *do* reach page 1 are almost entirely long-tail regulatory phrasings ("efsa glucomannan weight loss claim 3 g daily water choking risk") — 487 impressions, 5 clicks. Strip those and **PP has no demonstrated ability to rank generically.**

**Implications:**
- PP's authority is **vendor-brand-adjacent, not topical.** Google trusts PP to answer "amino club promo code," not "tirzepatide."
- The comparison section isn't a failed experiment — **it's PP's normal performance on non-vendor content** (13 pages in GSC, 733 impressions, 3 clicks, mostly pos 30–60).
- Any new section targeting **generic** queries is a bet on an ability PP has never shown. That doesn't forbid it — it prices it.
- **Conversely: anything that attaches to a vendor name plays to a proven strength.**

---

## 📊 VENDOR DEMAND IS EXTREMELY CONCENTRATED (new)

| Vendor | Impressions | Clicks | Share of query demand |
|---|---|---|---|
| **Amino Club** | 4,371 | 33 | **47%** |
| **Glacier Aminos** | 988 | 6 | 11% |
| Royal | 110 | 0 | 1% |
| Oasis | 94 | 0 | 1% |
| Midwest | 51 | 4 | <1% |
| *everything else combined* | <200 | 8 | ~2% |

**Two vendors are 57% of all search demand.** That is the business *and* the risk.

### 🔴 THE ASCENSION ANOMALY (new — unexplained, worth solving)
`/coupons/ascension-peptides` ranks **position 5.3** — and gets **12 impressions**.
Meanwhile **thepeptidecatalog earns ~1.65% of its traffic (~150 visits/mo) from "ascension peptides coupon" + "acension peptides coupons"**, and ~2% more from "ascention peptides review."

**The demand exists. PP ranks for it. PP gets 12 impressions.** That's not a ranking problem or a CTR problem — Google is barely *showing* the page. Ascension is our **50%-commission "Best Deal" vendor** — the single most valuable coupon page we own, generating nothing.
**→ Diagnose this before building anything new.** Same pattern may affect EZ (17 impr, pos 8.7) and other low-impression/good-position pages.

---

## 🌐 THE COMPETITIVE LANDSCAPE (new — Similarweb via CINC, July 16)

> 🔴 **LABELING RULE:** Similarweb's headline "Total visits" tile on the 3-month view is a **3-MONTH TOTAL**; the sub-tile is the **monthly average** (headline ÷ 3). Verified on peptiprices: headline 653,948 / monthly 217,983 / **June alone 147,091**. **All figures below are 3-month totals unless marked.** Never mix bases.

| Site | 3-mo total | Monthly avg | Trend | **Organic %** | Top channel |
|---|---|---|---|---|---|
| peptiprices.com | 653,948 | 218K | **↓54%** | **9.5%** | **Display 47.8%** |
| finnrick.com | 583,891 | 195K | ↓13% | 43.3% | Organic |
| peptidecritic.com | 294,541 | 98K | ↑31% | 14.6% | Direct 43.4% |
| **peptidedeck.com** | 109,587 | 37K | ↑30% | **45.2%** | **Organic** |
| **thepeptidecatalog.com** | 40,314 | 13K | **↑168%** | **73.7%** | **Organic** |
| pickpeptides.com | 6,630 | 2.2K | ↑93% | — | below threshold |
| projectbiohacking.com | 5,696 | 1.9K | ↑40% | — | below threshold |
| peppal.com | 1,463 | 0.5K | ↓92% | — | below threshold |
| peptides-enhanced.com | 156 | 78 | ↓56% | 0% | "Coming Soon" page |

### The findings that matter

**🔴 peptiprices RENTS its traffic.** 654K looks dominant — but **9.5% organic and 47.8% Display advertising**, and **↓54%**, exactly what happens when ad spend pulls back. The category's biggest aggregator by volume ranks for almost nothing. **Weight it near-zero as a ranking competitor.**

**🔴 thepeptidecatalog is the REAL competitor.** 73.7% organic, **↑168%**, ~9K organic visits/mo, **97.8% non-branded** (nobody searches its name — it wins purely on generic ranking). It runs **PP's exact model**: per-vendor `/deals/` pages, vendor reviews, its own code, price commentary. Small and compounding beats big and bought.

**peptidedeck** — 45.2% organic, ↑30%, 7:26 visit duration (real reading). Compound/dosing/goal content play, **not** a coupon competitor.

**peptidecritic is direct-led** (43.4% direct, 14.6% organic) — brand/bookmarks/Telegram. Not a search competitor either.

**→ The organically-earned aggregator traffic PP competes against is roughly 150K/mo, not 950K.** Much better position than the raw numbers imply.

---

## 🎯 WHAT THE AGGREGATORS ACTUALLY RANK FOR (new — CINC keyword pull)

**thepeptidecatalog.com** — 402 organic keywords, ~9K organic visits/mo, **2.2% branded**:
| Keyword | Share | Bucket |
|---|---|---|
| peptide sciences (+ "shut down alternatives") | 4.37% | **competitor-vendor name** |
| which peptide helps cutting | 2.87% | goal/info |
| **ascention peptides review** | **2.01%** | **vendor + review** |
| ascension t-30 | 2.22% | vendor product |
| **peptide catalog coupons** | 1.86% | own-brand coupon |
| **ascension peptides coupon** | **1.65%** | **vendor + coupon** |
| where to buy good quality mots c but not expensive | 1.51% | **price-conscious buy** |
| is liquid retatrutide more costly than powdered | 1.36% | **cost comparison** |
| **ez peptide** (review page) | **1.29%** | **vendor + review** |
| **ion peptides reviews** | **1.22%** | **vendor + review** |
| **ez peptides discount code** | 0.79% | **vendor + coupon** |
| best reputable peptide to buy online | 0.79% | "best vendor" |
| tesamorelin/mots-c/tesa/survodutide dosing | ~7% combined | dosing |

**peptidedeck.com** — 364 keywords, ~16K organic visits/mo, 2.2% branded: compound names (tesamorelin, mk677, ghk-cu, tb-500), dosing (retatrutide dosage, mot c dosing), goals (peptides for muscle growth / weight loss), **"cheapest price for tirzepatide" (0.86%)**, "best peptides for weight loss." **Almost no vendor-coupon or vendor-review terms.**

### 🔴 THE REVIEW GAP — our competitor's best traffic is a page type we decided not to build
thepeptidecatalog's **#2, #3 and #4 non-brand keywords are vendor reviews** — "ascention peptides review" (2.01%), "ez peptide" (1.29%), "ion peptides reviews" (1.22%). Plus its **#1 keyword** is "peptide sciences (shut down alternatives)" — **PP HAS that page** (`/peptide-sciences-alternatives`) and it gets **10 impressions at position 25.1**.

**PP_PRICE_COMPARISON_PLAN explicitly decided AGAINST reviews.** That decision is currently handing our only real organic competitor its best traffic — **on our own vendors** (Ascension, EZ, both PP affiliates with PP coupon pages).

**And reviews are vendor-name queries** — the one query class PP demonstrably ranks for (pos 6.8). This is the rare case where the competitive gap and PP's proven strength point at the same page type.
**→ Reopen the no-reviews decision. It predates this data.**

### 🟡 PRICE-INTENT IS PHRASED IN NATURAL LANGUAGE, NOT "$/mg"
Nobody searches "price per mg." They search **"cheapest price for tirzepatide"**, **"where to buy good quality mots c but not expensive"**, **"is liquid retatrutide more costly than powdered."**
**Both aggregators leave price-per-mg and X-vs-Y comparison queries largely uncaptured** — genuine open space, but PP has **zero** price-intent impressions today because **there is no live price page** (`/prices` is committed, unpushed, and gated noindex). *That absence is not evidence of no demand — do not read it as such.*
**→ If the price section ships, target "cheapest [compound]" phrasing, not "$/mg" as a keyword.**

---

## 📋 PRIORITY PLAN (v15's plan CONFIRMED + re-sequenced with new data)

### PRIORITY 0 — DEPLOY THE REDESIGN (new, blocking everything)
~15 commits sit unpushed on main: favicon pipeline, logo SVG, shadow unification, homepage, `/prices` gate, vetted/trusted cleanup. **The favicon has been broken in SERPs for months** — a live credibility leak across **8,000 impressions at positions 6–7**, i.e. precisely the queries PP wins. Google's favicon pipeline needs its own crawl + propagation; **the clock cannot start until push.** Free, built, verified, gated.

### PRIORITY 1 — MEASURE the CTR rewrite (v15's P1, now shipped)
Titles are live; this export predates them. **Pull fresh GSC** (allow for the ~17-day lag) and compare amino-club / glacier / royal / oasis CTR against the baselines below. **Do not re-diagnose. Measure.**
**Baselines (Jun 10 – Jul 7, PRE-fix):**
| Page | Impr | Pos | CTR |
|---|---|---|---|
| amino-club | 6,092 | 6.6 | **0.87%** |
| glacier-aminos | 1,914 | 7.1 | **0.73%** |
| royal-peptides | 250 | 8.6 | **0.00%** |
| oasis-labs | 329 | 7.0 | 0.91% |
| midwest-peptide | 379 | 9.7 | **3.17%** ← the control |
| synthesis-peptides | 162 | 12.4 | **5.56%** ← the control |
The Midwest/Synthesis controls are what proved the title thesis. If amino-club hasn't moved toward 3%+, the rewrite didn't work and the cause is elsewhere.

### PRIORITY 2 — Diagnose the Ascension anomaly (new)
Position 5.3, 12 impressions, on our 50% "Best Deal" vendor, while a competitor earns ~150/mo on those queries. Check: indexing status, canonical, the code-forward title, whether the page is in the sitemap, and what actually ranks for "ascension peptides coupon" today.

### PRIORITY 3 — Reopen the vendor-review decision (new)
See the Review Gap above. Vendor reviews are (a) our competitor's best traffic, (b) on our own affiliates, (c) vendor-name queries = PP's only proven ranking strength. **This is a decision for Mark, not a build task** — reviews carry an independence/disclosure question, especially with the PP↔Capstone conflict live.

### PRIORITY 4 — v15's P2/P3, unchanged
Push pos-8–10 coupon queries to page 1 ("glacier aminos" pos 9.6/468 impr; "royal peptides coupon code" pos 8.6). Then the two surprise content pages: `/supplements/glucomannan` (2,057 impr, pos 12.3, **0.05% CTR**) and `/guides/syringes-and-injection` (1,363 impr, pos 12.0, 0.22%).

### DEPRIORITIZED — confirmed, with new evidence
- **Peptide intent/dosage pages** (the ChatGPT audit's plan): pos 60–90, ~no impressions. v15 was right; the 48.4 generic average is the structural reason.
- **The 53-page profile rollout:** profiles rank 50–90 (IGF-1 LR3: 702 impr, **0 clicks, pos 54.5**; TB-500: 572 impr, 0 clicks, pos 64.3). 53 more hand-authored profiles = 53 more of these. **Keep parked.**
- **More comparison pages:** 733 impr, 3 clicks across 13 pages.

---

## ⚠️ DATA CAVEATS (RULE #0)
- **This GSC export PREDATES the title fix.** Any CTR conclusion drawn from it is about the OLD titles.
- Queries.csv is capped at 1,000 rows — a longer tail exists.
- GSC lag ~17 days: flagged issues may already be fixed. Verify live before acting.
- Similarweb figures are **3-month totals** unless marked. ÷3 for monthly average. The ÷3 figure is a *quarter average*, not "June" — a declining site's latest month sits below it (SwissChems: 305K avg, 245K June).
- Aggregator keyword shares are Similarweb estimates, not GSC truth. Directional.
- 4 aggregators (pickpeptides, projectbiohacking, peppal, peptides-enhanced) are below Similarweb's reliable threshold — organic % unavailable, not zero.

---

## 📅 Changelog
**v16 (July 16, 2026):** Competitive intelligence pass. **v15's CTR diagnosis confirmed and unchanged.** Added: the vendor-name (pos 6.8) vs generic (pos 48.4) structural split; full aggregator sizing (peptiprices rents traffic at 9.5% organic/47.8% Display/↓54%; **thepeptidecatalog is the real competitor** at 73.7% organic ↑168%); aggregator keyword data; **the vendor-review gap** (competitor's #2/3/4 keywords are reviews of OUR vendors — reopen the no-reviews decision); **the Ascension anomaly** (pos 5.3, 12 impr, 50% vendor); price-intent is natural-language not "$/mg"; Similarweb 3-month labeling rule. **Flagged: P1 titles SHIPPED — this export predates them; next GSC pull is the measurement, not a re-diagnosis.** Added Priority 0: deploy the redesign (favicon leak across 8K impressions).
**v15 (July 9, 2026):** GSC data pulled + analyzed. Core finding: coupon/vendor-query dominated; biggest wins are CTR fixes on already-ranking coupon pages. Overturned the ChatGPT SEO audit's peptide-intent-page thesis. Priorities: (1) coupon title/meta rewrites, (2) push pos 8–10 to page 1, (3) glucomannan + syringes guide. Visual redesign parked behind SEO.

---

**Cross-ref:** PP_MASTER · PP_COMMISSIONS v3 · PP_SEO_LEDGER v3 · PP_VENDOR_PROSPECTING v18 · PP_PRICE_COMPARISON_PLAN v5 · PP_X_POSTS v44 · SCS_MP
**NEXT:** (0) **push the redesign** → (1) fresh GSC pull to MEASURE the title rewrite → (2) diagnose Ascension → (3) Mark's call on vendor reviews → (4) glacier/royal to page 1, then glucomannan + syringes.
