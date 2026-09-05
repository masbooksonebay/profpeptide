"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";
import { vendors } from "@/data/vendors";
import BackLink from "@/components/BackLink";


export default function AlphaPeptidesCouponPage() {
  const v = vendors["alpha-peptides"];
  const rows = vendorProductRows("alpha-peptides");
  const discountPct = vendorDiscountPct("alpha-peptides");
  const autoApply = codeAutoApplies("alpha-peptides");
  const shopUrl = makeShopUrlFor("alpha-peptides");
  return (
    <div className="section max-w-3xl">
      <BackLink href="/coupons">Back to Discount Codes</BackLink>
      <CouponBreadcrumb slug="alpha-peptides" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Alpha Peptides Discount Code: PROFPEPTIDE &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="alpha-peptides" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Alpha Peptides (alpha-peptides.io) is a U.S.-based, East Coast research supplier with a peptide-forward catalog of 30+ compounds &mdash; a deep growth-hormone bench alongside GLP-class metabolic research, recovery blends, longevity, cognitive, sleep, and reproductive-health compounds. What it leads on is verifiable testing: rather than resting on a bare purity number, Alpha runs a five-test verification panel per lot and files a Certificate of Analysis against every lot on a public COA page, naming Analytical Formulations, Inc. (Windcrest, TX) as the testing laboratory. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link> (GLP-3 RT), <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link> (GLP-2 TZ), <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">Semaglutide</Link> (GLP-1 SM), <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">Cagrilintide</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-C</Link>, <Link href="/peptides/aod-9604" className="text-[#3A759F] hover:underline">AOD-9604</Link>, <Link href="/peptides/5-amino-1mq" className="text-[#3A759F] hover:underline">5-Amino-1MQ</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>, <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">BPC-157 + TB-500</Link>, <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link> (with &amp; without DAC), <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>, <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>, <Link href="/peptides/ghrp-2" className="text-[#3A759F] hover:underline">GHRP-2</Link>, <Link href="/peptides/ghrp-6" className="text-[#3A759F] hover:underline">GHRP-6</Link>, <Link href="/peptides/hexarelin" className="text-[#3A759F] hover:underline">Hexarelin</Link>, <Link href="/peptides/igf-1-lr3" className="text-[#3A759F] hover:underline">IGF-1 LR3</Link>, <Link href="/peptides/igf-1-des" className="text-[#3A759F] hover:underline">IGF-1 DES</Link>, <Link href="/peptides/mgf" className="text-[#3A759F] hover:underline">MGF</Link>, <Link href="/peptides/follistatin" className="text-[#3A759F] hover:underline">Follistatin-344</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Nootropic</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>, <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>, <Link href="/peptides/adamax" className="text-[#3A759F] hover:underline">Adamax</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin Health &amp; Anti-Aging</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/glow" className="text-[#3A759F] hover:underline">GLOW</Link>, <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>, <Link href="/peptides/melanotan-i" className="text-[#3A759F] hover:underline">Melanotan I</Link>, <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Immune &amp; Signaling</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/thymosin-alpha-1" className="text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>, <Link href="/peptides/vip" className="text-[#3A759F] hover:underline">VIP</Link>, <Link href="/peptides/ll-37" className="text-[#3A759F] hover:underline">LL-37</Link>, <Link href="/peptides/cibinetide" className="text-[#3A759F] hover:underline">Cibinetide (ARA-290)</Link>
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
                <Link href="/peptides/glutathione" className="text-[#3A759F] hover:underline">Glutathione</Link>, <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>, <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>, <Link href="/peptides/ss-31" className="text-[#3A759F] hover:underline">SS-31</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Bioregulators</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/pinealon" className="text-[#3A759F] hover:underline">Pinealon</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sexual &amp; Reproductive Health</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>, <Link href="/peptides/oxytocin" className="text-[#3A759F] hover:underline">Oxytocin</Link>, <Link href="/peptides/kisspeptin" className="text-[#3A759F] hover:underline">Kisspeptin-10</Link>
              </dd>
            </div>
</dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Alpha Peptides&apos; Certificates of Analysis name Analytical Formulations, Inc. (Windcrest, TX) as the testing laboratory &mdash; confirmed across roughly 60 certificates linked from the site&apos;s /coa/ page, two of which link directly to the lab&apos;s own public storage bucket rather than a copy hosted by Alpha. Each lot runs a five-test panel &mdash; qualitative identity, percent purity, quantitative assay, heavy metals, and conformity &mdash; with identity confirmed by HPLC and mass spectrometry before a lot is accepted into inventory. Alpha states its bulk material is sourced from cGMP-aligned manufacturing partners. The stated standard is a 99.0% purity floor, with lots that fall short rejected outright rather than discounted or relabeled.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            The distinguishing feature is verifiability: Certificates of Analysis are published on a public COA page and filed against every lot, so a researcher can check identity and purity at the batch level before use. Vials are lyophilized, foil-sealed, and shipped cold-chain from the East Coast; fulfillment is U.S.-only, typically same or next business day.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            One note worth flagging: several copycat sites imitate this brand. <span className="font-semibold text-[#16181B] dark:text-slate-100">alpha-peptides.io is the authoritative store</span>, and the Shop button below links to it directly &mdash; enter code PROFPEPTIDE there to apply the discount.
          </p>
        </div>

        {/* Catalog — code card, then the product grid (one row per compound+size). */}
        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">Alpha Peptides catalog &amp; prices</h2>

          <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

          <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
            Struck-through prices are Alpha Peptides&apos; list price; the bold figure is{" "}
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
              q="What peptides does Alpha Peptides carry?"
              a="Alpha Peptides is peptide-forward, with a deep growth-hormone bench (CJC-1295 with and without DAC, Ipamorelin, Sermorelin, Tesamorelin, GHRP-2/6, Hexarelin, IGF-1 LR3 and DES, MGF, Follistatin-344). It also carries GLP-class metabolic compounds (Retatrutide, Tirzepatide, Semaglutide and Cagrilintide — listed under coded names like GLP-3 RT, GLP-2 TZ and GLP-1 SM), MOTS-C, AOD-9604 and 5-Amino-1MQ; recovery compounds (BPC-157, TB-500, the BPC-157 + TB-500 blend, KPV); skin and longevity compounds (GHK-Cu, GLOW, KLOW, Melanotan I and II, Glutathione, Epitalon, NAD+, SS-31, Pinealon); cognitive peptides (Semax, Selank, Adamax); DSIP for sleep; reproductive-health compounds (PT-141, Oxytocin, Kisspeptin-10); and immune/signaling compounds (Thymosin Alpha-1, VIP, LL-37, Cibinetide/ARA-290)."
            />
            <FAQItem
              q="Does Alpha Peptides have a coupon code?"
              a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on your Alpha Peptides order. This code is verified and maintained by Prof. Peptide.`}
            />
            <FAQItem
              q="How do I use the Alpha Peptides discount code?"
              a="Add your items to cart at alpha-peptides.io (the brand's authoritative store), proceed to checkout, and enter PROFPEPTIDE in the coupon field. The discount is applied to your order total."
            />
            <FAQItem
              q="Is Alpha Peptides third-party tested?"
              a="Yes. Alpha Peptides' Certificates of Analysis name Analytical Formulations, Inc. (Windcrest, TX) as the testing laboratory, confirmed across roughly 60 linked certificates — two of which link directly to the lab's own public storage bucket. Each lot runs a five-test panel — qualitative identity, percent purity, quantitative assay, heavy metals, and conformity — with identity confirmed by HPLC and mass spectrometry, against a stated 99.0% purity floor. Lots below that floor are rejected rather than shipped."
            />
            <FAQItem
              q="How can I verify an Alpha Peptides product?"
              a="Alpha Peptides publishes Certificates of Analysis on a public COA page and files a COA against every lot before it ships, so a researcher can match the specific batch they received to its test documentation before use."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
