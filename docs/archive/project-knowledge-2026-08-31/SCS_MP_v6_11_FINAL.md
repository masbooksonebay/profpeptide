# Strength Cycle Studios — Master Playbook

**Status:** ACTIVE — studio-level strategy, cross-cutting workflow rules, portfolio decisions
**Version:** v6.11 (July 1, 2026) — adds the **App Store screenshot pipeline** and **social-card pipeline** (both via Claude Design → CC), three **execution-model refinements** (one-prompt-at-a-time, don't-over-literalize, Version-A CINC submission pref), and the **Claude Design** tool note. Refreshes the Portfolio Snapshot and cross-refs. Carries v6.10 forward unchanged.
**Cross-referenced in:** all per-app MASTER docs

---

## 🚦 RULE #0 — VERIFY BEFORE ASSERTING (no guessing) — HIGHEST PRIORITY, GOVERNS ALL OTHER RULES

Never guess, theorize, assume, or reconstruct from memory anything with a knowable correct value — formats, names, codes, discounts, catalog contents, whether a page/file exists, prior decisions, portfolio state.

Check the source FIRST: (1) the relevant ref doc/knowledge file — **after a compaction, re-read it; never trust the summary**; (2) live data (`web_fetch` / `vendors.ts` / the live page / **the actual repo code**); (3) fresh web research. If the source can't be reached, **say the value is unverified rather than filling it in.** When unsure, **stop and check.**

> **Corollary reinforced (July 1):** past-chat *summaries* and mid-session reports are not proof of final shipped state. The HR brand font iterated (Roboto Mono → Barlow Condensed → Saira → …); a chat saying a change was "done" wasn't proof — CC reading the **shipped repo code** confirmed the real font (Barlow Condensed Bold). When a value is in code, read the code. Also: check **past chats** (not just ref docs + current session) before answering "does a plan/decision exist" — the HR Instagram plan existed in chats/HR_MASTER while Claude initially said it didn't.

## Be efficient
Decide-and-act on efficiency. When Mark asks how to do something most efficiently, or when there's a sequencing/method choice Mark would likely defer on, make the call and act on it (draft the prompt / proceed) instead of asking. Add a one-line "tell me if you'd rather X" so Mark can override, but lead with the action and keep rationale to a sentence — don't make him read a long justification to approve something he was going to defer on anyway.

"Decide-and-act on sequencing/method. Keep bringing me the substantive calls that are genuinely mine — anything touching App Store submission or pushing to main, legal/compliance, spending money, or a real product/content decision (which compounds, rotation, authorship). Efficiency routes the work; it never skips RULE #0 verification or trades correctness for speed."

> **Hard-won corollary (June 1):** "absent from the ref docs" ≠ "doesn't exist." Mark's first-hand knowledge of his own assets beats a doc search. Defer to Mark's first-hand knowledge faster, AND close doc gaps so it stops recurring.

Outranks the pre-existing #5 (search project knowledge first), #15 (check ref docs before inventing), #17 (fresh research). Applies to every lane and task type.

---

## 🤝 Execution model — CC owns build work; Claude instructs (v6.10; refinements NEW v6.11)

For any **build task** — anything that produces a researched page, profile, feature, or code — **CC owns the whole job: the research, the content-writing, AND the code.** Claude hands CC the *instructions* and lets it work: the **spec**, the **structural template** to mirror, the **content guardrails**, and the **acceptance checks** (tsc clean, links resolve, references verified, staged-files-only + commit + push discipline).

**Claude does NOT pre-research or pre-write the content/code and hand CC a finished draft.** Writing the body myself idles CC, creates file-transfer friction, and misuses the division of labor. Keep CC busy doing the heavy lifting; Claude orchestrates.

**What stays Claude's:** strategy and decisions; short marketing copy (X posts, email drafts, vendor bios); cross-tab orchestration (writing + sequencing CC/CINC prompts); verification / spot-check review. CSS inside a CINC prompt remains the one inline-code exception.

> **Captured June 14:** Claude over-functioned by pre-writing a 225-line peptide profile instead of instructing CC to build it. Correct pattern: **instruct, don't pre-build.**

### Refinements (NEW v6.11)
- **One prompt at a time.** Deliver CC/CINC prompts singly, not in parallel batches — Mark got mixed up mid-session by two CINC prompts issued together. One prompt, wait for the report, then the next. (Exception: multiple *sequential* commands for one executor with no human step between can share one block.)
- **Don't over-literalize Mark's phrasing.** Interpret intent, not literal words. "Get it to CC" meant the practical outcome (CD/CINC exports to Downloads → CC reads Downloads), not a literal file-handoff. Read for what Mark is accomplishing and act on that.
- **Version-A CINC submission pref (LOCKED standing default).** For App Store submissions, CINC *prepares* everything (version record, build attach, metadata, review info) but **ALWAYS pauses before submit** — never clicks Add for Review / Submit for Review / Release This Version. **Mark does the final review + submit** (and the export-compliance modal). Standing default, not a per-task instruction.

### One terminal per repo (Claude Desktop CC)
Mark now runs CC inside the **Claude Desktop app** (not the laptop terminal), one terminal per repo, to avoid crossed work. Each CC terminal is a **separate context** pinned to its repo. Current: **PP app** (`~/dev/profpeptide-app`), **PP site** (`~/dev/profpeptide`), **HR app** (`~/dev/hybrid-rockstar`). HR *site* (`~/dev/hybrid-rockstar-site`) would be its own terminal. Every prompt still `cd`s into its repo as the first line (self-corrects wherever the terminal opens).

---

## 🎨 App Store screenshot pipeline (LOCKED — NEW v6.11)

Governing rule: **never let an AI redraw the app UI** — rejection risk (misrepresentation) + off-brand. Only ever frame *real* captures.

**Pipeline:** real simulator captures → **Claude Design** (frames, gradient backgrounds, brand tag, headlines) → **PPTX export** → **CC converts PPTX → PNG** at exact device res.

- **Sim capture (CC):** boot target device (iPhone 16 Pro Max, 1290×2796), load latest code, regenerate + re-anchor demo seed, set the 9:41 marketing status bar (`xcrun simctl status_bar "booted" override --time "9:41" --dataNetwork wifi --wifiMode active --wifiBars 3 --cellularMode active --cellularBars 4 --batteryState charged --batteryLevel 100` — resets on reboot). Cmd+S saves at exact device res.
- **Design export is PPTX, not PNG.** Claude Design does NOT export PNG directly (PDF/Video/PPTX/zip/HTML only). **PDF export is BROKEN** (clips side-by-side). **PPTX works** — embeds screenshots as native images.
- **CC conversion (proven):** newest `.pptx` in `~/Downloads`; LibreOffice `soffice --headless` → PDF → PyMuPDF → PNG at exactly 1290 px wide (downsample only, **never upscale**), snap to 1290×2796; save `~/Desktop/pp-screenshots/panel1–6.png`; `sips`-verify.
- **Upload is a manual Mark step** (local file → App Store Connect; CINC can't drive the OS file-picker, CC can't upload to Apple). After upload, CINC can *verify* order/resolution/all-present/old-set-replaced.

### ⚠️ Pairing-drift trap + fix (hard-won)
Claude Design kept **drifting the headline↔screenshot pairing** — fixed on canvas, then the exported PPTX carried the OLD mismatch. **Root cause (CC-diagnosed):** CD's `assets/01–06` image files were **re-synced/shuffled between operations**, so every re-pairing raced the shuffle. **Durable fix: embed the screenshots inline (data URIs) in the CD source** so nothing can shuffle them. Operating rules:
- **Pin headlines to screenshots by VISIBLE CONTENT, not slot/label**, and require CD to **read back all pairings** for Mark to verify **before exporting**.
- **CC re-verifies each pairing** on the converted PNGs before declaring success.
- **Headline text is baked into each panel's pixels** — cannot fix a mismatch by reordering PNGs; fix the source + re-export.
- **Fallback if CD keeps drifting:** have **CC composite** the final panels deterministically (raw screenshots + headline panels). Not needed once inline-image fix held.
- Headlines describe **TRACKING, not outcomes** ("estimated levels," not "medication levels") — holds RUO/health-claim line.

---

## 📣 Social-card pipeline (LOCKED — NEW v6.11)

Promo cards for app/site on X + Instagram, derived from the same Claude Design source (cheap derivative).

- **Formats:** X link card **1200×628** (1.91:1 — NOT 16:9, which crops); IG feed card **1080×1350** (4:5); IG **carousel** = set of 1080×1350 slides (re-lay-out each panel fresh for 4:5).
- **CD builds cards; on-card copy is Claude's.** Use the official Apple **"Download on the App Store" badge** as-is (no recolor/restyle/crop; make baked white backgrounds transparent).
- **Export → CC:** CD exports PNGs to `~/Downloads` (if only PPTX, CC converts). CC then **wires the X card in as the page's OG image** (into `public/og/`, point `og:image` + `twitter:image` at it, confirm `twitter:card = summary_large_image`), deploy, curl-verify.
- **The card is a LINK card, not an attachment** — matches the daily vendor-post mechanic: OG image on a page (e.g. `/app`); posting the link renders the card and clicking goes to the page. (An `apps.apple.com` link would render Apple's generic card — route through `/app`.)
- **Bust X's card cache after an OG swap:** X **Card Validator** (`cards-dev.x.com/validator`) re-scrapes ("Card loaded successfully" in the log = done; the tool no longer *renders* a preview — use the **Tweet Composer** to see it). Fallback `?v=N` **only works if the page has no `<link rel=canonical>`** (X normalizes to canonical otherwise).

> **Cross-entity note:** SCS marketing assets must NOT live under the Capstone identity (`mark@capstonepeptides.com` Canva account) — keep entities walled off. This cycle Canva was skipped entirely in favor of the Design → PPTX → CC route.

---

## 🎨 Claude Design — tool note (NEW v6.11)
**Claude Design** (claude.ai/design; Anthropic Labs; powered by Opus 4.8; shares Mark's usage pool) is now an active studio tool. It produced the **PP app App Store screenshots** this cycle and did an excellent job. Uses: App Store screenshot panels, social cards + IG carousels, and **candidate for future PP-website premium visuals / mockups** (prototype the look → Mark approves → CC builds to match). Export is PPTX (not direct PNG); pair with the CC conversion step above. Its asset files can re-sync/shuffle → embed images inline (see pairing-drift fix).

---

## 🌐 Site Portfolio — reconciled (v6.9)

Mark's Cloudflare account (Strengthcyclestudios@gmail) holds **8 zones**. Hosting model: **code on Vercel + a domain Mark owns + Cloudflare DNS (grey cloud / DNS-only) → Vercel.** Brand sites deploy via `vercel deploy --prod`; PP auto-deploys on push to main.

| Zone | State | Notes |
|---|---|---|
| **profpeptide.com** | ✅ LIVE | PP site (Next.js, Vercel **auto-deploy from main**). |
| **hybridrockstar.app** | ✅ LIVE | HR marketing site; Resend contact form → markshurtliff@gmail.com. |
| **strengthcycle.app** | ✅ LIVE | SC marketing site. Distinct from **strengthcycle.shop** (GoDaddy merch — not a Cloudflare zone). |
| **weightliftingnation.com** | ✅ LIVE | WN coming-soon homepage. Canonical. |
| **wlnation.com** | ✅ 308 → weightliftingnation.com | WN short-alias. **"WL" = WeightLifting, NOT White Label.** |
| **capstonepeptides.com** | Coming-soon | Capstone; storefront gated on Denise's banking/platform rec. |
| **pandorapeptides.com** | ❓ Undocumented | **Mark to clarify.** |
| **renaissancepeptides.com** | ❓ Undocumented | **Mark to clarify.** |

**Vercel account note:** Claude's Vercel MCP is a DIFFERENT account, **403-forbidden** from Mark's team — use CINC or Mark's authed CLI.

---

## 🏗️ SCS brand-site deploy pattern (LOCKED — v6.9)
1. CC builds the repo. 2. Vercel project linked. 3. **`RESEND_API_KEY` is PER-PROJECT** — set in a REAL plain terminal (`vercel env add RESEND_API_KEY production`, paste into the prompt, never chat). Can't be set from a CC/`!` session (no TTY); each project needs its own. 4. **CINC** does Vercel domain + Cloudflare DNS (grey cloud / DNS only) via Domain Connect "Auto configure". 5. Let's Encrypt auto-issues. 6. **web_fetch the live URL before declaring live.** ~8 min.

---

## 🔎 PP SEO — doc rename + weekend routine (v6.9; versions updated v6.11)
- **PP_INDEXING → PP_SEO.** PP core diagnosis: **position/CTR, not indexing.** *(Now PP_SEO v13 + PP_SEO_LEDGER v3 — two docs, review both at the start of SEO sessions.)*
- **Recurring weekend GSC query-mining routine:** Mark exports GSC → Claude buckets (A page-1-zero-click → rewrites; B buried → build/rank; C thin → depth). See PP_SEO for the live backlog.
- **NEW: PP_SITE_DESIGN v1** — separate premium-*design* plan for the website (distinct from SEO): keep the app's `#0891b2`, apply restraint (not repaint); Tier 1 = library cards + profile clinical-brief panel + badge system.

---

## 🏢 Portfolio Snapshot (July 1, 2026 — updated v6.11)

| App | State | Version |
|---|---|---|
| **PP** | LIVE worldwide | **v1.0.8 (build 1.0.10) submitted for review** (RC in TestFlight; supersedes a pre-existing live 1.0.7). Code-complete cycle: multi-dose PK curves, 60-compound library w/ brand aliases, full haptics, native date/time pickers. **`/app` site page rebuilt** (All-in-One positioning, 60+, iOS 15.1, premium screenshots); OG card live (`ab36ccb`); compound dropdown upgraded to app-parity searchable combobox. |
| **SC** | LIVE worldwide; marketing site LIVE | v1.0.4 live |
| **HR** | LIVE worldwide; marketing site LIVE | v1.0.2 handled. **Brand font = Barlow Condensed Bold (700)** (branding-only; body = system font; `#FFED00`) — verified from shipped code. Instagram promo plan now in **HR_INSTAGRAM v1**. |
| **WN** | iOS app pre-build (methodology spec phase); marketing site LIVE | — |
| Cali / CrossFit | Not started | — |

---

## (Carried forward UNCHANGED from v6.8 — see that doc)
- **Community-Group Outreach Pattern** · **Studio-Standard Soft-Launch Pattern** · **Capstone Storefront Platform Decision** · **CINC + CC Workflow Rules** (CINC never clicks Release This Version; CC wake-up sequence, parallel repo tabs, `/exit` before `eas build`, git `masbooksonebay@gmail.com`, never modifies icons, no `git add -A` while OG files parked; macOS TCC fix) · **Standing Rule Set** (frozen v6.2/6.3/6.5). RULE #0 outranks all.

---

## 📅 Changelog
**July 1, 2026 (v6.10 → v6.11):**
- ✅ **Screenshot pipeline (LOCKED):** sim → Claude Design → PPTX → CC → PNG. PDF export broken; no direct PNG; pairing-drift root cause (CD asset re-sync) + fix (inline images, content-anchored pairing, CD read-back, CC re-verify, CC-composite fallback). Never redraw app UI.
- ✅ **Social-card pipeline (LOCKED):** CD builds X (1200×628) / IG (1080×1350) / carousel; Claude owns copy; Apple badge as-is; CC wires the X card as the `/app` OG image + deploys; link-card mechanic; Card Validator cache-bust (+ canonical/`?v=` caveat).
- ✅ **Execution refinements:** one-prompt-at-a-time; don't over-literalize; Version-A CINC submission pref (prepare, pause, Mark submits). **One terminal per repo** in Claude Desktop CC.
- ✅ **Claude Design tool note** — active studio tool (App Store screenshots, social cards, candidate for PP-site premium visuals).
- ✅ **RULE #0 corollary** — shipped code / past chats beat summaries + mid-session reports (HR font, HR IG plan).
- ✅ **Portfolio Snapshot refreshed** (PP 1.0.8 submitted; /app rebuilt; HR font verified). Cross-refs updated. New docs: PP_SITE_DESIGN v1, HR_INSTAGRAM v1.

**June 14, 2026 (v6.9 → v6.10):** Execution-model rule added (CC owns research + writing + code; Claude instructs, does not pre-build).

**June 1, 2026 (v6.8 → v6.9):** Site portfolio reconciled (8 zones); SC + WN marketing sites LIVE; deploy pattern restated; PP_INDEXING → PP_SEO; RULE #0 "absent ≠ doesn't exist" corollary.

**May 30, 2026 (v6.7 → v6.8):** RULE #0 added.

---

## 🔗 Cross-References
- **PP_MASTER v15** · **PP_SEO v13 / PP_SEO_LEDGER v3** · **PP_SITE_DESIGN v1** · **PP_X_POSTS v37 (active) / v30 (frozen)** · **SC_MASTER_ACTIVE v5.14** · **SC_MASTER_FROZEN v5.3** · **HR_MASTER v11** · **HR_INSTAGRAM v1** · **WN_MASTER_ACTIVE v1.2 / FROZEN v1.1** · **WL_MASTER_ACTIVE v1.8**

---

*Studio master playbook. RULE #0 governs all (shipped code > summaries). CC owns build work; Claude instructs; Claude Design prototypes visuals. Screenshot + social-card pipelines: Design → CC. Three apps live worldwide; SC + WN + HR marketing sites live. PP 1.0.8 submitted; WN iOS build gate open.*
