# Hybrid Rockstar — Master Ref Doc

**Status:** ACTIVE — single doc structure
**Version:** v12 (July 25, 2026) — closes a **five-week logging gap** (v1.0.2 / build 12 shipped June 21 and was never recorded); captures **Haylee Rolnick's feedback + public commitments**; records the **monetization decisions** (subscription ON HOLD, $9.99/mo direction, competitive research); locks **receipt-based first-100 grandfathering (no accounts)**; records the **subtitle change** and the trademark posture behind it; rewrites the backlog with holds.
**Prior version:** v11 (June 17, 2026) — v1.0.1 accuracy release (build 11), EAS marketing-version mechanics correction, ASC prep parked, external-TestFlight setup, Kayleigh's beta triage.
**Cross-referenced in:** SCS_MP · HR_SOCIAL v12

---

## ⚠️ v11 WAS TWO VERSIONS STALE — corrected here

v11 recorded "v1.0.0 LIVE; v1.0.1 (build 11) prepped in ASC, parked for submit." That state is **five weeks out of date**. SCS_MP's portfolio snapshot carries the same stale line and needs the same correction.

**Actual state (confirmed from App Store Connect, July 25):**

| Version | Build | Submitted | Status |
|---|---|---|---|
| 1.0 | — | May 19 | Review completed |
| 1.0.1 | 11 | Jun 17 | Review completed |
| **1.0.2** | **12** | **Jun 21** | **Review completed — Ready for Distribution (LIVE)** |

**v1.0.2 (build 12) addressed Kayleigh's beta feedback.** All three of her items are considered closed, including the wk1-2 strength-block question that v11 held as an open Mark decision.

⚠️ **Downstream check owed:** if build 12 changed the week 1–2 strength sessions, **`HR_PROGRAM_EXPORT.md` in project knowledge may no longer match the shipped app.** That file is the source for every Instagram carousel and reel. W5D2 (Easy Run) is unaffected; any future W1/W2 post would publish stale content. **Verify against the app's cycle JSON before the next early-week social post.**

**Doc-hygiene lesson:** five weeks of app work went unlogged while sessions ran PP-heavy. When a workstream goes quiet, its ref doc silently rots — and the staleness isn't visible until someone acts on it.

---

## 👤 Haylee Rolnick — beta feedback (HYROX Tampa FB group, ~July 21)

Second external tester after Kayleigh. Downloaded from the FB group post. **Mark agreed publicly to all of her requests** — these are commitments, not backlog candidates.

**Her three asks, verbatim in substance:**
1. **Baseline entry** — "is there a place to put my past station times or finish time? Instead of just goals."
2. **kg/lbs toggle** — "an option to change between kg and lbs."
3. **Working-weight tracking** — "a place to maybe mark our current weights we are lifting so we know if we are increasing properly. Or where it recommends the next RPE day."

**Mark's public reply also committed to:**
- **"The next 12-week program in the works"** → Cycle 2 is now publicly promised.
- **A TestFlight spot for Haylee** → but see the revised gating below.

