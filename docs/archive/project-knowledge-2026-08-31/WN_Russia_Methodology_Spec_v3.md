# Weightlifting Nation — Russia Methodology Spec (v3 Lock Draft)

**Status:** v3 lock draft, synthesized from v1 → v2 → four-LLM second-pass critique pool + ChatGPT tiebreaker. Ready for integration into Oly_MASTER (WN section).

**Framing:** WN's Russia engine is a **classical Soviet/Russian-inspired** Olympic weightlifting programming engine — percentage-based, plan-led, repetition-rich. It draws primarily from Charniga-translated Soviet-era sources (Vorobyev, Medvedev, Prilepin, Roman) and is adapted for deterministic app delivery to recreational lifters. It is not a Bulgarian daily-max system, not a Chinese daily-max + backoff system, and not a claim to model current Russian Weightlifting Federation practice.

**v2 → v3 changelog (major):**
- v2 NL definition inconsistency fixed (Section 3 "sets" → "reps" to match Section 9)
- Prilepin `<70%` row corrected to canonical 55-65% / 3-6 reps / 24 optimal / 18-30 range
- Prilepin scope clarified — governs classic lifts + close variants only; pulls/squats/accessories follow different conventions
- Section 11 ratio direction error fixed (low Snatch:BS = technique deficit, not strength deficit)
- Lift-ratio engine framing softened ("approximates one domain of coach judgment"; requires 2-4 week persistence + corroborating evidence)
- Bondarenko's phase-dependent ratios position acknowledged
- "Modern Russian Federation bar velocity sensors" claim softened
- "Sloppy reps excluded from Soviet NL counts" rewritten with citation-honest framing
- Working max model rebuilt with ramp logic (90% → 92% after macrocycle validation; 92% aggressive toggle for validated users; 92% advanced default + 95% unlock)
- Bondarenko heavy-squat/heavy-clean rule implemented as simplified stress-threshold
- Peak AI tiered by experience (78-82% int / 80-84% adv / 82-85% elite peak only)
- Snatch:Back Squat band re-centered (58-66% target with mild flag 66-70%, significant flag >70%)
- Priority cascade locked: pain → competition-lift imbalance → strength floor → pull transfer → accessories; capped at 1 primary + 1 secondary correction per mesocycle
- Bucketed AI added (Classic / Variant / Pull / Squat AI + Global internal)
- Bucketed tonnage added (Classic / Variant / Pull / Squat / Accessory)
- Jerk-only NL separated from Variant NL (Snatch Variant NL / Clean Variant NL / Jerk NL)
- Heavy Squat NL added (squat reps ≥80% tracked separately)
- Phase-dependent Heavy NL caps
- Complexes section added (was a gap in v1 and v2)
- Foundation phase: BW criterion removed, technical competency checklist added, duration open-ended (4-8 wk minimum)
- In-session miss rules tiered by intensity (Zone 4 miss handled differently than Zone 2 miss)
- Age/masters adjustment table added
- Sex-aware ratio adjustments
- Clean vs jerk separation in onboarding + jerk diagnosis tree
- Test-session attempt protocol added
- Competition date integration moved into v1.0 (truncate/reposition current block)
- Technical-quality score (1-5 per primary lift) operationalized
- Equipment substitution rules added
- Session time estimates exposed
- Restoration practices section added (brief)
- Variant frequency caps per mesocycle
- First-macrocycle "lead-in" handling
- Tonnage display: hidden from main dashboard, advanced metrics panel only
- Historical refinements: Prilepin position softened ("primary operational source"), Vorobyev/Alexeev wording softened, Frolov citation refined, variant explanations corrected

---

## 1. Programming Philosophy

The Russia engine is built on a core thesis: **mastery of the snatch and clean & jerk requires high-volume, technically rigorous training distributed across many sessions per week, structured by a predetermined plan but with quality gates that constrain blind execution.**

This is distinct from autoregulated approaches (Chinese daily-max + backoff, Bulgarian pure daily max). Russian methodology assumes that on a long enough timeline, plan-led training produces more reliable adaptation than reactive approaches, because it manages cumulative fatigue, prevents overreaching, and forces technical work even when the lifter feels strong enough to skip it.

However, classical Soviet practice was **plan-led, not plan-blind.** Implicit quality gates — bar speed, technical execution quality, set-completion rate — always informed how a session unfolded. Modern high-performance practice may formalize quality gates through video, coach observation, or bar-speed tools; WN v1 implements quality gates through miss count, user-reported technique quality scores, and pain flags. The contrast with Chinese/Bulgarian methodology is therefore:

- **Russian:** structured plan with implicit/explicit quality gates
- **Chinese:** daily max-driven, autoregulated, percentage backoff prescribed from daily max
- **Bulgarian:** pure daily max, log-only, no prescribed work outside the max attempt

Three principles flow from this:

1. **High frequency.** Snatch and Clean & Jerk are trained 3-6+ times per week (counting variants), not 1-2 times like a typical Western powerlifting program.
2. **Volume drives quality technique.** Most volume is performed at submaximal intensities (70-90%) where motor patterns consolidate. WN distinguishes completed reps from quality reps; reps with logged technical breakdown remain stored but are flagged separately from clean working volume.
3. **Plan-led with quality gates.** The lifter knows in advance what each session demands, but execution quality determines whether the prescribed work continues, reduces, or terminates. Daily readiness affects execution; readiness does not change the prescribed plan unless quality gates trigger intervention.

## 2. Historical Context & Key Methodologists

