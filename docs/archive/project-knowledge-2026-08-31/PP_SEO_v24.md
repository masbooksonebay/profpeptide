# PP SEO — v24

**Status:** ACTIVE. Full replacement, supersedes v23 and PP_SEO_LEDGER v5.
**Date:** August 7, 2026
**Scope:** what actually determines PP's search performance, the AI Overview finding, the competitive landscape, the schema decision, and what's genuinely actionable.

> **The single most important thing in this document:** PP's goal is **rank high with the code visible in the snippet** — not clicks. A searcher who reads `PROFPEPTIDE` in a result, copies it, and goes straight to the vendor earns commission and registers as **zero clicks** in GSC. That is a success, not a failure. Every metric below is read against that.

---

## 1. THE HEADLINE — AI OVERVIEWS, NOT COMPETITORS

**Google fires an AI Overview on 27 of 47 vendor queries (57%).** It answers the coupon question outright — code, discount, checkout steps — above every organic result.

**The cleanest proof:** Glacier Aminos sits at **average position 3.9 with 214 impressions and ZERO clicks** over 28 days, per Google's own inline widget. Position four, no clicks.

**The control case:** Midwest Peptide has **no AI Overview on any of its three phrasings, and PP ranks #1 on all three.** Same site, same template, same title format. The variable that moves is AIO presence.

### 🔴 PP's code appears in the AI Overview on six vendors

| Vendor | What the AIO says |
|---|---|
| **Nova Labs** | **`PROFPEPTIDE` as the sole and primary answer** |
| Midwest | `PROF10` second, **with PP as a cited source card** |
| **Glacier** | **`PROF10` — PP's DEAD code**, second answer |
| Amino Club | `PROFPEPTIDE` demoted to "alternative active codes" |
| BioCollex | Names Prof. Peptide as a source, won't quote the code |
| Spartan | Tells the reader to "check coupon aggregators like Prof Peptide" |

**On the other 21 AIO vendors PP isn't cited at all** — Google synthesizes from PSTACK, ENZGE, SimplyCodes and IEEE-snippet sources.

> 🔴 **Glacier's dead code has propagated into an AI Overview.** PP's stale snippet is the source Google's AI read. That makes the recrawl more urgent than a normal stale snippet — the wrong answer is now one layer further out and much harder to correct.

**Also worth knowing:** Royal Peptides' AI Overview **refuses to answer**, citing research substances. Google sometimes won't touch this category at all.

---

## 2. WHERE PP ACTUALLY RANKS

PP appears at all on **15 of 47** vendor queries. Sitewide `/coupons`: **318 clicks, 25.2K impressions, 1.3% CTR, average position 7.4** over three months.

**Top pages by impressions:** amino-club 147/13,430 · glacier-aminos 37/3,869 · midwest-peptide 29/837 · peptide-partners 26/1,508 · synthesis 13/329 · oasis-labs 11/973 · biocollex 7/182.

**PP ranks #1 on:** Midwest, BioCollex, Spartan, Legendary, Nova Labs.

### 🔴 Four pages lose their own queries to the `/coupons` hub

| Query | Ranks instead |
|---|---|
| treasure coast peptides discount code | `/coupons` |
| almighty peptides discount code | `/coupons` |
| ignite peptides discount code | `/coupons` |
| **amino x discount code** | **`/coupons/amino-club`** — a different vendor |

**Not a canonical problem.** All four have self-referencing canonicals and correct titles. The hub renders every vendor's name and code — `PROFPEPTIDE` 66 times — and outweighs thin vendor pages.

**Amino X is a name-collision plus authority gap:** amino-club's page never mentions "Amino X," but it's 4,726 prose characters against amino-x's 2,712 — the thinnest on the site. Google resolves the ambiguous "Amino…" query to the stronger page. **The fix is content depth, not tags.**

---

## 3. THE COMPETITIVE LANDSCAPE — TWO GROUPS

### Group A — peptide sites (the real competitors)

| Domain | Notes |
|---|---|
| **peptidestack.io** | Present on EVERY vendor. Publishes its own codes — `PSTACK`, `KLIKOOGQWG` |
| **thepeptidecatalog.com** | The only competitor consistently showing **per-mg prices** — PP's own differentiator |
| **peppal.app** | Publishes `PEPPAL` |
| **peptidedosingprotocols.com** | Publishes `PEPPAL`, dated verification claims |
| peptidesourcereview.info | Publishes `PSR` |
| projectbiohacking.com | Publishes `PROBIO15` |

> ⚠️ **These publish COMPETING affiliate codes for the same vendors.** A reader choosing between PP and peptidestack is choosing between two affiliate codes. This is the only competitive set worth tracking closely.

### Group B — generic aggregators (not PP's fight)

