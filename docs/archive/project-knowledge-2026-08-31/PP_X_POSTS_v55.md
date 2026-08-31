# PP X POSTS — v55

**Status:** ACTIVE. **Full replacement.** Supersedes v53 and all earlier versions and addenda. Nothing outside this file governs X posts.
**Date:** 2026-08-25

**Why v51 exists:** v50 was a delta on v49 and SCS_REF_INDEX pointed only at v50. Drafting from v50 alone produced a post set built on a partial rule set — a missed sale check, missing code disclosures, a retired character cap treated as live, and a line 4 written from scratch when one was already recorded. Delta-on-delta is the defect. This file is complete on its own.

> **Why X matters more than the traffic suggests:** code-based attribution drives the majority of PP revenue. Buyers see a code on X, go directly to the vendor, and PP earns commission with no site visit recorded. Peptide Partners generates ~51% of total commission history with negligible GSC impressions. **X posts, not search, likely drive the money.**

---

## v54 → v55 CHANGELOG

| Change | Detail |
|---|---|
| 🔒 **Capstone posting rules (new §7b)** | Real compound names WITH the coded parenthetical — the standard decode convention, NOT codes-only (Mark, 2026-08-27, overriding the brand skill's coded-only rule for PP's X voice). Line 4 names **Accumark** as the third-party tester, with COAs **published on the Capstone site and verifiable on the lab's site** — never "available on request". Link = `capstonepeptides.com/catalog/` (the /catalog/ exception, formalized). No urgency/sale framing ever (brand anti-pattern). Cross-brand firewall: posts read like any other vendor's. |
| 🔴 **Royal + Ignite codes corrected to PROFPEPTIDE** | Both had silently rebound; site swept 2026-08-26 (`a14382f`). §10 updated. First corrected sets posted 2026-08-26. |
| 🆕 **Ignite decode enters §7** | IP1-S / IP2-TRZ (also IP2-TZ) / IP3-RT = Semaglutide / Tirzepatide / Retatrutide — suffix letters + tier key + PP page catalog; posted 2026-08-26 pending Mark's portal-eyes confirm |
| 🆕 **Line-4 table adds** | Royal (Janoshik, portal-verifiable) · Ignite (two-stage Janoshik + Freedom Diagnostics) · Hydro (Janoshik/Chromate/ILS, portal-verifiable) · Paradigm (**Finnrick #7-of-307 overall** — the first third-party-leaderboard line 4) · Peptide Partners gains the Finnrick #1-retatrutide option |
| 🆕 **§11 adds Royal** | Royal's own public `ROYAL10` = 10% equals PP's 10% ("affiliate codes may vary" on their /coupon page). No standing-offer stacking claims; buyer-indifferent, PP code earns attribution |
| 🆕 **Ignite sitewide BOGO** | Undated evergreen-style sitewide BOGO live Aug 2026 — stacks per the sitewide rule; no expiry language (none published) |
| ⚠️ **Owed from part 5, not yet captured** | A "one-URL rule" is in the session ledger for v55; its exact wording predates this doc's author-context. Mark to restate; do not invent it |

---

## v53 → v54 CHANGELOG

| Change | Detail |
|---|---|
| 🔴 **EZ sale example is EXPIRED** | The §sale worked example recorded EZ's Back-to-School sale "ends Thursday, August 27." **Wrong or ended early** — verified live 2026-08-24: full list price, stale banner reading "Ends 8/20," no discount applied. The example stays as FORMAT reference only. 🔒 **Never fire a sale post from a doc's recorded dates — verify the sale on the vendor's live site the same day.** |
| ⚠️ **/prices/* OG cards were DEAD Aug 6–25** | Every /prices/* social card 500'd in production from `d99c44d` (Aug 6) until fixed at `cdffeb3` (Aug 25). Any post linking a /prices page in that window went out cardless — this, not X cache misbehavior, likely explains cardless price-page posts. Fixed + guarded (`check:og-assets`). /faq/* cards now also render. |
| 🆕 **FAQ pages are linkable surfaces** | Nine /faq/* question pages are live with working OG cards and the pinned Where-to-Buy trio (amino-club → capstone → peptide-partners). A dosing-question post may link the FAQ page where it matches the post's question better than the coupon page does. |

---

## v52 → v53 CHANGELOG

| Change | Detail |
|---|---|
| 🔴 **Aero code corrected** | v52 listed `PROFPEPTIDE15`. **Wrong.** vendors.ts carries a comment documenting the change to `PROFPEPTIDE`, and all seven live surfaces render it. The doc was stale, not the site. |
| **Decode framing standardized (§7)** | Bare parenthetical — `Retatrutide (GLP-RT)` — is canonical. "listed as" / "sold as" / "coded as" retired. |
| **Aero's GLP naming recorded** | Aero labels BOTH tirzepatide and semaglutide with a `GLP1` prefix, contradicting the tier key. It is the vendor's own naming, accurately recorded, and its page carries a clarifier. |
| **Blank OG card is not always permanent (§6)** | Softened. A blank can be a scrape timing out rather than a spoiled cache; it may recover on its own. |

---

## v51 → v52 CHANGELOG

| Change | Detail |
|---|---|
| **Attribution reframed (§5)** | v51 called the attributed form — *"Vendor states…"* — something that "reads weakly on purpose." Wrong framing. Attribution is the **standard tool** for anything benign PP can't verify, and it's honest, not weak. |
| **Questionable claims: omit, don't attribute** | New: efficacy claims, trial outcomes, testimonials, dosing guidance and drug comparisons are never repeated in any form. Attribution launders nothing. |
| **Amino Club rate** | §10 listed 20%. Live page publishes **35%, temporary, expiring Aug 31 2026** — recorded with the expiry so it isn't posted after it reverts. |
| 🆕 **Temporary rates never touch the vendor page (§6)** | The OG card bakes whatever the page publishes. When a promo rate is put on the vendor page, the card regenerates and X caches it permanently. Promo rates live in the POST and the hub link only. |

---

## v50 → v51 CHANGELOG

| Change | Detail |
|---|---|
| 🔴 **"Research Use Only." RETIRED** | v50 §1 added it as a mandatory final line. **Removed — Mark's decision, 2026-08-20.** Vendors carry the disclaimer on their own sites; PP carries it in the footer and on every profile; the line fell below the fold on essentially every post. **This is a deliberate reversal, not an omission — do not re-propose it.** |
| 🔴 **LIVE SALES table DELETED** | v49 §3 carried a roster of specific vendor sales with no as-of date. It was 9–13 days stale on read and contained an already-expired entry. **Mark flags notable sales directly.** The §3 *rule* to check the vendor's homepage before drafting remains in force. |
| 🔴 **No character limit — restated as its own section** | v49 retired the ≤275 cap on 2026-08-11, but the old v24 cap kept resurfacing in doc search and cost a full drafting round on 2026-08-20. Now §2, unmissable. |
| **Line 4 table merged and made hybrid** | v49 and v50 held two different line-4 tables for overlapping vendors with no statement of which governed. One table now, with a short pasteable line AND the full verified basis. |
| **Hub URL conflict resolved** | v49 §3b said `?v=2` standing; v50 §6 said `?v=2` burned and `?v=4` current. **`?v=4` governs.** v49's section was never marked superseded. |
| **Category set restored to six** | v50 §7's summary compressed v49's six categories to four, dropping longevity and gut/immunity. The six-category set is correct. |
| **Glacier POSTED row corrected** | v49 §8 said Glacier's posts were already reissued with `PROFPEPTIDE`; §9's log still read `PROF10`. §9 was stale. |

---

## 🔒 0. SOURCES — PP's own pages and the vendor's own site. Nothing else.

**In this order, every time:**

**1. PP's live `/coupons/<slug>` first.** It carries a compound-by-research-area breakdown built by CC from primary research, already mapped onto the post categories, plus the code, the rate, and the line-4 basis. **Check it before anything else.** It exists precisely so this doesn't need re-deriving.

**2. The vendor's live site second** — for anything added since the page was built, for current stock, and for the mandatory sale check (§3).

**3. Ask CC or Mark** when either is unreadable.

### 🔴 NEVER SOURCES

**Aggregators** (dealspotr, supercosts, and similar) and **competitor sites** (Peptide Critic, The Peptide Catalog, PepPal, PeptideStack) are never sources — not for codes, rates, catalogs, stock, or testing claims. Sourcing PP from a rival means republishing their research as ours.

**Web search is only for making PP's own URL fetchable.** If it returns aggregator or competitor results, ignore them entirely — don't mine them, don't cite them as corroboration.

> **Failure recorded 2026-08-20.** A broad search for Glacier returned four aggregator/competitor pages and they were read. Nothing wrong entered the drafts, but a "competitors also hold 10% codes" line was assembled from Peptide Critic and The Peptide Catalog and offered as corroboration. That is the prohibited sourcing path.

### ⚠️ A fetch is NOT an exhaustive catalog check

WooCommerce shops paginate; product widgets render "Loading products…" without JS; site search is client-side and redirects to the homepage when hit by URL params. **A partial listing read as complete produces posts that omit a vendor's headline compounds.**

**Never conclude a vendor lacks a compound from a fetch alone.** Say it's unverified and ask.

> **Failure recorded 2026-08-10.** Ion Peptide posts were drafted twice from partial fetches, wrongly concluding no BPC-157, no TB-500, no CJC-1295 — the three highest-demand compounds in recovery and growth hormone. All three were on PP's own vendor page, in a categorized list, the entire time.

### ⚠️ PP's price grid is dated

Every `/coupons/<slug>` price grid carries a "prices current as of" line. **If that date is more than a few days old it is not a stock source.** Say so rather than treating it as one.

### 🔴 STATE THE BASIS BEFORE DRAFTING

Before writing any post set, state plainly:
- code and rate **as read from PP's page**
- **date** of PP's price grid
- whether stock was confirmed against **the vendor's live site** or only the grid
- whether **a sale is running**
- whether the vendor page **has its own OG card**

Anything unverified gets called unverified, not filled in.

---

## 🔒 1. POST FORMAT (LOCKED)

```
{Vendor} has {ANCHOR} in stock!

Use code {CODE} for {X}% off. 🔥

{Vendor} also carries other {category} peptides including {compounds}.

{Testing differentiator}

{link}
```

- Opener ends with **`!`**
- **🔥 only on the code line.** No other emoji anywhere.
- **Peptides spelled out** — Retatrutide not Reta, Semaglutide not Sema
- **Line 3 NAMES THE CATEGORY** — "Ion Peptide also carries other metabolic peptides including Tirzepatide and Semaglutide." Not a bare compound list. The category is what makes the post findable.
- **Line 3 compound count: 3–4** where the vendor genuinely carries them. Beyond that it reads as a catalog dump.
- **Line 4 is testing/purity ONLY.** Not reviews, not shipping, not price.
- **No urgency language** ("limited time," "act fast") — except a real dated deadline
- **No vial sizes**
- **No dosing protocols, no medical voice**

**Rotation is Mark's.** Claude drafts by category; Mark assigns accounts and posts.

### 🔴 There is NO "Research Use Only." line

Retired 2026-08-20. See changelog. Do not add it.

### First-line variation

Mark may override line 1 to name several compounds and move the emoji up:

> Capstone Peptides has Semaglutide, Tirzepatide, and Retatrutide in stock! 🔥

⚠️ When this happens, code disclosures (`(listed as GLA-3 RT)`) come **out** of line 1 — three parentheticals bury the compound names. The vendor's own product titles usually self-decode at source.

---

## 🔓 2. THERE IS NO CHARACTER LIMIT

**Posts are not capped.** The former **≤275 character** ceiling is **RETIRED** (2026-08-11). It came from the pre-Premium 280-character hard limit, which no longer applies to the accounts PP posts from.

**Do not trim a true, useful sentence to hit a number. Do not cite a character budget as a reason to drop a compound, shorten line 4, or reword the locked category line.**

⚠️ **The old cap still appears in archived versions (v24 and earlier).** Those are superseded. If a character limit turns up in a doc search, it is stale.

### What replaces it — the truncation rule

X collapses long posts in the timeline behind **"Show more."** The cut lands somewhere around the first ~280 characters and is not exactly predictable.

🔒 **The anchor line and the code line must both land above the fold.** That is the entire reason the code line sits at position 2.

Everything below the code line — the category line, the testing differentiator, the link — may fall under "Show more" without loss. A reader who has seen the compound and the code already has what converts.

⚠️ **Length still has to earn itself.** No cap is not a licence to pad. Every added clause should carry a fact a buyer would act on. **Cut anything that is atmosphere rather than information.**

⚠️ **Do not lengthen lines 1 or 2.** Every character spent there pushes the code closer to the cut. The extra room lives in lines 3 and 4.

---

## 🔒 3. CHECK FOR A SALE BEFORE DRAFTING ANY POST SET

**Always check the vendor's live homepage for a sitewide sale before writing posts.** A running sale changes the lead angle, and PP's code stacks on top of it.

**Where to check:** the vendor's homepage hero and banner. Sales are almost always announced there with a countdown.

**Sitewide sales ALWAYS stack with the affiliate code.** Settled — don't re-verify per vendor. If a vendor is running 25% sitewide and PP's code is 10%, the post leads with the sale and the stack.

**A vendor's OWN circulating code is different** — a newsletter offer, a first-order discount, a banner code, a payment-method discount. Those sometimes don't stack and sometimes void attribution. **Mark checks those individually.** Never assume, never post a stacking claim about one until he's confirmed it.

| Type | Stacks? | Post it? |
|---|---|---|
| Sitewide sale, no code needed | ✅ Always | Lead with it |
| Vendor's own circulating code / offer | ❓ Unknown | Ask Mark first |

**The real risk is commission.** Many affiliate programs void attribution when another coupon is applied to the same order. If the vendor's terms don't address it, ask them before running a set.

⚠️ **One item at X% off does not establish a sitewide rate.** A cart test proves the code's percentage and that it stacks; it proves the sale rate only for the item tested. **If the sale percentage isn't confirmed across the catalog, write "Sale prices sitewide" without a number.**

> **No sales roster lives in this doc.** It went stale and produced a near-miss. Mark flags notable sales directly.

### Sale post shape

When a vendor runs a public sale **and** stacking is established, the discount line carries both plus the deadline:

> Their {sale name} takes {X}% off every peptide starting {when} — and code {CODE} stacks on top for another {Y}%. Ends {day, date}. 🔥

- ⚠️ **The deadline is mandatory.** It's what makes an elevated rate read as an event rather than a contradiction of the standing rate on the site.
- **Prioritize by expiry** — the shortest window goes out first.
- **Link the vendor page** when PP's own rate is unchanged. **Link the hub** only when PP's *own* rate is temporarily boosted, since the vendor card bakes the standing rate.

**Worked example — EZ Peptides, 2026-08-19:**
> Their Back to School sale takes 30% off every peptide starting tomorrow — and code PROFPEPTIDE stacks on top for another 10%. Ends Thursday, August 27. 🔥

---

## 🔒 4. THE CATEGORY POST SET — six categories

**Draft one post per research area the vendor actually stocks.** Four is standard, five or six when the catalog supports it.

| # | Category | Anchor examples |
|---|---|---|
| 1 | **Metabolic** | Retatrutide *(always first if stocked)*, Tirzepatide, Semaglutide, Cagrilintide |
| 2 | **Recovery & tissue repair** | BPC-157, TB-500, KPV, PDA |
| 3 | **Growth hormone** | CJC-1295 + Ipamorelin *(lead with the pair — commonly stacked)*, Tesamorelin, Sermorelin, IGF-1 LR3 |
| 4 | **Skin / dermal** *or* **nootropics** | GHK-Cu, GLOW, KLOW, Melanotan · Semax, Selank, DSIP, PE-22-28 |
| 5 | **Longevity** *(when the catalog is deep)* | Epitalon, Glutathione, FOXO4-DRI, NAD+ |
| 6 | **Gut health & immunity** *(when the catalog supports it)* | KPV, Thymosin Alpha-1, VIP |

⚠️ **Pick the categories the vendor actually carries.** A vendor with both a cosmetic line and nootropics gets both.

⚠️ **Don't pad a thin category into a post.** Two compounds isn't a category — a post whose line 3 names one extra compound reads as filler. **Drop it and say why.**

⚠️ **CJC-1295 and Ipamorelin lead the growth-hormone post together** — they're the most popular pair and most vendors sell a blend. If a blend SKU exists, that's the stronger anchor.

⚠️ **Never pad to four with an out-of-stock or non-carried claim.** Fewer truthful posts wins.

### The Retatrutide-first rule

If a vendor stocks Retatrutide, the metabolic post names it **first**. It's PP's highest-demand compound.

⚠️ **The rule binds only where stock is established.** Absence from PP's vendor page is not proof of absence — but it is also not licence to name it. **Ask, don't assume.** A metabolic post without a GLP is weak; that weakness is the signal to go ask the vendor, not to fill the gap.

---

## 🔒 5. LINE 4 — TESTING DIFFERENTIATOR

**Only what the vendor publishes, verified.** Never borrow another vendor's, never infer from a trust badge, never soften a missing claim into an implied one.

**Never write this from memory.** It names a vendor's laboratory and its testing panel. Read it from PP's own `/coupons/<slug>` page or use the table below.

⚠️ **Never source it from a competitor's site.** Peptide Catalog, PepPal and PeptideStack all summarize vendor testing; using their description means sourcing PP from a rival.

**If nothing is verifiable, drop the slot rather than fake it.**

**Entries added v55 (verified from PP's live pages / CC after-deploy reports, Aug 26):**
- **Royal Peptides** — independent Janoshik batch reports, individually verifiable by task number and code at janoshik.com; Royal's cGMP/ISO + purity/pH/vacuum-integrity claims are *Royal's own, attributed*
- **Ignite Peptides** — two-stage third-party testing (before and after listing) by Janoshik + Freedom Diagnostics, per-record verify keys
- **Hydro Research** — Janoshik, Chromate Labs, ILS-Lab; ~270-document public COA library; **portal-verifiable on the labs' own sites** (the roster's verification gold standard)
- **Paradigm Peptides** — **#7 of 307 vendors overall on Finnrick's independent blind-testing leaderboard, PREMIUM, 17/17 classifiable passes (Aug 2026)** — the first leaderboard-based line 4; scope per-compound claims to Reta (A, 84%) and Tirz (A, 87%), the only two tested
- **Peptide Partners (option)** — #1 retatrutide purity on Finnrick (93%, 27 tests, Aug 2026) — retatrutide posts only; NEVER as a general claim (overall 67%, TB-500 33%, CJC 36%)
- **Capstone Peptides** — third-party tested by **Accumark**; COAs **published on capstonepeptides.com and independently verifiable on the lab's site** (§7b)

**Attribution is the standard tool, not a signal of doubt.** When something is benign but PP can't independently confirm it, write it attributed — *"Vendor states testing by independent US labs."* PP is reporting that the vendor says it; PP is not vouching for it. That's an honest line, not a weak one, and it belongs anywhere PP repeats an unverified vendor fact.

⚠️ **A questionable claim is different — omit it entirely, even attributed.** Therapeutic or efficacy claims, trial outcomes, human-use testimonials, dosing guidance, comparisons to approved drugs: PP does not repeat these in any form. Attribution launders nothing. Write PP's own factual description instead. *(Full three-way test in PP_INBOUND_VENDORS §Gate E.)*

**No purity figure from a single batch.** One COA at 99.927% doesn't license a blanket claim. **A vendor's own published minimum standard is quotable as a standard** — "a published ≥98.5% minimum purity standard" — never as a measured result.

### The hybrid table

**Short line** = the default, paste as-is. **Full basis** = the verified research record; use it when the vendor's testing *is* the story (a new vendor, or one whose panel genuinely beats the roster).

| Vendor | Short line (default) | Full basis |
|---|---|---|
| **Glacier Aminos** | `Tested by Kovera Labs — per-batch COAs, verifiable at the lab.` | Public batch-searchable COA library; three independent US labs over time (Forever Young Pharmacy, Freedom Diagnostics, Kovera on recent 2026 lots). Kovera reports go furthest — three-vial batch conformity, LC-MS identity, HPLC vs a ≥98% specification, net content, endotoxin, microbial sterility, heavy metals; per-record access code verifiable at koveralabs.com/verify. Seven-step protocol claim. |
| **EZ Peptides** | `Third-party tested by Janoshik, with public COAs.` | Janoshik batch-numbered reports quantifying content across multiple vials, HPLC purity, unique key and QR verifying at janoshik.com/verify. |
| **Amino Club** | `ISO 17025-accredited lab, full panel on every batch.` ⚠️ *composed in v51 from the full basis — not a previously shipped line* | ISO/IEC 17025-accredited lab, full panel — HPLC purity vs a published 99%+ standard, identity vs reference standard, ICP-MS heavy metals, PCR sterility, USP <85> endotoxin. 100% of batches tested before release. |
| **Capstone Peptides** | `Accumark Labs per-lot certificates, publicly verifiable.` ⚠️ *composed in v51* | Accumark Labs, ≥98% purity specification, per-lot certificates in a public library, **measured peptide quantity**, verifiable by code on the lab's own domain. 🔴 **Never claim accreditation** — Accumark's ISO 17025 is pending, not held. |
| **Nura Peptide** | `Freedom Diagnostics LC-MS identity and HPLC-UV purity COAs.` ⚠️ *composed in v51* | Freedom Diagnostics — LC-MS identity, HPLC-UV purity, net content; recent reports add USP <85> endotoxin and PCR microbial. 🔴 **Never claim a headline purity figure** — Nura deliberately publishes none. |
| **Ion Peptide** | `Kovera Labs per-lot COAs, LC-MS verified.` | *Not recorded — derive from PP's coupon page if needed.* |
| **Improved Peptides** | `Freedom Diagnostics & Krause LC-MS COAs; public library.` | *Not recorded.* |
| **Particle Peptides** | `Liquilabs full-panel COAs, Ph. Eur. limits.` | *Not recorded.* |
| **Vital Core Research** | `ISO-17025 Vanguard per-lot COAs; HPLC purity + quantity.` | *Not recorded.* |
| **Valkyrie Peptides** | `Horizon Analytical UPLC-MS identity + matched endotoxin COA.` | *Not recorded.* |
| **AMP Peptides** | `99%+ purity; lot-specific Janoshik COAs on request.` | *Not recorded.* |
| **Licensed Peptides** | `99%+ HPLC purity, third-party verified. Endotoxin screened.` | *Not recorded.* |
| **Limitless Biotech** | `HPLC and LC-MS tested by three independent labs, against a published ≥98.5% minimum standard, with a batch-specific COA on every product page.` | *(short and full are the same — this line was written long)* |
| **Mile High Compounds** | 🔴 **STALE — DO NOT USE.** Old line claimed MS identity; Chromate's method is spectral match, **not MS**. Rewrite from the coupon page before posting Mile High. | Public batch-matched COA library; Chromate + ISO-17025 Vanguard. **Verify the method language before use.** |

**Merge rule:** if the vendor is in the table, use it. If not, derive from PP's `/coupons/<slug>` — then **add the new line to this table** so it fills in over time rather than staying a fixed gap. ~14 vendors of a ~48-vendor roster are covered today.

> **The lab is named on the certificate, not in marketing copy.** Before concluding a vendor publishes nothing, try the direct-asset path (`/wp-content/uploads/…`) and then ask Mark. Five vendors were understated exactly this way.

---

## 🔒 6. WHICH LINK TO POST

**Some coupon pages have no per-vendor OG card.** They fall back to the sitewide default `og-image.png` — a 1024×1024 square showing only the "Pp" mark. On X that renders as a plain box with a caption, and it looks broken next to the real cards.

**Check before drafting.** A page has its own card if `og:image` points at `/coupons/<slug>/opengraph-image`. If it reads `https://profpeptide.com/og-image.png`, that page has **no card** and must use the hub link.

| Situation | Link |
|---|---|
| Standing rate, vendor page **has** its own card | `/coupons/<vendor-slug>` |
| Standing rate, vendor page has **no** card | **`/coupons?v=4`** |
| **Boosted / promotional rate** (post rate > site rate) | **`/coupons?v=4`** |
| **Site rate is wrong or stale relative to the post** | **`/coupons?v=4`** |
| Vendor card stuck on a stale X cache | **`/coupons?v=4`** |

**The hub card carries no rate**, which is why it's safe for every one of these cases.

### 🔒 Temporary rates NEVER go on the vendor page

**A promo or boosted rate lives in the POST and the hub link — never on `/coupons/<slug>`.**

**Why:** the vendor page's OG card is generated from whatever the page publishes. Put 35% on the page and the card regenerates at 35% — and X caches a card per URL **permanently**. The standing-rate card is gone, and the promo card outlives the promo.

**The vendor page holds the standing rate. Always.** The post carries the promo and links `/coupons?v=4`, whose card carries no rate at all.

> **Recorded 2026-08-22 — Amino Club.** The 35% promo was published to the vendor page. Its card regenerated, and the thumbnail then failed to render on X entirely. Fixing it means reverting the page to 20%; the spoiled cache at that URL may not be recoverable.

---

### 🔒 `?v=4` is the current hub URL

| Value | Status |
|---|---|
| *(bare `/coupons`)* | ❌ RETIRED — stale card cached in X |
| `?v=2` | ❌ **BURNED** to the old dark card |
| `?v=3` | ⚠️ Pasted into a compose box while the card was blank — may have cached blank |
| **`?v=4`** | ✅ **CURRENT — use this** |

`?v=` values are **not** single-use (that was a v47 error). X caches a card per URL, and a value stays usable indefinitely as long as the card cached against it is the one you want. Only advance the number when the hub card itself changes and X is holding a stale version.

### The X card cache

⚠️ **X caches OG cards per URL and generally does not re-fetch.**

⚠️ **But a blank card is NOT always permanent** *(recorded 2026-08-23)*. Forge's card rendered blank on first post despite the OG route returning a valid 1200×630 PNG; a `?v=2` cache-buster fixed it — and the **original URL recovered on its own shortly after**. So a blank may be a scrape **timing out**, not a spoiled cache. **Before burning a version: check the OG route renders directly, then wait and re-check.** Only cache-bust if it stays blank.

⚠️ **Pasting a URL into a compose box causes X to scrape it.** If the card renders blank at that moment, the blank may cache. Always check the card renders before sending a set; if it's blank, wait thirty seconds and re-paste before burning a new version.

⚠️ **Next derives the `og:image` hash from the route module, not the rendered PNG.** So when a vendor's rate changes, the image content changes but the **URL doesn't** — any platform caching that URL keeps serving the stale card.

⚠️ **A wrong rate on the vendor page forces the hub link.** If `/coupons/<slug>` publishes a rate the post contradicts, post the hub until the page is corrected and the OG image regenerates.

**Card status — spot-check before a run**

| Vendor page | Card | Link |
|---|---|---|
| Glacier Aminos · Amino Club · most established vendors | ✅ Own card | vendor URL |
| **Crush Research** | ❌ No card | **`/coupons?v=4`** |
| **Treasure Coast** | ⚠️ Likely no card — same build pass | verify, then hub |
| **Modern Aminos** | ⚠️ Likely no card — same build pass | verify, then hub |
| **EZ Peptides** | ⚠️ Card exists, route returns 200, but **X renders text-only**. Open issue | **`/coupons?v=4`** until resolved |
| **Limitless Biotech** | ✅ Own card, but **bakes the wrong 10%** | **`/coupons?v=4`** until corrected |

> **Durable fix for the gaps:** CC adds the missing per-vendor `opengraph-image.tsx` files. The hub link is the interim.

---

## 🔒 7. CODED COMPOUNDS

When a vendor lists a compound under a code, the post names the compound **with the code in a bare parenthetical**: `Retatrutide (LP3-R)`. A reader searching their store for "Retatrutide" otherwise finds nothing.

🔒 **The bare parenthetical is canonical (2026-08-23).** Generic name first, vendor's code in parentheses after. **Do NOT write "listed as", "sold as", "coded as"** or any other framing verb — the parenthetical carries the meaning on its own. This applies to posts and to site copy alike; the 13 pages using the older framing were converted.

⚠️ **Aero is a genuine exception worth knowing.** Aero prefixes BOTH tirzepatide (`GLP1 – Tirz`) and semaglutide (`GLP1 – Semaglutide`) with GLP1, which contradicts the tier key below. That is **Aero's own SKU naming, recorded accurately** — not a PP error and not a decode failure. Aero's coupon page carries a clarifier saying so. Do not "fix" it to match the tier key.

**Decode evidence hierarchy:** CAS number, molecular formula, MW, mechanism, or dev code. **Never the naming convention alone.** A `GLP-3` suffix is not evidence.

| Vendor | Code | Compound | Evidence |
|---|---|---|---|
| Licensed Peptides | LP3-R | Retatrutide | **CAS 2381089-83-2** on the vial; COA chromatogram peak labeled "Retatrutide" |
| Licensed Peptides | LP2-T | Tirzepatide | **CAS 2023788-19-2** on the vial |
| EZ Peptides | EZP-1P / 2P / 3P / CG | Semaglutide / Tirzepatide / Retatrutide / Cagrilintide | EZ's own COA page — Janoshik links list matching sizes |
| Mile High | MHC-1 SM / 2 TRZ / 3 RT | Semaglutide / Tirzepatide / Retatrutide | Mark's call |
| **Glacier Aminos** | **GLA-1 SM / 2 TRZ / 3 RT · S-31-S** | **Semaglutide / Tirzepatide / Retatrutide · SS-31** | self-decoding key; product URLs confirm (`/gla3-rt/`, `/gla2-trz/`, `/gla1-s/`) |
| Real Peptides | GLYCON-X | Tirzepatide | Vial labelled `GLP-2 T` (Mark, first-hand) + page describes a dual GLP-1/GIP agonist |
| AMP Peptides | GLP3RT | Retatrutide | **Naming, not a certificate** — `RT` is a compound abbreviation, and AMP's only GLP SKU across 19 products |
| Ion Peptide | ION-1S / 2T / 3R | Semaglutide / Tirzepatide / Retatrutide | Mark, first-hand |
| Improved Peptides | GLP-1S / 2T / 3R | Semaglutide / Tirzepatide / Retatrutide | **CAS 910463-68-2** printed on the Krause cert for GLP-1S |
| **Ignite Peptides** | **IP1-S / IP2-TRZ (IP2-TZ) / IP3-RT** | Semaglutide / Tirzepatide / Retatrutide | Suffix letters + tier key + PP page catalog naming all three; posted 2026-08-26; Mark portal-confirm pending |
| **Hydro Research** | **H-(R) / H-(S) / H-(T) / H-(C) / H-(C-T) / H-(C/S)** | Retatrutide / Semaglutide / Tirzepatide / Cagrilintide / Cagri+Tirz / CagriSema | **Janoshik COAs name each** (tasks 63445/89385/122137/193922/43255/197201). H-(C-R) UNMAPPED — redacted COA; Janoshik key W2FFUG3JLAR7 awaits Mark |
| **Capstone Peptides** | **GLP-1S / GLP-2T / GLP-3R / C-Amylin** | Semaglutide / Tirzepatide / Retatrutide / Cagrilintide | Mark first-hand (his store); see §7b |

**Coded combos exist and are invisible to every rule:** peptide-giants `PG-3RT+C` and nura `GLP-3R / CAG` are both Retatrutide+Cagrilintide. **Never post one as a single compound.**

### 🔒 The GLP tier key — corroborator only

**GLP-1 → Semaglutide · GLP-2 → Tirzepatide · GLP-3 → Retatrutide**

Consistent across ~12 verified vendors with zero contradictions. **Recorded in `decoders.py` as a CORROBORATOR, never as proof.** Nine vendors use the same naming with no supporting evidence and stay unmapped: purerawz, vital-core, nextgen, la, peptidology, peptide-giants, nura, biopure.

⚠️ **A suffix letter is different from a tier digit.** `RT`, `TZ`, `SM` are compound abbreviations and carry real weight. A bare `GLP-3` does not.

### 🔴 Ask Mark before leaving a compound undecoded

Mark frequently knows first-hand: he has vials, he's ordered from these vendors, he talks to them directly. **GLYCON-X, GLP3RT and ION-1S/2T/3R all sat unmapped until he was asked, and all three decoded immediately.**

⚠️ Leaving something unmapped is correct **only after asking.**

---

### 🔒 7b. CAPSTONE — vendor-specific posting rules (2026-08-27)

Capstone Peptides is on PP's roster and posts like any other vendor (cross-brand firewall: nothing implying a connection). Its specific rules:

- **Compound naming: real names WITH the coded parenthetical** — `Retatrutide (GLP-3R)`, `Tirzepatide (GLP-2T)`, `Semaglutide (GLP-1S)`, `Cagrilintide (C-Amylin)`. The standard §7 decode convention applies; codes-only was considered and rejected (Mark, 2026-08-27). The brand skill's coded-only rule governs Capstone's OWN surfaces, not PP's X voice.
- **Line 4 (locked wording basis):** third-party tested by **Accumark**, with COAs **published on capstonepeptides.com and independently verifiable on the lab's site**. Never "available on request."
- **Link: `https://capstonepeptides.com/catalog/`** — the /catalog/ exception. Capstone posts link the store's catalog directly rather than PP's vendor page.
- **No urgency, sale, or countdown framing ever** — Capstone runs no sale styling by brand rule; posts stay standing-rate shape.
- Code **PROFPEPTIDE / 10%** (verify against the live hub before each set, like any vendor).

## 🔒 8. DE-DOMAIN RULE

A vendor name that is a live domain gets de-domained in post body text — **"Peptides.gg" → "Peptides GG"** — or X hijacks the per-vendor OG card.

**Names with a space are safe:** EZ Peptides, Mile High Compounds, Glacier Aminos, Licensed Peptides, Limitless Biotech, Amino Club, Peptide Partners, Vital Core Research, Royal Peptides, Oasis Labs. No de-domain needed.

---

## 9. NEWS POSTS — a different shape

News articles get a distinct format. **No code, no vendor, no fire emoji** — editorial content, and a discount code in a regulatory post undercuts what makes it worth reading.

**Structure:** the finding → the counterintuitive detail → why it matters → the link.

**Worked example, FDA 503B:**
> The FDA has proposed excluding semaglutide, tirzepatide and liraglutide from the 503B Bulks List — permanently closing bulk compounding for all three, even if a future shortage is declared.
>
> Meanwhile 12 peptides were removed from Category 2 in April. Zero have been confirmed in Category 1.
>
> Removal isn't authorization. Those two get conflated constantly, and the difference decides what a pharmacy can legally compound.

⚠️ **Link the article's own URL, not the `/news` hub.** The hub's OG card and title are the hub's, and as new articles publish the link stops pointing at the piece described.

---

## 10. VENDOR CODE MASTER

**Read `vendors.ts` or PP's live coupon page before drafting.** The table below is a convenience copy and can go stale.

| Vendor | Code | Discount |
|---|---|---|
| Ascension Peptides | PROFPEPTIDE | **50%** |
| Amino Club | PROFPEPTIDE | **35% — TEMPORARY, expires Aug 31 2026**, then reverts to 20%. ⚠️ Verify against the live page before posting; do not post 35% after it lapses |
| Almighty Peptides | PROFPEPTIDE | 20% |
| Vital Core Research | PROF20 | 20% |
| Real Peptides | PROFPEPTIDE | 20% |
| Aero Peptides | **PROFPEPTIDE** | 15% — ⚠️ corrected 2026-08-23. v52 listed PROFPEPTIDE15; the checkout code was changed to PROFPEPTIDE and vendors.ts + every live surface renders it. The `?ref=PROF15` in Aero's URL is its GoAffPro affiliate identifier, NOT the coupon code |
| Amino X | PROF15 | 15% |
| Oasis Labs | PROFPEPTIDE | 15% — *changed from PROF15, Aug 10* |
| Royal Peptides | **PROFPEPTIDE** | 10% — 🔴 corrected 2026-08-26 (was PROF10; vendor silently rebound; site swept `a14382f`) |
| Ignite Peptides | **PROFPEPTIDE** | 10% — 🔴 corrected 2026-08-26 (same silent-rebind class, same sweep) |
| Hydro Research | PROFPEPTIDE | **20% standing** + sale codes PROFPEPTIDE50 (GLPs) / PROFPEPTIDE25 (rest) — affiliate-branded, ARE the sale mechanism |
| Paradigm Peptides | PROFPEPTIDE | 10% — onboarded 2026-08-26 |
| Capstone Peptides | PROFPEPTIDE | 10% — §7b rules |
| Purity Peptides 🇨🇦 | PROF15 | 15% |
| PureRx Peptides | PROFPEPTIDE | 15% |
| Nura Peptide | PROFPEPTIDE15 | 15% |
| AMP Peptides | PROFPEPTIDE | 15% |
| Improved Peptides | PROFPEPTIDE | 15% |
| Ion Peptide | PROFPEPTIDE | 15% |
| Limitless Biotech | PROFPEPTIDE | **15%** — *corrected from 10%, cart-verified Aug 11* |
| Glacier Aminos | PROFPEPTIDE | 10% — *changed from PROF10, Aug 6* |
| EZ Peptides | PROFPEPTIDE | 10% |
| Peptide Partners | PROFPEPTIDE | 10% |
| Mile High Compounds | PROFPEPTIDE | 10% |
| Peptide Giants | PROFPEPTIDE | 10% |
| BioCollex · Integrative · Spartan | PROFPEPTIDE | 10% |
| Particle Peptides 🇪🇺 | PROFPEPTIDE | 10% |
| **Midwest Peptide** | **PROFPEPTIDE** | 10% — *changed from PROF10.* 🔴 **Both `PROFPEPTIDE` and `PROF10` work at checkout** (Mark, first-hand, 2026-08-20). Earlier docs recording PROFPEPTIDE as invalid were **wrong**. |
| Ameano · Behemoth · Ignite · Royal · PureRawz · Swiss Chems | PROF10 | 10% |
| Valkyrie Peptides | PROFPEPTIDE | **10%** — ⚠️ 20% is commission, not the reader's discount |
| 99 Purity Peptides | PROFPEPTIDE | 10% — *changed from PROFPEPTIDE10, Aug 6* |
| Synthesis Peptides | PROFPEPTIDE10 | 10% *(retired vendor)* |
| Licensed Peptides | PROFPEPTIDE | **5%** |
| BioPure Peptides | PROFPEPTIDE | 5% |

**Codes are case-insensitive at checkout across the roster. PP always renders them UPPERCASE.**

**🔒 STANDING PREFERENCE — consolidate every vendor's code to `PROFPEPTIDE`.** One code across the roster: easier to remember, easier to post, no per-vendor lookup. Ask when next in contact with any vendor still on `PROF10`, `PROF15`, `PROF20`, `PROFPEPTIDE10` or `PROFPEPTIDE15`.

### Standing vendor notes

- **🔴 DO NOT POST NURA yet.** Their 20% email-signup offer does **not** stack with PP's 15% code, so a first-time buyer is better off ignoring PP entirely. Mark has emailed asking them to raise PP's code to 20%. Hold the set until resolved.
- **⚠️ Glacier's old `PROF10` is dead.** Any `/coupons/glacier-aminos` or `/coupons/99-purity-peptides` link shared before Aug 6 keeps showing the old card permanently.
- **🟡 Glacier runs a public 10% Zelle discount** ("pay with Zelle, save 10% instantly, no coupon needed") on its own homepage, matching PP's 10% exactly. Falls under §3's vendor-own-offer rule — **stacking unknown, ask Mark.** Same shape as the Nura problem.
- **✅ Licensed Peptides stacking confirmed.** `save10` and `PROFPEPTIDE` both apply on one order, and PP earns attribution when its code is used.
- **✅ 99 Purity is 10%.** Verified at checkout Aug 6 — the welcome email was right, the affiliate dashboard was stale.
- **🔴 Limitless Biotech is 15%, not 10%.** PP's `/coupons/limitless-biotech` page and OG card still publish 10% until CC's correction ships — **post the hub link until then.**

> **When a vendor's own surfaces disagree about a rate, the cart test is the tiebreak.** Add an item, apply the code, read what checkout deducts.

⚠️ **A published rate with no verification basis is a defect, not a default.** Only AMP, Improved and Limitless are cart-verified. Every other published rate on the roster is currently unaudited.

---

## 11. VENDORS WHOSE OWN OFFER MEETS OR BEATS PP'S

Do not post a stacking claim for these until Mark confirms.

| Vendor | PP | Their public offer | Status |
|---|---|---|---|
| **Nura** | 15% | 20% signup | ❌ **Confirmed does NOT stack. Do not post Nura.** |
| **Midwest** | 10% | `SITEWIDE30` — 30%, footer banner every page | Reveal-gated on site |
| **Glacier Aminos** | 10% | 10% Zelle payment discount, no code needed | ❓ Unchecked |
| **Behemoth** | 10% | 15% newsletter + free gift | ❓ Gated, less severe |
| **PureRawz** | 10% | 15% sitewide newsletter + free gift | ❓ Unchecked |
| **Real Peptides** | 20% | 25% first order | Reveal-gated on site |
| **Peptidology** | 10% | — | Reveal-gated on site |
| **Licensed Peptides** | 5% | `save10` — 10% | ✅ Confirmed stacks |
| **Royal Peptides** | 10% | `ROYAL10` — 10%, their own public /coupon page ("affiliate codes may vary"; no stacking, one code per order) | Equal offers — buyer-indifferent; PP code earns attribution. No stacking claims |

**Cross-reference:** PP_COMMISSIONS (current version) holds the revenue view of the same problem; PP_SNIPPET_INVESTIGATION holds the reveal-gate rationale. **This table is the posting view — whether it's safe to post a stacking claim.**

---

## 12. STANDING CAUTIONS

- **🔴 COMMISSION IS NOT THE READER'S DISCOUNT.** Portals show two numbers and they frequently differ — Valkyrie pays 20% and gives readers 10%; Improved pays 20% and gives 15%; Amino Club pays 20% first-order and 10% recurring. **Posts state the CUSTOMER discount. Commission never appears anywhere.**
- **🔴 Check PP's own vendor page for the catalog before the vendor's site.** See §0.
- **🔴 Check what the vendor page publishes before naming a rate.** Understating is safe; overstating is not. If page and post disagree, post the hub link and get the page corrected.
- **Verify stock before posting.** Stored profiles go stale in weeks. Survodutide was drafted for EZ and Licensed Peptides and doesn't exist in either catalog.
- **Domain traps.** Six "EZ Peptides" sites exist — ours is `ezpeptides.com`. Never trust an aggregator's data — and never use one as a source at all (§0).
- **Never state a purity number** unless it's the vendor's published standard, and never as a measured figure.
- **New coupon pages need `opengraph-image.tsx` and `twitter-image.tsx`** — Crush, Treasure Coast and Modern Aminos shipped without them and fell back to the generic square.

---

## 13. POSTED / DRAFTED LOG

| Vendor | Set | Status |
|---|---|---|
| Mile High | 5 posts | ✅ Posted — 30% sale Aug 6–9, deadline in text |
| **Glacier Aminos** | 4 posts | ✅ Posted — **reissued with `PROFPEPTIDE`** *(v49 §9 wrongly still read PROF10; corrected here)* |
| EZ Peptides | 4 posts | ✅ Posted — 25% sitewide + 10% stacking, through Aug 11 |
| Licensed Peptides | posted | ✅ Posted — 5% + stacking |
| Ion Peptide | 5 drafted | ⬜ Unposted |
| Limitless Biotech | 6 drafted | ⬜ Unposted — **hub link until the 10%→15% page correction ships** |
| Peptides GG · Midwest · Peptide Partners | drafted | ⬜ Unposted, carried across several versions |

---

## 📅 CHANGELOG

**v54 (2026-08-25):** EZ sale example marked expired — sale-date claims in docs are never fireable without same-day live verification. /prices OG outage (Aug 6–25) recorded and fixed. FAQ pages recorded as linkable surfaces.

**v53 (2026-08-23):** Aero code corrected to PROFPEPTIDE. Decode framing standardized to the bare parenthetical; "listed as" retired. Aero's non-standard GLP1 prefixing recorded as vendor naming, not a PP error. Blank-OG-card rule softened — may be a timeout, check before cache-busting.

**v52 (2026-08-22):** Attribution reframed as the standard tool for unverifiable-but-benign facts; questionable claims omitted entirely, never attributed. Amino Club recorded at 35% temporary with an Aug 31 expiry. New §6 rule: temporary rates never touch the vendor page.

**v51 (2026-08-20):** Full replacement of v49 + v50. RUO line retired (Mark). Live-sales table deleted (Mark). No-character-limit restated as its own section. Line-4 table merged into short/full hybrid. Hub URL conflict resolved to `?v=4`. Six-category set restored. Glacier POSTED row corrected. Midwest `PROFPEPTIDE`/`PROF10` correction recorded. Glacier Zelle offer logged. Aggregator/competitor sourcing prohibition made explicit with the recorded failure.

**v50 (2026-08-19):** RUO line *(now retired)*, sale-post stacking shape, news-post shape, line-4 sources, X card cache.
**v49 (2026-08-11):** Removed the character limit, folded in the v48 addendum, corrected Limitless to 15%.
**v48 (2026-07-31):** Link selection and OG-card fallback.
**v47 (2026-07-28):** Hub `?v=N` convention.

---

*Full replacement. RULE #0 governs. **Read this file, not a summary of it.** If a later delta doc exists, it names what it supersedes — but this file stands alone until one does.*
