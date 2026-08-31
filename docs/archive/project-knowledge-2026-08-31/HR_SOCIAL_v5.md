# HR Social — Promotion Plan (IG + FB + X) — v5

**Status:** ACTIVE REFERENCE — the Hybrid Rockstar social promotion plan across **Instagram + Facebook + X**.
**Version:** v5 (July 2, 2026) — **finalizes the 6-slide carousel** (adds the intro/brand slide before the workout cover), locks the **slide-5 conditional cue logic** (SC form cues on the 4 barbell lifts / HR station technique / collapse when neither covers the day), records the **Day 1 · Week 1 locked exemplar** with real program content, adds the **kinetic-text Reel workflow** (Instagram animated text over CD-made text-free backgrounds, reusing carousel assets — Mark's proven PP method), the **reach playbook** (Reels=discovery, carousels=conversion, engage-don't-follow, FB groups=warm audience, velocity), and the **slide-6 premium panel + queued premium-App-Store-screenshots project**. Supersedes v4.
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
- **3-color system, nothing else:** **black `#000000`** canvas · **white `#FFFFFF`** body/data · **brand yellow `#FFED00`** accents only (wordmark, key headers, labels, offer). Yellow punctuates, doesn't dominate.
- **Imagery:** B&W functional-fitness/HYROX action photos, **free/non-copyrighted stock** (thousands available — no IP concern). Photo on the **intro slide only**; all other slides solid black.

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

## 🎬 Reels — kinetic-text format (Mark's proven method)

**Reels are the discovery engine** (they reach non-followers via Explore/Reels feed); **carousels are conversion** (engage existing followers, drive saves). A 0-follower launch wants both.

**The format that works for a solo founder with no footage: animated/kinetic TEXT.** Mark already did this on PP with strong results — reused the carousel, made the **text animate/appear in Instagram's editor**, added audio. Motion = watch time = reach; the *text itself* is the motion, so **no filmed video is needed.** (A static image + audio is NOT sufficient — no motion, gets buried. Kinetic text IS sufficient — proven.)

**Workflow (reuses carousel assets — near-zero net-new work):**
1. **Claude Design outputs two versions of each daily design:** (A) carousel slides with text baked in; (B) the **same slides as text-free branded backgrounds** (black/yellow + wordmark only, identical margins) for Reels.
2. In **Instagram's Reels editor**: drop a text-free background → add each text line with "Aa" → set timing so lines appear/animate → next slide → add **trending audio** (a real, free reach lever — pick sounds with the upward arrow) → post.
3. Cadence: **~1 Reel/week** reusing that week's workout/form content. Phase-2 amplifier — do NOT let Reels block the daily carousel launch.

**Tool reality (RULE #0):** **Claude Design cannot make Reels** (static tool, no motion/video). **CINC cannot make them either** — IG's animated-text editor is a phone-app feature, not in the browser CINC drives, and creative timing is a poor fit for a browser agent. The kinetic-text Reel is a **Mark-in-the-IG-app task** — but a fast one (type + animate + audio), not a filming/editing burden. CD's only role is supplying the text-free backgrounds + the text lines.

---

## 📣 Reach playbook — how posts actually get seen (from 0 followers)

- **Following popular accounts does NOT boost your reach** (common myth — it affects *your* feed, not who sees you; aggressive follow/unfollow can be flagged as spam). No "ideal number to follow." Follow for genuine interest only.
- **Engage OUTWARD, don't follow outward.** ~15-20 min/day of *genuine comments* on active HYROX posts (esp. mid-size athlete accounts) puts you in front of their audiences — real exposure a silent follow never gives.
- **The 6 FB HYROX groups = the unfair advantage** — a warm, targeted audience IG can't give cold. Genuine participation drives the first real followers → early engagement velocity → wider IG distribution. (No cold link drops; link-in-first-comment fallback; vary/space posts.)
- **Engagement velocity (first 30-60 min)** is a core ranking signal → a warm audience to notify matters; that's what the FB groups + outward engagement build.
- **Saves + DM-shares** are the strongest 2026 signals → build save-worthy workout cards + shareable content (a workout someone sends a training partner).
- **Reels for discovery + carousels for conversion + cross-post to X/FB.** Consistency beats perfect timing (fitness peaks 5-7 AM / 5-7 PM, Tue-Thu, but showing up daily matters more).

---

## 🖥️ Cross-platform from one design source
- **IG:** full 6-slide carousel (+ optional weekly kinetic-text Reel).
- **X:** the single workout-card image (native images out-reach link-only posts).
- **FB HYROX groups:** single card or carousel; genuine participation rules apply.
- **Slide 6 / the app-pitch panel** is a **purpose-built premium HR panel** (black/yellow, Barlow Condensed, phone mockup of a real HR screen + features + first-100 offer) — it also serves as the **X card and FB card**. One design → all destinations.

---

## 🗂️ Queued: premium HR App Store screenshots (separate project)
HR's current App Store screenshots are basic (not premium like PP's). **Option A (now):** build the slide-6 premium pitch panel for social — small, contained, unblocks the launch. **Option B (later, queued):** the full premium HR App Store screenshot set + resubmission (sim captures → CD panels → PPTX → CC convert → upload → review). A's panel design + a real HR sim screen capture carry into B, so A is a down payment on B. **Do A now; B is a separate queued workstream — don't gate the social launch on an App Store resubmission.** (A's slide-6 mockup needs one real clean HR sim screen capture — CC grabs it; same first asset B needs.)

---

## 🚧 Open items / next actions
1. **Claude Design builds the Day-1 6-slide set** (Version A carousel + Version B text-free Reel backgrounds), in a **dedicated HR CD project** (separate from PP). Mark approves the look.
2. **CC grabs a clean HR sim screen capture** for slide 6's phone mockup (also seeds the queued premium-App-Store project).
3. **Verify launch-offer deliverability** (can the app grant lifetime access to first 100?).
4. **Draft the launch post + pinned explainer** (first-100 offer + free-program framing).
5. **Batch the rest** off the approved Day-1 template (slide-5 cue logic per day; collapse where needed).

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
**v5 (July 2, 2026):** Finalized **6-slide carousel** (added intro/brand slide). Locked **slide-5 conditional cue logic** (HR station library / SC 4-lift cues / collapse; no research-to-pad). Recorded **Day 1 · Week 1 exemplar** with real program content (Strength A; slide 5 = Back Squat from SC). Added **kinetic-text Reel workflow** (IG animated text over CD text-free backgrounds — Mark's proven PP method; CD & CINC can't make Reels). Added **reach playbook** (follow≠reach; engage outward; FB groups = warm audience; velocity; saves). Locked **slide-6 = premium pitch panel** (also X/FB card); **premium App Store screenshots = queued Option B**. Tier rule (FullRox on slide 3, HalfRox note on slide 4). Noted real cadence = 64 sessions, not clean 5×/week. Supersedes v4.
**v4 (Jul 1):** Locked 5-slide carousel; form/technique slide from app content.
**v3 (Jul 1):** Per-post content spec (serialized dailies; caption hook-first; both offers reconciled).
**v2 (Jul 1):** 2026 research; first-100 offer; IG/FB/X scope.
**v1 (Jul 1):** Extracted from HR_MASTER; font corrected to Barlow Condensed Bold.

---

*The HR social plan. 6-slide daily carousel (CD-built) = conversion engine; kinetic-text Reels (Mark in IG, reusing assets) = discovery; FB groups + outward engagement = warm-audience reach. Slide 5 = HR station tech / SC lift cues / collapse — verified sources only. Day 1 (Strength A, Back Squat cues) is the locked template-setter. First 100 = everything free for life.*
