# HR Instagram — Promotion Plan — v1

**Status:** ACTIVE REFERENCE — the Hybrid Rockstar Instagram promotion plan (extracted from HR_MASTER + past-chat decisions into its own doc so it has room for the template spec, caption format, research findings, and a post log).
**Version:** v1 (July 1, 2026) — first standalone version. Consolidates the locked strategy (SCS 15/18/19), **corrects the brand font** (was Roboto Mono in the old plan → verified **Barlow Condensed Bold** from the shipped app code), and lists the open blockers.
**App:** Hybrid Rockstar (HYROX-style training). App repo `~/dev/hybrid-rockstar`; marketing site `~/dev/hybrid-rockstar-site` (hybridrockstar.app). HR is on the App Store.

---

## 🔒 Locked strategy (from SCS 15 / 18 / 19)

**Format (the core idea):** **workout-as-image + caption-as-coaching.**
- **Image** = the day's workout, on a branded template. Saveable/shareable — *saves* are one of the signals IG's algorithm weights most, so the image earns reach.
- **Caption** = the coaching depth (the *why*, pacing, scaling up/down, common mistakes) + a soft CTA. The caption earns the credibility that drives installs.

**Cadence:** **feature posts 1–2×/week (weekends)** about in-app features; **workout posts during the week.**