The Russian methodology lineage relevant to WN's engine is well-documented in English-language sources, primarily through translations by Andrew Charniga (Sportivny Press). Four primary methodologists, plus adjacent influences.

### Primary lineage

**Arkady Vorobyev (1924-2012)** — Soviet sports scientist, two-time Olympic gold medalist (1956, 1960), four-time world champion (1954/55/57/58). His foundational textbook *Weightlifting* (Тяжелая Атлетика, multiple Soviet editions, English translation by Charniga) is treated as a foundational Soviet source for percentage-based intensity classification and training-load organization.

**Alexei Medvedev (1927-2003)** — Soviet weightlifting coach who systematized Vorobyev's principles into a multi-year training framework. *A Program of Multi-Year Training in Weightlifting* (English: Sportivny Press) outlines the canonical periodization model: macrocycles → mesocycles → microcycles, with prescribed volume and intensity distributions per phase. Medvedev's monthly weekly-load distribution patterns (commonly attributed: 35/28/22/15 across four weeks; variations 35/22/28/15 and 35/15/28/22 also appear in the literature) inform WN's mesocycle structure.

**Alexander Sergeyevitch Prilepin** — Soviet national coach (USSR youth national team 1975-1980, senior USSR team 1980-1985). Prilepin is the **primary operational source for intensity-volume prescriptions** in Russian-derived programming. His chart with prescribed reps-per-set and optimal-total-rep ranges is commonly attributed to analysis of training journals of elite Soviet weightlifters across 5-week mesocycles. The chart is the most operationally cited contribution to Russian-derived strength programming and governs WN's session-level exposure logic for classic lifts and close variants.

**Robert Roman** — Coach and analyst who contributed methodology refinements; *The Training of the Weightlifter* (Sportivny Press) and *The Snatch, the Clean and Jerk* (Sportivny Press) provide widely-referenced volume programming patterns and monthly weekly-load distributions.

### Methodology exemplars

- **David Rigert** — Soviet middleweight 1970s, multiple Olympic and world golds; extensively documented in Soviet sports science literature as exemplary of high-volume, high-frequency Russian methodology.
- **Yuri Vlasov** — Soviet superheavyweight, 1960 Olympic gold; influential early example of structured Soviet programming.
- **Andrei Chemerkin** — Post-Soviet superheavyweight, 1996 Olympic gold; bridge between classical Soviet methodology and modern Russian Federation practice.

Note: Vasily Alexeev (Soviet superheavyweight, 1970s Olympic gold) is not ideal as the primary methodology exemplar because his training was unusually individualistic and is harder to generalize into an app engine.

### Adjacent influences

**Yuri Verkhoshansky (1928-2010)** — Soviet sports scientist whose block periodization framework was developed partly as a critique of classical concurrent Soviet weightlifting methodology, not as an evolution of it. Verkhoshansky's block model had more traction in track and field, throws, and powerlifting contexts than in elite Soviet weightlifting practice, which remained largely concurrent. The two traditions coexisted with friction. WN's Russia engine v1 follows the classical concurrent model.

**Boris Sheiko (b. 1949)** — Modern Russian powerlifting coach. His programming shares Soviet planning DNA (percentage-based, wave-loaded) but his published methodology is powerlifting-specific. Mentioned only as a comparative example of Soviet-derived percentage planning in strength sport, not a source for Russian Olympic weightlifting prescriptions.

**Sergey Bondarenko** — Modern Russian coach, Master of Sports of International Class. Translated coaching articles published by Catalyst Athletics (translations by Artem Chupakhin) provide contemporary Russian-school commentary. Notably, Bondarenko explicitly argues against fixed front-to-back squat ratios as universal programming targets, framing ratios as phase-dependent and athlete-specific. WN's ratio engine reflects this position by treating ratios as diagnostic indicators requiring corroboration, not prescriptive verdicts.

### Source attribution

WN's Russia engine draws primarily from:
1. Vorobyev — broader intensity classification framework, philosophical basis of percentage prescription
2. Medvedev — periodization structure (macro/meso/micro), monthly load distributions
3. Prilepin — specific zone chart with reps/set + optimal total + range
4. Roman — supplementary volume programming patterns
5. Bondarenko (modern) — contemporary refinements, phase-dependent thinking

## 3. Core Principles

**P1. High training frequency for competition lifts.**
Snatch family (including variants): 3-5 sessions per week. Clean & Jerk family (including variants): 3-5 sessions per week. Squats (back and front): 2-5 sessions per week by experience tier.

**P2. Volume measured in bucketed counters, not single NL.**
WN tracks the following weekly volume metrics. All NL values are reps (number of lifts), not sets.

- **Classic NL** — competition snatch + competition clean & jerk reps
- **Snatch Variant NL** — power snatch, hang snatch, block snatch, snatch balance, drop snatch, OHS, etc.
- **Clean Variant NL** — power clean, hang clean, block clean, clean from positions
- **Jerk NL** — jerk from rack, jerk from blocks, push press, push jerk, split jerk (jerk-only exposures, separated from clean variants due to distinct neural/connective-tissue stress)
- **Pull NL** — snatch pulls and clean pulls
- **Squat NL** — back squat and front squat working reps (excluding warm-ups)
- **Heavy Classic NL** — count of classic/variant reps at ≥85% of working max
- **Heavy Squat NL** — count of squat reps at ≥80% (squats fatigue faster than classic lifts at the same %)
- **Pull Heavy NL** — pull reps at ≥100% of competition lift OR ≥85% of estimated pull max

