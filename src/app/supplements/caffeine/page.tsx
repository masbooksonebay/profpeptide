import Link from "next/link";

export const metadata = {
  title: "Caffeine Supplement Profile | Prof. Peptide",
  description:
    "Caffeine supplement profile — adenosine antagonism, thermogenesis, fat oxidation, physical and cognitive performance, dosing, and references.",
};

export default function CaffeinePage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Caffeine ☕</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">Also Known As: 1,3,7-trimethylxanthine, anhydrous caffeine, caffeine anhydrous</p>
      <p className="text-sm text-[#0D7377] font-medium mb-8">The world&apos;s most widely used psychoactive substance — and most research-backed</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📋 Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Caffeine is a naturally occurring methylxanthine alkaloid found in coffee, tea, cacao, and many other plants. It is the most widely consumed psychoactive substance in the world — with over 80% of adults consuming it daily — and also one of the most extensively researched. Unlike many supplements, caffeine has decades of high-quality human research across multiple domains: cognitive performance, physical performance, fat oxidation, thermogenesis, and metabolic rate. It is classified as GRAS (Generally Recognized As Safe) by the FDA. Caffeine&apos;s metabolic effects are particularly well established — it increases resting metabolic rate by 3–11%, significantly enhances fat oxidation (especially when taken before exercise), and is a core component of virtually every evidence-based fat loss formulation. It also has one of the strongest safety profiles of any supplement when used at moderate doses.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">✨ Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "⚡ Immediate energy and alertness boost",
              "🔥 Increased metabolic rate and fat oxidation",
              "🏃 Enhanced physical performance — well established",
              "🧠 Improved focus, reaction time, and cognition",
              "☕ Synergistic fat burning with EGCG from green tea",
              "📉 Appetite suppression",
              "💪 Muscle endurance and strength enhancement",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Adenosine Receptor Antagonism — Caffeine's primary mechanism is competitive antagonism at adenosine receptors in the brain. Adenosine is an inhibitory neurotransmitter that accumulates during wakefulness and promotes sleepiness. By blocking adenosine receptors, caffeine prevents this inhibitory signal, resulting in increased neural activity, alertness, and reduced perceived fatigue.",
              "Norepinephrine and Dopamine Release — Adenosine blockade indirectly increases dopamine and norepinephrine release, enhancing mood, motivation, focus, and the \"drive\" feeling associated with caffeine.",
              "Thermogenesis and Metabolic Rate — Caffeine increases thermogenesis through norepinephrine-mediated stimulation of brown adipose tissue and increases resting metabolic rate by 3–11% dose-dependently. This thermogenic effect is preserved even in habitual users though tolerance develops to some effects.",
              "Fat Oxidation Enhancement — Caffeine increases fat oxidation by 10–29% during moderate-intensity exercise by increasing hormone-sensitive lipase activity and shifting fuel utilization toward fat. Combined with EGCG from green tea, the fat oxidation effect is amplified synergistically.",
              "Phosphodiesterase Inhibition — Caffeine inhibits phosphodiesterase, the enzyme that breaks down cAMP — increasing intracellular cAMP and amplifying adrenergic signaling.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">🔬 What the Research Shows</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Performance research is among the most robust of any supplement. Meta-analyses confirm caffeine improves endurance performance by 2–4%, strength by 1–3%, and power output across multiple exercise modalities. Cognitive research shows improvements in alertness, reaction time, memory consolidation, and sustained attention. Fat oxidation meta-analyses confirm significant increases in fat burning during exercise. A dose of 3–6mg/kg body weight is considered the optimal performance-enhancing range. Long-term coffee consumption is consistently associated with reduced risk of type 2 diabetes, Parkinson&apos;s disease, liver disease, and all-cause mortality in epidemiological research.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">💊 How to Use</h2>
          <ul className="space-y-1">
            {[
              "☕ Typical dose: 100–400mg daily; 3–6mg/kg before exercise for performance",
              "⏱️ Timing: 30–60 minutes before exercise or when cognitive performance is needed",
              "💡 Tolerance: Tolerance to some effects develops within days of regular use — cycling (5 days on, 2 days off) preserves sensitivity",
              "🌙 Sleep: Avoid within 6 hours of bedtime — caffeine half-life is 5–6 hours",
              "📊 Sources: Coffee (~95mg per cup), tea (~50mg), energy drinks (80–300mg), anhydrous tablets (200mg)",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚠️ Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Very safe at moderate doses (up to 400mg/day for healthy adults — FDA guidance). Dose-dependent side effects at higher doses: anxiety, jitteriness, increased heart rate, insomnia, GI upset. Habitual use creates physical dependence — withdrawal symptoms include headache and fatigue (typically resolve within 2–3 days). Not recommended in high doses during pregnancy (limit to 200mg/day). May interact with certain medications. High doses (above 600mg) not recommended.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📚 References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Goldstein ER, et al. International society of sports nutrition position stand: caffeine and performance. J Int Soc Sports Nutr. 2010.",
              "Astrup A, et al. Caffeine: A double-blind, placebo-controlled study of its thermogenic, metabolic, and cardiovascular effects in healthy volunteers. Am J Clin Nutr. 1990.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Performance", "Thermogenesis", "Fat Oxidation", "GRAS"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  );
}
