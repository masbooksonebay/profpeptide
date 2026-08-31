# HR SOCIAL — v17

**Status:** ACTIVE. Full replacement, supersedes v16.
**Date:** August 11, 2026
**Scope:** carousel and reel production · caption format · the seven distribution surfaces · per-surface metadata.

---

# 🔴 0. LOAD PROTOCOL — DO ALL OF THIS BEFORE DRAFTING ANYTHING

**Trigger: "load HR social" (or HR instagram, HR reels, HR carousels — same thing).**

Mark says two words. This section is what those two words mean. **Do every step. Do not skip a step because a previous session covered it.**

### Step 1 — Read these, in this order

| # | Doc | Why |
|---|---|---|
| 1 | **THIS DOC, in full** | Locked formats live in §1b. Not skimmable. |
| 2 | **HR_PROGRAM_EXPORT.md** | The session content. Read the week AND the movement technique library entries for every station in it. |
| 3 | **HR_MASTER** *(current version)* | App state, brand standards, HYROX nominative use |
| 4 | **SC_FORM_CUES_EXPORT.md** | Only on strength days — slide 5 |
| 5 | **HR_YOUTUBE_TITLES_DESCRIPTIONS** *(current)* | Only when producing YouTube metadata. ⚠️ Its simulation hashtag is wrong — see §1. |

### Step 2 — 🔴 LOOK AT THE LIVE FEED

**`instagram.com/hybridrockstarapp` — open it and look at the most recent 6-9 tiles.**

⚠️ **This is not optional and it is not a formality.** The published feed is a source of equal standing to this document. Formats visible in the grid are binding whether or not they are written down here.

**What to check every time:**
- The cover-slide eyebrow format on the two or three most recent posts
- Which session was posted last — that determines what "next" means
- Whether anything in the recent grid contradicts this doc

> **Recorded failure, Aug 11, 2026:** W7D4 prompts were written from the docs alone. The `[ BLOCK ]` tag was missing from the cover eyebrow and the reel hook because v16 described slide 2 only as "yellow eyebrow, headline, optional subline" and never said what the eyebrow contains. **The correct format was visible in the live grid on every W7 tile.** Docs were read; the feed was not. The carousel published wrong.

### Step 3 — Confirm the session before writing a word

State back, and get Mark's confirmation:
- **Which session** is being built (Week N, Day N, session name)
- **The block tag** for that week — see §1b
- **Slide count** — 5 or 6, per the slide-5 rule
- **The hashtag** for that session type

### Step 4 — Report what you read

Name the docs read and say explicitly that the feed was checked and what the most recent post was. **If the feed could not be reached, say so — do not proceed silently.**

---

## 🔒 0b. THE STANDING RULE — DO NOT CHANGE A LOCKED FORMAT

**No element of a locked template or format changes without Mark's explicit go-ahead. This includes changing it as a test.**

Flagging a change after making it is not asking. Locked formats are product decisions and product decisions are Mark's.

> **Recorded failure, Aug 11, 2026:** §10's note that W1D1's opening frame read "FULL 12-WEEK HYROX PROGRAM" was acted on unilaterally — the reel hook was rewritten to lead with that line instead of the session name. The doc itself calls that observation "one data point, not a finding." The reel built wrong. **The note was a proposal to be raised, not an instruction to execute.**

If a doc note suggests a format change, **raise it as a question and wait.**

---

## 🔒 1b. LOCKED FORMAT ELEMENTS — SPECIFY THESE IN EVERY PROMPT

**Any element listed here is wrong if a prompt leaves it to CD to invent. A prompt that omits one is incomplete.**

### The block tag — `[ BLOCK ]`

Every session sits in a program block, and the block name renders **in brackets, in yellow, on the same line as week and day.**

| Weeks | Block tag |
|---|---|
| 1–3 | `[ FOUNDATION ]` |
| 4–6 | `[ BUILD ]` |
| 7–10 | `[ PEAK ]` |
| 11–12 | `[ RACE PREP ]` |

⚠️ **Verify the block against HR_PROGRAM_EXPORT's week header** — it states the block for each week explicitly. Do not derive it from the table above without checking.

### Carousel cover (slide 2) — exact structure

```
Yellow eyebrow:  WEEK 7 · DAY 4 · [ PEAK ]
Headline:        TECHNIQUE EMOM
Subline:         Movement quality focus.
```

Nothing else. **No program-level line. No added copy.**

### Reel hook (Scene 1) — exact structure

```
WEEK 7 · DAY 4 · [ PEAK ]
TECHNIQUE EMOM
```

