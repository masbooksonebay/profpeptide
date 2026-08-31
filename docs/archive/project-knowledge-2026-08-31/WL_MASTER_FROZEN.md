# White Label — Master Ref Doc (FROZEN)

**Status:** ACTIVE REFERENCE — frozen rules, definitions, structural decisions, design principles, and compliance framework for the White Label business unit. Day-to-day state lives in WL_MASTER_ACTIVE.md.

**Version:** v1.1 (May 16, 2026) — rename from MP_WHITELABEL → WL_MASTER + payment stack lock
**Cross-referenced in:** SCS_MP v6
**Parent entity:** SCS LLC (Strength Cycle Studios, LLC)

---

## 🎯 Business Definition

White Label (placeholder name; final brand TBD) is a **merchant-of-record peptide ecommerce business**. Customers buy peptides directly from WL under WL's brand identity. WL holds the customer relationship, processes the payment, owns the customer data, and bears legal responsibility for the transaction.

**This is fundamentally different from PP (Prof Peptide):**
- PP = affiliate/content site. PP refers customers to third-party vendors via affiliate links. Vendors process payment and bear product liability. PP earns commission.
- WL = merchant of record. WL IS the seller. WL bears product liability, FDA exposure, payment processor risk, and customer service obligations.

**Strict separation from PP:**
- No cross-promotion between PP and WL
- No shared customer data or email lists
- No overlapping vendor relationships (WL buys wholesale from a single white-label partner; PP earns affiliate commissions from many vendors)
- No shared brand identity (WL brand TBD; PP brand stays distinct)
- No marketing language implying connection or co-ownership
- Justification: PP must remain credible as an objective educational/affiliate site; WL as merchant-of-record is a vested commercial party. Conflict of interest is structural and must be visibly separated.

---

## 🏛️ LLC Structure & Liability Architecture

**RECOMMENDED STRUCTURE (Option A — Parent-Subsidiary):**

- **WL LLC** is a new single-member LLC.
- **Sole member: SCS LLC** (Strength Cycle Studios, LLC, EIN 42-1888796).
- For tax purposes: single-member LLC = disregarded entity. Profits/losses flow up to SCS LLC for passthrough. Mark files one personal return capturing SCS, which includes WL activity.
- For liability purposes: WL LLC has its own corporate veil. SCS apps + PP affiliate operations sit BEHIND that veil; WL-specific liabilities (product, regulatory, processor) stay inside WL LLC.

**WHY NOT JUST USE SCS LLC:**

The risk profiles are fundamentally different:

| Lane | Regulatory Risk | Product Liability | Processor Risk | Class-Action Exposure |
|---|---|---|---|---|
| SCS Apps (PP/HR/SC/WN) | Near zero | Near zero (software) | None (App Store handles) | Very low |
| PP Affiliate | Low (content) | Zero (vendor bears it) | None (no MoR) | Very low |
| White Label | **HIGH** (FDA/FTC/state) | **HIGH** (product) | **HIGH** (high-risk processor) | **Moderate** (peptide class-actions occur) |

Putting WL under SCS LLC means a single FDA warning letter, processor account freeze, or product-liability claim reaches the fitness apps and PP affiliate revenue. Asset architecture must isolate the high-risk activity.

**WHY NOT SIBLING LLCs INSTEAD:**

Option B (two sibling LLCs both owned by Mark personally) was considered. Trade-offs:
- ✅ Maximum legal separation
- ✅ Easier to sell or finance one without the other
- ❌ Two separate tax treatments at owner level (more admin)
- ❌ Loses SCS infrastructure (banking relationship, accountant, EIN reuse benefit)

For a solo founder operating both, Option A (parent-subsidiary) wins on simplicity without sacrificing liability isolation in practice.

**FORMATION SPECIFICS (TBD):**
- State of formation: Virginia default (matches SCS). Delaware/Wyoming under consideration for asset-protection reasons (would require Virginia foreign-entity registration too if Mark operates from Virginia, so cost is ~equivalent).
- Filing cost: ~$100 state fee + ~$50-100/year ongoing maintenance.
- Registered agent: Mark can serve as own registered agent in Virginia at his Burke VA address.

---

## 🏦 Banking, Payments, and Processor Architecture

