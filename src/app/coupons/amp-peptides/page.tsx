"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { CouponFacts } from "@/components/CouponFacts";

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

export default function AmpPeptidesCouponPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="amp-peptides" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">AMP Peptides Discount Code &mdash; Save 15%</h1>
      </div>
      <CouponFacts slug="amp-peptides" />
      <CouponCodeCard slug="amp-peptides" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            AMP Peptides (AMP Peptides LLC) is a US-based research-peptide supplier shipping domestically, with free USA shipping over $150 and stated 24-hour dispatch. Its catalog is single-vial lyophilized peptides; AMP also offers recurring multi-month &ldquo;Supply&rdquo; subscriptions on some GLP-class compounds alongside standard one-time pricing. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <Cat label="Recovery &amp; Tissue Repair"><P slug="bpc-157">BPC-157</P>, <P slug="tb-500">TB-500</P>, and a BPC-157 / TB-500 blend</Cat>
            <Cat label="Growth Hormone"><P slug="cjc-1295">CJC-1295</P> / <P slug="ipamorelin">Ipamorelin</P>, <P slug="igf-1-lr3">IGF-1 LR3</P></Cat>
            <Cat label="Skin Health &amp; Anti-Aging"><P slug="ghk-cu">GHK-Cu</P>, plus a &ldquo;GLOW&rdquo; blend</Cat>
            <Cat label="Longevity"><P slug="epitalon">Epithalon</P>, <P slug="glutathione">Glutathione</P></Cat>
            <Cat label="Metabolic &amp; GLP">GLP3RT (AMP&rsquo;s coded GLP-class compound)</Cat>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            AMP Peptides states that its compounds are analyzed by an independent third-party laboratory &mdash; Janoshik Analytical &mdash; before release, with no in-house testing, to a stated 99%+ purity by HPLC and ESI-MS. One important caveat: the only Certificate of Analysis shown publicly is explicitly labelled a &ldquo;Sample CoA &mdash; actual results vary by lot.&rdquo; It is an illustrative example (BPC-157, lot AMP-2026-001) rather than a batch-matched report, and carries no signatory or accreditation. Real, lot-specific Certificates of Analysis are available on request by email (info@amp-peptides.com) rather than in a public library. Because Prof. Peptide has not reviewed an actual lot certificate, AMP&rsquo;s Janoshik testing is reported here as the vendor states it, not as independently verified.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="What compounds does AMP Peptides carry?"
              a="AMP Peptides carries single-vial lyophilized research peptides spanning recovery and tissue-repair compounds (BPC-157, TB-500, and a BPC-157/TB-500 blend), growth-hormone secretagogues (CJC-1295/Ipamorelin, IGF-1 LR3), skin and anti-aging compounds (GHK-Cu, a GLOW blend), longevity compounds (Epithalon, Glutathione), and a coded GLP-class compound listed as GLP3RT. Some GLP items are also sold as recurring multi-month subscriptions."
            />
            <FAQItem
              q="Does AMP Peptides have a discount code?"
              a="Yes. Use code PROFPEPTIDE at checkout to save 15% on any AMP Peptides order. This code is verified and maintained by Prof. Peptide, and beats AMP's public LIGHTNING code (10%)."
            />
            <FAQItem
              q="How do I use the AMP Peptides discount code?"
              a="Add your items to cart at amp-peptides.com, open the cart or checkout, and enter PROFPEPTIDE in the coupon field. The 15% discount applies to your order total (the code is accepted in uppercase)."
            />
            <FAQItem
              q="How does AMP Peptides test its peptides?"
              a="AMP states that every compound is analyzed by an independent third-party lab — Janoshik Analytical — with no in-house testing, to a stated 99%+ purity by HPLC and ESI-MS. The only certificate shown publicly is a labelled 'Sample CoA' (an illustrative example, not a batch-matched report, with no signatory or accreditation); real lot-specific Certificates of Analysis are available on request by email rather than in a public library. Prof. Peptide has not reviewed an actual lot certificate, so this reflects the vendor's stated process, not independently verified testing."
            />
            <FAQItem
              q="Is there a public AMP Peptides code, and is PROFPEPTIDE better?"
              a="AMP circulates a public code, LIGHTNING, for 10% off. PROFPEPTIDE saves 15%, so it is the better code for a standard order."
            />
          </div>
        </div>

      </div>
    </div>
  );
}
