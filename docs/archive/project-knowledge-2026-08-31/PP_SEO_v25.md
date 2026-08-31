# PP SEO — v25

**Status:** ACTIVE. Full replacement, supersedes v23 and PP_SEO_LEDGER v5.
**Date:** August 10, 2026 — v25 adds **§4b submitted≠published** (aggregator verification + the historical-bests trap), **§4c promotion channels** (Google Ads peptide carve-out, Reddit viability + naming), **§7c the AI Overview citation win**, and **§7d SEO work shipped** (45 fact-led descriptions, four guards, codes-manifest, date derivation, shorthand redirects). v24 content carried forward.
**Scope:** what actually determines PP's search performance, the AI Overview finding, the competitive landscape, promotion channels, the schema decision, and what's genuinely actionable.

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

### 4b. 🆕 SUBMITTED ≠ PUBLISHED (August 9, 2026)

**63 codes submitted: HotDeals 41 of 41 accepted, SimplyCodes 22 of 41.** All with expiry `2100-12-31`, so listings never lapse on their own.

🔴 **But acceptance is not publication, and publication must be verified per vendor.**

- ✅ **BioLongevity Labs** — `PROFPEPTIDE` at 15% storewide is **live in SimplyCodes' Activity feed**. First confirmed publication. The pipeline works.
- 🔴 **Peptide Partners** — PP's code is **absent** from its SimplyCodes store page, despite being the first vendor submitted (the control). Either it never published or it was superseded.

**⚠️ AGGREGATORS PRESENT HISTORICAL BESTS AS CURRENT OFFERS.** SimplyCodes' Peptide Partners page reads *"currently has 2 active codes, top offer provides 33% off, above the 90-day average of 10%"* — and its own qualifier gives it away: *"historical data indicates this matches the best code of the year."*

**Mark's disproof, recorded as method:** if a live 33% code existed, nobody would use PP's 10% code — and Peptide Partners has produced referrals over the preceding days. **Live referral data beats an aggregator's claimed inventory.** Apply the same test before reacting to any aggregator's "top offer" figure.

**The tracking gap this exposes:** PP has tracked what was *sent* to each aggregator, not what *published*. Going forward the ledger must carry **both states per aggregator, per vendor** — submitted, and confirmed-live-with-a-date.

**Resubmission trigger:** whenever a new vendor page ships. Pending as of Aug 10: **AMP Peptides** and **Improved Peptides** (both live), plus Valkyrie when it unblocks.

---

## 4c. 🆕 PROMOTION CHANNELS — GOOGLE ADS AND REDDIT (researched August 10, 2026)

### 🟢 GOOGLE ADS — peptide suppliers have a NAMED CARVE-OUT

**Observed first:** Gmail Promotions-tab **Sponsored** placements from **LicensedPeptides** (BAC Water 30ml), **Amino Club** (GLP-2 (TR) 30MG), and **Modern Aminos** (Thymogen 20MG). Those are Google Ads placements. Mark's read — that vendors advertise on Google without workarounds — is **correct, and the policy basis is explicit.**

**The carve-out**, from Google's *Pharmaceutical manufacturers* policy: **bulk drug manufacturers, medical professional suppliers, and suppliers of antibodies, peptides, and compounds for commercial labs may advertise in specified locations only.** A secondary source puts those locations at the **US and Canada**. So peptide suppliers are a *permitted category*, not an enforcement gap.

**Three conditions attach:**
1. **Google certification required.**
2. **Geographic restriction** — US/Canada per the secondary source. ⚠️ Verify the current list against Google's own page before acting.
3. **Strict ad language** — RUO peptides are permissible only when copy is strictly scientific, avoids health terminology, and carries a research-use-only disclaimer. **The landing page must mirror the ad's compliance posture** — no hidden health claims.

**The observed ads comply exactly.** Amino Club's copy reads *"Research grade peptides with 99%+ purity. USA sourced, third-party tested"* — no health claim, no disease language, no efficacy implication. Modern Aminos labels Thymogen a "Research Compound." That framing is the requirement, not a stylistic choice.

🔴 **OPEN QUESTION — does PP itself qualify?** The carve-out names **suppliers**. PP is an affiliate and review site, a different category, and the policy text found does not address it. **Do not assume it transfers.** Confirm with Google Ads directly before spending.

