# HR Social — Promotion Plan (IG + FB + X) — v12

**Status:** ACTIVE REFERENCE — the Hybrid Rockstar social promotion plan across **Instagram + Facebook + X**.
**Version:** v12 (July 24, 2026) — 🔒 **REEL PROMPTS NOW DIRECT CD TO GITHUB, NOT TO A PRIOR IN-CHAT REEL.** Replaces the v9–v11 "working reel prompt" (which referenced W3D1 in the CD chat) and supersedes the interim SCS 26 fix ("use the most recent reel in this chat"). The GitHub template files ARE the format reference. Everything else carried forward unchanged from v11.
**Prior version:** v11 (July 17, 2026) — GitHub system complete and proven (carousel + 4-file reel templates, both built from fresh CD chats); reel-CTA wordmark corrected (both words yellow); W3D5 shipped.
**App:** Hybrid Rockstar. App repo `~/dev/hybrid-rockstar`; marketing site `~/dev/hybrid-rockstar-site` (hybridrockstar.app). On the App Store.

---

## 🔒 THE RULE (NEW v12) — reel prompts point at GitHub, period

**Every CD reel prompt directs CD to the four template files on GitHub** (`masbooksonebay/hybrid-rockstar-site`, `main`, under `social/`). **Never reference a prior reel in the CD chat as the format source** — not W3D1, not "the most recent reel in this chat," not any in-chat build.

Why this is final:
- **CD projects are per-chat** — an in-chat reference is only valid until the next fresh chat, then the prompt breaks and CD stops to ask. This happened repeatedly with the hardcoded W3D1 reference.
- **The GitHub templates were built for exactly this** — v10/v11 proved a fresh CD chat with no history reads the private repo and builds correctly. The template system removes chat continuity as a dependency; prompts that still lean on in-chat reels reintroduce it.
- **The templates are the source of truth** for scene structure, timing, animation, typography, and colour (v11's third doc-vs-artifact lesson). A prompt should not re-describe what the template already encodes — it points at the files and fills the tokens.

The interim SCS 26 rule ("prefer the most recent same-block reel present in the chat") is **superseded** — it was a patch on the wrong mechanism.

---

## 🎬 WORKING REEL PROMPT (v12 — GitHub-direct)

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

Notes on what the prompt deliberately no longer contains:
- **No colour/typography spec** (yellow-only, Barlow weights, wordmark splits) — the template files encode all of it; restating it in the prompt recreates the doc-vs-artifact drift that caused three misses in two days. The one content rule that stays in the prompt is the **complete-session / never-cut-accessories guard**, because it governs *content Mark pastes in*, not template structure.
- **No "use W3D1 / a prior reel as reference"** — dead pattern.

---

## 📌 Carousel prompt — already GitHub-direct (no change)

The per-day carousel workflow (v11) already points CD at `social/HR_CAROUSEL_TEMPLATE.dc.html` (+ `social/support.js`) and fills `[BRACKETED]` tokens. Same quote-back discipline (subheadline markup, section count). No change in v12.

---

## ⚠️ Outstanding cleanup (carried from v11 — now more important, still doesn't block builds)

**The reel template's build-method comment self-contradicts** (the "both words yellow" parenthetical sits on the CTA line but describes the hook/carousel distinction). With v12 making GitHub the *only* reference CD sees, a self-contradicting note in the canonical file is exactly the class of error that cost a full day. **Fix on the next CC session in `~/dev/hybrid-rockstar-site`** (edit comment → commit → push). The markup itself is unambiguous, so builds remain safe meanwhile.

W3D2's shipped "FULL 12-WEEK" subheadline outlier: still Mark's call whether one live post is worth correcting (carried unchanged).

---

## (Carried forward UNCHANGED from v11 — see that doc for full text)
- The GitHub template system tables (files, commits `d7f8c45` / `4e0a930` / `af46d67`, x-import mechanics, `./`-relative path finding).
- Wordmark colour table (corrected from artifacts): carousel intro both yellow; carousel cover/pitch white+yellow; reel hook white+yellow; reel CTA both yellow.
- CD facts: per-chat projects; can't see other CD chats; self-verification worthless (Mark checks the file); build fresh, never "rebuild."
- Photo rule: large source → downscale to target JPEG → embed (oversized base64 trips the canvas fallback that drops the webfont).
- Quote-back verification before every build.
- Subline rule (app's parenthetical → stimulus opening phrase verbatim → else none; never free-authored).
- Working carousel prompt; reach playbook; posting cadence; shipped-post record through W3D5+.
- "The artifact is the source" — when a doc and a build disagree, read the markup.

---

## 📅 Changelog
**July 24, 2026 (v11 → v12):**
- 🔒 **Reel prompts direct CD to the four GitHub template files** — never to a prior in-chat reel. Replaces the v9–v11 W3D1-reference prompt and supersedes the SCS 26 "most recent reel in this chat" interim fix.
- ➕ New working reel prompt stored (GitHub-direct, token-fill only, scene-4 fixed, quote-back from the files, complete-session guard retained).
- ➕ Prompt hygiene: no restating typography/colour the templates already encode.
- ⚠️ Template build-method comment fix elevated (GitHub is now CD's only reference — queue for next CC session in the site repo).

**July 17, 2026 (v11):** GitHub system complete and proven; reel = 4 files; reel-CTA wordmark corrected (both yellow); W3D5 shipped.
**July 16, 2026 (v10):** Template live on GitHub + fresh-chat tested; CD projects per-chat; wordmark weight 600 corrected.
**Earlier:** see v11's version history.

---

*The HR social plan. Reel and carousel prompts point CD at the GitHub templates — the templates are the spec, the prompt fills the tokens. The artifact is the source. CD doesn't verify its own work; Mark checks the file.*
