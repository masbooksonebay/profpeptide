# Weightlifting Nation — Master Frozen

**Status:** FROZEN REFERENCE — stable rules, definitions, scope, strategic positioning
**Version:** v1.1 (May 27, 2026) — strategic positioning notes from Phase 1a competitive research added
**Cross-referenced in:** SCS_MP v6.6

---

## 🔒 App Identity

- **Name:** Weightlifting Nation (visual brand "Nation", subtitle "Global Training Systems")
- **Codename history:** "Oly" deprecated May 16, 2026 — WN is current name
- **Category:** Olympic weightlifting iOS app
- **Positioning:** AI-flagship multi-system methodology platform for Olympic weightlifting
- **Domains:** weightliftingnation.com (Cloudflare) + weightliftingnation.shop (GoDaddy)

---

## 🔒 Methodology Scope

WN ships with **three methodology systems** at v1.0:

1. **Russian** — classical Soviet/Russian-inspired (Vorobyev/Medvedev/Prilepin/Roman lineage). Percentage-based, plan-led, repetition-rich. Locked at v3 spec.
2. **Chinese** — daily-max + backoff approach (Chen Wenbin, Yu Jie, modern Chinese national team). Spec pending.
3. **Bulgarian** — daily-max-only, log-only, no prescribed work outside max attempt (Abadjiev legacy + modern Bulgarian/Greek lifters). Spec pending.

Plus a system-independent **Foundation** phase for new lifters (technique acquisition without percentage prescription).

User selects methodology at onboarding (or routes through Foundation first if novice).

---

## 🔒 Strategic Positioning (NEW v1.1 — from Phase 1a competitive research)

### Methodology-toggle positioning uncontested
Phase 1a research confirmed: **no Olympic weightlifting app offers Russia/China/Bulgaria methodology selection.** Competitive landscape covered:
- Adaptive AI apps: Weightlifting.ai, Peak Strength, JuggernautAI — none offer methodology toggle
- Program libraries: Catalyst Athletics, TrainHeroic, Boostcamp, Torokhtiy, Ma Strength — none offer methodology toggle
- Utility apps: Olympic Weightlifting App, GymBook, Deep Strength — methodology-agnostic

WN's methodology-toggle positioning is genuine strategic wedge in the OL category.

### Primary competitive threat: JuggernautAI shipping OL
JuggernautAI is publicly "in development" for Olympic weightlifting. They are the AI-flagship competitor most likely to ship before WN. If they ship first, WN's AI-flagship angle gets crowded. Monthly monitoring required during build phase.

### Pricing band confirmed
Adaptive OL/PL apps cluster at:
- Monthly: $29-40 (Catalyst Club $29, TrainHeroic $29-37, JuggernautAI $35, Weightlifting.ai $30-40, Peak Strength similar)
- Annual: $300-350 with discount
- One-time programs: $29-$199 (Catalyst, Torokhtiy)
- Tool apps: $2.99-$9.99 one-time

WN's Option C subscription + first-100 grandfathering should land at $29.99-$34.99/month, $299-$349/year, matching the competitive band.

### Bulgarian methodology = competitive whitespace
Zero Bulgarian-methodology apps exist anywhere in the OL/PL category. Substantial differentiation opportunity. Bulgarian methodology is unforgiving for novices — consider onboarding gating to advanced-tier confirmation.

---

## 🔒 Build Approach

WN is built fresh as an Expo iOS app. NOT a fork of SC or HR. Shared methodology principles (percentage-based programming, periodization, quality gates) inform the engine but the codebase is independent.

**Engine architecture decision pending** — three approaches:
1. Single engine + country-specific rule modules (preferred default)
2. Three engines + shared state model
3. Country-routed engine selection at user onboarding, three full engines downstream

Decision locks at engine architecture spec phase (before repo creation).

---

## 🔒 Onboarding Fields (Locked)

WN onboarding captures 8 fields:

1. Sex
2. Age bracket
3. Bodyweight bracket (kg)
4. Training experience tier (novice / beginner / intermediate / advanced / elite)
5. Competition status (currently competing / off-season / not competing / training for general fitness)
6. Best snatch (kg) — if not novice
7. Best clean & jerk (kg) — if not novice
8. Methodology selection (Russia / China / Bulgaria / Foundation routing for novices)