**Prohibited regardless** (from the Unapproved substances policy): products implying they are as effective as prescription drugs or controlled substances; non-government-approved products marketed as safe or effective for preventing, curing or treating a disease; products subject to government or regulatory action. Violations get a warning at least 7 days before suspension.

---

### 🟡 REDDIT — viable, but the conflict is structural

**As a subreddit's own moderator Mark sets its rules**, so affiliate codes there are not a rule violation the way they are in r/Peptides.

**Three constraints:**

**1. Reddit's site-wide layer still applies.** Anti-spam applies site-wide suspensions on commercial account patterns — same link across subs, low comment-to-post ratio, or a reported domain. Owning a sub does not exempt the account. **Domain bans propagate:** a URL banned in one large sub's AutoMod can appear in dozens within a quarter because moderators copy configurations. **A `profpeptide.com` flag would cost the channel everywhere.**

**2. 🔴 The community already hunts for exactly this.** Sponsored posts, affiliated accounts and coordinated promotion are documented problems in peptide subreddits; affiliate-linked posts persist despite improved moderation. **A neutrally-named review sub owned by someone earning commission on those vendors is the specific pattern they watch for.**

**3. Cold-start.** The niche is occupied: **r/Peptides** (primary, hundreds of thousands of members, community-moderated vendor list) · **r/Peptidesource** (claims to be the only long-standing peptide research subreddit; runs its own off-site forum posting lab tests — *the model Mark described, already built; study it*) · **r/PeptideGuide** (smaller, curated, wiki links to community independent testing) · **r/PeptidesForSale · r/PeptideForum · r/PeptidesResearch · r/sarmssourcetalk**.

**Naming — a positioning choice, not a branding one.** A brand name (`r/ProfPeptide`) is honest on its face and carries PP's disclosed-verification positioning intact; it grows slowly. A descriptive name (`r/PeptideVendorReviews`) is searchable and indexed by Google, but presents as neutral while commercially owned — highest blowup risk. **Recommendation: brand name.** PP's entire differentiator is disclosed evidence-based assessment; a neutral name spends that rather than carrying it. **Candidates to check:** `ProfPeptide` · `PeptideVendors` · `PeptideCOAs` · `PeptideVendorReviews`. **`PeptideCOAs` is the sleeper** — closest to what PP does better than the existing communities.

**Availability check:** `https://www.reddit.com/subreddits/create` (live as you type). ⚠️ Claude cannot verify subreddit availability — Reddit blocks the fetch. Account age and karma minimums apply.

**If built, the survivable version:** codes in a **single pinned post and the sidebar only**, never sprinkled through threads · affiliation in the sub description, not a footnote · a public rule that vendor criticism is never removed · commission relationship stated up front.

**⚠️ Standard for subs Mark does NOT own** — r/Mounjaro's rule is representative: *"Businesses / third parties may not post or promote without prior mod approval and identifying flair. If you do not see flair: CAUTION it could be a scam."* Participate flaired and approved, or not at all. **Site-wide guideline is roughly 9 non-promotional contributions per promotional one.**

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

## 6. 🔒 SETTLED — INVESTIGATED, ANSWERED, DO NOT RE-RESEARCH

Each of these was a premise I raised, researched, and had disproven. **They cost multiple round trips, some of them twice, because the disproof was never recorded.** If a future chat proposes any of these, point here.

| Premise | Verdict | What's actually true |
|---|---|---|
| Coupon pages have inconsistent title formats | ❌ **FALSE** | All 45 live pages emit `{Vendor} Discount Code: {CODE} — Save X%`. Different formats in Google are stale snippets. |
| Glacier's title carries a "- Prof. Peptide" suffix others don't | ❌ **FALSE** | `buildCouponMetadata` **deliberately omits** the brand suffix — there's a code comment saying so. Google appends `og:site_name` at its own discretion. |
| Amino Club has special markup producing its price/in-stock snippet | ❌ **FALSE** | Identical JSON-LD to every page — Offer with **no `price`, no `availability`** — plus BreadcrumbList. Google extracts from the **visible price grid**. ~39 pages render the same grid. Amino Club is just the oldest. |
| Some pages lack BreadcrumbList, hence raw-path crumbs | ❌ **FALSE** | All pages emit it. Raw-path crumbs are pre-BreadcrumbList crawls. |
| Three coupon pages are missing from the sitemap | ❌ **FALSE** | One index → one child `sitemap-0.xml`, 280 URLs, **all 43 active pages present**. "No referring sitemaps detected" is a GSC processing artifact. |
| `/coupons` links are client-rendered so Google can't follow them | ❌ **FALSE** | App Router **SSRs client components**. All 43 vendor links are real `<a href>` in the 127 KB server HTML. |
| Oasis is discovered via a retired page still serving links | ❌ **FALSE** | `/coupons/synthesis-peptides` returns a **15-byte "Redirecting…" body**, no `oasis-labs` string anywhere. Stale referral, drops on recrawl. |
| Peptide Partners is link-starved, hence NOT FOUND | ❌ **FALSE — inverted** | **68 inbound links, 2nd-most-linked page on the site.** Amino Club has 59. Internal linking is not the cause. |
| Crush, Treasure Coast and Modern Aminos lack OG routes | ❌ **FALSE** | Retrofitted July 31 in `0db7913`. **All 45 pages carry both.** What Google shows is a card cached before that fix. |
| Real Peptides' missing verified stamp is a sitewide regression | ❌ **FALSE** | Per-vendor. It was absent from `VENDORS_VERIFIED_SLUGS` because onboarding postdated the last `check:vendors` run by three days. |

