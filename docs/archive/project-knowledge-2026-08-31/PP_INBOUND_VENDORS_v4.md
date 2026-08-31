# PP_INBOUND_VENDORS v4
**Supersedes v3. Updated 2026-08-21.**

---

## v3 → v4 CHANGELOG

| Change | Detail |
|---|---|
| **Forge Performance Co added** | Tenth inbound vendor. Full gate assessment below — strongest testing of any applicant to date, with three real problems. |
| **Decision table added (§6)** | v3 listed the nine owed a reply but never stated a disposition for any of them. Every inbound vendor now carries an explicit status: REPLY / ASSESS / HOLD / DECLINE. |
| **§4 renamed** | "The nine owed a reply" → "The inbound roster." Ten now, and the reply backlog is one attribute of a vendor, not the organizing principle. |
| **Assessment-before-reply rule (§7)** | Forge's public catalog answered three of four gates in a single reading pass. Assess from public surfaces first; spend the email on what only the vendor can answer. |

---

## 1. 🔴 FOUR MONTHS OF SILENCE — now fixed

**Every contact-form auto-reply failed silently from roughly April to August 2026.**

The route hardcoded `onboarding@resend.dev` — Resend's shared sandbox sender, which **only delivers to the account owner's own verified address.** Mark's notification to `profpeptide@gmail.com` arrived every time. The submitter's auto-reply never sent. No bounce, no error shown to them, nothing arrived.

**Confirmed in the Resend logs:** every email over the audit window went to `profpeptide@gmail.com`. Zero to any outside address.

**Fixed 2026-08-19** — verified sending domain `mail.profpeptide.com`, sender `contact@mail.profpeptide.com`, delivery to a non-owner address proven with a real send.

⚠️ **Nine vendors submitted the form and heard nothing.** None of them ignored PP; PP appeared to ignore them.

---

## 2. THE INTAKE GATES

**Gate A — attribution.** Does the vendor run an affiliate program, on what platform, and **can it bind a custom code?** ⚠️ Only checkable inside the portal — platform type does not predict it. Spartan runs a program and its code credits nobody.

**Gate B — testing.** Which laboratory, is a COA published pre-purchase, is it batch-searchable against the lot on the vial, and what does the panel cover?

**Gate C — public catalog.** Is the full catalog and per-vial pricing visible **without an account?** ⚠️ This decides whether the vendor can enter the price grid at all. Eight vendors are on the skip ledger because their pricing isn't machine-readable.

**Gate D — identity.** Is the operating legal entity identifiable?

### 🆕 Gate E — editorial risk

**Does the vendor's own site make claims PP would not make?** Therapeutic or efficacy claims, human-use testimonials, dosing guidance, or comparisons to approved pharmaceuticals.

**Why this is a gate and not a footnote:** PP prints **"Verified"** next to every listed vendor. That word attaches PP's credibility to the vendor's surfaces, not just to its lab reports. A vendor citing trial weight-loss percentages on an RUO product page is carrying FDA/FTC exposure that a "Verified" badge from PP implicitly endorses.

⚠️ **Gate E is not automatically disqualifying** — it is a question to raise with the vendor before listing. Most vendors will fix a claims problem if told; a vendor that won't is telling you something.

---

## 3. 🔴 PAID PLACEMENT IS DECLINED

PP's affiliate disclosure states: *"Affiliate relationships never determine vendor inclusion, ranking, verification, or our editorial conclusions."*

**That sentence is on every page.** Accepting paid placement, store credit tied to referral volume, or a sponsored newsletter slot contradicts it directly — and that independence is PP's main asset against aggregators.

**Precedent set 2026-08-19 with One Aminos** (§4). Offered 25–35% commission plus $150 store credit and a co-branded campaign — declined the placement, offered evaluation on the standard.

---

## 4. THE INBOUND ROSTER

