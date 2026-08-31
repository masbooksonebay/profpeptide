# PP SEO — v20

**Date:** July 27, 2026
**Status:** ACTIVE tracker. Drop-in over v19.
**What's new:** a **competitive structural finding** (PeptideStack ranks above PP on commercial queries with a weaker site — because its pages are shaped like *queries*, not *entities*), the resulting **query-shaped page strategy**, the **FAQ hub-and-spoke plan**, the July 27 GSC diagnostic results, and the **schema gaps** that likely explain Google not recognising PP as an entity.
**Supersedes:** v19. Core diagnosis and the weekend routine carry forward unchanged.

---

## 0) Core diagnosis (unchanged, and reinforced)

**PP's primary SEO problem is POSITION / CTR, not indexing.** July 27 confirmed this twice over: of 28 queued URLs, 24 were already indexed without ever being submitted, and the four brand-new coupon pages (live July 26) were indexed within a day. Indexing largely isn't the bottleneck.

**New corollary from this session:** PP also has a **page-coverage gap on commercial queries** — not a ranking problem on those queries, but no page at all.

---

## 1) 🆕 THE STRUCTURAL FINDING — query-shaped vs entity-shaped

**Observation (Mark):** PeptideStack.io consistently ranks above PP despite an unimpressive site. Meanwhile PeptiPrices and PeptideCritic have mature, well-built price-comparison tools and generally rank *below* PP. Price comparison does not appear to be a ranking lever.

**Diagnosis — their URLs are the search phrase; PP's are database records.**

| PeptideStack | Prof. Peptide |
|---|---|
| `/best-peptides-for-sale-online` | `/peptides/bpc-157` |
| `/peptide-coupon-codes` | `/prices/bpc-157` |
| `/blog/best-place-to-buy-peptides-online-forum` | `/coupons/amino-club` |
| `/peptide-pros-alternative` | `/compare/x-vs-y` |
| `/blog/list-of-peptides-and-what-they-do` | `/guides/...` |

PP generates a page **per entity** — compound, vendor, comparison pair. That's excellent coverage of entity queries and **zero coverage of commercial queries that don't map to an entity**: "best place to buy peptides," "peptides for sale online," "[competitor] alternative." There's no record to generate a page from, so no page exists.

**Three specific mechanics PeptideStack uses that PP doesn't:**

1. **Competitor-alternative pages** — `/peptide-pros-alternative` captures a rival brand's search demand. *PP's own docs proposed exactly this pattern (v14, the "Peptide Sciences pattern" for no-program vendors) and never built it.*
2. **A dated freshness signal** — their coupon page's meta description reads "Codes checked July 27, 2026" — that day's date. Google weights freshness heavily on coupon queries; a visible check-date is cheap to generate.
3. **Long-form informational blog at question/phrase queries** — "list of peptides and what they do," forum-intent pages.

