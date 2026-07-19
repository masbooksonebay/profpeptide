import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/glycine",
  title: "Glycine for Sleep: The 3g Bedtime Protocol With RCT Evidence",
  description:
    "Glycine sleep dosing, body-temperature mechanism, and the 3g RCT protocol that actually works. Plus how it stacks with sleep peptides like DSIP and Selank.",
});

const faqs = [
  {
    q: "How much glycine should I take for sleep?",
    a: "3 grams (3,000 mg), 30–60 minutes before bed. This is the dose used in every major human RCT (Inagawa 2006, Yamadera 2007, Bannai 2012). Higher doses (6 g, 9 g) have been tested in safety studies with no concerning signal but no clear additional sleep benefit. Lower doses (1–2 g) are not well-characterized in sleep trials — they may work for some users but you're below the RCT-validated range.",
  },
  {
    q: "Will glycine make me groggy in the morning?",
    a: "Generally no — and that's the most distinguishing feature of glycine versus other sleep aids. The Bannai 2012 follow-up trial specifically measured next-day fatigue and psychomotor vigilance after partial sleep restriction; the glycine group showed reduced fatigue and better PVT performance versus placebo. The body-temperature mechanism (rather than receptor-level sedation) is the likely reason — glycine helps you fall asleep faster and sleep more efficiently without the next-morning sedation tail of antihistamines or benzodiazepines.",
  },
  {
    q: "How long until glycine starts working?",
    a: "Most users report changes within the first 2–3 nights of consistent use. The published RCTs measured effects within the first week. Glycine isn't a habit-builder like melatonin in that sense — the body-temperature effect operates the night you take it. If you've taken 3 g pre-bed for 7–10 nights and notice nothing, glycine probably isn't your sleep lever. Don't keep pushing the dose higher in hope of an effect that didn't emerge at the RCT dose.",
  },
  {
    q: "Can I take glycine with melatonin or magnesium glycinate?",
    a: (
      <>
        Yes — they target different layers of sleep biology.{" "}
        <Link href="/supplements/melatonin" className="text-[#3A759F] hover:underline">Melatonin</Link>{" "}
        is a circadian signal (when to sleep);{" "}
        <Link href="/supplements/magnesium" className="text-[#3A759F] hover:underline">magnesium glycinate</Link>{" "}
        is GABAergic and neuromuscular relaxation; glycine is body-temperature regulation and inhibitory neurotransmission. No known interactions between the three. Worth knowing: magnesium glycinate already contains some glycine, but a typical 200 mg magnesium glycinate dose provides only ~1 g of glycine — well below the 3 g sleep dose. If you stack them, you still want the full 3 g glycine pre-bed.
      </>
    ),
  },
  {
    q: "Can I stack glycine with DSIP or Selank?",
    a: (
      <>
        Yes — the stack is mechanistically natural and addresses different layers of sleep and recovery.{" "}
        <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">DSIP</Link>{" "}
        (delta sleep-inducing peptide) modulates slow-wave sleep architecture directly — peptide-level intervention on sleep depth.{" "}
        <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>{" "}
        is a tuftsin analog with anxiolytic effects via GABA modulation — useful when sleep is blocked by anxious arousal rather than circadian or thermal issues. Glycine handles the body-temperature drop and sleep-onset latency arm — RCT-validated in healthy adults with mild sleep complaints. Different mechanisms, mechanistically compatible. No known negative interactions.
      </>
    ),
  },
  {
    q: "Will glycine help with diagnosed insomnia or just mild sleep issues?",
    a: "The honest answer: the RCT base is in healthy adults with mild-to-moderate sleep complaints, not diagnosed primary insomnia or chronic insomnia disorder. Sample sizes were small (10–20 subjects per trial), durations were short (single night to a few weeks), and severity was mild. Whether glycine moves the needle in clinical insomnia is genuinely unknown — it might, but the evidence doesn't establish that case. For chronic insomnia, CBT-I is the first-line intervention with the strongest evidence; glycine is reasonable as an adjunct but not a substitute.",
  },
  {
    q: "Does glycine come from animal sources? Is it vegan?",
    a: "Most commercial supplemental glycine is produced via industrial fermentation or chemical synthesis — vegan-suitable regardless of supplier in nearly all cases. Glycine is also naturally abundant in collagen-rich foods (bone broth, skin, gelatin, connective tissue), which is why traditional cooking with bone broth provides a meaningful glycine dose. If you're vegan and want food-source glycine, it's harder to get — beans, lentils, sesame seeds, and pumpkin seeds are the better plant sources but provide far less per serving than animal collagen.",
  },
  {
    q: "Powder vs capsules — which is better?",
    a: "Powder, almost always. Glycine has a faintly sweet taste that's pleasant in water, and a 3 g serving is roughly a level teaspoon — easy to measure. To get 3 g from capsules you need 4–6 large capsules (most are 500 mg), which is annoying to swallow nightly. Powder is also significantly cheaper per gram. The exception is travel or shared bathroom storage where a sealed capsule bottle is more practical than a powder tub.",
  },
];

