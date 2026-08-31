# WN Phase 1a — Competitive Analysis Brief

**Date:** May 27, 2026
**Author:** Claude (Phase 1a research)
**Status:** v1 — synthesis from web research (Catalyst Athletics, JuggernautAI, TrainHeroic, Boostcamp, Peak Strength, Weightlifting.ai, Olympic Weightlifting App, GymBook, Deep Strength, Torokhtiy, Ma Strength, plus adjacents)
**Owner:** Mark Shurtliff / Strength Cycle Studios LLC

---

## Executive summary

The Olympic weightlifting app market sorts cleanly into four categories: **adaptive AI programming apps** (3 players), **program libraries / coaching subscriptions** (4-5 players), **utility/tool apps** (3-4 players), and **video/kinematic analysis apps** (5+, non-overlap with WN).

The competitive landscape has one decisive gap: **no app in the market offers explicit methodology-toggle programming**. All three adaptive competitors (Weightlifting.ai, Peak Strength, and JuggernautAI when it ships OL) use generic "AI-driven adaptive" approaches with no named methodology lineage. The closest anyone gets is Torokhtiy referencing Medvedev/Oleshko in static PDF program descriptions, or Boostcamp hosting Dr. Kyle Pierce's block periodization program as one of many community offerings. Nobody has packaged a Russia/China/Bulgaria selector inside a single app with engines tuned to each system's principles.

WN's strategic positioning (AI-flagship × methodology-platform) is genuinely uncontested. The risk is not differentiation — it's execution. JuggernautAI is the most credible adaptive-AI brand and they have explicitly said Weightlifting is "in development." If Chad Wesley Smith's team ships OL before WN, the AI-flagship narrative is partially preempted (though without methodology toggle, the differentiation still holds).

Three table-stakes features show up in every adaptive competitor that WN needs to plan for: a demo video library, equipment substitution rules, and competition date targeting with auto-taper. WN already has equipment substitution and tapering in the Russian v3 spec. The video library is the most material gap — Peak Strength has 600+ videos.

Pricing benchmarks for adaptive OL apps cluster at $30-40/month with annual discounts to ~$300-350/year. WN's Option C subscription pattern with first-100 grandfathering should land in this band.

---

## Market taxonomy

### Adaptive AI programming apps (direct competitors)

These are apps that use athlete-feedback loops (RPE, readiness, performance data) to adjust prescriptions in real-time. WN sits in this category.

**Weightlifting.ai** — The most direct competitor. Built by coach Max Aita and Seb Ostrowicz (Weightlifting House). OL-exclusive. Pricing ~$30-40/month with free trial. Cycles run 4-20 weeks; 3-6 sessions/week. AI adjusts based on RIR/RPE inputs. Competition date support with auto-taper. Equipment alternatives. Demo library featuring world-class lifters. Performance Community for video review. v2.0 redesign brought dark mode and design system standardization. No explicit methodology — generic adaptive periodization. User complaints: $30-40/mo feels expensive for what reads as "essentially a spreadsheet" to some users.

**Peak Strength** (Garage Strength / Dane Miller) — Multi-sport adaptive app. OL is one of several sport paths under the Sports Performance category. 600+ video library. Peak Date Targeting periodization. OL-specific features: program selection based on estimated 1RM weaknesses, 6th-day option, split jerk vs power jerk focus toggle, attempts tracking (circle outlines for missed attempts), variations and complexes library, technique instruction from Dane Miller. Equipment customization and exercise substitution. Onboarding asks for max lifts on multiple lift variations, not just primary lifts. Pricing characterized as "relatively high cost" in reviews. User complaints: app freezing/crashing, requires adjustment period.

**JuggernautAI** (Chad Wesley Smith / Juggernaut Training Systems) — Currently Powerlifting + Powerbuilding. Olympic Weightlifting "in development." $35/month or $350/year with 2-week free trial. Patent-pending Expert System AI. Readiness assessment per workout (motivation, sleep quality, nutrition, soreness on 1-5 scale). RPE + readiness drive real-time load adjustment. v2.5 update brought workout sharing and refined algorithms. **Major threat: when JuggernautAI ships OL, they become the most credible direct competitor immediately.** Reviews mixed — praised for systematic approach, criticized for questionable volume prescriptions, requires user to have programming knowledge, not for bodybuilders.

### Program libraries and coaching subscriptions (indirect competitors)

These deliver static programs (with weekly auto-progression in apps that host them) plus optional human coaching tiers. They're not adaptive in the AI sense but dominate the high-trust-coach segment.

