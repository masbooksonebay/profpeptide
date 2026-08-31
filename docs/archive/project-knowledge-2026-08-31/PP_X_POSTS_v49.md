# PP X POSTS — v49

**Status:** ACTIVE. Full replacement, supersedes v48 and all addenda.
**Date:** August 11, 2026 — v49 **removes the character limit** (§1), replaces it with the **truncation rule**, folds the **v48 addendum's link-selection and card-fallback rules** into the body (v48 dropped them), corrects **Limitless Biotech to 15%**, and adds the **Limitless drafted set**.

> **Why X matters more than the traffic suggests:** code-based attribution drives the majority of PP revenue. Buyers see a code on X, go directly to the vendor, and PP earns commission with no site visit recorded. Peptide Partners generates ~51% of total commission history with negligible GSC impressions. **X posts, not search, likely drive the money.**

---

## 🔒 0. SOURCE THE CATALOG BEFORE DRAFTING — IN THIS ORDER

**1. PP's own vendor page first — `/coupons/<slug>`.** It carries a compound-by-research-area breakdown built by CC from primary research, already mapped onto the post categories. **Check it before anything else.** It exists precisely so this doesn't need re-deriving.

**2. The vendor's live site**, to catch anything added since the page was built.

**3. Ask CC or Mark** when either is unreadable.

⚠️ **A fetch of a vendor site is NOT an exhaustive catalog check.** WooCommerce shops paginate; product widgets render "Loading products…" without JS; site search is client-side and redirects to the homepage when hit by URL params. **A partial listing read as complete produces posts that omit a vendor's headline compounds.**

⚠️ **Never conclude a vendor lacks a compound from a fetch alone.** Say it's unverified and ask.

> **Failure recorded Aug 10, 2026.** Ion Peptide posts were drafted twice from partial fetches, wrongly concluding no BPC-157, no TB-500, no CJC-1295 — the three highest-demand compounds in recovery and growth hormone. All three were on PP's own vendor page, in a categorized list, the entire time. The shop page's alphabetical sidebar omitted them; it was read as complete.

---

## 🔒 0b. THE CATEGORY POST SET

**Draft one post per research area the vendor actually stocks.** Four is standard, five or six when the catalog supports it:

| # | Category | Anchor examples |
|---|---|---|
| 1 | **Metabolic** | Retatrutide *(always first if stocked)*, Tirzepatide, Semaglutide, Cagrilintide |
| 2 | **Recovery & tissue repair** | BPC-157, TB-500, KPV, PDA |
| 3 | **Growth hormone** | CJC-1295 + Ipamorelin *(lead with the pair — commonly stacked)*, Tesamorelin, Sermorelin, IGF-1 LR3 |
| 4 | **Skin / dermal** *or* **nootropics** | GHK-Cu, GLOW, KLOW, Melanotan · Semax, Selank, DSIP, PE-22-28 |
| 5 | **Longevity** *(when the catalog is deep)* | Epitalon, Glutathione, FOXO4-DRI, NAD+ |
| 6 | **Gut health & immunity** *(when the catalog supports it)* | KPV, Thymosin Alpha-1, VIP |

⚠️ **Pick the categories the vendor actually carries.** A vendor with both a cosmetic line and nootropics gets both.

⚠️ **Don't pad a thin category into a post.** Two compounds isn't a category — a post whose line 3 names one extra compound reads as filler. Drop it and say why.

⚠️ **CJC-1295 and Ipamorelin lead the growth-hormone post together** — they're the most popular pair and most vendors sell a blend. If a blend SKU exists, that's the stronger anchor.

---

## 1. POST FORMAT (LOCKED)

```
{Vendor} has {ANCHOR} in stock!

Use code {CODE} for {X}% off. 🔥

{Vendor} also carries other {category} peptides including {compounds}.

{Testing differentiator}

{link}
```

### 🔓 NO CHARACTER LIMIT — changed August 11, 2026

**Posts are not capped.** The former **≤275 character** ceiling is **RETIRED**. It came from the pre-Premium 280-character hard limit, which no longer applies to the accounts PP posts from. Do not trim a true, useful sentence to hit a number.