const studies = [
  {
    title: "Subjective Effects of Glycine Ingestion Before Bedtime on Sleep Quality",
    authors: "Inagawa K, Hiraoka T, Kohda T, et al.",
    journal: "Sleep and Biological Rhythms",
    year: "2006",
    access: "Paywalled",
    url: "https://onlinelibrary.wiley.com/doi/10.1111/j.1479-8425.2006.00193.x",
    summary: "A randomized placebo-controlled crossover trial of 3 g glycine before bed in adults with mild sleep complaints. Glycine significantly improved subjective sleep quality, reduced sleep onset latency, and reduced morning fatigue versus placebo. The first major published RCT to demonstrate glycine's sleep effect in humans and the trial that established the 3 g pre-bed protocol used in nearly all subsequent research.",
  },
  {
    title: "Glycine Ingestion Improves Subjective Sleep Quality in Human Volunteers, Correlating with Polysomnographic Changes",
    authors: "Yamadera W, Inagawa K, Chiba S, et al.",
    journal: "Sleep and Biological Rhythms",
    year: "2007",
    access: "Open Access",
    url: "https://onlinelibrary.wiley.com/doi/10.1111/j.1479-8425.2007.00262.x",
    summary: "A polysomnography-instrumented RCT of 3 g glycine before bed in healthy adults with occasional sleep complaints. Glycine reduced sleep onset latency and improved sleep efficiency, with polysomnographic data confirming changes in actual sleep architecture rather than just subjective perception. The polysomnography arm is what elevated glycine from \"users report better sleep\" to objectively measurable sleep-architecture changes.",
  },
  {
    title: "Effects of Glycine on Subjective Daytime Performance in Partially Sleep-Restricted Healthy Volunteers",
    authors: "Bannai M, Kawai N, Ono K, et al.",
    journal: "Frontiers in Neurology",
    year: "2012",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/22529837/",
    summary: "An RCT examining next-day performance after partial sleep restriction (25% sleep curtailment) with 3 g glycine vs placebo. Glycine reduced subjective fatigue and improved psychomotor vigilance test (PVT) performance the following day. The trial established that glycine's benefit extends beyond the night of supplementation — it can buffer the cognitive cost of insufficient sleep, useful for users facing partial-sleep-restriction situations (travel, shift work, parenting).",
  },
  {
    title: "The Sleep-Promoting and Hypothermic Effects of Glycine Are Mediated by NMDA Receptors in the Suprachiasmatic Nucleus",
    authors: "Kawai N, Sakai N, Okuro M, et al.",
    journal: "Neuropsychopharmacology",
    year: "2015",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/25533534/",
    summary: "A mechanistic study in rats using site-specific NMDA receptor pharmacology to demonstrate that glycine's sleep-promoting and body-temperature-lowering effects depend on NMDA receptors in the suprachiasmatic nucleus (the master circadian clock). The trial provides the cleanest mechanistic explanation for the human RCT findings: glycine acts as an NMDA co-agonist at the SCN, triggering peripheral vasodilation and the core-body-temperature drop that signals sleep onset.",
  },
  {
    title: "Glycine: A Link Between Nutrition and Sleep",
    authors: "Bannai M, Kawai N",
    journal: "Journal of Pharmacological Sciences",
    year: "2012",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/22293292/",
    summary: "A review of the glycine sleep literature through 2012 — covering the Inagawa, Yamadera, and Bannai trials in detail, the body-temperature mechanism, the NMDA co-agonist arm, and safety data through 9 g acute dosing. A useful single-source summary that gives readers the framework to interpret the human RCT literature in context.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does glycine work?",
    intro:
      "Glycine works through two parallel mechanisms that converge on sleep onset. The dominant one is body-temperature regulation: glycine acts at NMDA receptors in the suprachiasmatic nucleus (the master circadian clock), triggering peripheral vasodilation that allows the body to shed heat through the hands and feet. Core body temperature drops, and that drop is one of the strongest biological signals for sleep onset. The secondary arm is direct inhibitory neurotransmission at glycine receptors in the brainstem.",
    body: [
      "NMDA receptor co-agonism at the SCN. Glycine binds the glycine site of NMDA receptors in the suprachiasmatic nucleus, modulating circadian and thermoregulatory signaling. This is the mechanism Kawai 2015 demonstrated using site-specific receptor pharmacology — the cleanest mechanistic explanation for the human sleep findings.",
      "Peripheral vasodilation and core-body-temperature drop. The SCN activation triggers vasodilation in the hands and feet, allowing heat to dissipate and core temperature to fall. Sleep onset is tightly coupled to the core-temperature drop curve; glycine effectively pre-positions you on that curve.",
      "Inhibitory neurotransmission. At glycine receptors in the brainstem and spinal cord, glycine acts as an inhibitory neurotransmitter — the same receptor family targeted by strychnine antagonism. The inhibitory tone contributes to muscle relaxation and may modulate arousal, though this arm is mechanistically secondary to the temperature effect for sleep.",
      "Modest changes in sleep architecture. Polysomnography data (Yamadera 2007, Bannai 2012) show glycine reduces sleep onset latency and increases sleep efficiency. REM sleep architecture is preserved or modestly improved — distinct from sedatives that suppress REM. Slow-wave sleep changes are inconsistent across trials.",
      "Daytime cognitive buffering. The Bannai 2012 follow-up demonstrated improved next-day psychomotor vigilance after partial sleep restriction. The mechanism is likely indirect: better-quality sleep produces better next-day cognition, even when total sleep time is held constant.",
    ],
  },
  {
    id: "research",
    title: "What does glycine actually do?",
    intro:
      "Glycine has one of the cleaner small-RCT evidence bases of any sleep supplement. The Inagawa 2006 / Yamadera 2007 / Bannai 2012 trial sequence consistently shows reduced sleep onset latency, improved subjective sleep quality, and reduced next-day fatigue in healthy adults with mild sleep complaints. Effect sizes are modest in absolute terms but consistent across independent measurement methods (subjective questionnaires + polysomnography + PVT).",
    body: [
      "Sleep onset latency (Strong). 3 g glycine 30–60 minutes pre-bed consistently reduces time to fall asleep across all three major human RCTs. Polysomnography (Yamadera 2007) confirms the subjective finding — this isn't placebo-only.",
      "Subjective sleep quality (Strong). Inagawa 2006 documented significant improvements in self-reported sleep quality and morning refreshedness. Replicated in Yamadera 2007 and Bannai 2012.",
      "Next-day fatigue and cognitive performance (Moderate). Bannai 2012 specifically measured next-day function under partial sleep restriction; the glycine group had less fatigue and better PVT performance than placebo. Useful for shift workers, new parents, and travelers — populations where sleep loss is partial and predictable.",
      "Sleep architecture changes (Moderate). Polysomnography shows improved sleep efficiency and reduced sleep onset latency. REM sleep is preserved; slow-wave sleep changes are inconsistent.",
      "Diagnosed insomnia (Unestablished). All published RCTs are in healthy adults with mild complaints, not diagnosed insomnia disorder. The case for clinical insomnia is mechanistically plausible but not directly supported by trial data.",
    ],
  },
  {
    id: "dosing",
    title: "How is glycine dosed?",
    intro:
      "Glycine dosing is unusually simple: 3 grams pre-bed, every published positive trial. Higher and lower doses have been tested but the 3 g sweet spot is what every effective RCT uses. The taste is faintly sweet and palatable in water — the powder form is the practical default.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard sleep dose.</span> 3 g (3,000 mg) glycine taken 30–60 minutes before bed — the dose used in Inagawa 2006, Yamadera 2007, and Bannai 2012.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Light starter dose.</span> 1–2 g pre-bed for tolerance check or sensitive users. Below the RCT-validated range; may underperform but reasonable for initial trial.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">High dose.</span> 6–9 g has been tested in safety studies with no concerning signal but no clear additional sleep benefit. No reason to exceed 3 g routinely; reserve higher doses for specific contexts only.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Connective-tissue / collagen support.</span> 5–10 g daily (often split AM/PM) for users targeting glycine&apos;s collagen-precursor role rather than sleep. Different use case, different dosing.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: most users notice improved sleep onset and morning refreshedness within 2–3 nights. No loading phase needed — the body-temperature mechanism operates the night you take it.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Label math.</span> A level teaspoon of pure glycine powder is approximately 3 g. Capsules are typically 500–1000 mg, so 3–6 capsules to reach the research dose — annoying but workable. Powder is the practical default for cost and convenience.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take glycine",
    intro:
      "Glycine is taken orally, almost always as powder dissolved in water. The taste is faintly sweet and clean — there's no need to mask it with juice. The points below cover the practical details that experienced users converge on.",
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once nightly for sleep; 1–2× daily if also targeting collagen / connective-tissue support</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">30–60 minutes before bed for the sleep protocol — the body-temperature drop needs time to develop. Earlier dosing may produce mild drowsiness; avoid pre-driving doses on first use.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Empty stomach is fine and possibly preferred — absorption is fast and food isn&apos;t required. Heavy meals just before bed work against the sleep goal anyway.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Powder strongly preferred (taste is mild, dosing is easy, cost is low); capsules work but require 4–6 large caps for 3 g; liquid formulations exist but offer no advantage over powder in water.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Look for &ldquo;L-glycine&rdquo; or &ldquo;pharmaceutical-grade glycine&rdquo; as the single active ingredient. Third-party tested (USP, NSF, ConsumerLab) is the screen; avoid proprietary blends if you want to dose precisely.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No cycling needed — nightly use is the studied protocol. Tolerance development is not a documented concern.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does glycine stack with?",
    intro:
      "Glycine is one of the easier sleep supplements to stack — the body-temperature mechanism doesn't conflict with the GABAergic, circadian, or peptide-level sleep interventions. The three areas below cover the natural stacking categories.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Glycine pairs naturally with the Russian-origin sleep and cognitive peptide cluster.{" "}
            <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">DSIP</Link>{" "}
            (delta sleep-inducing peptide) operates directly on slow-wave sleep architecture — peptide-level intervention at a different layer than glycine&apos;s body-temperature mechanism.{" "}
            <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>{" "}
            (a tuftsin analog) provides anxiolytic effects via GABA modulation — useful when sleep is blocked by anxious arousal rather than circadian or thermal issues. Glycine handles the sleep-onset thermoregulation and inhibitory neurotransmission arms. Mechanistically complementary, no known negative interactions. Introduce one variable at a time when starting a new stack so you can tell what&apos;s actually doing what.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/magnesium" className="text-[#3A759F] hover:underline">Magnesium glycinate</Link>{" "}
              — GABAergic and neuromuscular relaxation. The glycinate form already contains some glycine but at sub-RCT doses; stack the full 3 g glycine separately.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/melatonin" className="text-[#3A759F] hover:underline">Melatonin</Link>{" "}
              — circadian signal (low-dose 0.3–0.5 mg). Different mechanism, fully compatible. Glycine helps you fall asleep; melatonin tells the body it&apos;s the right time to.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/apigenin" className="text-[#3A759F] hover:underline">Apigenin</Link>{" "}
              — GABA-A positive allosteric modulator. Complements glycine&apos;s inhibitory-neurotransmitter arm; both target sleep onset but via different receptor families.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/l-theanine" className="text-[#3A759F] hover:underline">L-Theanine</Link>{" "}
              — alpha-wave relaxation. Useful pre-bed for users with mental chatter; complements the thermoregulation arm.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/tart-cherry" className="text-[#3A759F] hover:underline">Tart cherry</Link>{" "}
              — endogenous melatonin precursor profile plus anti-inflammatory effects on sleep. Compatible chronic-use pairing.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Warm shower/bath 60–90 min pre-bed.</span> Same thermoregulation logic as glycine — the post-bath cool-down accelerates the core-temperature drop. Stacks naturally.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cool bedroom (~65–68°F / 18–20°C).</span> Supports the heat-shedding step glycine facilitates. Hot bedrooms blunt glycine&apos;s mechanism.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Consistent sleep schedule.</span> Glycine works on top of circadian alignment, not as a substitute. Variable bedtimes erode the body-temperature curve glycine is designed to ride.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Partial sleep restriction buffering.</span> Bannai 2012 specifically documented glycine&apos;s benefit on next-day function after curtailed sleep — useful for known short-sleep nights (travel, shift work, parenting).</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "Glycine has one of the cleanest safety profiles of any sleep supplement. Acute doses up to 9 g have been tested without serious adverse events. The main practical issues are mild GI effects at high doses and one specific psychiatric drug interaction.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild GI discomfort — soft stools or mild nausea at higher doses (5 g+). Resolves with dose reduction.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Drowsiness if dosed too early — the body-temperature drop produces mild somnolence. Don&apos;t take 3 g and then drive.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Sweet aftertaste — glycine is faintly sweet; some users find it pleasant, others mildly off-putting.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Vivid dreams — occasionally reported, likely tied to preserved or extended REM during the cooling phase.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No documented serious adverse events at standard 3 g dose across the published RCT base.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Clozapine (antipsychotic).</span> Avoid supplemental glycine — glycine can interfere with clozapine&apos;s efficacy via NMDA-receptor mechanisms. This is the one well-documented contraindication.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Other antipsychotics — theoretical NMDA interaction concern. Coordinate with prescribing clinician if on chronic antipsychotic therapy.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Sedatives (benzodiazepines, Z-drugs, antihistamines) — additive mild sedation possible. Not a contraindication but watch total sedation load on first use.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Other sleep supplements — generally compatible (see Stacks section). The only conflict is over-dosing total inhibitory tone if multiple GABAergic + glycinergic agents are stacked aggressively.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pregnancy — limited data; consult clinician. Glycine is endogenous and food-abundant but supraphysiological supplemental doses in pregnancy aren&apos;t well-characterized.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about glycine",
    intro:
      "Glycine has a clean small-RCT base but several open questions remain — particularly around clinical insomnia transfer, long-term high-dose safety, and the gap between healthy-adult evidence and disease-state populations.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Clinical insomnia evidence.</span> All published positive trials are in healthy adults with mild-to-moderate sleep complaints, not diagnosed primary insomnia or chronic insomnia disorder. Whether 3 g glycine moves the needle in clinical insomnia is genuinely unknown. CBT-I remains first-line for chronic insomnia; glycine is reasonable as adjunct but not substitute.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Long-term daily safety at supplemental doses.</span> Published trials run from single-night to a few-week durations. Multi-year nightly 3 g use is not characterized in controlled trials. The current best inference is that 3 g/night appears safe based on tolerability and short-term data, but the long horizon is unstudied.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Effect-size variability.</span> Sample sizes are small (10–20 subjects per trial). Effect sizes are modest in absolute terms — glycine is not a sedative. Some users will respond robustly; others will see no measurable difference. The trial base doesn&apos;t identify which subgroups respond best.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Sleep-architecture specificity.</span> Polysomnography data is positive on sleep onset and efficiency, but slow-wave sleep changes are inconsistent across trials. Whether glycine meaningfully alters deep-sleep architecture or just sleep-onset speed is not fully resolved.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Dose-response above 3 g.</span> 6 g and 9 g have been tested for safety but not for sleep efficacy versus 3 g. Whether higher doses produce larger or no additional sleep benefit is unknown.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Where studies disagree.</span> The published trial base is small and largely from Japan (Inagawa, Yamadera, Bannai — same research group / collaboration network). Independent replication outside the original group is limited. The directional signal across the small corpus is consistent but the heterogeneity-of-source is real.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy glycine",
    intro:
      "Glycine is one of the easiest supplements to source — pharmaceutical-grade is widely available at low cost. The quality bar is low because the molecule is simple and verification is straightforward. The quality markers below are the screen we use before clicking through.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pharmaceutical-grade or USP-grade L-glycine</span> as the single active ingredient.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested</span> — USP, NSF, or ConsumerLab certifications signal independent verification.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar for any supplement.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No proprietary blends</span> or sleep-stack mixes that obscure the actual glycine dose. You want to dose 3 g of glycine, not 800 mg of glycine plus four other things.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Powder form preferred</span> — cheaper per gram, easier to dose at 3 g, palatable in water.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No unnecessary additives</span> — pure glycine is faintly sweet on its own; no need for flavorings, sweeteners, or fillers.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Don&apos;t pay a premium</span> — glycine is one of the cheapest amino acids to produce; high prices don&apos;t signal better quality here.</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=glycine+powder&tag=profpeptide-20" label="Glycine" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Glycine FAQ",
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
          Inagawa K, Hiraoka T, Kohda T, et al. Subjective effects of glycine ingestion before bedtime on sleep quality. Sleep Biol Rhythms. 2006;4(1):75-77.{" "}
          <a href="https://onlinelibrary.wiley.com/doi/10.1111/j.1479-8425.2006.00193.x" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://onlinelibrary.wiley.com/doi/10.1111/j.1479-8425.2006.00193.x
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Yamadera W, Inagawa K, Chiba S, et al. Glycine ingestion improves subjective sleep quality in human volunteers, correlating with polysomnographic changes. Sleep Biol Rhythms. 2007;5(2):126-131.{" "}
          <a href="https://onlinelibrary.wiley.com/doi/10.1111/j.1479-8425.2007.00262.x" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://onlinelibrary.wiley.com/doi/10.1111/j.1479-8425.2007.00262.x
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Bannai M, Kawai N, Ono K, et al. The effects of glycine on subjective daytime performance in partially sleep-restricted healthy volunteers. Front Neurol. 2012;3:61.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22529837/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22529837/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Bannai M, Kawai N. New therapeutic strategy for amino acid medicine: glycine improves the quality of sleep. J Pharmacol Sci. 2012;118(2):145-148.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22293292/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22293292/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Kawai N, Sakai N, Okuro M, et al. The sleep-promoting and hypothermic effects of glycine are mediated by NMDA receptors in the suprachiasmatic nucleus. Neuropsychopharmacology. 2015;40(6):1405-1416.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/25533534/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/25533534/
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
      "name": "How much glycine should I take for sleep?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "3 grams (3,000 mg), 30–60 minutes before bed. This is the dose used in every major human RCT (Inagawa 2006, Yamadera 2007, Bannai 2012). Higher doses (6 g, 9 g) have been tested in safety studies with no concerning signal but no clear additional sleep benefit. Lower doses (1–2 g) are not well-characterized in sleep trials — they may work for some users but you're below the RCT-validated range."
      }
    },
    {
      "@type": "Question",
      "name": "Will glycine make me groggy in the morning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generally no — and that's the most distinguishing feature of glycine versus other sleep aids. The Bannai 2012 follow-up trial specifically measured next-day fatigue and psychomotor vigilance after partial sleep restriction; the glycine group showed reduced fatigue and better PVT performance versus placebo. The body-temperature mechanism (rather than receptor-level sedation) is the likely reason — glycine helps you fall asleep faster and sleep more efficiently without the next-morning sedation tail of antihistamines or benzodiazepines."
      }
    },
    {
      "@type": "Question",
      "name": "How long until glycine starts working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most users report changes within the first 2–3 nights of consistent use. The published RCTs measured effects within the first week. Glycine isn't a habit-builder like melatonin in that sense — the body-temperature effect operates the night you take it. If you've taken 3 g pre-bed for 7–10 nights and notice nothing, glycine probably isn't your sleep lever. Don't keep pushing the dose higher in hope of an effect that didn't emerge at the RCT dose."
      }
    },
    {
      "@type": "Question",
      "name": "Can I take glycine with melatonin or magnesium glycinate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — they target different layers of sleep biology. Melatonin is a circadian signal (when to sleep); magnesium glycinate is GABAergic and neuromuscular relaxation; glycine is body-temperature regulation and inhibitory neurotransmission. No known interactions between the three. Worth knowing: magnesium glycinate already contains some glycine, but a typical 200 mg magnesium glycinate dose provides only ~1 g of glycine — well below the 3 g sleep dose. If you stack them, you still want the full 3 g glycine pre-bed."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stack glycine with DSIP or Selank?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — the stack is mechanistically natural and addresses different layers of sleep and recovery. DSIP (delta sleep-inducing peptide) modulates slow-wave sleep architecture directly — peptide-level intervention on sleep depth. Selank is a tuftsin analog with anxiolytic effects via GABA modulation — useful when sleep is blocked by anxious arousal rather than circadian or thermal issues. Glycine handles the body-temperature drop and sleep-onset latency arm — RCT-validated in healthy adults with mild sleep complaints. Different mechanisms, mechanistically compatible. No known negative interactions."
      }
    },
    {
      "@type": "Question",
      "name": "Will glycine help with diagnosed insomnia or just mild sleep issues?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The honest answer: the RCT base is in healthy adults with mild-to-moderate sleep complaints, not diagnosed primary insomnia or chronic insomnia disorder. Sample sizes were small (10–20 subjects per trial), durations were short (single night to a few weeks), and severity was mild. Whether glycine moves the needle in clinical insomnia is genuinely unknown — it might, but the evidence doesn't establish that case. For chronic insomnia, CBT-I is the first-line intervention with the strongest evidence; glycine is reasonable as an adjunct but not a substitute."
      }
    },
    {
      "@type": "Question",
      "name": "Does glycine come from animal sources? Is it vegan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most commercial supplemental glycine is produced via industrial fermentation or chemical synthesis — vegan-suitable regardless of supplier in nearly all cases. Glycine is also naturally abundant in collagen-rich foods (bone broth, skin, gelatin, connective tissue), which is why traditional cooking with bone broth provides a meaningful glycine dose. If you're vegan and want food-source glycine, it's harder to get — beans, lentils, sesame seeds, and pumpkin seeds are the better plant sources but provide far less per serving than animal collagen."
      }
    },
    {
      "@type": "Question",
      "name": "Powder vs capsules — which is better?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Powder, almost always. Glycine has a faintly sweet taste that's pleasant in water, and a 3 g serving is roughly a level teaspoon — easy to measure. To get 3 g from capsules you need 4–6 large capsules (most are 500 mg), which is annoying to swallow nightly. Powder is also significantly cheaper per gram. The exception is travel or shared bathroom storage where a sealed capsule bottle is more practical than a powder tub."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Glycine for Sleep: The 3g Bedtime Protocol With RCT Evidence",
  "description": "Glycine sleep dosing, body-temperature mechanism, and the 3g RCT protocol that actually works. Plus how it stacks with sleep peptides like DSIP and Selank.",
  "url": "https://profpeptide.com/supplements/glycine",
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
    { "@type": "ListItem", "position": 3, "name": "Glycine" }
  ]
};

