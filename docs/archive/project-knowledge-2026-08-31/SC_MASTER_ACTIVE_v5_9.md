# Strength Cycle (SC) — Master Active Tracker

**Status:** ACTIVE TRACKER — dynamic state for the SC iOS app workstream.
**Version:** v5.9 (May 22, 2026 evening) — v1.0.4 polish phase complete (11 waves shipped), PASS 1 sim verification in progress, deploy path locked
**Parent:** SC_MASTER_FROZEN v5.1 [unchanged]
**Cross-referenced in:** SCS_MP v6.3

---

## 📍 Status Snapshot (May 22, 2026 evening)

**PHASE:** v1.0.4 polish — all waves committed locally on `main` (both repos), NOT pushed. PASS 1 sim verification underway.

**PROGRAMS:**
- **5/3/1 (Wendler)** — shipped, stable
- **TM (Texas Method)** — shipped, stable
- **3x5 Strength** (formerly "Starting Strength") — canonical rebuild complete; v1.0.4 polish layer applied this session

**SS REBUILD STATUS:** All 6 stages from v5.8 plan completed in prior sessions. This session's work was the polish/integration layer (Waves A through J-1) bringing SC to v1.0.4 release-ready state.

---

## 🚀 v1.0.4 Polish Phase — Complete (11 waves)

### Wave commit table (all committed locally, NOT pushed)

| Wave | Repo | SHA | Description |
|---|---|---|---|
| A | SC | — | Investigation only — no commit |
| **B** | SC | `d837dbb` | polish(1.0.4): tab reorder + 3x5 Strength rename + workout polish + dismissible note + dev tab + rate fallback + version + dead backup removal |
| **C** | SC | `5fe5e95` | feat(onboarding): combine Welcome into Picker |
| **D** | SC | `390ca6d` (amended from `00aaec4`) | feat(settings): program-aware sections + program-switcher cleanup + TM 1RM preserved |
| **G** | SC | `af40d39` | feat(dev-tools): program-aware sample data seeding |
| **F** | SC | `b64c1fd` | feat(track): program-aware Track tab + History phase-filter chips |
| **E1** | SC | `10070be` | feat(ask-coach): SS rules + Guide component + 3-way refactors |
| **E2** | API | `6d1ac5b` | feat(coach): SS system prompt branch in hybrid-rockstar-api |
| **E3-A** | SC | `343ac65` | feat(content): SS branding sweep — "3x5 Strength" as program name, Rippetoe acknowledged as methodology source |
| **H** | SC | `ded0283` | feat(onboarding): switcher SS-branch fix + Workout-tab landing + TM Skip + lift order standardization |
| **I** | SC | `e0659d9` | feat(track): program-aware desc + cycle numbering + chart/count + 4-lift seed + active-program history filter |
| **E3-B** | API | `7ecc37f` | feat(coach): 3x5 Strength branding sweep + 5/3/1 anti-program bias removal + TM opener tone softening |
| **J-1** | SC | `bf26b88` | fix(onboarding): hide InputAccessoryView when keyboard not focused |

