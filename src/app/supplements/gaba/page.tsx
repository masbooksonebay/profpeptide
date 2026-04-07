import Link from "next/link";

export const metadata = {
  title: "GABA Supplement Profile | Prof. Peptide",
  description:
    "GABA supplement profile — calming neurotransmitter, growth hormone release, sleep support, peripheral receptor effects, dosing, and references.",
};

export default function GABAPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">GABA</h1>
        <span className="tag">Growth Hormone Support</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">Also Known As: Gamma-aminobutyric acid, PharmaGABA</p>
      <p className="text-sm text-[#0D7377] font-medium mb-8">The calming neurotransmitter that promotes sleep and growth hormone release</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📋 Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            GABA (gamma-aminobutyric acid) is the primary inhibitory neurotransmitter in the central nervous system — responsible for reducing neural excitability and promoting calm, relaxation, and sleep. It is synthesized naturally in the brain from glutamate by the enzyme glutamic acid decarboxylase. The traditional view held that oral GABA could not cross the blood-brain barrier and was therefore ineffective as a supplement — and for standard synthetic GABA, this concern remains debated. However, more recent research suggests oral GABA may exert effects through peripheral GABA receptors in the gut, vagus nerve stimulation, and possibly direct CNS effects at higher doses. More notably, GABA supplementation has been shown to significantly increase growth hormone secretion both at rest and following exercise — a mechanism that has generated interest in its use for recovery, body composition, and sleep quality.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🌙 Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Promotes relaxation and reduces anxiety",
              "Improves sleep onset and quality",
              "Significant growth hormone release stimulation",
              "Reduces post-exercise cortisol",
              "Supports recovery through GH-mediated tissue repair",
              "May enhance the anabolic environment during sleep",
            ].map((b) => (
              <p key={b} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{b}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "CNS Inhibition — GABA binds to GABA-A and GABA-B receptors throughout the nervous system, opening chloride channels and hyperpolarizing neurons — reducing neural firing and promoting calm and relaxation. This is the mechanism of benzodiazepines and alcohol, though GABA itself has a much milder effect without dependency risk.",
              "Peripheral GABA Receptors — Oral GABA may activate GABA receptors in the enteric nervous system (gut-brain axis) and stimulate vagal afferent neurons, transmitting inhibitory signals to the brain indirectly — potentially explaining anxiolytic effects despite limited BBB penetration.",
              "Growth Hormone Stimulation — GABA's most surprising documented effect is significant growth hormone release. A landmark study by Powers et al. found that 3g oral GABA at rest increased immunoreactive GH by 400% and immunofunctional GH by 200% compared to placebo. Combined with exercise, the GH increase was even greater. The mechanism likely involves GABA's inhibition of somatostatin — the hormone that suppresses GH release.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">🔬 What the Research Shows</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            The landmark GH study by Powers et al. (2008) found 3g GABA significantly increased both resting and post-exercise GH levels — with immunoreactive GH increasing 400% at rest and 200% after exercise compared to placebo. A 2009 study confirmed GABA supplementation increases GH levels. Sleep research shows oral GABA (100–300mg) reduces time to sleep onset and improves sleep quality in stressed individuals. PharmaGABA — a naturally fermented form — appears to have better evidence for CNS effects than synthetic GABA in some research. Anxiety research shows modest reductions in anxiety markers with GABA supplementation, though CNS penetration remains debated.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">💊 How to Use</h2>
          <ul className="space-y-1">
            {[
              "Sleep and relaxation: 100–300mg taken 30–60 minutes before bed",
              "GH stimulation: 3–5g taken before bed or after exercise on an empty stomach",
              "PharmaGABA: 100–200mg — naturally fermented form with possibly superior CNS effects",
              "Timing: Evening or post-workout for GH and sleep applications",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚠️ Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Generally well tolerated. Common mild side effects include tingling, drowsiness, and changes in breathing pattern at higher doses. The drowsiness effect is intentional for sleep applications. Not recommended with alcohol or sedative medications due to additive CNS depression. Driving or operating machinery after high doses is not recommended. Pregnancy and breastfeeding: insufficient safety data — avoid.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🔗 Related Supplements</h2>
          <p className="text-sm text-gray-600">L-Arginine | ZMA | Ashwagandha | Magnesium</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📚 References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {[
              "Powers ME, et al. Growth hormone isoform responses to GABA ingestion at rest and after exercise. Medicine & Science in Sports & Exercise. 2008.",
              "Abdou AM, et al. Relaxation and immunity enhancement effects of GABA administration in humans. Biofactors. 2006.",
            ].map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{ref}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Sleep", "Growth Hormone", "Relaxation", "Neurotransmitter"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  );
}
