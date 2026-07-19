import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/spermidine",
  title: "Spermidine: The Autophagy Activator With Mortality-Cohort Backing",
  description:
    "Spermidine dosing, autophagy mechanism, and the Bruneck cohort data on all-cause mortality. Plus how it stacks with NAD+ peptides and longevity protocols.",
});

const faqs = [
  {
    q: "What's the actual effective spermidine dose?",
    a: "The honest answer: nobody is sure. The Bruneck cohort study (the mortality-association anchor) estimated dietary intake at ~12 mg/day in the highest-intake group — meaningfully higher than what most commercial supplements provide. Most clinical trials (Wirth 2018, Wirth 2021) use 1–3 mg/day of concentrated wheat-germ extract; that's the dose where you have human RCT data, but it's well below the population-cohort intake levels. Some longevity protocols target 5–10 mg/day to bridge the gap. The trial-validated baseline is 1–3 mg/day; the cohort-association range is higher. Pick your evidence preference.",
  },
  {
    q: "Does the Bruneck Study actually prove spermidine extends lifespan?",
    a: "No — and this is important. The Bruneck Study is an observational epidemiological cohort, not a randomized trial. It demonstrated that higher dietary spermidine intake correlated with reduced all-cause and cardiovascular mortality over 20-year follow-up — but correlation isn't causation, and dietary spermidine intake correlates with whole-foods eating patterns (wheat germ, soybeans, aged cheese, mushrooms, peas) that have their own health effects independent of spermidine. The animal-model evidence is dramatic (yeast, flies, worms, mice all show lifespan extension); the human cohort data is suggestive; randomized human lifespan trials don't exist and won't for decades. Spermidine is a strong mechanism-based bet, not a proven lifespan extender.",
  },
  {
    q: "Wheat germ extract vs synthetic spermidine — which is better?",
    a: "Wheat-germ extract is what nearly all human clinical trials (Wirth 2018, Wirth 2021, the Bruneck dietary signal) use. Synthetic spermidine trihydrochloride exists and is bioequivalent in terms of the molecule itself, but the trial evidence base is on extract. Practical reasons to prefer wheat-germ extract: it's the studied form, it provides the polyamine matrix found in food sources (spermidine + spermine + putrescine together), and reputable brands disclose spermidine mg per serving so dosing is transparent. The downside is gluten — wheat-germ extract isn't celiac-safe by default. Synthetic spermidine is the alternative for users with gluten concerns.",
  },
  {
    q: "Can I take spermidine if I have active cancer?",
    a: "Talk to your oncologist first. Spermidine activates autophagy — and autophagy plays a dual role in cancer biology. In early-stage or pre-cancerous cells, autophagy is tumor-suppressive (it clears damaged proteins and dysfunctional mitochondria before they accumulate). In established tumors, autophagy can be tumor-supportive (it helps cancer cells survive metabolic stress and chemotherapy). The clinical implication is context-specific: spermidine may be helpful, neutral, or harmful depending on cancer type, stage, and treatment regimen. The same uncertainty applies to other autophagy-activating supplements (NMN, resveratrol, fisetin). This is one of the few supplement categories where \"consult your oncologist\" is the genuinely correct answer.",
  },
  {
    q: "Can I stack spermidine with NAD+ peptide or NMN?",
    a: (
      <>
        Yes — and the longevity cluster pairs naturally because the mechanisms operate on different arms of the aging-biology stack.{" "}
        <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+ peptide</Link>{" "}
        (injectable) delivers NAD+ directly to circulation, activating sirtuin-mediated longevity pathways via increased NAD+ availability.{" "}
        <Link href="/supplements/nmn" className="text-[#3A759F] hover:underline">NMN</Link>{" "}
        is the oral NAD+ precursor — feeds the salvage pathway. Spermidine works through a different mechanism entirely: EP300 inhibition and direct autophagy activation, mimicking the fasting/caloric-restriction state. Sirtuins and autophagy converge on aging biology but enter from different angles. Mechanistically additive, no known negative interactions. The Sinclair-popularized longevity protocol stacks NMN + resveratrol + spermidine; the trial evidence for the combination is thin but the mechanistic rationale is reasonable.
      </>
    ),
  },
  {
    q: "Does spermidine stack with fasting or caloric restriction?",
    a: (
      <>
        Yes — and the mechanism overlap is exactly why this stack makes sense. Caloric restriction and intermittent fasting are the most-validated longevity interventions in animals, primarily through autophagy activation via mTORC1 inhibition. Spermidine activates autophagy through a parallel pathway (EP300 inhibition + mTORC1 modulation). The combination may produce additive autophagy activation — though human trial evidence for the combination specifically is limited. Practical note: fasting protocols may temporarily reduce dietary spermidine intake (extended fasts cut out the wheat-germ-and-aged-cheese food sources), making supplementation more relevant during fasting windows. See also{" "}
        <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>{" "}
        for the pineal-axis arm of the longevity stack.
      </>
    ),
  },
  {
    q: "Will spermidine help with hair growth?",
    a: "Modestly, in published research. A 2011 trial in humans found spermidine-containing nutritional supplements increased anagen-phase hair follicles (the growth phase) versus placebo. The mechanism is autophagy-mediated: hair follicle cycling depends on autophagy, and spermidine activates it. Effect sizes are modest — this isn't finasteride or minoxidil territory — but as part of a broader nutritional approach to hair, spermidine has a real signal. The same biology underlies the GHK-Cu peptide's hair effects through a different mechanism.",
  },
  {
    q: "What about food sources? Can I just eat wheat germ?",
    a: "Yes — and dietary spermidine is what the Bruneck cohort study actually measured. Wheat germ is the richest concentrated source (up to ~243 mg/kg dry weight, ~30 mg per 100 g). Other strong sources: soybeans, aged cheese (especially long-aged hard cheeses), mushrooms, peas, fresh sprouts. A daily diet that consistently includes 2–3 of these foods provides a meaningful spermidine baseline without supplementation. Supplements concentrate what whole foods provide; if your diet already includes the dietary sources at scale, supplementation adds less. If you're eating processed-grain Western diet, supplementation may meaningfully shift your daily intake.",
  },
];

