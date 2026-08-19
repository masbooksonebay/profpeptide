# PP Attribution Basis

Auditable derivation for the profile-promotion allowlist in `src/data/attribution.ts`.
One place where the attribution **status**, the **evidence tier**, and the affiliate
**platform** live together, so the failure-cluster reasoning can be checked.

**Sanitized by design:** tiers only — no exact dollar amounts, no PII, no bank details,
no Notion IDs, no per-vendor referral URLs. The raw commission figures stay out of the repo.

- **Status** — from `attribution.ts` (proven / graced / cut).
- **Comm. tier** — recorded lifetime/YTD commission bucket from the affiliate ledger
  (`PP_COMMISSIONS_v3`, pulled **2026-07-04**): `none` · `<$100` · `$100–500` · `>$500`.
  `none` = zero recorded. Graced vendors are new (a live code, no conversion yet).
- **Platform** — affiliate system, fingerprinted **2026-08-11** (see confidence).
  `HIGH` = platform script/marker in page or portal source · `MED` = URL-param or
  vendor-confirmed only · `UNVERIFIED` = reachable, no signature · `UNREACHABLE` = 403/wall.

> 🔴 **Failure-cluster note.** The confirmed/suspected binding failures do **not** share one
> platform. Spartan = Post Affiliate Pro (code unbound, confirmed first-hand 2026-08-10).
> Almighty = Solid Affiliate + AffiliateWP ($0 on high traffic). Fingerprinting does **not** predict
> binding failure — the same platforms (AffiliateWP, GoAffPro) also back fully-working proven
> vendors. Binding is a per-vendor configuration fact, verified only by a portal/coupon check, not
> by platform.
>
> **Correction 2026-08-19:** Ignite (AffiliateWP) was previously named here as a binding failure on a
> speculative "PAP cluster" hypothesis that contradicted its own AffiliateWP fingerprint — and the
> ledger's own $36.45 "resolved" entry was discounted as stale. Antonio (Ignite) confirmed first-hand
> that PROF10 credits (acct 5024, used 3×, paid out); Ignite is now **PROVEN**. The speculative-cluster
> reasoning — grouping vendors by an assumed platform rather than per-vendor evidence — is the error.

## PROVEN (recorded commission)
| slug | status | comm. tier | platform | conf. |
|---|---|---|---|---|
| peptide-partners | proven | >$500 | AffiliateWP | HIGH |
| amino-club | proven | >$500 | GoAffPro | MED (age-wall; vendor-confirmed) |
| glacier-aminos | proven | >$500 | GoAffPro | HIGH |
| oasis-labs | proven | $100–500 | Solid Affiliate | HIGH (portal; GoAffPro shell is cosmetic) |
| ez-peptides | proven | $100–500 | GoAffPro | HIGH |
| peptides-gg | proven | $100–500 | UNREACHABLE (403) | — |
| midwest-peptide | proven | $100–500 | UNVERIFIED | — |
| royal-peptides | proven | $100–500 | GoAffPro | HIGH |
| ascension-peptides | proven | $100–500 | AffiliateWP | HIGH |
| biocollex | proven | <$100 | GoAffPro | HIGH |
| vital-core-research | proven | <$100 | GoAffPro | HIGH |
| integrative-peptides | proven | <$100 | AffiliateWP | HIGH |
| limitless-biotech | proven | <$100 | **Everflow** 🔴 | HIGH |
| ignite-peptides | proven | <$100 | AffiliateWP | HIGH (vendor-confirmed 2026-08-19; restored from CUT — see correction note above) |

## GRACED (new; live code, no conversion yet)
| slug | status | comm. tier | platform | conf. |
|---|---|---|---|---|
| aero-peptides | graced | none | GoAffPro | HIGH |
| ameano-peptides | graced | none | GoAffPro | HIGH |
| peptide-giants | graced | none | GoAffPro | HIGH |
| purerx-peptides | graced | none | GoAffPro | HIGH |
| peptidology | graced | none | GoAffPro | HIGH |
| treasure-coast-peptides | graced | none | GoAffPro | HIGH |
| modern-aminos | graced | none | UNREACHABLE (403) | — (vendor-said GoAffPro) |
| biolongevity-labs | graced | none | **Everflow-class network** 🔴 | SUSPECT (URL tracker; unverified) |

## CUT (unbound / broken / unconfirmed — not promoted)
| slug | status | comm. tier | platform | conf. | why cut |
|---|---|---|---|---|---|
| spartan-peptides | cut | <$100 (ledger) | **Post Affiliate Pro** | HIGH | code not bound (confirmed 2026-08-10) |
| almighty-peptides | cut | none | Solid Affiliate + AffiliateWP | HIGH | $0 on high traffic; no coupon binding |
| behemoth-labz | cut | none | AffiliateWP | HIGH | $0 recorded |
| purerawz | cut | none | UNREACHABLE (403) | — | $0 recorded |
| particle-peptides | cut | none | **Everflow** | MED (URL + vendor) | binding unconfirmed + non-USD |
| swiss-chems | cut | none | GoAffPro | MED (not fetched — standing rule; vendor-confirmed) | established yet ledger-absent |

## Vendors on capture-suspect platforms (PAP / Everflow)
- **On Post Affiliate Pro:** spartan (cut). No proven or graced vendor is on PAP.
- **On Everflow (or Everflow-class):** limitless-biotech (proven, suspected partial capture),
  biolongevity-labs (graced, unverified network tracker), particle (cut). Two currently-promoted
  vendors sit here — watch both.
- ⚠️ **limitless-biotech classification tension:** shipped as `proven` in `attribution.ts` on the
  strength of one credited Everflow conversion, but the Everflow partial-capture doubt makes
  `graced` the more honest label. Flagged for reconciliation (report-only; not changed here).

_Fingerprints: 2026-08-11. Commission tiers: 2026-07-04 ledger pull. Refresh both when the ledger updates._
