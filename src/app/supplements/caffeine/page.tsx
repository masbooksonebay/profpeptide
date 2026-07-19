import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/caffeine",
  title: "Caffeine: The Most-Researched Stimulant — Dose, Tolerance, Stacks",
  description:
    "Caffeine dosing (3–6 mg/kg), tolerance management, the fat-oxidation and performance evidence, and how it stacks with Semax and L-theanine for cleaner focus.",
});

const faqs = [
  {
    q: "What's the optimal caffeine dose for performance vs general use?",
    a: "For exercise performance: 3–6 mg/kg body weight taken 30–60 minutes before training is the evidence-supported range from the ISSN position stand. For a 70 kg person, that's 210–420 mg. For general cognitive/alertness use: 100–200 mg per dose, total daily under 400 mg (the FDA's safety guidance for healthy adults). The performance window is dose-dependent up to ~6 mg/kg; above that, side effects scale faster than benefits. Most healthy users plateau on benefit above 400 mg/day daily.",
  },
  {
    q: "How fast does caffeine tolerance develop?",
    a: "Faster than most users realize. Tolerance to the alertness, vasoconstriction, and anxiolytic-by-comparison effects develops within 5–7 days of regular use. Tolerance to performance-enhancing effects (endurance, fat oxidation, strength) is partial and slower — performance benefits are partly preserved even in habitual users. The practical implication: if you want the acute alertness boost to feel pronounced, cycle (5 days on, 2 days off) or use only on demand. If you're using it for performance, daily use is fine but the subjective hit fades.",
  },
  {
    q: "Why do some people get jittery and others don't?",
    a: "Genetic variation in caffeine metabolism. The CYP1A2 enzyme metabolizes caffeine; fast metabolizers (about half the population) clear caffeine in 3–4 hours and tolerate higher doses without anxiety, while slow metabolizers (the other half) take 6–8+ hours to clear it and experience more jitters, anxiety, and sleep disruption at standard doses. Slow metabolizers may also have elevated cardiovascular risk with high coffee intake per some research. If you get jittery on 200 mg or can't sleep after morning coffee, you're likely a slow metabolizer — drop to 50–100 mg per dose and avoid afternoon intake. Genetic testing (23andMe and similar) can confirm.",
  },
  {
    q: "When should I cut off caffeine before bed?",
    a: "At least 6 hours before bedtime for most users; 8–10 hours for slow metabolizers. Caffeine's half-life is 5–6 hours in average metabolizers, meaning a 200 mg afternoon dose still has 100 mg circulating 6 hours later — enough to meaningfully disrupt sleep architecture even if you can fall asleep. The conservative rule: noon is the last reasonable caffeine time for most users with normal sleep schedules. If you're a slow metabolizer or sleep-sensitive, push that to 10 AM or earlier.",
  },
  {
    q: "Can I stack caffeine with Semax for focus?",
    a: (
      <>
        Yes — the stack is mechanistically natural and addresses different layers of focus and cognitive function.{" "}
        <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>{" "}
        is an ACTH(4-10) analog that modulates BDNF and neurotrophic signaling — sustained focus, motivation, and stress resilience effects that don&apos;t produce the adrenergic edge caffeine does. Caffeine operates at adenosine receptors (alertness, fatigue suppression) and indirectly raises dopamine/norepinephrine — fast acting but with a stimulant tail. The peptides do neurotrophic and motivational signaling; caffeine does the acute adenosine-blockade arousal layer. The stack is particularly useful for users who like caffeine&apos;s acute lift but want the cognitive depth (sustained focus, complex-task performance) that pure adenosine blockade doesn&apos;t deliver. No known negative interactions.
      </>
    ),
  },
  {
    q: "Caffeine + L-theanine — what's the science behind this combo?",
    a: (
      <>
        It&apos;s one of the better-studied nootropic stacks. The canonical 1:2 ratio —{" "}
        <Link href="/supplements/caffeine-l-theanine" className="text-[#3A759F] hover:underline">100 mg caffeine + 200 mg L-theanine</Link>{" "}
        — produces measurably better attention switching, executive control, and reaction time than caffeine alone in multiple double-blind RCTs (Owen 2008, Haskell 2008, Giesbrecht 2010). The L-theanine appears to blunt caffeine&apos;s adrenergic side effects (anxiety, vasoconstriction, jitters) while preserving the cognitive benefits. The stack is also the closest pharmacological replication of brewed tea&apos;s &ldquo;clean focus&rdquo; profile — which makes sense given that tea contains both compounds naturally. If caffeine alone makes you anxious, this stack is the cleaner experience.
      </>
    ),
  },
  {
    q: "Does coffee count, or do I need anhydrous caffeine?",
    a: "Coffee counts — and for non-performance use, coffee delivers caffeine plus additional bioactive compounds (chlorogenic acids, polyphenols, trigonelline) with their own metabolic and longevity benefits. Coffee consumption is associated with reduced risk of type 2 diabetes, Parkinson's disease, liver disease, and all-cause mortality in large epidemiological cohorts. For pre-workout performance dosing where precise quantification matters, anhydrous caffeine tablets (200 mg per tablet, easy to dose) are cleaner — you know exactly how much you took. For everyday alertness, coffee is fine and arguably better.",
  },
  {
    q: "Should I cycle caffeine? Take tolerance breaks?",
    a: "Depends on what you want. For maintaining the acute alertness hit: yes, cycle (5 days on, 2 days off, or weekday-only use). Tolerance to the subjective \"kick\" rebuilds within a few days off. For performance use: cycling helps preserve the larger dose-response effect during competition or hard training. For general daily-coffee users not pursuing acute peaks: no, you don't need to cycle — habitual moderate caffeine use is associated with positive health outcomes in cohort studies. The withdrawal headache that hits at 24–48 hours off caffeine is real but transient (2–3 days).",
  },
];

