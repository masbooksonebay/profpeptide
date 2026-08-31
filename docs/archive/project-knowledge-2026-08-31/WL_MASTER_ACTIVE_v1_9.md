# White Label / Capstone Peptides — Master Active Tracker

**Status:** ACTIVE TRACKER — operational state for Capstone Peptides LLC (Mark's dropship peptide retail business)
**Version:** v1.9 (June 2, 2026) — adds the **C&C (Chaos & Control) supply/distribution agreement** review + a hard **entity-verification gate** before any C&C signature or deposit. RF state from v1.8 carries forward unchanged.
**Parent:** WL_MASTER_FROZEN (entity rules, locked terminology, signature block conventions)
**Cross-referenced in:** SCS_MP v6.9

---

## 📍 Status Snapshot (June 2, 2026)

| Component | State |
|---|---|
| Legal entity | Capstone Peptides LLC (Mark sole member) |
| EIN | 42-2730855 · VA Entity ID 12021441 |
| Domain | capstonepeptides.com |
| Repo | `~/Desktop/capstone-peptides` (Next.js coming-soon on Vercel) |
| RF (fulfillment side) | **SIGNED** May 22; $1,500 deposit received; CC Auth Form + accounting reply pending Mark — [Unchanged — see v1.8] |
| **C&C (supply side)** | **Agreement received June 2 — UNSIGNED, under entity-verification gate (see below)** |
| Storefront platform / banking | NOT LOCKED — pending Denise — [Unchanged — see v1.8] |

**The two-contract structure:** RF = the **3PL / fulfillment** side (pick/pack/ship; signed). **C&C (Chaos & Control) = the product-SUPPLY / Operator** side (supplies RUO product + inventory allocation; Exhibit A SKU list). Karen Wilson (peptide specialist) was introduced by Denise (RF) in the C&C onboarding thread; C&C is the "second-source supplier" logged in v1.8. Two entities, two contracts, one program.

---

## 🆕 C&C (Chaos & Control) Supply/Distribution Agreement — review (June 2)

**Document:** "Master RUO Peptide Drop Ship & Distribution Agreement." DocuSign envelope `2FECB905-7E7B-48FD-8B14-0CB3373349B6`, sent by **Karen Wilson** (`karen@chaosandcontrolgroup.com`) via genuine DocuSign (`dse@camail.docusign.net`), addressed **To: "Mark Williams" <mark@capstonepeptides.com>**.

**Terms read — heavily Operator-favorable but normal for RUO dropship:**
- Capstone = **sole merchant of record**; controls all marketing AND bears all regulatory / legality determination (§1, §4). Operator supplies product only and disclaims everything.
- **No guaranteed supply**; unilateral suspend / restrict / terminate "in good faith" (§6).
- Billing Fri–Thu, invoiced Fri, **due Mon (3 days)** (§9.1).
- **$1,500 non-refundable security deposit**, increasable on 5-business-day demand (§9.2).
- All **chargeback liability + indemnity** on Capstone (§9.5); pricing changeable (§9.6).
- **Strict RUO** (§2 / §3 / Exhibit B): no dosing / protocol / human-use / testimonials; violation = immediate termination + material breach.
- **Exhibit A SKUs decode:** G1-S = Semaglutide, G2-T = Tirzepatide, G3-R = Retatrutide, C-Amylin = Cagrilintide (coded names = an RUO-distancing tactic). Cheap POD prices (e.g. Reta 10mg $30). COA fees $25 standard / $50 branded; ~$240 onboarding integration (2 hrs @ $120/hr); labels $0.15–0.39/label by volume; mandatory `[XXX]-[SKU]` listing format.

**Biggest Capstone-specific risk:** the strict-RUO clauses make the **profpeptide.com (dosing-heavy) ↔ Capstone-storefront firewall CONTRACTUALLY load-bearing.** Any dosing/human-use bleed between PP content and C&C-supplied products = material breach. Keep the firewall airtight. (This is also why the separate-brand-site storefront pattern was rejected — see v1.8 Pattern 2.)

**Anomalies (resolved):**
- Distributor name read **"Mark Williams"** — it's the DocuSign **recipient name Karen typed** (the address `mark@capstonepeptides.com` is correct; the name is wrong). Must be corrected to **Capstone Peptides, LLC / Mark Shurtliff / Member-Manager** before signing.
- **Operator block blank** — no legal entity named, no countersignature.

**Domain diligence — chaosandcontrolgroup.com:**
- Serves a **404**; **zero web/search footprint** as a peptide operator.
- WHOIS: **registered 2025-07-11 (~11 months old — predates the deal, so NOT a throwaway)**; NameCheap; **parked on default registrar nameservers** (no site); 1-year registration; **privacy-masked** (Withheld for Privacy, Iceland).

**The read:** NOT obvious phishing — the DocuSign is genuine, Denise (RF) introduced Karen, and C&C is the expected second-source supplier. But it's an **unverified entity** (privacy WHOIS, no website, unnamed on its own contract). Distinguish **commercial low-profile** (fine — no site, privacy WHOIS, coded SKUs; normal opsec in this space) from **contractual anonymity** (unacceptable — the contract is the only protection).

**Action taken:** Diligence email **sent** (June 2) from `mark@capstonepeptides.com` → To `karen@chaosandcontrolgroup.com`, Cc `denise@rapidfulfillment.com` + `gary@rapidfulfillment.com`. Trimmed to the enforceability floor: (1) correct "Mark Williams" → Capstone/Mark Shurtliff; (2) provide Operator's **legal entity name + state of formation + countersignatory**; (3) confirm whether the $1,500 is the same deposit as RF's or a separate one; + invites RF to confirm the C&C relationship in writing (the vouch).

---

## 🔒 C&C ENTITY-VERIFICATION GATE (LOCKED)

**NO countersignature and NO deposit to C&C until BOTH:**
1. **Operator legal entity name is VERIFIED in a registry** — entity name + state → Secretary-of-State business registry (confirm active status, formation date, **registered agent = servable address**). No state given → **OpenCorporates** cross-state search. **If the name appears in no registry → STOP.**
2. **RF confirms the C&C relationship in writing** (Gary/Denise vouch — ties the unknown domain to the already-diligenced RF party).

Floor to ask for = **legal entity name + state, and the authorized countersignatory** (derive the servable address/status yourself from the registry — better diligence than anything they volunteer). Don't press for website/ownership/financials. A privacy-masked, website-less, year-old domain is fine to transact with *only* after (1) + (2).

---

## 🔒 Locked Operational Conventions (UNCHANGED)

[Unchanged — see v1.8.] Capstone signature block (**Member-Manager**, locked exact format); `mark@capstonepeptides.com`; Capstone ↔ SCS strict entity separation; do NOT cross-pollinate financials/comms/platform.

---

## 🚦 Gating Items

- **Gate 1 — Denise's banking + platform recommendations** (do NOT poke) — [Unchanged — see v1.8].
- **Gate 2 — RF CC Authorization Form return** + send the drafted accounting reply (Gmail draft `r-2167846713047850604`) — [Unchanged — see v1.8].
- **Gate 3 — C&C entity verification (NEW, LOCKED):** registry-verify the Operator entity + get the RF vouch before any C&C signature or deposit (see gate above). Await Karen's reply.

---

## 📅 Changelog

**June 2, 2026 (v1.8 → v1.9):**
- ✅ **C&C supply/distribution agreement reviewed** — terms (Operator-favorable but standard RUO dropship), Exhibit A SKU decode, the load-bearing PP↔Capstone RUO firewall risk.
- ✅ **Anomalies resolved** — "Mark Williams" = DocuSign recipient-name typo (address correct); Operator block blank.
- ✅ **Domain diligence** — chaosandcontrolgroup.com 404 / no footprint / privacy WHOIS / ~11-mo-old (predates deal, not a throwaway).
- ✅ **Diligence email sent** to Karen (cc RF) — name fix + entity name/state/countersignatory + deposit clarification + RF-vouch invite.
- ✅ **C&C entity-verification GATE locked** — no signature/deposit until registry-verified entity + RF written vouch.

**Prior session entries:** unchanged. See v1.8 history (RF operationalization, legitimacy verification, accounting reply draft, CC Auth Form review).

---

## 🎯 Next Milestones (Sequential)

1. **C&C:** await Karen's reply → registry-verify the Operator entity + secure RF's written vouch → only then correct the name, countersign, and (if confirmed not a duplicate) place the deposit.
2. **RF:** send drafted accounting reply + return CC Auth Form.
3. **Denise:** banking + platform recommendations (do NOT poke).
4. Platform + banking lock → sprint kickoff → first product live.

---

## 🔗 Cross-References
- **WL_MASTER_FROZEN** — entity rules, locked terminology, signature block conventions
- **SCS_MP v6.9** — parent doc
- **PP_MASTER v13** — the profpeptide.com content firewall is contractually load-bearing under the C&C RUO clauses

---

*Capstone operational tracker. C&C signature/deposit gated on entity verification + RF vouch; RF onboarding gated on Denise + CC Auth Form.*
