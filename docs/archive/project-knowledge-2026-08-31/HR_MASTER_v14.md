# Hybrid Rockstar — Master Ref Doc

**Status:** ACTIVE — single doc structure
**Version:** v14 (July 27, 2026) — **SUPERSEDES v13.** Corrects the **monetization model** (v13 recorded a full-app paywall; the live CTA copy and Mark's clarification are freemium), records the **CTA copy change** now live on GitHub, the **share-card findings** (built, shipped, effectively invisible), and **v1.0.4 scope**.
**Prior:** v13 (July 25) · v12 (superseded, never used)
**Cross-referenced in:** SCS_MP · HR_SOCIAL v12

---

## 📍 STATUS (July 27, 2026)

| Item | State |
|---|---|
| **Live on App Store** | v1.0.2 (build 12) |
| **v1.0.3 (build 16)** | Submitted for Beta App Review July 25. TestFlight "ready to test" email received July 27 — **verify in ASC whether the external group shows "Testing" before treating the public link as serving 1.0.3** |
| App Store submission for 1.0.3 | Version record staged, **not submitted** — Mark's call |
| Downloads | 100 first-time (cutoff locked at July 24) |
| Monetization | **Free. No paid tier exists.** Subscription planned, not built |
| App repo | `~/dev/hybrid-rockstar` @ `aa1760a` |
| Site repo | `~/dev/hybrid-rockstar-site` @ `23a5043` |
| TestFlight public link | `https://testflight.apple.com/join/7TfPPkMw` (10 testers) |

---

## 🔒 MONETIZATION — CORRECTED (v13 was wrong)

**v13 recorded:** free download → 30-day free period → **$9.99/month full-app paywall**, flagged as a deliberate divergence from SC's Option C.

**The actual model is FREEMIUM — which is Option C:**
- **The app stays free to download, permanently.**
- **Pro features become paid** when a subscription eventually ships.
- **The 30-day trial phase has NOT started** and is not live in any form.
- No paid tier exists today. Everything is unlocked for everyone.

**So HR does NOT diverge from the studio-wide Option C rule.** The SCS_MP v6.18 note recording HR as an exception is wrong and should be corrected there too.

**$9.99/month** remains the recorded price direction for the eventual pro tier — it is not a whole-app price.

### Live promotional copy (changed July 27)

The first-100 promotion is **retired from all templates**. Commit `23a5043` on `hybrid-rockstar-site`, pushed — Claude Design reads these from GitHub main, so it's in effect for all future social builds.

| Surface | Was | Now |
|---|---|---|
| Carousel CTA (slide 6) | `First 100 to download get everything free — for life.` | **`Free to download. Everything unlocked — for a limited time.`** |
| Reel CTA (Scene 4) | same string | **`Free to download. Everything unlocked — for now.`** (shorter — ~3s screen time) |

Wordmark verified byte-identical before and after, so CD's quote-back check still works. Two lines changed across two files; nothing else touched.

⚠️ **The historical exports in `social/exports/*.png` have the old promotion rasterized into the pixels.** Inert as past posts, but do not recycle them.

**Grandfathering note:** the first-100 cutoff remains **July 24, 2026** as recorded in v13. The copy change happened July 27, so if the cutoff should track the promise's retirement instead, that's July 27 — Mark's call, still open.

---

## 📤 SHARE CARD — SHIPPED BUT NOT PROMOTED

Built in v1.0.3 and technically working, but **withheld from the tester announcements** after review. Two separate problems.

### 1. It's effectively invisible (discoverability)

The entry point is a "Share this session" row at the bottom of the session detail screen, visible only when `completed === true`. But on marking complete, the flow runs `router.replace("/train")` **immediately** — so the share row renders on a screen the user has just been bounced off. Nothing prompts them to navigate back in.

**The feature's designed moment — "I just finished, let me post it" — is exactly when the app navigates away from the only screen showing the button.**

Path to reach it today: Train tab → open the week → tap a completed session → scroll to bottom.

### 2. The card itself needs work

From a real render (W1D1 Strength A):
- **Title truncates**: uses the full session name including the parenthetical, wrapping to three lines and cutting mid-word — "STRENGTH A (LOWER-BODY ANCH…". Should use the short name; the carousel templates already solve this.
- **Only one movement appears** (A1 Back Squat) rather than the full logged set.
- **Layout is unbalanced** — large empty middle, content crowded top and bottom.

### 3. iOS/Instagram constraint (not a defect)

Share hands the PNG to the **native iOS share sheet**. It doesn't post anywhere directly. Tapping Instagram usually opens Stories, not a feed post — most people must save the image and upload separately. Every app hits this; worth knowing since the feature's premise is Instagram and Facebook group sharing.

> **Worth remembering:** the share card was Claude's suggestion, not a user request. Haylee's three asks all shipped because she named specific things. Both tester messages now ask what people would actually want on a share image before more is invested.

---

## 🐛 KNOWN — INTER 800 IS SYNTHESIZED

The site's global CSS imports Inter weights **≤700** from Google Fonts, but the wordmark specifies **800**. So the live header renders a browser-synthesized bold, not real Inter ExtraBold. Affects glyph widths, and matters for any lockup work measured against the real font file.

---

## 📋 v1.0.4 SCOPE

1. **Session timer** — start / pause / resume / end, Apple Workout-app style. Writes ACTUAL duration to Health and HR's own log, replacing the prescribed estimate. **Plain stopwatch, not `HKWorkoutSession`** (iOS 26+, and its sensor benefit targets Apple Watch users — Garmin is bigger in HYROX).
2. **Share entry point** — recommended fix: open the share sheet as part of the completion flow, skippable, same as the weights sheet. Puts it at the designed moment. (Alternatives considered: don't auto-navigate on completion; add an affordance on the Train tab row.)
3. **Share card fixes** — short session name, all logged movements, rebalanced layout.
4. Beta feedback from Haylee, Kayleigh, and Nagesh.

---

## 👥 TESTERS

| Person | Source | Status |
|---|---|---|
| **Haylee Rolnick** | HYROX Tampa FB group | All 3 requests shipped in v1.0.3. Messaged with the link + asked what she'd want on a share card |
| **Kayleigh** | earlier beta | Her 3 items shipped in build 12. Messaged with the link |
| **Nagesh Hagalvad** | HYROX Tampa FB group, msg July 27 | New. Asked for a **miles option** — partly delivered (see below). Starting training in ~2 weeks, offered feedback then |

**On Nagesh's miles request — the honest answer, as sent:** the units toggle switches **weights to lb** and **user-entered distances to miles**. **HYROX race distances stay in meters/km deliberately** — the sport defines the course as 8×1km with 50m sleds and athletes split by kilometer, so converting would misstate the race. Imperial for what you enter; metric for the course spec.

---

## Carried forward from v13 (unchanged)

- **HYROX rulebook corrections** — Open athletes were seeing Pro wall-ball weights; women's reps were the pre-Sept-2024 standard (75, should be 100); heights were ft-conversions (should be 3.00m/2.70m by gender); Doubles Pro exists and uses Pro weights.
- **EAS + CC rule** — non-interactive works until signing material changes; adding a capability invalidates the provisioning profile and needs a plain terminal with 2FA.
- **HealthKit needs BOTH usage descriptions**, even write-only (ITMS-90683).
- **PP and HR are on different RN architectures** — PP `newArchEnabled: true`, HR `false`. New-arch migration is logged tech debt.
- **What HR writes to Health** — workout type + PRESCRIBED duration only. No distance, calories, or heart rate.
- **First-100 grandfathering** — receipt-based via `AppTransaction.originalPurchaseDate`, no accounts, nothing to build now. Cutoff July 24, 2026.
- **Ask Coach privacy gap** — the policy doesn't disclose the coach API, the one path where data leaves the device. Still open.
- **`HR_PROGRAM_EXPORT.md` is an ad-hoc transcription** with no generator and no sync mechanism. Source for every carousel and reel.
- EAS versioning mechanics · CINC pause discipline · Mark drives the simulator.

---

## 📅 Changelog

**July 27, 2026 (v13 → v14):**
- 🔒 **Monetization CORRECTED** — freemium, not a full-app paywall. HR does **not** diverge from Option C; the SCS_MP exception note is wrong. 30-day trial not started.
- ➕ **CTA copy live** — first-100 promotion retired from both templates, pushed at `23a5043`.
- 📤 **Share card findings** — invisible by navigation, title truncates, one movement only, unbalanced layout. Withheld from tester announcements.
- 🐛 **Inter 800 synthesized** — site loads ≤700.
- ➕ **v1.0.4 scoped** — timer, share entry point, share card fixes.
- 👥 **Nagesh added** as a third tester; miles request answered with the metric-course caveat.

**July 25 (v13):** v1.0.3 shipped, 15 commits, build 16, rulebook corrections, EAS/HealthKit learnings, first-100 cutoff confirmed.

---

## 🔗 Cross-References
**SCS_MP v6.19** · **HR_SOCIAL v12** · **PP_PRICES v2** · SC_MASTER (privacy commit parked)

---

*Free, freemium-bound, 100 downloads. v1.0.3 in TestFlight. Share card built but parked. Next: session timer.*