WN also tracks **bucketed tonnage** (Russian: тоннаж):
- Classic tonnage, Variant tonnage, Pull tonnage, Squat tonnage, Accessory tonnage
- Global tonnage is internal only (10,000 kg of squat work ≠ 10,000 kg of snatch work in meaning)
- Tonnage drives deload triggers; not displayed on main dashboard (advanced metrics panel only) to prevent volume-chasing

WN also tracks **bucketed Average Relative Intensity (AI)**:
- Classic AI, Variant AI, Pull AI, Squat AI
- Global AI internal only

**P3. Percentage-based prescription against lift-specific maxes.**
Each lift family is programmed against its own working max:
- Snatch variants → % of snatch max
- Clean variants → % of clean max (or C&J max)
- Jerk variants → % of jerk max
- Snatch pulls → % of snatch competition max (often >100%)
- Clean pulls → % of clean competition max (often >100%)
- Back squat → % of back squat max
- Front squat → % of front squat max
- Press / Push press → % of respective max

**P4. Quality volume drives technique, with Prilepin caps on classic lift exposure.**
Most productive Russian-style training falls in the **70-90% range** (phase-dependent). Beneath 70% is technique/warm-up volume; above 90% is controlled exposure governed by Prilepin's chart for classic lifts and close variants. Prilepin's chart does NOT mechanically govern pulls, squats, or accessories.

**P5. Variant emphasis driven by lift-to-lift ratios.**
WN uses a lift-ratio diagnostic engine (Section 11) to surface possible technique and strength deficits and bias variant programming. Ratios are diagnostic indicators requiring corroboration from miss patterns or session performance, not prescriptive verdicts.

**P6. Squatting is foundational, frequency-tiered by experience.**
Frequency tiers: Beginner 2-3, Intermediate 3, Advanced 3-4, Elite 4-5 (with split-session allowance, lower per-session volume). Squats programmed against their own working maxes.

**P7. Linear macrocycles with wave-loaded mesocycles.**
v1.0 ships with continuous 12-week macrocycles. **Competition date integration** in v1.0: users can flag a competition or test date, and the engine truncates or repositions the current macrocycle to peak for that date (not deferred to v1.1).

## 4. Weekly Microcycle Structure (with H/M/L Day Rotation)

Default weekly structure for an intermediate WN user, with **explicit Heavy/Medium/Light intensity rotation for each primary lift across the week:**

| Day | Snatch | C&J | Squat | Pulls | Other |
|-----|--------|------|-------|-------|-------|
| Mon | Heavy (Zone 3) | — | Back squat heavy | Clean pull | Press/trunk |
| Tue | — | Heavy (Zone 3) | Front squat heavy | Snatch pull | Accessories |
| Wed | Light technique OR rest | — | — | — | Mobility |
| Thu | Medium (Zone 2-3) | — | Back squat medium | — | Accessories |
| Fri | — | Medium (Zone 2-3) | Front squat medium | — | Accessories |
| Sat | Light (Zone 1-2) | Light (Zone 1-2) | Optional light squat | — | Technique |
| Sun | Rest | Rest | Rest | Rest | Rest |

**H/M/L rotation is a programming dimension separate from H/M/L weeks within a cycle.**

Variants by experience tier:
- **Foundation/Beginner**: 3-4 days/week
- **Intermediate**: 4-5 days/week (above table)
- **Advanced**: 5-6 days/week, may add second sessions
- **Elite/full-time**: 6+ sessions/week with split sessions

**Session time estimates** (displayed to users to enable tier-mismatch detection):

| Tier | Typical session duration |
|------|-------------------------|
| Foundation | 45-60 min |
| Beginner | 60-75 min |
| Intermediate | 75-105 min |
| Advanced | 105-135 min |
| Elite | 120-180+ min (split sessions reduce single-session time) |

If logged session duration consistently falls 30%+ below estimate, app prompts: "Sessions are running short. Consider reducing variants, dropping accessories, or routing to lower NL tier."

## 5. Mesocycle Structure (4-Week Cycle)

WN's 4-week cycle maps to classical Russian mesocycles. A 12-week macrocycle = three 4-week mesocycles. This 12-week / 3×4-week structure is WN's app-design standardization, not a canonical Russian template (Soviet planning used many cycle lengths).

### Mesocycle 1 — Accumulation
- Volume: HIGH; Intensity: MODERATE (70-85% predominant); Singles: minimal
- Classic AI target: 74-77%
- Deload week 4: **Accumulation deload — -40% volume, -10% intensity**

### Mesocycle 2 — Intensification
- Volume: MODERATE (60-75% of cycle 1 NL); Intensity: HIGHER (75-90% predominant); Singles: 85-92% regularly
- Classic AI target: 76-80%
- Deload week 4: **Intensification deload — -30% volume, intensity preserved (or -5%)**

### Mesocycle 3 — Peak / Test
- Volume: LOW (40-50% of cycle 1 NL); Intensity: HIGH; Singles: frequent, near-maximal
- Classic AI target: **78-82% intermediate, 80-84% advanced, 82-85% elite low-volume only**
- Week 4: **Peak deload + test — -50% to -70% volume, intensity preserved for planned test lifts only**

### Wave loading within each mesocycle
- Week 1: Medium volume, medium intensity (introduction)
- Week 2: High volume, medium intensity (loading)
- Week 3: Medium volume, high intensity (intensification)
- Week 4: Deload OR test (per mesocycle position above)

