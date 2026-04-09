import Link from "next/link";

export const metadata = {
  title: "Semax vs Selank — Cognitive Peptide Comparison | Prof. Peptide",
  description: "Semax vs Selank comparison — mechanisms, cognitive effects, anxiety, neuroprotection, and how to choose between these two Russian nootropic peptides.",
};

const rows = [
  ["Origin", "ACTH(4-7) analog \u2014 derived from adrenocorticotropic hormone", "Tuftsin analog \u2014 derived from naturally occurring immunoregulatory peptide"],
  ["Primary Mechanism", "BDNF upregulation, trkB receptor activation, neuroprotection", "GABA-A receptor allosteric modulation, BDNF modulation"],
  ["Primary Effect", "Cognitive enhancement, neuroprotection, stroke recovery", "Anxiolytic \u2014 reduces anxiety without sedation or dependence"],
  ["Anxiety", "Moderate anxiolytic effects secondary", "Primary effect \u2014 comparable to benzodiazepines in one RCT without side effects"],
  ["Cognitive Enhancement", "Primary \u2014 improves attention, memory, executive function", "Secondary \u2014 anti-fatigue and mild psychostimulant effects"],
  ["Neuroprotection", "Strongest application \u2014 used clinically in Russia for stroke", "Present \u2014 BDNF mediated, protective against alcohol-induced cognitive decline"],
  ["Clinical Use (Russia)", "Approved for stroke, encephalopathy, Parkinson\u2019s, ADHD", "Approved as anxiolytic for generalized anxiety disorder"],
  ["Dependence Risk", "None demonstrated", "None \u2014 key advantage over benzodiazepines"],
  ["Administration", "Intranasal spray", "Intranasal spray"],
  ["Sedation", "None", "None \u2014 anxiolytic without sedation"],
  ["Human Trial Data", "Limited English-language data \u2014 mostly Russian publications", "One RCT (62 patients, GAD) \u2014 comparable to medazepam"],
];

export default function SemaxVsSelankPage() {
  return (
    <div className="section max-w-4xl">
      <Link href="/compare" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Comparisons</Link>
      <h1 className="text-3xl font-bold text-[#1e2d3d] mb-3">Semax vs Selank &mdash; Cognitive Peptide Comparison</h1>
      <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-2xl">Semax and Selank are both synthetic nootropic peptides developed in Russia, both approved for clinical use there, and both studied for cognitive and anxiolytic effects. They work through different mechanisms and have distinct primary strengths &mdash; Semax is the cognitive enhancer and neuroprotector, Selank is the anxiolytic with cognitive benefits.</p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="bg-gray-50">
            <th className="text-left px-4 py-3 font-semibold text-gray-400 text-xs uppercase tracking-wider border-b border-gray-100 w-1/4"></th>
            <th className="text-left px-4 py-3 font-semibold text-[#0D7377] text-xs uppercase tracking-wider border-b border-gray-100 w-[37.5%]">Semax</th>
            <th className="text-left px-4 py-3 font-semibold text-[#0D7377] text-xs uppercase tracking-wider border-b border-gray-100 w-[37.5%]">Selank</th>
          </tr></thead>
          <tbody>{rows.map(([label, a, b], i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
              <td className="px-4 py-3 font-medium text-[#1e2d3d] border-b border-gray-100">{label}</td>
              <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{a}</td>
              <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{b}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <div className="border border-gray-100 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-[#1e2d3d] mb-2">Bottom Line</h2>
        <p className="text-sm text-gray-600">Choose <Link href="/peptides/semax" className="text-[#0D7377] hover:underline">Semax</Link> if the primary research interest is cognitive enhancement, neuroprotection, or stroke-related outcomes. Choose <Link href="/peptides/selank" className="text-[#0D7377] hover:underline">Selank</Link> if the primary interest is anxiety reduction without sedation or dependence risk. They complement each other well &mdash; Semax for cognition, Selank for stress &mdash; and are sometimes studied together.</p>
      </div>
      <div className="flex gap-3 mb-8">
        <Link href="/peptides/semax" className="btn-primary text-sm">Semax Profile</Link>
        <Link href="/peptides/selank" className="btn-outline text-sm">Selank Profile</Link>
      </div>
      <p className="text-xs text-gray-400">For educational and research purposes only. Not medical advice. Not for human use.</p>
    </div>
  );
}
