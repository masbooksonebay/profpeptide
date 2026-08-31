# Weightlifting Nation — Master Active Tracker

**Status:** ACTIVE TRACKER — dynamic state for the WN iOS app workstream
**Version:** v1.1 (May 27, 2026) — Phase 1a competitive research complete; build-kickoff gate open
**Parent:** WN_MASTER_FROZEN v1.1
**Cross-referenced in:** SCS_MP v6.6

---

## 📍 Status Snapshot (May 27, 2026)

**PHASE:** Pre-build methodology specification phase. Russia v3 locked. China + Bulgaria + Foundation specs pending. Engine implementation NOT started.

**BUILD-KICKOFF GATE:** Effectively open. Both prerequisites met:
- ✅ HR live on App Store (worldwide as of May 27, 2026)
- ✅ SC v1.0.4 in Apple Review (submitted, currently waiting verdict)

**REPO:** Not yet created. No `~/Desktop/weightlifting-nation` directory exists.

---

## ✅ Completed Work

### Russia methodology spec v3
- Multi-LLM refinement process: v1 → 4-LLM first-pass → v2 → 4-LLM second-pass → ChatGPT tiebreaker → v3 lock
- File: `WN_Russia_Methodology_Spec_v3.md` (in project knowledge folder)
- 19 sections covering principles, mesocycle structure, intensity classification, variant catalog, sub-programs, recovery, equipment substitution, etc.

### Phase 1a competitive research (NEW v1.1)
- File: `WN_PHASE_1A_COMPETITIVE_BRIEF.md` (in project knowledge folder)
- 1,500-2,500 word competitive analysis covering four market categories:
  - Adaptive AI programming apps (Weightlifting.ai, Peak Strength, JuggernautAI)
  - Program libraries + coaching subscriptions (Catalyst Athletics, TrainHeroic, Boostcamp, Torokhtiy, Ma Strength)
  - Utility/tool apps (Olympic Weightlifting App, GymBook, Deep Strength)
  - Adjacent video/kinematic analysis (non-overlap noted)

---

## 🔓 Build-Phase Open Questions (NEW v1.1)

Five decisions surfaced by Phase 1a research that need answers when build phase opens:

1. **JuggernautAI OL ship timing monitoring** — they're publicly "in development." Monthly check via web search / public announcements. If they ship before WN, AI-flagship angle becomes crowded.

2. **Demo video library — v1.0 vs v1.1 decision.** Competitors have 600+ videos (Peak Strength) or world-class lifter demos (Weightlifting.ai). WN needs minimum demo coverage for primary lifts + key variants. Options: ship v1.0 with stock YouTube embeds (e.g., Catalyst/Torokhtiy public content with attribution) OR defer to v1.1 and produce originals.

3. **Per-session readiness flag for Russia spec.** JuggernautAI's motivation/sleep/nutrition/soreness 1-5 panel is well-established adaptive-AI pattern. WN's quality gates use miss count + technique scores + pain flags (richer + OL-specific). Decision: add lightweight sleep/readiness flag now (Russia v3.1) OR defer to engine spec phase. **Current default: defer to engine spec.**

4. **Bulgarian onboarding gating to advanced-tier confirmation.** Zero Bulgarian-methodology apps exist anywhere. Strong competitive whitespace. Bulgarian daily-max-only methodology is unforgiving for novices. Consider gating Bulgaria selection to advanced-tier confirmation in onboarding.

5. **Pricing exact landing point in $29-40/mo band.** Adaptive OL/PL apps cluster at $29-40/mo, $300-350/yr. WN's Option C subscription + first-100 grandfathering should land in this band. Exact point pending engine implementation context.

---

## 🔒 Russia Spec Refinements — Deferred to Engine Spec

Three refinements were flagged in Phase 1a brief for potential Russia spec update. Deliberate decision: **do not re-open Russia spec v3.** All three belong in engine spec phase, not methodology spec:

