import Link from "next/link";

export const metadata = {
  title: "Vitamin D3 Supplement Profile | Prof. Peptide",
  description:
    "Vitamin D3 supplement profile — nuclear receptor activation, immune modulation, respiratory infection prevention, bone health, dosing, and references.",
};

export default function VitaminD3Page() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Vitamin D3</h1>
        <span className="tag">Gut Health &amp; Immunity</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">Also Known As: Cholecalciferol, the sunshine vitamin, calciferol, 25-hydroxyvitamin D</p>
      <p className="text-sm text-[#0D7377] font-medium mb-8">The hormone-like vitamin that controls over 200 genes — and most people don&apos;t have enough</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📋 Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">Vitamin D3 (cholecalciferol) is a fat-soluble vitamin that functions more like a hormone than a traditional vitamin — it binds to nuclear vitamin D receptors (VDR) found in virtually every cell of the body, regulating the expression of over 200 genes involved in immune function, calcium metabolism, inflammation, cell growth, and cardiovascular health. The body synthesizes vitamin D3 from cholesterol in the skin upon UVB sun exposure, but modern indoor lifestyles, sun avoidance, sunscreen use, northern latitudes, and darker skin pigmentation mean that vitamin D deficiency is one of the most common nutrient deficiencies in the world — affecting an estimated 40% of adults in the United States and up to 80% in some populations. Vitamin D deficiency is associated with increased risk of respiratory infections, autoimmune disease, cardiovascular disease, depression, osteoporosis, and certain cancers. The immune and anti-inflammatory effects of vitamin D are particularly relevant for gut health — VDR expression is high in intestinal epithelial cells and immune cells throughout the gut.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🛡️ Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {["Regulates over 200 genes via vitamin D receptor activation","Critical for immune system function and infection resistance","Reduces risk of respiratory tract infections","Supports calcium absorption and bone density","Anti-inflammatory effects throughout the body","Mood and depression support","Reduces risk of autoimmune conditions with adequate levels"].map((b) => (<p key={b} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{b}</p>))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Nuclear Receptor Activation — Vitamin D3 is converted to its active form (1,25-dihydroxyvitamin D3, calcitriol) in the kidneys. Calcitriol binds to nuclear vitamin D receptors (VDR) in target cells, acting as a transcription factor that regulates expression of hundreds of genes involved in immune function, calcium metabolism, and cell regulation.","Immune Modulation — VDR is expressed on virtually all immune cells — T cells, B cells, macrophages, dendritic cells. Vitamin D promotes tolerance and reduces excessive inflammatory responses while enhancing innate immune defenses including antimicrobial peptide production (cathelicidins and defensins).","Calcium Absorption — Vitamin D is essential for active calcium absorption in the small intestine — without adequate vitamin D, only 10–15% of dietary calcium is absorbed vs. 30–40% with adequate levels. This makes vitamin D critical for bone health alongside calcium.","Gut Barrier Support — VDR signaling in intestinal epithelial cells supports tight junction integrity and gut barrier function — VDR knockout mice show increased intestinal permeability and susceptibility to colitis."].map((item, i) => (<li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">🔬 What the Research Shows</h2>
          <p className="text-sm text-gray-600 leading-relaxed">A 2017 meta-analysis of 25 RCTs involving 11,321 participants found vitamin D supplementation significantly reduced risk of acute respiratory tract infections — with the greatest benefit in those who were deficient at baseline. Bone health evidence is robust — vitamin D combined with calcium reduces fracture risk in elderly populations. Multiple large observational studies link low vitamin D levels to increased risk of depression, autoimmune disease, cardiovascular disease, and colorectal cancer. A 2020 analysis during the COVID-19 pandemic found consistent associations between lower vitamin D status and worse outcomes. Autoimmune research shows vitamin D supplementation reduces relapse rates in multiple sclerosis.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">💊 How to Use</h2>
          <ul className="space-y-1">
            {["Typical maintenance dose: 1000–2000 IU daily for healthy adults","Deficiency correction: 4000–10,000 IU daily under healthcare provider guidance","Take with fat: Vitamin D3 is fat-soluble — take with the largest meal of the day for best absorption","D3 vs D2: Always choose D3 (cholecalciferol) — it is 87% more effective at raising serum levels than D2 (ergocalciferol)","Pair with K2: Vitamin K2 directs calcium to bones rather than arteries — important when taking higher vitamin D doses","Test first: Blood testing (25-OH vitamin D) before and after supplementation allows personalized dosing"].map((item, i) => (<li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚠️ Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 leading-relaxed">Very safe at recommended doses. Toxicity (hypercalcemia) can occur at very high doses (typically above 10,000 IU daily for extended periods) — not a concern at standard supplemental doses. Symptoms of toxicity include nausea, weakness, frequent urination, and kidney problems. People with sarcoidosis, hyperparathyroidism, or certain lymphomas should consult a physician before supplementing due to altered vitamin D metabolism.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🔗 Related Supplements</h2>
          <p className="text-sm text-gray-600"><Link href="/supplements/magnesium" className="text-[#0D7377] hover:underline">Magnesium</Link> | <Link href="/supplements/zinc" className="text-[#0D7377] hover:underline">Zinc</Link> | <Link href="/supplements/fish-oil" className="text-[#0D7377] hover:underline">Fish Oil</Link> | <Link href="/supplements/probiotics" className="text-[#0D7377] hover:underline">Probiotics</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📚 References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Martineau AR, et al. Vitamin D supplementation to prevent acute respiratory tract infections: systematic review and meta-analysis of individual participant data. BMJ. 2017.","Holick MF. Vitamin D deficiency. N Engl J Med. 2007."].map((ref, i) => (<li key={i} className="text-sm text-gray-600 leading-relaxed">{ref}</li>))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Sunshine Vitamin", "Immune", "Bone Health", "40% Deficient"].map((tag) => (<span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>))}
      </div>
    </div>
  );
}
