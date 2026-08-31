# SCS_MP — v6.19 Addendum (July 27, 2026)

**Status:** ACTIVE drop-in. **SUPERSEDES the v6.18 addendum.** Append/version into SCS_MP v6.16.

---

## 🔧 CORRECTION — HR IS NOT AN OPTION C EXCEPTION

**v6.18 recorded HR as a deliberate divergence from the studio-wide Option C monetization rule** (base free, pro features paid), on the basis that HR would use a full-app paywall.

**That was wrong.** HR's model is freemium: the app stays free to download permanently, pro features become paid when a subscription ships. **That is Option C.** The live CTA copy — "Free to download. Everything unlocked — for a limited time." — states it publicly.

**Option C now applies uniformly across PP, SC, HR, and WN.** Remove the exception note. `$9.99/month` remains HR's recorded price direction for the eventual pro tier, not a whole-app price. The 30-day trial phase has not started.

---

## 🔧 PORTFOLIO SNAPSHOT

| App | State |
|---|---|
| **PP** | LIVE · price section at **1,291 rows / 28 vendors / 69 pages** · homepage rebuilt · 4 new vendors |
| **SC** | v1.0.4 live · privacy-link fix **parked, unpushed** |
| **HR** | v1.0.2 live · **v1.0.3 (build 16) through Beta App Review** · TestFlight link live to 10 testers |
| **WN** | iOS pre-build (spec phase); marketing site LIVE |

---

## 🔒 NEVER STATE A QUOTA FIGURE (GSC) — REINFORCED

**Third data point, third different number.** The ref docs recorded "≤5," then "≥11," then "EXACTLY 11 confirmed." **July 25: GSC refused at the 11th. Ten landed**, wall hit at `/prices/ipamorelin`.

Claude wrote "the cap is exactly 11" into the prompt and **CINC stopped at 10 assuming a slot remained** — the real ceiling would never have been discovered. The rule holds and is now proven:

> Queue 20+. Submit every genuinely-qualifying URL until **GSC itself returns "Quota Exceeded."** Log which URL hit the wall and how many landed. **Never state a number in a prompt.**

Already-indexed / noindex / canonical'd pages are free skips.

---

## 🔒 X CARD MECHANICS (new — corrects a bad recommendation)

**X's Card Validator is dead.** The preview was removed in 2022 and the tool retired in 2023. `cards-dev.twitter.com/validator` no longer works; `cards-dev.x.com/validator` exists but shows no preview. Claude recommended it before checking — don't.

**X's own guidance: use the Tweet Composer as the preview.** Paste the link, the card renders, no need to post.

**Cards cache per URL for up to 7 days and cannot be force-refreshed.** The only reliable cache-buster is a **unique query parameter** — `?v=2` makes it a new URL to X, so it crawls fresh. Each value burns once; the next refresh needs `?v=3`. Third-party validators can check your meta tags but **cannot touch X's cache**.

**Consequence for OG card design: never put a number on a card that could change.** A cached card showing a stale rate can't be fixed. PP's `/coupons` hub card is deliberately number-free for this reason.

---

## 🖼️ THE SALE-VS-CARD MISMATCH PATTERN (new)

**The situation:** a vendor runs a time-limited promotion at a rate different from the standing affiliate rate (Mile High, 34% for one day against a standing 10%). Per-vendor OG cards bake the standing rate into the image, so a post about the sale pulls a card that contradicts it.

**Options, and why:**
1. **Update the site for the sale window** — correct, but changing `vendors.ts` also moves every post-code price on `/prices`, and it needs a revert nobody can be relied on to remember.
2. **Link the hub instead** — the card carries brand and purpose only, never a rate. Now built (PP `/coupons` hub card). Tradeoff: the reader lands on a vendor list rather than the vendor.
3. **A dated sale field** — the durable fix, not yet built. Vendor entry carries a sale rate + end date; coupon page, OG generator, and price calc all read it; **it auto-expires**, so no revert step exists to forget.

**Understating is the safe direction.** The code is the same either way — a page showing 10% during a 34% sale means the buyer gets *more* than promised. The dangerous error is a stale page promising a rate that's expired.

---

## 🧠 RECON BEATS ASSUMPTION — STILL PAYING

