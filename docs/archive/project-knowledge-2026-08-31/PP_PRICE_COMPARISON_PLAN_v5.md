# PP Price-Comparison Section — Plan & Competitive Teardown

**Status:** PLANNING — 🔓 **UNBLOCKED: the CINC traffic-sizing is DONE (July 16).** Findings materially change the case — read the July 16 section first. Build DEFERRED behind (1) deploy, (2) measure the shipped CTR fix, (3) Ascension anomaly, (4) the reviews decision.
**Version:** v5 (July 16, 2026) — **CINC sizing complete + GSC evidence.** Key findings: peptiprices RENTS its traffic (9.5% organic, ↓54%) and peptidecritic is DIRECT-led (14.6% organic) — **so v4's "follow Peptidecritic format" copies sites whose traffic isn't earned in search**; the only real organic competitor is **thepeptidecatalog at ~13K/mo**. **PP cannot rank generically** (vendor-name queries pos 6.8 vs generic pos 48.4) — the hard constraint. Price intent is real but phrased in natural language, not "$/mg". **Reopen the no-reviews decision.** Solve the Ascension anomaly first.
**Prior version:** v4 (July 14, 2026) — format/design direction: follow Peptidecritic format, big search bar, white/modern redesign
**Owner split:** Mark pulls price data (monthly); Claude designs structure + specs CC; CC builds; CINC sizes competitors.

---

## 🔓 UNBLOCKED — the CINC traffic-sizing this plan was waiting on is DONE (July 16, 2026)

v4's status read *"Build pending CINC traffic-sizing."* **That sizing is complete.** Results below, plus GSC evidence that materially changes the case for this build. **Read this section before acting on anything below it.**

### 1. The competitive prize is SMALL — and the biggest name is a mirage
| Site | Monthly | Trend | **Organic %** | Read |
|---|---|---|---|---|
| peptiprices.com | 218K | **↓54%** | **9.5%** | 🔴 **RENTS its traffic — 47.8% Display ads.** Not a ranking competitor at all. |
| peptidecritic.com | 98K | ↑31% | 14.6% | **Direct-led (43%)** — brand/bookmarks, not search. |
| peptidedeck.com | 37K | ↑30% | **45.2%** | Compound/dosing play. Not a coupon/price competitor. |
| **thepeptidecatalog.com** | **13K** | **↑168%** | **73.7%** | 🔴 **THE REAL COMPETITOR** — PP's exact model, compounding. |

**v4's premise — "follow Peptidecritic format" — needs re-examining.** Peptidecritic's 294K is **direct traffic**, not earned ranking. peptiprices' 654K is **bought**. Copying the format of sites whose traffic doesn't come from search is copying the wrong thing. **The only aggregator that actually ranks is thepeptidecatalog — at ~13K/mo.** That's the realistic prize.

### 2. 🔴 PP CANNOT RANK GENERICALLY — the hard constraint on this build
GSC, 28 days (Jun 10 – Jul 7), 1,000 queries:

| Query type | Queries | Impressions | Clicks | **Avg position** |
|---|---|---|---|---|
| **Contains a vendor name** | 126 | 5,707 | 47 | **6.8** |
| **No vendor name** | 874 | 3,665 | 10 | **48.4** |

**PP ranks page 1 with a vendor name in the query, page 5 without one.** "Cheapest tirzepatide" is a generic query. PP ranks **87.8** for "tirzepatide".

**The precedent is already on the site:** `/compare` — 17 pages built, 13 indexed, **733 impressions, 3 clicks**, mostly position 30–60. That's not a failed experiment; it's PP's *normal* performance on non-vendor content. **A generic price section is a bet on an ability PP has never demonstrated in 1,000 queries.**

⚠️ **Do NOT cite "PP has zero price-intent impressions" as evidence against the price page.** PP has no live price page — `/prices` is committed, unpushed, and gated noindex. An absent page ranking for nothing proves nothing. *(Claude made this circular error July 16.)*

### 3. Price intent EXISTS — but nobody searches "$/mg"
thepeptidecatalog and peptidedeck rank for it in **natural language**:
- **"cheapest price for tirzepatide"** (peptidedeck, 0.86%)
- **"where to buy good quality mots c but not expensive"** (thepeptidecatalog, 1.51%)
- **"is liquid retatrutide more costly than powdered"** (thepeptidecatalog, 1.36%)

**Neither ranks meaningfully for clean "X price per mg" queries — that's genuinely open space.** But it may be open because nobody searches it.
**→ If this ships, target "cheapest [compound]" / "[compound] cost" phrasing in titles and H1s. "$/mg" is the DATA MODEL, not the keyword.**

