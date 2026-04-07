import Link from "next/link";

export const metadata = {
  title: "Rhodiola Rosea Supplement Profile | Prof. Peptide",
  description:
    "Rhodiola Rosea supplement profile — adaptogenic stress response, mental fatigue reduction, HPA axis modulation, MAO inhibition, dosing, and references.",
};

export default function RhodiolaRoseaPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Rhodiola Rosea</h1>
        <span className="tag">Cognitive &amp; Nootropic</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">Also Known As: Arctic root, golden root, roseroot, SHR-5, rosavins</p>
      <p className="text-sm text-[#0D7377] font-medium mb-8">The adaptogen that fights fatigue and sharpens performance under stress</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📋 Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Rhodiola rosea is a flowering plant that grows in cold, mountainous regions of Europe and Asia — particularly Siberia and Scandinavia — where it has been used in traditional medicine for centuries to increase endurance, reduce fatigue, and enhance resilience to physical and mental stress. It belongs to a class of herbs called adaptogens — natural compounds that help the body adapt to stressors by normalizing physiological processes without causing excessive stimulation or sedation. Rhodiola&apos;s primary bioactive compounds — rosavins and salidroside — modulate the stress response through multiple pathways including HPA axis regulation, monoamine neurotransmitter modulation, and antioxidant effects. It has one of the most consistent evidence bases of any adaptogen for reducing mental fatigue, improving cognitive performance under stress, and enhancing physical endurance. It is distinctly different from stimulants — it works by improving stress resilience rather than forcing arousal.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🧠 Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Reduces mental fatigue and burnout symptoms",
              "Improves cognitive performance under stress and sleep deprivation",
              "Adaptogenic — normalizes stress response without overstimulation",
              "Enhances physical endurance and reduces perceived exertion",
              "Antidepressant effects in clinical trials",
              "Reduces cortisol in chronically stressed individuals",
              "Improves attention and memory during demanding mental work",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "HPA Axis Modulation — Rhodiola modulates the hypothalamic-pituitary-adrenal axis — the core stress response system — helping normalize cortisol levels during chronic stress without suppressing the acute stress response needed for performance.",
              "Monoamine Preservation — Salidroside and rosavins inhibit monoamine oxidase (MAO) — the enzyme that breaks down dopamine, norepinephrine, and serotonin. By preserving these neurotransmitters, Rhodiola supports mood, motivation, and cognitive function under stress.",
              "Opioid Receptor Activation — Rhodiola activates opioid receptors in the brain, contributing to its stress-protective and mood-enhancing effects.",
              "Antioxidant Effects — Rhodiola reduces oxidative stress in neural and muscle tissue, protecting against the cellular damage caused by physical and mental exertion.",
              "Serotonin Transport Inhibition — Rhodiola inhibits serotonin reuptake transporters, contributing to antidepressant-like effects documented in clinical trials.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">🔬 What the Research Shows</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            A landmark RCT by Spasov et al. in medical students during exam stress found Rhodiola significantly improved physical fitness, mental fatigue, and neuromotor function vs. placebo. A 2009 RCT found Rhodiola significantly reduced symptoms of burnout in stressed physicians and nurses. A meta-analysis of 11 studies confirmed significant reductions in physical and mental fatigue with Rhodiola supplementation. A 2015 RCT compared Rhodiola to sertraline (Zoloft) in mild-to-moderate depression — Rhodiola showed fewer adverse effects and was similarly effective for some measures of depression. Exercise research shows Rhodiola improves time to exhaustion and reduces perceived exertion at doses taken acutely before exercise.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">💊 How to Use</h2>
          <ul className="space-y-1">
            {[
              "Typical dose: 200–600mg of standardized extract (minimum 3% rosavins, 1% salidroside) daily",
              "Timing: Morning or early afternoon — may be mildly stimulating for some people; avoid at night",
              "Cycling: Some practitioners recommend 5 days on, 2 days off to maintain sensitivity",
              "Duration: Both acute (single dose before stress) and chronic (daily for burnout/fatigue) protocols are supported by research",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚠️ Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Generally well tolerated. Most common side effects are mild — irritability, insomnia, or restlessness if taken too late in the day. Stimulating at higher doses for some individuals. May interact with antidepressants and blood pressure medications. Not recommended during pregnancy. Quality varies significantly between products — standardized extracts are essential.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🔗 Related Supplements</h2>
          <p className="text-sm text-gray-600"><Link href="/supplements/ashwagandha" className="text-[#0D7377] hover:underline">Ashwagandha</Link> | <Link href="/supplements/l-theanine" className="text-[#0D7377] hover:underline">L-Theanine</Link> | <Link href="/supplements/bacopa-monnieri" className="text-[#0D7377] hover:underline">Bacopa Monnieri</Link> | <Link href="/supplements/lions-mane" className="text-[#0D7377] hover:underline">Lion&apos;s Mane</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📚 References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Spasov AA, et al. A double-blind, placebo-controlled pilot study of the stimulating and adaptogenic effect of Rhodiola rosea SHR-5 extract on the fatigue of students caused by stress during an examination period. Phytomedicine. 2000.",
              "Anghelescu IG, et al. Stress management and the role of Rhodiola rosea: a review. Int J Psychiatry Clin Pract. 2018.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Adaptogen", "Anti-Fatigue", "Stress Resilience", "Rosavins"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  );
}
