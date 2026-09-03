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

export default function PeptiraCouponPage() {
  const discountPct = vendorDiscountPct("peptira");
  return (
    <div className="section max-w-3xl">
      <BackLink href="/coupons">Back to Discount Codes</BackLink>
      <CouponBreadcrumb slug="peptira" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Peptira Discount Code: PROFPEPTIDE &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="peptira" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Peptira (peptira.com) is a US-based research-peptide supplier with a 100-product catalog. The thing worth knowing first is how its certificates check out: we checked several against the testing laboratory&rsquo;s own website rather than taking Peptira&rsquo;s copies on faith, and they matched. Compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <Cat label="Metabolic &amp; Weight Loss"><P slug="retatrutide">Retatrutide</P> (RETA-3), <P slug="tirzepatide">Tirzepatide</P> (TIRZ-2), <P slug="semaglutide">Semaglutide</P> (SEMA-1), <P slug="cagrilintide">Cagrilintide</P> (CAG-4), <P slug="survodutide">Survodutide</P>, <P slug="mots-c">MOTS-c</P>, <P slug="aod-9604">AOD-9604</P>, <P slug="5-amino-1mq">5-Amino-1MQ</P></Cat>
            <Cat label="Recovery &amp; Tissue Repair"><P slug="bpc-157">BPC-157</P>, <P slug="tb-500">TB-500</P>, <P slug="wolverine-stack">Wolverine Stack</P> (TB/BP Blend), <P slug="cibinetide">Cibinetide (ARA-290)</P></Cat>
            <Cat label="Performance &amp; Energy"><P slug="igf-1-lr3">IGF-1 LR3</P>, Aicar</Cat>
            <Cat label="Growth Hormone"><P slug="cjc-1295">CJC-1295</P> (DAC and no-DAC), <P slug="gh-stack">CJC-1295 + Ipamorelin</P>, <P slug="ipamorelin">Ipamorelin</P>, <P slug="tesamorelin">Tesamorelin</P>, <P slug="ghrp-6">GHRP-6</P>, <P slug="hexarelin">Hexarelin</P></Cat>
            <Cat label="Cognitive &amp; Nootropic"><P slug="semax">Semax</P>, <P slug="selank">Selank</P>, <P slug="adamax">Adamax</P>, PE-22-28</Cat>
            <Cat label="Skin Health &amp; Anti-Aging"><P slug="ghk-cu">GHK-Cu</P>, AHK-Cu, <P slug="glow">GLOW</P>, <P slug="klow">KLOW</P>, <P slug="melanotan-i">Melanotan I</P>, <P slug="melanotan-ii">Melanotan II</P>, Snap-8</Cat>
            <Cat label="Gut Health &amp; Immunity"><P slug="kpv">KPV</P>, <P slug="ll-37">LL-37</P>, <P slug="thymosin-alpha-1">Thymosin Alpha-1</P>, <P slug="vip">VIP</P>, Phoenix (KPV/TB/BPC Blend)</Cat>
            <Cat label="Sleep &amp; Recovery"><P slug="dsip">DSIP</P></Cat>
            <Cat label="Longevity"><P slug="nad-plus">NAD+</P>, <P slug="epitalon">Epitalon</P>, <P slug="glutathione">Glutathione</P>, <P slug="ss-31">SS-31</P>, FOXO4-DRI</Cat>
            <Cat label="Sexual Health"><P slug="pt-141">PT-141</P>, <P slug="oxytocin">Oxytocin</P>, <P slug="kisspeptin">Kisspeptin</P></Cat>
            <Cat label="Bioregulators"><P slug="pinealon">Pinealon</P>, <P slug="cortagen">Cortagen</P>, Thymalin, Thymagen, Vilon, Cartalax</Cat>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            The strength of that decode varies by compound, and we word it accordingly. <P slug="cagrilintide">Cagrilintide</P>&rsquo;s own certificate names it directly &mdash; as both the Product and the Identity result &mdash; and its store address uses the plain slug &ldquo;cagrilintide,&rdquo; so CAG-4 is a confirmed identity, not an inference. <P slug="survodutide">Survodutide</P> is sold and certified under its own name, no code involved. RETA-3, SEMA-1 and TIRZ-2 are a weaker case: their certificates are themselves coded (GLP RT, GLP SM, GLP TZ), and no CAS number, molecular formula or molecular weight appears anywhere we could read. We treat that naming convention as corroboration rather than proof &mdash; the same standard applied to Glacier&rsquo;s GLA-1 SM.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Peptira&rsquo;s compounds are tested by Freedom Diagnostics, and it publishes 320 certificates across 86 of its 100 products, with a historical trail of dated batches rather than one fixed file per item. Each certificate covers identity and purity by HPLC with UV detection coupled to mass spectrometry, appearance, and bacterial endotoxin run in duplicate (&le;0.05 EU/mL). Purity and content are not single lot figures: three vials from the batch are assayed separately, each with its own result, and the certificate reports the average. That per-vial record is the figure worth reading, rather than any single headline number.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            The basis for the opening claim is worth setting out, because it is what separates a certificate a reader can check from one they cannot. We checked five of Peptira&rsquo;s incretin certificates &mdash; covering <P slug="cagrilintide">Cagrilintide</P>, <P slug="survodutide">Survodutide</P>, <P slug="retatrutide">Retatrutide</P>, <P slug="semaglutide">Semaglutide</P> and <P slug="tirzepatide">Tirzepatide</P> &mdash; by resolving each directly on Freedom Diagnostics&rsquo; own domain. Four came back byte-for-byte identical to the file Peptira publishes; the fifth, for Survodutide, matched in content. The check runs against the laboratory rather than against the vendor, and it is a check any reader can repeat.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            No laboratory accreditation is printed on these certificates, so none is claimed here &mdash; the strength of the record is the independent, externally verifiable check on the lab&rsquo;s own domain. Peptira ships to the US, US territories, and Canada. All products are sold for laboratory and research use only.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="What peptides does Peptira carry?"
              a="Peptira carries a 100-product research catalog. Documented here is its incretin cluster: Cagrilintide (CAG-4), Survodutide, Retatrutide (RETA-3), Semaglutide (SEMA-1), and Tirzepatide (TIRZ-2)."
            />
            <FAQItem
              q="Does Peptira have a coupon code?"
              a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on any Peptira order. This code is verified and maintained by Prof. Peptide.`}
            />
            <FAQItem
              q="How do I use the Peptira discount code?"
              a={`Add your items to cart at peptira.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The ${discountPct}% discount will be applied to your order total.`}
            />
            <FAQItem
              q="Is Peptira third-party tested?"
              a="Yes. Peptira's compounds are tested by Freedom Diagnostics, which publishes 320 certificates across 86 of Peptira's 100 products. Each certificate covers identity and purity by HPLC with UV detection coupled to mass spectrometry, appearance, and bacterial endotoxin run in duplicate. Purity and content are measured per-vial across three vials and averaged, rather than reported as one lot figure. No laboratory accreditation is printed on these certificates, so none is claimed here."
            />
            <FAQItem
              q="What do Peptira's CAG-4, RETA-3, SEMA-1 and TIRZ-2 codes mean?"
              a="CAG-4 is Cagrilintide, confirmed because its own certificate names Cagrilintide as both the Product and the Identity result. RETA-3, SEMA-1 and TIRZ-2 are corroborated only: they decode to Retatrutide, Semaglutide and Tirzepatide by naming convention, but their certificates are themselves coded and carry no CAS number, molecular formula or molecular weight. Prof. Peptide asserts a decode as confirmed only when a certificate or product record names the compound directly — a coded certificate on its own is corroboration, not proof."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
