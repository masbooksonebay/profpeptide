# PP COMPETITORS — v1

**Status:** ACTIVE. New doc — PP had no competitive reference before this.
**Created:** August 16, 2026
**Scope:** who PP competes with, on which surfaces, what they do well, and what's verified versus assumed.

---

## 🔒 THE COMPETITIVE PICTURE, IN ONE LINE

**PP loses the buyer query and wins the brand query.** Across 112 SERP observations, on `[vendor] coupon code` — the query a buyer actually types — PP appeared in the top 10 on **2 of 14** vendors. On `[vendor] discount code prof peptide` it appeared on **10 of 14**. The top result on nearly every buyer query is a coupon aggregator.

⚠️ **That reframes everything below.** The competition isn't other peptide-research sites. It's coupon aggregators with domain authority PP doesn't have.

---

## 1. THE AGGREGATORS — who actually owns the buyer query

Observed at rank 1 or 2 on `[vendor] coupon code` during the Aug 15 SERP rounds:

**Knoji · SimplyCodes · WorthEPenny · TenereTeam · Dealspotr · HotDeals · Saver**

**What they have that PP doesn't:** domain authority across every retail vertical, a page per merchant regardless of category, and years of accumulated links.

**What they don't have:** any peptide knowledge. Their pages carry codes and nothing else — no compound information, no testing data, no idea whether a vendor is credible.

### 🔴 The coverage gap — audited Aug 15

Of PP's 48 vendors on SimplyCodes: **6 have PP's current code · 1 is stale · 24 are absent from a page that exists · 17 have no page at all.**

⚠️ **And PP's rate usually doesn't lead where it does appear.** Real Peptides shows a 40% community code above PP's 20%; Spartan shows 20% above PP's 10%. The pages that outrank PP in search — PureRx, Peptide Giants, AMP — lead with 70%, 15% and 12% codes and carry no PP code at all.

**Worth submitting to, ranked by margin:**

| Vendor | PP rate | Page top code | Position |
|---|--:|--:|---|
| Capstone Peptides | 10% | **0 codes** | uncontested |
| 99 Purity Peptides | 10% | **0 codes** | uncontested |
| **Ascension Peptides** | **50%** | 5% | **+45** |
| Nura Peptide | 25% | 15% | +10 |
| Peptidology | 10% | 7% | +3 |

⚠️ **Ascension's 50% is unverified** — no cart test, no recorded basis. Publishing an unverified rate to an aggregator audience is worse than publishing it on PP's own site. Cart-test first.

⚠️ **Amino Club has no SimplyCodes page at all** — the vendor with PP's highest verified discount (35% through Aug 31). SimplyCodes has no self-serve "add a store" flow; the only route is asking their editors to index the merchant.

⚠️ **Aero shows `PROFPEPTIDE15`**, which is dead. That's the one entry where a buyer currently hits a failed checkout.

**Full audit:** `simplycodes-audit.csv`, 48 rows.

---

## 2. peptidestack.io — the one PP loses to on presentation

**Observed:** ranks #2 on `amino club coupon code` with a **full snippet including the code**, while PP ranks #1 with **no snippet at all**.

**Three structural differences, one actionable:**

| | PP | Peptide Stack |
|---|---|---|
| Title | `Amino Club Discount Code: PROFPEPTIDE — Save 20%` | `Amino Club Promo Code: PSTACK` |
| First prose | vendor description | *"Use promo code PSTACK at checkout on Amino Club."* |
| URL | `/coupons/amino-club` | `/amino-club-promo-code` |

🔴 **The prose sentence is the lead.** PP renders its code in a styled UI box with a separate label; the first grammatical sentence joining vendor + code + discount + percentage sits **~979 tokens down**, in the FAQ. Peptide Stack's is essentially zero.

**Status:** the intervention is **built and parked** — `COUPON_SENTENCE_VENDORS` in the PP repo, empty, token distance measured at 20 versus 979. See PP_SNIPPET_INVESTIGATION.

⚠️ **Title length is NOT the difference.** Google publishes no character cutoff and no rule that an em dash, code or percentage triggers a rewrite. PP's title is 48 characters. Verified against Google's own documentation — do not re-propose shortening it as a fix.

⚠️ **The URL slug is NOT worth changing.** Google's title-link documentation doesn't list the URL path as a source, and PP already outranks them. Migrating a canonical indexed URL to test a weak hypothesis is bad risk for no reward.

