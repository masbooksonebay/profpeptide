# HR MASTER REFERENCE DOC v2

**Status:** ACTIVE REFERENCE — single source of truth for Hybrid Rockstar workstream
**Version:** v2 (May 15, 2026)
**Source:** Updated from HR_MASTER baseline + HR_MASTER_updates_May11 — incorporates Wave 3D v2/v3/v4 evolution
**Cross-referenced in:** SCS MP

---

## v1 → v2 CHANGELOG

**Major events this period:**
- ✅ **Wave 3C.1** onboarding shipped (committed) — 6 screens, atomic format+tier writes, welcome polish, transparent app icon, custom mm:ss pace picker, "Coach Rob" → "your coach" / "us"
- ✅ **Wave 3C.2** notifications + tier explainer shipped (committed 627dc09) — Option D week-progress-aware notification body, 5 hook points, tier explainer card with persistent info icon
- 🟡 **Wave 3D Train tab redesign** implemented through v4 — UNCOMMITTED
  - v1: PagerView replaced with consolidated scrolling /train, Up Next, expandable blocks
  - v2: Removed BlockFlowIndicator, deleted "HR CYCLE 1 · V3.2" eyebrow, blanked nav header on session detail, simplified eyebrow to "DAY 1"
  - v3: Attempted premium two-line header (REJECTED — too cluttered + Hyrox trademark concern)
  - v4: Status card with phase name + week counter + 12 block-colored progress dots + conditional race countdown. Hyrox branding removed. Adaptive progression model (race vs self-paced). Foundation auto-expand fix.
- 🟡 **"Wk → Week" comprehensive audit** in flight — CC paused at Phase 1 discovery awaiting Mark's confirmation
- ✅ **Tier durations corrected:** FullRox sub-60min, HalfRox ~30min (was previously documented as 90/60)
- ✅ **Rox terminology rename committed** (b8c7aaa) — quick_rox → half_rox, "Quick Rox" → "HalfRox", "Full Rox" → "FullRox"

---

## CURRENT APP STATE (May 15, 2026)

### App Identifiers
- **Bundle ID:** com.hybridrockstar.app
- **ASC App ID:** 6762101905
- **Repo:** `~/Desktop/hybrid-rockstar`
- **Team:** Strength Cycle Studios, LLC (VCT64S7K6P) — app-level migration TBD
- **Metro port:** 8081 (dev)

### Launch Status
- **NOT YET LAUNCHED** on App Store
- Currently running in Expo Go on dev sim
- Pre-launch polish in progress (Wave 3D + 3E)
- App-level migration to SCS LLC team pending before first submission

### Working Tree State
- **DIRTY** — Wave 3D v2 + revisions + v4 uncommitted
- Last commit: 627dc09 (Wave 3C.2 notifications + tier explainer)
- 4 commits ahead of origin/main (Rox rename + 3C.1 + 3C.2 + unstaged v3D work)
- **NOT YET PUSHED**

---

## WAVE 3D — TRAIN TAB REDESIGN (current focus)

### Final Design Locked (v4)

**Top of /train (status card):**
```
┌─────────────────────────────────────────────┐
│ Foundation                  Week 1 of 12    │
│ ●●●○○○○○○○○○                                │
│ Race Day in 78 days                         │
└─────────────────────────────────────────────┘
```
- **Phase name** in left, BLOCK_ACCENTS accent color (green/blue/orange/red)
- **Week counter** right-aligned, "Week N of 12"
- **12 progress dots** color-coded by block (3 green Foundation, 3 blue Build, 4 orange Peak, 2 red Race Prep)
  - Past weeks: filled, opacity ~0.6
  - Current week: filled, opacity 1.0, slightly larger
  - Future weeks: outlined, transparent fill
- **Race countdown** conditional — only renders if `settings.raceDate` is set AND in future
- Card containment: rounded corners, subtle surface background, ~16 internal padding, no shadows

