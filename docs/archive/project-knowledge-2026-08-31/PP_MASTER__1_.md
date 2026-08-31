# Prof Peptide — Master Ref Doc

**Version:** v6 (May 19, 2026 evening)
**Status:** ACTIVE — single doc structure for PP website + companion app combined
**Source:** Updated from v5 baseline; supersedes v4.4 spec → v4.4+ refined conventions
**Cross-referenced in:** SCS_MP v6.1, PP_X_POSTS v16, PP_INDEXING v18, PP_COMMISSIONS v1

---

## v5 → v6 CHANGELOG

**Recent commits shipped this session:**
- ✅ **GH Stack v4.4 alignment patch** — commit `30445bc` (May 19) — 6/8 patches applied (overview cross-link, reference tables for timing 6×2 + recon 3×7, redundant prose removal, where-to-source 2-vendor VendorHighlightBlock, Comparisons card with 1 link, JsonLd verified present)
- ✅ **PageDisclaimer Amazon Associate cleanup** — commit `538f4bb` (May 19) — portfolio-wide via shared component; new text "We may earn commissions from peptide vendor affiliate links."; CC's "also" reflow catch preserved grammar

**Convention refinements (v4.4 → v4.4+):**
- 🆕 **PageDisclaimer no longer references Amazon Associate program** — old text "As an Amazon Associate, Prof. Peptide earns from qualifying purchases" REMOVED portfolio-wide; replaced with vendor-affiliate-only sentence
- 🆕 **VendorHighlightBlock convention clarified** — GLP standard = 3-vendor (PP/Ascension/VCR); non-GLP follows actual `peptide-vendors.json` carriage (can be 2 or 3 vendors depending on carriage). GH Stack shipped with 2-vendor block (PP + Spartan only) — Ascension and VCR don't carry GH Stack.
- 🆕 **Vercel deploy edge-cache lag pattern** — post-deploy, canonical URLs may serve stale HTML for ~30-60 seconds. Cache-buster URLs (`?v=N`) are always fresh. Verification pattern: poll canonical URL until refresh, then confirm with grep.

**Vendor additions in flight:**
- 🟡 **Glacier Aminos #18** — affiliate dashboard verified (glacieraminos.goaffpro.com); ref code `cknlhxrm`; coupon code `prof10` (10% off, fallback PROF10 — Glacier accepted fallback, not the higher PROFPEPTIDE @ 15% open ask); v3.0/v3.2 vendor (all 3 GLPs publicly accessible); CC prompt drafted for coupons page addition; not yet shipped

---

## 📍 Status Snapshot (May 19, 2026 evening)

