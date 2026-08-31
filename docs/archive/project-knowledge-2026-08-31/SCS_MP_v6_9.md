# Strength Cycle Studios — Master Playbook

**Status:** ACTIVE — studio-level strategy, cross-cutting workflow rules, portfolio decisions
**Version:** v6.9 (June 1, 2026) — site-portfolio reconciliation (full 8-zone Cloudflare list), SC + WN marketing sites live, PP_INDEXING → PP_SEO rename
**Cross-referenced in:** all per-app MASTER docs

---

## 🚦 RULE #0 — VERIFY BEFORE ASSERTING (no guessing) — HIGHEST PRIORITY, GOVERNS ALL OTHER RULES

Never guess, theorize, assume, or reconstruct from memory anything with a knowable correct value — formats, names, codes, discounts, catalog contents, whether a page/file exists, prior decisions, portfolio state.

Check the source FIRST: (1) the relevant ref doc/knowledge file — **after a compaction, re-read it; never trust the summary**; (2) live data (`web_fetch` / `vendors.ts` / the live page); (3) fresh web research. If the source can't be reached, **say the value is unverified rather than filling it in.** When unsure, **stop and check.**

> **Hard-won corollary (June 1):** "absent from the ref docs" ≠ "doesn't exist." Mark's first-hand knowledge of his own assets beats a doc search. This session Claude wrongly doubted (a) ownership of strengthcycle.app and (b) the existence of a built WN homepage — Mark was right both times; the docs simply hadn't logged them. Defer to Mark's first-hand knowledge faster, AND close doc gaps so it stops recurring (this reconciliation is that fix).

Outranks the pre-existing #5 (search project knowledge first), #15 (check ref docs before inventing), #17 (fresh research). Applies to every lane and task type.

---

## 🌐 Site Portfolio — reconciled (NEW v6.9)

Mark's Cloudflare account (Strengthcyclestudios@gmail) holds **8 zones**. Hosting model for every SCS site: **code on Vercel + a domain Mark owns + Cloudflare DNS (grey cloud / DNS-only) routing the domain to Vercel.** Brand marketing sites deploy via `vercel deploy --prod`; PP (profpeptide.com) auto-deploys on every push to main.

| Zone | State | Notes |
|---|---|---|
| **profpeptide.com** | ✅ LIVE | PP site (Next.js, Vercel **auto-deploy from main**). |
| **hybridrockstar.app** | ✅ LIVE | HR marketing site; Resend contact form → markshurtliff@gmail.com (RESEND_API_KEY set). |
| **strengthcycle.app** | ✅ LIVE *(NEW)* | SC marketing site (Vercel `strength-cycle-site`). CNAME `a00a66303c6175b8.vercel-dns-017.com`, www 307→apex. Distinct from **strengthcycle.shop** (GoDaddy merch — not a Cloudflare zone). |
| **weightliftingnation.com** | ✅ LIVE *(NEW)* | WN coming-soon homepage (Vercel `weightlifting-nation`). Canonical. CNAME `689df7034bc2289b.vercel-dns-017.com`. |
| **wlnation.com** | ✅ 308 → weightliftingnation.com *(NEW)* | WN short-alias. **"WL" = WeightLifting, NOT White Label.** |
| **capstonepeptides.com** | Coming-soon | Capstone; Email Routing → markshurtliff@gmail.com. Storefront gated on Denise's banking/platform rec. |
| **pandorapeptides.com** | ❓ Purpose undocumented | **Mark to clarify** (likely a held/planned peptide-retail domain). |
| **renaissancepeptides.com** | ❓ Purpose undocumented | **Mark to clarify** (likely a held/planned peptide-retail domain). |

**Vercel account note:** Claude's Vercel MCP is a DIFFERENT account, **403-forbidden** from Mark's team (`team_inZmpqOyFeIkgVpfdvCna1rF` / `masbooksonebays-projects`) — so Claude can't see Mark's Vercel via MCP. Use CINC or Mark's authed CLI.

---

## 🏗️ SCS brand-site deploy pattern (LOCKED — restated v6.9)

