# PP Site Design — Premium Upgrade Plan — v1

**Status:** ACTIVE REFERENCE — the PP *website* visual/premium-design plan (distinct from PP_SEO, which is search; distinct from PP_APP_THEME_SPEC, which is the *app*).
**Version:** v1 (July 1, 2026) — first version. Grounds a "make the site look more premium" plan in CC's verified design-state survey + two external (ChatGPT) audits, and records the brand-system decision (keep the app's cyan; apply restraint, don't repaint).
**Scope:** profpeptide.com (`~/dev/profpeptide`, Next.js/Vercel, auto-deploy from main).

---

## 🎯 The core decision (LOCKED) — evolve the existing system, do NOT repaint

**The site's real accent is `#0891b2` cyan — the SAME cyan as the PP app** (per PP_APP_THEME_SPEC and every app-store screenshot + social card shipped this cycle). The site and app are already one brand.

An external audit proposed repainting the site to a warm-neutral palette with a different accent (`#3E7CA8`). **REJECTED** — that would fork the website from the app, the App Store screenshots, and the social cards, all anchored on `#0891b2`. Splitting the brand is the opposite of premium.

**The premium move is therefore restraint applied to the existing cyan, not a new palette:**
- Keep `#0891b2` as the anchored accent — but use it *sparingly* (dividers, active states, result highlights, badge borders), not on every button/link/badge/icon.
- Warm off-white background instead of pure `#FFFFFF` (a small, credible "considered" move).
- Introduce dark-slate premium sections (trust strip / hero band) for perceived authority.
- Reference north star: **Examine.com + Apple Health + clinical dashboard** — citations-first research brand, not coupon directory.

---

## 📋 Verified current state (CC survey, July 1, 2026 — facts, not audit claims)

| Area | Verdict | Reality |
|---|---|---|
| **Design tokens** | INCONSISTENT | Accent hardcoded `#0891b2` everywhere; tailwind defines an **unused** `brand` teal `#0D7377` (dead token). BG pure `#FFFFFF` (light) / `#0f172a` (dark). Headings `#1e2d3d`. Cards `.card` = white/`#1e293b`, `border-gray-100`, `rounded-xl`. Shared classes exist: `.btn-primary`, `.btn-outline`, `.section`, `.tag`, `.card`. |
| **Fonts** | BASIC | **Inter** headings + body, loaded via Google Fonts `@import` (NOT `next/font` — no self-hosting/optimization). No mono family defined (coupon CodeBox `font-mono` falls back to system mono). |
| **Peptide library `/peptides`** | BASIC | Categorized **text-link list** (`space-y-10` blocks, `<ul>` of bulleted `<Link>`s). No cards, no per-item badges (no evidence level / category tag / RUO). |
| **Peptide profiles** | BASIC | Open **straight into prose**: hand-rolled `<h1>` → inline "Last reviewed: …" text → prose. **Zero** profiles have a top summary/stat panel. No top badges. `<LastReviewed>` is **106 inline strings**, not a component. Uses `<PageTOC>`, `<PageDisclaimer>`. |
| **Badges** | AD-HOC (no system) | No Badge component. Inline `<span>` pills per page: Verified (green), Best Deal (green), Editor's Pick (gold `#eab308`), purity (slate), region (gray). No evidence-level or RUO badge anywhere. |
| **Nav + footer** | ✅ CONSISTENT | Single shared `Header.tsx` nav array (Peptides ▸ / Calculator / Track / Codes / App); `Footer.tsx` site-wide. Copyright consistently "Strength Cycle Studios, LLC". **Audit's "© Prof. Peptide vs © SCS contradiction" claim = FALSE.** **Audit's "nav differs per page" = FALSE.** |
| **Coupon cards `/coupons`** | BASIC | `VendorCard` leads with vendor name + discount pill; testing/COA is a secondary "Verified" pill; COA detail lives in `/vendor-testing-index` below. Code/discount-first. |
| **Page headers** | INCONSISTENT | No `PageHeader` component — each page hand-rolls `.tag` eyebrow + `<h1>` + subhead; spacing varies. |
| **Homepage hero** | ✅ ALREADY-PREMIUM (relative) | Hero + **trust strip already exists** (2×4 stats: 40+ peptides / 50+ supplements / 10+ codes / 100% independent) + RUO bar. Most polished surface. 3 CTAs (Explore Peptides / Calculator / Discount Codes). |

**Net:** homepage + shared Header/Footer are already good. The genuinely-basic upgrade targets are the **library, the profiles, the badge system, and token/header hygiene.**

---

## 🪜 Prioritized backlog (tiered, highest-ROI first)