Read-only investigation changed the answer again:
- **The 8 "orphaned" profiles weren't missing by accident** — they were in `EXTRA_PROFILE_SLUGS`, a deliberate mechanism for routable-but-unlisted pages. The homepage stat and the library had disagreed since they were built.
- **`/coupons` needed no new card design** — the generator already had a vendorless `FallbackCard` with evergreen copy. The job was routing, not designing.
- **Mile High's missing sizes are genuinely absent from the API**, verified on two endpoints — not an adapter bug.
- **LA's decoder failure was HTML entity encoding**, not a character-class mistake. The decoder was seeing different bytes than the human reading the page.
- **CC caught its own false positive** mid-audit (a `WhereToBuy` grep matching `isWhereToBuy`) and reported the error rather than proceeding.

---

## ⚠️ CLAUDE FAILURE MODE — SOLVING A PROBLEM THAT WASN'T THERE

**The logo lockup cost roughly eight rounds and produced nothing shippable.**

Mark's report was precise: *"of." sits higher than "Pr."* — a letter-alignment problem. **CC's first code build already fixed it**, because building the lockup as one text run puts every letter on a shared baseline automatically. It was done.

Claude then invented a second problem — that the tile *box* extended below the baseline — and sent three rounds chasing it (clip-to-baseline, `text-box-trim`, then a browser-compat rewrite of a technique that shouldn't have been used). Each round changed tile geometry Mark had never asked to change, and each time he repeated the same instruction: *don't change anything, just align the text.*

**Three lessons:**
1. **Fix the reported problem, not the one you diagnose behind it.** A diagnosis that expands scope needs the person's agreement first.
2. **When someone repeats an instruction, stop and re-read it** rather than producing another variation.
3. **Don't chase compatibility on a technique you shouldn't be using.** The `text-box-trim` round was effort spent perfecting a wrong approach.

**Related:** the preview file is a hand-maintained HTML copy of the component. It drifted from the component at least once, showing an older render while the component had moved on. **Same failure mode as the hardcoded codes and the sled weights** — two things meant to match with nothing keeping them in sync.

---

## ⚠️ THE HARDCODED-VALUE FAILURE MODE — NOW WITH A LIVE CONTRADICTION

PP's Editor's Pick swap (Peptides.gg → Oasis Labs) is driven by `vendors.ts`, but `/best-peptide-vendors` uses **its own hardcoded array** — so the live site now shows **Oasis Labs as Featured on `/coupons` and Peptides.gg as Featured on `/best-peptide-vendors`.**

That's the same class as HR's station weights across five files, and it has now produced a user-visible contradiction rather than a latent one.

**Fix pattern that works: single source of truth + a mechanical guard.** HR's `check:weights` caught its own author's doc comments on first run. PP needs `check:codes`.

**Also now visible:** stats and counts hardcoded on pages drift from the data they describe. PP's "54 profiles" was stale for weeks. The fix is deriving — PP's price-comparison stat now reads from `prices.index.json` and self-corrects.

---

## 📉 DOC-ROT — A THIRD CONFIRMATION

**HR_MASTER v13 was written the evening of July 25 and was materially wrong within 48 hours** — it recorded a monetization model that Mark corrected on July 27, after the live CTA copy had already been changed to state the opposite.

The pattern is now consistent enough to state as a rule: **a ref doc records what was believed at a moment, and belief moves faster than versioning.** Verify state against the artifact — the repo, ASC, the live site — before acting on any doc claim about current state.

---

## 📅 Changelog
**July 27, 2026 (v6.18 → v6.19):**
- 🔧 **HR is NOT an Option C exception** — corrected; Option C applies uniformly
- 🔒 **GSC quota** — third different number; rule reinforced with proof
- 🔒 **X card mechanics** — validator dead, composer is the preview, `?v=` is the only cache-buster, never put a number on a card
- 🖼️ **Sale-vs-card mismatch pattern** recorded with three options and the safe direction
- ⚠️ **Claude failure mode** — the lockup detour: solving a problem the person didn't report
- ⚠️ **Hardcoded-value failure mode** now producing a live user-visible contradiction
- 📉 Doc-rot confirmed a third time

---

## 🔗 Cross-References
**HR_MASTER v14** · **PP_PRICES v2** · HR_SOCIAL v12 · PP_MASTER · PP_SEO · PP_X_POSTS · SC_MASTER · WN_MASTER

---

*Studio addendum. RULE #0 governs all. CC owns build work and every terminal command; Claude instructs and asks before drafting. Fix the reported problem, not the one behind it. Guards before drift.*