| Refinement | Status |
|---|---|
| Per-session readiness flag (sleep 1-5) | Engine spec decides input field design |
| 6th-day option for advanced tier | Engine spec routing decision (Russia methodology supports 5-6 sessions/week at advanced tier — already accommodated by tier structure) |
| Attempts tracking UX (Peak Strength pattern) | UI pattern, not methodology — engine spec UI scope |

Russia v3 stays locked as stable methodology anchor.

---

## 🔓 Pending Workstream Items

### High Priority (when returning to WN methodology work)

1. **China methodology spec**
   - Same multi-LLM refinement process as Russia (v1 → 4-LLM first-pass → v2 → 4-LLM second-pass → tiebreakers → v3)
   - Estimated shorter than Russia (~2,500-3,500 words) given thinner English-language documentation
   - Key methodology: daily-max + backoff approach (Chen Wenbin, Yu Jie, modern Chinese national team)

2. **Bulgaria methodology spec**
   - Same multi-LLM process
   - Likely shortest of the three (most distinctive methodology, less documentation)
   - Key methodology: daily-max-only, log-only, no prescribed work outside max attempt (Abadjiev legacy + modern Bulgarian/Greek lifters)
   - Bulgarian onboarding gating decision (per open question #4 above) lives here

3. **Foundation phase programming**
   - System-independent (same regardless of Russia/China/Bulgaria routing)
   - One LLM critique cycle
   - Technique acquisition without percentage-based prescription
   - Fixed light loads, quality-based progression

4. **Variant catalog completion**
   - Russia v3 has the Russian variant catalog (Section 7 of methodology spec)
   - China and Bulgaria specs need their variant catalogs (12-18 variants each)
   - Each country has distinct terminology and percentages

### Medium Priority

5. **Engine architecture spec** — once all four methodology specs locked
   - Data structures (TypeScript types, schemas)
   - State machine for 12-week macrocycle progression
   - Quality gate logic
   - Methodology routing (one engine + country modules vs three engines)

6. **Repo creation** — `~/Desktop/weightlifting-nation` (Expo)

7. **UI scaffolding + onboarding flow** — once engine implemented

---

## 🎯 Build-Phase Sequencing (Locked v1.1)

Order of operations when build phase opens:

1. China + Bulgaria + Foundation methodology specs (parallel or sequential)
2. Variant catalog completion (China + Bulgaria)
3. Engine architecture spec
4. Repo creation
5. Engine implementation in code
6. UI scaffolding around engine
7. Onboarding flow (8 fields)
8. Session viewer + logger
9. TestFlight cycle
10. App Store submission

Estimated 4-8 weeks of focused CC + Mark cycles from repo creation to first TestFlight.

---

## 📅 Changelog

**May 27, 2026 (v1.0 → v1.1):**
- ✅ Phase 1a competitive research COMPLETE — moved from Pending Workstream #1 to Completed Work
- ✅ Brief saved as `WN_PHASE_1A_COMPETITIVE_BRIEF.md` in project knowledge
- ✅ 5 build-phase open questions surfaced and documented
- ✅ Russia spec refinements explicitly deferred to engine spec phase
- ✅ Build-kickoff gate effectively open (HR live, SC v1.0.4 in review)
- ✅ Strategic positioning notes added to WN_MASTER_FROZEN v1.1 (methodology-toggle uncontested, JuggernautAI threat, pricing band confirmation, Bulgarian whitespace)
- ✅ Build-phase sequencing locked

**Prior session entries:** see WN_MASTER_ACTIVE.md history.

---

## 🔗 Cross-References

- **WN_MASTER_FROZEN v1.1** — frozen rules, strategic positioning, methodology scope
- **WN_Russia_Methodology_Spec_v3.md** — locked methodology spec
- **WN_PHASE_1A_COMPETITIVE_BRIEF.md** — competitive research artifact
- **SCS_MP v6.6** — parent doc, cross-cutting workflow lessons
- **HR_MASTER v8** — sibling iOS app reference
- **SC_MASTER_ACTIVE v5.12** — sibling iOS app reference

---

*Active tracker for WN iOS app. Updated as specs lock, milestones complete, build phase opens.*
