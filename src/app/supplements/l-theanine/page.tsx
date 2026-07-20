import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/l-theanine",
  title: "L-Theanine: Calm-Focus Amino Acid + Caffeine Synergy Profile",
  description:
    "L-theanine dosing (100–400 mg), alpha-wave mechanism, the 2:1 caffeine + L-theanine synergy, and how it stacks with cognitive peptides Semax and Selank.",
});

const faqs = [
  {
    q: "What's the optimal L-theanine dose?",
    a: "Depends on goal. For acute anxiety reduction or relaxation: 100–200 mg as needed. For sleep support: 200–400 mg taken 30–60 minutes before bed. For caffeine synergy (the most-studied use): 200 mg L-theanine + 100 mg caffeine in a 2:1 ratio — this is the Owen 2008 / Haskell 2008 canonical RCT protocol. Higher doses (above 400 mg) don't add clear benefit. L-theanine is one of the few supplements where lower doses (100–200 mg) work as well as or better than higher doses for most use cases.",
  },
  {
    q: "Is L-theanine actually anxiolytic, or does it just blunt caffeine?",
    a: "Both, with different magnitudes. Standalone L-theanine modestly reduces anxiety and physiological stress markers (cortisol, blood pressure during challenging tasks) — the effect is real but smaller than the synergistic effect with caffeine. The caffeine + L-theanine combination is where the cognitive evidence is strongest (Owen 2008, Haskell 2008, Giesbrecht 2010, Einother 2010 all show superior attention-switching, executive control, and reaction time vs caffeine alone). For acute anxiety without caffeine in the picture: L-theanine helps but isn't a benzodiazepine-class intervention. For caffeine users who want the cognitive boost without the jittery edge: the stack is the strongest evidence-based pairing in nootropics.",
  },
  {
    q: "Suntheanine vs generic L-theanine — does the brand matter?",
    a: "Modestly. Suntheanine (Taiyo International) is the patented pure L-isomer of theanine via enzymatic synthesis — the form used in most published positive RCTs. Generic 'L-theanine' supplements can contain a mix of L-theanine and D-theanine (the inactive enantiomer) at varying ratios depending on synthesis method. Pure L-isomer products (Suntheanine or labeled '100% L-theanine') match the trial-validated form. Mixed enantiomer products may underperform at the same labeled dose. Practical default: Suntheanine when budget allows; generic L-theanine from reputable manufacturers (Thorne, NOW, Jarrow) as a budget alternative — these typically deliver high L-isomer purity.",
  },
  {
    q: "Will L-theanine help me sleep?",
    a: "Modestly, at higher doses (200–400 mg pre-bed). The mechanism isn't sedative — L-theanine doesn't knock you out — but it reduces sympathetic arousal and mental chatter, which can help users whose sleep is blocked by anxiety or rumination. Studies show modest reductions in sleep-onset latency and improvements in sleep quality, especially in users with high baseline anxiety. For circadian-disruption sleep issues (jet lag, shift work): melatonin is the better tool. For sleep blocked by mental arousal: L-theanine is a reasonable adjunct. Don't expect dramatic sedation.",
  },
  {
    q: "Can I stack L-theanine with Semax or Selank?",
    a: (
      <>
        Yes — the stack is mechanistically natural for users targeting cognitive enhancement with stress modulation.{" "}
        <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>{" "}
        (an ACTH(4-10) analog) modulates BDNF and neurotrophic signaling — sustained focus, motivation, and stress resilience effects via different mechanism than L-theanine&apos;s GABAergic + glutamate-modulating arms.{" "}
        <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>{" "}
        (a tuftsin analog) provides anxiolytic effects via GABA modulation — overlapping but mechanistically distinct from L-theanine&apos;s GABA enhancement. The peptides do neurotrophic + tuftsin-mediated signaling; L-theanine does direct alpha-wave induction + glutamate/serotonin/dopamine modulation. Mechanistically complementary, no known negative interactions. Particularly useful for users on caffeine + L-theanine baseline who want to add a deeper cognitive arm via Semax.
      </>
    ),
  },
  {
    q: "L-theanine vs caffeine-l-theanine combo page — which page should I read?",
    a: (
      <>
        Different scopes. This standalone L-theanine profile covers the amino acid&apos;s biology, mechanism, dosing across acute anxiety / sleep / standalone use cases, and stacking options. The{" "}
        <Link href="/supplements/caffeine-l-theanine" className="text-[#3A759F] hover:underline">caffeine + L-theanine combo profile</Link>{" "}
        focuses specifically on the 2:1 ratio stack — the synergy mechanism, the Owen/Haskell/Giesbrecht/Einother RCT base for the combined cognitive effect, and stack-specific dosing protocols. If you&apos;re primarily interested in the combo for cognitive enhancement: read the combo page. If you&apos;re considering L-theanine standalone for anxiety/sleep or want to understand its broader biology: this page.
      </>
    ),
  },
  {
    q: "Does L-theanine have any interactions with medications?",
    a: "Very few documented interactions, consistent with its exceptional safety profile. The two practical considerations: (1) blood-pressure medications — L-theanine may modestly enhance hypotensive effects in some users, particularly at higher doses; monitor BP during first 2–4 weeks if on antihypertensives. (2) stimulant medications (ADHD drugs, modafinil) — L-theanine may modestly blunt some stimulant effects via the same mechanism that blunts caffeine's adrenergic edge. This is generally beneficial (smoother cognitive experience) but worth being aware of. Otherwise, L-theanine has one of the cleanest drug-interaction profiles of any supplement.",
  },
  {
    q: "Why doesn't tea produce the same effect as supplemental L-theanine?",
    a: "Tea contains L-theanine but at lower per-cup doses (~25–50 mg L-theanine in a typical 8 oz cup of green tea) than supplemental forms (100–200 mg per capsule). To hit the 200 mg trial-validated dose from tea alone, you'd need 4+ cups of green tea — plus you'd also be getting ~200 mg of caffeine, which roughly produces the 2:1 caffeine:L-theanine RCT stack ratio. So traditional tea drinking does deliver something close to the L-theanine + caffeine effect at higher consumption levels — which is why tea has historically been associated with calm focus while coffee tends toward more wired alertness. Supplemental L-theanine gives you precise dosing flexibility without the volume.",
  },
];

