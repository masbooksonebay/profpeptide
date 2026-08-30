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

export default function ForgePerformanceCoCouponPage() {
  const discountPct = vendorDiscountPct("forge-performance-co");
  return (
    <div className="section max-w-3xl">
      <BackLink href="/coupons">Back to Discount Codes</BackLink>
      <CouponBreadcrumb slug="forge-performance-co" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Forge Performance Co Discount Code: PROFPEPTIDE &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="forge-performance-co" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Forge Performance Co (forgeperformanceco.com) is a Texas-registered LLC based in the Austin area, supplying research compounds across five collections &mdash; Metabolic Authority, Cellular Drive, Growth &amp; Repair, Aesthetics &amp; Focus, and Lab Essentials &mdash; plus a line of stacks. Its catalog, per-vial prices, and a public, batch-searchable Certificate of Analysis library are all openly browsable without an account. Payment options include ACH, Zelle, Venmo, Cash App, and cryptocurrency, with card processing noted as in progress; US shipping is free over $200. Compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <Cat label="Metabolic Authority"><P slug="retatrutide">Retatrutide</P> (GLP-RT), <P slug="tirzepatide">Tirzepatide</P> (GLP-TZ), <P slug="cagrilintide">Cagrilintide</P>, and HCG</Cat>
            <Cat label="Recovery &amp; Tissue Repair"><P slug="bpc-157">BPC-157</P>, <P slug="tb-500">TB-500</P></Cat>
            <Cat label="Growth &amp; Repair"><P slug="cjc-1295">CJC-1295</P>, <P slug="ipamorelin">Ipamorelin</P>, <P slug="sermorelin">Sermorelin</P>, <P slug="tesamorelin">Tesamorelin</P></Cat>
            <Cat label="Aesthetics &amp; Focus"><P slug="ghk-cu">GHK-Cu</P>, <P slug="semax">Semax</P>, <P slug="melanotan-ii">Melanotan 2</P>, and the coded KLOW and IGNITION blends</Cat>
            <Cat label="Gut Health &amp; Immunity"><P slug="thymosin-alpha-1">Thymosin Alpha-1</P></Cat>
            <Cat label="Cellular Drive"><P slug="mots-c">MOTS-c</P>, <P slug="nad-plus">NAD+</P>, <P slug="glutathione">Glutathione</P>, and SLU-PP-332</Cat>
            <Cat label="Stacks"><P slug="wolverine-stack">WOLVERINE</P> (BPC-157 + TB-500), REBUILD (GHK-Cu + <P slug="kpv">KPV</P>), and a <P slug="tesamorelin-ipamorelin">Tesamorelin + Ipamorelin</P> blend</Cat>
            <Cat label="Lab Essentials">bacteriostatic water and reconstitution supplies</Cat>
</dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Forge labels its two GLP-class metabolic compounds with coded names that follow the GLP-tier convention other vendors use: GLP-RT is Retatrutide and GLP-TZ is Tirzepatide. We list each under both its compound name and its code &mdash; &ldquo;Retatrutide (GLP-RT)&rdquo; &mdash; so a reader searching Forge&rsquo;s store for the coded name still lands on the right compound. That mapping is confirmed to us first-hand rather than read off a certificate.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Forge publishes a public, batch-searchable Certificate of Analysis library at forgeperformanceco.com/coas, with a verification walkthrough at /verify-a-coa. Each batch is tied to a specific vial, keyed by cap and crimp color to the matching certificate. The certificates come from three independent US laboratories &mdash; Freedom Diagnostics, ILS Laboratories, and Kovera Labs &mdash; and each is designed to be confirmed on the issuing laboratory&rsquo;s own public verifier, using the report, search, or access code printed on the report, rather than on any page Forge hosts. Across the library, the documented panel covers HPLC purity, identity by LC-MS, net-peptide content, heavy-metals screening by ICP-MS, endotoxin testing under USP &lt;85&gt;, a microbial screen by PCR, and a fentanyl screen by LC-MS. The fentanyl screen is the notable point: almost none of the vendors we cover run one, and Forge documents it per batch.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Two points of context. None of Forge&rsquo;s three labs prints an ISO/IEC 17025 or A2LA accreditation mark on its certificates, so no accreditation is claimed here &mdash; the strength of the program is the breadth of the panel and the fact that every certificate is independently verifiable on the issuing lab&rsquo;s own portal, not a printed accreditation. And a published testing panel describes what is measured, not a purity result: a researcher should look up the specific batch on hand on the issuing laboratory&rsquo;s verifier before use.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="What products does Forge Performance Co carry?"
              a="Forge carries research compounds across five collections: Metabolic Authority (Retatrutide (GLP-RT), Tirzepatide (GLP-TZ), Cagrilintide, and HCG), Cellular Drive (MOTS-c, NAD+, Glutathione, SLU-PP-332), Growth & Repair (BPC-157, TB-500, CJC-1295, Ipamorelin, Sermorelin, Tesamorelin, Thymosin Alpha-1), Aesthetics & Focus (GHK-Cu, Semax, Melanotan 2, and the coded KLOW and IGNITION blends), and Lab Essentials (bacteriostatic water and reconstitution supplies), plus stacks such as WOLVERINE (BPC-157 + TB-500) and REBUILD (GHK-Cu + KPV). Its catalog and per-vial prices are openly browsable."
            />
            <FAQItem
              q="Does Forge Performance Co have a coupon code?"
              a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on any Forge Performance Co order. This code is verified and maintained by Prof. Peptide.`}
            />
            <FAQItem
              q="How do I use the Forge Performance Co discount code?"
              a={`Add your items to cart at forgeperformanceco.com, proceed to checkout, and enter PROFPEPTIDE in the coupon field. The ${discountPct}% discount will be applied to your order total.`}
            />
            <FAQItem
              q="Is Forge Performance Co third-party tested?"
              a="Yes. Forge publishes a public, batch-searchable Certificate of Analysis library at forgeperformanceco.com/coas (with a verification walkthrough at /verify-a-coa), with each vial keyed by cap and crimp color to its certificate. Certificates come from three independent US labs — Freedom Diagnostics, ILS Laboratories, and Kovera Labs — each confirmable on the issuing lab's own public verifier, not on Forge's site. The documented panel covers HPLC purity, identity by LC-MS, net-peptide content, heavy metals by ICP-MS, endotoxin under USP <85>, a microbial screen by PCR, and a fentanyl screen by LC-MS — the last of which few vendors run. None of the labs prints an ISO 17025 or A2LA accreditation, so none is claimed here; confirm the specific batch on the issuing lab's verifier before use."
            />
            <FAQItem
              q="How does ordering and payment work at Forge Performance Co?"
              a="Forge's catalog, per-vial prices, and COA library are open to browse without an account. Payment options include ACH, Zelle, Venmo, Cash App, and cryptocurrency, with card processing noted as in progress; US shipping is free on orders over $200. Enter PROFPEPTIDE in the coupon field at checkout for 10% off."
            />
          </div>
        </div>

      </div>
    </div>
  );
}
