# Weightlifting Nation — Master Active Tracker

**Version:** 1.0
**Last updated:** May 16, 2026
**Status:** Concept locked, naming locked, v1.0 system lineup locked. v1.0 spec to be finalized in next dedicated WN session. Build kickoff sequenced behind HR App Store launch + SC 1.0.3 stability.
**Pair doc:** WN_MASTER_FROZEN.md (stable strategic decisions, methodology scope, build approach, things-never-to-do)
**Methodology specs:** WN_Russia_Methodology_Spec_v3.md (canonical Russia lock; China + Bulgaria specs pending)

---

## 📍 Status Snapshot (May 16, 2026)

**PHASE:** Pre-build — methodology specification work paused while SC + HR ship.

**LOCKED:** Strategic positioning (AI-flagship + methodology-platform hybrid), naming (Weightlifting Nation / Nation / Global Training Systems), v1.0 system lineup (Russia + China + Bulgaria), app identity, build approach, onboarding fields, Russia methodology spec (v3).

**IN FLIGHT:** Nothing actively building. All WN workstream items paused.

**BLOCKED:** Build kickoff blocked behind HR App Store launch + SC 1.0.3 stability. No WN code yet.

**NEXT IN QUEUE:** Phase 1a competitive research on Olympic weightlifting apps (~1-2 hours), then Phase 1b China methodology spec drafting.

---

## 📚 Session History / Changelog

- **v1.0** (May 5, 2026) — Initial multi-system methodology platform concept (Russian + Chinese launch). Oly_MASTER v1 created.
- **v1.1 planning** — Bulgarian + American expansion lineup
- **v1.2+ planning** — Cuban / Hybrid / named programs
- **v2.0** (May 8, 2026) — **AI-flagship pivot.** "Oly AI" working name, free→subscription pricing, 6-feature v1 scope, v2 form check feasibility validated. Wizard app removed from SCS portfolio same session.
- **v3.0** (May 10, 2026 mid-session) — **App naming LOCKED.** App Store name "Weightlifting Nation," visual brand "Nation," subtitle "Global Training Systems." Ranked fallback list (Lineage / Atlas / Pantheon / Legacy). App Store availability verified clean. Naming glossary added.
- **v3.1** (May 10, 2026 evening) — **v1.0 SYSTEM LINEUP LOCKED.** Russian + Chinese + Bulgarian for v1.0 launch (decided after Claude pushback against initial Russia + China + USA proposal). USA moves to v1.1.
- **May 11, 2026 — Russia v3 spec lock + WN_State_Capture.** Russia methodology spec finalized through 4-LLM critique cycle (v1 → v2 → v3, 38+ refinements). App identity, methodology scope, build approach, onboarding fields, engine architecture all locked. Domains acquired: weightliftingnation.com (Cloudflare) + weightliftingnation.shop (GoDaddy). First-100 grandfathering pattern locked (mirrors SC). Russia methodology spec saved as standalone WN_Russia_Methodology_Spec_v3.md.
- **May 16, 2026 — Oly doc retirement + WN consolidation.** Oly internal codename deprecated. Oly_MASTER (4).md content + WN_State_Capture.md content consolidated into WN_MASTER_FROZEN + WN_MASTER_ACTIVE pair (this doc). All cross-references in sibling ref docs (SCS_MP, SC_MASTER_FROZEN, HR_MASTER) updated to point to WN_MASTER.

---

## 🔓 Pending Workstream Items

### High Priority (resume here when returning to WN)

