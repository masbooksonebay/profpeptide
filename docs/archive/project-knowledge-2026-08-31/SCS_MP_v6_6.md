# Strength Cycle Studios — Master Playbook

**Status:** ACTIVE — studio-level strategy, cross-cutting workflow rules, portfolio decisions
**Version:** v6.6 (May 27, 2026) — 4-country soft-launch pattern locked as studio standard, Capstone storefront platform decision flagged as gated on RF input
**Cross-referenced in:** all per-app MASTER docs

---

## v6.5 → v6.6 CHANGELOG

**Studio-standard patterns formalized:**
- ✅ **4-country English-speaking soft-launch pattern** locked as studio standard (validated by HR + SC parallel use)
- ✅ **Worldwide expansion CINC pattern** validated (used for both HR and SC on May 27, 2026)
- ✅ **Capstone storefront platform decision corrected** — NOT locked; pending Denise's banking + platform recommendations. Pattern 1 architectural framing conditional on Shopify selection.
- ✅ **Blends > supplements priority lock for PP** — strategic priority signal noted

---

## 🏢 Portfolio Snapshot (May 27, 2026)

| App | State | Territory | Version |
|---|---|---|---|
| **PP (Prof Peptide)** | LIVE | Worldwide (175 countries since May 13, 2026) | v1.0.1 live, v1.0.2 in review |
| **SC (Strength Cycle)** | LIVE | Worldwide (since May 27, 2026) | v1.0.3 live, v1.0.4 in review |
| **HR (Hybrid Rockstar)** | LIVE | Worldwide (since May 27, 2026) | v1.0.0 live |
| **WN (Weightlifting Nation)** | Pre-build (methodology spec phase) | N/A | N/A |
| **Cali** | Not started | N/A | N/A |
| **CrossFit** | Not started | N/A | N/A |