### The one thing they all have in common

**A GSC entry, a search result, or a URL Inspection field describes what Google saw on its LAST CRAWL — not the site now.**

Six separate investigations this session produced **zero code changes**. Before opening another: check the last-crawl date, curl the live artifact, and read the browser tab — it shows the live `<title>`.

> ⚠️ **The Discovery field is the subtlest one.** "Discovered via {page}" records where Google last recorded finding a URL. It is **not** a list of what links to it, and **not** evidence that other paths are unfollowable.

### Real defects found in the same passes — for contrast

Not everything was a false alarm. These were genuine and are fixed: the `Priceafter 20% code` separator bug · nordic-peptides and apollo-peptide-sciences 404ing with no redirect · Real Peptides' missing verified stamp · four pages ranking `/coupons` instead of themselves *(content depth, still open)* · Glacier's dead code in the live snippet *(recrawl requested)*.

### Link poverty — real, but not where I looked

Genuine floor cases at **3 inbound links** (the bare registry baseline of hub + `/vendors` + `/vendor-testing-index`): **nova-labs · licensed-peptides · limitless-biotech · real-peptides**. Then particle-peptides (4) and integrative-peptides (6).

All are onboarding-backlog or thin vendors with no `/prices` rows and few `/peptides` profile mentions. **Nova is one of only three vendors where the AI Overview names PP's code as its sole answer — and it sits at the floor.** Worth addressing as a content question, separate from anything above.

---

## 7. 🔴 THE STALE-GSC RULE

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

**🔒 QUOTA IS A ROLLING WINDOW, NOT A DAILY RESET.** Roughly 10–12 URL Inspection submissions per property, but the count does **not** clear at midnight — submissions from the previous day still count against you. Confirmed August 8: eleven were spent on August 7, and a single submission the next morning returned **Quota Exceeded**.

> **Retry LATE in the following day, not early** — more of the prior batch has aged out.

Only submit a page that is **stale AND old AND has traffic**. A page crawled in the last 72 hours gains nothing.

⚠️ **A recent crawl does not mean a fresh snapshot.** Midwest was crawled at 2:06 AM on August 8 and still stored `PROF10` — the fetch landed before the deploy. Check the *stored copy*, not just the crawl date.

### 🟡 The synthesis-peptides referral anomaly

`/coupons/synthesis-peptides` is **retired** — it 308s to `/coupons` with a 15-byte "Redirecting…" body and no link-bearing HTML. CC verified this directly.

Yet it appears as a **referring page on four of seven URLs checked** this session, while the `/coupons` hub — which server-renders real `<a href>` links to all 43 vendors — appears as a referrer for almost none.

**Not actionable.** The redirect is correct, the hub's links are crawlable, and nothing in the repo is broken. But it means Google is still working from a link graph predating the July 24 retirement. Worth watching whether it clears as pages recrawl.

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

## 7c. 🆕 THE AI OVERVIEW CITATION WIN (August 9, 2026)

**Query: `peptide partners discount code` — unbranded, PP's code not typed.**

Google's **AI Overview names PROFPEPTIDE in its opening sentence**: *"Use the code KLIKOOGQWG or PROFPEPTIDE at checkout on the Peptide Partners Shop to save 10%."* **And profpeptide.com is cited as a source card** in the side panel, alongside peptidestack.io.

