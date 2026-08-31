# White Label — Master Active Tracker (Capstone Peptides)

**Status:** ACTIVE TRACKER — dynamic state, current shortlist, open decisions, milestone progress
**Version:** v1.5 (May 22, 2026 evening) — RapidFulfillment DD substantially complete + Gary's three answers + contract analysis + decision-to-proceed + three blockers before signing
**Cross-referenced in:** SCS_MP v6.3
**Parent:** WL_MASTER_FROZEN v1.1 [unchanged]

---

## 📍 Status Snapshot (May 22, 2026 evening)

**PHASE:** RapidFulfillment DD substantially complete — three blockers before signing identified

**BRAND:** **Capstone Peptides — LOCKED.** Domain capstonepeptides.com registered + DNS configured + SSL active + coming-soon page deployed + favicon removed

**SITE:** ✅ Deployed at https://capstonepeptides.com — clean text-only coming-soon. Apex canonical, www→apex 308. Vercel auto-deploys from `main` (capstone-peptides repo).

**LLC:** Not formed. Subsidiary-of-SCS structure (Option A) decided. State TBD.

**EMAIL:** ✅ Cloudflare Email Routing live for mark@capstonepeptides.com → markshurtliff@gmail.com. Partner DD continues from markshurtliff@gmail.com via thread continuity.

**PARTNERS:** Tier 1 shortlist deprioritized in favor of RapidFulfillment as fulfillment partner (dropship model). **Decision to move forward with RF in principle.** Three blockers before signing.

**REGULATORY:** Path C in practice (RUO including big 3 GLPs) — driven by RapidFulfillment carrying full GLP catalog.

---

## 🎯 Mark's Decision: Move Forward with RapidFulfillment in Principle (NEW v1.5)

**Reasoning:** Vendor landscape in peptide fulfillment is thin. Perfect-is-enemy-of-good. RapidFulfillment best legit option found:
- 25-year 3PL parent company
- Peptide-vertical specialization (not generalist 3PL)
- USA sourcing (matches Capstone positioning)
- Cold-chain infrastructure (FedEx 2-Day Air C-container system)
- Contract terms not predatory after review