**What replaces it — the truncation rule:**

X still collapses long posts in the timeline behind **"Show more."** The cut lands somewhere around the first ~280 characters and is not exactly predictable.

🔒 **The anchor line and the code line must both land above the fold.** That is the entire reason the code line sits at position 2 — it was moved there in v3.2 specifically to survive truncation, and that rationale outlives the cap.

Everything below the code line — the category line, the testing differentiator, the link — may fall under "Show more" without loss. A reader who has seen the compound and the code already has what converts.

⚠️ **Length still has to earn itself.** No cap is not a licence to pad. Every added clause should carry a fact a buyer would act on — a format (capsules, nasal spray), a second compound, a testing detail. **Cut anything that is atmosphere rather than information.**

⚠️ **Do not lengthen lines 1 or 2.** They're above the fold and every character spent there pushes the code closer to the cut. The extra room lives in lines 3 and 4.

### Everything else in the format is unchanged

- Opener ends with **`!`**
- **🔥 only on the code line.** No other emoji anywhere.
- **Peptides spelled out** — Retatrutide not Reta, Semaglutide not Sema
- **Line 3 NAMES THE CATEGORY** — "Ion Peptide also carries other metabolic peptides including Tirzepatide and Semaglutide." Not a bare compound list. The category is what makes the post findable.
- **Line 3 compound count:** 2–3 was a character-budget rule. With the cap gone, **3–4 is fine** where the vendor genuinely carries them. Beyond that the line reads as a catalog dump.
- **No urgency language** ("limited time," "act fast") — except a real dated deadline
- **No vial sizes**
- **No dosing protocols, no medical voice**
- **Line 4 is testing/purity ONLY.** Not reviews, not shipping, not price. The removed cap makes line 4 *more* useful, not different in kind — name the methods, the lab count, the published purity standard and the COA cadence, and stop there.

**Rotation is Mark's.** Claude drafts by category; Mark assigns accounts and posts.

---

## 2. 🔒 CHECK FOR A SALE BEFORE DRAFTING ANY POST SET

**Always check the vendor's live homepage for a sitewide sale before writing posts.** A running sale changes the lead angle, and PP's code stacks on top of it.

**Sitewide sales ALWAYS stack with the affiliate code.** Settled — don't re-verify per vendor. If a vendor is running 25% sitewide and PP's code is 10%, the post leads with the sale and the stack.

**A vendor's OWN circulating code is different** — a newsletter offer, a first-order discount, a banner code. Those sometimes don't stack and sometimes void attribution. **Mark checks those individually.** Never assume, never post a stacking claim about one until he's confirmed it.

| Type | Stacks? | Post it? |
|---|---|---|
| Sitewide sale, no code needed | ✅ Always | Lead with it |
| Vendor's own circulating code | ❓ Unknown | Ask Mark first |

**Where to check:** the vendor's homepage hero and banner. Sales are almost always announced there with a countdown.

**⚠️ Time-boxed sales expire.** Put the deadline in the discount line so the post ages honestly, and prioritize by expiry — the shortest window goes out first.

⚠️ **One item at X% off does not establish a sitewide rate.** A cart test proves the code's percentage and that it stacks; it proves the sale rate only for the item tested. **If the sale percentage isn't confirmed across the catalog, write "Sale prices sitewide" without a number.**

> A sale is the strongest angle available. It's news rather than a stock announcement, and it's the only thing that makes a post urgent.

---

## 3. SALE POSTS

- **Deadline goes in the discount line**, not a separate line.
- **Link the `/coupons` hub, not the vendor page** — the per-vendor OG card bakes the standing rate into the image and would contradict a sale post. See §3b for the exact URL.
- **No promo mechanics** — no giveaways, no spend thresholds, no top-spender contests.

### 🔒 The elevated-rate rule

An elevated-rate post carries **either a deadline in the text or "up to" phrasing.** Either one makes it age honestly and removes the cleanup step entirely.

A bare elevated number is the only version that needs deleting later.

