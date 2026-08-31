# HR Social — Promotion Plan (IG + FB + X) — v10

**Status:** ACTIVE REFERENCE — the Hybrid Rockstar social promotion plan across **Instagram + Facebook + X**.
**Version:** v10 (July 16, 2026) — ✅ **TEMPLATE LIVE ON GITHUB + tested from a fresh CD chat** — chat continuity is no longer a dependency. 🔴 **CD projects are PER-CHAT** (every new chat = a new empty project; "save to project" does not carry). 🔧 **Fixes v9's typography error** — the wordmark is `font-weight:600` (SemiBold), NOT Bold 700; the template is the source of truth. **Prior version:** v9 (July 16, 2026) — **CORRECTS v8, which was wrong.** v8 blamed the serif-wordmark failure on prompt defects (unassigned elements / pointer instructions). **That diagnosis was false.** The real cause was a **rasterization bug**: an oversized base64 photo trips the export serializer, which falls back to canvas compositing, which silently loses the webfont. v8 also "RESOLVED" the intro subheadline to the wrong string. This version stores the **actual working prompts** (verified against the artifacts, not the doc) and the **proven build method**.
**App:** Hybrid Rockstar (HYROX-style training). App repo `~/dev/hybrid-rockstar`; marketing site `~/dev/hybrid-rockstar-site` (hybridrockstar.app). On the App Store.

---

## ✅ THE TEMPLATE SYSTEM — LIVE ON GITHUB (July 16, end of session)

**Chat continuity is no longer a dependency.** Three artifacts, none of which need a conversation to survive:

| Artifact | Holds | Location |
|---|---|---|
| **`HR_CAROUSEL_TEMPLATE.dc.html`** | **the layout** — the thing that never existed in words | **GitHub: `masbooksonebay/hybrid-rockstar-site` → `social/HR_CAROUSEL_TEMPLATE.dc.html` (main)** |
| The working prompts | the instructions | this doc |
| `HR_PROGRAM_EXPORT.md` | the content | project knowledge |

**TESTED AND CONFIRMED July 16:** a **fresh CD chat** connected to the private repo, read the file, and quoted back all three checks correctly — the subheadline markup, 6 `<section>` blocks, and the build-method comment block. **CD's GitHub connector works on a private repo.**

