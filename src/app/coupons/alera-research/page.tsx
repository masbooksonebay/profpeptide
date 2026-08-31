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

export default function AleraResearchCouponPage() {
  const discountPct = vendorDiscountPct("alera-research");
  return (
    <div className="section max-w-3xl">
      <BackLink href="/coupons">Back to Discount Codes</BackLink>
      <CouponBreadcrumb slug="alera-research" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Alera Research Discount Code: PROFPEPTIDE &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="alera-research" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Alera Research (aleraresearch.com) is a US-based research-compound supplier shipping domestically. Its catalog and per-vial prices are openly browsable without an account. Compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <Cat label="Metabolic &amp; Weight Loss"><P slug="retatrutide">Retatrutide</P> (GLP-3R), GLP-2T, GLP-1S, <P slug="aod-9604">AOD-9604</P>, <P slug="mots-c">MOTS-C</P>, HGH Fragment 176-191</Cat>
            <Cat label="Recovery &amp; Tissue Repair"><P slug="bpc-157">BPC-157</P>, <P slug="tb-500">TB-500</P>, <P slug="wolverine-stack">BPC-157 + TB-500 blend</P></Cat>
            <Cat label="Performance &amp; Energy"><P slug="igf-1-lr3">IGF-1 LR3</P></Cat>
            <Cat label="Growth Hormone"><P slug="cjc-1295">CJC-1295</P>, <P slug="ipamorelin">Ipamorelin</P>, <P slug="sermorelin">Sermorelin</P>, <P slug="tesamorelin">Tesamorelin</P>, <P slug="tesamorelin-ipamorelin">Tesamorelin + Ipamorelin</P></Cat>
            <Cat label="Skin Health &amp; Anti-Aging"><P slug="ghk-cu">GHK-Cu</P>, <P slug="melanotan-ii">Melanotan 2</P>, <P slug="glow">GLOW</P></Cat>
            <Cat label="Gut Health &amp; Immunity"><P slug="kpv">KPV</P></Cat>
            <Cat label="Sleep &amp; Recovery"><P slug="dsip">DSIP</P></Cat>
            <Cat label="Longevity"><P slug="nad-plus">NAD+</P>, <P slug="ss-31">SS-31 (Elamipretide)</P></Cat>
            <Cat label="Sexual Health"><P slug="pt-141">PT-141</P></Cat>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Alera labels its GLP-class metabolic compounds with coded names on the GLP-1/2/3 tier convention: GLP-1S, GLP-2T and GLP-3R. One of the three is decodable from Alera&rsquo;s own product specification rather than from the convention &mdash; the GLP-3R listing names LY3437943, Eli Lilly&rsquo;s published clinical development code for <P slug="retatrutide">Retatrutide</P>, which is a hard identity. We list that one under both names &mdash; &ldquo;Retatrutide (GLP-3R)&rdquo; &mdash; so a reader searching Alera&rsquo;s store for the coded name still lands on the right compound. GLP-1S and GLP-2T stay coded here: their listings describe receptor activity rather than naming a molecule, and this site asserts a decode only from evidence.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Alera&rsquo;s compounds are tested by Freedom Diagnostics. The search codes printed on Alera&rsquo;s certificates &mdash; Aler2603030070 and Aler2605140255 among them &mdash; resolve on the laboratory&rsquo;s own public index rather than on Alera&rsquo;s site, so the check runs against Freedom Diagnostics rather than against the vendor. That index records 26 certificates for Alera across three submission dates: March 3, March 24 and May 14, 2026.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            The certificate we reviewed &mdash; an AOD-9604 lot, lot 0002, assaying 99.36% &mdash; is a core-panel report covering purity by HPLC-UV, identity by mass spectrometry, and net peptide content. It is a purity-and-identity panel: endotoxin, sterility and heavy-metal testing are outside its scope. Freedom Diagnostics prints no laboratory accreditation on these certificates, so none is claimed here; the strength of the record is that verification resolves on the laboratory&rsquo;s own index.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            One point of context worth stating precisely, because it is easy to read the wrong way. The lab index holds 26 certificates across three dates, while Alera&rsquo;s product pages surface the March lot-0001 certificates. The gap is in what reaches the product page, not in what was tested &mdash; which is why this page describes Alera&rsquo;s certificates as a library rather than as per-batch publishing.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Alera runs a sitewide sale advertised as up to 20% off, with automatic quantity discounts beginning at three items. Alera is US-based and ships domestically. All products are sold for laboratory and research use only.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="What peptides does Alera Research carry?"
              a="Alera carries a 24-product research catalog: GLP-class metabolic compounds listed under the coded names GLP-1S, GLP-2T and GLP-3R (the GLP-3R listing names LY3437943, the development code for Retatrutide), plus AOD-9604, MOTS-C and HGH Fragment 176-191; recovery peptides BPC-157, TB-500 and a BPC-157/TB-500 blend; growth-hormone secretagogues CJC-1295, Ipamorelin, Sermorelin, Tesamorelin and a Tesamorelin/Ipamorelin blend; IGF-1 LR3; GHK-Cu, Melanotan 2 and GLOW; KPV; DSIP; NAD+ and SS-31 (Elamipretide); and PT-141. Its catalog and per-vial prices are openly browsable without an account."
            />
            <FAQItem
              q="Does Alera Research have a coupon code?"
              a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on any Alera Research order. This code is verified and maintained by Prof. Peptide.`}
            />
            <FAQItem
              q="How do I use the Alera Research discount code?"
              a={`Add your items to cart at aleraresearch.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The ${discountPct}% discount will be applied to your order total.`}
            />
            <FAQItem
              q="Is Alera Research third-party tested?"
              a="Yes. Alera's compounds are tested by Freedom Diagnostics, and the search codes printed on its certificates (Aler2603030070, Aler2605140255) resolve on the laboratory's own public index rather than on Alera's site — so the check runs against the lab. That index records 26 certificates across three submission dates: March 3, March 24 and May 14, 2026. The certificate reviewed here — AOD-9604, lot 0002, 99.36% — is a core panel covering purity by HPLC-UV, identity by mass spectrometry, and net peptide content; endotoxin, sterility and heavy-metal testing are outside its scope. Freedom Diagnostics prints no laboratory accreditation on these certificates, so none is claimed here."
            />
            <FAQItem
              q="What do Alera Research's GLP-1S, GLP-2T and GLP-3R codes mean?"
              a="They are Alera's coded names for its GLP-class metabolic compounds, following the GLP-1/2/3 tier convention. GLP-3R is decodable: its product listing names LY3437943, Eli Lilly's published clinical development code for Retatrutide, which is a hard identity rather than an inference from the code. GLP-1S and GLP-2T are left coded on this page — their listings describe receptor activity rather than naming a molecule, and Prof. Peptide asserts a decode only from evidence such as a molecular weight, formula, CAS number or a self-identifying specification."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
