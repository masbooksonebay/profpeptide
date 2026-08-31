# PP MASTER REFERENCE DOC v5

**Status:** ACTIVE REFERENCE — single source of truth for Prof. Peptide workstream
**Version:** v5 (May 15, 2026)
**Source:** Updated from v4 (May 12, 2026) — incorporates v1.0.1 launch + v1.0.2 submission
**Cross-referenced in:** SCS MP, PP_X_POSTS (v14+), PP_INDEXING (v17+)

---

## v4 → v5 CHANGELOG

**Major events:**
- ✅ **v1.0.1 LIVE on App Store** May 13, 2026 (first SCS LLC product shipped)
- ✅ **v1.0.2 SUBMITTED for review** May 15, 2026 (Submission ID 9be29de2-3499-41c8-b746-072ed08a662e)
- ✅ Site /app page updated (May 15) — Coming Soon removed, App Store badge live, feature list synced to v1.0.1
- ✅ Friends/family review guidance: organic reviews OK if not coordinated/incentivized
- ✅ White-label vendor (Business B) model captured to long-term backlog
- ✅ Blend dosing content category captured to long-term backlog

**ASC mechanics learned (new):**
- Screenshot reorder on live versions requires new version row (cannot edit inline on Ready for Distribution state)
- Modern submission flow auto-handles compliance modal when answers inherit from prior version
- 6.9" Display screenshots scale to all device sizes (only upload largest)
- Promotional Text editable on Live + Waiting for Review states without re-review

---

## CURRENT APP STATE (May 15, 2026)

### Live on App Store
- **Version:** 1.0.1
- **Build:** 2
- **Release date:** May 13, 2026
- **App Store URL:** https://apps.apple.com/app/prof-peptide/id6761995269
- **Distribution:** 175 countries, Manual release type
- **Status:** Ready for Distribution

### In Apple Review
- **Version:** 1.0.2
- **Build:** 3
- **Submission ID:** 9be29de2-3499-41c8-b746-072ed08a662e
- **Submitted:** May 15, 2026 at 12:15 PM PT
- **Expected window:** 24-48h (v1.0.1 was 1h45m)
- **Status:** Waiting for Review

### v1.0.2 Scope (in review)
- Tab bar reorder: Calculator → Compounds → Research → Codes (was Calculator → Compounds → Codes → Research)
- 3 peptides added: Cagrilintide, KPV, DSIP
- 4 supplements added: Apigenin, Glycine, Melatonin, Tart Cherry
- NEW category: Sleep & Recovery
- expo-store-review integration (in-app review prompt)
- Triggers: calculator-use count threshold (5) + code-copy count threshold (3), per-user-lifetime gating

### v1.0.2 What's New (live in ASC)
```
- New Sleep & Recovery category with Apigenin, Glycine, Melatonin, and Tart Cherry
- Added Cagrilintide (GLP-class peptide), KPV, and DSIP
- Reorganized tab bar: Calculator, Compounds, Research, Codes
- Updated discount codes and partner list
```

### Apple Developer Account State
- **Team:** Strength Cycle Studios, LLC (VCT64S7K6P)
- **ASC Provider:** 128764046
- **Account Holder:** MARK ANSON SHURTLIFF
- **D-U-N-S:** 144999413
- **Distribution Cert:** 7D7DE471C666DD26A99544B8D4A96B0A (expires Apr 9 2027)
- **Provisioning Profile:** 5YCDBB5VCY (expires Apr 9 2027)
- **Member renewal:** April 9, 2027

### ASC Metadata (v1.0.1, inherited to v1.0.2)
- **Bundle ID:** com.profpeptide.app
- **App Privacy:** Data Not Collected (verified)
- **Copyright:** "© 2026 Strength Cycle Studios, LLC."
- **Release Type:** Manually release this version
- **Encryption/IDFA/3rd-party content:** All NO
- **DSA Trader Status:** Non-Trader (app level)
- **App Review Contact:** Mark Shurtliff / 1-909-702-6765 / profpeptide@gmail.com
- **Org-level DSA contact:** admin@profpeptide.com, (703) 679-8402

