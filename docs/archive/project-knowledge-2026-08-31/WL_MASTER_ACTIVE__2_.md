# White Label — Master Active Tracker (Capstone Peptides)

**Status:** ACTIVE TRACKER — dynamic state, current shortlist, open decisions, milestone progress for the White Label business unit (operating brand: **Capstone Peptides**). Stable rules live in WL_MASTER_FROZEN.md.

**Version:** v1.3 (May 19, 2026 evening) — coming-soon page DEPLOYED + workflow lessons captured + Path A/B/C decision still pending
**Cross-referenced in:** SCS_MP v6.1
**Parent:** WL_MASTER_FROZEN.md v1.1

---

## 📍 Status Snapshot (May 19, 2026 evening)

**PHASE:** Brand surface live. Partner discovery prep + Path decision pending.

**BRAND:** **Capstone Peptides — LOCKED.** Domain capstonepeptides.com registered + DNS configured + SSL active. Coming-soon page live.

**SITE (UPDATED THIS SESSION):** ✅ **DEPLOYED** at https://capstonepeptides.com — text-only coming-soon page rendering HTTPS 200. Apex canonical, www→apex 308 permanent redirect verified. Vercel auto-deploys from `main` (capstone-peptides repo).

**LLC:** Not yet formed. Subsidiary-of-SCS structure decided (Option A). State of formation TBD.

**PARTNERS:** Tier 1 shortlist locked (SmartMD, Royal Wholesale, YPB, Licensed Peptides, RapidFulfillment). Discovery inquiries on hold pending Path decision.

**REGULATORY:** Path A/B/C framework established. Path decision still pending Mark's enforcement risk tolerance assessment.

**LAUNCH MILESTONES:** Coming-soon brand presence live. First concrete forward step on WL workstream complete.

---

## 👤 Mark Identity Note (LOCKED PRIOR SESSION)

**Mark is an attorney.** Durable context for all future WL discussions. Relevant for:
- Path C enforcement risk management (can read FDA letters, AG complaints firsthand)
- LLC structuring decisions (can interpret regs directly)
- Trademark posture (e.g., Capstone Nutrition INW conflict — chose to proceed without federal trademark filing)
- Legal/IP/risk discussions: skip basics, focus on tactical detail and tradeoffs

---

## 🌐 Coming-Soon Deployment State (NEW THIS SESSION — May 19, 2026)

**Status:** ✅ FULLY LIVE on https://capstonepeptides.com

