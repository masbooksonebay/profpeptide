# HR Social — Promotion Plan (IG + FB + X) — v2

**Status:** ACTIVE REFERENCE — the Hybrid Rockstar social promotion plan across **Instagram + Facebook + X** (workout graphic posts to all three from one design source).
**Version:** v2 (July 1, 2026) — adds the **2026 platform-research findings** (carousels beat single images 3×; saves/DM-shares are the signals; slide-3 re-serve; Reels for discovery / carousels for conversion; fitness timing; live hashtag set), **locks the launch offer** (first 100 downloaders get everything free for life), and **expands scope to X + FB** (same workout card cross-posted). v1 consolidated the strategy from SCS 15/18/19 and corrected the brand font to Barlow Condensed Bold.
**App:** Hybrid Rockstar (HYROX-style training). App repo `~/dev/hybrid-rockstar`; marketing site `~/dev/hybrid-rockstar-site` (hybridrockstar.app). HR is on the App Store.

---

## 🎁 Launch offer (LOCKED)
**First 100 to download get EVERYTHING in the app — free, for life.** HR is otherwise free with sticky features gated (tracking + coach feedback); this comps full/permanent access for the first 100 as a founding-user hook (scarce, concrete, front-loads installs). Launch post + pinned explainer lead with this.
> ⚠️ **Build check before promising publicly (RULE #0):** confirm the app actually has a *mechanism* to grant lifetime full access to specific users (promo code / founding-user flag / IAP comp) before the offer goes in a live post to 100 strangers you must then honor. Copy is locked; deliverability is a build item to verify.

---

## 📊 2026 platform research (live pass, July 1 — drives the format)

**Carousels are the primary workout-post format — NOT single images.** In the 2026 algorithm, carousels average ~3× the reach of single images and ~2× the saves of Reels, with a **24–48h re-serve window** single images/Reels don't get; carousel engagement ~10% vs single-image 7% vs Reels 6%. → **The workout post is a CAROUSEL** (slide 1 = the saveable workout card; slides 2–4 = coaching breakdown; final slide = CTA + a question).

**Design for SAVES + DM-shares** (the strongest 2026 signals; likes are deprioritized). A screenshot-friendly workout card is a save magnet — HR's educational workout content naturally earns saves. Validates the original "saveable workout graphic" instinct.

**Slide 3 is the hidden metric.** Instagram gates the re-serve on how many viewers swipe to slide 3+. Front-load value; slides 1–2 must earn the swipe.

**Reels = discovery; carousels = conversion.** Reels reach *new* audiences (Explore/Reels feed); carousels engage *existing* followers + drive saves. For a 0-follower launch: **Reels to get found, carousels to convert.** Combo: a time-lapse workout Reel (each exercise named via text overlay, <60s) + the workout carousel.

**Timing (fitness-specific):** peaks **5–7 AM** (audiences planning workouts) and **5–7 PM** (pre-training); **Tue/Wed/Thu** best days. But consistency beats perfect timing — show up daily. Test HR's own Insights once data exists.

**Live hashtag set:** core HYROX cluster — #hyrox #hyroxtraining #hyroxworld #hyroxfamily #hyroxcommunity #functionalfitness #hybridtraining #hybridathlete #hyroxdaily — layered with broad fitness tags (#fitness #workout #gym #fitfam). Mix high-volume + niche low-competition. (HYROX tags used descriptively — nominative only.)

**Cross-platform from one source:** **IG** = full carousel (+ Reel). **X** = the single workout-card image (native images out-reach links). **FB HYROX groups** = single card or carousel, but genuine participation rules apply (no cold link drops; link-in-first-comment fallback). One design → three destinations.

**Cultural note:** "Hybrid Rockstar" is now surfacing as HYROX community slang in 2026 ("Embrace the Hybrid Rockstar") — the app name is culturally on-target. Stays nominative-only for HR's own branding.

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

## 🧱 The workout templates (PENDING — the key build blocker)

Not yet built. One-time design cost → fast daily production (same logic as the PP vendor-post template). Research says build a **carousel template** (primary) + a **single-card** version (X/FB) from the same design system.

**Template A — IG workout CAROUSEL (primary, 1080×1350 / 4:5, all slides same ratio):**
- **Slide 1 — the workout card (the save magnet):** HR wordmark (Barlow Condensed Bold, `#FFED00`), workout name / what it trains, the movements + reps/distances/rounds in a clean legible body font (NOT condensed-bold — readability). This is the screenshot people save.
- **Slides 2–4 — coaching:** pacing, scaling up/down, the common mistake — one idea per slide, value front-loaded (slide 3 gates the re-serve).
- **Final slide — CTA + question:** "Full 12-week progression + tracking + coach feedback in the app → link in bio" AND a comment-driving question ("What's your SkiErg split?").
- 10% safe margin every edge (bottom overlaps caption/dots).

**Template B — single workout CARD (X + FB, reuse slide-1 design).** Native image; carries the workout + brand mark + bio/link reference.

**(Optional) Reel — time-lapse workout**, each exercise named via text overlay, <60s, for discovery.

**Shared build rules:**
- Barlow Condensed Bold for wordmark/impact ONLY; clean font for workout data. Black/yellow `#FFED00`.
- Pull the **real 12-week program structure** from the HR app/ref docs (don't invent workouts).
- **Production tool: Claude Design** — produced the PP App Store screenshots this cycle (excellent). Design → Mark approves → export → CC converts/wires if needed. (Watch the CD asset-shuffle trap → embed images inline; see SCS_MP screenshot pipeline.)

**Caption format (repeatable, converts):**
1. Name the workout / what it trains.
2. The coaching insight — pacing, scaling up/down, the mistake people make.
3. Soft CTA to gated in-app features → link in bio + a question to drive comments.

---

## 🚧 Open items / blockers (next actions, in order)

1. ✅ **HYROX IG/FB/X research pass — DONE (July 1).** Findings folded into the format above (carousels 3× single images; saves/DM-shares; slide-3 re-serve; Reels-discovery/carousels-conversion; fitness timing; live hashtags).
2. **Build the templates (Claude Design)** — Template A (IG carousel), Template B (single card for X/FB), optional Reel. Pull the real 12-week structure. Mark approves the look before daily production starts.
3. **Verify the launch-offer deliverability** (build check — can the app grant lifetime full access to the first 100?), then **draft the launch post + pinned explainer** ("first 100 = everything free for life").
4. **Draft the first workout carousel** off Template A once built (workout card + coaching slides + CTA/question).

**RESOLVED (Mark, July 1):** the launch offer = **first 100 downloaders get everything in the app free for life** (see Launch Offer section). Copy locked; deliverability is the build check above.

**UNVERIFIED:** whether any template was already built in a session not yet reviewed. Treated as OPEN (safe default).

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
**v2 (July 1, 2026):** **Research pass DONE** — 2026 platform findings folded in: workout post = **carousel** (3× single-image reach, save/re-serve advantage), slide-3 re-serve gate, Reels-for-discovery/carousels-for-conversion, fitness timing (5–7 AM / 5–7 PM, Tue–Thu), live HYROX hashtag set. **Launch offer LOCKED** — first 100 downloaders get everything free for life (deliverability build-check flagged). **Scope expanded to IG + FB + X** (one design → carousel for IG, single card for X/FB). Templates re-specced (A: IG carousel; B: single card; optional Reel).
**v1 (July 1, 2026):** First standalone version. Extracted from HR_MASTER/past chats. **Font corrected** Roboto Mono → **Barlow Condensed Bold (700)** (verified from shipped code; branding-only; `#FFED00`). Strategy consolidated; blockers listed; launch-offer flagged for Mark.

---

*The HR social plan (IG + FB + X). Workout CAROUSEL (IG) + single card (X/FB); weekend features / midweek workouts. Brand font = Barlow Condensed Bold (from the app), `#FFED00`, branding-only. Launch offer LOCKED: first 100 = everything free for life. Next: build the templates (Claude Design) → verify offer deliverability → launch post.*
