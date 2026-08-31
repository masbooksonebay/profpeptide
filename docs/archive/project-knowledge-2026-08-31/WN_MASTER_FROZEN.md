# Weightlifting Nation — Master Ref Doc (FROZEN)

**Version:** 1.0 (FROZEN)
**Last updated:** May 16, 2026
**Status:** Stable strategic decisions, naming, methodology scope, build approach. Updated only when fundamentals change.
**Pair doc:** WN_MASTER_ACTIVE.md (dynamic state, current work, changelog)
**Replaces:** Oly_MASTER.md (v3.1) — "Oly" internal codename deprecated; project now uses "WN" / "Weightlifting Nation" throughout

---

## v0 → v1.0 Changelog (Source Consolidation)

This frozen doc is a fresh creation that consolidates:
- Oly_MASTER (4).md v3.1 (May 10, 2026 evening) — strategic pivot, naming lock, v1.0 system lineup lock
- WN_State_Capture.md (May 11, 2026) — app identity, methodology scope, build approach, onboarding fields, Russia methodology summary
- Russia v3 spec is captured in standalone WN_Russia_Methodology_Spec_v3.md (NOT duplicated here)

**Deprecations:**
- "Oly" filename retired (was Oly_MASTER.md)
- "Oly" as portfolio shorthand → "WN"
- "Oly AI" working name from v2 → "Weightlifting Nation"

---

## 🏷️ Naming Glossary (read first)

- **Weightlifting Nation** — App Store / customer-facing product name (locked May 10, 2026)
- **Nation** — visual brand inside the app and marketing surfaces
- **Global Training Systems** — App Store subtitle (current direction, can iterate)
- **WN** — informal shorthand for Weightlifting Nation; portfolio-level abbreviation alongside PP / SC / HR / CF / Cali
- **Oly** (DEPRECATED May 16, 2026) — prior internal codename. References to "Oly AI" or "Oly_MASTER" in historical chat / memory / older ref docs refer to this project, now exclusively named Weightlifting Nation / WN.

---

## 🎯 Strategic Positioning (locked May 8, 2026)

WN is positioned as an **AI-flagship product with methodology backbone.**

**Driver:** SCS portfolio AI strategy decision. Rather than build parallel AI versions of existing apps (Strength AI, Hybrid AI, etc.), build ONE AI-flagship in a different category. Olympic weightlifting selected as the venue because:

1. **No cannibalization.** No "Oly classic" exists yet. Weightlifting Nation is the only SCS Oly app, no audience split.
2. **Smallest TAM = lowest-risk experimentation venue.** If AI-flagship pattern doesn't work, lesson is cheap. If it works, validates pattern for future plays.
3. **Multi-country programming pairs uniquely well with adaptive AI.** Pure prescriptive methodologies (5/3/1, Hyrox) are less AI-leverageable than Oly's nuanced multi-system approach where individual response varies hugely.
4. **Olympic weightlifting users skew sophisticated.** Researchers by nature, will engage with AI features deeply.
5. **Clean App Store keyword capture.** "Olympic weightlifting AI," "AI weightlifting" — no competing apps. "Weightlifting Nation" verified clean (May 10, 2026 search) — no existing App Store entry with this name.

**Cross-app portfolio role:** WN is the AI-flagship; SC is the methodology-flagship. Both apps share the methodology-platform pattern (multi-program/multi-system, faithful implementation), but WN leads with AI personalization as the central value prop while SC leads with methodology fidelity.

---

## 🏷️ Naming — Locked Direction (May 10, 2026)

### Selected (working)
- **App Store name:** Weightlifting Nation
- **Visual brand (in-app + marketing):** Nation
- **Subtitle direction:** Global Training Systems

### Reasoning
- "Weightlifting" in the name → App Store search clarity and category signal
- "Nation" feels strong as the brand inside the app — single-word, ownable, identity-coded
- Fits the multi-system concept: training systems inspired by national weightlifting traditions
- Communal hook: users feel they're joining something bigger — a serious global weightlifting culture
- Verified clean in App Store search (May 10, 2026): no existing app uses this name

### Fallback ranking (if Apple rejects or competitive landscape shifts)
1. **Lineage Weightlifting** — Brand: Lineage
2. **Atlas Weightlifting** — Brand: Atlas
3. **Pantheon Weightlifting** — Brand: Pantheon
4. **Legacy Weightlifting** — Brand: Legacy

Lower-priority candidates retained for audit: Platform Lineage, Kilo Atlas, Platform Systems, Heritage Weightlifting, Vanguard Weightlifting, Provenance Weightlifting, Legends Weightlifting.

