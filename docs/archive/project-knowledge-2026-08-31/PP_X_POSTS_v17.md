# PP X Posts — Master Ref Doc

**Status:** ACTIVE REFERENCE — promotional X post conventions, vendor code exceptions, profile cache, post cycle history
**Version:** v17 (May 20, 2026 evening) — VCR moved to PROF20 exception code + Memorial Day Fusion + VCR posts fired
**Cross-referenced in:** PP_MASTER v7

---

## 📍 Status Snapshot (May 20, 2026 evening)

**FORMAT:** v3.2 (locked prior session) — opener ends with `!`, 🔥 only on code line, no other emojis, link to `/coupons` (not vendor URL)

**ACTIVE ACCOUNTS:** PP, PREM, PEAK, CORE

**MEMORIAL DAY CYCLE LIVE:** Fusion BOGO + VCR sitewide both running 05/20-05/26 at 9AM CST

---

## 🏷️ Vendor Code Exception Map (UPDATED v17)

### Default code: `PROFPEPTIDE`
Used by most affiliate vendors in standard PP posts.

### Exception codes:

| Vendor | Code | Discount | Status |
|---|---|---|---|
| Royal Peptides | `PROF10` | 10% off | Established exception |
| Glacier Aminos | `PROF10` | 10% off | Established exception |
| **Vital Core Research** | **`PROF20`** | **20% off** | **NEW v17 — moved from PROFPEPTIDE this session** |

**Source of truth sync:** This exception map MUST stay synced with PP_MASTER v7's vendor code map. Any new exception added here must also be reflected in vendors.ts via a CC commit on the PP repo.

---

## 📣 This Session's Posts (Memorial Day Cycle)

### Fusion Peptide — BOGO sale (fired earlier today)

```
Fusion Peptide has all 3 GLPs in stock — Semaglutide, Tirzepatide, and Retatrutide!

BOGO sale starts 05/20 at 9AM CST and runs through 05/26 at 9AM CST.

🔥 Our code PROFPEPTIDE stacks with the BOGO for an extra 15% off.

https://profpeptide.com/coupons
```

- ~256 chars
- v3.2 compliant
- Default code (PROFPEPTIDE) — Fusion uses default
- Fired: PP/PREM/PEAK/CORE accounts

### Vital Core Research — Memorial Day sitewide (fired this session)

```
Vital Core Research has all 3 GLPs in stock — Semaglutide, Tirzepatide, and Retatrutide!

Memorial Day sale starts 05/20 at 9AM CST and runs through 05/26 at 9AM CST — 25% off sitewide.

🔥 Stack code PROF20 for 45% off your total order.

https://profpeptide.com/coupons
```

- ~263 chars
- v3.2 compliant
- Exception code (PROF20) — first use of new VCR exception
- Fired: PP/PREM/PEAK/CORE accounts
- Math: VCR 25% sitewide + PROF20 20% = 45% additive stack

### Optional mid-sale recapture variants (drafted, NOT fired)

**Fusion ending-soon variant:**
- Frame: "Fusion's BOGO ends Monday — still time to stack PROFPEPTIDE"
- Timing: Sat/Sun for weekend research-buy crowd

**VCR ending-soon variant:**
- Frame: "VCR's Memorial Day sale ends Monday — last chance to stack PROF20 for 45% off"
- Timing: Sat/Sun

Mark deferred firing these — call to make late-week.

---

## 🛠️ Workflow Notes (NEW v17)

### Stacking math conventions
Both Fusion (BOGO + 15%) and VCR (25% + 20%) use **additive stack math** (sum of percentages), not compound. Vendor-stated total savings (Fusion implied, VCR 45% explicit) confirms additive math at checkout. Worth noting for future stacked-promotion posts.

### Heather Hendrix brand pattern
Fusion + VCR are both Heather Hendrix's affiliate brands. When she runs parallel promotions across both, the right pattern is **separate posts per brand**, not combined posts:
- Each brand has distinct mechanic (BOGO vs sitewide)
- Each brand has different code (PROFPEPTIDE default vs PROF20 exception)
- Distinct posts let researchers pick which mechanic fits their order

### Code-change-before-post-fire sequencing
For exception code changes (like VCR PROFPEPTIDE → PROF20 this session), the order matters:
1. Vendor's affiliate dashboard updated to new code (Mark's manual step)
2. PP site updated via CC commit (vendors.ts + coupons surfaces)
3. Live verification (curl + grep on profpeptide.com)
4. X post fired citing new code

If posts fire before step 1-3 complete, customers will try the new code and fail. Sequencing is critical.

---

## 📅 Changelog

**May 20, 2026 (this session — v16 → v17):**
- ✅ **VCR exception code added:** PROFPEPTIDE → PROF20
- ✅ **Fusion BOGO Memorial Day post fired** (PP/PREM/PEAK/CORE)
- ✅ **VCR Memorial Day post fired** (PP/PREM/PEAK/CORE) — first use of PROF20 exception
- ✅ **Mid-sale recapture variants drafted** (deferred firing)
- ✅ **Additive stack math convention captured**
- ✅ **Heather Hendrix parallel-brand pattern captured**

**Prior session entries:** unchanged. See v16 history.

---

## 🔗 Cross-References

- **PP_MASTER v7** — vendor code map (this exception map must stay synced)
- **PP_X_PROMO_TEMPLATE v2.10** — v3.2 format spec (unchanged)
- **PP_INDEXING v18** — site indexing state

---

*Active tracker for PP X promotional posts. Updated as cycles fire, exception codes change, format conventions evolve.*
