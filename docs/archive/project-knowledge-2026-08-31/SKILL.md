---
name: capstone-brand-compliance
description: >-
  Applies the Capstone Peptides brand system (color palette, Inter typography, sharp corners,
  accent-scarcity discipline, approved imagery direction) AND the Research-Use-Only (RUO)
  compliance guardrails to anything produced for the Capstone Peptides business
  (capstonepeptides.com, operated by Capstone Holdings LLC). Use this skill whenever you create,
  edit, style, or review Capstone STORE-FACING output — store copy, product cards, vial labels,
  homepage/section HTML, Capstone marketing or email copy, COA/packing-slip assets, support
  replies, or documents. Do NOT use this skill to govern Prof Peptide's editorial coverage of
  Capstone as a vendor — PP's own ref docs govern that (see "Scope" below).
---

# Capstone Peptides — Brand & Compliance

Capstone Peptides is a premium, credibility-forward, **Research Use Only (RUO)** peptide retailer (merchant-of-record) operated by **Capstone Holdings LLC**. The brand differentiates through restraint and discipline: quiet chrome, scarce accent color, rigorous compliance.

This skill encodes **durable** brand and compliance rules only. **Live/volatile state** — SKU prices, processor status, page IDs, vendor status — lives in the project's active tracker. Verify volatile values against the live source.

---

## 🔴 SCOPE — what this governs, and what it does NOT

**Governs Capstone's OWN store-facing surfaces:** capstonepeptides.com, product cards, vial labels, packing slips, Capstone email and support replies, Capstone-branded marketing assets.

**Does NOT govern Prof Peptide.** Capstone is a listed vendor on PP — coupon page, price grids, pinned profile blocks, Featured Vendors, Professor's Picks — and PP writes about it exactly as it writes about any other vendor. **PP's X posts, coupon pages, price grids, and editorial coverage of Capstone are governed by PP_X_POSTS and the other PP ref docs, not by this file.**

⚠️ **Corrected 2026-08-21.** A prior version contained a "cross-brand firewall — no cross-promotion" rule. **Retired and wrong.** Capstone is a normal PP vendor. Do not raise a firewall objection to PP covering, posting about, pricing, or ranking Capstone. Affiliate disclosure is handled by PP's standing site-wide disclosure.

---

## Brand identity

### Entity facts (locked)
- Operating entity: **Capstone Holdings LLC** — VA Entity ID **12028373**, EIN **42-3011239**, single-member (Mark Shurtliff), formed June 6 2026.
- Use **EIN 42-3011239** on all applications.
- Email signature — use **exactly** (title is *Member-Manager*, never "Managing Member"):
  ```
  Mark Shurtliff
  Member-Manager, Capstone Holdings LLC
  mark@capstonepeptides.com
  ```

### Color palette (locked)
| Token | Hex | Use |
|---|---|---|
| Ink (navy) | `#16181B` | Headings, body text, wordmark, structure |
| Deep | `#2C3A47` | Dark accents (vial caps, dark sections) |
| Muted | `#5E6B78` | Secondary/sub-copy, legal, captions |
| Border | `#D9DEE4` | Hairline borders, dividers |
| Surface | `#F4F6F8` | Section/card backgrounds |
| White | `#FFFFFF` | Page background |
| **Accent** | **`#3E7CA8`** | Focal color only — see accent rule |

### Typography & corners (locked)
- **Inter** throughout. Wordmark: "Capstone" Inter **700**, "peptides" Inter **400** (lowercase "peptides" is intentional).
- **Sharp corners everywhere** — `border-radius: 2px` max. No rounded corners. Matches the "Cp" periodic-table tile.

### The accent rule (core discipline)
Accent blue `#3E7CA8` is the **focal color — it works because it is scarce.** Above ~10% of a view, it stops drawing the eye.
- **Accent ON:** primary CTAs (one per screen), links/interactive text, the Cp tile border + wordmark on labels, key trust/COA icon strokes, the "Research-Grade Peptides" eyebrow, sparing molecular line-art.
- **Accent OFF:** body text and headings (navy), page/section backgrounds (white/surface), large fills, banners, competing buttons.
- **One primary accent action per screen.** Secondary actions are navy or outline-only.

### Logo (locked — execution-only)
- The "Cp" tile is an intentional **periodic-table-of-elements** design and is **FINAL**. Feedback is execution-only; never redraw it, and never raise Adobe/Captivate/trademark concerns about it.
- Source icon: `icon-1.svg` (live). Lockup: Cp tile (left) → wordmark (right), `align-items:flex-end`, gap ≈ 0.22 × icon height. Convert wordmark text to outlines in vector exports.

### Imagery direction
Color comes from **imagery + branded labels, never from the chrome.** Vials are near-monochrome, so use an **identical accent-label treatment across every product**. Hero = one premium, uncluttered accent-forward visual.

