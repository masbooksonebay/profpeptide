# PP X Posts — v27

**Status:** ACTIVE REFERENCE — vendor-day log + new locked content rule + cross-promo account rebrand
**Version:** v27 (June 3, 2026) — logs the **Peptides.gg** vendor day, adds the **de-domain rule** for vendor names that are live domains (LOCKED, new error #11), and records the **cross-promo account rebrand** direction.
**Supersedes:** nothing in the v24 spec. All v24 sections (4-canonical-post anatomy, category line, anchors, substitution, content rules, pre-flight, errors #0–10) carry forward UNCHANGED, plus the new rule below. v25 (Peptide Partners) + v26 (PureRawz) vendor days carry forward. **Compaction guard still applies: re-read the v24 spec before drafting any post; pull live `vendors.ts` + the vendor's live catalog every time.**

---

## 🆕 LOCKED content rule (NEW — error #11): de-domain vendor names that are live domains

If a vendor's brand name is itself a registrable domain (`.gg`, `.io`, `.co`, `.com`), **render it WITHOUT the live dot-TLD in post body text.** X auto-links the bare token (e.g. "Peptides.gg" → `peptides.gg`), fetches THAT site's OG card, and it hijacks the Prof. Peptide per-vendor card.
- Fix: write it de-domained — **"Peptides.gg" → "Peptides GG"** (space; or "PeptidesGG"). The profpeptide link path (`/coupons/peptides-gg`, hyphen) is safe and stays.
- **Confirmed live June 3:** the de-domained post rendered the correct Prof. Peptide card (PROF15 / Save 15%); the original "Peptides.gg" text pulled peptides.gg's own site card instead.
- Avoid Unicode look-alike-dot tricks (spammy / fragile).
- X cards off the **last URL**; keep the only URL the `profpeptide.com/coupons/[slug]` link. You can't strip an auto-link in X — the domain text simply must not appear.

---

## ✅ Peptides.gg — vendor day (June 3)

- **Slug/link:** `/coupons/peptides-gg`. **Code: `PROF15` · 15% off** (confirmed live `vendors.ts` + `/coupons`). Affiliate URL `https://peptides.gg/?coupon=prof15` lives in the coupon-page Shop button — **never in the tweet**.
- **Per-vendor OG card CONFIRMED wired:** og:image + twitter:image → `/coupons/peptides-gg/opengraph-image|twitter-image`, alt "Peptides.gg discount code PROF15 — Save 15%", 1200×630, summary_large_image. Not the generic `og-image.png` fallback.
- **Catalog (live coupon page + captured catalog):** GLP/metabolic (Retatrutide, Semaglutide, Tirzepatide, Cagrilintide, Mazdutide, Survodutide, Orforglipron), GH secretagogues (CJC-1295, Ipamorelin, Sermorelin, Tesamorelin, IGF-1 LR3 — **NO MK-677**), recovery (BPC-157, TB-500, GHK-Cu, KPV, + KLOW/GLOW blends), longevity / **deep Khavinson bioregulator line** (Epitalon, Pinealon, Cortagen, Thymogen, Cardiogen, Vesugen, …), nootropics (Semax, Selank, Noopept). **Purity 98–99%+ depending on product** (do NOT claim a flat 99%+). US-made; per-batch third-party COAs (sample-ID → lab-report links); same-day shipping.
- **4 posts delivered** (de-domained "Peptides GG"): **All-3 GLPs** / **GH** (CJC-1295 + Ipamorelin; examples Sermorelin + Tesamorelin) / **Recovery** (BPC-157 + TB-500; examples GHK-Cu + KPV) / **Bioregulators** (Pinealon/Cortagen/Thymogen; examples Cardiogen + Vesugen) — the **bioregulator post is the differentiator** (no other carried vendor anchors it).
- **Fired (confirmed via screenshot):** the **Bioregulator** post on **@peakpeptides** went live with the correct Prof. Peptide card. Other three + full rotation/fire status to confirm next session.
- Reuse note: anchors came from the captured catalog (account-gated), not a fresh live pull — re-confirm in-stock before refiring; add a unique `?x=N` per post to beat X's per-URL card cache.

---

## 🔁 Rotation state (as of June 3 — partially unconfirmed)

Accounts: **PP** = @peptide_pros · **PREM** = @premierpeptides · **CORE** = @corepeptides · **PEAK** = @peakpeptides.

| Vendor-day | PP | PREM | CORE | PEAK |
|---|---|---|---|---|
| Peptide Partners (Jun 1, fired) | GH | Retatrutide | All-3 | Recovery |
| PureRawz (Jun 2, fired) | Recovery | All-3 | GH | Retatrutide |
| Royal (delivered; fire status unconfirmed) | Retatrutide | GH | Recovery | All-3 |
| Peptides.gg (Jun 3) | All-3 *(proposed)* | Recovery *(proposed)* | GH *(proposed)* | **Bioregulators (fired)** |

**Reconcile next session:** confirm whether Royal fired + the full Peptides.gg account assignment, then lock the next advance.

---

## 🆕 Cross-promo account rebrand (DIRECTION AGREED — in progress)

The 4 rotation accounts use vendor-style names (Peak / Premier / Core Peptides + the PP one) — confusing next to the vendor (Peptides.gg) and Prof. Peptide, and they read like retailers (trust + X-authenticity liability; an attorney-relevant disclosure point).
- **Rename → functional names**, handles unchanged: **Peptide Codes / Peptide Deals / Peptide Coupons / Peptide Discounts**. Display-name change only — the @handle stays (changing handles breaks links/mentions).
- **Bio:** add "by Prof. Peptide" — legitimacy without name-clashing with the main account.
- **Avatar:** **coupon-tag** mark (Mark's pick) in the **Prof. Peptide palette** (navy + cyan). Mark decided PP colors *complement* the post card + the bio removes confusion. Keep the **tag as the mark, NOT the "Pp" monogram**, so the code accounts stay distinguishable from the main @ProfPeptide account. Mark generating the image via ChatGPT (prompt provided; match colors off the post card). Optional: one shape, four accent colors, for per-account distinction.

---

## 🔗 Cross-references
- **PP_X_POSTS v24** — locked format spec (re-read before drafting). v25 (Peptide Partners) · v26 (PureRawz).
- **PP_SEO v3** · **PP_MASTER (+ addendum v2)** · **WL_MASTER v2.0** · **SCS_MP v6.10**

---

## 📅 Changelog
**v27 (June 3, 2026):** Peptides.gg vendor day (4 posts, PROF15 / 15%, OG card confirmed, no MK-677, bioregulator differentiator; PEAK bioregulator post fired). Added LOCKED **error #11** — de-domain vendor names that are live domains ("Peptides.gg" → "Peptides GG"). Logged the cross-promo account rebrand direction (functional names + "by Prof. Peptide" bio + coupon-tag avatar in PP palette). Rotation table updated through June 3 (Royal fire + full Peptides.gg assignment to reconcile next session).

---

*v27 adds one vendor day, one locked content rule, and the rebrand direction. The v24 format spec remains the source of truth for HOW to draft.*
