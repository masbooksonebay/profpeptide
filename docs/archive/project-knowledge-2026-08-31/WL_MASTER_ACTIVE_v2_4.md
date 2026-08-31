# White Label / Capstone Peptides — Master Active Tracker

**Status:** ACTIVE TRACKER — Capstone dropship peptide retail business operational state
**Version:** v2.4 (June 12, 2026) — MAJOR. Logs **Bluevine approval + onboarding**, the **Coinbase Commerce rejection and crypto-rail pivot to NOWPayments**, the **BACS no-processor bridge**, the **logo finalized + branding LOCKED rule**, and the **RF/C&C "who needs bank info" clarification**. Supersedes v2.3's under-review-banking / Coinbase-in-stack state. Catalog chemistry, C&C blend resolutions, RF mechanics, taxonomy/store-config, affiliate, SEO from v2.2–v2.3 are **[Unchanged — see v2.3]** unless noted.
**Parent:** WL_MASTER_FROZEN (locked terminology, signature conventions, entity firewall).
**Cross-ref:** SCS_MP; PP_MASTER (RUO firewall).

---

## ⚠️ ENTITY — read first

Operating/legal entity = **Capstone Holdings LLC** (VA **12028373**, EIN **42-3011239**, single-member Mark, formed June 6 2026, RA 9712 Ashbourn Dr Burke VA 22015, phone (909) 702-6765). Brand = **Capstone Peptides** (capstonepeptides.com). **Signature LOCKED: "Member-Manager, Capstone Holdings LLC."** Use **EIN 42-3011239** on ALL applications.

> **Old entity to dissolve:** original **Capstone Peptides, LLC** (VA **12021441**, EIN **42-2730855**) is **SUPERSEDED** — queue for dissolution after confirming all ties sit under Holdings. Then register "Capstone Peptides" as a VA fictitious name under Holdings.

---

## 🏦 Banking — APPROVED (updated)

- **Bluevine business checking = APPROVED & onboarded** (was under review in v2.3). **Standard plan ($0/mo)** — free standard ACH, no fees/minimums; Plus/Premier rejected as unusable perks (switchable later). **3 months free Xero** bundled.
  - Onboarding "expected activity" completed: RUO-forward business description; account use = **primary**; volume **~$4–5K in / ~$3–4K out/mo** (consistent with processor apps).
  - **DECLINED** Bluevine's "link an existing bank to establish 6-mo history" offer — would commingle a personal/SCS account into Capstone banking and break entity separation; build history organically.
  - **Funding:** push from personal NFCU → Bluevine, recorded as a **capital contribution** (owner equity) or documented member loan. Memo: "Capital contribution." Veil risk runs business→personal, not personal→business, so funding the LLC from personal is fine. Mind NFCU transfer limits for large amounts.
  - **Bluevine does NOT support Zelle** (fintechs are excluded from Zelle). Customers can pay in only via **ACH or wire**.
