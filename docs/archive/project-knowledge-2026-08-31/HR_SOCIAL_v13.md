# HR Social — Promotion Plan (IG + FB + X) — v13

**Status:** ACTIVE REFERENCE — the Hybrid Rockstar social promotion plan across **Instagram + Facebook + X**.
**Version:** v13 (July 28, 2026) — 🔒 **THE RULE NOW COVERS CAROUSELS TOO.** v12 stated the carousel workflow was GitHub-direct, but the *stored* carousel prompt was still the v9 in-chat-reference version — the exact pattern v12 killed for reels, live in the prompt anyone would copy. **Four stale items corrected** (carousel prompt, wordmark table, post-tracking state, comment-fix queue item). CTA copy unified across both templates.
**Prior version:** v12 (July 24, 2026) — reel prompts point CD at GitHub, not at a prior in-chat reel.
**App:** Hybrid Rockstar. App repo `~/dev/hybrid-rockstar`; marketing site `~/dev/hybrid-rockstar-site` (hybridrockstar.app). On the App Store.

---

## ⚠️ WHY THIS VERSION EXISTS — four stale items, one root cause

Every one of these was a case of **the doc holding state the repo had moved past**:

| # | Stale item | Reality | Cost |
|---|---|---|---|
| 1 | Stored carousel prompt used "use WEEK 3 DAY 1 in this document as the format reference" | The GitHub carousel template has existed since v11 | Would break in any fresh CD chat — the same failure v12 fixed for reels |
| 2 | Wordmark table: "Reel — hook scene: HYBRID white, ROCKSTAR yellow" | The hook dropped ROCKSTAR entirely — it is a **HYBRID-only lockup**, white with a yellow underline bar (`8d59fb8`) | A prompt restating the old table would fight the template |
| 3 | Post-tracking state showed W4D5 as next in queue | W5D4 had shipped | Produced a wrong queue note in a live session |
| 4 | "Outstanding cleanup: fix the self-contradicting reel comment" | Already fixed in `8d59fb8`, weeks earlier | A CC session was dispatched to fix nothing |

**The rule that follows from this is hygiene rule 5 below: the doc holds RULES; the repo holds STATE.** Where the doc must record state, it carries a date and a commit hash.

---

## 🔒 THE RULE (extended v13) — every CD prompt points at GitHub, period

**Every CD prompt — reel AND carousel — directs CD to the template files on GitHub** (`masbooksonebay/hybrid-rockstar-site`, `main`, under `social/`). **Never reference a prior build in the CD chat as the format source** — not W3D1, not "the most recent reel in this chat," not any in-chat artifact.

Why this is final:
- **CD projects are per-chat.** An in-chat reference is valid only until the next fresh chat, then the prompt breaks and CD stops to ask.
- **The templates were built for exactly this.** A fresh CD chat with no history reads the private repo and builds correctly — proven at v10/v11 and again on every build since.
- **The templates are the source of truth** for scene/slide structure, timing, animation, typography, and colour. A prompt should not re-describe what the template already encodes — it points at the files and fills the tokens.

**Corollary — don't restate what the template encodes.** Colour tables, font weights, and wordmark splits inside a prompt recreate exactly the doc-vs-artifact drift that caused stale item #2. The one content rule that stays in prompts is the **complete-session / never-cut-movements guard**, because it governs content Mark pastes in, not template structure.

---

## 🧩 WORKING CAROUSEL PROMPT (v13 — GitHub-direct, replaces the v9 version)

