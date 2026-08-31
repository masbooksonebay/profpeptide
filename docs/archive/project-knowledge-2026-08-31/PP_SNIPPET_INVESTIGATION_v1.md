# PP SNIPPET INVESTIGATION — v1

**Status:** ACTIVE. Open investigation, no resolution.
**Created:** August 15, 2026
**Scope:** why Google renders full snippets on some `/coupons/<vendor>` pages and title-only on others — every hypothesis tested, every result, and what remains.

---

## 🔴 READ THIS FIRST — the framing changed on Aug 15

**There are no longer "13 snippet pages" and "14 suppressed pages."**

Mark observed that individual vendor pages have changed state **multiple times** — full snippet with code appearing, disappearing entirely, returning, disappearing again — on unchanged URLs with no deploys between observations.

That single fact reframes everything below:

- The 13/14/20 split is **one population observed at a moment**, not two or three stable groups
- Every correlation run against that split may carry **outcome misclassification** — a page labeled "suppressed" may simply have been observed in an off state
- The AUC ≈ 0.5 results are therefore **not proof of no page-level effect.** They're what you get correlating stable inputs against an outcome that varies independently
- The Aug 17 single-reading experiment **cannot produce a valid result**

**The correct model:** *47 URLs, each with an unknown probability of occupying several SERP states.*

⚠️ Anything below that refers to "the two groups" is describing the **Aug 13, 2026 snapshot** and should be read that way.

---

## 1. THE OBSERVED PROBLEM

Query pattern: `[vendor name] discount code prof peptide`. The brand term is deliberate — it surfaces PP's result reliably. The audit measures **how the listing appears**, not where it ranks.

### Snapshot — Aug 13, 2026, all 47 vendors

| State | Count |
|---|---|
| Full snippet with code and percentage | 13 |
| Ranks, **title-only**, no description | 14 |
| Does not appear in top ~9 results | 20 |

### Two coupled signals

**Title rewriting and snippet suppression travel together — 100% of the time.**

- Where a snippet renders, Google uses PP's `<title>` verbatim: *"Aero Peptides Discount Code: PROFPEPTIDE — Save 15%"*
- Where it doesn't, Google rewrites to: *"Glacier Aminos - Prof. Peptide"*

**Six title-only pages carry Google's `Missing: discount code` notice** — Google asserting the phrase isn't on a page whose title, meta description, H1 and FAQ all contain it.

### The surface that works

**AI Overview appears on 45 of 47 queries and names PP's code on 38**, citing Prof. Peptide as source. Absent on seven: ez-peptides, licensed-peptides, mile-high-compounds, purity-peptides, royal-peptides, swiss-chems, treasure-coast-peptides.

⚠️ **Google is reading and surfacing the code. It just isn't in the organic snippet.**

---

## 2. OBSERVED STATES — Aug 13, 2026 snapshot

⚠️ **A snapshot, not populations.** Recorded for reconstructing the timeline, not for correlation.

### Rendered a full snippet (13)
aero-peptides · ameano-peptides · ascension-peptides · crush-research · ignite-peptides · limitless-biotech · modern-aminos · nura-peptide · particle-peptides · peptide-partners · purerawz · swiss-chems · treasure-coast-peptides

### Title-only (14)
amino-club · amino-x · behemoth-labz · biocollex · glacier-aminos · mile-high-compounds · oasis-labs · vital-core-research · almighty-peptides · ez-peptides · midwest-peptide · royal-peptides · spartan-peptides · peptides-gg

**Two title shapes:** `[Vendor] - Prof. Peptide` on eight (amino-club, amino-x, behemoth-labz, biocollex, glacier-aminos, mile-high-compounds, oasis-labs, vital-core-research); bare vendor name with no suffix on five (almighty-peptides, ez-peptides, midwest-peptide, royal-peptides, spartan-peptides).

**Exception:** peptides-gg displayed `Peptides.gg discount code (PROF15)` — the only title-only listing exposing a code.

**`Missing: discount code` on six:** amino-x · behemoth-labz · biocollex · peptides-gg · spartan-peptides · vital-core-research

### Did not rank in top ~9 (20)
99-purity-peptides · alpha-peptides · amp-peptides · biolongevity-labs · biopure-peptides · improved-peptides · integrative-peptides · ion-peptide · la-peptides · legendary-peptides · licensed-peptides · nextgen-peptides · nova-labs · peptide-giants · peptidology · purerx-peptides · purity-peptides · real-peptides · science-based-peptides · valkyrie-peptides

⚠️ **All are indexed.** GSC confirms nine of ten checked are "Page is indexed" with self-canonical. Only ion-peptide was genuinely uncrawled, and that was link starvation — since fixed, 1 → 37 inbound links.

