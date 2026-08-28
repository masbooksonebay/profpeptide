# AI Chat Assistant — Architecture Proposal (Phase 1)

Status: **PROPOSAL — not built, not pushed.** Written for Mark's review. Nothing in this
document has been implemented; no dependencies were installed and no code was written for the
chat feature itself. All claims below were verified against the live repo, `vendors.ts`, and
`vercel env ls` (names only, no values pulled).

---

## 0. Headline findings (read this first)

1. **A working Anthropic-relay pattern already exists** — `src/app/api/coach/route.ts`, built
   for the PP mobile app's chat feature. It streams Claude's SSE straight through, has basic
   in-memory rate limiting, and proves the "key stays server-side" pattern works on this stack.
   It is **not directly reusable** for the web chat (no retrieval, no server-built system prompt,
   wide-open CORS, in-memory rate limiting) — but its shape is the right starting template.
2. **`ANTHROPIC_API_KEY` is already provisioned in Vercel Production** (added ~63 days ago,
   presumably for the mobile coach). The "Mark must run `vercel env add` from a real terminal"
   constraint is **not a Phase-1 blocker** — a key already exists. It becomes relevant only if we
   decide to provision a *second, isolated* key (recommended — see §5).
3. **Vercel KV is live** (`KV_REST_API_URL`, `KV_REST_API_TOKEN`, etc. — all present in
   Production+Preview) and already used in this repo for `/go/` click counting. It's the natural
   home for chat rate limiting and spend caps — no new infra to provision.
4. **The retrieval corpus does not exist yet in usable form.** `search-index.generated.ts` (351
   entries) is a *navigational* index — title, url, category, tags — with `description` empty for
   nearly every entry. It has **no body text**. The real content lives as JSX inside 64 peptide
   profile `page.tsx` files, 53 supplement pages, 21 guides, 2 comparisons, and a 19-entry FAQ data
   file — none of it in a form a retrieval step can read today. Building this corpus is the
   central piece of net-new work (§1, §2).
5. No AI SDK is installed (`@anthropic-ai/sdk` is absent from `package.json`; the coach route uses
   raw `fetch`). No chat widget exists on the website today. This is genuinely new surface area.

---

## 1. Retrieval corpus — what exists, what's missing, size

### What's usable today
| Source | Rows | Fields | Usable for retrieval as-is? |
|---|---|---|---|
| `search-index.generated.ts` | 351 | title, url, category, description (mostly empty), tags | **Routing only** — tells you a page exists and its URL/category, not what it says |
| `src/data/vendors.ts` | 52 live | name, code, discount, url, facts (lab/testMethods), blockNote | Structured, small — good for the code/price live-lookup tool (§3c), not prose |
| `src/data/prices.index.json` / `prices.generated.ts` | ~370 compounds | slug, vendor count, per-vendor rows | Structured — same treatment as vendors.ts |
| `src/data/faqQuestions.ts` | 19 pages | q/a pairs, some JSX | Prose-bearing but needs the same extraction treatment as profiles |
| `src/data/glossary.ts`, `news.ts` | small | term/definition, article summaries | Small, easy to extract directly (plain strings) |

### What's missing
The actual peptide-profile and supplement-page **prose** — the `intro:` strings and `node:` JSX
inside each `sections` entry, the `faqs` accordion answers, warnings, dosing language, references
— is not exposed anywhere as extractable text. `scripts/gen-search-index.mjs` deliberately avoids
parsing this (the file's own comments note the sources it reads are kept "import-free" and
transpile-executed; reaching into arbitrary JSX `node:` trees is a different, harder problem it
was never built to solve).

### Volume estimate
Rough token counts (regex-stripped of `className` attributes and tags — still includes JS/TS
syntax noise like quotes and object-literal punctuation, so treat as an **upper bound**; real
prose is likely 40–60% of these numbers once cleanly extracted):

| Group | Files | Est. tokens |
|---|---|---|
| Peptide profiles | 64 | ~531,000 |
| Supplements | 53 | ~591,000 |
| Guides | 21 | ~11,000 |
| Comparisons | 2 | ~41,000 |
| FAQ pages (`faqQuestions.ts`) | 19 | ~21,000 |
| Glossary + news | — | ~4,000 |
| **Total** | — | **~1,200,000 tokens (upper bound)** |

