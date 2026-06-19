import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/semax-selank",
  title: "Semax + Selank — Cognitive & Anxiolytic Peptide Blend Profile | Prof. Peptide",
  description:
    "Semax + Selank research profile: 2-component intranasal cognitive and anxiolytic peptide blend. Mechanism, dosing, side effects, Russian pharmaceutical heritage, FAQ.",
});

const faqs = [
  {
    q: "What is the Semax + Selank blend?",
    a: (
      <>
        Semax + Selank is a 2-component intranasal peptide blend pairing two synthetic heptapeptides:{" "}
        <Link href="/peptides/semax" className="text-[#0891b2] hover:underline">Semax</Link>{" "}
        (an ACTH(4-10) analog used for cognitive enhancement) and{" "}
        <Link href="/peptides/selank" className="text-[#0891b2] hover:underline">Selank</Link>{" "}
        (a tuftsin analog used as an anxiolytic). Both peptides were developed at the Institute of Molecular Genetics, Russian Academy of Sciences, and both are approved as pharmaceuticals in Russia for their respective indications (Semax for post-stroke neuroprotection, Selank for generalized anxiety). The blend pairs cognitive enhancement with anxiety reduction in a single nasal spray.
      </>
    ),
  },
  {
    q: "How does Semax + Selank differ from each peptide alone?",
    a: "Each component independently has Russian pharmaceutical approval and clinical evidence — Semax for cognitive and post-stroke applications, Selank for anxiety. The combination pairs their complementary mechanisms in a single intranasal product: Semax's BDNF/dopamine upregulation handles the cognitive side, Selank's GABAergic modulation handles the anxiolytic side. There is no published RCT specifically on the blend, but the two compounds are routinely used together in research-community protocols and in Russian clinical practice.",
  },
  {
    q: "Is Semax + Selank FDA-approved?",
    a: "No — not in the US. Both components are approved as pharmaceuticals in Russia (Semax by Innovative Research Production and Marketing Center; Selank by the same institute). They are sold in the US as research-grade peptides for laboratory use only. The Russian regulatory history is the strongest non-Western regulatory precedent in PP's catalog — but Russian approval does not extend to the US, EU, or other major regulatory jurisdictions.",
  },
  {
    q: "Why intranasal rather than subcutaneous?",
    a: "Intranasal administration takes advantage of direct nose-to-brain transport — both Semax and Selank cross the nasal mucosa and reach the central nervous system rapidly while bypassing first-pass hepatic metabolism. Both peptides have very short plasma half-lives (minutes) but produce sustained CNS effects lasting hours, making the nasal route particularly well-suited. Subcutaneous administration is possible but less practical and less commonly studied.",
  },
  {
    q: "What's a typical dose?",
    a: "Combined intranasal blend protocols range from 1–3 sprays per nostril, 1–3× daily, depending on the vial concentration. A standard 20 mg vial (10 mg Semax + 10 mg Selank) reconstituted into a 10 mL nasal spray bottle delivers approximately 100 mcg of each peptide per 50 μL spray. Most research protocols start at 1 spray per nostril once or twice daily and titrate based on response. Standard cycle is 2–6 weeks active.",
  },
  {
    q: "When should I take it?",
    a: "Morning is the standard default — Semax's dopaminergic effects pair well with the start of the day. Selank's GABAergic effects don't cause sedation but the combined effect is generally activating, so late-evening dosing is less common. Some protocols use a split AM/early-afternoon schedule for sustained cognitive coverage during a working day. Pre-stressor dosing (before a known anxiety trigger like a presentation or test) is also documented in research-community use.",
  },
  {
    q: "Can it be stacked with other peptides or supplements?",
    a: (
      <>
        Compatible additions include standard nootropic supplements (caffeine, L-theanine, racetams) and other neuroprotective peptides like{" "}
        <Link href="/peptides/dsip" className="text-[#0891b2] hover:underline">DSIP</Link>{" "}
        (for sleep) or{" "}
        <Link href="/peptides/epitalon" className="text-[#0891b2] hover:underline">Epitalon</Link>{" "}
        (for longevity-cognitive overlap). Avoid stacking with standalone full-dose{" "}
        <Link href="/peptides/semax" className="text-[#0891b2] hover:underline">Semax</Link>{" "}
        or{" "}
        <Link href="/peptides/selank" className="text-[#0891b2] hover:underline">Selank</Link>{" "}
        protocols — that doubles the dose. Limited safety data on combinations with benzodiazepines or SSRIs.
      </>
    ),
  },
  {
    q: "Where can I buy Semax + Selank?",
    a: (
      <>
        Sold as a pre-blended nasal spray product by specialty research peptide vendors — common SKU is a 20 mg vial (10 mg each peptide) reconstituted into a nasal spray bottle. Quality varies dramatically by source; third-party HPLC testing is recommended. PP maintains a list of vetted vendors with verified discount codes — see{" "}
        <Link href="/coupons" className="text-[#0891b2] hover:underline">
          Verified Discount Codes &rarr;
        </Link>
        .
      </>
    ),
  },
];

