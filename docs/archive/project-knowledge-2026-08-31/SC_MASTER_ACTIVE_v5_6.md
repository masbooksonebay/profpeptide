# SC MASTER ACTIVE TRACKER v5.6

**Status:** ACTIVE TRACKER — dynamic state for Strength Cycle workstream
**Version:** v5.6 (May 15, 2026)
**Source:** Updated from v5.5 (May 13, 2026) — minor delta capturing this session
**Pairs with:** SC_MASTER_FROZEN (stable rules)
**Cross-referenced in:** SCS MP, HR_MASTER

---

## v5.5 → v5.6 CHANGELOG

**Delta this session:**
- ✅ Wave 1a Starting Strength data layer + runtime helpers — committed `c4b1d1c` (already documented in v5.5)
- 🟡 Wave 1b state machine — CC prompt drafted, not yet sent (deferred while HR + PP took priority)
- 🆕 PP v1.0.2 ship pattern as reference for SC 1.0.4 ship workflow
- 🆕 PP review prompt integration pattern (`expo-store-review` + `lib/reviewPrompt.ts`) ready to mirror for SC 1.0.4

---

## CURRENT STATE (May 15, 2026)

### App Identifiers
- **Bundle ID:** (TBD — verify in app.json)
- **ASC App ID:** 6762101377
- **Repo path:** `~/Desktop/strength-cycle`
- **Team:** Strength Cycle Studios, LLC (VCT64S7K6P) — app-level migration pending
- **Working tree:** Clean post Wave 1a commit

### Live Version
- **Version:** 1.0.3 (or current — verify)
- **Status:** Live on App Store under Mark's individual Apple Dev account
- **Migration to SCS LLC team:** PENDING (same workflow as PP migration)

### In Development
- **Wave 1a — Starting Strength data layer:** ✅ COMMITTED `c4b1d1c`
  - 7 files changed, 359/5 ins/del
  - `lib/programs/startingStrength.ts` with 5 helpers
  - tsc clean, 8/8 tests pass
- **Wave 1b — Stall state machine:** PROMPT DRAFTED, NOT SENT
  - Single-pass review + send pending Mark's decision
- **1.0.4 polish backlog:**
  - 5/3/1 AMRAP counter reset
  - Program-switch 1RM elimination
  - SS onboarding leverages existing data
  - 🆕 Add `expo-store-review` integration (mirror PP v1.0.2 pattern)
- **1.0.5 — Subscription:** Option C SC Pro tier + Paid Apps Agreement signing (prerequisite)

---

## STARTING STRENGTH IMPLEMENTATION (Wave 1a SHIPPED)

### Six Decisions Locked
1. **B-day variant:** Deadlift-only (no Power Clean)
2. **Authority:** Rippetoe canonical
3. **Starting weights:** User-entered working weight
4. **Progression:** 5×5 → 5×3 → 5×1 drop pattern
5. **Stall response:** Graduate to TM after 3 stalls or 2nd-lift deload
6. **Name + disclaimer:** "Starting Strength" with Rippetoe attribution disclaimer

### Architecture
- Same pattern as 5/3/1 Boring But Big
- Stall counter + auto-graduation to Texas Method
- All lifts: Squat, Bench, Press, Deadlift
- A/B alternating session structure

### Wave 1a Files Shipped
- `lib/programs/startingStrength.ts` — data layer + helpers
- Tests added (8/8 passing)
- Type definitions wired in
- Runtime helpers exposed for UI consumers

### Wave 1b Pending
- Stall state machine logic
- Graduate-to-TM trigger
- 5x5 → 5x3 → 5x1 progression handling
- Deload week detection

---

## REVIEW PROMPT — NEW POLISH ITEM FROM PP REFERENCE (NEW v5.6)

Mirror PP v1.0.2's review prompt pattern in SC 1.0.4:

### Implementation Pattern
- Install `expo-store-review`
- Build `lib/reviewPrompt.ts` helper
- Storage keys for usage tracking:
  - `sc_workout_complete_count`
  - `sc_pr_count`
  - `sc_has_asked_for_review`
- Triggers:
  - After completing first 5/3/1 deload cycle (meaningful 4-week arc)
  - After hitting a PR (1RM update)
  - After 30 days continuous use
  - After completing Texas Method or SS first cycle
- Per-user-lifetime gating
- Apple OS auto-rate-limits to 3/year

### Sequencing
- Add to SC 1.0.4 scope alongside SS polish
- Implement after Wave 1b ships
- Test in sim before 1.0.4 production build

---

## 1.0.4 POLISH BACKLOG (locked)

