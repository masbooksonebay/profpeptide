# HR INSTAGRAM — HOW THE PROCESS ACTUALLY WORKS
**v3 · Updated 2026-08-26. Supersedes v2.**
**Operational supplement to HR_SOCIAL v19** — v19 is the authority; this is the how-to for the person driving it.

---

## v2 → v3 CHANGELOG

| Change | Detail |
|---|---|
| 🔴 **Failure #7 recorded** | The monochrome rule had NO written home — it lived only in one CD chat's context. Two independent sessions failed identically when that context was absent/decayed. Fixed by writing the photo-prep contract into the templates (`951f210`). |
| 🆕 **The prompt-drafting rule** | The full doc read attaches to the DELIVERABLE, not the request phrasing. A batched request produced a from-memory CD prompt that couldn't supply a rule no doc contained. |
| 🆕 **Delivery rules in every prompt** | Until the templates carry them: exports/W#D#/ structure, prior-day naming, HR_W#D#_REEL.mp4 named on save, day's folder/file ONLY delivered. |
| **Failure #4 note** | The image-fit question is closed by `951f210`'s verbatim-placeholder rule. |

---

## v1 → v2 CHANGELOG

| Change | Detail |
|---|---|
| 🔴 **Reel filenames corrected** | v1 listed `social/_scene.jsx` and `social/_assets.js`. **Both wrong** — see §THE REEL PROMPT. |
| 🆕 **The source photo** | Mark attaches it to the CD chat's library. Never documented; a build stalled on it. |
| 🆕 **Build order + one chat** | Carousel first, then the reel into the same CD chat. |
| 🆕 **Failure #6** | The reel-filename error, and why the quote-back didn't catch it. |

---

## THE TRIGGER

Mark says **"read hr instagram ref docs and draft prompts for next workout"** or similar. That short phrase means everything in §0 of HR_SOCIAL v19.

🔒 **The read is NOT conditional on the phrasing.** Any request that produces an HR Instagram CD prompt — batched behind other asks, phrased casually, "give me the cd prompt" — triggers the full doc read FIRST. Failure #7's proximate cause was a prompt drafted from session memory because the request was batched and the trigger phrase absent. Session memory cannot supply a rule no doc contains, and it won't reliably supply the ones the docs do.

**The output is three things, every time:**
1. A CD prompt for the **carousel**
2. A CD prompt for the **reel**
3. The **caption**, as plain text Mark pastes into Instagram

⚠️ **All three in one response.** Don't deliver the carousel and wait.

---

## 🔒 THE PHOTO AND THE BUILD ORDER

**Mark attaches the session photo to the CD chat's library before the build.** CD uses whatever is attached. There is no repo photo source and CD does not generate one.

**Both assets are built in ONE CD chat, carousel first.** When the carousel finishes, Mark sends the reel prompt into the same chat — the reel's Scene 1 reuses the carousel intro's already-resized 1080×1350 JPEG.

⚠️ **CD's context can be trimmed mid-session.** If CD says it can't see the carousel it built earlier, the carousel is rebuilt first — the reel cannot inherit a photo CD can no longer see.

---

## WHAT TO READ, IN ORDER

| # | Source | What you need from it |
|---|---|---|
| 1 | **HR_SOCIAL v18 §0b and §1b** | The locked format elements. Not skimmable |
| 2 | **HR_PROGRAM_EXPORT.md** | The session — every movement, sets, reps, RPE, durations, both Full ROX and Half ROX, plus session notes |
| 3 | **SC_FORM_CUES_EXPORT.md** | **Strength days only** — slide 5 |

**Finding the session in HR_PROGRAM_EXPORT:** grep for the week header, then read the day block. Each day gives `session_type`, `stimulus`, the Full ROX block list with durations, the Half ROX version, and session notes containing `about`, `week_context`, `block_context`, `scaling.beginner`, `scaling.advanced`, `substitutions`.

⚠️ **The week header states the block explicitly.** Read it. Don't derive `[ PEAK ]` from the weeks table without checking.

---

## 🔴 THE FEED CHECK — and what to do when you can't

§0 Step 2 requires opening `instagram.com/hybridrockstarapp` and looking at the recent tiles.

⚠️ **Claude in chat cannot reach it — Instagram is authenticated.**

**State plainly that the feed was not checked**, in the response, every time.

⚠️ **Also state the assumption about which session is next.** Say it explicitly: *"This assumes W8D5 posted."*

---

## DETERMINING THE SESSION

**Next session = the one after whatever was last posted.** Weeks vary in length — Week 7 had 5 days, Week 8 has 6. Check the week's day list rather than assuming six.

| Session type | Slides | Why |
|---|---|---|
| Strength A / Strength B | **6** | Slide 5 is form cues |
| Everything else | **5** | No lifts, so slide 5 collapses |

**Hashtags** — three base tags plus one:

```
#HYROX #hyroxtraining #hybridtraining
```