⚠️ **In nine cases another PP page took the slot.** `peptide-partners` appeared on eight sibling queries (alpha, improved, nova, peptide-giants, peptidology, purity, real, science-based); `ascension-peptides` took 99 Purity's.

### Serving stale codes (found during the audit)
| Vendor | SERP showed | Live page |
|---|---|---|
| nura-peptide | `PROFPEPTIDE15` / 15% | `PROFPEPTIDE` / **25%** |
| aero-peptides | `PROFPEPTIDE15` | `PROFPEPTIDE` |
| ameano-peptides | `PROF10` | `PROFPEPTIDE` |
| limitless-biotech | 10% | **15%** |
| oasis-labs | `PROF15` | `PROFPEPTIDE` |

⚠️ **Oasis is the sharpest data point in the file.** It was crawled correctly at 2:50 AM Aug 13 — that crawl captured the correct code — and **19 hours later the SERP still served `PROF15`.** Snippet rebuild lags recrawl by 19+ hours independent of any resubmission.

---

## 3. 🔴 HYPOTHESES ELIMINATED — with evidence

**An unrecorded negative finding will be re-proposed. These are closed.**

### ❌ 1. Near-duplicate consolidation
**Refuted.** URL Inspection on 12 URLs spanning all three states: **Google-selected canonical = Inspected URL on every one.** All report "Page is indexed." No "Duplicate, Google chose different canonical" designation on any coupon page. The Pages report's three duplicate buckets contain **zero** of PP's 47 canonical coupon pages — the only coupon URL present is `www.profpeptide.com/coupons/fusion-peptide`, a retired-slug host duplicate.

### ❌ 2. Empty head at crawl time
**Refuted, then refuted positively.**

Five Live URL Inspection runs on glacier-aminos across 43 minutes: **byte-identical complete heads every time** — title populated, meta description present, self-canonical present, full render, all resources loaded, zero console messages.

**The positive proof:** oasis-labs' *stored* copy shows `<title></title>` with no meta description — **and Google serves that exact page a full snippet with a correct title.** An empty stored-copy head does not prevent snippet generation. It's a pre-hydration viewer artifact.

⚠️ Unresolved footnote: one ameano snapshot at 2:06 AM Aug 13 showed the same empty head while the other three Tier 1 pages — same Next.js app — showed full heads at the same moment. Suggestive against the pure-viewer explanation for *that* reading. The snapshot is gone and isn't retestable.

### ❌ 3. Crawled — currently not indexed
**Irrelevant.** That bucket holds 60 pages. **Zero are real coupon pages.** The 15 `/coupons` entries are all `opengraph-image` / `twitter-image` routes — Google crawling a PNG and correctly declining to index it as a page. Plus three root assets and six www duplicates: **25 of 60 are structural noise.** The real editorial mass is 24 `/supplements` pages, which is a separate issue.

**None of the 20 non-ranking vendors appear in this bucket.**

### ❌ 4. On-page content differences
**Null, and reversed.** Measured across all 47 from prerendered HTML:

| Metric | Snippet group | Title-only | AUC | Verdict |
|---|--:|--:|--:|---|
| Word count | 1272 | **1443** | **0.500** | Null — suppressed are *longer* |
| Catalog grid size | 64 | **82** | **0.497** | Null — suppressed have *bigger* catalogs |
| Boilerplate % | 41.5 | 40.0 | 0.514 | Null |
| Unique-vocab % | 13.3 | 8.3 | 0.676 | Weak tendency, severe crossover |
| Meta-description tail | 8 words | 7.5 | — | Null |

**Counterexamples that kill causation:** behemoth-labz is the **second-most unique page of all 47** (158 unique types, 29.6%) and was suppressed. ameano renders a snippet at **4.5% unique**. If content drove snippets those two would be swapped.

⚠️ **Premise correction:** zero coupon pages render an HTML `<table>` — but nearly all render a catalog as `<div>` grids. Coverage: 11/13 snippet group, **14/14** title-only.

### ❌ 5. Internal link equity
**Null, and reversed.** AUC **0.456**.

| | Snippet group | Title-only |
|---|--:|--:|
| Median indexable inbound | **41** | **33** |
| Range | 1–70 | 12–72 |

- The **two vendors with a single inbound link** — limitless-biotech and particle-peptides, both zero price rows — **both render snippets.**
- The **three most-linked** — peptides-gg (72), glacier-aminos (71), amino-club (68) — are **all suppressed.**

