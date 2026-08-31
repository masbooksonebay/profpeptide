# PP X Posts — Master Ref Doc

**Status:** ACTIVE REFERENCE — promotional X post conventions, vendor code exceptions, profile cache, post cycle history
**Version:** v18 (May 22, 2026 evening) — EZ Peptides Memorial Day added + @profpeptideapp launch announcement + X account login lockout diagnostic + iPad-cellular bypass pattern
**Cross-referenced in:** PP_MASTER v8

---

## 📍 Status Snapshot (May 22, 2026 evening)

**FORMAT:** v3.2 (locked) — opener ends with `!`, 🔥 only on code line, no other emojis, link to `/coupons` (not vendor URL)

**ACTIVE PROMO ACCOUNTS:** PP, PREM, PEAK, CORE

**APP ACCOUNT (separate from promo):** **@profpeptideapp** (NEW v18) — dedicated to the Prof Peptide iOS app; launch announcement post fired this session

**MEMORIAL DAY CYCLE LIVE:** Fusion BOGO + VCR sitewide (prior session, full 4-account fire) + **EZ Peptides 20%/15%** (this session, PP-only iPad-cellular fire, other 3 accounts pending)

**X LOGIN STATUS:** Laptop locked out at login-flow level (rate limit by IP + browser fingerprint). iPad-cellular bypass works. 24-48h cooldown expected before laptop login clears.

---

## 🚨 X Account Login Lockout — Diagnostic + Bypass Pattern (NEW v18)

### Symptom
Both Chrome + Safari + incognito + on home WiFi: "Oops, something went wrong. Please try again later." on `x.com/i/flow/login` BEFORE entering credentials. Public X profiles (e.g., `/elonmusk`) load fine in same browser/incognito — issue is login endpoint specifically.

### Phone hotspot test (laptop tethered)
Different error: "Something went wrong. Try reloading." with a Retry button. Different rejection pattern suggests either bad cellular connection OR a different downstream block (not the same login-flow rate limit; could be a CDN-level edge issue).

### Confirmed cause
Multiple X accounts being switched/logged-in on same laptop + home IP triggered bot detection at the login endpoint. Read access (public profiles) unaffected.

### Bypass diagnostic ladder
1. **Different device + different IP** (iPad-cellular) → cleanest bypass; login works → confirmed this session
2. **Different device + same IP** (iPad on home WiFi) — works if fingerprint-only flag; fails if IP-level
3. **Same device + different IP** (laptop tethered to phone hotspot) — works if device-fingerprint flag; fails if device-recognized
4. **Wait 24-48h with no login attempts from flagged IP**

### Triggers to avoid going forward
- Rapid account switching on same device
- Repeated failed login retries (each retry extends rate-limit window)
- Browser automation drivers (Selenium, CDP, CINC) — even legitimate ones look like bots
- VPN to datacenter IPs (X heavily flags datacenter ASNs)

### Account-switching pattern post-bypass
Once logged in on iPad-cellular, iOS session tokens survive WiFi/cellular switching — so the login persists if the iPad moves back to home WiFi. **Don't log out mid-session.** Switching between accounts on the iPad rapidly re-triggers the original flag pattern. **Post from one account, then leave the iPad alone on that account today.**

For full 4-account Memorial Day cycle coverage, fire PREM/PEAK/CORE EZ Peptides posts AFTER laptop X access clears (Sunday or Monday).

---

## 📱 @profpeptideapp Launch Announcement (NEW v18)

The PP iOS app has a dedicated X account distinct from the PP/PREM/PEAK/CORE promotional accounts. Launch announcement fired this session.

### Post text (~183 chars)

```
Prof Peptide is now live on the App Store.

• Dosage Calculator
• Peptide & Supplement Library
• Research Hub
• Discount Codes

https://apps.apple.com/app/prof-peptide/id6761995269
```

