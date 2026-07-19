import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/creatine",
  title: "Creatine Monohydrate: 5 g/day, Strength + Cognition, Why Forms Don't Matter",
  description:
    "Creatine monohydrate dosing (5 g/day, loading optional) — Strong evidence for strength and power, Moderate for sarcopenia and cognition, why monohydrate beats HCl/buffered/EE, and the vegetarian responder bonus.",
});

const faqs = [
  {
    q: "Do I need to load creatine?",
    a: "No, but loading reaches saturation faster. Without loading: 3–5 g/day for 3–4 weeks reaches full muscle saturation. Loading protocol: 20 g/day (4 × 5 g doses) for 5–7 days, then 5 g/day maintenance — reaches saturation in about a week. Both protocols arrive at the same end state. Loading produces the rapid water-weight gain (1–2 kg) that some users find motivating; non-loading produces the same end state with slower onset. Practical recommendation: just take 5 g/day daily. Loading is optional and mostly useful if you have a specific competition or training block within 2–3 weeks where you want to be saturated faster. GI discomfort is more common during loading; splitting the 20 g into 4 servings reduces this.",
  },
  {
    q: "Is creatine monohydrate really the best form, or do HCl and buffered versions work better?",
    a: "Monohydrate is the gold standard and there is no reliable head-to-head evidence that HCl, buffered (Kre-Alkalyn), ethyl ester, or other forms outperform it. The marketing claims about superior absorption, better stomach tolerance, or reduced bloating with these alternative forms have not held up in controlled trials at matched bioequivalent doses. Jagim 2012 directly compared Kre-Alkalyn (buffered) and monohydrate and found no differences in muscle creatine content, body composition, or strength outcomes. Spillane 2009 found creatine ethyl ester is actually worse than monohydrate — it degrades to creatinine before reaching muscle. Creatine monohydrate is cheaper, has the entire evidence base behind it, and is the form used in essentially every positive RCT. Micronized monohydrate (smaller particle size) mixes better in water but produces the same muscle saturation as standard monohydrate. The Creapure brand specifically is the most-studied source.",
  },
  {
    q: "Will creatine make me gain weight or look bloated?",
    a: "You'll gain about 1–2 kg in the first 1–2 weeks, but it's intracellular water in muscle, not subcutaneous bloat. Creatine draws water into muscle cells (cell volumization), which both increases muscle fullness and contributes to the hypertrophic signaling mechanism. The water-weight gain is in the muscle, not under the skin — you don't look bloated, you look slightly fuller. Some users report transient digestive bloating during 20 g/day loading; this resolves at the 5 g/day maintenance dose. If you want to avoid the rapid water-weight onset, skip loading and just take 5 g/day daily — saturation builds gradually over 3–4 weeks without the acute weight spike.",
  },
  {
    q: "Is creatine safe for my kidneys?",
    a: "Yes, in healthy individuals — this is one of the most thoroughly debunked supplement myths. The concern originated from creatine raising serum creatinine (a kidney function marker), but the creatinine rise reflects increased creatine turnover, not kidney damage. Long-term safety studies up to 5 years show no adverse effects on kidney or liver function in healthy users. The ISSN position stand (Kreider 2017) explicitly states creatine supplementation is safe in healthy populations. Important caveats: (1) Pre-existing kidney disease — coordinate with nephrology before supplementing. (2) Combine with normal hydration (which you should do anyway). (3) Don't combine with kidney-stressing medications (NSAIDs chronic high-dose, nephrotoxic chemotherapy) without medical guidance. For typical healthy users at 5 g/day: no kidney concern.",
  },
  {
    q: "Does creatine cause hair loss?",
    a: "The hair-loss concern comes from a single 2009 trial in college rugby players (van der Merwe et al.) that documented increased DHT (the androgen most associated with male pattern baldness) with creatine loading. That finding has never been replicated in subsequent trials. The ISSN position stand (Kreider 2017) reviewed the evidence and concluded there is no consistent evidence that creatine accelerates hair loss. Mechanistically, the DHT-elevation pathway from creatine isn't well-characterized. Honest framing: if you have strong family history of male pattern baldness and are concerned, this is a personal risk-benefit decision — the evidence base does not strongly support the concern, but the single-trial finding hasn't been definitively refuted either. Most users with hair-loss family history take creatine without issue.",
  },
  {
    q: "Does creatine actually help cognition?",
    a: "Yes, in specific contexts — and this is the emerging-but-real second tier of creatine's evidence base. Avgerinos 2018 meta-analysis of cognitive trials documented improvements in memory and processing speed, with larger effects in older adults and vegetarians/vegans. Sleep-deprived users (Cook 2011) show acute cognitive benefits. Vegetarians/vegans show clearer cognitive effects because their baseline muscle and brain creatine stores are lower (Rae 2003). In healthy omnivorous young adults with adequate creatine intake from meat/fish, cognitive effects are smaller and less consistent. Practical implication: if you're vegetarian, vegan, sleep-deprived, or older, creatine has meaningful cognitive evidence. If you're a young omnivore eating regular meat, the cognitive effect is probably modest.",
  },
  {
    q: "Will I respond better to creatine if I'm vegetarian or vegan?",
    a: "Yes — and this is one of the more interesting facets of creatine pharmacology. Dietary creatine comes from red meat and fish (about 1–2 g/day in a typical omnivorous diet). Vegetarians and vegans get virtually no dietary creatine and have lower baseline muscle and brain creatine stores. When they supplement, the relative increase in tissue creatine is larger than in omnivores — leading to larger measured effects on both performance and cognition. Burke 2003 documented vegetarians had significantly larger gains in lean mass, strength, and muscle creatine content with supplementation than omnivores. Rae 2003 documented larger cognitive effects in vegetarians. Practical implication: if you're vegetarian or vegan, creatine is one of the highest-impact supplements you can take.",
  },
  {
    q: "Should I take creatine with carbs, protein, or before/after workout?",
    a: "Timing matters less than total daily intake. Antonio 2013 directly tested pre-workout vs post-workout creatine timing and found small advantages for post-workout, but the effect size was modest. Taking creatine with carbohydrates and protein modestly improves uptake into muscle via insulin-mediated mechanisms — but the practical difference at saturated muscle stores is small. Practical guidance: take 5 g/day at a consistent time you'll actually remember. Post-workout with a protein shake is a reasonable default. The only timing that doesn't work is forgetting to take it — consistency over weeks is what produces results. No need to time it around training sessions precisely; the muscle saturation pool is what matters, not acute intake timing.",
  },
];

