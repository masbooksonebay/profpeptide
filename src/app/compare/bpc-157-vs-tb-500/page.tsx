import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/compare/bpc-157-vs-tb-500" },
  title: "BPC-157 vs TB-500 — How These Recovery Peptides Differ | Prof. Peptide",
  description:
    "BPC-157 vs TB-500 comparison — mechanism of action, research differences, tissue targets, and how to choose between these two recovery peptides.",
};

const rows = [
  ["Origin", "Derived from human gastric juice (15 amino acids)", "Synthetic fragment of Thymosin Beta-4 (naturally occurring protein)"],
  ["Primary Mechanism", "NO system modulation, EGR-1 upregulation, growth factor signaling", "Actin sequestration, cell migration, M1\u2192M2 macrophage polarization"],
  ["Strongest Research Area", "Gut/GI healing \u2014 origin is gastric biology", "Systemic wound healing and cardiac regeneration"],
  ["Tendon Research", "Very strong \u2014 EGR-1 pathway is tendon-specific", "Good \u2014 tenocyte migration and collagen organization"],
  ["Gut Research", "Dominant \u2014 most extensively studied application", "Minimal GI-specific data"],
  ["Cardiac Research", "Present but secondary", "Strongest \u2014 landmark Nature paper on epicardial progenitor cell activation"],
  ["CNS/Neuroprotection", "Extensive \u2014 dopaminergic/serotonergic modulation, nerve crush recovery", "Present \u2014 oligodendrocyte differentiation, remyelination (MS research interest)"],
  ["Anti-inflammatory", "Yes \u2014 via NO and cytokine normalization", "Yes \u2014 via macrophage polarization (M1\u2192M2)"],
  ["Scope", "Primarily local at injury site", "Systemic \u2014 works across multiple tissues simultaneously"],
  ["Human Trials", "Limited \u2014 mostly animal models", "Limited \u2014 mostly animal models (corneal healing human trial exists)"],
];

export default function BPC157vsTB500Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"BPC-157 vs TB-500 — How These Recovery Peptides Differ","description":"BPC-157 vs TB-500 comparison — mechanism of action, research differences, tissue targets, and how to choose between these two recovery peptides.","url":"https://profpeptide.com/compare/bpc-157-vs-tb-500","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Comparisons","item":"https://profpeptide.com/compare"},{"@type":"ListItem","position":3,"name":"BPC-157 vs TB-500 — How These Recovery Peptides Differ"}]}} />
    <div className="section max-w-4xl">
      <Link href="/compare" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Comparisons</Link>
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">BPC-157 vs TB-500 &mdash; Recovery Peptide Comparison</h1>
      <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">BPC-157 and TB-500 are the two most researched tissue repair peptides in the field. They&apos;re frequently used together and often compared &mdash; but they work through fundamentally different mechanisms and have distinct research profiles. This page breaks down the key differences.</p>

      <div className="bg-[#0891b2]/10 border border-[#0891b2]/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-[#1e2d3d] dark:text-slate-100 mb-2"><strong><Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>:</strong> Local repair specialist &mdash; strongest in gut, tendon, and CNS research</p>
        <p className="text-sm text-[#1e2d3d] dark:text-slate-100 mb-2"><strong><Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>:</strong> Systemic healing specialist &mdash; strongest in cardiac, wound healing, and cell migration research</p>
        <p className="text-sm text-[#1e2d3d] dark:text-slate-100"><strong>Together:</strong> Complementary &mdash; most researchers studying both use them in combination (the <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">Wolverine Stack</Link>)</p>
      </div>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-[#1e293b]">
              <th className="text-left px-4 py-3 font-semibold text-gray-400 dark:text-slate-500 text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-1/4"></th>
              <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-[37.5%]">BPC-157</th>
              <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-[37.5%]">TB-500</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, a, b], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-[#0f172a]" : "bg-gray-50/50 dark:bg-slate-800/50"}>
                <td className="px-4 py-3 font-medium text-[#1e2d3d] dark:text-slate-100 border-b border-gray-100 dark:border-slate-700">{label}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-slate-300 border-b border-gray-100 dark:border-slate-700">{a}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-slate-300 border-b border-gray-100 dark:border-slate-700">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-4 mb-8">
        <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5">
          <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Choose BPC-157 if:</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300">Your primary interest is gut healing, tendon/ligament repair, or neuroprotection. Its GI research profile is unmatched and its local mechanism makes it ideal for site-specific injury models.</p>
        </div>
        <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5">
          <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Choose TB-500 if:</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300">You need systemic recovery support across multiple tissues, or have interest in cardiac regeneration or wound healing. Its cell migration mechanism works body-wide rather than locally.</p>
        </div>
        <div className="border border-[#0891b2]/20 rounded-xl p-5 bg-[#0891b2]/10">
          <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Consider both:</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300">Many researchers study them together &mdash; their mechanisms are complementary rather than overlapping. This combination is known as the <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">Wolverine Stack</Link>.</p>
        </div>
      </div>

      <p className="text-xs text-gray-400 dark:text-slate-500 leading-relaxed">For educational and research purposes only. Not medical advice. Not for human use.</p>
    </div>
    </>
  );
}