**Catalyst Athletics Online** (Greg Everett) — 78-79 different programs ranging $29-$199 one-time purchase. Distribution via Web/Text/Excel + TrainHeroic app. Club Teams subscription with video review/feedback from Greg/Aimee Everett and assistant coaches. 5/4/3 day club variants, Masters Team, Aimee's Ladies. 108,854+ athletes have used programs. Greg "online daily" answering subscriber questions. Filter dimensions: standard vs specialty, format, focus (leg strength/pulling/overhead/technique/squat), volume level (low to extremely high). Static programs with weekly progressions; coaching is human-driven.

**TrainHeroic Marketplace** — Platform hosting hundreds of training plans from independent coaches. Subscription-based ($29-$167/month per program); some one-time programs. Hosts Catalyst Athletics, Cara Slaughter (CHFP), Mattie Rogers, Dave Spitz (California Strength), Coach Gaby, Joey Hoisescu (Team Black and Gold), and many others. 12-13 week programs typical. In-app messaging and community per program. Not OL-specific — TrainHeroic itself is a general training platform.

**Boostcamp** — Free OL programs from various coaches. 4.8 stars with 10,000+ ratings. Hosts: Dr. Kyle Pierce (LSUS) Intermediate Block Periodization, Oleksiy Torokhtiy "Transition to Olympic Weightlifting" (6 weeks, 3 days/week, free), OlyBuilding PPL (5 weeks), 12-Week Olympic Weightlifting Program, and dozens of user-created programs. Auto-progression between sessions based on actual lifts. Free for most programs. Uses RPE for intensity prescription. Not OL-focused — general training app where OL is one of many supported categories.

**Torokhtiy Store** (Oleksiy Torokhtiy, 2x Olympian, multi-time European/World titles) — PDF programs sold one-time. Torokhtiy Club (membership coaching). Distribution partnerships with Boostcamp. References classical Russian methodology (Medvedev, Oleshko) in program copy but delivered as static PDFs with manual progression — not an adaptive app. Strong content marketing brand via torokhtiy.com.

**Ma Strength** (chineseweightlifting.com) — The premier Chinese weightlifting methodology brand. Books, seminars, training camps, PDF programs. Not an app. Highly relevant as a methodology source for WN's China spec but not a competitive app.

### Utility / tool apps (not programming)

**Olympic Weightlifting App** (Nino Suess) — $2.99 with IAP, iPad/iPhone. Robi/Sinclair/BVDG calculators. IWF world records database by weight class and age. 1RM calculator (Epley/Brzycki). PR tracking. Competition Mode (landscape, for running club competitions). Weight loading visualizer. Multi-language support including Russian. Swiss-army-knife utility tool, not programming.

**GymBook** (Appwise GmbH) — Per multiple 2026 review aggregators, "the best weightlifting app for Olympic lifting." iOS-only. ~$5/month. Video logging (record a set, attach to log entry). Detailed barbell loading guide with plate visualization. Apple Watch and Apple Health integration. Logger, not adaptive programming.

**Deep Strength** (Christopher Williams) — iPhone-only, free. 1300+ exercise database. Unique feature: build/track Weightlifting Complexes natively. Low review count (niche app). Worth monitoring for fast iteration.

**Olympian - Lifting Tracker** — Hypertrophy-focused workout logger. Not OL-specific despite the name.

### Adjacent / non-competitor (video/kinematic analysis)

**WL Analysis / Iron Path** — Bar path tracking. **Coach's Eye / Hudl Technique** — Slow-motion video analysis. **AiKYNETIX** — $12.99/month, 3D motion tracking. **CueForm AI** — Free + $10/month, conversational AI form coach. **FormCheck AI** — $12-13/month, 30+ exercises. These complement WN — they could even be referenced as partner tools in marketing copy.

### Notable new entrant flagged for monitoring

**StrengthLab360** — Claims more dynamic adaptability than Weightlifting.ai. $19.16/month. Multi-discipline (hypertrophy/PL/hybrid/OL). Lower price point than Weightlifting.ai is meaningful — they're positioning on value. Need deeper read in a future phase.

---

## Strategic implications for WN

### Differentiation holds

The methodology-toggle positioning is unoccupied. No competitor sells "pick Russian, Chinese, or Bulgarian programming" as an in-app feature. WN's lineage-based engines (Vorobyev/Medvedev/Prilepin/Roman for Russia; equivalent for China and Bulgaria) are genuinely unique. The AI-flagship × methodology-platform combination has no peer.

