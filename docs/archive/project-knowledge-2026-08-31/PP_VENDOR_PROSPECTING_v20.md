# PP Vendor Prospecting — Master Research Ledger

**Status:** ACTIVE — affiliate-vendor discovery, traffic sizing, application tracking, pipeline state
**Version:** v20 (July 29, 2026). **Supersedes v19.**
**What's new:** 🔴 **the vendor traffic ledger is carried forward** — v19 dropped it, so the 93-vendor sizing lived only in superseded versions and was invisible to anyone reading the current doc · **NextGen / NG Peptide resolved** with the affiliate URL verified from `vendors.ts` · Amino Club concentration restated · aggregator layer retained.

---

## 🚦 RULE #0 + THE TWO RULES THAT GET MISREAD

**Check the live roster (§1) before suggesting any vendor.** On July 27 a prospecting pass proposed applying to Spartan and Purity — both already live partners.

### 🔴 RULE A — EVERY TRAFFIC FIGURE IN §4 IS A 3-MONTH TOTAL

**Apr–Jun 2026, Worldwide. Divide by 3 for the monthly average.**

Similarweb's headline "Total visits" tile on the 3-month view is the cumulative sum; the smaller "Monthly visits" sub-tile is the average. **Every figure here was captured from the headline tile.** Verified July 16 (CINC) across four sites; the ÷3 relationship held cleanly, so **the ranking is correct and needs no re-pull — only the labels were wrong.**

⚠️ **÷3 is the QUARTER AVERAGE, not the current month.** A declining site's latest month sits below it, a growing one above. Amino Club: 376K average but **524K in June** (↑44.6%). SwissChems: 305K average but **245K in June** (↓18%). **Never read the ÷3 figure as "this month."**

🚨 **Convert before any traffic number goes into a vendor application, onto the site, or into an email.** "Prime Peptides 484K" reads as monthly and is really ~162K/month.

### ⚠️ RULE B — SIMILARWEB ACCESS EXPIRED ~JULY 18

No traffic data exists for anything surfaced after that date. Terms and US-basing are verifiable; **size is not.** The tables in §4 are a snapshot, not a live feed.

---

## 1) LIVE ROSTER — 30 vendors on `/coupons` (CHECK THIS FIRST)

**Source of truth: `vendors.ts` / `profpeptide.com/coupons`. Regenerate this table on every ledger update.**

### Featured (Editor's Pick)
| Vendor | Code | Discount |
|---|---|---|
| Amino Club | PROFPEPTIDE | 20% |
| Glacier Aminos | PROF10 | 10% |
| Oasis Labs | PROF15 | 15% |
| Peptide Partners | PROFPEPTIDE | 10% |

*Peptides.gg was swapped out of Featured for Oasis Labs (July 26).* ⚠️ **`/best-peptide-vendors` uses a hardcoded array and still shows Peptides.gg — live contradiction, still open.**

### Best Deals
| Ascension Peptides | PROFPEPTIDE | **50%** — verified at checkout |

> ⚠️ **Correction (July 28):** an earlier note said Ascension "stacks with sale prices." **Their page does not support this** — Ascension's "stacks" are peptide-blend *products*, not discount stacking. Do not repeat the claim.

### US Vendors (24)
Aero (PROFPEPTIDE15, 15%) · Almighty (PROFPEPTIDE, 20%) · Alpha (PROFPEPTIDE, 10%) · Ameano (PROF10, 10%) · Amino X (PROF15, 15%) · Behemoth Labz (PROF10, 10%) · BioCollex (PROFPEPTIDE, 10%) · Biolongevity Labs (PROFPEPTIDE, 15%) · EZ Peptides (PROFPEPTIDE, 10%) · Ignite (PROF10, 10%) · Integrative (PROFPEPTIDE, 10%) · LA Peptides (PROFPEPTIDE, 10%) · Limitless Biotech (PROFPEPTIDE, 10%) · Midwest (PROF10, 10%) · Mile High Compounds (PROFPEPTIDE, 10%) · **NextGen Peptides (PROFPEPTIDE, 10%)** · Peptides.gg (PROF15, 15%) · Peptidology (PROFPEPTIDE, 10%) · PureRawz (PROF10, 10%) · Royal (PROF10, 10%) · Science Based (PROFPEPTIDE, 10%) · Spartan (PROFPEPTIDE, 10%) · Swiss Chems (PROF10, 10%) · Vital Core (PROF20, 20%)