const studies = [
  {
    title: "International Society of Sports Nutrition Position Stand: Caffeine and Exercise Performance",
    authors: "Guest NS, VanDusseldorp TA, Nelson MT, et al.",
    journal: "Journal of the International Society of Sports Nutrition",
    year: "2021",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/33388079/",
    summary: "The updated 2021 ISSN position stand synthesizing decades of caffeine + performance research. Key conclusions: 3–6 mg/kg body weight 30–60 minutes pre-exercise improves endurance, sprint, strength, and power performance. Effect sizes range from 2–4% (endurance) to 1–3% (strength). Genetic polymorphisms (CYP1A2, ADORA2A) explain meaningful interindividual variation in response. The position stand is the reference consensus document for caffeine in athletic performance.",
  },
  {
    title: "Caffeine: A Double-Blind, Placebo-Controlled Study of Its Thermogenic, Metabolic, and Cardiovascular Effects",
    authors: "Astrup A, Toubro S, Cannon S, Hein P, Breum L, Madsen J",
    journal: "American Journal of Clinical Nutrition",
    year: "1990",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/2333832/",
    summary: "The foundational metabolic effects trial. Documented dose-dependent thermogenic response to caffeine: 100 mg produced ~5% increase in resting metabolic rate; 400 mg produced ~11% increase. Fat oxidation increased proportionally. The thermogenic effect is preserved even in habitual caffeine users (partial tolerance, not complete tolerance). Astrup 1990 is the canonical metabolic-rate reference for caffeine's role in fat-loss protocols.",
  },
  {
    title: "Coffee, Caffeine, and Health Outcomes: An Umbrella Review",
    authors: "Poole R, Kennedy OJ, Roderick P, et al.",
    journal: "BMJ",
    year: "2017",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/29167102/",
    summary: "An umbrella review of 218 meta-analyses synthesizing observational and interventional data on coffee/caffeine and 78 different health outcomes. Moderate coffee consumption (3–4 cups/day) was associated with reduced risk of all-cause mortality, cardiovascular mortality, cardiovascular disease, type 2 diabetes, liver cirrhosis, liver cancer, and Parkinson's disease. The largest umbrella review of coffee/caffeine health outcomes — provides the strongest evidence summary that habitual moderate caffeine use is net-beneficial for general health in healthy adults.",
  },
  {
    title: "Caffeine and Cognitive Performance: A Systematic Review and Meta-Analysis",
    authors: "McLellan TM, Caldwell JA, Lieberman HR",
    journal: "Neuroscience and Biobehavioral Reviews",
    year: "2016",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/27612937/",
    summary: "A systematic review synthesizing caffeine's cognitive effects across attention, vigilance, reaction time, memory, and executive function. Doses of 75–300 mg consistently improved vigilance, reaction time, and sustained attention. Memory effects were smaller and more dose-dependent. The cognitive evidence is strongest in fatigued or sleep-deprived populations — caffeine restores performance toward baseline rather than elevating it above baseline in well-rested users.",
  },
  {
    title: "Caffeine Effects on Sleep Taken 0, 3, or 6 Hours Before Going to Bed",
    authors: "Drake C, Roehrs T, Shambroom J, Roth T",
    journal: "Journal of Clinical Sleep Medicine",
    year: "2013",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/24235903/",
    summary: "A controlled trial of 400 mg caffeine taken 0, 3, or 6 hours before bedtime in healthy adults. Caffeine taken even 6 hours before bed reduced total sleep time by ~1 hour and significantly disrupted sleep architecture versus placebo. The trial established that the conservative \"6 hours before bed\" rule may be insufficient for sleep-sensitive users — afternoon caffeine has measurable next-night sleep consequences for many users.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does caffeine work?",
    intro:
      "Caffeine works primarily through adenosine receptor antagonism in the brain — blocking the inhibitory neurotransmitter that accumulates during wakefulness and signals tiredness. This produces the alertness, focus, and reduced perceived effort effects. Secondary mechanisms include phosphodiesterase inhibition, modest catecholamine release, and thermogenic effects via norepinephrine-mediated brown adipose tissue activation.",
    body: [
      "Adenosine receptor antagonism (primary). Caffeine is a competitive antagonist at A1 and A2A adenosine receptors. Adenosine accumulates in the brain during wakefulness and binds these receptors to produce drowsiness, reduce neuronal activity, and signal sleep pressure. By blocking adenosine, caffeine maintains higher neural firing rates — producing alertness, focus, and reduced fatigue perception.",
      "Indirect catecholamine release. Adenosine normally inhibits dopamine and norepinephrine release; blocking adenosine receptors indirectly increases catecholamine signaling. This contributes to caffeine&apos;s motivational and mood-elevating effects, and to the adrenergic side effects (elevated heart rate, vasoconstriction, jitters) at higher doses.",
      "Thermogenesis via norepinephrine. Caffeine increases norepinephrine-mediated thermogenesis through brown adipose tissue activation, raising resting metabolic rate by 3–11% dose-dependently (Astrup 1990). The thermogenic effect is partially preserved in habitual users — tolerance is incomplete for this arm.",
      "Fat oxidation enhancement. Caffeine increases hormone-sensitive lipase activity and shifts substrate utilization toward fat during moderate-intensity exercise. Meta-analyses show 10–29% increased fat oxidation during exercise with pre-exercise caffeine. Synergistic with EGCG from green tea extract.",
      "Phosphodiesterase inhibition (modest at typical doses). Caffeine inhibits phosphodiesterase, the enzyme that breaks down cAMP. This amplifies adrenergic signaling and contributes to the metabolic effects. At typical supplemental doses (100–400 mg), PDE inhibition is modest; pharmacological doses (much higher) would be required for major PDE effects.",
      "Performance-enhancement mechanism. The performance-improving effect in exercise is a combination of central effects (reduced perceived effort) and peripheral effects (calcium release from sarcoplasmic reticulum, fat oxidation shift). The result: 2–4% endurance improvement, 1–3% strength improvement at 3–6 mg/kg pre-workout doses.",
    ],
  },
  {
    id: "research",
    title: "What does caffeine actually do?",
    intro:
      "Caffeine has one of the deepest and most consistent human RCT evidence bases of any compound — supplement or pharmaceutical. The performance, cognitive, metabolic, and population-health outcomes are well-established. Effect sizes are moderate but consistent across hundreds of trials and meta-analyses.",
    body: [
      "Exercise performance (Strong). ISSN 2021 position stand synthesizes 300+ trials: 3–6 mg/kg pre-exercise improves endurance (2–4%), sprint performance, strength (1–3%), and power output. Replicated across running, cycling, resistance training, team sports.",
      "Cognitive performance (Strong). McLellan 2016 meta-analysis confirms vigilance, reaction time, and sustained attention improvements at 75–300 mg. Memory effects are smaller and dose-dependent. Strongest effects in fatigued or sleep-deprived populations.",
      "Thermogenesis and fat oxidation (Strong). Astrup 1990 documented dose-dependent metabolic rate increase (5% at 100 mg, 11% at 400 mg). Fat oxidation enhancement is replicated across trials, particularly during moderate-intensity exercise.",
      "Long-term health outcomes (Moderate-Strong observational). Poole 2017 BMJ umbrella review of 218 meta-analyses: moderate coffee/caffeine consumption (3–4 cups/day) associated with reduced all-cause mortality, cardiovascular disease, T2D, Parkinson&apos;s, liver disease. Observational data — confounding is a real consideration — but the directional signal is consistent.",
      "Appetite suppression (Moderate). Modest acute appetite reduction; effect size is small relative to GLP peptides or genuine satiety interventions.",
      "Mood and anxiety (Mixed). Modest mood elevation in non-anxious users; anxiety provocation in slow metabolizers or panic-disorder users. CYP1A2 genotype explains much of the interindividual variation.",
      "Sleep disruption (Strong). Drake 2013 documented 1-hour total sleep reduction even with caffeine taken 6 hours before bed. The 5–6 hour half-life means afternoon caffeine has measurable next-night sleep consequences for most users.",
    ],
  },
  {
    id: "dosing",
    title: "How is caffeine dosed?",
    intro:
      "Caffeine dosing depends on goal. For exercise performance: 3–6 mg/kg body weight 30–60 minutes pre-training (ISSN position-stand range). For general alertness/cognition: 100–200 mg per dose, total daily under 400 mg (FDA safety guidance for healthy adults). Slow metabolizers (CYP1A2 genotype) need lower doses and later cutoff times.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pre-exercise performance dose.</span> 3–6 mg/kg body weight, 30–60 minutes pre-workout. For a 70 kg person: 210–420 mg. The ISSN-validated range; effect is dose-dependent up to ~6 mg/kg.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">General alertness / cognitive use.</span> 100–200 mg per dose; total daily under 400 mg (FDA safety guidance). Coffee provides ~95 mg/cup; anhydrous tablets are typically 200 mg.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Low-tolerance / slow-metabolizer dose.</span> 50–100 mg per dose; cutoff at noon or earlier. CYP1A2 slow metabolizers (about half the population) need this conservative range.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pregnancy.</span> Limit to 200 mg/day (FDA guidance). Coffee provides ~95 mg/cup; one cup with moderate caution is the practical interpretation.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Upper limit.</span> 400 mg/day for healthy adults (FDA safety guidance). Doses above 600 mg/day are not recommended for routine use — adverse effects (anxiety, insomnia, GI upset, cardiovascular strain) scale faster than benefits.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: peak plasma concentration in 30–60 minutes; half-life 5–6 hours (3–4 hours in fast metabolizers, 7–10 hours in slow metabolizers). Tolerance to subjective alertness develops within 5–7 days of regular use; performance tolerance is partial and slower.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Source equivalence.</span> Coffee ~95 mg/cup; tea ~50 mg/cup; energy drinks 80–300 mg/can; anhydrous tablets 100–200 mg. Coffee delivers additional bioactive compounds (chlorogenic acids, polyphenols) that anhydrous caffeine doesn&apos;t — for general use, coffee is arguably superior to tablets. For precise pre-workout dosing, tablets are cleaner.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take caffeine",
    intro:
      "Caffeine is consumed orally as coffee, tea, energy drinks, anhydrous tablets, pre-workout formulas, chocolate, and many other vehicles. The practical considerations are dose precision, timing relative to sleep, and total daily intake tracking. The points below cover the details that experienced users converge on.",
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">1–3 servings daily; cycle (5 on / 2 off) to preserve acute alertness response; single pre-workout dose for performance use.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Morning to early afternoon. Last dose by noon for most users; 10 AM cutoff for slow metabolizers or sleep-sensitive users. 30–60 minutes pre-exercise for performance.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Either — absorption is fast (peak in 30–60 min) regardless of food. With food may reduce GI upset; empty stomach produces slightly faster onset.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Coffee (~95 mg/cup, plus bioactive compounds); tea (~50 mg, plus L-theanine for cleaner focus); anhydrous tablets (100–200 mg, precise dosing); pre-workout formulas (varied 150–400 mg, watch for stimulant stacks). Energy drinks: high caffeine + high sugar usually.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">For anhydrous tablets: look for &ldquo;200 mg caffeine anhydrous&rdquo; explicitly. For coffee/tea: organic and freshly roasted/loose-leaf for the additional bioactive compound profile. Athletes: Informed Sport or NSF Certified for Sport for contamination testing in pre-workout formulas.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Optional. 5 days on / 2 days off preserves the acute alertness hit; weekday-only use is a common practical pattern. Habitual moderate daily use is also fine — performance benefits partially preserved despite alertness tolerance.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does caffeine stack with?",
    intro:
      "Caffeine stacks naturally with the broader cognitive, performance, and metabolic toolkit. Its acute adenosine-blockade mechanism complements neurotrophic peptides, GABAergic anxiolytics, and metabolic adjuncts. The three areas below cover the natural stacking categories.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Caffeine pairs naturally with the cognitive peptide cluster.{" "}
            <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>{" "}
            is an ACTH(4-10) analog that modulates BDNF and neurotrophic signaling — sustained focus, motivation, and stress resilience effects that operate at a different layer than caffeine&apos;s adenosine antagonism. Caffeine handles the acute adenosine-blockade alertness arm and the indirect catecholamine release; Semax handles the neurotrophic and BDNF signaling layer. The stack delivers acute alertness plus cognitive depth — particularly useful for complex-task work where caffeine alone produces wired-but-unfocused. No known negative interactions. Introduce one variable at a time when starting a new stack so you can tell what&apos;s actually doing what.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/caffeine-l-theanine" className="text-[#3A759F] hover:underline">L-theanine (1:2 ratio)</Link>{" "}
              — 100 mg caffeine + 200 mg L-theanine is the canonical &ldquo;clean focus&rdquo; stack with multiple RCT evidence (Owen 2008, Haskell 2008, Giesbrecht 2010). L-theanine blunts caffeine&apos;s adrenergic edge while preserving cognitive benefits.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/alpha-gpc" className="text-[#3A759F] hover:underline">Alpha-GPC</Link>{" "}
              — acetylcholine substrate. Caffeine raises arousal; Alpha-GPC provides the cholinergic fuel. Synergistic for focus, particularly in racetam-stack contexts.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/green-tea-extract" className="text-[#3A759F] hover:underline">Green tea extract (EGCG)</Link>{" "}
              — synergistic fat oxidation. Caffeine + EGCG produces additive fat-burning effects beyond caffeine alone — core combination in evidence-based fat-loss protocols.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/creatine" className="text-[#3A759F] hover:underline">Creatine</Link>{" "}
              — classic pre-workout stack. Some early research suggested caffeine blunts creatine&apos;s effect; subsequent trials don&apos;t replicate this. Generally compatible.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Tyrosine — additional dopamine/norepinephrine precursor for cognitive demand under stress. Common military/aviation protocol pairing with caffeine.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pre-workout timing.</span> 30–60 minutes before training at 3–6 mg/kg for performance-relevant effects.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cognitive-demand timing.</span> 30–45 minutes before deep work blocks. Avoid stacking with high-stress meetings if you&apos;re prone to anxiety on caffeine.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sleep protection.</span> Hard cutoff at noon for most users; 10 AM for slow metabolizers. The Drake 2013 trial showed measurable sleep disruption even 6 hours pre-bed.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hydration pairing.</span> Caffeine is a mild diuretic; pair with adequate water and electrolytes, particularly during high-volume training.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycling for hit preservation.</span> 5 days on / 2 days off preserves the acute alertness hit. Optional but worthwhile if you want the subjective lift to feel pronounced.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "Caffeine has an extensive safety profile in moderate doses. The main practical considerations are anxiety/jitteriness (especially in slow metabolizers), sleep disruption, cardiovascular effects at high doses, and withdrawal symptoms in habitual users.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Jitteriness, anxiety, restlessness — dose-related, more pronounced in slow CYP1A2 metabolizers and naive users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Insomnia and sleep architecture disruption — particularly with afternoon dosing.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Elevated heart rate and blood pressure — modest, dose-related.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">GI upset — occasional, generally at higher doses or empty stomach.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild diuresis — increased urinary output, partially attenuated in habitual users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Withdrawal headache and fatigue — develops 12–24 hours after last dose in habitual users; resolves in 2–3 days.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Atrial fibrillation provocation — possible in users with existing arrhythmia tendency at high doses.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Worsening of panic disorder, GAD, or essential tremor.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Caffeine toxicity at extreme doses (10+ grams; relevant only with anhydrous caffeine powder dosing errors — there have been fatalities).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">GERD exacerbation — caffeine relaxes the lower esophageal sphincter; problematic in reflux-prone users.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">SSRIs, MAOIs, and other psychiatric medications.</span> Variable interactions; some SSRIs slow caffeine metabolism. Coordinate with prescribing clinician for chronic use.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Stimulant medications (ADHD drugs, modafinil).</span> Additive stimulation; watch total stimulant load. Reduce caffeine if over-stimulated.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Theophylline, ephedrine, yohimbine — additive sympathomimetic effects.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Hormonal contraceptives — slow CYP1A2 caffeine metabolism, extending half-life. May increase jitters and sleep disruption.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Smoking — induces CYP1A2 and speeds caffeine clearance. Quitting smoking can cause apparent caffeine overdose at previously-tolerated doses.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pregnancy — limit to 200 mg/day. High caffeine intake associated with reduced birth weight and miscarriage risk.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Bone health — high chronic intake may modestly reduce calcium absorption; ensure adequate calcium intake.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about caffeine",
    intro:
      "Caffeine is one of the most-studied compounds in human research — but several open questions remain, particularly around interindividual variability and the gap between observational health benefits and intervention causality.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Coffee vs caffeine — what&apos;s actually doing the work in cohort studies.</span> The Poole 2017 BMJ umbrella review documents extensive coffee-health associations. But coffee contains chlorogenic acids, polyphenols, trigonelline, and other bioactive compounds beyond caffeine — the observational benefits may stem from these, not from caffeine itself. Anhydrous caffeine for general health may not deliver the same outcomes as coffee.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">CYP1A2 genotype interactions.</span> Slow metabolizers tolerate less caffeine and may have elevated cardiovascular risk with high intake. The clinical-relevance threshold (when does genotype actually matter?) and whether testing-based dosing recommendations are warranted remain open.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Long-term performance tolerance.</span> Tolerance to subjective alertness develops quickly; tolerance to performance benefits is partial and slower — but the dose-response curve for habitual users (vs caffeine-naive users) isn&apos;t precisely characterized. The performance dose-response curve may shift over time.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Pregnancy dose-response.</span> Standard guidance is 200 mg/day. The dose-response curve for fetal effects is not precisely defined; whether some pregnant women tolerate more or less than 200 mg/day is genuinely unclear.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Cardiovascular effects in subgroups.</span> Most users tolerate moderate caffeine with no adverse cardiovascular events; some users (particularly with arrhythmia tendency or hypertension) may not. The threshold for individualized recommendations vs general population guidance isn&apos;t clear.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Mental health interactions.</span> Caffeine can worsen anxiety, panic disorder, and bipolar mood instability — but it can also support depression treatment in some users. Subgroup characterization for who benefits vs who worsens is incomplete.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Caffeine toxicity from anhydrous powder.</span> Pure caffeine powder is dangerous because typical kitchen scales can&apos;t accurately measure a 200 mg dose vs a fatal 10,000 mg dose. Multiple deaths reported. Capsules and tablets eliminate this risk; bulk powder is not appropriate for consumer use.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy caffeine",
    intro:
      "Caffeine is the most widely available supplement in the world — coffee, tea, energy drinks, anhydrous tablets, and pre-workout formulas all deliver caffeine. Quality bar varies by form. For precise dosing (pre-workout, performance use), anhydrous tablets from reputable manufacturers are the practical default. The screen below is what we use before clicking through.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Caffeine anhydrous mg per serving explicitly disclosed</span> — typically 100 or 200 mg per tablet/capsule.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Tablets or capsules preferred over pure powder</span> — pure anhydrous powder is dangerous to dose accurately at home (fatal overdoses have occurred).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested</span> — USP, NSF, or ConsumerLab certifications signal independent verification.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Informed Sport or NSF Certified for Sport</span> — critical for tested athletes; pre-workout formulas have a notorious cross-contamination history.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar for any supplement.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No proprietary pre-workout blends</span> that obscure the caffeine dose alongside other stimulants (DMAA, DMHA, synephrine — some of which are banned or unsafe).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">For coffee:</span> freshly roasted, ideally organic, single-origin or specialty grade for the additional polyphenol and antioxidant content beyond caffeine.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Don&apos;t pay a premium</span> for caffeine tablets — anhydrous caffeine is one of the cheapest compounds to produce; high prices are pure marketing.</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=caffeine+supplement&tag=profpeptide-20" label="Caffeine" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Caffeine FAQ",
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
          Guest NS, VanDusseldorp TA, Nelson MT, et al. International society of sports nutrition position stand: caffeine and exercise performance. J Int Soc Sports Nutr. 2021;18(1):1.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/33388079/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/33388079/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Astrup A, Toubro S, Cannon S, et al. Caffeine: a double-blind, placebo-controlled study of its thermogenic, metabolic, and cardiovascular effects in healthy volunteers. Am J Clin Nutr. 1990;51(5):759-767.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/2333832/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/2333832/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Poole R, Kennedy OJ, Roderick P, et al. Coffee consumption and health: umbrella review of meta-analyses of multiple health outcomes. BMJ. 2017;359:j5024.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29167102/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29167102/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          McLellan TM, Caldwell JA, Lieberman HR. A review of caffeine&apos;s effects on cognitive, physical and occupational performance. Neurosci Biobehav Rev. 2016;71:294-312.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/27612937/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/27612937/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Drake C, Roehrs T, Shambroom J, Roth T. Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med. 2013;9(11):1195-1200.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/24235903/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/24235903/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Cornelis MC, El-Sohemy A, Kabagambe EK, Campos H. Coffee, CYP1A2 genotype, and risk of myocardial infarction. JAMA. 2006;295(10):1135-1141.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/16522833/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/16522833/
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
      "name": "What's the optimal caffeine dose for performance vs general use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For exercise performance: 3–6 mg/kg body weight taken 30–60 minutes before training is the evidence-supported range from the ISSN position stand. For a 70 kg person, that's 210–420 mg. For general cognitive/alertness use: 100–200 mg per dose, total daily under 400 mg (the FDA's safety guidance for healthy adults). The performance window is dose-dependent up to ~6 mg/kg; above that, side effects scale faster than benefits."
      }
    },
    {
      "@type": "Question",
      "name": "How fast does caffeine tolerance develop?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Faster than most users realize. Tolerance to the alertness, vasoconstriction, and anxiolytic-by-comparison effects develops within 5–7 days of regular use. Tolerance to performance-enhancing effects (endurance, fat oxidation, strength) is partial and slower — performance benefits are partly preserved even in habitual users. The practical implication: if you want the acute alertness boost to feel pronounced, cycle (5 days on, 2 days off) or use only on demand."
      }
    },
    {
      "@type": "Question",
      "name": "Why do some people get jittery and others don't?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Genetic variation in caffeine metabolism. The CYP1A2 enzyme metabolizes caffeine; fast metabolizers (about half the population) clear caffeine in 3–4 hours and tolerate higher doses without anxiety, while slow metabolizers (the other half) take 6–8+ hours to clear it and experience more jitters, anxiety, and sleep disruption at standard doses. Slow metabolizers may also have elevated cardiovascular risk with high coffee intake per some research."
      }
    },
    {
      "@type": "Question",
      "name": "When should I cut off caffeine before bed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At least 6 hours before bedtime for most users; 8–10 hours for slow metabolizers. Caffeine's half-life is 5–6 hours in average metabolizers, meaning a 200 mg afternoon dose still has 100 mg circulating 6 hours later — enough to meaningfully disrupt sleep architecture even if you can fall asleep. The conservative rule: noon is the last reasonable caffeine time for most users with normal sleep schedules. If you're a slow metabolizer or sleep-sensitive, push that to 10 AM or earlier."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stack caffeine with Semax for focus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — the stack is mechanistically natural and addresses different layers of focus and cognitive function. Semax is an ACTH(4-10) analog that modulates BDNF and neurotrophic signaling — sustained focus, motivation, and stress resilience effects that don't produce the adrenergic edge caffeine does. Caffeine operates at adenosine receptors (alertness, fatigue suppression) and indirectly raises dopamine/norepinephrine — fast acting but with a stimulant tail. The peptides do neurotrophic and motivational signaling; caffeine does the acute adenosine-blockade arousal layer."
      }
    },
    {
      "@type": "Question",
      "name": "Caffeine + L-theanine — what's the science behind this combo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's one of the better-studied nootropic stacks. The canonical 1:2 ratio — 100 mg caffeine + 200 mg L-theanine — produces measurably better attention switching, executive control, and reaction time than caffeine alone in multiple double-blind RCTs (Owen 2008, Haskell 2008, Giesbrecht 2010). The L-theanine appears to blunt caffeine's adrenergic side effects (anxiety, vasoconstriction, jitters) while preserving the cognitive benefits."
      }
    },
    {
      "@type": "Question",
      "name": "Does coffee count, or do I need anhydrous caffeine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Coffee counts — and for non-performance use, coffee delivers caffeine plus additional bioactive compounds (chlorogenic acids, polyphenols, trigonelline) with their own metabolic and longevity benefits. Coffee consumption is associated with reduced risk of type 2 diabetes, Parkinson's disease, liver disease, and all-cause mortality in large epidemiological cohorts. For pre-workout performance dosing where precise quantification matters, anhydrous caffeine tablets are cleaner."
      }
    },
    {
      "@type": "Question",
      "name": "Should I cycle caffeine? Take tolerance breaks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depends on what you want. For maintaining the acute alertness hit: yes, cycle (5 days on, 2 days off, or weekday-only use). Tolerance to the subjective \"kick\" rebuilds within a few days off. For performance use: cycling helps preserve the larger dose-response effect during competition or hard training. For general daily-coffee users not pursuing acute peaks: no, you don't need to cycle — habitual moderate caffeine use is associated with positive health outcomes in cohort studies. The withdrawal headache that hits at 24–48 hours off caffeine is real but transient (2–3 days)."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Caffeine: The Most-Researched Stimulant — Dose, Tolerance, Stacks",
  "description": "Caffeine dosing (3–6 mg/kg), tolerance management, the fat-oxidation and performance evidence, and how it stacks with Semax and L-theanine for cleaner focus.",
  "url": "https://profpeptide.com/supplements/caffeine",
  "datePublished": "2026-04-07T00:00:00Z",
  "dateModified": "2026-05-26T00:00:00Z",
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
    { "@type": "ListItem", "position": 3, "name": "Caffeine" }
  ]
};