### First-macrocycle lead-in
For users entering Russia at intermediate (not via Foundation graduation) on first macrocycle: cycle 1 runs at -20% NL versus the user's tier default. This allows the engine to gauge adherence and recovery before full-load weeks. Cycle 2 and 3 run at full tier defaults.

## 6. Soviet Intensity Classification (Vorobyev/Prilepin Synthesis) + Prilepin Chart

WN's intensity prescription combines Vorobyev's broader zone framework with Prilepin's operationally specific reps-per-set chart. This is WN's implementation of Soviet-style intensity bands, not a claim to a canonical universal standard.

### Vorobyev-style zones

| Zone | %1RM | Purpose |
|------|-------|----------|
| 1 | 50-70% | Technical work, warm-up, base volume |
| 2 | 70-80% | Standard training intensity, technique consolidation |
| 3 | 80-90% | Strength building, near-competition expression |
| 4 | 90-100% | Peak / test expression |
| 5 | 100%+ | Maximum / competition (rare in training) |

### Prilepin's chart (canonical, governs classic lifts + close variants only)

| Intensity | %1RM | Reps/set | Optimal total reps | Range |
|-----------|------|----------|---------------------|-------|
| Low | 55-65% | 3-6 | 24 | 18-30 |
| Medium | 70-80% | 3-6 | 18 | 12-24 |
| High | 80-90% | 2-4 | 15 | 10-20 |
| Max | 90%+ | 1-2 | 7 | 4-7 (non-Elite) / 4-10 (Elite) |

**Scope clarification:** Prilepin's chart governs per-exercise per-session caps for **classic snatch, classic C&J, and close variants only**. It does not mechanically govern pulls (loaded at 90-115% of competition lift max), squats (different fatigue profile), or accessory work. Pulls and squats follow the bucketed counter logic in Section 9.

**Engine logic:** Weekly NL target is determined by tier (Section 9). Sessions are constructed by allocating NL across lifts and days, then validated against Prilepin caps per exercise. If a session exceeds the chart range, the engine reduces reps, splits across sessions, or lowers intensity. Prilepin is a session-construction guardrail, not a weekly-volume calculator.

## 7. Exercise Catalog & Loading Rules

### Snatch family

| Exercise | Loading Reference | Purpose |
|----------|-------------------|---------|
| Snatch (classic) | % of snatch max | Competition lift |
| Power snatch | % of snatch max | Aggressive extension, turnover, receiving higher without deep catch |
| Hang snatch (high/low) | % of snatch max | Positional strength, transition, extension timing, speed under |
| Snatch from blocks | % of snatch max | Position, timing, acceleration, turnover from selected pull height |
| Snatch pull (working) | 90-110% of snatch max | Pulling strength specific to classic snatch |
| Snatch pull (max) | up to 110-115% of snatch max | Maximal pulling strength |
| Snatch high pull | % of snatch max | Finish height variant |
| Snatch balance | % of snatch max | Overhead receiving position |
| Drop snatch | % of snatch max | Speed under the bar |
| Overhead squat | % of snatch max | Overhead receiving strength |

### Clean & Jerk family

| Exercise | Loading Reference | Purpose |
|----------|-------------------|---------|
| Clean & Jerk (classic) | % of C&J max | Competition lift |
| Clean only | % of clean max | Isolated clean work |
| Power clean | % of clean max | Aggressive extension, higher catch |
| Hang clean (high/low) | % of clean max | Position and transition |
| Clean from blocks | % of clean max | Pull from selected height |
| Clean pull (working) | 95-110% of clean max | Pulling strength specific to clean |
| Clean pull (max) | up to 110-115% of clean max | Maximal pulling strength |
| Jerk from rack | % of jerk max | Jerk in isolation |
| Jerk from blocks | % of jerk max | Jerk-specific work |
| Push press | % of push press max | Driving strength for jerk |
| Push jerk | % of jerk max | Jerk speed without split |
| Split jerk | % of jerk max | Competition jerk |

### Squats

| Exercise | Loading Reference |
|----------|-------------------|
| Back squat | % of back squat max |
| Front squat | % of front squat max (~85-90% of back squat max expected) |
| Paused front squat | % of front squat max |

### Pressing
| Exercise | Loading Reference | Programming |
|----------|-------------------|-------------|
| Strict press | % of press max | 1x/week, 60-75%, 3-4 sets × 5-8 reps |
| Push press | % of push press max | 1-2x/week, 70-85%, 3-5 sets × 3-5 reps |
| Press behind neck | % of press max | 1x/week, 60-75%, 3-4 sets × 5-8 reps |

### Limited accessories
RDL (% of clean), GHR (BW/weighted), good morning (absolute load), trunk work.

### Frolov citation (pull loading nuance)
Pulls at 100-110% of competition lift become a coordination pattern distinct from the snatch (more isometric than dynamic). Train pulls heavy for pulling strength, but don't expect them to reinforce snatch timing. Working sets typically 90-110%; max-effort 110-115%.

## 7.5. Complexes

Complexes train positional stamina and work capacity. WN ships with templates per mesocycle phase.

**Counting rule for complexes:** Each rep of each movement counts toward its respective bucket. Example:
- 1 Power Clean + 2 Front Squats + 1 Jerk = 1 Clean Variant NL + 2 Squat NL + 1 Jerk NL

**Sample complexes by phase:**

| Phase | Complex Examples |
|-------|------------------|
| Accumulation | 1 Snatch + 1 OHS; 1 Clean + 2 FS + 1 Jerk; 1 Hang Snatch + 1 Snatch |
| Intensification | 1 Power Clean + 1 Clean + 1 Jerk; 2 Hang Snatches |
| Peak | Reduced complex use; isolate to classic lifts |