**Launch campaign:** post daily workouts **drawn from the 12-week program**, time-boxed **~2–4 weeks**. Safe to give away because (a) the app is **FREE** — no purchase to cannibalize; goal is **installs / active use** — and (b) the sticky features (**workout tracking + coach feedback**) require the app and stay **gated**. Post as **"drawn from the program" samples, NOT a strict numbered serial** (so mid-stream landers aren't confused). **Pin an explainer post.** End-of-campaign = the conversion CTA.

**Channel priority:** **X = low-stakes ball-roller + content engine** (build a habit + back catalog); **Instagram (Reels) + Facebook HYROX groups = the REAL target** (where the HYROX community lives). Most X content repurposes to IG/FB (main adaptation: IG/FB are far more visual — text workouts need a graphic).

**Platform constraints:**
- **IG has NO clickable caption links** — the single **bio link** (hybridrockstar.app or the App Store) carries all traffic. Every caption CTA points to bio.
- **FB HYROX groups** mostly restrict promo — **participate genuinely; don't drop cold app links** (ban risk). Link-in-first-comment fallback. (Self-promo generally OK in the 6 joined groups; vary + space posts.)

**Trademark:** **"HYROX" stays nominative/descriptive only** — never used as HR's own branding. (HR is a HYROX-*style* trainer; "Hybrid Rockstar" is a community backronym the founders never confirmed — do not assert otherwise.)

---

## 🎨 Brand system for IG assets (VERIFIED from shipped app code, July 1)

**This corrects the old plan, which said Roboto Mono.** A CC read-only survey of `~/dev/hybrid-rockstar` confirmed the app's actual shipped brand font:

- **Brand/display font: Barlow Condensed Bold (700)** — `@expo-google-fonts/barlow-condensed`, `BarlowCondensed_700Bold`. The **only** custom font in the app. (Roboto Mono and Saira were fully removed from deps — only a stale *comment* mentioning Roboto Mono survives in `welcome.tsx`, no runtime effect.)
- **Branding-only scope:** Barlow backs the **"HYBRID ROCKSTAR" wordmark** (34pt, `#FFED00`, letterSpacing 2, uppercase) and the **"HYROX TRAINING" subtitle** (14pt, white, uppercase) on the welcome screen. **Everything else is system font (San Francisco).**
- **Brand yellow: `#FFED00`** (confirmed; also `accent` + `userBubble` in `constants/theme.ts`).
- **Icon:** `assets/app-icon-hybrid-1024.png`. **Splash:** `assets/app-icon-mark.png`.

**→ IG template design rule (mirror the app's hierarchy):** **Barlow Condensed Bold for the HR wordmark + impact headlines** on the graphic; a **clean, legible font for the workout data/body** (so a dense workout stays readable). Do NOT set the whole graphic in condensed bold — that's the readability trap. Black/yellow (`#FFED00`) brand system throughout.

---

## 🧱 The workout-image template (PENDING — the key build blocker)

Not yet built. This is the one-time design cost that then enables fast daily production (same logic as the PP vendor-post template).

**Spec requirements (for the CC/Design build once research is done):**
- Branded template: HR wordmark (Barlow Condensed Bold), `#FFED00` on black (or black on yellow), consistent layout, phone-readable.
- A workout drops into a repeatable structure: workout name / what it trains · the movements + reps/distances/rounds · clean legible body font · HR brand mark · bio-link reminder.
- Sized for IG feed (1080×1350, 4:5) — and reusable for X.
- Pull the **real 12-week program structure** from the HR app/ref docs (don't invent workouts).
- **Production tool:** **Claude Design** — it produced the PP app App Store screenshots this cycle and did an excellent job; it's the natural tool to build the HR workout-image template and the feature-post cards (design → Mark approves → export). Same pipeline proven on PP: Claude Design builds → export → CC converts/wires if needed.

**Caption format (repeatable, converts):**
1. Name the workout / what it trains.
2. The coaching insight — pacing, scaling up/down, the mistake people make.
3. Soft CTA to the gated in-app features: "full 12-week progression with tracking + coach feedback in the app → link in bio."

---

## 🚧 Open items / blockers (next actions, in order)

1. **HYROX IG/FB research pass (PREREQUISITE — do before building the template).** Fresh research on the *current* landscape: top-performing HYROX content formats, the hashtag set actually working now (#hyrox #hybridtraining + current others), optimal cadence, and how the winning workout-graphic accounts structure posts. SCS 15 explicitly gated the template on this — don't build off assumptions about the platform where the audience lives. *(Claude's lane.)*
2. **Build the workout-image template** (Claude Design), pulling the real 12-week structure. Then Mark approves the look.
3. **Draft the launch post** — app explainer + the launch offer (see decision needed below).
4. **Repeatable daily caption format** finalized from the research.

**DECISION NEEDED (Mark) — the launch offer.** SCS 15 floated **"first 100 to download get full access to the app for life."** But HR is **free with gated tracking/coach features** — so "full access for life" needs a concrete meaning before it goes in a launch post: does it comp a (future) paid tier for the first 100, unlock the gated features permanently, or is the offer reframed? **Confirm what "full access" actually unlocks so the launch post is accurate, not carried-forward-stale.**

**UNVERIFIED:** whether the template or the IG/FB research were already done in a session not yet reviewed. Treated as OPEN here (safe default). If either is done, update this doc.

---

## 📓 Post log
*(none yet — populate as posts fire: date · type [workout/feature/launch] · workout or feature · caption gist · any offer)*

---

## 🔗 Cross-references
- **HR_MASTER v11** (HR app/site state, brand standards, HYROX nominative-use guide, community-group outreach)
- **PP_X_POSTS v30 (frozen format)** — the X-post discipline HR repurposes from; native-image posts out-reach link-only posts
- **SCS_MP v6.11** (social-card pipeline: Claude Design → export → CC; execution model)

---

## 📅 Changelog
**v1 (July 1, 2026):** First standalone version. Extracted the HR Instagram plan from HR_MASTER/past chats. **Font corrected** from Roboto Mono → **Barlow Condensed Bold (700)** verified from shipped app code (branding-only; body = system font; `#FFED00`). Locked strategy consolidated (workout-as-image + caption-as-coaching; weekend feature / midweek workout cadence; 2–4wk launch campaign; free-app-gated-features logic; IG no-link + FB-group constraints; HYROX nominative-only). Blockers listed (IG/FB research prereq → template build → launch post), with the launch-offer meaning flagged as a Mark decision. Claude Design named as the template/card production tool (proven on PP App Store screenshots).

---

*The HR Instagram plan. Workout-as-image + caption-as-coaching; weekend features / midweek workouts. Brand font = Barlow Condensed Bold (from the app), `#FFED00`, branding-only. Next: HYROX IG/FB research → build the workout-image template (Claude Design) → launch post. Launch-offer meaning needs Mark's confirmation.*
