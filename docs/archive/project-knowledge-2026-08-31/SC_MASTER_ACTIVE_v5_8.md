# Strength Cycle (SC) — Master Active Tracker

**Status:** ACTIVE TRACKER — dynamic state for the SC iOS app workstream.
**Version:** v5.8 (May 20, 2026 evening) — SS rebuild discovery + canonical Rippetoe research + program rename + Stages 1-2 shipped + Stage 3 prompt drafted
**Parent:** SC_MASTER_FROZEN v5.1 [unchanged]
**Cross-referenced in:** SCS_MP v6.2

---

## 📍 Status Snapshot (May 20, 2026 evening)

**PHASE:** SS Rebuild — Stages 1-2 shipped, Stage 3 prompt ready to fire

**PROGRAMS:**
- **TM (Texas Method)** — shipped. Wave 2 stall-resolution refactor committed in `e0d4f60`. Stable, no changes this session.
- **Wendler 5/3/1** — shipped. Stable, untouched this session.
- **3x5 Strength** (formerly "Starting Strength") — canonical rebuild in progress. Stages 1-2 shipped to `main`.

---

## 🚨 SS REBUILD — Major Discovery + Course Correction

### Discovery: prior SS implementation was NOT Mark's hand-coded work

The May 12 uncommitted SS work in the working tree was misattributed (by both this Claude session AND the prior CC Wave 2 audit) as Mark's hand-coding based on file mtimes + naming conventions. **Mark never programmed SS code.** His original assignment was research-based — "research canonical SS online and provide it in the app." Somewhere in prior sessions, the implementation drifted to a **non-canonical Stronglifts-hybrid** that diverged from Rippetoe canon in multiple ways.

Wave 2 commit `e0d4f60` shipped this non-canonical implementation:
- **Workout B = Press + Deadlift** (canonical Rippetoe = Squat + Bench + Power Clean)
- **5×5 → 5×3 → 5×1 rep-scheme drops** (Stronglifts mechanic, NOT in canonical Rippetoe)
- **Cross-lift "5×1 cluster on ≥2 lifts" graduation trigger** (no canonical source)
- **In-app graduation logic** (Rippetoe canonically recommends manual switch to TM/Bill Starr — not programmatic)

Wave 2's **TM portion** is clean and canonical-fine. The SS portion is what needed the rebuild.

### Canonical Rippetoe Starting Strength (researched against startingstrength.com, Liftosaur, Stoic Performance, multiple authoritative sources)

**Phase 1 (Ramp-up, 2-4 weeks / ~9 sessions):**
- Workout A: Squat 3×5 + Press 3×5 + Deadlift 1×5
- Workout B: Squat 3×5 + Bench Press 3×5 + Deadlift 1×5
- Goal: learn movements, establish deadlift ahead of squat
- Transition trigger: 9 completed sessions → Phase 2

**Phase 2 (Main phase, 2-4 months — where most users spend their time):**
- Workout A: Squat 3×5 + Press 3×5 + Deadlift 1×5
- Workout B: Squat 3×5 + Bench Press 3×5 + [pull variant 5×3 or 3×5]
- Pull variant DEFAULT: **Bent-Over Row 3×5** (accessible, no platform/coaching required)
- Pull variant OPTIONAL: **Power Clean 5×3** (Rippetoe canonical, but requires platform/coaching)
- User chooses pull variant; toggleable in Settings

**Phase 3 (Advanced novice):**
- Workout A: Squat 3×5 + Press 3×5 + Deadlift 1×5 alternating with pull variant 5×3 / 3×5
- Workout B: Squat 3×5 + Bench Press 3×5 + Chin-ups 3×AMRAP
- User-opted via Settings (not automatic)

**Stall protocol (canonical, all phases):**
- 2 consecutive failures at same weight on same lift → 10% deload on that lift only
- After deload: resume progression at smaller jumps (2.5 lb upper / 5 lb lower — microloading)
- **NO rep-scheme drops** (5×3, 5×1 sequences are Stronglifts mechanics, explicitly removed)
- After repeated deload cycles: user manually switches to TM or 5/3/1 from program-switcher (no in-app graduation logic)