### International (1)
| Purity Peptides | PROF15 | 15% | 🇨🇦 CA |

Apollo Peptide Sciences is also an affiliate (Refersion) — **not on `/coupons`; its old page 404s and the internal links were removed June 9.**

> **KEY STRUCTURAL FACT:** GoAffPro accounts for only about a **third** of the live roster. **Direct-apply has always been the dominant channel — it just wasn't tracked as one.**

---

## 2) 🆕 NEXTGEN / NG PEPTIDE — RESOLVED (July 29)

**This vendor appears under three different names across sources. Getting it wrong means applying to, or crediting, the wrong company.**

| | Ours | Not ours |
|---|---|---|
| **Domain** | **`ngpeptide.com`** | `nextgenpeps.com` |
| Names used | "NextGen Peptides" (peptidecritic), "NG Peptide" (PeptiPrices) — **same vendor, count once** | "NextGenPeps" — **a different company**, CINC confirmed distinct |
| 3-mo traffic | **358K** (~119K/mo) ↓7% | 161K (~54K/mo) ↓11% |
| Rating / orders | 4.7 (411) · 100K+ orders | 4.4 (5) |
| PP status | ✅ **LIVE** — `PROFPEPTIDE`, 10%, slug `nextgen-peptides` | peptidecritic affiliate, not ours |

**Affiliate URL verified in `vendors.ts` (July 29): `https://ngpeptide.com/?ref=fysuzocl`** — correct vendor, correct ref.

**Naming state on PP:** display name and all body copy say **"NextGen Peptides"** (~13 occurrences); `ngpeptide.com` appears once in the testing copy. "NG Peptide" appears nowhere.

**Assessment:** "NG" is the natural abbreviation of "NextGen," so both aggregator names most likely describe the same brand. **PP currently ranks #1 for `next gen peptide coupon code`** — renaming risks a working page for a cosmetic gain. **Recommended: keep the display name, add the alternate once in the body** ("NextGen Peptides (also listed as NG Peptide)") to cover both search forms at zero risk. Confirm against the vendor's own site header before changing anything.

**Early signal:** commissions began arriving within days of going live, with **zero GSC impressions** — NextGen post-dates the June 10 – July 7 export window entirely. The code channel working with no search footprint at all.

---

## 3) THE THREE-STAGE PIPELINE

```
applied → approved → CODE RECEIVED → page live
```

**"Instant approval" only grants account access.** The discount code is a **separate request every time**, so a vendor isn't buildable until it arrives. **This middle stage is where everything stalls.**

Statuses: `prospect · applied · approved-no-code · code-requested · code-received · page-live · rejected · excluded`

---

## 4) 🔴 VENDOR TRAFFIC LEDGER — CARRIED FORWARD (was lost in v19)

**All figures 3-month totals, Apr–Jun 2026. ÷3 for monthly. See Rule A.**

### The top of the market

