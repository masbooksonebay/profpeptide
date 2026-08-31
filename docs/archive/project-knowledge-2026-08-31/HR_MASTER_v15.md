# HR_MASTER — Hybrid Rockstar

**Version:** v15 (August 4, 2026) — **v1.0.3 SUBMITTED TO APP STORE REVIEW.** Records the privacy-documentation audit that preceded it. Supersedes v14.

---

## 🔴 CURRENT STATE

**v1.0.3 build 16 — SUBMITTED for App Store review, August 4, 2026.**

Live on the App Store before this: **v1.0.2** (since June 22). v1.0.3's version record had been staged since July 25 and never submitted.

**What v1.0.3 delivers to the public** (three versions' worth of fixes the store never had):
- Corrected HYROX station weights verified against the official rulebook — Open athletes were being shown Pro wall-ball weights, a correctness bug in the training content
- Race results and station split logging
- Working-weight tracking week to week
- kg/lb toggle
- Optional Apple Health integration
- Session-complete share card

---

## 🔒 THE PRIVACY DOCUMENTATION AUDIT — what it caught

**Asked to "prepare HR for App Store review," the audit found four documents claiming the app was offline and collected nothing. All four were wrong.**

| Document | Claimed | Reality |
|---|---|---|
| Privacy policy (May 19) | "never transmitted to our servers, third-party servers, or any external service" | Ask Coach POSTs to an API |
| Privacy policy | "does not currently integrate with Apple Health" | Binary ships `com.apple.developer.healthkit: true` |
| App Privacy label | "Data Not Collected" | Data is transmitted |
| App Review notes | "runs entirely offline… No data collection, no third-party SDKs, no tracking" | Both features contradict it |
| "What's New" | Advertised "Optional Apple Health integration" | Which the policy denied existed |

**Had this been submitted as-is**, a reviewer would have opened notes claiming the app runs entirely offline, found the Ask Coach network call, and rejected under **Guideline 5.1.1** — a rejection cycle plus a credibility mark on the developer account.

> **None of the four was wrong on purpose.** All were written when the app genuinely was offline. Ask Coach and HealthKit arrived after. A true statement that stopped being true, with nothing watching.

---

## 🔒 WHAT THE APP ACTUALLY DOES — verified from source

**Exhaustive sweep found exactly ONE `fetch` call in the entire repo.**

**Ask Coach** — `POST https://hybrid-rockstar-api.vercel.app/api/coach-rob`, a Vercel Edge function proxying to Anthropic's Claude API (`claude-sonnet-4-6`).

Sends: the full conversation transcript, plus a system prompt built from app state — division (format/tier/**gender**), unit preference, cycle version, current week/block, sessions-completed counts, race date, planned cycle start, goal setting, 1km pace. Plus the IP address inherent to any HTTP request, used for rate limiting.

No name, email, account, or device identifier — the app collects none. **Server code stores nothing** — no database, no KV, zero logging statements; only an in-memory per-IP rate counter. Chat history on-device is `useState` only, gone on unmount.

**Two retention points outside our code, attributed not promised:** Vercel keeps standard request logs; Anthropic processes the transcript under its own policies.

**HealthKit** — write-only, opt-in, off by default. Writes `HKWorkout` samples (activity type + duration from tier estimate). **Reads nothing** — `requestAuthorization([], [HKWorkoutTypeIdentifier])`, empty read array.

**Everything else:** no analytics, no crash reporting, no remote config, no OTA, no telemetry, no push token registration (`getExpoPushTokenAsync` appears zero times). Notifications are local-only. All user data in on-device AsyncStorage.

---

## 🔒 SUBMISSION ARTIFACTS — as filed

**Privacy policy** — rewritten, live at `profpeptide.com/hybrid-rockstar/privacy`, "Last updated: August 3, 2026". Names every transmitted field explicitly rather than saying "some training data." Attributes Vercel and Anthropic behavior with links rather than promising it.

**App Privacy label** — published complete:

| Item | Category | Setting |
|---|---|---|
| Other User Content | User Content | Not Linked to You · App Functionality |
| Fitness | Health & Fitness | Not Linked to You · App Functionality |

Not used for tracking. **Health deliberately NOT declared** — that item covers reading HealthKit; HR is write-only into the user's own device store.

> ⚠️ **ASC published the declaration in an incomplete state** — it went live naming "Other User Content" while that type had no usage answers behind it. Apple's UI permits a partial publish. **Check the summary screen for warning icons before and after publishing.**

**App Review notes** — replaced. Discloses both optional features, and gives the exact path: *"Coach Rob tab (bottom bar, middle) → CHAT sub-tab → send a message. No account, cycle, or completed session required — it works on a fresh install. The RULES sub-tab is offline reference content; only CHAT makes a network request."*

**Promotional Text** — was empty, now 163/170: *"The full 12-week HYROX training program, free. Every session, all 8 stations, race-day split targets, and weight tracking that shows your lifts climb week to week."*

No expiry-dated claims — promotional text persists until changed, so "for a limited time" quietly becomes false.

---

## 🔒 LOCKED — Ask Coach navigation

**Bottom tab bar, third of five: Train · Race · Coach Rob · Activity · Settings.** Chat-bubble icon, labeled **"Coach Rob"**. Opens on the CHAT sub-tab by default. **No gating** — no cycle, session, paywall, or account required. Only CHAT hits the network; RULES is offline reference.

---

## Social / content state

**YouTube Shorts:** W1D1–W6D2 posted.
**Reels:** scene durations computed from content since `3216435`; frame 0 is a composed cover card since `bf10f43`. Reels are SILENT — add audio at upload.
**W6D3** prompts drafted (Strength B). **W6D4** prompts drafted Aug 4 — Tempo Run, 5 slides, no FORM slide, no block-letter prefixes (run day).

**Program note:** Week 7 drops Tempo entirely, so W6D4 is the last tempo session in the 12 weeks — a usable caption angle.

---

## Changelog

**v15 (Aug 4, 2026):** v1.0.3 submitted · privacy documentation audit and its four findings · verified data-flow inventory from source · all four submission artifacts recorded as filed · Ask Coach navigation locked · ASC partial-publish warning · W6D4 drafted.
