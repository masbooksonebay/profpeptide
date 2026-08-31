# Strength Cycle — Master Active Tracker

**Status:** ACTIVE TRACKER — dynamic state, current cycle, recent commits, queued waves. Stable platform decisions live in SC_MASTER_FROZEN.md v5.2.

**Version:** v5.7 (May 19, 2026 evening) — Wave 2 reconciliation captured; SS state machine + TM stall refactor identified as canonical uncommitted work pending commit
**Parent:** SC_MASTER_FROZEN.md v5.2
**Cross-referenced in:** SCS_MP v6.1

---

## 📍 Status Snapshot (May 19, 2026 evening)

**LIVE STATE:** SC v1.0.3 on App Store (UK + IE + AU + NZ). Multi-program parity: 5/3/1 + Texas Method shipped; Starting Strength data layer Wave 1a committed (c4b1d1c), Wave 2 (SS state machine + TM stall refactor) pending commit.

**REPO STATE:** `~/Desktop/strength-cycle` working tree has 5 modified files representing one coherent local coding session from May 12, 17:16–17:19. Wave 1a commit (`c4b1d1c`) is **unpushed** — local main is 1 commit ahead of origin/main. Working tree changes are canonical, not stale CC output (confirmed by file mtimes + Mark's own naming conventions + "Wave 2" self-labeling). Audit complete this session.

**ACTIVE WORK STATE:** Ready to commit Wave 2 as a single bundled commit (SS state machine + TM stall resolution refactor + dead-code cleanup). CC prompt drafted in chat.

---

## 🛠️ Wave 2 — Uncommitted Canonical Work (NEW THIS SESSION)

### Provenance (confirmed)
The uncommitted Wave 2 work in `~/Desktop/strength-cycle` is **Mark's own canonical implementation**, not stale CC output. Evidence:
- All 5 files written May 12 within a ~3-minute window (17:16–17:19) — coherent local session
- Mark's own naming conventions throughout (`consecutiveStalls`, `repSchemeStage`, `deloadedAtCurrentStage`, `graduationSuggested`)
- Self-labeled "Wave 2" in code comments, not "Wave 1b"
- Forward-scope comments deferring UI work to "Wave 3"
- ~6 hours after morning's Wave 1a commit (c4b1d1c) — same-day continuation

### Scope (Wave 2 = SS data layer state machine + TM stall resolution refactor)

**Starting Strength state machine** (lib/programs/startingStrength.ts +155 lines):
- Per-lift state: `consecutiveStalls` (resets on success), `repSchemeStage` (0/1/2 = 5x5/5x3/5x1), `deloadedAtCurrentStage`, `graduationSuggested`
- **Rule A:** first stall drops the per-session increment
- **Rule B:** 3 consecutive stalls → deload, then on next 3-strike cycle → rep-scheme drop, then graduation
- 10% deload via `SS_DELOAD_MULTIPLIER` (5lb/2.5kg rounding)
- Cross-lift graduation trigger: per-lift at 5x1 + "5x1 cluster on ≥2 lifts" → `graduationSuggested`
- New exports: `SS_REP_SCHEME_STAGES`, `SSRepSchemeStage`, `repSchemeStageLabel()`, `checkGraduationTrigger()`, `dismissGraduationPrompt()`

**Texas Method stall resolution refactor** (lib/programs/texasMethod.ts +173 lines):
- Persisted stall state machine via `pendingStallResolution`
- `detectStallOnWorkoutComplete()` + `resolveStallChoice()` replace `applyStallResponse()`
- `TMStallChoice` type: `'repeat' | 'cutVolume' | 'deload'`
- `cutVolume` preserves 1.0.3 no-op behavior (documented in comments)
- `applyStallResponse` kept as `@deprecated` shim during migration

**Shared types** (lib/programs/types.ts):
- TM stall types: `TMStallLiftKey`, `TMPendingStallResolution`
- SS helper interfaces: `SSPerLiftNumber`, `SSPerLiftBool`
- 4 new SS state fields, updated defaults
- **NOTE:** types.ts has interleaved SS+TM in one contiguous hunk — splittable only via manual `git add -e`

**Persistence** (lib/store.ts):
- Backward-compatible migrations for both SS and TM new fields
- Type guards for all new fields
- Falls back to defaults for pre-Wave-2 persisted blobs
- Cleanly splittable by hunk (SS hunks non-adjacent to TM hunks)

**TM UI** (app/(tabs)/_screens/TexasMethodWorkoutScreen.tsx +67 lines):
- Migrated from `applyStallResponse` to `resolveStallChoice` path
- `handleStallResponse` takes just a choice; lift/weight read from persisted state
- UI behavior unchanged (still uses ephemeral `Alert.alert`, not yet state-derived modal)

### Dead-code cleanup (committed alongside Wave 2)

Three orphans in texasMethod.ts to remove in the same commit:
- `VOLUME_CUT_MULTIPLIER` — exported but zero callers (dead)
- `applyStallResponse` — deprecated shim, no callers since TM screen migrated
- `StallResponse` type — only used by `applyStallResponse`

### Verification state
- **tsc:** clean (exit code 0) in current uncommitted state
- **Build:** not run during audit (no scripted run during audit prompt)
- **Tests:** none. No Jest/vitest/runner in package.json. Only `lib/sampleData.test.ts` exists orphaned (hand-rolled `check()`/`assert()` harness, no runner). Wave 2 ships with zero programmatic tests — tsc + sim verification only.
- **UI consumers:** SS state machine has zero callers; surface for visualization deferred to Wave 3.

### Commit plan
Single "Wave 2" commit bundling all 5 file modifications + 3 dead-code removals. Push includes both unpushed commits (c4b1d1c Wave 1a + new Wave 2). CC prompt drafted in chat, ready to fire.

---

## ⚠️ Important corrections to prior session notes

Two prior assumptions discovered to be wrong this session, corrected for the record:

1. **"Wave 1a 8/8 tests pass"** — wrong. No test runner exists. The compaction summary picked up a false claim. SC has no programmatic test infrastructure.

2. **"Wave 1b CC prompt drafted but never sent"** — incomplete framing. The uncommitted work in the tree is Mark's own May 12 hand-coded implementation, not "Wave 1b" pending fire. The actual implementation diverges from the draft spec in ways that matter (Rule A/B sequencing, cross-lift cluster graduation trigger, different field names).

**The audit overrode the spec.** Mark's implementation is canonical.

**Workflow lesson:** When CC's working-tree audit conflicts with the prompt's premise, the audit wins, not the prompt. Captured in SCS_MP v6.1.

---

## 🔄 Wave Roadmap

### ✅ Wave 1a — Shipped (commit c4b1d1c, May 12 morning, **unpushed**)
Starting Strength data layer + runtime helpers. 5 helpers, tsc clean.

### 🟡 Wave 2 — Ready to commit (this session)
SS stall state machine + TM stall resolution refactor + dead-code cleanup. Single bundled commit. CC prompt drafted, awaiting fire.

### 🔜 Wave 3 — UI for SS state machine
SS state machine has zero UI callers right now. Wave 3 builds the screens:
- Surface `repSchemeStage` in the SS workout screen
- Surface `graduationSuggested` as user prompt to migrate to Texas Method
- `dismissGraduationPrompt` integration
- Stall counter visualization

### 🔜 1.0.4 polish backlog (queued after Wave 3)
1. 5/3/1 AMRAP counter reset (bug fix)
2. Program-switch 1RM elimination
3. SS onboarding leverages existing 1RM data (no re-entry)
4. In-app review prompt via `expo-store-review` (mirror PP v1.0.2 pattern)
5. Sim verification → TestFlight → ASC submission

---

## 📋 Locked Design Decisions (SS — adopted from canonical Wave 2 work)

These supersede earlier draft spec captured in session compaction notes:

1. **Deadlift-only B-day** (Workout B = press + deadlift, NOT power clean — Rippetoe canonical for novice phase)
2. **Rippetoe canonical methodology**
3. **User-entered working weight** (no estimator at this layer)
4. **5×5 → 5×3 → 5×1 rep-scheme drop** with deload-then-rep-drop sequencing (Rule A → Rule B)
5. **Graduate-to-TM trigger:** per-lift at 5×1 stage + cross-lift "5×1 cluster on ≥2 lifts" → `graduationSuggested`
6. **Program name** "Starting Strength" with Rippetoe attribution disclaimer (shipped Wave 1a)

---

## 🧪 Testing Posture

**Current:** zero programmatic tests. tsc + simulator verification only.

**Decision (this session):** ship Wave 2 with no Jest infrastructure. Reasons:
- HR and PP also ship without Jest — portfolio consistency
- SC's user surface is the simulator; manual sim verification catches regressions reliably at this complexity
- Adding Jest = ~30 min CC overhead better spent on Wave 3 UI + 1.0.4 polish
- Can revisit if codebase complexity warrants later

---

## 📅 Changelog

**May 19, 2026 evening (this session):**
- ✅ Working tree audit completed — confirmed canonical Wave 2 work is Mark's own May 12 session
- ✅ Design + commit decisions resolved (option 3 design = adopt as-is; option 2 commit = don't commit until plan locked)
- ✅ Wave 2 commit prompt drafted in chat (single bundled commit + dead-code cleanup)
- ✅ Locked design decisions updated to reflect canonical implementation (overrides earlier draft spec)
- ✅ Corrected prior assumptions: no Jest infrastructure exists; uncommitted work IS canonical

**May 12, 2026 (asynchronous, captured this session):**
- ✅ Wave 1a SS data layer committed (c4b1d1c, 11:01 EDT) — **unpushed**
- 🟡 Wave 2 hand-coded in single 3-minute session (17:16–17:19 EDT) — uncommitted until Wave 2 commit fires

**Earlier history:** see SC_MASTER_ACTIVE v5.5 and SC_MASTER_FROZEN v5.2.

---

## 🔗 Cross-References

- **SC_MASTER_FROZEN.md v5.2** — stable platform decisions, monetization model, program roadmap, throttle/promo rules
- **SCS_MP v6.1** — parent doc, three-lane portfolio architecture, cross-cutting workflow lessons

---

*Active tracker for SC iOS app. Wave 2 canonical implementation captured this session; commit pending.*
