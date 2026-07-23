"use client";

import { useState } from "react";
import Link from "next/link";

function CodeBox({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      onClick={handleCopy}
      className="block w-full bg-gray-50 dark:bg-[#1e293b] border border-[#D9DEE4] dark:border-slate-600 px-4 py-3 rounded-lg text-lg font-mono font-bold text-[#16181B] dark:text-slate-100 tracking-widest text-center cursor-pointer hover:bg-gray-100 dark:bg-slate-700 transition-colors"
    >
      {copied ? (
        <span className="text-[#3A759F] font-sans font-medium tracking-normal">Copied!</span>
      ) : (
        code
      )}
    </button>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 dark:border-slate-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
      >
        <span className="text-sm font-medium text-[#16181B] dark:text-slate-100 pr-4">{q}</span>
        <span className="text-[#3A759F] flex-shrink-0 text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-600 dark:text-slate-300 leading-relaxed border-t border-gray-50 dark:border-slate-800 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

export default function AlphaPeptidesCouponPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Alpha Peptides Discount Code &mdash; Save 10%</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
        <span className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-500 dark:text-slate-400 border border-[#D9DEE4] dark:border-slate-600 px-2 py-0.5 rounded-full">US</span>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Alpha Peptides is a U.S.-based, East Coast research supplier with a peptide-forward catalog of 30+ compounds &mdash; a deep growth-hormone bench alongside GLP-class metabolic research, recovery blends, longevity, cognitive, sleep, and reproductive-health compounds. What it leads on is verifiable testing: rather than resting on a bare purity number, Alpha runs a five-test verification panel per lot at an independent, ISO&nbsp;17025-aligned U.S. laboratory and files a Certificate of Analysis against every lot on a public COA page. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link> (listed as GLP-3 RT), <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link> (listed as GLP-2 TZ), <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">Semaglutide</Link> (listed as GLP-1 SM), <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">Cagrilintide</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-C</Link>, <Link href="/peptides/aod-9604" className="text-[#3A759F] hover:underline">AOD-9604</Link>, <Link href="/peptides/5-amino-1mq" className="text-[#3A759F] hover:underline">5-Amino-1MQ</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link> (with &amp; without DAC), <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>, <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>, <Link href="/peptides/ghrp-2" className="text-[#3A759F] hover:underline">GHRP-2</Link>, <Link href="/peptides/ghrp-6" className="text-[#3A759F] hover:underline">GHRP-6</Link>, <Link href="/peptides/hexarelin" className="text-[#3A759F] hover:underline">Hexarelin</Link>, <Link href="/peptides/igf-1-lr3" className="text-[#3A759F] hover:underline">IGF-1 LR3</Link>, <Link href="/peptides/igf-1-des" className="text-[#3A759F] hover:underline">IGF-1 DES</Link>, <Link href="/peptides/mgf" className="text-[#3A759F] hover:underline">MGF</Link>, <Link href="/peptides/follistatin" className="text-[#3A759F] hover:underline">Follistatin-344</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>, <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">BPC-157 + TB-500</Link>, <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin, Anti-Aging &amp; Longevity</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/glow" className="text-[#3A759F] hover:underline">GLOW</Link>, <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>, <Link href="/peptides/melanotan-i" className="text-[#3A759F] hover:underline">Melanotan I</Link>, <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>, <Link href="/peptides/glutathione" className="text-[#3A759F] hover:underline">Glutathione</Link>, <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>, <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>, <Link href="/peptides/ss-31" className="text-[#3A759F] hover:underline">SS-31</Link>, <Link href="/peptides/pinealon" className="text-[#3A759F] hover:underline">Pinealon</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Nootropic</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>, <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>, <Link href="/peptides/adamax" className="text-[#3A759F] hover:underline">Adamax</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sleep &amp; Recovery</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">DSIP</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sexual &amp; Reproductive Health</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>, <Link href="/peptides/oxytocin" className="text-[#3A759F] hover:underline">Oxytocin</Link>, <Link href="/peptides/kisspeptin" className="text-[#3A759F] hover:underline">Kisspeptin-10</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Immune &amp; Signaling</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/thymosin-alpha-1" className="text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>, <Link href="/peptides/vip" className="text-[#3A759F] hover:underline">VIP</Link>, <Link href="/peptides/ll-37" className="text-[#3A759F] hover:underline">LL-37</Link>, <Link href="/peptides/cibinetide" className="text-[#3A759F] hover:underline">Cibinetide (ARA-290)</Link>
              </dd>
            </div>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Alpha Peptides states that every lot is independently third-party tested at an ISO&nbsp;17025-aligned U.S. laboratory before it ships, running a five-test panel &mdash; qualitative identity, percent purity, quantitative assay, heavy metals, and conformity. Bulk material is sourced from cGMP-aligned manufacturing partners, with identity confirmed by HPLC and mass spectrometry before a lot is accepted into inventory. The stated standard is a 99.0% purity floor, with lots that fall short rejected outright rather than discounted or relabeled.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            The distinguishing feature is verifiability: Certificates of Analysis are published on a public COA page and filed against every lot, so a researcher can check identity and purity at the batch level before use. Vials are lyophilized, foil-sealed, and shipped cold-chain from the East Coast; fulfillment is U.S.-only, typically same or next business day.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            One note worth flagging: several copycat sites imitate this brand. <span className="font-semibold text-[#16181B] dark:text-slate-100">alpha-peptides.com is the authoritative store</span>, and the Shop button below links to it directly &mdash; enter code PROFPEPTIDE there to apply the discount.
          </p>
        </div>

        <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b]">
          <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
          <CodeBox code="PROFPEPTIDE" />
          <p className="text-center text-sm text-[#3A759F] font-medium mt-2 mb-4">10% off your entire order</p>
          <a
            href="https://alpha-peptides.com/aff/850/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block"
          >
            Shop Alpha Peptides &rarr;
          </a>
        </div>


        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="What peptides does Alpha Peptides carry?"
              a="Alpha Peptides is peptide-forward, with a deep growth-hormone bench (CJC-1295 with and without DAC, Ipamorelin, Sermorelin, Tesamorelin, GHRP-2/6, Hexarelin, IGF-1 LR3 and DES, MGF, Follistatin-344). It also carries GLP-class metabolic compounds (Retatrutide, Tirzepatide, Semaglutide and Cagrilintide — listed under coded names like GLP-3 RT, GLP-2 TZ and GLP-1 SM), MOTS-C, AOD-9604 and 5-Amino-1MQ; recovery compounds (BPC-157, TB-500, the BPC-157 + TB-500 blend, KPV); skin and longevity compounds (GHK-Cu, GLOW, KLOW, Melanotan I and II, Glutathione, Epitalon, NAD+, SS-31, Pinealon); cognitive peptides (Semax, Selank, Adamax); DSIP for sleep; reproductive-health compounds (PT-141, Oxytocin, Kisspeptin-10); and immune/signaling compounds (Thymosin Alpha-1, VIP, LL-37, Cibinetide/ARA-290)."
            />
            <FAQItem
              q="Does Alpha Peptides have a discount code?"
              a="Yes. Use code PROFPEPTIDE at checkout to save 10% on your Alpha Peptides order. This code is verified and maintained by Prof. Peptide."
            />
            <FAQItem
              q="How do I use the Alpha Peptides discount code?"
              a="Add your items to cart at alpha-peptides.com (the brand's authoritative store), proceed to checkout, and enter PROFPEPTIDE in the coupon field. The discount is applied to your order total."
            />
            <FAQItem
              q="Is Alpha Peptides third-party tested?"
              a="Yes. Alpha Peptides states that every lot is independently third-party tested at an ISO 17025-aligned U.S. laboratory, running a five-test panel — qualitative identity, percent purity, quantitative assay, heavy metals, and conformity — with identity confirmed by HPLC and mass spectrometry, against a stated 99.0% purity floor. Lots below that floor are rejected rather than shipped."
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
