# Strength Cycle (SC) — Master Active Tracker

**Status:** ACTIVE TRACKER — dynamic state for the SC workstream
**Version:** v5.14 (June 1, 2026) — **strengthcycle.app marketing site LIVE**; app state unchanged (v1.0.4 worldwide)
**Parent:** SC_MASTER_FROZEN v5.3
**Cross-referenced in:** SCS_MP v6.9

---

## 📍 Status Snapshot (June 1, 2026)

| Component | State |
|---|---|
| App live in App Store | **v1.0.4 (released worldwide, 175 countries)** — unchanged |
| ASC ID | 6762101377 |
| App repo | `~/Desktop/strength-cycle` (Expo) |
| API backend | `~/Desktop/hybrid-rockstar-api` (shared with HR) |
| **Marketing site** | ✅ **LIVE at strengthcycle.app** (NEW — see below) |

---

## 🌐 SC Marketing Site — LIVE (NEW v5.14)

- **Repo:** `~/Desktop/strength-cycle-site` — static `index.html` + `api/contact.js` (Vercel serverless fn). Commit **`d7e8eed`** (authored masbooksonebay@gmail.com): index.html copied in + marker-verified (AI coach / "More programs coming soon" / Texas Method), 2 HR→SC strings fixed, badge swapped to real `icon.png`.
- **Vercel project:** `strength-cycle-site`, team masbooksonebays-projects.
- **Content:** "Strength Cycle — 5/3/1, 3x5 Strength, Texas Method." Three program cards + "More programs coming soon" + AI-coach pill + App Store link (`id6762101377`).
- **Contact form:** form → `/api/contact` → Resend email to **markshurtliff@gmail.com**, subject **"New Strength Cycle question."** **`RESEND_API_KEY` set by Mark** in a real terminal (`vercel env add` → `ls` → `deploy --prod` → curl 200).
- **Domain (pointed June 1 via CINC; zone was clean):**
  - `strengthcycle.app` — **canonical / primary** (apex, Production).
  - `www.strengthcycle.app` — **307 → apex**.
  - Vercel CNAME target: `a00a66303c6175b8.vercel-dns-017.com`. Records **DNS only / grey cloud**, via Cloudflare Domain Connect ("Auto configure"). Valid Configuration + SSL on both.
- **Verified live (independent web_fetch, June 1):** strengthcycle.app serves the SC site over HTTPS; www redirects to apex.
- **Distinct from `strengthcycle.shop`** (GoDaddy, Gear/Amazon merch storefront — see SC_MASTER_FROZEN). `.app` = the Vercel marketing site; `.shop` = merch. Don't conflate.

### ⏳ Trailing item (Mark's, trivial)
- **Form test:** submit the live contact form once and confirm it lands in markshurtliff@gmail.com. (Claude can't verify that inbox.) After that the marketing site is fully closed.

---

## 🚀 v1.0.4 — RELEASED (unchanged from v5.13)
Multi-program platform (3x5 Strength + 5/3/1) live worldwide; AMRAP reset bug fixed; in-app review prompt live. *(Full detail: v5.13.)*

## 🚀 v1.0.5 Subscription Roadmap (unchanged from v5.13)
Option C — free with AI cap, paid (SC Pro) for unlimited AI; all methodology/programs free permanently. Prereqs: Paid Apps Agreement + bank/tax for SCS LLC + Apple Dev account migration to SCS LLC team. Pricing direction (not final): $7.99/mo, $59.99/yr.

---

## 📅 Changelog
**June 1, 2026 (v5.13 → v5.14):**
- ✅ **strengthcycle.app marketing site LIVE** — repo `strength-cycle-site`, commit d7e8eed, Resend contact form (RESEND_API_KEY set), custom domain pointed (apex canonical + www 307, CNAME a00a66303c6175b8.vercel-dns-017.com, grey cloud, Domain Connect, SSL), independently verified.
- ✅ Distinguished strengthcycle.app (Vercel marketing site) from strengthcycle.shop (GoDaddy merch).
- ⏳ Only trailing item: Mark's one-time contact-form test.
- App state unchanged (v1.0.4 worldwide).

**May 28, 2026 (v5.12 → v5.13):** v1.0.4 released worldwide; multi-program milestone; AMRAP fix + review prompt live. *(See v5.13.)*

---

## 🎯 Next Milestones
1. SC contact-form test (close out the marketing site).
2. Monitor v1.0.4 adoption + early organic reviews.
3. v1.0.5 subscription scoping (Paid Apps Agreement + Apple Dev account migration to SCS LLC).
4. SC community outreach (powerlifting forums/groups), parallel to HR HYROX pattern.

---

## 🔗 Cross-References
- **SC_MASTER_FROZEN v5.3** — frozen rules; strengthcycle.shop (GoDaddy merch) documented there
- **SCS_MP v6.9** — parent; full site portfolio + brand-site deploy pattern
- **HR_MASTER v9** — sibling (hybridrockstar.app marketing site also live)
- **WN_MASTER_ACTIVE v1.2** — sibling (weightliftingnation.com went live same session)

---

*Active tracker for SC. App v1.0.4 worldwide; marketing site live at strengthcycle.app. Next: form test, then v1.0.5 subscription.*
