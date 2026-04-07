import Link from "next/link";

export const metadata = {
  title: "Lion's Mane Supplement Profile | Prof. Peptide",
  description:
    "Lion's Mane supplement profile — NGF and BDNF stimulation, cognitive improvement, neurogenesis, clinical trial data, dosing, and references.",
};

export default function LionsManePage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Lion&apos;s Mane</h1>
        <span className="tag">Cognitive &amp; Nootropic</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">Also Known As: Hericium erinaceus, yamabushitake, monkey head mushroom</p>
      <p className="text-sm text-[#0D7377] font-medium mb-8">The mushroom that grows your brain — literally</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📋 Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lion&apos;s Mane (Hericium erinaceus) is a medicinal mushroom native to North America, Europe, and Asia, characterized by its distinctive white cascading spines resembling a lion&apos;s mane. It is one of the most scientifically interesting natural compounds in the nootropic space — unique in its ability to stimulate the production of nerve growth factor (NGF) and brain-derived neurotrophic factor (BDNF), proteins that support the growth, maintenance, and survival of neurons. This neurogenic mechanism is genuinely novel — most nootropics modulate existing neurotransmitter systems, while Lion&apos;s Mane may actually promote new neuronal growth and synaptic connections. Its bioactive compounds — hericenones (from the fruiting body) and erinacines (from the mycelium) — cross the blood-brain barrier and stimulate NGF synthesis. Lion&apos;s Mane has been used in traditional Chinese and Japanese medicine for centuries and has an expanding evidence base from animal studies and several human clinical trials.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🧠 Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Stimulates nerve growth factor and BDNF production",
              "Supports cognitive function and memory in older adults",
              "May reduce symptoms of mild cognitive impairment",
              "Anxiolytic and antidepressant effects in clinical studies",
              "Neuroprotective — may support recovery from nerve injury",
              "Immune system modulation via beta-glucan content",
              "Gut health support through prebiotic effects",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "NGF and BDNF Stimulation — Lion's Mane's most significant mechanism involves hericenones and erinacines stimulating the synthesis of nerve growth factor (NGF) and brain-derived neurotrophic factor (BDNF) in the brain. NGF is essential for the growth, maintenance, and survival of neurons — particularly cholinergic neurons critical for memory and learning. Increased NGF promotes neuroplasticity and may support formation of new synaptic connections.",
              "Neurogenesis Support — By promoting NGF and BDNF, Lion's Mane may support neurogenesis — the formation of new neurons — in regions like the hippocampus, which is critical for memory formation and is disproportionately affected in Alzheimer's disease.",
              "Anti-inflammatory and Antioxidant Effects — Lion's Mane polysaccharides reduce neuroinflammation and oxidative stress in the brain — both key contributors to cognitive decline and neurodegenerative disease.",
              "Mood Regulation — Lion's Mane appears to reduce anxiety and depression-like behaviors in animal models, with proposed mechanisms including reduced neuroinflammation, increased BDNF, and modulation of the HPA stress axis.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">🔬 What the Research Shows</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            A landmark 2009 double-blind RCT by Mori et al. in 30 Japanese adults with mild cognitive impairment found Lion&apos;s Mane supplementation (250mg 3x daily for 16 weeks) produced significant improvements in cognitive function scores vs. placebo — though scores declined after supplementation stopped, suggesting ongoing use is required. A 2023 RCT in 41 healthy adults aged 18–45 found a single dose of Lion&apos;s Mane extract significantly improved processing speed and working memory. A 2010 study found significant reductions in anxiety and depression scores in women who consumed Lion&apos;s Mane cookies vs. placebo over 4 weeks. Animal studies show consistent NGF upregulation, neurogenesis promotion, and neuroprotection in models of Alzheimer&apos;s disease and nerve injury.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">💊 How to Use</h2>
          <ul className="space-y-1">
            {[
              "Typical dose: 500–3000mg of fruiting body extract daily; look for products standardized for beta-glucans",
              "Fruiting body vs. mycelium: Fruiting body extracts contain hericenones; mycelium contains erinacines — both are bioactive but extraction method matters significantly",
              "Timing: Daily consistent use — benefits accumulate over weeks",
              "Duration: Minimum 4–8 weeks to assess cognitive effects",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚠️ Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Excellent safety profile across clinical studies. Rare reports of skin rash or itching in people with mushroom allergies. Mild GI discomfort at high doses in some individuals. No serious adverse effects documented in human research. People with mushroom allergies should exercise caution.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🔗 Related Supplements</h2>
          <p className="text-sm text-gray-600">Bacopa Monnieri | Alpha GPC | L-Theanine | Phosphatidylserine</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📚 References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Mori K, et al. Improving effects of the mushroom Yamabushitake on mild cognitive impairment: a double-blind placebo-controlled clinical trial. Phytother Res. 2009.",
              "Docherty S, et al. The Acute and Chronic Effects of Lion's Mane Mushroom Supplementation on Cognitive Function, Stress and Mood in Young Adults: A Double-Blind, Parallel Groups, Pilot Study. Nutrients. 2023.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["NGF", "Neurogenesis", "Memory", "Mushroom"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  );
}
