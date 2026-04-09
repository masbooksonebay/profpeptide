import Link from "next/link";

export const metadata = {
  title: "Beta-Alanine — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Beta-alanine supplement profile covering carnosine synthesis, pH buffering, fatigue delay in 1-4 minute exercise, and paraesthesia management.",
};

export default function BetaAlaninePage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Beta-Alanine</h1>
        <span className="tag">Performance &amp; Energy</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">Also Known As: CarnoSyn, beta-alanine anhydrous, BA</p>
      <p className="text-sm text-[#0D7377] font-medium mb-8">The tingling amino acid that delays muscle fatigue in the 1–4 minute zone</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📋 Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Beta-alanine is a non-essential amino acid that is the rate-limiting precursor to carnosine synthesis in muscle tissue. Carnosine is a dipeptide (beta-alanine + histidine) that functions as an intramuscular pH buffer — neutralizing the hydrogen ions that accumulate during high-intensity exercise and cause the burning sensation of muscle fatigue. By supplementing beta-alanine, you increase muscle carnosine levels by 40–80% over 4–12 weeks, extending the time before muscular fatigue limits performance. Beta-alanine is most effective for exercise in the 1–4 minute duration range — the energy systems and fatigue mechanisms where carnosine buffering is most relevant. It is less effective for strength/power work under 60 seconds or endurance exercise over 10 minutes. It is well-established, evidence-based, and consistently supported by meta-analyses.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">⚡ Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Increases muscle carnosine by 40–80% over 4–12 weeks",
              "Delays fatigue in high-intensity exercise lasting 1–4 minutes",
              "Improves performance in repeated sprint activities",
              "Reduces acidosis-related fatigue and \"the burn\"",
              "Supports performance in sports with mixed energy demands",
              "Enhanced effects when combined with creatine",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Carnosine Synthesis — Beta-alanine combines with histidine in muscle cells to form carnosine. Histidine is abundant in the body — beta-alanine is the rate-limiting factor, meaning supplemental beta-alanine directly drives increased carnosine production.",
              "pH Buffering — During high-intensity exercise, metabolic processes produce hydrogen ions that lower intramuscular pH (increase acidity). This acidosis impairs muscle contractile function and contributes to fatigue. Carnosine acts as a buffer — accepting hydrogen ions and preventing the pH drop that causes fatigue.",
              "Calcium Sensitivity — Carnosine also enhances calcium sensitivity of the contractile proteins (actin and myosin), which may improve muscle contractile efficiency independent of its buffering role.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">🔬 What the Research Shows</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Beta-alanine has a strong meta-analytic evidence base. A comprehensive meta-analysis by Hobson et al. (2012) of 15 RCTs found beta-alanine significantly improved exercise capacity, particularly for activities lasting 1–4 minutes. A 2016 meta-analysis confirmed significant improvements in physical performance with 4 weeks of supplementation. Research specifically shows benefits in rowing, cycling time trials, swimming, combat sports, team sports with repeated sprints, and CrossFit-style workouts. The combination of beta-alanine and creatine shows additive benefits — creatine supports the phosphocreatine energy system (0–10 seconds) while beta-alanine supports the glycolytic system (10 seconds to 4 minutes).
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">💊 How to Use</h2>
          <ul className="space-y-1">
            {[
              "Typical dose: 3.2–6.4g daily in divided doses (1.6g doses minimize paraesthesia)",
              "Loading: Benefits accumulate with consistent daily use over 4–12 weeks — not an acute effect",
              "Timing: Timing is not critical — take with meals to reduce paraesthesia",
              "Best for: Sports with repeated high-intensity efforts lasting 1–4 minutes each",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚠️ Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Very safe with one notable and common side effect — paraesthesia (tingling/flushing sensation), typically in the face, neck, hands, and ears. This is a harmless pharmacological effect of beta-alanine on sensory neurons, not an allergic reaction. It is dose-dependent — splitting doses to 1.6g per serving significantly reduces or eliminates it. Sustained-release formulations minimize paraesthesia. No serious adverse effects reported in research.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🔗 Related Supplements</h2>
          <p className="text-sm text-gray-600"><Link href="/supplements/creatine" className="text-[#0D7377] hover:underline">Creatine</Link> | <Link href="/supplements/bcaas" className="text-[#0D7377] hover:underline">BCAAs</Link> | <Link href="/supplements/electrolyte-powders" className="text-[#0D7377] hover:underline">Electrolyte Powders</Link> | <Link href="/supplements/caffeine-l-theanine" className="text-[#0D7377] hover:underline">Caffeine + L-Theanine</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📚 References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Hobson RM, et al. Effects of beta-alanine supplementation on exercise performance: a meta-analysis. Amino Acids. 2012.",
              "Saunders B, et al. Beta-alanine supplementation to improve exercise capacity and performance: a systematic review and meta-analysis. Br J Sports Med. 2017.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["pH Buffer", "Carnosine", "1–4 Min Zone", "Evidence-Based"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 border border-gray-100 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=beta+alanine&tag=profpeptide-20"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm inline-block"
        >
          Search on Amazon &rarr;
        </a>
        <p className="text-xs text-gray-400 mt-3">As an Amazon Associate, Prof. Peptide earns from qualifying purchases.</p>
      </div>
    </div>
  );
}
