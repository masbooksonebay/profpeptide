# White Label / Capstone Peptides — Master Active Tracker

**Status:** ACTIVE TRACKER — Capstone dropship peptide retail business operational state
**Version:** v2.1 (June 7, 2026) — MAJOR. Logs the **new operating entity (Capstone Holdings LLC)**, the **storefront platform decision (WooCommerce on Cloudways) + DNS cutover**, the **full RUO compliance-page build** (incl. published Terms & Conditions + age gate), the **support@ alias**, the **C&C role correction (C&C = Operator, Capstone = Distributor)**, and the **located recommended-pricing PDF**. Supersedes v2.0's Next.js-coming-soon + platform-undecided state.
**Parent:** WL_MASTER_FROZEN (locked terminology, signature conventions, entity firewall).
**Cross-ref:** SCS_MP; PP_MASTER (RUO firewall).

---

## ⚠️ ENTITY CHANGE (since v2.0) — read first

**The operating/legal entity is now Capstone Holdings LLC.** "Capstone Peptides" is the customer-facing **brand**.

| | Value |
|---|---|
| **Operating entity** | **Capstone Holdings LLC** (VA) |
| **VA Entity ID** | **12028373** |
| **EIN** | **42-3011239** (IRS name control CAPS; "CAPSTONE HOLDINGS, Mark Shurtliff Sole Mbr") |
| Structure | Single-member LLC (Mark), disregarded entity by default |
| Formed / effective | June 6, 2026 |
| Address / RA | 9712 Ashbourn Dr, Burke, VA 22015 |
| Brand | **Capstone Peptides** (capstonepeptides.com) |
| Email | mark@capstonepeptides.com · **support@capstonepeptides.com** (new, live) |

> **Stale-reference flag:** memory + WL_MASTER_FROZEN still describe "Capstone Peptides LLC" (12021441 / EIN 42-2730855) as the entity, and the locked signature block reads "Member-Manager, Capstone Peptides, LLC." Those predate Holdings LLC. The **signature-block entity decision is still Mark's open call** (Capstone Peptides brand vs. Capstone Holdings LLC legal entity). Reconcile before the next partner email.

---

## 📍 Status Snapshot (June 7, 2026)

| Component | State |
|---|---|
| Storefront platform | **WooCommerce on WordPress** (Shopify ruled out — AUP risk for RUO/GLP) |
| Hosting | **Cloudways** server `capstone-server` (DigitalOcean 1GB, NY) · IP **64.225.30.73** · WooCommerce + Storefront theme |
| Domain / DNS | capstonepeptides.com **live on Cloudways** (primary); A records → 64.225.30.73; all 7 email records preserved; **Let's Encrypt SSL** (exp Sep 5 2026); www→root; **email confirmed working** |
| Site visibility | **Coming Soon mode — ON** (privately staged; not public) |
| Compliance pages | **Built + published** (see below) — only Privacy Policy outstanding |
| RF (fulfillment) | SIGNED; deposit in; **integration phase active** (Denise 12-item questionnaire); entity-update email to Denise drafted (not yet sent) |
| C&C (supply) | **Master Agreement SIGNED** (DocuSign); roles verified (C&C = Operator / Capstone = Distributor); $1,500 deposit Q open; Exhibit A GREEN SKUs |
| Banking | **Wells Fargo business account APPLIED** (ref f04f5763-9893-4460-803a-c9d779516a74), pending |
| Merchant processor | High-risk processor needed; apply once store is reviewable |
| Recommended pricing | **LOCATED** — `CC_Peptide_Pricing.pdf` (see Pricing below) |

---

## ✅ Storefront infrastructure — DONE + verified

