# SCS_MP — v6.17 Addendum (July 25, 2026)

**Status:** ACTIVE drop-in. Append to / version into SCS_MP v6.16 (governing studio master).

---

## 🔧 PORTFOLIO SNAPSHOT — CORRECTED

v6.11–v6.16 carried a stale HR line ("v1.0.0 live; v1.0.1 build 11 parked in ASC"). That was five weeks out of date.

| App | State | Version |
|---|---|---|
| **PP** | LIVE worldwide | v1.0.x live · **price-comparison section mid-flight on `price-page-preview`, not merged to main** |
| **SC** | LIVE worldwide | v1.0.4 live |
| **HR** | LIVE worldwide | **v1.0.2 (build 12) LIVE since June 21** — supersedes the "build 11 parked" line everywhere |
| **WN** | iOS pre-build (spec phase); marketing site LIVE | — |

---

## 🔒 NEW RULE — Prompt-delivery discipline: discuss first, ask every time (LOCKED)

**Claude does not write a CC/CINC prompt until Mark says to.** Respond to the message, work the decisions, then ask *"ready for a prompt?"* and stop.

**Asking once does not carry forward.** Each new prompt needs its own check-in, regardless of what was approved a turn earlier. Treating a prior "go" as standing permission is the failure mode this rule exists to prevent.

**Why:** drafting a prompt before the decisions are settled produces revision cycles — this session burned four rewrites of a single CC prompt because each new decision arrived after the prompt was already written. Discussing first and drafting once is strictly cheaper.

**Extends** the existing terminal-command-delivery and one-prompt-at-a-time rules; does not replace them.

---

## 🔁 REINFORCED — ALL terminal commands go to CC, including dev-server starts

v6.16 already locked this: *"This covers all terminal commands, not just pushes (dev-server starts, builds, status checks — all go to CC)."*

**Violated three times in one session** (handing Mark `npm run dev` / `git checkout && npm run dev` blocks). Restating because the failure kept recurring even after correction:

- Mark does not paste commands into a plain terminal. **Ever.**
- When Mark needs to review rendered output, **CC starts the dev server as a persistent background process and reports the port**; Claude supplies the clickable localhost links.
- The **PP-site SKIP-LOCAL-PREVIEW default** (PP_MASTER Addendum v2) still stands as a default, not a prohibition — a local preview is fine when genuinely wanted, but **CC runs it**.
- **Exception (unchanged):** a real plain terminal is required only where there's no TTY in a CC session — e.g. `vercel env add` for Sensitive vars.

---

## ⚠️ "HEADLESS" IS OVERLOADED — spell out the clause, don't use the label

Two unrelated decisions in this project both got called "headless":

1. **Screen-control rule (v6.12):** CC must not use computer-use/cliclick or take over the screen; verify via git, tsc/build, tests, simctl screenshots, curl.
2. **Headless-browser scraping (settled, PP price-pull):** Playwright/Puppeteer **rejected as unnecessary** — Medusa vendors render prices server-side in the RSC flight, readable by plain urllib in ~1.8s; headless would have been ~400MB of fragile infrastructure for data already obtainable.

These are independent. A bare "HEADLESS ONLY" label in a prompt is ambiguous and misreadable as a scraping-architecture instruction. **Write the clause out instead:**

> Do NOT use computer-use or cliclick — do not tap, click, move windows, or take over the screen. Verify via git, tsc, build, and curl only. Leave visual sign-off to Mark. (This is about screen control, not scraping.)

---

## 💰 HR DIVERGES FROM THE STUDIO-WIDE OPTION C RULE (HR-specific exception)

SC_MASTER_FROZEN locks Option C studio-wide — *"never paywall a program or methodology; all programs stay in the free tier permanently,"* paid unlocks unlimited AI only. WN inherits it.

**HR is deliberately diverging:** free to download → 30-day free period → **$9.99/month full-app paywall**. HR is a finite 12-week program rather than an open-ended logging platform, so gating the program *is* the product.

- **HR-specific. SC and WN are unchanged** and still follow Option C.
- **Subscription implementation is ON HOLD** until HR's user base is materially larger. The app stays free meanwhile.
- $9.99/mo is now HR's recorded price direction (it had never been written down; SC = $7.99/$59.99, WN listed $9.99 as an open question).
- Full detail + competitive pricing research in **HR_MASTER v12**.

