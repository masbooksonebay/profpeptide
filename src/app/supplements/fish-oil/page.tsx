import Link from "next/link";

export const metadata = {
  title: "Fish Oil Supplement Profile | Prof. Peptide",
  description:
    "Fish oil (omega-3) supplement profile — EPA and DHA mechanisms, triglyceride reduction, cardiovascular protection, anti-inflammatory effects, dosing, and references.",
};

export default function FishOilPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Fish Oil</h1>
        <span className="tag">Gut Health &amp; Immunity</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">Also Known As: Omega-3, EPA, DHA, omega-3 fatty acids, marine omega-3</p>
      <p className="text-sm text-[#0D7377] font-medium mb-8">The essential fats your brain, heart, and immune system run on</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📋 Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">Fish oil is a rich source of long-chain omega-3 polyunsaturated fatty acids — primarily eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA). These two fatty acids are classified as essential because humans cannot synthesize adequate amounts and must obtain them from diet or supplementation. EPA and DHA are incorporated into cell membranes throughout the body — particularly in the brain, retina, heart, and immune cells — where they influence membrane fluidity, receptor function, and the production of signaling molecules called eicosanoids and resolvins. The Western diet is severely deficient in omega-3s relative to omega-6 fatty acids (found in vegetable oils and processed foods), with typical ratios of 15:1 to 20:1 (omega-6:omega-3) compared to the ancestral ratio of approximately 4:1. This imbalance drives chronic low-grade inflammation — the underlying mechanism of cardiovascular disease, metabolic syndrome, autoimmune conditions, and accelerated aging. Fish oil is one of the most researched supplements in existence with a profound evidence base across cardiovascular, neurological, inflammatory, and metabolic health.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🛡️ Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {["Reduces systemic inflammation via eicosanoid and resolvin production","Cardiovascular protection — reduces triglycerides significantly","Brain health — DHA is the dominant structural fat in the brain","Supports gut microbiome diversity and reduces gut inflammation","Reduces symptoms of inflammatory conditions","Improves insulin sensitivity and metabolic health","Eye health — DHA is essential for retinal function"].map((b) => (<p key={b} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{b}</p>))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Eicosanoid Production — EPA and DHA compete with arachidonic acid (an omega-6 fatty acid) for the enzymes that produce eicosanoids. While arachidonic acid-derived eicosanoids are pro-inflammatory, EPA-derived eicosanoids are anti-inflammatory or neutral. Increasing EPA relative to arachidonic acid shifts the balance toward reduced inflammation.","Resolvin and Protectin Synthesis — EPA and DHA are precursors to specialized pro-resolving mediators (SPMs) — resolvins, protectins, and maresins — that actively resolve inflammation and promote tissue healing. This is distinct from simply blocking inflammation (as NSAIDs do) — SPMs actively turn off inflammatory processes.","Membrane Fluidity — Omega-3 fatty acids incorporated into cell membranes increase their fluidity and improve the function of membrane-embedded receptors and transport proteins — affecting virtually every cell type including immune cells, neurons, and cardiomyocytes.","Triglyceride Reduction — EPA and DHA reduce hepatic triglyceride synthesis and increase triglyceride clearance — producing significant reductions in serum triglycerides at therapeutic doses (2–4g EPA+DHA daily). Prescription omega-3s (Vascepa, Lovaza) are approved by the FDA for hypertriglyceridemia."].map((item, i) => (<li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">🔬 What the Research Shows</h2>
          <p className="text-sm text-gray-600 leading-relaxed">Triglyceride reduction is the strongest and most consistent clinical finding — meta-analyses confirm 20–30% reductions in triglycerides at doses of 2–4g EPA+DHA daily. The REDUCE-IT trial found 4g daily of high-purity EPA (icosapentaenoic acid) significantly reduced major cardiovascular events by 25% in high-risk patients. Brain research shows DHA is the primary structural fat in neuronal membranes — higher omega-3 intake is associated with reduced risk of cognitive decline and depression. Anti-inflammatory evidence is broad — fish oil reduces CRP, IL-6, and TNF-alpha across multiple conditions. Gut microbiome research shows omega-3 supplementation increases microbiome diversity and reduces gut inflammation.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">💊 How to Use</h2>
          <ul className="space-y-1">
            {["General health: 1–2g combined EPA+DHA daily","Anti-inflammatory/therapeutic: 2–4g combined EPA+DHA daily","Triglyceride reduction: 2–4g EPA+DHA daily (prescription doses for severe hypertriglyceridemia)","Take with meals: Fat-soluble — take with a fatty meal for best absorption and to reduce fishy burps","Quality: Look for products with third-party purity testing for heavy metals and PCBs; enteric-coated capsules reduce fishy aftertaste","EPA vs DHA: EPA is more anti-inflammatory; DHA is more important for brain structure — both are beneficial"].map((item, i) => (<li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚠️ Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 leading-relaxed">Generally very safe. Most common side effect is fishy burps and GI discomfort — enteric-coated or high-quality products minimize this. At high doses (above 3g daily) may increase bleeding time — caution with anticoagulant medications. May slightly reduce blood pressure — relevant for those on blood pressure medications. Oxidized fish oil (rancid — detectable by strong fishy odor) may be harmful rather than beneficial — store properly and check freshness.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🔗 Related Supplements</h2>
          <p className="text-sm text-gray-600"><Link href="/supplements/vitamin-d3" className="text-[#0D7377] hover:underline">Vitamin D3</Link> | <Link href="/supplements/magnesium" className="text-[#0D7377] hover:underline">Magnesium</Link> | <Link href="/supplements/probiotics" className="text-[#0D7377] hover:underline">Probiotics</Link> | <Link href="/supplements/prebiotics" className="text-[#0D7377] hover:underline">Prebiotics</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📚 References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Bhatt DL, et al. Cardiovascular Risk Reduction with Icosapentaenoic Acid for Hypertriglyceridemia. N Engl J Med. 2019.","Calder PC. Omega-3 fatty acids and inflammatory processes: from molecules to man. Biochem Soc Trans. 2017."].map((ref, i) => (<li key={i} className="text-sm text-gray-600 leading-relaxed">{ref}</li>))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Omega-3", "Triglycerides", "Brain", "Anti-Inflammatory"].map((tag) => (<span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>))}
      </div>
    </div>
  );
}