```
Build the Week [W] · Day [D] carousel for Hybrid Rockstar — [N] slides, 1080×1350 each.

TEMPLATE — read from GitHub (masbooksonebay/hybrid-rockstar-site, main):
  social/HR_CAROUSEL_TEMPLATE.dc.html
  social/support.js
The template is the source of truth for layout, alignment, sizing, spacing, type
hierarchy, colour and treatment. Follow it exactly. Edit ONLY the [BRACKETED] tokens.

FIRST — confirm before building:
Quote back character for character from the file you just read — don't correct or
normalise: (1) the intro slide's subheadline line, and (2) the slide structure the
template defines. If you cannot read the files from GitHub, stop and tell me.

[IF RUN DAY — include this line:]
NOTE — THIS IS A RUN DAY. Do not apply A1/B1/C1 block-letter prefixes. Run days use
bare labels only, as shown in the workout block below.

═══ SLIDE 1 — INTRO ═══
Photo: the attached image, full-bleed, treated as the template's intro photo is.
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
[Yellow subline, parenthesized, beneath the headline: "([SUBLINE])"
 OR: No subline — this session has no parenthetical label in the app. Don't add one.]

═══ SLIDE 3 — THE WORKOUT ═══
Yellow header: "FULLROX · ~[NN] MIN"

[PASTE THE COMPLETE SESSION VERBATIM FROM HR_PROGRAM_EXPORT.md,
 INCLUDING warm-up / cooldown IF the day has them]

Every block appears — this is the complete session. Shrink the type if needed.
Never cut movements to fit.

═══ SLIDE 4 — HOW TO RUN IT ═══
Yellow header: "HOW TO RUN IT"
Main line: "[COACHING LINE — from stimulus/about/week_context]"
Callout, header "SHORT ON TIME?": "[HALFROX NOTE]"
Line beneath: "New to this? [BEGINNER SCALING]"

═══ SLIDE 5 — FORM · [MOVEMENT] ═══   [OMIT ENTIRELY ON COLLAPSE DAYS]
Yellow header: "FORM · [MOVEMENT]". SETUP / EXECUTE / AVOID blocks.
These cues come from our app's movement library. Reproduce them verbatim.

═══ SLIDE [LAST] — APP PITCH ═══
Per the template.

Report when the files are exported. Don't tell me it's verified — I'll check.
```

**Deliberately no longer in the prompt:** colour/typography/wordmark specs (the template encodes them — restating causes drift), and any reference to a prior in-chat carousel.

---

## 🎬 WORKING REEL PROMPT (unchanged from v12 — GitHub-direct)

```
Build the Week [W] · Day [D] reel for Hybrid Rockstar. Vertical Instagram Reel animation,
1080×1920 (9:16), 4 scenes with cuts, ~13–16 seconds, exported as MP4.

TEMPLATE — read all four files from GitHub (masbooksonebay/hybrid-rockstar-site, main):
  social/HR_REEL_TEMPLATE.dc.html        (wrapper)
  social/HR_REEL_TEMPLATE_scene.jsx      (the 4 scenes)
  social/HR_REEL_TEMPLATE_assets.js      (hook photo slot)
  social/animations.jsx                  (shared timeline engine)
All four are required — the wrapper x-imports the other three with ./-relative paths,
so keep them side by side. The template files are the source of truth for scene
structure, timing, animation style, typography, and colour — follow them exactly.
Edit ONLY the [BRACKETED] tokens in _scene.jsx (scenes 1–3) and the photo in
_assets.js. Scene 4 (CTA) is fixed — use it exactly as written in the template.

FIRST — confirm before building:
Quote back character for character from the files you just read — don't correct or
normalise: (1) the Scene 4 CTA wordmark element from HR_REEL_TEMPLATE_scene.jsx, and
(2) the x-import line from HR_REEL_TEMPLATE.dc.html. If you cannot read the files
from GitHub, stop and tell me.

═══ SCENE 1 — HOOK (~3s) ═══
Photo: use this resized JPEG (~135–200KB) — the same one from the W[W]D[D] carousel
intro slide, not the full-resolution source. [ATTACH/EMBED PHOTO]
Fill tokens: "WEEK [W] · DAY [D]" and session name "[SESSION NAME]".

═══ SCENE 2 — WORKOUT (~5s) ═══
Fill with the COMPLETE session, every movement, in order:

[PASTE COMPLETE SESSION VERBATIM FROM HR_PROGRAM_EXPORT.md]

Every movement must appear on screen, including all accessories (B1/B2/B3 etc.).
Accessories may reveal as a group after the main lifts, but all must appear. If they
genuinely can't land legibly in ~5s, let this scene run slightly long and report the
total. Never cut movements to fit.

═══ SCENE 3 — HOW TO RUN IT (~4-5s) ═══
Fill token: "[COACHING LINE]"

═══ SCENE 4 — CTA ═══
Fixed. Exactly as the template has it — no edits.

Report the final duration and confirm MP4 export works. Don't tell me it's verified —
I'll check the file.
```

