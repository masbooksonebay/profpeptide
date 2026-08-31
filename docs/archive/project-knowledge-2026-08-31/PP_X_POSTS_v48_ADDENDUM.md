# PP X POSTS — v48 Addendum (July 31, 2026)

**Status:** ACTIVE drop-in. Append into the governing PP_X_POSTS version.
**Supersedes:** the `?v=N` burn-rate framing in the **v47 addendum** — see §3.
**Adds:** the vendor-card fallback rule, the standing hub URL, and the current per-vendor card status.

---

## 🔒 THE RULE — IF A VENDOR PAGE HAS NO OG CARD, LINK THE HUB

**Some coupon pages have no per-vendor OG card.** They fall back to the sitewide default `og-image.png` — a 1024×1024 square showing only the "Pp" mark. On X that renders as a plain box with a caption. It looks broken next to the real cards.

**When a vendor page has no card of its own, post this instead:**

```
https://profpeptide.com/coupons?v=2
```

That URL renders the **"Verified Discount Codes / For trusted research peptide vendors / View Deals"** hub card — number-free, on-brand, and confirmed rendering on X. **Never post a vendor URL whose card falls back to the generic mark.**

**Check before drafting.** A page's own card is confirmed by `og:image` pointing at `/coupons/<slug>/opengraph-image`. If `og:image` reads `https://profpeptide.com/og-image.png`, that page has **no card** and must use the hub link.

---

## 📊 CURRENT CARD STATUS

| Vendor page | Card | Link to post |
|---|---|---|
| **Glacier Aminos** | ✅ Own card — renders on X (verified live) | vendor URL |
| **Amino Club** | ✅ Own card | vendor URL |
| Most established vendors | ✅ Own card *(spot-check before a run)* | vendor URL |
| **Crush Research** | ❌ **No card** — falls back to `og-image.png` | **`/coupons?v=2`** |
| **Treasure Coast** | ⚠️ Likely no card — built in the same pass as Crush | **verify, then `/coupons?v=2`** |
| **Modern Aminos** | ⚠️ Likely no card — same pass | **verify, then `/coupons?v=2`** |
| **EZ Peptides** | ⚠️ Card exists and the image route returns 200, but X renders text-only. **Open issue** — third-party validators render it fine; only X fails | **`/coupons?v=2`** until resolved |

> **Root cause of the three gaps:** Crush, Treasure Coast, and Modern Aminos were built on July 29–30 from the Glacier structural template. That template covers page and layout, but the per-vendor `opengraph-image.tsx` was not created alongside them. **The durable fix is CC adding those three files**; the hub link is the interim.

---

## 🔧 §3 — CORRECTION TO v47: `?v=` VALUES ARE NOT SINGLE-USE

v47 framed each `?v=N` as burning once. **That's wrong as stated.**

**How it actually works:** X caches a card per URL. A `?v=` value stays usable indefinitely **as long as the card cached against it is the card you want**. You only advance the number when the *card itself* needs to change and X is holding a stale version.

**So `?v=2` is the standing hub URL.** It has the current, correct hub card cached and renders properly on X. Reuse it. Don't advance to `?v=3` without a reason.

| Value | Status |
|---|---|
| *(bare `/coupons`)* | ❌ **RETIRED** — stale card cached in X |
| **`?v=2`** | ✅ **STANDING** — the good hub card, verified rendering. **Use this** |
| `?v=3` | ⬜ Reserve — only if the hub card is regenerated and `?v=2` goes stale |

⚠️ **The July 31 Glacier sale posts were drafted with `?v=3`** on the burn-rate assumption. Harmless — a fresh crawl of `?v=3` picks up the same hub card — but unnecessary. **Use `?v=2` going forward.**

---

## 📌 WHEN TO USE WHICH LINK — consolidated

| Situation | Link |
|---|---|
| Standing rate, vendor page **has** its own card | `/coupons/<vendor-slug>` |
| Standing rate, vendor page has **no** card | **`/coupons?v=2`** |
| **Boosted / promotional rate** (post rate > site rate) | **`/coupons?v=2`** — the vendor card would bake in the standing rate and contradict the post |
| Vendor card stuck on a stale X cache | **`/coupons?v=2`** |

**The hub card carries no rate**, which is why it's safe for every one of these cases.

---

## 📅 Changelog

**July 31, 2026 (v48):**
- 🔒 **Vendor-card fallback rule added** — a page with no OG card renders the generic "Pp" square on X; post `/coupons?v=2` instead.
- ➕ **Card-status table** — Crush confirmed cardless; Treasure Coast and Modern Aminos likely the same (built in the same pass); EZ Peptides an open issue where the image route returns 200 but X renders text-only while third-party validators succeed.
- 🔧 **v47's burn-rate framing corrected** — `?v=` values aren't single-use. `?v=2` is the **standing** hub URL and renders correctly; only advance when the hub card itself changes.
- ➕ Consolidated link-selection table.

**July 28, 2026 (v47):** Bare `/coupons` retired for posting. Deadline in the code line downgraded to optional. Amino Club 30% boost logged.

---

*If the vendor page has no card, post the hub. `?v=2` is standing — don't advance it without a reason.*
