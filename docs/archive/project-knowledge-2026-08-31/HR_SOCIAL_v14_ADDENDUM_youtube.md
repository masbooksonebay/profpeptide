# HR Social — v14 ADDENDUM: YouTube Shorts

**Date:** July 30, 2026
**Status:** ACTIVE drop-in. Append to HR_SOCIAL v13.
**Why this exists:** the channel has been running since July 5 with four Shorts published and **no ref-doc coverage at all** — no channel record, no title convention, no description template, no owner. The convention below is reverse-engineered from the four live Shorts, not invented.

---

## 📺 CHANNEL

**`youtube.com/@HybridRockstarApp`** — HR-specific, not studio-wide.

| Published | Shorts | Backlog |
|---|---|---|
| W1D1 – W1D4 (4 live) | Oldest Jul 5, 2026 | **~28 sessions** through W6, one per day |

---

## 🔒 TITLE CONVENTION

```
HYROX [search phrase] | Week N Day N | Hybrid Rockstar
```

**The critical rule: the middle slot is a SEARCH PHRASE, not the app's session name.** Whoever wrote the first four understood this and it should not be lost.

| App session name | YouTube phrase used |
|---|---|
| Strength A | **Lower Body Strength Workout** |
| Strength B | **Upper Body Strength Workout** |
| Easy Run | **Zone 2 Easy Run** |
| Movement Pattern | **8-Station Workout** |

Nobody searches "Movement Pattern." People search "HYROX 8-station workout." The app name is for the app; the title is for YouTube search.

**Proposed phrases for the sessions still to upload** — these are proposals, not established convention. Confirm before the first use of each:

| App session | Proposed phrase |
|---|---|
| Recovery Run | HYROX Recovery Run |
| Tempo Run | HYROX Tempo Run |
| Compromised Running | HYROX Run + Station Intervals |
| Half-Sim | HYROX Half Race Simulation |
| Full Sim | HYROX Full Race Simulation |

⚠️ **Length:** `HYROX Lower Body Strength Workout | Week 1 Day 1 | Hybrid Rockstar` is 66 characters and the channel grid truncates it at "…| We…". The brand suffix is the part that gets cut, which is the right thing to lose — but keep the search phrase and the week/day inside the first ~50 characters.

---

## 📝 DESCRIPTION TEMPLATE

Verbatim structure from W1D1 (the live example):

```
Day [N] of the free 12-week HYROX training program in the Hybrid
Rockstar app. [ONE SESSION-SPECIFIC SENTENCE]. Structured workouts,
race prep, and AI coaching that scales to any level.

📲 Free on iOS: hybridrockstar.app/get

#Shorts #HYROX #hyroxtraining #hybridtraining #[SESSION TAG]
```

**W1D1 as shipped:**

> Day 1 of the free 12-week HYROX training program in the Hybrid Rockstar app. Full lower-body strength session — back squat, RDL, and calibration guidance for Week 1. Structured workouts, race prep, and AI coaching that scales to any level.
>
> 📲 Free on iOS: hybridrockstar.app/get
>
> #Shorts #HYROX #hyroxtraining #hybridtraining #strengthtraining

**Fixed parts — do not vary:**
- Opening clause: `Day [N] of the free 12-week HYROX training program in the Hybrid Rockstar app.`
- Closing clause: `Structured workouts, race prep, and AI coaching that scales to any level.`
- Link line: `📲 Free on iOS: hybridrockstar.app/get`
- First four hashtags: `#Shorts #HYROX #hyroxtraining #hybridtraining`

**Variable parts:**
- The middle sentence — name the actual movements or the session's point, in plain search-friendly language.
- The fifth hashtag — session-specific (`#strengthtraining`, `#running`, `#hyroxstations`).

> 🔗 **The link is the channel's structural advantage over Instagram.** IG captions can't carry a live link; YouTube descriptions can. `hybridrockstar.app/get` is the App Store redirect served from `vercel.json` — verified working, and the reason that redirect exists. **Never drop this line.**

---

## 👤 WHO UPLOADS — Mark, manually

**No automation is possible with the current toolset:**
- **CC** has no browser and no YouTube credentials.
- **CINC** can drive a browser but **cannot operate a local file picker**, so it cannot select the MP4 to upload.
- Nothing in the repo touches YouTube.

So: **Mark uploads.** Claude's role is drafting titles and descriptions; CD produces the asset.

**Batch-and-schedule instead of a daily task.** YouTube Studio sets a publish date at upload time. Uploading seven in one sitting with staggered release dates gets the same daily cadence without a daily chore. Worth testing on the next two or three before committing to it for all 28.

**Per-upload settings to confirm each time:** Made for Kids → **No** · Category → **Sports** or **Howto & Style** (pick one and stay consistent) · visibility/schedule.

---

## ⚠️ THE ASSET QUESTION — unresolved, check before the next upload

**The four live Shorts may not match what CD produces now.**

W1D1 published **July 5**. The CD reel template went live on GitHub around **July 16–17** (HR_SOCIAL v10). So the first four predate the template by roughly eleven days.

The W1D1 frame shows an **app screen recording** — the Strength A screen with the FullRox/HalfRox toggle, LIFT rows, and Mark-complete button. That is **not** any scene in the current reel template, whose four scenes are photo hook → workout list → how-to-run-it → fixed CTA.

**Before uploading W1D5 onward, decide:**
1. Are the YouTube Shorts the same MP4 as the Instagram reels, or a separate app-screen-recording asset?
2. If they're the IG reels, the next 28 will look materially different from the first four. That's acceptable — but it's a visible style change on the channel and should be deliberate.
3. If they're separate assets, there is no documented process for producing them and that needs writing down.

**Do not assume. Check one existing Short against a recent CD reel before the next upload.**

---

## 📉 PERFORMANCE — watch this

| Short | Views |
|---|---|
| W1D1 · Lower Body Strength | **96** |
| W1D2 · Zone 2 Easy Run | 45 |
| W1D3 · Upper Body Strength | 34 |
| W1D4 · 8-Station Workout | **5** |

**A 95% decline across four uploads.** Some is age, but the trend is steep enough to watch rather than ignore.

One observable difference: **W1D1's thumbnail reads "FULL 12-WEEK HYROX PROGRAM"** while the others carry the session name. W1D1 is also the only one that performed. That is a single data point, not a finding — but it's the obvious variable, and worth testing deliberately on the next few uploads.

**If the next three also land in single digits, revisit the title and thumbnail convention before burning through the remaining backlog.** Twenty-eight uploads at 5 views each is a month of work for nothing.

---

## 📅 Changelog

**July 30, 2026 (v14 ADDENDUM):** YouTube Shorts documented for the first time. Channel, title convention (search phrase, not app session name), description template with the `hybridrockstar.app/get` link, upload ownership (Mark — CC and CINC both structurally unable), batch-scheduling suggestion, the unresolved asset question (first four predate the CD reel template), and the view-decline trend flagged for monitoring.

---

*Title carries the search phrase, never the app's session name. The description link is the channel's edge over Instagram — never drop it. Mark uploads; nothing else can.*