**Variant frequency caps:** Each specific variant appears 1-2x per week throughout a mesocycle, not rotated weekly (rotation breaks technical consolidation).

## 8. Session-Order Rules

Deterministic exercise order:

1. **Classic lift or primary technical variant**
2. **Second classic lift or jerk-only variant** (if present)
3. **Pull** (snatch pull or clean pull)
4. **Squat** (back or front)
5. **Press / trunk / accessory** work
6. **GPP / mobility**

**Bondarenko Rule (heavy-clean / heavy-back-squat pairing — stress-threshold):**

> Do not pair Heavy Clean work with Heavy Back Squat work in the same session.

Where:
- **Heavy Clean work** = clean or C&J ≥85%, OR clean/C&J top work in Zone 3-4, OR high clean volume at ≥80%
- **Heavy Back Squat work** = back squat ≥85%, OR back squat top sets intended as primary strength stressor

**Allowed pairings:**
- Heavy clean + light/medium back squat (≤75-80%)
- Light/medium clean + heavy back squat
- Heavy clean + front squat (if FS is light/medium and volume-controlled)
- Clean pulls / clean positional work + heavy back squat

**Tightened for vulnerable users:**
- Foundation / Beginner / Master (35+) / injury-prone: **No heavy clean + heavy squat of any kind** in same session.

### Exceptions
- Master/injury-prone users: may swap order if specific contraindications
- Beginner sessions: classic lift only, skip pulls until technique stabilizes

## 9. Volume & Workload Tracking — Tier Targets

### NL targets by experience tier

**Classic + Variant NL/week** (combined):

| Tier | NL/week |
|------|---------|
| Foundation | 20-40 |
| Beginner | 35-60 |
| Intermediate (3-day) | 50-80 |
| Intermediate (4-day) | 70-100 |
| Intermediate (5-day) | 90-120 |
| Advanced | 110-180 |
| Elite/full-time | 200-400+ |

The engine selects within each tier band based on training days available, session length, recovery score, and adherence history — not just years of experience.

### Heavy NL caps (phase-dependent)

**Heavy Classic NL/week** (classic/variant reps ≥85%):

| Tier | Accumulation | Intensification | Peak |
|------|--------------|------------------|------|
| Foundation | 0 | 0-1 | 0-3 |
| Beginner | 0-2 | 3-5 | 4-7 |
| Intermediate | 3-5 | 6-10 | 9-15 |
| Advanced | 5-9 | 10-16 | 14-20 |
| Elite | 8-15 | 18-25 | 22-35 |

**Heavy Squat NL/week** (squat reps ≥80%):

| Tier | Per week |
|------|----------|
| Beginner | 0-5 |
| Intermediate | 4-8 |
| Advanced | 7-14 |
| Elite | 10-20 |

**Pull Heavy NL/week** (pull reps ≥100% of classic lift or ≥85% of pull max): tracked separately; phase-dependent caps determined per-session by Prilepin-adjacent logic.

### Tonnage display rules
- Main user dashboard: NL by bucket, classic AI trend, completion %, heavy exposures
- Advanced metrics panel: raw tonnage, bucketed tonnage, weighted load index
- Tonnage is internal stress signal; not exposed as a target metric

## 10. Working Max & Lift-Specific References

WN prescribes against multiple lift-specific working maxes. Onboarding collects: Snatch 1RM, C&J 1RM, Back Squat 1RM, Front Squat 1RM (optional; defaults to 87% of BS if absent), Push Press 1RM (optional), Strict Press 1RM (optional), bodyweight, age, sex, years of experience, training days available, clean-vs-jerk limiter (which fails more often).

### Working max defaults (% of validated 1RM)

| Tier | Snatch / C&J | Back Squat | Front Squat |
|------|--------------|------------|-------------|
| Foundation | N/A | N/A | N/A |
| Beginner | 85% | 90% | 90% |
| Intermediate (new) | **90%** | 92% | 92% |
| Intermediate (validated, post-macrocycle) | **92%** | 92% | 92% |
| Intermediate (aggressive toggle) | **92%** | 92% | 92% |
| Advanced | **92%** | 95% | 95% |
| Advanced (validated unlock) | **95%** | 95% | 95% |
| Elite | 95-100% configurable | 95-100% | 95-100% |

**Aggressive Intermediate toggle conditions:**
- 1RM less than 8 weeks old
- 1RM achieved with clean technique (user self-attests)
- 2+ years of consistent Olympic lifting experience
- User explicitly elects "aggressive intermediate"

**Validation criteria** to graduate from new → validated Intermediate (90% → 92%):
- ≥85-90% session adherence over completed macrocycle
- No repeated miss pattern
- No recurring technical breakdown flags
- All deloads completed
- Test or near-test work confirms max is stable

**Working max adjustments:**
- 1RM older than 12 weeks: reduce working max by 2-5%
- 1RM achieved with significant technical breakdown (user-tagged): reduce by 5%
- One successful macrocycle with high adherence + no repeated misses: +2% reference-max confidence adjustment

## 11. Lift-to-Lift Ratio Engine

WN uses a lift-ratio diagnostic engine inspired by Soviet/Russian attention to relationships between the classic lifts and assistance lifts. The engine **approximates one domain of coach judgment** (variant selection bias). It does not detect timing problems, mobility restrictions, or receiving-path errors. Ratios are diagnostic indicators, not prescriptive verdicts.

