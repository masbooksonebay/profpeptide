# Weightlifting Nation — Master Active Tracker

**Status:** ACTIVE TRACKER — dynamic state for the WN workstream
**Version:** v1.2 (June 1, 2026) — **marketing/coming-soon site LIVE**; iOS app still pre-build
**Parent:** WN_MASTER_FROZEN v1.1
**Cross-referenced in:** SCS_MP v6.9

---

## 📍 Status Snapshot (June 1, 2026)

**MARKETING SITE:** ✅ **LIVE** at weightliftingnation.com (wlnation.com redirects in). See below.

**iOS APP PHASE:** Pre-build methodology specification phase — UNCHANGED. Russia v3 locked. China + Bulgaria + Foundation specs pending. Engine implementation NOT started. The **app** repo (Expo) is still not created.

> ⚠️ **Doc-gap correction (v1.1 was stale):** v1.1 said "No `~/Desktop/weightlifting-nation` directory exists." That was wrong — a finished, committed **marketing-site** repo existed and has now been deployed. Distinguish: **marketing-site repo** `~/Desktop/weightlifting-nation` (static + Resend) = EXISTS + LIVE; **iOS app repo** (Expo) = still to be created at build-kickoff.

---

## 🌐 WN Marketing Site — LIVE (NEW v1.2)

- **Repo:** `~/Desktop/weightlifting-nation` — static `index.html` (~16 KB) + `api/subscribe.js` (Vercel serverless fn). Not Next.js, no framework. Clean tree; 2 prior commits (`a5ad7b5` initial page, `3cafd45` Resend wiring) + the June 1 production deploy.
- **Vercel project:** `weightlifting-nation` (`prj_dBtWwUrdDebOfgXGKW8QCrFZ0bNP`), team masbooksonebays-projects (`team_inZmpqOyFeIkgVpfdvCna1rF`).
- **Content:** "Weightlifting Nation — International Training Systems." Coming-soon page; Russian / Chinese / Bulgarian system cards + Foundation track + AI-coach line + email-notify form ("First 100 get founding access"). © 2026 Strength Cycle Studios, LLC.
- **Email notify:** form → POST `/api/subscribe` → Resend email to **markshurtliff@gmail.com**, from `onboarding@resend.dev` (sandbox sender — fine here since recipient is Mark's own address; same pattern as SC/HR). **`RESEND_API_KEY` already set** on the project (created ~May 30; `vercel env add` errored "already exists," confirming it). Production deploy `vercel deploy --prod` → Ready in 8s.
- **Domains (pointed June 1 via CINC; both were clean Cloudflare zones):**
  - `weightliftingnation.com` — **canonical / primary** (serves the site).
  - `www.weightliftingnation.com` — 308 → apex.
  - `wlnation.com` — **308 redirect → weightliftingnation.com** (short-alias; "WL" = **WeightLifting**, NOT White Label).
  - `www.wlnation.com` — 308 → canonical.
  - Vercel CNAME target: `689df7034bc2289b.vercel-dns-017.com`. All records **DNS only / grey cloud**, created via Cloudflare Domain Connect ("Auto configure" — the Cloudflare SPA DNS panel had a "Still loading" issue, same workaround as SC). All 4 domains: Valid Configuration + SSL.
- **Verified live (independent web_fetch, June 1):** weightliftingnation.com serves the page over HTTPS; www + wlnation.com both 308-redirect to canonical.

### ⏳ Fast-follow (not a blocker) — signup persistence
The page **stores nothing** — each signup is a fire-and-forget email to Mark; a failed Resend send loses that subscriber with no record, and there's no exportable list. For a waitlist whose whole job is list-building, recommend a CC change: have `/api/subscribe` ALSO write each email to a **Resend Audience** (persisted, exportable list) alongside the notification. Spec'd as a quick CC change when Mark wants it.

---

## ✅ Completed Work (app methodology — unchanged from v1.1)
- **Russia methodology spec v3** locked (`WN_Russia_Methodology_Spec_v3.md`, 19 sections).
- **Phase 1a competitive research** complete (`WN_PHASE_1A_COMPETITIVE_BRIEF.md`).

## 🔓 Build-Phase Open Questions (unchanged from v1.1)
1. JuggernautAI OL ship-timing monitoring. 2. Demo video library v1.0 vs v1.1. 3. Per-session readiness flag (default: defer to engine spec). 4. Bulgarian onboarding gating to advanced tier. 5. Pricing landing point in $29–40/mo band. *(Full text: v1.1.)*

## 🔒 Russia spec refinements deferred to engine spec (unchanged from v1.1)
Russia v3 stays locked. Readiness flag, 6th-day option, attempts-tracking UX all belong to engine spec.

## 🔓 Pending Workstream Items (app — unchanged from v1.1)
China spec · Bulgaria spec · Foundation programming · variant catalogs · engine architecture spec · **app repo creation (Expo)** · UI scaffolding/onboarding. *(Full detail: v1.1.)*

## 🎯 Build-Phase Sequencing (locked v1.1)
China+Bulgaria+Foundation specs → variant catalogs → engine spec → app repo → engine impl → UI → onboarding → session viewer → TestFlight → App Store. ~4–8 weeks from app-repo creation to first TestFlight.

---

## 📅 Changelog
**June 1, 2026 (v1.1 → v1.2):**
- ✅ **WN marketing site LIVE** — deployed (RESEND_API_KEY already set) + both domains pointed (weightliftingnation.com canonical, wlnation.com 308 redirect) + independently verified.
- ✅ **Corrected the v1.1 "repo doesn't exist" doc-gap** — the marketing-site repo existed and is now live; the Expo APP repo is still the one pending at build-kickoff.
- ✅ Flagged the no-persistence fast-follow (add Resend Audience write to `/api/subscribe`).
- App methodology state unchanged from v1.1.

**May 27, 2026 (v1.0 → v1.1):** Phase 1a research complete; 5 build-phase open questions; sequencing locked. *(See v1.1.)*

---

## 🔗 Cross-References
- **WN_MASTER_FROZEN v1.1** — frozen rules, strategic positioning, methodology scope
- **WN_Russia_Methodology_Spec_v3.md** · **WN_PHASE_1A_COMPETITIVE_BRIEF.md**
- **SCS_MP v6.9** — parent; site portfolio + brand-site deploy pattern
- **SC_MASTER_ACTIVE v5.14** — sibling (its marketing site went live same session)

---

*Active tracker for WN. Marketing site live; iOS app still pre-build (methodology spec phase).*