Nothing else. **No program-level line.**

### Carousel intro (slide 1)

Bottom line: `WEEK N · DAY N → SWIPE`

⚠️ **The intro subheadline is a template token.** Leave it exactly as the template defines it — never substitute or restate it in a prompt.

### Image fit — ⚠️ OPEN

CD zoomed/cropped the source photo on the W7D4 build with no instruction to do so. **Whether the template defines image fit or leaves it open is UNVERIFIED.** Until resolved, state the intended crop explicitly in every prompt.

**Resolve in the next CC session on `~/dev/hybrid-rockstar-site`** — read the markup and report whether fit is template-controlled. Batch with the §12 comment fix.

---

## 1. 🔴 HASHTAG CORRECTION — `#racesimulation` IS NOT A REAL TAG

**`#hybridracing` replaces `#racesimulation` on every simulation-day post.**

`#racesimulation` appears in **HR_YOUTUBE_TITLES_DESCRIPTIONS v4** as the tag for every simulation session. It has no meaningful audience. `#hybridracing` is the term the community actually uses.

**Affected sessions** — every simulation day: **W6D6** (Half-Sim stations 1–4), **W8D6** (Half-Sim stations 5–8), **W10D5** (Full Sim). Verify the full list against the titles doc before batch-correcting.

### The tag set

Three base tags on every post:

```
#HYROX #hyroxtraining #hybridtraining
```

Plus one by session type:

| Session type | Tag |
|---|---|
| Strength A / B | `#strengthtraining` |
| Easy Run · Recovery Run · Tempo Run · Engine | `#running` |
| Compromised Running | `#hyroxstations` |
| **Simulation (Half-Sim, Full Sim)** | **`#hybridracing`** |
| Technique EMOM | `#hyroxstations` |

> **HR_YOUTUBE_TITLES_DESCRIPTIONS v4 needs correcting at the source.** Until it is, do not copy its simulation-day hashtag verbatim.

---

## 2. THE TEMPLATE SYSTEM — GITHUB IS THE ONLY REFERENCE

CD reads templates **from the repo, never from chat and never from a prior build.**

Repo: `masbooksonebay/hybrid-rockstar-site`, branch `main`

| Asset | Files |
|---|---|
| **Carousel** | `social/HR_CAROUSEL_TEMPLATE.dc.html` + `social/support.js` |
| **Reel** | `social/HR_REEL_TEMPLATE.dc.html` (wrapper) + `_scene.jsx` + `_assets.js` + `social/animations.jsx` |

All four reel files are required — the wrapper x-imports the other three with `./`-relative paths, so they must sit side by side.

**Edit ONLY the `[BRACKETED]` tokens.** The templates encode layout, typography, colour and animation. Do not restate any of that in a prompt.

> **Why GitHub-only:** a stale in-chat template copy caused a reel hook bug that cost a day. **The artifact is the source** — when a doc and a build disagree, read the markup.

### Quote-back verification — every build, no exceptions

Before building, CD quotes back **character for character**, without correcting or normalising:

- **Carousel:** the intro slide's subheadline line, and the slide structure the template defines.
- **Reel:** the Scene 4 CTA wordmark element from `_scene.jsx`, and the x-import line from the wrapper.

If CD can't read the files from GitHub, it stops and says so.

---

## 3. CAROUSEL SPEC

**4–6 slides, 1080×1350 each.**

| Slide | Content |
|---|---|
| 1 | Intro — full-bleed photo, bottom line "WEEK N · DAY N → SWIPE" |
| 2 | Cover — solid black, **eyebrow per §1b**, headline, subline |
| 3 | The workout — **FullRox**, complete |
| 4 | How to run it — coaching + **HalfRox note** |
| 5 | Cues — conditional (see below) |
| 6 | Pitch — template tokens only |

**Slide 5 logic:** HR station technique on station days · SC 4-lift cues on strength days · **collapse the slide entirely** when neither applies. Never pad with research. A run day is typically 5 slides; a station or lift day is 6.

**Slide 1 photo method — both steps matter:**
1. **Resize to 1080×1350 JPEG (~200KB) BEFORE embedding.** An oversized base64 image trips the export serializer, which falls back to canvas compositing and **silently loses the webfont**.
2. Load Barlow Condensed via the Google Fonts `<link>` and capture the **live browser render**. No canvas text, no `fillText`.

---

## 4. REEL SPEC

**1080×1920 (9:16), 4 scenes with cuts, ~13–16 seconds, MP4.**