**Two repos involved:**
- `~/Desktop/strength-cycle` — SC frontend (9 commits in this session)
- `~/Desktop/hybrid-rockstar-api` — Shared API backend (2 commits — Ask Coach for SC lives in `api/ask-coach.ts`; HR's `coach-rob.ts` untouched)

---

## 🎯 Sim Issues Resolution (19 of 20)

19 of the 20 sim issues identified in the prior sim verification pass are resolved by these waves. Item #20 deferred to TestFlight (sim limitation).

| # | Issue | Wave | Status |
|---|---|---|---|
| 1 | E2 not deployed to production API | E2 | ✅ Committed, awaiting Vercel deploy |
| 2 | 5/3/1 anti-program bias | E3-B | ✅ Emergent fix via cross-program respect bullet |
| 3 | All 3 prompts need 3x5 Strength branding | E3-A + E3-B | ✅ Frontend + backend swept |
| 4 | Cross-program respect (5/3/1 missing) | E3-B | ✅ Asymmetric instruction added |
| 5 | Locked branding rule (no "Starting Strength" in user-facing content) | E3-A + E3-B | ✅ Verified by grep |
| 6 | STARTING_STRENGTH_RULES body sweep | E3-A | ✅ Done |
| 7 | StartingStrengthGuide modal sweep | E3-A | ✅ 8-section sweep |
| 8 | API system prompts sweep | E3-B | ✅ Done |
| 9 | Section-by-section scope confirmed | — | ✅ Procedural |
| 10 | Load Sample Data toggle program-aware | I | ✅ SAMPLE_DATA_DESC keyed by ProgramId |
| 11 | Cycle numbering inverted in History | I | ✅ Root cause: seed not syncing counter — fixed at seed layer |
| 12 | Chart "10 sessions" vs Count "9 total" off-by-one | I | ✅ SAME root cause as #11 — fixed by counter sync |
| 13 | Wave G seed only advances workingWeights.squat | I | ✅ 4-lift back-computed from current workingWeights |
| 14 | Program-switcher routes through setup unconditionally | H | ✅ isProgramConfigured fix; SS branch checks workingWeights |
| 15 | TM setup lacks Skip | H | ✅ TM Skip mirrors wendler531 pattern |
| 16 | Lift order inconsistency | H | ✅ All 3 setup screens now Squat → Bench → Deadlift → OHP |
| 17 | 5/3/1 + TM 1RM inline editing | — | ✅ Verified working in prior pass |
| 18 | History tab doesn't filter by activeProgram | I | ✅ programWorkouts memo filters by w.program |
| 19 | TM coach opener too aggressive | E3-B | ✅ Emergent fix — section header renamed + Good/Bad example pair |
| 20 | Send Feedback inert on sim | — | 🟡 Deferred to TestFlight verification (likely sim Mail-app-missing) |

---

## 🏗️ Architectural Insights Captured This Session

### Seed counter sync = root cause of cycle numbering + chart/count divergence (Wave I)
Both seed paths (`lib/sampleData.ts/buildSampleWorkouts` for toggle + `lib/devSeed.ts/buildSeedPatch` for tool) wrote cycle-numbered history but never advanced the program-state counter (`sessionCount` / `currentCycle` / `weekIndex`). Result: next live workout collided at cycle 1 with seeded cycle 1. That collision drove BOTH the inverted History ordering (#11) AND the SS chart vs Workout Count divergence (#12). Single fix at the seed layer resolves both — no analytics or chart code touched.

### Two parallel seed systems flagged for unification (Wave J-2 candidate)
- `lib/devSeed.ts` → `buildSeedPatch` ("Seed Sample Squat History" tool) — Wave I made this 4-lift + back-computed from current workingWeights. End-state invariant: today's workout = natural next progression.
- `lib/sampleData.ts` → `buildSampleWorkouts` ("Load Sample Data" toggle) — SS path still forward-progresses from hardcoded `SS_SAMPLE_START` constants and never anchors to workingWeights. Loading toggle SS data + viewing "today's workout" can still show a gap if onboarding values diverge from `SS_SAMPLE_START`.

### isProgramSeeded helper canonical (Wave H)
Pre-existing helper in `app/settings/program-switcher.tsx` correctly identifies "is program configured" state. v1.0.4 fix: SS branch was checking `startDate !== ""` (a proxy that misses populated workingWeights). Now checks `workingWeights.{squat,bench,deadlift,press}` any > 0. For 5/3/1/TM: keeps existing `lifts.some(l => l.oneRepMax !== 100)` since `DEFAULT_LIFTS` sets `oneRepMax = 100`, not 0 — a "> 0" check would always be true. The `!== 100` test is the canonical pattern.

### 5/3/1 ↔ TM share `lifts[].oneRepMax` (Wave H surface)
Configuring either program marks both configured (shared 1RM data model). Switching between 5/3/1 and TM after configuring either skips setup. This is correct behavior (the two programs prescribe off the same underlying strength data), not a bug. SS uses separate `workingWeights` and must be configured independently.

### Cross-program prompt symmetry (Wave E3-B)
Anti-program bias in 5/3/1 coach was EMERGENT, not literal — WENDLER_531_SYSTEM_PROMPT had ZERO mentions of TM or SS to delete. The TM and SS prompts each carried explicit cross-program respect language ("WHO TEXAS METHOD IS FOR", "WHEN LINEAR PROGRESSION ENDS — both valid intermediate paths"). The 5/3/1 prompt had none, so a "direct, plainspoken" personality free-associated dismissively. Fix: additive COACHING STYLE bullet establishing respect for other programs as legitimate for their training stages.

### Good/Bad tone-example pair = effective behavioral fix (Wave E3-B)
TM coach's "You're asking the wrong question" opener was emergent from section header "PUSH-BACK TRIGGERS (call out the user...)". Renaming the section + adding an explicit Good/Bad example pair with "You're asking the wrong question" as a labeled Bad example was more effective than instruction-only softening. Reinforcement-via-example beats reinforcement-via-instruction for tone work.

### Shared-component fix cascades to all consumers (Wave J-1)
InputAccessoryView in two byte-identical shared components (`NumericInputWithDone.tsx`, `DoneKeyboardToolbar.tsx`) was always-mounted, never bound to focus. Conditional render `{focused && (...)}` via TextInput onFocus/onBlur fixed the bug across all 8+ call sites (3 setup screens + settings inline edit + workout screen notes + new-lift name + history tag-edit) without touching them directly. SS setup got an additional consistency fix — was using plain TextInput with no accessory (no Done affordance); migrated to NumericInputWithDone.

---

## 📋 Deploy Path (locked, awaiting PASS 1 verification)

1. **Mark completes PASS 1 sim verification** in current state (frontend changes already in dev-client build)
2. **Push hybrid-rockstar-api repo** → Vercel auto-deploys E2 + E3-B together
3. **PASS 2 sim verification** — API behavior change in Ask Coach (4 prompts):
   - 5/3/1 chat respects TM and 3x5 Strength as legitimate programs
   - TM chat opens with advisory tone, not adversarial
   - SS chat refers to itself as "3x5 Strength" throughout, references Rippetoe as methodology source
   - Cross-program references use "3x5 Strength" consistently
4. **Push strength-cycle repo**
5. **EAS production build** for SC v1.0.4
6. **TestFlight upload** — verify item #20 (Send Feedback) on real device
7. **ASC submission** as v1.0.4

---

## 🟡 PASS 1 Sim Verification Status (in progress as of session end)

**Verified this session:**
- ✅ #5 Program Picker as first screen (Wave C) — confirmed via SS setup screen view
- ✅ #15 TM Skip + #16 lift order — accepted by code review (CC's commit confirmed wendler531 pattern mirror)
- ✅ Dismissible workout note (Wave B) — visible in screenshot
- ✅ Tab order Workout/Track/Ask Coach/Gear/Settings/_screens (Wave B) — confirmed
- ✅ _screens tab in dev (correctly dev-gated; will hide in EAS production)

**Not yet verified (PASS 1 remaining):**
- #1 Tab order (verify all six tabs render expected screens)
- #2 Program rename throughout UI (no "Starting Strength" anywhere user-facing)
- #4 _screens dev tab actually accessible in dev mode
- #6 Settings program-aware sections
- #7 3x5 Guide modal opens correctly with corrected branding
- #8 Ask Coach Guide renders 6 SS rule sections
- #9 Track tab Working Weight Trend + Workout Count + Stall Events + PR Log
- #10 History filter chips program-aware
- #11 Cycle numbering: newest = highest cycle number
- #12 Chart "N sessions" === card "N total"
- #13 Load Sample Data description program-aware
- #14 Sample seed end-state: today = natural next progression, no phantom PRs
- #15 Program-switcher round-trip (5/3/1 ↔ TM ↔ 3x5)
- #18 v1.0.4 footer displays
- #19 Rate the App URL fallback

**Wave J-1 specifically (re-verify after Metro reload):**
- Setup screens: Done bar appears in keyboard accessory while typing, disappears on dismiss (no stray bar)
- SS setup: Done affordance NOW exists on numeric keyboard (didn't before)
- Settings inline edit (1RM, working weights, rest timer): focus-bound behavior
- Workout screen notes + new-lift name fields: focus-bound behavior

---

## 🟡 Queued for v1.0.5 / v1.1

### Wave J-2 — SS seed unification (v1.0.5 candidate)
Apply back-compute pattern to `buildStartingStrengthSampleWorkouts`, OR unify the two seed systems outright. Currently `devSeed` SS is end-state-invariant-correct (back-computed from workingWeights), but `sampleData` SS still forward-progresses from hardcoded `SS_SAMPLE_START` constants. Toggle path can still show today-workout gap. Not v1.0.4 blocking — dev surface only.

### Wave J-3 — NumericInputWithDone + DoneKeyboardToolbar consolidation (v1.0.5 candidate)
The two shared components are byte-identical except for component name + accessory-ID prefix. Could be one component. Refactor for code health, not user-visible behavior change.

### v1.0.5 monetization (from prior planning, unchanged)
- Free tier: All programs supported, full logging, e1RM tracking, AMRAP tracking, AI coach with weekly query cap (cap value TBD)
- Paid tier (SC Pro): Unlimited AI coach queries
- Pricing direction (not final): $7.99/mo, $59.99/yr leaning. Mid-market positioning between Boostcamp ($4.99/$39.99) and Juggernaut ($35/mo). Final pricing locks closer to ship.
- Pre-1.0.5 state: No IAP. Monetization through Amazon affiliate (Gear tab) and Learn More book links

### v1.1 — Apple Health integration (deferred)

---

## 📅 Changelog

**May 22, 2026 (this session — v5.8 → v5.9):**
- ✅ **11 SC-cluster polish waves shipped** (A investigation + B/C/D/G/F/E1/E2/E3-A/H/I/E3-B/J-1) — all committed locally on main, both repos
- ✅ **19 of 20 sim issues resolved** (item #20 Send Feedback deferred to TestFlight)
- ✅ **PASS 1 sim verification started** — partial completion as of session end
- ✅ **Architectural insights captured:** seed counter sync root cause, two-parallel-seed-systems flag, isProgramSeeded canonical pattern, 5/3/1↔TM shared 1RM data model, cross-program prompt symmetry, Good/Bad tone-example pattern, shared-component fix cascade
- ✅ **Deploy path locked:** PASS 1 → push API → PASS 2 → push SC → EAS → TestFlight → ASC
- ✅ **Wave J-2 + J-3 queued** for v1.0.5 (SS seed unification + keyboard component consolidation)
- ✅ **TCC grant lost twice during session** — re-verification checkpoint captured in SCS_MP v6.3
- ✅ **Dev-client vs Expo Go fallback diagnosed** — checkpoint captured in SCS_MP v6.3

**Prior session entries:** unchanged. See v5.8 history (SS Rebuild Stages 1-6).

---

## 🎯 Next Milestones (Sequential)

1. **Mark resumes PASS 1 sim verification** in current dev-client build
2. **Mark pushes hybrid-rockstar-api repo** → Vercel auto-deploys E2 + E3-B
3. **PASS 2 sim verification** (API behavior change in Ask Coach)
4. **Mark pushes strength-cycle repo**
5. **EAS production build** for SC v1.0.4
6. **TestFlight upload** + verify item #20 (Send Feedback) on real device
7. **ASC submission** as v1.0.4
8. **Post-v1.0.4: Wave J-2 (SS seed unification) + Wave J-3 (keyboard component consolidation) for v1.0.5**

---

## 🔗 Cross-References

- **SC_MASTER_FROZEN v5.1** — frozen rules, structural decisions [unchanged]
- **SCS_MP v6.3** — parent doc, cross-cutting workflow lessons (DEV-CLIENT vs EXPO-GO checkpoint, TCC re-verification, vendor DD principle)
- **HR_MASTER v5** — sibling iOS app reference (now LIVE on App Store)

---

*Active tracker for SC iOS app. Updated as waves ship, sim verification progresses, milestones complete.*
