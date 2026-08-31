# Hybrid Rockstar (HR) — Master Ref Doc

**Status:** ACTIVE REFERENCE — single-doc format
**Version:** v5 (May 22, 2026 evening) — LIVE on App Store + promotion strategy locked + Apple analytics threshold notes + Hyrox nominative fair use guide
**Cross-referenced in:** SCS_MP v6.3

---

## 📍 Status Snapshot (May 22, 2026 evening)

**APP STATE:** **v1.0.0 LIVE on App Store** (approved between v4 update and this session)

**APP STORE URL:** App ID `6762101905`

**ANALYTICS STATE:** "Not Enough Data" across all metrics in ASC Analytics overview — expected for first 24-48h post-launch + Apple's ~5-event privacy threshold not yet hit

**PROMOTION STATE:** Strategy locked this session, execution pending X account login clearance (blocked by laptop-level X bot detection) + other channels available immediately

**TRADEMARK CONSTRAINT:** "Hyrox" confirmed as registered trademark — **never appears in HR branding**. Nominative fair use guide established below.

---

## 📊 Apple Analytics Threshold Notes (NEW v5)

ASC Analytics has two reasons new-app data appears as "Not Enough Data":

1. **Processing delay** — App Store metrics typically lag 24-48h for new apps. Downloads, sessions, conversion rates all pipe through a batch system before surfacing in Analytics.
2. **Privacy threshold (~5 events)** — Apple aggregates data and suppresses any metric where event count is too low to anonymize. For a brand-new app with <5 downloads/sessions/etc., entire dashboards may show "Not Enough Data" indefinitely until threshold is crossed.

**Implication for promotion timing:** Waiting for analytics signal before promoting is circular — you can't know what organic looks like for a niche app with zero discovery surface. **For new niche apps, organic discovery is effectively zero. Start promoting at launch to feed the early-velocity ranking signal.** This applies to HR specifically (Hyrox training is a narrow vertical with no Apple-side discovery surface).

---

## 🎯 Promotion Strategy (NEW v5 — LOCKED)

### Channels list (priority order)

1. **UK Hyrox Facebook community groups** — largest concentration of active Hyrox athletes. Get admin permission before posting. Earn-first-post-second: participate authentically 1-2 weeks before promo post.
2. **r/Hyrox subreddit** — weekly self-promo threads exist; check Reddit rules before posting outside them. Engagement-from-creator posts (training tips, app demo) outperform pure ads.
3. **Hyrox-focused Discord servers** — community-driven, lower barrier than FB. Pin to relevant channels with mod approval.
4. **DM 10-15 Hyrox coaches on Instagram / TikTok** — micro-influencer outreach with free pro access in exchange for honest review. Skip if coach has <2K followers.
5. **Strava clubs focused on Hyrox prep** — passive promotion via training-log posts referencing the app.
6. **B2B affiliate-box / CrossFit gyms hosting Hyrox training** — gym-owner outreach with bulk-access pitch or co-branded program.
7. **ProductHunt launch** — schedule for Tue/Wed/Thu (highest visibility days). Prep maker profile + assets.
8. **Apple App Store Featured submission form** — niche apps with quality polish + targeted audience are good Featured candidates; submit via Apple Developer Featured submission portal.
9. **TestFlight beta cohort of 50-100 testers** — for v1.0.1 + future features; recruits also become first reviewers.
10. **profpeptide.com cross-promo banner** — modest but free; PP audience overlap with Hyrox training is non-zero (recovery peptides + endurance training).

### Nominative fair use language guide (Hyrox trademark)

**SAFE descriptive use** (referring to the events / format, not branding the product):
- "training app for Hyrox events"
- "Hyrox-format competition demands"
- "designed for athletes preparing for Hyrox"
- "12-week program for the Hyrox event"

**NOT SAFE** (implies endorsement, affiliation, or product branding):
- "the Hyrox app" (suggests official)
- "Hyrox-approved" / "Hyrox-endorsed"
- Hyrox logo, brand colors, or visual identity
- Domain/handle that includes "Hyrox" (e.g., hyrox-app.com)
- "Official Hyrox training" or similar phrases

**Mark's locked branding rule** ("Hyrox never appears in HR branding") covers PRODUCT branding — domain, app name, logo, marketing identity. Descriptive references in marketing copy under nominative fair use ARE allowed per attorney-recognized doctrine. Sprinkle them naturally rather than exhausting the lexicon in any single post.