---

## REJECTION HISTORY

### v1.0 (April 14, 2026) — Resolved
- **Citation:** Guideline 5.1.1(ix) Legal-Privacy-Data Collection (organization account required)
- **Cause:** Submitted under Mark's individual Apple Developer account; Apple required organization account for the product type
- **Resolution:** LLC formed (May 12), Apple Dev migrated to SCS LLC, resubmitted as v1.0.1 with vendor list updates
- **Important correction:** Citation was 5.1.1(ix), NOT 1.4.1 as previously documented in v3. No content concerns cited.

---

## REPO STATE

- **Path:** `~/Desktop/profpeptide-app`
- **Last commit:** 1.0.2 (Build 3 ship — committed in this session)
- **EAS Project ID:** 2c12b8e0-e1df-4504-b62a-7d3321b3d4be
- **Working tree:** Clean
- **Git email:** masbooksonebay@gmail.com (Vercel compat)

---

## SITE STATE

- **Path:** `~/Desktop/profpeptide`
- **Last commit:** /app page update for v1.0.1 launch
- **Deployed:** Vercel (auto-deployed on push, ~30s)
- **Live URL:** https://profpeptide.com/app

### /app page current state
- "Coming Soon" badge removed
- Apple "Download on the App Store" badge with working App Store link (hand-rolled SVG — official asset swap pending)
- Feature list synced to shipped v1.0.1: Full Peptide Library, Supplement Library, Dosage Calculator, Discount Codes, Research Hub, Private by Design
- Waitlist section removed (WaitlistForm component + /api/waitlist route deleted)
- Meta-description updated to iOS-only
- Footer consolidated to single "© 2026 Strength Cycle Studios, LLC." line
- Homepage iOS card updated: "Coming Soon — iOS App" → "Now on iOS"

### Pending site updates
- App Store badge swap to official Apple asset (drop-in replacement at `public/app-store-badge.svg`, no code change)
- Blend dosing content (next major workstream — see "Long-Term Backlog")

---

## PP MOBILE APP — SHIPPED FEATURES (v1.0.1 + v1.0.2 in review)

### Tabs (v1.0.2 order)
1. **Calculator** — peptide reconstitution math (BAC water volume + desired dose → mL to draw)
2. **Compounds** — peptide and supplement library, browseable by category
3. **Research** — peer-reviewed research summaries, links to profpeptide.com
4. **Codes** — vendor affiliate codes, one-tap copy to clipboard

### Compound Library Categories (v1.0.2)
**Peptides:**
- Metabolic & Weight Loss (GLP-class: Reta, Tirz, Sema, Cagri)
- Growth Hormone (Ipa, CJC-1295, Sermorelin, Tesamorelin, MK-677)
- Recovery & Tissue Repair (BPC-157, TB-500, GHK-Cu, KPV)
- Cognitive & Nootropic (Semax, Selank, DSIP, Epithalon)
- Other (PT-141, MOTS-c, IGF-1 LR3, Melanotan-II, AOD-9604, NAD+, Follistatin)

**Supplements:**
- Sleep & Recovery (NEW v1.0.2 — Apigenin, Ashwagandha, GABA, Glycine, L-Theanine, Magnesium, Melatonin, Phosphatidylserine, Tart Cherry, ZMA)
- Cognitive (subset)
- Recovery (subset)
- General nutrition (subset)
- Multi-tag categorization

### Mobile App Design Language
- App name on first screen only
- Default to Apple/iOS conventions (per SCS MP)
- Splash: PP logo on brand-color background, fades to home
- Tab bar: 4 tabs
- Detail view: native modal with "Learn More" → in-app Safari (expo-web-browser) to profpeptide.com
- Review prompt: SKStoreReviewController via expo-store-review, OS rate-limited 3/year, self-gated to once per user-lifetime

---

## VENDOR LIST (17 vendors, frozen v1.0.1)