| Component | State |
|---|---|
| Domain | capstonepeptides.com registered (Cloudflare DNS, Vercel project) |
| DNS | Two CNAMEs at Cloudflare, both grey cloud (DNS only, NOT proxied) |
| Apex CNAME | `dbd17a34c58ae52b.vercel-dns-017.com` |
| www CNAME | `dbd17a34c58ae52b.vercel-dns-017.com` |
| SSL | Let's Encrypt auto-issued, active on both domains |
| Production redirect | `www.capstonepeptides.com` → 308 → `capstonepeptides.com` (apex canonical) |
| Final page commit | `a7a12c0` — text-only (mountain SVG removed mid-cycle) |
| Repo | github.com/masbooksonebay/capstone-peptides (private) |
| Stack | Next.js 16.2.6 + React 19 + Tailwind v4 (diverges from PP/HR's Next 14 + Tailwind v3 — `create-next-app@latest` defaults shifted) |
| Page content | Wordmark "Capstone Peptides" / "COMING SOON" / "For inquiries: hello@capstonepeptides.com" / "© 2026 Strength Cycle Studios, LLC" |
| Deployment Protection | Enabled on preview URLs (Vercel default); production domain bypasses |

**Total deployment cycle:** ~8 minutes Cloudflare-to-verified.

**Pattern reference for future SCS brand sites:** Vercel + Cloudflare + Next.js single-page. Stack consolidation across portfolio is worth considering at a later cycle.

---

## ⚖️ Path A/B/C Regulatory Framework (UNCHANGED THIS SESSION)

[Unchanged — see WL_MASTER_ACTIVE v1.2 for full framework]

Three viable operational paths. **The Path choice determines the partner shortlist.**

- **Path A** — Skip Sema/Tirz/Reta entirely; Mazdutide/Survodutide/Cagrilintide + recovery stack. Lower revenue ceiling, dramatically reduced enforcement. Partner fit: YPB.
- **Path B** — Dual-tier RUO + 503A/503B clinical. True regulatory firewall. Operationally complex. Partner fit: structurally rare.
- **Path C** — RUO including big three. Current enforcement target zone. Highest revenue and exposure. Partner fit: SmartMD RUO, Royal Wholesale, Evolve, RapidFulfillment, Licensed Peptides Wholesale.

**Path decision still pending Mark's risk tolerance assessment.**

---

## 📜 Regulatory Environment (UNCHANGED THIS SESSION)

[Unchanged — see v1.2 for full detail]

- CT AG (William Tong) v. Triggered Brand (2025-2026) — RUO disclaimer does NOT insulate per CT AG theory
- FDA Sept 9, 2025 warning letter wave on Sema/Tirz/Reta; 30 letters to telehealth GLP-1 compounders
- NABP Rogue Pharmacy report + WSJ identified 50+ peptide websites under enforcement spotlight
- Mark's attorney background = mitigating factor on Path C, not eliminator

---

## 🤝 Partner Shortlist (UNCHANGED THIS SESSION)

[Unchanged from v1.2 — Tier 1 candidates: SmartMD Labs, Royal Peptides Wholesale, YPB, Licensed Peptides Wholesale, RapidFulfillment. Tier 2: Evolve. Skip / wrong tier: Zeptide, Growscience, Cernum, Unrivaled, enterprise CDMOs.]

**Discovery inquiry status:** Drafted but not sent. On hold pending Path decision.

---

## 🛠️ Workflow Lessons Captured This Session

### CINC handles Cloudflare DNS (and any web dashboard task)
Prior assumption that DNS additions were Mark-manual was wrong. CINC operates Cloudflare's dashboard the same way it operates Vercel's. Future SCS deployments should default to CINC for the full Vercel + DNS chain.

### CINC Cloudflare proxy toggle convention
Use **direct mouse click on the toggle**, NOT `form_input` checkbox-set method. The form_input approach showed visual grey state momentarily but didn't persist through save (Cloudflare UI quirk). Caught via post-save zoom inspection during the apex CNAME save.

### CINC pause-discipline hierarchy
The pause-between-phases pattern is App-Store-Connect-specific risk management for irreversible release-gating actions, NOT general CINC behavior. The corrected hierarchy:
- **Mandatory pauses:** authentication needs + irreversible release-gating
- **Conditional pauses:** unexpected state needing judgment
- **No pauses:** standard form fills + reversible config (DNS, web dashboards)

Validated by 8-min end-to-end Cloudflare DNS + verification cycle.

### Vercel deploy verification pattern
After `git push` + Vercel auto-deploy wait, curl-verify the **canonical URL** (not cache-buster `?v=N`) with grep for the expected change. Vercel's edge cache occasionally serves stale HTML for ~30-60 seconds post-deploy on canonical URLs; cache-buster URLs are always fresh but don't verify the actual user-facing path.

### Vercel Deployment Protection
Default scope is preview URLs only — production domain aliases bypass. Worth toggling OFF entirely for public-facing projects after launch to enable easier preview URL sharing. Settings → Deployment Protection → "None" or disable.

### Workflow lessons applied across the portfolio
All four lessons go into SCS_MP v6.1.

---

## 🔓 Open Strategic Decisions

### 1. Path A/B/C Decision — STILL DEFERRED
Pending Mark's enforcement risk tolerance assessment after reviewing CT AG / FDA / NABP context. Attorney background = relevant input.

### 2. Brand Name + Domain — RESOLVED ✅
Capstone Peptides locked. capstonepeptides.com live with text-only coming-soon page.

### 3. State of LLC Formation — UNCHANGED (deferred)
Virginia default; Delaware/Wyoming under consideration. Decision after partner outcome.

### 4. Payment Stack — UNCHANGED (locked v1.1)
ACH via Plaid + Crypto + Zelle + Wire as launch stack; cards deferred to v2.

### 5. Catalog Scope at Launch — DEFER UNTIL PATH RESOLVED

---

## 📅 Changelog

**May 19, 2026 evening (this session):**
- ✅ **COMING-SOON PAGE DEPLOYED** at https://capstonepeptides.com
- ✅ Cloudflare DNS configured (both CNAMEs, grey cloud)
- ✅ SSL active (Let's Encrypt auto-issued)
- ✅ www→apex 308 redirect verified
- ✅ Commit `a7a12c0` (mountain SVG removed mid-cycle, text-only final state)
- ✅ Capstone deployment pattern locked as reference template for future SCS brand sites
- ✅ Workflow lessons captured: CINC Cloudflare DNS handling, proxy toggle convention, pause-discipline scope correction, Vercel cache lag verification pattern

**May 19, 2026 morning (this session):**
- ✅ **BRAND LOCKED:** Capstone Peptides + Path A/B/C framework + partner shortlist rebuild + attorney identity (see v1.2)

**May 16, 2026** entries unchanged (locked prior session decisions — see v1.1)

---

## 🎯 Next Milestones (Sequential)

1. **PATH DECISION** — Mark resolves Path A/B/C question
2. **Partner discovery inquiries (parallel)** — SmartMD + Royal at minimum; add Licensed Peptides Wholesale + RapidFulfillment if Path C
3. ~~Coming-soon page deployed~~ ✅ DONE
4. **Banking research call** (Mercury / Bluevine / Relay / Easy Pay Direct)
5. **State of LLC formation locked**
6. **Capstone Peptides LLC formed** + EIN obtained
7. **Bank accounts opened** (2+ at different banks)
8. **Plaid + Coinbase Commerce + Zelle stack spec'd**
9. **Partner agreement signed** (chosen Tier 1)
10. **Brand identity work** beyond wordmark (full logo system, color, typography)
11. **Site build kickoff** (custom Next.js, ~4-8 weeks) — replaces coming-soon page
12. **Catalog finalized** (SKUs + descriptions + COAs uploaded)
13. **Compliance review** (legal counsel pass)
14. **Soft launch → Full launch**
15. **Card processor underwriting (v2)** — 3-6 months post-launch

---

## 📝 Open Research Threads

[Unchanged — SmartMD discovery, Royal Wholesale discovery, Licensed Peptides catalog verification, RapidFulfillment peptide catalog verification, Path A/B/C resolution, banking acceptance landscape, processor underwriting requirements, state shipping restrictions, insurance quotes, compliance counsel selection, domain transfer to SCS LLC ownership]

---

## 🔗 Cross-References

- **WL_MASTER_FROZEN.md v1.1** — frozen rules, structural decisions, compliance framework, design principles
- **SCS_MP v6.1** — parent doc, three-lane portfolio architecture, cross-cutting workflow lessons including CINC Cloudflare conventions
- **PP_MASTER v6** — separation reference (PP must remain fully independent of Capstone)

---

*Active tracker for Capstone Peptides business unit. Coming-soon page live as of May 19, 2026 evening. Path decision still pending.*
