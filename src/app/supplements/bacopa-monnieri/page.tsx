import Link from "next/link";

export const metadata = {
  title: "Bacopa Monnieri Supplement Profile | Prof. Peptide",
  description:
    "Bacopa Monnieri supplement profile — bacoside activity, memory enhancement, anxiety reduction, acetylcholinesterase inhibition, dosing, and references.",
};

export default function BacopaMonnieriPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Bacopa Monnieri</h1>
        <span className="tag">Cognitive &amp; Nootropic</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">Also Known As: Brahmi, water hyssop, thyme-leaved gratiola, BM, bacosides</p>
      <p className="text-sm text-[#0D7377] font-medium mb-8">The Ayurvedic memory herb with serious clinical backing</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📋 Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Bacopa monnieri is a creeping aquatic herb native to wetlands across South Asia and a cornerstone herb in Ayurvedic medicine — used for thousands of years to enhance memory, learning, and cognitive function. Its bioactive compounds — bacosides A and B — are the primary drivers of its nootropic effects, supporting antioxidant activity in the brain, enhancing synaptic transmission, and modulating key neurotransmitter systems. Unlike most nootropics that produce acute effects, Bacopa&apos;s cognitive benefits are cumulative — building over 8–12 weeks of consistent use. It is one of the best-studied herbal nootropics in Western science, with multiple double-blind RCTs in healthy adults showing significant improvements in memory acquisition and retention speed. Its primary applications are memory enhancement, anxiety reduction, and neuroprotection.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🧠 Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Improved memory formation and recall speed",
              "Reduced anxiety with chronic use",
              "Neuroprotective antioxidant effects in the brain",
              "Enhanced synaptic communication",
              "Attention and information processing improvements",
              "Supports learning in demanding cognitive tasks",
              "Potential benefits in ADHD research",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Bacoside Activity — Bacosides A and B repair damaged neurons by enhancing kinase activity, neuronal synthesis, and restoration of synaptic activity. They reduce oxidative stress in hippocampal neurons — the memory center of the brain — and enhance dendritic branching which increases synaptic connections.",
              "Acetylcholinesterase Inhibition — Bacopa inhibits acetylcholinesterase — the enzyme that breaks down acetylcholine — increasing cholinergic neurotransmission and supporting memory and attention. This is the same mechanism as several Alzheimer's medications (donepezil, rivastigmine).",
              "Serotonin Modulation — Bacopa enhances serotonergic neurotransmission, contributing to its anxiolytic effects and mood-stabilizing properties during chronic use.",
              "Antioxidant Neuroprotection — Bacosides are potent antioxidants in brain tissue, protecting neurons from oxidative damage — a key mechanism in cognitive aging and neurodegeneration.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">🔬 What the Research Shows</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            A meta-analysis by Kongkeaw et al. (2014) of 9 double-blind RCTs found Bacopa monnieri significantly improved cognitive function, particularly in tests of attention, cognitive processing, and working memory in healthy adults. Multiple Australian RCTs by Stough et al. found significant improvements in spatial working memory and rapid visual information processing after 90 days. A 2016 meta-analysis confirmed consistent improvements in memory free recall. Research also shows significant reductions in anxiety and cortisol levels with chronic Bacopa supplementation — an important distinction from stimulant nootropics that may increase anxiety.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">💊 How to Use</h2>
          <ul className="space-y-1">
            {[
              "Typical dose: 300–600mg of extract standardized to 40–55% bacosides daily",
              "Timing: With food — fat enhances absorption of bacosides",
              "Duration: Minimum 8–12 weeks for full cognitive benefits — Bacopa is not an acute nootropic",
              "Consistency: Daily use is required — benefits diminish when supplementation stops",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚠️ Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Generally well tolerated. Most common side effects are GI — nausea, stomach cramps, diarrhea — particularly on an empty stomach. Taking with food significantly reduces GI effects. May cause sedation in some individuals — particularly at higher doses. Rare reports of dry mouth. Not recommended during pregnancy. May interact with thyroid medications and anticholinergic drugs.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🔗 Related Supplements</h2>
          <p className="text-sm text-gray-600">Lion&apos;s Mane | Alpha GPC | Phosphatidylserine | Rhodiola Rosea</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📚 References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Kongkeaw C, et al. Meta-analysis of randomized controlled trials on cognitive effects of Bacopa monnieri extract. J Ethnopharmacol. 2014.",
              "Stough C, et al. The chronic effects of an extract of Bacopa monniera on cognitive function in healthy human subjects. Psychopharmacology. 2001.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Memory", "Ayurvedic", "Bacosides", "Cumulative"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  );
}