⚠️ Two premises corrected: vendor pages do **not** sit on one inbound link (they average 33–41, from `/prices` pages and 58/62 profile derived blocks); and `/best-peptide-vendors` is **a curated 6-vendor editorial page**, not a second full listing.

### ❌ 6. Hub cannibalization / content duplication
**Refuted.** `/coupons` is a **thin index** — 672 visible words, 186 distinct tokens, ~14 words of testing note per vendor. Token overlap with vendor pages: **28.7% snippet group vs 26.6% title-only** — it treats both identically and cannot explain a split between them. Every vendor page retains 100–450 off-hub-unique tokens.

`/best-peptide-vendors`: 711 words, 311 tokens, overlap **33.6% vs 33.2%** — also identical across groups.

⚠️ **Do not propose thinning the hubs.** `/coupons` is the landing page for every X post — the path that produces PP's revenue.

---

## 4. WHAT'S BEEN VERIFIED AS CORRECT

Confirmed server-side, all 47 unless noted:

- Correct, distinct `<title>` following `[Vendor] Discount Code: [CODE] — Save X%`
- Correct, distinct meta description — template plus a per-vendor tail naming lab and purity standard
- **Self-referencing canonicals on all 291 indexable pages.** Exactly one lacks one: `/_not-found`. Zero non-self canonicals
- `Offer` + `BreadcrumbList` structured data
- **No robots directives suppressing snippets** — no `nosnippet`, no `max-snippet`, no `data-nosnippet` anywhere
- URL breadcrumb renders in 100% of listings
- Zero listings show sitelinks; zero show a date — while competitors frequently do
- www → non-www redirects consistently sitewide

**Sitemap (fixed Aug 14, `cdaafac`):** real per-entity `lastmod` on 126 URLs — coupons from vendor pull date, prices from MAX across rows, news from publish date — and **absent** on the 167 where no genuine date exists. `changefreq` and `priority` removed entirely as uniform and ignored.

---

## 5. THE COMPETITOR COMPARISON

From the `amino club coupon code` SERP, Aug 15:

| | PP | peptidestack.io |
|---|---|---|
| Rank | 1 | 2 |
| Title | `Amino Club - Prof. Peptide` *(rewritten)* | `Amino Club Promo Code: PSTACK` |
| Snippet | none | full, code in first sentence |
| URL | `/coupons/amino-club` | `/amino-club-promo-code` |

**Three differences, one actionable:**

1. **Their title is shorter** — five words, no percentage, no em dash. PP's runs eight words with "— Save 20%". Google rewrites long titles more readily. **Untested variable.**
2. **Their URL slug contains the query** — "promo code" is in the path.
3. 🔴 **Their first prose sentence is a plain sentence:** *"Use promo code PSTACK at checkout on Amino Club."* PP renders the code in a **styled code-box UI element** with separate labels, not a grammatical text node.

⚠️ Point 3 matches ChatGPT's independent recommendation exactly.

**Also on that SERP:** Reddit outranks both with a two-week-old post, and an Instagram result publishes fabricated Amino Club codes. Competing codes seen: `DISCOUNT30`, `PSTACK`, `AMINOFIT`, `ENZGE`, `KASSIE15`. Context for the aggregator audit.

---

## 6. EXTERNAL ANALYSIS — ChatGPT, two rounds

### Round 1 (pre-oscillation)
Leading hypothesis: **stale or incompletely refreshed indexed representation.** The rewrite `Glacier Aminos - Prof. Peptide` looks like an *earlier* document identity rather than a truncation of the current title.

Raised **index-generation age by URL** as the class of cause no on-page measurement could detect. Also flagged `og:title` as a documented title-link source never compared across groups.

### Round 2 (post-oscillation)
**Withdrew the simple version.** Stale index predicts monotonic change; it cannot produce present → absent → present → absent on an unchanged URL.

**Revised ranking:**
1. Google serving/presentation variability for these URL-query pairs
2. Query interpretation / query relaxation interaction
3. Title-source selection variability
4. URL-specific propensity from some stable signal
5. Simple stale indexed document
6. Rendering/crawling problem

**The two-mode model** — a testable description of observed behavior, not documented architecture:

| Mode | Google treats "discount code" as | Title | Snippet | `Missing:` |
|---|---|---|---|---|
| **Coupon-intent** | important | PP's own | descriptive | no |
| **Entity/navigational** | relaxed | `Vendor - Prof. Peptide` | little/none | sometimes |

**On `Missing:`** — no official Google documentation defines it tightly. It does **not** safely mean "Google examined the document and the term is absent." The narrower reading: *for this result evaluation, Google relaxed that portion of the query.*

