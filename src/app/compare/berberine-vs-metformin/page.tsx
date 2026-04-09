import Link from "next/link";

export const metadata = {
  title: "Berberine vs Metformin — Blood Sugar Comparison | Prof. Peptide",
  description:
    "Berberine vs Metformin comparison — mechanism, blood sugar efficacy, side effects, availability, and what the research actually shows.",
};

const rows = [
  ["Type", "Natural plant alkaloid (supplement)", "Prescription biguanide medication"],
  ["Primary Mechanism", "AMPK activation, gut microbiome modulation", "AMPK activation, hepatic glucose production suppression"],
  ["FDA Status", "Dietary supplement \u2014 no FDA approval", "FDA-approved for type 2 diabetes since 1994"],
  ["Blood Sugar Efficacy", "Comparable to metformin in multiple RCTs", "Gold standard for T2D \u2014 decades of controlled trial data"],
  ["HbA1c Reduction", "~0.75 percentage points (meta-analysis of 46 trials)", "~1\u20132 percentage points"],
  ["Additional Benefits", "Improves lipid profile (LDL, triglycerides), anti-inflammatory, gut health", "Modest weight loss, some cardiovascular benefit, possible longevity effects"],
  ["GI Side Effects", "Constipation, stomach discomfort (~34% of users)", "Nausea, diarrhea \u2014 especially on initiation (~30% of users)"],
  ["Bioavailability", "Poor \u2014 absorption is limited, requires higher doses", "Good \u2014 well-characterized pharmacokinetics"],
  ["Cost", "$20\u201340/month OTC", "$4\u201315/month (generic), prescription required"],
  ["Long-Term Data", "Limited \u2014 most studies are short-term (<6 months)", "Extensive \u2014 60+ years of clinical use"],
  ["Best For", "Prediabetes, metabolic syndrome, natural approaches", "Diagnosed type 2 diabetes, PCOS, prescription strength needed"],
];

export default function BerberineVsMetforminPage() {
  return (
    <div className="section max-w-4xl">
      <Link href="/compare" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Comparisons</Link>
      <h1 className="text-3xl font-bold text-[#1e2d3d] mb-3">Berberine vs Metformin &mdash; Metabolic Health Comparison</h1>
      <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-2xl">Berberine is often called &quot;nature&apos;s metformin&quot; because it activates the same AMPK pathway. A meta-analysis of 46 clinical trials found berberine comparable to metformin on multiple blood sugar measures. But they are not interchangeable &mdash; here&apos;s what the research shows.</p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left px-4 py-3 font-semibold text-gray-400 text-xs uppercase tracking-wider border-b border-gray-100 w-1/4"></th>
              <th className="text-left px-4 py-3 font-semibold text-[#0D7377] text-xs uppercase tracking-wider border-b border-gray-100 w-[37.5%]">Berberine</th>
              <th className="text-left px-4 py-3 font-semibold text-[#0D7377] text-xs uppercase tracking-wider border-b border-gray-100 w-[37.5%]">Metformin</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, a, b], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                <td className="px-4 py-3 font-medium text-[#1e2d3d] border-b border-gray-100">{label}</td>
                <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{a}</td>
                <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border border-gray-100 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-[#1e2d3d] mb-2">Bottom Line</h2>
        <p className="text-sm text-gray-600"><Link href="/supplements/berberine" className="text-[#0D7377] hover:underline">Berberine</Link> shows genuine metabolic activity and is a legitimate option for prediabetes and metabolic health support. Metformin remains the clinical gold standard for type 2 diabetes with decades of safety data. Calling berberine &quot;natural metformin&quot; oversimplifies the science &mdash; berberine is promising but not a substitute for prescription treatment when clinically indicated.</p>
      </div>

      <Link href="/supplements/berberine" className="btn-primary text-sm mb-8 inline-block">Berberine Profile</Link>

      <p className="text-xs text-gray-400 leading-relaxed">For educational and research purposes only. Not medical advice.</p>
    </div>
  );
}
