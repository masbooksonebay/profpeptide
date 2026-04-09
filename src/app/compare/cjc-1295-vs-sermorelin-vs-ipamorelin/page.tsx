import Link from "next/link";

export const metadata = {
  title: "CJC-1295 vs Sermorelin vs Ipamorelin — Growth Hormone Peptide Comparison | Prof. Peptide",
  description: "CJC-1295 vs Sermorelin vs Ipamorelin — mechanisms, half-lives, GH output, research evidence, and how to choose between these three growth hormone peptides.",
};

const rows = [
  ["Class", "GHRH analog", "GHRH analog (first 29 amino acids)", "GHRP (Growth Hormone Releasing Peptide)"],
  ["Receptor", "GHRH receptor", "GHRH receptor", "GHS-R1a (ghrelin receptor)"],
  ["Half-life (without DAC)", "~30 minutes", "~10\u201315 minutes", "~2 hours"],
  ["Half-life (with DAC)", "~6\u20138 days", "N/A", "N/A"],
  ["GH Pulse Pattern", "Pulsatile (without DAC) or sustained (with DAC)", "Pulsatile \u2014 mimics natural GHRH", "Pulsatile \u2014 selective GH trigger"],
  ["Cortisol/Prolactin Effects", "Minimal", "Minimal", "None \u2014 most selective GHRP studied"],
  ["GH Output", "Strong \u2014 2\u201310x baseline in human studies", "Moderate \u2014 comparable to natural GHRH", "Moderate alone, synergistic when combined"],
  ["FDA Status", "Not approved", "Approved (compounding) for GH deficiency", "Not approved"],
  ["Best Used", "Standalone or stacked with Ipamorelin", "When natural GHRH analog preferred", "Always stacked \u2014 designed to complement GHRH"],
];

export default function CJCvsSermorelinvsIpamorelinPage() {
  return (
    <div className="section max-w-5xl">
      <Link href="/compare" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Comparisons</Link>
      <h1 className="text-3xl font-bold text-[#1e2d3d] mb-3">CJC-1295 vs Sermorelin vs Ipamorelin &mdash; Growth Hormone Peptide Comparison</h1>
      <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-2xl">CJC-1295, Sermorelin, and Ipamorelin are the three most researched growth hormone secretagogue peptides. CJC-1295 and Sermorelin are both GHRH analogs &mdash; they mimic growth hormone releasing hormone. Ipamorelin is a GHRP &mdash; it works through a different receptor (GHS-R1a) to trigger GH pulses. Understanding their differences is key to understanding why they&apos;re often studied together.</p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="bg-gray-50">
            <th className="text-left px-4 py-3 font-semibold text-gray-400 text-xs uppercase tracking-wider border-b border-gray-100 w-1/5"></th>
            <th className="text-left px-4 py-3 font-semibold text-[#0D7377] text-xs uppercase tracking-wider border-b border-gray-100">CJC-1295</th>
            <th className="text-left px-4 py-3 font-semibold text-[#0D7377] text-xs uppercase tracking-wider border-b border-gray-100">Sermorelin</th>
            <th className="text-left px-4 py-3 font-semibold text-[#0D7377] text-xs uppercase tracking-wider border-b border-gray-100">Ipamorelin</th>
          </tr></thead>
          <tbody>{rows.map(([label, a, b, c], i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
              <td className="px-4 py-3 font-medium text-[#1e2d3d] border-b border-gray-100">{label}</td>
              <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{a}</td>
              <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{b}</td>
              <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{c}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <div className="border border-gray-100 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-[#1e2d3d] mb-2">Bottom Line</h2>
        <p className="text-sm text-gray-600"><Link href="/peptides/sermorelin" className="text-[#0D7377] hover:underline">Sermorelin</Link> is the most established with the longest clinical history. <Link href="/peptides/cjc-1295" className="text-[#0D7377] hover:underline">CJC-1295</Link> offers longer half-life and stronger GH output. <Link href="/peptides/ipamorelin" className="text-[#0D7377] hover:underline">Ipamorelin</Link> is almost never used alone &mdash; its value is as a GHRP to complement a GHRH analog like CJC-1295 or Sermorelin, creating synergistic GH release through dual receptor activation. The CJC-1295 + Ipamorelin stack is the most commonly researched combination.</p>
      </div>
      <p className="text-xs text-gray-400">For educational and research purposes only. Not medical advice. Not for human use.</p>
    </div>
  );
}
