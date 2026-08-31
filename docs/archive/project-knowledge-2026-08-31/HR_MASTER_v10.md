# Hybrid Rockstar — Master Ref Doc

**Status:** ACTIVE — single doc structure
**Version:** v10 (June 7, 2026) — adds the **X launch** (@hybrid_rockstar live + verified), the **OG social card** (built, deployed, working) + the **X card-cache lesson**, the full **social-promotion strategy** (X → IG/FB), the **first launch post**, and the **posting cadence**. Carries forward v9's HYROX community-groups, trademark/etymology, and design sections unchanged.
**Cross-referenced in:** SCS_MP

---

## v9 → v10 CHANGELOG
- ✅ **X account @hybrid_rockstar LIVE + VERIFIED** (X Premium, $4/mo intro for 2 months — got verified before posting for algorithmic reach on a 0-follower account)
- ✅ **OG social card built + deployed** to hybridrockstar.app (clickable unfurl card like PP) + **X cache-busting lesson** learned
- ✅ **App Store URL verified:** `https://apps.apple.com/app/id6762101905`
- ✅ **Social-promotion strategy** defined (X = ball-roller; IG Reels + FB = the real target)
- ✅ **First launch post** finalized + **posting cadence** set
- 🆕 **HR marketing-site repo** documented (`~/Desktop/hybrid-rockstar-site`)

---

## 📍 Status Snapshot (June 7, 2026)

| Component | State |
|---|---|
| App version | v1.0.0 LIVE worldwide (175 countries) |
| ASC ID | 6762101905 · App Store URL `https://apps.apple.com/app/id6762101905` (verified) |
| App repo | `~/Desktop/hybrid-rockstar` (Expo) |
| Backend | `~/Desktop/hybrid-rockstar-api` (Next.js/Vercel, shared with SC) |
| **Marketing site** | **`~/Desktop/hybrid-rockstar-site`** — plain static HTML (single `index.html`, inlined CSS, no framework/build), one asset `icon.png` + `og-image.png`, tiny `api/contact.js`. **Deploys via Vercel CLI `vercel --prod`** (NO git remote — `git push` does nothing). Vercel project `hybrid-rockstar-site`, org masbooksonebays-projects. Aliased to hybridrockstar.app. |
| X account | **@hybrid_rockstar** — "Hybrid Rockstar", **verified ✓**, HR logo avatar, HybridRockstar.app banner |

**X bio (live):** "Strength + endurance programming for HYROX and other functional fitness athletes. The iOS app free for a limited time in the App Store." (HYROX = nominative/descriptive only.)

---

## 🆕 OG social card — DONE + deployed (+ X cache lesson)

- **`og-image.png`** (HR logo + "HybridRockstar.app" + "Download on the App Store" badge; landscape, 1731×909, ~1.9:1) sits in the repo root → served at `https://hybridrockstar.app/og-image.png` (confirmed loading).
- CC added 9 meta tags to `index.html` (`og:url`, `og:site_name`, `og:image` + w/h, `twitter:card=summary_large_image` + title/desc/image) — additive only; existing tags untouched. Deployed via `vercel --prod`.
- **X CACHE LESSON (LOCKED):** the first share (posted ~14s after deploy) cached an **imageless** card; X holds it per-URL. **Fix that worked: post `https://hybridrockstar.app/?v=2`** — a URL X never cached forces a fresh scrape. Works here (unlike the Ignite case) because the image is a **real static PNG** AND the page has **no hard `<link rel=canonical>`** (only `og:url`, a softer signal). Confirmed live. **Use the `?v=2` URL when posting the HR site** until/unless CC sets `og:url` to match the clean URL.
- Bulletproof fallback if it ever breaks: CC change `og:url` to match the posted URL + redeploy.

---

## 🆕 Social-promotion strategy (PLANNED — not yet implemented)

**Sequence:** verify (done) → launch posts → daily programming posts.

**Channel priority:** **X = easy, low-stakes ball-roller + content engine** (build a habit + a back catalog). **Instagram (Reels) + Facebook HYROX groups = the REAL target** — that's where the HYROX community lives. Most X content repurposes to IG/FB (main adaptation: IG/FB are far more visual — text workouts need a graphic/clip/carousel).