1. **Competitive research on Olympic weightlifting apps**
   - Apps to research: Catalyst Athletics Online, JuggernautAI, TrainHeroic, Boostcamp, Hookgrip, methodology-specific apps if any
   - Adjacent (non-overlap): WL Analysis, Iron Path, Coach's Eye, Hudl Technique
   - Per-app questions: methodology approach, onboarding flow, progression model, pricing, ratings, top user complaints/praises
   - Strategic questions: does anyone offer methodology-toggle programming? Standard onboarding for OL apps (compare to WN's 8 fields). Standard variant catalogs. Standard progression models. Table-stakes features WN might be missing.
   - Output: ~1,500-2,500 word competitive analysis brief + "v3 updates if any" section
   - **Should happen BEFORE China methodology drafting** to catch any landscape-informed adjustments

2. **China methodology spec**
   - Same multi-LLM refinement process as Russia (v1 → 4-LLM first-pass → v2 → 4-LLM second-pass → tiebreakers → v3)
   - Estimated shorter than Russia (~2,500-3,500 words) given thinner English-language documentation
   - Key methodology: daily-max + backoff approach (Chen Wenbin, Yu Jie, modern Chinese national team)

3. **Bulgaria methodology spec**
   - Same process as Russia and China
   - Likely shortest of the three (most distinctive methodology, less documentation)
   - Key methodology: daily-max-only, log-only, no prescribed work outside max attempt (Abadjiev legacy + modern Bulgarian/Greek lifters)

4. **Variant catalog completion**
   - Russia v3 has the Russian variant catalog (Section 7 of methodology spec)
   - China and Bulgaria specs need their variant catalogs (12-18 variants each)
   - Each country has distinct terminology and percentages

5. **Foundation phase programming**
   - System-independent (same regardless of Russia/China/Bulgaria routing)
   - Specify once, one LLM critique cycle
   - Technique acquisition without percentage-based prescription
   - Fixed light loads, quality-based progression

### Medium Priority

6. **Programming critique cycles (representative tier)**
   - Russia Intermediate 12-week macrocycle → 4-LLM critique → lock
   - China Intermediate 12-week macrocycle → 4-LLM critique → lock
   - Bulgaria Intermediate 12-week macrocycle → 4-LLM critique → lock
   - Document Beginner/Advanced/Elite modifiers per country (volume %, intensity %, frequency)

7. **Engine specs**
   - Translation layer between methodology spec (philosophical) and CC code
   - Converts methodology into deterministic engine rules
   - ~1,500-2,500 words per country
   - 1-2 LLM validation (not full 4-LLM cycle)
   - This is what CC actually consumes

8. **App architecture (can parallelize with later methodology work)**
   - WN app shell can start once Russia engine spec is locked
   - Reuses SC scaffolding (data model, onboarding flow, session CRUD, charts)
   - Unique work: methodology engine; rest is standard

---

## ❓ Open Questions (need resolution before further methodology work)

1. **Competitive research findings** — Does competitive landscape reveal anything that changes Russia v3? Are there methodology approaches in the market we're not aware of? Pricing/onboarding/feature norms?
2. **Variant catalog scope** — Per country: how many variants minimum (12-18 estimated)? Standard vs Anglicized terminology? Loading percentages per variant.
3. **Engine spec format** — Exact format / structure not yet defined. Should be CC-consumable (deterministic rules, decision trees, lookup tables). Per country or unified engine with country-specific configs?
4. **Coach validation network** — Need 2-3 Oly coaches beyond Tyler for v2 form-check validation. Coverage should span Russian / Chinese / Bulgarian style preferences.
5. **Subscription pricing tier** — Specific dollar amount ($9.99? $14.99? $19.99? Test against Oly community price sensitivity). Same tier as SC, or separate WN tier given AI-flagship positioning? Monthly / annual / both?
6. **HealthKit integration scope** — Full HRV/sleep/recovery integration in v1? Or start with simpler inputs (subjective readiness, manual sleep entry)?
7. **v1.1 canonical American coach decision** — When v1.1 ships USA, which American coach's methodology counts as canonical? Options: Catalyst (Greg Everett), Cal Strength (Glenn Pendlay heritage), MDUSA, or support multiple sub-traditions within American+ category?
8. **Cultural context content scope** — Each v1.0 system needs heritage/figures/philosophy content. How deep? In-app reference articles? Coach voice training material only? Defer detail decision to v1.0 spec session.
9. **Bulgarian methodology spec depth** — Pure Abadjiev orthodoxy vs "Bulgarian-influenced" modern interpretation? Decision affects user safety messaging (Bulgarian volume is contraindicated for many recreational lifters).

---

## 🏗️ Build Sequence & Timeline (estimated)

**Sequence priority (per SCS portfolio):**
1. HR App Store launch (Wave 3D v5 committed; shipping imminent)
2. SC 1.0.4 + 1.0.5 stable
3. WN v1 build kickoff (next major project after HR + SC stable)
4. WN soft launch + free tier
5. WN Pro subscription introduction
6. WN v2 (video form check feasibility validated; coach validation pathway required before ship)

**Rough timeline (CC-driven build):**
- v1 build: ~3-6 months (similar scope to HR)
- Soft launch + iteration: ~3 months
- Subscription introduction: ~6 months post-launch
- v2 form check: design → prototype → coach validation → beta → ship = ~3-6 months
- **Total kickoff to v2 ship: ~12-15 months**

**Pre-kickoff dependencies (research phase):**
- Apple Org conversion completed (unblocks SCS LLC org account for new apps)
- HR Phase 3 complete + paid coach review wrapped (HR at feature parity before splitting attention)
- SC 1.0.5 subscription stable
- Methodology specs: China + Bulgaria locked through 4-LLM critique cycles
- Foundation phase spec locked
- Engine specs translated for all three systems

**Total estimated LLM critique cycles before code starts:** ~32-38. Realistic CC start: 6-8 weeks of steady methodology work after WN session resumes.

---

## 🎯 Recent Milestones

| Milestone | Date | Status |
|-----------|------|--------|
| Multi-system concept locked | May 5, 2026 | ✅ |
| AI-flagship pivot | May 8, 2026 | ✅ |
| App naming locked (Weightlifting Nation) | May 10, 2026 | ✅ |
| v1.0 system lineup locked (Russia + China + Bulgaria) | May 10, 2026 | ✅ |
| Russia methodology spec v3 locked | May 11, 2026 | ✅ |
| Domains acquired (.com + .shop) | May 10-11, 2026 | ✅ |
| Onboarding fields + engine architecture locked | May 11, 2026 | ✅ |
| WN ref doc consolidation (Oly retirement) | May 16, 2026 | ✅ |
| Competitive research on OL apps | TBD | 🟡 Queued (Phase 1a) |
| China methodology spec | TBD | 🟡 Queued (Phase 1b) |
| Bulgaria methodology spec | TBD | 🟡 Queued (Phase 1c) |
| Foundation phase spec | TBD | 🟡 Queued (Phase 1d) |
| Build kickoff | TBD | ⏳ Blocked behind HR + SC stability |

---

## 📁 Pending References / Files

- WN_MASTER_FROZEN.md (frozen pair doc — stable decisions, methodology scope, things-never-to-do)
- WN_Russia_Methodology_Spec_v3.md (canonical Russia lock; in project knowledge)
- WN_China_Methodology_Spec.md — TBD
- WN_Bulgaria_Methodology_Spec.md — TBD
- WN_Foundation_Phase_Spec.md — TBD
- WN engine specs (per system) — TBD, format pending

---

## 🔄 When Resuming WN Work

**Re-read order:**
1. WN_MASTER_ACTIVE.md (this doc — current state)
2. WN_MASTER_FROZEN.md (locked decisions, methodology scope, things-never-to-do)
3. WN_Russia_Methodology_Spec_v3.md (canonical methodology)
4. SCS_MP (broader portfolio context)
5. SC_MASTER_FROZEN + ACTIVE (precedent for multi-program platform + Ask Coach pattern)
6. HR_MASTER (precedent for Coach Rob AI implementation)

**Then proceed with:** Phase 1a (competitive research) → Phase 1b (China methodology v1 draft) → Phase 1c (Bulgaria methodology v1 draft) → Phase 1d (Foundation phase) → Phase 2-4.

---

*This is the ACTIVE tracker. Stable rules and decisions live in WN_MASTER_FROZEN.md.*