The risk to monitor is JuggernautAI shipping OL. They have the most credible AI-driven adaptive brand. Their Expert System with readiness assessment maps closely to what an AI-flagship OL app would look like. WN needs to ship before they do, or in parallel, with the methodology angle as the clear wedge.

### Onboarding fields — WN's 8 base + selectors is in band

Common onboarding fields across competitors:
- Current 1RMs on snatch, C&J, back squat (universal)
- Max lifts on additional variations (Peak Strength uniquely deep here)
- Training history / experience level (universal)
- Available equipment (Peak Strength, Weightlifting.ai)
- Days per week (3-6 across all adaptive apps)
- Body weight (JuggernautAI; needed for ratios anyway)
- Sex (needed for ratio engine; most don't expose explicitly)
- Goals + competition date (universal in adaptive apps)
- Per-session readiness assessment (JuggernautAI: motivation/sleep/nutrition/soreness 1-5)

WN's 8 fields + selectors looks well-calibrated. The one explicit gap to consider: **per-session readiness input**. The Russian v3 spec's quality gates use miss count + technique scores + pain flags, which is OL-specific and arguably better than generic motivation/sleep ratings — but adding a lightweight sleep/readiness flag wouldn't conflict with the methodology, and the field is a well-established competitor pattern.

### Variant catalogs — WN is in range

Catalyst Athletics tags programs by focus (Leg Strength/Pulling/Overhead/Technique/Squat). Peak Strength has variations and complexes plus split-jerk-vs-power-jerk toggle. Deep Strength has 1300+ exercises with native Complex builder. Weightlifting.ai uses Primary Movement Groups (Snatch/Squats/Cleans) for volume adjustment.

WN's Russia variant catalog (16+ snatch variants, 18+ C&J variants, plus pulls/squats) is comparable in depth. China and Bulgaria catalogs being scoped at 12-18 each is in band. The Complex builder pattern (Deep Strength) is worth considering for v1.1+ if it differentiates further.

### Progression models — three patterns dominate

1. **Static library + auto-progression** (Catalyst, TrainHeroic, Boostcamp): athlete picks a program, system progresses based on actual lifts.
2. **Adaptive AI with RPE/readiness feedback** (JuggernautAI, Peak Strength, Weightlifting.ai): real-time load adjustment per set or per session.
3. **Periodization with peak date targeting** (Peak Strength, Weightlifting.ai): user enters competition date, system structures meso/macro toward it.

WN's Russian methodology v3 spec sits in #2 + #3 simultaneously: plan-led with quality gates means the prescribed plan adapts based on miss count and technique scores, while the 12-week macrocycle structure with peak/test mesocycle is exactly the periodization pattern competitors use. Nothing in the v3 spec needs to change here — WN is already aligned to the dominant competitor patterns *and* adds methodology lineage on top.

### Table-stakes features

Every adaptive competitor has:
- Real-time weight recommendations per set ✓ (in WN v3 spec)
- Equipment substitution rules ✓ (locked in v3)
- Demo video library — **gap to plan**: competitors have 600+ videos (Peak Strength) or world-class lifter demos (Weightlifting.ai). WN needs at minimum demo videos for primary lifts + key variants. Decision for v1.0: ship with stock demo links (YouTube embeds to e.g. Catalyst/Torokhtiy public content with attribution) vs. produce original demos. **Recommend Mark surface this as a v1.0 vs v1.1 decision when build phase opens.**
- Apple Health integration — deferred to v1.1 per WN_MASTER_FROZEN, that's fine
- Apple Watch support — typically v1.2+, not table stakes for v1.0
- Workout/rest timer ✓ (table stakes)
- PR tracking ✓ (table stakes)
- Competition date / auto-taper ✓ (in Russian v3 spec)
- Performance community / coach feedback — not in WN v1.0 scope; defer

### Pricing band

Adaptive OL/PL apps cluster at:
- Monthly: $29-40 (Catalyst Club $29, TrainHeroic $29-37, JuggernautAI $35, Weightlifting.ai $30-40, Peak Strength similar)
- Annual: $300-350 with discount
- One-time programs: $29-$199 (Catalyst, Torokhtiy)
- Tool apps: $2.99-$9.99 one-time

WN's Option C subscription pattern with first-100 grandfathering should land at $29.99-$34.99/month, $299-$349/year, matching the competitive band. The first-100 grandfathering is a unique acquisition mechanic competitors don't offer — useful for early-adopter pull.

---

## v3 Russian methodology — suggested updates based on landscape

Three observations from the research that may warrant tightening in the Russian v3 spec (or noting forward to v4 if cycle is closed):

**1. Per-session readiness assessment.** JuggernautAI's motivation/sleep/nutrition/soreness 1-5 panel is a well-established adaptive AI pattern. WN's quality gates currently use miss count + technique scores + pain flags, which are richer and more OL-specific. Consider whether a lightweight per-session sleep/readiness flag (e.g., "How did you sleep?" 1-5) could supplement the existing gates without bloating the input burden. Russian methodology classically includes recovery monitoring — adding this would be lineage-consistent, not a deviation.

**2. 6th-day option for advanced.** Peak Strength explicitly offers a 6th training day for OL. Russian methodology supports 5-6 sessions/week at advanced tier (Snatch and C&J families 3-5x each, plus dedicated squat days). WN's engine should flex from 3-5 sessions for intermediate up to 6 sessions for advanced. Worth verifying the engine spec accommodates this without methodology violation.

**3. Attempts tracking.** Peak Strength tracks attempts on weightlifting movements (circle outlines for misses). Russian methodology already includes miss count in quality gates. The UX pattern of attempt indicators per set is worth borrowing — it gives users a visible competition-relevance signal that maps directly to the existing methodology data.

None of these require v3 to reopen. They're refinements that can be flagged for the engine spec phase (Phase 3) when methodology → deterministic rules translation happens.

---

## What this means for China and Bulgaria methodology drafting

The competitive landscape sharpens two questions for the methodology specs ahead:

**For China:** Chinese methodology is often characterized as autoregulatory + technical-precision focused. The Ma Strength brand owns the methodology content space (books, seminars). Their philosophy emphasizes hookgrip from day one, ratio-driven progression, daily-max-adjacent intensity targeting, and very high volume on classic lifts. The China v1 draft should differentiate clearly from Russia's plan-led-with-quality-gates by leaning into autoregulation + ratio-driven correction within a more flexible weekly structure.

**For Bulgaria:** Bulgarian methodology is the most extreme of the three — daily maxing on snatch, clean & jerk, and squats; minimal variant work; 2-3 sessions per day in pure form. The competitive landscape contains *no* Bulgarian methodology app or service — only spreadsheets and articles (Greg Nuckols' Bulgarian Manual being the most cited reference). WN's Bulgaria v1 draft should acknowledge the safety considerations (advanced lifters only, prior Russian/Chinese-style base recommended per Bob Takano's research on Bulgarian preparation), and may need to ship with stronger onboarding gating than Russia/China.

---

## Open questions surfaced for Mark

1. **JuggernautAI OL timing:** When does JuggernautAI ship OL? Worth a monthly check on their site. If they ship within 90 days, the AI-flagship narrative gets more crowded fast.
2. **Demo video library — v1.0 or v1.1?** Build phase decision. Stock embeds vs original production. Cost/timeline implications differ materially.
3. **Per-session readiness flag — add to v3 or defer?** Engine spec phase decision.
4. **Bulgarian onboarding gating:** Should Bulgaria require advanced tier confirmation before unlocking? Russia/China don't need this gate.
5. **Pricing — exact landing point in $29-40 band?** WN positioning relative to JuggernautAI ($35) and Weightlifting.ai ($30-40) matters.

---

## Sources surveyed (May 27, 2026 search)

Catalyst Athletics (catalystathletics.com), JuggernautAI (juggernautai.app), TrainHeroic Marketplace (marketplace.trainheroic.com), Boostcamp (boostcamp.app), Peak Strength (peakstrength.app, Garage Strength), Weightlifting.ai (weightlifting.ai, Max Aita / Seb Ostrowicz), Olympic Weightlifting App (apps.apple.com/us/app/id1459410139, Nino Suess), GymBook (gymbookapp.com, Appwise GmbH), Deep Strength (Christopher Williams, App Store), Torokhtiy Store (store.torokhtiy.com, Oleksiy Torokhtiy), Ma Strength (chineseweightlifting.com), StrengthLab360, BarBend 2026 weightlifting apps roundup, Garage Strength 2024 apps roundup, multiple 2026 review aggregators (home-gym-reviews.com, techfixai.com, dr-muscle.com).

---

**End of Phase 1a brief. Ready for Phase 1b — China methodology v1 draft.**
