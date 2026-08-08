"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { CouponFacts } from "@/components/CouponFacts";
import { vendors } from "@/data/vendors";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";

const v = vendors["legendary-peptides"];


export default function LegendaryPeptidesCouponPage() {
  const rows = vendorProductRows("legendary-peptides");
  const discountPct = vendorDiscountPct("legendary-peptides");
  const autoApply = codeAutoApplies("legendary-peptides");
  const shopUrl = makeShopUrlFor("legendary-peptides");
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="legendary-peptides" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Legendary Peptides Discount Code &mdash; Save 10%</h1>
      </div>
      <CouponFacts slug="legendary-peptides" />
      <CouponCodeCard slug="legendary-peptides" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Legendary Peptides is a research-peptide supplier whose catalog spans single-compound peptides, multi-peptide blends, and bacteriostatic diluents, with free shipping on orders over $200. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link>, <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">Cagrilintide</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-C</Link>, <Link href="/peptides/5-amino-1mq" className="text-[#3A759F] hover:underline">5-Amino-1MQ</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>
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
                <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>, <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>, <Link href="/peptides/glutathione" className="text-[#3A759F] hover:underline">Glutathione</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin Health &amp; Anti-Aging</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>, <Link href="/peptides/glow" className="text-[#3A759F] hover:underline">GLOW</Link>, <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Sleep</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>, <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">DSIP</Link>, <Link href="/peptides/adamax" className="text-[#3A759F] hover:underline">Adamax</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sexual &amp; Gut Health</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/kisspeptin" className="text-[#3A759F] hover:underline">Kisspeptin</Link>, <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>
              </dd>
            </div>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Every Legendary Peptides product page carries a downloadable Certificate of Analysis from Freedom Diagnostics, an independent US lab (FreedomDiagnosticsTesting.com). Each certificate is batch-matched to a lot number and reports identity by LC-MS, purity by HPLC-UV, net peptide content, and endotoxin by an LAL assay run in duplicate under USP &lt;85&gt; (≤0.05 EU/mL sensitivity); it carries a per-lot accession and search code &mdash; recent certificates add a QR code &mdash; searchable at FreedomDiagnosticsTesting.com. The most recent Legendary lots extend the panel with a PCR microbial screen and a fentanyl screen, both reported as passing, and Legendary states that fentanyl screening of internationally sourced material is a standing part of its sourcing checks.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Legendary Peptides lists a US phone number and prices in US dollars, and offers free shipping on orders over $200. All products are sold for laboratory and research use only.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">Legendary Peptides catalog &amp; prices</h2>

          <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

          <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
            Struck-through prices are Legendary Peptides&apos; list price; the bold figure is{" "}
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
            <FAQItem q="What peptides does Legendary Peptides carry?" a="Legendary carries single-compound peptides, multi-peptide blends, and bacteriostatic diluents. Its catalog includes metabolic and GLP-class compounds such as Retatrutide, Cagrilintide, MOTS-C, and 5-Amino-1MQ; BPC-157 for recovery; growth-hormone secretagogues including CJC-1295 and Ipamorelin; longevity compounds such as Epitalon, NAD+, and Glutathione; skin compounds including Melanotan II and the GLOW and KLOW blends; plus Selank, DSIP, Adamax, Kisspeptin, and KPV." />
            <FAQItem q="Does Legendary Peptides have a discount code?" a="Yes. Use code PROFPEPTIDE at checkout to save 10% on your entire Legendary Peptides order. This code is verified and maintained by Prof. Peptide." />
            <FAQItem q="How do I use the Legendary Peptides discount code?" a="Add your items to cart at legendarypeptides.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The 10% discount will be applied to your order total." />
            <FAQItem q="How does Legendary Peptides test its peptides?" a="Every product page carries a downloadable Certificate of Analysis from Freedom Diagnostics, an independent US lab, batch-matched to a lot number. Each certificate reports identity by LC-MS, purity by HPLC-UV, net peptide content, and endotoxin by an LAL assay run in duplicate under USP <85>. The most recent lots also carry a PCR microbial screen and a fentanyl screen, both reported as passing. Each certificate has a per-lot search code — recent ones a QR code — searchable at FreedomDiagnosticsTesting.com." />
            <FAQItem q="Does Legendary Peptides offer free shipping?" a="Yes. Legendary Peptides offers free shipping on all orders over $200. All products are for laboratory and research use only." />
          </div>
        </div>

      </div>
    </div>
  );
}