**Up Next card** (cyan brand accent, kept):
```
UP NEXT · WEEK 1 · DAY 1                  >
Strength A (Lower-body anchored)
```
- One-tap to next workout
- Cyan border + cyan eyebrow text (brand CTA color, NOT block-themed — decision: matching block color creates Race Prep red-CTA issue)

**Block sections** (expandable):
- Current block (Foundation in weeks 1-3): chevron-down (expanded by default)
- Other blocks: chevron-right (collapsed)
- All blocks tappable to toggle
- Expanded reveals WeekTile cards: "Week N" + "Foundation — Wk N (Title)" + about + "0/5 sessions" badge
- Compact range labels: "Week 1-3", "Week 4-6", "Week 7-10", "Week 11-12"

**Session detail page:**
- Blank navigation header (just back chevron)
- Eyebrow: "DAY N" (full session type carried by h1 below)
- h1: session name (e.g., "Strength A (Lower-body anchored)")
- FullRox/HalfRox segmented control
- Tier explainer card (3C.2 — persistent info icon after first dismiss)
- WARM-UP / LIFT / COOL-DOWN sections
- **Notes accordion** (default collapsed) containing ALL notes sub-sections including "What is RPE?"
- Mark complete button

### Adaptive Progression Model (v4 critical decision)

Single conditional in `getActiveWeek(progress, raceDate, weekKeyIndex)`:

```typescript
if (raceDate && raceDate >= today) {
  // Race mode: calendar-based
  return getCurrentWeek(cycleStartDate)
} else {
  // Self-paced: progress-based
  return firstUncompletedWeek(progress, weekKeyIndex)
}
```

**Race mode** (raceDate set, future):
- Time is the boss — race day fixed
- currentWeek = calendar-based from cycleStartDate + today
- User can see if they're falling behind
- "Race Day in N days" shown

**Self-paced mode** (no raceDate or past):
- No external deadline
- currentWeek = first week with any uncompleted sessions
- User can take 2+ weeks on Week 1 if they want
- Race countdown not rendered

**Edge cases handled:**
- Pre-cycle (no startDate): getActiveWeek returns null, callers fall back
- Cycle complete in self-paced: caps at week 12
- Race day today: daysUntil = 0 → calendar mode
- Race date in past: switches to self-paced (calendar would be misleading)

**Side benefits:**
- BlockSection isCurrent now uses adaptive week (Foundation auto-expand targets actual block in self-paced)
- Up Next card jumps to first uncompleted session in current active week
- Coach Rob context reflects actual position, not stale calendar week

### Files Affected (v4 implementation)

| File | Change |
|------|--------|
| `lib/cycleProgress.ts` | Added `firstUncompletedWeek` and `getActiveWeek` exports |
| `app/(tabs)/train/index.tsx` | Status card + adaptive currentWeek + Hyrox removal + Foundation auto-expand fix |
| `app/(tabs)/train/cycle/index.tsx` | Adaptive currentWeek (nullable) |
| `lib/notifications.ts` | getActiveWeek used in buildNotificationBody |
| `lib/coachContext.ts` | getActiveWeek used in coach system prompt |
| `app/(tabs)/train/cycle/session.tsx` | Notes accordion with RPE definition |
| `components/train/SegmentButton.tsx` | NEW (lifted) |
| `components/train/CollisionCallout.tsx` | NEW (lifted) |
| `components/train/BlockFlowIndicator.tsx` | DELETED (v4 cleanup — replaced by status card) |

### Pending: "Wk → Week" Audit (current step)

CC is paused at Phase 1 of comprehensive audit prompt. Awaiting Mark's confirmation of audit findings before Phase 2 replacements.

**Target replacements:** All user-facing "Wk" in:
- Cycle JSON data file (week titles like "Foundation — Wk1 (Intro)" → "Foundation — Week 1 (Intro)")
- lib/notifications.ts (notification body text)
- Any other discovered display strings

**Preserve:** Technical identifiers (session_key like "wk1_d2", cycle_week numeric fields, route fragments, object keys)

