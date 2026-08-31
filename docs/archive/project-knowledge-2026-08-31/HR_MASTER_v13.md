# Hybrid Rockstar — Master Ref Doc

**Status:** ACTIVE — single doc structure
**Version:** v13 (July 25, 2026) — **SUPERSEDES v12 ENTIRELY** (v12 was drafted mid-afternoon and said app updates were paused; hours later v1.0.3 shipped 15 commits and went to Beta App Review). Captures the complete v1.0.3 release, the HYROX rulebook corrections, four build attempts' worth of EAS/HealthKit learnings, the confirmed first-100 cutoff, and the privacy-URL resolution.
**Prior:** v12 (superseded, never dragged in) · v11 (June 17)
**Cross-referenced in:** SCS_MP · HR_SOCIAL v12

---

## 📍 STATUS (July 25, 2026, end of day)

| Item | State |
|---|---|
| **Live on App Store** | **v1.0.2 (build 12)** since June 21 |
| **v1.0.3 (build 16)** | **Submitted for Beta App Review**, status "Waiting for Review" |
| **App Store submission for 1.0.3** | Version record staged, NOT submitted — Mark's call |
| Downloads | **100 first-time** (verified from ASC export) |
| Monetization | Free. No IAP. Subscription on hold. |
| App repo | `~/dev/hybrid-rockstar` @ `aa1760a`, pushed |
| TestFlight public link | `https://testflight.apple.com/join/7TfPPkMw` (10 testers, live, serving build 8 until 16 clears) |

---

## 🚢 v1.0.3 — WHAT SHIPPED (15 commits)

A **correctness release plus the three features Haylee asked for.**

