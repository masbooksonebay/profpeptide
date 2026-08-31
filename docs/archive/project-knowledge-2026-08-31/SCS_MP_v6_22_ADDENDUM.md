# SCS_MP v6.22 — ADDENDUM

**August 4, 2026.** Adds to v6.21. Studio-level rules and learnings from SCS 28.

---

## 🔒 NEW RULE — Run the false-positive scan before applying any pattern

Before applying any rule that excludes, matches, or transforms data across a corpus, **scan what it would catch across the whole corpus first and report it.**

This stopped one bad rule and validated four good ones in a single session:

- **Slug-based kit detection — REJECTED.** Would have dropped 16 legitimate rows to catch 2 leaks.
- **Per-ml, count/tablet, wholesale-only, name-based kit — APPLIED.** All scanned clean first.

The scan turns an obvious-looking fix into a rejected one often enough to be worth the step every time.

---

## 🔒 NEW RULE — Structural correctness ≠ factual correctness

Guards that check *shape* (does it exist, does it resolve, did the count collapse) will not catch a structurally perfect record containing a wrong number.

**Both major data bugs in SCS 28 passed every structural check** and were found by chasing a single anomalous row. Where data is asserted publicly, there should be a guard on **plausibility**, not just structure.

Applied instance: `check:prices` (PP_PRICES v4).

---

## 🔒 NEW RULE — Normalize less at an adapter boundary

You cannot check a field you discarded. The AED currency bug was invisible because the woo adapter **stripped `currency_code` during normalization** — the guard was checking a field that never reached it.

When writing any adapter or import layer, carry through more than the current consumer needs.

---

## 🔒 NEW RULE — A warning nobody reads is worse than no warning

When adding a build-time warning, **calibrate it against current live data before shipping.** If the first real run prints 40 lines, the guard has failed regardless of technical correctness.

`check:prices` was calibrated to N=4 producing ~10 lines, ~6–8 actionable. Raising the threshold would have silenced one legitimate row at the cost of three real suspects.

Corollary: `check:surfaces` already warns on 17 pending vendors every build. Each additional standing warning dilutes the rest.

---

## 🔒 NEW RULE — A guard that can't assess something must say so

`check:prices` prints an explicit **"UNCHECKED — too few vendors"** list rather than silently skipping compounds it can't form a median for.

A guard that silently skips implies coverage it doesn't have. **The UNCHECKED list earned its keep immediately** — it caused a row to be examined manually that the guard could not see.

---

## 🔒 NEW RULE — If a fact appears on more than one page, it belongs in data

Reinforced by SCS 28's count sweep, which found **five stale hardcoded counts** including the root-layout default description advertising "40+ peptides" when there were 62 — inherited by every page without its own description.

**Now enforced by `check:counts`**, which fails the build. Design pattern worth reusing:

- **Phrase whitelist, not noun blacklist** — a blacklist fires on vendor catalog sizes, FDA compound lists, dosages, study counts
- **Scoped to site-chrome files** — world-facts don't live there
- **Strips `${…}` interpolations** so derived values pass
- **Paired with a drift assertion** — the regex stops new hardcodes; the assertion stops the constants themselves going stale

**Honest scope, stated rather than papered over:** it cannot catch a hardcoded count on a content page, because those legitimately carry world-facts.

---

## 🔒 NEW PATTERN — Floor-to-ten for rounded public figures

`Math.floor(count/10)*10 + "+"` renders "60+" today, advances to "70+" automatically, and **can only ever understate.**

Use wherever a rounded figure is wanted in public copy. Reuse rather than hardcoding an approximation — "60+" as a literal rots exactly like an exact number, just more slowly.

---

## 🔒 NEW RULE — Documents describing a product must be audited together

HR's App Store submission had **four documents claiming the app was offline and collected nothing**: the privacy policy, the App Privacy label, the App Review notes, and release notes advertising a feature the policy denied existed.

**None was wrong on purpose.** All were written when the app genuinely was offline; Ask Coach and HealthKit arrived after. A true statement that stopped being true, with nothing watching — the same failure mode as every stale count.

**Before any submission or release, audit every document that describes the product against the artifact**, not against each other.

---

## 🔒 REINFORCED — The artifact is the source

Three instances this session:

1. **GSC dashboard readings were 5 weeks stale**, describing a page since rebuilt. Check the observation date next to the observed value.
2. **CINC cited the old privacy policy** an hour after it was rewritten and pushed.
3. **CC proved a value was still derived** by checking the live HTML for React's `<!-- -->` SSR markers around the number — proving the property from the artifact rather than the code.

---

## 🔒 REINFORCED — Exclude a stated value only when internally contradictory

Royal's VIP 10mg at $465 was excluded because it cost **more than the same vendor's 10-vial kit** ($330). That's impossible, not unusual.

Modern-aminos' `250MCG -Dry-Fill` at $312/mg was **left alone** — a 0.25mg vial at that price is arithmetically fine, and no evidence supported a typo.

> **Excluding a vendor's stated value because it looks unusual is guessing.** A 7× expensive vendor is information.

---

## 🔒 NEW — Vendor terms are negotiable; ask before building

Two vendors improved terms on request in one week:

- **Licensed Peptides** issued a shared code (`Affiliate5`, given to every affiliate, attributable to nobody) → swapped to `PROFPEPTIDE` on request
- **Legendary** confirmed a backlink unprompted

**Corollary:** approval rate is high; **build rate should be lower.** Three vendors this week had terms weak enough to question building at all. A page costs research, price-pull onboarding, X posts, and ongoing verification.

---

## 🔒 NEW — Inbound vendor requests are the safe backlink mechanism

PP builds pages on merit. Vendors who then add "as featured on profpeptide.com" do so as their own marketing decision. **Never condition coverage on a link.**

Include the "as featured" mention in vendor email replies. First confirmed result: Legendary, ~24 hours after asking.

---

## 📅 Changelog

**Aug 4, 2026 (v6.21 → v6.22):** FP-scan-before-applying · structural ≠ factual correctness · normalize less at adapter boundaries · calibrate warnings before shipping · guards must declare blind spots · counts belong in data (+`check:counts` design) · floor-to-ten pattern · audit product documents together · reinforced artifact-is-source and internal-contradiction standards · vendor terms are negotiable · inbound backlink mechanism.