| Vendor | Monthly avg | 3-mo total | Trend | PP status |
|---|---|---|---|---|
| **Amino Club** ⭐ | **376K** | 1.128M | **↑44.6%** | ✅ Live, 20%, Editor's Pick |
| Simple Peptide | 348K | 1.044M | ↓16% | — |
| Biolongevity Labs | 305K | 916K | flat | ✅ Live, 15% |
| SwissChems | 305K | 915K | ↓18% *(June: 245K)* | ✅ Live, 10% |
| Umbrella Labs | 221K | 663K | ↓6% | — |
| Nexaph | 179K | 538K | ↑13% | — |
| Modern Aminos | 177K | 532K | ↓9% | ⏳ .com pending; .eu/.ca approved |
| Biotech Peptides | 177K | 531K | ↓28% | No program → alternative-page target |
| **Prime Peptides** | 162K | 484K | **↑25%** | peptidecritic affiliate, not ours |
| Ion Peptide | 151K | 452K | ↑14% | — |
| Peptira | 145K | 436K | ↑16% | — |
| Core Peptides | 142K | 427K | ↓38% | No program → alternative-page target |
| Chemyo | 128K | 384K | ↓13% | — |
| **NG Peptide** | **119K** | **358K** | ↓7% | ✅ **Live, 10%** — see §2 |
| Verified Peptides | 119K | 356K | **↑17%** | No program → alternative-page target |
| Atomik Labz | 111K | 332K | ↓37% | — |
| Pure Health | 109K | 326K | ↓6% | — |
| Ruo Bio | 107K | 320K | ↓20% | — |
| Apex Peptides | 95K | 284K | **↑12%** | — |
| Peptide Crafters | 91K | 272K | ↓19% | — |
| **Profound Aminos** | **72K** | 217K | **↑90%** | ⭐⭐ fastest big grower |
| Glacier Aminos | ~57K | 172K | ↓55% | ✅ Live, 10%, Editor's Pick |

### Confirmed-program targets, sized (all mid-tier — none above 165K)
| Vendor | Domain | 3-mo | Trend |
|---|---|---|---|
| NextGenPeps | nextgenpeps.com | 161K | ↓11% |
| Evolve BioPep | evolvebiopep.com | 158K | ↓17% |
| Instant Peptides | instantpeptides.com | 115K | ↓43% |
| Nura Peptide | nurapeptide.com | 77K | ↓15% |
| Tydes | tydes.is | 62K | ↓33% |
| Genpeptide ★Premium | genpeptide.com | 56K | ↓22% |
| Bioedge ★Premium | bioedgeresearchlabs.com | 32K | **↑66%** |
| IDUN Peptides | idunpeptides.com | 2.7K | ↑46% |

**Both ★Premium Partners are SMALL.** Peptidecritic's paid badge tracks who *pays*, not who's big.

### Big finds with no known affiliate program
Core Peptides 427K ↓38% · Verified Peptides 356K ↑17% · Pure Health 326K ↓6% · Apex 284K ↑12% · Peptide Crafters 272K ↓19% · Profound Aminos 217K ↑90% · Pura 170K ↓34% · Planet Peptide 169K ↑29% · Pure Lab 157K ↓30% · Elite Biogenix 127K ↓39% · Penguin 126K ↓23% · Liberty 107K ↓2% · Direct Peptides 104K ↓19% · Loti Labs 100K ↓25% · Nootropic Source 99K ↓23% · NuScience 96K ↓33% · Blue Sky 86K ↑22% · Eros 79K ↓45% · Paradigm 79K ↓25% · Peptide Pros 75K ↓20% · Welli 53K · **Peak Lab 50K ↑118%** · Half Nattys→VANDL 41K ↑69% · Oros 40K ↓11% · Nexxgen 36K ↓27% · +~45 under 30K.

### 📉 MACRO — THE CATEGORY IS FRAGMENTING

~35% of the ~74 vendors with data are growing, and **the growers are almost all SMALL while the big ones decline**: Simple ↓16%, Core ↓38%, Glacier ↓55%, Limitless ↓42%, Instant ↓43% — versus Profound Aminos ↑90%, Peak Lab ↑118%, Half Nattys ↑69%, Bioedge ↑66%.

**Two implications:**
1. **The category is a third the size we thought.** The biggest vendor anywhere does ~376K/month; most "big" names are 100–200K. **There are no giants.**
2. **Traffic is dispersing from incumbents to a long tail.** This *argues for* the price-comparison pages — the more fragmented the market, the more valuable comparison becomes. And the affiliate roster **shouldn't chase only the biggest names; the giants are the ones bleeding.**

