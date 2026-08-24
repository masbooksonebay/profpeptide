"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
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

export default function CapstonePeptidesCouponPage() {
  const discountPct = vendorDiscountPct("capstone-peptides");
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="capstone-peptides" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Capstone Peptides Discount Code: PROFPEPTIDE &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="capstone-peptides" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Capstone Peptides (capstonepeptides.com) is a US-based research-compound supplier that ships domestically. Its catalog and per-vial prices are openly browsable without an account, and every compound it sells carries a batch certificate in a public Certificate of Analysis library. Compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <Cat label="Metabolic &amp; Weight Loss"><P slug="semaglutide">Semaglutide</P> (GLP-1S), <P slug="tirzepatide">Tirzepatide</P> (GLP-2T), <P slug="retatrutide">Retatrutide</P> (GLP-3R), <P slug="cagrilintide">Cagrilintide</P> (in the C-Amylin / GLP-1S blend), <P slug="mots-c">MOTS-C</P></Cat>
            <Cat label="Recovery &amp; Tissue Repair"><P slug="bpc-157">BPC-157</P>, <P slug="tb-500">TB-500</P>, <P slug="wolverine-stack">BPC-157 + TB-500 blend</P>, <P slug="glow">GLOW</P></Cat>
            <Cat label="Growth Hormone"><P slug="cjc-1295">CJC-1295</P>, <P slug="ipamorelin">Ipamorelin</P>, <P slug="tesamorelin">Tesamorelin</P>, <P slug="sermorelin">Sermorelin</P></Cat>
            <Cat label="Longevity &amp; Immune"><P slug="epitalon">Epithalon</P>, <P slug="nad-plus">NAD+</P>, <P slug="thymosin-alpha-1">Thymosin Alpha-1</P></Cat>
            <Cat label="Cognitive &amp; Neuro"><P slug="semax">Semax</P>, <P slug="selank">Selank</P></Cat>
            <Cat label="Skin &amp; Sexual Health"><P slug="melanotan-ii">Melanotan 2</P>, <P slug="pt-141">PT-141</P></Cat>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Capstone labels its GLP-class metabolic compounds with coded names that follow the GLP-1/2/3 tier convention: GLP-1S is Semaglutide, GLP-2T is Tirzepatide, and GLP-3R is Retatrutide; the C-Amylin / GLP-1S blend is Cagrilintide + Semaglutide. We list each under both its compound name and its code &mdash; &ldquo;Semaglutide (GLP-1S)&rdquo; &mdash; so a reader searching Capstone&rsquo;s store for the coded name still lands on the right compound.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Every compound Capstone sells carries a batch certificate from Accumark Labs, published in a public COA library. Of the 25 compounds in the catalog, 24 link their certificate directly from the product page and the library; the Retatrutide 30 mg certificate (lot 1051, purity 99.52%) is verifiable by its AccuVerify code. Each certificate carries a QR code and a per-record code that resolve to Accumark Labs&rsquo; own verification page at accumarklabs.com/accuverify &mdash; the check runs against the laboratory, not against Capstone. The certificate we reviewed &mdash; a 30 mg Retatrutide lot &mdash; is a core-panel report covering identity (confirmed Retatrutide), purity (99.52% against a &gt;98.0% specification), and quantity; it does not include endotoxin, heavy-metal, or sterility testing.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Three details from the certificate itself are worth noting. Net peptide content is <em>measured</em> rather than assumed &mdash; the 30 mg Retatrutide lot assays at 30.97 mg per vial. The report renders from the laboratory&rsquo;s LIMS rather than as a PDF, with a result hash anchored at finalization, so there is no file to edit or swap. And verification resolves on the laboratory&rsquo;s own domain rather than through a vendor-hosted QR code.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            One point of context: Accumark Labs does not print a laboratory accreditation on its certificates, so no accreditation is claimed here &mdash; the strength of the record is the independent, externally verifiable check on the lab&rsquo;s own domain, not a printed accreditation. Capstone is US-based and ships domestically. All products are sold for laboratory and research use only.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="What peptides does Capstone Peptides carry?"
              a="Capstone carries a research catalog spanning metabolic and GLP-class compounds (Semaglutide, Tirzepatide, and Retatrutide — listed under the coded names GLP-1S, GLP-2T, and GLP-3R — plus a Cagrilintide/Semaglutide blend and MOTS-C), recovery peptides (BPC-157, TB-500, a BPC-157/TB-500 blend, and GLOW), growth-hormone secretagogues (CJC-1295, Ipamorelin, Tesamorelin, Sermorelin), longevity and immune compounds (Epithalon, NAD+, Thymosin Alpha-1), Semax, Selank, Melanotan 2, and PT-141. Its catalog and per-vial prices are openly browsable without an account."
            />
            <FAQItem
              q="Does Capstone Peptides have a coupon code?"
              a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on any Capstone Peptides order. This code is verified and maintained by Prof. Peptide.`}
            />
            <FAQItem
              q="How do I use the Capstone Peptides discount code?"
              a={`Add your items to cart at capstonepeptides.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The ${discountPct}% discount will be applied to your order total.`}
            />
            <FAQItem
              q="Is Capstone Peptides third-party tested?"
              a="Yes. Every compound Capstone sells carries a batch certificate from Accumark Labs, published in a public COA library. The certificate we reviewed — a 30 mg Retatrutide lot (lot 1051) — is a core panel covering identity (confirmed Retatrutide), purity (99.52% against a >98.0% specification), and quantity (30.97 mg per vial, measured); it does not include endotoxin, heavy-metal, or sterility testing. Each certificate verifies by its AccuVerify code at accumarklabs.com/accuverify — against the laboratory, not the vendor. Accumark Labs does not print a laboratory accreditation on its certificates, so none is claimed here."
            />
            <FAQItem
              q="Are Certificates of Analysis available before purchase?"
              a="Yes. Capstone publishes a public COA library where each batch's Accumark Labs certificate can be viewed ahead of purchase. Of the 25 compounds in the catalog, 24 link their certificate directly from the product page and the library; the Retatrutide 30 mg certificate is verifiable by its AccuVerify code at accumarklabs.com/accuverify. Certificates render from the laboratory's LIMS with a QR code and per-record code that resolve on Accumark's own domain."
            />
            <FAQItem
              q="Is Capstone Peptides US-based?"
              a="Yes — Capstone Peptides is US-based and ships domestically. All products are for laboratory and research use only."
            />
          </div>
        </div>

      </div>
    </div>
  );
}