Per Phase 1a research, this field set is well-calibrated against competitor patterns. No additions needed at v1.0.

---

## 🔒 Subscription / Monetization Pattern

**Option C** — Free with AI cap, paid for unlimited AI (mirrors SC monetization pattern locked in SC_MASTER_FROZEN):
- Free tier: limited AI coach interactions
- Paid tier (WN Pro): unlimited AI + premium features

**First-100 grandfathering pattern** (studio-wide):
- First 100 downloads per forum/territory get free subscription access
- Mechanism: Apple promo codes OR server-side lifetime grant flag
- Mechanism decision deferred until build phase

**Pricing target:** $29.99-$34.99/month, $299-$349/year (per Phase 1a competitive band).

---

## 🔒 Trademark / IP Rules

- **"Russia," "Russian methodology," etc.** — methodology lineage description, not trademark concern
- **No personal name endorsement claims** — Vorobyev, Medvedev, Prilepin, Roman are historical sources cited respectfully but not endorsing WN
- **No Bulgarian National Team affiliation claims** — Abadjiev's methodology is historical/cultural reference
- **Methodology fidelity disclaimer pattern** — "WN's Russian engine is a classical Soviet/Russian-inspired Olympic weightlifting programming engine. Not a claim to model current Russian Weightlifting Federation practice."

---

## 🔒 Table-Stakes Features (v1.0 minimum)

Per Phase 1a research, every adaptive competitor has:

- ✅ Real-time weight recommendations per set (in Russia v3 spec)
- ✅ Equipment substitution rules (locked in Russia v3 spec)
- ⚠️ Demo video library — **v1.0 vs v1.1 decision pending** (see WN_MASTER_ACTIVE open questions)
- ⏳ Apple Health integration — deferred to v1.1
- ⏳ Apple Watch support — typically v1.2+, not table stakes for v1.0
- ✅ Workout/rest timer (table stakes)
- ✅ PR tracking (table stakes)
- ✅ Competition date / auto-taper (in Russia v3 spec)
- ❌ Performance community / coach feedback — not in WN v1.0 scope; deferred

---

## 🔒 Progression Model Position

Per Phase 1a research, three patterns dominate the OL/PL category:

1. **Static library + auto-progression** (Catalyst, TrainHeroic, Boostcamp)
2. **Adaptive AI with RPE/readiness feedback** (JuggernautAI, Peak Strength, Weightlifting.ai)
3. **Periodization with peak date targeting** (Peak Strength, Weightlifting.ai)

WN's Russian methodology v3 spec sits in **#2 + #3 simultaneously**: plan-led with quality gates means the prescribed plan adapts based on miss count and technique scores (adaptive), while the 12-week macrocycle structure with peak/test mesocycle is exactly the periodization pattern competitors use. WN is aligned to dominant competitor patterns AND adds methodology lineage on top.

---

## 🔒 Things to Never Do

- Never claim endorsement from any historical methodology author (Vorobyev, Medvedev, Prilepin, Roman, Abadjiev, etc.)
- Never claim current national federation affiliation (Russian, Chinese, Bulgarian)
- Never localize Bulgarian methodology to a novice tier — it's adult-strength territory
- Never gate methodology selection behind paywall — methodology fidelity is the brand promise
- Never replicate methodology specs from competitor apps — WN's specs are independently sourced

---

## 📅 Frozen Doc Update History

- **v1.0** (May 16, 2026) — WN_MASTER FROZEN/ACTIVE split established. Oly codename retired. Methodology scope, onboarding fields, monetization pattern locked.
- **v1.1** (May 27, 2026) — Strategic positioning notes added from Phase 1a competitive research (methodology-toggle uncontested, JuggernautAI threat, pricing band confirmation, Bulgarian whitespace). Table-stakes features list verified. Build approach + Things to Never Do sections retained.

---

## 🔗 Cross-References

- **WN_MASTER_ACTIVE v1.1** — dynamic state, current workstream
- **WN_Russia_Methodology_Spec_v3.md** — locked methodology spec
- **WN_PHASE_1A_COMPETITIVE_BRIEF.md** — competitive research artifact
- **SCS_MP v6.6** — parent doc

---

**This is the FROZEN doc. Day-to-day state lives in WN_MASTER_ACTIVE.**