---

## 📣 CTA COPY — unified July 28, 2026

**Current string, both templates, identical:**
```
The full 12-week program. Free to download.
```

Plain ASCII — no dashes or special characters. Commit **`22ba894`**, pushed to `origin/main`. CD reads from `main`, so the push is what makes it live.

**History:** the two templates previously carried *different* CTA copy by deliberate design — the reel line was shortened for ~3s of screen time (`23a5043`). The unified line is shorter than both, so the length rationale for divergence no longer applies.

| File | Line | Prior string |
|---|---|---|
| `HR_CAROUSEL_TEMPLATE.dc.html` | 187 | `Free to download. Everything unlocked — for a limited time.` |
| `HR_REEL_TEMPLATE_scene.jsx` | 165 | `Free to download. Everything unlocked — for now.` |

**All limited-time framing is now gone from both templates.** Zero matches for "First 100," "for life," "limited time," or "for now." The retired first-100 copy survives only rasterized inside historical `exports/*.png` — past posts, not editable text.

**⚠️ Open exposure, flagged not resolved:** HR is **freemium**, so some features will eventually sit behind a paywall. "Free to download" stays durably true. **"The full 12-week program" would become false** if the full program later requires payment — on templates that generate posts staying live indefinitely. Revisit when monetization lands.

**Pending visual check:** the reel's CTA bar is fixed-width 900px with content-driven height. The shorter copy may wrap to one fewer line at 96px, riding the centered stack a few pixels. Nothing overflows. **Verify on the next reel build** — no separate check needed.

---

## 🔧 WORDMARK COLOUR — CORRECTED (v13)

⚠️ **v11's table and v12's carried summary were both stale on the reel hook row.** The hook no longer uses a two-word wordmark at all.

| Asset / slide | Treatment | Source |
|---|---|---|
| **Carousel — intro/photo slide (1)** | **"HYBRID" YELLOW · "ROCKSTAR" YELLOW** | shipped IG grid |
| Carousel — cover (2) | "HYBRID" WHITE · "ROCKSTAR" YELLOW | shipped IG grid |
| Carousel — app-pitch (last) | "HYBRID" WHITE · "ROCKSTAR" YELLOW | shipped IG grid |
| **Reel — hook scene (1)** | 🔧 **HYBRID-ONLY lockup** — the single word in white `#FFFFFF` with a solid yellow `#FFED00` underline bar, top-left in the 4:5 grid-crop safe zone. **"ROCKSTAR" is not present.** | template wrapper, `8d59fb8` |
| Reel — CTA scene (4) | full "Hybrid Rockstar", **BOTH words YELLOW** (single yellow string). Fixed — do not edit Scene 4 | template markup, CC-confirmed |

**Retired claim:** v11 line 196 stated *"the carousel intro photo slide is the ONLY place both words are yellow."* **False** — the reel CTA is also both yellow. v11 contradicted itself between its own two tables; this row settles it.

**This table is documentation, not instruction.** Do not paste it into a CD prompt — the templates encode it, and restating it is what produced the drift.

---

## 📍 CURRENT POSITION — dated state, verify before relying

**As of July 28, 2026:** **W5D4 shipped.** W5D5 (Recovery Run) prompts drafted.

