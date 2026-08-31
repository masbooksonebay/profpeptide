# White Label — Master Active Tracker (Capstone Peptides)

**Status:** ACTIVE TRACKER — dynamic state, current shortlist, open decisions, milestone progress
**Version:** v1.6 (May 23, 2026 evening) — Capstone Peptides LLC FORMED, RapidFulfillment contract SIGNED via PDF-flatten workflow, email of record migrated
**Cross-referenced in:** SCS_MP v6.4
**Parent:** WL_MASTER_FROZEN v1.1 [unchanged]

---

## 📍 Status Snapshot (May 23, 2026 evening)

**PHASE:** **POST-CONTRACT.** Capstone Peptides LLC formed, RapidFulfillment contract signed, onboarding sequence next.

**BRAND:** Capstone Peptides — LOCKED
**DOMAIN:** capstonepeptides.com — live coming-soon page
**EMAIL:** mark@capstonepeptides.com — email of record from May 23 forward (Cloudflare Email Routing → markshurtliff@gmail.com)
**LLC:** ✅ **Capstone Peptides LLC** — Virginia formation complete
**PARTNERS:** RapidFulfillment signed; DAS dropship carve-out ask queued for onboarding email

---

## 🏢 Capstone Peptides LLC — Formation Complete (NEW v1.6)

**Entity:** Capstone Peptides LLC
**State:** Virginia
**VA Entity ID:** 12021441
**EIN:** 42-2730855
**Structure:** Sister LLC to Strength Cycle Studios LLC (SCS LLC) — NOT subsidiary
**Formation date:** May 2026 (this session window)

**Key design decisions:**
- Sister-LLC structure (not subsidiary) keeps liability isolated between content/affiliate (SCS) and merchant-of-record (Capstone)
- Both LLCs Virginia-formed for operational simplicity (same registered agent, same state filings)
- Mark Shurtliff sole member of both
- SCS holds PP, HR, SC, WN apps + profpeptide.com content/affiliate; Capstone holds capstonepeptides.com merchant operations

**Strict separation from PP (locked in PP_MASTER):**
- NO shared customer data
- NO overlapping vendor relationships beyond what's already documented (Royal Wholesale is both PP affiliate AND Capstone Tier 1 partner candidate — explicit conflict to manage)
- NO shared brand identity
- PP is content + affiliate; Capstone is merchant-of-record

---

## 📜 RapidFulfillment Contract — SIGNED (NEW v1.6)

**Status:** SIGNED. PDF flattened and ready to send to Gary.

**Final signed document:** `/mnt/user-data/outputs/CapstonePeptides_RF_Contract_Signed_2026-05-22.pdf` (2.74 MB flattened, baked signature + form values into static pixels)

### Signing workflow that worked (lessons learned)

**Original challenge:** Final-page signature widget and form fields were live PDF form objects, not flattened. Gmail's "Open in browser" preview rendered widgets as blank. Direct send would have shipped a contract with editable signature fields.

**Workflow that solved it:**
1. Python script using `pypdfium2` + `poppler` composite
2. Bake signature widget contents (Mark's signature image + form text values) into static pixels
3. Re-write PDF with widgets removed, signature now pixel-permanent
4. Output: 2.74 MB flattened PDF, no editable fields, signature visible in any viewer

**Page-7 form-field defect noted:** The contract template had a field-rendering defect on page 7 that's the contract template's flaw, not Mark's. Heads-up included in the contract-send email.

### Email-of-record migration

**Effective May 23, 2026:** Mark uses mark@capstonepeptides.com for all Capstone business correspondence (Gary @ RapidFulfillment, future vendors, future bank).

- Cloudflare Email Routing alias forwards to markshurtliff@gmail.com
- SPF/DKIM authentication configured
- All thread continuity preserved via Gmail (forwarded mail retains original sender + reply-to via Cloudflare)

**Migration done discreetly mid-thread:** Mark replies from new alias; counter-party (Gary) sees new sender, no announcement needed.

---

## 📤 Contract Send — Pending

**Email body (drafted, ready to send):**

```
Hi Gary,

Signed contract attached.

One heads-up — page 7 of the contract template had a form-field
rendering issue (a couple of the form fields don't display cleanly
in some PDF viewers). I think it's a template defect rather than
anything we need to fix on our end, but flagging in case it's
useful feedback for your contract template work.

Standing by for onboarding materials whenever you're ready.

Thanks,
Mark
mark@capstonepeptides.com
Capstone Peptides LLC
```

**To:** gary@rapidfulfillment.com
**From:** mark@capstonepeptides.com (via Cloudflare alias)
**Attachment:** CapstonePeptides_RF_Contract_Signed_2026-05-22.pdf

**Mark fires when ready.** Not chained automatically with anything else.

### DAS dropship carve-out ask (queued for onboarding email)

Section 4F of the contract has a 75% DAS provision (15-day rolling window, triggers notice not auto-breach). For dropship-only model (no Capstone inventory at RF), the DAS clause is structurally inapplicable but the contract doesn't say so.

**Plan:** Send DAS carve-out ask in follow-up onboarding email (NOT in initial signed-contract email — keeps the contract send clean). Frame as "since we're 100% dropship with no Capstone-owned inventory in your warehouse, does the DAS clause still apply? Want to confirm we're aligned on that piece."

Low-stakes ask. If Gary says it doesn't apply, great. If Gary says it does, we can negotiate or accept.

---

## 🎯 Next Milestones

1. **Mark fires contract-send email to Gary** — attached signed PDF + page-7 heads-up
2. **Receive onboarding materials from Gary** — vendor SKU setup, API/dashboard access, billing setup
3. **DAS carve-out ask in onboarding response** — clarify clause applicability for dropship model
4. **Bank account setup for Capstone LLC** — using EIN + VA Entity ID
5. **Capstone site build-out** — full e-commerce site replaces current coming-soon page
6. **Initial product catalog setup** — start with RF's 80%+ catalog overlap with PP-promoted vendors

---

## 🤝 Vendor Relationship Conflict Watchlist

**Royal Wholesale:**
- PP affiliate (via Royal Peptides, PROF10 10% code)
- Capstone Tier 1 dropship partner candidate (separately offered to Mark)
- **Conflict:** Both relationships need to be clean. Royal Peptides is the consumer-facing affiliate; Royal Wholesale would be the B2B partner. Confirm with Royal that these can coexist without dual-pay-out conflicts.

**RapidFulfillment:**
- NOT a PP-promoted vendor
- Fulfillment partner only for Capstone
- No conflict

**General principle:** Maintain visibility on which entities a vendor offers programs to. Some vendors are happy to have both affiliate AND fulfillment relationships; some aren't.

---

## 🔗 Cross-References

- **SCS_MP v6.4** — parent doc; corporate structure and entity separation rules
- **PP_MASTER v9** — PP/Capstone strict separation rule
- **WL_MASTER_FROZEN v1.1** — frozen architecture (unchanged this session)

---

*Contract signed. LLC formed. Email of record migrated. Pre-launch. Onboarding next.*