1. CC builds the repo (static site + Resend serverless fn). 2. Vercel project imported/linked. 3. **`RESEND_API_KEY` is PER-PROJECT** — set it in a REAL plain terminal (`cd ~/Desktop/[site] && vercel env add RESEND_API_KEY production`, paste key into the terminal prompt, never chat → `vercel env ls production` → `vercel deploy --prod`). A Sensitive var can't be set from a CC/`!` session (no TTY). One terminal does NOT propagate to other projects; each project needs its own. (Vercel team-level Shared Env Vars would set-once but are Pro/Enterprise-only; Mark is Hobby.) 4. **CINC** does Vercel domain config + Cloudflare DNS — **grey cloud / DNS only**, via Domain Connect "Auto configure" (the Cloudflare SPA DNS panel has a recurring "Still loading" issue → Domain Connect is the working path). 5. Let's Encrypt SSL auto-issues. 6. **Independently web_fetch the live URL before declaring it live.** ~8 min end to end.

Validated this session on strengthcycle.app + weightliftingnation.com/wlnation.com (both followed the pattern cleanly).

---

## 🔎 PP SEO — doc rename + weekend routine (NEW v6.9)

- **PP_INDEXING → PP_SEO (v1).** The PP search workstream is now tracked as full SEO (indexing is one section). PP core diagnosis: **position/CTR, not indexing.**
- **Recurring weekend GSC query-mining routine** (weekly, weekends): Mark exports GSC (7-day routine / 28-day for retitle hunts) → Claude buckets (A page-1-zero-click → rewrites; B buried → builds/ranking; C thin → depth). See **PP_SEO v1** for the live backlog (Bucket A 5 rewrites shipped `316de00`; /coupons hub = brand-specific not generic; vendor gap-check 18/18; **Peptide Sciences-led affiliate-acquisition list**).

---

## 🏢 Portfolio Snapshot (June 1, 2026)

| App | State | Version |
|---|---|---|
| **PP** | LIVE worldwide | v1.0.1 live, v1.0.2 submitted |
| **SC** | LIVE worldwide | v1.0.4 live |
| **HR** | LIVE worldwide | v1.0.0 live |
| **WN** | iOS app pre-build (spec phase); **marketing site LIVE** | — |
| Cali / CrossFit | Not started | — |

---

## (Carried forward UNCHANGED from v6.8 — see that doc for full text)
- **Community-Group Outreach Pattern** (HR HYROX → studio-wide go-to-market).
- **Studio-Standard Soft-Launch Pattern** (AU+IE+NZ+UK → worldwide).
- **Capstone Storefront Platform Decision** (gated on Denise's banking/platform rec).
- **CINC + CC Workflow Rules** (CINC pause discipline / never clicks Release This Version; CC wake-up sequence, parallel repo tabs, `/exit` before `eas build`, git `masbooksonebay@gmail.com`, never modifies icons, no `git add -A` while OG files parked; macOS TCC fix pattern).
- **Standing Rule Set** — full numbered catalogue lives in the frozen snapshots (v6.2/6.3/6.5). RULE #0 outranks all.

---

## 📅 Changelog
**June 1, 2026 (v6.8 → v6.9):**
- ✅ **Site portfolio reconciled** — full 8-zone Cloudflare list logged; strengthcycle.app + weightliftingnation.com + wlnation.com added; pandorapeptides.com + renaissancepeptides.com flagged for Mark to clarify.
- ✅ **SC + WN marketing sites LIVE** (both via the brand-site deploy pattern; independently verified).
- ✅ **Brand-site deploy pattern restated** with the per-project RESEND_API_KEY rule + Domain Connect workaround.
- ✅ **PP_INDEXING → PP_SEO** rename noted; weekend GSC query-mining routine cross-referenced.
- ✅ RULE #0 corollary added ("absent from docs ≠ doesn't exist"; defer to Mark's first-hand knowledge faster).

**May 30, 2026 (v6.7 → v6.8):** RULE #0 added. *(See v6.8.)*

---

## 🔗 Cross-References
- **PP_MASTER v13** · **PP_SEO v1** · **PP_X_POSTS v25** · **SC_MASTER_ACTIVE v5.14** · **SC_MASTER_FROZEN v5.3** · **HR_MASTER v9** · **WN_MASTER_ACTIVE v1.2 / FROZEN v1.1** · **WL_MASTER_ACTIVE v1.8**

---

*Studio master playbook. RULE #0 governs all. Three apps live worldwide; SC + WN + HR marketing sites live. WN iOS build gate open.*