### Format characteristics
- **Not v3.2 promo format** — this is an announcement post from the app's own account
- No emoji (consistent with PP brand voice)
- Bullet character: `•` (no markdown bullets — Twitter doesn't render markdown)
- Direct link to App Store
- No PROFPEPTIDE code (this isn't a vendor promo)

### Account hygiene
- Pin post to profile after firing
- Bio includes App Store link
- @profpeptideapp posts focus on: app updates, feature additions, user feedback responses
- @profpeptideapp does NOT post vendor promo cycles (those belong on PP/PREM/PEAK/CORE)

---

## 🏷️ Vendor Code Exception Map (Current)

### Default code: `PROFPEPTIDE`
Used by most affiliate vendors in standard PP posts.

### Exception codes:

| Vendor | Code | Discount | Status |
|---|---|---|---|
| Royal Peptides | `PROF10` | 10% off | Established exception |
| Glacier Aminos | `PROF10` | 10% off | Established exception |
| Vital Core Research | `PROF20` | 20% off | Swapped from PROFPEPTIDE in v17 |

**Source of truth sync:** This exception map MUST stay synced with PP_MASTER v8's vendor code map.

---

## 📣 Memorial Day Cycle — Vendor Roster

### Fired prior session (full 4-account: PP / PREM / PEAK / CORE)

**Fusion Peptide BOGO** — 05/20-05/26 at 9AM CST. BOGO + 15% off PROFPEPTIDE stack.

**Vital Core Research sitewide** — 05/20-05/26 at 9AM CST. 25% sitewide + PROF20 stack → 45% total.

### Fired this session (PP-only — iPad-cellular)

**EZ Peptides Memorial Day:**

```
EZ Peptides has all 3 GLPs in stock — Semaglutide, Tirzepatide, and Retatrutide!

Memorial Day sale starts 05/23 and runs through 05/25 — 20% off vials, 15% off kits.

🔥 Stack code PROFPEPTIDE for an extra 10% off on top.

https://profpeptide.com/coupons
```

- ~256 chars (matches Fusion post length exactly)
- v3.2 compliant (opener ends `!`, 🔥 only on code line, link to /coupons)
- Default code (PROFPEPTIDE) — EZ uses default
- Two-tier sale handled by preserving both rates ("20% off vials, 15% off kits") rather than collapsing to "up to 30%" max
- Stack math: PROFPEPTIDE (10%) + sale = additive → 30% vials / 25% kits at checkout

### Optional EZ Peptides Sun/Mon recapture variant (drafted, deferred)

```
EZ Peptides' Memorial Day sale ends Monday — last chance to stack PROFPEPTIDE for an extra 10% off on top of 20% vials / 15% kits.

https://profpeptide.com/coupons
```

Fire if engagement on main post is healthy and sale window is still open. Same pattern as deferred Fusion + VCR recapture variants.

### Cycle completion plan
- ✅ Fusion: 4/4 accounts (PP/PREM/PEAK/CORE)
- ✅ VCR: 4/4 accounts (PP/PREM/PEAK/CORE)
- 🟡 EZ Peptides: 1/4 accounts (PP only via iPad-cellular this session; PREM/PEAK/CORE blocked by laptop X lockout, retry Sun/Mon after cooldown)

---

## 🛠️ Workflow Notes

### Stacking math conventions (carried from v17)
Additive stack math (sum of percentages), not compound. Vendor-stated total savings (Fusion implied, VCR 45% explicit, EZ implied) confirms additive at checkout.

### Two-tier sale framing (NEW v18)
When a vendor runs different rates per product type (vials vs kits, etc.), preserve both rates in the post wording. Don't collapse to a single max number — buyers shopping the lower-tier product feel deceived if the post advertises only the higher rate.

### Code-change-before-post-fire sequencing
For exception code changes (like VCR PROFPEPTIDE → PROF20 in v17), order matters:
1. Vendor's affiliate dashboard updated to new code (Mark's manual step)
2. PP site updated via CC commit (vendors.ts + coupons surfaces)
3. Live verification (curl + grep on profpeptide.com)
4. X post fired citing new code

If posts fire before step 1-3 complete, customers will try the new code and fail.

### Partial cycle fire is acceptable (NEW v18)
A PP-only Memorial Day post when the full 4-account cycle isn't possible (due to X lockout) is better than no post — catches some of the conversion window. Fill in PREM/PEAK/CORE after access clears, even if late in the sale window. The Sun/Mon recapture variant CAN serve as the PREM/PEAK/CORE first-fire if main post is too late.

### iPad-cellular for partial cycle fires (NEW v18)
When laptop X login is unavailable, iPad on cellular bypasses both IP-level and device-fingerprint flags. Use for time-sensitive posts. Don't switch accounts on the iPad during the same session (re-triggers flag).

---

## 📅 Changelog

**May 22, 2026 (this session — v17 → v18):**
- ✅ **EZ Peptides Memorial Day post drafted + fired PP-only** from iPad-cellular
- ✅ **EZ Peptides Sun/Mon recapture variant drafted** (deferred)
- ✅ **@profpeptideapp launch announcement post drafted + fired** from iPad-cellular
- ✅ **X account login lockout diagnostic captured** — symptoms, causes, bypass ladder
- ✅ **iPad-cellular bypass pattern locked** — clean diagnostic + practical post fire path
- ✅ **Two-tier sale framing pattern captured** (preserve both rates, don't collapse)
- ✅ **Partial cycle fire acceptance documented** — better to fire 1/4 than 0/4

**Prior session entries:** unchanged. See v17 history (VCR exception code, Fusion BOGO + VCR sitewide fires).

---

## 🔗 Cross-References

- **PP_MASTER v8** — vendor code map (this exception map must stay synced) + @profpeptideapp launch announcement
- **PP_X_PROMO_TEMPLATE v2.10** — v3.2 format spec (unchanged)
- **PP_INDEXING v18** — site indexing state
- **SCS_MP v6.3** — parent doc; X account multi-account-switching pattern

---

*Active tracker for PP X promotional posts. Updated as cycles fire, exception codes change, format conventions evolve, account hygiene rules establish.*