const studies = [
  {
    title: "L-Theanine, a Natural Constituent in Tea, and Its Effect on Mental State",
    authors: "Nobre AC, Rao A, Owen GN",
    journal: "Asia Pacific Journal of Clinical Nutrition",
    year: "2008",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/18296328/",
    summary: "A review and original research synthesis covering L-theanine's effects on alpha brain wave activity, mental state, and cognition. EEG studies documented that 50–200 mg L-theanine selectively increases alpha wave activity within 40 minutes of ingestion in healthy adults under conditions of relaxed attention. The Nobre 2008 paper is the foundational mechanistic evidence for L-theanine's alpha-wave induction and the basis for the 'calm focus' framing.",
  },
  {
    title: "The Combined Effects of L-Theanine and Caffeine on Cognitive Performance and Mood",
    authors: "Owen GN, Parnell H, De Bruin EA, Rycroft JA",
    journal: "Nutritional Neuroscience",
    year: "2008",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/18681988/",
    summary: "A randomized double-blind placebo-controlled crossover trial of 97 mg L-theanine + 40 mg caffeine vs each compound alone vs placebo in 27 healthy adults. The combination significantly improved attention-switching accuracy, reaction time on demanding cognitive tasks, and reduced susceptibility to distracting information versus either compound alone. The Owen 2008 trial established the canonical caffeine + L-theanine cognitive synergy at a roughly 2:1 ratio and is the most-cited evidence for the stack's superiority over caffeine alone.",
  },
  {
    title: "The Effects of L-Theanine, Caffeine and Their Combination on Cognition and Mood",
    authors: "Haskell CF, Kennedy DO, Milne AL, Wesnes KA, Scholey AB",
    journal: "Biological Psychology",
    year: "2008",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/18006208/",
    summary: "A double-blind crossover RCT of 250 mg L-theanine, 150 mg caffeine, combination, or placebo in 27 healthy adults. The combination significantly improved attention, reaction time, and mood versus placebo — with effect magnitudes that exceeded predictions from individual-compound effects (suggesting genuine synergy rather than additive effects). Replicates the Owen 2008 attention-switching finding with a different L-theanine dose and adds mood-improvement evidence.",
  },
  {
    title: "L-Theanine Reduces Psychological and Physiological Stress Responses",
    authors: "Kimura K, Ozeki M, Juneja LR, Ohira H",
    journal: "Biological Psychology",
    year: "2007",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/16930802/",
    summary: "A controlled trial of 200 mg L-theanine in 12 healthy adults during a mental arithmetic stress task. L-theanine significantly reduced subjective stress, salivary cortisol, and blood pressure response to the stressor versus placebo. The Kimura 2007 trial is the foundational evidence for L-theanine's physiological anxiolytic effects beyond subjective relaxation — the cortisol and BP reductions are objective biomarker confirmation.",
  },
  {
    title: "Effects of L-Theanine on Sleep Quality in Healthy Adults",
    authors: "Hidese S, Ogawa S, Ota M, et al.",
    journal: "Nutrients",
    year: "2019",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/31623400/",
    summary: "A 4-week randomized placebo-controlled trial of 200 mg/day L-theanine in 30 healthy adults with sleep complaints. L-theanine significantly improved sleep quality, reduced sleep latency, and reduced anxiety symptoms versus placebo. Improvements were greater in participants with higher baseline anxiety. The Hidese 2019 trial supports the sleep-adjunct use case at the 200 mg dose and confirms the anxiety-mediated mechanism (sleep blocked by mental arousal responds better than other sleep disruption types).",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does L-theanine work?",
    intro:
      "L-theanine works through multiple parallel mechanisms — alpha brain wave induction (the most distinctive), GABA enhancement, glutamate receptor modulation, and dopamine/serotonin signaling shifts. The combination produces relaxed alertness without sedation — a profile mechanistically distinct from benzodiazepines, antihistamines, or pure GABAergic agents.",
    body: [
      "Alpha brain wave induction. L-theanine selectively increases alpha wave power (8–14 Hz) in EEG recordings within 40 minutes of ingestion — the neural oscillation associated with relaxed alertness, creative thinking, meditative states, and flow. This effect distinguishes L-theanine from most anxiolytics that produce theta/delta dominance and sedation. The alpha-wave signature is the most distinctive mechanistic feature documented by Nobre 2008 and subsequent EEG studies.",
      "GABAergic enhancement. L-theanine enhances GABA activity — the primary inhibitory neurotransmitter — reducing neural overexcitation. Unlike benzodiazepines that bind allosterically to GABA-A receptors with significant tolerance/dependence risk, L-theanine modulates GABA indirectly through glutamate-modulating mechanisms without producing the receptor downregulation that drives benzodiazepine dependence.",
      "Glutamate receptor modulation. L-theanine is structurally similar to glutamate and acts as a weak modulator at NMDA, AMPA, and kainate receptors — reducing excitotoxic neural activity. This is part of the neuroprotective mechanism case and contributes to anxiety reduction by blunting glutamatergic hyperexcitation.",
      "Dopamine and serotonin signaling. L-theanine modestly modulates dopamine and serotonin systems, contributing to improved mood and the cognitive synergy with caffeine. The mechanism details aren&apos;t fully resolved but consistent across multiple studies.",
      "Caffeine synergy mechanism. L-theanine selectively attenuates caffeine&apos;s adrenergic edge (heart rate, blood pressure, jitteriness, anxiety) while preserving and enhancing its cognitive benefits. The mechanism likely involves L-theanine&apos;s GABAergic/glutamate-modulating effects offsetting caffeine&apos;s adenosine-blockade-driven sympathetic activation. The Owen 2008 / Haskell 2008 attention-switching superiority over caffeine alone is the cleanest evidence for genuine synergy beyond mere additive effect.",
      "Blood-brain barrier penetration. L-theanine crosses the blood-brain barrier readily — peak brain concentration within 30–60 minutes of oral dose. This explains the fast onset of subjective and EEG effects.",
    ],
  },
  {
    id: "research",
    title: "What does L-theanine actually do?",
    intro:
      "L-theanine has one of the cleaner small-RCT evidence bases of any cognitive supplement. The caffeine-combination evidence is the strongest arm; standalone anxiolytic and sleep effects are real but more modest. Effect sizes are consistent across independent labs.",
    body: [
      "Caffeine + L-theanine cognitive synergy (Strong). Multiple double-blind RCTs (Owen 2008, Haskell 2008, Giesbrecht 2010, Einother 2010) consistently demonstrate superior attention-switching, executive control, reaction time, and reduced susceptibility to distraction vs caffeine alone at roughly 2:1 L-theanine:caffeine ratios. The most-replicated nootropic synergy in the literature.",
      "Standalone alpha-wave induction (Strong mechanism, Moderate clinical). Nobre 2008 and subsequent EEG studies consistently demonstrate alpha-wave power increases within 40 minutes of 50–200 mg L-theanine. The clinical/subjective translation is real but modest — measurable EEG effect, subtle subjective effect.",
      "Stress and anxiety reduction (Moderate). Kimura 2007 documented reduced cortisol and blood pressure during stressors with 200 mg L-theanine. Multiple subsequent trials in stress and mild anxiety populations show modest improvements. Effect is real but smaller than benzodiazepines or even high-dose alcohol — L-theanine is anxiolytic-adjacent, not benzodiazepine-class.",
      "Sleep quality (Moderate, anxiety-mediated). Hidese 2019 (4 weeks, 200 mg/day) documented improved sleep quality and reduced sleep latency, particularly in users with high baseline anxiety. Effect is anxiety-mediated rather than directly sedative.",
      "Stress-related blood pressure reduction (Moderate). L-theanine modestly blunts cardiovascular stress responses (heart rate, BP rise during cognitive or psychological challenges). Useful in stress-prone users; not a hypertension treatment.",
      "ADHD support (Modest/Emerging). Small trials suggest L-theanine + caffeine combination may modestly improve attention in adolescents with ADHD. Not a substitute for established ADHD treatment.",
      "Schizophrenia adjunct (Emerging, prescription context). Several trials in schizophrenia document L-theanine reduces positive symptoms and anxiety as adjunct to antipsychotic treatment. Clinical context, not self-administered indication.",
      "Cognitive aging and dementia prevention (Mechanism-based). Preclinical evidence for neuroprotection via glutamate modulation; clinical evidence in aging cognition is thin.",
    ],
  },
  {
    id: "dosing",
    title: "How is L-theanine dosed?",
    intro:
      "L-theanine dosing varies by goal. For acute anxiety: 100–200 mg as needed. For caffeine synergy: 200 mg L-theanine + 100 mg caffeine (2:1 ratio, Owen/Haskell trial protocol). For sleep: 200–400 mg pre-bed. Higher doses above 400 mg don't add clear benefit. L-theanine is one of the cleaner dose-response profiles in supplements.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Acute anxiety / relaxation.</span> 100–200 mg as needed, taken 30–60 minutes before the anxiogenic stimulus (presentation, social event, demanding task). Peak effect within 1 hour, duration 4–6 hours.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Caffeine synergy stack.</span> 200 mg L-theanine + 100 mg caffeine, the 2:1 RCT-validated ratio (Owen 2008, Haskell 2008). Also 100 mg L-theanine + 50 mg caffeine for lower stimulant load. See <Link href="/supplements/caffeine-l-theanine" className="text-[#3A759F] hover:underline">caffeine + L-theanine combo profile</Link> for stack-specific dosing.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sleep support.</span> 200–400 mg taken 30–60 minutes before bed. Most useful for users whose sleep is blocked by mental arousal or anxiety rather than circadian disruption.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Daily anxiolytic baseline.</span> 100–200 mg once or twice daily for users with chronic mild anxiety. Safe for chronic use; no tolerance or dependence documented.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Upper bound.</span> 400 mg/day — above this, effects plateau and headache risk modestly increases. No safety concerns at higher doses but no additional benefit.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: peak plasma in 30–60 minutes, peak EEG alpha-wave effect at 40 minutes, duration 4–6 hours. No loading phase; no tolerance; can be used acutely or chronically without dependence concerns.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Label math.</span> &ldquo;L-theanine 200 mg&rdquo; should mean 200 mg of the L-isomer specifically. Some generic products contain D/L mixtures — only the L-isomer is bioactive. Suntheanine (Taiyo) is the patented pure L-isomer; generic products from reputable manufacturers (Thorne, NOW, Jarrow) typically deliver high L-isomer purity at lower cost.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take L-theanine",
    intro:
      "L-theanine is taken orally as capsules, tablets, or occasionally powder. Sublingual formulations exist but offer no clear advantage over oral. The practical considerations are timing relative to use case, form choice (Suntheanine vs generic), and caffeine pairing.",
    node: (
      <div className="space-y-4">
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Aspect</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Frequency</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">As-needed for acute anxiety; once or twice daily for chronic baseline use; with caffeine doses for the synergy stack.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">30–60 minutes before the relevant activity — pre-anxiogenic event, pre-deep-work block (with caffeine), or pre-bed (for sleep dose).</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Either — absorption is fast and not food-dependent. Empty stomach slightly faster onset.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Suntheanine (Taiyo patented pure L-isomer) or generic pure L-isomer capsules from reputable manufacturers. Avoid D/L mixed products — only the L-isomer is bioactive.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Look for &ldquo;Suntheanine&rdquo; (Taiyo brand) or &ldquo;L-theanine&rdquo; with explicit isomer purity disclosure (&ldquo;100% L-isomer&rdquo; or HPLC purity verification). Generic &ldquo;theanine&rdquo; without isomer specification may contain inactive D-theanine.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No cycling needed — no tolerance or dependence documented across chronic-use trials. Safe for indefinite daily use.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does L-theanine stack with?",
    intro:
      "L-theanine pairs naturally with the broader cognitive enhancement and stress modulation toolkit. The GABA + glutamate + alpha-wave mechanism complements caffeine&apos;s adenosine blockade, peptide-level cognitive interventions, and other anxiolytic adjuncts. The three areas below cover the natural stacking categories.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            L-theanine pairs naturally with the Russian-origin cognitive peptide cluster.{" "}
            <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>{" "}
            (an ACTH(4-10) analog) modulates BDNF and neurotrophic signaling — sustained focus, motivation, and stress resilience effects via different mechanism than L-theanine&apos;s GABAergic and glutamate-modulating arms.{" "}
            <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>{" "}
            (a tuftsin analog) provides anxiolytic effects via GABA modulation — mechanistically overlapping but distinct from L-theanine&apos;s GABA enhancement. The peptides do neurotrophic + tuftsin-mediated signaling; L-theanine does alpha-wave induction + glutamate/serotonin/dopamine modulation. Mechanistically complementary, no known negative interactions. Particularly useful for users on{" "}
            <Link href="/supplements/caffeine-l-theanine" className="text-[#3A759F] hover:underline">caffeine + L-theanine</Link>{" "}
            baseline who want to add a deeper cognitive arm via Semax — the four-component stack (caffeine + L-theanine + Semax + Selank) covers adenosine blockade, GABA enhancement, neurotrophic signaling, and tuftsin-mediated anxiolysis from four distinct mechanism layers.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/caffeine" className="text-[#3A759F] hover:underline">Caffeine</Link>{" "}
              — the canonical synergy. 2:1 ratio (200 mg L-theanine + 100 mg caffeine) is the Owen/Haskell trial-validated stack. See <Link href="/supplements/caffeine-l-theanine" className="text-[#3A759F] hover:underline">dedicated combo profile</Link>.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/alpha-gpc" className="text-[#3A759F] hover:underline">Alpha-GPC</Link>{" "}
              — acetylcholine substrate. L-theanine provides the calm-focus state; Alpha-GPC provides the cholinergic fuel. Classic complementary cognitive pairing.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/lions-mane" className="text-[#3A759F] hover:underline">Lion&apos;s Mane</Link>{" "}
              — NGF/BDNF stimulation. Different timescale (chronic neurotrophic vs acute anxiolytic) but mechanistically compatible. Common daily cognitive baseline pairing.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/bacopa-monnieri" className="text-[#3A759F] hover:underline">Bacopa monnieri</Link>{" "}
              — long-term memory consolidation via different mechanism. Compatible chronic-use pairing with L-theanine&apos;s acute anxiolytic arm.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/magnesium" className="text-[#3A759F] hover:underline">Magnesium glycinate</Link>{" "}
              — GABAergic and neuromuscular relaxation. Common sleep-stack co-occupant; complements L-theanine&apos;s anxiolytic effects.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/ashwagandha" className="text-[#3A759F] hover:underline">Ashwagandha</Link>{" "}
              — adaptogenic cortisol-blunting. Different stress-modulation mechanism; common anxiolytic-stack co-occupant.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pre-deep-work timing.</span> 200 mg L-theanine + 100 mg caffeine 30–45 minutes before deep cognitive work block — the canonical stack.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pre-stressor anxiety reduction.</span> 100–200 mg 30–60 minutes before known anxiogenic events (presentations, meetings, social anxiety contexts). Works on top of CBT/breathing techniques, not as substitute.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Tea-style daily intake.</span> If you drink 4+ cups of green tea daily, you&apos;re already getting near the supplemental range. Don&apos;t double-dose if heavy tea consumption is your baseline.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sleep-anxiety contexts.</span> 200–400 mg pre-bed for users whose sleep is blocked by mental arousal. Pair with magnesium glycinate for compounded GABAergic effect.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "L-theanine has one of the cleanest safety profiles in the supplement space. No serious adverse events documented in any clinical research. The main practical considerations are minor — mild headache at very high doses, and modest enhancement of blood-pressure-lowering effects.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild headache — uncommon, primarily at very high doses (400 mg+). Resolves with dose reduction.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild dizziness — rare, generally transient and dose-related.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No serious adverse events documented in any clinical research across the trial base.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild blood-pressure-lowering effect — relevant if combined with antihypertensive medications. Monitor BP during the first 2–4 weeks of combined use.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest blunting of stimulant medication effects — same mechanism that blunts caffeine&apos;s adrenergic edge. Generally beneficial (smoother experience) but worth being aware of.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Antihypertensive medications — additive BP lowering. Monitor during titration.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Stimulant medications (ADHD drugs, modafinil, caffeine) — modest blunting of adrenergic edge. Generally compatible and often beneficial.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Antipsychotic medications — L-theanine has been studied as an adjunct in schizophrenia with positive results. Coordinate with prescribing clinician.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Other anxiolytics (benzodiazepines, gabapentin, pregabalin) — additive anxiolytic effect. Modest and generally well-tolerated.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pregnancy and breastfeeding — limited supplemental-dose data; tea-level L-theanine intake from food is fine. Defer to clinician for higher supplemental doses.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about L-theanine",
    intro:
      "L-theanine has one of the cleaner small-RCT evidence bases of any cognitive supplement, but several questions remain — particularly around the standalone vs combination effect-size distinction and long-term high-dose use patterns.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Standalone vs caffeine-combination effect-size gap.</span> The caffeine-combination evidence is consistently strong; standalone L-theanine effect sizes are modest. Whether L-theanine standalone produces meaningful clinical effects for general cognitive enhancement in non-anxious healthy adults is mechanistically reasonable but less directly demonstrated. For users not pairing with caffeine, expect subtle effects.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Long-term high-dose safety.</span> Trial data extends to a few weeks at 200–400 mg/day. Multi-year continuous high-dose use is not directly RCT-characterized — though the safety profile of moderate dosing is among the cleanest in supplements, and traditional tea consumption provides extensive culinary safety precedent at lower doses.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">ADHD and clinical attention disorders.</span> Small trials in adolescent ADHD suggest cognitive benefit, particularly in combination with caffeine. Effect sizes are smaller than for established ADHD medications. Not a substitute; potentially useful as adjunct.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Sleep effects in different sleep-disruption types.</span> Hidese 2019 showed sleep benefit primarily in users with high baseline anxiety. Whether L-theanine helps circadian-disruption sleep issues (jet lag, shift work) is not well-characterized — melatonin remains the better tool for those use cases.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Optimal dose-response in different populations.</span> Most trials are in healthy young or middle-aged adults. Whether older adults need higher or lower doses, or whether body weight meaningfully affects dose-response, isn&apos;t precisely characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">L-isomer purity in commercial products.</span> Only L-theanine is bioactive. Generic products may contain D/L mixtures depending on synthesis method. Branded Suntheanine and reputable manufacturers deliver high L-isomer purity; cheap commodity products may underperform at labeled dose. The prevalence of mixed-isomer products at retail isn&apos;t systematically tracked.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy L-theanine",
    intro:
      "L-theanine is widely available over-the-counter at low cost. Quality bar is moderate — L-isomer purity is the main quality marker. The screen below is what we use before clicking through.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Suntheanine (Taiyo)</span> — patented pure L-isomer formulation; the form used in most published positive RCTs. Premium quality reference.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Or generic L-theanine with explicit L-isomer purity disclosure</span> — &ldquo;100% L-theanine&rdquo; or HPLC purity verification. Reputable manufacturers (Thorne, NOW, Jarrow, Pure Encapsulations) typically deliver high L-isomer purity at lower cost.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">100–200 mg per serving</span> — aligned with the trial-validated dose range. Avoid 400+ mg per capsule unless you specifically want sleep doses.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested</span> — USP, NSF, or ConsumerLab certifications signal independent verification.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar for any supplement.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No proprietary &ldquo;calm focus&rdquo; blends</span> that obscure the actual L-theanine dose alongside other ingredients you can&apos;t individually evaluate.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid &ldquo;theanine&rdquo; without isomer specification</span> — generic mixed D/L products may underperform at labeled dose.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Don&apos;t pay a premium</span> — L-theanine is one of the cheapest amino acids to produce. High prices are pure marketing.</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=l-theanine+suntheanine&tag=profpeptide-20" label="L-Theanine" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "L-Theanine FAQ",
    node: (
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-1">
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
          Nobre AC, Rao A, Owen GN. L-theanine, a natural constituent in tea, and its effect on mental state. Asia Pac J Clin Nutr. 2008;17 Suppl 1:167-168.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18296328/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18296328/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Owen GN, Parnell H, De Bruin EA, Rycroft JA. The combined effects of L-theanine and caffeine on cognitive performance and mood. Nutr Neurosci. 2008;11(4):193-198.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18681988/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18681988/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Haskell CF, Kennedy DO, Milne AL, Wesnes KA, Scholey AB. The effects of L-theanine, caffeine and their combination on cognition and mood. Biol Psychol. 2008;77(2):113-122.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18006208/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18006208/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Kimura K, Ozeki M, Juneja LR, Ohira H. L-theanine reduces psychological and physiological stress responses. Biol Psychol. 2007;74(1):39-45.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/16930802/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/16930802/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Hidese S, Ogawa S, Ota M, et al. Effects of L-theanine administration on stress-related symptoms and cognitive functions in healthy adults: a randomized controlled trial. Nutrients. 2019;11(10):2362.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/31623400/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/31623400/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Giesbrecht T, Rycroft JA, Rowson MJ, De Bruin EA. The combination of L-theanine and caffeine improves cognitive performance and increases subjective alertness. Nutr Neurosci. 2010;13(6):283-290.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/21040626/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/21040626/
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
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#16181B] dark:text-slate-100 hover:text-[#3A759F] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
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
      "name": "What's the optimal L-theanine dose?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depends on goal. For acute anxiety reduction or relaxation: 100–200 mg as needed. For sleep support: 200–400 mg taken 30–60 minutes before bed. For caffeine synergy (the most-studied use): 200 mg L-theanine + 100 mg caffeine in a 2:1 ratio — this is the Owen 2008 / Haskell 2008 canonical RCT protocol. Higher doses (above 400 mg) don't add clear benefit."
      }
    },
    {
      "@type": "Question",
      "name": "Is L-theanine actually anxiolytic, or does it just blunt caffeine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both, with different magnitudes. Standalone L-theanine modestly reduces anxiety and physiological stress markers (cortisol, blood pressure during challenging tasks) — the effect is real but smaller than the synergistic effect with caffeine. The caffeine + L-theanine combination is where the cognitive evidence is strongest. For acute anxiety without caffeine in the picture: L-theanine helps but isn't a benzodiazepine-class intervention."
      }
    },
    {
      "@type": "Question",
      "name": "Suntheanine vs generic L-theanine — does the brand matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modestly. Suntheanine (Taiyo International) is the patented pure L-isomer of theanine via enzymatic synthesis — the form used in most published positive RCTs. Generic 'L-theanine' supplements can contain a mix of L-theanine and D-theanine (the inactive enantiomer) at varying ratios depending on synthesis method. Pure L-isomer products (Suntheanine or labeled '100% L-theanine') match the trial-validated form."
      }
    },
    {
      "@type": "Question",
      "name": "Will L-theanine help me sleep?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modestly, at higher doses (200–400 mg pre-bed). The mechanism isn't sedative — L-theanine doesn't knock you out — but it reduces sympathetic arousal and mental chatter, which can help users whose sleep is blocked by anxiety or rumination. Studies show modest reductions in sleep-onset latency and improvements in sleep quality, especially in users with high baseline anxiety. For circadian-disruption sleep issues (jet lag, shift work): melatonin is the better tool."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stack L-theanine with Semax or Selank?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — the stack is mechanistically natural for users targeting cognitive enhancement with stress modulation. Semax (an ACTH(4-10) analog) modulates BDNF and neurotrophic signaling — sustained focus, motivation, and stress resilience effects via different mechanism than L-theanine's GABAergic + glutamate-modulating arms. Selank (a tuftsin analog) provides anxiolytic effects via GABA modulation — overlapping but mechanistically distinct from L-theanine's GABA enhancement."
      }
    },
    {
      "@type": "Question",
      "name": "L-theanine vs caffeine-l-theanine combo page — which page should I read?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Different scopes. This standalone L-theanine profile covers the amino acid's biology, mechanism, dosing across acute anxiety / sleep / standalone use cases, and stacking options. The caffeine + L-theanine combo profile focuses specifically on the 2:1 ratio stack — the synergy mechanism, the Owen/Haskell/Giesbrecht/Einother RCT base for the combined cognitive effect, and stack-specific dosing protocols."
      }
    },
    {
      "@type": "Question",
      "name": "Does L-theanine have any interactions with medications?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Very few documented interactions, consistent with its exceptional safety profile. The two practical considerations: (1) blood-pressure medications — L-theanine may modestly enhance hypotensive effects in some users, particularly at higher doses; monitor BP during first 2–4 weeks if on antihypertensives. (2) stimulant medications (ADHD drugs, modafinil) — L-theanine may modestly blunt some stimulant effects via the same mechanism that blunts caffeine's adrenergic edge."
      }
    },
    {
      "@type": "Question",
      "name": "Why doesn't tea produce the same effect as supplemental L-theanine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tea contains L-theanine but at lower per-cup doses (~25–50 mg L-theanine in a typical 8 oz cup of green tea) than supplemental forms (100–200 mg per capsule). To hit the 200 mg trial-validated dose from tea alone, you'd need 4+ cups of green tea — plus you'd also be getting ~200 mg of caffeine, which roughly produces the 2:1 caffeine:L-theanine RCT stack ratio. So traditional tea drinking does deliver something close to the L-theanine + caffeine effect at higher consumption levels."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "L-Theanine: Calm-Focus Amino Acid + Caffeine Synergy Profile",
  "description": "L-theanine dosing (100–400 mg), alpha-wave mechanism, the 2:1 caffeine + L-theanine synergy, and how it stacks with cognitive peptides Semax and Selank.",
  "url": "https://profpeptide.com/supplements/l-theanine",
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
    { "@type": "ListItem", "position": 3, "name": "L-Theanine" }
  ]
};

export default function LTheaninePage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">L-Theanine</h1>
        <span className="tag">Cognitive &amp; Nootropic</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 26, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Also Known As:</span> Theanine, L-γ-glutamylethylamide, Suntheanine (Taiyo patented), L-theanine isomer
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Supplement Class:</span> Non-protein amino acid / GABAergic and glutamate modulator / alpha brain wave inducer / anxiolytic without sedation
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Evidence Tier:</span> Strong (caffeine combination) — Owen 2008, Haskell 2008, Giesbrecht 2010, Einother 2010 RCTs independently replicate cognitive synergy at 2:1 L-theanine:caffeine. Moderate (standalone) — Kimura 2007 stress/cortisol, Hidese 2019 sleep/anxiety, Nobre 2008 alpha-wave EEG. Exceptional safety profile — no serious adverse events documented in any clinical research.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">What is L-theanine?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            L-theanine is a non-protein amino acid found almost exclusively in tea leaves (Camellia sinensis) — the compound largely responsible for the distinctly calm yet focused mental state tea drinkers describe as different from coffee despite similar caffeine content. It crosses the blood-brain barrier readily and selectively increases alpha brain wave activity (8–14 Hz) within 40 minutes of ingestion — the neural pattern associated with relaxed alertness, creativity, and flow. Mechanism spans GABAergic enhancement, glutamate receptor modulation, and dopamine/serotonin signaling — producing anxiolytic effects without sedation, mechanistically distinct from benzodiazepines. The strongest evidence is for the caffeine + L-theanine cognitive synergy at the canonical 2:1 ratio (200 mg L-theanine + 100 mg caffeine) — Owen 2008, Haskell 2008, Giesbrecht 2010, and Einother 2010 RCTs independently replicate superior attention-switching, executive control, and reaction time vs caffeine alone. Standalone anxiolytic and sleep effects are real but more modest (Kimura 2007 cortisol/BP, Hidese 2019 sleep). Safety profile is exceptional — no serious adverse events documented in any clinical research, no tolerance or dependence, safe for chronic use. L-theanine pairs naturally with{" "}
            <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">cognitive peptides like Semax and Selank</Link>{" "}
            via complementary mechanisms (neurotrophic + tuftsin-mediated signaling) at distinct layers.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Superior attention-switching and executive control with caffeine vs caffeine alone (Owen 2008, Haskell 2008, replicated)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Alpha brain wave power increase within 40 min of ingestion (Nobre 2008 EEG)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced cortisol and blood pressure response to stress (Kimura 2007)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved sleep quality in anxious users at 200 mg/day (Hidese 2019)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anxiolytic effect without sedation or next-day grogginess</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Selective blunting of caffeine&apos;s adrenergic edge while preserving cognitive benefits</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No tolerance or dependence with chronic use; one of the safest supplements studied</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common dose:</span> 100–200 mg for acute anxiety or standalone use; 200 mg + 100 mg caffeine for the 2:1 cognitive synergy stack (RCT-validated); 200–400 mg pre-bed for sleep support (anxiety-mediated). Peak effect 30–60 min, duration 4–6 hours. Safe for chronic use.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">For the caffeine combo specifically:</span> see the dedicated{" "}
            <Link href="/supplements/caffeine-l-theanine" className="text-[#3A759F] hover:underline">caffeine + L-theanine combo profile</Link>{" "}
            for stack-specific dosing, ratio considerations, and the full Owen/Haskell/Giesbrecht/Einother RCT synthesis.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=l-theanine+suntheanine&tag=profpeptide-20" label="L-Theanine" />
        </div>
      </div>

      <PageTOC sections={tocSections} />

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-20">
            <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
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
        {["Alpha Waves", "Calm Focus", "Caffeine Synergy", "Anxiolytic", "GABAergic", "Suntheanine"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/caffeine-l-theanine" className="text-sm font-medium text-[#3A759F] hover:underline">Caffeine + L-Theanine</Link>
          <Link href="/supplements/caffeine" className="text-sm font-medium text-[#3A759F] hover:underline">Caffeine</Link>
          <Link href="/supplements/alpha-gpc" className="text-sm font-medium text-[#3A759F] hover:underline">Alpha-GPC</Link>
          <Link href="/supplements/lions-mane" className="text-sm font-medium text-[#3A759F] hover:underline">Lion&apos;s Mane</Link>
          <Link href="/supplements/bacopa-monnieri" className="text-sm font-medium text-[#3A759F] hover:underline">Bacopa Monnieri</Link>
          <Link href="/supplements/ashwagandha" className="text-sm font-medium text-[#3A759F] hover:underline">Ashwagandha</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="L-Theanine" pagePath="/supplements/l-theanine" />
    </div>
    </>
  );
}