*Proven both ways: Mile High's 30% posts carried "sale ends Sunday, August 9"; Amino Club's carried "up to 30%." Neither needed cleanup.*

### Stacking sales

**🔒 Affiliate codes ALWAYS stack with a vendor's sitewide sale.** A sitewide discount plus PP's code compounds — that's the norm across the roster, not something to verify each time.

**The exception is a vendor's OWN circulating code.** Those sometimes don't stack, and sometimes void attribution. **Mark checks these individually — never assume.**

> Do not treat a big sitewide sale as a reason to hold a post. A 30% sitewide plus a 20% code is **44% off** — that's the strongest angle available, not a problem.

**Do NOT state a combined percentage.** 25% then 10% compounds to 32.5%, not 35%. Write "25% off sitewide + 10% with code" and let the arithmetic happen at checkout.

### 🟡 LIVE SALES — check before posting, these expire

| Vendor | Sale | PP's code | Window |
|---|---|---|---|
| **Limitless Biotech** | Sitewide, rate not uniformly verified — code stacks on sale price, cart-confirmed Aug 11 | +15% | **Ends Aug 16**, no time/timezone published |
| **Glacier Aminos** | 12% sitewide, `12MONTHS` | +10% | expired-check before use |
| **Midwest** | Sunflower BOGO half-off on GLP-3 RT 20mg + GLP-2 TZ 30mg, plus 5X points | +10% | ~24 days from Aug 7 — **NOT POSTED** |
| **Ignite** | Sitewide BOGO + free BAC water | +10% | undated — **NOT POSTED** |
| **Licensed Peptides** | "Up to 50% off" storewide | +5% | undated |
| **Almighty** | BOGO on most SKUs | +20% | ongoing, already in PP's copy |
| **Real Peptides** | 30% sitewide | +20% | ~25 days from Aug 7 |

### ⚠️ VENDORS WHOSE OWN CODE BEATS PP'S — stacking UNKNOWN

Do not post a stacking claim for these until Mark confirms.

| Vendor | PP | Their public code |
|---|---|---|
| **Midwest** | 10% | 30% first order, emailed on signup |
| **Behemoth** | 10% | 15% newsletter + free gift |
| **PureRawz** | 10% | 15% sitewide newsletter + free gift |
| **Licensed Peptides** | 5% | `save10` — 10% ✅ *confirmed stacks* |
| **Nura** | 15% | 20% signup — ❌ *confirmed does NOT stack. Do not post Nura.* |
| **Real Peptides** | 20% | 25% first order |

**The real risk is commission.** Many affiliate programs void attribution when another coupon is applied to the same order. If the vendor's terms don't address it, ask them before running a set.

---

## 🔒 3b. WHICH LINK TO POST — folded in from the v48 addendum

**v48's body dropped these rules. They are live and this section restores them.**

**Some coupon pages have no per-vendor OG card.** They fall back to the sitewide default `og-image.png` — a 1024×1024 square showing only the "Pp" mark. On X that renders as a plain box with a caption, and it looks broken next to the real cards.

**Check before drafting.** A page has its own card if `og:image` points at `/coupons/<slug>/opengraph-image`. If `og:image` reads `https://profpeptide.com/og-image.png`, that page has **no card** and must use the hub link.

| Situation | Link |
|---|---|
| Standing rate, vendor page **has** its own card | `/coupons/<vendor-slug>` |
| Standing rate, vendor page has **no** card | **`/coupons?v=2`** |
| **Boosted / promotional rate** (post rate > site rate) | **`/coupons?v=2`** |
| **Site rate is wrong or stale relative to the post** | **`/coupons?v=2`** |
| Vendor card stuck on a stale X cache | **`/coupons?v=2`** |

**The hub card carries no rate**, which is why it's safe for every one of these cases.

🔒 **`?v=2` is the STANDING hub URL.** `?v=` values are **not** single-use — that was a v47 error. X caches a card per URL, and a value stays usable indefinitely as long as the card cached against it is the card you want. Only advance the number when the hub card itself changes and X is holding a stale version.