### 4. 🔴 THE REVIEWS DECISION SHOULD BE REOPENED
This plan explicitly decided **against** vendor reviews. New data says that decision is handing our only real organic competitor its best traffic:

thepeptidecatalog's top non-brand keywords include **"ascention peptides review" (2.01%), "ez peptide" review (1.29%), "ion peptides reviews" (1.22%)** — plus its **#1 keyword** is "peptide sciences shut down alternatives" (PP has that page: **10 impressions, position 25.1**).

**Ascension and EZ are OUR affiliates. We have coupon pages for both.** And crucially: **reviews are vendor-name queries — the one class PP demonstrably ranks for (pos 6.8).** This is the rare case where the competitive gap and PP's proven strength point at the same page type.
**→ Mark's decision, not a build task.** It carries an independence/disclosure question, sharpened by the live PP↔Capstone conflict.

### 5. 🔴 THE ASCENSION ANOMALY — solve this before building anything new
`/coupons/ascension-peptides` ranks **position 5.3** and gets **12 impressions**. thepeptidecatalog earns **~150 visits/mo** on Ascension coupon/review queries. **The demand exists, PP ranks for it, PP gets 12 impressions.** Ascension is our **50%-commission "Best Deal"** vendor — the most valuable coupon page we own, producing nothing. Same pattern on EZ (17 impr, pos 8.7).
**Fixing a page that already ranks beats building a new section.**

---

## 🧭 REVISED RECOMMENDATION (July 16)

**The three-tier division still holds** (`/prices` comprehensive, no quality claim · `/coupons` "codes we have" · `/best-peptide-vendors` curated). The **data model is genuinely differentiated** — net peptide content and blend standardization (see PP_X_POSTS v44) are things NO aggregator publishes, and they validate the $/mg denominator nobody else checks.

**But the sequencing should change.** In priority order:

1. **PUSH THE REDESIGN.** ~15 commits unpushed. The favicon has been broken in SERPs for months — a credibility leak across 8,000 impressions at positions 6–7, the queries PP actually wins. Free, built, verified.
2. **MEASURE the shipped CTR rewrite.** The code-forward titles are live; the GSC export predates them. Next pull is the measurement. amino-club at 0.87% CTR / position 6.6 / 6,092 impressions is leaking ~250 clicks/mo — **more than the entire realistic price-page prize.**
3. **Diagnose Ascension** (pos 5.3, 12 impressions, 50% vendor).
4. **Decide on vendor reviews** — competitor's best traffic, on our vendors, in our proven query class.
5. **THEN the price section** — as a long play, targeting "cheapest [compound]" phrasing, with the net-peptide-content data as the differentiator.

**This is "not first," not "not at all."** The price page is the only thing here with a defensible moat. It's just slower and less certain than fixing pages that already rank.

**Owner split unchanged:** Mark pulls price data (monthly) · Claude designs structure + specs CC · CC builds · CINC sizes competitors *(done)*.

---


## 🎯 THE CONCEPT

A peptide price-comparison section on profpeptide.com: per-compound tables showing vendor prices, with PP's affiliate codes applied. Validated by referral data — peptiprices = 10.8% of Orbitrex's referrals; peptidecritic = 72% of ezpeptides' referrals. High-intent search traffic ("[compound] price," "cheapest [compound]") converts to vendor referrals = PP's affiliate model.

**PP's differentiator vs. pure-comparison sites:** PP already has the CONTENT half — peptide profiles, verified brand, honest COA/testing per vendor. Competitors have prices but no trusted content ecosystem. PP can link each compound → its profile, each vendor → its coupon page/COA. That's the moat.

---

## 🔍 COMPETITIVE TEARDOWN (fetched live July 13, 2026)

### PeptiPrices (peptiprices.com) — the PURE PRICE-TOOL model
- **Structure:** ONE filterable master `/prices` page. ~64 compounds as cards; each card shows top-3 cheapest vendors + "+N more" expandable. Filter chips (Retatrutide, Tirz, etc.), sort by popularity/name/price/category.
- **🔑 DUAL PRICE per vendor:** shows `$36.00*` (with code, prominent) AND `$40.00` (struck-through, without). THIS IS THE CODE-ADVANTAGE MODEL — confirmed as industry-standard winning pattern.
- **🔑 PER-MG NORMALIZATION:** `Total` vs `mg/mL` toggle — normalizes across vial sizes so a 10mg@$40 vs 20mg@$70 compare honestly. MUST-HAVE.
- **Every link is their affiliate link** (`?ref=PEPTI`, `/aff/pepti`, `?coupon=PEPTI`). ~60 vendor relationships (footer).
- **Cheapest-first sort** within each compound (with code applied) → best deal surfaces first.
- **Stock status** (In/Out) per vendor.
- **SEO:** meta keywords stuffed with "cheap [compound]" + every vendor name. Next.js.
- **⚠️ Their vendor roster overlaps PP's targets:** Ion Peptide, LA Peptides, Orbitrex, EZ, Simple Peptide, Modern Aminos, Glacier — they already monetize vendors PP is chasing. Space is competitive + proven; SPEED matters.
- **Weakness:** pure prices, NO content/testing/purity depth. This is PP's opening.