| Component | State |
|---|---|
| Site | profpeptide.com (Vercel, Next.js, auto-deploy from `main`) |
| Repo | `~/Desktop/profpeptide` |
| Peptide pages | 32 live |
| Active X accounts | 4 (PP / PREM / PEAK / CORE) |
| Active vendor count | 17 (Glacier #18 in flight) |
| Companion app | v1.0.1 LIVE on App Store; v1.0.2 in Apple Review |
| Content template version | v4.4+ (post-cleanup; supersedes v4.3 / v4.2) |

---

## 🎯 Strategic Position (UNCHANGED from v5)

**PP = peptide research/education content + affiliate revenue model.**
- 32 peptide pages, 4 X account network, monthly post cycles, ongoing vendor pipeline
- Currently operating in **SYSTEMATIZE MODE** (locked SCS_MP v6) — 1-2 new pages/month + monthly X cycles + ~5-8 hrs/week maintenance
- NOT abandonment — preserves 12-18 month compounding SEO value
- Reviewable: increase/decrease cadence based on White Label (Capstone) time demand

**Separation from White Label / Capstone Peptides — STRICT.** No shared customer data, no overlapping vendor relationships (Royal Wholesale is both PP affiliate AND Capstone Tier 1 partner candidate — this is one of the explicit conflicts to manage), no shared brand identity. PP is content + affiliate; Capstone is merchant-of-record.

---

## 📝 v4.4+ Content Template Spec (REFINED)

### Canonical section heading set (14 sections)
From "What is [Peptide]?" through "Published Studies". Question-format H2s used identically in TOC and on-page headings.

### Format conventions (locked)
- Plain-language intro paragraphs on most sections
- Metadata block: Also Known As / Peptide Class / Regulatory Status (NO Half-Life)
- Last reviewed date near H1
- Bold lead-ins (bold-then-period pattern)
- Increased internal cross-linking density
- Reference tables in #how-to-take section: timing 6×2 + recon 3×7 combined (Option B from GH Stack work)

### Locked labels
- **"Reported benefits:"** for overview bullets
- **"Common research dose:"** for dose numbers

### PageDisclaimer (v4.4+ update)
Shared component renders: **"We may earn commissions from peptide vendor affiliate links."**
- No Amazon Associate text (removed commit 538f4bb)
- Single sentence, no "also" (CC catch — grammar preserved after Amazon sentence removed)
- Applies portfolio-wide (peptide profiles + guide pages)

### VendorHighlightBlock placement
- **GLP profiles** (Semaglutide, Tirzepatide, Retatrutide) — 3-vendor lineup standard (PP/Ascension/VCR; +Royal for some)
- **Non-GLP profiles** — follow actual `peptide-vendors.json` carriage; can be 2-vendor or 3-vendor depending on which vendors carry the peptide
- **Stack pages** — use VendorHighlightBlock for vendors carrying the named stack as a product (GH Stack: PP + Spartan only)
- **NEVER pad with vendors who don't carry the product** — accurate carriage trumps standardized count

### Italic spec annotations
Italic `*(mechanism of action)*` shorthand in spec docs is EDITORIAL ANNOTATION describing what a section should contain, NEVER literal page content. CC must interpret as guidance.

---

## 🔄 Active Workstreams

### Site (profpeptide.com)
- ✅ GH Stack v4.4 alignment patch shipped (`30445bc`)
- ✅ PageDisclaimer Amazon Associate cleanup shipped portfolio-wide (`538f4bb`)
- 🟡 Glacier Aminos coupons page addition — CC prompt drafted, awaiting fire
- 🔜 Post-Glacier: propagate Glacier into individual peptide profile pages via VendorHighlightBlock (separate workstream when ready)

### X Posts (Cycle 3 in progress)
- See PP_X_POSTS v16 for current cycle state and post template details
- Glacier Aminos v3.2 4-post variant queued for after coupon code lands publicly on coupons page

### Companion app (PP iOS)
- v1.0.1 LIVE on App Store
- v1.0.2 in Apple Review (submitted earlier session — tab reorder + Sleep & Recovery category + in-app review prompt)

---

## 📈 Vendor #18 Glacier Aminos — Pre-Launch State

| Field | Value |
|---|---|
| Name | Glacier Aminos |
| Affiliate URL | `https://glacieraminos.shop/?ref=cknlhxrm` |
| Coupon code | `prof10` (display PROF10) — 10% off |
| Commission rate | 10% |
| Affiliate dashboard | glacieraminos.goaffpro.com |
| Domicile | US (verified — USD format, US lab testing, no Estonia/Slovakia tells) |
| Catalog scope | v3.0/v3.2 (all 3 GLPs publicly accessible) |
| GLP catalog | Sema 15mg, Tirz 10/20/30/60mg, Reta 8-60mg, Cag 10mg, GLP3/CAGRI 20/4mg combo, GLP2.5-T/R 18mg hybrid, KLOW 80 (exclusive) |
| Non-GLP catalog | BPC-157, TB-500, GHK-Cu, CJC/IPA, Wolverine, Epithalon, FOXO4-DRI, 5-Amino-1MQ, AOD-9604, DSIP, Glutathione, Cartalax |
| Testing claim | 7-step protocol (caveat: 3 visible categories — identity/mass/endotoxins) |
| Coupon strategy | Open ask PROFPEPTIDE @ 15% was DECLINED; PROF10 @ 10% accepted as fallback |
| Reta pricing | Lowest tracked in vendor pool (~$62.99/10mg) |

**Open question:** ask Glacier to upgrade to PROFPEPTIDE @ 15%? Their initial response declined, but a re-ask after demonstrating PP referral traffic is a possible next step.

---

## 🛠️ Workflow Patterns (Refined this session)

### Vercel edge-cache lag verification
After `git push` triggers Vercel auto-deploy (~60-90s), curl-verify the **canonical URL** (without cache-buster) with grep for the expected change. Vercel's edge cache occasionally serves stale HTML for ~30-60 seconds on canonical URLs post-deploy. Cache-buster URLs (`?v=N`) are always fresh but don't verify the user-facing canonical path. Pattern adopted from PageDisclaimer cleanup verification.

### PP commit + push workflow
CC handles BOTH `git commit` AND `git push origin main` in single operation when Mark gives commit instruction. Vercel auto-deploys (~60-90s) from main. Audit on profpeptide.com with cache-bust query strings. NOT autonomous — still requires Mark instruction.

### Site fetch rule (existing pages)
Always use `web_fetch` to open profpeptide.com live pages directly before writing any CC prompt touching an existing page. Append a fresh unique query string (`?v=N`, `?audit=N`) — never reuse a prior query string. Mark's browser is authoritative.

---

## ❌ Things to Never Do

### Content
- **Never default to PROFPEPTIDE code for PureRawz / Behemoth Labz / Oasis Labs / Royal Peptides / Glacier Aminos.** Exception codes apply per existing code map.
- **Never include the old Amazon Associate disclaimer** — removed portfolio-wide commit 538f4bb
- **Never pad VendorHighlightBlock with vendors who don't carry the product** — accurate carriage trumps standardized count
- **Never modify pages outside scope of a single-page change**
- **Never push commits without Mark's approval** — CC pushes ARE allowed within single-instruction operations now, but always after Mark says commit

### App
- **Never modify App Privacy declarations without re-verifying Data Not Collected**
- **Never click "Release This Version"** — release timing is Mark's call

### Workflow
- **Never auto-update ref docs mid-session** — propose + queue for end-of-session
- **Never re-use a prior query string when fetching profpeptide.com** — always fresh unique string

---

## 📅 Changelog

**May 19, 2026 evening (this session):**
- ✅ GH Stack v4.4 alignment patch shipped (`30445bc`)
- ✅ PageDisclaimer Amazon Associate cleanup shipped portfolio-wide (`538f4bb`)
- ✅ Glacier Aminos vendor research complete; coupon code locked (prof10 @ 10%); CC prompt drafted
- ✅ VendorHighlightBlock convention clarified (GLP = 3-vendor standard; non-GLP = follow peptide-vendors.json actual carriage)
- ✅ Vercel edge-cache lag verification pattern locked
- ✅ Reference tables (timing 6×2 + recon 3×7 combined) locked as v4.4+ canonical

**May 16, 2026:**
- v4.4 content template superseded v4.3 (see SCS_MP v6)
- Blend Wave 2 committed (Wolverine v4.4 rewrite, GH Stack v4.4 rewrite with CJC-DAC distinction, Semax + Selank, index gap-fix 29 → 32)

**Earlier history:** see PP_MASTER v5.

---

## 🔗 Cross-References

- **SCS_MP v6.1** — parent doc, three-lane portfolio architecture
- **PP_X_POSTS v16** — X promotional posts workstream (vendor cycle state, template versions)
- **PP_INDEXING v18** — sitemap + GSC indexing state
- **PP_COMMISSIONS v1** — affiliate commission tracker
- **WL_MASTER_ACTIVE v1.3** — Capstone Peptides (separate entity; strict separation from PP)

---

*Active master ref doc for Prof Peptide website + companion app. v4.4+ conventions locked. Glacier Aminos vendor onboarding in flight.*