**Mark willing to accept imperfect terms to move forward.** This is sound founder judgment — vendor decisions made on "good enough to launch and switch later if needed," not "ideal forever partner." (Captured as SCS_MP RULE #6.)

---

## 📜 RapidFulfillment Contract Analysis (NEW v1.5)

Mark reviewed the full Peptide Contract 2026 v3 PDF (11 pages, attached to Gary's May 21 email). Key sections:

### Commercial terms
- **Section 4A** — No setup fee, no monthly minimums (✅ confirmed verbally by Gary May 22)
- **Section 4B** — Weekly invoicing, 72-hour auto-charge ACH authorization
- **Section 4C** — 15-day invoice dispute window or waiver
- **Section 4D** — Late-payment hammer: 2%/mo + forfeit inventory + dispose at client expense (standard 3PL late terms; not predatory)
- **Section 4F** — 75% Daily Average Sales (DAS) provision (15-day rolling window, triggers notice not auto-breach)
  - 🟡 **YELLOW FLAG:** Clause is IN the contract WITHOUT dropship-specific carve-out. Gary verbally stated May 22 that DAS doesn't apply to dropshipping clients. Verbal-only at this point; written confirmation requested in variant 2 follow-up.

### Operational terms
- **Section 8 (Rider)** — Mandatory shipping insurance offer at checkout ($1.49/shipment, $300 coverage, markup allowed to customers)
- **Section 8 (Rider) indemnification** — Regulatory, product liability, Prop 65 exposure assignment to client
- **Personal Guaranty (PG)** — Attaches to Rider Section 8 indemnification (BROADER than just unpaid invoices). Worth noting for risk assessment but standard for high-risk verticals.

### Termination & venue
- **Section 11A** — 12-month term auto-renewing annually
- **Section 11B** — Either party 30-day termination, no early termination fee (✅ confirmed verbally by Gary)
- **Section 14H** — CA venue (LA County courts)

---

## 📧 Gary McNelley Responses (May 22, 3:11 PM)

Gary replied with three clean answers to Mark's commercial questions:

1. **Onboarding obligations:** "No ongoing monthly platform fees or automatic minimum billing commitments simply for signing up." Only upfront requirement = deposit (held as reserve, applied toward final invoice balance).
2. **Termination:** "No punitive early termination fees" — standard 30-day notice provision per contract Section 11B.
3. **75% DAS:** "Does not apply to the dropshipping program. There are no sales minimums, monthly minimums, or required order volume commitments for dropshipping clients."

### Framing inconsistency on deposit (worth tracking)
- **Original email (May 21):** "applied as a credit toward postage, fulfillment and product" (spend-down credit mechanic)
- **May 22 email:** "held as a reserve and applied toward final invoice balance" (hold-until-exit mechanic)
- Materially different mechanics. Still **no dollar amount stated.** This is one of the three blockers.

---

## 🚧 Three Blockers Before Signing (NEW v1.5 — priority order)

### 1. Q5 — Merchant processor referral
**Launch blocker.** If Gary's recommended processor demands 6%+ fees, 90-day reserves, manual review of every order, etc., Capstone's unit economics get crushed before first sale. Need:
- Direct intro to the processor Gary refers
- Confirmation of high-risk peptide RUO credentialing (not generalist high-risk)
- Term sheet (fees, reserves, rolling reserve %, settlement timing)
- Backup processor identified for contingency

### 2. Q6 — Next.js integration specifics
**Build blocker.** Capstone's storefront is Next.js (not Shopify/WooCommerce). Gary's email said "API or middleware" — too vague. Before signing:
- REST API documentation
- Webhook event list (order created, shipped, tracking updated, etc.)
- Sample integration code or reference implementation
- If response is "we'll figure it out post-onboarding" → flag. Vendors with real APIs ship docs. Vendors without don't.

### 3. Deposit dollar amount
**Operational blocker.** Gary has said "small initial deposit" then "inventory/security deposit" — never a number. Need:
- Specific dollar amount
- Mechanic clarity (spend-down credit vs hold-until-exit reserve — Gary's two emails contradict)
- Refundability terms if Capstone exits in first 90 days

### Resolvable post-signing (lower priority)
- **Q4 — COA purity floor** (≥99% vs ≥98% inconsistency between RF's 3PL page and white-label page). Product quality verification can happen on first test orders.
- **Q7 — Bulk graduation path** (future state; doesn't block dropship launch)
- **DAS clause written confirmation** — Gary's verbal assurance OK to accept since decision is to proceed; written confirmation in email thread is the bare minimum documentation, requested in variant 2

---

## 📧 Variant 2 Follow-Up Email (STAGED — ready to send)

To send from markshurtliff@gmail.com to gary@rapidfulfillment.com (thread continuity):

```
Subject: Re: Peptide Dropshipping

Thanks Gary, that gives me what I need on the three commercial questions.

Quick housekeeping: would you mind confirming the DAS-doesn't-apply-to-dropshipping point as a reply in this thread (or in writing somewhere I can keep on file)? Just want to make sure I have it documented alongside the contract since Section 4F doesn't have a dropship-specific carve-out as written.

For the remaining items from my original message (COA purity floor, merchant processors, Next.js integration, bulk pricing), happy to grab time on your Calendly to walk through.

Thanks,

Mark
```

**Strategy:** Light touch. Email reply confirming DAS carve-out IS effective written record. If Gary's response gets specific (cites section, explains why dropship is exempt), Mark has what he needs. If it stays vague, escalate to asking for formal addendum later. The technical questions (Q4-Q7) belong on a Calendly call — email is the wrong medium for technical scoping with a salesperson.

**Frame the call as "remaining items before I sign"** to signal closing-intent. Gary will prioritize real answers when he knows the call is the final step.

---

## 🛣️ Path A/B/C Framework (UPDATED v1.5)

**Effective path:** **Path C — RUO including big three** (Sema/Tirz/Reta). Driven by RapidFulfillment's catalog carriage.

**Implication:** Capstone takes on current enforcement target zone exposure (FDA Sept 9 2025 warning wave, NABP report, CT AG v. Triggered Brand precedent). Mitigating factors:
- Mark is attorney — first-line counsel on regulatory questions
- RUO framing strict on packaging, marketing, customer comms
- Shipping insurance opt-in mandatory at checkout (Section 8 Rider)
- Contract indemnification structure (Rider Section 8) absorbs Prop 65 + product liability exposure to client side — REVIEW exposure tradeoff before signing

**Path A and Path B remain available** if Capstone decides to pivot (Path A = exit big 3 entirely; Path B = dual-tier RUO + 503A/503B clinical). For Path C launch, current setup proceeds.

---

## 🏰 Capstone Site Operations (UNCHANGED v1.4)

### Favicon removal completed (prior session)
Commit `99d7cd5`. `app/icon.tsx` deleted, no favicon link in HTTPS 200 response.

### macOS TCC mid-session revocation pattern (carried)
Clone-and-push workaround for ~/Desktop/* TCC blocks. Long-term fix: relocate repos to ~/projects/ or ~/src/.

---

## 📜 Regulatory Environment (UNCHANGED v1.3)

[Unchanged — see v1.3 for full detail. CT AG v. Triggered Brand, FDA Sept 9 2025 warning wave, NABP report, WSJ coverage. Mark's attorney background = mitigating factor on Path C, not eliminator.]

---

## 🏷️ Brand Lock + Trademark Posture (UNCHANGED v1.3)

[Unchanged — see v1.3. Capstone Peptides locked, no federal trademark filing, accepts INW Capstone Nutrition Class 5 conflict exposure, Mark defends any infringement directly.]

---

## 📅 Changelog

**May 22, 2026 (this session — v1.4 → v1.5):**
- ✅ **Mark's decision-to-proceed with RapidFulfillment** captured (vendor landscape thin, perfect-is-enemy-of-good)
- ✅ **Full contract analysis completed** — all 11 pages reviewed; key sections + flags documented
- ✅ **Gary's three answers received** (May 22, 3:11 PM) — onboarding obligations, termination, DAS dropship carve-out
- ✅ **DAS yellow flag documented** — clause in Section 4F WITHOUT carve-out; "doesn't apply" verbal-only
- ✅ **Three blockers identified** before signing: Q5 processor, Q6 Next.js integration, deposit dollar amount
- ✅ **Variant 2 follow-up email staged** — asks for DAS written confirmation + Calendly for technical Q's
- ✅ **Path C effective default** documented per RF catalog carriage
- ✅ **Refined vendor DD principle** captured (carried up to SCS_MP RULE #6)

**Prior session entries:** unchanged. See v1.4 history (Tier 1 partner research, fulfillment model framework, YPB unresponsiveness pattern).

---

## 🎯 Next Milestones (Sequential)

1. **Mark sends variant 2 follow-up email to Gary** from markshurtliff@gmail.com
2. **Schedule Calendly call** with Gary (frame: "remaining items before I sign")
3. **On the call: resolve Q5 (processor), Q6 (Next.js integration), deposit dollar amount**
4. **After call clean:** sign contract OR walk if blockers don't clear
5. **PATH C launch prep:**
   - Capstone Peptides LLC formed (Virginia subsidiary of SCS LLC)
   - EIN obtained
   - Bank accounts opened (2+ at different banks)
   - Merchant processor onboarding via RF referral
   - Plaid integration spec
   - Site build kickoff (custom Next.js, ~4-8 weeks)
6. **Brand identity work** beyond wordmark
7. **Compliance review** (legal counsel pass on Path C exposure)
8. **Catalog finalized**
9. **Soft launch**
10. **Full launch**

---

## 📝 Open Research Threads

- Merchant processor name + terms (blocker #1)
- RF Next.js API specifics (blocker #2)
- Deposit dollar amount (blocker #3)
- COA purity floor reconciliation (≥99% vs ≥98%) — resolvable post-signing
- Banking acceptance landscape (carries from prior sessions)
- State-by-state shipping restrictions for research peptides
- Insurance: product liability + cyber liability quotes
- Compliance counsel selection

---

## 🔗 Cross-References

- **WL_MASTER_FROZEN v1.1** — frozen rules, structural decisions [unchanged]
- **SCS_MP v6.3** — parent doc; RULE #6 (refined vendor DD principle), Capstone email identity standard, X account multi-account-switching pattern
- **PP_MASTER v8** — separation reference (PP must remain fully independent of Capstone)

---

*Active tracker for Capstone Peptides business unit. Updated as decisions lock, partners verify, milestones complete.*
