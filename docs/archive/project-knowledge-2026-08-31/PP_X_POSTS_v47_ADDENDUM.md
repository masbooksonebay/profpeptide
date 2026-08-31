# PP X POSTS — v47 Addendum (July 28, 2026)

**Status:** ACTIVE drop-in. Append into the governing PP_X_POSTS version.
**Supersedes:** the link line of the July 27 sale-post addendum — **the bare `/coupons` hub URL is retired for posting.**
**Unchanged:** 4-post anatomy, category line, line-1 in-stock rule, line-4 testing-only rule, rotation, research requirements.

---

## 🔒 THE HUB LINK IS NOW `?v=N` — NEVER BARE `/coupons`

**Use:**
```
https://profpeptide.com/coupons?v=2
```

**Do NOT use:**
```
https://profpeptide.com/coupons
```

**Why:** the bare `/coupons` URL has an **old OG card cached in X**. X caches cards per URL for up to 7 days and there is no force-refresh — the Card Validator is dead (preview removed 2022, tool retired 2023) and no third-party validator can touch X's cache. A post using the bare URL unfurls whatever X scraped previously, regardless of what the page serves now.

The `?v=N` query string is the **only** working cache-buster. X treats it as a new URL and crawls fresh. The query string does not affect the page — it renders identically.

---

## ⚠️ EACH `?v=` VALUE BURNS ONCE — TRACK THE CURRENT VALUE

Once a post goes out with `?v=2`, X caches a card against `?v=2` for up to 7 days. That value is then spent for refresh purposes. **The next time the hub card needs to change, use `?v=3`, then `?v=4`.**

| Value | Status | Notes |
|---|---|---|
| *(bare `/coupons`)* | ❌ **RETIRED** | Stale card cached in X. Never post |
| `?v=2` | ✅ **CURRENT** | In use from July 28, 2026 (Amino Club 30% set) |
| `?v=3` | ⬜ Next | Use when the hub card next needs a fresh scrape |

**Reusing the current value across several posts in the same run is fine and expected** — all four posts in a vendor set share one card, which is the intent. What burns the value is *needing the card to change afterwards*.

**Before any run that uses the hub link:** check this table for the current value. If the hub card has been regenerated since the last recorded value, advance it.

---

## 📌 WHEN TO USE THE HUB LINK VS THE VENDOR PAGE

Unchanged from the July 27 addendum, restated for clarity:

| Situation | Link |
|---|---|
| Standing affiliate rate (post rate = site rate) | `https://profpeptide.com/coupons/[vendor-slug]` — per-vendor OG card |
| **Boosted / promotional rate** (post rate > site rate) | **`https://profpeptide.com/coupons?v=N`** — hub card, number-free |
| Per-vendor card stuck on a stale X cache | `https://profpeptide.com/coupons?v=N` (documented fallback) |

**The reason is still the card, not the page.** A per-vendor OG card bakes in the standing rate — a post saying 30% would unfurl a card saying 20%, contradicting itself inside the same tweet. The hub card carries brand and purpose only, never a rate, and so can never go stale against a promotion.

---

## 🗓️ DEADLINE IN THE CODE LINE IS OPTIONAL (amended)

The July 27 sale-post addendum put a deadline in the code line:

```
Use code PROFPEPTIDE for 34% off — sale ends tomorrow, July 28. 🔥
```

**This is now Mark's call per run, not a requirement.** The dateless form is equally valid:

```
Use code PROFPEPTIDE for 30% off. 🔥
```

**In favour of dropping it:** v30's locked content rules bar urgency language ("limited time," "act fast"); a dateless code line sits more comfortably inside that rule than a countdown does. It also removes a value that can be wrong if the vendor extends or ends the promotion early.

**The tradeoff, accepted:** a dateless post claiming a rate above the site's standing rate **stays live indefinitely**. When the boost ends, the post is still on the timeline saying 30% while the site says 20% and checkout gives 20%. That is the overstating direction — the one the standing reminder warns about.

**Mitigation, and the durable fix:** the dated sale field on the vendor entry (carrying a sale rate + end date, read by the coupon page, the OG generator, and the price calculation, **auto-expiring**) removes this whole class of problem. It is tracked and still unbuilt. Until it exists, dateless promotional posts are a deliberate, accepted exposure — worth a manual sweep to delete or edit stale sale posts once a promotion ends.

---

## 📊 LOGGED — Amino Club, July 28, 2026

- **Standing rate: 20%** (`PROFPEPTIDE`) — settled this session as definite; all "up to 30%" language removed sitewide.
- **Boosted to 30%**, currently live. 4-post set drafted (Metabolic / Growth Hormone / Recovery / Skin+Longevity combined), hub link `?v=2`, no deadline.
- Anchors: Retatrutide · CJC-1295 + Ipamorelin · BPC-157 + TB-500 · GHK-Cu. Line 3 rotated to name every carried same-category peptide per the no-char-limit rule.
- Line 4 = the locked Amino Club testing line (ISO 17025, HPLC + mass spec, 99%+, per-product published COA).
- **Second boost event in two days** (Mile High 34% on July 27, Amino Club 30% on July 28). The dated sale field would have handled both without a manual link swap.

---

## 📅 Changelog

**July 28, 2026 (v47):**
- 🔒 **Bare `/coupons` retired for posting** — it carries a stale cached card in X. All hub links now use `?v=N`, current value **`?v=2`**.
- ➕ Value-tracking table added; each `?v=` value burns once for refresh purposes.
- ➕ **Deadline in the code line downgraded from required to optional** — dateless is more consistent with the locked no-urgency rule; the exposure (a live post claiming an expired rate) is documented, with the auto-expiring dated sale field named as the durable fix.
- ➕ Amino Club 30% boost logged.

**July 27, 2026:** Sale-post pattern added. `/coupons` hub card documented. X card mechanics corrected — validator dead, composer is the preview, `?v=` is the only cache-buster, never put a number on a card.

---

*Hub link is `?v=N`, never bare. Each value burns once — check the table before a run. Deadline optional; the auto-expiring sale field is the real fix.*
