# Prof Peptide (PP) — Master Ref Doc

**Status:** ACTIVE REFERENCE — single-doc format (no frozen/active split)
**Version:** v8 (May 22, 2026 evening) — @profpeptideapp launch announcement + EZ Peptides Memorial Day cycle addition
**Cross-referenced in:** SCS_MP v6.3
**Domain:** profpeptide.com
**Repo:** ~/Desktop/profpeptide (Next.js, Vercel auto-deploy from main)

---

## 📍 Status Snapshot (May 22, 2026 evening)

**SITE STATE:** Operating cleanly under v4.4 template spec (supersedes v4.3)

**APP STATE (Prof Peptide iOS):**
- v1.0.1 LIVE on App Store (May 13, 2026)
- v1.0.2 was submitted May 15 (24-48h expected review window); status to be verified in ASC by Mark
- App Store URL: https://apps.apple.com/app/prof-peptide/id6761995269

**X PRESENCE:**
- **@profpeptideapp** — app's dedicated X account; launch announcement post drafted this session, fire from iPad-cellular pending
- PP / PREM / PEAK / CORE — promotional accounts firing Memorial Day cycle posts

**MEMORIAL DAY CYCLE EXPANSION:**
- Fusion BOGO + VCR sitewide already fired (prior session)
- **EZ Peptides 20%/15% added this session** — Sat-Mon 05/23-05/25 window

---

## 📱 @profpeptideapp Launch Announcement (NEW v8)

### Post text (paste-ready, ~183 chars)

```
Prof Peptide is now live on the App Store.

• Dosage Calculator
• Peptide & Supplement Library
• Research Hub
• Discount Codes

https://apps.apple.com/app/prof-peptide/id6761995269
```

### Post-fire actions
1. **Pin post to @profpeptideapp profile** — keeps launch announcement at top of timeline
2. **Update @profpeptideapp bio** to include App Store URL if not already present
3. **Style:** PP brand voice (no emoji per v3.0 conventions); canonical feature names from /app page
4. **Account separation:** @profpeptideapp is the APP's dedicated account, separate from PP/PREM/PEAK/CORE promotional accounts

### Optional variants for future use
- Shorter opener: "Now live on the App Store." (more "we just shipped" energy)
- Closing line: "Free, no signup." (PP is affiliate-only revenue, no IAP, no account creation — real differentiator)
- Platform explicit: "iOS App Store" instead of "App Store" if clarity matters

---

## 🏗️ Site Architecture Insight (unchanged from v7)

### vendors.ts is the canonical source for vendor codes

`src/data/vendors.ts` holds the single source of truth for vendor metadata (code, URL, discount %, region, editorsPick, detailPage flag). The `VendorHighlightBlock` component resolves `vendors[slug].code` at render time, so any peptide profile page that uses `VendorHighlightBlock` for a vendor automatically reflects the latest code from `vendors.ts`.

**Single-edit propagation pattern:**

When updating a vendor's code, **only these files need direct edits:**
- `src/data/vendors.ts` — canonical source
- `src/app/coupons/page.tsx` — coupons card display
- `src/app/coupons/[vendor-slug]/page.tsx` — detail page (CodeBox + FAQ + body copy)
- `src/app/coupons/[vendor-slug]/layout.tsx` — metadata description + JSON-LD Offer description
- `src/app/best-peptide-vendors/page.tsx` — listing page if vendor is featured there

**Files that do NOT need direct edits** (inherit from vendors.ts via VendorHighlightBlock):
- All peptide profile pages (`/peptides/[peptide]/page.tsx`)
- `src/data/peptide-vendors.json` — carries `{slug: ...}` only

---

## 🤝 Vendor Code Map (Current State)

### Default code: `PROFPEPTIDE`
Used by most affiliate vendors as the standard PP code.

### Exception codes (vendor-specific):
| Vendor | Code | Discount | Notes |
|---|---|---|---|
| Royal Peptides | `PROF10` | 10% off | Vendor-specific exception |
| Glacier Aminos | `PROF10` | 10% off | Vendor-specific exception |
| Vital Core Research | `PROF20` | 20% off | Swapped from PROFPEPTIDE in v7 |

### Code source of truth
- For codes on `/coupons/[vendor]` detail pages: hardcoded per vendor file
- For codes on peptide profile pages (VendorHighlightBlock): `src/data/vendors.ts`
- For codes in JSON-LD metadata: hardcoded per vendor `layout.tsx`
- For codes in X posts: per PP_X_POSTS exception map (sync with this doc)

---

## 📣 Memorial Day Promo Cycle (UPDATED v8)

### Active promotions

**Fusion Peptide — BOGO sale** (prior session — fired):
- Window: 05/20-05/26 at 9AM CST
- All 3 GLPs in stock + BOGO + 15% off stack with PROFPEPTIDE
- X posts fired: PP/PREM/PEAK/CORE accounts

**Vital Core Research — Memorial Day sitewide** (prior session — fired):
- Window: 05/20-05/26 at 9AM CST
- 25% off sitewide + PROF20 stack → 45% off total order (additive stack math)
- X posts fired: PP/PREM/PEAK/CORE accounts