### Banking (LOCKED v1)

- Separate bank account REQUIRED for WL LLC. Cannot share SCS LLC's existing checking account.
- SCS's current bank may not allow peptide-related transactions. Disclose business activity honestly when opening WL's account to avoid account closure surprises.
- **DIVERSIFICATION RULE:** Open 2+ business bank accounts at different banks from day one. Primary + backup. If primary closes, continuity preserved. Banking closure risk is real and well-documented in this category.
- Bank candidates:
  - **Mercury** — fintech business banking with API access. Reputable + transparent (Mark has prior experience). NOTE: Mercury officially restricts "regulated substances" — peptides fall under that umbrella when interpreted strictly. Enforcement is uneven; some peptide operators run on Mercury for months without issue, others get account closed during compliance review. Acceptable as ONE of two accounts but not as sole banking relationship.
  - **Bluevine** — historically more peptide-tolerant than Mercury (verify with current 2026 underwriting policy)
  - **Relay** — newer fintech; multi-account architecture makes it easy to silo activity
  - **Easy Pay Direct** — peptide-industry-specific banking + processor bundle; not cheapest but built for this exact use case

### Payment Stack (LOCKED v1 — multi-method, layered)

**Architecture principle:** Launch with ACH + crypto + manual rails. Add card processing as v2 (~3-6 months post-launch) once transaction history makes underwriting easier.

| Method | When to add | Mechanic | Why |
|---|---|---|---|
| **ACH via Plaid** | Launch (week 1) | Plaid handles customer bank-link + ACH authorization; ACH push to WL's business bank account | Cheap, fast to set up, low ban risk, primary launch method |
| **Crypto (BTC, USDC)** | Launch (week 1-2) | Coinbase Commerce, BitPay, or NOWPayments | Captures crypto-native buyers (significant peptide audience overlap); near-zero fees |
| **Zelle** | Launch (acceptable for low volume) | Customer sends Zelle to designated business email/phone; customer service matches to order manually | Cheap, fast, no payment processor dependency. **VIABLE UNTIL BUSINESS OUTGROWS IT** — Zelle has per-day/week limits (~$1,000-$2,500/day typical), no order-tracking integration, manual reconciliation overhead per transaction. Scale ceiling around ~$50-100K/month before logistics break down. |
| **Wire transfer** | Launch (acceptable for large orders) | Manual handling, customer service initiates | Used by high-ticket orders ($500+); covers high-volume B2B-style buyers |
| **Cards via high-risk processor** | v2 (~3-6 months post-launch) | Easy Pay Direct, Authorize.net via high-risk underwriter, Durango, PayKings | Adds impulse-purchase + mobile (Apple Pay / Google Pay) conversion lift; expect 3-5% rates + rolling reserves once underwriting secured |

**Plaid specifically:**
- Industry-standard bank-linking service (used by Venmo, Coinbase, Robinhood, etc. — proven and reputable)
- Customer-side experience: enter bank login, Plaid handles authentication + account verification
- Integration: backend SDK or hosted Plaid Link widget; ~1-2 weeks dev time
- Cost: ~$0.30 per ACH transaction (vs 3-5% on card processing) — substantially cheaper
- Settlement: 1-3 business days

**Zelle launch reality (per Mark, May 16):**
- Acceptable launch payment rail for the early stage
- Will hit scale ceiling and need to transition to cards or expanded ACH volume as business grows
- Customer service overhead per Zelle order: ~3-5 min for manual matching (incoming Zelle ↔ order, mark order paid in admin panel)
- Recommended: standardize Zelle reference field convention (e.g., "ORDER-12345") to streamline matching

**Conversion trade-off awareness:**
- ACH-only + Zelle + manual rails sites convert 30-50% lower than sites with full payment options (cards + Apple Pay + PayPal)
- Trade-off is acceptable for launch because lower CAC + lower fees offset lower conversion
- Card processing as v2 is the planned conversion-rate lift

### Merchant of Record (MoR) Architecture

- **WL is the MoR.** WL holds the bank account, WL gets paid by customers, WL bears the transaction.
- **Industry pattern confirmed in research:** White-label partners (YPB, Cernum, Evolve) do NOT process payments. Brand owner is always the MoR. YPB has a processor-referral service which is the most turnkey extension into this layer.
- **No peptide-industry payment aggregator/marketplace exists** because no payment processor will underwrite the aggregator model in this category.

