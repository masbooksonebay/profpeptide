import Link from "next/link";

export const metadata = {
  title: "Spermidine — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Spermidine supplement profile covering autophagy induction, Bruneck mortality study, cognitive function, and fasting mimicry mechanism.",
};

export default function SpermidinePage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Spermidine</h1>
        <span className="tag">Longevity</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">Also Known As: Spermidine trihydrochloride, SPD, polyamine</p>
      <p className="text-sm text-[#0D7377] font-medium mb-8">The autophagy activator found in wheat germ that mimics the effects of fasting</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📋 Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">Spermidine is a naturally occurring polyamine — a small positively charged molecule involved in fundamental cellular processes including DNA stabilization, gene expression regulation, and protein synthesis. It is found in virtually all living cells and is particularly concentrated in foods including wheat germ, soybeans, aged cheese, mushrooms, and peas. Spermidine&apos;s central role in longevity research stems from its potent ability to induce autophagy — the cellular self-cleaning process that removes damaged proteins, dysfunctional organelles, and cellular debris that accumulate with aging. Autophagy is one of the most important cellular maintenance mechanisms and one of the key pathways through which caloric restriction and fasting extend lifespan in model organisms. Spermidine activates autophagy through mechanisms overlapping with fasting — but without requiring caloric restriction. Epidemiological data from a large Austrian cohort study found higher dietary spermidine intake was associated with significantly reduced all-cause mortality, cardiovascular mortality, and cancer mortality — providing compelling population-level evidence for its longevity relevance.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🌿 Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {["Potent autophagy inducer — the cellular self-cleaning process","Associated with reduced all-cause and cardiovascular mortality in population studies","Cardioprotective — improves cardiac function in aging research","Supports cognitive function and may reduce dementia risk","Anti-inflammatory through autophagy-mediated NLRP3 inflammasome regulation","Hair growth support — autophagy is important in hair follicle cycling","Mimics key longevity effects of fasting and caloric restriction"].map((b) => (<p key={b} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{b}</p>))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Autophagy Induction — Spermidine induces autophagy through multiple mechanisms including inhibition of EP300 (a histone acetyltransferase) which leads to hypoacetylation of autophagy-related proteins and activation of the autophagy machinery. It also inhibits mTORC1 — the primary autophagy suppressor — mimicking the fasting state. Activated autophagy clears misfolded proteins, damaged mitochondria, and cellular debris — rejuvenating cellular function.","Epigenetic Effects — Through EP300 inhibition and resulting histone hypoacetylation, spermidine produces epigenetic changes that activate autophagy genes and stress response pathways — effects that parallel those seen with caloric restriction.","Cardioprotection — Spermidine improves cardiac function in aged animal models through autophagy-mediated clearance of damaged cardiac proteins and organelles, and through anti-inflammatory effects that reduce cardiac fibrosis.","Anti-inflammatory Activity — Autophagy activation by spermidine reduces NLRP3 inflammasome activity — a key driver of age-related sterile inflammation — and reduces production of pro-inflammatory cytokines."].map((item, i) => (<li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">🔬 What the Research Shows</h2>
          <p className="text-sm text-gray-600 leading-relaxed">The landmark Bruneck Study cohort analysis found that higher dietary spermidine intake was associated with a significant reduction in overall mortality risk — with the highest intake group showing dramatically improved survival outcomes over 20 years of follow-up. A 2021 randomized controlled trial found spermidine supplementation improved memory performance in older adults with subjective cognitive decline over 3 months. Animal research consistently shows spermidine extends lifespan in yeast, flies, worms, and mice — making it one of the few compounds to show lifespan extension across multiple model organisms. Cardiac research shows spermidine improves heart function in aged mice. Hair growth research shows topical and oral spermidine supports hair follicle cycling.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">💊 How to Use</h2>
          <ul className="space-y-1">
            {["Typical dose: 1–3mg daily of concentrated spermidine (often from wheat germ extract)","Dietary sources: Wheat germ is the richest source (up to 243mg/kg) — aged cheese, soybeans, mushrooms, and peas are also good sources","Timing: Can be taken any time — with or without food","Fasting synergy: Spermidine and intermittent fasting activate overlapping autophagy pathways — combining both may produce additive effects","Note: Most commercial spermidine supplements are low-dose wheat germ extracts — verify spermidine content per serving"].map((item, i) => (<li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚠️ Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 leading-relaxed">Well tolerated in human studies to date. No serious adverse effects reported in clinical trials using supplemental doses. Mild GI discomfort has been reported. As spermidine activates autophagy — a process involved in both tumor suppression and, in some contexts, tumor survival — people with active cancer should consult an oncologist before using autophagy-activating supplements. Long-term safety data in humans at supplemental doses is still accumulating.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🔗 Related Supplements</h2>
          <p className="text-sm text-gray-600"><Link href="/supplements/nmn" className="text-[#0D7377] hover:underline">NMN</Link> | <Link href="/supplements/quercetin" className="text-[#0D7377] hover:underline">Quercetin</Link> | <Link href="/supplements/resveratrol" className="text-[#0D7377] hover:underline">Resveratrol</Link> | <Link href="/supplements/coq10" className="text-[#0D7377] hover:underline">CoQ10</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📚 References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Madeo F, et al. Spermidine: a physiological autophagy inducer acting as an anti-aging vitamin in humans? Autophagy. 2019.","Wirth M, et al. The effect of spermidine on memory performance in older adults at risk for dementia: A randomized controlled trial. Cortex. 2021."].map((ref, i) => (<li key={i} className="text-sm text-gray-600 leading-relaxed">{ref}</li>))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Autophagy", "Fasting Mimetic", "Bruneck Study", "Polyamine"].map((tag) => (<span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 border border-gray-100 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=spermidine+supplement&tag=profpeptide-20"
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
