# WL MASTER ACTIVE — v1.7

**Date:** 2026-05-24
**Status:** Active tracker. Replaces v1.6.

---

## Capstone Peptides, LLC — formation + onboarding state

### Corporate identity (LOCKED — carried forward from v1.6)

| Field | Value |
|---|---|
| Legal name | Capstone Peptides, LLC |
| State of formation | Virginia |
| VA Entity ID | 12021441 |
| EIN | 42-2730855 |
| Business type | Member-managed LLC, single-member |
| Sole member | Mark Shurtliff |
| Principal address | 9712 Ashbourn Dr, Burke, VA 22015 |
| Email | mark@capstonepeptides.com |
| Phone | (909) 702-6765 |
| Title | Member-Manager |

### Domain / branding (carried forward)
- capstonepeptides.com — active
- Branding: TBD, separate workstream

---

## Rapid Fulfillment onboarding — IN FLIGHT

### Contract signed (May 22, 2026)
- Final signed contract: `CapstonePeptides_RF_Contract_Signed_2026-05-22.pdf`
- DAS carve-out resolved in writing per Gary's May 22 email (doesn't apply to dropshipping model)
- Master Agreement governs Schedule A IO terms

### Schedule A & Insertion Order — FILLED, awaiting signature (May 24, 2026)

**Filled PDF:** `RF_Schedule_A_IO_FILLED_2026-05-24.pdf`

Filled fields (all 3 pages):

| Page | Field | Value |
|---|---|---|
| 1 | Client/Company Name | Capstone Peptides, LLC |
| 1 | Contact Name | Mark Shurtliff |
| 1 | Email | mark@capstonepeptides.com |
| 1 | Phone | (909) 702-6765 |
| 1 | Billing Address | 9712 Ashbourn Dr |
| 1 | City | Burke |
| 1 | State / ZIP | VA 22015 |
| 1 | Effective Date | 05/24/2026 |
| 1 | Requested Start Date | 05/26/2026 |
| 1 | Schedule A products | LEFT BLANK (dropship-only) |
| 2 | IO Number | (left blank — optional field) |
| 2 | IO Date | 05/24/2026 |
| 2 | Campaign / Product Name | Capstone Peptides Dropship Launch |
| 2 | Estimated Monthly Volume | 25-50 (launch ramp) |
| 2 | Est. Avg. Order Weight | ~0.5 lb (single vial + cold pack) |
| 2 | Packaging Type | Small Box (S1) |
| 2 | Special Instructions | Dropship-only model. No Capstone inventory at facility. Fulfillment via Rapid's supplier network. |
| 3 | RAPID block (Gary) | LEFT BLANK |
| 3 | CLIENT Print Full Legal Name | Mark Shurtliff |
| 3 | CLIENT Title / Role | Member-Manager |
| 3 | CLIENT Company Name | Capstone Peptides, LLC |
| 3 | CLIENT Email Address | mark@capstonepeptides.com |
| 3 | CLIENT Electronic Signature | **LEFT BLANK — Mark to add** |
| 3 | CLIENT Date | **LEFT BLANK — Mark to add** |
| 3 | CLIENT confirmation checkbox | **LEFT BLANK — Mark to check** |

**Technical note:** PDF has no real form widgets — fields were drawn as visual rectangles. Filled via PyMuPDF text overlay at exact rectangle coordinates. Em-dashes replaced with periods due to font encoding limitation. Final pages render cleanly.

### Mark's remaining action items (BLOCKING dropshipping start)

1. **Open `RF_Schedule_A_IO_FILLED_2026-05-24.pdf` in Preview**
2. **Add typed signature** `/Mark Shurtliff/` in CLIENT Electronic Signature field (page 3)
3. **Add date** `05/24/2026` in CLIENT Date field
4. **Check the "I confirm this is my legal electronic signature" checkbox**
5. **Save as** `RF_Schedule_A_IO_Signed_2026-05-24.pdf`
6. **Initiate ACH deposit:**
   - Amount: $1,500.00
   - Bank: Fresno First Bank
   - Account: 100054858
   - Routing: 121144146
   - Memo: "Capstone Peptides LLC — deposit"
   - Recommend ACH (free, 1-3 days) over wire ($25-50 fee) or credit card (4% surcharge = $60)
7. **Email Gary at gary@rapidfulfillment.com** with both attachments:
   - Signed PDF
   - Proof-of-payment screenshot (from bank)

### Email body draft (carry-forward, ready to send)

Subject: Capstone Peptides — Signed Schedule A + Deposit Confirmation

> Hi Gary,
>
> Attached is the signed Schedule A & Insertion Order for Capstone Peptides, LLC. The $1,500 deposit has been initiated via ACH to Fresno First Bank (proof attached) and should land within 1-3 business days.
>
> Schedule A is left blank per the dropship-only model — no Capstone inventory will be held at your facility.
>
> Ready to begin onboarding whenever you are. Let me know what comes next.
>
> Best,
> Mark Shurtliff
> Member-Manager, Capstone Peptides, LLC
> mark@capstonepeptides.com

---

## Schedule C — Fulfillment Rates (LOCKED reference)

Key rates from Cold Storage Fulfillment Rates schedule:

| Service | Rate |
|---|---|
| Pack Rate (per order) | $1.95 |
| Extra Picks (per additional) | $0.60 |
| Product Prep Fee (box assembly) | $0.50 |
| Inserts (per insert) | $0.25 |
| Bubble Mailer | $0.50 |
| Small Box (8×6×3 or smaller) | $1.25 |
| Bubble Wrap | $1.00 |
| Labeling (POD orders) | $1.00 |
| Rejected Orders (address correction) | $3.60 |
| Cold Storage (monthly, not POD) | $350.00 |
| Inactive/Stale Goods (>120 days, not POD) | $500.00 |
| Setup (tech config, 3hr max) | $120/hr |
| Receiving Fees & Labor | $38.50/hr (1hr min) |
| Parcel Insurance (per shipment, up to $300) | $1.49 (retail $4.99 = $3.50 profit) |

**Returns: NOT OFFERED.** Customer supplies own return address for research peptides.

### FedEx 2-Day Cold Shipment rates

| Packaging | Base Postage + Pack Rate |
|---|---|
| Envelope (built-in pouch) | $12.68 |
| PAK | $15.52 |
| Small Box (S1/S2) — **selected default** | $18.08 |
| Medium Box (M1/M2) | $21.24 |
| Large Box (L1/L2) | $28.07 |
| Extra Large Box (X1/X2) | $37.75 |

All zones (incl. HI/AK), Saturday delivery included, free FedEx branded packaging.

---

## Returns / customer service approach (carry-forward)

- No returns offered per Schedule C
- Customer service handled by Capstone (client side of agreement)
- Credit card processing handled by Capstone
- Rapid handles pick/pack/ship/storage/relabeling only

---

## Vendor relationships (carry-forward)

[Reserved — Capstone supplier network details. Confidential. Maintained separately.]

---

## Backlog

- **Capstone branding workstream** — site, logo, packaging inserts (low priority until dropship operations begin)
- **Capstone X account** — separate from PP ecosystem accounts
- **Customer-facing site** — capstonepeptides.com still placeholder/inactive

---

## Next session

Mark to complete Schedule A signature + ACH deposit + email Gary (action items above). Once Gary confirms onboarding setup, Capstone dropship operations can begin.

No Claude action items until Gary responds to the signed Schedule A.