| Scene | Content | Duration |
|---|---|---|
| 1 | Hook — photo + **week/day/block per §1b** + session name | ~3s |
| 2 | Workout — **complete session** | ~5s |
| 3 | How to run it | ~4–5s |
| 4 | CTA — **fixed, no edits** | — |

**Scene 1 uses the same resized JPEG as the carousel intro**, not the full-resolution source.

Longer sessions may need scene 2 to run over — **let it, and report the total.** Never cut movements to fit.

---

## 5. LOCKED CONTENT RULES

**Complete-Workout Accuracy.** The workout slide and scene show **every movement**. Abridging misrepresents the session. Locked after a W3D1 reel dropped B1/B2/B3.

**Social is brand-yellow only.** Block colours — green, blue, orange, red — are **app UI only**, never on social.

**Wordmark colour is format-specific:**

| Surface | Treatment |
|---|---|
| Carousel intro | both words yellow |
| Carousel cover + pitch | HYBRID white · ROCKSTAR yellow |
| Reel hook | HYBRID white · ROCKSTAR yellow |
| Reel CTA | both words yellow |

**Subline rule.** The app's parenthetical if it has one → else the stimulus opening phrase **verbatim** → else none. **Never free-authored.**

**Block-letter prefixes (A1/B1/C1) are strength-day only.** Run, simulation and compromised-running days list blocks bare.

**FullRox on slide 3; HalfRox as a note on slide 4.** ⚠️ **Exception — W6D6 and other race-rehearsal sessions:** the program states FullRox is *strongly recommended* and HalfRox is a **fallback only**. Say so rather than presenting them as equal options.

**CD facts:** per-chat projects, can't see other CD chats, self-verification is worthless (Mark checks the file), always build fresh — never "rebuild."

---

## 6. CAPTION FORMAT

**First line is a HOOK.** Never "Week 6 Day 6" — Instagram truncates after one or two lines and the session label wastes the only real estate that matters.

Then: workout and notes → app pitch → link in bio → **a question**.

No clickable caption links. Bio link → App Store or the landing page.

> The closing question is the one engagement lever a workout post can reliably pull. Comments are cheap for the reader and count for distribution.

---

## 7. THE SEVEN SURFACES

| Surface | Publishes | Per-post cost |
|---|---|---|
| **Instagram** — carousel + reel | Manual | 2 assets |
| **Facebook Reels** | **Auto** from Instagram | Zero |
| **Threads** | **Auto** | Zero |
| **YouTube Shorts** | Manual | 1 upload + metadata |
| **TikTok** | Manual | 1 upload + caption |
| **X** | Manual, occasional | Ad hoc |
| **hybridrockstar.app** | Manual, few posted | — |

**Three manual surfaces × 64 sessions ≈ 190 uploads** per cycle, on top of asset production. That's the number any new surface has to beat.

> ⚠️ **The auto-push chain is undocumented and unverified.** Facebook and Threads publish automatically, but *what triggers them* has never been written down. **If Instagram posting ever changes, both may silently stop.**

**Automation ceiling:** CC has no browser. CINC has a browser but **cannot operate a local file picker**, so it cannot select an MP4. Manual uploads stay manual.

---

## 8. PER-SURFACE METADATA — NOT INTERCHANGEABLE

The same MP4 goes everywhere. **The metadata does not port.**

### YouTube Shorts
Title carries the search phrase + week/day + brand. Description is three sentences plus a **live App Store link** — the only surface besides the website where a clickable link sits with the content. Full set of 64 in **HR_YOUTUBE_TITLES_DESCRIPTIONS v4** *(⚠️ its simulation-day hashtag is wrong — see §1)*.

### TikTok
**Four differences from YouTube:**
1. No clickable caption link — "link in bio"
2. **Short captions** — TikTok truncates hard
3. No title field — one caption, hashtags inline
4. **Hashtags carry more weight** than on YouTube

**Upload settings:** enable Music copyright check and Content check lite. **Clear the auto-filled location** — it defaults to San Clemente.

**Captions exist for Week 1 only.** Weeks 2–12 held pending performance data.

### Instagram · Facebook · Threads
Facebook and Threads inherit whatever Instagram posts.

### X
Occasional, undefined. **PP has a mature X practice.** If X becomes a real HR channel, adapt that rather than reinventing.

---

## 9. hybridrockstar.app — THE ONLY OWNED SURFACE

Six of seven are **rented**. Reach comes from Meta, Google and ByteDance, and each keeps the audience.

**Why the website is different:** the App Store link sits with the content · pages are indexed and searchable · content accrues rather than scrolling away. Sixty workout videos on an owned domain is a real SEO asset.