**Site portfolio:**
- profpeptide.com — PP companion website (Next.js on Vercel)
- hybridrockstar.app — HR companion domain (Cloudflare Email Routing pending)
- weightliftingnation.com (Cloudflare) + weightliftingnation.shop (GoDaddy) — WN domains acquired, pre-build
- capstonepeptides.com — Capstone Peptides LLC (Mark's dropship retail business, separate legal entity from SCS LLC)

---

## 🌍 Studio-Standard Soft-Launch Pattern (LOCKED v6.6)

**4 English-speaking + kg-using countries:**
- Australia (AU)
- Ireland (IE)
- New Zealand (NZ)
- United Kingdom (UK)

**Why this set:**
- All English-speaking (no localization required for v1.0)
- All kg-using (no unit conversion friction)
- Distinct enough from US to validate production without exposing largest market to v1.0 bugs
- Apple Review approves global apps to this set without additional regulatory friction

**Validation triggered by:** 1 download or fewer in 5+ days of soft launch confirms zero risk of overwhelming. Worldwide expansion follows.

**Pattern validated by:**
- HR v1.0.0 launched May 22, 2026 to 4-country set → 1 download in 5 days → worldwide expansion May 27
- SC v1.0.3 was at 4-country set pre-May 27 → 1 download similarly → worldwide expansion May 27 (parallel)

**Pattern applies forward to:**
- WN v1.0 (when build phase completes)
- Cali v1.0 (future)
- CrossFit v1.0 (future)

---

## 🛠️ Worldwide Expansion CINC Pattern (LOCKED v6.6)

**Validated May 27, 2026 across HR and SC. Mandatory discipline:**

1. CINC navigates to ASC > App > Distribution > Pricing and Availability
2. **Screenshot CURRENT availability state BEFORE any changes** — read this, don't assume from ref docs
3. Change selection to "All Countries or Regions" (Apple's standard worldwide default — ~175 countries)
4. Verify no individual exclusions are pre-set
5. **PAUSE BEFORE SAVE** — show Mark the pre-save screenshot, get explicit "save" confirmation
6. Click Save
7. Verify save persisted (refresh page)
8. Note: Apple says "within 24 hours" propagation; in practice 2-12 hours per-storefront

**Critical safeguards:**
- CINC does NOT click any "Release This Version" button — availability expansion is separate from version release
- ALWAYS read CINC's BEFORE screenshot before approving save (don't assume starting state from ref docs)
- Pause-before-save discipline mandatory

---

## 🏢 Capstone Storefront Platform Decision (CORRECTED v6.6)

**Status: NOT locked. Pending RF input.**

**What IS locked:**
- Architectural framing IF Shopify is selected: Pattern 1 (Shopify IS capstonepeptides.com), NOT Pattern 2 (separate brand site + shop subdomain)
- Rationale for Pattern 1: RUO attestation blocks educational content surface that would justify separate brand site; two-domain pattern doesn't earn its engineering cost for thin transactional surface
- CC theme development decision: CC handles Shopify theme dev IF Shopify selected (Liquid templating, CSS/SCSS, JavaScript, JSON sections, responsive design, SEO/schema/accessibility) via Shopify CLI

**What is NOT locked:**
- Platform: Shopify vs WooCommerce vs other recommendation from Denise/RF
- Banking partner: pending Denise's recommendation
- Payment processor: depends on platform decision

**Gating items:**
- Denise's response on Rapid Account Set Up thread (banking + platform recommendations)
- CC Authorization Form return to RF accounting (pending Mark fill + send)

**Sprint kickoff blocked until both gates clear.**

---

## 📁 Repo Paths (Mac Desktop)

```
/Users/mark/Desktop/profpeptide          — PP website (Next.js → profpeptide.com)
/Users/mark/Desktop/profpeptide-app      — PP Expo mobile app
/Users/mark/Desktop/strength-cycle       — SC Expo app (ASC 6762101377)
/Users/mark/Desktop/hybrid-rockstar      — HR Expo app (ASC 6762101905)
/Users/mark/Desktop/hybrid-rockstar-api  — HR backend (Next.js on Vercel; shared with SC Ask Coach)
/Users/mark/Desktop/capstone-peptides    — Capstone coming-soon page (Next.js → capstonepeptides.com on Vercel)
```

DO NOT CONFUSE: profpeptide (website) vs profpeptide-app (mobile app).

---

## 🛠️ CINC Workflow Rules (UNCHANGED from v6.5)

### ASC Submission Prompts
[Unchanged] — explicit pause-before-submit checkpoints, never click Release This Version, note compliance modal absence, survey-before-action, screenshot capture at decision points.

### General CINC Pause-Discipline Hierarchy
[Unchanged from v6.1] — pauses-between-phases are App-Store-Connect-specific risk management, NOT general CINC behavior.

**Hierarchy:**
- **Mandatory pauses:** authentication needs, irreversible release-gating buttons (App Store submission, processor account changes, payment-stack live edits, anything affecting existing customer state at scale)
- **Conditional pauses:** unexpected state needing judgment
- **No pauses:** standard form fills, configuration changes on pre-launch infrastructure, audit-then-action sequences where action is reversible in seconds

### CINC Web Dashboard Coverage
CINC handles ANY web dashboard task by default — not just ASC or Vercel. Cloudflare DNS, domain registrars, Vercel project config, all reversible config tasks. Default to CINC, not Mark-manual handoff.

### CINC Cloudflare Proxy Toggle Convention
Use direct mouse click on the toggle, NOT form_input checkbox-set method.

---

## 🛠️ CC Technical Workflow (UNCHANGED from v6.5)

- Wake-up sequence in separate code blocks: `cd ~/Desktop/[repo]` → `claude --dangerously-skip-permissions` → prompt
- Parallelize CC across repo tabs; `/exit` before `eas build`
- Git email must be `masbooksonebay@gmail.com` for Vercel compatibility
- CC never modifies icons (Perplexity → SVG → cloudconvert.com → CC handles Expo asset packaging only)

---

## 🛠️ macOS TCC Permission Fix Pattern (validated multiple times)

When CC reports filesystem permission denied mid-session:
1. System Settings → Privacy & Security
2. Full Disk Access: verify Terminal listed and checked (toggle off/on if needed)
3. Accessibility: verify Terminal listed and checked
4. **Cmd+Q Terminal completely** (closing windows isn't enough)
5. Relaunch Terminal
6. Reopen all CC tabs with wake-up sequence

Process-level permission, so all terminal tabs lose access simultaneously when revoked.

---

## 📝 Glossary (UPDATED v6.6)

[All v6.5 entries unchanged]

**UPDATED v6.6:**
- **Studio-standard soft-launch:** 4 English-speaking + kg-using countries (AU + IE + NZ + UK) for new app launches. Validated by HR + SC parallel use.
- **WL** = White Label business unit (operating brand: **Capstone Peptides LLC**). Capstone is a separate legal entity from SCS LLC (both have Mark as sole member).
- **CP** = Capstone Peptides
- **PP blends** = Branded vendor blends + informal stacks rendered as full peptide-profile-style pages on profpeptide.com. Existing roster: Wolverine, GH stack, KLOW, GLOW. Phase 1 expansion target: 15-25 new profiles.

---

## 📅 Changelog

**May 27, 2026 (v6.5 → v6.6):**
- ✅ **4-country soft-launch pattern locked as studio standard** (AU + IE + NZ + UK)
- ✅ **Worldwide expansion CINC pattern validated** across HR + SC, mandatory discipline documented
- ✅ **Capstone storefront platform decision corrected** — NOT locked; pending Denise's banking + platform input
- ✅ **Portfolio snapshot updated** — HR + SC + PP all worldwide; WN still pre-build
- ✅ **Glossary updated** — Studio-standard soft-launch + WL → Capstone Peptides LLC entity clarification

**Prior session entries:** unchanged. See v6.5 history.

---

## 🔗 Cross-References

- **HR_MASTER v8** — Hybrid Rockstar (worldwide May 27, 2026)
- **SC_MASTER_ACTIVE v5.12 / SC_MASTER_FROZEN v5.3** — Strength Cycle (worldwide May 27, 2026)
- **PP_MASTER v11** — Prof Peptide
- **WN_MASTER_ACTIVE v1.1 / WN_MASTER_FROZEN v1.1** — Weightlifting Nation (pre-build)
- **WL_MASTER_ACTIVE v1.8** — Capstone Peptides operational state

---

*Studio-level master playbook. Updated as cross-cutting patterns lock, portfolio state changes, workflow disciplines validate.*