**Implication:** even the *upper-bound* estimate is too large and too expensive to put whole in
every request (see §2, Option A). It comfortably fits a large-context model in principle, but
that's irrelevant here — cost and relevance, not context-window size, are what rule it out. This
is chunked/routed-retrieval territory, not whole-corpus-in-context.

**Per-page size**, once the corpus is built, is small: ~531,000 / 64 ≈ 8,300 raw tokens per
peptide profile (probably 2,000–4,000 tokens of real prose once cleanly extracted). That's the
number that actually matters for the architecture (§2) — a matched page's full text is cheap to
inject per turn.

---

## 2. Architecture options

### Option A — Whole corpus in context every turn
Feasible only in the sense that it fits a very large context window. Rejected: ~$3–10+ of input
tokens *per turn* at Sonnet-class pricing even with caching amortized across the first request,
no relevance filtering (dilutes the model's attention across ~1M tokens of mostly-irrelevant
content, which is a *worse* accuracy story than retrieval, not better), and it changes on every
deploy so cache hit rates would be poor.

### Option B — Chunk-and-embed (vector search / RAG)
The standard production RAG pattern: chunk the corpus, embed each chunk (Voyage AI is Anthropic's
recommended embedding partner; OpenAI embeddings are the other common choice — either way it's a
**new third-party API dependency**), store vectors (Vercel has no native vector DB; would need
Upstash Vector — a Marketplace integration, provisioned separately from the KV already in place —
or Postgres+pgvector via another Marketplace integration), retrieve top-K chunks by similarity at
query time. Real, proven pattern — but adds: an embedding pipeline that must re-run on every
content deploy (network calls during build, a new failure mode for `npm run build`), an extra
paid API, an extra generated-artifact class to keep in sync (mirroring the discipline
`search-index`/`codes-manifest` already need, but with an external network dependency the others
don't have), and chunk-boundary risk — a dosing caveat or citation could be split from the claim
it qualifies, which is exactly the failure mode the four-part editorial audit spent significant
effort eliminating from the pages themselves. Not worth it *yet* given the corpus's shape (below).

### Option C — Keyword/entity match → inject full matched page(s) (RECOMMENDED)
The corpus has an unusually clean structure for this domain: **one page per real-world entity**
(one profile per compound, one coupon page per vendor, one guide per topic), with short,
distinctive names users are likely to type directly ("BPC-157," "retatrutide," "Swiss Chems").
That's a much better fit for keyword/fuzzy matching than an open-domain corpus would be, and it
means "the matched page's full text" is a small, complete, un-chunked unit — no boundary risk,
because nothing gets split.

**Recommended shape — agentic retrieval via tool use, not a single static match pass:**
1. **Build step**: a new generator (sibling to `gen-search-index.mjs`, same single-source-of-truth
   discipline) extracts clean body text per page — safest approach is to post-process the
   **already-produced static HTML output** from `next build` (strip nav/footer/chrome, keep the
   main content region) rather than hand-parsing JSX, so the corpus is byte-faithful to what's
   actually live and can never say something the page doesn't. Emits a JSON artifact:
   `{ slug, url, category, title, bodyText }[]`. Regenerated every build, staleness-checked the
   same way `check-search-index.mjs` already enforces freshness.
2. **Request time**: the chat API route gives Claude a `search_pp_content(query)` tool. Claude
   decides when and what to search — including re-searching mid-conversation if the topic shifts,
   or trying a different term if the first search misses (this is where tool-use beats a single
   fixed keyword pass: the model's own judgment handles paraphrase and retry, not a hand-built
   synonym table). The tool handler runs an in-process fuzzy/keyword search (a small dependency
   like `minisearch` or `flexsearch` — no server, no network call, sub-millisecond) over the
   generated corpus and returns the top-K matched pages' full text + URLs.
3. Claude answers grounded only in what the tool returned, streamed back over SSE (same pattern
   as `api/coach`).

**Why this over embeddings for v1:** no new paid API, no vector DB to provision, no
embedding-pipeline build-step fragility, and the corpus's per-entity structure means keyword
matching's usual weakness (missing semantically-adjacent phrasing) is mitigated by giving Claude
retry/reformulate ability via tool use rather than a one-shot lookup. If real usage shows keyword
matching missing too many legitimate paraphrases, upgrading the tool's *internal* search
implementation to embeddings later is a contained change — the tool contract (`query → matched
pages`) doesn't need to change, only what's inside the tool handler.

### Vercel KV — status
**Live now**, used today for `/go/` redirect click-counting (`@vercel/kv`, `kv.incr`). Directly
usable for rate limiting (e.g. `@upstash/ratelimit`, built for exactly this KV/Upstash setup) and
for a global daily-spend circuit breaker (a KV counter checked before each Claude call). No new
provisioning needed for this piece.

---

## 3. Guardrail implementation — where each rule actually lives

| Spec rule | Enforcement layer | Mechanism |
|---|---|---|
| Answers only from PP's own content | System prompt + architecture | Claude is instructed it may only answer using tool-returned text and must say "I don't have that on Prof. Peptide" otherwise. Backstopped by a lightweight post-response overlap check (assistant text vs. returned tool results) — not a hard block in v1, but a logged signal for monitoring hallucination drift over time. |
| Dosing: factual yes, individual advice no (second-person test) | **Mostly system prompt; partly deterministic pre-filter** | See (a) below — this is the one genuinely hard-to-automate rule. |
| Never emit code/price/stock from the model | **Code-level, not trust-the-model, per spec** | See (b) below. |
| Affiliate disclosure whenever a vendor is named | UI-level (persistent) + system-prompt instruction | Belt: a persistent disclosure line always visible in the chat widget's chrome (not per-message, can't be forgotten). Suspenders: the model is instructed to acknowledge the affiliate relationship inline when directly recommending a vendor. |
| Rate limiting + conversation caps from day one | Code-level, via Vercel KV | See §4. |
| Search bar unchanged, chat is separate | Pure UI decision | New component/route, zero interaction with existing search code. |