> 🔒 **State in this doc carries a date and, where it maps to code, a commit hash.** Shipped-post position goes stale silently — it produced a wrong queue note on July 28 when the record still showed W4D5 as next. **If this line is more than a few days old, ask rather than assume.** The app repo and the IG grid are the artifacts; this line is a convenience.

**Program data source:** `HR_PROGRAM_EXPORT.md` — verified accurate for Week 5. It remains an ad-hoc transcription with no generator and is not in the repo; verify against `hr-cycle-1.json` when anything looks off.

---

## ✅ CLOSED IN v13

- **Reel template comment contradiction** — the "both words yellow" parenthetical that described the hook/carousel distinction. **Already fixed in `8d59fb8`**, weeks before it was queued. The wrapper's WORDMARK section is accurate as written. **Queue item removed.**
- **Stored carousel prompt** — replaced with the GitHub-direct version above.

## ⚠️ STILL OPEN

- **W3D2's shipped "FULL 12-WEEK" subheadline outlier** — one live post differs from the standard. Still Mark's call whether it's worth correcting.
- **`HR_PROGRAM_EXPORT.md` has no generator** and lives outside the repo. Every carousel and reel is built from it. A generator would remove a whole class of transcription risk.
- **Site repo dirty tree** — `icon.png` deletion, untracked PNGs, `vercel.json`. CC correctly keeps them out of every commit, but a persistently dirty tree erodes `git status` as a signal.

---

## (Carried forward UNCHANGED from v11/v12 — see those docs for full text)

- **GitHub template system tables** — file list, commits `d7f8c45` / `4e0a930` / `af46d67`, x-import mechanics, `./`-relative path finding.
- **CD facts:** projects are per-chat; CD cannot see other CD chats; **CD self-verification is worthless** (Mark checks the file); build fresh, never "rebuild."
- **Photo rule:** large source → downscale to target JPEG → embed. Oversized base64 trips the canvas fallback that drops the webfont.
- **Quote-back verification before every build.**
- **Subline rule:** app's parenthetical → else the stimulus opening phrase verbatim → else none. **Never free-authored.**
- **Run-day prefix rule:** no A1/B1/C1 letter prefixes on run days — bare labels only.
- **Reach playbook:** carousels are the conversion engine (~3× single-image reach, 24–48h re-serve); Reels are the discovery engine; 6 FB HYROX groups are a warm-audience advantage; genuine outward engagement is the actual reach mechanism — following accounts is not.
- **Posting cadence** and the shipped-post record.
- **"The artifact is the source"** — when a doc and a build disagree, read the markup.

---

## 📅 Changelog

**July 28, 2026 (v12 → v13):**
- 🔒 **THE RULE extended to carousels** — every CD prompt, reel and carousel, points at GitHub. The stored v9 carousel prompt (in-chat W3D1 reference) is **replaced**.
- 🔧 **Wordmark table corrected** — the reel hook is a **HYBRID-only lockup** (white + yellow underline bar), not HYBRID white / ROCKSTAR yellow. v11's "only the carousel intro has both words yellow" claim retired as false.
- ➕ **CTA copy unified** across both templates to `The full 12-week program. Free to download.` (`22ba894`). All limited-time framing removed. Freemium exposure flagged.
- ✅ **Comment-fix queue item closed** — resolved in `8d59fb8` weeks before it was queued.
- 🔒 **Post-tracking state now dated**, with an explicit instruction to verify rather than assume.
- ➕ Hygiene principle recorded: **the doc holds rules; the repo holds state.**

**July 24, 2026 (v12):** Reel prompts direct CD to the four GitHub template files. Prompt hygiene: no restating typography/colour the templates encode.
**July 17, 2026 (v11):** GitHub system complete and proven; reel = 4 files; reel-CTA wordmark corrected.
**July 16, 2026 (v10):** Template live on GitHub + fresh-chat tested; CD projects per-chat.

---

*The HR social plan. Every prompt points CD at the GitHub templates — the templates are the spec, the prompt fills the tokens. The doc holds rules; the repo holds state. CD doesn't verify its own work; Mark checks the file.*