| Value | Status |
|---|---|
| *(bare `/coupons`)* | ❌ **RETIRED** — stale card cached in X |
| **`?v=2`** | ✅ **STANDING** — verified rendering. **Use this** |
| `?v=3` | ⬜ Reserve — only if the hub card is regenerated |

⚠️ **A wrong rate on the vendor page forces the hub link.** If `/coupons/<slug>` publishes a rate the post contradicts, post the hub until the page is corrected and the OG image regenerates. *(Recorded Aug 11: Limitless Biotech published 10% against a cart-verified 15%.)*

**Card status — spot-check before a run**

| Vendor page | Card | Link |
|---|---|---|
| Glacier Aminos · Amino Club · most established vendors | ✅ Own card | vendor URL |
| **Crush Research** | ❌ No card | **`/coupons?v=2`** |
| **Treasure Coast** | ⚠️ Likely no card — same build pass | verify, then hub |
| **Modern Aminos** | ⚠️ Likely no card — same build pass | verify, then hub |
| **EZ Peptides** | ⚠️ Card exists, route returns 200, but **X renders text-only**. Open issue | **`/coupons?v=2`** until resolved |
| **Limitless Biotech** | ✅ Own card, but **bakes in the wrong 10%** | **`/coupons?v=2`** until corrected |

> **Durable fix for the three gaps:** CC adds the missing per-vendor `opengraph-image.tsx` files. The hub link is the interim.

---

## 4. CODED COMPOUNDS

When a vendor lists a compound under a code, the post names the compound **with the disclosure**: `Retatrutide (listed as LP3-R)`. A reader searching their store for "Retatrutide" otherwise finds nothing.

**Decode evidence hierarchy:** CAS number, molecular formula, MW, mechanism, or dev code. **Never the naming convention alone.** A `GLP-3` suffix is not evidence.

**Evidence-backed decodes:**

| Vendor | Code | Compound | Evidence |
|---|---|---|---|
| Licensed Peptides | LP3-R | Retatrutide | **CAS 2381089-83-2** on the vial; COA chromatogram peak labeled "Retatrutide" |
| Licensed Peptides | LP2-T | Tirzepatide | **CAS 2023788-19-2** on the vial |
| EZ Peptides | EZP-1P / 2P / 3P / CG | Semaglutide / Tirzepatide / Retatrutide / Cagrilintide | EZ's own COA page — Janoshik links list matching sizes |
| Mile High | MHC-1 SM / 2 TRZ / 3 RT | Semaglutide / Tirzepatide / Retatrutide | Mark's call |
| Glacier | GLA-1 SM / 2 TRZ / 3 RT · S-31-S | Semaglutide / Tirzepatide / Retatrutide · SS-31 | self-decoding key |
| **Real Peptides** | **GLYCON-X** | **Tirzepatide** | **Vial labelled `GLP-2 T`** (Mark, first-hand) + page describes a dual GLP-1/GIP agonist |
| **AMP Peptides** | **GLP3RT** | **Retatrutide** | **Naming, not a certificate** — `RT` is a compound abbreviation, and AMP's only GLP SKU across 19 products |
| **Ion Peptide** | **ION-1S / 2T / 3R** | **Semaglutide / Tirzepatide / Retatrutide** | **Mark, first-hand** |
| Improved Peptides | GLP-1S / 2T / 3R | Semaglutide / Tirzepatide / Retatrutide | **CAS 910463-68-2** printed on the Krause cert for GLP-1S |

**Coded combos exist and are invisible to every rule:** peptide-giants `PG-3RT+C` and nura `GLP-3R / CAG` are both Retatrutide+Cagrilintide. Never post one as a single compound.

### 🔒 THE GLP TIER KEY — corroborator only

**GLP-1 → Semaglutide · GLP-2 → Tirzepatide · GLP-3 → Retatrutide**

Consistent across ~12 verified vendors with zero contradictions. **It is recorded in `decoders.py` as a CORROBORATOR, never as proof.** Nine vendors use the same naming with no supporting evidence and stay unmapped: purerawz, vital-core, nextgen, la, peptidology, peptide-giants, nura, biopure.

