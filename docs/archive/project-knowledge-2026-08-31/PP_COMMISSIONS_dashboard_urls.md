# PP COMMISSIONS — VENDOR DASHBOARD URLs (reference block)

**Added:** June 20, 2026. Drop into PP_COMMISSIONS as the standing dashboard reference so any session/CINC knows where to pull each vendor's numbers.
**19 unique vendors** (peptides.gg was listed twice).

**How the pull works:** CINC walks these URLs in your authenticated browser (Dashlane autofills logins; you do one vault unlock per session). For each vendor it reports the four numbers; I reconcile against the tracker; you/CINC update Notion. **Mapping (locked, goaffpro):** Referrals→Visits · Orders→Referrals · Sales→Total Sales · Earnings→Commission Earned. Other platforms expose the same four under different labels — CINC reports raw labels + values and I normalize.

| Vendor | Dashboard URL | Platform |
|---|---|---|
| Almighty Peptides | https://www.almightypeptides.com/affiliates/ | custom |
| Amino Club | https://www.aminoclub.com/us/account/affiliate | custom |
| Ascension Peptides | https://ascensionpeptides.com/partner-area/ | custom (partner-area) |
| Behemoth Labz | https://behemothlabz.com/affiliate-area/?tab=stats | AffiliateWP |
| Biocollex | https://biocollex.goaffpro.com/ | **goaffpro** |
| EZ Peptides | https://partners.ezpeptides.com/ | custom portal |
| Glacier Aminos | https://glacieraminos.goaffpro.com/ | **goaffpro** |
| Ignite Peptides | https://ignitepeptides.com/affiliate-area/ | AffiliateWP |
| Integrative Peptides | https://integrativepeptides.com/affiliate-area/ | AffiliateWP |
| Limitless Biotech | https://limitlessbiotech.everflowclient.io/ | Everflow |
| Midwest Peptide | https://midwestpeptide.com/affiliate/dashboard | custom |
| Oasis Labs | https://myoasislabs.com/affiliates/ | custom |
| Peptide Partners | https://peptide.partners/affiliate-area/ | AffiliateWP |
| Peptides GG | https://peptides.gg/my-account/affiliate-dashboard/ | AffiliateWP (WooCommerce) |
| PureRawz | https://purerawz.co/affiliate-area/ | AffiliateWP |
| Royal Peptides | https://royal-peptides.com/affiliates/ | custom (note: list had #signup anchor — use base /affiliates/) |
| Spartan Peptides | https://spartanpeptides.postaffiliatepro.com/affiliates/panel.php | PostAffiliatePro |
| Synthesis Peptides | https://synthesispeptides.io/affiliates/?tab=dashboard | custom (stripped the one-time sld_message query params) |
| Vital Core Research | https://vitalcoreresearch.goaffpro.com/ | **goaffpro** |

**Notes:**
- **Royal** URL in the list ended in `#signup` — that's the registration anchor; the actual dashboard is the base `/affiliates/` (login state lands you on the panel). CINC should confirm it lands on stats, not the signup tab.
- **Synthesis** URL carried one-time success-message query params (`sld_message=Successfully+registered…`) — stripped to the clean dashboard URL.
- **Spartan** (PostAffiliatePro) — stripped the `#Home` fragment.
- Cross-check against PP_COMMISSIONS broken-attribution cluster (Fusion/Ignite/Spartan) — Ignite + Spartan are in this list; Fusion is not (no dashboard URL provided).
- Vendors in PP_COMMISSIONS not represented here (no URL given): Fusion. Flag if a dashboard exists.