| Vendor | Contact | Gates cleared | Status |
|---|---|---|---|
| **Peptira** | peptira.com, Adam Rego | unassessed | 🔴 **REPLY FIRST.** Established program, $2,500/month minimum. Draft answers ready; Mark to add a phone number |
| **Forge Performance Co** | forgeperformanceco.com, `info@` | **B ✅ C ✅ D ~ · A ? · E 🔴** | **ASSESS → REPLY.** Best testing of any applicant. Three problems, see below |
| **One Aminos** | support@oneaminos.com, Ishaan | **B ~ C ✅ · A ? E ?** | Reply drafted — declines placement, asks the four gate questions |
| **Full Scale** | — | unassessed | Email drafted in a prior session |
| **Peptriva** | — | unassessed | Email drafted in a prior session |
| **Bioleno** | — | unassessed | HOLD — no contact name |
| **Optimized Aminos** | — | unassessed | HOLD — no contact name |
| **PurPath** | — | unassessed | HOLD — no contact name |
| **Validated Peptides** | — | unassessed | HOLD — no contact name |
| **PeptiCaribe** | — | unassessed | HOLD — no contact name |

---

### Forge Performance Co — full assessment (2026-08-21)

Assessed from public surfaces. **The site is NOT account-gated** — catalog, product pages, COA library and policies all read without login.

**Gate B — the strongest of any inbound applicant.**
- **Two independent US laboratories:** Freedom Diagnostics and ILS Laboratories.
- HPLC and mass spectrometry. Stated policy: *no manufacturer-supplied data.*
- **Public, batch-searchable COA library** at `/coas/` — searchable by compound or batch.
- **Cap color on the vial keys to the matching certificate online.** A physical-to-digital binding almost nobody on the roster has.
- Panel: third-party · HPLC · identity · heavy metals · sterility · endotoxin per USP <85> · **fentanyl screening**.

⚠️ Fentanyl screening is genuinely differentiating — it addresses the contamination risk buyers actually worry about, and no current PP vendor advertises it.

**Gate C — passes.** Full catalog public at `/category/all-products`, per-product pages public. Lyophilized vials and capsules. Categories: Metabolic Authority · Cellular Drive · Growth & Repair · Aesthetics & Focus · Lab Essentials · stacks. **Price pull would work** — ⚠️ per-vial price visibility not yet confirmed machine-readable; verify before adding to the grid.

**Gate D — partial.** Texas / Austin-area fulfillment, "registered U.S. business," Texas jurisdiction in the refund policy. **No legal entity name published.** Ask.

**Gate A — UNKNOWN.** No affiliate or partner page surfaced. This is the gate that decides listing. Ask.

**Gate E — 🔴 THREE PROBLEMS.**

1. **Explicit efficacy claims on an RUO product page.** The GLP-RT (Retatrutide) page calls it *"one of the most powerful peptides studied for weight management and metabolic health"* and carries a **Research Outcomes block** citing *"Phase 2 obesity trial: average weight reductions of up to 24% over 48 weeks,"* *"significant improvements in insulin sensitivity and glucose control,"* and *"dose-dependent decreases in BMI and waist circumference."* This sits directly above their own no-medical-claims disclaimer — the page contradicts itself.

2. **Human-use testimonials republished on their own homepage.** Trustpilot excerpts marked *"independently posted, lightly excerpted for length"* — including *"I was stuck, unable to lose weight for 3 years"* and *"I love the transformation results."* Selecting and republishing human-outcome testimonials is the vendor making the claim, regardless of who wrote it.

3. **Unresolved payment dispute on Trustpilot.** A reviewer states funds sent to `info@forgeperformanceco` were received and no product shipped; Forge replies the payment never reached them and the account isn't affiliated. The reviewer also notes the listed address is shared with another peptide store. 17 reviews, 4-star aggregate.

⚠️ **On the address:** shared-address findings are weak evidence on their own — Austin virtual-office and registered-agent addresses host many businesses legitimately. Do not treat it as proof of anything. It is a reason to confirm the legal entity (Gate D), not an accusation.

**Also noted:** a **3% Zelle checkout discount** — a public payment-method offer. Same shape as the Glacier Zelle and Nura signup patterns; whether it stacks with an affiliate code is unknown and should be asked alongside Gate A.

**Recommendation:** reply, ask Gate A and Gate D, and **raise the Gate E claims directly rather than listing around them.** The testing genuinely beats most of the current roster. If Forge will clean up the product-page trial-outcome block and stop republishing human-outcome testimonials, it's a strong add. If they won't, PP would be printing "Verified" beside a vendor whose own pages contradict PP's RUO framing.

---

### One Aminos — full assessment (carried from v3)

**Gate A:** partner page offers custom codes plus a referral link and portal. Right shape, **untested.**

