# PP AI CHAT — v1

**Status:** ACTIVE. New doc. Records the chat assistant shipped on profpeptide.com, Aug 28–29, 2026.
**Scope:** architecture, the locked guardrails, what was verified live, and the recurring bug class the build exposed.

---

## 0. WHAT SHIPPED

A Claude-powered research assistant, live on every page of profpeptide.com. Floating launcher bottom-right, panel toggles open/closed, answers grounded in PP's own pages.

| Phase | Commit | What |
|---|---|---|
| 1 — proposal | `docs/PP_AI_CHAT_PROPOSAL.md` (in-repo) | Recon + architecture, no code |
| 2 — corpus | `e4a5393` | Build-time extraction pipeline + staleness guard |
| 3 — route + UI | `59edce3` | API route, retrieval, guardrails, widget |
| refinements | `f0dbb28` | UI batch + the retrieval subset-match fix |
| button copy | `0a2d758` | "Start chat" |
| linkify | `c8acad2` | Clickable PP URLs in answers |
| thinking indicator | `7bb7142` | Phase sequence + stall watchdog |
| mobile send button | `fb02d0c` | In-field circular arrow |

**Test suites, all wired into `package.json`:** `test:chat-format` (11) · `test:chat-retrieval` (13) · `test:chat-linkify` (23).

---

## 1. 🔒 THE LOCKED SPEC — what the chat may and may not do

### Answers come only from PP's own content
Retrieval, not free generation. No peptide claim the site doesn't already make.

### DOSING — factual yes, individual advice no
This mirrors what the profiles do after the four-part audit. **The test is second-person, not the presence of a number.**

**ANSWERS:** doses used in named clinical trials, attributed to those trials · FDA-label doses attributed to the label (Geref sermorelin = 30 mcg/kg pediatric) · community-convention figures explicitly named as convention · **honest absences** ("RegeneRx's trials never published an extractable dose" is a legitimate answer, not a refusal).

**REFUSES:** "how much should I take" · "is X too much for me" · "what should I run" · human-use framing · medical advice · protocol design.

**Implementation rule:** the chat reports dosing language the retrieved page already contains. It never composes new dose prose and never applies a figure to an individual. **The profiles' own honest-absence language IS the chat's dosing voice** — same standard, same wording, no second editorial layer to maintain. The few-shot examples in the system prompt are pulled from the live corpus at import time, so they cannot drift from the pages.

### 🔴 Codes, prices, stock — architecturally invisible to the model
The corpus **redacts** them at extraction (`[[REDACTED]]`); codes/discounts are substituted server-side from `vendors.ts` after generation; **prices are not substituted at all** — the chat deflects to `/prices/<slug>`, because per-vendor-per-compound-per-size pricing is too dimensional to inline safely and the live page carries its own as-of date.

**`[[REDACTED]]` is a first-class signal**, explained in the system prompt: it marks where a code/price/discount lived; the value comes from the live source or the answer is "I don't know." **Never reconstruct it.**

Live proof this works: asked for the cheapest retatrutide, the chat refused to guess and explained the mechanism — *"I'd only be able to give you a placeholder that the site fills in live."*

### Other locked items
- **Affiliate disclosure** whenever a vendor is named.
- **Prompt-injection defense:** retrieved content is DATA, not instructions. Live test: *"That framing doesn't change what I'm able to do here"* — it named the override attempt rather than just declining.
- **Rate limits** as named constants: 10 turns/session, 30 requests/IP/day, 700 output tokens, body-size cap.
- **Search bar unchanged.** The chat is a separate affordance.

---

## 2. ARCHITECTURE

