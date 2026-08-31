# PP_MASTER — Addendum v2 (June 3, 2026)

Drop-in addendum to **PP_MASTER v13**. Three additions: the PP-site skip-local-preview deploy workflow, the PP app sync backlog, and an SCS_MP cross-reference line. (The cross-promo X account rebrand direction lives in **PP_X_POSTS v27**.)

---

## 1) PP SITE deploy workflow — SKIP LOCAL PREVIEW (LOCKED)

For routine PP **site** changes (coupon pages, vendor entries in `vendors.ts`, peptide/blend profiles, SEO title/meta, content pages), CC commits + pushes straight to `main` — **no `npm run dev` / localhost preview.** Vercel auto-builds remotely and deploys **atomically**, so a failed build can't break the live site (it just doesn't deploy); Mark reviews on the **live profpeptide.com URL** and fix-forwards via a follow-up commit.

- **Deploy = `git push origin main`** (Mark's own Vercel pipeline). **NEVER the Vercel MCP** — it's a different account and 403s on Mark's team.
- **One retained guard (instant, not a preview):** for pages CC creates by copying a template, it greps for leftover source-vendor copy before pushing and stops/reports if it finds visible leftovers. (Droppable on request.)
- **Scope: PP SITE only** (`~/Desktop/profpeptide`). Does NOT apply to the PP **app** (`~/Desktop/profpeptide-app` → EAS build + App Store review pipeline, unchanged).
- **Rationale:** Mark's MacBook Air thrashes under multiple CC sessions + dev servers (198s cold starts / hangs; a stale `next dev` squatting on :3000 while the new one comes up on :3001 caused a false "internal server error"). The local preview burned time without adding safety that Vercel's remote build + live review don't already provide.
- **Optional upgrade if a change ever feels risky:** push to a non-`main` branch → Vercel builds a fast preview URL → merge to `main` after review.

This supersedes the old PP-site local-spot-check routine **for the site** (the `npm run dev` + localhost-links pattern). The spot-check routine still applies to any repo where a local preview is actually wanted.

---

## 2) PP APP sync backlog (`profpeptide-app`, Expo / RN / EAS)

The app and site have **separate data sources** (site = `src/data/vendors.ts`; app = `discounts.tsx` Codes tab + its own compound-library data, frozen since ~v1.0.1/1.0.2 mid-May). Drift to close, after the current site work:

- **Codes tab (highest priority):** missing **Glacier Aminos + Peptides.gg**; **stale VCR code** (app shows `PROFPEPTIDE` / 20%; site/`vendors.ts` = **`PROF20`**). Full reconcile against `vendors.ts`.
- **Compounds tab:** add the **Bioregulators** category, the blends (KLOW / GLOW), and any supplement additions.
- **Confirm the current live ASC version first** (v1.0.2 status unverified). Low-risk, in-pattern content update; affiliate-only, no IAP.
- **Optional structural fix:** generate a JSON from the site's `vendors.ts` that the app reads at build time → stops recurring code drift at the source.

---

## 3) SCS_MP cross-reference (one line to add to the SCS_MP CC-workflow section)

> **PP SITE changes:** CC commits/pushes straight to `main` (skip local preview); Vercel auto-deploys; review on the live URL; deploy via `git push`, never the Vercel MCP. **PP APP** keeps the EAS-build + App-Store-review pipeline.

---

## 🔗 Cross-references
- **PP_MASTER v13** (parent) · **PP_X_POSTS v27** (cross-promo rebrand) · **PP_SEO v3** · **WL_MASTER v2.0** · **SCS_MP v6.10**

---

*Addendum v2 captures workflow + backlog only; no change to PP_MASTER's product/positioning core.*
