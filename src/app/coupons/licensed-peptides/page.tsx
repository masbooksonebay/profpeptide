"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { vendorDiscountPct } from "@/data/prices";


export default function LicensedPeptidesCouponPage() {
  const discountPct = vendorDiscountPct("licensed-peptides");
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="licensed-peptides" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Licensed Peptides Discount Code: PROFPEPTIDE &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="licensed-peptides" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Licensed Peptides (licensedpeptides.com) is a US research-peptide supplier based in Boca Raton, Florida, whose catalog spans single-compound peptides, peptide blends, and peptide capsules, organized by research area. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; GLP</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link> (LP3-R), <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link> (LP2-T), <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-C</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Healing &amp; Tissue Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">GH Secretagogues</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>, <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>, <Link href="/peptides/igf-1-lr3" className="text-[#3A759F] hover:underline">IGF-1 LR3</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Longevity</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>, <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Pigmentation &amp; Skin</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>
              </dd>
            </div>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Licensed Peptides states a 99%+ purity standard, and publishes batch-specific Certificates of Analysis issued by Vanguard Laboratory (Olympia, WA; A2LA Certificate #6377.01.01, ISO/IEC 17025:2017-accredited). Each report verifies chromatographic purity and quantity by HPLC-UV/VIS, with heavy-metal (ICP-MS), endotoxin (LAL), and sterility (USP &lt;71&gt;) screening; recent batch reports additionally carry residual-solvent (GC-MS) and trifluoroacetic-acid (ion chromatography) panels. A COA is published on each product page and in a public purity-reports library.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Licensed Peptides says it synthesizes its compounds in GMP-certified US facilities; it prices in US dollars and offers free FedEx shipping on orders over $200 with same-day US fulfillment. All products are sold for laboratory and research use only.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem q="What peptides does Licensed Peptides carry?" a="Licensed Peptides carries single-compound peptides, peptide blends, and peptide capsules across metabolic, healing, growth-hormone, longevity, and pigmentation research areas. Its catalog includes the GLP metabolic line — Retatrutide (LP3-R) and Tirzepatide (LP2-T) — plus MOTS-C, BPC-157, TB-500, Tesamorelin, Ipamorelin, Sermorelin, IGF-1 LR3, Epitalon, NAD+, and GHK-Cu, alongside its own branded blends." />
            <FAQItem q="Does Licensed Peptides have a coupon code?" a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on your Licensed Peptides order. This code is verified and maintained by Prof. Peptide.`} />
            <FAQItem q="How do I use the Licensed Peptides discount code?" a={`Add your items to cart at licensedpeptides.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The ${discountPct}% discount will be applied to your order total.`} />
            <FAQItem q="How does Licensed Peptides test its peptides?" a="Licensed Peptides publishes batch-specific Certificates of Analysis issued by Vanguard Laboratory of Olympia, WA (A2LA Certificate #6377.01.01, ISO/IEC 17025:2017-accredited). Each COA verifies chromatographic purity and quantity by HPLC-UV/VIS (99%+ stated) plus heavy metals (ICP-MS), endotoxin (LAL), and sterility (USP <71>); recent batch reports also add residual solvents (GC-MS) and trifluoroacetic acid (ion chromatography). Reports are signed by the lab's director and linked on each product page." />
            <FAQItem q="What are LP3-R and LP2-T?" a="Licensed Peptides lists its GLP metabolic peptides under coded names. LP3-R (labeled GLP-3 R on the COA) is Retatrutide, CAS 2381089-83-2; LP2-T (GLP-2 T) is Tirzepatide, CAS 2023788-19-2. The Vanguard Certificates of Analysis identify the compounds by name — the GLP-3 R report's chromatogram peak is labeled Retatrutide and the GLP-2 T report's is labeled Tirzepatide." />
            <FAQItem q="Does Licensed Peptides offer free shipping?" a="Yes. Licensed Peptides offers free FedEx shipping on orders over $200, with same-day US fulfillment. All products are for laboratory and research use only." />
          </div>
        </div>

      </div>
    </div>
  );
}