### Peptide Critic (peptidecritic.com) — the ECOSYSTEM model (broader)
- **Vendor reviews + star ratings** (community-driven; EZ 4.7/76 reviews, Glacier 4.7/46) — Yelp-for-peptide-vendors.
- **Price Index** ($/mg ranges per compound, "68 vendors," compare-vendor links) — same price core.
- **Coupon codes** section (codes like PEPTIDECRI10) — same affiliate model.
- **Community message board** (user-generated content engine).
- **Their OWN store** — sells research pens/injectors/gear ($27–149) = 2nd revenue stream.
- **"Lab Report" blog** — hands-on testing, COAs, vendor findings.
- **Tools:** reconstitution calc, stockpile calc, label maker, bloodwork.
- **Google AdSense** = 3rd revenue stream. Built on Drupal.
- **Uses GLP code-names as page names** (GLP3-R, GLP2-T) — same obfuscation pattern.

### ⚠️ FINNRICK — DO NOT BUILD ON (copyright + methodology risk)
- Finnrick = independent purity-testing service, publishes purity/dose rankings (8,923 vials tested). Data-rich BUT:
  1. **Republishing their rankings = likely ToS/copyright violation** (their proprietary dataset is their whole business).
  2. **Their tested vendors are raw-material/Chinese-manufacturer names** (Peptide Partners, SRY Labs, Guangzhou Jeep, Tianjin Finder) — NOT PP's consumer-retail affiliates. Vendor mismatch = doesn't serve PP's model.
  3. **Active controversy:** peptidecritic has published pieces attacking Finnrick's methodology ("Its Ratings Are Already a Joke") AND documented a "Failed Copyright Strike" in this space. Confirms copyright fights are real here.
- **DECISION (LOCKED):** SKIP purity-comparison pages built on Finnrick. Instead: LINK to Finnrick as a cited resource ("for independent third-party purity testing, see Finnrick") + lean on PP vendors' OWN published COAs for the purity story. Citation/linking = fine; republishing their dataset = not.

---

## 📊 TRAFFIC SIZING VERDICT (CINC, July 13, 2026) — DEFINES THE STRATEGY

The two competitors prove WHICH MODEL WINS — and it's the one PP is built for.

| | PeptiPrices (price tool) | Peptidecritic (content ecosystem) |
|---|---|---|
| Visits | 654K but **↓54% MoM (crashing)** | 294K, **↑31% MoM (growing)** |
| Organic search | only **9.5%** (rents traffic) | **14.6%** + 662 organic kw (6× peptiprices) |
| Traffic model | Display 48% + Paid — RENTED, undefended | Direct 43% + Organic Social 18% + community — OWNED |
| Keywords | generic "peptide price" | brand/compound intent ("ss-31", "simplepeptide", vendor names) |
| Geography | 97.7% US | 91.5% US |

**THE LESSON:** The pure price-tool model (PeptiPrices) is COLLAPSING (−54%, no organic moat). The content/community model (Peptidecritic) is GROWING (+31%, real organic footprint). **PP must build the CONTENT-ECOSYSTEM version, not the bare price tool** — which is exactly PP's natural strength (profiles + verified brand + COA depth already exist).

**Strategic implications:**
1. **Build price-comparison INSIDE PP's content ecosystem** (link compounds→profiles, vendors→coupon pages + COA notes) — this is the growing model, not the dying one. PP's content edge = the moat PeptiPrices fatally lacks.
2. **Target the winning keyword types:** generic ("[compound] price") AND brand/compound-specific ("[vendor] price," "[vendor] review") — PP's existing coupon pages + profiles are PERFECTLY positioned for the latter.
3. **PeptiPrices is capturable** — 654K visits but SEO-weak/undefended; their decline is PP's opening for the organic "peptide price" traffic.
4. **Realistic sizing:** US-focused (92-98% US — matches PP audience), organic pie modest today (~35K/mo combined) but GROWING + defensible. This is a durable compounding play, not an overnight windfall. Don't over-invest expecting 600K visits; DO invest because PP's assets give a structural head-start neither competitor's price-first approach can match.
5. **Space is uncrowded** — only 2 real players, no aggregator pack. Room to enter.