- **FVCbank = durable freeze-resistant backup** (relationship bank, Fairfax HQ; won't auto-decline on a keyword). Claude offered to draft an accurate phone script — still pending Mark's go-ahead.
- **Rejected:** Mercury (AUP "supplements/pills"), Revolut (supplement/alt-med policy).
- **De-risking principle (LOCKED):** use a fintech only as a **deposit account receiving settled ACH from a processor** — clean settled dollars, not raw peptide-customer flow.

---

## 💳 Payment processors + crypto (updated)

**Core finding [Unchanged]:** peptide **card** processing is volume-gated (~$200K/mo) → **ACH/eCheck is the launch rail; cards later.**

**Card/ACH stack:**
- **AllayPay = primary/anchor** — RUO-native, MCC 8099, no LegitScript, **startup-OK**, ACH-first (~3.95%+$0.35, ~$30/mo, $1,500 legal-opinion letter post-underwriting; Mark may self-source as attorney). Complete first.
- **SeamlessChex + PeptiPay = standby** (both startup-friendly, no LegitScript, ACH/eCheck). **Signature Payments (North/NorthAB)** + **PaymentCloud** (broker) also applied — awaiting replies.
- **Declined:** VERIFIED (6-mo requirement), Corepay/Easy Pay Direct (LegitScript), Truevo/PayFirmly (geo), Vector (redundant). **Plaid = not a processor** (it's the ACH-verification layer under one) — don't apply.

**Crypto backstop — PIVOTED this session:**
- **Coinbase Commerce: applied → REJECTED (no explanation; ~peptide AUP).** Also being wound down (US/Singapore only in 2026, transitioning to "Coinbase Business"). **Dead — drop it.**
- **NEW recommended crypto rail = NOWPayments** — non-custodial by default, **no merchant KYC/KYB** for crypto-only (so nothing to reject/freeze), 300+ coins **incl. stablecoins (USDT/USDC)**, WooCommerce plugin, ~0.5% fees, established (4.4 Trustpilot). KYC only triggers on their fiat off-ramp.
  - Alt: **Plisio** (0.5% flat, email-only signup, ~20 coins, no Lightning). **BTCPay Server** shelved (self-hosted/technical + **no stablecoins**).
- **Crypto = backstop only** — crypto checkout converts ~60–85% worse than card for mainstream buyers (customer must hold/send crypto). ACH stays primary.
- **Off-ramp (LOCKED rule):** non-custodial means crypto lands in *your* wallet → convert to USD via a **business exchange account (Coinbase/Kraken) opened under Capstone Holdings (EIN)** → withdraw to Bluevine. **Do NOT route business crypto through personal Coinbase/Kraken accounts** — personal-titled account holding business funds = commingling that weakens the veil regardless of "no personal use," and personal-account commercial use can get flagged/frozen (same Coinbase compliance that rejected Commerce). Kraken/Coinbase are **exchanges/off-ramps, not checkout gateways.**

**Chicken-and-egg (processors want bank statements + order history):** (a) **bank statements** crack with ~30 days of Bluevine activity (fund it, run RF/C&C through it); (b) **order history** bootstraps on the no-approval rails (**BACS + crypto**) — take real, chargeback-free orders, then bring WooCommerce order reports + Bluevine statements to AllayPay/SeamlessChex (both startup-friendly, so may not even need it). Avoid PayPal/Stripe/Square entirely (instant onboard, instant freeze on peptides).

**Standard application answers (LOCKED):** Capstone Holdings LLC · EIN 42-3011239 · **$4,000/mo · $90 avg · $500 max · Online 100% · US-only** · cards=No · single location · drop-shipper = Rapid Fulfillment · peptides **NOT DEA-scheduled** (controlled-substance checkboxes = No). **Refund answer (LOCKED, matches tightened site):** "All sales final; one-time reshipment only for damaged, lost, or incorrect orders; no monetary refunds." Proactively offer **site-review access** (Coming-Soon bypass) on apps — inaccessible sites are a common decline reason.

---

## 🛒 WooCommerce payment setup (NEW)

- **Can't wire real card/ACH processors until approved** — a gateway needs an approved merchant account + API keys to exist. Add each as it approves.
- **BACS ("Direct bank transfer") = the one rail available now** — no processor needed. Enable it primarily as a **test method** to verify the classic checkout + RUO consent + age gate render end-to-end, and as a manual no-processor **bridge** into Bluevine. **Account name = Capstone Holdings LLC** (account-holder legal entity; NOT "Bluevine," NOT "Capstone Peptides"). Leave IBAN + BIC/SWIFT blank (those are international-only; US uses routing+account, routing goes in the "Sort code" field). Tradeoff: it **displays the Bluevine account** to customers and is **manual** (customer pushes ACH; you reconcile) → treat as test/bridge, not permanent front line. **CINC two-phase prompt (configure BACS + test order via a temp hidden $1 product) was provided.**
- **Zelle/Venmo/CashApp = OFF the table for the store** — no buyer protection, irreversible, low limits, against-ToS for stranger commerce, and Bluevine doesn't support Zelle anyway. (If Zelle ever pursued for the discount-for-irreversible-rail tactic some peptide vendors use, the durable way is a *separate dedicated traditional-bank account under Holdings*, treated as semi-disposable — never personal, never main Bluevine. Better: capture the same benefit with an ACH discount + crypto discount.)
- **Website compliance/policy buildout (done earlier this session via CINC):** age/RUO entry gate; required RUO checkout consent; **classic shortcode cart/checkout** (Blocks didn't fire compliance hooks); compliance snippets moved to **Code Snippets plugin** (durable vs theme functions.php). Policy pages live: **Return/Refund** (all-sales-final, one-time reshipment, no monetary refunds), **Privacy** (names GA4 + Omnisend + processor + RF), **Shipping** (**FedEx 2-Day, NO cold-ship per Mark — confirm w/ RF**), **Terms** (VA law + **binding arbitration in Fairfax County** + class-action waiver). **GA4 install PAUSED** pending Mark creating the GA4 property (→ provide G-XXXX Measurement ID).

---

## 🎨 Logo / Branding (NEW)

- **LOCKED RULE (also in cross-chat memory):** the Capstone **"Cp" tile is an intentional periodic-table-of-elements design** — Mark's FINAL creative direction. **NEVER compare it to Adobe Captivate or raise Adobe / trademark / brand-confusion concerns about it. Issue permanently closed.** Logo feedback is limited to **execution only** (site-palette match, weight consistency, transparency, vector/SVG).
- **Final assets built (clean vector SVG + transparent PNG)** at `/mnt/user-data/outputs/capstone_logo/`: `icon` (Cp tile — no number, no label, transparent outside the border, Cp filling ~75% of box), `lockup_horizontal`, `lockup_stacked`. Font = Liberation Sans (Arial-class = the conventional periodic-table symbol font).
- **PLAN (decided):** use the **icon as the logo image**; render "Capstone Peptides" as **live site text** (Kadence site title in **Inter + global color tokens**) — NOT a baked wordmark image (wordmark images read "broken" + live text guarantees exact color/type match and can't break).
- **Colors are absolute hex** (no "WordPress color template" that alters them). Palette used (verify against live Kadence Global Colors before finalizing): Ink #16181B, Deep #2C3A47, Accent #3E7CA8, Muted #5E6B78, Surface #F4F6F8, Border #D9DEE4, white; sharp corners.
- **SVG upload caveat:** WordPress blocks SVG by default → enable **Safe SVG** plugin (durable) and upload `icon.svg`, or upload `icon.png` (zero-friction). Mark uploads the file to Media first (CINC can't drive the OS file picker), then CINC selects it.
- **IN FLIGHT:** Mark ran the CINC prompt to **report exact Kadence Global Color hex + header/site-title state**. NEXT: when CINC reports, exact-match the icon's hex if any differ → upload icon → enable live-text wordmark in Inter + global colors.

---

## 🔒 RF (Rapid Fulfillment) — banking clarification (updated)

- **You PAY RF (push); RF does not need your bank info.** RF's details are on the signed IO: **Fresno First Bank, acct 100054858, routing 121144146**, memo = company name + IO number. Weekly invoices, due 72 hr.
- RF Accounting (Julieta Velazquez) had you complete a **Credit Card Authorization Form** (done) → **card = backup, deposits/ACH = primary.** Denise never asked for banking info (the "ACH details" language in-thread was Mark's own offer + asking Denise to recommend a bank).
- **COA testing partner = Accumark** (per RF/C&C thread). Tirzepatide 30 mg COA done.
- **⚠️ SECURITY TODO:** Mark sent the **WooCommerce API consumer key/secret (read/write) to Denise over plain email** for the integration → **rotate those keys once RF confirms the integration is connected.**
- Other RF facts [Unchanged — see v2.2/v2.3]: dropship-only, $1,500 deposit, returns NOT offered, contacts Denise/Gary/Walt.

## 🔒 C&C (supply) — Karen [largely Unchanged — see v2.3]
- Karen confirmed Holdings distributor + countersignature "Karen Wilson on behalf of Chaos & Control"; **Operator legal entity still unnamed**; COA lab provenance outstanding.
- **Owe Karen at onboarding:** company **logo (PNG/vector) + business info** for the branded COA.
- GLOW (BBG70, 97) / KLOW (KBT80, 98) still **PARKED on Karen** (composition absent from all docs; SKU decode high-confidence but don't populate on a decode). Blend 86 (CP10) resolved as no-DAC from signed Exhibit A.

## ✅ Catalog [Unchanged — see v2.3]
36 products PRIVATE/draft, Coming Soon ON, ≥98% purity cap; chemistry spot-check corrected + read-back confirmed (Retatrutide/Cagrilintide/Semax/Selank/CJC DAC vs no-DAC/Survodutide). Chemistry is the anchor, not vendor labels.

---

## 🚦 Open gates / next milestones
1. **Logo finish (in flight):** CINC reports Kadence hex + header state → exact-match icon → upload icon (Safe SVG or PNG) → enable live-text "Capstone Peptides" wordmark.
2. **BACS test:** run the CINC two-phase prompt → confirm classic checkout + RUO consent + age gate fire end-to-end.
3. **Crypto:** set up **NOWPayments** (non-custodial, no-KYC) + a **business Coinbase/Kraken** off-ramp under Holdings → wire into WooCommerce. (Backstop priority — don't over-invest.)
4. **Processors:** AllayPay anchor underwriting + $1,500 legal-opinion letter; SeamlessChex/PeptiPay/Signature/PaymentCloud replies. Use locked answers + reshipment-only refund wording + offer site-review access.
5. **Banking:** fund Bluevine via NFCU capital contribution; let it age ~30 days for a first statement; FVCbank phone script on go-ahead.
6. **GA4:** Mark creates the property → provide Measurement ID → CINC finishes install.
7. **Website pre-go-live:** product images; header/nav; confirm RF **non-cold FedEx 2-Day + discreet packaging** w/ Denise/Gary; convert Cloudways + Workspace trials → paid; Workspace aliases (**support@** is used in policies — must exist); DMARC p=none → quarantine post-launch.
8. **GLOW/KLOW** — Karen confirms composition/mg (or COA) → CINC populates.
9. **C&C Operator** legal entity + COA provenance before countersigning; send Karen logo + business info.
10. Dissolve old Capstone Peptides LLC; register "Capstone Peptides" fictitious name under Holdings.
11. Rotate WooCommerce API key after RF integration confirmed.
12. Prune YELLOW/low-margin SKUs → flip Coming Soon → Live (only after a payment rail is live).

## 📅 Changelog
**June 12 (v2.3 → v2.4):** **Bluevine APPROVED** + onboarded (Standard plan, RUO description, declined history-link offer, NFCU capital-contribution funding, 3-mo Xero, no Zelle). **Coinbase Commerce REJECTED** (+ being wound down) → **crypto rail pivot to NOWPayments** (non-custodial/no-KYC/stablecoins); Plisio alt, BTCPay shelved; **business-exchange-off-ramp rule** (no personal accounts). **BACS** added as test-method/no-processor bridge (CINC prompt ready; account name = Holdings; IBAN/BIC blank). **Chicken-and-egg** resolution (bank statements via aging; order history via BACS+crypto). **Logo finalized** (clean periodic-tile icon, vector + transparent) + **branding LOCKED rule** (intentional periodic-table design — never raise Adobe again) + icon-image-plus-live-text-wordmark plan + Safe-SVG caveat; CINC color-report in flight. **RF/C&C clarification:** neither needs Capstone bank info (push-payment); RF has CC-auth on file (card=backup); **rotate WooCommerce API key** sent over email; Accumark = COA partner; owe Karen logo+business info. **Refund wording tightened** to one-time-reshipment / no-monetary-refunds across site + apps.

**Prior (v2.3 + earlier):** Financial-rail buildout, catalog chemistry corrections, blend 86 resolved, GLOW/KLOW parked, Karen countersignature, website compliance/policy buildout — see v2.3.

---

*Banking now LIVE (Bluevine). Crypto pivoted to NOWPayments (+ business exchange off-ramp). BACS is the bootstrap rail to earn order history while AllayPay (anchor) underwrites. Logo finalized — finishing via CINC (color-match + live-text wordmark). Gating go-live: a live payment rail, RF/Karen confirmations, GLOW/KLOW, GA4, on-site polish. Then prune SKUs → Live.*