**Triggering rule:** A ratio out of band triggers programming bias only when BOTH conditions are met:
1. Ratio has been out of band for at least 2-4 consecutive weeks
2. Supporting evidence exists from miss patterns, session performance, or user-reported technical quality score (Section 13)

**Engine cap:** No more than 1 primary correction + 1 secondary correction per mesocycle. Prevents the engine from recommending contradictory emphases simultaneously.

### Target ratio bands (diagnostic, not prescriptive)

| Ratio | Target | Mild flag | Significant flag |
|-------|--------|-----------|-------------------|
| Snatch : C&J | 78-83% | 76-78% / 83-85% | <76% / >85% |
| Power Snatch : Snatch | 80-85% | — | <78% / >87% |
| Power Clean : Clean | 82-87% | — | <80% / >89% |
| Snatch : Front Squat | 65-72% | 62-65% / 72-76% | <62% / >76% |
| Snatch : Back Squat | 58-66% | 66-70% | >70% (technique deficit) / <55% (also flag) |
| C&J : Front Squat | 85-95% | 82-85% / 95-98% | <82% / >98% |
| C&J : Back Squat | 74-82% | 72-74% / 82-84% | <72% / >84% |
| Snatch Pull (max) : Snatch | 110-115% | 105-110% / 115-120% | <105% / >120% |
| Clean Pull (max) : Clean | 105-115% | 100-105% / 115-120% | <100% / >120% |

### Sex-aware adjustments
Elite female lifters show higher Snatch:C&J ratios on average. WN adjusts Snatch:C&J target by sex:
- Male: 78-83% target
- Female: 80-85% target

(Other ratios use unified bands in v1; refined in v1.1+ if female-specific data warrants.)

### Snatch:C&J intervention table (with corroboration logic)

| Snatch:C&J | Interpretation | Required corroboration | Programming bias |
|-----------|----------------|------------------------|-------------------|
| <76% | Significant snatch deficit | Persistent 2+ weeks + snatch misses logged | Add snatch from blocks, snatch pulls, snatch balance, OHS |
| 76-78% | Mild snatch lag | Persistent 4+ weeks + technical quality ≤3 on snatch | Modest snatch variant emphasis |
| 78-83% (male) / 80-85% (female) | Balanced | N/A | Default variant rotation |
| 83-85% | Mild C&J lag | Persistent 4+ weeks + C&J misses or jerk limiter flagged | Modest C&J / jerk variant emphasis |
| >85% | Significant C&J deficit | Persistent 2+ weeks + clean OR jerk limiter | Branch by limiter (see jerk diagnosis tree, Section 11.5) |

### Strength ratio interventions (CORRECTED FROM v2 — direction fixed)

**Snatch : Back Squat ratio**

| Ratio | Interpretation | Programming bias |
|-------|----------------|-------------------|
| <55% | Technique deficit (strength under-expressed) | Add technique work, classic lift volume, positional variants, receiving drills |
| 58-66% | Balanced | Default rotation |
| 66-70% | Mild strength deficit (technique expressing fully) | Modest squat volume increase |
| >70% | Significant strength deficit | Add squat volume, accessory strength, possibly reduce snatch variant volume temporarily |

**C&J : Back Squat ratio** — same logic, target band 74-82%, flags above and below similarly.

### Pull ratio interventions
- Pull strength weak (snatch pull max <105% of snatch): add pull volume
- Pull strength strong but not transferring (snatch pull max >120% of snatch): pulls may be reinforcing wrong patterns; reduce pulls, add classic-lift technique work

### Priority cascade (resolves multi-ratio conflicts)

When multiple ratios are simultaneously out of band, the engine applies corrections in this order:

1. **Pain / injury / mobility constraint** (always overrides programming)
2. **Competition-lift imbalance most directly affecting total** — severe Snatch:C&J abnormality
3. **Clean vs jerk limiter** identification (from onboarding question + miss patterns)
4. **Classic-lift : squat ratios** (strength floor)
5. **Power variation : full lift ratios** (technique refinement)
6. **Pull : classic lift ratios**
7. **User-selected weak point** (last priority)

**Cap:** 1 primary correction + 1 secondary correction per mesocycle.

## 11.5. Jerk Diagnosis Tree

A C&J deficit is often a jerk deficit. When the engine flags C&J as the limiter (Snatch:C&J >83%), the jerk sub-diagnosis branches:

| Jerk limitation | Onboarding/miss indicator | Programming bias |
|-----------------|---------------------------|-------------------|
| Dip/drive deficit | User reports power feels weak in dip recovery | Push press, jerk dip + drive, front squat |
| Lockout deficiency | Bar reaches height but elbows fail | Jerk supports, press behind neck, push press, strict press |
| Footwork/timing | Bar reaches height but feet land poorly | Jerk from rack focus, isolated split drills, paused jerks |
| Rack recovery | Clean catches but stand-up is the limiter | Front squats, paused front squats, clean recoveries |

Clean limitations branch similarly: clean strength (front squat focus), clean technique (clean variants + pulls), or rack stability (front squat + clean recoveries).

## 12. Adaptation Guidance — Experience Routing & Foundation Phase

### Foundation phase (gates Russia engine for true beginners)

**Eligibility (OR-conditions):**
- < 1 year of formal Olympic weightlifting experience, OR
- Test-to-test 1RM variance >10%, OR
- Self-reported uncertainty about competence

**Duration:** 4-8 weeks minimum. Open-ended — Foundation lasts as long as graduation criteria require.

**Focus:** Technique acquisition without percentage-based prescription. Movements at fixed light loads (empty bar progressing by feel and quality).

