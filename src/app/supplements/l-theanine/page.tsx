import Link from "next/link";

export const metadata = {
  title: "L-Theanine Supplement Profile | Prof. Peptide",
  description:
    "L-Theanine supplement profile — alpha wave induction, calm focus, caffeine synergy, anxiety reduction, dosing, and references.",
};

export default function LTheaninePage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">L-Theanine</h1>
        <span className="tag">Cognitive &amp; Nootropic</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">Also Known As: Theanine, L-γ-glutamylethylamide, suntheanine</p>
      <p className="text-sm text-[#0D7377] font-medium mb-8">The calm focus amino acid found in green tea</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📋 Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            L-theanine is an amino acid found almost exclusively in tea leaves (Camellia sinensis) — particularly green tea — and is the compound largely responsible for the distinctly calm yet focused mental state that tea drinkers often describe as different from coffee despite similar caffeine content. L-theanine crosses the blood-brain barrier and increases alpha brain wave activity — the neural pattern associated with relaxed alertness, creativity, and flow states — without causing sedation. It modulates key neurotransmitter systems including GABA, glutamate, dopamine, and serotonin to produce anxiolytic effects without impairing cognitive performance. While effective as a standalone nootropic, L-theanine&apos;s most well-researched application is in combination with caffeine — where it selectively blunts caffeine&apos;s anxiogenic effects while preserving and enhancing its cognitive benefits. It is one of the safest, most consistent, and most evidence-backed supplements in the nootropic category.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🧠 Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Promotes relaxed alertness without sedation",
              "Reduces anxiety and stress without impairing cognition",
              "Increases alpha brain wave activity",
              "Synergistic cognitive enhancement with caffeine",
              "Improved sleep quality at higher doses",
              "Reduces blood pressure response to stress",
              "Neuroprotective effects in preclinical research",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Alpha Wave Induction — L-theanine's most distinctive mechanism is selective increase of alpha brain wave power (8–14 Hz) — the neural oscillation associated with calm focus, creative thinking, and meditative states. This effect distinguishes it from most anxiolytics that produce sedation.",
              "GABAergic Modulation — L-theanine enhances GABA activity — the primary inhibitory neurotransmitter — reducing neural overexcitation and promoting calm without the receptor downregulation and dependence associated with benzodiazepines.",
              "Glutamate Modulation — L-theanine inhibits glutamate receptors (NMDA, AMPA, kainate), reducing excitotoxic neural activity and contributing to its neuroprotective and anxiety-reducing effects.",
              "Dopamine and Serotonin Effects — L-theanine modulates dopamine and serotonin systems, contributing to improved mood and the cognitive-enhancing effects observed particularly in combination with caffeine.",
              "Caffeine Synergy — L-theanine selectively attenuates caffeine's cardiovascular stimulating and anxiety-producing effects while preserving its alertness and cognitive benefits — producing a synergistic nootropic combination that is superior to either compound alone.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">🔬 What the Research Shows</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Multiple RCTs confirm L-theanine&apos;s anxiolytic and cognitive effects. A double-blind crossover study found L-theanine significantly increased alpha wave activity within 40 minutes of ingestion. Combined with caffeine in a 2:1 ratio (200mg theanine : 100mg caffeine), multiple RCTs show superior improvements in attention, reaction time, and working memory compared to caffeine alone. Research shows L-theanine reduces physiological and psychological stress responses including salivary cortisol and blood pressure during challenging tasks. Higher doses (200–400mg) show sleep quality improvements — reduced time to sleep onset and improved sleep satisfaction without next-day grogginess.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">💊 How to Use</h2>
          <ul className="space-y-1">
            {[
              "Standalone anxiolytic dose: 100–200mg as needed for stress or anxiety",
              "Sleep support: 200–400mg before bed",
              "With caffeine: 200mg L-theanine with 100mg caffeine (2:1 ratio)",
              "Timing: Effects begin within 30–60 minutes and last 4–6 hours",
              "Daily use: Safe for chronic use — no tolerance or dependence",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚠️ Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Exceptionally safe — one of the safest supplements studied. No serious adverse effects in any clinical research. May cause mild headache at very high doses in some individuals. May enhance the effects of blood pressure medications. No interactions with common medications documented at typical doses.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🔗 Related Supplements</h2>
          <p className="text-sm text-gray-600"><Link href="/supplements/caffeine-l-theanine" className="text-[#0D7377] hover:underline">Caffeine + L-Theanine</Link> | <Link href="/supplements/lions-mane" className="text-[#0D7377] hover:underline">Lion&apos;s Mane</Link> | <Link href="/supplements/ashwagandha" className="text-[#0D7377] hover:underline">Ashwagandha</Link> | <Link href="/supplements/rhodiola-rosea" className="text-[#0D7377] hover:underline">Rhodiola Rosea</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📚 References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Nobre AC, et al. L-theanine, a natural constituent in tea, and its effect on mental state. Asia Pac J Clin Nutr. 2008.",
              "Owen GN, et al. The combined effects of L-theanine and caffeine on cognitive performance and mood. Nutr Neurosci. 2008.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Alpha Waves", "Calm Focus", "Caffeine Synergy", "Anxiolytic"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  );
}