### (a) The second-person dosing test
This is explicitly *not* a "does the text contain a number" check — the spec is right that a
regex on numbers would both over-block (refusing legitimate trial-dose questions) and under-block
(missing "what should I run" phrasings with no digits at all). Two things work together:

1. **The retrieval architecture already does most of the work.** Because Claude can only quote
   from what `search_pp_content` returns, and the corpus (post the four-part editorial audit) no
   longer *contains* any personalized "take X mg" directive anywhere on the site — only
   trial-attributed doses, label-attributed doses, and explicitly-named community-convention
   figures — there is no personalized-dosing text in the corpus for the model to leak. The
   guardrail is largely a property of the source data, same as the profiles' own honest-absence
   language *is* the chat's dosing voice, with no second editorial layer required (per the spec).
2. **The remaining risk is the model *composing* new personalized advice from its own initiative**
   rather than quoting a source, when a user directly asks it to apply a figure to themselves.
   This needs an explicit, few-shot system-prompt instruction: if the question uses "I/me/my" or
   asks what the user personally should take/run/stack, or asks whether an amount is "too much for
   me," the model must decline the numeric/protocol answer regardless of what the retrieved page
   says, and instead name the compound's profile page as the place with factual dosing
   information. The few-shot examples in that instruction should be **pulled from the live
   profiles' own current honest-absence phrasing** (programmatically quoted at build time, not
   hand-authored prose) so the system prompt can't drift out of sync with the pages if they change
   later — the same "single source of truth, generated" discipline as everything else in this
   repo.