export default function CaffeinePage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Caffeine</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 26, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> 1,3,7-trimethylxanthine, caffeine anhydrous, methylxanthine alkaloid, &ldquo;coffee&apos;s active ingredient&rdquo;
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Supplement Class:</span> Methylxanthine alkaloid / adenosine receptor antagonist / CNS stimulant / thermogenic
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Evidence Tier:</span> Strong — one of the most-studied compounds in human research; ISSN 2021 position stand for performance (3–6 mg/kg); Astrup 1990 thermogenesis evidence; Poole 2017 BMJ umbrella review of 218 meta-analyses for general health outcomes; McLellan 2016 cognitive performance meta-analysis; FDA GRAS classification; effects are moderate but extraordinarily consistent
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is caffeine?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Caffeine is a naturally occurring methylxanthine alkaloid found in coffee, tea, cacao, guarana, and many other plants — the most widely consumed psychoactive substance in the world (80%+ of adults consume it daily). It is also one of the most extensively researched compounds in human science: hundreds of double-blind trials, multiple ISSN position stands, and the Poole 2017 BMJ umbrella review of 218 meta-analyses on coffee/caffeine outcomes. Caffeine&apos;s primary mechanism is competitive antagonism at adenosine receptors — blocking the inhibitory neurotransmitter that signals sleepiness, producing alertness, reduced fatigue perception, and indirect catecholamine release. Secondary mechanisms include thermogenesis (3–11% resting metabolic rate increase per Astrup 1990), fat oxidation enhancement during exercise, and modest phosphodiesterase inhibition. Caffeine&apos;s effect-size profile is moderate but consistent — endurance performance improves 2–4%, strength 1–3%, cognition reliably in fatigued users. Genetic variation in CYP1A2 metabolism explains much of the interindividual variability in tolerance and response. Caffeine pairs naturally with{" "}
            <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">cognitive peptides like Semax</Link>{" "}
            and with{" "}
            <Link href="/supplements/caffeine-l-theanine" className="text-[#3A759F] hover:underline">L-theanine (1:2 ratio)</Link>{" "}
            for cleaner focus without the adrenergic edge.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Endurance performance improvement (2–4%) at 3–6 mg/kg pre-exercise (ISSN 2021 position stand)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Strength and power performance improvement (1–3%)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Vigilance, reaction time, and sustained attention improvements (McLellan 2016 meta-analysis)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Resting metabolic rate increase 3–11% dose-dependent (Astrup 1990)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Fat oxidation enhancement 10–29% during moderate-intensity exercise</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Moderate coffee intake associated with reduced T2D, Parkinson&apos;s, liver disease, all-cause mortality (Poole 2017 umbrella review)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Synergistic with EGCG (green tea) for fat oxidation and with L-theanine for clean cognitive focus</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common dose:</span> 3–6 mg/kg body weight 30–60 minutes pre-exercise for performance (ISSN protocol). 100–200 mg per dose for general cognitive/alertness use; total daily under 400 mg (FDA safety guidance for healthy adults). Slow CYP1A2 metabolizers may need 50–100 mg doses with morning-only timing.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Sleep cutoff:</span> Noon for most users; 10 AM for slow metabolizers. Drake 2013 documented measurable sleep disruption even from caffeine taken 6 hours before bed. Half-life is 5–6 hours; afternoon dosing has next-night consequences.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=caffeine+supplement&tag=profpeptide-20" label="Caffeine" />
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
        {["Performance", "Thermogenesis", "Fat Oxidation", "Adenosine Antagonist", "CYP1A2", "GRAS"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/caffeine-l-theanine" className="text-sm font-medium text-[#3A759F] hover:underline">Caffeine + L-Theanine</Link>
          <Link href="/supplements/l-theanine" className="text-sm font-medium text-[#3A759F] hover:underline">L-Theanine</Link>
          <Link href="/supplements/alpha-gpc" className="text-sm font-medium text-[#3A759F] hover:underline">Alpha-GPC</Link>
          <Link href="/supplements/green-tea-extract" className="text-sm font-medium text-[#3A759F] hover:underline">Green Tea Extract</Link>
          <Link href="/supplements/creatine" className="text-sm font-medium text-[#3A759F] hover:underline">Creatine</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Caffeine" pagePath="/supplements/caffeine" />
    </div>
    </>
  );
}