**REVISED BUILD EMPHASIS:** content-ecosystem model (not bare tool) · US-focused SEO + community · optimize for compound AND vendor keyword intent · lean hard on PP's profile/COA/verified-brand differentiators (the thing that makes peptidecritic grow and peptiprices die).

---

## 🏗️ PP BUILD PLAN (decisions locked)

### Compounds — START WITH TOP 8 (high-search, high-intent, most vendors carry):
Retatrutide, Tirzepatide, Semaglutide (the GLP trio = traffic engine), BPC-157, TB-500, GHK-Cu, CJC-1295/Ipamorelin, NAD+. (Expand to long-tail after format proves out — don't launch 30 thin pages.)

### Structure — HYBRID (beats both competitors):
- **Master `/prices` filterable page** (like PeptiPrices — proven UX: filter chips, sort, cards)
- **PLUS per-compound pages** (`/prices/retatrutide` etc.) — each ranks for "[compound] price," ties into PP's existing profile for that compound. (PeptiPrices only has the master page; per-compound pages = extra SEO surface + PP's content-linking edge.)
- Per-compound page links → PP's peptide PROFILE for that compound + each vendor → PP's coupon page.

### Must-have features (from teardown):
1. **Dual price:** with-code (prominent) + without-code (struck through) — code-advantage model.
2. **Per-mg normalization toggle** (Total vs $/mg) — honest cross-size comparison.
3. **Cheapest-first sort** (post-code) within each compound.
4. **Stock status** per vendor (if pullable).
5. **Comprehensive listing:** include big non-affiliate vendors (base price, no affiliate link) for credibility; affiliate vendors get discounted price + linked CTA.
6. **`PRICES_UPDATED_DATE` single-constant** (reuse proven CODES_VERIFIED_DATE pattern) — visible "Prices updated [date]" stamp; one-line monthly bump.

### PP's differentiators (do what competitors can't):
- Link each compound → PP profile (content depth)
- Link each vendor → PP coupon page + honest COA/testing note (verified brand)
- Finnrick as a cited purity RESOURCE (not republished)

### Honesty guardrail (RULE #0):
Table must be REAL. If a non-affiliate vendor is genuinely cheaper post-code, show it. Trust > one click. (The comprehensive-but-honest approach is what makes people believe the whole table — worth more than gaming it.)

### Maintenance model:
Monthly (~2 hrs, first of month): Mark pulls prices → CC updates data + bumps PRICES_UPDATED_DATE → deploy. Page shows "Prices updated [date]."

---

## 🎨 FORMAT + DESIGN DIRECTION (July 13, 2026 — Mark decisions)

**Follow Peptidecritic's format generally** — it's the GROWING competitor (+31% MoM), so its format is the proven winner (vs. PeptiPrices' dying pure-tool). CINC to do a structural walkthrough of Peptidecritic's key pages (price index, vendor page, compound page, coupon page) to map what to mirror — Claude's web_fetch is URL-restricted (can't freely navigate), so CINC (real browser) owns the deep structural study.

**🔑 BIG SEARCH BAR at top (must-have):** both competitors lead with a prominent search. Users arrive knowing their compound — prominent search = instant path to it = conversion feature. Add to scaffold: search filters compounds/vendors as-you-type.

