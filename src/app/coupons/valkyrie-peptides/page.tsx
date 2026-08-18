"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { CouponFacts } from "@/components/CouponFacts";
import { vendorDiscountPct } from "@/data/prices";

function Cat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
      <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">{label}</dt>
      <dd className="text-gray-600 dark:text-slate-300">{children}</dd>
    </div>
  );
}
function P({ slug, children }: { slug: string; children: React.ReactNode }) {
  return <Link href={`/peptides/${slug}`} className="text-[#3A759F] hover:underline">{children}</Link>;
}

export default function ValkyriePeptidesCouponPage() {
  const discountPct = vendorDiscountPct("valkyrie-peptides");
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="valkyrie-peptides" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Valkyrie Peptides Discount Code &mdash; Save {discountPct}%</h1>
      </div>
      <CouponFacts slug="valkyrie-peptides" />
      <CouponCodeCard slug="valkyrie-peptides" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Valkyrie Peptides is a US-based research-peptide supplier (valkyriepeps.com). Payment is by Zelle, Cash App, and Venmo only &mdash; the store does not process cards, so a purchase carries none of the chargeback protection a card network provides; plan accordingly. Orders and support run through the vendor by phone at (208) 243-9222. Valkyrie also runs a standing 20%-off-for-life program for active military, veterans, and first responders, arranged by contacting the vendor directly &mdash; a deeper discount than the public code below. According to Trustpilot, Valkyrie holds a rating of 4.7 across 36 reviews. Compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <Cat label="Metabolic &amp; Weight Loss"><P slug="retatrutide">Retatrutide</P> (listed as GLP-3 (RT))</Cat>
            <Cat label="Recovery &amp; Tissue Repair"><P slug="wolverine-stack">BPC-157 + TB-500</P> (Wolverine)</Cat>
            <Cat label="Skin Health &amp; Anti-Aging"><P slug="ghk-cu">GHK-Cu</P>, <P slug="glow">GLOW</P>, <P slug="klow">KLOW</P></Cat>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            The compounds above come from a homepage snapshot taken before Valkyrie moved its store behind a research-account login on August 9, 2026. That snapshot listed prices inconsistently &mdash; the same item showed different figures in different places on the page &mdash; so no price is published here. Because the store now sits behind that login, the 10% code has not been exercised in a live cart the way it was for vendors with open checkouts, so its in-cart behavior follows the vendor&rsquo;s stated terms.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Valkyrie&rsquo;s testing is documented by Horizon Analytical, a US-based laboratory (its certificates read &ldquo;Proudly Owned and Operated in the USA&rdquo;) that prints a QR code and is searchable at horizonanalytical.com. The certificate we reviewed covers one lot (VP-7672189) of Retatrutide and confirms identity by UPLC with mass spectrometry &mdash; the report prints the compound&rsquo;s CAS number (2381089-83-2), molecular formula (C221H342N46O68), and PubChem CID, and reproduces the UPLC and MS traces in full. Purity measured 99.33% against a &gt;98% specification and quantity 10.05 mg against a 10 mg label, and a matched endotoxin certificate on the same lot reported &lt;0.05 EU/mL. Both reports are signed by Aleksey Yevtodiyenko PhD, Research and Formulation Chemist. That is mass-spectrometry identity confirmation, a stronger check than the HPLC-UV purity-only reports some vendors publish.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Three points of context. Horizon Analytical does not print an ISO 17025 or A2LA accreditation on its certificate, so no accreditation is claimed here. The evidence we reviewed is a single lot of a single compound, dated April&ndash;May 2026, and should not be read as covering the full catalog. And while Valkyrie&rsquo;s site states that its compounds are also screened for heavy metals and microbial integrity, those two panels are not printed on the certificates we reviewed, so they are reported here as the vendor states them, not as independently confirmed. One minor discrepancy worth noting: on the purity certificate the analysis-conducted date (April 24, 2026) precedes the received date (April 29, 2026) &mdash; likely a template error on the report, noted rather than corrected. The certificates name valkyriepeptides.com as the client while the store runs at valkyriepeps.com; with the vendor&rsquo;s Trustpilot profile, that is a second signal the two domains are one operation, though not conclusive proof.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="What products does Valkyrie Peptides carry?"
              a="From a homepage snapshot taken before the store moved behind a login (August 2026), Valkyrie's catalog included Retatrutide (listed as GLP-3 (RT)), GHK-Cu, and the GLOW, KLOW, and Wolverine (BPC-157 + TB-500) blends. The full catalog now sits behind a research-account login."
            />
            <FAQItem
              q="Does Valkyrie Peptides have a discount code?"
              a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on any Valkyrie Peptides order. This code is verified and maintained by Prof. Peptide. Valkyrie separately offers a 20%-off-for-life program for active military, veterans, and first responders, arranged by contacting the vendor directly.`}
            />
            <FAQItem
              q="How do I use the Valkyrie Peptides discount code?"
              a={`Add your items to cart at valkyriepeps.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The ${discountPct}% discount will be applied to your order total. The code is tied to this referral link.`}
            />
            <FAQItem
              q="Is Valkyrie Peptides third-party tested?"
              a="Yes. The certificates we reviewed were issued by Horizon Analytical, a US-based laboratory with a QR validator at horizonanalytical.com. For one lot of Retatrutide, identity was confirmed by UPLC with mass spectrometry (CAS, molecular formula, and PubChem CID printed), purity measured 99.33% against a >98% specification, and a matched endotoxin certificate reported <0.05 EU/mL. The reports are signed by Aleksey Yevtodiyenko PhD. No ISO 17025 or A2LA accreditation is printed on the certificate, the evidence is a single lot dated April–May 2026, and the site's heavy-metals and microbial claims are not printed on the certificates we reviewed — those are reported as the vendor states them."
            />
            <FAQItem
              q="How can I pay at Valkyrie Peptides?"
              a="Valkyrie accepts Zelle, Cash App, and Venmo only — it does not process credit or debit cards. Because these are person-to-person payment rails, an order does not carry the chargeback protection a card network would provide, which is worth weighing before purchase."
            />
          </div>
        </div>

      </div>
    </div>
  );
}