const studies = [
  {
    title: "Higher Spermidine Intake Is Linked to Lower Mortality: A Prospective Population-Based Study",
    authors: "Kiechl S, Pechlaner R, Willeit P, et al.",
    journal: "American Journal of Clinical Nutrition",
    year: "2018",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/29955838/",
    summary: "A 20-year prospective cohort analysis of 829 participants in the Bruneck Study (Italy). Higher dietary spermidine intake was associated with significantly reduced all-cause mortality (hazard ratio comparing top vs bottom tertile: 0.51) and cardiovascular mortality. The mortality association persisted after adjustment for age, sex, BMI, smoking, alcohol, and diet quality. This is the foundational human population-level evidence that connects dietary spermidine intake to longevity-relevant outcomes — and the trial that drove the modern wave of spermidine longevity interest.",
  },
  {
    title: "The Effect of Spermidine on Memory Performance in Older Adults at Risk for Dementia: A Randomized Controlled Trial",
    authors: "Wirth M, Benson G, Schwarz C, et al.",
    journal: "Cortex",
    year: "2018",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/29438906/",
    summary: "A 3-month randomized double-blind placebo-controlled pilot trial of spermidine-rich wheat germ extract (~1.2 mg/day spermidine) in 30 older adults with subjective cognitive decline. Spermidine improved memory performance versus placebo on a mnemonic similarity task. Sample size was small but the trial established human cognitive efficacy as a clinical endpoint and is the cited foundation for subsequent SmartAge and other longer-duration cognitive trials.",
  },
  {
    title: "Effects of Spermidine Supplementation on Cognition and Biomarkers in Older Adults with Subjective Cognitive Decline: A Randomized Clinical Trial",
    authors: "Schwarz C, Benson GS, Horn N, et al.",
    journal: "JAMA Network Open",
    year: "2022",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/35275170/",
    summary: "A 12-month randomized double-blind placebo-controlled trial (SmartAge) of 0.9 mg/day spermidine wheat-germ extract in 100 older adults with subjective cognitive decline. The primary cognitive endpoint (memory performance) did not show significant improvement versus placebo over 12 months. Safety was favorable. The SmartAge trial cooled the cognitive enthusiasm raised by the Wirth 2018 pilot — at 1 mg/day for 12 months, cognitive benefit was not replicated. Whether higher doses or longer duration would show effect remains untested.",
  },
  {
    title: "Cardioprotection and Lifespan Extension by the Natural Polyamine Spermidine",
    authors: "Eisenberg T, Abdellatif M, Schroeder S, et al.",
    journal: "Nature Medicine",
    year: "2016",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/27841876/",
    summary: "A landmark animal study demonstrating spermidine supplementation extends median and maximum lifespan in mice through autophagy-mediated cardioprotection. Aged mice receiving lifelong oral spermidine showed reduced cardiac hypertrophy, improved diastolic function, and reduced cardiac inflammation versus controls. The trial established the cardio-longevity link and is the most-cited animal-model evidence for spermidine's lifespan-extension claim — though it remains animal data, not human lifespan evidence.",
  },
  {
    title: "Spermidine: A Physiological Autophagy Inducer Acting as an Anti-Aging Vitamin in Humans?",
    authors: "Madeo F, Bauer MA, Carmona-Gutierrez D, Kroemer G",
    journal: "Autophagy",
    year: "2019",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/30306826/",
    summary: "A review by the Madeo lab (the primary spermidine longevity research group) synthesizing the autophagy mechanism evidence, animal-model lifespan data, Bruneck Study cohort findings, and emerging human trial signal. Covers the EP300 inhibition mechanism, mTORC1 modulation, fasting-mimetic properties, and the case for spermidine as an \"anti-aging vitamin\" candidate. Useful as a single-source biology overview that frames the modern spermidine evidence base.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does spermidine work?",
    intro:
      "Spermidine works primarily through autophagy activation — the cellular self-cleaning process that removes damaged proteins, dysfunctional mitochondria, and accumulated debris. The mechanism is multi-layered: EP300 inhibition leads to hypoacetylation of autophagy-related proteins, mTORC1 modulation mimics the fasting state, and direct effects on chaperone-mediated autophagy and mitophagy support cellular renewal. This is the same autophagy machinery activated by caloric restriction and fasting.",
    body: [
      "EP300 inhibition and autophagy gene activation. Spermidine directly inhibits EP300 (a histone acetyltransferase), leading to hypoacetylation of multiple autophagy-related proteins (ATG5, ATG7, LC3) and de-repression of autophagy gene expression. This is the dominant mechanism Madeo's lab identified as spermidine's autophagy-inducing arm.",
      "mTORC1 modulation. Spermidine produces partial inhibition of mTORC1 — the primary cellular nutrient sensor and autophagy suppressor. This mimics the metabolic signal of fasting and caloric restriction without requiring actual caloric reduction. The fasting-mimetic property is what generates the \"natural caloric restriction\" framing in longevity circles.",
      "Cardioprotection via cardiac autophagy. Eisenberg 2016 (Nature Medicine) demonstrated lifelong oral spermidine extends median lifespan in mice through autophagy-mediated reduction in cardiac hypertrophy, improved diastolic function, and reduced cardiac inflammation. The cardio-longevity link is the strongest mechanistic case for spermidine's lifespan claim.",
      "Anti-inflammatory effects via autophagy. Activated autophagy clears damaged mitochondria (mitophagy) — a key driver of inflammasome activation. Spermidine reduces NLRP3 inflammasome activity and downstream IL-1β / IL-18 cytokine production, contributing to the anti-inflammatory aging phenotype.",
      "Polyamine biology and DNA stabilization. Beyond autophagy, spermidine is a fundamental cellular molecule involved in DNA stabilization, gene expression regulation, and translation. The polyamine pool (spermidine + spermine + putrescine) declines with age — spermidine supplementation partially restores it.",
    ],
  },
  {
    id: "research",
    title: "What does spermidine actually do?",
    intro:
      "Spermidine has the most dramatic preclinical evidence base of any longevity supplement — lifespan extension across yeast, flies, worms, and mice. The human evidence is mixed: the Bruneck cohort shows mortality associations, the Wirth 2018 pilot showed cognitive benefit, but the larger SmartAge trial (Schwarz 2022) failed to replicate the cognitive signal at low dose over 12 months. The honest evidence picture is more nuanced than the longevity-influencer framing suggests.",
    body: [
      "Mortality association in population cohorts (Moderate). Bruneck Study (Kiechl 2018) found higher dietary spermidine intake associated with reduced all-cause and cardiovascular mortality over 20 years. Strong directional signal but observational — confounded by dietary patterns that correlate with spermidine intake.",
      "Animal-model lifespan extension (Strong preclinical). Spermidine extends lifespan in yeast, Drosophila, C. elegans, and mice. Eisenberg 2016 documented cardiac-mediated mouse lifespan extension. One of the few compounds with replicated lifespan effects across model organisms — but model-organism lifespan doesn't translate directly to human lifespan.",
      "Cognitive function in older adults (Mixed). Wirth 2018 pilot (n=30) showed memory benefit at 1.2 mg/day over 3 months. SmartAge (Schwarz 2022, n=100) failed to replicate at 0.9 mg/day over 12 months. Whether higher doses or different cognitive endpoints would show effect is untested.",
      "Cardiac function and arterial aging (Moderate). Animal evidence is strong; human evidence is emerging. Some pilot human data suggests improvements in left ventricular function and arterial stiffness with chronic spermidine supplementation.",
      "Hair follicle cycling (Emerging). A 2011 human trial found spermidine-containing supplements increased anagen-phase follicles. Mechanism is autophagy-mediated hair follicle stem cell support. Effect sizes are modest — adjunct nutritional support, not a primary hair intervention.",
      "Anti-inflammatory aging biomarkers (Emerging). Reductions in inflammatory cytokines (IL-1β, CRP) documented in some animal and pilot human trials. Consistent with the autophagy → mitophagy → reduced inflammasome chain of mechanism evidence.",
    ],
  },
  {
    id: "dosing",
    title: "How is spermidine dosed?",
    intro:
      "Spermidine dosing is one of the more contested questions in longevity supplementation. Clinical trials use 1–3 mg/day of wheat-germ extract — that's where the human evidence sits. The Bruneck cohort's highest-intake group consumed ~12 mg/day from dietary sources — meaningfully higher than supplemental ranges. Most current longevity protocols land at 1–10 mg/day depending on which evidence base you weight.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Trial-validated dose.</span> 1–3 mg/day of concentrated wheat-germ extract — the dose used in Wirth 2018 and SmartAge (Schwarz 2022). The human RCT-anchored range, but small and short trials.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Higher longevity protocol.</span> 5–10 mg/day to approach the Bruneck cohort&apos;s highest-intake dietary range. Mechanistically reasonable; not directly RCT-validated.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Dietary baseline.</span> 5–15 mg/day achievable through whole-food sources (wheat germ, aged cheese, mushrooms, soybeans, peas). The intake range the Bruneck cohort actually measured.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Synthetic spermidine alternative.</span> 1–6 mg/day of spermidine trihydrochloride for users avoiding wheat-germ (gluten concerns). Bioequivalent molecule but smaller trial evidence base.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: spermidine is a chronic-use longevity supplement, not an acute intervention. The mortality association in Bruneck is over 20 years; cognitive trials run 3–12 months; cardiac and hair effects build over months. There is no acute effect to feel.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Label math.</span> &ldquo;Spermidine wheat-germ extract 500 mg&rdquo; provides only 1–2 mg of actual spermidine (the extract is ~0.2–0.5% spermidine by mass). Read the label for actual spermidine mg per serving, not extract mass. Reputable brands disclose this; opaque proprietary blends usually don&apos;t.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take spermidine",
    intro:
      "Spermidine is taken orally, typically as wheat-germ extract capsules or tablets. Synthetic spermidine trihydrochloride exists in powder and capsule forms for users avoiding gluten. The points below cover the practical details that experienced users converge on.",
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once daily — chronic use is the studied protocol. No acute pulsing benefit.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Anytime — no time-of-day preference established. Morning is the practical default. Some users dose with a fasting window to amplify autophagy synergy.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Either — absorption is not food-dependent. Some users take it during a fasted window to align with mTORC1 inhibition; this is mechanistically reasonable but not directly trial-validated.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Wheat-germ extract (the trial-validated form, contains spermidine + spermine + putrescine matrix); synthetic spermidine trihydrochloride (gluten-free alternative, bioequivalent molecule, smaller trial base); food sources (wheat germ, aged cheese, mushrooms, soybeans, peas) for users preferring dietary intake.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Look for &ldquo;mg of spermidine per serving&rdquo; explicitly on the label, not just extract mass. Reputable brands disclose 1–6 mg spermidine per capsule. Avoid products that hide behind &ldquo;proprietary blend&rdquo; without specific spermidine content.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No cycling needed — the longevity case is chronic daily use, matching the Bruneck cohort&apos;s long-term dietary exposure model.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does spermidine stack with?",
    intro:
      "Spermidine pairs naturally with the broader longevity / NAD+ / autophagy stack. The mechanism is autophagy-centric, which complements sirtuin-activating, NAD+-raising, and senolytic interventions that operate on different arms of aging biology. The three areas below cover the natural stacking categories.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Spermidine pairs naturally with the longevity peptide cluster.{" "}
            <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+ peptide</Link>{" "}
            (injectable or subcutaneous) delivers NAD+ directly to circulation, activating sirtuin-mediated longevity pathways via NAD+ availability. Spermidine works through a different mechanism: EP300 inhibition and direct autophagy activation, mimicking the fasting/caloric-restriction state.{" "}
            <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>{" "}
            adds the pineal-axis longevity arm — telomere maintenance and circadian regulation. The three operate on different layers of aging biology: NAD+ on sirtuin signaling, spermidine on autophagy, Epitalon on pineal regulation. Mechanistically additive, no known negative interactions. Introduce one variable at a time when starting a new stack so you can tell what&apos;s actually doing what.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/nmn" className="text-[#3A759F] hover:underline">NMN</Link>{" "}
              — oral NAD+ precursor. Sirtuin substrate plus autophagy activation = complementary longevity pillars. The Sinclair-protocol pairing.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/resveratrol" className="text-[#3A759F] hover:underline">Resveratrol</Link>{" "}
              — sirtuin activator. Mechanistically compatible with spermidine&apos;s autophagy arm; classic longevity-stack pairing.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/apigenin" className="text-[#3A759F] hover:underline">Apigenin</Link>{" "}
              — CD38 inhibitor + senolytic. Preserves NAD+ pools and clears senescent cells; complements autophagy activation.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/quercetin" className="text-[#3A759F] hover:underline">Quercetin</Link>{" "}
              — senolytic (with fisetin). Different aging-biology arm; common longevity-stack co-occupant.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/coq10" className="text-[#3A759F] hover:underline">CoQ10</Link>{" "}
              — mitochondrial bioenergetics. Pairs with spermidine&apos;s mitophagy arm (clears damaged mitochondria; CoQ10 supports the remaining ones).
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Intermittent fasting / time-restricted eating.</span> Autophagy is fasting-activated; spermidine activates the same pathway. Dosing during a fasting window is the protocol most longevity users converge on.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Caloric restriction.</span> Direct mechanism overlap. CR and spermidine produce overlapping autophagy activation; combining them mechanistically additive without conflict.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Exercise (especially endurance).</span> Exercise activates autophagy independently. Spermidine + exercise produces additive autophagy signal in animal models.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Whole-food diet with spermidine-rich foods.</span> Wheat germ, aged cheese, mushrooms, soybeans, peas — the Bruneck dietary signal is built on these. Diet as the baseline; supplementation adds on top.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "Spermidine has a favorable safety profile in published trials. No serious adverse events at supplemental doses. The main practical considerations are mild GI effects, gluten exposure from wheat-germ extracts, and the open cancer-context question.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild GI discomfort — occasional nausea or soft stools, particularly with wheat-germ extract on empty stomach. Resolves with food or dose reduction.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Gluten exposure — wheat-germ extracts contain gluten. Problematic for celiac and gluten-sensitive users; use synthetic spermidine trihydrochloride instead.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No documented serious adverse events at standard supplemental doses across the human trial base.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Active cancer — autophagy is context-dependent in cancer biology (tumor-suppressive in pre-cancer, sometimes tumor-supportive in established disease). Spermidine&apos;s autophagy activation may be helpful, neutral, or harmful depending on cancer type and stage. Coordinate with oncologist.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Long-term high-dose safety — most trial data is at 1–3 mg/day for 3–12 months. Multi-year use at 5–10 mg/day is mechanistically reasonable but not characterized in controlled trials.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Chemotherapy and immunotherapy — autophagy interaction is complex and tumor-type-specific. Avoid supplemental autophagy activators (spermidine, NMN, resveratrol, fisetin) during active oncology treatment without specialist input.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Immunosuppressants (mTOR inhibitors like rapamycin/sirolimus) — both modulate mTORC1. Additive effects possible; coordinate with prescribing clinician.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Other longevity supplements (NMN, resveratrol, fisetin, quercetin) — fully compatible, mechanistically complementary (see Stacks section). The longevity-stack pairing is the most common context for spermidine use.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pregnancy and breastfeeding — insufficient data; avoid. Polyamine biology in pregnancy is poorly characterized.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about spermidine",
    intro:
      "Spermidine has the most dramatic preclinical longevity case of any current supplement — and the most asymmetric human evidence base. Animal lifespan extension is robust; human lifespan trials don't exist; cognitive trial results are mixed; the mortality cohort is observational. Several major open questions affect how confidently you can use this supplement.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Causality of the Bruneck mortality signal.</span> The 20-year Bruneck cohort shows higher dietary spermidine intake associates with reduced mortality. But dietary spermidine intake correlates with whole-foods eating patterns (wheat germ, aged cheese, mushrooms, peas, soybeans) — the same dietary patterns associated with better outcomes through many other mechanisms. Whether spermidine itself or the broader dietary pattern drives the mortality signal is genuinely unresolved without intervention trial data.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">SmartAge cognitive null result.</span> The 12-month SmartAge trial (Schwarz 2022) failed to replicate the 3-month Wirth 2018 cognitive benefit at low dose. Whether higher doses, longer duration, different cognitive endpoints, or different populations would show effect is untested. The cognitive case is currently more uncertain than the popular longevity discourse suggests.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Effective dose ambiguity.</span> Trials use 1–3 mg/day; the Bruneck cohort top tertile consumed ~12 mg/day from food; longevity protocols range from 1 mg to 10+ mg. Which dose actually produces the cohort-observed mortality benefit is unknown — and the autophagy dose-response curve isn&apos;t well-characterized in humans.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Cancer-context dual role.</span> Autophagy is tumor-suppressive early and sometimes tumor-supportive in established disease. The clinical implications for spermidine in users with personal or family cancer history are not well-defined. This isn&apos;t hypothetical concern — it&apos;s an active research question with no clean answer.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Animal-to-human lifespan translation.</span> Yeast, fly, worm, and mouse lifespan extension is striking — but model-organism lifespan effects often don&apos;t translate to humans at scale. Spermidine is a strong mechanism-based bet for human longevity; it is not proven to extend human lifespan.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Wheat-germ extract vs synthetic equivalence.</span> The trial evidence is built on wheat-germ extract — which contains spermidine plus spermine + putrescine + other polyamine and wheat-germ matrix components. Whether the same mortality and cognitive signals would emerge from purified synthetic spermidine alone is unknown.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy spermidine",
    intro:
      "Spermidine is available over-the-counter as wheat-germ extract or synthetic spermidine trihydrochloride. Quality varies considerably — particularly around actual mg of spermidine per serving (often obscured in proprietary blends) and standardization disclosure. The quality markers below are the screen we use before clicking through.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Spermidine mg per serving explicitly disclosed</span> — not just &ldquo;wheat germ extract X mg&rdquo;. Reputable brands list 1–6 mg actual spermidine per capsule.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Wheat-germ extract for the trial-validated form</span>; synthetic spermidine trihydrochloride for gluten-free users (bioequivalent molecule).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested</span> — USP, NSF, or ConsumerLab certifications signal independent verification.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">HPLC quantification of spermidine content</span> — the lab method that distinguishes actual spermidine from total polyamine claims.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar for any supplement.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No proprietary blends</span> that obscure the actual spermidine dose alongside fillers.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Fresh manufacture date</span> — polyamines degrade with prolonged exposure to heat and humidity; avoid jars sitting on warehouse shelves &gt;18 months pre-purchase.</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=spermidine+supplement&tag=profpeptide-20" label="Spermidine" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Spermidine FAQ",
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
          Kiechl S, Pechlaner R, Willeit P, et al. Higher spermidine intake is linked to lower mortality: a prospective population-based study. Am J Clin Nutr. 2018;108(2):371-380.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29955838/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29955838/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Wirth M, Benson G, Schwarz C, et al. The effect of spermidine on memory performance in older adults at risk for dementia: a randomized controlled trial. Cortex. 2018;109:181-188.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29438906/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29438906/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Schwarz C, Benson GS, Horn N, et al. Effects of spermidine supplementation on cognition and biomarkers in older adults with subjective cognitive decline: a randomized clinical trial. JAMA Netw Open. 2022;5(5):e2213875.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/35275170/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/35275170/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Eisenberg T, Abdellatif M, Schroeder S, et al. Cardioprotection and lifespan extension by the natural polyamine spermidine. Nat Med. 2016;22(12):1428-1438.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/27841876/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/27841876/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Madeo F, Bauer MA, Carmona-Gutierrez D, Kroemer G. Spermidine: a physiological autophagy inducer acting as an anti-aging vitamin in humans? Autophagy. 2019;15(1):165-168.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/30306826/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/30306826/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Madeo F, Eisenberg T, Pietrocola F, Kroemer G. Spermidine in health and disease. Science. 2018;359(6374):eaan2788.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29371440/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29371440/
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
      "name": "What's the actual effective spermidine dose?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The honest answer: nobody is sure. The Bruneck cohort study estimated dietary intake at ~12 mg/day in the highest-intake group — meaningfully higher than what most commercial supplements provide. Most clinical trials use 1–3 mg/day of concentrated wheat-germ extract; that's the dose where you have human RCT data, but it's well below the population-cohort intake levels. Some longevity protocols target 5–10 mg/day to bridge the gap. The trial-validated baseline is 1–3 mg/day; the cohort-association range is higher."
      }
    },
    {
      "@type": "Question",
      "name": "Does the Bruneck Study actually prove spermidine extends lifespan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — and this is important. The Bruneck Study is an observational epidemiological cohort, not a randomized trial. It demonstrated that higher dietary spermidine intake correlated with reduced all-cause and cardiovascular mortality over 20-year follow-up — but correlation isn't causation, and dietary spermidine intake correlates with whole-foods eating patterns that have their own health effects independent of spermidine. The animal-model evidence is dramatic; the human cohort data is suggestive; randomized human lifespan trials don't exist and won't for decades. Spermidine is a strong mechanism-based bet, not a proven lifespan extender."
      }
    },
    {
      "@type": "Question",
      "name": "Wheat germ extract vs synthetic spermidine — which is better?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wheat-germ extract is what nearly all human clinical trials use. Synthetic spermidine trihydrochloride exists and is bioequivalent in terms of the molecule itself, but the trial evidence base is on extract. Practical reasons to prefer wheat-germ extract: it's the studied form, it provides the polyamine matrix found in food sources, and reputable brands disclose spermidine mg per serving so dosing is transparent. The downside is gluten — wheat-germ extract isn't celiac-safe by default. Synthetic spermidine is the alternative for users with gluten concerns."
      }
    },
    {
      "@type": "Question",
      "name": "Can I take spermidine if I have active cancer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Talk to your oncologist first. Spermidine activates autophagy — and autophagy plays a dual role in cancer biology. In early-stage or pre-cancerous cells, autophagy is tumor-suppressive (it clears damaged proteins and dysfunctional mitochondria before they accumulate). In established tumors, autophagy can be tumor-supportive (it helps cancer cells survive metabolic stress and chemotherapy). The clinical implication is context-specific: spermidine may be helpful, neutral, or harmful depending on cancer type, stage, and treatment regimen."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stack spermidine with NAD+ peptide or NMN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — and the longevity cluster pairs naturally because the mechanisms operate on different arms of the aging-biology stack. NAD+ peptide (injectable) delivers NAD+ directly to circulation, activating sirtuin-mediated longevity pathways. NMN is the oral NAD+ precursor — feeds the salvage pathway. Spermidine works through a different mechanism entirely: EP300 inhibition and direct autophagy activation, mimicking the fasting/caloric-restriction state. Sirtuins and autophagy converge on aging biology but enter from different angles. Mechanistically additive, no known negative interactions."
      }
    },
    {
      "@type": "Question",
      "name": "Does spermidine stack with fasting or caloric restriction?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — and the mechanism overlap is exactly why this stack makes sense. Caloric restriction and intermittent fasting are the most-validated longevity interventions in animals, primarily through autophagy activation via mTORC1 inhibition. Spermidine activates autophagy through a parallel pathway (EP300 inhibition + mTORC1 modulation). The combination may produce additive autophagy activation — though human trial evidence for the combination specifically is limited. Fasting protocols may temporarily reduce dietary spermidine intake, making supplementation more relevant during fasting windows."
      }
    },
    {
      "@type": "Question",
      "name": "Will spermidine help with hair growth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modestly, in published research. A 2011 trial in humans found spermidine-containing nutritional supplements increased anagen-phase hair follicles (the growth phase) versus placebo. The mechanism is autophagy-mediated: hair follicle cycling depends on autophagy, and spermidine activates it. Effect sizes are modest — this isn't finasteride or minoxidil territory — but as part of a broader nutritional approach to hair, spermidine has a real signal. The same biology underlies the GHK-Cu peptide's hair effects through a different mechanism."
      }
    },
    {
      "@type": "Question",
      "name": "What about food sources? Can I just eat wheat germ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — and dietary spermidine is what the Bruneck cohort study actually measured. Wheat germ is the richest concentrated source (up to ~243 mg/kg dry weight, ~30 mg per 100 g). Other strong sources: soybeans, aged cheese (especially long-aged hard cheeses), mushrooms, peas, fresh sprouts. A daily diet that consistently includes 2–3 of these foods provides a meaningful spermidine baseline without supplementation. Supplements concentrate what whole foods provide; if your diet already includes the dietary sources at scale, supplementation adds less."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Spermidine: The Autophagy Activator With Mortality-Cohort Backing",
  "description": "Spermidine dosing, autophagy mechanism, and the Bruneck cohort data on all-cause mortality. Plus how it stacks with NAD+ peptides and longevity protocols.",
  "url": "https://profpeptide.com/supplements/spermidine",
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
    { "@type": "ListItem", "position": 3, "name": "Spermidine" }
  ]
};

