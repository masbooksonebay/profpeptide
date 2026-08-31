# HR Social — Promotion Plan (IG + FB + X) — v7

**Status:** ACTIVE REFERENCE — the Hybrid Rockstar social promotion plan across **Instagram + Facebook + X**.
**Version:** v7 (July 13, 2026) — **Major correction + lock-down pass after building W1-W2 carousels/reels + W3D1.** CORRECTS: (1) **CD builds Reels directly** — proven flawless on W1+W2 (v5/v6 wrongly said CD/CINC can't); the reel format is HTML/CSS animated, NOT kinetic-text-in-IG. (2) **Wordmark color is format-specific** (carousel intro = both words yellow; reel hook + carousel cover/pitch = HYBRID white + ROCKSTAR yellow) — new locked table. (3) **The workout slide/scene must show the COMPLETE session — every movement** (accuracy rule; abridging misrepresents the workout). ADDS: the **proven carousel + reel prompt templates** (verbatim shapes), the **website Daily-Workouts gallery mechanics** (IG-permalink cards), and the **social-content = brand-yellow-only** rule (block colors are app-UI only). Supersedes v6.
**App:** Hybrid Rockstar (HYROX-style training). App repo `~/dev/hybrid-rockstar`; marketing site `~/dev/hybrid-rockstar-site` (hybridrockstar.app). On the App Store.

---

## 🎁 Launch offer (LOCKED)
**First 100 to download get EVERYTHING in the app — free, for life.** Founding-user hook: scarce, concrete, front-loads installs. Carried on the daily posts' final slide + caption CTA; the pinned explainer frames it.
> ⚠️ **Build check before it goes live (RULE #0):** confirm the app can actually grant lifetime full access to specific users (promo code / founding-user flag / IAP comp) before promising 100 strangers something you must honor. Copy locked; deliverability is a build item to verify.

**Two offers, complementary (not competing):**
- **Free 12-week program** (given away across the daily posts) = the reach/habit engine (top-of-funnel).
- **First 100 = everything free for life** = the install hook / CTA.
- Both point to one action: download the app.

---

## 🎨 Brand system for social assets (VERIFIED from shipped app code)
- **Display font: Barlow Condensed Bold (700)** — the app's only custom font (branding-only; body = system font). Use it for the **wordmark + impact headlines** on graphics; a **clean legible sans for workout data/body** (don't set a dense workout in condensed-bold — readability trap).
- **3-color system, nothing else:** **black `#000000`** canvas · **white `#FFFFFF`** body/data · **brand yellow `#FFED00`** accents. Yellow punctuates, doesn't dominate.
- **🔒 SOCIAL CONTENT IS BRAND-YELLOW ONLY — never block-colored (NEW v7).** The app UI colors training blocks (Foundation green / Build blue / Peak orange / RacePrep red). **These block colors are APP-UI ONLY.** Every carousel and every reel — regardless of which week/block the workout is from — uses ONLY `#FFED00` as the accent. NO green/blue/orange/red on any social asset, ever. (Locked after CD wrongly rendered a Week-3 Foundation carousel with green accents. Green comes from the block system, which does not apply to social.)
- **🔒 WORDMARK COLOR — format-specific (NEW v7, corrected after two opposite errors in one day):**

  | Asset / slide | "HYBRID" | "ROCKSTAR" |
  |---|---|---|
  | **Carousel — intro/photo slide (slide 1)** | **yellow #FFED00** | yellow #FFED00 |
  | **Carousel — cover (slide 2)** | white #FFFFFF | yellow #FFED00 |
  | **Carousel — app-pitch (last slide)** | white #FFFFFF | yellow #FFED00 |
  | **Reel — hook scene (scene 1)** | white #FFFFFF | yellow #FFED00 |

  The carousel *intro photo slide* is the ONLY place both words are yellow. Everywhere else (incl. the reel hook) = HYBRID white + ROCKSTAR yellow. This is easy to mix up (even the two formats' intro slides differ) — cite this table in every prompt.
- **Imagery:** B&W functional-fitness/HYROX action photos, **free/non-copyrighted stock** (thousands available — no IP concern). Photo on the **intro slide (carousel) / hook scene (reel) only**; all other slides/scenes solid black.

---

## 🖼️ The daily post — 6-slide carousel (LOCKED structure)

**Daily model:** 1 workout/day, serialized "Day X · Week Y of a 12-week program," through the whole program. (⚠️ real program is **64 sessions over 12 weeks**, not a clean 5×/week — counts are `[5,5,5,6,6,6,5,6,6,5,5,4]`; Build/Peak weeks add a 6th "Simulation" day, Race Week tapers to 4. Serialize by the real day count, not an assumed 5/week.)

| # | Slide | Content |
|---|---|---|
| 1 | **INTRO / BRAND** *(only slide with a photo)* | "HYBRID ROCKSTAR" wordmark · "FULL 12-WEEK HYROX PROGRAM" (context) · "WEEK X · DAY Y → SWIPE" · full-bleed B&W action photo. The series title card. |
| 2 | **WORKOUT COVER** *(solid black)* | Yellow eyebrow "DAY Y · WEEK X" · headline = session name (e.g. "STRENGTH A — Lower Body"). Distinct from slide 1 (no photo, card feel). Stops the scroll → earns the swipe. |
| 3 | **THE WORKOUT** | Full session (FullRox only — see tier rule), clean white list: movements, sets, reps, distances + warm-up/cooldown. The save magnet. |
| 4 | **COACHING · pacing/strategy** | How to run it: pacing, effort, where people blow up + **HalfRox as a scaling note here**. (Slide 3+ swipe gates the re-serve — real value here.) |
| 5 | **COACHING · form/technique** *(conditional — see logic)* | Movement cues + common mistakes, from real app content. Doubles as an app preview. |
| 6 | **APP PITCH + CTA** | "The whole 12-week program in the app" · daily workouts / tracking / AI coaching · **first 100 = everything free for life** · link in bio · comment-driving question · **[app screenshot] placeholder** (premium panel, see below). |

**Tier rule:** **Slide 3 = FullRox only** (cleaner, more legible). **HalfRox = a scaling note on slide 4** (its natural home). If a day's HalfRox differs a lot from "just shorter," give it its own line or trim.

**🔒 COMPLETE-WORKOUT ACCURACY RULE (NEW v7 — non-negotiable):** The workout slide (carousel slide 3) AND the workout scene (reel scene 2) must show the **COMPLETE session — every movement**, in order (A1, A2, B1, B2, B3…). A post that presents "the day's workout" while showing only a subset (e.g. the main lifts, omitting accessories) **misrepresents the workout** — someone following it does the wrong session. Accuracy over brevity; the post IS the workout. Never abridge to "keep it punchy." (Locked after a W3D1 reel was built showing only Back Squat + RDL, dropping B1/B2/B3.) For legibility, the accessories may *animate/reveal as a group* after the main lifts — but they must all appear.

**Collapse allowance:** if a day is self-explanatory or has no coverable technique, **collapse to 5 or 4 slides** rather than pad. A thin coaching/technique slide stalls viewers and *hurts* (kills the re-serve). Don't do fresh research just to fill slide 5 (see cue logic).

---

## 🔑 Slide-5 (form/technique) cue logic — VERIFIED sourcing (RULE #0)

Slide 5's content is **conditional on what the day actually contains**, drawn only from verified app sources — never invented:

1. **Station day** (Movement Pattern, Simulation, etc.) → **HR's 8-movement technique library** (`hyroxMovements.ts`, in `HR_PROGRAM_EXPORT.md`): Ski Erg, Sled Push, Sled Pull, Burpee Broad Jumps, Rowing, Farmer's Carry, Sandbag Lunges, Wall Balls — each with Setup / Execution / Common Mistakes / Substitutions. Richest technique content; these are also the most visually interesting posts.
2. **Strength day with a lift SC covers** → **SC's form cues** (`SC_FORM_CUES_EXPORT.md`): only **4 lifts** — **Squat, Bench Press, Deadlift, Overhead Press** (setup/execution/mistakes each). No accessory movements.
3. **Day whose key movements neither app covers** (RDL, lunges, DB/KB accessories, runs) → **collapse to a 4–5-slide post, no slide 5.** Default, not a failure.
4. **Fresh research** → reserved for a *deliberate, occasional* featured post (e.g. a themed "wall ball depth" piece), **never** a daily gap-filler. Guardrail: don't research just to avoid a shorter post.

*Consequence:* many accessory/run days will be 4-slide posts — consistent with the "don't over-densify" rule. The 5–6-slide posts cluster on the 4 main barbell lifts and the station days.

**Adjacent (not merged):** `data/rules.ts` holds official HYROX race **standards** (distances/weights/legality) — kept separate from coaching cues; a possible future occasional "race standards" post type.

---

## ✅ Day 1 · Week 1 — LOCKED exemplar (the template-setter)

**Real session (verified from `HR_PROGRAM_EXPORT.md`):** Strength A (Lower-body). FullRox ~55 min: warm-up 5m → **A1 Back Squat 4×5 @ RPE 6-7** → **A2 Romanian Deadlift 3×8 @ RPE 6** → **B1 Walking Lunges 3×20** → **B2 Plank 3×45s** → cooldown 5m. HalfRox ~30 min: A-pair only (Back Squat + RDL), skip accessories.

- **Slide 5 = Back Squat** — the only Day-1 movement SC covers. Verbatim SC cues: *Setup* (bar on traps, feet shoulder-width, toes out 15-30°, chest up, big breath before unrack) · *Execute* (break hips+knees together, hip crease below knee, knees track over toes, drive through mid-foot chest leading) · *Avoid* (knees caving, butt-wink, hips shooting up first).
- So Day 1 = a clean **6-slide** post. This is the design Claude Design builds first, Mark approves, then the rest batch off it.

---

## 🎬 Reels — CD-BUILT, HTML/CSS animated (CORRECTED v7)

**⚠️ CORRECTION (v7):** v5/v6 stated "CD and CINC cannot make Reels" and prescribed a kinetic-text-in-IG workflow. **That is WRONG and superseded.** **Claude Design builds the reels directly** — it produced the Week 1 and Week 2 reels flawlessly. The reel is an **HTML/CSS animated video** CD builds and exports as MP4, NOT typed-text-in-the-IG-editor.

**Reels are the discovery engine** (reach non-followers via Explore/Reels); **carousels are conversion** (existing followers, saves). A 0-follower launch wants both.

**🔒 REEL FORMAT (LOCKED — the proven W1/W2 shape):**
- **1080×1920 (9:16), ~13–16 seconds, 4 scenes with cuts.** Always 4 scenes regardless of the carousel's slide count — the reel compresses to: **hook → workout → coaching → CTA.**
- Black `#000` bg, brand yellow `#FFED00`, Barlow Condensed Bold headlines. **All images embedded as inline data URIs.** Exports as **MP4**.
- **Scene 1 — HOOK (~3s):** B&W photo full-bleed background (desaturated + darkened). Animate in: wordmark ("HYBRID" **white** + "ROCKSTAR" yellow — see wordmark table), then "WEEK X · DAY Y" and the session name. Must move in the first second.
- **Scene 2 — WORKOUT (~5s):** text-based (no screenshot). Animated build-on of the session name + the **COMPLETE workout** (see Complete-Workout Accuracy Rule — every movement, not just the main lifts). Small "WEEK X · DAY Y" header.
- **Scene 3 — HOW TO RUN IT (~4-5s):** solid black, yellow "HOW TO RUN IT" header, animate in the coaching/pacing line. Match the "how to run it" scenes in prior reels.
- **Scene 4 — CTA (~4s):** reuse the standard reel CTA — yellow "FIRST 100 TO DOWNLOAD GET EVERYTHING FREE — FOR LIFE." bar, "LINK IN BIO →", HYBRID ROCKSTAR wordmark.
- Prompt closes with: "Report the final duration and confirm MP4 export works."

**Carousel + reel are SEPARATE prompts** (the proven method — one prompt builds the carousel, a second builds the reel). Same day's verified content feeds both.

**Reel vs carousel — key format differences to keep straight:**
- Reel = 4 scenes always; carousel = 4–6 slides (by detail). The reel has NO form-cue scene (form lives only on the carousel's slide 5).
- Reel hook wordmark = HYBRID white; carousel intro wordmark = both yellow.
- Both must show the complete workout on their workout slide/scene.

---

## 📣 Reach playbook — how posts actually get seen (from 0 followers)

- **Following popular accounts does NOT boost your reach** (common myth — it affects *your* feed, not who sees you; aggressive follow/unfollow can be flagged as spam). No "ideal number to follow." Follow for genuine interest only.
- **Engage OUTWARD, don't follow outward.** ~15-20 min/day of *genuine comments* on active HYROX posts (esp. mid-size athlete accounts) puts you in front of their audiences — real exposure a silent follow never gives.
- **The 6 FB HYROX groups = the unfair advantage** — a warm, targeted audience IG can't give cold. Genuine participation drives the first real followers → early engagement velocity → wider IG distribution. (No cold link drops; link-in-first-comment fallback; vary/space posts.)
- **Engagement velocity (first 30-60 min)** is a core ranking signal → a warm audience to notify matters; that's what the FB groups + outward engagement build.
- **Saves + DM-shares** are the strongest 2026 signals → build save-worthy workout cards + shareable content (a workout someone sends a training partner).
- **Reels for discovery + carousels for conversion + cross-post to X/FB.** Consistency beats perfect timing (fitness peaks 5-7 AM / 5-7 PM, Tue-Thu, but showing up daily matters more).

---

## 🧩 PROVEN PROMPT TEMPLATES (NEW v7 — cite these; don't improvise)

These are the verified prompt shapes that produced the clean W1/W2 sets. Build every day off these.

### Carousel prompt shape (proven)
- Open: "Create the Day Y · Week X carousel for Hybrid Rockstar — N slides (state the count + WHY: form-slide day = 6; collapsed cardio/accessory day = 4-5)." State: black bg, `#FFED00`, Barlow Condensed Bold headings, **"same layout system as prior carousels," NO green.** "Build all N as separate 1080×1350 artboards."
- **Slide 1 INTRO:** attached B&W photo full-bleed (desaturated+darkened); wordmark **BOTH words yellow**; "FULL HYROX TRAINING PROGRAM"; "WEEK X · DAY Y → SWIPE."
- **Slide 2 COVER:** yellow eyebrow "DAY Y · WEEK X"; headline = session name; yellow subline = app's parenthetical label ("Lower-body anchored" etc.). **"match the headline font SIZE used on prior cover slides (e.g. Week 1 'EASY RUN' / Week 2 'ENGINE')"** — always anchor cover size to a named prior slide.
- **Slide 3 WORKOUT:** "FULLROX ~NN MIN" yellow header; **COMPLETE session**, A1/A2/B1/B2/B3 labels yellow, names white, sets/reps/RPE greyed. FullRox only.
- **Slide 4 HOW TO RUN IT:** "mirror the prior 'how to run it' layout" — yellow header, large white main line, **yellow-left-border callout** = HalfRox scaling note ("SHORT ON TIME?").
- **Slide 5 FORM (only if the day has an SC-covered lift or HR station):** "mirror the Week 1 Day 1 [lift] form slide layout" — yellow "FORM · [LIFT]" header, SETUP / EXECUTE / AVOID blocks, **verbatim cues from SC_FORM_CUES_EXPORT.md or HR_PROGRAM_EXPORT.md** (never invented). Omit this slide entirely on collapse days.
- **Slide 6 CTA:** "reuse the LOCKED slide-6 CTA design from prior carousels exactly … No changes." Do NOT re-spec it.
- Close: "Output all N slides as separate 1080×1350 PNGs." (Optionally add the spec-sheet report-back ask.)

### Reel prompt shape (proven) — see the locked Reel Format above
"Build a vertical Instagram Reel animation, 1080×1920 (9:16), 4 scenes with cuts, ~13–16 seconds. Black `#000`, `#FFED00`, Barlow Condensed Bold. Embed all images as inline data URIs." Then the 4 scenes (hook / workout=COMPLETE / how-to-run-it / CTA). Close: "Report the final duration and confirm MP4 export works." **Reel hook wordmark = HYBRID white + ROCKSTAR yellow.**

### Verify-before-prompt (RULE #0)
Before writing either prompt, pull the day's content **verbatim from HR_PROGRAM_EXPORT.md** (session name, FullRox/HalfRox splits, all movements+sets+reps, stimulus/about for the coaching line) and form cues **verbatim from SC_FORM_CUES_EXPORT.md**. Never reconstruct from memory. (Caught a W1D5 = "Engine" error this way — W1D5 is Easy Run; Engine is W2D5.)

---

## 🌐 Website "Daily Workouts" gallery — mechanics (NEW v7)

The hybridrockstar.app homepage has a **Daily Workouts** gallery of reel cards. Adding days is a **CC job on `~/dev/hybrid-rockstar-site`**.

- **How it works:** single file **`index.html`** (plain static, no framework). A `WORKOUTS` JS array drives the cards; a `BLOCKS` array defines the phase rows (foundation/build/peak/race). **Cards LINK OUT to the posted Instagram reel — no video is hosted in the repo** (the ▶/IG glyph are visual cues only).
- **One card entry:** `{ block:'foundation', week:N, day:N, title:'Week N · Day N — Name', permalink:'<IG reel URL>', thumbnail:'/assets/workouts/w{W}d{D}-{slug}.png' }`. The `—` in title splits caption/label — keep the exact form.
- **Row grouping is automatic** from `block` — all Foundation (Weeks 1-3) days append to the one "FOUNDATION — WEEKS 1-3" row in array order; a new row only appears for a new block key.
- **Thumbnails:** static B&W cover-frame PNGs in `assets/workouts/`, naming `w{W}d{D}-{slug}.png`. Source frames come from Downloads (CD's carousel cover exports); CC copies + renames them. ⚠️ Some Downloads frames are named `dayN` (no week) — CC must visually confirm identity before copying.
- **THE GATE:** a card needs a **posted IG reel permalink** — Mark supplies these (CC/CD can't invent them; reels post from the phone). Dependency: MP4 exists → Mark posts to IG → permalink → CC adds card. ⚠️ **Confirm permalink→day mapping with Mark** (IG URLs are opaque codes; wrong map = wrong workout live).

---

## 🖥️ Cross-platform from one design source
- **IG:** the daily carousel (4-6 slides) + the CD-built reel (4 scenes, MP4) — see Reels section.
- **X:** the single workout-card image (native images out-reach link-only posts).
- **FB HYROX groups:** single card or carousel; genuine participation rules apply.
- **Slide 6 / the app-pitch panel** is a **purpose-built premium HR panel** (black/yellow, Barlow Condensed, phone mockup of a real HR screen + features + first-100 offer) — it also serves as the **X card and FB card**. One design → all destinations.

---

## 🗂️ Queued: premium HR App Store screenshots (separate project)
HR's current App Store screenshots are basic (not premium like PP's). **Option A (now):** build the slide-6 premium pitch panel for social — small, contained, unblocks the launch. **Option B (later, queued):** the full premium HR App Store screenshot set + resubmission (sim captures → CD panels → PPTX → CC convert → upload → review). A's panel design + a real HR sim screen capture carry into B, so A is a down payment on B. **Do A now; B is a separate queued workstream — don't gate the social launch on an App Store resubmission.** (A's slide-6 mockup needs one real clean HR sim screen capture — CC grabs it; same first asset B needs.)

---

## ✅ Day-1 carousel — BUILT (template-setter locked, July 2)

The Day-1 6-slide carousel is designed and exported (Claude Design, dedicated HR project, all slides 1080×1350). This is the **locked visual template** every future daily post follows. Verified final state:
- **Slide 1 — INTRO:** real **B&W HYROX race-start action photo** (desaturated + darkened), "HYBRID ROCKSTAR" yellow wordmark, "FULL 12-WEEK HYROX PROGRAM," "WEEK 1 · DAY 1 → SWIPE." (Mark sourced/converted the photo; B&W treatment carries forward for all intro slides.)
- **Slide 2 — COVER:** "STRENGTH A" on ONE line + "(Lower-body anchored)" in yellow beneath (app's exact label — the naming convention for every day's cover). "DAY 1 · WEEK 1" eyebrow. Scaffolding removed.
- **Slide 3 — WORKOUT:** FullRox — Back Squat 4×5 @ RPE 6-7 / RDL 3×8 @ RPE 6 / Walking Lunges 3×20 / Plank 3×45s + warm-up/cooldown. A1/A2/B1/B2 yellow, units greyed. (The save magnet.)
- **Slide 4 — COACHING:** "HOW TO RUN IT" — calibration-week cue + "SHORT ON TIME?" HalfRox scaling note.
- **Slide 5 — FORM · BACK SQUAT:** SETUP / EXECUTE / AVOID, verbatim from SC's cue library.
- **Slide 6 — APP PITCH:** premium phone mockup of the real **Train/home screen** (Foundation · Week 1 of 12, block breakdown — CC-captured via AsyncStorage seed, UI untouched), yellow glow; "THE WHOLE 12-WEEK PROGRAM. IN THE APP." headline; features line; yellow "FIRST 100…FREE — FOR LIFE." bar; "LINK IN BIO →."
  - ⚠️ **Possible further polish (Mark's call, open):** slide 6's screenshot is framed-in-a-phone but comparatively flat vs. the PP App Store screenshots (larger/angled/hero-composed). Optional revision: bigger, slightly angled, hero-composed — WITHOUT redrawing the UI. Not blocking.

**Animation decision (Reels):** smooth **scroll-reveal** (a slow vertical pan down each slide's content) is the chosen kinetic style — one motion per slide, highly replicable. Cleanest build path = **tall baked-in slides panned in CapCut** (or IG motion), NOT typed-text-in-IG. Implication: CD should output a **tall (scrollable) version** of each slide for Reels. *(Tool caveat: pan mechanics differ IG vs CapCut — CapCut reliably does it; confirm IG's current options live.)* Keep Reels tight (≈3–4 scenes: hook → workout → one cue → CTA); animate only content-heavy scenes.

## 🚧 Open items / next actions
1. ✅ **Day-1 6-slide carousel built + locked** (see above). Optional slide-6 hero-polish is Mark's call.
2. **Export the FINAL current set** (post-fixes) from CD to Downloads — the earlier zip export is STALE (predates the slide 1/2/6 fixes); re-export before posting.
3. **Verify launch-offer deliverability** (can the app grant lifetime full access to the first 100? promo / founding-user flag / IAP comp) BEFORE the offer goes live.
4. **Reels: produce the tall scroll-reveal version** of the Day-1 slides (CD) → Mark assembles pan + trending audio in CapCut/IG. Phase-2 amplifier — don't block the carousel launch on it.
5. **Draft the launch post caption + pinned explainer** (hook-first; first-100 offer + free-program framing).
6. **Batch the rest of the program** off the locked Day-1 template (slide-5 cue logic per day: HR station tech / SC 4-lift cues / collapse; FullRox on slide 3, HalfRox note on slide 4). ⚠️ Real cadence = **64 sessions**, not clean 5×/week.

**Caption format:** first line = a HOOK (never "Day 1 Week 1" — IG truncates after ~1-2 lines). Then workout/notes → app pitch → link in bio + a question. No clickable caption links; bio link → App Store or a landing page with the button + free program.

---

## 📓 Post log
*(none yet — populate as posts fire: date · platform · type [workout/feature/launch/reel] · workout/feature · caption gist · offer)*

---

## 🔗 Cross-references
- **HR_MASTER v11** (HR app/site state, brand standards, HYROX nominative-use guide, community-group outreach)
- **HR_PROGRAM_EXPORT.md** (the real 12-week program + 8-movement technique library — slide-3/4/5 source)
- **SC_FORM_CUES_EXPORT.md** (SC's 4-lift form cues — slide-5 source on strength days)
- **PP_X_POSTS v30 (frozen format)** — the X-post discipline HR repurposes from
- **SCS_MP v6.11** (screenshot + social-card pipelines: Claude Design → export → CC; execution model)

---

## 📅 Changelog
**v7 (July 13, 2026):** **Correction + lock-down pass after building W1-W2 carousels/reels + starting W3D1.**
- 🔧 **CORRECTED: CD builds Reels directly** (HTML/CSS animated → MP4), proven flawless on W1+W2. Removed the v5/v6 "CD/CINC can't make Reels / kinetic-text-in-IG" claim entirely.
- 🔒 **Locked the reel format** (1080×1920, 4 scenes, ~13-16s, inline data-URI images, MP4) + the proven reel prompt shape.
- 🔒 **Wordmark color table** — format-specific (carousel intro = both yellow; reel hook + carousel cover/pitch = HYBRID white + ROCKSTAR yellow). Locked after two opposite wordmark errors in one day.
- 🔒 **Complete-Workout Accuracy Rule** — workout slide/scene must show EVERY movement; abridging misrepresents the workout. Locked after a W3D1 reel dropped B1/B2/B3.
- 🔒 **Social = brand-yellow only** — block colors (green/blue/orange/red) are APP-UI ONLY, never on social. Locked after a green-accented W3 carousel.
- ➕ **Proven carousel + reel prompt templates** captured verbatim (cite, don't improvise) + verify-before-prompt RULE #0 (pull content from HR_PROGRAM_EXPORT.md; caught W1D5=Easy Run not Engine).
- ➕ **Website Daily-Workouts gallery mechanics** (IG-permalink cards in index.html; permalink→day mapping gate).
- Note: v6's "smooth scroll-reveal / CapCut pan" reel idea is superseded by the actual CD-built HTML/CSS reels.

**v6 (July 2, 2026):** **Day-1 carousel BUILT** (Claude Design, HR project) — all 6 slides exported 1080×1350 and locked as the reusable template-setter. Slide-by-slide final state recorded (B&W intro photo; one-line "STRENGTH A (Lower-body anchored)" cover; real FullRox workout; calibration coaching + HalfRox note; SC Back-Squat form cues; premium Train-screen phone mockup via CC AsyncStorage-seed capture). **Reel animation decision:** smooth scroll-reveal (tall panned slides in CapCut/IG), not typed-text-in-IG → CD should output a tall version for Reels. Flagged: earlier zip export is STALE (re-export post-fixes before posting); optional slide-6 hero-polish is Mark's call. "STRENGTH A (Lower-body anchored)" app-label convention locked for all covers.
**v5 (July 2, 2026):** Finalized **6-slide carousel** (added intro/brand slide). Locked **slide-5 conditional cue logic** (HR station library / SC 4-lift cues / collapse; no research-to-pad). Recorded **Day 1 · Week 1 exemplar** with real program content (Strength A; slide 5 = Back Squat from SC). Added **kinetic-text Reel workflow** (IG animated text over CD text-free backgrounds — Mark's proven PP method; CD & CINC can't make Reels). Added **reach playbook** (follow≠reach; engage outward; FB groups = warm audience; velocity; saves). Locked **slide-6 = premium pitch panel** (also X/FB card); **premium App Store screenshots = queued Option B**. Tier rule (FullRox on slide 3, HalfRox note on slide 4). Noted real cadence = 64 sessions, not clean 5×/week. Supersedes v4.
**v4 (Jul 1):** Locked 5-slide carousel; form/technique slide from app content.
**v3 (Jul 1):** Per-post content spec (serialized dailies; caption hook-first; both offers reconciled).
**v2 (Jul 1):** 2026 research; first-100 offer; IG/FB/X scope.
**v1 (Jul 1):** Extracted from HR_MASTER; font corrected to Barlow Condensed Bold.

---

*The HR social plan. CD-built carousels (4-6 slides) = conversion + CD-built reels (4 scenes, MP4) = discovery; FB groups + outward engagement = warm-audience reach. Wordmark color is format-specific; social is brand-yellow only; the workout slide/scene shows the COMPLETE session. Slide 5 form = SC lift cues / HR station tech / collapse — verified sources only. Website gallery cards link to posted IG reels. First 100 = everything free for life.*