### ⚠️ Ignore, ambiguous, not found
**Noise (growth off tiny bases):** Peptide Titans ↑6,257% (8.4K), Rhome ↑2,845% (5K), GMR ↑519%, Peptide Tech ↑471%.
**Ambiguous:** Paradigm (`paradigm-peptide.com` 79K active vs litigated `paradigmpeptides.com` 10K, reportedly shut) · Apex (`apex-peptides.com` is the real one) · Peptide Technologies (`peptidetech.is` 3.7K) · Half Nattys relaunched as VANDL Labs.
**Not found (4):** Apex Biogenix, SouthWest Biologix, Single Vials, EvoHelix.

---

## 5) AMINO CLUB CONCENTRATION — the asset and the risk

| aminoclub.com | Value |
|---|---|
| Monthly average | **376K** |
| June alone | **524K** |
| Trend | **↑44.6%** |

**Amino Club is simultaneously:** the largest vendor in the 59-vendor universe · PP's 20% flagship · an Editor's Pick · **~47% of PP's own search demand** (4,371 of 9,372 GSC impressions, June 10 – July 7) · and PP's best-ranking coupon page.

**Biggest + fastest-growing + best commission + best-ranking page = one company.** That concentration is the asset and the single-point-of-failure risk. Combined with Glacier, the two are **~95% of PP's vendor-query search demand** — coupon-page SEO is effectively a two-vendor game.

---

## 6) THE AGGREGATOR LAYER — sized

| Site | 3-mo | Monthly | Trend | Organic % | Read |
|---|---|---|---|---|---|
| peptiprices.com | 654K | 218K | **↓54%** | **9.5%** | **RENTS traffic** — 47.8% display ads. Not a ranking competitor |
| finnrick.com | 584K | 195K | ↓13% | 43.3% | Purity-testing resource PP cites. Earns its traffic |
| peptidecritic.com | 295K | 98K | ↑31% | 14.6% | **Direct-led (43%)** — brand/bookmarks, not search |
| peptidedeck.com | 110K | 37K | ↑30% | 45.2% | Compound/dosing content play. 7:26 visit duration |
| **thepeptidecatalog.com** | 40K | 13K | **↑168%** | **73.7%** | 🔴 **THE REAL COMPETITOR** — PP's exact model, compounding |
| pickpeptides · projectbiohacking · peppal · peptides-enhanced | <7K each | — | — | — | Below threshold |

**Organically-earned aggregator traffic is ~150K/month total, not 950K.** The giants are bought or brand-driven.

**thepeptidecatalog outranks PP on PP's own vendors** ("ascension peptides coupon", "ez peptides discount code"), and **its best traffic is vendor reviews** — a page type PP decided not to build. Its sidebar also shows vendors PP hasn't logged: Ion 15%, Nura 25%, **Dynamic Peptide 10%**.

**Peptidecritic's model — worth considering long-term:** affiliate commissions + **paid placement** (six ★Premium Partners, formal "Vendor Program" intake page) + their own store + AdSense. Their quality signals — "Verified" and "Batch #s" badges — are already PP's COA-transparency angle.

> 🚨 **RATING FILTER RETRACTED.** Platforms contradict each other flatly: Modern Aminos 4.9 (1,569) on PeptiPrices vs 3.6 (10) on PeptideCritic; Atomik 2.9 vs 4.5; Soma 3.3 vs 5.0. Tiny samples, self-hosted, and both platforms have affiliate relationships with the vendors they rate. **Ratings are a weak tiebreaker, never a gate.** Only hard excludes stand.

---

## 7) DISCOVERY CHANNELS — three dead ends