---

## 🔒 FIRST-100 GRANDFATHERING — receipt-based mechanism (resolves a studio-wide deferred decision)

SC_MASTER_FROZEN left this open: *"Mechanism: Apple promo codes … OR server-side lifetime grant flag (custom infrastructure). Mechanism decision deferred."* It also correctly warns that **promo codes are not lifetime** — they grant an initial subscription period only.

**There is a third mechanism, and it's better than both.** StoreKit 2's `AppTransaction` exposes **`originalPurchaseDate`** — the date a user first downloaded the app (for a free app, the download date). It is Apple-signed, **already recorded in every existing user's receipt**, and needs no account, no backend, and no user action.

**Studio-wide implication:** any SCS app that launches free and later paywalls can grandfather early users this way. No promo-code allocation, no accounts, no custom infrastructure. **Applies forward to SC 1.0.5 and WN.**

**The one thing that must be done in advance:** record the **cutoff date** while the download count is still at the promised threshold. The receipt data is safe forever; knowing where the line falls is what degrades. HR's capture is the live action item (see HR_MASTER v12).

**Known limits:** intra-day imprecision (set cutoff to end-of-day; over-include rather than under-include on a goodwill promise); TestFlight/sandbox return different values (needs a debug path); requires iOS 16+.

**Rejected alternative:** `originalApplicationVersion` identifies only *which version* a user first downloaded — it cannot distinguish download #1 from #1,000 within the same version.

---

## 📉 DOC-ROT LESSON — quiet workstreams rot silently

**HR_MASTER went five weeks and two shipped versions out of date** while sessions ran PP-heavy. v1.0.2/build 12 shipped June 21; no doc recorded it. SCS_MP carried the same stale line. The rot was invisible until someone tried to act on the backlog.

**Two takeaways:**

1. **When a workstream goes quiet, its ref doc stops being trustworthy** — and nothing signals that. Before acting on any doc that hasn't been versioned recently, verify state against the artifact (ASC, the repo, the live site), not the doc.
2. **RULE #0's corollary held again:** *absent from the ref docs ≠ doesn't exist.* Mark said build 12 was live; a thorough search across every HR and SCS doc found nothing. Mark was right. **Defer to first-hand knowledge fast, then close the doc gap** — this addendum and HR_MASTER v12 are that fix.

**Related open risk:** `HR_PROGRAM_EXPORT.md` (source for every HR Instagram carousel and reel) may no longer match the shipped app if build 12 altered week 1–2 strength sessions. Verify before the next W1/W2 social post.

---

## 📅 Changelog
**July 25, 2026 (v6.16 → v6.17):**
- 🔧 Portfolio snapshot corrected — HR **v1.0.2 (build 12) live**; PP price section mid-flight on a preview branch.
- 🔒 **Prompt-delivery discipline** added — discuss first, ask every time before drafting a prompt; a prior "go" is not standing permission.
- 🔁 **All-terminal-commands-go-to-CC** reinforced after three violations in one session; PP skip-local-preview clarified as a default, not a prohibition.
- ⚠️ **"Headless" disambiguated** — screen-control rule vs the settled no-headless-browser scraping decision; write the clause, don't use the label.
- 💰 **HR monetization divergence** recorded as an HR-specific exception to the studio-wide Option C rule.
- 🔒 **Receipt-based grandfathering** (`originalPurchaseDate`) resolves the deferred first-100 mechanism decision — studio-wide, applies to SC 1.0.5 and WN.
- 📉 **Doc-rot lesson** captured (HR five-week gap; RULE #0 corollary reconfirmed).

---

## 🔗 Cross-References
- **HR_MASTER v12** (new) · **HR_SOCIAL v12** · **PP_MASTER + addenda** · **PP_SEO** · **SC_MASTER_ACTIVE / FROZEN** · **WN_MASTER_ACTIVE / FROZEN** · **WL_MASTER_ACTIVE**

---

*Studio addendum. RULE #0 governs all. CC owns build work and every terminal command; Claude instructs and asks before drafting. HR live at v1.0.2, free, subscription on hold.*