---

## 3. 🔴 peptidecomp.com — FABRICATED DATA, do not benchmark against it

**Scanned Aug 16, 2026. The pricing is synthetic.**

Every price on the site sits on one arithmetic ladder:

- Within each compound, the four vendors step by **exactly $3.57** — across eight unrelated compounds
- The compounds themselves step by **$1.785**, exactly half
- Purity values rotate mechanically: Janoshik 99.3 → MZ 99.4 → None → Janoshik 99.6, shifted by one on the next compound
- Shipping windows rotate identically: 1-2 → 1-3 → 2-4 → 2-5
- Discounts are always **15/15/20/15** in the same vendor order, every compound

The head reads **`meta-generator: v0.app`** — Vercel's AI site builder. The four vendors shown (Alamo Peptides, Frontier Peptide Labs, Peptide Society, Peptide Ritual) appear nowhere on PP's 48-vendor roster.

**Verdict:** a generated template with placeholder data, not a live comparison site.

⚠️ **Never cite their prices as a market benchmark.** Their Retatrutide 10mg at $2.46/mg is not a real price.

**But the layout ideas are good** and were worth taking — see PP_SITE_DESIGN v4 addendum. Size tabs, inline lab/purity per row, and progressive disclosure are all genuine improvements independent of whether their data is real.

---

## 4. THE RESEARCH-SITE COMPETITORS — largely unassessed

Surfaced in search Aug 16 but **not audited**. Recorded so they aren't re-discovered:

| Site | Claim | Assessed? |
|---|---|---|
| **PeptideBenchmark** | Vendor trust scores, verified COA routes across Freedom Diagnostics, ILS, Horizon, TrustPointe, Janoshik | 🔴 No |
| **Finnrick** | "1,729 peptide vendors" with lab-tested customer samples, account-gated | 🔴 No |
| **Peptide Commons** | 165+ vendors, quality ratings, account-gated | 🔴 No |
| **Peptide Critic** | Vendor directory with lab testing and community feedback | Referenced in PP's vetting standard; not audited as a competitor |
| **The Peptide Catalog** | Observed ranking on Glacier queries with a full snippet | 🔴 No |

⚠️ **PeptideBenchmark is the one worth assessing.** Its public copy describes verifying report codes against each laboratory's own verification surface and recording an "evidence gap" where no public source URL exists — the same methodology PP applies. It also appeared ranking above PP on a Glacier query.

⚠️ **Two of these gate their directory behind a free account.** That's a lead-capture model PP doesn't run and probably shouldn't — but it's worth knowing they trade access for email.

---

## 5. WHAT PP HAS THAT THE OTHERS DON'T

Recorded because it should inform what gets built, not just what gets copied.

- **Compound profiles with cited literature** — 64 profiles, PMID-verified references. No aggregator has any. peptidecomp has none.
- **A testing index** that names each vendor's lab, methods and purity standard, with honest "pending" where unconfirmed.
- **Verified codes bound to affiliate accounts** — PP tests the binding, which is why it knows Almighty ran 589 visits to zero attributed sales.
- **A price grid covering 70+ compounds and 48 vendors**, generated from live vendor APIs rather than hand-maintained.
- **A dosage calculator and an iOS app.**

⚠️ **The aggregators can replicate a code list overnight. They cannot replicate the testing data or the profiles.** Anything that merges those assets onto the commercially valuable surfaces is the durable move — which is why inline lab/purity in the price grid ranks above everything else in the design addendum.

---

## 6. OPEN ITEMS

| # | Item | State |
|---|---|---|
| 1 | Aero's stale `PROFPEPTIDE15` on SimplyCodes | Mark, manual — the one live error |
| 2 | Submit to Capstone + 99 Purity (uncontested pages) | Mark, manual |
| 3 | Cart-test Ascension's 50% before submitting it anywhere | Mark |
| 4 | Ask SimplyCodes to index Amino Club | Not started |
| 5 | HotDeals audit — blocked on Mark's laptop, doable on mobile | Mark |
| 6 | Assess PeptideBenchmark properly | Not started |
| 7 | Size tabs + inline lab/purity on `/prices` | PP_SITE_DESIGN v4, not built |

---

*Created Aug 16, 2026 from the SimplyCodes audit, the longitudinal SERP series, and a scan of peptidecomp.com. The peptidecomp fabrication finding is the most load-bearing item here — it prevents benchmarking against fake numbers.*