**The precedent is in the portfolio.** PP's entire strategy rests on owning searchable pages, and it produces revenue.

**Currently:** a few sessions posted, not scoped. Open questions — what a session page looks like, all 64 or a subset, reel or carousel, how it links back. **Of everything here, it has the most durable upside.**

---

## 10. WHAT ACTUALLY MOVES THE NUMBERS

**Distribution is not the constraint. Retention is.**

YouTube views ran **96 → 45 → 34 → 5** across the first four Shorts. More surfaces don't fix that — the same asset lands the same way on all seven.

Watch time, retention and click-through outrank hashtags everywhere. The TikTok equivalent is completion rate. Both come down to whether the first second stops the scroll.

### ⚠️ The W1D1 observation — A PROPOSAL, NOT AN INSTRUCTION

W1D1 is the only Short that performed. **One data point.** It is worth discussing whether the hook could be tested.

🔴 **DO NOT ACT ON THIS.** §0b applies: the reel hook is a locked format and changing it is Mark's call. **Raise it as a question; never build it.**

> **This note was acted on unilaterally on Aug 11, 2026 and produced a wrong reel.** The warning above exists because of that.

**Operating notes:** batch rather than drip — YouTube Studio and TikTok Studio both schedule at upload, so seven in one sitting with staggered dates gives a daily cadence without a daily task.

---

## 11. ⚠️ HR_PROGRAM_EXPORT vs THE APP

**Every carousel and reel is built from HR_PROGRAM_EXPORT.md — an ad-hoc transcription with no generator, not in the repo.**

**W1D1 differs between the export and the app** — different RPEs, an extra movement, a longer plank. **The app is the artifact.**

Unresolved. Risk scales with how many numbers a session carries — negligible on a recovery run, material on a Half-Sim or a Technique EMOM. **Verify against `hr-cycle-1.json` when the numbers matter.**

---

## 12. STATE — August 11, 2026

**Posted to Instagram:** through **W7D4** (verified in the live grid). W7D1 Strength A · W7D2 Easy Run · W7D3 Strength B (Light) · W7D4 Technique EMOM carousel.

⚠️ **W7D4 carousel published from a prompt that omitted the `[ PEAK ]` eyebrow.** Cover format may be inconsistent with the W7D1–D3 covers beside it. **Mark to compare and decide on deletion.**

⚠️ **W7D4 reel rebuilt** — the first build carried a wrong hook (program line instead of session name) and an unexplained image zoom.

**Next session: W7D5 — Engine (moderate).**

**Outstanding:**
- **W7D3 prompts** drafted but never recorded in a ref doc
- Reel template's build-method comment self-contradicts — the "both words yellow" parenthetical sits on the CTA line but describes the hook/carousel distinction. Fix in `~/dev/hybrid-rockstar-site`. Markup itself is unambiguous.
- **Image fit** — is it template-controlled? See §1b. Batch with the comment fix.
- Correct `#racesimulation` → `#hybridracing` in HR_YOUTUBE_TITLES_DESCRIPTIONS v4

---

## 13. CROSS-REFERENCES

- **HR_MASTER v15** — app state, brand standards, HYROX nominative-use guide
- **HR_PROGRAM_EXPORT.md** — the program + movement technique library
- **SC_FORM_CUES_EXPORT.md** — SC 4-lift cues (slide 5 on strength days)
- **HR_YOUTUBE_TITLES_DESCRIPTIONS v4** — all 64 titles ⚠️ *simulation hashtag wrong*
- **HR_TIKTOK_CAPTIONS_W1** — Week 1 only
- **SCS_MP v6.25** — execution model, prompt delivery

---

## 📅 Changelog

**August 11, 2026 (v16 → v17):**
- 🔴 **§0 LOAD PROTOCOL added at the top.** "Load HR social" now carries a four-step checklist: read the doc set, **check the live Instagram feed**, confirm the session with Mark, report what was read.
- 🔴 **§0b added** — no locked format changes without Mark's explicit go-ahead, including as a test.
- 🔴 **§1b added** — locked format elements that must be specified in every prompt: the `[ BLOCK ]` tag, the exact carousel cover structure, the exact reel hook structure, the intro subheadline as a template token, and image fit (open).
- 🔧 **§10's W1D1 note rewritten** as an explicit do-not-act proposal.
- ➕ State updated through W7D4; W7D3 prompts and the image-fit question logged as outstanding.

**August 6, 2026 (v16):** Hashtag correction, template system, seven surfaces, per-surface metadata.

---

*Two words trigger this doc. §0 is what they mean — and the feed is a source, not a formality.*