const studies = [
  {
    title: "International Society of Sports Nutrition Position Stand: Safety and Efficacy of Creatine Supplementation in Exercise, Sport, and Medicine",
    authors: "Kreider RB, Kalman DS, Antonio J, et al.",
    journal: "Journal of the International Society of Sports Nutrition",
    year: "2017",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/28615996/",
    summary: "The foundational ISSN position stand — the most comprehensive single-source reference for creatine supplementation evidence. Reviews 500+ studies covering safety, dosing protocols, ergogenic effects, clinical applications, and form comparisons. Key conclusions: creatine monohydrate is safe and effective; 5 g/day is sufficient (loading optional); no consistent evidence for superiority of HCl, buffered, ethyl ester, or other forms over monohydrate; no kidney/liver toxicity in healthy users; hair-loss concern not supported by replicated evidence. The single most-cited reference in creatine literature.",
  },
  {
    title: "Effects of Creatine Supplementation and Resistance Training on Muscle Strength and Weightlifting Performance",
    authors: "Rawson ES, Volek JS",
    journal: "Journal of Strength and Conditioning Research",
    year: "2003",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/12930169/",
    summary: "A meta-analysis of 22 RCTs documenting that creatine + resistance training produces approximately 8% greater strength gains and 14% greater weightlifting performance gains compared to resistance training + placebo. Effect sizes are among the largest documented for any sports supplement. Foundational strength/power evidence base.",
  },
  {
    title: "Effects of Creatine Supplementation on Cognitive Function of Healthy Individuals: A Systematic Review of Randomized Controlled Trials",
    authors: "Avgerinos KI, Spyrou N, Bougioukas KI, Kapogiannis D",
    journal: "Experimental Gerontology",
    year: "2018",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/29704637/",
    summary: "A systematic review of 6 RCTs of creatine supplementation effects on cognitive function in healthy individuals. Documented improvements in short-term memory and intelligence/reasoning tasks. Effects were more pronounced in older adults and in stress/sleep-deprivation contexts. The most-cited single source for creatine's emerging-but-real cognitive evidence base.",
  },
  {
    title: "Effect of Creatine and Weight Training on Muscle Creatine and Performance in Vegetarians",
    authors: "Burke DG, Chilibeck PD, Parise G, Candow DG, Mahoney D, Tarnopolsky M",
    journal: "Medicine and Science in Sports and Exercise",
    year: "2003",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/14600563/",
    summary: "A landmark RCT documenting that vegetarians have significantly lower baseline muscle creatine stores than omnivores and show larger relative gains in muscle creatine content, lean mass, and strength with supplementation. This is the foundational reference for the vegetarian/vegan responder bonus that distinguishes creatine pharmacology from most supplements.",
  },
  {
    title: "Creatine Supplementation in Older Adults: Effects on Muscle Function, Falls, and Fractures",
    authors: "Chilibeck PD, Kaviani M, Candow DG, Zello GA",
    journal: "Open Access Journal of Sports Medicine",
    year: "2017",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/29191764/",
    summary: "A comprehensive review of creatine supplementation effects on older adults — sarcopenia prevention, muscle function preservation, bone health, and fall reduction. Documents that creatine + resistance training in older adults (>50 years) produces meaningful improvements in lean mass, strength, and functional capacity. Foundational reference for the sarcopenia / older-adult sub-tier evidence.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does creatine work?",
    intro:
      "Creatine works through three primary mechanisms: phosphocreatine-mediated ATP regeneration (the rapid energy reserve for high-intensity efforts), cell volumization (water drawn into muscle cells triggering hypertrophic signaling), and direct effects on satellite cells and protein synthesis. Beyond muscle, brain phosphocreatine pools support cognitive energy demands — the basis of creatine's emerging cognitive evidence.",
    body: [
      "Phosphocreatine and ATP regeneration. Creatine is stored in muscle as phosphocreatine (PCr) — a high-energy phosphate compound that donates its phosphate group to ADP to regenerate ATP during high-intensity exercise. The PCr system is the dominant energy source for efforts lasting under ~10 seconds (sprints, max lifts, jumps) and contributes substantially up to 30 seconds. Supplementation increases muscle PCr stores by 20–40%, extending the duration of maximal effort before fatigue.",
      "Muscle creatine saturation. Total muscle creatine pool (free creatine + phosphocreatine) has a ceiling — once saturated, additional supplementation does not raise muscle creatine further. Saturation is achieved with 3–5 g/day over 3–4 weeks (no loading) or 20 g/day for 5–7 days (loading protocol). Above saturation, excess creatine is excreted as creatinine.",
      "Cell volumization and hypertrophic signaling. Creatine draws water into muscle cells, increasing intracellular volume. Cell swelling is a known signal for anabolic processes including protein synthesis and satellite cell activation. This is a contributing mechanism beyond the direct ATP-energy effect.",
      "Satellite cell activation and myogenic transcription factors. Creatine upregulates satellite cell activity and the expression of myogenic regulatory factors (MyoD, myogenin) — supporting muscle repair, regeneration, and hypertrophy. This is mechanistically distinct from the immediate energy-buffering effect.",
      "Brain phosphocreatine pool. The brain uses phosphocreatine for rapid energy demands similar to muscle. Brain PCr supplementation effects are smaller than muscle effects but measurable — increased brain PCr supports cognition particularly under high cognitive demand, sleep deprivation, or in users with low baseline creatine status (vegetarians, vegans, older adults).",
      "Vegetarian/vegan responder bonus. Dietary creatine comes from red meat and fish (~1–2 g/day in omnivorous diets). Vegetarians and vegans have lower baseline muscle and brain creatine — supplementation produces larger relative increases and clearer measurable effects on both performance (Burke 2003) and cognition (Rae 2003).",
      "Calcium handling in muscle. Some evidence suggests creatine supports sarcoplasmic reticulum calcium handling — improving excitation-contraction coupling. Contributes to the strength/power effect.",
      "Anti-inflammatory and antioxidant signaling (modest). Creatine has documented modest antioxidant and anti-inflammatory effects at the cellular level. Mechanistic contribution to broader applications (neuroprotection, sarcopenia) but not the dominant strength/power mechanism.",
    ],
  },
  {
    id: "research",
    title: "What does creatine actually do?",
    intro:
      "Creatine has the deepest evidence base of any sports supplement — 500+ peer-reviewed studies. The honest summary follows a clear sub-tier breakdown: Strong evidence for strength, power, and lean mass in resistance training; Moderate for older adults / sarcopenia prevention; Emerging-Moderate for cognitive function (especially in older adults, sleep-deprived users, and vegetarians/vegans).",
    body: [
      "Strength and power (Strong). Rawson 2003 meta-analysis: ~8% greater strength gains and ~14% greater weightlifting performance vs placebo when combined with resistance training. Replicated across hundreds of trials. One of the largest effect sizes for any sports supplement.",
      "Lean mass gains (Strong). 1–2 kg additional lean mass over 4–12 weeks of resistance training + creatine vs resistance training + placebo. Mechanism is multi-pronged: cell volumization (acute), satellite cell activation, and increased training volume capacity (chronic).",
      "Repeated high-intensity exercise (Strong). PCr-mediated rapid ATP regeneration supports repeated maximal efforts (multiple sets, repeated sprints, HIIT). Effect size scales with how PCr-dependent the activity is.",
      "Sarcopenia and older adults (Moderate). Chilibeck 2017 review: creatine + resistance training in adults >50 produces meaningful improvements in lean mass, strength, and functional capacity. Stronger evidence base than most sarcopenia interventions.",
      "Bone density support in older adults (Moderate). Creatine + resistance training produces modest improvements in bone mineral density markers in older populations. Mechanism likely via increased mechanical loading from improved muscle function plus possible direct osteoblast effects.",
      "Cognitive function in healthy adults (Emerging-Moderate). Avgerinos 2018 meta-analysis documents improvements in short-term memory and intelligence/reasoning tasks. Effect larger in older adults, sleep-deprived, and vegetarian/vegan subpopulations. Smaller and less consistent in young omnivore populations.",
      "Cognitive function under sleep deprivation (Moderate). Cook 2011 documented acute cognitive benefits from creatine in sleep-deprived subjects. Practical implication for shift workers, jet-lagged users, and acute sleep-loss contexts.",
      "Cognitive function in vegetarians/vegans (Moderate). Rae 2003 documented clearer cognitive effects in vegetarians (lower baseline creatine stores → larger response to supplementation).",
      "Neuroprotection in neurological conditions (Emerging). Some trials suggest benefit in Parkinson&apos;s disease, Huntington&apos;s, ALS, and traumatic brain injury — generally specialized clinical contexts under neurology supervision rather than general supplementation.",
      "Mood and depression (Emerging, mixed). Some trials suggest creatine adjunct to SSRI improves depression scores; evidence base is smaller than for cognitive effects. Specialized context.",
      "Glycemic control (Modest). Creatine increases muscle GLUT4 translocation and supports glucose disposal. Modest improvements in glycemic markers in some trials, particularly in conjunction with exercise.",
      "Bone density in postmenopausal women (Modest). Trials of creatine + resistance training in postmenopausal women show modest BMD improvements. Specialized use case.",
    ],
  },
  {
    id: "dosing",
    title: "How is creatine dosed?",
    intro:
      "Creatine dosing is straightforward and one of the simplest in supplementation: 5 g/day, every day, indefinitely. Loading is optional. Form selection matters less than consistency — monohydrate is the gold standard and is what 500+ trials have validated.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard daily dose (no loading).</span> 3–5 g/day creatine monohydrate. 5 g is the practical default and what most ISSN-aligned protocols use. Muscle saturation reaches plateau over 3–4 weeks.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Loading protocol (optional).</span> 20 g/day (4 × 5 g doses) for 5–7 days, then 5 g/day maintenance. Reaches saturation in ~1 week. Same end state as non-loading. Loading produces rapid 1–2 kg water-weight gain and more GI discomfort.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Older adults / sarcopenia prevention.</span> 5 g/day combined with resistance training. Chilibeck 2017 reference dose. Effect emerges over 8–12 weeks of consistent training + supplementation.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cognitive applications.</span> 5 g/day. Some cognitive trials have used higher doses (10–20 g/day) for specific clinical contexts, but 5 g/day is the standard for general use.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vegetarians and vegans.</span> 5 g/day — same dose, larger relative effect. No need to take more than omnivores; the response bonus comes from lower baseline, not from higher dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycling.</span> Not necessary. Creatine doesn&apos;t produce tolerance or receptor desensitization. Chronic daily use is the trial-validated norm. Stopping causes gradual return to baseline muscle creatine over 4–6 weeks.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Neurological / clinical contexts.</span> Higher doses (10–25 g/day) studied in Parkinson&apos;s, Huntington&apos;s, ALS, and traumatic brain injury — under neurology supervision only, not general supplementation.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: muscle saturation in 1 week (loading) or 3–4 weeks (non-loading). Strength/power effects emerge within 2–4 weeks of saturation. Cognitive effects emerge over 4–8 weeks of chronic supplementation in responsive subpopulations. Sarcopenia/older-adult effects 8–12 weeks combined with resistance training.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Forms comparison.</span> Creatine monohydrate is the gold standard. Micronized monohydrate (smaller particle size) mixes better in liquid but produces the same muscle saturation. Alternative forms — creatine HCl (Concret), buffered creatine (Kre-Alkalyn), creatine ethyl ester, creatine pyruvate, creatine malate — have not outperformed monohydrate in head-to-head trials. Jagim 2012 directly compared Kre-Alkalyn to monohydrate and found no differences. Spillane 2009 found creatine ethyl ester is worse than monohydrate. Creapure brand specifically is the most-studied pharmaceutical-grade monohydrate source.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take creatine",
    intro:
      "Creatine is taken orally as powder dissolved in water, juice, or a protein shake. The practical considerations are timing flexibility (consistency matters more than time-of-day), form selection (monohydrate), and hydration. Capsules are acceptable but cost-inefficient at 5 g/day (requires 5+ capsules per dose).",
    node: (
      <div className="space-y-4">
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Aspect</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Frequency</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">1× daily for maintenance. During optional loading: 4× 5 g doses across the day.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Any time — consistency matters more than timing. Post-workout with carbs and protein has marginal advantage per Antonio 2013 but effect is small. Practical default: take it whenever you&apos;ll remember consistently.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Co-administration with carbs + protein modestly improves uptake via insulin. Plain water is fine. Taking with food reduces any GI discomfort during loading.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Creatine monohydrate (ideally Creapure brand source). Micronized form mixes better in liquid. Avoid HCl, buffered (Kre-Alkalyn), ethyl ester, pyruvate, malate marketing variants — no head-to-head superiority over monohydrate. Powder is dramatically more cost-efficient than capsules at 5 g/day.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Creapure brand monohydrate (the pharmaceutical-grade source used in most quality studies). Third-party tested for purity. cGMP-certified manufacturing. Reputable brands: Bulk Supplements, Optimum Nutrition, Now Foods, Thorne, Klean Athlete, NutraBio.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling / storage</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No cycling — chronic daily use is the trial-validated norm. Store in cool dry conditions. Don&apos;t pre-dissolve in solution and store — creatine slowly degrades to creatinine in liquid over hours/days.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does creatine stack with?",
    intro:
      "Creatine pairs naturally with the broader resistance-training and performance supplement clusters. The mechanisms don&apos;t overlap with caffeine, beta-alanine, citrulline malate, or protein — these stack additively rather than redundantly. The three areas below cover the natural stacking categories.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Creatine pairs naturally with GH-secretagogue and muscle-supporting peptide clusters for users targeting hypertrophy and recovery.{" "}
            <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>{" "}
            and{" "}
            <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">ipamorelin</Link>{" "}
            (typically dosed pre-bed for GH pulse alignment) work on the endocrine axis for recovery and tissue adaptation; creatine works on the ATP-buffering and cell-volumization mechanisms. Mechanistically complementary without overlap.{" "}
            <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>{" "}
            for tendon/joint healing in heavy-training users supports the increased mechanical stress that creatine-enabled higher training volumes create. No formal stack RCT validation but the mechanistic complementarity is direct.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/beta-alanine" className="text-[#3A759F] hover:underline">Beta-alanine</Link>{" "}
              — different mechanism (muscle carnosine pH buffering for ~60s–4min efforts vs PCr-mediated ATP for &lt;30s efforts). Foundational pairing for high-intensity training.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/l-citrulline-malate" className="text-[#3A759F] hover:underline">L-citrulline malate</Link>{" "}
              — acute pre-workout NO-mediated blood flow and rep volume. Different mechanism, additive in pre-workout context.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Caffeine — central nervous system arousal mechanism. Some older studies suggested caffeine might blunt creatine&apos;s effect (Vandenberghe 1996); more recent work hasn&apos;t replicated this. Practical reality: most evidenced pre-workouts combine both without issue.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/protein-powder" className="text-[#3A759F] hover:underline">Protein powder</Link>{" "}
              (whey, casein) — amino acid substrate for muscle protein synthesis. Foundational stack for resistance training.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/electrolyte-powders" className="text-[#3A759F] hover:underline">Electrolyte powders</Link>{" "}
              — hydration support, particularly relevant given creatine&apos;s intracellular water-binding mechanism.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/bcaas" className="text-[#3A759F] hover:underline">BCAAs</Link>{" "}
              — generally redundant with adequate dietary protein. Useful in fasted-training contexts only.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/glutamine" className="text-[#3A759F] hover:underline">Glutamine</Link>{" "}
              — gut barrier and immune support during heavy training blocks. Different mechanism from creatine.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/vitamin-d3" className="text-[#3A759F] hover:underline">Vitamin D3</Link>{" "}
              — foundational mineral/hormone for muscle function. Compatible co-supplementation.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training.</span> Creatine&apos;s strength/power/hypertrophy effects emerge when combined with progressive resistance training. Supplement without training produces minimal benefit.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Adequate dietary protein.</span> 1.6+ g/kg dietary protein supports the hypertrophic mechanism creatine enables.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hydration.</span> Creatine draws intracellular water; ensure adequate total fluid intake. Especially relevant during loading.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sleep.</span> Recovery infrastructure for the training adaptations creatine amplifies. Also: cognitive effects of creatine are largest in sleep-deprived users — sleep itself is preferable to compensating supplementation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Consistency.</span> Daily intake matters more than timing. Set a daily habit.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vegetarian/vegan context.</span> If you don&apos;t eat meat or fish, creatine is one of the highest-impact supplements available. Larger effect than in omnivores.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid stim-heavy mega-doses with caffeine.</span> The Vandenberghe 1996 caffeine-creatine interaction concern is mostly debunked, but stacking high-dose stim with high-dose creatine isn&apos;t necessary for ergogenic benefits.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "Creatine has one of the best-documented safety profiles of any supplement. Long-term studies up to 5 years show no adverse effects on kidney or liver function in healthy users. The main practical considerations are transient water weight gain (intracellular, in muscle, not bloat), mild GI discomfort during loading, and pre-existing kidney disease coordination.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Intracellular water-weight gain — 1–2 kg in first 1–2 weeks. Desired (in muscle), not subcutaneous bloat.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild GI discomfort during 20 g/day loading — splitting into 4 × 5 g servings resolves in most users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No documented serious adverse events at standard supplemental doses in healthy adults across 500+ trials.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Serum creatinine elevation on labs.</span> Creatine raises serum creatinine (a kidney function marker) by ~10–20% — but this reflects increased creatine turnover, NOT kidney damage. Inform your physician if labs are drawn during supplementation; consider holding for 1 week before kidney function testing to get a clean baseline.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pre-existing kidney disease.</span> Coordinate with nephrology before supplementing. Not a contraindication in well-controlled mild CKD per ISSN position stand, but specialist supervision appropriate.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hair loss / DHT concern.</span> Single 2009 trial (van der Merwe) documented DHT elevation; never replicated. ISSN position stand concludes no consistent evidence for accelerated hair loss. If you have strong family-history concerns, this is a personal risk-benefit decision — the concern isn&apos;t strongly evidenced.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Rare muscle cramping reports.</span> Old gym lore; not supported by trial data. If anything, well-hydrated creatine use reduces cramping rather than causing it.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Heat tolerance concerns.</span> Some old concerns about hot-weather training and creatine; trial evidence does not support increased heat illness risk.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Nephrotoxic medications.</span> Chronic high-dose NSAIDs, certain antibiotics (aminoglycosides), and nephrotoxic chemotherapy — coordinate with prescriber. Creatine alone doesn&apos;t harm kidneys but combining with kidney-stressing medications needs supervision.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Caffeine — older Vandenberghe 1996 concern about interaction not consistently replicated. Combination is practically routine in pre-workouts and well-tolerated.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Diuretics — creatine&apos;s intracellular water shift theoretically interacts with diuretic-induced volume changes. Coordinate with prescriber.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pregnancy and breastfeeding — limited safety data; coordinate with obstetrician.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Diabetes medications — creatine modestly improves insulin sensitivity; monitor glucose if on hypoglycemics.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Other amino acid supplements — no significant interactions. Routinely stacked with protein, BCAAs, glutamine in athletic protocols.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about creatine",
    intro:
      "Creatine is one of the most-studied supplements in existence, but several questions remain — particularly around the optimal applications outside strength/power, responder identification, and very-long-term outcomes.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Cognitive effect ceiling in healthy young omnivores.</span> Creatine&apos;s cognitive evidence is robust in older adults, sleep-deprived users, and vegetarians/vegans. Effects in young healthy omnivores with adequate dietary creatine are smaller and less consistent. Whether higher doses (10+ g/day) produce meaningful cognitive benefit in this population isn&apos;t precisely characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Brain creatine pharmacokinetics.</span> Muscle creatine saturation is well-characterized; brain creatine response to supplementation is slower and less complete. Whether brain saturation requires different dose protocols or longer time courses isn&apos;t fully resolved.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Neurodegenerative disease applications.</span> Trials in Parkinson&apos;s, Huntington&apos;s, ALS, and traumatic brain injury have produced mixed results. The mechanistic rationale (brain energy support) is solid; clinical-outcome translation has been variable. Specialty neurology context.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Individual non-responder rate.</span> A small fraction of users (5–20% in different trials) don&apos;t show measurable muscle creatine increases or performance improvements with supplementation. Determinants of non-response (baseline creatine status, gut absorption, genetic factors in creatine transport) aren&apos;t precisely characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Optimal dose for women.</span> Most creatine RCTs have been in men. Women generally show smaller absolute strength/lean mass gains but similar relative effect sizes. Whether women-specific dosing protocols would produce better outcomes isn&apos;t precisely characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Hair loss / DHT mechanism.</span> The single van der Merwe 2009 finding has never been replicated. Whether the original observation was a chance finding or reflects a real but small effect that subsequent trials missed isn&apos;t definitively resolved. Practical impact is small; honest framing matters.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Bone density mechanism details.</span> Creatine + resistance training produces modest BMD improvements; whether this is purely the mechanical-loading effect from improved muscle function or includes direct osteoblast effects isn&apos;t precisely characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Very long-term outcomes (decades).</span> Trial data extends to ~5 years of continuous supplementation with no adverse effects. Multi-decade continuous use is supported by the natural-abundance biology and absence of accumulation mechanism but lacks formal trial coverage.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy creatine",
    intro:
      "Creatine is one of the most commoditized supplements — quality is uniform across reputable brands using Creapure-source monohydrate. Cost varies several-fold between brands with negligible quality difference. Powder is dramatically more cost-efficient than capsules at 5 g/day.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Creatine monohydrate</span> — the gold standard form. Read the label and confirm it&apos;s monohydrate, not HCl, buffered, ethyl ester, or other marketing variants.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Creapure brand specifically</span> (German pharmaceutical-grade manufacturer AlzChem) — the source used in most quality studies. Most reputable brands disclose Creapure sourcing on the label.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Micronized form</span> — smaller particle size for better mixing in liquid. Produces same muscle saturation as standard monohydrate.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested for purity</span> — USP, NSF Sport, ConsumerLab, or Informed Sport certifications. Informed Sport is the relevant standard for competitive athletes (banned substance screening).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Powder for cost efficiency</span> — 5 g/day at $0.10–0.20 per serving from powder vs $0.50–1.00 from capsules. Mixes in water, juice, protein shake, or coffee.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reputable brands</span> — Bulk Supplements, Optimum Nutrition Micronized Creatine, Now Foods, Thorne, Klean Athlete, NutraBio, MyProtein Creatine. Premium brand price differences are mostly source disclosure (Creapure) and testing transparency, not active ingredient.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">AVOID HCl, buffered (Kre-Alkalyn), ethyl ester, pyruvate, malate marketing variants</span> — no head-to-head superiority over monohydrate. Cost more without benefit.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid &quot;creatine matrix&quot; or &quot;proprietary blend&quot; products</span> — these usually combine sub-therapeutic creatine with marketing additions. Buy single-ingredient monohydrate and stack deliberately.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No flavoring needed</span> — pure monohydrate is essentially tasteless. Avoid flavored versions with added sugars or artificial sweeteners.</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=creatine+monohydrate+creapure+micronized&tag=profpeptide-20" label="Creatine Monohydrate" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Creatine FAQ",
    node: (
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">
              {f.q}
            </h3>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              {f.a}
            </p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "references",
    title: "References",
    node: (
      <ol className="list-decimal list-inside space-y-2">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Kreider RB, Kalman DS, Antonio J, et al. International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine. J Int Soc Sports Nutr. 2017;14:18.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/28615996/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/28615996/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Rawson ES, Volek JS. Effects of creatine supplementation and resistance training on muscle strength and weightlifting performance. J Strength Cond Res. 2003;17(4):822-831.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/12930169/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/12930169/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Avgerinos KI, Spyrou N, Bougioukas KI, Kapogiannis D. Effects of creatine supplementation on cognitive function of healthy individuals: a systematic review of randomized controlled trials. Exp Gerontol. 2018;108:166-173.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29704637/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29704637/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Burke DG, Chilibeck PD, Parise G, Candow DG, Mahoney D, Tarnopolsky M. Effect of creatine and weight training on muscle creatine and performance in vegetarians. Med Sci Sports Exerc. 2003;35(11):1946-1955.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/14600563/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/14600563/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Chilibeck PD, Kaviani M, Candow DG, Zello GA. Effect of creatine supplementation during resistance training on lean tissue mass and muscular strength in older adults: a meta-analysis. Open Access J Sports Med. 2017;8:213-226.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29191764/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29191764/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Antonio J, Ciccone V. The effects of pre versus post workout supplementation of creatine monohydrate on body composition and strength. J Int Soc Sports Nutr. 2013;10:36.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/23919405/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/23919405/
          </a>
        </li>
      </ol>
    ),
  },
  {
    id: "studies",
    title: "Published Studies",
    node: (
      <div className="space-y-6">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Plain-English summaries of the peer-reviewed studies behind the claims above. Click any title to read the source paper.
        </p>
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#3A759F] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 hover:text-[#3A759F] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need to load creatine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, but loading reaches saturation faster. Without loading: 3–5 g/day for 3–4 weeks reaches full muscle saturation. Loading protocol: 20 g/day for 5–7 days then 5 g/day maintenance reaches saturation in about a week. Both protocols arrive at the same end state. Loading produces rapid water-weight gain and more GI discomfort. Just take 5 g/day daily."
      }
    },
    {
      "@type": "Question",
      "name": "Is creatine monohydrate really the best form?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Monohydrate is the gold standard and there is no reliable head-to-head evidence that HCl, buffered (Kre-Alkalyn), ethyl ester, or other forms outperform it. Jagim 2012 directly compared Kre-Alkalyn and monohydrate and found no differences. Spillane 2009 found ethyl ester is worse. Monohydrate is cheaper, has the entire evidence base behind it, and is used in essentially every positive RCT."
      }
    },
    {
      "@type": "Question",
      "name": "Is creatine safe for my kidneys?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, in healthy individuals — this is one of the most thoroughly debunked supplement myths. Long-term safety studies up to 5 years show no adverse effects on kidney or liver function. The ISSN position stand (Kreider 2017) explicitly states creatine is safe in healthy populations. Pre-existing kidney disease patients should coordinate with nephrology."
      }
    },
    {
      "@type": "Question",
      "name": "Does creatine cause hair loss?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The hair-loss concern comes from a single 2009 trial (van der Merwe) that documented increased DHT with creatine loading. That finding has never been replicated in subsequent trials. The ISSN position stand reviewed the evidence and concluded there is no consistent evidence that creatine accelerates hair loss. The concern is not strongly evidenced."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Creatine Monohydrate: 5 g/day, Strength + Cognition, Why Forms Don't Matter",
  "description": "Creatine monohydrate dosing (5 g/day, loading optional) — Strong evidence for strength and power, Moderate for sarcopenia and cognition, why monohydrate beats HCl/buffered/EE, and the vegetarian responder bonus.",
  "url": "https://profpeptide.com/supplements/creatine",
  "datePublished": "2026-05-04T00:00:00Z",
  "dateModified": "2026-05-28T00:00:00Z",
  "author": {
    "@type": "Organization",
    "name": "Prof. Peptide Editorial Team",
    "url": "https://profpeptide.com/about"
  },
  "reviewedBy": {
    "@type": "Organization",
    "name": "Prof. Peptide Editorial Team",
    "url": "https://profpeptide.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Prof. Peptide",
    "url": "https://profpeptide.com"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://profpeptide.com" },
    { "@type": "ListItem", "position": 2, "name": "Supplements", "item": "https://profpeptide.com/supplements" },
    { "@type": "ListItem", "position": 3, "name": "Creatine" }
  ]
};

export default function CreatinePage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Creatine</h1>
        <span className="tag">Recovery &amp; Tissue Repair</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 28, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Creatine monohydrate (gold standard), Creapure (branded pharmaceutical-grade source), micronized creatine; marketing variants without head-to-head superiority: creatine HCl, buffered creatine (Kre-Alkalyn), creatine ethyl ester, creatine pyruvate, creatine malate
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Supplement Class:</span> Endogenously synthesized amino acid derivative / phosphocreatine substrate for rapid ATP regeneration / cell volumization agent / satellite cell activation factor / brain energy substrate / the most-studied sports supplement in existence
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Evidence Tier:</span> Multi-tier breakdown. <span className="font-semibold">Strength, power, and lean mass gains</span>: Strong (Rawson 2003 meta-analysis — ~8% greater strength gains, ~14% greater weightlifting performance vs placebo with resistance training; replicated across hundreds of trials). <span className="font-semibold">Sarcopenia / older adults</span>: Moderate (Chilibeck 2017 meta — meaningful lean mass and strength improvements with resistance training in &gt;50-year-olds). <span className="font-semibold">Cognitive function</span>: Emerging-Moderate (Avgerinos 2018 meta — short-term memory and reasoning improvements; effect larger in older adults, sleep-deprived, vegetarians/vegans; smaller in young omnivores). <span className="font-semibold">Vegetarian/vegan responder bonus</span>: Strong mechanism (Burke 2003 — lower baseline creatine, larger relative gains). ISSN position stand (Kreider 2017) is the foundational comprehensive reference.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is creatine?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Creatine is a naturally occurring compound synthesized in the body from the amino acids arginine, glycine, and methionine, and obtained from red meat and fish in the diet (~1–2 g/day in typical omnivorous diets). It is stored primarily in skeletal muscle as phosphocreatine (PCr) — the rapid energy reserve that donates phosphate to ADP to regenerate ATP during high-intensity, short-duration efforts. Supplemental creatine is the most extensively researched sports supplement in existence: 500+ peer-reviewed studies, comprehensively summarized in the ISSN position stand (Kreider 2017). Supplementation increases muscle PCr stores by 20–40%, extending the duration of maximal effort before fatigue. The honest evidence summary follows a clear multi-tier breakdown: <span className="font-semibold">Strong evidence</span> for strength, power, and lean mass gains in resistance training contexts (Rawson 2003 meta-analysis documents ~8% strength gain and ~14% weightlifting performance gain vs placebo when combined with training; effect sizes among the largest documented for any sports supplement); <span className="font-semibold">Moderate evidence</span> for older-adult applications including sarcopenia prevention, muscle function preservation, and bone density support (Chilibeck 2017); <span className="font-semibold">Emerging-Moderate evidence</span> for cognitive function — Avgerinos 2018 meta-analysis documented memory and reasoning improvements, with effect sizes larger in older adults, sleep-deprived users, and vegetarians/vegans (smaller and less consistent in young healthy omnivores who already have adequate dietary creatine). A distinctive pharmacological feature: vegetarians and vegans have lower baseline muscle and brain creatine stores and show larger relative responses to supplementation than omnivores (Burke 2003 in muscle/performance; Rae 2003 in cognition) — this is the vegetarian responder bonus that makes creatine one of the highest-impact supplements for plant-based eaters. Form selection is one of the cleanest decisions in supplementation: creatine monohydrate is the gold standard with the entire evidence base behind it, and head-to-head trials have repeatedly failed to demonstrate superiority of HCl (Concret), buffered creatine (Kre-Alkalyn — directly tested vs monohydrate in Jagim 2012 with no advantage), ethyl ester (Spillane 2009 found it worse than monohydrate), pyruvate, malate, or other marketing variants. Micronized monohydrate mixes better in liquid but produces the same muscle saturation. The Creapure brand (German pharmaceutical-grade manufacturer AlzChem) is the most-studied source. Standard dose: 5 g/day, every day, indefinitely. Loading is optional. Safety is exceptional: long-term studies up to 5 years show no adverse effects on kidney or liver function in healthy users; the &quot;kidney damage&quot; concern is one of the most thoroughly debunked supplement myths.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Strength gains (~8% greater than training alone; Rawson 2003 meta)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Lean mass gains (1–2 kg additional over 4–12 weeks with resistance training)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Power output and repeated high-intensity exercise performance</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Sarcopenia prevention and muscle function in older adults (Chilibeck 2017)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Bone density support in older adults via mechanical loading</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Short-term memory and reasoning (Avgerinos 2018; largest effect in older adults, sleep-deprived, vegetarians/vegans)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Vegetarian/vegan responder bonus — larger gains than in omnivores (Burke 2003)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Acute cognitive performance during sleep deprivation (Cook 2011)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Emerging evidence for neurodegenerative disease adjunct (Parkinson&apos;s, Huntington&apos;s, ALS, TBI — specialty clinical contexts)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common dose:</span> 5 g/day creatine monohydrate, every day, indefinitely. Loading is optional (20 g/day for 5–7 days then 5 g/day maintenance — reaches saturation faster, same end state). Form: creatine monohydrate (Creapure-sourced ideally). Micronized variant mixes better. No timing window required — consistency beats time-of-day. Powder is dramatically more cost-efficient than capsules at 5 g/day.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Watch for:</span> Intracellular water-weight gain (1–2 kg in first 1–2 weeks — desired, not bloat); GI discomfort during loading (split into 4 × 5 g); pre-existing kidney disease coordination with nephrology; serum creatinine elevation on labs is expected and doesn&apos;t mean kidney damage; hair-loss concern not strongly evidenced (single 2009 trial, never replicated); skip the HCl/buffered/EE marketing variants — no head-to-head superiority over monohydrate.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=creatine+monohydrate+creapure+micronized&tag=profpeptide-20" label="Creatine Monohydrate" />
        </div>
      </div>

      <PageTOC sections={tocSections} />

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-20">
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              {s.title}
            </h2>
            {s.intro && (
              <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
                {s.intro}
              </p>
            )}
            {s.node && s.node}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((item, i) => (
                  <li key={i} className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Monohydrate", "Strength", "Cognition", "Sarcopenia", "Vegetarian Bonus", "ISSN Position Stand"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/beta-alanine" className="text-sm font-medium text-[#3A759F] hover:underline">Beta-Alanine</Link>
          <Link href="/supplements/l-citrulline-malate" className="text-sm font-medium text-[#3A759F] hover:underline">L-Citrulline Malate</Link>
          <Link href="/supplements/protein-powder" className="text-sm font-medium text-[#3A759F] hover:underline">Protein Powder</Link>
          <Link href="/supplements/electrolyte-powders" className="text-sm font-medium text-[#3A759F] hover:underline">Electrolyte Powders</Link>
          <Link href="/supplements/bcaas" className="text-sm font-medium text-[#3A759F] hover:underline">BCAAs</Link>
          <Link href="/supplements/glutamine" className="text-sm font-medium text-[#3A759F] hover:underline">Glutamine</Link>
        </div>
      </div>

      <div className="mt-6 p-5 border border-[#3A759F]/20 bg-[#3A759F]/10 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Comparisons</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/compare/creatine-vs-beta-alanine" className="text-sm font-medium text-[#3A759F] hover:underline">Creatine vs Beta-Alanine &rarr;</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Creatine" pagePath="/supplements/creatine" />
    </div>
    </>
  );
}