**Graduation criteria (technical competency checklist):**
1. 8-12 completed sessions over at least 4 weeks
2. Can perform full snatch, clean, and jerk with stable receiving positions
3. Can complete 5×2 snatch and 5×2 clean & jerk at light/moderate load with no misses and no major technical breakdown
4. Can overhead squat empty bar or light load to stable depth
5. Can front squat with stable rack position

(Suggested load reference only, not a hard gate: 30-50% bodyweight depending on sex, age, and body size.)

After graduation, user routes to Russia Beginner sub-program.

### Russia sub-programs

| Tier | Sessions/week | NL target | Working max | Notes |
|------|---------------|-----------|-------------|-------|
| Beginner | 3-4 | 35-60 | 85% | Technique-dominant (Zones 1-2), 5-7 variants, no near-max attempts |
| Intermediate | 4-5 | 50-120 (training-day-aware) | 90% new → 92% validated | Full Medvedev-style wave loading, full variant catalog |
| Advanced | 5-6 | 110-180 | 92% default / 95% unlocked | Higher Zone 4 exposure, weak-point emphasis via ratio engine |
| Elite | 6-12 (split sessions) | 200-400+ | 95-100% configurable | Higher squat frequency option (4-5/week) |

## 13. Recovery, Deload Patterns & Restoration Practices

### Deload structure differs by mesocycle phase

| Mesocycle | Deload (Week 4) | Volume Δ | Intensity Δ |
|-----------|-----------------|----------|-------------|
| Accumulation (cycle 1) | Accumulation Deload | -40% | -10% |
| Intensification (cycle 2) | Intensification Deload | -30% | preserved (or -5%) |
| Peak/Test (cycle 3) | Peak Deload + Test | -50% to -70% | preserved for test lifts only |

### Restoration practices (user-managed, app acknowledges but does not prescribe)

Classical Russian methodology assumes substantial passive recovery:
- **Sleep:** 8+ hours prioritized
- **Sauna / contrast therapy:** 1-2x per week typical in Soviet practice
- **Massage / soft tissue work:** Regular
- **Active recovery:** Light walking, mobility, stretching between sessions

WN does not prescribe restoration practices but acknowledges them as part of the methodology. Future versions may integrate user-logged sleep, RHR, and subjective readiness as soft signals.

### Technical-quality score (operationalizing quality gates)

After each primary lift, user logs:

| Score | Meaning |
|-------|---------|
| 1 | Pain / unsafe |
| 2 | Major technical breakdown |
| 3 | Acceptable but inconsistent |
| 4 | Clean |
| 5 | Excellent |

**Programming response:**
- Two sessions ≤2 in same lift family → reduce next exposure, bias technical variants
- Three sessions ≥4 with no misses → allow normal progression / consider working max +2%
- Five sessions ≥4 in a row across a macrocycle → ratio engine confidence increased

## 14. Failure & Disruption Handling

### In-session failure rules (intensity-tiered)

| Situation | Action |
|-----------|--------|
| Miss 1 rep at <80%, user tags "technical error" | Repeat the set once |
| Miss 1 rep at <80%, user tags "fatigue" | Reduce remaining sets by 5%, complete |
| Miss 1 rep at 80-89% | Reduce remaining sets by 5-10% OR repeat only if user marks "technical error not fatigue" |
| Miss 1 rep at ≥90% (Zone 4) | Do not repeat at same weight. Drop to last clean weight, complete one solid single, end the lift |
| 2 reps missed at same load | Reduce remaining sets by 10%, or end if Zone 4 |
| 3 misses total in the lift | Terminate top work; complete back-off sets only |
| Technical breakdown logged (quality ≤2) | Reduce remaining work to back-off only; flag for next session emphasis on technique variants |
| Pain logged | Remove classic-lift strain pattern; substitute technique or light positional work; prompt user assessment |

### Missed session handling (roll-forward with graduated rules)

| Situation | Action |
|-----------|--------|
| 1 session missed in a week | Skip the missed session; preserve H/M/L structure; log the gap |
| 2 sessions missed in a week | Roll forward; flag week as incomplete; drop accessories from remaining sessions |
| 3+ sessions missed in a week | Do not advance to next week; restart current week at -10-20% volume (unless missed sessions due to travel only AND user reports normal readiness — full restart in that case) |
| 1+ full week missed | Do not advance the mesocycle; restart from the missed week |

**Do NOT insert missed sessions at end of week. Do NOT "make up" NL by adding work to subsequent sessions.**

## 15. Progression & Macrocycle Transition

### After test session in week 4 of mesocycle 3

| Test Outcome | Working Max Update |
|--------------|---------------------|
| New 1RM achieved | Update `true_best` to test result. Update `working_max` = test result × tier-appropriate %. |
| 0-2% improvement | Update working_max per tier %; volume targets unchanged |
| No PR but technically clean near-max work | Maintain working_max; modest tier % increase eligible |
| Missed PR with technical breakdown | Maintain or reduce working_max 2-5%; repeat macrocycle with NL increase |
| Skipped test session | Maintain current working_max |

### Test-session attempt protocol

**Snatch test:**
- Opener: 90-93% of target
- Second: 96-100% of target
- Third: PR attempt if second is successful and quality is acceptable
- 2-3 minute rest between attempts

**Clean & Jerk test:**
- Same structure
- 3-4 minute rest between attempts (longer than snatch)

### Experience-tier progression caps (per 12-week macrocycle)