**Gate B — genuinely substantive, with real gaps.** United Laboratories (Derabassi, Punjab, India), Lab Director Bhavrat Singh, signed, verification code per report. Seven-point panel: three-vial conformity with published mean, measured net content (10.24mg on a 10mg label), LC-MS identity, kinetic LAL endotoxin against USP <85>, ICP-MS heavy metals with spike recovery and QC data, chromatogram, vial photo.

⚠️ **No accreditation claimed anywhere** — no ISO 17025, no A2LA, no NABL. "Pharmaceutical Analytical Testing" is a tagline, not a credential.

⚠️ **The sterility test contradicts their own summary.** The report says *"a preliminary quality-control screen, and full compendial sterility testing may be required"* — a two-day rapid method, not USP <71>. Their COA index page says simply "Sterility — Pass."

⚠️ **Every report shares one issue date.** A single catalog-wide round, not per-batch-as-shipped. Four compounds show "COA received — report being added soon."

⚠️ **Verification was unavailable when checked.** Do not publish a "verify at UnitedLaboratories.Org" claim until confirmed working.

**Gate C:** public catalog and prices, 25 compounds, coded GLPs that self-decode. **Price pull would work.**

⚠️ **A public 20% sitewide sale plus a 15% newsletter offer.** Against a 25–35% commission that's attractive, but if the public discount matches whatever code PP gets, buyers won't use it — the Nura and Midwest pattern.

---

## 5. THE VENDOR PROGRAM PAGE — queued

A footer link and an intake page, turning scattered emails into structured intake.

⚠️ **Free, no tiers.** Peptide Critic sells a $499/month Premium tier including "sponsored placements." PP cannot mirror that model — see §3.

**Fields map to the gates:** identity · affiliate platform and custom-code binding · lab, COA availability, batch-searchability, panel · **public catalog and pricing without an account** · 🆕 **a claims attestation** covering Gate E.

⚠️ **State the standard on the page.** A public apply form creates an expectation; a rejection should point at a published rule rather than a judgment.

---

## 6. 🆕 DECISION TABLE — what happens to each, in order

| # | Vendor | Action | Why |
|---|---|---|---|
| 1 | **Peptira** | **REPLY NOW** | Established program, $2,500/month minimum — the largest known opportunity in the queue, and it has waited four months. Blocked only on Mark adding a phone number |
| 2 | **Forge Performance Co** | **REPLY** — ask Gate A + D, raise Gate E | Best testing of any applicant. The claims problem is fixable and worth raising directly |
| 3 | **One Aminos** | **REPLY** — drafted, declines placement | Assessment complete. Send it |
| 4 | **Full Scale** | **ASSESS, then send the drafted email** | Email exists; no gate assessment has been done. Assess public surfaces first (§7) |
| 5 | **Peptriva** | **ASSESS, then send the drafted email** | Same |
| 6–10 | **Bioleno · Optimized Aminos · PurPath · Validated Peptides · PeptiCaribe** | **ASSESS from public surfaces, then reply to the form address** | "No contact name" has held these five for months. A name isn't needed — the contact form submission carries a reply address, and the public site answers Gates B, C, D and E without anyone replying |

⚠️ **"Unvetted, no contact name" is not a reason to hold a vendor indefinitely.** It was treated as one in v3 for five vendors. Forge's assessment took a single reading pass and cleared three gates. Assess first; the missing name rarely blocks anything.

---

## 7. 🆕 ASSESS BEFORE REPLYING

**Read the vendor's public surfaces before writing the email.** Gates B, C, D and E are usually answerable from the catalog, the COA page, the about page and the policies — no vendor response required.

**Spend the email on what only the vendor can answer:** Gate A (does the program bind a custom code, and does it pay on code-only orders with no click), the legal entity if unpublished, and any Gate E issue found.

**Why:** an email asking four questions the site already answers reads as unserious and wastes the exchange. Forge's assessment cleared three gates in one pass and produced two *specific* questions plus one substantive concern — a far stronger first contact than a generic questionnaire.

⚠️ **Record the assessment in this doc when it's done**, whether or not the vendor replies. An unrecorded assessment gets redone.

---

## 📅 CHANGELOG

**v4 (2026-08-21):** Forge Performance Co added with full assessment. Gate E (editorial risk) added. Decision table (§6) — every inbound vendor now carries an explicit disposition. Assess-before-replying rule (§7). "No contact name" retired as a hold reason.

**v3 (2026-08-19):** The auto-reply outage and its fix, the four gates, the nine owed a reply, One Aminos assessment, paid-placement precedent, vendor program page.