DNS cutover executed (Mark drove Cloudflare manually — CINC can't render the Cloudflare SPA). Sequence: alias domains added in Cloudways → Vercel CNAMEs replaced with A records to 64.225.30.73 (DNS-only) with all 7 email records untouched → Let's Encrypt SSL issued → primary domain flipped (WP DB search-replace auto-updated siteurl/home). Verified live: valid https, WooCommerce Coming Soon splash, www→root, **email still working**. Coming Soon toggle lives at **WooCommerce → Settings → Site visibility**.

## ✅ RUO compliance pages — BUILT + published (site stays Coming Soon)

Built via CINC. All published within WordPress (not public — site is in Coming Soon).

| Page | ID | Notes |
|---|---|---|
| Research Use Only Disclaimer | 13 | 6 sections (not for human consumption / no medical claims / FDA / not a pharmacy 503A-503B / buyer responsibility) |
| About | 18 | RUO-clean |
| Lab Testing & COAs | 16 | per-product/per-batch COA framing |
| Shipping & Returns | 15 | all sales final except damaged/error; general (no carrier/timeframes yet — pending RF/C&C specifics) |
| Contact | 17 | **WPForms Lite** form (ID 32: Name→Email→Subject→Message, anti-spam ON) → delivers to **support@capstonepeptides.com**; + mailto; + RUO no-guidance note |
| Terms & Conditions | 19 | **PUBLISHED** — see below |
| Privacy Policy | 14 | **HELD** (placeholder; slug landed `privacy-policy-2` — cosmetic). Write AFTER fulfillment + payments locked so it describes real data flows. |

- **Age gate:** Age Gate plugin v3.7.2 (Phil Baker). 21+, gates **all content**, Yes/No, **30-day** remember cookie (`age_gate`), T&C link in gate. ⚠️ **"NO" redirects to google.com** — launch-polish item: repoint to an on-site "21+/research-only" page (better for underwriting).
- **Footer RUO notice** (Storefront Footer Column 1): "Research Use Only — Not for Human Consumption. All products are sold strictly for laboratory and research use and are not for human or veterinary use. © 2026 Capstone Holdings LLC."
- **Nav menu** "Footer Navigation" — all 7 pages; currently assigned to **Primary** location (fine for now; may move to footer at launch).

## ✅ Terms & Conditions — finalized + published (page 19)

~1,961 words, 18 H2 sections. **Modeled on Peptide Partners' coverage but written in ORIGINAL wording** (boilerplate provisions/structure aren't protected; specific expression carries a thin copyright → matched coverage, not text). Capstone Holdings LLC + **Virginia** governing law + **Fairfax County** venue + **binding arbitration + class-action waiver**. Effective **June 7, 2026**. **No SMS clause** (omitted; add a compliant STOP/HELP version if/when an SMS program launches). §10 discloses the **dropship data-sharing** to the fulfillment partner (pre-wires the Privacy Policy). Drafts: `CP_Terms_and_Conditions_DRAFT.md` (v1) / `_DRAFT_v2.md` (v2, the published basis).

## ✅ support@ alias — live

`support@capstonepeptides.com` created in **Cloudflare Email Routing** (forwards to same inbox as mark@), **confirmed working** (test landed). This was the live broken dependency for the Contact form + mailto + T&C — now closed.

---

## 🔒 C&C (Chaos & Control) — role correction + signed