**Tier 1, above PP on most vendors:** simplycodes.com (by a wide margin — #1 or #2 on roughly half the roster) · the WorthEPenny subdomain farm (`{vendor}.worthepenny.com`) · the TenereTeam subdomain farm · hotdeals.com.

**Tier 2:** scoopcoupons.com · shipthedeal.com · dealspotr.com · chemverify.com · valuecom.com subdomains · knoji.com subdomains.

**Tier 3 — the AIO citation layer:** opensource.ieee.org snippets · DeviantArt · F6S · LinkedIn newsletters · Instagram · Reddit. These rarely outrank PP but are **disproportionately what the AI Overview cites** — `ENZGE`, `PEP25` and `SKY10` all originate here.

> **PP is fighting roughly eight aggregators and two programmatic subdomain farms, everywhere, simultaneously — the same fight 47 times, not 47 different fights.** These are cross-category scrapers. PP isn't built to compete with them and shouldn't try.

**But track when they displace PP's code.** HotDeals ranks #1 on all three Amino Club phrasings with `AMINO1`; the AIO recommends `ENZGE`. Neither is PP's.

**The UGC layer wins on RECENCY, not authority.** DeviantArt and F6S posts dated "1 day ago" and "5 hours ago" outrank PP. Google treats coupon codes as a freshness query.

---

## 4. 🆕 COUPON AGGREGATORS — SUBMISSION MECHANISMS

Several accept submissions. **Under PP's model this is distribution, not competition** — a PP code at position 1 on an aggregator reaches the buyer better than a PP code at position 3 on profpeptide.com.

| Site | Accepts submissions? | Mechanism | Notes |
|---|---|---|---|
| **SimplyCodes** | ✅ **Yes** | `simplycodes.com/submit-coupon` — "we'll post your code after a quick review," rewards for contributors | ⚠️ Asks contributors to submit only **publicly available** codes and avoid private or creator-exclusive ones. **PP's codes are published on profpeptide.com, so they qualify.** Cleanest fit. |
| **Dealspotr** | ✅ Yes | "Post a Deal" flow, crowdsourced | ⚠️ **Affiliate links are banned** and overwritten — but codes are explicitly allowed, including "codes you've created for your own business." **The link ban doesn't matter: PP's attribution is the code.** Requires a checkout screenshot; new members capped ~10 deals/day. 🔴 **Merchant reviews on Trustpilot allege they fish for codes using fake customer emails and hide behind other affiliates on ShareASale.** Weigh against 45 vendor relationships. |
| **WorthEPenny** | ❌ Likely not | "Hand-tested," "savings experts verify 1,000+ codes daily" — internal sourcing | No public form found |
| HotDeals · ScoopCoupons · ShipTheDeal | ❓ Unknown | — | **Not yet checked. Queued for CINC.** |

**Recommended test:** submit `PROFPEPTIDE` for **one** vendor to SimplyCodes and see whether it posts and ranks. One form, no downside. Hold Dealspotr pending the merchant-relations question.

---

## 5. ❌ SCHEMA — THREAD CLOSED, DON'T REOPEN

### Product / AggregateOffer with price + availability — **NO**

Three independent reasons:

1. **The honest hedge can't be encoded.** PP's grids are stamped *"prices current as of {date}"* because the pull is periodic. Schema has no field for that — `priceValidUntil` asserts validity **forward**, the opposite claim. The thing that makes the visible grid honest cannot survive into markup.
2. **No price is the right price.** Post-code price is conditional on applying PP's code and may not stack with a vendor sale. Base price omits PP's entire differentiator. No schema field expresses "price with this coupon."
3. **PP is not the seller.** A merchant-listing Offer would be misleading structured data. `AggregateOffer` with `seller` as the vendor is the only defensible shape, and a single vendor's catalog is a weak aggregator signal. Low probability of the snippet × high cost if flagged — **a manual action would suppress rich results across all 45 pages.**

### FAQPage — **NO**

- Google restricted FAQ rich results in **August 2023** to well-known government and health sites. For a commercial affiliate it renders **nothing**.
- **PP already ran the experiment**: FAQPage is live on the supplement pages and `/faq`, and has been inert since.
- The accordion renders answers as `{open && …}`, so answer text isn't in server-rendered HTML — Google would crawl questions with no answers.
- Two items per page are promotional ("use code PROFPEPTIDE…"), which Google's FAQ policy disallows.
- 45-file touch for zero SERP gain.

### What PP already has, and it's saturated

Homepage: Organization + WebSite + **SearchAction**. News: NewsArticle + Organization. Peptide profiles: Article + Organization. Supplements and `/faq`: FAQPage (inert). Coupon pages: **Offer + BreadcrumbList**.

> **BreadcrumbList is the one that pays** — it produces `profpeptide.com › Discount Codes` instead of a raw path. Already on all 45. Keep it. **`aggregateRating` is off the table** — PP displays no ratings, so it would be fabricated.

---

## 6. 🔴 THE STALE-GSC RULE — FIFTH INSTANCE

**A GSC entry, or a Google search result, describes what Google saw on its last crawl. Not the site now.**

Check the last-crawl date and curl the live artifact **before** opening any investigation.

Confirmed zero-code-change investigations: the P0 canonical defect · two 404s · a duplicate cluster · 11 trailing-slash "redirect errors" · a title-format audit that turned out to be entirely stale snippets.

**Corollary — the browser tab reads the live `<title>`.** If the tab is right and Google is wrong, the page is fine.

**GSC lag is ~17 days.** Anything shipped inside that window won't show.

### Things that LOOK like defects and aren't

- **The title suffix.** `buildCouponMetadata` deliberately omits "| Prof. Peptide" — there's a code comment saying so. Google appends `og:site_name` at its own discretion.
- **The breadcrumb difference.** All pages emit BreadcrumbList; raw-path crumbs are pre-BreadcrumbList crawls.
- **Amino Club's rich result.** It has **no special markup** — identical JSON-LD to every page, no Product, no microdata. Google extracts price and in-stock from the **visible price grid**. ~39 pages render the same grid; Amino Club is just the oldest.
- **Vercel bot challenge.** Repeated curls trigger `x-vercel-mitigated: challenge` and return **403 on everything**, which looks like a broken redirect. Verify through the browser.
- **Sitemap "no referring sitemap."** All 43 active coupon pages are in `sitemap-0.xml`. GSC crawl-lag, not a gap.
- **www duplicates.** `www.profpeptide.com/coupons/*` returns a clean 308 to apex. Historical GSC rows age out.

---

## 7. CRAWL AGE AND THE SUBMIT LIST

**URL Inspection allows roughly 10–12 manual submissions per property per day.** Only submit a page that is **stale AND old AND has traffic**. A page crawled in the last 72 hours gains nothing.

**Last-crawl dates as of Aug 7:** limitless-biotech Aug 6 (1 day) · amino-club Aug 5 (2) · legendary Aug 4 (3) · glacier Jul 31 (7) · treasure-coast Jul 29 (9) · oasis Jul 28 (10) · mile-high Jul 26 (12) · amino-x Jul 23 (15) · ascension Jul 21 (17) · peptide-partners Jul 12 (26) · **ez-peptides Jun 12 (56 days — oldest on the property)**.

**Day 1 submit list, in order:**

1. 🔴 **`/coupons/glacier-aminos`** — ranks #4, 3,869 impressions, and its live snippet **advertises PROF10, a dead code**. Active revenue leakage, and it's seeding the AI Overview.
2. `/coupons/ez-peptides` — 56 days, oldest crawl
3. `/coupons/peptide-partners` — 26 days, 1,508 impressions, a Professor's Pick
4. `/coupons/oasis-labs` — 10 days, 973 impressions
5. `/coupons/ascension-peptides` — 17 days, carries the 50% offer

**Do NOT submit:** amino-club, limitless, legendary (all crawled within 72 hours) · treasure-coast, modern-aminos, crush, midwest (titles already match live) · mile-high, 99-purity, licensed (impression ceiling too low).

**amino-x is broken in the index** — Google has the `/coupons` index title on a vendor URL, citing "25 vendors" when the site lists 43. **Diagnose before submitting**, or you recrawl the same wrong output.

---

## 8. WHAT'S ACTUALLY ACTIONABLE

Most of what the recon found **isn't fixable**. AI Overview presence isn't controllable. Ranking against simplycodes and two subdomain farms is an authority problem. Schema is closed.

**Genuinely actionable, in order:**

1. **Submit Glacier for recrawl.** Dead code in the snippet and in an AI Overview.
2. **Thicken the four cannibalised pages** — amino-x especially, at 2,712 prose characters against amino-club's 4,726. Content depth, not tags.
3. **Test SimplyCodes submission** with one vendor's code.
4. **Keep codes and dates current in meta descriptions.** They're what a searcher copies. A stale month or a dead code is the most damaging thing on the page.
5. **Consider a recency play.** The UGC layer wins on freshness alone. PP already writes code content constantly for X — whether any of it can surface in these SERPs is untested.

**Shipped this session:** `check:og-routes` (all 45 pages carry both routes) · verified-stamp guard in `check:surfaces` · the `Priceafter 20% code` separator fix · 308 redirects for nordic-peptides and apollo-peptide-sciences.

---

## 9. OPEN

| Item | |
|---|---|
| HotDeals / ScoopCoupons / ShipTheDeal submission mechanisms | CINC, unchecked |
| The "AIO cites PP" cohort — why BioCollex, Nova Labs and Midwest | CINC |
| Whether X posts feed these SERPs at all | PP's X account surfaced in none of six SERPs |
| `/peptides` and `/supplements` render dynamic via `?category` | `additionalPaths` patched the sitemap; the static fix is the `[slug]` restructure |
| Content depth on the four cannibalised pages | Not scoped |

---

*Rank high, code visible. Clicks are not the goal. Verify live before treating any search result as current state.*
