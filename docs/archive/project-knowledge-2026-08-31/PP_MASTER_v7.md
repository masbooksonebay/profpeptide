# Prof Peptide (PP) — Master Ref Doc

**Status:** ACTIVE REFERENCE — single-doc format (no frozen/active split)
**Version:** v7 (May 20, 2026 evening) — Glacier full vendor lifecycle + VCR code swap + vendors.ts architecture insight + memorial day promo cycle
**Cross-referenced in:** SCS_MP v6.2
**Domain:** profpeptide.com
**Repo:** ~/Desktop/profpeptide (Next.js, Vercel auto-deploy from main)

---

## 📍 Status Snapshot (May 20, 2026 evening)

**SITE STATE:** Operating cleanly under v4.4 template spec (supersedes v4.3)

**THIS SESSION'S MAJOR CHANGES:**
- ✅ Glacier Aminos full vendor lifecycle complete (coupons card + detail page shipped)
- ✅ VCR vendor code swap (PROFPEPTIDE → PROF20) across all PP surfaces
- ✅ Architecture insight: `src/data/vendors.ts` is canonical source consumed by `VendorHighlightBlock` — single-edit propagation pattern
- ✅ Memorial Day promo cycle live across Fusion + VCR (both Heather Hendrix brands)

**APP STATE (Prof Peptide iOS):**
- v1.0.2 in Apple Review (submitted prior session; status unchanged this session)
- Scope: tab reorder, compound parity additions (Sleep & Recovery), expo-store-review prompt

---

## 🏗️ Site Architecture Insight (NEW v7)

### vendors.ts is the canonical source for vendor codes

`src/data/vendors.ts` holds the single source of truth for vendor metadata (code, URL, discount %, region, editorsPick, detailPage flag). The `VendorHighlightBlock` component resolves `vendors[slug].code` at render time, so any peptide profile page that uses `VendorHighlightBlock` for a vendor automatically reflects the latest code from `vendors.ts`.

**Single-edit propagation pattern (verified via VCR PROF20 swap):**

When updating a vendor's code, **only these files need direct edits:**
- `src/data/vendors.ts` — canonical source
- `src/app/coupons/page.tsx` — coupons card display
- `src/app/coupons/[vendor-slug]/page.tsx` — detail page (CodeBox + FAQ + body copy)
- `src/app/coupons/[vendor-slug]/layout.tsx` — metadata description + JSON-LD Offer description
- `src/app/best-peptide-vendors/page.tsx` — listing page if vendor is featured there

**Files that do NOT need direct edits** (inherit from vendors.ts via VendorHighlightBlock):
- All peptide profile pages (`/peptides/[peptide]/page.tsx`) — VendorHighlightBlock resolves the code dynamically
- `src/data/peptide-vendors.json` — carries `{slug: ...}` only, no code field

**Verified scope test (VCR PROF20 commit `c950b60`):** 5 files modified, 8 lines changed; 13 PROFPEPTIDE strings remaining in rendered HTML all confirmed as other vendors' codes (correctly untouched).

This pattern applies to ALL vendor code changes going forward — minimum-touch surgical edits, audit by grepping for old code + grepping for new code post-deploy.

---

## 🤝 Vendor Code Map (Current State)

### Default code: `PROFPEPTIDE`
Used by most affiliate vendors as the standard PP code.

### Exception codes (vendor-specific):
| Vendor | Code | Discount | Notes |
|---|---|---|---|
| Royal Peptides | `PROF10` | 10% off | Vendor-specific exception |
| Glacier Aminos | `PROF10` | 10% off | Vendor-specific exception |
| **Vital Core Research** | **`PROF20`** | **20% off** | **NEW v7 — swapped from PROFPEPTIDE this session** |

### Code source of truth
- For codes on `/coupons/[vendor]` detail pages: hardcoded per vendor file
- For codes on peptide profile pages (VendorHighlightBlock): `src/data/vendors.ts`
- For codes in JSON-LD metadata: hardcoded per vendor `layout.tsx`
- For codes in X posts: per PP_X_POSTS exception map (sync with this doc)

---

## 📦 Glacier Aminos Vendor Lifecycle Complete (NEW v7)

### Stages shipped:
1. ✅ **Vendor added to vendors.ts + peptide-vendors.json** (prior session)
2. ✅ **Coupons card** (commit `7765e5b`) — added as 3rd Featured Vendor card
   - 3 visible deviations from peers: no hover-link on name, no "Learn More →", lighter `border-gray-100`
3. ✅ **Detail page** (this session) — full vendor page at `/coupons/glacier-aminos`
   - Code: PROF10
   - Affiliate URL: https://glacieraminos.shop/?ref=cknlhxrm
4. 🔜 **Propagation to peptide profile pages** via VendorHighlightBlock (separate workstream)
   - Targets: BPC-157, TB-500, GHK-Cu, Wolverine, all 3 GLPs (Sema/Tirz/Reta), Cagrilintide, others
   - Strategy: edit each peptide profile page's vendor list to include Glacier slug; VendorHighlightBlock will resolve code from vendors.ts