### Locked anti-patterns (never, on Capstone's own store)
- No carousels, sale ribbons, urgency/countdown timers, neon or saturated color, glossy "deal" styling, or multiple competing CTAs.
- No pseudo-medical iconography — red crosses, caduceus, stethoscopes.
- No stock "scientists in lab coats" or generic lab-equipment photography.
- Reference aesthetic: ro.co / thorne.com — quiet, premium, restrained.

⚠️ These are **store chrome** rules. They do not govern PP's post formats or any other SCS property.

---

## RUO compliance (non-negotiable)

Everything Capstone sells is **Research Use Only.**

### FDA / FTC red lines — never do
- ❌ Therapeutic claims ("cures," "treats," "prevents," "for weight loss," "anti-aging").
- ❌ Dosing recommendations or protocols for human use.
- ❌ Implying human or veterinary consumption is intended or safe.
- ❌ Human-use testimonials or influencer self-administration.
- ❌ USA-origin claims without verified country-of-origin facts.
- **If you find yourself softening a request to make a borderline claim acceptable, stop — that's the signal to keep it strictly RUO.**

### Standard RUO furniture
- Double consent is intentional: the **21+ / RUO entry gate** AND the **required RUO checkout checkbox**. Never remove either.
- Product furniture: "Research use only," "Not for human or veterinary use," "COA available on request."
- Locked refund language (verbatim): **"All sales final; one-time reshipment only for damaged, lost, or incorrect orders; no monetary refunds."**
- **Never flip the site from "Coming Soon" to Live until a live payment rail exists.**

### Locked standard application answers (banks/processors)
Capstone Holdings LLC · EIN 42-3011239 · ~$4,000/mo volume · $90 avg ticket · $500 max ticket · Online 100% · US-only · accepts cards = No · drop-shipper = Rapid Fulfillment · peptides are NOT DEA-scheduled.

---

## 🔴 COMPOUND NAMING — corrected 2026-08-21

**Generic compound names are fine everywhere, publicly, on every surface.** Semaglutide, Tirzepatide, Retatrutide, Cagrilintide, Survodutide, and every other generic peptide name may appear in store copy, product names, cards, marketing, and PP coverage.

**What is NOT used: pharmaceutical BRAND names.** Never write Ozempic, Wegovy, Mounjaro, Zepbound, Saxenda, Victoza, or any other trademarked drug brand — and never compare a Capstone product to one. That is the actual trademark exposure; the generic compound name is not.

⚠️ **A prior version mandated coded public names** (`GLP-1S`, `GLP-2T`, `GLP-3R`, `C-Amylin`) and forbade plain incretin names publicly. **RETIRED and wrong.** Do not apply it, do not reinstate it, do not object to a plain compound name on that basis.

**Capstone's SKU naming carries a parenthetical code** — `Semaglutide (G1-S) 5 mg`, `Tirzepatide (G2-T) 10 mg`, `Retatrutide (G3-R) 10 mg`, `Cagrilintide (C-Amylin) 5 mg`. That is a **catalog/SKU convention, not a redaction.** The generic name leads; the code is supplementary. Verify current SKU strings against the live catalog rather than reconstructing them.

**Still true, unchanged:**
- **No purity numbers on any vial label or card** until a per-lot floor is contractually guaranteed by the supplier — a printed number is a per-lot warranty.
- **Never claim accreditation for Accumark Labs.** Its ISO 17025 is *pending, not held.* Testing may be described as per-lot certificates, publicly verifiable, ≥98% purity specification, with measured peptide quantity.

---

## Product card spec

Every card carries, in order: brand lockup → CAS chip (verified single compounds; suppress for blends and Bacteriostatic Water) → product **name** → **strength** (accent color) → **format line** (default "Single vial · lyophilized powder"; Bac Water = "Sterile solution · N mL"; blends list components) → trust/RUO chips → "COA available on request / Not for human or veterinary use." Surface-gray card, hairline border, 3px accent top-stripe, sharp corners. Price and vial image come from current data — verify against the live source.

---

## Communication style (Capstone copy and working sessions)

- No preamble before acting; no meta-commentary; no wellness or time-of-day language.
- **TL;DR** at the end of any longer response.
- Lead with the best-practice / most-durable choice; don't steer to shortcuts unless asked.
- Markdown links for verification URLs/dashboards.

⚠️ **There is no emoji prohibition.** A prior version banned emoji; **retired.** Emoji use follows the surface's own convention — PP's X post format requires 🔥 on the code line, and that governs. Capstone's store chrome stays visually restrained as a matter of *design* (see anti-patterns), not as an emoji rule.

---

## 📅 Changelog

**2026-08-21 — three rules retired as wrong, on Mark's correction:**
1. **Cross-brand firewall / no cross-promotion** — retired. Capstone is a normal PP vendor; PP covers it like any other.
2. **Incretin coded-naming** (`GLP-1S`/`GLP-2T`/`GLP-3R`/`C-Amylin` mandatory publicly) — retired. Generic names are fine; only pharmaceutical brand names are avoided.
3. **No-emoji rule** — retired. Surface convention governs.

Added an explicit SCOPE section — the absence of one is what let this skill be applied to PP editorial output it was never meant to govern.
