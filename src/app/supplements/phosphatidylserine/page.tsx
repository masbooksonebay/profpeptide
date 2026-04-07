import Link from "next/link";

export const metadata = {
  title: "Phosphatidylserine Supplement Profile | Prof. Peptide",
  description:
    "Phosphatidylserine supplement profile — neuronal membrane support, FDA qualified health claim, cortisol blunting, memory improvement, dosing, and references.",
};

export default function PhosphatidylserinePage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Phosphatidylserine</h1>
        <span className="tag">Cognitive &amp; Nootropic</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">Also Known As: PS, Sharp-PS, phosphatidyl serine</p>
      <p className="text-sm text-[#0D7377] font-medium mb-8">The FDA-qualified brain phospholipid that supports memory and cortisol control</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📋 Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Phosphatidylserine (PS) is a phospholipid — a fat-soluble molecule that forms a critical component of neuronal cell membranes. It is particularly concentrated in the brain, comprising approximately 15% of the total phospholipid content of neural tissue. PS supports the fluidity and integrity of neuronal membranes, facilitates neurotransmitter release, and plays a critical role in cell signaling — particularly apoptosis (programmed cell death) regulation. PS levels decline with age, correlating with reduced cognitive function and memory. Supplemental PS has been studied extensively for age-related cognitive decline, memory support, and athletic recovery — specifically for its ability to blunt cortisol release after intense exercise. It is notable for having received a qualified health claim from the FDA: &quot;Consumption of phosphatidylserine may reduce the risk of dementia and cognitive dysfunction in the elderly&quot; — a rare regulatory distinction for a dietary supplement.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🧠 Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "FDA qualified health claim for cognitive function and dementia risk reduction",
              "Improves memory, attention, and processing speed in older adults",
              "Reduces cortisol after intense exercise — supporting recovery",
              "Supports neuronal membrane integrity and fluidity",
              "Enhances neurotransmitter release (acetylcholine, dopamine)",
              "Reduces cognitive decline associated with aging",
              "Supports ADHD-related attention in children (research exists)",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Neuronal Membrane Integrity — PS is a structural component of neuronal cell membranes and the myelin sheath. It maintains membrane fluidity — essential for optimal membrane protein function, receptor activity, and signal transduction across neurons.",
              "Neurotransmitter Release — PS facilitates the release of acetylcholine, dopamine, norepinephrine, and serotonin at synaptic terminals by supporting the membrane fusion events required for vesicle exocytosis.",
              "Cortisol Blunting — PS inhibits hypothalamic-pituitary-adrenal (HPA) axis activation in response to physical stress, blunting the cortisol and ACTH response to intense exercise. This is one of the most well-documented ergogenic effects in the research.",
              "Cell Signaling and Apoptosis — PS plays a critical role in phospholipid-dependent signaling pathways and regulates programmed cell death — influencing neuronal survival and turnover.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">🔬 What the Research Shows</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Multiple clinical trials support PS for age-related cognitive decline. A landmark trial by Crook et al. found 300mg PS daily for 12 weeks significantly improved memory and learning in older adults with age-associated memory impairment. Three separate RCTs by Cenacchi et al. in 494 elderly patients found PS (300mg daily for 6 months) significantly improved cognitive function, memory, and behavioral symptoms. Exercise research shows PS supplementation significantly blunts post-exercise cortisol — a 2008 study found 600mg PS reduced cortisol by 20% following intensive cycling. A meta-analysis confirmed significant memory improvements in older adults with PS supplementation.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">💊 How to Use</h2>
          <ul className="space-y-1">
            {[
              "Cognitive support: 100–300mg daily — typically 100mg three times daily",
              "Exercise recovery and cortisol blunting: 400–800mg taken before intense training",
              "Timing: With meals — fat-soluble, absorption enhanced by dietary fat",
              "Duration: Benefits accumulate over 4–8 weeks of consistent use",
              "Source: Sunflower or soy-derived PS (bovine brain-derived PS is no longer used due to BSE concerns)",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚠️ Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Well tolerated at doses up to 300mg daily. Higher doses may cause insomnia and GI upset. May have blood-thinning effects — caution with anticoagulant medications. Some PS products are derived from soy — relevant for soy allergies. Sunflower-derived PS is available for those avoiding soy.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🔗 Related Supplements</h2>
          <p className="text-sm text-gray-600"><Link href="/supplements/alpha-gpc" className="text-[#0D7377] hover:underline">Alpha GPC</Link> | <Link href="/supplements/bacopa-monnieri" className="text-[#0D7377] hover:underline">Bacopa Monnieri</Link> | <Link href="/supplements/lions-mane" className="text-[#0D7377] hover:underline">Lion&apos;s Mane</Link> | <Link href="/supplements/fish-oil" className="text-[#0D7377] hover:underline">Omega-3 Fish Oil</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📚 References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Crook TH, et al. Effects of phosphatidylserine in age-associated memory impairment. Neurology. 1991.",
              "Starks MA, et al. The effects of phosphatidylserine on endocrine response to moderate intensity exercise. J Int Soc Sports Nutr. 2008.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Phospholipid", "Memory", "Cortisol", "FDA Qualified"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  );
}