**Correctness (the release's real purpose):**
- Station/division weights consolidated to a **single source of truth** (`hyrox-stations.json`), with `lib/stationWeights.ts` as the only module touching it. `divisions.ts`, `rules.ts`, `coachPrompt.ts`, `cycle.ts`, `constants/race.ts`, and `race.tsx` all now derive.
- **`check:weights`** — a consistency script that fails if any division/station value appears outside the source JSON. Drift is now mechanically impossible.
- Dead `WEIGHTS` table in `constants/race.ts` deleted (zero importers).
- "Reset All Overrides" in Settings was a **no-op** — it filtered a pre-migration key prefix the migration had already deleted. Fixed.
- About footer hardcoded "v1.0.0"; now reads `expo-constants`.
- Week 2 Strength A said "Add 5-10 lbs" — the only imperial weight in a kg-only product. Now kg.
- Doubles + Pro tier was silently ignored. Now honored (see rulebook findings).

**Features:**
- **Race results** — `hr.raceResults.v1`, a list entity (not a scenario extension), with date, division snapshot, finish time, 16-segment splits, notes. Feeds the Race tab calculator as a baseline.
- **Working weights** — optional per-session capture at completion, labels prefilled from the session's `A1./A2./B1.` prefixes (verified: **152 of 152 strength steps** match the parser). Week-over-week history by session type.
- **kg/lb toggle** — `units` in `hr_settings`, display-only conversion through one module (`lib/units.ts`), storage always metric. Guarded by a unit-literal check in `check:weights`.
- **Share card** — 1080×1350, `react-native-view-shot`, mirrors the GitHub carousel cover slide at ⅓ scale. Tier 1 = completion; Tier 2 = completion + logged stats, toggle defaults ON, only offered when data exists.
- **Apple Health** — write-only, opt-in.

**Other:** feedback email `.shop` → `.app`; privacy link repointed; onboarding subtitle → "HYROX TRAINING PROGRAM"; app icon removed from the welcome screen.

---

## 📖 HYROX RULEBOOK CORRECTIONS (verified against the official 26/27 PDFs)

The consolidation forced a rulebook check and found **shipping errors, not just drift**:

| Value | Was | Correct | Note |
|---|---|---|---|
| Wall ball, Open | **9kg M / 6kg F in `divisions.ts`** | **6kg M / 4kg F** | `divisions.ts` is the only file the Race tab reads — **Open athletes were seeing Pro weights** |
| Wall ball reps, women | 75 | **100 (all divisions)** | 75 was the **pre-September-2024** standard — genuinely stale, not drift |
| Wall ball height | 9ft/10ft by TIER | **3.00m men / 2.70m women, by GENDER** | Old values were ft-conversions (3.05/2.74); rulebook is metric-native |
| Sled pull, Pro M | 152 or 153 depending on file | **153kg** | |

**Doubles finding — Claude's instruction was wrong.** The prompt said "Doubles uses Open weights, so hide the Pro picker." That came from `rules.ts` — *one of the drifted files the release existed to fix*. The official Doubles rulebook lists **Doubles Men Pro with Pro weights**, and the onboarding screen already offered "Pro Doubles." CC checked the primary source and implemented the rulebook instead of the instruction. **Bonus:** Mixed Doubles is **not gender-split** — both partners use Doubles Men (Open M) loads.

> **Lesson:** don't source a fix from the artifact being fixed.

---

## 🔨 BUILD SEQUENCE — four attempts, three distinct lessons

| Build | Result | Cause |
|---|---|---|
| 13 | **Errored** (55s) | Provisioning profile predated HealthKit — didn't carry the entitlement |
| 14 | Never ran | Consumed by autoIncrement on the failed retry |
| 15 | **Rejected at upload validation** | ITMS-90683 — missing `NSHealthShareUsageDescription` |
| **16** | **✅ Success** | |

### 🔒 EAS + CC — the precise rule (supersedes v11's "run EAS outside CC")

**EAS builds run fine non-interactively from a CC session — UNTIL signing material has to change.**

- Simulator builds: always fine (unsigned, no profile consulted).
- Production builds: fine **if** credentials and profile are already correct on EAS servers.
- **Adding a capability invalidates the provisioning profile.** That needs an authenticated Apple session (2FA) → **plain terminal**.
- Recovery: `eas build --profile production --platform ios` *without* `--non-interactive`. Decline "reuse the original profile," accept "generate a new one."
- Also hit: **the Apple Developer Program License Agreement had been updated** and blocked bundle-ID registration until accepted at developer.apple.com by the Account Holder. This blocks submissions too.

### 🔒 HealthKit needs BOTH usage descriptions

**Even for a write-only integration.** Setting `NSHealthShareUsageDescription: false` is a defensible modelling choice and Apple's validator rejects it anyway (ITMS-90683: *"external libraries may reference these APIs… a purpose string is still required"*).

Shipped string: *"Hybrid Rockstar does not read your Apple Health data. This permission is requested by the Health framework, which the app uses only to save your completed workouts."* The app never calls `requestAuthorization` with read types, so **iOS never shows this string to a user** — it exists solely to satisfy the static validator.

### ⚠️ PP and HR are on DIFFERENT React Native architectures

**PP: `newArchEnabled: true`. HR: `false`.** PP uses `@kingstinct/react-native-healthkit@14` which requires Nitro which requires the new architecture — so **PP's precedent did not transfer**. HR is on **8.7.2**, the last pre-Nitro major (published June 2025, superseded).

**Tech debt with a name: HR needs a new-arch migration.** That's when HealthKit goes to 14.x. Until then the two apps can't share native library choices.

---

## 🍎 WHAT HR WRITES TO APPLE HEALTH

**Write-only. Reads nothing.** Per completed session: a workout record with **type** and **duration**. Nothing else — no distance, no calories, no heart rate (the app has no sensors, and writing prescribed values as measured would fabricate data).

Type mapping: Strength A/B → Traditional Strength Training · Easy/Recovery/Tempo Run → Running · Compromised Running → Cross Training · Movement Pattern + both EMOMs → Functional Strength Training · Simulation → Cross Training · Engine → Mixed Cardio.

⚠️ **Duration written is the PRESCRIBED duration, not elapsed.** Complete Week 2 Strength A and Health records 58 minutes regardless of actual time. It's the only duration the app has. **This is what v1.0.4's timer fixes.**

Failure behavior: fire-and-forget, unawaited, errors swallowed. Completion never blocks, no error ever shown. **Consequence: a silent failure looks identical to nothing happening** — worth a visible last-write indicator eventually.

---

## 🔒 FIRST-100 GRANDFATHERING — CUTOFF CONFIRMED

**`FIRST_100_CUTOFF_DATE = July 24, 2026 (end of day)`** ✅

Verified two independent ways — CINC read ASC Analytics, and the exported CSV was recomputed directly. Both agree: **100 first-time downloads total; cumulative crossed 100 on July 24** (5 that day, 95 as of July 23).

**Mechanism (unchanged from v12):** StoreKit 2 `AppTransaction.originalPurchaseDate`, already in every existing user's receipt, Apple-signed, no account, no backend, nothing to build now. Requires iOS 16 (HR's target is 15.1 — gate at runtime when built).

**Download curve — the Facebook finding:** 37 downloads in the first eight weeks. Then **Jul 21 = 47 in a single day** from one HYROX Tampa FB group post, then 8 / 3 / 5. **63 of 100 downloads came in the final four days.** This is the community-group outreach pattern producing its first hard number, and it applies forward to WN.

⚠️ **The promotion copy has NOT changed.** The free-for-life promise lives in Facebook posts, not the App Store description (verified — no such language in ASC). FB posts can't be edited, only superseded. If the cutoff should track the new-terms post instead of July 24, that's a later date.

---

## 🔐 PRIVACY — RESOLVED

**All three ASC privacy URLs resolve correctly.** The dead `.shop` URL was only ever in the app binary.