| Session | Fourth tag |
|---|---|
| Strength A / B | `#strengthtraining` |
| Easy / Recovery / Tempo Run, Engine | `#running` |
| Compromised Running, Technique EMOM | `#hyroxstations` |
| Simulation | `#hybridracing` |

⚠️ **Never `#racesimulation`.** It's in HR_YOUTUBE_TITLES_DESCRIPTIONS v4 and it's wrong.

---

## THE CAROUSEL PROMPT — structure

```
Build the W{N}D{N} carousel. {5|6} slides, 1080×1350 each.

⚠️ Read the template from GitHub, branch main:
masbooksonebay/hybrid-rockstar-site
· social/HR_CAROUSEL_TEMPLATE.dc.html
· social/support.js

Edit ONLY the [BRACKETED] tokens. The template encodes layout,
typography, colour and animation — do not restate any of it.

⚠️ QUOTE BACK BEFORE BUILDING, character for character: the
intro slide's subheadline line, and the slide structure the
template defines. If you can't read the files from GitHub,
stop and say so.

── SLIDE 1 — INTRO ──
Full-bleed photo. Bottom line: WEEK N · DAY N → SWIPE
⚠️ The subheadline is a template token — leave it exactly as
the template defines it.
⚠️ Resize the photo to 1080×1350 JPEG (~200KB) BEFORE
embedding. Load Barlow Condensed via the Google Fonts <link>
and capture the live browser render — no canvas text.
⚠️ Do not zoom or crop the source photo. Full bleed.

── SLIDE 2 — COVER ──
Solid black.
Yellow eyebrow:  WEEK N · DAY N · [ BLOCK ]
Headline:        SESSION NAME
Subline:         {one line from the stimulus}
Nothing else. No program-level line, no added copy.
⚠️ Wordmark: HYBRID white · ROCKSTAR yellow.

── SLIDE 3 — THE WORKOUT (Full ROX, complete) ──
{every movement with sets/reps/RPE, or every block with
durations for a run}
Total {N} min
⚠️ Every movement. No abridging.
⚠️ {Keep the A1/A2/B1 prefixes — strength day}
   OR {No A1/B1 prefixes — those are strength-day only}

── SLIDE 4 — HOW TO RUN IT ──
Coaching: {from stimulus + week_context + scaling}
HalfRox note: {N} min — {the Half ROX version}

── SLIDE 5 — FORM CUES (strength days only) ──
{MOVEMENT NAME}
· {4 cues verbatim from SC_FORM_CUES_EXPORT}
⚠️ Verbatim from the cue library. Do not reword.

── SLIDE {5|6} — PITCH ──
Template tokens only.
⚠️ Wordmark: HYBRID white · ROCKSTAR yellow.

── STANDING ──
⚠️ Brand yellow only. No block colours — green, blue, orange,
red are app UI, never social.
⚠️ Build fresh. Do not rebuild from a prior chat.
```

---

## THE REEL PROMPT — structure

🔴 **The filenames below are CORRECTED.** v1 of this doc and HR_SOCIAL v17 both said `social/_scene.jsx` and `social/_assets.js`. **Both were wrong.** CD's quote-back of the wrapper's own x-import reads `./animations.jsx ./HR_REEL_TEMPLATE_assets.js ./HR_REEL_TEMPLATE_scene.jsx`.

```
Build the W{N}D{N} reel. 1080×1920, 4 scenes with cuts,
~13-16s, MP4.

⚠️ Read all four template files from GitHub, branch main:
masbooksonebay/hybrid-rockstar-site
· social/HR_REEL_TEMPLATE.dc.html (wrapper)
· social/HR_REEL_TEMPLATE_scene.jsx
· social/HR_REEL_TEMPLATE_assets.js
· social/animations.jsx

All four are required — the wrapper x-imports the others with
./-relative paths, so they must sit side by side.

Edit ONLY the [BRACKETED] tokens.

⚠️ QUOTE BACK BEFORE BUILDING, character for character: the
Scene 4 CTA wordmark element from HR_REEL_TEMPLATE_scene.jsx,
and the x-import line from the wrapper. If you can't read the
files from GitHub, stop and say so.

── SCENE 1 — HOOK (~3s) ──
Photo, then:
WEEK N · DAY N · [ BLOCK ]
SESSION NAME
Nothing else. No program-level line.
⚠️ Use the SAME resized 1080×1350 JPEG as the carousel intro,
not the full-resolution source. Do not zoom or crop.
⚠️ Wordmark: HYBRID white · ROCKSTAR yellow.

── SCENE 2 — WORKOUT (~5s) ──
{the complete session}
⚠️ Complete session. Never cut movements to fit. If it runs
over, let it and report the total.

── SCENE 3 — HOW TO RUN IT (~4-5s) ──
{scaling, condensed}
HalfRox: {N} min.

── SCENE 4 — CTA ──
⚠️ Fixed. No edits.
⚠️ Wordmark: both words yellow.

── STANDING ──
⚠️ Brand yellow only. No block colours.
⚠️ Build fresh.
⚠️ Report the final duration.
```