⚠️ **A suffix letter is different from a tier digit.** `RT`, `TZ`, `SM` are compound abbreviations and carry real weight — Ignite's `GLP-2 (TZ)` and Mile High's `MHC-1 SM` decode partly on that. A bare `GLP-3` does not.

### 🔴 ASK MARK BEFORE LEAVING A COMPOUND UNDECODED

**When a coded compound can't be decoded from evidence, ASK — don't file it as UNVERIFIED and move on.**

Mark frequently knows first-hand: he has vials, he's ordered from these vendors, he talks to them directly. **GLYCON-X, GLP3RT and ION-1S/2T/3R all sat unmapped until he was asked, and all three decoded immediately.**

⚠️ Leaving something unmapped is correct **only after asking.**

---

## 5. THE RETATRUTIDE-FIRST RULE

If a vendor stocks Retatrutide, the metabolic post names it **first**. It's PP's highest-demand compound.

⚠️ **The rule binds only where stock is established.** Absence from PP's vendor page is not proof of absence — but it is also not licence to name it. **Ask, don't assume, and don't post it on an assumption.** A metabolic post without a GLP is weak; that weakness is the signal to go ask the vendor, not to fill the gap.

---

## 6. DE-DOMAIN RULE

A vendor name that is a live domain gets de-domained in post body text — **"Peptides.gg" → "Peptides GG"** — or X hijacks the per-vendor OG card.

**Names with a space are safe:** EZ Peptides, Mile High Compounds, Glacier Aminos, Licensed Peptides, Limitless Biotech. No de-domain needed.

---

## 7. TESTING DIFFERENTIATORS (line 4)

**Only what the vendor publishes, verified.** Never borrow another vendor's, never infer from a trust badge, never soften a missing claim into an implied one.

**If nothing is verifiable, drop the slot rather than fake it.** An attributed version — "Vendor states testing by independent US labs" — reads weakly on purpose, and that weakness is itself the signal.

**No purity figure from a single batch.** One COA at 99.927% doesn't license a blanket claim. Name the lab and the COA cadence instead. **A vendor's own published minimum standard is quotable as a standard** — "a published ≥98.5% minimum purity standard" — never as a measured result.

| Vendor | Line 4 |
|---|---|
| Glacier | `Tested by Kovera Labs — per-batch COAs, verifiable at the lab.` |
| EZ Peptides | `Third-party tested by Janoshik, with public COAs.` |
| Licensed Peptides | `99%+ HPLC purity, third-party verified. Endotoxin screened.` |
| **Ion Peptide** | `Kovera Labs per-lot COAs, LC-MS verified.` |
| **Improved Peptides** | `Freedom Diagnostics & Krause LC-MS COAs; public library.` |
| **Mile High** *(corrected)* | `Public batch-matched COA library; Chromate + ISO-17025 Vanguard.` |
| **Particle Peptides** | `Liquilabs full-panel COAs, Ph. Eur. limits.` |
| **Vital Core** | `ISO-17025 Vanguard per-lot COAs; HPLC purity + quantity.` |
| **Valkyrie** | `Horizon Analytical UPLC-MS identity + matched endotoxin COA.` |
| **AMP Peptides** | `99%+ purity; lot-specific Janoshik COAs on request.` |
| **Limitless Biotech** 🆕 | `Every batch is HPLC and LC-MS tested by three independent third-party laboratories, against a published ≥98.5% minimum purity standard, with a batch-specific Certificate of Analysis on every product page.` |

⚠️ **Mile High's old line is STALE — do not use.** Chromate's identity method is spectral match, **not MS**.

> **The lab is named on the certificate, not in marketing copy.** Before concluding a vendor publishes nothing, try the direct-asset path (`/wp-content/uploads/…`) and then ask Mark. Five vendors were understated exactly this way.

---

## 8. VENDOR CODE MASTER

Read `vendors.ts` before drafting. The table below is a convenience copy and can go stale.

