# White Label / Capstone Peptides — Master Active Tracker

**Status:** ACTIVE TRACKER — Capstone dropship peptide retail business operational state
**Version:** v2.2 (June 8, 2026) — MAJOR. Logs the **full product-catalog build + import (36 products, 8 customer-facing categories)**, the **locked category taxonomy + market research**, the **RF WooCommerce REST-API integration mechanics**, the **signed W-9 for Capstone Holdings LLC**, the **store-config build-out** (menus, email branding, identity, Rank Math/logo/age-gate pending), the **cold-ship finding**, the **affiliate-program direction**, and the **SEO playbook**. Supersedes v2.1's compliance-built / pre-catalog state.
**Parent:** WL_MASTER_FROZEN (locked terminology, signature conventions, entity firewall).
**Cross-ref:** SCS_MP; PP_MASTER (RUO firewall).

---

## ⚠️ ENTITY — read first [largely Unchanged — see v2.1]

Operating/legal entity = **Capstone Holdings LLC** (VA Entity ID **12028373**, EIN **42-3011239**, single-member Mark, disregarded by default, formed June 6 2026, RA 9712 Ashbourn Dr Burke VA 22015). Brand = **Capstone Peptides** (capstonepeptides.com). Email: mark@ + **support@capstonepeptides.com** (live, tested working this session).

> **Signature block:** Mark has moved to **"Member-Manager, Capstone Holdings LLC"** on recent RF/W-9 correspondence (matches the W-9 entity). Frozen doc + memory still name the old "Capstone Peptides, LLC" block — treat Holdings as current.

---

## 📍 Status Snapshot (June 8, 2026)