export default function SpermidinePage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Spermidine</h1>
        <span className="tag">Longevity</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 26, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Spermidine trihydrochloride, SPD, polyamine, wheat germ extract spermidine
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Supplement Class:</span> Polyamine / autophagy inducer / fasting mimetic
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Evidence Tier:</span> Moderate — strong preclinical (yeast, fly, worm, mouse lifespan extension; Eisenberg 2016 mouse cardioprotection); Bruneck cohort observational mortality association (Kiechl 2018); human RCT base mixed (Wirth 2018 positive cognitive pilot, SmartAge 2022 cognitive null at low dose); human lifespan evidence does not yet exist
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is spermidine?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Spermidine is a naturally occurring polyamine — a small positively charged molecule involved in fundamental cellular processes including DNA stabilization, gene expression, and protein synthesis. It is found in virtually all living cells and concentrated in foods like wheat germ, soybeans, aged cheese, mushrooms, and peas. Its longevity-supplement profile is built on a striking mechanistic and preclinical case: spermidine is one of the most potent natural autophagy inducers, activating the cellular self-cleaning process through EP300 inhibition and partial mTORC1 modulation — mimicking the fasting/caloric-restriction state without requiring caloric reduction. The animal-model evidence is dramatic (yeast, flies, worms, and mice all show lifespan extension); the human evidence is more nuanced. The Bruneck Study (Kiechl 2018) documented strong mortality associations with higher dietary intake over 20 years. The Wirth 2018 pilot showed cognitive benefit; the larger 12-month SmartAge trial (Schwarz 2022) didn&apos;t replicate it at low dose. Spermidine pairs naturally with{" "}
            <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+ peptide</Link>{" "}
            and other longevity supplements because the mechanisms operate on different arms of aging biology — autophagy is its lane.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Potent autophagy induction — clears damaged proteins, dysfunctional mitochondria, cellular debris</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Bruneck cohort association with reduced all-cause and cardiovascular mortality (observational)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Lifespan extension across yeast, flies, worms, and mice (animal models)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Cardioprotection via autophagy-mediated cardiac function preservation (Eisenberg 2016)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anti-inflammatory effects via mitophagy and NLRP3 inflammasome modulation</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Fasting-mimetic mechanism — EP300 inhibition + mTORC1 modulation</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Hair follicle cycling support via autophagy-mediated stem cell function</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common dose:</span> 1–3 mg/day of concentrated wheat-germ extract — the trial-validated range used in Wirth 2018 and SmartAge. Higher longevity protocols target 5–10 mg/day to approach the Bruneck cohort&apos;s top-tertile dietary intake (~12 mg/day). Synthetic spermidine trihydrochloride is the gluten-free alternative.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Available over-the-counter from longevity-supplement vendors. Quality varies significantly — particularly around actual spermidine mg per serving. Review the quality-markers checklist in the Where to Buy section below.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=spermidine+supplement&tag=profpeptide-20" label="Spermidine" />
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
        {["Autophagy", "Fasting Mimetic", "Bruneck Cohort", "Polyamine", "EP300 Inhibitor", "Longevity"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/nmn" className="text-sm font-medium text-[#3A759F] hover:underline">NMN</Link>
          <Link href="/supplements/nad-plus" className="text-sm font-medium text-[#3A759F] hover:underline">NAD+</Link>
          <Link href="/supplements/resveratrol" className="text-sm font-medium text-[#3A759F] hover:underline">Resveratrol</Link>
          <Link href="/supplements/quercetin" className="text-sm font-medium text-[#3A759F] hover:underline">Quercetin</Link>
          <Link href="/supplements/apigenin" className="text-sm font-medium text-[#3A759F] hover:underline">Apigenin</Link>
          <Link href="/supplements/coq10" className="text-sm font-medium text-[#3A759F] hover:underline">CoQ10</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Spermidine" pagePath="/supplements/spermidine" />
    </div>
    </>
  );
}
