import Link from "next/link";

export const metadata = {
  title: "Creatine — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Creatine supplement profile covering phosphocreatine mechanism, strength and muscle gains, cognitive benefits, and monohydrate gold standard.",
};

export default function CreatinePage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Creatine ⚡</h1>
        <span className="tag">Recovery &amp; Tissue Repair</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">Also Known As: Creatine monohydrate, creatine HCl, buffered creatine</p>
      <p className="text-sm text-[#0D7377] font-medium mb-8">The most researched performance supplement in history — and it works</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📋 Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Creatine is a naturally occurring compound synthesized in the body from the amino acids arginine, glycine, and methionine, and found in small amounts in red meat and fish. It is stored primarily in skeletal muscle as phosphocreatine — the rapid energy reserve that fuels high-intensity, short-duration efforts. Supplemental creatine is the most extensively researched sports supplement in existence, with over 500 published studies confirming its safety and efficacy. It increases muscle phosphocreatine stores by 20–40%, enhancing ATP regeneration during intense exercise. Beyond performance, creatine has a growing evidence base for cognitive function, bone health, and neuroprotection. It is safe, inexpensive, and effective — consistently ranked as the top evidence-based supplement by sports nutrition scientists worldwide.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">✨ Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "💪 Increased strength and power output — well established",
              "⚡ Faster ATP regeneration during intense exercise",
              "🏋️ Greater muscle mass gains from resistance training",
              "🔄 Faster recovery between sets and sessions",
              "🧠 Cognitive benefits — memory and processing speed",
              "🦴 Bone density support",
              "🛡️ Neuroprotective effects in aging research",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Phosphocreatine Resynthesis — Creatine is stored as phosphocreatine in muscle cells. During high-intensity exercise, phosphocreatine donates its phosphate group to ADP to regenerate ATP — the cell's primary energy currency. Supplementation increases phosphocreatine stores by 20–40%, extending the duration of maximal effort before fatigue.",
              "Cell Volumization — Creatine draws water into muscle cells, increasing cell volume. This cell swelling is a signal for protein synthesis and muscle growth, contributing to the well-established hypertrophic effects of creatine supplementation.",
              "Protein Synthesis Enhancement — Creatine upregulates satellite cell activity and myogenic transcription factors, directly supporting muscle protein synthesis and repair beyond its energy storage role.",
              "Cognitive Energy Support — The brain relies heavily on phosphocreatine for rapid energy demands. Creatine supplementation increases brain phosphocreatine levels, supporting cognitive performance particularly in tasks requiring rapid processing and working memory — effects most pronounced in sleep-deprived or vegetarian/vegan individuals.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">🔬 What the Research Shows</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Strength and power improvements are among the most replicated findings in sports science — meta-analyses consistently show 5–15% improvements in maximum strength and 10–20% improvements in high-intensity exercise performance. Muscle mass gains are significantly greater with creatine than placebo when combined with resistance training — an average of 1–2 kg additional lean mass over 4–12 weeks. A 2022 meta-analysis of 10 RCTs found creatine significantly improved memory performance, particularly in older adults and vegetarians. Long-term safety has been confirmed in studies lasting up to 5 years with no adverse effects on kidney or liver function in healthy individuals.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">💊 How to Use</h2>
          <ul className="space-y-1">
            {[
              "💊 Standard dose: 3–5g daily — no loading phase required",
              "🚀 Loading protocol (optional): 20g daily for 5 days to saturate muscles faster, then 3–5g maintenance",
              "⏱️ Timing: Timing is flexible — post-workout with carbohydrates and protein may marginally improve uptake",
              "💧 Hydration: Drink plenty of water — creatine draws water into muscles",
              "🏆 Form: Creatine monohydrate is the gold standard — most researched, cheapest, most effective",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚠️ Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Exceptionally safe — one of the best-documented safety profiles of any supplement. The only common side effect is mild water retention (1–2 kg in first week), which reflects increased muscle hydration rather than fat gain. Creatine does NOT cause kidney damage in healthy individuals — this myth has been thoroughly debunked by decades of research. May cause GI discomfort at high doses during loading — splitting into smaller doses resolves this.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📚 References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Lanhers C, et al. Creatine supplementation and lower limb strength performance: a systematic review and meta-analysis. Sports Med. 2015.",
              "Rawson ES, Venezia AC. Use of creatine in the elderly and evidence for effects on cognitive function in young and old. Amino Acids. 2011.",
              "Antonio J, Ciccone V. The effects of pre versus post workout supplementation of creatine monohydrate. J Int Soc Sports Nutr. 2013.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Performance", "Strength", "Cognitive", "Gold Standard"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  );
}
