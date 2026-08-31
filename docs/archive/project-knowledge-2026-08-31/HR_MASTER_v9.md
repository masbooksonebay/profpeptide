# Hybrid Rockstar — Master Ref Doc

**Status:** ACTIVE — single doc structure
**Version:** v9 (May 28, 2026) — HYROX community outreach expanded to 6 groups, v2 post template locked, HYROX etymology corrected
**Cross-referenced in:** SCS_MP v6.7

---

## v8 → v9 CHANGELOG

- ✅ **5 more HYROX FB groups joined** → 6 total
- ✅ **v2 community post template locked** (briefer/more direct than the first Emma Waring post)
- ✅ **Group posting norms documented** (from Mark's observation across groups)
- ✅ **HYROX etymology corrected** — "Hybrid Rockstar" is a community backronym, NOT the official derivation
- ✅ **App Store URL** for posts: pending verification before use

---

## 📍 Status Snapshot (May 28, 2026)

| Component | State |
|---|---|
| App version | v1.0.0 LIVE worldwide (175 countries) |
| ASC ID | 6762101905 |
| Repo | `~/Desktop/hybrid-rockstar` (Expo) |
| Backend | `~/Desktop/hybrid-rockstar-api` (Next.js/Vercel, shared with SC) |
| App Store URL (for posts) | `https://apps.apple.com/app/id6762101905` — **VERIFY before posting** (built from ASC ID; not confirmed via search, app too new to rank) |

---

## 📣 HYROX Community Outreach (UPDATED v9)

### Groups joined (6)
1. HYROX UK Community (Emma Waring post LIVE — first activation)
2. HYROX Australia & NZ Community
3. HYROX Australia Community
4. Hyrox Dublin 2026
5. Hyrox Brisbane 2026
6. HYROX Manchester 2026

### Group posting norms (observed)
- Posting about your own project is generally **allowed** — groups mainly prohibit using the group to **sell tickets**.
- No strict self-promo ban observed across these groups.
- **Anti-spam discipline:** identical text posted to many groups in a short window is what admins flag. Vary each post (region line, sentence reorder) and space them out.
- **FB link throttling:** if reach drops on link posts, move the App Store link to the **first comment** instead of the body.

### v2 Community Post Template (LOCKED)

```
I'd like to share a training app I built — Hybrid Rockstar — for anyone preparing for a HYROX race or just training the format for fun.

It runs a structured 12-week program that builds week by week toward race day, or as a rolling cycle if you train year-round.

The first 100 people who download it get full access free for life. Any feedback or questions, feel free to message me.

[App Store link]
```

**Template conventions:**
- **Name the app "Hybrid Rockstar"** (its real, Hyrox-free name) — needed for findability + keeps it clearly an independent app
- **HYROX referenced nominatively** — the race you train *for*, NOT "a HYROX app" (which would imply affiliation). Nominative fair use.
- **"Free for life for the first 100"** = grandfathering (locks them in before any future paid tier). NOTE: this framing signals HR will monetize eventually. If that's not intended, soften to "early supporter" framing.
- Briefer + more direct than the first Emma Waring post (intentional evolution).

---

## 🔒 HYROX Trademark + Etymology (CORRECTED v9)

- **"Hyrox" is a registered trademark.** NEVER appears in HR's own branding (app name, App Store listing, screenshots, in-app text, marketing copy). The app is nominative-fair-use compliant.
- **Etymology correction:** "HYROX" is NOT officially derived from "Hybrid Rockstar." Real origin: the event was first named **CUROX** (from Latin *currere*, to run); a trademark dispute forced a rename; "ROX" carried over and "HY" was added because it "sounded right." Cofounder Fürste declined to confirm/deny any meaning. **"Hybrid Rockstar" is a community-generated backronym** the founders never confirmed — it went viral and became the dominant folk etymology.
- **Implication:** because "Hybrid Rockstar" was never HYROX's official meaning and was never claimed by the company, the app name overlap is lower affiliation-risk than if it were the founders' actual derivation. The nominative framing in community posts does the work.

---

## 🔒 Locked Design Decisions (unchanged from v8)
- Visual hierarchy: green = week-level (Train screen); blue = session-level (Week detail)
- `leadingEdgeWeek` drives CURRENT week (race + no-race modes); race date informational only
- Three-card treatment: CURRENT / COMPLETE (green check) / NEUTRAL

---

## 🚀 v1.0.1 Prep Queue (unchanged from v8)
1. Cloudflare Email Routing for hybridrockstar.app (feedback@ → markshurtliff@gmail.com)
2. In-app feedback email `.shop` → `.app`
3. Any post-worldwide bug fixes → TestFlight → production

## 📦 Wave 3 Programming (unchanged)
- Wave 3D v5 committed (07c5146); Wave 3F queued (achievements/badges); v1.1 Apple Health deferred

---

## 📅 Changelog

**May 28, 2026 (v8 → v9):**
- ✅ 5 more HYROX groups joined (6 total)
- ✅ v2 community post template locked (briefer; app name + nominative HYROX framing + first-100-free-for-life)
- ✅ Group norms documented (self-promo OK, no ticket-selling; vary posts; link-in-first-comment fallback)
- ✅ HYROX etymology corrected (community backronym, not official; lowers affiliation risk)
- ⚠️ App Store URL pending verification before FB posting

**Prior entries:** see v8 history.

---

## 🎯 Next Milestones
1. **Verify App Store URL**, then post v2 template across the 6 groups (varied, spaced)
2. Watch UK/AU/NZ/regional download upticks via ASC Analytics
3. v1.0.1 build (Cloudflare Email Routing + feedback email swap)
4. Wave 3F achievements/badges

---

## 🔗 Cross-References
- **SCS_MP v6.7** — parent doc; HYROX outreach as HR go-to-market pattern
- **SC_MASTER_ACTIVE v5.13** — sibling iOS app
- **WN_MASTER_ACTIVE v1.1** — sibling (pre-build)

---

*HR live worldwide. Community outreach scaling to 6 HYROX groups. v2 template ready pending URL verify.*