**Commits:** `d7f8c45` (template) + `4e0a930` (`support.js`, referenced by the template's `<head>`). CC maintains it; any CD chat reads it.

### 🔴 CD PROJECT SCOPING — the thing that broke this twice
**Every new CD chat spawns a NEW, EMPTY project.** Verified across three project IDs (`5065da1e` = the 34-page doc + template; `e066b4b8` and `8d6e9f1f` = new chats, both empty). **CD's "save to project" does NOT carry to a new chat.** That's why GitHub matters — it's the only path that survives.

### 🔧 TYPOGRAPHY CORRECTION — v9's table was WRONG
v9 says *"Barlow Condensed Bold 700 for the wordmark and impact headlines."* **The template's actual markup:**
```html
font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:44px;
line-height:1.02; letter-spacing:.05em; color:#fff; text-transform:uppercase;
```
**`font-weight:600` — SemiBold, not Bold 700.** The Google Fonts link loads `wght@500;600;700`, so the system uses **at least three weights**. v9 oversimplified it.

> **🔑 The template is now the SOURCE OF TRUTH for typography — not this doc's description of it.** Same lesson as the subheadline: the artifact wins. When in doubt, read the markup.

---


## 🚨 v8 WAS WRONG — the real root cause (v9)

### What actually broke (VERIFIED)
The `<link>` to Barlow Condensed was **present in the carousel all along**. Slides 2–6 rendered correctly because they're captured from the **live browser**, where the webfont loads. **Slide 1 is the only slide with a full-bleed photo** — the large base64 image trips the export serializer (`html-to-image` chokes; `snapshot_element` hits a `data: img` namespace error), so the build **falls back to compositing on `<canvas>`**. Canvas `fillText` uses `ctx.font`, which does **not** load a webfont — it silently falls back to the platform default. Serif wordmark.

**The proven fix (3 parts, all required):**
1. **Resize the photo to 1080×1350 JPEG (~135–200KB) BEFORE embedding.** The 3MB original was the trigger. A small JPEG keeps the serializer alive.
2. **Load Barlow Condensed via the Google Fonts `<link>`** and let the slide render in the browser.
3. **Capture the LIVE browser render.** No canvas text. No `fillText`. No SVG-`<text>` workaround.

### What v8 got wrong, and why it matters
| v8 claimed | Truth |
|---|---|
| "Unassigned elements" caused it — the wordmark had no font assigned | The font was declared AND the `<link>` was present. Wording never mattered. **The worse-worded REEL prompt (font assigned to *nothing*) rendered CORRECTLY** — because reels never touch the canvas path. |
| "Pointer instructions" caused it — "same layout as prior carousels" resolves to nothing | **Pointers are LOAD-BEARING and they work.** The prior carousels live in the same 34-page document. CD resolves them fine. |
| Slide 1 reads "FULL 12-WEEK HYROX PROGRAM" — RESOLVED from the built record | **FALSE.** W3D1's actual markup: `Full HYROX<br>Training Program` → renders **"FULL HYROX / TRAINING PROGRAM"** on two lines. v7's prompt-template section was right; v7's "built record" was a wrong description, and Claude overruled the working prompt with it. **This shipped a wrong subheadline on W3D4 three times.** |
| The cover's thin content frame is a stray bug | **It's the design.** W3D2's cover has the same frame. |
| Report-back: "name the font you used" | **Useless.** CD reported "Barlow Condensed, weight 700" while the pixels were serif. It reads its own CSS, not the render. |

> ### 🔑 THE LESSON (RULE #0, sharpest form)
> **The artifact is the source. A doc describing the artifact is NOT the source.**
> v7's "built record" *described* Day 1's slide. The slide itself said something different. Claude trusted the description over the artifact and introduced an error into a workflow that had been correct for three weeks. **When a ref doc and an artifact disagree, the artifact wins — always. Go read the markup.**

---

## 🏗️ THE PROVEN BUILD METHOD (v9 — this is what works)

**The layout has never been written down anywhere.** Not in v7, not in v8, not in any prompt. It exists **only in the artifacts** — the built slides. That is why every working prompt has always said *"same layout system as prior carousels"* / *"mirror the Week 1 Day 1 form slide layout."* Those pointers aren't laziness. **They ARE the layout specification.**

**Consequence:** every HR carousel/reel prompt MUST be fired **in a CD chat/document that contains a prior day's build**. That's what makes consistency possible.

1. **Reference a specific prior day** in the same document (W3D1 is the current anchor — it predates all the July 15–16 problems). Tell CD to read both its **build** and its **prompt** in that chat.
2. **Clone the reference day's structure** — head + unchanged slides verbatim — rather than authoring from scratch.
3. **Quote-back verification BEFORE building** — have CD quote a known string from the reference artifact character-for-character. This is what caught the subheadline error. Do it every time.
4. **Photo:** resize to 1080×1350 JPEG (~135–200KB) before embedding.
5. **Font:** Google Fonts `<link>` + live browser render + live capture.
6. **Mark checks the file.** CD's self-verification is worthless (4 false "verified by looking at the pixels" claims in one session).

### 🔒 CD facts (learned July 16)
- **CD CANNOT see other CD chats.** Only artifacts in its current conversation + files you attach.
- **Files persist in the project**; a *summary* carries into a new chat — **but a summary is a compression and drops load-bearing detail** (this is exactly how v7 lost the working subheadline). On a fresh chat: **paste the working prompt in as the first message**, and/or attach the reference slide as an image.
- **CINC ≠ CD.** CINC = browser/dashboards/Similarweb/GSC. CD = carousels, reels, OG cards, visual assets.

### 🔒 Prompt-writing rules (v9)
- **Build fresh; never "rebuild"/"fix"/"patch."** Saying "this is broken, don't touch that" drags failed attempts into scope. Give clean instructions and let a correct build become the template.
- **Don't scope-annotate** ("slides 3, 4, 6 are correct — leave them"). Fresh, complete instructions only.
- **Never** "report back what font you used." **Always** "deliver the file — I'll check it."

---

## ✅ VERIFIED ARTIFACT FACTS (quoted from source, July 16 — do NOT re-derive from memory)

| Fact | Verified value | Source |
|---|---|---|
| **Intro slide subheadline** | markup `Full HYROX<br>Training Program` → renders **"FULL HYROX / TRAINING PROGRAM"** (2 lines) | W3D1 markup |
| **Cover content frame** | thin rectangle outline around content = **intentional design** | W3D2 cover |
| **Cover subline format** | **parenthesized**, yellow, beneath headline — e.g. "(Zone 2 aerobic base)" under "EASY RUN" | W3D2 cover |
| **Cover footer wordmark** | HYBRID **white** + ROCKSTAR **yellow** | W3D2 cover |
| Session label — Strength B | W1D3 = "Strength B (Upper-body anchored)" · **W2D3/W3D3 = "Strength B"** (no parenthetical) | HR_PROGRAM_EXPORT |
| Session label — Movement Pattern | **W1D4 / W2D4 / W3D4 = "Movement Pattern"** — NEVER has a parenthetical | HR_PROGRAM_EXPORT |

### 🔒 SUBLINE RULE (v9 — extended)
Cover subline, in priority order:
1. **The app's exact parenthetical label** if one exists → "(Lower-body anchored)", "(Zone 2 aerobic base)"
2. **Otherwise: the opening phrase of the session's `stimulus` field, verbatim**, set in parentheses → W3D4's stimulus opens "Full 8-station rotation…" → **"(Full 8-Station Rotation)"**
3. **Otherwise: no subline.**

**Never free-author a subline.** (v8's invented "FOUNDATION PEAK" / "FOUNDATION STRENGTH PEAK" came from the `about` note and was wrong.)

---

## 🎨 BRAND SYSTEM (verified from shipped app code)

- **Display font: Barlow Condensed Bold (700)** — condensed **sans-serif**. Wordmark + impact headlines. **Clean legible non-condensed sans** for workout data/body (dense lists in condensed bold = readability trap).
- **3 colours only:** black `#000000` · white `#FFFFFF` · brand yellow `#FFED00`.
- **🔒 SOCIAL IS BRAND-YELLOW ONLY.** The app UI colours training blocks (Foundation green / Build blue / Peak orange / RacePrep red). **APP-UI ONLY.** Never on social, regardless of which week/block the workout is from.
- **🔒 WORDMARK COLOUR — format-specific:**

| Asset / slide | "HYBRID" | "ROCKSTAR" |
|---|---|---|
| **Carousel — intro/photo slide (1)** | **YELLOW** | **YELLOW** |
| Carousel — cover (2) | WHITE | YELLOW |
| Carousel — app-pitch (last) | WHITE | YELLOW |
| Reel — hook scene (1) | WHITE | YELLOW |
| Reel — CTA scene (4) | *verify from the W3D1 reel artifact* | |

The carousel intro photo slide is the ONLY place both words are yellow.
⚠️ The reel-CTA row is **still unverified** — v8 inferred it. Quote it from the W3D1 reel before relying on it.

- **Imagery:** B&W functional-fitness/HYROX action photos, free/non-copyrighted stock. Photo on **intro slide / hook scene ONLY**.
  ⚠️ **Source photos must be ≥1080×1350.** A 547×365 source upscaled full-bleed looks soft. **Large source → downscale to 1080×1350 JPEG → embed.** (Large *source*, small *embed* — not a contradiction.)

---

## 🧩 WORKING CAROUSEL PROMPT (v9 — this exact shape produced a clean W3D4)

```
Build the Week [W] · Day [D] carousel for Hybrid Rockstar — [N] slides, 1080×1350 each.

Use WEEK 3 DAY 1 in this document as the format reference throughout. Read its build
and its prompt in this chat, and follow both: layout, alignment, sizing, spacing, type
hierarchy, treatment. Where I don't specify something below, take it from W3D1.

FIRST — confirm before building:
Is the W3D1 carousel present in this document? If yes, quote its intro slide's
subheadline line back to me character for character — don't correct or normalise it,
quote exactly what's there. If W3D1 is not in this document, stop and tell me.

═══ GLOBAL ═══
Black #000000 canvas · white #FFFFFF body/data · brand yellow #FFED00 accent. Three
colours only — no green, blue, orange or red.
Barlow Condensed Bold 700 for the wordmark and impact headlines. A clean legible
non-condensed sans for workout data and body text.

Wordmark colour:
| Slide              | HYBRID | ROCKSTAR |
|--------------------|--------|----------|
| 1 — intro (photo)  | YELLOW | YELLOW   |
| 2 — cover          | WHITE  | YELLOW   |
| 6 — app pitch      | WHITE  | YELLOW   |

═══ SLIDE 1 — INTRO ═══
Photo: the attached image, full-bleed, treated as W3D1's intro photo is (B&W, darkened).
Wordmark "HYBRID ROCKSTAR" — both words yellow.
Subheadline: whatever W3D1's intro slide uses.
Bottom line: "WEEK [W] · DAY [D] → SWIPE"

Method for this slide — the photo and the webfont interact badly if handled the wrong
way, so use exactly this:
- Resize the photo to 1080×1350 JPEG (~200KB) BEFORE embedding it. An oversized base64
  image trips the export serializer, which falls back to canvas compositing and
  silently loses the webfont.
- Load Barlow Condensed via the Google Fonts <link> and capture the LIVE browser
  render. No canvas text, no fillText.

═══ SLIDE 2 — COVER (solid black, no photo) ═══
Yellow eyebrow: "DAY [D] · WEEK [W]"
Headline, one line: "[SESSION NAME]"
[Yellow subline, parenthesized, beneath the headline — matching how W3D2 sets
 "(Zone 2 aerobic base)" under "EASY RUN": "([SUBLINE])"
 OR: No subline — this session has no parenthetical label in the app. Don't add one.]
Footer wordmark: HYBRID white + ROCKSTAR yellow.
Headline size: as large as fits on one line within the frame's text column, with
W3D2's side margins.
Vertical placement: headline + subline as a BLOCK, positioned the way W3D2 positions
its headline + subline block. Don't centre the headline alone in dead space.

═══ SLIDE 3 — THE WORKOUT ═══
Yellow header: "FULLROX · ~[NN] MIN"
Block labels and numbers yellow · movement names white · distances/loads/reps greyed.

[PASTE THE COMPLETE SESSION VERBATIM FROM HR_PROGRAM_EXPORT.md,
 INCLUDING warm-up / cooldown IF the day has them]

Every block appears — this is the complete session. Shrink the type if needed.

═══ SLIDE 4 — HOW TO RUN IT ═══
Yellow header: "HOW TO RUN IT"
Main line, white: "[COACHING LINE — from stimulus/about/week_context]"
Yellow-left-border callout, header "SHORT ON TIME?": "[HALFROX NOTE]"
Line beneath: "New to this? [BEGINNER SCALING]"

═══ SLIDE 5 — FORM · [MOVEMENT] ═══   [OMIT ENTIRELY ON COLLAPSE DAYS]
Yellow header: "FORM · [MOVEMENT]". SETUP / EXECUTE / AVOID blocks.

These cues come from our app's movement library. Reproduce them verbatim as separate
bullets — don't merge them into run-on lines, don't trim, don't reword. The layout
adapts to the text, not the reverse:

SETUP
[VERBATIM CUES, one per bullet]

EXECUTE
[VERBATIM CUES, one per bullet]

AVOID
[VERBATIM CUES, one per bullet]

═══ SLIDE 6 — APP PITCH + CTA ═══
Same as W3D1's slide 6. No changes.

Deliver all [N] PNGs. Don't tell me they're verified — I'll check them.
```

---

## 🎬 WORKING REEL PROMPT (v9)

```
Build the Week [W] · Day [D] reel for Hybrid Rockstar. Vertical Instagram Reel animation,
1080×1920 (9:16), 4 scenes with cuts, ~13–16 seconds, exported as MP4.

Use the WEEK 3 DAY 1 reel in this document as the format reference throughout — scene
structure, timing, animation style, type hierarchy, layout, transitions. Read its build
and its prompt in this chat and follow both. Where I don't specify something below,
take it from W3D1's reel.

FIRST — confirm before building:
Is the W3D1 reel present in this document? If yes, quote its scene 4 (CTA) text back to
me character for character — don't correct or normalise it, quote exactly what's there.
If the W3D1 reel is not in this document, stop and tell me.

═══ GLOBAL ═══
Black #000000 · white #FFFFFF · brand yellow #FFED00. Three colours only — no green,
blue, orange or red, regardless of which training block this workout comes from.
Barlow Condensed Bold 700 for the wordmark and impact headlines, loaded via the Google
Fonts <link> and rendered live in the browser. A clean legible non-condensed sans for
workout data.
Embed images as inline data URIs. Export MP4.

For the scene 1 photo, reuse the same ~135KB resized JPEG from the carousel intro slide
— not the full-resolution source.

═══ SCENE 1 — HOOK (~3s) ═══
The photo full-bleed, treated as W3D1's reel hook photo is (B&W, darkened).
Animate in: wordmark "HYBRID" WHITE + "ROCKSTAR" YELLOW.
Note this differs from the carousel intro slide, where both words are yellow.
Then "WEEK [W] · DAY [D]", then the session name "[SESSION NAME]".
Must move within the first second.

═══ SCENE 2 — WORKOUT (~5s) ═══
Solid black, text only, no screenshot. Small "WEEK [W] · DAY [D]" header.
Animated build-on of "[SESSION NAME or ROTATION LABEL]" then the COMPLETE session,
every movement, in order — labels yellow, names white, distances/loads greyed:

[PASTE COMPLETE SESSION VERBATIM]

Every movement must appear on screen. Accessories may reveal as a GROUP after the main
lifts, but all must appear. Stagger them in fast. If they genuinely can't land legibly
in ~5s, let this scene run slightly long and report the total. Never cut movements to fit.

═══ SCENE 3 — HOW TO RUN IT (~4-5s) ═══
Solid black. Yellow header "HOW TO RUN IT".
Animate in: "[COACHING LINE]"

═══ SCENE 4 — CTA (~4s) ═══
Same as W3D1's reel CTA. Same text, same layout, same treatment.

Report the final duration and confirm MP4 export works. Deliver the file — don't tell
me it's verified, I'll check it myself.
```

**Carousel + reel are SEPARATE prompts.** Same day's verified content feeds both.
**Reel vs carousel:** reel = 4 scenes always; carousel = 4–6 slides. Reel has **NO form-cue scene** (form lives only on carousel slide 5). Reel hook wordmark = HYBRID white; carousel intro = both yellow. Both show the complete workout.

---

## ✅ PRE-FLIGHT — before sending either prompt

1. **Pull the day's content VERBATIM from `HR_PROGRAM_EXPORT.md`** — session name, the app's parenthetical (or confirm none), FullRox/HalfRox splits, every movement + sets/reps/load, warm-up/cooldown presence, stimulus/about/week_context, scaling notes. Never from memory. *(Caught W1D5 = Easy Run, not Engine.)*
2. **Form cues VERBATIM** from `SC_FORM_CUES_EXPORT.md` (4 lifts only: Squat, Bench, Deadlift, OHP) or `HR_PROGRAM_EXPORT.md`'s 8-movement library. Apply the slide-5 logic below.
3. **Cover subline:** app's parenthetical → else stimulus opening phrase verbatim → else none.
4. **Confirm the CD chat contains the reference day's build.** If not, attach the reference slide as an image.
5. **Include the quote-back check.**
6. **Photo:** source ≥1080×1350; instruct the resize-to-JPEG-before-embed.
7. **No "rebuild"/"fix"/"don't touch" framing.** Fresh instructions only.

---

## 🔑 Slide-5 (form/technique) cue logic — VERIFIED sourcing (carried from v7)

1. **Station day** (Movement Pattern, Simulation) → **HR's 8-movement library** (`hyroxMovements.ts` in `HR_PROGRAM_EXPORT.md`): Ski Erg, Sled Push, Sled Pull, Burpee Broad Jumps, Rowing, Farmer's Carry, Sandbag Lunges, Wall Balls — Setup / Execution / Common Mistakes / Substitutions each.
2. **Strength day with a lift SC covers** → **SC's form cues** — only **4 lifts**: Squat, Bench Press, Deadlift, Overhead Press. No accessories.
3. **Neither covers the day's key movements** (RDL, lunges, DB/KB accessories, runs) → **collapse to 4–5 slides, no slide 5.** Default, not a failure.
4. **Fresh research** → deliberate, occasional featured post only. **Never** a daily gap-filler.

⚠️ **Station-day repeat risk:** W1D4 / W2D4 / W3D4 all run the same 8 stations. **The doc doesn't log which station each post covered.** W3D4 used **Wall Balls**. Log the rest.

---

## 📋 CARRIED FORWARD FROM v7 (unchanged)

- **🎁 Launch offer (LOCKED):** First 100 to download get everything free for life. ⚠️ Verify deliverability (promo / founding-user flag / IAP comp) before it goes live.
- **Two offers:** free 12-week program = reach engine; first-100 = install hook. Both → download the app.
- **6-slide carousel structure** (intro / cover / workout / coaching / form / pitch) + **tier rule** (FullRox slide 3, HalfRox note slide 4) + **collapse allowance** (4–5 slides rather than pad).
- **🔒 COMPLETE-WORKOUT ACCURACY RULE:** the workout slide AND reel workout scene show **every movement**, in order. A post presenting "the day's workout" while showing a subset misrepresents it. Accuracy over brevity. *(Locked after a W3D1 reel dropped B1/B2/B3.)*
- **Daily model:** 1 workout/day serialized. ⚠️ **64 sessions over 12 weeks**, not 5×/week — counts `[5,5,5,6,6,6,5,6,6,5,5,4]`.
- **CD builds reels directly** (HTML/CSS animated → MP4).
- **Reach playbook:** following ≠ reach · engage outward 15–20 min/day · 6 FB HYROX groups = the warm-audience unfair advantage · engagement velocity (first 30–60 min) · saves + DM-shares are the strongest 2026 signals · reels = discovery, carousels = conversion.
- **Website Daily-Workouts gallery** (CC job on `~/dev/hybrid-rockstar-site`; `WORKOUTS` array in `index.html`; cards link OUT to posted IG reels; thumbnails `w{W}d{D}-{slug}.png`; **gate = Mark supplies the IG permalink**; confirm permalink→day mapping).
- **Cross-platform:** IG carousel + reel · X = the single workout-card image · FB groups = card or carousel. Slide 6 doubles as the X/FB card.
- **Caption format:** first line = a HOOK (never "Day 1 Week 1" — IG truncates). Then workout → app pitch → link in bio + a question.
- **Day 1 · Week 1 exemplar:** Strength A (Lower-body anchored). FullRox ~55 min: warm-up 5m → A1 Back Squat 4×5 @ RPE 6-7 → A2 RDL 3×8 @ RPE 6 → B1 Walking Lunges 3×20 → B2 Plank 3×45s → cooldown 5m. HalfRox ~30 min: A-pair only. Slide 5 = Back Squat (SC cues).

---

## 🚧 Open items

1. **Verify the reel-CTA wordmark colour** from the W3D1 reel artifact — v8 inferred it; still unconfirmed.
2. **Check prior carousels' slide 1 for the serif bug.** CD said the canvas-composite path was used for **every** photo intro slide. If W1D1–W3D1 slide 1s are serif, this was never a regression — it shipped broken from the start and only got caught July 15. CD offered to re-render them.
3. **Log which station each Movement Pattern post covered** (W1D4, W2D4 unknown; W3D4 = Wall Balls).
4. **Sled-push photo source is 547×365** — too small; the W3D4 upscale is soft. Find ≥1080×1350.
5. **Verify launch-offer deliverability** before the offer goes live.
6. **Export the FINAL current set** from CD — earlier zip is stale.
7. **Draft launch caption + pinned explainer.**
8. **Batch the rest of the program** off the v9 prompts, W3D1 as anchor.

---

## 📓 Post log
*(date · platform · type · workout · **form slide used** · caption gist)*
- **W3D4** · IG · carousel + reel · Movement Pattern · **form slide: Wall Balls** · built July 16

⚠️ **Log the form slide** — the station library has only 8 movements across many station days.

---

## 🔗 Cross-references
**HR_MASTER v11** · **HR_PROGRAM_EXPORT.md** (slide 3/4/5 source) · **SC_FORM_CUES_EXPORT.md** (slide-5 source, 4 lifts) · **PP_X_POSTS v30** (frozen format discipline) · **SCS_MP v6.14**

---

## 📅 Changelog

**v9 (July 16, 2026):** **Corrects v8, which was wrong.**
- 🚨 **REAL root cause found:** oversized base64 photo → export serializer bails → canvas fallback → `ctx.font`/`fillText` silently drops the webfont → serif. **Only slide 1 (the photo slide) was ever affected.** Fix = resize photo to ~135–200KB JPEG before embedding + live browser render + live capture.
- ❌ **v8's diagnosis retracted.** "Unassigned elements" and "pointer instructions" did NOT cause it. The worse-worded reel prompt rendered correctly because reels never touch the canvas path. **Pointers are load-bearing and work** — prior carousels live in the same document.
- 🔧 **v8's subheadline "resolution" was FALSE.** W3D1's markup is `Full HYROX<br>Training Program` → **"FULL HYROX / TRAINING PROGRAM"**. v7's prompt-template section was right; its "built record" was a wrong description. Claude overruled a working prompt with a wrong summary and shipped the error 3×.
- 🔑 **RULE #0, sharpest form: the artifact is the source; a doc describing the artifact is not.** When they disagree, read the markup.
- ➕ **The layout has never been written down — it lives in the artifacts.** Prompts MUST reference a prior day's build in the same CD document. That's the spec.
- ➕ **Quote-back verification** before building (this caught the subheadline error).
- ➕ **CD facts:** can't see other CD chats; files persist but summaries drop detail; CINC ≠ CD.
- ➕ **Build fresh, never "rebuild"** — no scope annotations, no "this is broken."
- ➕ **CD self-verification is worthless** (4 false "verified by looking at the pixels" in one session). Mark checks the file.
- 🔧 **Cover frame is the design**, not a bug (W3D2 has it). Cover subline is **parenthesized**.
- 🔒 **Subline rule extended:** app's parenthetical → else the stimulus's opening phrase verbatim → else none. Never free-authored.
- ➕ **Photo rule:** large source (≥1080×1350) → downscale to 1080×1350 JPEG → embed. Large source, small embed.
- ➕ Working carousel + reel prompts stored — the exact shapes that produced a clean W3D4.

**v8 (July 16):** ⚠️ **Root-cause section WRONG — superseded.** Its prompt-hygiene rules survive as hygiene, not cause.
**v7 (July 13):** CD builds reels directly. Locked reel format, wordmark table, Complete-Workout rule, social=brand-yellow-only. ⚠️ Its "Day-1 built record" subheadline is wrong.
**v6 (July 2):** Day-1 carousel built + locked as template-setter.
**v5 (July 2):** 6-slide carousel; slide-5 cue logic; Day-1 exemplar; reach playbook.
**v4–v1 (July 1):** structure, per-post spec, 2026 research, extraction from HR_MASTER.

---

*The HR social plan. The artifact is the source — when a doc and a slide disagree, read the slide. The layout lives in the builds, so every prompt references a prior day in the same CD document. Photo slides: large source → 1080×1350 JPEG → live browser render → live capture. Never canvas text. CD doesn't verify its own work; Mark checks the file.*