3. **A deterministic, code-level pre-filter for the obvious cases**, as defense-in-depth: a cheap
   regex/keyword scan for unambiguous first-person dosing markers ("how much should I take," "is
   this too much for me," "what should I run") that, when matched, short-circuits to a canned
   refusal **without even calling the model for that turn** — free, instant, 100% reliable for the
   patterns it covers. This is genuinely code-level and catches the most common phrasings for
   zero cost; the system-prompt instruction handles the long tail a regex can't anticipate.

### (b) Code/price/stock — the strongest form of code-level enforcement
Per the spec, this cannot be "trust the model." The recommended design goes one step further than
instructing the model not to say it — **the model is architecturally never shown vendor codes or
prices at all.** The corpus-extraction step (§2, step 1) strips code/price DOM elements from
vendor pages the same way it strips nav/footer chrome, so retrieval can return a vendor's testing
and catalog prose but never its coupon code or price grid. That's not a policy the model could
violate even if it tried — short of hallucinating from general knowledge, which the same
post-generation regex scan used in `scripts/check-codes.mjs` (the `CODE_RE` family, `PROF[A-Z0-9]*`
etc.) can run as an output filter as a backstop.

When a user asks "what's the code for X," the answer comes from a **separate deterministic
tool/function** (`get_vendor_code(slug)`) that reads directly from `vendors.ts`/`prices` data at
request time — not from the retrieval corpus, not composed by the model. Recommended pattern: the
model writes the surrounding sentence with a placeholder ("...the current code is `{{CODE}}`,
giving you `{{DISCOUNT}}`, verified as of `{{DATE}}`...") and the **server**, not the model,
substitutes the placeholder from the live source before streaming that sentence to the client.
This guarantees the digits/letters a user sees always came from `vendors.ts`, never from the
model's token generation.

---

## 4. Cost model

Figures below use *approximate, directional* Anthropic API pricing tiers (roughly Haiku ≈
$0.80/$4 per M input/output tokens, Sonnet ≈ $3/$15 per M) — **confirm current published pricing
before committing to a budget**; I'm not citing exact current rates with high confidence.

**Per-turn token estimate** (one `search_pp_content` call, one matched page injected):
- System prompt + tool definition: ~1,200 tokens
- Conversation history so far: varies, ~500 tokens average early in a session
- Retrieved page content: ~5,000 tokens (1 full matched page)
- Output: capped at ~800–1,200 tokens (chat answers should be concise and point to pages, not
  reproduce them — shorter than the coach route's 1,500 cap)

≈ **6,700 input / 600 output tokens per turn.**

| Model tier | Rough cost/turn | Rough cost/3-turn conversation |
|---|---|---|
| Sonnet-class | ~$0.03 | ~$0.09 |
| Haiku-class | ~$0.008 | ~$0.024 |

**Prompt caching** is a real, concrete lever here: the system prompt + tool definition are static
across every user and turn — `cache_control` on that block can cut its cost by ~90% on cache hits,
meaningfully lowering the per-turn number above once caching is wired in.

**Rate limits to cap monthly exposure** (proposed starting point, Mark should tune to expected
traffic):
- Per-IP: 20 messages/hour (tighter than the coach route's 60 — this is public web traffic, not a
  controlled mobile app)
- Per-conversation: 20-message cap (same `validateBody` pattern the coach route already has)
- **Global daily circuit breaker**: a KV counter checked before every Claude call; once a
  configurable daily conversation cap is hit, the chat degrades gracefully to "temporarily at
  capacity, use search" rather than an open-ended bill.

At a **2,000 conversations/day** ceiling (a round starting number, not a recommendation — Mark
should pick this deliberately), worst-case monthly spend is roughly **$1,800–5,400/month at
Sonnet pricing** if the cap were hit every single day, or **~$450–1,400/month at Haiku pricing**.
This is the *ceiling the caps create*, not a traffic forecast — actual spend depends entirely on
real usage, which is unknown pre-launch. Recommend starting with a conservative cap (a few hundred
conversations/day) and raising it once real usage data exists.

---

## 5. Risks Mark hasn't asked about

1. **Scraping/bulk-extraction exposure.** A chat that answers questions from PP's content is
   inherently easier to scrape *structured* content from than static pages — a competitor could
   query it programmatically to extract PP's framing/comparisons at scale. Rate limits (§4) help
   but don't eliminate this; the repo already deals with Vercel's bot-challenge 403s elsewhere
   (memory: `vercel-bot-challenge-403`), so there's precedent this needs active attention here too.
2. **Prompt injection via retrieved content.** Today's corpus is entirely PP's own editorially
   reviewed pages, so the practical risk is low — but the system prompt should still treat all
   retrieved text as *data, not instructions* (standard defense), because if the corpus ever grows
   to include less-controlled content (e.g. a future user-reviews feature), an embedded
   injection payload in that content could otherwise manipulate the model's output through
   retrieval.
3. **Stale data / where "live" actually means live.** The retrieval corpus is a build-time
   snapshot — fine for editorial prose (regenerates every deploy, same as `search-index`), but
   reinforces why code/price *must* be read live at request time (§3b) rather than baked into the
   corpus: vendor codes and prices in this repo churn on a roughly weekly cadence (three separate
   code-drift fixes and one domain migration happened in this session alone), far faster than the
   deploy cadence a corpus snapshot would rely on.
4. **Mobile UX.** A chat widget competing for a small viewport with existing UI, and SSE streaming
   is known to be flaky on some mobile carriers/webviews (buffering, dropped connections).
   Recommend a robust reconnect/retry UX and a non-streaming fallback if SSE proves unreliable on
   real traffic.
5. **Shared API-key blast radius.** `ANTHROPIC_API_KEY` is already in use by the mobile coach
   feature. Reusing it for the website chat means shared rate limits/quota (a website traffic
   spike could throttle the mobile app) and shared cost visibility (Mark's Anthropic billing
   dashboard shows combined spend, not per-feature). **Recommend a separate, dedicated key** for
   the website chat so the two features have independent budgets and attributable cost — this is
   the one place the "Mark runs `vercel env add` from a real terminal" step (Preview + Production)
   is actually needed, and it should be sequenced as a single, well-documented command once the
   rest of the feature is built and ready to go live.
6. **Legal/compliance surface.** An AI chat discussing dosing — even under strict guardrails —
   for research peptides sold to consumers is a different risk profile than static editorial
   text; a regulator or plaintiff may treat "the chat told me" differently than "I read a page."
   Not a legal opinion, but worth counsel's eyes on the refusal-logic spec (§3a) before launch,
   given it's the single most legally sensitive interaction pattern on the site.
7. **System-prompt drift.** The chat's system prompt becomes a *third* editorial surface (after
   profiles and FAQ pages) encoding the "honest absence" voice as rules rather than content. If a
   future profile-audit round changes the pages' language, the system prompt's few-shot examples
   need to stay in lockstep or the chat's voice silently diverges from the site's. Mitigation is
   already noted in §3a — source the examples from live profile text at build time, not
   hand-authored prose.

---

## 6. Sequencing (accounting for the no-TTY constraint)

Phase 1 (this document) required no terminal step — the key already exists.

If Phase 2 is approved and the recommendation to isolate the key is taken:
1. CC builds the full feature (corpus generator, tool-use route, widget, guardrails, rate
   limiting via existing KV) against a documented placeholder env var name (e.g.
   `ANTHROPIC_API_KEY_CHAT`), with a clear "chat unavailable" fallback state if the var is unset —
   so the feature ships dark and safely on a preview deploy without Mark's terminal step blocking
   any of the build/verify work.
2. Mark runs one command in a real terminal, once, when ready to go live:
   `vercel env add ANTHROPIC_API_KEY_CHAT production preview` (also adding it to Preview closes
   the existing gap where `api/coach` can't be tested on preview deploys today either, since
   `ANTHROPIC_API_KEY` is Production-only currently).
3. CC verifies the deploy picks up the var and the chat goes live; PARK → push happens as normal
   after that.

---

## Open decisions for Mark

- **Model tier**: Sonnet-class (better judgment on the dosing refusal edge cases) vs Haiku-class
  (≈4x cheaper, faster) — recommend Sonnet for launch given how much of the guardrail story rests
  on nuanced judgment calls, revisit once real usage/cost data exists.
- **Separate API key vs reuse the existing one** — recommend separate (§5.5), but it's a real
  tradeoff (cleanliness vs one fewer terminal step).
- **Starting rate-limit numbers** (§4) — proposed as a starting point, not a recommendation Mark
  should treat as final; needs his read on expected traffic.
- **Retrieval architecture** (§2, Option C) — the recommendation, but worth Mark's explicit
  sign-off before any corpus-generator code gets written, since it's the piece with no existing
  precedent in this repo to fall back on.
