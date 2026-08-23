"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { vendorDiscountPct } from "@/data/prices";
import { vendors } from "@/data/vendors";


export default function BioPurePeptidesCouponPage() {
  const discountPct = vendorDiscountPct("biopure-peptides");
  const v = vendors["biopure-peptides"];
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="biopure-peptides" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">BioPure Peptides Discount Code: {v.code} &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="biopure-peptides" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            BioPure Peptides (biopurepeptides.com) is a US-based, made-in-USA research-peptide supplier whose catalog spans metabolic and GLP-class compounds, recovery and repair peptides, growth-hormone secretagogues, longevity compounds, skin research peptides, cognitive compounds, and immune and repair peptides. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/aod-9604" className="text-[#3A759F] hover:underline">AOD-9604</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-C</Link>, plus their GLP-class BioLean line
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>, <Link href="/peptides/glow" className="text-[#3A759F] hover:underline">GLOW</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>, <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Longevity</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>, <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>, <Link href="/peptides/ss-31" className="text-[#3A759F] hover:underline">SS-31</Link>, <Link href="/peptides/glutathione" className="text-[#3A759F] hover:underline">Glutathione</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin Health &amp; Anti-Aging</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Sleep</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>, <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>, <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">DSIP</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Immune &amp; Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ll-37" className="text-[#3A759F] hover:underline">LL-37</Link>, <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>, <Link href="/peptides/thymosin-alpha-1" className="text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>, <Link href="/peptides/cibinetide" className="text-[#3A759F] hover:underline">ARA-290</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sexual &amp; Reproductive</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>, <Link href="/peptides/kisspeptin" className="text-[#3A759F] hover:underline">Kisspeptin</Link>, <Link href="/peptides/vip" className="text-[#3A759F] hover:underline">VIP</Link>
              </dd>
            </div>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            BioPure Peptides states that every batch is third-party tested for purity, potency, and quality to a &gt;99% purity standard, and that a Certificate of Analysis comes with each product. Its manufacturing facility is described as WHO/GMP and ISO 9001 certified &mdash; a manufacturing certification, not a testing-lab accreditation. The testing above is reported here as the vendor states it, not as independently verified &mdash; Prof. Peptide reviewed no BioPure certificate.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            BioPure Peptides is US-based and made in the USA. All products are sold for laboratory and research use only.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem q="What peptides does BioPure Peptides carry?" a="BioPure carries research compounds across several categories: metabolic and GLP-class compounds including AOD-9604, MOTS-C, and its BioLean GLP line; recovery peptides such as BPC-157, TB-500, and the GLOW blend; growth-hormone secretagogues including CJC-1295 and Ipamorelin; longevity compounds including Epitalon, NAD+, SS-31, and Glutathione; skin compounds GHK-Cu and Melanotan II; cognitive compounds Semax, Selank, and DSIP; immune and repair peptides LL-37, KPV, Thymosin Alpha-1, and ARA-290; plus PT-141, Kisspeptin, and VIP." />
            <FAQItem q="Does BioPure Peptides have a coupon code?" a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on your entire BioPure Peptides order. This code is verified and maintained by Prof. Peptide.`} />
            <FAQItem q="How do I use the BioPure Peptides coupon code?" a={`Add your items to cart at biopurepeptides.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The ${discountPct}% discount will be applied to your order total.`} />
            <FAQItem q="How does BioPure Peptides test its peptides?" a="BioPure states every batch is third-party tested for purity, potency, and quality to a >99% purity standard, with a Certificate of Analysis provided with each product, and that its manufacturing facility is WHO/GMP and ISO 9001 certified. This reflects the vendor's stated process, reported as the vendor states it, not as independently verified — Prof. Peptide reviewed no BioPure certificate." />
            <FAQItem q="Are Certificates of Analysis available for BioPure products?" a="Yes. Each BioPure product comes with a Certificate of Analysis." />
            <FAQItem q="Is BioPure Peptides US-based?" a="Yes — BioPure Peptides is US-based and made in the USA. All products are for laboratory and research use only." />
          </div>
        </div>

      </div>
    </div>
  );
}