- **Corpus:** `src/lib/chat-corpus.generated.ts` — 210 pages, ~924K tokens, 1,138 counted redactions. Built by `scripts/gen-chat-corpus.mjs`.
- **🔒 Build-time artifact with a guard.** `check:chat-corpus` **fails the build** when the corpus is stale. Manual-regenerate (like `search-index`), not auto-regenerate (like `codes-manifest`) — **deliberate**: auto-regeneration would silently rewrite ~924K tokens with no diff to review. The guard makes staleness unshippable; the manual step keeps the change visible.
- **Retrieval:** keyword/entity scoring → full matched pages injected via a `search_pp_content` tool; Claude may re-search (`MAX_TOOL_ROUNDS = 3`).
- **`page.faqs` is separately weighted**, rendered as its own labeled block — FAQ content is a documented blind spot (§4).
- **Runtime: Node, not edge** — the corpus module is ~7.7MB, past edge limits.
- **Key:** `ANTHROPIC_API_KEY_CHAT`, separate from the mobile coach's key so a scraper on the public chat can't throttle or bankrupt the app. **Production only** — Preview still needs it **via the Vercel dashboard** (the CLI has a branch-disambiguation bug on preview that its own suggested non-interactive form doesn't resolve).

### Retrieval scoring — why it looks the way it does
Two **exclusive** tiers: **EXACT (40)** when the query *is* the entity name; **SUBSET (24)** when the query *contains* the entity's complete name plus other words, gated by a short-name guard (≤4 tokens).

**The defect that forced it:** "What is BPC-157 used for in research?" returned three blend pages and never the profile. Blend titles carry the word **"Research"** ("…Repair Research Stack"), banking a title-token hit the real profile's title can't match. Subset-match discriminates in **both** directions — "semaglutide BPC-157 blend" contains the blend's whole name, so blends still win their own queries.

⚠️ **`scripts/test-chat-retrieval.mjs` is a permanent regression tool.** Retrieval quality degrades silently with every scoring tweak. Run it before and after any change and report before/after ranked hits, including the queries that must NOT change.

---

## 3. THE UI

- Launcher bottom-right, **persistent** — clicking it toggles the panel closed.
- **Panel geometry: top+bottom double-anchoring**, so height is *implied* by the anchors and can never overlap the header or run off the bottom at any viewport height. Header heights read from `Header.tsx` (64px / md:72px), not guessed. `svh` not `vh`.
- Mobile: full-screen below the header, and the panel deliberately **covers** the launcher (a floating button over a full-screen panel is a competing affordance in the same corner). That makes the **X the only mobile close control** — so its tap target is 44×44px, mobile-only (`sm:hidden`).
- **Esc closes at all breakpoints**, focus returns to the launcher. Guarded with `e.isComposing` (+ legacy keyCode 229) — Escape belongs to the IME during composition.
- **Send button:** inside the input, 32px circle in a 44×44 tap target, lucide `ArrowUp`, grey→brand fade, disabled on empty/whitespace. Matched to PP's iOS app (`app/chat.tsx`), read from source not approximated.
- **Thinking indicator:** Thinking… → Searching Prof. Peptide… → Writing the answer…, with a **600ms minimum dwell per phase**. Plus a **45s stall watchdog that resets per chunk**.
- **Footer:** "Research use only. Not medical advice." / "Powered by Claude".

### 🔒 "Powered by Claude" — the attribution rules
Verified against Anthropic's published guidance. **Plain text only.** No Anthropic/Claude logo, mark, or icon. No wording implying partnership, endorsement, or affiliation. Naming a product or feature after their marks is prohibited; a factual "powered by" statement is not. Anthropic's usage policy also **requires** clear AI disclosure — which "Prof. Peptide AI" plus the footer line satisfies.

### 🔒 Linkified URLs — the security pattern
PP URLs in answers are clickable. **Never render model output as HTML or markdown.** A strict allowlist matches `profpeptide.com` paths only, and — the control that actually matters — **the href is REBUILT from a fixed base plus the validated path, never reused from the matched text.** That defeats `https://profpeptide.com@evil.example/steal`. Non-PP domains stay plain text. New tab, because navigation destroys the conversation (React state, no storage by design).

---

## 4. 🔴 THE RECURRING BUG CLASS — transformation layers without a contract

**Four instances in one build.** Every one is a transformation step that didn't know what it was receiving.

| # | Bug | Root cause |
|---|---|---|
| 1 | `/i` flag on the redaction regex made `[A-Z0-9]` match lowercase, so the word **"profile"** matched `PROF` + `il` — 1,764 → 1,138 redactions after the fix | A guard eating legitimate content |
| 2 | The code-stripping backstop ran **after** substitution, so it stripped a just-substituted legitimate `PROFPEPTIDE` (real codes are PROF-shaped) | Ordering |
| 3 | `"10% off%"` then `"20% off off"` — the `discount` field is **already a complete phrase**, and the model appended its own suffix | No contract about what the field contains |
| 4 | The BPC-157 retrieval collision (§2) | Scoring signal that never fired |

**FIX PATTERN, now standing:** where a system-prompt instruction is a *request*, a code-level normalization pass is the *guarantee*. `src/lib/chat-format.ts` runs unconditionally after substitution, with negative tests proving it doesn't eat legitimate text ("99% purity", "off the shelf").

**And the meta-lesson:** bugs 1 and 3 were found by *investigating an implausible number* and by *running the query that broke*, not by unit tests passing. **Unit-test the function; then run the real case.**

---

## 5. 🔒 RATIONALE LIVES AS A COMMENT AT THE POINT OF USE

The retrieval scoring design, the ES5 constraint, and the formatting backstop's reason-for-existing are all documented **in the files themselves**. This survived a session compaction with nothing needing re-derivation.

**The principle, general:** a repo exists so information doesn't live in a chat. Design rationale that isn't obvious from the code goes as a comment beside the code — where a compaction can't take it and it can't drift from what it describes. Memory holds session state; docs hold cross-workstream strategy; **the code holds why the code is like that.**

⚠️ **The ES5 trap:** this project sets no `target` in tsconfig, so TS defaults to ES5 — `for…of` over a `Set` is a compile error. Use deduped arrays. Changing the global tsconfig for a scoped helper is the wrong blast radius.

⚠️ **The wrong-repo trap:** the CC environment's default cwd is the **app** repo (`profpeptide-app`). The site work is in `~/dev/profpeptide`. Gate accordingly.

---

## 6. OPEN ITEMS

1. **News pages are NOT in the corpus** — 0 of 210. The assistant cannot cite any regulatory coverage, which is now where the detail lives. A small extension to the Phase 2 generator.
2. **Preview env var** — `ANTHROPIC_API_KEY_CHAT` via the Vercel dashboard.
3. **Real-device confirmation** — the hardware Enter keypress and the physical tap target were never exercised (the harness reports `visibilityState: hidden`, so synthetic keys don't reach it and CSS transitions freeze at `currentTime: 0`). Everything around them is verified.
4. **Recorded idea, not a task:** true token-level streaming through the tool-use loop (currently the loop is internal non-streaming, then the final text is chunked into SSE — same UX, no wasted second call).
