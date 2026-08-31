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

export default function MoglabsCouponPage() {
  const discountPct = vendorDiscountPct("moglabs");
  return (
    <div className="section max-w-3xl">
      <BackLink href="/coupons">Back to Discount Codes</BackLink>
      <CouponBreadcrumb slug="moglabs" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Moglabs Discount Code: PROFPEPTIDE &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="moglabs" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Moglabs (moglabs.bio) is a US-based research-compound supplier shipping domestically. Its catalog and per-vial prices are openly browsable without an account, and it is one of the broader catalogs on this site at 58 products. The research peptides it carries, by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <Cat label="Metabolic &amp; Weight Loss"><P slug="retatrutide">Retatrutide</P> (MOG-3 R), MOG-2 T, <P slug="cagrilintide">Cagrilintide</P>, <P slug="aod-9604">AOD-9604</P>, <P slug="mots-c">MOTS-c</P>, <P slug="5-amino-1mq">5-Amino-1MQ</P>, Orforglipron, HGH Fragment 176-191</Cat>
            <Cat label="Recovery &amp; Tissue Repair"><P slug="bpc-157">BPC-157</P>, <P slug="tb-500">TB-500</P>, <P slug="wolverine-stack">BPC-157 + TB-500 blend</P></Cat>
            <Cat label="Performance &amp; Energy"><P slug="igf-1-lr3">IGF-1 LR3</P>, <P slug="igf-1-des">IGF-1 DES</P></Cat>
            <Cat label="Growth Hormone"><P slug="cjc-1295">CJC-1295</P>, <P slug="gh-stack">CJC-1295 + Ipamorelin</P>, <P slug="ipamorelin">Ipamorelin</P>, <P slug="tesamorelin">Tesamorelin</P>, <P slug="hexarelin">Hexarelin</P>, <P slug="ghrp-2">GHRP-2</P>, <P slug="ghrp-6">GHRP-6</P>, <P slug="mk-677">MK-677</P>, PEG-MGF</Cat>
            <Cat label="Cognitive &amp; Nootropic"><P slug="semax">Semax</P>, <P slug="selank">Selank</P>, <P slug="semax-selank">Semax + Selank</P>, Dihexa</Cat>
            <Cat label="Skin Health &amp; Anti-Aging"><P slug="ghk-cu">GHK-Cu</P>, <P slug="glow">GLOW</P>, <P slug="klow">KLOW</P>, <P slug="melanotan-i">Melanotan I</P>, <P slug="melanotan-ii">Melanotan II</P></Cat>
            <Cat label="Gut Health &amp; Immunity"><P slug="kpv">KPV</P>, <P slug="thymosin-alpha-1">Thymosin Alpha-1</P>, <P slug="vip">VIP</P></Cat>
            <Cat label="Sleep &amp; Recovery"><P slug="dsip">DSIP</P></Cat>
            <Cat label="Longevity"><P slug="nad-plus">NAD+</P>, <P slug="glutathione">Glutathione</P>, <P slug="ss-31">SS-31 (MTP-131)</P></Cat>
            <Cat label="Sexual Health"><P slug="pt-141">PT-141</P>, <P slug="oxytocin">Oxytocin</P></Cat>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Two notes on reading that catalog. Moglabs codes its GLP-class compounds &mdash; MOG-3 R is <P slug="retatrutide">Retatrutide</P>, confirmed from Moglabs&rsquo; own certificate for lot RT103; MOG-2 T is left coded here, because this site asserts a decode only from evidence rather than from a naming convention. And Moglabs&rsquo; storefront prints Orforglipron with a digit-for-letter substitution in the product title; the compound is Orforglipron, and it is listed under its real name above. The catalog also includes research chemicals and nootropics outside the peptide scope Prof. Peptide profiles &mdash; GW501516, Dapoxetine, BAM-15, Phenibut, Methylene Blue and others &mdash; which are not listed here because this site has no profile page for them.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Moglabs uses two laboratories. The certificate we reviewed is Chromate report #33551, issued to client MogLabs.bio for batch BPC002, reporting purity at 98.353% against a greater-than-98% specification. What sets it apart is the rest of the panel: sterility by USP &lt;1223&gt; using BacT/ALERT, returned as Pass; bacterial endotoxin by kinetic chromogenic LAL at less than 0.0945 EU/mg; and metals at less than 50 ppb. Sterility and endotoxin are the two panels most research-market certificates omit entirely. A second laboratory, Janoshik, issued report #109342 for the same client.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            The Chromate certificate prints its access code in full alongside a QR code, and that code verifies against Chromate&rsquo;s own records &mdash; so the check resolves at the laboratory rather than on Moglabs&rsquo; site. Chromate prints no laboratory accreditation on the certificate, so none is claimed here.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            One thing Moglabs does that no other vendor on this site does: its COA library exposes previous lots alongside the current one. Every other published library on this roster shows the lot that is shelved now. Being able to look at what a supplier&rsquo;s earlier batches assayed at &mdash; rather than only the batch it is currently selling &mdash; is the difference between a snapshot and a track record.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            One point of context on dating: the most recent certificates we reviewed date to around April 2026. That is a record with real depth, and it is a record with a date on it rather than a claim about this month. Moglabs is US-based and ships domestically. All products are sold for laboratory and research use only.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="What peptides does Moglabs carry?"
              a="Moglabs carries a 58-product catalog. On the research-peptide side that spans metabolic compounds (Retatrutide under the code MOG-3 R, a coded MOG-2 T, Cagrilintide, AOD-9604, MOTS-c, 5-Amino-1MQ, Orforglipron, HGH Fragment 176-191), recovery peptides (BPC-157, TB-500 and a BPC-157/TB-500 blend), IGF-1 LR3 and IGF-1 DES, growth-hormone secretagogues (CJC-1295, a CJC-1295/Ipamorelin blend, Ipamorelin, Tesamorelin, Hexarelin, GHRP-2, GHRP-6, MK-677, PEG-MGF), nootropic peptides (Semax, Selank, a Semax/Selank spray, Dihexa), GHK-Cu, GLOW, KLOW, Melanotan I and II, KPV, Thymosin Alpha-1, VIP, DSIP, NAD+, Glutathione, SS-31, PT-141 and Oxytocin. The catalog also carries research chemicals and nootropics outside Prof. Peptide's peptide scope. Its catalog and per-vial prices are openly browsable without an account."
            />
            <FAQItem
              q="Does Moglabs have a coupon code?"
              a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on any Moglabs order. This code is verified and maintained by Prof. Peptide.`}
            />
            <FAQItem
              q="How do I use the Moglabs discount code?"
              a={`Add your items to cart at moglabs.bio, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The ${discountPct}% discount will be applied to your order total.`}
            />
            <FAQItem
              q="Is Moglabs third-party tested?"
              a="Yes, by two laboratories. The certificate reviewed here is Chromate report #33551, issued to client MogLabs.bio for batch BPC002: purity 98.353% against a greater-than-98% specification, sterility by USP <1223> using BacT/ALERT (Pass), bacterial endotoxin by kinetic chromogenic LAL at less than 0.0945 EU/mg, and metals at less than 50 ppb. Sterility and endotoxin are the two panels most research-market certificates omit. A second laboratory, Janoshik, issued report #109342 for the same client. The Chromate certificate prints its access code in full with a QR code, and that code verifies against Chromate's own records. Chromate prints no laboratory accreditation on the certificate, so none is claimed here. The most recent certificates reviewed date to around April 2026."
            />
            <FAQItem
              q="What does MOG-3 R mean on Moglabs?"
              a="MOG-3 R is Moglabs' coded name for Retatrutide, confirmed from Moglabs' own certificate for lot RT103 rather than inferred from the code convention. Its sibling code MOG-2 T is left coded on this page: Prof. Peptide asserts a decode only from evidence such as a molecular weight, formula, CAS number or a self-identifying specification, and a consistent naming convention on its own is corroboration rather than proof."
            />
            <FAQItem
              q="Does Moglabs publish COAs for past batches?"
              a="Yes, and it is the only vendor on this site that does. Moglabs' COA library exposes previous lots alongside the current one, where every other published library on this roster shows the batch that is shelved now. That turns a single-lot snapshot into a track record a reader can look back through."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