---

## THE CAPTION — structure

```
{Hook — one line, a real coaching idea, not hype}

W{N}D{N} · {Session Name}
{the workout, same as slide 3}

{2-3 sentences of coaching — why this session exists, what
it's building toward, what the week_context says happens next}

{Scaling: beginner and advanced}

HalfRox: {N} min{, what's cut}.

Full 12-week HYROX program in the Hybrid Rockstar app — every
session, every scaling option, tracked.

Link in bio.

{One question to the reader}

#HYROX #hyroxtraining #hybridtraining #{session tag}
```

⚠️ **The hook should say something true and specific.** "The farmers carry is the station that decides your race, and most people train it too light" works. "Time to crush it" doesn't.

⚠️ **`block_context` is the best source for the coaching paragraph.**

---

## 🔴 THE SIX RECORDED FAILURES — don't repeat them

**1. The block tag was omitted (Aug 11).** W7D4 prompts were written from docs alone. `[ PEAK ]` was missing from the cover eyebrow and reel hook because v16 never said what the eyebrow contains. **The format was visible on every W7 tile.** The carousel published wrong.
→ **The block tag goes in both the cover eyebrow and the reel hook, every time.**

**2. A doc note was executed instead of raised (Aug 11).** §10 observed that W1D1's opening frame read "FULL 12-WEEK HYROX PROGRAM." That was acted on unilaterally and the reel hook rewritten. The doc itself called it *"one data point, not a finding."*
→ **A doc note suggesting a format change is a proposal. Raise it and wait.**

**3. A stale in-chat template caused a reel bug that cost a day.**
→ **GitHub is the only source. Never paste template contents into a prompt.**

**4. CD zoomed and cropped the source photo with no instruction to.** Whether the template controls image fit is **still UNVERIFIED.**
→ **State the intended crop explicitly in every prompt.**

**5. Block colours leaked into social.** Green, blue, orange and red are app UI.
→ **Brand yellow `#FFED00` only.**

**7. 🔴 The rule with no written home (Aug 25–26).** The monochrome intro treatment — a locked format element on every shipped carousel — existed in ZERO written sources: not the templates, not HR_SOCIAL, not this doc, not the prompts. It lived only in the original CD chat's accumulated context. When a fresh chat was opened (to save tokens) and then the old chat's context had decayed, BOTH produced color intros while quoting the template back accurately — reading and applying are separable. CC's diagnosis: zero commits to social/ since the last correct build; the shared input that failed was the invisible convention.
→ **Fix: the templates now carry the full photo-prep contract** (`951f210`): grayscale-first (pixel-verified R=G=B), then resize (~200KB — oversized base64 silently drops the webfont), verbatim placeholder replacement, stop-don't-deliver acceptance. Render-equivalence was proven byte-identical before pushing; rollback point `c44ee96`.
→ **The lesson that generalizes: any rule CD must follow lives in the template files.** Chat context is a cache, not a home. The same arc surfaced two more context-only conventions (minimum source resolution ≥1080×1350; export structure and delivery scope) — queued for the templates, carried in prompts until then.

**6. 🆕 The reel filenames were wrong in both ref docs (found Aug 23).** v17 §2 and v1 of this doc both listed `_scene.jsx` / `_assets.js`. The real names are `HR_REEL_TEMPLATE_scene.jsx` / `HR_REEL_TEMPLATE_assets.js`.
→ **Why it survived:** the quote-back happens *after* CD has already located the files, so a prompt naming them wrongly still produced a correct build. The error was invisible until CD quoted the x-import line back verbatim.
→ **The quote-back is worth more than it looks.** It doesn't just confirm CD read the template — it surfaces errors in the docs themselves. Read what CD quotes against what the doc says.

---

## THE STANDING RULE

🔒 **No element of a locked format changes without Mark's explicit go-ahead — including as a test.**

Flagging a change after making it is not asking. Locked formats are product decisions, and product decisions are Mark's.

---

## OPEN ITEMS

✅ **Image fit — CLOSED** by `951f210`: the placeholder's verbatim markup (object-fit:cover, object-position:center) is now an explicit contract item. The crop-position CHOICE (center vs biased) remains Mark's call per build when the source ratio forces a meaningful crop.

⚠️ **Two conventions still need template homes** (one CC pass, batch with the reel comment fix): minimum source resolution ≥1080×1350 with upscale-as-stop-condition · export structure (`exports/W#D#/`, prior-day naming, `HR_W#D#_REEL.mp4` on save, deliver the day's output only).

⚠️ **HR_YOUTUBE_TITLES_DESCRIPTIONS v4 still says `#racesimulation`** on every simulation day. Wrong at the source.

⚠️ **W7D4's missing `[ PEAK ]` eyebrow** — Mark to compare covers and decide on deletion.

⚠️ **W7D3 prompts** drafted but never recorded in a ref doc.

⚠️ **PP has no Instagram system at all** — the templates, `social/` folder and caption format are Hybrid Rockstar's. Queued separately.