**Open design note (from #1):** her phrasing "instead of just goals" implies a goals feature already exists. If so, baseline entry may be an extension of existing UI rather than net-new. **Unverified — settle at recon.**

---

## 💰 MONETIZATION — decisions of July 25

### Subscription: ON HOLD (indefinite)

Direction agreed, implementation deferred until the user base is materially larger. **The app stays free for everyone in the meantime.**

- **Model when it ships:** free to download, 30-day free period, then paid. This is a **full-app paywall**, not SC's Option C.
- **Price direction:** **$9.99/month.** Not previously recorded anywhere for HR — SC's docs say $7.99/$59.99, WN's list $9.99 as an open question. $9.99 is now HR's recorded direction.
- **Annual tier:** recommended but not decided (~$79.99/yr as a starting point). Every comparable app has one.

### ⚠️ Divergence from a studio-wide locked rule

SC_MASTER_FROZEN locks **Option C** studio-wide: *"Never paywall a program or methodology — all programs stay in the free tier permanently,"* with paid unlocking only unlimited AI. WN inherits it.

**HR is deliberately diverging.** HR is a finite 12-week program, not an open-ended logging platform, so gating the program *is* the product. **This divergence is HR-specific — it does not change SC or WN.** SCS_MP should record the exception so the studio-level rule doesn't read as universal.

### Competitive pricing research (July 25)

| Product | Price | Category |
|---|---|---|
| **ROXFIT** | **Free** (paid "Ultra" tier on waitlist, price unannounced) | Closest direct competitor — HYROX tracking/AI/race intelligence |
| **RMR Training App** | **$49.95/mo** | HYROX + hybrid program library, expert-led, community |
| Structured HYROX programming (general) | $50–$150/mo | — |
| HYROX coaching | $150–$300/mo | — |
| Coached race-prep cycles | $300–$800/athlete | — |
| ZOAR self-directed PDF program | $67.95–$99.95 one-time | — |
| TrainingPeaks premium | ~$20/mo | General endurance |
| Strong / Hevy / Boostcamp | ~$5–7/mo | General logging |

**Read:** HR is structured programming delivered as an app — it sits between the two categories. The honest comparison is RMR at $49.95 and PDF programs at $68–100, not Strong at $4.99. **$9.99 is defensible and arguably conservative.** Price pressure comes from below (ROXFIT free), not above — but ROXFIT is a different product (tracking + race intelligence, not a coached progression).

### Promotion copy change

- **Current (live):** first 100 downloads get everything free for life.
- **New:** **"Free to download."**
- Mark's position: converting free→subscription later is understood to annoy some users, but it's the right path — and the app remains free for everyone for the foreseeable future.

---

## 🔒 FIRST-100 GRANDFATHERING — receipt-based, NO ACCOUNTS (LOCKED)

**Decision: no account system.** Grandfathering runs off the App Store receipt.

**Mechanism:** StoreKit 2's `AppTransaction` exposes **`originalPurchaseDate`** — the date a user *first* downloaded the app. For a free app that's the download date. It is Apple-signed, **already present in every existing user's receipt**, requires no backend, no account, and no user action.

**Why nothing needs to be built now:** Apple captured this at download time for all existing users. The data is not at risk. Whenever a paywall eventually ships, the field still identifies everyone who arrived before it.

### ✅ THE ONE ACTION ITEM (do while the number is exactly right)

**Read cumulative downloads-by-day in ASC Analytics and record the date the 100th download landed.** Downloads stand at ~100 as of July 25, so that date is effectively now. Reconstructing it in three months is harder and makes the promise fuzzy. **Read-only ASC lookup — Mark or CINC. No code.**

**Record it here when captured:** `FIRST_100_CUTOFF_DATE = ____________` ⏳ PENDING

### Known limitations
- **Intra-day imprecision:** if downloads 97–104 land on the same day, a date cutoff can't split them. **Set the cutoff to end-of-day — over-including slightly is the right direction to err on a goodwill promise.**
- **Version-only fallback rejected:** `originalApplicationVersion` (the field first considered) identifies only *which version* a user first downloaded, so it can't distinguish download #1 from #1,000 within one version. `originalPurchaseDate` is the correct field.
- **TestFlight/sandbox return different values** — the check needs a debug path or internal testers get locked out.
- **Requires iOS 16+** for `AppTransaction`. Confirm the API surface at recon rather than from this doc.

**Accounts:** not needed for grandfathering. Still potentially worth building someday for cross-device sync — unrelated justification.

---

## 🏷️ SUBTITLE CHANGE — "Hyrox Training Program"

**Next submission changes the App Store subtitle to "Hyrox Training Program"** (from "Hyrox-style training").

**Trademark posture — Mark's call, recorded with reasoning.** Claude flagged that dropping "-style" removes the comparative hedge that does the nominative-fair-use work, that HYROX licenses official Training Club affiliation at $130/mo (so an official program exists to be confused with), and that monetizing would weaken a fair-use posture.

**Mark's position, based on months of his own research and his judgment as an attorney:** HYROX is demonstrably fine with apps, sites, and programs promoting HYROX training — it's free advertising and grows the sport. A cease-and-desist is unlikely, and the description could be changed immediately if one ever arrived.

**Settled. Do not re-raise.** The earlier blanket rule — *"Never use 'Hyrox' in app branding"* (HR_MASTER v2) — is superseded by the nominative-use posture above for App Store metadata and marketing copy.

---

## 📋 BACKLOG (rewritten July 25)

### ✅ ACTIVE — the only live item
1. **Record the first-100 cutoff date from ASC Analytics.** Read-only. No code. See above.

### ⏸️ ON HOLD — app updates paused
App updates were being driven by the subscription work. With subscription deferred, **the whole update cycle is paused.** These stay ready to resume:

**Committed to users (Haylee)**
2. Baseline station/finish times
3. kg/lbs toggle
4. Working-weight tracking

**Next submission (metadata, no build)**
5. Subtitle → "Hyrox Training Program"
6. Promotion copy → "free to download"

**Technical**
7. Feedback email `.shop` → `.app` + Cloudflare Email Routing
8. Apple Health integration (PP's pattern — Mark judged it easy there)
9. **Sled/division weights → single source of truth** (v11 tech debt: values live in 5 files, had drifted 3 ways; **prerequisite for #3**)
10. Wave 3F achievements/badges
11. Race-day tools (countdown, splits)

### ⏸️ ON HOLD — longer horizon
12. **Subscription implementation** (see above)
13. **Cycle 2 — next 12-week program** (publicly promised, months out)
14. **External TestFlight** — **explicitly re-gated:** not until Cycle 2 programming is ready. Haylee and others test **new programming**, not UX. Supersedes v11's "pending run."
15. Coach upgrades — Mark's assessment: fine as-is, no updates necessary
16. Accounts / cross-device sync

### ✅ CLOSED
- Push-notification expansion — the daily training reminder toggle already exists in Settings.
- Kayleigh's three items — shipped in build 12.
- v1.0.1 / build 11 — superseded by v1.0.2 / build 12.

---

## 🗺️ EXECUTION PLAN (for when updates resume)

Agreed sequencing, held ready:

- **Ship as one release (v1.0.3), not a trickle.** Apple round-trips are expensive; ship complete rather than cutting features to submit sooner.
- **Stage 0 — recon (read-only).** Highest value, cheapest step. Establish: what build 12 actually changed; whether a goals feature exists (affects #2's scope); whether anything is unit-aware today; the persistence layer for user-entered data; **and whether `HR_PROGRAM_EXPORT.md` still matches the shipped app.**
- **Stage 1 — weights consolidation** (#9). Pure refactor, verifiable by asserting identical values out. Must precede the unit toggle.
- **Stage 2 — kg/lbs toggle** (#3).
- **Stage 3 — baseline times + working-weight tracking** (#2, #4) built together — both are "user enters numbers, app shows progression," almost certainly sharing a persistence layer.
- **Stage 4 — Apple Health + email swap** (#8, #7). Health last among code changes: HealthKit adds review surface, so it can be dropped without blocking the release.
- **Stage 5 — ASC metadata via CINC** (#5, #6). No build required.
- **Deferred out of v1.0.3:** achievements, race-day tools — nobody is asking, and they'd delay what users are waiting on.
- **Parallelism:** HR and PP run as **separate Claude Code sessions with isolated worktrees**, one per repo. HR prompts go to a `~/dev/hybrid-rockstar` session, never the profpeptide one.

---

## Carried forward UNCHANGED from v11
- **EAS versioning mechanics (LOCKED)** — `appVersionSource: "remote"` + `autoIncrement: true` governs **buildNumber only**; the marketing `version` in `app.json` is edited and **committed before** the build; `eas build:version:set` is build-number-only and interactive; run `eas build`/`eas submit` outside a CC session; `eas whoami` as a connectivity probe. Supersedes SC_MASTER_FROZEN and older SCS_MP.
- **v1.0.1 accuracy fixes** — sled Pro M 225→202, Pro W 132→152 (verified table: Open M 152 / Open W 102 / Pro M 202 / Pro W 152); burpee broad jump cue de-overstated. Commits `46eca7e`..`72b3b53`.
- **OG social card** + X cache lesson (`?v=2` forces a fresh scrape).
- **Social-promotion strategy** — IG Reels + FB HYROX groups are the real target; X is the content engine. 6 FB HYROX groups joined.
- **Locked design** — green = week / blue = session; `leadingEdgeWeek`; three-card treatment.
- **CINC discipline** — prepares everything, **always pauses before Submit**, never clicks Release This Version.
- **Sim discipline** — Mark drives the simulator; CC never captures sim screenshots.

---

## 📍 Status Snapshot (July 25, 2026)

| Component | State |
|---|---|
| App version | **v1.0.2 (build 12) LIVE** — Ready for Distribution since Jun 21 |
| Downloads | **~100** (the number driving the first-100 cutoff capture) |
| ASC ID | 6762101905 · `https://apps.apple.com/app/id6762101905` |
| App repo | `~/dev/hybrid-rockstar` (Expo) |
| Backend | `~/dev/hybrid-rockstar-api` (Next.js/Vercel, shared with SC) |
| Marketing site | `~/dev/hybrid-rockstar-site` — `vercel --prod` (no git remote), aliased to hybridrockstar.app |
| External testing | Only "Team (Expo)" — public link never set up; **intentionally deferred** |
| Monetization | **Free. No IAP. Subscription on hold.** |
| X account | @hybrid_rockstar — verified |

---

## 📅 Changelog

**July 25, 2026 (v11 → v12):**
- 🔧 **Corrected a five-week state gap** — v1.0.2 (build 12) shipped Jun 21 and was never logged; v11 and SCS_MP both still read "v1.0.0 live, build 11 parked."
- ➕ **Haylee Rolnick's beta feedback captured** — 3 asks, all publicly committed; Cycle 2 publicly promised.
- 🔒 **Monetization decisions:** subscription **ON HOLD**; $9.99/mo direction recorded (first time for HR); full-app-paywall model noted as a **deliberate divergence from the studio-wide Option C rule**; competitive pricing research logged.
- 🔒 **First-100 grandfathering: receipt-based via `originalPurchaseDate`, no accounts.** Corrects the initially-proposed `originalApplicationVersion`, which can't distinguish downloads within a version. **One action item: record the cutoff date from ASC.**
- 🏷️ **Subtitle → "Hyrox Training Program"**; trademark posture recorded as Mark's settled call; supersedes the old blanket "never use Hyrox in branding" rule for metadata/marketing.
- ⏸️ **App updates paused** — they were subscription-driven; execution plan preserved for resumption.
- ⏸️ **External TestFlight re-gated** to Cycle 2 programming readiness (testers test programming, not UX).
- ✅ **Closed:** push notifications (toggle exists), Kayleigh's items (build 12), coach upgrades (fine as-is).
- ⚠️ **Flagged:** `HR_PROGRAM_EXPORT.md` may be stale vs the shipped app — verify before the next W1/W2 social post.

**June 17 (v10 → v11):** v1.0.1 accuracy release; EAS mechanics corrected; ASC prep parked; external-TestFlight setup; Kayleigh triage.
**June 7 (v9 → v10):** X verified; OG card + `?v=2`; social strategy; launch post; marketing-site repo.

---

## 🔗 Cross-References
- **SCS_MP** — parent. **Needs updating:** portfolio snapshot still says build 11 parked; the studio-wide first-100 / Option C rules need HR's divergence noted.
- **HR_SOCIAL v12** — carousel + reel prompts (GitHub-template-direct); consumes `HR_PROGRAM_EXPORT.md`.
- **SC_MASTER_FROZEN** — Option C + first-100 patterns HR is diverging from; its EAS note is superseded here.

---

*HR v1.0.2 live, free, ~100 downloads. Subscription on hold; app updates paused with the plan preserved. Grandfathering runs off Apple's receipt — no accounts, nothing to build, one date to record.*
