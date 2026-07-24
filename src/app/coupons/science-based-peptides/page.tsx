"use client";

import { useState } from "react";
import Link from "next/link";
import { RegionPill } from "@/components/RegionPill";

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

export default function ScienceBasedPeptidesCouponPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Science Based Peptides Discount Code &mdash; Save 10%</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
        <RegionPill slug="science-based-peptides" />
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Science Based Peptides is a U.S. research supplier with a catalog built around analytical workflows and batch documentation &mdash; GLP-class metabolic research alongside a growth-hormone bench, recovery blends, skin and longevity compounds, cognitive peptides, and reproductive-health research. What it leads on is per-batch traceability: every product page carries a downloadable Certificate of Analysis tied to a specific batch number and tested date, and the store describes its focus as independent COAs, batch-level documentation, and conservative handling standards. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link> (listed as GLP 3-(RT)), <Link href="/peptides/aod-9604" className="text-[#3A759F] hover:underline">AOD-9604</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-C</Link>, <Link href="/peptides/5-amino-1mq" className="text-[#3A759F] hover:underline">5-Amino-1MQ</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link> (no-DAC), <Link href="/peptides/cjc-1295-dac-ipamorelin" className="text-[#3A759F] hover:underline">CJC-1295 + Ipamorelin</Link>, <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>, <Link href="/peptides/igf-1-lr3" className="text-[#3A759F] hover:underline">IGF-1 LR3</Link>
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
                <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/glow" className="text-[#3A759F] hover:underline">GLOW</Link>, <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>, <Link href="/peptides/melanotan-i" className="text-[#3A759F] hover:underline">Melanotan I</Link>, <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>, <Link href="/peptides/glutathione" className="text-[#3A759F] hover:underline">Glutathione</Link>, <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>, <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Nootropic</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>, <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>
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
                <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Immune &amp; Signaling</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/thymosin-alpha-1" className="text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>
              </dd>
            </div>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Science Based Peptides states that every batch is third-party tested at an independent U.S. laboratory before it ships, with each product page linking a downloadable Certificate of Analysis tied to a specific batch number and tested date. The company describes its focus as traceability &mdash; independent COAs, batch-level documentation, and conservative handling standards &mdash; so a researcher can match the lot received to its test record before use. Its stated specification is a 99% minimum purity per the active batch&rsquo;s COA.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            The COAs the store publishes report compound identity and chromatographic purity at the batch level; the certificates are issued by an independent U.S. laboratory (Freedom Diagnostics) using HPLC with UV detection coupled with mass spectrometry, which confirms the compound&rsquo;s identity and its purity figure against the specific lot. Compounds that the store lists under coded names &mdash; for example the GLP-class metabolic compound labeled GLP&nbsp;3-(RT) &mdash; are identified on their published COAs by the underlying compound name (in that case, Retatrutide). Material is supplied as lyophilized powder with refrigerated storage recommended, and fulfillment is U.S.-based.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            The authoritative store is <span className="font-semibold text-[#16181B] dark:text-slate-100">sciencebasedpeptides.com</span>, and the Shop button below links to it directly &mdash; enter code PROFPEPTIDE at checkout to apply the 10% discount.
          </p>
        </div>

        <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b]">
          <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
          <CodeBox code="PROFPEPTIDE" />
          <p className="text-center text-sm text-[#3A759F] font-medium mt-2 mb-4">10% off your entire order</p>
          <a
            href="https://www.sciencebasedpeptides.com/ref/PROFPEPTIDE"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block"
          >
            Shop Science Based Peptides &rarr;
          </a>
        </div>


        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="What peptides does Science Based Peptides carry?"
              a="Science Based Peptides carries GLP-class metabolic compounds (Retatrutide — listed under the coded name GLP 3-(RT)), AOD-9604, MOTS-C and 5-Amino-1MQ; a growth-hormone bench (CJC-1295 no-DAC, the CJC-1295 + Ipamorelin blend, Ipamorelin, Tesamorelin, IGF-1 LR3); recovery compounds (BPC-157, TB-500, the BPC-157 + TB-500 blend, KPV); skin and longevity compounds (GHK-Cu, GLOW, KLOW, Melanotan I and II, Glutathione, Epitalon, NAD+); cognitive peptides (Semax, Selank); DSIP for sleep; PT-141 for reproductive-health research; and the immune/signaling compound Thymosin Alpha-1. The catalog also lists bacteriostatic water and a research accessory or two."
            />
            <FAQItem
              q="Does Science Based Peptides have a discount code?"
              a="Yes. Use code PROFPEPTIDE at checkout to save 10% on your Science Based Peptides order. This code is verified and maintained by Prof. Peptide."
            />
            <FAQItem
              q="How do I use the Science Based Peptides discount code?"
              a="Add your items to cart at sciencebasedpeptides.com, proceed to checkout, and enter PROFPEPTIDE in the coupon field. The discount is applied to your order total."
            />
            <FAQItem
              q="Is Science Based Peptides third-party tested?"
              a="Science Based Peptides states that every batch is third-party tested at an independent U.S. laboratory, and each product page links a downloadable Certificate of Analysis showing the batch number and tested date for the active lot. The certificates reviewed are issued by an independent U.S. lab using HPLC with UV detection coupled with mass spectrometry. The company's stated specification is a 99% minimum purity per the batch's COA."
            />
            <FAQItem
              q="How can I verify a Science Based Peptides product?"
              a="Each product page carries a downloadable Certificate of Analysis tied to a specific batch number and tested date, so a researcher can match the lot they received to its test documentation — identity and purity — before use. The company frames its process around batch-level traceability and independent COAs."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
