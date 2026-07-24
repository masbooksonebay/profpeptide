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

export default function BiolongevityLabsCouponPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Biolongevity Labs Discount Code &mdash; Save 15%</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
        <RegionPill slug="biolongevity-labs" />
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Biolongevity Labs is a U.S.-based manufacturer of research-grade peptides and bioregulators with a broad catalog &mdash; a growth-hormone bench, recovery blends, skin and longevity compounds, cognitive peptides, reproductive and immune-signaling research, and a deep line of Khavinson short-peptide bioregulators. What it leads on is documentation: the company states every batch is independently verified by three certified laboratories, and ships a Certificate of Analysis, an HPLC purity report, and LC-MS molecular confirmation with every order, backed by a public COA library. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">Cagrilintide</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-C</Link>, <Link href="/peptides/5-amino-1mq" className="text-[#3A759F] hover:underline">5-Amino-1MQ</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link> (no-DAC, offered as a CJC-1295 + Ipamorelin blend), <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>, <Link href="/peptides/tesamorelin-ipamorelin" className="text-[#3A759F] hover:underline">Tesamorelin + Ipamorelin</Link>, <Link href="/peptides/mgf" className="text-[#3A759F] hover:underline">PEG-MGF</Link>, <Link href="/peptides/follistatin" className="text-[#3A759F] hover:underline">Follistatin</Link>
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
                <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/glow" className="text-[#3A759F] hover:underline">GLOW</Link>, <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>, <Link href="/peptides/melanotan-i" className="text-[#3A759F] hover:underline">Melanotan I</Link>, <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link> (listed as Epithalon), <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Nootropic</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link> (N-Acetyl Semax Amidate), <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link> (N-Acetyl Selank Amidate)
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
                <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>, <Link href="/peptides/kisspeptin" className="text-[#3A759F] hover:underline">Kisspeptin-10</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Immune &amp; Signaling</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/thymosin-alpha-1" className="text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>, <Link href="/peptides/ll-37" className="text-[#3A759F] hover:underline">LL-37</Link>, <Link href="/peptides/cibinetide" className="text-[#3A759F] hover:underline">Cibinetide</Link> (listed as ARA-290)
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Peptide Bioregulators</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/cardiogen" className="text-[#3A759F] hover:underline">Cardiogen</Link>, <Link href="/peptides/cortagen" className="text-[#3A759F] hover:underline">Cortagen</Link>, <Link href="/peptides/pinealon" className="text-[#3A759F] hover:underline">Pinealon</Link>, <Link href="/peptides/thymogen" className="text-[#3A759F] hover:underline">Thymogen</Link> (listed as Thymagen)
              </dd>
            </div>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Biolongevity Labs describes its standard as &ldquo;triple third-party testing&rdquo; &mdash; every batch independently verified by three certified laboratories before release. Each order ships with full analytical documentation: a Certificate of Analysis, an HPLC purity report, and LC-MS molecular confirmation of identity. The company manufactures in the U.S. under Good Manufacturing Practices, and its stated standard is 99%+ purity, independently confirmed.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            The distinguishing feature is verifiability at the batch level: a public COA library at biolongevitylabs.com/all-coas/ lets a researcher review documentation before purchase and match the specific batch received to its identity and purity records. Fulfillment is U.S.-based, with international orders shipped alongside customs documentation.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            The authoritative store is <span className="font-semibold text-[#16181B] dark:text-slate-100">biolongevitylabs.com</span>, and the Shop button below links to it directly &mdash; enter code PROFPEPTIDE at checkout to apply the 15% discount.
          </p>
        </div>

        <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b]">
          <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
          <CodeBox code="PROFPEPTIDE" />
          <p className="text-center text-sm text-[#3A759F] font-medium mt-2 mb-4">15% off your entire order</p>
          <a
            href="https://go.biolongevitylabs.com/aff_c?offer_id=1&aff_id=2702"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block"
          >
            Shop Biolongevity Labs &rarr;
          </a>
        </div>


        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="What peptides does Biolongevity Labs carry?"
              a="Biolongevity Labs carries a broad research catalog: metabolic compounds (Cagrilintide, MOTS-C, 5-Amino-1MQ); a growth-hormone bench (Ipamorelin, a CJC-1295 no-DAC + Ipamorelin blend, Tesamorelin, a Tesamorelin + Ipamorelin blend, PEG-MGF, Follistatin); recovery compounds (BPC-157, TB-500, the BPC-157 + TB-500 blend, KPV); skin and longevity compounds (GHK-Cu, the GLOW and KLOW blends, Melanotan I, Epitalon — listed as Epithalon — and NAD+); cognitive peptides (N-Acetyl Semax and N-Acetyl Selank Amidate); DSIP for sleep; reproductive-health compounds (PT-141, Kisspeptin-10); immune and signaling compounds (Thymosin Alpha-1, LL-37, Cibinetide — listed as ARA-290); and a deep line of Khavinson short-peptide bioregulators (Cardiogen, Cortagen, Pinealon, Thymogen — listed as Thymagen — among others). It does not list GLP-1 metabolic compounds."
            />
            <FAQItem
              q="Does Biolongevity Labs have a discount code?"
              a="Yes. Use code PROFPEPTIDE at checkout to save 15% on your Biolongevity Labs order. This code is verified and maintained by Prof. Peptide."
            />
            <FAQItem
              q="How do I use the Biolongevity Labs discount code?"
              a="Add your items to cart at biolongevitylabs.com, proceed to checkout, and enter PROFPEPTIDE in the coupon field. The discount is applied to your order total."
            />
            <FAQItem
              q="Is Biolongevity Labs third-party tested?"
              a="Biolongevity Labs states that every batch is independently verified by three certified laboratories (&ldquo;triple third-party testing&rdquo;), and ships full analytical documentation with every order — a Certificate of Analysis, an HPLC purity report, and LC-MS molecular confirmation of identity. The company manufactures in the U.S. under Good Manufacturing Practices, and its stated standard is 99%+ purity, independently confirmed."
            />
            <FAQItem
              q="How can I verify a Biolongevity Labs product?"
              a="Biolongevity Labs publishes a public COA library at biolongevitylabs.com/all-coas/, so a researcher can review the documentation before purchase and match the specific batch received to its Certificate of Analysis — identity and purity — before use."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
