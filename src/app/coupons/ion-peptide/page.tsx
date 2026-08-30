"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { vendorDiscountPct } from "@/data/prices";
import BackLink from "@/components/BackLink";

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

export default function IonPeptideCouponPage() {
  const discountPct = vendorDiscountPct("ion-peptide");
  return (
    <div className="section max-w-3xl">
      <BackLink href="/coupons">Back to Discount Codes</BackLink>
      <CouponBreadcrumb slug="ion-peptide" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Ion Peptide Discount Code: PROFPEPTIDE &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="ion-peptide" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Ion Peptide (ionpeptide.com) is a US-based research-compound supplier with a broad catalog &mdash; peptides, GLP-class metabolic compounds, blends, capsules, and a line of cosmetic formulations. Its catalog, per-vial prices, and a public 195-entry Certificate of Analysis library are all openly browsable; ordering itself runs through a &ldquo;Wholesale Research Supply Portal&rdquo; that requires a customer account at checkout. Payment options include PayPal. Compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <Cat label="Metabolic &amp; Weight Loss"><P slug="semaglutide">Semaglutide</P> (ION-1S), <P slug="tirzepatide">Tirzepatide</P> (ION-2T), <P slug="retatrutide">Retatrutide</P> (ION-3R), <P slug="cagrilintide">Cagrilintide</P>, <P slug="aod-9604">AOD-9604</P>, <P slug="5-amino-1mq">5-Amino-1MQ</P></Cat>
            <Cat label="Recovery &amp; Tissue Repair"><P slug="bpc-157">BPC-157</P>, <P slug="tb-500">TB-500</P>, <P slug="kpv">KPV</P>, <P slug="wolverine-stack">Wolverine (BPC-157 + TB-500)</P></Cat>
            <Cat label="Growth Hormone"><P slug="cjc-1295">CJC-1295</P>, <P slug="ipamorelin">Ipamorelin</P>, <P slug="ghrp-2">GHRP-2</P>, <P slug="ghrp-6">GHRP-6</P>, <P slug="hgh-fragment-176-191">Fragment 176-191</P></Cat>
            <Cat label="Skin Health &amp; Anti-Aging"><P slug="ghk-cu">GHK-Cu</P>, <P slug="glow">GLOW</P>, <P slug="klow">KLOW</P>, <P slug="melanotan-i">Melanotan I</P>, <P slug="melanotan-ii">Melanotan II</P></Cat>
            <Cat label="Sleep &amp; Recovery"><P slug="dsip">DSIP</P></Cat>
            <Cat label="Longevity"><P slug="epitalon">Epitalon</P>, <P slug="glutathione">Glutathione</P>, <P slug="foxo4-dri">FOXO4-DRI</P></Cat>
            <Cat label="Sexual Health"><P slug="pt-141">PT-141</P></Cat>
</dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Ion labels its GLP-class metabolic compounds with coded names that follow the GLP-1/2/3 tier convention: ION-1S is Semaglutide, ION-2T is Tirzepatide, and ION-3R is Retatrutide. We list each under both its compound name and its code &mdash; &ldquo;Semaglutide (ION-1S)&rdquo; &mdash; so a reader searching Ion&rsquo;s store for the coded name still lands on the right compound. That mapping is confirmed to us first-hand rather than read off a certificate.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Ion Peptide publishes a searchable Certificate of Analysis library covering roughly 195 product-and-dose entries, with separate endotoxin reports for many lots, at ionpeptide.com/lab-results. The certificate we reviewed &mdash; a 5-Amino-1MQ batch, report KVR-2026-BA8308 &mdash; was issued by Kovera Labs and is unusually complete: batch-average purity of 99.887% by RP-HPLC (C18 column, DAD detection at 214 nm), identity confirmation by LC-MS, net-content assay, an endotoxin safety screen (&le;0.5 EU/mL, passed), a microbial sterility screen (no growth), four-analyte heavy-metal screening (arsenic, cadmium, lead, mercury &mdash; all negative), and per-vial batch-conformity results across three vials. It is signed by the lab&rsquo;s director and carries a QR code and per-record access code that resolve to the laboratory&rsquo;s own verification page at koveralabs.com/verify &mdash; the check runs against Kovera, not against Ion. Kovera Labs is the same independent laboratory behind several other vendors we cover.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Two points of context. Kovera Labs does not print an ISO 17025 or A2LA accreditation on its certificates, so no accreditation is claimed here &mdash; the strength of the report is its panel breadth and the independent, externally verifiable check, not a printed accreditation. And the certificate we read in full is a single lot of one compound; the library itself is broad and per-lot, but a researcher should confirm the specific batch on hand at koveralabs.com/verify before use.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="What products does Ion Peptide carry?"
              a="Ion Peptide carries a broad research catalog spanning metabolic and GLP-class compounds (Semaglutide, Tirzepatide, and Retatrutide — listed under the coded names ION-1S, ION-2T, and ION-3R — plus Cagrilintide, AOD-9604, and 5-Amino-1MQ), recovery peptides (BPC-157, TB-500, KPV, the Wolverine blend), growth-hormone secretagogues (CJC-1295, Ipamorelin, GHRP-2, GHRP-6, Fragment 176-191), skin and anti-aging compounds (GHK-Cu, GLOW, KLOW, Melanotan I and II), longevity and cognitive compounds (Epitalon, Glutathione, FOXO4-DRI, DSIP), PT-141, and a separate line of cosmetic formulations. Its catalog and per-vial prices are openly browsable."
            />
            <FAQItem
              q="Does Ion Peptide have a coupon code?"
              a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on any Ion Peptide order. This code is verified and maintained by Prof. Peptide.`}
            />
            <FAQItem
              q="How do I use the Ion Peptide discount code?"
              a={`Add your items to cart at ionpeptide.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The ${discountPct}% discount will be applied to your order total. Checkout runs through Ion's Wholesale Research Supply Portal, which requires a customer account.`}
            />
            <FAQItem
              q="Is Ion Peptide third-party tested?"
              a="Yes. Ion publishes a searchable Certificate of Analysis library of roughly 195 per-lot entries (with separate endotoxin reports for many) at ionpeptide.com/lab-results. The certificate we reviewed was issued by Kovera Labs (report KVR-2026-BA8308, a 5-Amino-1MQ lot): purity 99.887% by RP-HPLC, identity by LC-MS, net-content assay, endotoxin screen (≤0.5 EU/mL, passed), microbial sterility (no growth), heavy-metals screening for arsenic/cadmium/lead/mercury (all negative), and per-vial conformity across three vials. It is signed by the lab director and carries a QR code and access code that verify at koveralabs.com/verify — against the laboratory, not the vendor. Kovera does not print an ISO 17025 or A2LA accreditation, so none is claimed here."
            />
            <FAQItem
              q="How does ordering and payment work at Ion Peptide?"
              a="Ion's catalog, prices, and COA library are open to browse, but checkout runs through a Wholesale Research Supply Portal that requires a customer account. Payment options include PayPal, which carries card-network purchase protection. Enter PROFPEPTIDE in the discount field at checkout for 15% off."
            />
          </div>
        </div>

      </div>
    </div>
  );
}
