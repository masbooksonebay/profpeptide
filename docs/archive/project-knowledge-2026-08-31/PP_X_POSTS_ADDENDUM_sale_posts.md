# PP X POSTS — Addendum (July 27, 2026)

**Status:** ACTIVE drop-in. Append into the governing PP_X_POSTS version. Adds the **time-limited sale post pattern**, the **/coupons hub card**, and **X card mechanics**. The 4-post anatomy, category line, rotation, and research requirements are UNCHANGED.

---

## 🆕 TIME-LIMITED SALE POSTS

Vendors run promotions at rates different from the standing affiliate rate. **Mile High, July 27–28: 34% off against a standing 10%.** The 4-post structure still applies; three things change.

### 1. The discount line carries the deadline

```
Use code PROFPEPTIDE for 34% off — sale ends tomorrow, July 28. 🔥
```

Still one line, still the only 🔥. The deadline is what makes the elevated rate legible as an event rather than a contradiction of the site.

### 2. Link the hub, not the vendor page

```
https://profpeptide.com/coupons
```

**Why:** per-vendor OG cards bake the standing rate into the image — a post saying 34% pulls a card saying 10%. The `/coupons` hub card carries brand and purpose only, never a rate.

**Tradeoff, accepted:** the reader lands on a 30-vendor list rather than the vendor, and that list still shows the standing rate. The alternative — updating the site for a one-day sale — moves every post-code price on `/prices` and needs a revert nobody can be relied on to remember.

### 3. Promotional mechanics stay OUT

Vendor sale emails often include giveaways, prize draws, and top-spender competitions. **None of these belong in a PP post.**

- The differentiator slot is **testing/purity only** — unchanged.
- **"Top spender wins a prize" is never posted.** PP is the independent reference layer; encouraging maximum spend on research compounds is a vendor's posture, not PP's.

*(Mile High's email carried a 1-in-30 giveaway on orders over $300 and a top-2-spender kit. Both deliberately omitted.)*

---

## 🖼️ THE /coupons HUB CARD (live)

Built July 26, pushed `ac0e08e`. Same generator as the vendor cards — a literal sibling, not a new design.

- **Headline:** "Verified Discount Codes"
- **Sub-line:** "For trusted research peptide vendors"
- **Alt:** "Prof. Peptide — verified research peptide discount codes"
- **1200×630**, og + twitter twins

**NO NUMBERS ON IT, deliberately.** Not a vendor count, not "save up to 50%." X caches OG images per URL and won't refresh — a number would become permanently stale in every cached card, with no way to fix it. "Up to 50%" is also carried by a single vendor (Ascension); the next highest is 20%.

**If a post needs a number, put it in the post text.** The text is composed fresh each time; the card is the part you can't take back.

---

## 🔒 X CARD MECHANICS (corrects an earlier bad recommendation)

**The Card Validator is dead.** Preview removed 2022, tool retired 2023. `cards-dev.twitter.com/validator` is gone; `cards-dev.x.com/validator` loads but shows no preview.

**X's own guidance: the Tweet Composer IS the preview.** Paste the link into a new post — the card renders automatically, no need to post it.

**Cards cache per URL for up to 7 days and cannot be force-refreshed.** The only reliable method is a **unique query parameter**:

```
https://profpeptide.com/coupons?v=2
```

X treats it as a new URL and crawls fresh. The query string doesn't affect the page. **Each value burns once** — the next refresh needs `?v=3`.

**Third-party validators** (keep.md, socialrails, opentweet, brandbird) can confirm your meta tags are correct and show what the card *should* look like. **None of them can touch X's cache.**

---

## ⚠️ STANDING REMINDER — the site must not contradict the post

Before any post naming a rate, confirm what `/coupons/[vendor]` actually says. If they differ:
- **Understating is safe** — the code is the same either way, so a page showing less than the post means the buyer gets more than promised.
- **Overstating is not** — a page promising a rate that's expired is the failure that costs trust on a page whose entire claim is *verified* codes.

**The durable fix, not yet built:** a dated sale field on the vendor entry carrying a sale rate + end date, read by the coupon page, the OG generator, and the price calculation, **auto-expiring** so there's no revert step to forget. Would give a correct card rather than a generic one.

---

## 📅 Changelog
**July 27, 2026:** Sale-post pattern added (deadline in the code line, hub link, no promotional mechanics). `/coupons` hub card documented. X card mechanics corrected — validator dead, composer is the preview, `?v=` is the only cache-buster, never put a number on a card.

---

*Anatomy unchanged. For sales: deadline in the code line, hub link, testing-only differentiator, no prize mechanics.*