| Vendor | Code | Discount |
|---|---|---|
| Ascension Peptides | PROFPEPTIDE | **50%** |
| Amino Club | PROFPEPTIDE | 20% |
| Almighty Peptides | PROFPEPTIDE | 20% |
| Vital Core Research | PROF20 | 20% |
| **Real Peptides** | PROFPEPTIDE | 20% |
| Aero Peptides | PROFPEPTIDE15 | 15% |
| Amino X | PROF15 | 15% |
| Oasis Labs | PROFPEPTIDE | 15% — *changed from PROF15, Aug 10* |
| Purity Peptides 🇨🇦 | PROF15 | 15% |
| PureRx Peptides | PROFPEPTIDE | 15% |
| Nura Peptide | PROFPEPTIDE15 | 15% |
| AMP Peptides | PROFPEPTIDE | 15% |
| Improved Peptides | PROFPEPTIDE | 15% |
| Ion Peptide | PROFPEPTIDE | 15% |
| **Limitless Biotech** | **PROFPEPTIDE** | **15%** — 🔴 *corrected from 10%, cart-verified Aug 11* |
| Glacier Aminos | PROFPEPTIDE | 10% — *changed from PROF10, Aug 6* |
| EZ Peptides | PROFPEPTIDE | 10% |
| Peptide Partners | PROFPEPTIDE | 10% |
| Mile High Compounds | PROFPEPTIDE | 10% |
| Peptide Giants | PROFPEPTIDE | 10% |
| BioCollex · Integrative · Spartan | PROFPEPTIDE | 10% |
| Particle Peptides 🇪🇺 | PROFPEPTIDE | 10% |
| Midwest | PROFPEPTIDE | 10% — *changed from PROF10* |
| Ameano · Behemoth · Ignite · Royal · PureRawz · Swiss Chems | PROF10 | 10% |
| **Valkyrie Peptides** | PROFPEPTIDE | **10%** — ⚠️ 20% is commission, not the reader's discount |
| 99 Purity Peptides | PROFPEPTIDE | 10% — *changed from PROFPEPTIDE10, Aug 6* |
| Synthesis Peptides | PROFPEPTIDE10 | 10% *(retired vendor)* |
| **Licensed Peptides** | PROFPEPTIDE | **5%** |
| BioPure Peptides | PROFPEPTIDE | 5% |

**Codes are case-insensitive at checkout across the roster. PP always renders them UPPERCASE.**

**🔒 STANDING PREFERENCE — consolidate every vendor's code to `PROFPEPTIDE`.** One code across the roster: easier to remember, easier to post, no per-vendor lookup before drafting. Ask when next in contact with any vendor still on `PROF10`, `PROF15`, `PROF20`, `PROFPEPTIDE10` or `PROFPEPTIDE15`.

**⚠️ Glacier's old `PROF10` is dead.** Posts already reissued with `PROFPEPTIDE`. Any `/coupons/glacier-aminos` or `/coupons/99-purity-peptides` link shared to X or iMessage before Aug 6 keeps showing the old card permanently — OG images cache per URL and cannot be refreshed.

**⚠️ DO NOT POST NURA yet.** Their 20% email-signup offer does **not** stack with PP's 15% code, so a first-time buyer is better off ignoring PP entirely. Mark has emailed asking them to raise PP's code to 20%. Hold the set until it's resolved.

**✅ Licensed Peptides stacking confirmed.** `save10` and `PROFPEPTIDE` both apply on one order, and PP earns attribution when its code is used. Verified at checkout.

**✅ 99 Purity's discount is resolved: 10%.** Verified at checkout Aug 6. Their welcome email said 10% and their affiliate dashboard said 15% — the email was right, the dashboard was stale.

**🔴 Limitless Biotech is 15%, not 10%.** Cart-verified Aug 11: `profpeptide` deducted 15.00% per item, and it stacked on top of already-discounted sale pricing. **PP's `/coupons/limitless-biotech` page and OG card still publish 10% until CC's correction ships** — post the hub link until then.

> **When a vendor's own surfaces disagree about a rate, the cart test is the tiebreak.** Add an item, apply the code, read what checkout deducts.

