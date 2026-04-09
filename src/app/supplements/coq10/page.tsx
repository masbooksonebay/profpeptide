import Link from "next/link";

export const metadata = {
  title: "CoQ10 — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "CoQ10 supplement profile covering mitochondrial electron transport, heart failure research, statin myopathy support, and ubiquinol vs ubiquinone.",
};

export default function CoQ10Page() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">CoQ10</h1>
        <span className="tag">Longevity</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Also Known As: Coenzyme Q10, ubiquinol, ubiquinone, CoQ, mitoquinol</p>
      <p className="text-sm text-[#0891b2] font-medium mb-8">The mitochondrial spark plug that every cell in your body depends on</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Coenzyme Q10 (CoQ10) is a fat-soluble, vitamin-like compound found naturally in virtually every cell of the human body — hence its other name, ubiquinone (from &quot;ubiquitous&quot;). It plays two critical and irreplaceable roles: it is an essential component of the mitochondrial electron transport chain (the core energy production machinery), and it is one of the most important fat-soluble antioxidants in cell membranes. CoQ10 exists in two forms — ubiquinone (the oxidized form) and ubiquinol (the reduced, active antioxidant form). The body can convert between these forms, but this conversion efficiency declines with age. CoQ10 levels decline significantly with aging and are further depleted by statin medications — the most prescribed class of drugs in the world — making supplementation relevant for a large proportion of older adults and statin users. CoQ10 is particularly concentrated in high-energy tissues including the heart, liver, and skeletal muscle, reflecting its central importance in energy metabolism.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {["Essential for mitochondrial ATP production in every cell","Powerful fat-soluble antioxidant protecting cell membranes","Supports heart function — particularly relevant in heart failure research","Reduces statin-induced muscle pain (myopathy)","Replenishes age-related CoQ10 decline","Reduces oxidative stress and inflammation","Supports exercise performance and recovery"].map((b) => (<p key={b} className="text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-[#1e293b] rounded-lg px-3 py-2">{b}</p>))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Electron Transport Chain — CoQ10 is an essential mobile electron carrier in the mitochondrial inner membrane. It shuttles electrons between Complex I and Complex II to Complex III — a critical step in the electron transport chain that generates the proton gradient used to synthesize ATP. Without adequate CoQ10, mitochondrial energy production is impaired.","Antioxidant Protection — In its reduced form (ubiquinol), CoQ10 is a potent fat-soluble antioxidant that protects cell membranes, mitochondrial membranes, and circulating LDL cholesterol from oxidative damage. It also regenerates other antioxidants including vitamins C and E.","Statin-CoQ10 Interaction — Statins inhibit HMG-CoA reductase — the enzyme that produces cholesterol. CoQ10 is synthesized through the same mevalonate pathway, so statin use reduces endogenous CoQ10 production. This depletion is thought to contribute to statin-induced myopathy (muscle pain and weakness) — the most common reason patients discontinue statin therapy.","Cardiovascular Support — The heart has the highest CoQ10 concentration of any organ due to its extraordinary energy demands. Multiple clinical trials show CoQ10 supplementation improves cardiac output, reduces hospitalizations, and improves quality of life in heart failure patients."].map((item, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What the Research Shows</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Heart failure research is the strongest evidence area. The Q-SYMBIO trial — a multicenter RCT — found CoQ10 (300mg daily for 2 years) significantly reduced major adverse cardiovascular events and cardiovascular mortality in heart failure patients. The KiSel-10 study found CoQ10 combined with selenium reduced cardiovascular mortality by 54% in elderly subjects over 4 years. Statin myopathy research shows mixed results — some trials show significant muscle pain reduction while others show no effect — but clinical experience broadly supports CoQ10 for statin users with muscle symptoms. Exercise research shows CoQ10 supplementation reduces oxidative stress markers and improves recovery. Fertility research shows CoQ10 improves sperm motility and egg quality in older reproductive-age adults.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How to Use</h2>
          <ul className="space-y-1">
            {["Typical dose: 100–300mg daily for general health; 300–600mg for heart failure support or statin myopathy","Form: Ubiquinol is better absorbed and more bioavailable than ubiquinone — particularly important for older adults and those over 40 whose conversion efficiency declines","Take with fat: CoQ10 is fat-soluble — take with the largest meal of the day for best absorption","Statin users: 100–200mg daily to replenish statin-depleted CoQ10","Timing: With meals containing fat — divided doses may improve absorption"].map((item, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{item}</li>))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Excellent safety profile — one of the best-tolerated supplements with decades of clinical use. Most common side effects are mild GI symptoms — nausea, stomach upset — particularly on empty stomach. May mildly reduce blood pressure — relevant for those on antihypertensive medications. May interact with warfarin (blood thinner) — monitor INR if combining. Generally considered very safe for long-term use. No established upper tolerable limit due to low toxicity.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Related Supplements</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300"><Link href="/supplements/nmn" className="text-[#0891b2] hover:underline">NMN</Link> | <Link href="/supplements/resveratrol" className="text-[#0891b2] hover:underline">Resveratrol</Link> | <Link href="/supplements/quercetin" className="text-[#0891b2] hover:underline">Quercetin</Link> | <Link href="/supplements/spermidine" className="text-[#0891b2] hover:underline">Spermidine</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Mortensen SA, et al. The effect of coenzyme Q10 on morbidity and mortality in chronic heart failure: results from Q-SYMBIO. JACC Heart Fail. 2014.","Alehagen U, et al. Cardiovascular mortality and N-terminal-proBNP reduced after combined selenium and coenzyme Q10 supplementation. Int J Cardiol. 2013."].map((ref, i) => (<li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{ref}</li>))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Mitochondria", "Heart Failure", "Statin Support", "Ubiquinol"].map((tag) => (<span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=CoQ10+ubiquinol&tag=profpeptide-20"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm inline-block"
        >
          Search on Amazon &rarr;
        </a>
        <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">As an Amazon Associate, Prof. Peptide earns from qualifying purchases.</p>
      </div>
    </div>
  );
}