### Card Processor Risk Reality (when added in v2)

- Expect rolling reserves (5-10% of monthly volume held for 6 months)
- Expect occasional account holds during dispute investigations
- Build cash reserves to weather processor freezes
- Diversify across 2+ processors as soon as volume justifies (avoid single point of failure)

---

## 📋 Compliance Framework

### Regulatory Positioning
- **Research Use Only (RUO) labeling discipline** — all product listings, packaging, marketing copy must position products as research peptides not for human consumption.
- This is the standard industry posture and provides limited protection. Does NOT shield against FDA action if marketing implies human-use, or if products contain non-research-grade adulterants.

### FDA / FTC Red Lines (Things to Never Do)
- ❌ Never make therapeutic claims ("cures," "treats," "prevents," "for weight loss")
- ❌ Never recommend dosing for human use
- ❌ Never imply human consumption is intended or safe
- ❌ Never use comparative claims against approved pharmaceuticals
- ❌ Never include human-use testimonials
- ❌ Never run influencer campaigns where influencers self-administer on camera
- ❌ Never make USA-origin claims without verified country-of-origin facts (FTC enforcement risk)
- ❌ Never gloss over compounds with active FDA enforcement context (Tirzepatide in particular — Eli Lilly C&D campaign 2024-2026 still ongoing)

### State Law Considerations
- Some states restrict research peptide commerce more aggressively than others. Specifically:
  - **California, New York** — moderate scrutiny; consumer protection enforcement active
  - **Florida, Texas** — generally permissive
  - **Virginia (operating state)** — moderate; consumer protection follows federal pattern
- State-by-state shipping holds will be implemented at checkout based on legal advice closer to launch.

### Eli Lilly Tirzepatide Enforcement Context
- Eli Lilly issued cease-and-desist letters to numerous research-peptide vendors selling Tirzepatide during 2024-2026.
- Some vendors (Limitless Life Nootropics) moved GLPs behind VIP/account gates in response.
- Others (Onyx Biolabs, Royal Peptides) continue selling openly.
- Decision pending for WL: launch catalog WITH or WITHOUT GLPs (Sema/Tirz/Reta). Strategic question, not research question. Trade-off captured in WL_MASTER_ACTIVE.

### Insurance
- Product liability insurance: required at scale; placement TBD
- Cyber liability (for customer data): required at launch
- General liability: required at LLC formation

---

## 🔍 Partner Evaluation Criteria (Lessons Encoded v1)

When evaluating white-label peptide manufacturing/fulfillment partners, verify the following before signing:

### 1. Corporate Domicile (Hard Verification)
- **About Us page** literal text — does it say "based in [country]"?
- **Contact page** physical address — must be US street address with 9-digit ZIP for "US-based" claim to hold
- **Number formatting tells** — `94,99 $` (comma decimal, currency after) reveals European origin; `$94.99` (period decimal, currency before) is US format
- **Currency symbol position** — `$` after the number is European convention
- **English phrasing patterns** — Eastern European-built sites have characteristic phrasing ("dependable peptide suppliers offering transparent product information")
- **PR placement vs independent journalism** — ABNewswire, kake.com, "The Future of Things" are paid placement services, NOT independent reviews

**Cernum Biosciences lesson:** Homepage marketed "USA" but About Us page literally stated "Established in 2021, based in Estonia." Number formatting (`94,99 $`) was the giveaway. Pulled from Tier 1 to needs-more-verification.

### 2. COA / Testing Transparency
- ✅ Third-party lab (named, accredited)
- ✅ Batch-specific COAs (not generic "compound XYZ has been tested" boilerplate)
- ✅ HPLC + Mass Spec at minimum
- ✅ Sterility testing for injectable peptides
- ✅ Heavy metals + microbial testing
- ⚠️ Caveats: many vendors claim third-party testing but don't publish batch-specific docs

### 3. Dual-Brand Pricing Tension
- Many white-label partners ALSO sell direct-to-consumer (Cernum, Evolve, Licensed Peptides)
- Investigate: what is the partner's retail price vs. their wholesale price to you?
- If wholesale-to-retail ratio is unfavorable (e.g., wholesale = 70% of retail), the brand owner can't compete on price and must compete on brand/experience alone
- Healthy ratio: wholesale ≤ 50% of partner's retail