### Earn-first-post-second principle (community forums)

For FB groups, subreddits, and Discord servers: participate authentically for 1-2 weeks before any promotional post. Comment on others' training questions, share your own training observations, build a recognized handle. Then a single launch post lands as "from a known community member" rather than "drive-by ad." Mods notice and don't ban. Members convert at multiples of cold-post conversion rates.

---

## 📦 Wave 3 Programming State (LOCKED — UNCHANGED THIS SESSION)

### Wave 3D v5 committed as `07c5146` (prior session)
- Phase 1-6 + 3 fixes
- leadingEdgeWeek algorithm
- COMPLETE predicate
- Up Next Option A walk-forward
- Race date is informational only; leadingEdgeWeek drives CURRENT in both race and no-race modes

### Three-card visual treatment (locked)
- CURRENT: blue accent, active
- COMPLETE: green checkmark (deliberate visual hierarchy — green = week-level on Train screen; blue = session-level on Week Detail screen)
- NEUTRAL: gray

### Wave 3E queued (post-launch v1.0.1)
- Splash screen bug fix (sim shows SC instead of HR on refresh)
- Transparent-bg fix
- expo-store-review prompt integration

### Wave 3F queued (achievements/badges system)
- First workout, first block, first cycle milestones
- 10/25/50 workout milestones
- 7-day streak badge

### v1.1 deferred
- Apple Health integration

---

## 🚀 v1.0.1 Prep Queue (post-launch operational items)

### Workstream 1: Cloudflare Email Routing
- Domain: hybridrockstar.app
- Email: feedback@hybridrockstar.app → markshurtliff@gmail.com
- Sets up real feedback channel from the in-app email link

### Workstream 2: In-app feedback email update
- Currently: `.shop` (legacy)
- Target: `.app` (correct domain)
- Single string swap in app config
- Ship as part of v1.0.1

### v1.0.1 scope summary
- Cloudflare Email Routing live
- Feedback email .shop → .app
- Wave 3E items (splash bug, transparent-bg, expo-store-review)
- Any bug fixes surfaced during initial user usage
- TestFlight → production submission via EAS

---

## 🛠️ Workflow Notes

### CINC App Store Connect pause discipline
- Mandatory pauses before submit + before "Release This Version" click
- Submission and verification must NOT be chained automatically
- CINC must NEVER click any "Release This Version" button — always Mark's call

### Organic review acceptance
- Friends/family reviews acceptable IF not coordinated, templated, or incentivized
- Sample reviews come in naturally as users discover the app

---

## 📅 Changelog

**May 22, 2026 (this session — v4 → v5):**
- ✅ **HR app LIVE on App Store** (approval landed between v4 and this session)
- ✅ **Promotion strategy locked** — 10 channels prioritized + nominative fair use guide + earn-first-post-second principle
- ✅ **Apple analytics threshold notes captured** — 24-48h processing + ~5-event privacy threshold explanation
- ✅ **Promotion timing principle locked:** "For new niche apps, organic discovery is effectively zero — start promoting at launch"
- ✅ **Nominative fair use guide for Hyrox trademark** — safe vs not-safe usage patterns

**Prior session entries:** unchanged. See v4 history.

---

## 🎯 Next Milestones (Sequential)

1. **Execute promotion strategy** — start with non-X channels (Reddit/Discord/FB groups with earn-first delay; ProductHunt prep)
2. **After X account access clears: PP audience cross-promo from PP accounts** (separate from @profpeptideapp launch announcement)
3. **App Store Featured submission** via Apple Developer Featured form
4. **TestFlight beta cohort recruitment** (50-100 testers) for v1.0.1 + future features
5. **Cloudflare Email Routing setup** for hybridrockstar.app
6. **v1.0.1 build** — .shop → .app email + feedback channel + Wave 3E items
7. **Wave 3F** — achievements/badges system

---

## 🔗 Cross-References

- **SCS_MP v6.3** — parent doc; HR sim handoff rules, EAS upload rule (working tree, not git history), X account multi-account-switching pattern
- **SC_MASTER_ACTIVE v5.9** — sibling iOS app reference (v1.0.4 in deploy queue)

---

*Active tracker for HR iOS app. Updated as review states change, waves ship, milestones complete.*