---

## DESIGN CONSTRAINTS (locked)

### Hyrox Trademark (critical)
- **"Hyrox" is a registered trademark of UpsideDown GmbH**
- **Cannot be used in app branding** — no "Hyrox Training App", no "HYROX 12-WEEK CYCLE" headers
- **Nominative fair use OK** for descriptive context ("trains for fitness racing events," "Hyrox-style training")
- App brand is "Hybrid Rockstar" / "HR" — that's what carries branding weight
- Cycle naming: "12-Week Cycle" or just "Cycle 1" — no Hyrox-prefixed branding

### iOS Design Conventions
- Apple Health / Fitness / Settings as primary reference
- Default to Apple/iOS conventions when UX questions arise
- Tab bar order intentional, not just frequency-based for HR
- Block-themed colors for status, brand cyan for CTA actions
- Premium feel: editorial typography, clear hierarchy, generous whitespace, no overstuffing
- Card containment for "at-a-glance summary" surfaces
- Avoid false tappable affordances (visual elements without behavior)

### Color System
- **Block accents:** Foundation green, Build blue, Peak orange, Race Prep red
- **Brand action color:** Cyan (Up Next, primary CTAs)
- **Status indicators:** Block colors (current week border, block dots, status card phase name)
- **Action indicators:** Cyan (Up Next border, tab bar active)
- DO NOT match Up Next card to block color (Race Prep red CTA would read as alert/destructive)

### Tier Durations (CORRECTED)
- **FullRox:** ~55-60min (sub-60min target — matches actual Hyrox event duration)
- **HalfRox:** ~30min
- Previously documented as 90/60 — CORRECTION captured here

---

## REPO IDENTIFIERS

- **Bundle ID:** com.hybridrockstar.app
- **ASC App ID:** 6762101905
- **Apple Team:** VCT64S7K6P (Strength Cycle Studios, LLC — pending app-level migration)
- **Repo path:** `~/Desktop/hybrid-rockstar`
- **Metro port:** 8081 (dev)
- **Git email:** masbooksonebay@gmail.com (Vercel compat)

---

## RECENT COMMITS

| Commit | Description |
|--------|-------------|
| `c4b1d1c` | (SC repo) Wave 1a Starting Strength data layer (cross-reference) |
| `b8c7aaa` | (HR) Rox rename — quick_rox → half_rox naming sweep |
| (post-b8c7aaa) | (HR) Wave 3C.1 onboarding shipped |
| `627dc09` | (HR) Wave 3C.2 notifications + tier explainer |
| **PENDING** | (HR) Wave 3D + revisions + v4 — uncommitted in working tree |

---

## PENDING NEAR-TERM

1. **Confirm HR "Wk → Week" audit findings** in HR CC (current Phase 1 pause)
2. **CC executes Phase 2 replacements + tsc clean**
3. **Mark sim-audits final state**
4. **Approve commit** (suggested message in handoff doc)
5. **Push 4 HR commits to origin/main** (Rox + 3C.1 + 3C.2 + Wave 3D v4)

---

## PENDING — WAVE 3E (next milestone before launch)

1. **In-app review prompt** via `expo-store-review`
   - Build `lib/reviewPrompt.ts` helper (mirror of PP v1.0.2 pattern)
   - Trigger points: after first session completion, after Foundation block completion, after cycle completion, after race-date passes
   - Per-user-lifetime gating (Apple OS auto-rate-limits to 3/year)
2. **Splash icon transparent-bg fix**
   - Apply PIL chroma-key pattern (similar to app icon fix in Wave 3C.1)
   - Requires `SplashScreen.preventAutoHideAsync()`
3. **App-level migration to SCS LLC team**
   - Currently under Mark's individual Apple Dev account
   - Migrate before first App Store submission
   - Same workflow as PP migration (Case 102887649950 pattern)
4. **First EAS production build under SCS LLC team**
5. **First ASC submission** — full polish pass via CINC

---

## PROGRAM STRUCTURE (frozen)