"Master RUO Peptide Drop Ship & Distribution Agreement" (DocuSign, Karen Wilson). **Roles VERIFIED (corrects prior backwards note): C&C = Operator (supplies RUO product + inventory); Capstone = Distributor (sole merchant of record, controls marketing/site/customers).** Distributor signature block needs only Name/Title (signed Mark Shurtliff). Key terms: **$1,500 non-refundable security deposit to C&C** (SEPARATE from the RF deposit — confirm not a duplicate); weekly Fri–Thu billing, invoices due following Monday; chargebacks 100% on Distributor; COA $25 standard / $50 branded per batch; integration $120/hr. **Exhibit A GREEN SKUs** use coded GLP names (G1-S=Semaglutide, G2-T=Tirzepatide, G3-R=Retatrutide, C-Amylin=Cagrilintide) and the mandatory listing format **`[XXX]-[SKU] – [Product Name] – [MG]`** (XXX = Mark's consistent internal code, NOT yet set — e.g. `CAP`). DocuSign envelope expired — Mark can regenerate. Karen/C&C email drafted (name Capstone Holdings LLC as Distributor; fix "Mark Williams" typo; confirm Operator entity + the $1,500 deposit).

## 🔒 RF (Rapid Fulfillment) — integration phase

Signed May 22; $1,500 deposit in; accounting closed. Integration phase active — Denise's 12-item onboarding questionnaire (CRM account, cart/CRM integration, packing slip/inserts, SKU list, go-live date, return-to-sender, etc.); $500 onboarding credit on offer. **Entity-update email to Denise drafted** (not sent): switch billing/legal entity → Capstone Holdings LLC (EIN 42-3011239), brand stays Capstone Peptides, WooCommerce storefront, bank + storefront now chosen, request the **product samples** Denise offered to help answer packaging/insert questionnaire items.

## 💲 Recommended pricing — LOCATED (not yet extracted)

Not in ref docs — it came as **PDF attachments** in Gary McNelley's **"Peptide Dropshipping" Gmail thread (May 21, 2026)**: **`CC_Peptide_Pricing.pdf`** (C&C catalog + recommended pricing) + a Rapid Fulfillment fulfillment/rate sheet. Email tools can't read PDF attachment contents → **next action: Mark uploads `CC_Peptide_Pricing.pdf` to chat**, then Claude extracts the SKU list + recommended prices and builds the catalog + CINC product-build prompt. **Mark is going with C&C's recommended pricing for now.**

---

## 🚦 Open decisions / gates
- **Signature-block entity** (Capstone Peptides brand vs. Capstone Holdings LLC) — Mark's call before next partner email.
- **Internal code prefix (XXX)** for the SKU listing format — must lock before any product is built.
- **Initial SKU set** — full GREEN list vs. a starter set (decide off the pricing PDF).
- **$1,500 C&C deposit** — confirm it's separate from / not a duplicate of the RF deposit.
- **Send** the drafted Denise + Karen entity-update emails (Mark drives).

## 🎯 Next milestones (sequential)
1. **Upload `CC_Peptide_Pricing.pdf`** → extract SKUs + prices → lock internal code prefix + initial SKU set.
2. **Products phase** — Claude drafts RUO-clean descriptions → CINC builds products in WooCommerce in `[XXX]-[SKU] – [Name] – [MG]` format (the biggest remaining lift).
3. **Fulfillment integration** (RF — answer Denise's questionnaire; C&C $120/hr integration).
4. **Payment processor** (high-risk) once the store is reviewable.
5. **Privacy Policy** — write to describe the real RF/C&C + processor data flows.
6. **Flip Coming Soon → Live.**

## 📅 Changelog
**June 7 (v2.0 → v2.1):** New operating entity **Capstone Holdings LLC** (12028373 / EIN 42-3011239). Storefront = **WooCommerce on Cloudways** (Shopify ruled out); **DNS cutover done** + SSL + email preserved; Coming Soon on. **Full RUO compliance build**: RUO Disclaimer, About, Lab Testing, Shipping & Returns, Contact (WPForms→support@), **Terms & Conditions published** (VA law / Fairfax venue / arbitration / no SMS), age gate (21+, all content), footer notice, menu. **support@ alias live.** **C&C role correction** (C&C=Operator, Capstone=Distributor); agreement signed; $1,500 deposit Q. **Recommended pricing located** (`CC_Peptide_Pricing.pdf`). WF account applied.

**Prior (v2.0 + earlier):** RF onboarding/integration phase, the two-contract structure, C&C entity-verification history — see v2.0.

---

## 🔗 Cross-references
- **WL_MASTER_FROZEN** — locked terminology, signature conventions, entity firewall (now partially stale re: entity — see Entity Change above).
- **PP_MASTER (+ addendum v2)** — profpeptide.com RUO firewall is contractually load-bearing under C&C's strict-RUO clauses; strict Capstone↔SCS/PP separation.

---

*Capstone storefront infrastructure + compliance complete; staged in Coming Soon. Next: products (pending pricing-PDF upload + internal code prefix), then fulfillment integration → payments → Privacy → Live.*