---

## 🌍 v1.0 System Lineup — LOCKED (May 10, 2026)

**v1.0 launch ships with THREE national training systems:**

1. **Russian System** (Soviet/post-Soviet tradition) — wave loading periodization, ~68% of lifts in 70-85% range, only ~5% above 90% (Vorobyev's research-derived distribution). Lineage: Matveyev / Verkhoshansky / Medvedyev / Vorobyev / Roman. Modern Sheiko PL programming inherits directly. **Implementation: "Russian Cycle (Medvedyev-influenced)" as v1.0 flagship.** Verkhoshansky block periodization candidate for v1.1 alternate.

2. **Chinese System** (PRC national team / position-based tradition) — high frequency, daily-max + backoff philosophy. Lineage: Chen Wenbin, Yu Jie, modern Chinese national team. Primary English-language source: Buitrago + Ma Jianping's "Chinese Weightlifting: Technical Mastery and Training" (Verante Publishing).

3. **Bulgarian System** (Abadjiev tradition) — daily-max-only, log-only, no prescribed work outside max attempt. Lineage: Abadjiev legacy + modern Bulgarian/Greek lifters. Most distinctive methodology of the three.

**USA/American+ moves to v1.1** as headlining post-launch addition.

### Reasoning (vs alternative Russia + China + USA proposal)

Mark initially proposed Russia + China + USA for v1.0, with Bulgaria deferred to v1.1. Claude pushed back recommending Bulgaria over USA for v1.0. Decision rationale:

1. **Methodology contrast is maximized.** Russian / Chinese / Bulgarian are the three most distinctive Olympic weightlifting traditions. The contrast IS the pitch. American methodology overlaps Russian/Chinese influences too heavily to add maximum differentiation at v1.0.
2. **Bulgaria's absence would feel weird to the sophisticated audience.** Olympic weightlifting users are sophisticated and know Abadjiev.
3. **v1.1 USA-first launch becomes a marketing moment** rather than buried in the v1.0 lineup.

### Foundation Phase
System-independent gating mechanism for true beginners. Routes into any of the three Russia/China/Bulgaria engines after technical competency checklist completion. 4-8 weeks minimum, open-ended. Specified once (not per-country); one LLM critique cycle.

### v1.1+ System Backlog (deferred from v1.0)
- USA / American+ (headlining v1.1 addition)
- Modern Russian Federation sub-mode
- Cuban (recovery emphasis)
- Hybrid (Juggernaut/Aita blend)
- Named programs (Smolov, Pendlay 8-week, Torokhtiy 13-week base)

---

## 📱 App Identity

- **App Store name:** Weightlifting Nation
- **Visual brand:** Nation
- **Subtitle:** Global Training Systems
- **Bundle ID:** TBD (likely `com.weightliftingnation.app` or `com.scs.weightliftingnation`)
- **ASC App ID:** TBD (assigned at first build submission)
- **Apple Team ID:** VCT64S7K6P (current under personal account; org migration case 102887649950 still pending)
- **Studio:** SCS LLC
- **Domains owned:**
  - weightliftingnation.com (Cloudflare Registrar)
  - weightliftingnation.shop (GoDaddy)
- **Planned .app domain:** at Cloudflare Registrar ($14.20/yr at-cost)
- **Repo path (when build starts):** `~/Desktop/weightlifting-nation` (or similar; final convention at build kickoff)

---

## 🏗️ App Build Approach

**Build complexity:** ~ SC scale (not 2-3× harder despite multi-system complexity). Methodology engine is the unique work; rest reuses SC scaffolding (data model, onboarding flow, session CRUD, charts, Ask Coach pattern).

**Tech stack:** Expo / React Native, iOS-only (matches SC + HR pattern).

**Architecture pattern:**
- Programming app primary; education layered via Ask Coach "guide" section (SC pattern)
- System selection as educational moment (NOT a settings picker — first app open teaches methodology differences)
- Per-system programming engine: methodology spec → engine spec (deterministic rules CC can consume) → engine code

**v1.0 must-haves:**
- Variant library (per-system catalog, 12-18 variants each)
- Bodyweight tracking (Sinclair coefficient calculation enabled in v1.1 backlog)
- RPE input
- Cycle calendar view
- System-selection educational page
- Foundation phase technical-competency checklist
- Test-session attempt protocol (opener 90-93% / second 96-100% / third PR)
- Equipment substitution rules (no blocks → hang variation, no jerk blocks → jerk from rack, no platform → reduce max attempts)
- Competition date integration (truncate/reposition current block when competition entered)

**v1.1 backlog (deferred from v1.0):**
- Sinclair coefficient display
- User video logging per set
- Competition mode
- Phase-dependent ratio bands (per Bondarenko's position)
- Annual periodization structure (year-level planning with 2-3 peaking cycles)
- Verkhoshansky block periodization variant for advanced users
- Soviet sport classification routing (II разряд / I разряд / КМС / МС / МСМК)
- Bar velocity / VBT integration
- Female-specific volume/intensity defaults beyond ratio adjustments
- Readiness markers (sleep, RHR, subjective 1-10) as soft signals
- Coach mode (coach overrides engine)
- v2 form-check feasibility (Apple Vision pose estimation + Claude vision API hybrid; ~$0.04-0.10 per analysis)

**Explicit non-goal:** bar path / kinematic analysis (defer to WL Analysis / Iron Path; non-overlap with those incumbents).

---

## 📝 Onboarding Fields (locked)

**8 base fields + selectors:**

1. Snatch 1RM
2. C&J (Clean & Jerk) 1RM
3. Back Squat 1RM
4. Front Squat 1RM (optional; defaults to 87% of BS if absent; user prompted to test within 4 weeks)
5. Bodyweight
6. Age
7. Sex (locked for ratio engine adjustment — male 78-83% Snatch:C&J target / female 80-85%)
8. Experience level / years

**Plus selectors:**
- Training days/week
- Goal selection
- Clean-vs-jerk limiter ("which fails more often: clean, jerk, or both?")
- Equipment status (collected for substitution rules)

---

## 🧮 Engine Architecture Notes (locked principles)

**From WN_Russia_Methodology_Spec_v3 — these locks apply across all three systems:**

- **5-bucket exercise classification:** Classic / Power / Pull / Squat / Accessory
- **Tonnage hidden from main user dashboard** (advanced metrics panel only)
- **Working max ramp:** 90% new intermediate → 92% post-macrocycle validation; 92% advanced default → 95% validated unlock; aggressive intermediate toggle (1RM <8wk + 2+ yrs + clean technique)
- **Bondarenko rule stress-threshold (simplified):** "Do not pair Heavy Clean + Heavy Back Squat in same session" with tightening for vulnerable users
- **Peak intensity tiered:** 78-82% intermediate / 80-84% advanced / 82-85% elite low-volume peak only
- **Test-session attempt protocol:** opener 90-93% / second 96-100% / third PR
- **Age/masters adjustment table:** 35-44 / 45-54 / 55+ modifiers
- **Equipment substitution rules** (locked)
- **First-macrocycle "lead-in" handling:** -20% NL cycle 1 for fresh intermediates
- **Technical-quality score 1-5** per primary lift (operationalizes quality gates)

**Snatch:C&J intervention bands:**

| Snatch:C&J | Interpretation | Required corroboration | Programming bias |
|-----------|----------------|------------------------|-------------------|
| <76% | Significant snatch deficit | Persistent 2+ weeks + snatch misses logged | Add snatch from blocks, snatch pulls, snatch balance, OHS |
| 76-78% | Mild snatch lag | Persistent 4+ weeks + technical quality ≤3 on snatch | Modest snatch variant emphasis |
| 78-83% (male) / 80-85% (female) | Balanced | N/A | Default variant rotation |
| 83-85% | Mild C&J lag | Persistent 4+ weeks + C&J misses or jerk limiter flagged | Modest C&J / jerk variant emphasis |
| >85% | Significant C&J deficit | Persistent 2+ weeks + clean OR jerk limiter | Branch by limiter (jerk diagnosis tree) |

**Priority cascade (resolves multi-ratio conflicts):**
1. Pain / injury / mobility constraint (always overrides programming)
2. Competition-lift imbalance most directly affecting total — severe Snatch:C&J abnormality
3. Clean vs jerk limiter identification (from onboarding question + miss patterns)
4. Classic-lift : squat ratios (strength floor)
5. Power variation : full lift ratios (technique refinement)
6. Pull : classic lift ratios
7. User-selected weak point (last priority)

**Cap:** 1 primary correction + 1 secondary correction per mesocycle.

---

## 📋 Workflow Sequence (Methodology → Build)

```
PHASE 1 — Methodology locks
1a. Competitive research on existing OL apps (~1-2 hours)
1b. China methodology spec → 4-LLM first-pass → v2 → 4-LLM second-pass → tiebreakers → v3 lock
1c. Bulgaria methodology spec → same cycle
1d. Foundation phase programming (system-independent) → 1 LLM critique cycle
1e. Variant catalog completion for all three countries

PHASE 2 — Programming locks (representative tier only)
2a. Russia Intermediate 12-week macrocycle → 4-LLM critique → lock
2b. China Intermediate 12-week macrocycle → 4-LLM critique → lock
2c. Bulgaria Intermediate 12-week macrocycle → 4-LLM critique → lock
2d. Document Beginner/Advanced/Elite modifiers per country

PHASE 3 — Engine specs
3a. Russia engine spec (methodology → deterministic rules) → 1-2 LLM validation
3b. China engine spec → same
3c. Bulgaria engine spec → same

PHASE 4 — App build (can start partially during Phase 3)
4a. CC starts WN app shell once Russia engine spec is locked
4b. Plug in China engine when ready
4c. Plug in Bulgaria engine when ready
4d. Beta launch with Russia + China + Bulgaria + Foundation
```

**Total estimated LLM critique cycles:** ~32-38. Realistic CC start: 6-8 weeks of steady methodology work after kickoff.

**Build prerequisite:** HR App Store launch + SC 1.0.3 stable + WN kickoff after both ship.

### Key Principle Reminders
- Multi-LLM critique catches methodology errors single-source review misses (Russia v3 process validated this — 38+ refinements absorbed)
- Don't let methodology refinement become procrastination — China and Bulgaria may converge faster than Russia did; accept and move forward
- **Engine spec is the deliverable to CC**, not methodology spec — methodology informs engine; CC consumes engine
- App scaffolding parallelizes with methodology completion — don't sequential everything
- Tier-1 representative programming critique only; derive other tiers via modifiers — saves 60+ critique cycles

---

## 📣 Positioning Copy Directions (refresh after lineup lock)

> "Welcome to Weightlifting Nation. Built on the three most distinctive Olympic weightlifting traditions — Russian periodization, Chinese position work, Bulgarian daily-max minimalism. AI that listens to your training response and tunes your programming in real time. American methodology coming in 1.1."

> "Three nations, three traditions, one AI coach. Pick Russia for periodization. Pick China for position depth. Pick Bulgaria for nervous-system tolerance. The app learns your response and switches the recommendation when your data says you've outgrown your system. Welcome to the Nation."

> "Real Olympic weightlifting methodology — Russian, Chinese, Bulgarian. Real coaches. AI that knows when to push you and when to back off. Welcome to the Nation."

**Pattern:** lead with **methodology credibility** (three real traditions, named coaches), then position AI as the personalization layer, with "Nation" as the identity layer. Bulgarian inclusion is featured because it's the most distinctive of the three — strongest contrast hook.

---

## 🛡️ Monetization

**Inherits Option C subscription pattern from SC** (locked May 11, 2026):
- Free tier: All systems, full programming, AI coach with weekly query cap
- Paid tier (WN Pro): Unlimited AI coach queries
- All methodology / systems stay free permanently
- Pricing direction (not final): align with SC ($7.99/$59.99 leaning) or potentially higher given AI-flagship positioning; test against Olympic weightlifting community price sensitivity ($9.99? $14.99? $19.99?)
- Studio bundle (Studio Pro across SC + WN + future apps): DEFERRED until at least one SCS app has a proven paying user base

**First-100 grandfathering pattern** (studio-wide, locked May 11): first 100 downloads per forum/territory get free subscription access.

**Pre-launch:** No IAP. Commerce via Amazon affiliate (Gear tab — same pattern as SC).

---

## 🚫 Things to Never Do

1. **NEVER copy specific paid cycles verbatim** — Buitrago + Ma's specific Foundation Program, Aita's Strength Development cycles, Pendlay's 8-week, Klokov's peaking programs are paid IP. Study for structure, never copy.
2. **NEVER claim Mark is a weightlifting coach** — methodology-platform positioning explicitly does not require this. Mark is a 30-year strength athlete, app builder, methodology translator.
3. **NEVER ship "Bulgarian" without honest framing copy** — explicit "we've adapted for non-elite" disclaimer is mandatory in Bulgarian cycle description.
4. **NEVER use coach-named programs without licensing or explicit fair-use attribution** — "The Abadjiev Method" / "The Ma Jianping Method" / "The Wendler 5/3/1" are IP. System names are fair use; coach names get tricky.
5. **NEVER conflate systems** — Chinese system is NOT Bulgarian-with-Chinese-flag-attached. Russian system is NOT Chinese-with-different-rest-times. Each system has distinct programming personality that must be preserved in implementation.
6. **NEVER trust anonymous spreadsheets without errata review** — Some publicly available Chinese-style spreadsheets have errors. Trust book + direct mentorship lineage over anonymous web spreadsheets.
7. **NEVER attempt to compete with weightlifting.ai on algorithmic authority** — that's their positioning. WN's positioning is methodology-platform + AI-flagship hybrid.
8. **NEVER ship a WN app with generic tracker UX** — defining UX departures (60-90s rest defaults for Chinese, single-set max-for-the-day prescriptions, daily squat tracking, A-F exercise classification) are part of what makes the app methodologically credible.
9. **NEVER skip the system-selection educational page** — system selection as educational moment is a CRITICAL UX departure that establishes the app's authority.
10. **NEVER start build without programming spec docs production-ready** — per HR Cycle 1 v3.2 lesson. Each system needs spec doc before code.
11. **NEVER accept "Russian style" vagueness** — Russian system implementations need explicit lineage attribution (Medvedyev / Verkhoshansky / Vorobyev / Roman). Same for all systems.
12. **NEVER ship without iOS-native polish** — per SCS MP. Apple Health, Fitness, Stocks, Weather, Settings are reference points. Hevy / Strong / Boostcamp are app reference points.
13. **NEVER pull WN from the App Store entirely as a throttle mechanism** — use per-territory removal first, "Remove from Sale" as escalation (per studio-wide throttle pattern locked May 11).
14. **NEVER paywall a system or methodology** — all systems stay in the free tier permanently (mirrors SC Option C lock).

---

## 🔗 Cross-References

- **WN_MASTER_ACTIVE.md** — dynamic state, current workstream, open questions, milestones
- **WN_Russia_Methodology_Spec_v3.md** — canonical Russia methodology lock (separate file in project knowledge)
- **SCS_MP** — studio-level strategy, brand line, portfolio decisions
- **SC_MASTER (FROZEN + ACTIVE)** — sister app (methodology-flagship; Ask Coach pattern + multi-program platform pattern are precedents for WN multi-system architecture)
- **HR_MASTER** — sister app (Coach Rob AI pattern is precedent for WN's Ask Coach implementation)
- **Apple Developer Org Conversion case 102887649950** — pending; affects developer name on WN listing

---

## 📚 Source Document Index

**Canonical (project knowledge):**
- WN_MASTER_FROZEN.md (this doc) v1.0
- WN_MASTER_ACTIVE.md v1.0
- WN_Russia_Methodology_Spec_v3.md (canonical Russia lock, May 11, 2026)

**Superseded / consolidated:**
- Oly_MASTER.md v1 (May 5, 2026) — initial multi-system methodology curriculum content. CONSOLIDATED into this doc.
- Oly_MASTER v2 (May 8, 2026) — AI-flagship pivot, "Oly AI" pre-naming-decision label, six-feature v1 scope, video form check feasibility. CONSOLIDATED.
- Oly_MASTER v3.0 (May 10, 2026 mid-session) — App naming LOCKED (Weightlifting Nation), ranked fallback list. CONSOLIDATED.
- Oly_MASTER (4).md v3.1 (May 10, 2026 evening) — v1.0 SYSTEM LINEUP LOCKED (Russia + China + Bulgaria). CONSOLIDATED into this doc.
- WN_State_Capture.md (May 11, 2026) — app identity, methodology scope, build approach, onboarding fields, engine architecture notes, workflow sequence. CONSOLIDATED into this doc + WN_MASTER_ACTIVE.

**Methodology specs (separate file system):**
- WN_Russia_Methodology_Spec_v1.md (superseded; archive)
- WN_Russia_Methodology_Spec_v2.md (superseded; archive)
- WN_Russia_Methodology_Spec_v3.md (CURRENT canonical Russia lock)
- WN_China_Methodology_Spec — TBD (Phase 1b workstream)
- WN_Bulgaria_Methodology_Spec — TBD (Phase 1c workstream)

---

## 📝 Frozen Doc Update History

- **v1.0** (May 16, 2026) — Initial creation. Consolidates Oly_MASTER (4).md v3.1 + WN_State_Capture.md into a single frozen doc. Oly internal codename deprecated; WN naming consistent throughout. Includes: strategic positioning (AI-flagship + methodology-platform hybrid), naming locks (Weightlifting Nation / Nation / Global Training Systems), v1.0 system lineup (Russia + China + Bulgaria), app identity, build approach, onboarding fields, Russia engine architecture notes, workflow sequence Phase 1-4, things-never-to-do (14 items), source doc consolidation index. Pair doc WN_MASTER_ACTIVE.md created simultaneously.

---

**This is the FROZEN doc. Day-to-day state lives in WN_MASTER_ACTIVE.md.**