⚠️ **A published rate with no verification basis is a defect, not a default.** Only AMP, Improved and Limitless are cart-verified. Every other published rate on the roster is currently unaudited.

---

## 9. POSTED

| Vendor | Set | Note |
|---|---|---|
| Mile High | 5 posts | 30% sale Aug 6–9, deadline in text |
| Glacier | 4 posts | PROF10 — see the code-change warning above |
| EZ Peptides | 4 posts | 25% sitewide + 10% stacking, through Aug 11 |
| Licensed Peptides | posted | 5% + stacking |
| Ion Peptide | 5 drafted | see v48 §10 |
| **Limitless Biotech** | **6 drafted** | see §11 — **unposted** |

---

## 10. STANDING CAUTIONS

- **🔴 COMMISSION IS NOT THE READER'S DISCOUNT.** Portals show two numbers and they frequently differ — Valkyrie pays 20% and gives readers 10%; Improved pays 20% and gives 15%; Amino Club pays 20% first-order and 10% recurring. **Posts state the CUSTOMER discount. Commission never appears anywhere.**
- **🔴 Check PP's own vendor page for the catalog before the vendor's site.** See §0.
- **🔴 Check what the vendor page publishes before naming a rate.** Understating is safe; overstating is not. If the page and the post disagree, post the hub link and get the page corrected.
- **Verify stock before posting.** Stored profiles go stale in weeks. Survodutide was drafted for EZ and Licensed Peptides and doesn't exist in either catalog.
- **Domain traps.** Six "EZ Peptides" sites exist — ours is `ezpeptides.com`. Never trust an aggregator's data without checking the domain.
- **Never state a purity number** unless it's the vendor's published standard, and never as a measured figure.
- **New coupon pages need `opengraph-image.tsx` and `twitter-image.tsx`** — Crush, Treasure Coast and Modern Aminos shipped without them and fell back to the generic square.

---

## 🆕 11. LIMITLESS BIOTECH — DRAFTED SET, AUGUST 11

Code `PROFPEPTIDE` · **15% to the customer** *(15% CPS commission stays off the page)* · formerly Limitless Life Nootropics · storefront `limitlesslifenootropics.com`.

**Link:** `/coupons?v=2` for every post in this set — the vendor card bakes in the uncorrected 10%. Revert to `/coupons/limitless-biotech` once CC's correction ships and the OG image regenerates.

⚠️ **Sale window ends August 16**, no time or timezone ever published. The sale percentage is **not** uniformly verified — one item showed 15% off list — so the posts say "Sale prices sitewide" with no number.

⚠️ **No Retatrutide.** Absent from PP's vendor page and its FAQ. Not named. **Ask the vendor** — its absence is what makes the metabolic post the weakest of the six.

⚠️ **Semaglutide is in PP's FAQ but omitted from the set.** An older note recorded Limitless's GLPs as VIP-gated; that may be stale. If they're openly purchasable, the metabolic post is stronger led by Semaglutide.

⚠️ **Skin is thin** — GHK-Cu and GLOW only. No post drafted rather than padding one.

**To convert any sale post below to standing after Aug 16**, swap line 2 for `Use code PROFPEPTIDE for 15% off. 🔥`. Nothing else changes.

**Metabolic**
```
Limitless Biotech has 5-Amino-1MQ in stock!

Sale prices sitewide + 15% off with code PROFPEPTIDE, ends August 16. 🔥

Limitless Biotech also carries other metabolic peptides including MOTS-c and AOD-9604, in both lyophilized and capsule formats.

Every batch is HPLC and LC-MS tested by three independent third-party laboratories, against a published ≥98.5% minimum purity standard, with a batch-specific Certificate of Analysis on every product page.

https://profpeptide.com/coupons?v=2
```