const studies = [
  {
    title: "A Nootropic ACTH(4-10) Analogue (Semax): 15 Years of Design and Study",
    authors: "Ashmarin IP, Nezavibat'ko VN, Myasoedov NF, et al.",
    journal: "Zhurnal Vysshei Nervnoi Deyatelnosti / PubMed",
    year: "1997",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/9173745/",
    summary: "Foundational review of Semax's cognitive effects. Demonstrated improved attention, memory consolidation, and electrophysiological correlates of cognitive load in healthy adults at standard intranasal doses. Established the rationale for Semax's approval as a cognitive-enhancing pharmaceutical in Russia and the basis for its use in the Semax + Selank blend.",
  },
  {
    title: "Effects of Semax on the BDNF System and Cerebral Plasticity",
    authors: "Dolotov OV, Karpenko EA, Inozemtseva LS, et al.",
    journal: "Brain Research",
    year: "2006",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/16996037/",
    summary: "Mechanistic study showing Semax upregulates BDNF (brain-derived neurotrophic factor) and its receptor TrkB in the rat hippocampus and cortex. BDNF signaling is the molecular pathway most directly tied to learning, memory consolidation, and neuroplasticity. The paper established the BDNF axis as the primary candidate mechanism for Semax's cognitive and neuroprotective effects in the Semax + Selank blend.",
  },
  {
    title: "Selank: Antidepressant-Like Effects in Genetic and Situational Models of Depression",
    authors: "Sarkisova KY, Kozlovsky II, Kozlovskaya MM",
    journal: "Zhurnal Vysshei Nervnoi Deyatelnosti / PubMed",
    year: "2008",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/18661785/",
    summary: "Preclinical characterization of Selank's antidepressant-like activity. In WAG/Rij and Wistar rats and BALB/c mice, Selank reduced both genetically-determined and stress-provoked depression-like behavior, without the sedation or dependence characteristic of GABA-A direct-modulating drugs. Supports Selank's mood-regulating profile and the rationale for its use in the Semax + Selank blend.",
  },
  {
    title: "Selank Modulates GABAergic Neurotransmission and Stress Response",
    authors: "Vyunova TV, Andreeva LA, Shevchenko KV, Myasoedov NF",
    journal: "Protein and Peptide Letters",
    year: "2018",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/30255741/",
    summary: "Review of Selank's mechanism centered on indirect GABAergic system modulation, plus enkephalin and serotonin pathway effects. The paper documents how Selank produces anxiolytic effects without binding the GABA-A receptor directly — instead modulating GABA tone through upstream signaling — which is why Selank does not produce sedation, dependence, or withdrawal. Provides the mechanistic basis for why Selank pairs well with the activating Semax component without producing the typical GABA-A drug side-effect profile.",
  },
  {
    title: "Intranasal Delivery of Peptides: Direct Nose-to-Brain Transport",
    authors: "Lochhead JJ, Thorne RG",
    journal: "Advanced Drug Delivery Reviews",
    year: "2012",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/22119441/",
    summary: "Reviews the pharmacology of intranasal peptide delivery — the route used by both Semax and Selank. Establishes that small peptides can reach the central nervous system through olfactory and trigeminal pathways, bypassing first-pass hepatic metabolism and the blood-brain barrier limitations of oral or systemic administration. This is the mechanistic basis for why both Semax and Selank are clinically administered intranasally rather than via subcutaneous injection.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Semax + Selank work?",
    intro:
      "Semax + Selank pairs two short Russian-developed peptides that act on complementary CNS systems. Semax — a synthetic analog of the cognitive-active portion of adrenocorticotropic hormone (ACTH) — upregulates BDNF (the brain's main growth factor for neuroplasticity) and modulates dopamine and serotonin signaling, producing cognitive enhancement effects similar in flavor to nootropics like racetams. Selank — derived from tuftsin, a naturally occurring immune-active peptide — modulates GABAergic tone indirectly, producing anxiolytic effects similar to anti-anxiety medication but without the sedation, dependence, or withdrawal of benzodiazepines.",
    body: [
      "Semax — BDNF, Dopamine, and Cognitive Effects [1][2]. Semax is a heptapeptide analog of ACTH(4-10), the cognitively active portion of the adrenocorticotropic hormone, with an extended C-terminus for proteolytic stability. It upregulates BDNF (brain-derived neurotrophic factor) and its receptor TrkB in the hippocampus and cortex — the molecular substrate for memory consolidation and neuroplasticity. It also modulates dopaminergic and serotonergic neurotransmission, contributing to attention, motivation, and mood effects. Approved in Russia for post-stroke neuroprotection and cognitive applications.",
      "Selank — Indirect GABAergic Modulation and Anxiolytic Effects [3][4]. Selank is a heptapeptide analog of tuftsin (TKPR), a naturally occurring immune-active peptide. Its anxiolytic effect comes from indirect modulation of GABAergic tone — Selank does not bind GABA-A receptors directly, which is why it produces anti-anxiety effects without sedation, motor impairment, dependence, or withdrawal. It also modulates enkephalin and serotonin pathways, supporting both mood and stress-response effects. Approved in Russia for generalized anxiety disorder.",
      "Complementary Cognitive + Anxiolytic Coverage. The two peptides act on non-overlapping CNS targets — BDNF/dopamine versus indirect GABAergic — so their effects combine without canceling. Semax's activating dopaminergic effect is balanced by Selank's anxiolytic modulation, producing an unusual combination of sharper cognitive focus and reduced anxiety simultaneously. This is the rationale for the blend as a unit.",
      "Intranasal Route and Nose-to-Brain Transport [5]. Both peptides are administered intranasally to take advantage of direct olfactory and trigeminal-nerve transport pathways to the central nervous system. Intranasal administration bypasses hepatic first-pass metabolism and the blood-brain barrier limitations that would otherwise constrain systemic peptide delivery. Both peptides have very short plasma half-lives (minutes), but produce sustained CNS effects lasting hours.",
      "Neuroprotection. Both compounds independently demonstrate neuroprotective effects in animal models of ischemia, oxidative stress, and excitotoxicity. The combination has not been formally tested in stroke or neurodegenerative models, but the mechanistic complementarity (Semax's BDNF and Selank's antioxidant/stress modulation) supports neuroprotective application.",
    ],
  },
  {
    id: "research",
    title: "What is Semax + Selank used for?",
    intro:
      "The Semax + Selank blend is researched for situations where cognitive demand and stress overlap — high-stakes performance contexts, recovery from chronic stress, and supportive use during cognitively demanding work. Each component has independent Russian clinical approval for its respective indication; the combination is research-community-derived, with mechanistic complementarity as the rationale rather than a controlled trial of the blend itself.",
    body: [
      "Cognitive Performance Under Stress [1]. The headline use case. Researchers and biohackers use the blend during periods of high cognitive load combined with elevated stress — exam preparation, demanding work projects, creative deadlines. Semax handles the cognitive enhancement; Selank handles the anxiety-control side.",
      "Generalized Anxiety [3]. Selank has independent Russian clinical approval for generalized anxiety disorder. The combination adds Semax's cognitive support on top — useful for anxious individuals whose anxiety also degrades cognitive performance.",
      "Post-Stroke Neuroprotection [1][2]. Semax has Russian clinical approval for post-stroke neuroprotection. The mechanistic basis is BDNF upregulation, neuroplasticity support, and modulation of excitotoxic damage. The combination has not been formally tested in stroke trials but is mechanistically rational for the same context.",
      "Recovery from Chronic Stress. Both peptides modulate stress-response systems. Researchers use the blend during periods of recovery from chronic stress, burnout, or high cortisol contexts. Selank's stress-modulating effect plus Semax's mood and motivation effects address both the autonomic and the affective sides of chronic stress.",
      (
        <>
          Sleep-Related Cognitive Effects. Less established but referenced in research-community use. Semax may improve next-day cognitive performance after poor sleep; Selank may reduce sleep-onset anxiety. Researchers focused specifically on sleep often combine with{" "}
          <Link href="/peptides/dsip" className="text-[#0891b2] hover:underline">DSIP</Link>{" "}
          for the sleep architecture component.
        </>
      ),
    ],
  },
  {
    id: "timeline",
    title: "How long does Semax + Selank take to work?",
    intro:
      "Both peptides produce noticeable effects within 15–30 minutes of administration. Semax's cognitive lift — sharper focus, mood elevation — is typically the most immediate. Selank's anxiolytic effect builds over the first 30–60 minutes. Single-dose effects last 4–8 hours, depending on the dose and individual response.",
    content:
      "Cumulative effects from repeated dosing build over the first 1–2 weeks of a research cycle. Memory consolidation effects, BDNF upregulation, and stress-resilience changes accumulate with continued use. Standard research cycles are 2–6 weeks active, with cycling typically applied to avoid receptor adaptation. Some protocols use targeted single-day dosing — taking the blend only on days where elevated cognitive demand or stress is anticipated — rather than continuous daily administration.",
  },
  {
    id: "dosing",
    title: "How is Semax + Selank dosed?",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Semax + Selank is administered as an intranasal spray. Dosing is in micrograms per spray per peptide; protocols range from a single spray per nostril once daily up to 2–3 sprays per nostril 2–3× daily, depending on the goal and individual response.
        </p>
        <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">
          Standard research protocol (20 mg blend vial):
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Per-spray dose.</span> ~100 mcg of each peptide per 50 μL spray when a 20 mg vial (10 mg Semax + 10 mg Selank) is reconstituted into a 10 mL nasal spray bottle.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Starting protocol.</span> 1 spray per nostril once daily (morning) — total ~200 mcg Semax + 200 mcg Selank per day.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard maintenance.</span> 1–2 sprays per nostril, 1–2× daily — total 300–600 mcg of each peptide per day, in line with the per-component clinical protocols (Semax 300–600 mcg/day, Selank 300–900 mcg/day in Russian clinical use).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Higher-stress or higher-performance protocol.</span> 2–3 sprays per nostril, 2–3× daily, with at least 4 hours between doses.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle length.</span> 2–6 weeks active; cycle off when the acute need passes.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Timing.</span> Morning is the default. Pre-stressor dosing (30–60 minutes before a known stress trigger) is documented in research-community use.</li>
        </ol>
        <div className="pt-4">
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Pre-blended formulations (research-grade vials)
          </h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Standard SKU.</span> 20 mg vial containing 10 mg Semax + 10 mg Selank at fixed 1:1 ratio. The vial label always shows the combined milligrams of both components.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">Nasal spray reconstitution.</span> Unlike subcutaneous peptide blends, Semax + Selank is reconstituted into a nasal spray bottle (typically 10 mL volume) rather than left in the vial for syringe draw. A standard nasal spray actuator delivers ~50 μL per spray. Reconstituting a 20 mg vial into 10 mL of sterile saline (or BAC water) yields a 2 mg/mL combined concentration — and each 50 μL spray delivers ~100 mcg of each peptide.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">Concentration variations.</span> Researchers can adjust the reconstitution volume to change per-spray dose. A more concentrated reconstitution (e.g., 20 mg into 5 mL = 4 mg/mL combined) gives ~200 mcg of each peptide per 50 μL spray. A less concentrated reconstitution (20 mg into 20 mL = 1 mg/mL) gives ~50 mcg per spray. Researchers wanting non-1:1 ratios should buy Semax and Selank separately and reconstitute as two single-compound nasal sprays.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">Spray bottle handling.</span> Use a sterile pharmacy-grade nasal spray bottle. Prime the spray (2–3 actuations to waste) before the first use. Refrigerate the reconstituted spray bottle and use within 30 days. Discard if the solution becomes cloudy or discolored.
          </p>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Semax + Selank is not FDA-approved. Dosing in research-community use is derived from per-component Russian clinical protocols plus mechanistic complementarity — there are no FDA-approved retail dosing standards for the combination.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Need to calculate concentration and per-spray dose? Convert mg to spray volume with the{" "}
          <Link href="/calculator" className="text-[#0891b2] hover:underline">dosage calculator &rarr;</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How is Semax + Selank administered?",
    intro:
      "Semax + Selank is administered intranasally — sprayed into the nostrils — rather than by subcutaneous injection. This route takes advantage of direct nose-to-brain transport and bypasses the gastrointestinal tract and liver. A standard pharmacy-grade nasal spray bottle with the reconstituted blend is the only equipment required.",
    body: [
      "Route. Intranasal spray. Lean head slightly forward, close one nostril, spray into the open nostril while sniffing gently. Alternate nostrils for multi-spray protocols.",
      "Time of day. Morning is the default. Pre-stressor dosing (30–60 minutes before a known cognitive demand or anxiety trigger) is also common.",
      "With or without food. Either is fine. Semax and Selank are absorbed through the nasal mucosa, not the GI tract.",
      "Spray priming. Prime the spray bottle with 2–3 actuations to waste before the first use of a freshly reconstituted bottle.",
      "Spray technique. Avoid sniffing too hard — the goal is for the spray to deposit on the upper nasal mucosa for olfactory-pathway absorption, not to swallow the spray. A gentle inhalation during the spray is enough.",
      "Multiple sprays per dose. Wait 30–60 seconds between sprays in the same nostril to allow the first spray to settle on the mucosa.",
      "Missed dose. Skip and resume on the next scheduled dose. Do not double-dose.",
    ],
  },
  {
    id: "stacks",
    title: "What does Semax + Selank stack well with?",
    intro:
      "Semax + Selank pairs well with cognitive and sleep-supporting compounds. The thing to avoid is double-dosing either component by stacking with standalone Semax or Selank, and adding direct-binding GABA-A drugs (benzodiazepines) where the interaction profile is poorly characterized.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard nootropic supplements.</span> Caffeine, L-theanine, and racetams are compatible. Caffeine + L-theanine + Semax + Selank is a common protocol stack for cognitive performance under stress.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">DSIP for sleep.</span>{" "}
          <Link href="/peptides/dsip" className="text-[#0891b2] hover:underline">DSIP</Link>{" "}
          (delta-sleep-inducing peptide) addresses sleep architecture and is mechanistically independent of Semax + Selank's daytime cognitive and anxiolytic effects.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Epitalon for longevity-cognitive overlap.</span>{" "}
          <Link href="/peptides/epitalon" className="text-[#0891b2] hover:underline">Epitalon</Link>{" "}
          is a Russian-developed longevity peptide with cognitive and sleep-quality effects. Compatible with Semax + Selank for researchers tracking longer-term neurological aging metrics.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cardio and stress-resilience training.</span> Regular cardiovascular exercise and stress-resilience practices (meditation, breathwork) are baseline supports that amplify the blend's stress-modulating effects.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: full-dose standalone Semax or Selank.</span> The blend already contains both at meaningful doses. Stacking with standalone{" "}
          <Link href="/peptides/semax" className="text-[#0891b2] hover:underline">Semax</Link>{" "}
          or{" "}
          <Link href="/peptides/selank" className="text-[#0891b2] hover:underline">Selank</Link>{" "}
          protocols doubles the dose without independent benefit.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Use caution with: benzodiazepines or SSRIs.</span> Limited safety data on combinations. Selank's GABAergic effect is indirect and not believed to interact at the GABA-A receptor like benzodiazepines do — but the interaction profile is not well characterized. Researchers on prescribed psychiatric medication should consult a prescriber before adding the blend.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of Semax + Selank?",
    intro:
      "Side effects of intranasal Semax + Selank are typically mild and local — nasal irritation, occasional mild headache, transient activation or alertness changes. Both peptides have decades of Russian clinical use as approved pharmaceuticals, supporting a favorable safety class. Neither component produces sedation, dependence, or withdrawal at standard doses.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild nasal irritation.</span> Transient stinging or burning sensation at the spray site. Usually resolves within minutes.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild headache.</span> More common during the first 1–2 weeks. Often resolves with continued use or hydration adjustment.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Transient alertness or activation.</span> Reflects Semax's dopaminergic effect. Mild and generally welcome; less appropriate close to bedtime.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Aftertaste / nasal drip.</span> Spray that drains down the back of the throat produces a mild peptide taste. Avoid sniffing too hard.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sleep onset delay.</span> Reported with afternoon or evening dosing. Reflects Semax's activating effect on dopamine and noradrenaline. Reverse by limiting administration to morning.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild emotional flattening.</span> Reported with high-dose or prolonged use. Both components modulate emotion-regulation systems — over-suppression of normal emotional response is unusual but possible.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Recurrent nasal congestion.</span> Less common; usually resolves with reduced administration frequency.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Allergic reactions.</span> Very rare. Discontinue if hives, swelling, or breathing changes develop.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mood instability.</span> Rare and primarily reported with high-dose Semax. Discontinue if mood changes are significant.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Component-level concerns apply.</span> Each component has its own (limited) safety considerations — see the individual peptide pages.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Decades of Russian clinical use with both components support a generally favorable safety class. Neither peptide produces sedation, dependence, withdrawal, or tolerance at standard doses — a major differentiator from benzodiazepines for the anxiolytic side of the blend.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does Semax + Selank interact with other drugs?",
    intro:
      "Semax + Selank has limited well-characterized systemic drug interaction data. The most material theoretical interactions are with other CNS-active drugs — SSRIs, benzodiazepines, and dopaminergic medications — where mechanistic overlap creates the possibility of additive effects without controlled trial data to quantify the risk.",
    body: [
      "Benzodiazepines (alprazolam, diazepam, etc.). Selank's indirect GABAergic effect does not bind GABA-A directly, but the combined anxiolytic effect with direct GABA-A drugs has not been controlled-trial characterized. Consult a prescriber before combining.",
      "SSRIs and SNRIs. Both components modulate serotonin pathways. Combinations are not well characterized — theoretical additive serotonergic effects. Consult a prescriber.",
      "Dopaminergic medications. Semax's dopaminergic effect could theoretically combine additively with dopamine agonists, stimulants, or MAOIs. Limited interaction data.",
      "Other intranasal medications. Avoid administering other intranasal medications simultaneously with Semax + Selank to prevent absorption interference. Space by at least 30 minutes.",
      "Component-level interaction profiles. Cross-reference the Semax and Selank individual peptide pages for full per-component interaction details.",
    ],
  },
  {
    id: "storage",
    title: "How should Semax + Selank be stored?",
    body: [
      "Lyophilized (powder) vial: -20°C long-term, 2–8°C short-term (refrigerated).",
      "Reconstituted nasal spray bottle: 2–8°C, use within 30 days.",
      "Reconstitution: sterile saline or bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Do not freeze the reconstituted nasal spray. Freezing damages the peptides.",
      "Protect from light — store in the original container or an opaque/amber nasal spray bottle.",
      "Discard if the solution is cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of Semax + Selank research?",
    intro:
      "Semax + Selank has the strongest non-Western regulatory history of any peptide in PP's catalog — both components are approved pharmaceuticals in Russia. Outside Russia, both are research-grade only. The combination has no published controlled trial as a single product; the rationale rests on each component's independent clinical evidence plus mechanistic complementarity.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Semax + Selank is NOT FDA-approved. Both components are approved as pharmaceuticals in Russia (Semax for post-stroke neuroprotection and cognitive applications; Selank for generalized anxiety disorder). Russian approval does not extend to the US, EU, UK, or other major regulatory jurisdictions. The combination is sold as a research peptide for laboratory use only outside Russia.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Most published research on both peptides is from Russian institutions and published in Russian-language journals or Russian-affiliated international journals. English-language Western clinical trials are limited for both components, and there is no published Western controlled trial of the combination. The bulk of the Western research-community use rests on translations of Russian clinical research plus mechanistic studies.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Compounded blends are sold as &ldquo;research peptides.&rdquo; Quality varies dramatically by source. Third-party HPLC testing is strongly recommended — both for purity and to verify the labeled 1:1 Semax-to-Selank ratio.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping: Neither Semax nor Selank is currently on the WADA prohibited list. However, the situation could change — peptides modulating dopaminergic and stress-response systems are within scope of WADA's evolving cognitive-enhancement category. Tested athletes should verify current WADA status before use.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Semax + Selank FAQ",
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
          Ashmarin IP, Nezavibat'ko VN, Myasoedov NF, et al. A nootropic adrenocorticotropin analog 4-10 (Semax): 15 years of design and study. Zh Vyssh Nerv Deiat Im I P Pavlova. 1997;47(2):420-30.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/9173745/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/9173745/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Dolotov OV, Karpenko EA, Inozemtseva LS, et al. Semax, an analog of ACTH(4-10) with cognitive effects, regulates BDNF and trkB expression in the rat hippocampus. Brain Res. 2006;1117(1):54-60.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/16996037/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/16996037/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Sarkisova KY, Kozlovsky II, Kozlovskaya MM. Effects of heptapeptide selank on genetically-based and situation-provoked symptoms of depression in WAG/Rij and Wistar rats and BALB/c mice. Zh Vyssh Nerv Deiat Im I P Pavlova. 2008;58(2):226-37.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18661785/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18661785/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Vyunova TV, Andreeva LA, Shevchenko KV, Myasoedov NF. Peptide-based anxiolytics: the molecular aspects of heptapeptide selank biological activity. Protein Pept Lett. 2018;25(10):914-923.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/30255741/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/30255741/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Lochhead JJ, Thorne RG. Intranasal Delivery of Biologics to the Central Nervous System. Adv Drug Deliv Rev. 2012;64(7):614-628.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22119441/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22119441/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Medvedev VE, Tereshchenko OY, Israelyan AY, et al. Optimization of therapy for generalized anxiety disorder with Selank. S.S. Korsakov Journal of Neurology and Psychiatry (Zh Nevrol Psikhiatr). 2015;115(6):33-40.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/26356395/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/26356395/
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
          Semax + Selank has no controlled trial as a combination. The studies below are the key peer-reviewed sources for each component's mechanism and clinical effect — the empirical basis for the blend's design.
        </p>
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#0891b2] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 hover:text-[#0891b2] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function SemaxSelankPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Semax + Selank","description":"Semax + Selank research profile: 2-component intranasal cognitive and anxiolytic peptide blend. Mechanism, dosing, side effects, Russian pharmaceutical heritage, FAQ.","url":"https://profpeptide.com/peptides/semax-selank","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Semax + Selank"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Semax + Selank</h1>
        <span className="tag">Cognitive &amp; Nootropic</span>
        <span className="tag">Research-Grade</span>
        <span className="tag">Combination Blend</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 15, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Semax/Selank Blend, Cognitive-Anxiolytic Stack
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Cognitive &amp; Anxiolytic Peptide Blend (2-component)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Research-grade only in US (both components approved as pharmaceuticals in Russia)
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is Semax + Selank?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Semax + Selank is a 2-component intranasal peptide blend pairing two synthetic heptapeptides:{" "}
            <Link href="/peptides/semax" className="text-[#0891b2] hover:underline">Semax</Link>{" "}
            (an ACTH(4-10) analog) and{" "}
            <Link href="/peptides/selank" className="text-[#0891b2] hover:underline">Selank</Link>{" "}
            (a tuftsin analog). Both were developed at the Institute of Molecular Genetics of the Russian Academy of Sciences and are approved as pharmaceuticals in Russia — Semax for post-stroke neuroprotection and cognitive applications, Selank for generalized anxiety disorder. The blend pairs cognitive enhancement (Semax: BDNF upregulation, dopaminergic and serotonergic modulation) with anxiolytic effects (Selank: indirect GABAergic modulation) in a single intranasal spray — producing sharper focus and reduced anxiety simultaneously, without sedation, dependence, or withdrawal.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Cognitive performance under stress (Semax cognitive effects + Selank anxiety reduction)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anxiolytic effect without sedation, dependence, or withdrawal (Selank advantage over benzodiazepines)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">BDNF upregulation supporting memory consolidation and neuroplasticity</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Post-stroke neuroprotection (Semax approved Russian clinical indication)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mood and motivation effects through dopaminergic and serotonergic modulation</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Intranasal delivery — rapid CNS effect, bypasses first-pass hepatic metabolism</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> 1–3 sprays per nostril, 1–3× daily — typically ~100 mcg of each peptide per spray when a 20 mg vial (10 mg + 10 mg) is reconstituted into a 10 mL nasal spray bottle. Standard total daily dose: 300–600 mcg Semax + 300–900 mcg Selank, consistent with the per-component Russian clinical protocols.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Sold as a pre-blended 20 mg vial by specialty research peptide vendors, typically reconstituted into a nasal spray bottle. Neither component is FDA-approved (both are approved in Russia). See{" "}
            <Link href="/coupons" className="text-[#0891b2] hover:underline">
              Verified Discount Codes &rarr;
            </Link>{" "}
            for current options.
          </p>
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
            {s.content && (
              <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.content}</p>
            )}
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
        {["Cognitive", "Nootropic", "Anxiolytic", "Stress", "Combination Blend", "Preclinical"].map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>


      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Peptides</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/semax" className="text-sm font-medium text-[#0891b2] hover:underline">Semax</Link>
        <Link href="/peptides/selank" className="text-sm font-medium text-[#0891b2] hover:underline">Selank</Link>
        <Link href="/peptides/dsip" className="text-sm font-medium text-[#0891b2] hover:underline">DSIP</Link>
        <Link href="/peptides/epitalon" className="text-sm font-medium text-[#0891b2] hover:underline">Epitalon</Link>
        </div>
      </div>

<div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">
          Need to calculate a dose?
        </p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">
          Use the Prof. Peptide dosage calculator for accurate reconstitution
          and dosing math.
        </p>
        <Link href="/calculator" className="btn-primary text-sm">
          Open Calculator
        </Link>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Semax + Selank" pagePath="/peptides/semax-selank" />
    </div>
    </>
  );
}