export default function GlycinePage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Glycine</h1>
        <span className="tag">Sleep &amp; Recovery</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 26, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> L-glycine, aminoacetic acid, the simplest amino acid
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Supplement Class:</span> Non-essential amino acid / inhibitory neurotransmitter / NMDA receptor co-agonist
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Evidence Tier:</span> Moderate — three independent human RCTs (Inagawa 2006, Yamadera 2007, Bannai 2012) demonstrating reduced sleep onset latency and improved subjective sleep quality at 3 g pre-bed; polysomnography-instrumented confirmation; cleaner safety profile than most sleep supplements; small trial samples and limited disease-state replication keep this below Strong tier
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is glycine?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Glycine is the smallest amino acid the human body uses — a simple, endogenous molecule that the body produces and uses for collagen synthesis, neurotransmitter regulation, and one-carbon metabolism. It is also one of the better-supported natural sleep supplements, with three independent human RCTs showing 3 g taken 30–60 minutes before bed reduces sleep onset latency, improves subjective sleep quality, and reduces next-day fatigue. The mechanism is unusual: glycine works primarily through body-temperature regulation rather than direct sedation. It acts at NMDA receptors in the suprachiasmatic nucleus, triggering peripheral vasodilation that lowers core body temperature — one of the strongest biological signals for sleep onset. Unlike antihistamines, benzodiazepines, or even most herbal sleep aids, glycine doesn&apos;t produce next-morning grogginess; the Bannai 2012 trial specifically documented improved next-day psychomotor vigilance after partial sleep restriction. It stacks naturally with{" "}
            <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">sleep peptides like DSIP</Link>{" "}
            because the mechanisms operate on different layers of sleep biology.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced sleep onset latency (most-replicated RCT finding)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved subjective sleep quality and morning refreshedness</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced next-day fatigue after partial sleep restriction (Bannai 2012)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No next-morning grogginess — distinct from sedative-class sleep aids</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved sleep efficiency on polysomnography (Yamadera 2007)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Body-temperature regulation via NMDA co-agonism at SCN</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Substrate for collagen synthesis (secondary benefit at higher doses)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common dose:</span> 3 g (3,000 mg) taken 30–60 minutes before bed — the dose used in every positive human sleep RCT. Powder form is the practical default (faintly sweet, easy to dose in water). Higher doses (6–9 g) have been tested for safety but don&apos;t clearly add sleep benefit.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Widely available as pharmaceutical-grade powder at low cost. Quality bar is low (simple molecule, easy to verify) but third-party testing is still the screen. Review the quality-markers checklist in the Where to Buy section below.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=glycine+powder&tag=profpeptide-20" label="Glycine" />
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
        {["Amino Acid", "Sleep Onset", "Body Temperature", "Next-Day Alertness", "NMDA Co-Agonist", "3g Protocol"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/magnesium" className="text-sm font-medium text-[#3A759F] hover:underline">Magnesium</Link>
          <Link href="/supplements/melatonin" className="text-sm font-medium text-[#3A759F] hover:underline">Melatonin</Link>
          <Link href="/supplements/apigenin" className="text-sm font-medium text-[#3A759F] hover:underline">Apigenin</Link>
          <Link href="/supplements/l-theanine" className="text-sm font-medium text-[#3A759F] hover:underline">L-Theanine</Link>
          <Link href="/supplements/tart-cherry" className="text-sm font-medium text-[#3A759F] hover:underline">Tart Cherry</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Glycine" pagePath="/supplements/glycine" />
    </div>
    </>
  );
}