### 12-Week Cycle
**Foundation (Weeks 1-3):**
- Wk 1 Intro — establish baselines, calibrate RPE
- Wk 2 Development — RPE cap 7 + brief race-weight sled focus block on D4
- Wk 3 Peak — RPE cap 7, full 8-station race-distance rotation

**Build (Weeks 4-6):**
- Volume and intensity progression
- Specific training emphasis (TBD details)

**Peak (Weeks 7-10):**
- Peak training intensity
- 4 weeks (longest block)

**Race Prep (Weeks 11-12):**
- Final taper and sharpening

### Session Types
- **Strength A** — Lower-body anchored
- **Strength B** — Upper-body anchored
- **Easy Run** — Aerobic base, conversational pace, nasal breathing
- **Hyrox Movement Pattern** — All 8 stations at light load, movement standards focus
- **Race Simulation** — Full or partial event simulation (week 12)

### Daily Schedule (typical week)
- Day 1: Strength A
- Day 2: Easy Run
- Day 3: Strength B
- Day 4: Hyrox Movement Pattern
- Day 5: Easy Run

### Tier System
- **FullRox** (~55-60 min sessions) — full event-distance work
- **HalfRox** (~30 min sessions) — scaled volume, faster sessions
- User selects tier in onboarding (Wave 3C.1)
- Persisted in settings.tier
- Can be changed mid-cycle (info icon → modal on session detail)

---

## ARCHITECTURAL DECISIONS

### Subscription Model (deferred decision)
- HR is currently 100% free, no IAP
- Future model: TBD — likely Option C pattern (free with limited features, paid for full)
- May require expo-iap integration similar to SC's planned 1.0.5

### Notification Strategy (locked, 3C.2 shipped)
- **Option D Week-Progress-Aware Body** — "Foundation Wk 1 · 5 sessions remaining"
- 5 hook points throughout app
- Banner display deferred to OS
- Will need "Wk → Week" update per audit

### Architecture Pattern
- Expo Router (file-based routing)
- Zustand store for global state
- AsyncStorage for persistence
- Atomic writes for tier/format settings (3C.1)

### Component Patterns
- Lifted shared components to `components/train/`
- SegmentButton, CollisionCallout, BlockFlowIndicator (deleted in v4)
- WeekTile kept inline in /train (only consumer)
- NoteSubsection pattern for notes accordion content

---

## THINGS TO NEVER DO

### App
- **Never use "Hyrox" in app branding** (trademark)
- **Never modify cycle JSON technical fields** (session_key, cycle_week values) — only display strings
- **Never instruct CC to capture sim screenshots** — Mark drives sim audit
- **Never auto-commit changes** — all commits require Mark's explicit approval
- **Never push uncommitted Wave 3D work without sim audit complete**

### Design
- **Never make non-functional UI tappable** (deleted BlockFlowIndicator was a lesson)
- **Never re-introduce redundant UI** (block flow indicator vs section headers)
- **Never use red on Up Next CTA** (would conflict with Race Prep block color and read as alert)
- **Never use abbreviations in user-facing text** ("Wk" → "Week")

### Data
- **Never modify hr-cycle-1.json without preserving schema fields**
- **Never reference Hyrox-branded session names** (use "8-station rotation" or similar)

---

## FUTURE BACKLOG

1. **Wave 3E** — Review prompt + splash icon fix (next before launch)
2. **App-level org migration** to SCS LLC
3. **First production build + App Store submission**
4. **HR launch** (post-approval, manual release)
5. **Watch tab data integration** (Apple HealthKit?)
6. **Race day tools** — countdown timer, splits, motivation
7. **Coach Rob upgrades** — better context, week-aware prompts
8. **Custom programs** beyond Cycle 1 — Cycle 2, 3, etc. (multi-cycle future)
9. **Push notifications** — workout reminders, deadline alerts
10. **Subscription model decision** — when to introduce paid tier

---

*End of HR MASTER v2 — May 15, 2026*