**Three things make this significant:**
1. **PP is cited where it does NOT rank first organically** — SimplyCodes outranks it on the same SERP. So the AIO citation is not merely following organic position.
2. **PP's snippet renders correctly** — *"Peptide Partners Discount Code: PROFPEPTIDE — Save 10%"* — no suppression, unlike Glacier.
3. **Peptide Partners was the aggregator control** (first submitted to SimplyCodes and HotDeals) and is the highest-earning relationship. The channel and the citation coincide on the same vendor.

**Competing codes the AIO surfaced alongside PP's:** `KLIKOOGQWG` (10%, matches PP exactly) and `NotoriousNAD` (15% on specific NAD+ kits plus free BAC water — **beats PP on those SKUs**). A reader comparing codes sees all three.

**Baseline for tracking.** Re-check this query periodically; AIO citation is the outcome PP_SEO §1 identified as the real competition.

---

## 7d. 🆕 SEO WORK SHIPPED (August 9–10, 2026)

**🔴 Description differentiation — all 45 rewritten.** CC established Glacier's snippet suppression was **not a data bug**: every surface reconciled (title, meta, og, twitter, JSON-LD Offer, H1, code card, FAQ, price grid, prose — 23 mentions of code and percentage, zero disagreement), and the canonical **is in the initial server HTML head**, present in a no-JS curl. GSC's "User-declared canonical: None" is a crawl-state artifact.

**Diagnosis: templated similarity.** All 45 descriptions shared one shape with only the trailing clause varying.

**Fix shipped:** `{fact lead} — code {CODE} saves {X}% at {Vendor}, verified {month}.` A fact-led lead, assigned by a deterministic A/B/C/D waterfall from `vendors.ts`, 100% derived. **Tier distribution A=22, B=5, C=6, D=10. Longest 123/155** under worst-case "September 2026."

⚠️ **The budget forced the restructure** — `amino-x` was at 149/155 with 6 chars of headroom. The old scaffolding ("Use code X at Vendor **to save** Y% **sitewide — verified and working for** {month}") was ~45 chars of filler; tightening freed the room.

⚠️ **Truth discipline held under length pressure.** 99 Purity leads with "Eagle Analytical per-batch COAs, ≥99%" and **deliberately drops any HPLC/MS claim** (its verified method is USP <621>); aero drops "ISO-lab" (no accreditation recorded). Multi-lab vendors fall to tier D.

**Expectation:** Google re-crawls on its own schedule. **Whether this lifts Glacier's suppression will not be visible for weeks.** Next lever if it doesn't: varying the *tail*, deliberately left alone.

### Guards built this session

| Guard | Covers | Negative-tested |
|---|---|---|
| `check:sitemap-noindex` | Fails the build if any sitemap `<loc>` resolves to a noindex page. Reads robots **statically**; uses `prices.index.json` `indexable` for the conditional `/prices/<compound>` case; treats redirects and noindex as distinct | ✅ removed `/vendors` from `DROP_EXACT` → exit 1 naming the file |
| `check:codes` **Tier 1+2** | Every code literal in a coupon page must equal `vendors[slug].code` (99 codes / 45 pages); every `VendorHighlightBlock` note must match (4) | ✅ flipped a code → `glacier-aminos/page.tsx:122 found PROF10, expected PROFPEPTIDE` |
| `check:codes` **Tier 3** | Stray code literals in prose outside a coupon page or highlight note. Excludes comments and affiliate-URL query params | ✅ `methodology/page.tsx:65 PROF10` |
| `check:coupon-prose` **claims dimension** | Unattributed **ratings** (`N.N/5`, `N out of 5`) and **totals** (`N,NNN+ customers/orders/researchers/clients`) — same-sentence attribution marker required | ✅ injected rating → `spartan-peptides/page.tsx:38 [rating]` |

⚠️ **Deliberately NOT guarded:** facility, superlative, purity and shipping claims. A naive version throws ~30 false positives because "attributed by a certificate I read" is invisible to a regex. Needs a cert-backed allowlist first.

⚠️ **`check:coupon-prose` caught its own author** — CC's first draft used "does not publish COAs," correctly rejected as withholding framing.

### `codes-manifest.json` — the four-surface handle

**Live at `https://profpeptide.com/codes-manifest.json`**, 45 entries, regenerated each build, **committed** (not gitignored) so git history *is* the propagation change-log. Active vendors only — a vendor dropping out is the signal to pull its aggregator listings.