| Channel | Status |
|---|---|
| **GoAffPro** | ✅ Searched Jul 13 — 111 vendors. **Tier 1 (50K+) exhausted** |
| **Post Affiliate Pro** | ❌ Dead end — per-merchant installs, no peptide vendors in the directory |
| **Refersion** | ❌ **DEAD END** — researched, very few peptide vendors *(was listed as "NEXT" in v18 without being logged, causing a wasted recommendation July 27)* |
| **UpPromote** | ❓ Unknown — **confirm before recommending** |
| **Mainstream networks** (Impact/CJ/Awin/Rakuten/ShareASale) | ❌ Excluded by acceptable-use policy |
| **In-house direct** | ✅ **The remaining channel** |

**Discovery is now vendor-first, not platform-first.** There is no directory left to mine. Method: identify a vendor, check for `/affiliates`, apply.

---

## 8) PEPTIDE SCIENCES — CLOSED

The flagship direct-apply target in every prior version of this ledger is gone. ~1.02M global rank, the largest in-house program. **Permanently off the list, not pending.**

1. PP has comparison/alternative content built around them. **That content now describes a defunct vendor — audit what mentions it.** It may still be a valuable alternative-page target *because* they're gone; the orphaned demand is permanent.
2. It removes the main example behind "household names run in-house."

*Open: confirm whether they shut down entirely or only closed the affiliate program, and when.*

---

## 9) GOAFFPRO STATUS (July 27)

**20 approved · 11 pending · 1 rejected**

**Approved — page live:** LA Peptides · Peptidology · Mile High Compounds · NextGen · Glacier · Ameano · EZ · Royal · Aero · SwissChems* · BioCollex · Vital Core
*\*SwissChems approved with an auto code (`ebdtshdy`), waiting on a **branded** code since July 13. Live with PROF10.*

**Approved — code requested, awaiting response (7) — THE BOTTLENECK**
| Vendor | Domain | ID |
|---|---|---|
| PureRx Peptides | purerxpeptides.com | 7133617 |
| Certified-Pep | certified-pep.com | 7179571 |
| Crush Research Supply | crushresearch.shop | 7167117 |
| Modern Research Peptides | modernresearchpeptides.net | 7169584 |
| Modern Aminos (EU) | dashboard.modernaminos.eu | 7115645 |
| Modern Aminos (CA) | modernaminos.ca | 7115646 |
| Lumera Labs | mylumeralabs.com | 7181386 |

**Nothing is stalled through inaction — every code has been requested.** Seven pages land the moment codes arrive.

> 🆕 **PureRx terms (July 28):** offers **up to 25% split between the discount code and commission**, with commission calculated **post-discount** and excluding shipping and tax. So a 15/10 split pays $8.50 on a $100 subtotal; a 10/15 split pays $13.50 — **59% more**.
> **Four questions outstanding, and the first inverts the recommendation:**
> 1. If a customer arrives via the affiliate link but applies PureRx's own public code, is commission still earned?
> 2. Is that public code permanent or promotional?
> 3. Can codes stack?
> 4. Is the split adjustable after launch?
>
> **Do not commit a split until Q1 is answered.** If link attribution survives a competing code, take maximum commission (5/20) and let buyers use the public code. If it doesn't, a competitive code is mandatory and the program is worth much less.

**Pending approval (11):** NOVA Labs (`nova-biolabs.ae`) · NOVA Labs Europe (`.eu`) · Treasure Coast · Gentleman · Orbitrex · Paramount · Moglabs · RUO · Modern Aminos (.com) · Peptide Tech · **Wolverine (pending since July 13 — likely a soft no; follow up or mark dormant)**

**Excluded (2):** Evolve Peptides (declined) · **Fusion Peptide — REMOVED, affiliate tracking and attribution are broken. Do not re-suggest.**

**Multi-storefront:** **NOVA Labs** — `.ae` (UAE, canonical) and `.eu` are one operation. *Confirm US shipping and payout currency before building.* **Modern Aminos** — `.com` pending, `.eu`/`.ca` approved; the two approvals may not be worth building until `.com` clears.