**SITE REDESIGN — new default direction (Mark):**
- **Default = WHITE / bright / day mode** (currently PP is dark-default). This is a DEFAULT FLIP.
- **More modern + more structured** look (ties into the parked PP visual-redesign decision — this resolves the direction: modern, structured, light).
- ⚠️ SCOPE FLAG: a default-color flip + modern-redesign is a SITE-WIDE change affecting every page, not just the price section. Two options: (a) build the NEW price-comparison section in the new white/modern style from the start (it's greenfield — no redesign risk), and treat the rest-of-site redesign as a SEPARATE larger project; OR (b) do the site-wide redesign first, then build price pages into it. RECOMMEND (a): build price section modern/white NOW (greenfield, low risk, proves the new aesthetic), let it be the design pilot, then roll the white/modern system to the rest of the site as a separate deliberate pass. Don't block the price section on a full-site redesign.

## 🏛️ THREE-TIER PAGE DIVISION (LOCKED, July 14) — required guardrail

As the affiliate roster scales 23 → 60+, "curated directory of trusted vendors" silently becomes "everyone who'd have us." **Independently validated by the market leader: PeptideCritic lists 137 vendors and monetizes only ~31 (23%)**, with an explicit disclosure link ("Peptide Critic may earn a commission… full list of our affiliates here"). List everyone, monetize a subset, disclose the difference.

- **/prices** — comprehensive, everyone, reporting function, **NO quality claim**
- **/coupons** — every vendor we have a code for; reframe language from "curated directory of trusted vendors" → **"codes we have"** 🔴 OUTSTANDING
- **/best-peptide-vendors** — stays genuinely curated, quality bar intact, small

Without this, PP spends the verified-brand equity that is its entire moat.

## 🚨 SCAFFOLD DEPLOY GATE
`src/data/prices.ts` + `/prices` + `/prices/[compound]` are **committed (`4ee26e2`) with PLACEHOLDER data**, and the site auto-deploys from main. Next push = fake vendor prices live on an indexable route (footer-linked; amber banner present but public/crawlable).
**→ Noindex the price routes until real data lands, OR revert the scaffold and re-apply on populate. Decide before the redesign deploys.**

## 📊 REAL DATA STATUS
- **Amino Club: COMPLETE** — full catalog pulled (26 single compounds + 5 blends + 5 sprays), per-mg computed, in **PP_PRICE_DATA_MASTER v1**. All 26 map to existing PP profiles → ecosystem linking works.
- **Everything else: NOT PULLED.** A comparison needs 2-3+ vendors per compound. Next: Aero, EZ, Ascension, Vital Core (strongest affiliates with working tracking).
- **Blends:** ⚠️ standardization still UNVERIFIED. Amino Club publishes total mg only, no component split. **PeptiPrices lists blends as comparison rows WITH ratios in the size (e.g. "50/10/10/10mg")** — strong evidence ratios ARE standard and blends ARE comparable by total mg + ratio. Mark's instinct. CINC check never run. Show the ratio for transparency regardless.
- **Free competitive pricing feed:** PeptideCritic's Peptide Price Index covers 200+ compounds with $/mg across all vendors. **BPC-157: 81 vendors, $1.41–15.04/mg, avg $5.44.** Calibration reference — Amino Club BPC-157 = $4.00/mg base, $3.20 with code.

## 📉 MARKET STRUCTURE STRENGTHENS THE CASE
Vendor traffic analysis (200+ vendors) shows the category is **fragmenting**: ~35% growing, and the growers are almost all small while incumbents bleed (Simple ↓16%, Limitless ↓42%, Core ↓38%, Glacier ↓55% vs Profound Aminos ↑90%, Peak Lab ↑118%, Bioedge ↑66%).
**The more fragmented the market, the more valuable comparison becomes** — no vendor is the default anymore. This is an argument FOR the price page beyond the original traffic sizing.

## ❌ NO USER REVIEWS ON PP (decided July 14)
Considered adding vendor reviews (peptidecritic's model: user reviews, free account, gamified with contest entries). **Rejected.** The two platforms rate the same vendors incompatibly (Modern Aminos 4.9/1569 vs 3.6/10; Atomik 2.9 vs 4.5) — small samples, self-hosted, and both have affiliate relationships with the vendors they rate. Adding a third incompatible rating adds noise to a signal already proven broken. Plus: PP earns from these vendors (same conflict), astroturfing is guaranteed in a 137-vendor market, cold-start = 0–2 reviews each, and it's real product work (auth/storage/moderation).
**PP's accountability mechanism is the Vendor COA & Testing-Transparency Index** — objective, verifiable, unfakeable, and the genuine moat. Peptidecritic rates a vendor 5.0 off one review; PP can say "published per-product COAs, Janoshik lab, HPLC/MS >99%" — checkable.

---

## 📋 SEQUENCE
1. ✅ Competitive teardown (this doc)
2. ⏳ CINC traffic-sizing (peptiprices/peptidecritic visits + keywords + organic %) — sizes the prize, confirms 8 pages vs fewer
3. Mark pulls affiliate-vendor prices for the 8 compounds (fast — known vendors) → real launch data
4. Claude specs + CC builds master + per-compound pages (affiliate vendors first)
5. 2nd pass: add top 10+ non-affiliate big vendors' base prices (comprehensiveness)
6. Monthly maintenance cadence begins

---

## 🔗 Cross-refs
PP_VENDOR_PROSPECTING v12 (vendor traffic/terms) · SCS_MP v6.13 (deploy patterns) · vendors.ts (affiliate codes source)