### 4. Payment Processor Support
- Does the partner provide processor referrals or rejected applications?
- YPB's processor referral is a meaningful turnkey extension
- Cernum / Evolve / Unrivaled do not advertise processor referral

### 5. Cold-Chain Shipping
- Most peptides require cold storage during transit
- Verify: cold-pack standard or optional? ZIP-based sizing?
- Verify: what happens to liability if cold chain breaks during transit?

### 6. Fulfillment Speed and Geographic Coverage
- US-only customer base initially
- Verify: 1-2 day fulfillment from US warehouse
- Verify: international shipping policy if/when WL expands

---

## 🎨 Design Aesthetic Principles

**Reference set:**
- [ro.co](https://ro.co) — telehealth direct-to-consumer; gold standard for type-led hierarchy, generous whitespace, muted palette
- [thorne.com](https://thorne.com) — premium supplements; trust signals woven into layout
- [honestpeptide.com](https://honestpeptide.com) — closer-to-category reference; still has bouncing top-marquee and -30% sale badges (anti-patterns to avoid)

**LOCKED DESIGN PRINCIPLES:**

1. **Generous whitespace** — no dense product-grid pages; product cards have room to breathe
2. **Type-led hierarchy** — typography carries information weight; not icons, not photos, not color
3. **Muted palette** — warm earth tones or cool grays; no neon, no pure black, no high-contrast accent colors
4. **Minimal navigation** — 4-6 nav items maximum (e.g., Catalog / Science / About / Learn / Contact)
5. **Lifestyle imagery used sparingly** — photography is for trust-building and storytelling, not decoration
6. **Trust signals woven into layout** — COA badges, purity %, third-party testing as design elements, NOT banner clutter
7. **Educational content as nav peer** — Science/Learn section is a navigational equal to Catalog, not a footer afterthought

**ANTI-PATTERNS (NEVER do these on WL site):**

- ❌ Hero carousels with auto-rotating slides
- ❌ Sale ribbons / "DEAL!" overlays on product cards
- ❌ Urgency overlays ("Only 3 left!" "Sale ends in 4:23:18")
- ❌ Countdown timers
- ❌ Pop-up coupons or exit-intent modals
- ❌ Bouncing banners or marquee scrollers
- ❌ Neon CTAs ("BUY NOW!" in safety orange)
- ❌ Stock photos of lab equipment or anonymous "scientists in lab coats"
- ❌ Hashtag stacks or emoji-laden product descriptions
- ❌ Pseudo-medical iconography (red crosses, caduceus, stethoscopes)

---

## 🛠️ Build Path (Locked: Path B)

**Path B — Custom Next.js + headless commerce backend** (same stack as PP).

**Rejected: Path A (YPB's "Business in a Box" WordPress/WooCommerce package).**

Reason: The ro.co / thorne.com aesthetic requires custom design system, custom components, custom information architecture. WordPress/WooCommerce themes carry default styling patterns that conflict with the locked design principles above. Achieving the aesthetic via Path A would require significant theme rework that erodes the time-saving advantage of the bundled package.

**Path B architecture:**
- Frontend: Next.js (App Router), deployed on Vercel (matches PP infrastructure)
- Commerce backend: TBD — candidates include Shopify Headless, Medusa, Saleor, or custom backend
- CMS: TBD — Sanity, Contentful, or filesystem-based MDX (matches PP pattern)
- Payment: Direct integration with chosen high-risk processor (NOT through Shopify/WooCommerce processor abstraction layers)
- Hosting: Vercel (continues SCS pattern)

**Open question:** Whether WL can purchase YPB's manufacturing/fulfillment/COA/compliance/processor-referral services SEPARATELY from the Business in a Box website bundle. To be asked during YPB discovery call. If yes, Path B + YPB backend services is the optimal hybrid.

---

## 💼 Capacity Allocation

**Steady-state target:** 15-25 hours/week post-launch
**Launch year target:** 30-40 hours/week during build + soft launch + initial scaling

**Phasing:**
- **Pre-launch (months 1-3):** Heavy load — LLC formation, banking, processor underwriting, brand design, site build, partner contracts, catalog selection. 30-40 hrs/week.
- **Soft launch (months 4-6):** Operations ramp — first orders, customer service workflows, fulfillment QA, initial marketing tests. 25-30 hrs/week.
- **Steady state (year 1+):** Operations + growth — marketing optimization, catalog expansion, customer retention, vendor management. 15-25 hrs/week depending on growth ambitions.

**Within SCS portfolio total capacity (30-50 hrs/week):**
- Apps maintenance baseline: 5-10 hrs (with quarterly spikes)
- PP affiliate systematize mode: 5-8 hrs
- White Label: 15-25 hrs (steady state)

**If WL demands aggressive growth (>25 hrs/week):**
- PP cadence can dial down further (e.g., 1 new page/2 months instead of 1-2/month)
- Outsourcing (VAs, content writers, customer service) can absorb load
- Apps stay at baseline (cannot easily compress)

---

## 🚫 Things to Never Do (White Label)

- **Never commingle WL and SCS assets, banking, or contracts** — liability isolation requires strict entity separation
- **Never run WL payment processing through SCS bank accounts** — peptide transactions may trigger SCS bank account closure
- **Never cross-promote PP and WL** — PP affiliate operation must remain fully separate
- **Never make USA-origin claims on WL packaging based solely on partner marketing** — verify country-of-origin facts directly
- **Never make therapeutic claims, dose recommendations, or imply human consumption** — RUO discipline is non-negotiable
- **Never sign with a white-label partner without verifying corporate domicile, COA transparency, and dual-brand pricing tension**
- **Never trust ABNewswire, kake.com, or "The Future of Things" press placements as independent reviews** — these are paid PR placement services
- **Never launch with GLPs in the catalog without explicit FDA/FTC compliance counsel** — Eli Lilly C&D campaign exposure is real and ongoing
- **Never assume merchant processor will hold steady** — diversify across 2+ processors as soon as volume justifies; build cash reserves for freeze events
- **Never integrate WL into SCS developer / banking / processor stack without dedicated WL LLC formation first**

---

## 📚 Cross-References

- **SCS_MP v6** — parent doc; LLC entity hierarchy, three-lane portfolio architecture, capacity planning
- **WL_MASTER_ACTIVE** — sibling active tracker; current partner shortlist, brand naming status, launch milestones
- **PP_MASTER v3** — separate affiliate business; reference for separation discipline
- **PP_VENDORS (queued)** — PP-side vendor list; reference for what NOT to overlap on WL side

---

## 📝 Frozen Doc Update History

- **v1** (May 16, 2026) — initial creation. Captures: business model (MoR not affiliate), LLC structure (subsidiary of SCS, Option A), banking/payments architecture, compliance framework (RUO/FDA/FTC/state law/Eli Lilly Tirz context), partner evaluation criteria (Cernum domicile lesson encoded), design aesthetic principles (ro.co/thorne/honestpeptide reference + 10 anti-patterns), build path (Path B custom Next.js), capacity allocation, things-never-to-do.
- **v1.1** (May 16, 2026, same-day update) — **Rename + payment stack lock.** Filenames changed from MP_WHITELABEL_FROZEN/ACTIVE to WL_MASTER_FROZEN/ACTIVE (MP prefix collided with SCS_MP = Master Plan; WL = White Label is unambiguous and matches portfolio shorthand pattern). Entity name internally simplified from "MP White Label" to "White Label" / "WL". Banking + Payment Stack section rewritten: ACH via Plaid + crypto + Zelle + wire as launch stack (week 1), card processing deferred to v2 (~3-6 months post-launch). Banking diversification rule locked (2+ business bank accounts at different banks from day one; Mercury acceptable as one of two, NOT sole, due to peptide-business closure risk). Conversion trade-off acknowledged (ACH-only stacks convert 30-50% lower than card-enabled; offset by lower fees + lower CAC at launch). Plaid mechanic clarified (industry-standard bank-linking service used by Venmo/Coinbase/Robinhood; ~1-2 weeks dev time, ~$0.30 per ACH transaction).

---

**This is the FROZEN doc. Day-to-day state lives in WL_MASTER_ACTIVE.md.**