**Tier 1 disposition:** SwissChems 915K ✅ · EZ 269K ✅ · Beyond 232K ⚠️ Poland, geo-gated · nova-biolabs 122K ⏳ · Orbitrex 117K ⏳ · Gentleman 106K ⏳ · Nova Peptides 80K ❓ domain unconfirmed · Peptide Tech 67K ⏳ · Evolve 63K ❌ · Treasure Coast 62K ⏳ · PureRx 54K ✅ code requested · LA 49K ✅ · Royal 45K ✅ · Cellpept 43K EU, not applied.

**Tier 2 unapplied:** Expert Peptides 20K · Peptide Giants 20K ↑99% · Lifestyle Peptides 19K (20%) · Peptide Ritual 11K ↑125% · True Form 15K (5% comm) · Bayside 16K ↓90%.

---

## 10) CURRENT PROSPECTS — in-house, direct-apply

| Vendor | Domain | Terms | Status |
|---|---|---|---|
| **Genoscience** | genoscience.net | Up to 30% upfront + milestone bonuses to $5,000. US (Sarasota FL), cGMP, 48h ship, paid by the 15th — **best terms on the list** | ⏳ **APPLIED July 27** |
| **LiveWell Peptides** | livewellpeptides.com | Up to 22%, US-based, every-batch tested + COA, 5-day review | prospect |
| **Onyx Biolabs** | onyxbiolabs.com | 10%, third-party HPLC + mass spec | prospect |
| **GLP1 Research Lab** | glp1researchlab.com | GLP-focused — PP's top-converting category | prospect |
| **Licensed Peptides** | licensedpeptides.com | — | prospect |

**Still unchecked since v2: Eternal Peptides.** Core, Biotech, and Verified all resolved as no-program → alternative-page candidates.

---

## 11) RECOMMENDED NEXT ACTIONS

1. **Chase the 7 outstanding codes** — the bottleneck, not page-building.
2. **Answer PureRx's Q1** before committing a split.
3. **Apply:** LiveWell, Onyx, GLP1 Research Lab, Licensed Peptides.
4. **Check Eternal Peptides** — open since v2.
5. **Follow up or close Wolverine** — pending two weeks.
6. **Confirm UpPromote's status** before treating it as a live channel.
7. **Audit Peptide Sciences references** on the site.
8. **Add "(also listed as NG Peptide)"** to the NextGen page body — zero-risk dual coverage.
9. **Regenerate §1 from `vendors.ts`** on every ledger update.
10. **Mine thepeptidecatalog's sidebar** — Ion, Nura, Dynamic Peptide are unlogged.

---

## 📅 Changelog

**v20 (July 29, 2026):** 🔴 **Traffic ledger carried forward** — v19 dropped the 93-vendor sizing, so it lived only in superseded v17/v18 and was invisible when NextGen's numbers were needed. Restored with the 3-month/÷3 rule at the top. **NextGen / NG Peptide resolved** — affiliate URL verified as `ngpeptide.com/?ref=fysuzocl`, the 358K vendor, distinct from `nextgenpeps.com`; naming recommendation recorded. Amino Club concentration restated (~47% of PP search demand; with Glacier ~95% of vendor-query demand). Aggregator layer and rating-filter retraction retained. **PureRx split terms and the four open questions logged.** Ascension "stacks with sale prices" corrected — the page does not support it.

**v19 (July 27, 2026):** Live roster recorded — closed the defect that caused existing partners to be re-suggested. Full GoAffPro status. Three-stage pipeline vocabulary. Refersion confirmed dead. Peptide Sciences closed. Fusion excluded. Genoscience applied. ⚠️ *Dropped the traffic ledger — restored in v20.*

**v18 (July 16, 2026):** Traffic relabeling (3-month totals). Amino Club resolved as #1. Aggregator layer sized.

**v17 (July 14, 2026):** 93-vendor directory sizing. NextGen/NG Peptide dedupe. Macro fragmentation pattern.

---

*Check the live roster before prospecting. Every traffic figure is a 3-month total — divide by three. The bottleneck is codes, not pages. Discovery is vendor-first; no directory left to mine.*