| App | Policy URL | Status |
|---|---|---|
| HR | `profpeptide.com/hybrid-rockstar/privacy` | ✅ live since May 19 |
| PP | `www.profpeptide.com/privacy` | ✅ |
| SC | `profpeptide.com/strength-cycle/privacy` | ✅ live, **but SC's app had NO in-app link at all** |

- HR app repointed to the working URL (commit in v1.0.3).
- **SC fix is committed but PARKED** in `~/dev/strength-cycle` — ships with SC's next release, unscheduled.
- `hybridrockstar.app/privacy` and `.shop/privacy` are both 404 and now referenced by nothing.

⚠️ **OPEN — material gap:** HR's policy (dated May 19) **does not disclose the Ask Coach API**. `app/(tabs)/coach.tsx` posts to `hybrid-rockstar-api.vercel.app/api/coach-rob` with the user's division, gender, cycle progress, goal, and pace. **That is the one path where data leaves the device** and it's the single most important thing a privacy policy should describe. The policy also predates v1.0.3 entirely. Mark declined a redline for now — logged as open.

---

## 📋 BACKLOG

### Next release (v1.0.4)
1. **Session timer** — start / pause / resume / end, Apple Workout-app style. Writes ACTUAL duration to Health and to HR's log. **Plain stopwatch, not `HKWorkoutSession`** (that's iOS 26+, and the sensor benefit targets Apple Watch users, who aren't HR's audience — Garmin is bigger in HYROX).
2. Whatever comes back from Haylee/Kayleigh beta feedback.

### Awaiting Mark
3. Submit 1.0.3 for App Store review (version record staged: build 16, subtitle "Hyrox Training Program", What's New saved, description unchanged)
4. Send the TestFlight link once Beta Review clears
5. Promotion copy → "free to download" (Facebook, not ASC)

### Later
6. Wave 3F achievements/badges · 7. Race-day tools · 8. Subscription ($9.99/mo direction, on hold) · 9. Cycle 2 program (publicly promised, months out) · 10. New-arch migration → HealthKit 14.x · 11. Accounts/cross-device sync · 12. Delete the five untracked PNGs that ride into every EAS archive

### Closed
Push notifications (toggle exists) · Kayleigh's three items (build 12) · Coach upgrades (fine as-is) · Privacy URL audit · First-100 cutoff

---

## ⚠️ HR_PROGRAM_EXPORT.md — KNOWN FRAGILITY

The file every Instagram carousel and reel is built from is **an ad-hoc LLM transcription sitting on the Desktop**, not in the repo, with **no generator and no sync mechanism**. It currently matches weeks 1–2 only because `hr-cycle-1.json` hasn't changed since May 18.

**A real generator is trivial** (`tsx` is already a devDep). Worth doing before the next social batch rather than after a silent divergence.

---

## Carried forward from v11
EAS versioning mechanics (`appVersionSource: remote`, `autoIncrement` **production-profile only**; marketing version edited in app.json and **committed before** the build) · v1.0.1 accuracy fixes · OG social card + X `?v=2` cache lesson · social-promotion strategy · locked design (green=week / blue=session) · CINC pause discipline · **Mark drives the simulator; CC never captures sim screenshots**

---

## 📅 Changelog

**July 25, 2026 (v12 → v13):**
- 🚢 **v1.0.3 shipped** — 15 commits, build 16, in Beta App Review. Full contents recorded.
- 📖 **HYROX rulebook corrections** — Open athletes were seeing Pro wall-ball weights; women's reps were the pre-Sept-2024 standard; heights were ft-conversions. Doubles Pro exists and uses Pro weights (correcting Claude's instruction, which was sourced from a drifted file).
- 🔒 **EAS + CC rule refined** — non-interactive works until signing material changes.
- 🔒 **HealthKit needs both usage descriptions**, even write-only.
- ⚠️ **PP and HR are on different RN architectures** — precedent doesn't transfer; new-arch migration logged as debt.
- ✅ **First-100 cutoff CONFIRMED: July 24, 2026**, verified twice.
- 📈 **Jul 21 = 47 downloads** from one FB group post; 63 of 100 in four days.
- 🔐 **Privacy resolved** — all three ASC URLs fine; app repointed; SC fix parked. **Ask Coach API disclosure gap logged as open.**
- ➕ v1.0.4 scoped: session timer (plain stopwatch, not HKWorkoutSession).

**June 17 (v11):** v1.0.1 accuracy release; EAS mechanics corrected; ASC prep parked.

---

## 🔗 Cross-References
**SCS_MP v6.18** · **HR_SOCIAL v12** · **PP_PRICES v1** · SC_MASTER (privacy commit parked there)

---

*v1.0.2 live, v1.0.3 in Beta App Review. Free, 100 downloads, grandfathering cutoff locked at July 24. Next: session timer.*
