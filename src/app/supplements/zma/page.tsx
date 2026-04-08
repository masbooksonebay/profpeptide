import Link from "next/link";

export const metadata = {
  title: "ZMA — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "ZMA supplement profile covering zinc magnesium aspartate, sleep quality improvement, testosterone support in athletes, and mineral repletion.",
};

export default function ZMAPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">ZMA</h1>
        <span className="tag">Growth Hormone Support</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">Also Known As: Zinc magnesium aspartate, zinc monomethionine aspartate, ZMA-5</p>
      <p className="text-sm text-[#0D7377] font-medium mb-8">The sleep and recovery stack trusted by athletes for decades</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📋 Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            ZMA is a patented combination of zinc monomethionine aspartate, magnesium aspartate, and vitamin B6 (pyridoxine) — formulated specifically to optimize absorption of these minerals and support athletic recovery, sleep quality, and hormonal health. The formulation was developed by Victor Conte (SNAC System) based on research showing that intense exercise depletes zinc and magnesium through sweat and urine, and that these deficiencies are common in athletes. Zinc and magnesium are both essential minerals with critical roles in testosterone synthesis, protein synthesis, immune function, and sleep regulation. Vitamin B6 enhances the absorption of both minerals. ZMA works most effectively in individuals who are deficient or suboptimal in zinc and magnesium — which research suggests includes a significant proportion of athletes and active individuals. It is not a direct GH secretagogue but supports the hormonal environment — particularly testosterone and sleep quality — that optimizes GH release during sleep.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">💪 Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Corrects common zinc and magnesium deficiencies in athletes",
              "Improved sleep quality and slow-wave sleep",
              "Supports testosterone levels in zinc-deficient individuals",
              "Enhanced immune function through zinc replenishment",
              "Muscle relaxation and reduced cramping via magnesium",
              "Supports protein synthesis and recovery overnight",
              "B6 enhances mineral absorption and neurotransmitter synthesis",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Zinc and Testosterone — Zinc is an essential cofactor for the enzyme 5-alpha reductase and plays a direct role in testosterone synthesis and LH receptor activity. Zinc deficiency is associated with reduced testosterone levels, and correction of deficiency in athletes can meaningfully restore testosterone to normal ranges.",
              "Magnesium and Sleep — Magnesium activates GABA receptors and regulates the nervous system, promoting relaxation and deeper, more restorative sleep. It specifically supports slow-wave sleep (deep sleep) — the stage during which the majority of nightly growth hormone is released.",
              "Magnesium and Muscle Function — Magnesium is required for over 300 enzymatic reactions including ATP synthesis and muscle relaxation. Exercise-depleted magnesium contributes to cramping, poor recovery, and suboptimal strength.",
              "Vitamin B6 Synergy — Pyridoxine (B6) enhances zinc and magnesium absorption and also serves as a cofactor for serotonin and GABA synthesis — supporting mood and sleep quality independently.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">🔬 What the Research Shows</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            The original ZMA study by Brilla and Conte (2000) in NCAA football players found ZMA supplementation significantly increased free testosterone by 32.4% and IGF-1 by 3.6% vs. placebo, and improved muscle strength. However, a follow-up study by Wilborn et al. could not replicate the testosterone findings in athletes with adequate zinc and magnesium at baseline — supporting the conclusion that ZMA&apos;s benefits are most pronounced in deficient individuals. Sleep research on magnesium consistently shows improved sleep quality, particularly in older adults and those with suboptimal intake. Zinc research confirms its essential role in testosterone production and immune function. A 2022 meta-analysis confirmed magnesium supplementation significantly improves sleep quality.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">💊 How to Use</h2>
          <ul className="space-y-1">
            {[
              "Typical ZMA dose: 30mg zinc, 450mg magnesium, 10.5mg B6 taken 30–60 minutes before bed",
              "Timing: Before bed on an empty stomach — calcium impairs zinc and magnesium absorption so avoid dairy before dosing",
              "Duration: Benefits of mineral repletion develop over 4–8 weeks",
              "Note: Individual zinc and magnesium supplements can replicate ZMA at lower cost if patented form is not required",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚠️ Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Generally well tolerated. Zinc at high doses (above 40mg daily) can cause nausea, copper depletion, and immune suppression — stay within recommended doses. Magnesium at high doses causes loose stools — magnesium glycinate is the gentlest form. B6 at very high doses (above 200mg daily, far above ZMA amounts) can cause nerve damage — not a concern at ZMA doses. May cause vivid dreams in some users — a commonly reported and generally benign effect.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🔗 Related Supplements</h2>
          <p className="text-sm text-gray-600"><Link href="/supplements/ashwagandha" className="text-[#0D7377] hover:underline">Ashwagandha</Link> | <Link href="/supplements/gaba" className="text-[#0D7377] hover:underline">GABA</Link> | <Link href="/supplements/l-arginine" className="text-[#0D7377] hover:underline">L-Arginine</Link> | <Link href="/supplements/magnesium" className="text-[#0D7377] hover:underline">Magnesium</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📚 References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Brilla LR, Conte V. Effects of a novel zinc-magnesium formulation on hormones and strength. J Exerc Physiol. 2000.",
              "Wilborn CD, et al. Effects of zinc magnesium aspartate supplementation on training adaptations and markers of anabolism and catabolism. J Int Soc Sports Nutr. 2004.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Zinc", "Magnesium", "Sleep", "Mineral Repletion"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  );
}