| Component | State |
|---|---|
| Storefront | **WooCommerce on Cloudways** (`capstone-server`, DigitalOcean, IP 64.225.30.73, Storefront theme) · **Coming Soon ON** throughout |
| Cloudways plan | **Flexible — FREE TRIAL** ⚠️ watch trial expiry so the server/store doesn't lapse mid-build |
| Product catalog | **36 products imported as DRAFTS** (32 GREEN + 4 YELLOW) across **8 categories** — DONE this session |
| Compliance pages | Built/published (prior). **Privacy Policy came back PUBLISHED** (ID 14) — reconcile note below |
| Store config | Menus built; email From = support@; identity/tagline set. **Pending:** site+email logo, Rank Math install, age-gate redirect repoint |
| RF (fulfillment) | Integration phase; **connects via WooCommerce REST API**; entity change to Holdings **confirmed by Denise**; **W-9 signed** (cover email drafted) |
| C&C (supply) | Signed; **Operator still UNNAMED**; COA-provenance question outstanding (don't countersign until Operator named) |
| Banking | Wells Fargo business account applied/pending; **bank + merchant-processor question to RF still OPEN** (go-live critical path) |
| Affiliate program | Direction set: lean **AffiliateWP** (self-hosted) vs GoAffPro (hosted) — research at build time |

---

## ✅ Product catalog — BUILT + imported (the session's main lift)

- **36 products** imported as **drafts** via WooCommerce CSV import (best practice over manual CINC entry). 0 errors. Store stayed Coming Soon. CSV: `/mnt/user-data/outputs/capstone_products_import.csv` (regenerated to final state).
- **32 GREEN** (orderable, priced at C&C suggested retail, `In stock?`=1) + **4 YELLOW** (no price, out-of-stock drafts, per "add everything, prune before go-live"): **AOD-9604, CJC-1295 (no-DAC) standalone, Survodutide, Glutathione** (Glutathione's System SKU still TBD from C&C).
- **Internal code prefix LOCKED = `CAP`** (contractually fixed per C&C listing format `[XXX]-[SKU] – [Name] – [MG]`; no change without C&C written approval).
- **Titles:** real compound name + C&C code for the coded GLP/amylin items (e.g., "Semaglutide (G1-S) 5 mg"); real names elsewhere. RUO-compliant descriptions (no dosing/therapeutic claims).
- **Pricing** = C&C suggested retail (Sema $70/$100, Tirz $110/$250, Reta $130/$250, etc.); POD costs from Exhibit A. Bac-water price split (8/$15) still to confirm.

### Category taxonomy — LOCKED (8, customer-facing)

**Weight Loss & Metabolic** (11) · **Growth Hormone** (7) · **Repair & Recovery** (5) · **Skin & Anti-Aging** (4) · **Focus & Mood** (2) · **Longevity & Immune** (4) · **Sexual Health** (1) · **Supplies & Accessories** (2).

- **Capstone categories are independent of PP** — CP is customer-facing/goal-named; PP is academic. They need NOT match (Mark may rename PP later).
- **IGF-1 LR3 → Growth Hormone** on CP (customer intuition), even though PP files it under Performance & Energy.
- **Research basis:** the market uses goal-based names — Ascension (Weight management / Healing & recovery / Growth hormone / Immune & longevity / Tanning & sexual health), Spartan ("…Peptides"-suffixed goal categories + "Repair & Recovery"), Royal/Oasis lead with named compounds; some vendors skip categories entirely and just sort. We chose the **dual approach: categories + a sortable All-Products shop.**
- **Names are bare** (no "…Peptides" SEO suffix) — keep titles clean, push keywords to Rank Math meta.

### WooCommerce mechanics learned (LOCKED gotchas)
- **No commas in category names** — the CSV importer splits a category on the comma ("Cognitive, Aesthetic & Ancillary" → two junk categories) and reads ">" as parent/child hierarchy. Use **"&"** only. (This caused a full delete-and-reimport this session.)
- **Default sort = Popularity**, BUT WooCommerce "Popularity" = the gameable `total_sales` field (per-SKU, manually overridable). It's distorted when demand splits across SKUs (Reta = RT10+RT30) and is effectively random on a zero-sales store. **Launch-polish:** switch default to **menu order** and manually pin demand leaders (Retatrutide, Tirzepatide, Semaglutide, BPC-157) to the top; keep popularity/price as selectable options. (EZ Peptides' "MOTS-C most popular / Reta buried" ranking is the cautionary example.)

## ✅ WooCommerce platform clarification (LOCKED)
**WooCommerce has no signup/account** — it's a free plugin on self-hosted WordPress on Cloudways. The only account behind the store is **Cloudways** (under mark@capstonepeptides.com). **Skip/deny the "Connect to WooCommerce.com" OAuth** — it's only for paid extensions, not needed; keeps platform ties minimal (same logic as self-hosting to dodge AUP). An older, unrelated **WordPress.com** account ("Power Supply Free Meal," markshurtliff@gmail.com) exists — harmless, not used by the store.

## 🛠 Store config — build-out (CINC)
- **Menus:** Primary nav = Shop + 8 categories + About + Lab Testing & COAs + Contact; Footer menu = Terms & Conditions, About, Contact, Shipping & Returns, Privacy Policy, RUO Disclaimer. (Storefront renders saved order oddly — drag Shop to top.)
- **WooCommerce email:** From name = Capstone Peptides, From address = **support@capstonepeptides.com**. Email header logo **not set** (needs upload).
- **Identity:** title Capstone Peptides, tagline **"Premium Research Peptides."** **Site logo not set** — the "Cp" element-style tile needs to be in the Media Library, then applied (CINC can't drive the OS file picker → Mark uploads). (The "Cp" tile resembles Adobe Captivate's mark as a *plain* letter, but the finished element-cell concept + own colors + unrelated industry defuses the trade-dress concern.)
- **Rank Math = NOT yet installed** (confirmed). Install + run setup wizard (stop before any sitemap submission / external-account connection). Permalinks already = Post name.
- **Age gate** active (21+); **"No" still → google.com** — launch-polish: repoint to an on-site page.
- **Privacy Policy is PUBLISHED** (ID 14) — differs from the earlier "held until real data flows" note. Recommendation: **leave it published** (a live privacy policy is harmless/good before collecting emails); reconcile the "held" note. Sample Page + duplicate Privacy-draft + Hello-World queued for trash cleanup.

---

## 🔒 RF (Rapid Fulfillment) — integration mechanics (NEW, from Denise this session)
- **Connects via WooCommerce REST API:** WooCommerce → Settings → Advanced → REST API → consumer key/secret + admin URL, **read/write**. RF ingests **SKUs as-is** and reconciles the C&C codes during their order-routing setup → real-name + C&C-code titles are fine; importing the catalog now is correctly sequenced.
- **Product TITLES print on RF packing slips** — Capstone's clean titles work; don't put anything in a product field you wouldn't want on a packing slip.
- **Samples ship AFTER account setup** (needed to answer the packaging/insert questionnaire items).
- **Entity change CONFIRMED by Denise:** Capstone Holdings LLC (EIN 42-3011239) = legal/billing; Capstone Peptides = brand. RF **requested a W-9** (done — below).
- **Open on the go-live critical path:** RF's recommended **bank / merchant-processor** answer (still unanswered across the thread) + samples.
- ⚠️ **When generating the WooCommerce REST API keys for RF, share them DIRECTLY with RF — never via chat** (consumer key/secret are credentials).

## ✅ W-9 — completed + signed (Capstone Holdings LLC)
W-9 done this session for **Capstone Holdings LLC, EIN 42-3011239**. Single-member LLC / disregarded entity → **Line 1 = owner (Mark Shurtliff), Line 2 = Capstone Holdings LLC, Line 3a = "individual/sole proprietor or single-member LLC" box** (the convention people get backward — Line 1 is the owner, not the LLC). Mark (attorney) handled the TIN line. Cover email to Denise **drafted** (reply-all on the "Integration - Capstone Peptides" thread, Holdings signature block, attach W-9 + advance API-creds/ACH/bank/samples) — Mark to send.
*(macOS note: Preview couldn't save to Downloads/Documents — protected folders / write-permission; Desktop worked.)*

## ❄️ Cold-ship finding (margin-relevant)
Lyophilized peptides do **not** need cold shipping for normal transit (stable ambient days–weeks; moisture not temperature is the risk; cold packs can be counterproductive via condensation). Exceptions: reconstituted/liquid (N/A — Capstone ships powder) + a thermally-labile subset (fatty-acid-modified GLPs). **RF's rate sheet is all-cold (FedEx 2-Day Cold).** **Action: ask RF (Denise/Gary) whether they offer a non-cold standard option** — gates whether sub-$60 SKUs can publish profitably. (Oasis markets cold-shield/-20°C as premium *positioning*; Royal just says lyophilized — i.e., cold-ship is a branding choice, not a requirement.)

## 🔒 C&C — Operator still unnamed [Unchanged from prior — carry forward]
Operator block remains **UNNAMED** (no entity/signature). Karen will update the Distributor name + countersign as "Karen Wilson on behalf of Chaos & Control" but has **not** provided the Operator's legal entity name. **COA-provenance question outstanding** (does the COA name the independent third-party lab + tie to the specific batch/lot?). COA-first reply to Karen **drafted, not yet sent**. **Don't countersign until the Operator is named + countersigns.** Deposits clarified: **RF $1,500 (postage, non-refundable) and C&C $1,500 (product, refundable) are SEPARATE.**

## 🤝 Affiliate program — build-out item
Add an affiliate section so affiliates promote Capstone (mirror of Mark-as-affiliate on PP). Most peptide vendors run **GoAffPro** (confirmed — EZ Peptides' `partners.ezpeptides.com` is GoAffPro: `?ref=` links, tabbed Home/Marketing Tools/Analytics/Transactions/Payments/Settings, Referrals/Orders/Conversions/Sales/Earnings). Mark is already a GoAffPro **affiliate** via PP (EZ dashboard: profpeptide@gmail.com, 27 referrals / $385.56). For Capstone's own program: **GoAffPro** (hosted SaaS, free, turnkey, external data dependency) vs **AffiliateWP** (~$150/yr, self-hosted, data on own server, WooCommerce-native) — **lean AffiliateWP** per own-the-infrastructure logic; proper research at build time.

## 🔍 SEO playbook (Capstone) — "optimize as aggressively as possible"
- **Categories double as indexable landing pages** targeting goal-based search terms ("weight loss peptides," "growth hormone peptides") — a reason every product has a category (the dual categories + sortable shop).
- **Keep product titles clean** (real name + size); push keyword weight into **Rank Math meta titles/descriptions**, NOT the visible title — don't title-stuff like EZ ("BPC-157 – High-Purity Laboratory-Verified Research Peptide in Sterile Vial").
- Rank Math baseline: per-product/category meta, XML sitemap, clean permalinks — configure before go-live.
- Popularity-sort caveat (above) is also an SEO/merchandising consideration.

---

## 🚦 Open decisions / gates
- **Bank / merchant processor** (high-risk) — RF's recommendation still unanswered; gates payments + go-live.
- **C&C Operator legal entity** + COA-provenance reply (send drafted Karen email).
- **RF non-cold standard shipping** option — confirms which low-price SKUs can publish.
- **Bac-water price split**; **Glutathione System SKU** from C&C.
- **Send** the drafted Denise (W-9 + nudges) and Karen (COA) emails.
- Cloudways **free-trial expiry** — confirm before it lapses.

## 🎯 Next milestones (sequential)
1. Send W-9 cover email to Denise; finish CINC store config (logo, Rank Math, menu order, trash cleanup; age-gate repoint as launch-polish).
2. Confirm RF shipping (cold vs standard) + bank/processor → prune YELLOW/low-margin SKUs → finalize catalog.
3. Generate WooCommerce REST API keys → share **directly** with RF for fulfillment integration.
4. Resolve C&C Operator + COA provenance before countersigning.
5. Payment processor (high-risk) once store is reviewable.
6. Privacy Policy reconciled to real data flows; affiliate program (AffiliateWP) build.
7. Flip Coming Soon → Live.

## 📅 Changelog
**June 8 (v2.1 → v2.2):** **Catalog built + imported** (36 products as drafts, 32 GREEN + 4 YELLOW, CAP- prefix, dual real-name/C&C-code titles, RUO descriptions). **8 customer-facing categories LOCKED** (Weight Loss & Metabolic / Growth Hormone / Repair & Recovery / Skin & Anti-Aging / Focus & Mood / Longevity & Immune / Sexual Health / Supplies & Accessories) + market research + comma-split gotcha + popularity-sort caveat + dual categories/sortable-shop decision. **WooCommerce = free plugin, no signup** (skip WooCommerce.com OAuth; Cloudways is the only account). **RF integration mechanics** (REST API; SKUs as-is; titles on packing slips; samples post-setup; entity confirmed; W-9 requested). **W-9 signed** for Capstone Holdings LLC (disregarded-entity line structure). **Store config** (menus, email From=support@, identity/tagline; logo/Rank Math/age-gate redirect pending; Privacy Policy published — reconcile). **Cold-ship finding** + RF standard-shipping question. **Affiliate-program direction** (AffiliateWP vs GoAffPro). **SEO playbook.** Cloudways on free trial (watch expiry).

**Prior (v2.1 + earlier):** Entity change to Holdings; WooCommerce/Cloudways + DNS cutover; RUO compliance build + T&C; support@ alias; C&C role correction + signed; pricing located — see v2.1.

---

## 🔗 Cross-references
- **WL_MASTER_FROZEN** — locked terminology, signature conventions, entity firewall (partially stale re: entity + signature block — see Entity above).
- **PP_MASTER (+ addenda)** — profpeptide.com RUO firewall load-bearing under C&C strict-RUO; strict Capstone↔SCS/PP separation.

---

*Catalog imported (drafts) + categorized + sortable shop; store config underway; all staged in Coming Soon. Gating go-live: RF shipping/bank-processor answers, C&C Operator/COA, payment processor, Privacy Policy. Then prune SKUs → Live.*