| Tier | Realistic upper bound |
|------|----------------------|
| Foundation/Beginner | 5-12% |
| Intermediate | 2-5% |
| Advanced | 1-3% |
| Elite | 0-2% per YEAR, not per cycle |

If autoregulation projects progression above the tier cap, app prompts user verification.

### Plateau handling
After 2 consecutive macrocycles without PR: trigger Ask Coach intervention prompt suggesting plateau review.

## 16. Age / Masters Adjustment

Masters demographic gets the following modifiers applied on top of tier defaults:

| Age | Modifier |
|-----|----------|
| 35-44 | Heavy Classic NL -10%, preserve technical frequency, deload pattern unchanged |
| 45-54 | Heavy Classic NL -20%, reduce squat intensity frequency (lower of 2-3 heavy squat sessions), Heavy Squat NL -15% |
| 55+ | Heavy Classic NL -30%, increase deload frequency (consider 3-week mesocycles for some users), reduce >90% exposures |

Masters users may also opt into "Master-optimized" sub-program (v1.1+) with structurally lower frequency.

## 17. Equipment Substitution Rules

Commercial gyms vary. WN substitutes equipment-missing exercises:

| Missing equipment | Substitution |
|-------------------|--------------|
| No blocks | Hang variation at corresponding height |
| No jerk blocks | Jerk from rack |
| No dedicated platform | Reduce max attempts, prioritize pulls/squats/accessories |
| No bumper plates (heavy) | Cap working max at 80%; substitute squats for pulls |
| No safety pins for squats | Drop weight, set lower percentage cap |

User flags equipment status at onboarding; engine substitutes automatically.

## 18. v3 Open Questions / v1.1+ Backlog

Items deferred for future iteration:

- **Phase-dependent ratio bands** (per Bondarenko's position) — ratios may legitimately shift across accumulation / intensification / peak
- **Annual periodization structure** — year-level planning with 2-3 peaking cycles, GPP/SPP/competition/transition
- **Verkhoshansky block periodization variant** for advanced users preferring block over concurrent
- **Soviet sport classification routing** (II разряд / I разряд / КМС / МС / МСМК) as alternative to kg brackets
- **Bar velocity / VBT integration** when hardware integration is feasible
- **Sinclair coefficient display** alongside raw totals
- **Video logging per set** for personal review
- **Female-specific volume/intensity defaults** beyond ratio adjustments
- **Readiness markers without hardware** — sleep hours, RHR, subjective 1-10 readiness scale as soft signals
- **Coach mode** for users working with a real coach (coach can override engine recommendations)
- **Modern Russian Federation sub-mode** when English source base supports it

## 19. Source Citations

Primary published sources for v3:

1. Vorobyev, A.N. (1988). *Weightlifting*. Sportivny Press (English translation: Andrew Charniga). Foundational text on Soviet percentage-based intensity classification.
2. Medvedev, A.S. (1989). *A Program of Multi-Year Training in Weightlifting*. Sportivny Press. Canonical periodization framework, monthly load distributions.
3. Prilepin, A.S. (research articles, 1975-1985 era, commonly attributed). Source of the operationally specific zone chart.
4. Roman, R.A. (1986). *The Training of the Weightlifter*. Sportivny Press.
5. Roman, R.A. (1986). *The Snatch, the Clean and Jerk*. Sportivny Press.
6. Laputin, N.P. / Oleshko, V.G. *Managing the Training of Weightlifters*. Source for "85% is most-used intensity" finding and weekly load distributions.
7. Bondarenko, S. Translated coaching articles published by Catalyst Athletics (translations by Artem Chupakhin) — including "Do We Need the Magic Front Squat to Back Squat Ratio?" and "Avoiding Methods That May Ruin Your Olympic Weightlifting Program."
8. Frolov, V.I., Efimov, N.M., Vanagas, M.P. *Tyazhelaya Atletika* (Fizkultura I Sport publishers, Moscow, 1977), translated by Andrew Charniga.
9. Verkhoshansky, Y.V. (1985). *Programming and Organization of Training*. Sportivny Press. Adjacent reference, positioned as parallel tradition.
10. Sisto, G. / Rojas, I. *Fundamentals of the Soviet System*. Modern English-language consolidation.
11. Everett, G. Various articles on Catalyst Athletics including "The Relation of Snatch, Clean & Jerk and Squat Weights."
12. Lucero, R.A.J., Fry, A.C., LeRoux, C.D., Hermes, M.J. (2019). "Relationships between barbell squat strength and weightlifting performance." Sage Journals.
13. 70sBig.com (2012). "Prilepin's Chart" — canonical chart reproduction.
14. IJAR (2020). Analysis of percentage ratio between snatch and clean & jerk in elite international weightlifters.

Sources not used (relegated from prior versions):
- Sheiko, B.I. powerlifting manuals (footnote only — powerlifting figure, not OL methodology)
- "Plekhov" / "Vladimir Krasnov" — not verifiable in standard sources, removed
- Vasily Alexeev biographical material — moved out of methodology-exemplar position

---

## End of v3 Lock Draft

**Status:** Ready for integration into Oly_MASTER (WN section). All four-LLM second-pass critique convergences absorbed. All genuine 2-2 divergences resolved (intermediate working max ramp logic, Bondarenko stress-threshold simplified). 38+ refinements implemented across Tier 1-3 priority levels; selective Tier 4 historical refinements integrated.

**Next workstream items:**
1. China methodology spec drafting (shorter, ~2,500-3,500 words estimated)
2. Bulgaria methodology spec drafting
3. WN methodology bundle locks into Oly_MASTER as end-of-session ref doc update
