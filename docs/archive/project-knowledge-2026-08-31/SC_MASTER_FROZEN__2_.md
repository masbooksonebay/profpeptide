# Strength Cycle — Master Ref Doc (FROZEN)

**Version:** 5.2 (FROZEN)
**Last updated:** May 16, 2026
**Status:** Stable platform-level decisions and rules. Updated only when fundamentals change.
**Pair doc:** SC_MASTER_ACTIVE.md (dynamic state, current work, changelog)

---

## v5.1 → v5.2 Changelog

**Merged from SC_MASTER_FROZEN_updates_May11.md:**
- 🆕 **MONETIZATION section** — Option C subscription strategy locked (free product fully capable; SC Pro removes AI usage cap)
- 🆕 **PROMO & THROTTLE RULES section** — first-100 grandfathering pattern + per-territory throttle ladder
- 🆕 **THINGS TO NEVER DO section** — Monetization / Throttle / Studio Bundle never-do rules
- Cross-references updated: Oly_MASTER → WN_MASTER (Weightlifting Nation finalized May 10)
- Supersedes "no IAP / no subscription" framing inherited from SC_MASTER v4 monolithic doc

---

## 🎯 Strategic Position

**SC = multi-program powerlifting platform for serious lifters.**

Per memory rule #22 (METHODOLOGY-PLATFORM PATTERN): Strength Cycle Studios builds methodology-respecting platforms that substitute coach authority with methodological literacy. SC is the powerlifting/strength-training expression of that thesis — multi-program by design, faithful implementation of each methodology rather than watered-down generic logging.

**Distinct from:**
- Generic gym trackers (Hevy, Strong, Jefit) — they don't understand specific programs
- Single-methodology apps (StrongLifts, Five/Three/One) — they lock to one program
- Coach-branded apps (Boostcamp Pro, RP Strength) — they sell coach access, not methodology depth
- AI-adaptive apps (Volt Athletics, Future) — they replace methodology with algorithmic guesswork

**Anchor positioning:** "5/3/1 + Multi-Program Tracker" — leads with the highest-search-volume methodology, signals platform expansion. AI features (Ask Coach) layer on top as personalization, not as the central value prop. WN is the AI-flagship; SC is the methodology-flagship.

---

## 📋 Program Roadmap

**Order of program addition:**

| # | Program | Audience tier | Priority rationale |
|---|---|---|---|
| 1 | Wendler 5/3/1 ✅ | Intermediate | Founding methodology, highest search volume, current core |
| 2 | Texas Method ✅ | Intermediate | Same audience as 5/3/1, structurally similar code, low IP risk |
| 3 | Starting Strength | Beginner | Highest-popularity program globally, expands TAM to beginners, requires Rippetoe disclaimer |
| 4 | 5/3/1 BBB (Boring But Big) | Intermediate | 5/3/1 variant — minimal incremental code, high engagement with existing users |
| 5 | GZCLP / GZCL Method | Intermediate | Popular community choice, distinctive progression model |
| 6 | nSuns 5/3/1 LP | Intermediate-Advanced | High-frequency 5/3/1 variant, popular among intermediate-to-advanced lifters |

