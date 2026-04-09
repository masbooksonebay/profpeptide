import Link from "next/link";

export const metadata = {
  title: "Ashwagandha vs Rhodiola Rosea — Adaptogen Comparison | Prof. Peptide",
  description: "Ashwagandha vs Rhodiola Rosea — stress response, cortisol, energy, anxiety, and which adaptogen is right for your goals based on the research.",
};

const rows = [
  ["Primary Mechanism", "HPA axis modulation \u2014 lowers cortisol directly", "Activates stress response proteins (Hsp70), inhibits cortisol-synthesizing enzymes"],
  ["Best For", "Chronic stress, anxiety, sleep quality, testosterone support", "Acute mental fatigue, endurance performance, mood under stress"],
  ["Cortisol Effect", "Significant reduction \u2014 multiple RCTs confirm", "Moderate reduction \u2014 less direct than ashwagandha"],
  ["Anxiety", "Strong evidence \u2014 comparable to some anxiolytics in trials", "Moderate \u2014 stress resilience rather than anxiety reduction"],
  ["Energy/Fatigue", "Gradual \u2014 builds over weeks", "Faster onset \u2014 noticeable in days"],
  ["Athletic Performance", "Improved VO2max, strength in some trials", "Improved endurance, reduced perceived exertion"],
  ["Testosterone", "Some evidence of modest increase in men", "Not demonstrated"],
  ["Sleep", "Improves sleep quality \u2014 contains sleep-active withanolides", "Not primarily a sleep supplement"],
  ["Time to Effect", "4\u20138 weeks for full effect", "Days to 2 weeks"],
  ["Dose", "300\u2013600mg KSM-66 or Sensoril extract daily", "200\u2013400mg standardized extract (3% rosavins, 1% salidroside)"],
  ["Side Effects", "Rare \u2014 mild GI upset; avoid in thyroid conditions", "Mild \u2014 occasional headache, dizziness at high doses"],
];

export default function AshwagandhaVsRhodiolaPage() {
  return (
    <div className="section max-w-4xl">
      <Link href="/compare" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Comparisons</Link>
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">Ashwagandha vs Rhodiola Rosea &mdash; Adaptogen Comparison</h1>
      <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">Ashwagandha and Rhodiola Rosea are the two most evidence-backed adaptogens. Both reduce stress and improve performance &mdash; but they work through different mechanisms and are best suited to different situations. Ashwagandha primarily lowers cortisol and reduces anxiety. Rhodiola primarily enhances mental performance and physical endurance under stress.</p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
            <th className="text-left px-4 py-3 font-semibold text-gray-400 dark:text-slate-500 text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-1/4"></th>
            <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-[37.5%]">Ashwagandha</th>
            <th className="text-left px-4 py-3 font-semibold text-[#0891b2] text-xs uppercase tracking-wider border-b border-gray-100 dark:border-slate-700 w-[37.5%]">Rhodiola Rosea</th>
          </tr></thead>
          <tbody>{rows.map(([label, a, b], i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-[#0f172a]" : "bg-gray-50/50 dark:bg-slate-800/50"}>
              <td className="px-4 py-3 font-medium text-[#1e2d3d] dark:text-slate-100 border-b border-gray-100 dark:border-slate-700">{label}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-slate-300 border-b border-gray-100 dark:border-slate-700">{a}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-slate-300 border-b border-gray-100 dark:border-slate-700">{b}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Bottom Line</h2>
        <p className="text-sm text-gray-600 dark:text-slate-300"><Link href="/supplements/ashwagandha" className="text-[#0891b2] hover:underline">Ashwagandha</Link> is better for chronic stress, anxiety reduction, and sleep quality. <Link href="/supplements/rhodiola-rosea" className="text-[#0891b2] hover:underline">Rhodiola</Link> is better for acute mental performance and endurance under stress. They complement each other well and are frequently combined in adaptogen stacks.</p>
      </div>
      <p className="text-xs text-gray-400 dark:text-slate-500">For educational and research purposes only. Not medical advice.</p>
    </div>
  );
}
