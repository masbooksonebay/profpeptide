import Link from "next/link";

export const metadata = {
  title: "Alpha GPC — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Alpha GPC supplement profile covering choline bioavailability, acetylcholine synthesis, cognitive enhancement, and growth hormone release.",
};

export default function AlphaGPCPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Alpha GPC</h1>
        <span className="tag">Cognitive &amp; Nootropic</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">Also Known As: Alpha-glycerophosphocholine, L-alpha glycerylphosphorylcholine, choline alfoscerate</p>
      <p className="text-sm text-[#0D7377] font-medium mb-8">The most bioavailable choline source for brain and performance</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📋 Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Alpha GPC (alpha-glycerophosphocholine) is a choline-containing compound that occurs naturally in the brain and is derived commercially from soy or sunflower lecithin. It is the most bioavailable and brain-penetrant choline supplement available — significantly outperforming choline bitartrate and CDP-choline in terms of blood and brain choline elevation. Choline is an essential nutrient required for the synthesis of acetylcholine — the primary neurotransmitter for memory, learning, muscle control, and attention. Approximately 90% of people do not consume adequate dietary choline, making supplementation relevant for cognitive function. Alpha GPC is used clinically in Europe as a prescription medication for Alzheimer&apos;s disease and vascular dementia, and is widely used by nootropic users and athletes for cognitive enhancement and the acute growth hormone-releasing effects documented in exercise research.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🧠 Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Most effective choline source for raising brain acetylcholine",
              "Improves memory, learning, and attention",
              "Prescription cognitive medication in Europe for dementia",
              "Acute growth hormone release during exercise",
              "Enhances mind-muscle connection during training",
              "Neuroprotective — supports neuronal membrane integrity",
              "Synergistic with racetams and other nootropics",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Acetylcholine Precursor — Alpha GPC is rapidly absorbed and crosses the blood-brain barrier where it is converted to choline and then to acetylcholine — the neurotransmitter essential for memory formation, attention, learning, and the cholinergic system that declines in Alzheimer's disease. Increasing choline availability directly supports acetylcholine synthesis.",
              "Neuronal Membrane Support — Alpha GPC also provides glycerophosphocholine — a component of phosphatidylcholine, the dominant phospholipid in neuronal cell membranes. This supports membrane integrity, fluidity, and neuronal signaling.",
              "Growth Hormone Stimulation — Several studies show Alpha GPC acutely increases growth hormone secretion following exercise — with one study showing a 44% increase in peak GH compared to placebo. This is attributed to its cholinergic stimulation of the hypothalamic-pituitary axis.",
              "Cognitive Enhancement — By increasing acetylcholine availability, Alpha GPC enhances the cholinergic neurotransmission underlying attention, working memory, and episodic memory consolidation.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">🔬 What the Research Shows</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Italian clinical trials using 1200mg Alpha GPC daily in Alzheimer&apos;s patients and vascular dementia patients showed significant improvements in cognitive function, memory, and attention over 3–6 months — leading to its classification as a prescription drug in Italy and several other European countries. A 2015 study by Ziegenfuss et al. found Alpha GPC (600mg) taken 90 minutes before exercise significantly increased peak growth hormone levels, lower body force production, and isometric strength compared to placebo. Studies on healthy young adults show Alpha GPC improves memory and attention at doses of 400–600mg. It is consistently found superior to choline bitartrate for cognitive outcomes due to its superior bioavailability.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">💊 How to Use</h2>
          <ul className="space-y-1">
            {[
              "Cognitive enhancement: 300–600mg daily, ideally in the morning",
              "Exercise performance and GH: 600mg taken 60–90 minutes before training",
              "Clinical doses (dementia research): 1200mg daily in divided doses",
              "Note: Alpha GPC is significantly more expensive than choline bitartrate — CDP-choline is a cost-effective alternative for many applications",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚠️ Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Well tolerated at typical doses. Most common side effects: headache, GI discomfort, dizziness at higher doses. Excessive choline from multiple sources can cause a fishy body odor — monitor total choline intake. Some reports of increased TMAO production with high choline intake — a potential cardiovascular marker worth monitoring with long-term high-dose use. May interact with anticholinergic medications.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🔗 Related Supplements</h2>
          <p className="text-sm text-gray-600"><Link href="/supplements/lions-mane" className="text-[#0D7377] hover:underline">Lion&apos;s Mane</Link> | <Link href="/supplements/bacopa-monnieri" className="text-[#0D7377] hover:underline">Bacopa Monnieri</Link> | <Link href="/supplements/phosphatidylserine" className="text-[#0D7377] hover:underline">Phosphatidylserine</Link> | <Link href="/supplements/l-theanine" className="text-[#0D7377] hover:underline">L-Theanine</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📚 References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Parnetti L, et al. Multicentre study of l-alpha-glycerylphosphorylcholine vs ST200 among patients with probable senile dementia of Alzheimer's type. Drugs Aging. 1993.",
              "Ziegenfuss T, et al. Acute supplementation with alpha-glycerylphosphorylcholine augments growth hormone response to, and peak force production during, resistance exercise. J Int Soc Sports Nutr. 2008.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Acetylcholine", "Choline", "Growth Hormone", "Rx in Europe"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  );
}