**The four-surface SOP** (written into `check-codes.mjs`): 1. site (`vendors.ts`, guard verifies) · 2. live X posts (immutable, must be reissued) · 3. SimplyCodes + HotDeals (expiry 2100-12-31, never lapse, hand-edit) · 4. Google's cache (request re-indexing; snippet **and AI Overview** may lag or never update). **Glacier is the worked example** — code changed Aug 6; SERP snippet and AIO still served PROF10 two days later. **The guard covers only surface 1.**

### Dates: derived vs hardcoded — settled

`(July 2026)` was removed from `/best-peptide-vendors` in `42431fd` because the H1 said July while the badge said August. The date moved to a hand-set badge — now **derived from `FEATURED_VENDORS_REVIEWED_ISO`**, its **own constant**, deliberately not `CODES_VERIFIED_DATE` (a *machine* stamp from `check-vendors.mjs`; the badge means a *human* re-reviewed the list). JSON-LD `dateModified` points at the same constant.

**Everything else carrying a date is correct as-is:** coupon meta descriptions derive from `CODES_VERIFIED_DATE`; news article titles name a fixed event and *should* stay stamped; supplement citation years are permanent.

### Shorthand redirects

`/prices/nad` → `nad-plus` · `/prices/kisspeptin-10` → `kisspeptin` · `/prices/melanotan-2` → `melanotan-ii` · `/prices/melanotan-1` → `melanotan-i`. All 308.

⚠️ **`/prices/nad` was a phantom** — Claude invented the slug when writing a CINC submit list. Nothing linked to it; GSC never discovered it. All 70 index slugs route (symmetric difference empty).

**Deferred pending GSC hits:** the synonym class (`ibutamoren`→`mk-677`, `bremelanotide`→`pt-141`, `elamipretide`→`ss-31`, `thymosin-beta-4`→`tb-500`) and the no-dash class.

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
| **🔭 MONITOR — parasite SEO on high-authority domains** | See below |
| HotDeals / ScoopCoupons / ShipTheDeal submission mechanisms | CINC, unchecked |
| The "AIO cites PP" cohort — why BioCollex, Nova Labs and Midwest | CINC |
| Whether X posts feed these SERPs at all | PP's X account surfaced in none of six SERPs |
| `/peptides` and `/supplements` render dynamic via `?category` | `additionalPaths` patched the sitemap; the static fix is the `[slug]` restructure |
| Content depth on the four cannibalised pages | Not scoped |

### 🔭 Parasite SEO — track whether it keeps working

Several results outranking PP aren't winning on merit. They're **posted on high-authority domains that accept user content**, inheriting the host's ranking:

| Surface | What it actually is |
|---|---|
| **`opensource.ieee.org`** | A GitLab instance IEEE runs for open-source projects. Anyone with an account can post a snippet, and they're publicly indexed. Google reads `ieee.org` as high-trust. **IEEE endorses nothing.** |
| **DeviantArt** | Art-hosting profile posts, dated "1 day ago" |
| **F6S** | Startup-directory listings |
| **LinkedIn newsletters** | Pushing `ASD10`, `RAMBO20`, `RAMBO50` |
| **Genially** | Presentation-hosting, cited in Ascension's AI Overview |
| **Reddit** | `r/referralcodes`, `r/MidwestPeptide` — outranked PP's own Glacier page |

**Why it works:** these pages have no topical authority. They win on the host domain's trust plus **recency** — results dated "1 day ago" and "5 hours ago" outrank PP's established pages. Google treats coupon queries as a freshness query.

> ⚠️ **PP should NOT copy this.** It works until the host purges it, and PP's entire positioning is being the credible source rather than the one gaming placement. The legitimate version of the same insight is that cited publishers appear on **multiple real surfaces**, while PP appears only on profpeptide.com.

**What to check periodically:**
- Are these placements still ranking, or have hosts purged them?
- Is the same operator behind several — the codes `ENZGE`, `PEP25`, `SKY10` all trace to this layer
- Does Google's treatment of these domains change? A crackdown would lift PP's positions without PP doing anything
- Whether any competitor moves from parasite placements to genuine content

**Baseline, August 7 2026:** IEEE snippet ranked above PP on Midwest. DeviantArt and F6S held positions 2 and 3 on Amino Club with `ENZGE`. Reddit r/referralcodes outranked PP's Glacier page. Instagram appeared above PP on Glacier.

---

*Rank high, code visible. Clicks are not the goal. Verify live before treating any search result as current state.*
