import Link from "next/link";

export const metadata = {
  title: "Ashwagandha Supplement Profile | Prof. Peptide",
  description:
    "Ashwagandha supplement profile — HPA axis modulation, cortisol reduction, testosterone increase, muscle strength, sleep quality, dosing, and references.",
};

export default function AshwagandhaPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Ashwagandha</h1>
        <span className="tag">Growth Hormone Support</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">Also Known As: Withania somnifera, Indian ginseng, winter cherry, KSM-66, Sensoril</p>
      <p className="text-sm text-[#0D7377] font-medium mb-8">The ancient adaptogen that reduces cortisol, raises testosterone, and builds resilience</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📋 Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Ashwagandha (Withania somnifera) is one of the most important herbs in Ayurvedic medicine — used for over 3,000 years as a rasayana (rejuvenating tonic) to promote physical and mental health, enhance vitality, and increase longevity. It is classified as an adaptogen — a natural compound that helps the body normalize its response to physical and psychological stress. Ashwagandha&apos;s primary bioactive compounds, withanolides, modulate the HPA (hypothalamic-pituitary-adrenal) axis to reduce cortisol, the primary stress hormone. This cortisol reduction has downstream effects on testosterone levels, muscle recovery, sleep quality, and body composition — because chronically elevated cortisol suppresses testosterone, impairs sleep, and promotes fat accumulation. It is one of the most extensively researched adaptogens, with over 50 human clinical trials supporting its effects on stress, cortisol, testosterone, strength, and sleep.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🌿 Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Significant cortisol reduction in chronically stressed individuals",
              "Increased testosterone and DHEA-S in men",
              "Improved muscle strength and recovery from resistance training",
              "Enhanced sleep quality and reduced time to sleep onset",
              "Anxiety and stress reduction comparable to some medications in trials",
              "Improved thyroid function in subclinical hypothyroidism",
              "Cardiorespiratory endurance improvements",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "HPA Axis Modulation — Withanolides modulate the hypothalamic-pituitary-adrenal axis — reducing excessive cortisol secretion in chronically stressed individuals. Lower cortisol creates a more anabolic hormonal environment by reducing cortisol's suppressive effects on testosterone, growth hormone pulsatility, and muscle protein synthesis.",
              "Testosterone Enhancement — Ashwagandha appears to increase luteinizing hormone (LH) secretion from the pituitary, stimulating testicular testosterone production. It also reduces the cortisol-mediated suppression of testosterone — a key mechanism in stressed, overtrained, or sleep-deprived men.",
              "GABA Mimetic Activity — Withanolides bind to GABA receptors, producing anxiolytic and sleep-promoting effects without the dependence risk of benzodiazepines.",
              "Thyroid Stimulation — Ashwagandha increases T4 and T3 thyroid hormone levels in subclinical hypothyroidism, contributing to metabolic and energy improvements.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">🔬 What the Research Shows</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            A double-blind RCT by Wankhede et al. (2015) found 300mg KSM-66 twice daily for 8 weeks significantly increased muscle strength (bench press by 18.2 kg vs 6.1 kg placebo), muscle recovery, and testosterone in healthy resistance-trained men. A 2019 RCT found Ashwagandha (240mg Sensoril daily for 60 days) significantly reduced cortisol by 22.2%, reduced perceived stress, and improved sleep quality vs. placebo. Multiple trials confirm significant reductions in serum cortisol and anxiety scores. A 2020 RCT found Ashwagandha improved VO2 max by 13% vs. 7% placebo over 8 weeks. A meta-analysis confirmed significant testosterone increases in men across multiple trials.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">💊 How to Use</h2>
          <ul className="space-y-1">
            {[
              "Typical dose: 300–600mg of standardized extract (KSM-66 or Sensoril) daily",
              "Timing: With meals — evening dosing preferred by many for sleep benefits; morning for cortisol modulation",
              "Duration: Benefits accumulate over 4–12 weeks of consistent use",
              "Standardization: Look for KSM-66 (5% withanolides, full-spectrum root) or Sensoril (10% withanolides, root and leaf)",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚠️ Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Well tolerated in clinical trials. Most common side effects are mild GI discomfort and drowsiness. May lower blood pressure — caution with antihypertensive medications. May enhance thyroid hormone levels — monitor thyroid function if using thyroid medications. Rare reports of liver injury with very high doses — stay within recommended ranges. Not recommended during pregnancy. Some preparations contain root and leaf — root-only preparations have the better safety record.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🔗 Related Supplements</h2>
          <p className="text-sm text-gray-600"><Link href="/supplements/rhodiola-rosea" className="text-[#0D7377] hover:underline">Rhodiola Rosea</Link> | <Link href="/supplements/l-theanine" className="text-[#0D7377] hover:underline">L-Theanine</Link> | <Link href="/supplements/zma" className="text-[#0D7377] hover:underline">ZMA</Link> | <Link href="/supplements/magnesium" className="text-[#0D7377] hover:underline">Magnesium</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📚 References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Wankhede S, et al. Examining the effect of Withania somnifera supplementation on muscle strength and recovery. J Int Soc Sports Nutr. 2015.",
              "Pratte MA, et al. An alternative treatment for anxiety: a systematic review of human trial results reported for the Ayurvedic herb ashwagandha. J Altern Complement Med. 2014.",
              "Chandrasekhar K, et al. A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of ashwagandha root extract in reducing stress and anxiety. Indian J Psychol Med. 2012.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Adaptogen", "Cortisol", "Testosterone", "KSM-66"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  );
}
