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
function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline">{children}</a>;
}

export default function OrbitrexPeptidesCouponPage() {
  const discountPct = vendorDiscountPct("orbitrex-peptides");
  return (
    <div className="section max-w-3xl">
      <BackLink href="/coupons">Back to Discount Codes</BackLink>
      <CouponBreadcrumb slug="orbitrex-peptides" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Orbitrex Peptides Discount Code: PROFPEPTIDE &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="orbitrex-peptides" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Orbitrex Peptides (orbitrexpeptide.is) is a US-based research-compound supplier. Two things about its documentation are worth knowing before anything else: the certificates carry a search code that resolves on the testing laboratory&rsquo;s own website rather than only on Orbitrex&rsquo;s, and the panel those certificates run is deeper than most. Compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <Cat label="Metabolic &amp; Weight Loss"><P slug="retatrutide">Retatrutide</P> (3G-RT), <P slug="tirzepatide">Tirzepatide</P> (G2-TRZ), <P slug="semaglutide">Semaglutide</P> (1G-SGT), <P slug="cagrilintide">Cagrilintide</P> (Cag), <P slug="survodutide">Survodutide</P>, <P slug="aod-9604">AOD-9604</P>, <P slug="mots-c">MOTS-C</P>, <P slug="5-amino-1mq">5-Amino-1MQ</P></Cat>
            <Cat label="Recovery &amp; Tissue Repair"><P slug="bpc-157">BPC-157</P>, <P slug="tb-500">TB-500</P>, <P slug="wolverine-stack">Wolverine (BPC-157 + TB-500)</P></Cat>
            <Cat label="Growth Hormone"><P slug="cjc-1295">CJC-1295</P> (no DAC) + <P slug="ipamorelin">Ipamorelin</P>, <P slug="sermorelin">Sermorelin</P>, <P slug="tesamorelin">Tesamorelin</P>, <P slug="tesamorelin-ipamorelin">SomatoPulse (Tesamorelin + Ipamorelin)</P></Cat>
            <Cat label="Cognitive &amp; Nootropic"><P slug="semax">Semax</P>, <P slug="selank">Selank</P>, N-Acetyl Semax Amidate, N-Acetyl Selank Amidate, <P slug="adamax">Adamax</P></Cat>
            <Cat label="Skin Health &amp; Anti-Aging"><P slug="ghk-cu">GHK-Cu</P>, <P slug="melanotan-i">Melanotan I</P>, <P slug="melanotan-ii">Melanotan II</P>, <P slug="glow">GLOW</P>, <P slug="klow">KLOW</P></Cat>
            <Cat label="Gut Health &amp; Immunity"><P slug="kpv">KPV</P>, <P slug="thymosin-alpha-1">Thymosin Alpha-1</P>, <P slug="vip">VIP</P>, <P slug="ll-37">LL-37</P></Cat>
            <Cat label="Sleep &amp; Recovery"><P slug="dsip">DSIP</P></Cat>
            <Cat label="Longevity"><P slug="nad-plus">NAD+</P> and buffered NAD+, <P slug="glutathione">Glutathione</P>, <P slug="epitalon">Epitalon</P>, <P slug="pinealon">Pinealon</P>, <P slug="cortagen">Cortagen</P>, <P slug="cibinetide">ARA-290</P>, Cartalax, Vilon, FOXO4-DRI</Cat>
            <Cat label="Sexual Health"><P slug="pt-141">PT-141</P>, <P slug="oxytocin">Oxytocin</P>, <P slug="kisspeptin">Kisspeptin</P></Cat>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Orbitrex labels its GLP-class metabolic compounds with coded names, and each decode comes from the certificates rather than from the naming convention: the certificate for 3G-RT names <P slug="retatrutide">Retatrutide</P> in plain text, the certificate for G2-TRZ names <P slug="tirzepatide">Tirzepatide</P>, and the certificate for 1G-SGT names <P slug="semaglutide">Semaglutide</P>. Cag is documented as <P slug="cagrilintide">Cagrilintide</P> on its own certificate. <P slug="survodutide">Survodutide</P> is sold under its own name. We list each compound under both its name and its code &mdash; &ldquo;Retatrutide (3G-RT)&rdquo; &mdash; so a reader searching Orbitrex&rsquo;s store for the coded name still lands on the right compound.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Orbitrex publishes 195 certificates, with multiple dated batches for a given product rather than a single fixed file &mdash; the 20 mg <P slug="retatrutide">Retatrutide</P> listing alone carries eight. Testing is spread across several named laboratories, each named on the certificates it issues: Freedom Diagnostics covers the largest share, with further certificates from ILS Laboratories, Kovera Labs, Vanguard Laboratory and TrustPointe Analytics.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            The Freedom Diagnostics certificates run an unusually broad panel for this catalog. Alongside identity by LC-MS, purity by HPLC with UV detection, and measured net peptide content, they report bacterial endotoxin by USP &lt;85&gt; LAL assay run in duplicate, microbial screening by PCR, elemental impurities by ICP-MS covering arsenic, cadmium, lead and mercury, and a fentanyl screen. They also assay four vials from the batch separately, printing a purity and a content figure for each rather than a single number for the lot. The ILS Laboratories certificates run their own panel, covering purity, identity and quantitation by HPLC together with an endotoxin test, elemental impurities by ICP-MS and a fentanyl screen.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            The basis for the first point is worth setting out, because it is what separates a certificate a reader can check from one they cannot. Every Freedom Diagnostics certificate prints a search code. We took two &mdash; ORBI2607220001, a <P slug="semaglutide">Semaglutide</P> lot, and Orbi2608180461, a <P slug="retatrutide">Retatrutide</P> lot &mdash; and resolved each directly on Freedom Diagnostics&rsquo; own domain. Both returned the laboratory&rsquo;s own copy of the report, byte-for-byte identical to the file Orbitrex publishes. The check runs against the laboratory rather than against the vendor, and it is a check any reader can repeat. The ILS Laboratories certificates print their own access code for verification at that laboratory.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            The certificates for the GLP-class compounds are published at fixed addresses, which we link here directly:{" "}
            <Ext href="https://orbitrexpeptide.is/coas/3g-rt-10mg/2026-08-23">Retatrutide 10 mg, lot ORB-3R1096</Ext>;{" "}
            <Ext href="https://orbitrexpeptide.is/coas/g2-trz-15mg-2g15726/2026-07-24">Tirzepatide 15 mg, lot 2G15726</Ext>;{" "}
            <Ext href="https://orbitrexpeptide.is/coas/1g-sgt-10mg-1g10826/2026-07-25">Semaglutide 10 mg, lot 1G10826</Ext>;{" "}
            and <Ext href="https://orbitrexpeptide.is/coas/cag-10mg-cag100326/2026-02-25">Cagrilintide 10 mg, lot CAG100326</Ext>.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Two points of context. None of these laboratories prints an accreditation on the certificates we read, so none is claimed here &mdash; the strength of the record is the independent, externally verifiable check on the laboratory&rsquo;s own domain. Orbitrex states that its products are &ldquo;verified at &gt;99% purity through independent third-party testing&rdquo;; the certificates report the measured result for each lot, which is the figure to read. Orbitrex is US-based and ships to all 50 US states and Washington, D.C. All products are sold for laboratory and research use only.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="What peptides does Orbitrex Peptides carry?"
              a="Orbitrex carries a research catalog spanning GLP-class metabolic compounds — Retatrutide, Tirzepatide and Semaglutide under the coded names 3G-RT, G2-TRZ and 1G-SGT, plus Cagrilintide and Survodutide — alongside AOD-9604, MOTS-C and 5-Amino-1MQ, recovery peptides (BPC-157, TB-500 and a BPC-157/TB-500 blend sold as Wolverine), growth-hormone secretagogues (CJC-1295 no DAC with Ipamorelin, Sermorelin, Tesamorelin, and a Tesamorelin/Ipamorelin blend sold as SomatoPulse), Semax and Selank with their N-acetyl amidate forms, Adamax, GHK-Cu, Melanotan I and II, GLOW and KLOW, KPV, Thymosin Alpha-1, VIP, LL-37, DSIP, NAD+ and buffered NAD+, Glutathione, Epitalon, Pinealon, Cortagen, ARA-290, Cartalax, Vilon, FOXO4-DRI, PT-141, Oxytocin and Kisspeptin."
            />
            <FAQItem
              q="Does Orbitrex Peptides have a coupon code?"
              a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on any Orbitrex Peptides order. This code is verified and maintained by Prof. Peptide.`}
            />
            <FAQItem
              q="How do I use the Orbitrex Peptides discount code?"
              a={`Add your items to cart at orbitrexpeptide.is, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The ${discountPct}% discount will be applied to your order total.`}
            />
            <FAQItem
              q="Is Orbitrex Peptides third-party tested?"
              a="Yes. Orbitrex publishes 195 certificates with multiple dated batches per product, issued by several named laboratories — Freedom Diagnostics covers the largest share, with further certificates from ILS Laboratories, Kovera Labs, Vanguard Laboratory and TrustPointe Analytics. The Freedom Diagnostics certificates report identity by LC-MS, purity by HPLC-UV, measured net peptide content, bacterial endotoxin by USP <85> LAL run in duplicate, microbial screening by PCR, elemental impurities by ICP-MS, and a fentanyl screen, with four vials from the batch assayed separately. Each also prints a search code that resolves on Freedom Diagnostics' own domain: we resolved two — ORBI2607220001, a Semaglutide lot, and Orbi2608180461, a Retatrutide lot — and both returned the laboratory's own copy byte-for-byte identical to the file Orbitrex publishes. None of these laboratories prints an accreditation on the certificates we read, so none is claimed here."
            />
            <FAQItem
              q="What do Orbitrex Peptides' 1G-SGT, G2-TRZ and 3G-RT codes mean?"
              a="They are Orbitrex's coded names for its GLP-class metabolic compounds, and each decode comes from the certificates rather than from the naming convention: the certificate for 3G-RT names Retatrutide in plain text, the certificate for G2-TRZ names Tirzepatide, and the certificate for 1G-SGT names Semaglutide. Cag is documented as Cagrilintide on its own certificate, and Survodutide is sold under its own name. Prof. Peptide asserts a decode only from evidence such as a molecular weight, formula, CAS number or a self-identifying specification — a naming convention on its own is corroboration, not proof."
            />
            <FAQItem
              q="Where does Orbitrex Peptides ship?"
              a="Orbitrex ships to all 50 US states and Washington, D.C. Its published address is in Flower Mound, Texas. All products are sold for laboratory and research use only."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