---

## 📣 Memorial Day Promo Cycle (NEW v7)

### Active promotions (05/20-05/26 at 9AM CST)

**Fusion Peptide — BOGO sale:**
- All 3 GLPs in stock (Sema, Tirz, Reta)
- BOGO sale + 15% off stack with PROFPEPTIDE
- X posts fired this session: PP/PREM/PEAK/CORE accounts

**Vital Core Research — Memorial Day sitewide:**
- 25% off sitewide
- Stack with PROF20 → 45% off total order (additive stack math)
- X posts fired this session: PP/PREM/PEAK/CORE accounts

**Vendor pattern:** Both brands are Heather Hendrix's affiliate portfolio running parallel Memorial Day promotions. Same window, different mechanic. Worth catching both while the window's open.

### Optional mid-sale recapture variants (Sat/Sun timing)
Drafted-but-not-fired ending-soon variants for both Fusion + VCR. Catches weekend research-buy crowd before Monday close. Mark's call whether to fire.

---

## 🔒 v4.4 Template Spec (LOCKED)

Locked prior session. v4.4 supersedes v4.3. Key conventions:
- Question-format H2s used identically in TOC and on-page headings
- Plain-language intro paragraphs on most sections
- Metadata block: Also Known As / Peptide Class / Regulatory Status (NO Half-Life)
- Last reviewed date near H1
- Bold lead-ins (bold-then-period pattern)
- Increased internal cross-linking density
- "Reported benefits:" for overview bullets
- "Common research dose:" for dose numbers

Canonical section heading set (14 sections):
1. What is [Peptide]?
2. How does [Peptide] work?
3. What are the reported benefits of [Peptide]?
4. What is the typical research dose of [Peptide]?
5. What are the reported side effects of [Peptide]?
6. Where to buy [Peptide]
7. [Peptide] stacks and blends
8. Frequently Asked Questions
9. [Peptide] vs [related compound]
10. Storage and Handling
11. Half-Life and Bioavailability
12. Legal and Regulatory Status
13. Research Citations
14. Published Studies

---

## 🛠️ Workflow Lessons Captured This Session

### Site fetch rule applied successfully
Used `web_fetch` to confirm live state of profpeptide.com before each CC prompt touching existing pages. Appended fresh unique query strings (`?v=2`, `?audit=N`) to force fresh fetch. Worked consistently.

### CC architecture-insight surfacing
CC's VCR audit surfaced the vendors.ts canonical-source pattern explicitly in its report ("the single vendors.ts change cleanly propagating to all peptide profile pages via VendorHighlightBlock is the intended architecture — no per-page edits were needed for the profile pages"). This is the kind of insight that should be captured in this ref doc, not just in commit messages.

### Sitemap regeneration discipline
CC reverted next-sitemap regeneration on the VCR commit to keep the diff strictly scoped (Vercel regenerates on its own build). Right call — sitemap churn shouldn't pollute content commits.

---

## 📅 Changelog

**May 20, 2026 (this session — v6 → v7):**
- ✅ **Glacier coupons card shipped** (commit `7765e5b`)
- ✅ **Glacier detail page shipped** (this session — commit hash captured in repo)
- ✅ **VCR code swap shipped** (commit `c950b60`) — PROFPEPTIDE → PROF20 across 5 files / 8 lines
- ✅ **Architecture insight captured:** vendors.ts canonical-source pattern documented
- ✅ **Fusion BOGO X posts fired** across PP/PREM/PEAK/CORE
- ✅ **VCR Memorial Day X posts fired** across PP/PREM/PEAK/CORE
- ✅ **Vendor code exception map updated:** VCR added to exception group (alongside Royal/Glacier)

**Prior session entries:** unchanged. See v6 history.

---

## 🎯 Next Milestones

1. **Glacier propagation to peptide profile pages** — edit each profile page's vendor list to include Glacier slug; VendorHighlightBlock resolves code from vendors.ts
2. **Mid-sale recapture variants** (optional) — Fusion + VCR Sat/Sun posts
3. **App v1.0.2 Apple Review** — monitor, ship to TestFlight if approved
4. **Blend/stack content Phase 1** — ~15-25 blend profiles using Wolverine v4.4 as template (long-term workstream)
5. **Blend-aware calculator in app v1.0.3+** (long-term)

---

## 🔗 Cross-References

- **SCS_MP v6.2** — parent doc; vendor verification rules, site fetch rule
- **PP_X_POSTS v17** — promotional post conventions + vendor code exception map (SYNC with this doc's exception map)
- **PP_INDEXING v18** — sitemap + indexing state
- **PP_COMMISSIONS** — affiliate revenue tracking

---

*PP master ref doc. Updated as vendor lifecycle stages complete, promotional cycles fire, architecture patterns get codified.*