### Tier 1 — the premium movers (do first)
1. **Peptide library → card/grid with evidence badges.** Convert the text-link list to a card index: category pill · peptide name · one-line research positioning · **evidence-level badge** (FDA-approved / human clinical / preclinical / limited) · RUO · "Read profile →". Biggest single "database → clinical reference" jump. *(Both audits' #1 pick; CC confirms it's still a plain list.)*
2. **Profile "clinical brief" summary panel.** A structured stat panel atop every profile: category · evidence level · half-life · route/forms · research status · key safety flags · **last reviewed** · reference count — then the existing prose below. Turns a wall of text into brief-then-depth. **Dovetails with the `<LastReviewed>` refactor** (106 inline strings → component) already owed in PP_SEO.
3. **Badge design system.** One `Badge` component with locked variants — **compounds:** FDA-approved / human-clinical / preclinical / limited-evidence / RUO; **vendors:** published-COAs / batch-specific-COAs / third-party-tested / ISO-17025 / pending. Standardizes the ad-hoc pills; the connective tissue that makes Tier 1 #1, #2, and coupon cards cohere. Underlying vendor data already exists in `/vendor-testing-index`.

### Tier 2 — cheap wins / hygiene
4. **Token hygiene.** Kill the dead `brand` teal `#0D7377` or repoint it to the real `#0891b2`; introduce a single accent token instead of hardcoding the hex everywhere (so future accent discipline is one-file).
5. **Warm off-white background.** Swap pure `#FFFFFF` → a warm neutral (audit suggested `#F6F7F4`-ish; pick a tint that still passes contrast + matches the app's light mode intent). Small, credible.
6. **`PageHeader` component.** Reusable eyebrow + H1 + subhead (+ optional right-side visual) so every template's header is consistent instead of hand-rolled.
7. **`next/font` for Inter** (self-host, drop the Google `@import`) — perf + a11y + no layout shift.

### Tier 3 — deferred (real work, lower ROI)
8. **Dark-slate premium sections** (trust strip / hero band) — nice authority lift; do after Tier 1.
9. **Calculator/tracker as split-card "app UI"** (inputs left / live result right, large numbers, formula drawer). Deferred — product-surface polish, not a mover.
10. **Typography swap** (Satoshi/General Sans/mono for data) — deferred; Inter is fine.

---

## 🚫 Explicitly rejected (do NOT re-litigate)
- **Repaint to `#3E7CA8` / warm-neutral palette** — forks the site from the app + screenshots + social cards (all `#0891b2`). Keep the anchored cyan.
- **Demote/hide Discount Codes** (audit wanted codes out of the hero, coupon cards "testing-first"). Codes are **revenue + SEO traffic** ("[vendor] discount code" queries). A *visual* reframe of coupon cards toward vendor-intelligence is fine; **do NOT bury the code or pull Codes from primary discovery.** Business call, guarded.
- **The two false audit claims** — footer copyright "contradiction" and per-page nav differences — are FALSE per CC survey. No fix needed.

---

## 🛠️ How this gets built (per execution model)
- **Tier 1 items are CC build jobs** — Claude hands CC the spec + structural template (mirror existing `.card`/`.tag`/`Header` patterns) + guardrails (RUO voice, evidence-honesty on the badges, don't fork the accent) + acceptance checks (tsc/build clean, staged-files-only, push to main, live curl). CC writes the component code.
- **Claude Design** can prototype the card/badge look and the summary-panel layout as inline visuals for Mark to approve *before* CC builds — same tool that produced the PP app App Store screenshots (which came out excellent). Possible future use: mock premium page visuals / hero art for the site. *(Design → approve look → CC builds to match.)*
- **Evidence-level assignments are content decisions** — the FDA-approved/clinical/preclinical call per compound must be sourced (CC assigns from the profile's own cited evidence, not guessed), consistent with RULE #0.
- **Deploy-by-default:** every CC prompt ends with push to main + live verification.

---

## 🔗 Cross-references
- **PP_APP_THEME_SPEC** (the app's design system — the `#0891b2` anchor + light-default this plan stays consistent with)
- **PP_SEO v13 / PP_SEO_LEDGER v3** (the `<LastReviewed>` refactor overlaps Tier 1 #2; card-grid library is also an SEO/UX win)
- **PP_MASTER v15** · **SCS_MP v6.11**

---

## 📅 Changelog
**v1 (July 1, 2026):** First version. CC design-state survey captured (verified current tokens/library/profiles/badges/nav/coupons). Brand-system decision LOCKED: keep `#0891b2` (matches the app), reject the `#3E7CA8` repaint, apply restraint. Tiered backlog set (Tier 1: library cards + profile summary panel + badge system; Tier 2: token hygiene, warm off-white, PageHeader, next/font; Tier 3 deferred). Rejected list recorded (repaint, code-demotion, two false audit claims). Claude Design noted as the prototype-the-look tool ahead of CC builds.

---

*The PP website premium-design plan. Keep the app's cyan; premium = restraint, not repaint. Tier 1 = library cards + profile clinical-brief panel + badge system. Codes stay prominent (revenue guard). CC builds; Claude Design prototypes the look first.*