1. **5/3/1 AMRAP counter reset** — bug fix
2. **Program-switch 1RM elimination** — UX improvement (don't re-prompt for 1RM when switching programs)
3. **SS onboarding leverages existing data** — pull 1RMs already entered for 5/3/1
4. **🆕 In-app review prompt** — `expo-store-review` integration
5. **Wave 1a + Wave 1b SS implementation** complete
6. **Optional:** Tab bar review for consistency with PP pattern

---

## 1.0.5 SUBSCRIPTION (Option C — locked)

### Pattern
**Option C — Free with AI cap, paid for unlimited AI**
- Same pattern as WN (Russian methodology)
- Free tier: limited AI coach interactions
- Paid tier (SC Pro): unlimited AI + premium features

### Prerequisites
- **Paid Apps Agreement signing** — required before IAP can be configured
- Apple Developer agreement workflow
- Bank account + tax info for SCS LLC

### Workflow
- 1.0.4 ships SS + polish (no IAP yet)
- 1.0.5 introduces subscription
- Migrate to SCS LLC team before 1.0.5 to align tax/payment with LLC

---

## REPO STATE

- **Path:** `~/Desktop/strength-cycle`
- **Last commit:** `c4b1d1c` Wave 1a SS data layer
- **Working tree:** Clean
- **Branch:** main
- **Push state:** TBD — verify if c4b1d1c pushed to origin

---

## APPLE DEVELOPER ACCOUNT NOTE

SC is currently registered under Mark's individual Apple Dev account, NOT yet migrated to SCS LLC team.

### Pre-Migration Reminders
- **Don't sign Paid Apps Agreement under individual account** — sign under SCS LLC after migration
- **Don't ship 1.0.5 subscription under individual account** — would attach IAP earnings to wrong tax entity
- Migration follows same Case 102887649950 pattern as PP migration

### Migration Sequencing
1. Ship 1.0.4 polish under current account (current state OK)
2. Migrate to SCS LLC team (similar to PP migration workflow)
3. Sign Paid Apps Agreement under SCS LLC
4. Configure IAP for 1.0.5
5. Ship 1.0.5

---

## RECENT MILESTONES

| Milestone | Date | Status |
|-----------|------|--------|
| Wave 1a SS data layer | May 13, 2026 | ✅ Committed `c4b1d1c` |
| Wave 1b state machine prompt | TBD | 🟡 Drafted, not sent |
| 1.0.4 ship | TBD | Pending Wave 1b + polish |
| App-level org migration | TBD | Pending |
| 1.0.5 subscription | TBD | Pending migration + Paid Apps Agreement |

---

## PENDING NEAR-TERM

1. **Send Wave 1b CC prompt** (single-pass review + send)
2. **Implement 1.0.4 polish backlog** (AMRAP reset, program-switch 1RM, SS onboarding leverage, review prompt)
3. **Ship 1.0.4** to TestFlight + ASC
4. **Begin app-level org migration to SCS LLC** (follow PP migration pattern)

---

## ARCHITECTURAL INSIGHTS

### #6 — ASC Version Row Mechanics (from PP v1.0.1 resubmission)
- Pre-shipped versions: edit-in-place (no separate "Prepare for Submission" row)
- No What's New field on edited unshipped initial versions
- Post-shipped versions: require new version row for screenshots + structural metadata
- Inline editable on live: Promotional Text, URLs, Pricing
- Will apply to SC pattern when 1.0.4 ships

### #7 — Review Prompt Pattern (from PP v1.0.2, NEW v5.6)
- `expo-store-review` + Apple's SKStoreReviewController
- OS auto-rate-limits to 3/year
- Self-gate to once per user-lifetime in app code
- Trigger at satisfaction moments (workout completion, PR, milestone)
- Pattern reusable across HR, SC, Oly, future apps

### #8 — CC App Prompt Rules (from May 15 workflow, NEW v5.6)
- Do NOT instruct CC to capture sim screenshots
- Mark drives sim visual verification
- CC handles: tsc clean, code changes, sim refresh trigger only

---

## THINGS TO NEVER DO (SC-specific)

- **Never modify the SS data layer schema** without preserving the existing 5/3/1 pattern
- **Never ship IAP before Paid Apps Agreement is signed under SCS LLC**
- **Never modify lift names or progression rules without explicit Mark approval** (methodology integrity)
- **Never default to Power Clean as B-day variant** — locked to Deadlift-only per Wave 1a decision

---

## FUTURE BACKLOG (long-term, post 1.0.5)

- **Texas Method** implementation
- **Madcow 5×5** implementation
- **Stronglifts variant** (not Rippetoe, but adjacent)
- **Custom program builder** for advanced users
- **Apple Watch companion app**
- **Training log export** (CSV, OpenPowerlifting integration)
- **Social features** — share PRs (probably never, but flagged)

---

*End of SC MASTER ACTIVE v5.6 — May 15, 2026*