**EZ Peptides — Memorial Day Sale (NEW v8 — partial fire this session):**
- Window: Saturday 05/23 — Monday 05/25 at midnight
- 20% off all single vials, 15% off all kits
- PROFPEPTIDE (10%) stacks on top → net 30% vials / 25% kits
- Vendor pattern: two-tier discount (vials vs kits) — different from VCR's single sitewide rate; preserves both rates in post wording rather than collapsing to a single "up to 30%" framing
- Source: EZP affiliate email to markshurtliff@gmail.com
- Post fire status: **PP-only from iPad-cellular this session** (laptop X login blocked); PREM/PEAK/CORE pending laptop X clearance (24-48h cooldown)
- Optional Sun/Mon recapture variant drafted (see PP_X_POSTS v18)

### Vendor pattern notes
- Fusion + VCR are both Heather Hendrix portfolio brands running parallel campaigns
- EZ Peptides is independent of Heather Hendrix — separate vendor relationship
- All three vendors using "PROFPEPTIDE stacks on top" mechanic (additive stack math at checkout)

---

## 🔒 v4.4 Template Spec (LOCKED)

[Unchanged — see v7 for full spec]

Key conventions:
- Question-format H2s used identically in TOC and on-page headings
- Plain-language intro paragraphs on most sections
- Metadata block: Also Known As / Peptide Class / Regulatory Status (NO Half-Life)
- Last reviewed date near H1
- Bold lead-ins (bold-then-period pattern)
- Increased internal cross-linking density
- "Reported benefits:" for overview bullets
- "Common research dose:" for dose numbers

Canonical section heading set (14 sections): What is, How does, Reported benefits, Typical research dose, Reported side effects, Where to buy, Stacks and blends, FAQ, Comparison to related compound, Storage and Handling, Half-Life and Bioavailability, Legal and Regulatory Status, Research Citations, Published Studies.

---

## 🛠️ Workflow Lessons Captured This Session

### Two-tier vendor sale framing preserves accuracy
When a vendor runs different discount tiers (e.g., EZ Peptides 20% vials vs 15% kits), preserve both rates in post wording rather than compressing to a single "up to N%" max framing. The latter is technically accurate but misleads on the lower-tier product. Compression works only when sale = single sitewide rate (like VCR's 25%).

### Sale window precision matters less than mechanic clarity
EZ Peptides email used "Saturday-Monday at midnight" (ambiguous start/end times) vs Fusion/VCR using "9AM CST" specific times. Post can say "starts 05/23 and runs through 05/25" without specific time — buyers care about which days more than which hour. Don't fabricate a precision the source didn't provide.

### Account separation for app-specific announcements
@profpeptideapp launches go on @profpeptideapp, NOT PP/PREM/PEAK/CORE promo accounts. Mixing app announcements into promo-account streams dilutes both. Promo accounts = vendor cycles. App account = app news.

---

## 📅 Changelog

**May 22, 2026 (this session — v7 → v8):**
- ✅ **@profpeptideapp launch announcement post drafted** (paste-ready ~183 chars; fire from iPad-cellular pending)
- ✅ **EZ Peptides Memorial Day cycle added** — 20% vials / 15% kits, 05/23-05/25, PROFPEPTIDE stacks
- ✅ **Two-tier sale framing pattern captured** — preserve both rates rather than collapse to max
- ✅ **Account-separation principle captured:** @profpeptideapp = app account; PP/PREM/PEAK/CORE = promo accounts

**Prior session entries:** unchanged. See v7 history (Glacier vendor lifecycle, VCR code swap, vendors.ts architecture insight).

---

## 🎯 Next Milestones

1. **Fire @profpeptideapp launch announcement** from iPad-cellular; pin to profile; update bio
2. **Fire EZ Peptides Memorial Day post from PP** (iPad-cellular)
3. **After X laptop access clears (24-48h cooldown):** fire EZ Peptides Memorial Day on PREM/PEAK/CORE
4. **Optional EZ Peptides Sun/Mon recapture variant** if engagement on first post warrants
5. **Reply to EZP** if visual assets (banners, swipe copy) wanted for future cycles
6. **Verify PP iOS v1.0.2 review status** in ASC
7. **Glacier propagation to peptide profile pages** (carried from v7) — edit each profile page's vendor list to include Glacier slug
8. **Blend/stack content Phase 1** — ~15-25 blend profiles using Wolverine v4.4 as template (long-term workstream)
9. **Blend-aware calculator in app v1.0.3+** (long-term)

---

## 🔗 Cross-References

- **SCS_MP v6.3** — parent doc; vendor verification rules, site fetch rule, X account multi-account-switching pattern
- **PP_X_POSTS v18** — promotional post conventions + vendor code exception map (SYNC with this doc's exception map) + EZ Peptides Memorial Day post + X lockout diagnostic
- **PP_INDEXING v18** — sitemap + indexing state
- **PP_COMMISSIONS** — affiliate revenue tracking

---

*PP master ref doc. Updated as vendor lifecycle stages complete, promotional cycles fire, architecture patterns get codified.*