**On forcing a code into a snippet:** **no reliable mechanism exists.** Snippets are automatically generated; publishers cannot choose them. **There is no supported Google rich-result type for coupon or promo codes.** `Offer` markup will not put a code in a blue-link snippet.

---

## 7. 🔴 WHAT NOT TO DO

- **No `Product` schema.** No supported coupon rich-result type exists. Distorting coupon pages into product markup misrepresents them and won't work.
- **No `data-nosnippet`.** It can remove snippet candidates; it **cannot command Google to show the remaining one.** Useless when the problem is no description at all.
- **No thinning the hubs.** Measured and refuted, and `/coupons` is the X-post landing page.
- **No site changes during a longitudinal observation window.** Changing the page mid-measurement destroys the data.
- **Do not re-run correlations against the 13/14 split.** Those categories don't exist.

---

## 8. THE PROPOSED DESIGN — longitudinal

The one thing never attempted. Snapshot testing is structurally incapable of detecting a time-varying outcome.

**12–15 URLs × 3 observations/day × 14 days** ≈ 500–630 observations. Daily may be insufficient if state flips within a day.

⚠️ **Hold the observation environment invariant** — same query string, device class, location, language, signed-out state. Google documents time, data centre, location, device and personalization as sources of result variation; uncontrolled conditions become confounders.

**Record per observation:** timestamp · vendor · exact query · organic rank · present in top 10 · title displayed · title is PP's or rewritten · snippet present · exact snippet text · code in snippet · percentage in snippet · **`Missing:` shown** · exact missing terms · AI Overview present · PP cited in AIO · code in AIO · major SERP features · GSC last-crawl (daily) · **deployment hash**

⚠️ **The deployment hash is the control.** It's what lets the conclusion read *"53 state transitions occurred while the source document hash was unchanged"* rather than *"I don't think I changed anything."*

**Compute per URL, not per observation:** snippet duty cycle · transition frequency both directions · title/snippet coupling · `Missing:`/snippet coupling.

⚠️ **Treat URL as the experimental unit**, not the individual SERP checks — otherwise repeated observations of 14 pages manufacture false statistical power.

**Look for cross-URL synchronization.** If most pages lose snippets together and regain them together, that's strong evidence of time-varying Google-side state affecting the population collectively. If each URL has its own stable propensity — glacier 10%, aero 95% — then stable page characteristics may matter probabilistically after all.

### The Aug 17 experiment
Nine URLs resubmitted Aug 13, all recrawled within hours. Five controls baselined and never submitted: **amino-club · glacier-aminos · mile-high-compounds · almighty-peptides · ez-peptides** *(ez is the spare; oasis-labs was disqualified as a control on discovering it renders a snippet)*.

⚠️ **A single Aug 17 reading cannot resolve it.** Reframe as: over 14 days, what fraction of observations are snippet-positive for treatment vs control? And note the limitation — **no pre-treatment longitudinal baseline exists**, so the two groups may have had different baseline duty cycles. **Exploratory, not causal.**

**Clean future design:** 7 days baseline → randomize → indexing request → 14 days follow-up → difference-in-differences on snippet duty cycle.

⚠️ **Do not submit any control page for indexing.**

---

## 9. OPEN ITEMS

| # | Item | State |
|---|---|---|
| 1 | **Git archaeology** — was `[Vendor] - Prof. Peptide` ever an actual `<title>`? Page creation dates per group? When did the template change? | Prompt written, with CC |
| 2 | **`og:title` comparison** across all 47 — documented title source, never compared | In the same prompt |
| 3 | **Longitudinal tracking** — the design above | Not started |
| 4 | **Shorter-title + plain-sentence test** on 3–5 pages | Not started, gated on §7 |
| 5 | Aug 17 reading | Reframed as exploratory |
| 6 | Aug 14 submissions — oasis-labs, vital-core-research, ion-peptide | Never confirmed as run |
| 7 | Whether Oasis reactivated `PROF15` | Would muddy the sharpest data point |

---

## 10. THE HONEST POSSIBLE CONCLUSION

If longitudinal data shows pages entering and leaving the full-snippet state with no crawls, content changes or title-source changes, then **there is no page-level defect to repair.**

Snippet variability is documented and normal; what Google does *not* document is the expected frequency of same-query snippet disappearance and reappearance, so no one outside Google can say whether the observed rate is normal.

At that point the target changes from *eliminate a technical fault* to **raise the probability of the desirable presentation** — and the fact that **AI Overview names PP's code on 38 of 47 queries** becomes the surface that actually delivers.

---

*Investigation open. Five hypotheses eliminated with evidence, one framing invalidated, one experiment compromised, one class of cause identified but untested.*