**Rules for program addition:**
- Each program implemented faithfully to source methodology — no watered-down versions
- Each new program triggers App Store metadata update (description, keywords, what's new)
- Trademark/IP disclaimer added for each named-after-person program
- Subtitle stays "5/3/1 + Multi-Program Tracker" through this roadmap unless 5/3/1 stops being the dominant search anchor

---

## 🏗️ Implementation Architecture

**Tech stack:**
- Expo / React Native
- iOS-only (no Android, no Web)
- Local storage (no cloud sync, no backend dependency for app data)
- Anthropic API for Ask Coach feature (server-side prompt selection per active program)

**Repos:**
- **Client:** `/Users/mark/Desktop/strength-cycle` (Expo app)
- **API:** `/Users/mark/Desktop/hybrid-rockstar-api` (Vercel edge functions, hosts Ask Coach endpoint)
- Note: Both SC and HR apps share the hybrid-rockstar-api repo for Ask Coach. System prompts branch by `program` field in the request context

**Bundle ID:** com.strengthcycle.app
**SKU:** strengthcycle
**App ID:** 6762101377 (Apple ID)

### Multi-Program Schema (locked May 9, 2026)

**Hybrid model — nested config + flat workouts.**

```
AppData {
  activeProgram: 'wendler531' | 'texasMethod' | ...
  programs: {
    wendler531: { currentCycle, ... }
    texasMethod: { weekIndex, stalls, ... }
    // ... per program
  }
  workouts: WorkoutLog[]   // flat array, each entry tagged with program field
  lifts, settings, extraSets // shared across programs
  onboardingComplete: boolean
}
```

**Rationale:**
- **Scalability** — adding programs (SS, BBB, GZCLP, nSuns) just adds new keys under `programs.{}`. No schema changes per program.
- **Shared data integrity** — lifts, settings, units stay shared (single source of truth, no duplication)
- **Cross-program e1RM trend** — flat `workouts: WorkoutLog[]` with program tag means the e1RM chart can span both programs, which serious lifters want
- **Migration is lazy** — existing 5/3/1 data wraps into `programs.wendler531` on first read, workouts tagged retroactively, set `activeProgram = 'wendler531'`, set `onboardingComplete = true`. Zero disruption to 1.0.2 users.

**Migration rule:** lazy on read, defaults to wendler531 — no destructive rewrite of existing data, no migration prompts, no re-entry requirements. Existing 5/3/1 users open the new build and see no change except a new "Active Program" row in Settings.

### Coach Architecture

**System prompts live SERVER-SIDE in the API repo.**

- Client (`app/(tabs)/ask-coach.tsx`) POSTs to `https://hybrid-rockstar-api.vercel.app/api/ask-coach`
- Body includes `messages`, `context`, `program`, and program-specific seed values (e.g., 5RMs for TM)
- Server (`api/ask-coach.ts`) branches system prompt selection on the `program` field
- Backward compatible: old clients omitting `program` fall through to default 5/3/1 prompt
- Each new program requires both:
  - **Client repo update** — send the new program identifier in context
  - **API repo update** — add the program-specific system prompt branch
  - Both repos must ship together to avoid mismatch

### Stall Detection (locked May 9, 2026)

**1.0.3 ships SIMPLE stall detection. Full progressive state machine deferred to 1.0.4.**

**Simple alert (1.0.3):**
- AMRAP < 5 detected on Intensity Day (Texas Method)
- Show alert with three buttons: "Repeat next week" / "Cut Volume Day -10%" / "Deload to 85%"
- One-shot adjustment via `applyStallResponse` helper
- Persist `stallCount` for future learning, but don't act on it in 1.0.3

**Full state machine (1.0.4 with Starting Strength):**
- First-stall vs second-stall vs multi-stall behaviors
- Persisted `stallCount`, `repSchemeStage`, `weekIndexAtStall`
- Rep-scheme drop progression (5x5 → 2x3 → 3x2 → 5x1)
- Multi-week deload tapering
- Built alongside Starting Strength's 3-strikes deload logic for shared infrastructure

### Cycle Comparison

**Program-aware rendering on Track tab.**

- 5/3/1: 4-week cycle comparison rows (5/5/5 / 3/3/3 / 5/3/1 / deload)
- Texas Method: weekly comparison rows (each row = one week's V/R/I performance, columns: Volume PR / Intensity PR)
- Same UI shell, different data structure underneath per active program

### kg/lbs Auto-Default by Region

- kg default: UK, Ireland, Australia, New Zealand, Canada, EU markets, all metric regions
- lbs default: United States only
- Toggle persists across launches in Settings → General
- Helper `convertWeight()` handles all unit conversion
- All percentage calculations and rounding (2.5 kg / 5 lb) ride this path with no per-program logic

---

## 🏷️ App Store Metadata Pattern

**App Name:** "Strength Cycle" (locked)
**Subtitle template:** "5/3/1 + Multi-Program Tracker" (29 chars, current)

**Keywords field pattern (100 char limit, current 96):**
```
wendler,531,texas method,rippetoe,powerlifting,squat,bench,deadlift,amrap,1rm,barbell,log,gym
```

**Keyword field rules:**
- No words already in name or subtitle (Apple indexes those automatically)
- Single words preferred over phrases (Apple matches partial)
- Multi-word phrases only when phrase has high search value (e.g., "texas method")
- Specific high-intent keywords (wendler, rippetoe) over generic broad terms (training, lift, fitness)
- Update keywords when each new program ships

**Description structure:**

```
Strength Cycle is a focused, multi-program strength tracker built for serious lifters who want clean training data without bloated logging features.

Choose from established strength programs and let Strength Cycle handle the math while you focus on the lifts.

—— Programs Supported ——

[bullet list of currently-supported programs with brief description]

—— What Strength Cycle Does ——

[feature bullets — lifts logged, e1RM auto-calc, training max progression, e1RM trend chart, AMRAP tracking, AI coach]

—— Built For Serious Lifters ——

[positioning paragraph — methodology-faithful, not generic]

—— Clean Design, No Bloat ——

[design principles — iOS-native, no ads, no premium upsells, local storage, all iPhone sizes, kg/lbs auto-default]

—— Disclaimers ——

[trademark/IP disclaimer paragraph]
```

**Description rules:**
- First 3 lines visible above "more" tap — must hook
- Multi-program positioning, never lock language to single methodology
- Disclaimer paragraph required, lists every program creator referenced
- Update with each new program ship

**Promotional text (170 chars, updateable anytime without review):**
- Highlights current value, recent feature, or seasonal hook
- Update with every program ship and any major event

**What's New (release notes) pattern:**
- Lead with the new program added (if applicable)
- Highlight any AI/coach updates
- Mention territory expansions if relevant
- Keep concise (~300-400 chars)

---

## 🛡️ MONETIZATION (locked May 11, 2026)

**Subscription strategy: Option C — Free product is fully capable; paid tier removes AI usage cap.**

- **Free tier:** All programs supported, full logging, e1RM tracking, AMRAP tracking, AI coach with weekly query cap (cap value TBD with 1.0.5 spec)
- **Paid tier (SC Pro):** Unlimited AI coach queries
- All methodology / programs stay free permanently — gating methodology would weaken the brand promise of "methodology-faithful for serious lifters"

**Implementation target:** SC 1.0.5 (post-1.0.4 SS launch)

**Pricing direction (not final):** $7.99/mo, $59.99/yr leaning. Mid-market positioning between Boostcamp ($4.99/$39.99) and Juggernaut ($35/mo). Final pricing locks closer to 1.0.5 ship.

**Studio bundle (Studio Pro across SC + WN + future apps):** DEFERRED. Single-app SC Pro subscription only at first ship. Studio bundle architecture revisited after SC has a paying base proving the conversion model.

**Pre-1.0.5 state:** No IAP. Monetization through Amazon affiliate (Gear tab) and Learn More book links (Practical Programming, 5/3/1 Simplest and Most Effective) using `?tag=profpeptide-20` Amazon Associates parameter.

### Commerce Integration

- **In-app tab:** Gear (position 4)
- **Backend:** strengthcycle.shop (Amazon affiliate storefront for lifting gear)
- **Domain registered:** GoDaddy, $1.19, Apr 2026
- **Gear Affiliate Research (for future Gear tab activation):**

**FLEXIBLE (accept app-only applications):**
- Titan Fitness: Impact Radius, 5%, 30-day cookie
- Gymreapers: direct Shopify program, up to 30%
- Nutricost: Awin network, 6%/30-day cookie ($5 refundable signup deposit)
- Bulk Supplements: 15%/90-day cookie
- Thorne: 20%/30-day cookie

**STRICT (require website + audit traffic):**
- REP Fitness: Post Affiliate Pro, up to 8%, 30-day cookie
- Rogue Fitness: Post Affiliate Pro, ~4-5%, cookie indefinite

---

## 📣 PROMO & THROTTLE RULES (locked May 11, 2026)

**First-100 grandfathering pattern (studio-wide):**
- Promo offering for forum launches: first 100 downloads per forum/territory get free subscription access
- Mechanism: Apple promo codes (100/version cap, ASC-managed, typically 1-year free) OR server-side lifetime grant flag (custom infrastructure). Mechanism decision deferred until 1.0.5 build.
- Pattern carries across studio — WN locked the same "first 100 per territory" model

**Throttle mechanism if downloads exceed support capacity:**
- **Preferred:** Per-territory removal in ASC > Pricing and Availability. One click, no algorithm penalty, reversible in minutes.
- **Escalation:** "Remove from Sale" entirely. Keeps existing users, stops new downloads everywhere, ASC one-click.
- **Avoid:** Full app pull from App Store. Algorithm penalty, app gets flagged abandoned in recommendations, re-launches lose momentum.

---

## 🛡️ Trademark / IP Rules

**Per-program disclaimer requirements:**

| Program | Trademark concern | Disclaimer required |
|---|---|---|
| Wendler 5/3/1 | Jim Wendler personal name + 5/3/1 Inc | "Not affiliated with Jim Wendler or 5/3/1 Inc" |
| Starting Strength | Mark Rippetoe personal name + Aasgaard Company | "Not affiliated with Mark Rippetoe or The Aasgaard Company" |
| Texas Method | Methodology associated with Rippetoe (via Practical Programming book) but "Texas Method" name not directly trademarked | Soft disclaimer (general "any program creator referenced") |
| 5/3/1 BBB | 5/3/1 variant — Wendler disclaimer covers | Already covered by Wendler disclaimer |
| GZCLP | Cody LeFever / GZCL methodology | "Not affiliated with Cody LeFever or the GZCL methodology" |
| nSuns | Anonymous Reddit user creator | Lower IP risk, soft disclaimer sufficient |

**Master disclaimer pattern (used in description, updated with each program):**
> "Strength Cycle is an independent training tool. Not affiliated with [Wendler, 5/3/1 Inc, Mark Rippetoe, The Aasgaard Company, Cody LeFever, etc.]. Use of this app is for personal training tracking purposes only."

**Critical rule:** never claim endorsement, partnership, certification, or official affiliation with any program creator. Always frame as "independent training tool" implementing the methodology faithfully for personal use.

---

## 🌍 Territory Rollout Strategy

**Phased international expansion sequence:**

| Phase | Territories | Rationale | Status |
|---|---|---|---|
| 1 | UK + Ireland | Soft launch in English-speaking, kg-using market with manageable scale. | LIVE (May 2026) |
| 2 | Australia + New Zealand | English-speaking, kg-using, similar fitness culture. Doubles addressable territory without new localization or screenshot work. | Planned with 1.0.3 |
| 3 | Canada | English (and French-Canadian eventually), kg-using by federal standard, low-risk North American expansion | Planned post-stability |
| 4 | United States | Largest TAM. Saved for last to maximize learning from prior phases. | Planned post-Canada stability |
| 5+ | Major European markets | EU expansion with local-language support added | Future |

**Why this order:**
- Same English-language metadata serves Phase 1-3 (UK + IE + AU + NZ all default to UK English on iOS; Canada bilingual but accepts US English)
- kg defaults align in Phases 1-3
- US launch (lbs default) gets dedicated screenshot variants
- Each phase validates before next; problems caught at small scale

---

## ⚙️ Settings & Localization Defaults

**Units:**
- kg/lbs toggle in Settings (locked feature)
- First-launch auto-detect by region
- All percentage calculations use the selected unit; rounding to 2.5 kg / 5 lb increments
- Helper `convertWeight()` in `lib/context.tsx` handles every conversion path; new programs use this helper, not custom logic

**Language:**
- v1: English only (US English primary, UK English localization for non-US English-speaking markets)
- UK English localization unlocks kg-localized screenshots + UK-specific subtitle/keywords/description
- Apple iOS English (U.K.) localization serves: UK, Ireland, Australia, New Zealand, India, Singapore, etc.

**Date/time:**
- iOS-native locale handling (no manual override)

**App Privacy disclosure:** "Data Not Collected" — no data collection from users, all local. Per current App Store Connect privacy panel.

---

## 🛠️ Build / Testing Rules

**EAS remote versioning (CRITICAL):**
- `eas.json` has `appVersionSource: "remote"` with `autoIncrement: true` for production
- Bumping `version` and `buildNumber` in `app.json` does NOT change what EAS submits — those values are tracked on EAS servers
- To bump version (e.g., 1.0.2 → 1.0.3): run `eas build:version:set --platform ios 1.0.3` BEFORE the build. autoIncrement handles the build number
- Submit profile in eas.json: ascAppId=6762101377, appleId=markshurtliff@gmail.com, appleTeamId=VCT64S7K6P

**TestFlight-Ahead Rule (per memory #21):**
- Always keep one TestFlight build ahead of App Store version
- Apple closes live version + prior versions for Beta App Review once a version goes public
- Within 1-2 days of any App Store ship, prep +0.0.1 TestFlight bump (version bump alone unlocks external testing pipeline)

**Sim Verification Rule (per memory #19):**
- Max 2-3 screenshots when verifying CC code/data integrations: top-level summary, representative detail screen, highest-risk structural change
- Don't march through 10+ spot-checks
- Structural-level breakage surfaces during build or coach review

**Full-Build-Before-Coach-Review Rule (per memory #20):**
- Apps fully built to feature parity with category leaders BEFORE coach review
- Don't ship minimum-viable to coaches
- Coach review = post-build polish pass, not feature scoping input
- Do not defer features for "after coach feedback"

**CC Technical Workflow (per memory #11):**
- Wake-up sequence: `cd ~/Desktop/strength-cycle` + `claude --dangerously-skip-permissions` + prompt
- Click-to-copy prompts directly in chat
- Git email: masbooksonebay@gmail.com (Vercel compatibility)
- Parallelize CC across repo tabs; `/exit` before eas build

**Site Fetch Rule (per memory #14):** for any CC prompt touching profpeptide.com SC pages (e.g., /strength-cycle/privacy, /strength-cycle/support), web_fetch live page first with cache-buster.

---

## 👥 Coach Review Philosophy

**Pre-coach-review state:** SC must be feature-complete to category-leader parity (Hevy, Strong, Boostcamp benchmarks for fitness app conventions).

**Coach role:** post-build polish pass, methodology accuracy validation, content review for Ask Coach AI persona.

**Coaches reviewed/in pipeline:**
- Coaches reviewed Cycle 1 SC: 4-LLM audit framework + at least 4 strength coaches (per HR/SC review history pattern)

**Coach's review feedback integration:**
- Methodology bugs → fix before next ship
- UX suggestions → evaluated against industry conventions; defer to Apple/iOS conventions if conflict
- Feature requests → backlog evaluation, not automatic adoption

---

## 🚫 Things to Never Do

### Monetization
- Never describe SC as "free forever" once 1.0.5 ships subscription infrastructure — describe as "free tier" or "free with optional Pro upgrade"
- Never paywall a program or methodology — all programs stay in the free tier permanently
- Never paywall logging, e1RM, AMRAP tracking, or any core measurement feature
- Never enable subscription auto-renewal copy that hides the subscription nature — Apple-compliant disclosure language only
- Never set price points without referencing the Option C tier (free with capped AI vs paid unlimited AI) — pricing is anchored to the value gap, not arbitrary
- **SC subscription infrastructure ships in 1.0.5. Pre-1.0.5 monetization is Amazon affiliate only.**

### Throttle
- Never pull SC from the App Store entirely as a throttle mechanism — use per-territory removal first, "Remove from Sale" as escalation
- Never assume promo codes are "lifetime free" — Apple promo codes grant initial subscription period (1 year if annual product), not perpetual access. Lifetime grants require server-side flag.

### Studio Bundle
- Never offer studio bundle pricing until at least one SCS app has a proven paying user base
- Never architect cross-app subscription dependencies that would block independent app shipping (each app stands alone)

### ASC Status Interpretation
- "Ready for Distribution" = LIVE on App Store. NOT a "needs your action" state.
- "Pending Developer Release" = Apple has approved, awaiting Mark's release click.
- "In Review" = Apple actively reviewing.
- "Waiting for Review" = in queue, hasn't started.
- "Processing for Distribution" = transient, between release click and live (~minutes).

---

## 🔗 Cross-References

- **SC_MASTER_ACTIVE.md** — current state, in-flight work, recent changelog, submission tracking
- **SCS_MP** — studio-level strategy, brand line, portfolio decisions
- **WN_MASTER (FROZEN + ACTIVE)** — sister app (AI-flagship parallel positioning, multi-system methodology platform)
- **HR_MASTER** — sister app (Hyrox-style single-methodology + tier toggle)
- **Apple Developer Org Conversion case 102887649950** — pending; affects developer name on SC listing
- **hybrid-rockstar-api repo** — server-side Ask Coach prompt host (shared with HR app)

---

## 📝 Frozen Doc Update History

- **v1-v3** — early SC build, single-program (5/3/1 only) positioning
- **v4** (April 2026) — Track tab refactor incorporating AMRAP Tracker with Auto-1RM Trending and Cycle Comparison View as Tier 1 differentiating features
- **v5** (May 9, 2026) — FROZEN/ACTIVE split. Multi-program platform thesis codified. Program roadmap (5/3/1 → TM → SS → BBB → GZCLP → nSuns) locked. ASO metadata pattern documented. Territory rollout strategy formalized. Trademark/IP rules per-program. UK English localization decision. App ID corrected from 6741471948 to 6762101377.
- **v5.1** (May 9, 2026) — Added implementation architecture: hybrid schema lock (activeProgram + nested programs + flat workouts with program tag), lazy migration approach, simple stall detection scope (1.0.3) with full state machine deferred to 1.0.4, program-aware Cycle Comparison rendering rules, Coach architecture (system prompts live in hybrid-rockstar-api repo, requires both-repo updates per program), EAS remote versioning rule (eas build:version:set, not app.json edit).
- **v5.2** (May 16, 2026) — Merged SC_MASTER_FROZEN_updates_May11.md content. MONETIZATION section added with Option C subscription strategy lock (SC Pro removes AI cap; pricing $7.99/$59.99 leaning; ships 1.0.5). PROMO & THROTTLE RULES section added (first-100 grandfathering pattern; per-territory throttle ladder). THINGS TO NEVER DO section added (monetization/throttle/studio-bundle never-do rules). Commerce Integration consolidated under MONETIZATION. Cross-references updated: Oly_MASTER → WN_MASTER (Weightlifting Nation finalized May 10).

---

**This is the FROZEN doc. Day-to-day state lives in SC_MASTER_ACTIVE.md.**