Locked ordering in app's discounts.tsx:
1. Peptide Partners (Editor's Pick) — PROFPEPTIDE 10%
2. Ascension Peptides (Best Deal) — PROFPEPTIDE 50%
3. Almighty Peptides — PROFPEPTIDE 10%
4. Apollo Peptide Sciences — PROFPEPTIDE 15%
5. Behemoth Labz — PROF10 10%
6. BioCollex — PROFPEPTIDE 15%
7. EZ Peptides — PROFPEPTIDE 15%
8. Fusion Peptide — PROFPEPTIDE 15% (codes stack with BOGO, May 1)
9. Ignite Peptides — PROFPEPTIDE 10%
10. Integrative Peptides — PROFPEPTIDE 15%
11. Limitless Biotech — PROFPEPTIDE 15%
12. Oasis Labs — PROF15 15%
13. PureRawz — PROF10 10%
14. Royal Peptides — PROF10 10%
15. Spartan Peptides — PROFPEPTIDE 15%
16. Vital Core Research — PROFPEPTIDE 20%
17. Particle Peptides (UK) — PROFPEPTIDE 15%

**Code exceptions (non-default PROFPEPTIDE):**
- Behemoth Labz: PROF10
- PureRawz: PROF10
- Royal Peptides: PROF10
- Oasis Labs: PROF15

---

## REVENUE MODEL

- **Affiliate-only** (peptide vendor codes + Amazon affiliate links)
- **NO subscription, NO IAP** — neither in v1.0.x nor planned
- **Tier S/A/B/C affiliate attribution framework** active for ongoing audits

### Tier A — Coupon code only
Earnings credit when customer enters PROFPEPTIDE/PROF10/PROF15 at checkout. Most vendors.

### Tier B — Cookie only
Earnings only when customer arrives via affiliate link. Code provides discount but no commission.

### Tier C — Neither stacked
Limited or unclear attribution. Suspected: Oasis Labs.

### Live tracking
Google Drive sheet ID `1t4Q-5s3TzeFbrCXDqlu5Jj5u6DNK0`

### Attribution gap diagnosis
**TRIGGER:** vendor accumulates 100+ visits via affiliate link AND conversion rate (referrals/visits) below 1%.
**TEMPLATE:** 4-question diagnostic email — cookie firing? code attributing? referral mechanism? test order verification?

---

## ACTIVE WORKSTREAMS

### X Promotional Posts (Cycle 3, v3.0 template)
**LIVE TRACKER:** PP_X_POSTS_v14 (or later — Vital Core Cycle 3 #7 drafted May 13)
- v3.0 GLP-focused (Sema/Tirz/Reta + All-3) 4-post structure
- Post B paused
- Account assignments randomized per vendor day

### GSC URL Inspection Indexing
**LIVE TRACKER:** PP_INDEXING_v17
- Manual GSC submission primary mechanism
- ~11 successful submissions per rolling/daily window
- Default batch size: 20 URLs

### Affiliate Attribution Audits
Ongoing across 16-vendor portfolio. 5-vendor active audit log at any time.

### Content Velocity
Ongoing peptide/supplement profile additions to site.

### Backlinks (Track B)
Multi-channel reactive PR (HARO/SOS/Featured) — pivoted from Reddit-only May 3.

---

## LONG-TERM BACKLOG

### v1.0.3+ App Updates
- **Stack/Protocol content** — site-first additions (research protocols), then app sync
- **Review prompt threshold tuning** — adjust 5/3 thresholds based on actual usage data once v1.0.2 ships
- **App Store badge swap** — official Apple asset (drop-in replacement)
- **Apple Watch / iPad versions** (currently `supportsTablet: false`, no watch app)
- **Push notifications** — for new compound additions, vendor deals (future)

### Blend Content Expansion (NEW priority)
**Phase 1 — Site (next workstream):**
- New Blends category alongside Peptides and Supplements
- 15-25 blend profile pages with: components, common ratios, research protocols, framing as "research use only"
- Existing Wolverine stack/blend content as template structure reference
- Vendor cross-linking ("vendors selling this blend")
- High-priority blends to cover:
  - **Wolverine** (BPC-157 + TB-500) — existing template
  - **CJC-1295 + Ipamorelin** (GH stack, 5/5, 10/10, 5/10 ratios)
  - **BPC-157 + TB-500** variations
  - **Cagrisema** (Semaglutide + Cagrilintide)
  - **Selank + Semax** (cognitive)
  - **GHK-Cu + BPC-157** (recovery/skin)
  - **CJC-1295 DAC + Ipamorelin**
  - **MOTS-c + CJC/Ipa** (metabolic + GH)
  - **Sermorelin + Ipamorelin**
- Strong SEO opportunity (Reddit/vendor-blog dominated currently)

**Phase 2 — App (v1.0.3 or later):**
- Blends section in Compounds tab
- Blend-aware calculator mode (handles ratio math, user enters dose of one component, calculator outputs mL + amount of other component)
- Data sync from site
- Trademark consideration: "Wolverine" used colloquially in peptide industry, nominative fair use OK for content. Marketing/product branding would need trademark sanity check.

### White-Label Vendor Model (year+ out)
**Concept:** PP eventually as "Business B" — sourcing peptides from third-party manufacturer (Business A) with proper testing/COAs, selling under PP brand. Major business model shift from affiliate to direct sales.

**Prerequisites:**
- SC paying tier proven (revenue base for inventory)
- Affiliate revenue mature
- Payment processor that accepts research peptide vendors
- Banking, logistics, insurance
- Manufacturing partner vetted (GMP-equivalent practices, sterility lot testing, lyophilization quality, COA practices)

**Risks:**
- Positioning tension with current affiliate partners (they become competitors)
- Regulatory exposure jump (FDA, state regulations, customs)
- Trust/credibility shift (independent guide → vendor)

**Candidates for Business A** (current affiliate partners with known practices):
- Peptide Partners (Pirsek Technologies)
- Behemoth (Colmaric Analyticals)
- EZ Peptides (Janoshik)

### Other
- **Resend integration investigation** — what does Resend send? Why "Needs Attention" badge? Outcome: fix or remove RESEND_API_KEY
- **support@profpeptide.com Cloudflare routing** — currently disabled, admin@profpeptide.com is primary forwarding address

---

## THINGS TO NEVER DO

### Content
- **Never claim FDA approval** for peptides — most aren't FDA-approved for human use
- **Never recommend specific doses for human consumption** — all framing is "for educational purposes only" / "research use only"
- **Never make medical claims** — describe mechanism and research findings, not treatment recommendations
- **Never use Hyrox branding** — registered trademark; HR app uses this same constraint

### App / ASC
- **Never modify the discount codes data without explicit Mark approval** — frozen since v1.0.1
- **Never modify App Privacy declarations without re-verifying Data Not Collected** — could trigger Apple compliance issue
- **Never click "Release This Version" in CINC prompts** — Mark drives release timing manually
- **Never submit ASC changes without Mark's explicit "submit" confirmation** — CINC prompts must pause before Add for Review
- **Never instruct CC to capture sim screenshots** — Mark drives sim audit directly

### Vendor / Affiliate
- **Never violate Apple's affiliate disclosure rules** — codes must be disclosed in promotional contexts
- **Never recommend a vendor that's been removed** (e.g., Nordic Peptides removed v1.0.1)
- **Never default to PROFPEPTIDE code for the 4 exception vendors** — Behemoth/PureRawz/Royal use PROF10, Oasis uses PROF15

### Site
- **Never modify other pages when scope is /app or single-page change** — surgical edits only
- **Never modify peptides/supplements data files for cosmetic reasons** — they're the source of truth for the app sync

---

## PENDING IMMEDIATE (next session)

1. **Watch for Apple's v1.0.2 review email** (markshurtliff@gmail.com, 24-48h typical)
2. **On approval:** Mark clicks Release manually → v1.0.2 goes live globally within ~30-60 min
3. **On rejection:** Resolution Center under submission ID 9be29de2-3499-41c8-b746-072ed08a662e
4. **PP site blend content** — Phase 1 prompt ready to draft when Mark wants to start
5. **Track v1.0.2 first review trickle** — friends/family + organic in ASC Analytics

---

*End of PP MASTER v5 — May 15, 2026*
