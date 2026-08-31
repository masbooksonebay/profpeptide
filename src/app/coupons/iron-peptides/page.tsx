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

export default function IronPeptidesCouponPage() {
  const discountPct = vendorDiscountPct("iron-peptides");
  return (
    <div className="section max-w-3xl">
      <BackLink href="/coupons">Back to Discount Codes</BackLink>
      <CouponBreadcrumb slug="iron-peptides" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">IRON Peptides Discount Code: PROFPEPTIDE &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="iron-peptides" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            IRON Peptides (ironpeptides.is) is a US-based research-compound supplier. The thing worth knowing first is how its certificates check out: each one carries a search code, and that code resolves on the testing laboratory&rsquo;s own website rather than only on IRON&rsquo;s. A reader can confirm a certificate at the lab instead of taking the vendor&rsquo;s word for it. Compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <Cat label="Metabolic &amp; Weight Loss"><P slug="retatrutide">Retatrutide</P> (IR-3RT), <P slug="tirzepatide">Tirzepatide</P> (IR-2TZ), <P slug="semaglutide">Semaglutide</P> (IR-1SG), <P slug="survodutide">Survodutide</P>, <P slug="cagrilintide">Cagrilintide</P>, <P slug="mazdutide">Mazdutide</P>, <P slug="aod-9604">AOD-9604</P>, <P slug="mots-c">MOTS-c</P>, <P slug="5-amino-1mq">5-Amino-1MQ</P></Cat>
            <Cat label="Recovery &amp; Tissue Repair"><P slug="bpc-157">BPC-157</P>, <P slug="tb-500">TB-500</P>, <P slug="wolverine-stack">BPC-157 + TB-500 blend</P></Cat>
            <Cat label="Performance &amp; Energy"><P slug="igf-1-lr3">IGF-1 LR3</P></Cat>
            <Cat label="Growth Hormone"><P slug="cjc-1295">CJC-1295</P>, <P slug="ipamorelin">Ipamorelin</P>, <P slug="gh-stack">CJC-1295 + Ipamorelin</P>, <P slug="tesamorelin">Tesamorelin</P></Cat>
            <Cat label="Cognitive &amp; Nootropic"><P slug="semax">Semax</P>, <P slug="selank">Selank</P></Cat>
            <Cat label="Skin Health &amp; Anti-Aging"><P slug="ghk-cu">GHK-Cu</P>, <P slug="melanotan-i">Melanotan I</P>, <P slug="melanotan-ii">Melanotan II</P>, <P slug="glow">GLOW</P>, <P slug="klow">KLOW</P></Cat>
            <Cat label="Gut Health &amp; Immunity"><P slug="kpv">KPV</P>, <P slug="thymosin-alpha-1">Thymosin Alpha-1</P>, <P slug="vip">VIP</P></Cat>
            <Cat label="Sleep &amp; Recovery"><P slug="dsip">DSIP</P></Cat>
            <Cat label="Longevity"><P slug="nad-plus">NAD+</P>, <P slug="glutathione">Glutathione</P>, <P slug="epitalon">Epitalon</P>, <P slug="ss-31">SS-31</P></Cat>
            <Cat label="Sexual Health"><P slug="pt-141">PT-141</P>, <P slug="oxytocin">Oxytocin</P>, <P slug="kisspeptin">Kisspeptin-10</P></Cat>
            <Cat label="Bioregulators">Pancragen, Prostamax, Livagen, Testagen, Thymalin</Cat>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            IRON labels its GLP-class metabolic compounds with coded names on an IR-1/2/3 tier convention, and two of the three decode from IRON&rsquo;s own product data rather than from the convention: the IR-3RT listing names <P slug="retatrutide">Retatrutide</P> in its own description, and IR-2TZ carries the product code IRONP-TRZ-US-10MG, identifying <P slug="tirzepatide">Tirzepatide</P>. IR-1SG is listed at a <P slug="semaglutide">Semaglutide</P>-identifying product address. We list each under both its compound name and its code &mdash; &ldquo;Retatrutide (IR-3RT)&rdquo; &mdash; so a reader searching IRON&rsquo;s store for the coded name still lands on the right compound.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            IRON&rsquo;s compounds are tested by Freedom Diagnostics, and it publishes a library of 20 certificates. Each certificate covers identity, purity, net peptide content, and appearance, with the chemical analysis performed by HPLC with UV detection coupled to mass spectrometry. Net peptide content is measured rather than assumed &mdash; the certificate we reviewed reports 11.66 mg in a 10 mg vial.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            The basis for that is worth setting out, because it is what separates a certificate a reader can check from one they cannot. Every IRON certificate prints a search code. We took one &mdash; IRON2510230085, a <P slug="cagrilintide">Cagrilintide</P> lot &mdash; and resolved it directly on Freedom Diagnostics&rsquo; own domain, which returned the laboratory&rsquo;s own copy of the report. Its contents match the file IRON publishes exactly: same lot, same measured content, same 99.834% purity result. The check runs against the laboratory rather than against the vendor, and it is a check any reader can repeat.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Two points of context. Freedom Diagnostics does not print a laboratory accreditation on these certificates, so none is claimed here &mdash; the strength of the record is the independent, externally verifiable check on the lab&rsquo;s own domain. And the certificates are published as a library rather than one per batch, which is why this page describes them that way. IRON is US-based. All products are sold for laboratory and research use only.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="What peptides does IRON Peptides carry?"
              a="IRON carries a research catalog spanning GLP-class metabolic compounds — Retatrutide, Tirzepatide and Semaglutide under the coded names IR-3RT, IR-2TZ and IR-1SG, plus Survodutide, Cagrilintide, Mazdutide, AOD-9604, MOTS-c and 5-Amino-1MQ — recovery peptides (BPC-157, TB-500 and a BPC-157/TB-500 blend), IGF-1 LR3, growth-hormone secretagogues (CJC-1295, Ipamorelin, a CJC-1295/Ipamorelin blend, Tesamorelin), Semax and Selank, GHK-Cu, Melanotan I and II, GLOW and KLOW, KPV, Thymosin Alpha-1, VIP, DSIP, NAD+, Glutathione, Epitalon, SS-31, PT-141, Oxytocin, Kisspeptin-10, and a bioregulator line."
            />
            <FAQItem
              q="Does IRON Peptides have a coupon code?"
              a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on any IRON Peptides order. This code is verified and maintained by Prof. Peptide.`}
            />
            <FAQItem
              q="How do I use the IRON Peptides discount code?"
              a={`Add your items to cart at ironpeptides.is, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The ${discountPct}% discount will be applied to your order total.`}
            />
            <FAQItem
              q="Is IRON Peptides third-party tested?"
              a="Yes. IRON's compounds are tested by Freedom Diagnostics, and it publishes a library of 20 certificates. Each covers identity, purity, net peptide content and appearance, analysed by HPLC with UV detection coupled to mass spectrometry. Each certificate also prints a search code that resolves on Freedom Diagnostics' own domain: we resolved IRON2510230085 — a Cagrilintide lot — at the laboratory and its contents matched the file IRON publishes exactly, including the 99.834% purity result. Freedom Diagnostics does not print a laboratory accreditation on these certificates, so none is claimed here."
            />
            <FAQItem
              q="What do IRON Peptides' IR-1SG, IR-2TZ and IR-3RT codes mean?"
              a="They are IRON's coded names for its GLP-class metabolic compounds. Two decode from IRON's own product data rather than from the naming convention: the IR-3RT listing names Retatrutide in its description, and IR-2TZ carries the product code IRONP-TRZ-US-10MG, identifying Tirzepatide. IR-1SG is listed at a Semaglutide-identifying product address. Prof. Peptide asserts a decode only from evidence such as a molecular weight, formula, CAS number or a self-identifying specification — a naming convention on its own is corroboration, not proof."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