**On price comparison (Mark's read, and I agree):** it is a **conversion asset, not an acquisition one.** It helps someone already on the site decide where to buy; it doesn't win the search that brings them. PeptiPrices and PeptideCritic prove a mature comparison tool doesn't confer ranking.

⚠️ **Do NOT read `/prices`' current zero impressions as evidence.** The section went live July 25 — two days is no data. That number is expected, not diagnostic. Re-check at 4 and 8 weeks.

---

## 2) 🆕 PLANNED WORKSTREAM A — query-shaped commercial pages

**Small, high-value: roughly 5–8 pages, each targeting a specific commercial phrase.**

Candidates (validate volume before building):
- "best place to buy peptides online"
- "peptides for sale online"
- "where to buy [compound]" — potentially templated across high-demand compounds
- **Vendor-alternative pages** for vendors with no affiliate program: **Core Peptides, Biotech Peptides, Verified Peptides**, and now **Peptide Sciences (CLOSED — see PP_VENDOR_PROSPECTING v19)**. Captures orphaned brand demand and routes it to affiliate vendors.

**Recon required before building:**
1. **CINC/GSC:** which of these phrases already show impressions for PP with no matching page? That's demand PP is visible to and losing.
2. Which does PeptideStack actually rank for, and at what position?
3. Keyword volume — Similarweb trial expired ~July 18, so this needs another source or a fresh trial.

---

## 3) 🆕 PLANNED WORKSTREAM B — the FAQ hub-and-spoke

**Mark's design:** an FAQ page carrying the real Google question-queries, where each question either (a) is answered concisely on the page, or (b) links out to the page that answers it — including **pages PP has already built**.

**Why this is the right shape:** PP's answers already exist but **aren't reachable by question.** Someone searching "how long does BPC-157 take to work" lands nowhere, even though the BPC-157 profile answers it. The FAQ becomes the routing layer between question-queries and existing depth.

**PP already has `/faq`** — this is likely an expansion, not a new build. **Recon first: report what's on it today.**

**Question sourcing, in priority order:**
1. **GSC exports** — filter the 1,000 query rows for question-shaped queries (*how, what, does, is, can, why*). These are questions PP **already receives impressions for** with no page answering. Strongest signal available.
2. **People Also Ask** boxes for the compounds PP profiles.
3. Competitor FAQ pages.

**Build rules:**
- **FAQPage schema** — one of the few structured-data types that still reliably earns expanded SERP real estate.
- **Answers 2–4 sentences.** Complete enough to be a real answer; short enough that the deep-dive link earns the click. Answer too fully and the linked page is redundant; tease and the FAQ is a poor page.
- **Link to existing pages first.** New spokes only where nothing covers the question.
- Any question with genuine volume eventually earns its **own page** — a dedicated page beats a section in a long FAQ on a competitive query.

---

## 4) 🆕 PLANNED WORKSTREAM C — freshness signals

Add a visible, generated **check-date** to `/coupons` and the vendor coupon pages ("Codes verified July 27, 2026"), rendered from a real timestamp rather than hardcoded. Cheap, and coupon queries reward freshness.

Related: `PRICES_UPDATED_DATE` already does this correctly on `/prices` — same pattern.

---

## 5) 🆕 JULY 27 GSC DIAGNOSTIC — what the data actually showed

Mark's hypothesis was that the price section changed how Google renders the coupon pages. **The data supported neither that nor the deploy-instability alternative.**

- **Site-wide:** no collapse. Clicks 210 vs 139 (**+51%**) over 28 days; impressions 18K vs 20.6K (−13%); average position improved 18.1 → 15.4. Weekly clicks peaked in the most recent full week.
- **`/coupons/amino-club` is the single biggest gainer on the site: +2,270 impressions** over 28 days, position improved. The "56% impressions down" reading came from a **7-day query widget** — a short-window artifact against a spike.
- **The coupon cluster as a group is UP** (glacier +361, peptide-partners +425, oasis +246). The modest site-wide impression dip came from **compound/informational pages** — `/compare/semaglutide-vs-tirzepatide-vs-retatrutide` −471, `/peptides/igf-1-lr3` −679, `/peptides/cjc-1295-dac-ipamorelin` −195, `/best-peptide-vendors` −210.
- **`/prices` had 0 clicks and 0 impressions** at both 7 and 28 days — pages indexed, not yet ranking. Expected at two days old.

### ⚠️ The one real defect: `/coupons/amino-club` title rewrite + suppressed snippet

Google **rewrites** its title to "Amino Club - Prof. Peptide" and shows **no description snippet at all**. CTR 0.4% at position 5.8 — impressions are there, the missing snippet is costing the clicks.

**Isolated to this page.** peptide-partners, glacier-aminos, and oasis-labs all render their declared titles with full snippets. Note peptide-partners' title also contains PROFPEPTIDE and works fine — **the code is not the trigger**.

**What's structurally different about amino-club:** its title format diverges from the template. It declares *"Amino Club Discount Code: PROFPEPTIDE — Save up to 30%"* while others use *"[Vendor] Coupon Code & Discount — Save X% (2026) | Prof. Peptide"*. It also carries a **hedged "up to 30%"** that disagrees with `vendors.ts` and the price pipeline (both 20%).

**Open CC task:** report the title/description/length/structure of amino-club vs three working pages; report the discount discrepancy across `vendors.ts`, the hub, the page, and the price calc; propose a corrected title with a definite percentage matching the working template. **Report before applying.**

### On zero-click code copying (raised, resolved)
Mark observed the code appearing in the SERP may let people copy it without clicking. **That's real, and it's fine** — PP's AffiliateWP data shows ~116 of 120 lifetime commissions had *no tracked visit*. Copying from the SERP still earns the commission. The genuine argument for withholding it is **attribution**, not CTR: withheld, the code becomes the reason to click and revenue becomes measurable. Not acted on. Also note Google **does not** suppress snippets in response to CTR — the two are unrelated.

---

## 6) 🆕 SCHEMA GAPS — likely cause of the entity-recognition failure

Google's AI Overview for the query **"prof peptide"** describes **Anthony Castore** and **Andrew Huberman**, not PP. Google does not recognise Prof. Peptide as an entity on its own brand query.

CC's audit of the homepage JSON-LD found:

| Gap | Detail |
|---|---|
| **No `sameAs`** | The Organization has no links to X, Facebook, Instagram, or anywhere else. **This is the primary disambiguation signal and it is entirely absent.** |
| **Broken `logo`** | Points at `https://profpeptide.com/icon.png` — the file **did not exist** and 404'd. *(Created July 27 in the favicon work, parked at `ccd88bd`.)* |
| **No `@id` / publisher link** | WebSite and Organization read as two disconnected entities. |
| Missing | `alternateName`, `foundingDate`, `founder`, logo as a sized `ImageObject`. |

**The `sameAs` fix is cheap and high-leverage** — the three social profiles already exist and are already in the footer: `x.com/ProfPeptideHQ`, the Facebook page, `instagram.com/profpeptidehq`. Entity recognition builds over months, so this is worth doing early rather than perfectly.

---

## 7) 🆕 INDEXING — the routine's value has changed

July 27's run: **28 URLs queued, quota never hit, only 3 submissions qualified, 1 accepted.** Twenty-four were already indexed — including all four coupon pages that went live the previous day and were never submitted.

**Google is picking up new PP pages within ~24 hours via the sitemap.** The manual-request routine is now worth far less than it was.

**Revised guidance:** run it only for pages GSC reports as genuinely *unknown to Google*, and spend the saved effort on the position/CTR work — which was always the real lever.

**Two defects the run surfaced, worth more than the requests were:**
- **`/prices/glow` and `/prices/klow`** both returned *"Indexing request rejected — indexing issues detected during live testing."* Same rejection, both blends. Suggests a shared template or render problem. **Open CC task.**
- **`/prices/5-amino-1mq`** — *"Duplicate without user-selected canonical."* Google is folding it into a canonical it chose. 16 vendors, so a real page. **Open CC task: report its canonical vs a working compound page, and check all 68 for non-self-canonicals.**

**Quota note (LOCKED):** never state a figure in a prompt. Observed ceilings: **11 (Jul 21), 10 (Jul 25), not reached (Jul 27)**. Queue 20+, submit until GSC returns "Quota Exceeded," log the URL that hit the wall.

---

## 8) Backlog — consolidated, by priority

| # | Item | Type | Owner |
|---|---|---|---|
| 1 | **Search index rebuild** — hand-maintained, covers **27 of 62 peptides and ZERO price pages**. The homepage search box can't find a third of the site. Generate from data. | Build | CC |
| 2 | **`sameAs` + Organization schema** — cheapest entity fix available | Build | CC |
| 3 | **amino-club title/meta + discount discrepancy** | Fix | CC (recon first) |
| 4 | **`/prices/glow` + `/prices/klow`** render/indexing rejection | Fix | CC (diagnose first) |
| 5 | **`/prices/5-amino-1mq`** canonical | Fix | CC (diagnose first) |
| 6 | **FAQ hub-and-spoke** — recon `/faq` first, then GSC question-query mining | Build | CC + GSC |
| 7 | **Query-shaped commercial pages** (5–8) incl. vendor-alternative pages | Content | CC |
| 8 | **Freshness check-dates** on `/coupons` + vendor pages | Build | CC |
| 9 | **Hardcoded coupon codes** — 27 pages + `/best-peptide-vendors` (live Featured contradiction) | Fix | CC |
| 10 | Re-check `/prices` impressions at 4 and 8 weeks | Monitor | — |

---

## 9) Weekly metrics log

| Window | Scope | Clicks | Impr | CTR | Avg Pos | Notes |
|---|---|---|---|---|---|---|
| 5/24–5/30 (7d) | site-wide | 6 | ~1,300 | 0.5% | 18.2 | Baseline |
| Last 28d (6/1) | `/coupons` hub | 0 | 548 | 0% | 17.2 | 127 queries, ~75% brand-specific |
| **Last 28d (7/27)** | **site-wide** | **210** | **18,000** | — | **15.4** | vs prior 28d: clicks **+51%**, impressions −13%, position improved from 18.1 |
| Last 28d (7/27) | `/coupons/amino-club` | — | **6,512** | — | ~5.8 | **+2,270 vs prior.** Biggest gainer on the site. Title rewritten, snippet suppressed, CTR 0.4% |
| Last 28d (7/27) | `/prices/*` | 0 | 0 | — | — | Live 2 days. Indexed, not ranking. Re-check at 4 and 8 weeks |

---

## 📅 Changelog
**v20 (July 27, 2026):** Competitive structural finding — query-shaped vs entity-shaped pages; PeptideStack analysis. Planned workstreams: query-shaped commercial pages, FAQ hub-and-spoke, freshness signals. July 27 GSC diagnostic (coupon cluster up, amino-club biggest gainer, `/prices` too new to read). amino-club title-rewrite defect isolated. Schema gaps documented — no `sameAs`, broken logo, no publisher link. Indexing routine devalued: Google picks up new pages within ~24h via sitemap.

---

**Cross-ref:** PP_SEO_LEDGER · **PP_VENDOR_PROSPECTING v19** · **PP_PRICES v2** · PP_MASTER · PP_X_POSTS · SCS_MP v6.19

---

*Position/CTR, not indexing — and now also page coverage. Entity pages are built; query pages are not.*