**Recovery & tissue repair**
```
Limitless Biotech has BPC-157 in stock!

Sale prices sitewide + 15% off with code PROFPEPTIDE, ends August 16. 🔥

Limitless Biotech also carries other recovery peptides including TB-500 and KPV, with BPC-157 available in capsule form alongside standard lyophilized vials.

Every batch is HPLC and LC-MS tested by three independent third-party laboratories, against a published ≥98.5% minimum purity standard, with a batch-specific Certificate of Analysis on every product page.

https://profpeptide.com/coupons?v=2
```

**Growth hormone**
```
Limitless Biotech has CJC-1295 and Ipamorelin in stock!

Sale prices sitewide + 15% off with code PROFPEPTIDE, ends August 16. 🔥

Limitless Biotech also carries other growth hormone peptides including Sermorelin and a combined GH Stack.

Every batch is HPLC and LC-MS tested by three independent third-party laboratories, against a published ≥98.5% minimum purity standard, with a batch-specific Certificate of Analysis on every product page.

https://profpeptide.com/coupons?v=2
```

**Nootropics**
```
Limitless Biotech has Semax in stock!

Sale prices sitewide + 15% off with code PROFPEPTIDE, ends August 16. 🔥

Limitless Biotech also carries other cognitive peptides including Selank, a combined Semax and Selank blend, and DSIP — with nasal spray formats available alongside lyophilized vials.

Every batch is HPLC and LC-MS tested by three independent third-party laboratories, against a published ≥98.5% minimum purity standard, with a batch-specific Certificate of Analysis on every product page.

https://profpeptide.com/coupons?v=2
```

**Longevity**
```
Limitless Biotech has Epitalon in stock!

Sale prices sitewide + 15% off with code PROFPEPTIDE, ends August 16. 🔥

Limitless Biotech also carries other longevity compounds including NAD+ and MOTS-c.

Every batch is HPLC and LC-MS tested by three independent third-party laboratories, against a published ≥98.5% minimum purity standard, with a batch-specific Certificate of Analysis on every product page.

https://profpeptide.com/coupons?v=2
```

**Gut health & immunity**
```
Limitless Biotech has KPV in stock!

Sale prices sitewide + 15% off with code PROFPEPTIDE, ends August 16. 🔥

Limitless Biotech also carries other gut and immune peptides including Thymosin Alpha-1 and VIP.

Every batch is HPLC and LC-MS tested by three independent third-party laboratories, against a published ≥98.5% minimum purity standard, with a batch-specific Certificate of Analysis on every product page.

https://profpeptide.com/coupons?v=2
```

---

## 📅 Changelog

**August 11, 2026 (v48 → v49):**
- 🔓 **CHARACTER LIMIT REMOVED.** The ≤275 ceiling is retired. Replaced by the **truncation rule** — no cap, but the anchor line and code line must land above X's "Show more" fold, which is why the code stays at position 2. Length must still earn itself; the extra room lives in lines 3 and 4, never 1 and 2.
- ➕ Line 3 compound count relaxed from 2–3 to **3–4** (the old number was a character budget).
- 🔧 **v48 addendum folded into the body as §3b** — card-fallback rule, `?v=2` as the standing hub URL, and the consolidated link-selection table. v48 declared it superseded all addenda but dropped these rules; they were live the whole time.
- ➕ **New link case:** a vendor page publishing a rate the post contradicts forces the hub link.
- 🔴 **Limitless Biotech corrected 10% → 15%**, cart-verified Aug 11, stacks on sale pricing.
- ➕ **Rate-verification caution** — only AMP, Improved and Limitless are cart-verified; every other published rate is unaudited.
- ➕ Sale-rate caution: one item at X% off does not establish a sitewide rate.
- ➕ Retatrutide-first rule scoped — it binds only where stock is established; ask rather than assume.
- ➕ Category set extended to six (gut health & immunity); "don't pad a thin category" rule added.
- ➕ Limitless testing differentiator + six-post drafted set (§11).

**August 10, 2026 (v48):** §0 catalog-sourcing rule, category-naming line 3, four/five-category post set, code master and decode updates.

---

*Full replacement. RULE #0 governs. **§0 first: check PP's own vendor page before the vendor's site.** No character limit — but the anchor and the code must survive the fold. Read `vendors.ts` before drafting, never the cached table above.*
