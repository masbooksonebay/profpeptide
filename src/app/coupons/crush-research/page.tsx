"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { CouponFacts } from "@/components/CouponFacts";
import { vendors } from "@/data/vendors";
import { CODES_VERIFIED_DATE } from "@/data/codes-verified";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";

const v = vendors["crush-research"];


export default function CrushResearchCouponPage() {
  // nextjs_feed vendor with path-form vendorSlug (product/<slug>); makeShopUrlFor composes the
  // deep link via vendorDeepLink — query-param-on-root affiliate → /product/<slug>?ref=PROFPEPTIDE.
  const rows = vendorProductRows("crush-research");
  const discountPct = vendorDiscountPct("crush-research");
  const autoApply = codeAutoApplies("crush-research");
  const shopUrl = makeShopUrlFor("crush-research");
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="crush-research" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Crush Research Discount Code &mdash; Save {discountPct}%</h1>
      </div>
      <CouponFacts slug="crush-research" />
      <CouponCodeCard slug="crush-research" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Crush Research Supply Company is a veteran-owned, U.S.-based research peptide supplier founded in 2025 around a single idea: batch- and lot-level accountability with testing that actually means something. Orders ship nationwide across the United States, including US territories, and are processed within 1&ndash;2 business days. The catalog spans metabolic GLP-class compounds, recovery and repair peptides, growth-hormone secretagogues, cognitive, skin, and longevity research compounds. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link>, <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>, <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">Cagrilintide</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-c</Link>, <Link href="/peptides/aod-9604" className="text-[#3A759F] hover:underline">AOD-9604</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>, <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">BPC-157 + TB-500</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>, <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>, <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Nootropic</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>, <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>, <Link href="/peptides/adamax" className="text-[#3A759F] hover:underline">Adamax</Link>, <Link href="/peptides/pinealon" className="text-[#3A759F] hover:underline">Pinealon</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin Health &amp; Anti-Aging</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/melanotan-i" className="text-[#3A759F] hover:underline">Melanotan I</Link>, <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>, <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Gut Health &amp; Immunity</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>, <Link href="/peptides/thymosin-alpha-1" className="text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>, <Link href="/peptides/vip" className="text-[#3A759F] hover:underline">VIP</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Longevity</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>, <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>, <Link href="/peptides/glutathione" className="text-[#3A759F] hover:underline">Glutathione</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sexual &amp; Reproductive</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>, <Link href="/peptides/kisspeptin" className="text-[#3A759F] hover:underline">Kisspeptin</Link>
              </dd>
            </div>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Crush Research publishes a public per-batch Certificate of Analysis library, tested by ILS Laboratories (San Diego, CA), an ISO/IEC 17025-accredited lab. Each report runs a Full QC Panel &mdash; peptide purity and identity by HPLC, net peptide content, endotoxin by USP &lt;85&gt;, heavy metals by ICP-MS (USP &lt;233&gt;), and sterility by PCR &mdash; and reports HPLC conformity across three samples per batch, the multi-vial testing Crush is built around; some lots also carry an immunoassay fentanyl screen. Every report is signed by the ILS lab director and independently verifiable at portal.ils-lab.com with the access code printed on it. Crush states it is one of only a handful of vendors in the space to conduct multi-vial testing, with full sterility and heavy-metals testing being rolled out across the catalog. Retatrutide and Tirzepatide are listed on-site under the coded names Triple Agonist and Double Agonist respectively.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            The company was founded by a retired military veteran and is credited with helping push batch- and lot-number adoption as an industry standard; it has been referenced in mainstream coverage of the research-peptide market. Ordering is straightforward, with responsive customer support and same-week fulfillment on in-stock items.
          </p>
        </div>

        {/* Catalog — code card, then the product grid (one row per compound+size). */}
        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">Crush Research catalog &amp; prices</h2>

          <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

          <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
            Struck-through prices are Crush Research&apos;s list price; the bold figure is{" "}
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
            <FAQItem q="What peptides does Crush Research carry?" a="Crush Research carries research compounds across several categories. Its metabolic GLP catalog includes Retatrutide and Tirzepatide (listed on-site as Triple Agonist and Double Agonist), Cagrilintide, MOTS-c, and AOD-9604. Recovery and repair peptides include BPC-157, TB-500, KPV, and a BPC-157/TB-500 blend. Growth-hormone secretagogues include CJC-1295, Ipamorelin, Sermorelin, and Tesamorelin. The catalog also spans cognitive compounds (Semax, Selank, Adamax, Pinealon), skin peptides (GHK-Cu, Melanotan-1, Melanotan-2, KLOW), and longevity compounds (NAD+, Epitalon, Glutathione)." />
            <FAQItem q="Does Crush Research have a discount code?" a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on your entire Crush Research order. This code is verified and maintained by Prof. Peptide and valid as of ${CODES_VERIFIED_DATE}.`} />
            <FAQItem q="How do I use the Crush Research discount code?" a={`Add your items to cart at crushresearch.shop, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The ${discountPct}% discount will be applied to your order total.`} />
            <FAQItem q="How does Crush Research test its peptides?" a="Crush publishes a public per-batch Certificate of Analysis library, tested by ILS Laboratories (San Diego, CA), an ISO/IEC 17025-accredited lab. Each COA runs a Full QC Panel — purity and identity by HPLC, net peptide content, heavy metals (ICP-MS), sterility (PCR), and endotoxin (USP <85>) — and reports HPLC conformity across three samples per batch (the multi-vial testing), with some lots adding a fentanyl screen." />
            <FAQItem q="How do I verify a Crush Research COA?" a="Visit the public testing page at crushresearch.shop and match the batch number on your vial to its Certificate of Analysis. Each ILS Laboratories report also carries a QR code and access code that independently verify it at portal.ils-lab.com, alongside the full purity, identity, net-content, heavy-metal, sterility, and endotoxin results for that batch." />
            <FAQItem q="Is Crush Research US-based?" a="Yes. Crush Research Supply Company is a veteran-owned, U.S.-based supplier that ships nationwide across the United States, including US territories, with orders processed within 1–2 business days." />
          </div>
        </div>

      </div>
    </div>
  );
}