**Schedule:** 3 days/week, alternating A/B/A then B/A/B (non-consecutive days, Mon/Wed/Fri pattern)

---

## 🏷️ Program Naming (PLACEHOLDER LOCKED)

**Name:** **"3x5 Strength"**
**Subtitle:** **"Inspired by Rippetoe's methodology"**

Rationale:
- Rep-scheme name signals SS lineage to serious lifters without invoking the trademarked "Starting Strength" brand
- "Strength" suffix builds SC brand equity
- Subtitle references the person/methodology (nominative fair use) rather than the trademarked product name (Aasgaard Company's primary commercial mark)
- Revisable later — explicit placeholder

**IP analysis:**
- "Starting Strength" is Rippetoe's trademark (book + gym franchise chain + certification program + seminars via Aasgaard Company). Active brand defense history.
- "Inspired by Rippetoe's methodology" is defensible as nominative fair use — describes the person's training approach, not the trademarked product
- Texas Method: lowest risk (geographic origin, used widely in apps without challenge)
- Wendler 5/3/1: medium-low risk (Wendler less aggressive than Rippetoe; "5/3/1" partially descriptive)

---

## 🔧 SS Rebuild — Stage Plan

| Stage | Scope | Status | Commit |
|---|---|---|---|
| **1** | Canonical data layer rewrite (replaces non-canonical hybrid; preserves Wave 2 TM refactor) | ✅ Shipped | `067ac84` |
| **2** | `updateStartingStrengthState` mutator + AppCtx exposure | ✅ Shipped | `9276673` |
| **3** | `StartingStrengthWorkoutScreen.tsx` (new file) + router branch in `app/(tabs)/index.tsx` | 🟡 Prompt drafted, ready to fire | — |
| **4** | SS onboarding (setup route, Phase 1 entry, starting weights, pull variant choice) + program-switcher integration | 🔜 | — |
| **5** | Settings: Power Clean / Bent-Over Row toggle + SS program guide content | 🔜 | — |
| **6** | Ask Coach Guide tab content for SS (matches 5/3/1 + TM pattern) | 🔜 | — |

### Stage 1 details (commit `067ac84`)

- `lib/programs/startingStrength.ts` — full rewrite to canonical
- `lib/programs/types.ts` — SS hunks replaced (SSLiftKey, SSPullVariant, StartingStrengthState, DEFAULT_STARTING_STRENGTH_STATE); TM + Wendler types untouched
- `lib/store.ts` — SS migration block replaced with a reset; firstLaunchDefaults SS override removed (forced by shape change); TM + Wendler migration untouched
- `lib/context.tsx` — minimal `changeUnits` fix (Option 1, Mark-approved — forced compile fix from 4-key → 7-key schema change; NOT scope expansion to Stage 2 mutator)

**New state shape:**
```
StartingStrengthState {
  currentPhase: 1 | 2 | 3
  phaseSessionCount: number
  pullVariantPreference: 'row' | 'power_clean'  // default 'row'
  workingWeights: Record<SSLiftKey, number>
  consecutiveFailures: Record<SSLiftKey, number>  // 0 or 1; 2 is transient trigger
  deloadHistory: Record<SSLiftKey, number>
  microloadingActive: Record<SSLiftKey, boolean>
  lastWorkout: 'A' | 'B' | null
  sessionCount: number
  startDate: string
}

SSLiftKey = 'squat' | 'press' | 'bench' | 'deadlift' | 'row' | 'powerClean' | 'chinUp'
```

**CC's design calls (kept, defensible):**
- `registerSetResult` auto-applies deload at 2nd consecutive failure (canonical rule in pure data layer; state always consistent post-call)
- `completeWorkout`'s `didCompleteAllLifts` gates ramp-up counter (`phaseSessionCount`) only; A/B rotation + `sessionCount` increment always
- Phase 3 deadlift/pull-variant alternation derived from `sessionCount` parity (pure, no new tracker)
- Type location: defined in `types.ts`, re-exported from `startingStrength.ts` (avoids circular import)
- `STARTING_STRENGTH_METADATA` preserved (imported by `lib/programs/index.ts:6`)

### Stage 2 details (commit `9276673`)

- Single file: `lib/context.tsx` (+13 lines, 0 deletions)
- Four adjacent additions to the `updateTexasMethodState` block:
  1. AppCtx interface (:50) — `updateStartingStrengthState: (updates: Partial<StartingStrengthState>) => void`
  2. createContext default stub (:78) — `updateStartingStrengthState: () => {}` (CC's good catch — fourth required addition for tsc to pass)
  3. Mutator definition (:178-187) — useCallback over `[data, persist]`, shallow merge into `data.programs.startingStrength`
  4. AppCtx.Provider value object (:303) — `updateStartingStrengthState`

### Stage 3 — Ready to fire

Full prompt drafted in chat history (SS Rebuild Stage 3 — StartingStrengthWorkoutScreen + Router Branch). Key design decisions locked:

- **Per-set tap-to-complete logging** (industry-aligned with Strong/Hevy/Boostcamp; diverges intentionally from TM's per-lift modal pattern)
- **One WorkoutLog per lift per session** (3 logs/session for the 3 lifts; matches TM convention)
- **No explicit stall counter pill** (rep scheme is the user-visible signal — Strong/Hevy/Boostcamp pattern)
- **Deload banner row** (subtle, conditional render when a deload was just applied)
- **No graduation prompt UI** (user manually switches programs from program-switcher; no in-app graduation logic)
- **No warm-up sets** (data layer doesn't return them; defer to later wave)

---

## 🎯 Design Decisions Locked (Industry-Comparison-Verified)

These six decisions were verified against canonical Rippetoe + Strong/Hevy/Boostcamp 2026 conventions, after Mark flagged that recommendations needed industry-standard comparison:

1. **Logging flow:** per-set tap-to-complete (industry standard) — diverges from TM's per-lift modal; TM may refactor later
2. **WorkoutLog population:** 3-per-session (matches SC's existing TM convention; anomalous vs industry's 1-per-session-with-nested-exercises but consistent within SC; refactor candidate for v1.0.6+)
3. **Stall counter:** drop explicit pill, lean on rep scheme + weight as the user-visible signal
4. **Deload indicator:** banner row (matches Boostcamp's "DELOAD WEEK" pattern)
5. **Graduation surface:** none in code; educational copy in Settings program guide + Ask Coach Guide
6. **Warm-ups:** generated programmatically (matches SC's existing TM/531 pattern; matches Boostcamp; out of scope for Stage 3)

---

## 📚 Educational Content Specifications (Stages 5-6)

Canonical Rippetoe terminology for the "graduate from SS" content:
- **"End of novice progression"** (Rippetoe's phrase)
- **"Novice gains run out"** (community equivalent)
- **"Intermediate trainee"** (next-stage identifier)

Criteria (paraphrased from *Starting Strength* + *Practical Programming*):
1. Repeated deload cycles without sustained progress (10% reset stops yielding 4-6 weeks of progress before next stall)
2. Generally 3-6 months of consistent training
3. Rippetoe's framing: "Run the program until it stops producing, then progress to the next program"

**Recommended next steps per Rippetoe:** Texas Method or Bill Starr 5×5. SC's app already has TM as a sibling program — user switches manually via program-switcher.

Stage 5/6 content sketch:
> Starting Strength is designed to produce rapid linear gains during the novice phase, which typically lasts 3-6 months. Eventually, your body adapts faster than the program can drive new gains — Rippetoe calls this "the end of novice progression."
>
> Signs you've reached this point:
> - You've deloaded multiple times on the same lift without recovering your previous peak
> - Each reset cycle yields fewer sessions of progress before the next stall
> - You've been training consistently for 3+ months without a sustained interruption
>
> When this happens, it's time to move to an intermediate program. Switch from the onboarding screen (Settings → Program → Switch Program). Texas Method and 5/3/1 are both Rippetoe-recommended next steps.

---

## 🔬 SS Onboarding Spec (Stage 4 preview)

When user selects "3x5 Strength" at onboarding:

1. **Phase 1 entry** — auto (no user choice)
2. **Starting weights entry** — user enters working weight per lift (Squat, Press, Bench, Deadlift)
   - Recommendation prompt: "Choose weights you can complete 3×5 with good form — Rippetoe recommends starting conservatively"
   - No auto-calculation from 1RM (SS is novice; users typically don't know their 1RM yet)
3. **Pull variant choice** — Bent-Over Row (default) or Power Clean
   - Modal explainer: "Workout B uses a pulling movement. Bent-Over Row is the accessible default — no platform or coaching required. Power Clean is Rippetoe's canonical choice but requires safe technique instruction. You can change this later in Settings."
4. **Start date** — auto-set to today
5. **Schedule reminder** — 3 days/week, non-consecutive (Mon/Wed/Fri pattern recommendation)

---

## 🛠️ Workflow Lessons Captured This Session

### Industry-comparison-first for design decisions
Per SCS_MP rule: when recommending UX patterns, **compare against Strong/Hevy/Boostcamp + canonical methodology source FIRST, then recommend.** Mark caught Claude twice this session for skipping this step.

### CC misattribution of prior work
File mtimes + naming conventions are NOT sufficient evidence of authorship. Working-tree audits should distinguish between:
- "Code authored by Mark" (explicit confirmation only)
- "Code authored by prior CC session" (default assumption for uncommitted work without Mark's authorship claim)

### Stage discipline in multi-stage rebuilds
Atomic verifiable stages prevent context overflow + mid-rebuild errors. CC reports must surface scope-forcing fixes (like the `changeUnits` compile fix forced by schema change) — Option 1 (apply minimum forced fix) is correct, NOT "leave broken intermediate state" or "expand scope to Stage 2 mutator."

### CC scope discipline nuance
"Don't touch X" means "don't expand scope," NOT "don't apply forced compile fixes that schema changes make necessary." Distinction matters for atomic commits.

---

## 📅 Changelog

**May 20, 2026 (this session):**
- 🚨 **SS rebuild discovery** — prior implementation was NOT Mark's hand-coded work; was non-canonical Stronglifts-hybrid from prior CC session
- ✅ **Canonical Rippetoe research** completed across startingstrength.com, Liftosaur, Stoic Performance, multiple sources
- ✅ **Program rename LOCKED (placeholder):** "3x5 Strength" + subtitle "Inspired by Rippetoe's methodology"
- ✅ **Workout B canonical spec locked:** Squat + Bench + [Row default OR Power Clean toggle] — NOT deadlift-only
- ✅ **Stall protocol canonical spec locked:** 2 consecutive failures → 10% deload → continue, NO rep-scheme drops
- ✅ **3-phase model locked:** Phase 1 ramp-up (auto), Phase 2 main, Phase 3 advanced novice (user-opted)
- ✅ **No in-app graduation logic** — user manually switches programs; educational content in guides
- ✅ **Stage 1 shipped** — canonical data layer rewrite (commit `067ac84`)
- ✅ **Stage 2 shipped** — `updateStartingStrengthState` mutator + AppCtx (commit `9276673`)
- ✅ **Stage 3 CC prompt drafted** — `StartingStrengthWorkoutScreen.tsx` + router branch
- ✅ **Six locked design decisions** verified against industry conventions (Strong/Hevy/Boostcamp 2026)
- ✅ **Educational content terminology** captured for Stages 5-6

**Prior session entries:** unchanged. See v5.7 history.

---

## 🎯 Next Milestones (Sequential)

1. **Fire Stage 3 CC prompt** — `StartingStrengthWorkoutScreen.tsx` + router branch in `app/(tabs)/index.tsx`
2. **Sim verification** — Mark verifies the new SS screen in iOS simulator (CC does not run sim)
3. **Stage 4** — SS onboarding flow + program-switcher integration
4. **Stage 5** — Settings: pull variant toggle + program guide content
5. **Stage 6** — Ask Coach Guide tab content for SS
6. **v1.0.5 readiness assessment** — once all 6 stages land, evaluate App Store submission readiness
7. **Test build (TestFlight)** — full SS flow end-to-end
8. **App Store submission** — v1.0.5 (SS program)

---

## 🔗 Cross-References

- **SC_MASTER_FROZEN v5.1** — frozen rules, structural decisions [unchanged]
- **SCS_MP v6.2** — parent doc, cross-cutting workflow lessons
- **HR_MASTER v4** — sibling iOS app reference

---

*Active tracker for SC iOS app. Updated as stages ship, decisions lock, milestones complete.*