**Daily program-sample campaign (the core idea):** post daily workouts drawn from the 12-week program, **time-boxed ~2–4 weeks** as a launch campaign. **Safe to give the program away because (a) the app is FREE** — no purchase to cannibalize; the goal is **installs / active use** — **and (b) the sticky features (workout tracking + coach feedback) require the app and stay gated.** Frame every post + the bio to point to those in-app-only features. Post as **"drawn from the program" samples, NOT a strict numbered serial** (so mid-stream landers aren't confused). **Pin an explainer post.** End-of-campaign = the conversion CTA.

**Posting cadence (set):** **feature posts 1–2×/week (weekends)** about in-app features; **workout posts during the week.**

**Instagram format:** **workout-as-image** (save-able/shareable — saves drive the algorithm) + **caption-as-coaching** (the why / pacing / scaling / common mistakes + soft CTA). Needs a **designed, branded workout-image TEMPLATE** (one-time build; serves both IG and X). **IG has NO clickable caption links** — the bio link carries all traffic.

**FB HYROX groups caution:** most prohibit/restrict promo posting — **participate genuinely; don't drop cold app links** (ban risk). (See v9 group norms — self-promo generally OK in the 6 joined groups, no ticket-selling; vary + space posts; link-in-first-comment fallback.)

**Open items for next session:** fresh research on the current HYROX IG/FB landscape (top hashtags #hyrox #hybridtraining, active groups, winning formats, cadence) BEFORE building the IG strategy; build the workout-image template (pull the real 12-week structure); draft launch posts + a repeatable daily caption format.

**General X learning (cross-app):** native-image posts materially out-reach link-only posts (X downranks external links) — see PP_X_POSTS. Attach media; for app posts, the thumbnail is the engagement driver.

---

## 🆕 First launch post (finalized)

Offer is the LOCKED **first-100-free-for-life** (grandfathering; the app is free now so this drives installs, and it's documented as a settled decision — do not re-litigate). Post on @hybrid_rockstar with the `?v=2` card link:

```
Hybrid Rockstar is live — and free for a limited time.

A 12-week HYROX-style training program built for hybrid athletes: Foundation, Development, Peak, and Race Prep phases, scaled to any level — plus workout tracking and coach feedback, all in the app.

First 100 to download get full access for life.

https://hybridrockstar.app/?v=2
```

---

## 🔒 HYROX Trademark + Etymology — [Unchanged from v9]
"Hyrox" is a registered trademark; never in HR's own branding; nominative fair use only. "Hybrid Rockstar" = community backronym, not HYROX's official derivation (lowers affiliation risk). Full detail in v9.

## 🔒 Locked Design Decisions — [Unchanged from v9]
Green = week-level / blue = session-level; `leadingEdgeWeek` drives current week; three-card treatment (CURRENT / COMPLETE / NEUTRAL).

## 📣 HYROX Community Groups (6) + v2 post template — [Unchanged from v9]
6 FB groups joined; group norms; v2 community post template (name the app "Hybrid Rockstar"; HYROX nominative; first-100-free-for-life). Full detail in v9.

## 🚀 v1.0.1 Prep Queue — [Unchanged from v9]
Cloudflare Email Routing for hybridrockstar.app; in-app feedback email `.shop`→`.app`; post-worldwide bug fixes. Wave 3F (achievements/badges) queued.

---

## 🎯 Next Milestones
1. **Post the launch post** on @hybrid_rockstar (with `?v=2` card link).
2. Roll out the cadence: feature posts 1–2×/week (weekends) + workout posts midweek.
3. Build the **workout-image template** (real 12-week structure) for IG + X.
4. Fresh research on the **HYROX IG/FB landscape** → IG strategy → FB-group participation.
5. v1.0.1 build (email routing + feedback email swap); Wave 3F.

## 📅 Changelog
**June 7 (v9 → v10):** X account @hybrid_rockstar live + verified; OG card built/deployed + X cache lesson (`?v=2`); App Store URL verified; full social-promotion strategy (X→IG/FB, time-boxed daily program samples, free-app rationale, gated sticky features, cadence, IG image+caption format, FB-group caution); first launch post finalized; HR marketing-site repo (static HTML, `vercel --prod`, no git remote) documented.
**Prior:** see v9 (groups, trademark/etymology, design).

## 🔗 Cross-References
- **SCS_MP** — parent; HYROX outreach as HR go-to-market pattern
- **PP_X_POSTS** — X posting conventions + the native-image engagement learning
- **SC_MASTER_ACTIVE / WN_MASTER_ACTIVE** — sibling iOS apps

---

*HR live worldwide. X account verified + launch post ready; OG card working (post via `?v=2`). Social strategy: X now, IG/FB next (the real audience). App is free → goal is installs; tracking + coach feedback stay gated.*
