# Strength Cycle Studios — Master Playbook

**Status:** ACTIVE — studio-level strategy, cross-cutting workflow rules, portfolio decisions
**Version:** v6.11 (July 1, 2026) — adds the **App Store screenshot pipeline** and the **social-card pipeline** (both via Claude Design → CC), plus three **execution-model refinements** (one-prompt-at-a-time, don't-over-literalize, Version-A CINC submission pref). Refreshes the Portfolio Snapshot (PP 1.0.8 submitted; /app rebuilt) and cross-ref versions. Carries v6.10 forward unchanged.
**Cross-referenced in:** all per-app MASTER docs

---

## 🚦 RULE #0 — VERIFY BEFORE ASSERTING (no guessing) — HIGHEST PRIORITY, GOVERNS ALL OTHER RULES

Never guess, theorize, assume, or reconstruct from memory anything with a knowable correct value — formats, names, codes, discounts, catalog contents, whether a page/file exists, prior decisions, portfolio state.

Check the source FIRST: (1) the relevant ref doc/knowledge file — **after a compaction, re-read it; never trust the summary**; (2) live data (`web_fetch` / `vendors.ts` / the live page); (3) fresh web research. If the source can't be reached, **say the value is unverified rather than filling it in.** When unsure, **stop and check.**

## Be efficient
Decide-and-act on efficiency. When Mark asks how to do something most efficiently, or when there's a sequencing/method choice Mark would likely defer on, make the call and act on it (draft the prompt / proceed) instead of asking. Add a one-line "tell me if you'd rather X" so Mark can override, but lead with the action and keep rationale to a sentence — don't make him read a long justification to approve something he was going to defer on anyway.

"Decide-and-act on sequencing/method. Keep bringing me the substantive calls that are genuinely mine — anything touching App Store submission or pushing to main, legal/compliance, spending money, or a real product/content decision (which compounds, rotation, authorship). Efficiency routes the work; it never skips RULE #0 verification or trades correctness for speed."

> **Hard-won corollary (June 1):** "absent from the ref docs" ≠ "doesn't exist." Mark's first-hand knowledge of his own assets beats a doc search. This session Claude wrongly doubted (a) ownership of strengthcycle.app and (b) the existence of a built WN homepage — Mark was right both times; the docs simply hadn't logged them. Defer to Mark's first-hand knowledge faster, AND close doc gaps so it stops recurring (this reconciliation is that fix).

Outranks the pre-existing #5 (search project knowledge first), #15 (check ref docs before inventing), #17 (fresh research). Applies to every lane and task type.

---

## 🤝 Execution model — CC owns build work; Claude instructs (v6.10; refinements NEW v6.11)

For any **build task** — anything that produces a researched page, profile, feature, or code (peptide-profile pages, app features, site pages, vendor-page rebuilds, etc.) — **CC owns the whole job: the research, the content-writing, AND the code.** Claude's job is to hand CC the *instructions* and let it work:

- the **spec** to follow (the canonical spec doc),
- the **structural template** to mirror (an existing exemplar page/component),
- the **content guardrails** (evidence-honesty, locked labels, what to verify), and
- the **acceptance checks** (tsc clean, internal links resolve, references/PMIDs verified, staged-files-only + commit message + push discipline).

**Claude does NOT pre-research the topic or pre-write the content/code and hand CC a finished draft.** Writing the body myself (a) idles CC while I work serially, (b) creates needless friction (file-transfer dances to get my draft into the repo), and (c) misuses the division of labor. The two-project split exists to stop CC idling — this is the same principle at the task level: keep CC busy doing the heavy lifting; Claude orchestrates.

**What stays Claude's:** strategy and decisions; short marketing copy (X posts, email drafts, vendor bios); cross-tab orchestration (writing CC/CINC prompts and sequencing them); and verification / spot-check review of what CC produces. CSS inside a CINC prompt remains the one inline-code exception.

> **Captured June 14:** Claude over-functioned by researching and writing a full 225-line peptide profile itself and handing CC a finished draft (forcing a heredoc file-transfer to get it into the repo), instead of instructing CC to research + write + build. Correct pattern: **instruct, don't pre-build.**

### Refinements (NEW v6.11)

- **One prompt at a time.** Deliver CC/CINC prompts singly, not in parallel batches. Mark got mixed up mid-session by two CINC prompts issued together. Give one prompt, wait for the result/report, then give the next. (Exception unchanged from the terminal-delivery rule: multiple *sequential* commands for one executor with no human step between them can share one block.)
- **Don't over-literalize Mark's phrasing.** Interpret intent, not the literal words. When Mark said "get it to CC," he meant the practical outcome (CINC/CD exports to Downloads, CC reads from Downloads) — not a literal file-handoff handshake. Claude repeatedly argued against a mechanism Mark wasn't asking for. Read for what Mark is trying to accomplish and act on that; don't construct objections to a literal reading he didn't intend.
- **Version-A CINC submission pref (LOCKED standing pref).** For App Store submissions, CINC *prepares* everything (creates/edits the version record, attaches build, fills metadata, stages review info) but **ALWAYS pauses before submit** — never clicks "Add for Review" / "Submit for Review" / "Release This Version." **Mark does the final review + submit himself** (and answers the export-compliance modal). This is the standing default, not a per-task instruction. (Consistent with the existing CINC pause discipline; this names it and makes it the default for the whole submission flow.)

---

## 🎨 App Store screenshot pipeline (LOCKED — NEW v6.11)

Producing premium App Store screenshots. The rule that governs everything: **never let an AI redraw the app UI** — it produces rejection risk (misrepresentation) and off-brand output. Only ever use *real* captures, framed.

**Pipeline:** real simulator captures → **Claude Design** (adds frames, gradient backgrounds, brand tag, headline bars) → **PPTX export** → **CC converts PPTX → PNG** at exact device resolution.

- **Sim capture (CC):** boot the target device (iPhone 16 Pro Max, 1290×2796), load latest code, regenerate + re-anchor demo seed, set the 9:41 marketing status bar (`xcrun simctl status_bar "booted" override --time "9:41" --dataNetwork wifi --wifiMode active --wifiBars 3 --cellularMode active --cellularBars 4 --batteryState charged --batteryLevel 100` — resets on reboot). Cmd+S saves at exact device res.
- **Claude Design** (claude.ai/design, Anthropic Labs product, powered by Opus 4.8; shares Mark's usage pool): builds the premium panels — brand tag, cyan `#0891b2` accent, airy white→cyan gradient/glow, iPhone frame, real screenshots embedded.
- **Design export is PPTX, not PNG.** Design does NOT export PNG directly (only PDF/Video/PPTX/zip/HTML). **PDF export is BROKEN** (runtime intercepts `window.print()`; clips side-by-side layout). **PPTX export WORKS** — direct download, embeds screenshots as native images.
- **CC conversion (proven):** find newest `.pptx` in `~/Downloads`; LibreOffice `soffice --headless --convert-to pdf` → PyMuPDF renders each page to PNG at exactly 1290 px wide (downsample only, **never upscale** — embedded shots are native 1320×2868, so they downsample crisp), snapped to 1290×2796. Save to `~/Desktop/pp-screenshots/panel1–6.png`. Verify each with `sips`.
- **Upload is a manual Mark step** — local-file → App Store Connect upload. CINC can't drive the OS file-picker; CC can't upload to Apple. After upload, CINC can *verify* (order/resolution/all present/old set replaced).

### ⚠️ The pairing-drift trap + fix (hard-won this session)

Claude Design kept **drifting the headline↔screenshot pairing** across panels — a pairing would be fixed, confirmed correct on canvas, then the exported PPTX carried the OLD mismatch. **Root cause (diagnosed by CC):** CD's `assets/01–06` image files were being **re-synced/shuffled between operations** by something outside the edit — so every re-pairing raced against the shuffle. **The durable fix: embed the screenshots directly inline (as data URIs) in the CD source files** so nothing can shuffle them afterward. That ended the drift.

Operating rules from this:
- **Pin headlines to screenshots by VISIBLE CONTENT, not by slot/label** ("the Semaglutide 1.58 mg curve" → "See your estimated levels"), and require CD to **read back all pairings** (headline + what's under it) for Mark to verify **before exporting**. This read-back is the cheap insurance that stops re-exporting a broken file.
- **CC re-verifies each pairing** on the converted PNGs before declaring success — catches a bad export before it reaches the App Store.
- **Headline text is baked into each panel's pixels** — you CANNOT fix a mismatch by reordering/renaming the PNGs. The source must be fixed and re-exported.
- **Fallback if CD keeps drifting:** stop relying on CD for the pairing — have **CC composite the final panels deterministically** (6 raw screenshots + 6 headline/background panels, assembled correctly, no drift). Not needed once the inline-image fix held, but it's the escape hatch.
- Headlines describe **TRACKING, not outcomes** ("estimated levels," never "medication levels") — stays clear of the health-claim line and holds RUO/educational positioning.

---

## 📣 Social-card pipeline (LOCKED — NEW v6.11)

Promo cards for the app on X + Instagram, derived from the same Claude Design source as the screenshots (cheap derivative, not a new design project).

- **Formats:** X link card **1200×628** (1.91:1 — X's large-link-card ratio; NOT 16:9, which crops); Instagram feed card **1080×1350** (4:5); Instagram **carousel** = a set of 1080×1350 slides (re-lay-out each panel fresh for 4:5, don't squeeze the tall App Store panels in).
- **CD builds the cards; short copy on them is Claude's** (headline/support/CTA). Use the official Apple **"Download on the App Store" badge** exactly as-is (no recolor/restyle/crop — Apple's rules); if the badge PNG has a baked white background, have CD make it transparent / crop tight.
- **Card export → CC:** CD exports PNGs to `~/Downloads` (if CD can only produce PPTX, CC converts — routine). CC then **wires the X card in as the page's OG image** (copy into `public/og/`, point `og:image` + `twitter:image` at it via the page metadata, confirm `twitter:card = summary_large_image`), deploy, curl-verify live.
- **The card is a LINK card, not an attached image** — matches Mark's daily vendor-post mechanic: the card is the **OG image on a page** (e.g. `/app`); posting the link renders the card and clicking it goes to the page. (An `apps.apple.com` link would render Apple's generic OG card — hence route through `/app`.)
- **Bust X's card cache after swapping an OG image:** run the URL through **X's Card Validator** (`cards-dev.x.com/validator`) — it re-scrapes and refreshes X's cache ("Card loaded successfully" in the log = done, even though the tool no longer renders a visual preview; use the **Tweet Composer** to actually see the card). Fallback: append a throwaway `?v=N` query string — **but** this does NOT work if the page declares a `<link rel="canonical">` (X normalizes to canonical and reuses the cached card); in that case use the validator.

> **Cross-entity note (unchanged from prior guidance):** SCS marketing assets must NOT live under the Capstone identity (`mark@capstonepeptides.com` Canva account) — keep entities walled off. For this session Canva was skipped entirely (login-wall friction + account hygiene) in favor of the Design → PPTX → CC route.

---

## 🌐 Site Portfolio — reconciled (v6.9)

Mark's Cloudflare account (Strengthcyclestudios@gmail) holds **8 zones**. Hosting model for every SCS site: **code on Vercel + a domain Mark owns + Cloudflare DNS (grey cloud / DNS-only) routing the domain to Vercel.** Brand marketing sites deploy via `vercel deploy --prod`; PP (profpeptide.com) auto-deploys on every push to main.

| Zone | State | Notes |
|---|---|---|
| **profpeptide.com** | ✅ LIVE | PP site (Next.js, Vercel **auto-deploy from main**). |
| **hybridrockstar.app** | ✅ LIVE | HR marketing site; Resend contact form → markshurtliff@gmail.com (RESEND_API_KEY set). |
| **strengthcycle.app** | ✅ LIVE | SC marketing site (Vercel `strength-cycle-site`). CNAME `a00a66303c6175b8.vercel-dns-017.com`, www 307→apex. Distinct from **strengthcycle.shop** (GoDaddy merch — not a Cloudflare zone). |
| **weightliftingnation.com** | ✅ LIVE | WN coming-soon homepage (Vercel `weightlifting-nation`). Canonical. CNAME `689df7034bc2289b.vercel-dns-017.com`. |
| **wlnation.com** | ✅ 308 → weightliftingnation.com | WN short-alias. **"WL" = WeightLifting, NOT White Label.** |
| **capstonepeptides.com** | Coming-soon | Capstone; Email Routing → markshurtliff@gmail.com. Storefront gated on Denise's banking/platform rec. |
| **pandorapeptides.com** | ❓ Purpose undocumented | **Mark to clarify** (likely a held/planned peptide-retail domain). |
| **renaissancepeptides.com** | ❓ Purpose undocumented | **Mark to clarify** (likely a held/planned peptide-retail domain). |

**Vercel account note:** Claude's Vercel MCP is a DIFFERENT account, **403-forbidden** from Mark's team (`team_inZmpqOyFeIkgVpfdvCna1rF` / `masbooksonebays-projects`) — so Claude can't see Mark's Vercel via MCP. Use CINC or Mark's authed CLI.

---

## 🏗️ SCS brand-site deploy pattern (LOCKED — restated v6.9)

1. CC builds the repo (static site + Resend serverless fn). 2. Vercel project imported/linked. 3. **`RESEND_API_KEY` is PER-PROJECT** — set it in a REAL plain terminal (`cd ~/Desktop/[site] && vercel env add RESEND_API_KEY production`, paste key into the terminal prompt, never chat → `vercel env ls production` → `vercel deploy --prod`). A Sensitive var can't be set from a CC/`!` session (no TTY). One terminal does NOT propagate to other projects; each project needs its own. (Vercel team-level Shared Env Vars would set-once but are Pro/Enterprise-only; Mark is Hobby.) 4. **CINC** does Vercel domain config + Cloudflare DNS — **grey cloud / DNS only**, via Domain Connect "Auto configure" (the Cloudflare SPA DNS panel has a recurring "Still loading" issue → Domain Connect is the working path). 5. Let's Encrypt SSL auto-issues. 6. **Independently web_fetch the live URL before declaring it live.** ~8 min end to end.

Validated on strengthcycle.app + weightliftingnation.com/wlnation.com (both followed the pattern cleanly).

---

## 🔎 PP SEO — doc rename + weekend routine (v6.9; version note updated v6.11)

- **PP_INDEXING → PP_SEO.** The PP search workstream is tracked as full SEO (indexing is one section). PP core diagnosis: **position/CTR, not indexing.** *(Now on PP_SEO v13 + PP_SEO_LEDGER v3 — see those for the live tier roadmap; two docs, review both at the start of SEO sessions: narrative PP_SEO + operational PP_SEO_LEDGER.)*
- **Recurring weekend GSC query-mining routine** (weekly, weekends): Mark exports GSC (7-day routine / 28-day for retitle hunts) → Claude buckets (A page-1-zero-click → rewrites; B buried → builds/ranking; C thin → depth). See **PP_SEO** for the live backlog.

---

## 🏢 Portfolio Snapshot (July 1, 2026 — updated v6.11)

| App | State | Version |
|---|---|---|
| **PP** | LIVE worldwide | **v1.0.8 (build 1.0.10) submitted for review** (release candidate in TestFlight). A live v1.0.7 "Ready for Distribution" pre-existed; 1.0.8 supersedes it. Code-complete cycle: multi-dose PK curves, 60-compound library w/ brand aliases, full haptics, native date/time pickers. **`/app` site page rebuilt** ("All-in-One Peptide Tracker," 60+, iOS 15.1, premium screenshots embedded); OG card live (`ab36ccb`); compound dropdown upgraded to app-parity searchable combobox. |
| **SC** | LIVE worldwide; marketing site LIVE | v1.0.4 live |
| **HR** | LIVE worldwide; marketing site LIVE | v1.0.2 handled |
| **WN** | iOS app pre-build (methodology spec phase); marketing site LIVE | — |
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
**July 1, 2026 (v6.10 → v6.11):**
- ✅ **App Store screenshot pipeline added (LOCKED):** sim capture → Claude Design (frames/headlines) → PPTX export → CC converts to PNG at exact device res. Design PDF export broken; PPTX works; Design can't export PNG directly. Documented the pairing-drift trap (CD asset files re-sync/shuffle between ops) and the fix (embed images inline as data URIs; content-anchored pairing; CD read-back before export; CC re-verifies; CC-composite fallback). Never let AI redraw app UI.
- ✅ **Social-card pipeline added (LOCKED):** CD builds X (1200×628) / IG (1080×1350) / carousel cards; Claude owns on-card copy; official Apple badge used as-is; CC wires the X card in as the `/app` OG image + deploys; card is a LINK card (OG image on a page), matching the daily vendor-post mechanic; bust X's cache via the Card Validator (or `?v=N` when no canonical).
- ✅ **Execution-model refinements:** one-prompt-at-a-time; don't over-literalize Mark's phrasing (intent over literal words — the "get it to CC" correction); Version-A CINC submission pref (CINC prepares, always pauses before submit; Mark does final review + submit) named as the standing default.
- ✅ **Portfolio Snapshot refreshed:** PP 1.0.8 submitted; /app rebuilt; OG card live; compound dropdown upgraded. Cross-ref versions updated.

**June 14, 2026 (v6.9 → v6.10):**
- ✅ **Execution-model rule added** — for build tasks, CC owns research + content-writing + code; Claude provides the spec / structural template / guardrails / acceptance-checks only, and does NOT pre-research or pre-write the content/code. What stays Claude's: strategy & decisions, short marketing copy (X posts, email, vendor bios), cross-tab orchestration, and verification. Captured after Claude pre-wrote a full 225-line peptide profile itself instead of instructing CC to build it.

**June 1, 2026 (v6.8 → v6.9):**
- ✅ **Site portfolio reconciled** — full 8-zone Cloudflare list logged; strengthcycle.app + weightliftingnation.com + wlnation.com added; pandorapeptides.com + renaissancepeptides.com flagged for Mark to clarify.
- ✅ **SC + WN marketing sites LIVE** (both via the brand-site deploy pattern; independently verified).
- ✅ **Brand-site deploy pattern restated** with the per-project RESEND_API_KEY rule + Domain Connect workaround.
- ✅ **PP_INDEXING → PP_SEO** rename noted; weekend GSC query-mining routine cross-referenced.
- ✅ RULE #0 corollary added ("absent from docs ≠ doesn't exist"; defer to Mark's first-hand knowledge faster).

**May 30, 2026 (v6.7 → v6.8):** RULE #0 added. *(See v6.8.)*

---

## 🔗 Cross-References
- **PP_MASTER v15** · **PP_SEO v13 / PP_SEO_LEDGER v3** · **PP_X_POSTS v37 (active) / v30 (frozen format)** · **SC_MASTER_ACTIVE v5.14** · **SC_MASTER_FROZEN v5.3** · **HR_MASTER v9** · **WN_MASTER_ACTIVE v1.2 / FROZEN v1.1** · **WL_MASTER_ACTIVE v1.8**

---

*Studio master playbook. RULE #0 governs all. Execution model: CC owns build work, Claude instructs. Screenshot + social-card pipelines: Claude Design → CC. Three apps live worldwide; SC + WN + HR marketing sites live. PP 1.0.8 submitted; WN iOS build gate open.*
