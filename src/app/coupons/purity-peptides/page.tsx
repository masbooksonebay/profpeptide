"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";
import { vendors } from "@/data/vendors";
import BackLink from "@/components/BackLink";


export default function PurityPeptidesCouponPage() {
  // purity_api adapter emits no product slug, so makeShopUrlFor falls back to the vendor's
  // affiliate URL for every row. sld-only (no coupon param) → code entered at checkout.
  const v = vendors["purity-peptides"];
  const rows = vendorProductRows("purity-peptides");
  const discountPct = vendorDiscountPct("purity-peptides");
  const autoApply = codeAutoApplies("purity-peptides");
  const shopUrl = makeShopUrlFor("purity-peptides");
  return (
    <div className="section max-w-3xl">
      <BackLink href="/coupons">Back to Discount Codes</BackLink>
      <CouponBreadcrumb slug="purity-peptides" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Purity Peptides Discount Code: PROF15 &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="purity-peptides" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Purity Peptides (puritypeptides.is) is a Canadian research-peptide vendor &mdash; North American sourced, manufactured, and tested &mdash; with a broad catalog spanning metabolic, recovery, performance, growth-hormone, cognitive, skin, gut-health, sleep, longevity, bioregulator, and sexual-health research. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/5-amino-1mq" className="text-[#3A759F] hover:underline">5-Amino-1MQ</Link>, <Link href="/peptides/aod-9604" className="text-[#3A759F] hover:underline">AOD-9604</Link>, <Link href="/peptides/nad-mots-c-5-amino-1mq" className="text-[#3A759F] hover:underline">Metabolic Blend</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-c</Link>, <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link>, <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Performance &amp; Energy</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/igf-1-lr3" className="text-[#3A759F] hover:underline">IGF-1 LR3</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>, <Link href="/peptides/gh-stack" className="text-[#3A759F] hover:underline">GH Stack</Link>, <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>, <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>, <Link href="/peptides/tesamorelin-ipamorelin" className="text-[#3A759F] hover:underline">Tesamorelin + Ipamorelin</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Nootropic</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>, <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>, <Link href="/peptides/semax-selank" className="text-[#3A759F] hover:underline">Semax + Selank</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin Health &amp; Anti-Aging</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/glow" className="text-[#3A759F] hover:underline">GLOW</Link>, <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>, <Link href="/peptides/melanotan-i" className="text-[#3A759F] hover:underline">Melanotan I</Link>, <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Gut Health &amp; Immunity</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>, <Link href="/peptides/thymosin-alpha-1" className="text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sleep &amp; Recovery</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">DSIP</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Longevity</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>, <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>, <Link href="/peptides/ss-31" className="text-[#3A759F] hover:underline">SS-31</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Bioregulators</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/pinealon" className="text-[#3A759F] hover:underline">Pinealon</Link>, <Link href="/peptides/cortagen" className="text-[#3A759F] hover:underline">Cortagen</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sexual Health</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>
              </dd>
            </div>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Every batch is tested by independent third-party labs: MDx BioAnalytical Laboratory (which reports purity and identity by HPLC and mass spectrometry, plus endotoxin on some products, each certificate verifiable by its code at mdxbiolabs.com) and Vanguard Laboratory (Olympia, WA; A2LA #6377.01.01, ISO/IEC 17025:2017-accredited, HPLC-UV/VIS). Purity is verified to a 99%+ standard with identity confirmation. Purity Peptides&apos; raw materials are North American-sourced (not China) and manufactured in GMP-aligned facilities with full chain-of-custody documentation.
          </p>
          {/* §D3: CPRA claim intentionally kept ATTRIBUTED ("states it is certified by") — a third-party certification asserts an outside body vouched for the vendor; CPRA is obscure and vendor-adjacent, so PP must not state it as flat fact. Do not de-hedge. */}
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Each product links a Certificate of Analysis with traceable lab results. Purity Peptides states it is certified by the Canadian Peptide Research Alliance (CPRA), a Canadian organization that describes itself as an independent certification and registry body for research-grade peptide vendors. That per-product, verifiable documentation &mdash; paired with the 99%+ purity threshold &mdash; gives researchers a traceable quality record for every order.
          </p>
        </div>

        {/* Catalog — code card, then the product grid (one row per compound+size). */}
        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">Purity Peptides catalog &amp; prices</h2>

          <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

          <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
            Struck-through prices are Purity Peptides&apos; list price; the bold figure is{" "}
            {autoApply ? (
              <>your price after the {discountPct}% code</>
            ) : (
              <>your price once you apply code {v.code} at checkout</>
            )}. Prices current as of {PRICES_UPDATED_DATE}.
          </p>
        </div>


        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="What peptides does Purity Peptides carry?"
              a="Purity Peptides carries research compounds across metabolic, recovery, growth-hormone, cognitive, skin, gut-health, longevity, bioregulator, and sexual-health categories. Flagship compounds include Retatrutide, Tirzepatide, BPC-157, TB-500, GHK-Cu, CJC-1295/Ipamorelin, and NAD+, along with the GLOW and KLOW blends."
            />
            <FAQItem
              q="Does Purity Peptides have a coupon code?"
              a={`Yes. Use code PROF15 at checkout to save ${discountPct}% on any Purity Peptides order. This code is verified and maintained by Prof. Peptide.`}
            />
            <FAQItem
              q="How do I use the Purity Peptides discount code?"
              a={`Add your items to cart at puritypeptides.is, proceed to checkout, and enter PROF15 in the discount code field. The ${discountPct}% discount will be applied to your order total.`}
            />
            <FAQItem
              q="What testing does Purity Peptides do?"
              a="Every batch is tested by independent labs — MDx BioAnalytical Laboratory (HPLC + mass spectrometry, plus endotoxin on some products, verifiable at mdxbiolabs.com) and Vanguard Laboratory (A2LA #6377.01.01, ISO/IEC 17025:2017) — covering HPLC purity (99%+) and mass-spectrometry identity, with a Certificate of Analysis on every product."
            />
            <FAQItem
              q="What is the minimum purity standard at Purity Peptides?"
              a="Purity Peptides verifies a minimum 99%+ purity, confirmed by HPLC and mass spectrometry, through independent labs — MDx BioAnalytical Laboratory and Vanguard Laboratory (A2LA / ISO 17025-accredited) — before a batch is offered for sale."
            />
            <FAQItem
              q="Does Purity Peptides provide Certificates of Analysis?"
              a="Yes. Purity Peptides provides a Certificate of Analysis with traceable lab results on every product, and describes itself as a CPRA-certified vendor (Canadian Peptide Research Alliance)."
            />
          </div>
        </div>

      </div>
    </div>
  );
}
