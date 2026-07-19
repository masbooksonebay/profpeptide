import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/lions-mane",
  title: "Lion's Mane: NGF/BDNF Mushroom for Neurogenesis + Memory",
  description:
    "Lion's Mane dosing, NGF/BDNF mechanism, the Mori 2009 mild-cognitive-impairment RCT, and how it stacks with cognitive peptides Semax and Selank.",
});

const faqs = [
  {
    q: "Fruiting body vs mycelium vs whole-mushroom — which form is best?",
    a: "Different bioactive profiles. The fruiting body (the visible mushroom) contains hericenones — the NGF-stimulating compounds with the most direct human cognitive evidence. The mycelium (the root-like network) contains erinacines — also NGF-stimulating but with limited human trial evidence vs animal studies. \"Whole-mushroom\" products contain both but often at lower concentrations than concentrated extracts. Practical default: dual-extract products containing both fruiting body + mycelium standardized to beta-glucans (>30%) — these match the broadest evidence base. Avoid powdered whole-mushroom products that don't disclose extract concentration or beta-glucan content.",
  },
  {
    q: "How much Lion's Mane do I need for cognitive benefits?",
    a: "500–3,000 mg/day of standardized extract. The Mori 2009 mild-cognitive-impairment trial used 750 mg/day (250 mg × 3); subsequent healthy-adult cognitive trials (Docherty 2023) used 1,800 mg/day. Effective range spans 500 mg (light maintenance) to 3,000 mg (clinical-context use). Higher doses don't clearly add benefit and increase cost. For chronic daily cognitive maintenance: 1,000–1,500 mg/day is the practical sweet spot. For NGF-mediated nerve recovery contexts or established mild cognitive impairment: clinician-supervised higher dosing may be appropriate.",
  },
  {
    q: "How long until Lion's Mane works?",
    a: "8–12 weeks minimum for chronic cognitive effects. Mori 2009 showed benefit at 16 weeks; benefits faded after supplementation stopped (suggesting ongoing use is required for sustained effect). Docherty 2023 documented acute single-dose effects on processing speed and working memory within hours — but the structural NGF-mediated neurogenesis effects build over weeks of consistent use. Don't evaluate before 8 weeks if you're trying it for cognitive maintenance. If you've taken 1,000+ mg of quality extract daily for 12 weeks with no perceived benefit, it's probably not your lever.",
  },
  {
    q: "Does Lion's Mane actually do anything for Alzheimer's or dementia?",
    a: "Mechanistically interesting; clinically uncertain. The NGF/BDNF stimulation mechanism is exactly what Alzheimer's research targets — cholinergic neurons (the most affected in AD) are NGF-dependent for survival, and BDNF supports synaptic plasticity that AD progressively loses. Animal models of AD show consistent neuroprotective effects. Human trial evidence is limited — Mori 2009 in mild cognitive impairment (not full AD) showed benefit; trials in established Alzheimer's are sparse and small. Treat as mechanism-backed adjunct in early cognitive decline contexts, not established Alzheimer's treatment. Patients with diagnosed AD should coordinate with their neurologist before using as part of a comprehensive cognitive protocol.",
  },
  {
    q: "Can I stack Lion's Mane with Semax or Selank?",
    a: (
      <>
        Yes — and the stack is mechanistically natural for users targeting comprehensive cognitive support.{" "}
        <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>{" "}
        (an ACTH(4-10) analog) modulates BDNF directly — same downstream pathway Lion&apos;s Mane upregulates via hericenones/erinacines. The two mechanisms converge on neurotrophic signaling from different layers: Semax does peptide-level direct BDNF modulation; Lion&apos;s Mane does mushroom-extract-mediated NGF + BDNF stimulation.{" "}
        <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>{" "}
        (a tuftsin analog) provides anxiolytic effects via GABA modulation — adds a distinct anxiolytic arm to the neurotrophic stack. Mechanistically complementary, no known negative interactions. The mushroom + peptide cognitive cluster (Lion&apos;s Mane + Bacopa + Alpha-GPC + Semax + Selank) is one of the more mechanistically coherent multi-modal cognitive protocols.
      </>
    ),
  },
  {
    q: "What about Lion's Mane for nerve injury or recovery?",
    a: "Strong mechanistic case; emerging human evidence. NGF is critical for peripheral nerve regeneration; Lion's Mane stimulates NGF and has documented nerve-regeneration effects in animal models (sciatic nerve injury, peripheral neuropathy models). Human evidence is thinner but emerging — some trials in diabetic neuropathy and post-surgical nerve recovery show benefit. The mechanism makes biological sense for nerve injury contexts; the evidence base is smaller than for cognitive applications. Reasonable adjunct in nerve-recovery contexts under medical supervision; not a standalone treatment for serious nerve injury.",
  },
  {
    q: "Does Lion's Mane have any interactions with medications?",
    a: "Very few documented interactions. The two practical considerations: (1) anticoagulants — Lion's Mane has mild antiplatelet effects via beta-glucan content; modestly additive with warfarin, apixaban, NSAIDs at high chronic doses. Monitor for unusual bruising; coordinate with prescribing clinician for chronic anticoagulant users. (2) diabetes medications — beta-glucan may modestly affect glucose absorption; relevant if combined with insulin or sulfonylureas. Otherwise Lion's Mane has one of the cleaner drug-interaction profiles. Mushroom allergy is the main contraindication.",
  },
  {
    q: "Mushroom coffee blends with Lion's Mane — are those worth it?",
    a: "Usually under-dosed for clinical effect. Most mushroom coffee blends contain 50–250 mg of Lion's Mane per serving — below the 500 mg cognitive baseline and far below the 1,500–3,000 mg trial range. They taste fine and provide a small dose, but if you're targeting the cognitive benefits documented in trials, you need supplemental capsules at proper doses. Mushroom coffee is a reasonable everyday addition; standalone Lion's Mane supplement is what produces the documented cognitive effects. Don't rely on the coffee blend as your primary Lion's Mane source.",
  },
];

const studies = [
  {
    title: "Improving Effects of the Mushroom Yamabushitake (Hericium erinaceus) on Mild Cognitive Impairment: A Double-Blind Placebo-Controlled Clinical Trial",
    authors: "Mori K, Inatomi S, Ouchi K, Azumi Y, Tuchida T",
    journal: "Phytotherapy Research",
    year: "2009",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/18844328/",
    summary: "A 16-week double-blind placebo-controlled trial of Lion's Mane (750 mg/day, 250 mg × 3 daily) in 30 Japanese adults aged 50–80 with mild cognitive impairment. Lion's Mane significantly improved cognitive function scores (Hasegawa Dementia Scale-Revised) versus placebo at weeks 8, 12, and 16. Critically: cognitive scores declined after supplementation stopped at week 20, suggesting ongoing use is required for sustained effect. The Mori 2009 trial is the foundational human cognitive evidence for Lion's Mane and the basis for the dose-range and chronic-use protocol guidance.",
  },
  {
    title: "The Acute and Chronic Effects of Lion's Mane Mushroom Supplementation on Cognitive Function, Stress and Mood in Young Adults: A Double-Blind, Parallel Groups, Pilot Study",
    authors: "Docherty S, Doughty FL, Smith EF",
    journal: "Nutrients",
    year: "2023",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/38004222/",
    summary: "A 28-day pilot study of Lion's Mane extract (1,800 mg/day) in 41 healthy adults aged 18–45. Acute effects: a single dose significantly improved Stroop test processing speed and reduced subjective stress within 60 minutes. Chronic effects (28 days): trends toward improved working memory but not reaching statistical significance. The Docherty 2023 trial extends Lion's Mane evidence to healthy young adults and documents acute cognitive effects — distinguishing the mushroom from purely chronic-mechanism nootropics like Bacopa.",
  },
  {
    title: "Reduction of Depression and Anxiety by Hericium erinaceus Intake",
    authors: "Nagano M, Shimizu K, Kondo R, et al.",
    journal: "Biomedical Research",
    year: "2010",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/20834180/",
    summary: "A 4-week study of Lion's Mane cookies (containing extract) vs placebo cookies in 30 menopausal women with anxiety and depression symptoms. The Lion's Mane group showed significant reductions in anxiety, depression, and indefinite complaints scores versus placebo. The Nagano 2010 trial is the foundational evidence for the anxiolytic and antidepressant use case and the mechanistic complement to the cognitive evidence.",
  },
  {
    title: "Neurotrophic Properties of the Lion's Mane Medicinal Mushroom, Hericium erinaceus (Higher Basidiomycetes) from Malaysia",
    authors: "Wong KH, Naidu M, David RP, Bakar R, Sabaratnam V",
    journal: "International Journal of Medicinal Mushrooms",
    year: "2012",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/23510212/",
    summary: "A review and original research on Lion's Mane neurotrophic properties — including peripheral nerve regeneration after sciatic nerve injury in rat models. Lion's Mane treatment significantly improved nerve regeneration, axon density, and functional recovery versus controls. The Wong 2012 paper extends the cognitive evidence base into peripheral nerve regeneration mechanism — meaningful for the diabetic neuropathy and post-injury recovery use cases.",
  },
  {
    title: "Effects of Amycenone on Symptoms in Patients with Major Depressive Disorder: A Randomized, Double-Blind, Placebo-Controlled Trial",
    authors: "Vigna L, Morelli F, Agnelli GM, et al.",
    journal: "Evidence-Based Complementary and Alternative Medicine",
    year: "2019",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/31118969/",
    summary: "An 8-week randomized trial of a Lion's Mane extract (Amycenone, 1.5 g/day) in 77 overweight or obese adults with mild-to-moderate depression. Lion's Mane significantly reduced depression and anxiety symptoms versus placebo and improved sleep quality and binge-eating scores. Useful evidence for the mood and metabolic-adjacent use cases beyond pure cognitive enhancement.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Lion's Mane work?",
    intro:
      "Lion's Mane works through a genuinely novel mechanism for a natural compound — stimulating nerve growth factor (NGF) and brain-derived neurotrophic factor (BDNF) synthesis in the brain. Most nootropics modulate existing neurotransmitter systems; Lion's Mane may actually promote new neuronal growth and synaptic connections via hericenones (from fruiting body) and erinacines (from mycelium). Secondary mechanisms include anti-inflammatory and antioxidant effects.",
    body: [
      "NGF stimulation via hericenones. Hericenones (concentrated in the fruiting body) cross the blood-brain barrier and stimulate NGF synthesis in astrocytes and neurons. NGF is the master neurotrophic factor for cholinergic neurons — the population most affected in Alzheimer's disease and most critical for memory and learning. Increased NGF promotes neuronal survival, dendritic branching, and synaptic connectivity.",
      "BDNF stimulation. Lion's Mane also upregulates brain-derived neurotrophic factor — the neurotrophin most associated with adult neurogenesis and synaptic plasticity. BDNF is reduced in depression, neurodegeneration, and cognitive aging; supplementation that raises BDNF is one of the more mechanistically novel approaches in the nootropic space.",
      "Erinacines and blood-brain barrier penetration. Erinacines (concentrated in mycelium) are smaller molecules with better BBB penetration than hericenones. Animal models show direct CNS NGF stimulation with erinacine treatment. Dual-extract products combining fruiting body + mycelium provide both compound classes.",
      "Hippocampal neurogenesis. Animal evidence shows Lion's Mane promotes neurogenesis in the hippocampus — the brain region critical for memory formation and disproportionately affected in Alzheimer's disease. Human translation of this mechanism is inferred from the cognitive trial benefits rather than directly measured.",
      "Anti-inflammatory and antioxidant effects. Lion's Mane polysaccharides reduce neuroinflammation (NF-κB modulation) and oxidative stress markers in brain tissue. These secondary mechanisms contribute to the neuroprotective profile and the mood/anxiety effects documented in clinical trials.",
      "Peripheral nerve regeneration. NGF supports peripheral nerve regeneration after injury. Animal models of sciatic nerve injury show accelerated regeneration with Lion's Mane treatment (Wong 2012); human evidence in nerve recovery contexts is emerging.",
      "Gut-brain axis support. Lion's Mane has prebiotic effects on gut microbiota and modulates the gut-brain axis. Whether this contributes meaningfully to the cognitive and mood effects in humans is mechanistically interesting but not well-characterized clinically.",
    ],
  },
  {
    id: "research",
    title: "What does Lion's Mane actually do?",
    intro:
      "Lion's Mane has one of the more mechanistically novel evidence bases in the cognitive supplement space — but the human trial base is smaller and earlier-stage than for established nootropics like Bacopa or Alpha-GPC. The strongest evidence is for mild cognitive impairment (Mori 2009); secondary evidence covers mood/anxiety (Nagano 2010, Vigna 2019), acute cognitive performance (Docherty 2023), and emerging nerve-regeneration applications.",
    body: [
      "Mild cognitive impairment (Moderate, foundational trial). Mori 2009 (16 weeks, 750 mg/day) demonstrated significant cognitive improvement in adults aged 50–80 with MCI. Effects reversed after stopping supplementation. The clearest human cognitive evidence for Lion's Mane and the basis for chronic-use protocols.",
      "Acute single-dose cognitive effects (Moderate). Docherty 2023 documented improved Stroop test processing speed and reduced subjective stress within 60 minutes of a single 1.8 g dose in healthy young adults. Unusual finding — most chronic-mechanism nootropics don't have acute effects. Mechanism unclear but possibly involves rapid BDNF modulation.",
      "Anxiety and depression (Moderate). Nagano 2010 (4 weeks, menopausal women) and Vigna 2019 (8 weeks, depressed overweight adults at 1.5 g/day) both documented significant anxiety and depression reductions versus placebo. The anxiolytic/antidepressant case has reasonable RCT support.",
      "NGF and BDNF biomarker elevation (Animal-strong, Human-emerging). Animal models consistently document NGF and BDNF upregulation; human biomarker confirmation is limited but emerging. The mechanism is biochemically established; the magnitude of effect in humans isn't precisely characterized.",
      "Peripheral nerve regeneration (Animal-strong, Human-emerging). Wong 2012 and other animal models show clear nerve-regeneration effects after injury. Small human trials in diabetic neuropathy and post-surgical nerve recovery show benefit; evidence is preliminary.",
      "Sleep quality (Modest). Vigna 2019 documented sleep quality improvements alongside the mood effects. Probably indirect via stress reduction rather than direct sedation.",
      "Alzheimer's disease (Mechanism-strong, Clinical-uncertain). The NGF mechanism is exactly what AD research targets; trials in established AD are sparse and small. Treat as plausible adjunct in early cognitive decline, not established AD treatment.",
      "Healthy young-adult cognitive enhancement (Emerging). Docherty 2023 in healthy 18–45 year-olds is the cleanest evidence; most prior evidence was in older or impaired populations. Effects in healthy young adults are smaller in magnitude than in MCI populations.",
    ],
  },
  {
    id: "dosing",
    title: "How is Lion's Mane dosed?",
    intro:
      "Lion's Mane dosing varies by goal and product type. For cognitive maintenance and general use: 500–1,500 mg/day of dual-extract (fruiting body + mycelium) standardized to beta-glucans. For clinical-context use (MCI, mood, nerve recovery): 1,500–3,000 mg/day. The 750–1,800 mg/day range covers the published positive RCTs.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">General cognitive maintenance.</span> 500–1,500 mg/day of dual-extract (fruiting body + mycelium) standardized to beta-glucans (≥30%). Daily consistency matters more than dose magnitude.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Clinical / MCI / mood support.</span> 1,500–3,000 mg/day, often split 2–3 times daily. The Mori 2009 (750 mg × 3 = 2,250 mg) and Vigna 2019 (1.5 g/day) trial ranges.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Acute cognitive use.</span> 1,800 mg as a single dose — Docherty 2023 single-dose protocol that produced acute processing-speed and stress effects.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Nerve recovery contexts.</span> 1,500–3,000 mg/day under medical supervision for diabetic neuropathy or post-surgical nerve recovery. Coordinate with prescribing clinician.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Upper bound.</span> 3,000 mg/day — above this, benefits plateau and costs scale linearly. No safety concerns at higher doses but no additional benefit.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: acute effects (single dose) — within 1 hour. Chronic cognitive effects — 8–12 weeks minimum. Mori 2009 effects faded after supplementation stopped; ongoing use is required for sustained effect.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Label math.</span> &ldquo;Lion&apos;s Mane 1,000 mg per capsule&rdquo; is variable in actual extract content. Look for dual-extract (fruiting body + mycelium) standardized to beta-glucans (≥30%) — beta-glucan content is the cleanest extract-quality marker. Avoid powdered whole-mushroom products without extract concentration or beta-glucan disclosure — may contain mostly grain substrate.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take Lion's Mane",
    intro:
      "Lion's Mane is taken orally as capsules of extract powder, occasionally as raw or cooked culinary mushroom. The dominant practical consideration is product quality — many retail products under-deliver due to grain-substrate contamination or low extract concentration. The points below cover the details experienced users converge on.",
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once daily for maintenance; 2–3 times daily for higher-dose clinical protocols. Daily consistency over weeks is more important than precise per-dose timing.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Morning is the practical default. No clear time-of-day preference established. For acute cognitive use: 30–60 minutes before deep work block.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Either — absorption is not strongly food-dependent. With meals reduces occasional GI upset in sensitive users.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Dual-extract capsules (fruiting body + mycelium) standardized to beta-glucans — the trial-validated form. Avoid powdered whole-mushroom products without standardization. Culinary fresh Lion&apos;s Mane is delicious but provides far lower bioactive concentration than supplements.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Look for &ldquo;beta-glucans ≥30%&rdquo; standardization explicitly disclosed — the cleanest extract-quality marker for mushroom products. Avoid &ldquo;polysaccharide&rdquo; framing without beta-glucan specification (alpha-glucans from grain substrate inflate &ldquo;polysaccharide&rdquo; numbers without bioactive content). Reputable brands: Real Mushrooms, Host Defense, Nootropics Depot.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No cycling needed — chronic daily use is the trial-validated model. Mori 2009 showed benefits faded after stopping, suggesting ongoing use is required for sustained effect. No tolerance development documented.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does Lion's Mane stack with?",
    intro:
      "Lion's Mane pairs naturally with the broader cognitive enhancement and neurotrophic-support toolkit. The NGF/BDNF mechanism complements neurotransmitter-substrate supplements (acetylcholine, GABA), chronic synaptic-remodeling supplements, and peptide-level neurotrophic interventions. The three areas below cover the natural stacking categories.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Lion&apos;s Mane pairs naturally with the cognitive peptide cluster — particularly via the BDNF axis.{" "}
            <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>{" "}
            (an ACTH(4-10) analog) directly modulates BDNF — the same downstream neurotrophin that Lion&apos;s Mane upregulates via hericenones/erinacines-driven NGF stimulation. The two mechanisms converge on neurotrophic signaling from different layers: Semax does peptide-level direct BDNF modulation; Lion&apos;s Mane does mushroom-extract-mediated NGF + BDNF stimulation.{" "}
            <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>{" "}
            (a tuftsin analog) provides anxiolytic effects via GABA modulation — adds a distinct anxiolytic arm to the neurotrophic stack. Mechanistically complementary, no known negative interactions. The mushroom + peptide cognitive cluster (Lion&apos;s Mane + Bacopa + Alpha-GPC + Semax + Selank) is one of the more mechanistically coherent multi-modal cognitive protocols.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/alpha-gpc" className="text-[#3A759F] hover:underline">Alpha-GPC</Link>{" "}
              — acetylcholine substrate. Lion&apos;s Mane increases NGF (which supports cholinergic neurons); Alpha-GPC supplies the choline substrate those neurons use. Mechanistically natural pairing.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/bacopa-monnieri" className="text-[#3A759F] hover:underline">Bacopa monnieri</Link>{" "}
              — chronic synaptic remodeling and memory consolidation. Different mechanism (dendritic branching, AChE inhibition) but compatible chronic-use timescale.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/l-theanine" className="text-[#3A759F] hover:underline">L-theanine</Link>{" "}
              — acute calm-focus via alpha-wave induction and GABA modulation. Different timescale (acute vs chronic) but mechanistically compatible.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/phosphatidylserine" className="text-[#3A759F] hover:underline">Phosphatidylserine</Link>{" "}
              — neuronal membrane phospholipid. Complements Lion&apos;s Mane&apos;s neurotrophic arm via structural membrane support.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/fish-oil" className="text-[#3A759F] hover:underline">Omega-3 fish oil</Link>{" "}
              — DHA supports neuronal membrane composition and modestly elevates BDNF. Compatible neurotrophic-support pairing.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/caffeine-l-theanine" className="text-[#3A759F] hover:underline">Caffeine + L-theanine</Link>{" "}
              — acute calm-focus stack. Different timescale; no mechanistic conflict.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Daily consistency over weeks.</span> Chronic neurotrophic effects require sustained dosing. Sporadic use undermines the mechanism Lion&apos;s Mane is designed to support.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Exercise (especially aerobic).</span> Exercise independently raises BDNF — Lion&apos;s Mane + exercise produces additive neurotrophic signal. Aerobic exercise has stronger BDNF effects than resistance training.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cognitive engagement.</span> NGF and BDNF signaling depends on neural activity for effects. Lion&apos;s Mane works on top of cognitive challenge (learning, complex tasks), not as substitute. Combine with deliberate skill acquisition or learning protocols for maximum effect.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sleep optimization.</span> NGF and BDNF synthesis depends on sleep quality. Sleep-deprived users get less benefit from supplemental neurotrophic support; foundation matters.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mediterranean-style diet.</span> Adequate omega-3, polyphenols, and avoiding ultra-processed inflammatory foods supports the neural environment Lion&apos;s Mane operates within.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "Lion's Mane has an excellent safety profile across published clinical research. The main practical considerations are mushroom allergy contraindications, mild GI effects, and modest antiplatelet/glycemic interactions to be aware of.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild GI discomfort — occasional, particularly at higher doses or on empty stomach. Resolves with food coadministration or dose reduction.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Skin rash or itching — rare; primarily in users with mushroom allergies. Discontinue if persistent.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No serious adverse events documented in any clinical research across the human trial base.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild antiplatelet effect — relevant for anticoagulant users. Beta-glucan content may modestly enhance bleeding risk; monitor for unusual bruising.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest glucose-lowering effect — relevant if combined with insulin or sulfonylureas. Beta-glucan may affect glucose absorption.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Vivid dreams — occasionally reported with chronic use.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anticoagulants (warfarin, apixaban, rivaroxaban).</span> Mild additive antiplatelet effect. Monitor for unusual bleeding; coordinate with prescribing clinician for chronic high-dose use.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Diabetes medications.</span> Beta-glucan modestly affects glucose absorption. Monitor glucose if combined with insulin, sulfonylureas, GLP peptides.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Immunosuppressants — Lion&apos;s Mane has mild immune-modulating effects via beta-glucan. Coordinate with prescribing clinician for chronic immunosuppression contexts.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mushroom allergy — contraindicated for users with known mushroom allergies. Cross-reactivity with other fungal allergens possible.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pregnancy and breastfeeding — limited data at supplemental doses; defer to clinician. Culinary use is fine.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about Lion's Mane",
    intro:
      "Lion's Mane has one of the more mechanistically novel cases in the cognitive supplement space, but the human trial base is smaller than for established nootropics. Several open questions affect how confidently it can be recommended.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Fruiting body vs mycelium relative contribution.</span> Hericenones (fruiting body) and erinacines (mycelium) have different bioactivity profiles. Most positive human trials use dual-extract products containing both. The relative importance of each compound class for clinical effects isn&apos;t precisely characterized, and product quality varies enormously depending on extraction method and source material.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Product quality variance.</span> Many retail Lion&apos;s Mane products under-deliver due to grain-substrate contamination (mycelium grown on grain may contain 40–80% grain by weight, not active mushroom material). Beta-glucan testing distinguishes real mushroom content from substrate. Independent testing has found significant label-vs-actual variance in this category.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Healthy young-adult cognitive transfer.</span> Most positive evidence is in older adults with MCI (Mori 2009) or specific populations (Nagano 2010 menopausal women, Vigna 2019 depressed adults). Docherty 2023 in healthy 18–45 year-olds is the cleanest evidence in young healthy adults; effect sizes were modest and acute-focus rather than chronic-cognitive.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Alzheimer&apos;s disease clinical translation.</span> NGF mechanism is exactly what AD research targets, but trials in established AD are sparse and small. Whether Lion&apos;s Mane meaningfully alters AD progression in clinical populations is mechanistically reasonable but not directly demonstrated.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Long-term high-dose safety.</span> Most trial data extends to 4–16 weeks. Multi-year continuous high-dose use (3,000+ mg/day) is reasonable based on traditional culinary safety precedent but not directly RCT-characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Mechanism of acute cognitive effects.</span> Docherty 2023 documented acute single-dose effects within 60 minutes — unusual for a chronic neurotrophic supplement. The mechanism for acute effects isn&apos;t well-characterized; may involve rapid BDNF modulation or other non-neurotrophic pathways.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Effects discontinuation reversal.</span> Mori 2009 showed cognitive scores declined after stopping supplementation — suggesting Lion&apos;s Mane requires ongoing use for sustained effect rather than producing lasting neurogenesis. The implications for long-term cognitive maintenance protocols are real but not fully characterized.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy Lion's Mane",
    intro:
      "Lion's Mane is widely available, but quality variance is unusually large for this supplement — particularly around extract vs grain-substrate content. The screen below is what we use before clicking through to a retailer. Beta-glucan disclosure is the central quality marker.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Dual-extract (fruiting body + mycelium)</span> standardized to beta-glucans ≥30%. Both compound classes (hericenones + erinacines) represented.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Beta-glucan content explicitly disclosed</span> — the cleanest mushroom extract quality marker. Avoid &ldquo;polysaccharide&rdquo; framing without beta-glucan specification (alpha-glucans from grain substrate inflate &ldquo;polysaccharide&rdquo; numbers).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reputable mushroom-specialty brands</span> — Real Mushrooms, Host Defense, Nootropics Depot have stronger quality control than generic supplement brands.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hot-water extraction or dual extraction</span> — these methods extract beta-glucans efficiently. Avoid raw powdered mushroom products without extraction.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested</span> — USP, NSF, ConsumerLab certifications. Heavy-metal testing for mushroom products is particularly relevant.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar for any supplement.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No proprietary blends</span> that obscure the actual Lion&apos;s Mane dose alongside other mushrooms or fillers.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid grain-substrate-heavy mycelium-only products</span> — may contain 40–80% grain by weight, not active mushroom material. Fruiting-body-included products are typically cleaner.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Fresh manufacture date</span> — bioactive compounds degrade with prolonged storage.</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=lions+mane+dual+extract&tag=profpeptide-20" label="Lion's Mane" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Lion's Mane FAQ",
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
          Mori K, Inatomi S, Ouchi K, Azumi Y, Tuchida T. Improving effects of the mushroom Yamabushitake (Hericium erinaceus) on mild cognitive impairment: a double-blind placebo-controlled clinical trial. Phytother Res. 2009;23(3):367-372.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18844328/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18844328/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Docherty S, Doughty FL, Smith EF. The acute and chronic effects of Lion&apos;s Mane mushroom supplementation on cognitive function, stress and mood in young adults: a double-blind, parallel groups, pilot study. Nutrients. 2023;15(22):4842.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/38004222/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/38004222/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Nagano M, Shimizu K, Kondo R, et al. Reduction of depression and anxiety by 4 weeks Hericium erinaceus intake. Biomed Res. 2010;31(4):231-237.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/20834180/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/20834180/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Wong KH, Naidu M, David RP, Bakar R, Sabaratnam V. Neuroregenerative potential of Lion&apos;s Mane mushroom, Hericium erinaceus (Bull.: Fr.) Pers. (higher Basidiomycetes), in the treatment of peripheral nerve injury. Int J Med Mushrooms. 2012;14(5):427-446.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/23510212/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/23510212/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Vigna L, Morelli F, Agnelli GM, et al. Hericium erinaceus improves mood and sleep disorders in patients affected by overweight or obesity: could circulating pro-BDNF and BDNF be potential biomarkers? Evid Based Complement Alternat Med. 2019;2019:7861297.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/31118969/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/31118969/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Mori K, Obara Y, Hirota M, et al. Nerve growth factor-inducing activity of Hericium erinaceus in 1321N1 human astrocytoma cells. Biol Pharm Bull. 2008;31(9):1727-1732.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18758067/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18758067/
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
      "name": "Fruiting body vs mycelium vs whole-mushroom — which form is best?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Different bioactive profiles. The fruiting body (the visible mushroom) contains hericenones — the NGF-stimulating compounds with the most direct human cognitive evidence. The mycelium (the root-like network) contains erinacines — also NGF-stimulating but with limited human trial evidence vs animal studies. Whole-mushroom products contain both but often at lower concentrations than concentrated extracts. Practical default: dual-extract products containing both fruiting body + mycelium standardized to beta-glucans (>30%)."
      }
    },
    {
      "@type": "Question",
      "name": "How much Lion's Mane do I need for cognitive benefits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "500–3,000 mg/day of standardized extract. The Mori 2009 mild-cognitive-impairment trial used 750 mg/day (250 mg × 3); subsequent healthy-adult cognitive trials (Docherty 2023) used 1,800 mg/day. Effective range spans 500 mg (light maintenance) to 3,000 mg (clinical-context use). Higher doses don't clearly add benefit and increase cost. For chronic daily cognitive maintenance: 1,000–1,500 mg/day is the practical sweet spot."
      }
    },
    {
      "@type": "Question",
      "name": "How long until Lion's Mane works?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "8–12 weeks minimum for chronic cognitive effects. Mori 2009 showed benefit at 16 weeks; benefits faded after supplementation stopped (suggesting ongoing use is required for sustained effect). Docherty 2023 documented acute single-dose effects on processing speed and working memory within hours — but the structural NGF-mediated neurogenesis effects build over weeks of consistent use. Don't evaluate before 8 weeks if you're trying it for cognitive maintenance."
      }
    },
    {
      "@type": "Question",
      "name": "Does Lion's Mane actually do anything for Alzheimer's or dementia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mechanistically interesting; clinically uncertain. The NGF/BDNF stimulation mechanism is exactly what Alzheimer's research targets — cholinergic neurons (the most affected in AD) are NGF-dependent for survival, and BDNF supports synaptic plasticity that AD progressively loses. Animal models of AD show consistent neuroprotective effects. Human trial evidence is limited — Mori 2009 in mild cognitive impairment (not full AD) showed benefit; trials in established Alzheimer's are sparse and small."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stack Lion's Mane with Semax or Selank?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — and the stack is mechanistically natural for users targeting comprehensive cognitive support. Semax (an ACTH(4-10) analog) modulates BDNF directly — same downstream pathway Lion's Mane upregulates via hericenones/erinacines. The two mechanisms converge on neurotrophic signaling from different layers: Semax does peptide-level direct BDNF modulation; Lion's Mane does mushroom-extract-mediated NGF + BDNF stimulation. Selank (a tuftsin analog) provides anxiolytic effects via GABA modulation."
      }
    },
    {
      "@type": "Question",
      "name": "What about Lion's Mane for nerve injury or recovery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Strong mechanistic case; emerging human evidence. NGF is critical for peripheral nerve regeneration; Lion's Mane stimulates NGF and has documented nerve-regeneration effects in animal models (sciatic nerve injury, peripheral neuropathy models). Human evidence is thinner but emerging — some trials in diabetic neuropathy and post-surgical nerve recovery show benefit. The mechanism makes biological sense for nerve injury contexts; the evidence base is smaller than for cognitive applications."
      }
    },
    {
      "@type": "Question",
      "name": "Does Lion's Mane have any interactions with medications?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Very few documented interactions. The two practical considerations: (1) anticoagulants — Lion's Mane has mild antiplatelet effects via beta-glucan content; modestly additive with warfarin, apixaban, NSAIDs at high chronic doses. (2) diabetes medications — beta-glucan may modestly affect glucose absorption; relevant if combined with insulin or sulfonylureas. Otherwise Lion's Mane has one of the cleaner drug-interaction profiles. Mushroom allergy is the main contraindication."
      }
    },
    {
      "@type": "Question",
      "name": "Mushroom coffee blends with Lion's Mane — are those worth it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually under-dosed for clinical effect. Most mushroom coffee blends contain 50–250 mg of Lion's Mane per serving — below the 500 mg cognitive baseline and far below the 1,500–3,000 mg trial range. They taste fine and provide a small dose, but if you're targeting the cognitive benefits documented in trials, you need supplemental capsules at proper doses. Mushroom coffee is a reasonable everyday addition; standalone Lion's Mane supplement is what produces the documented cognitive effects."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Lion's Mane: NGF/BDNF Mushroom for Neurogenesis + Memory",
  "description": "Lion's Mane dosing, NGF/BDNF mechanism, the Mori 2009 mild-cognitive-impairment RCT, and how it stacks with cognitive peptides Semax and Selank.",
  "url": "https://profpeptide.com/supplements/lions-mane",
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
    { "@type": "ListItem", "position": 3, "name": "Lion's Mane" }
  ]
};

export default function LionsManePage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Lion&apos;s Mane</h1>
        <span className="tag">Cognitive &amp; Nootropic</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 26, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Hericium erinaceus, Yamabushitake, monkey head mushroom, bearded tooth mushroom, hou tou gu
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Supplement Class:</span> Medicinal mushroom (Basidiomycota) / NGF and BDNF stimulator / neurotrophic adjunct
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Evidence Tier:</span> Moderate — Mori 2009 foundational MCI trial (16 weeks, 750 mg/day); Docherty 2023 acute + chronic effects in healthy young adults; Nagano 2010 + Vigna 2019 anxiety/depression evidence; Wong 2012 nerve regeneration in animal models; novel NGF/BDNF mechanism but smaller human RCT base than established nootropics (Bacopa, Alpha-GPC)
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is Lion&apos;s Mane?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Lion&apos;s Mane (Hericium erinaceus) is a medicinal mushroom native to North America, Europe, and Asia, characterized by its distinctive white cascading spines resembling a lion&apos;s mane. It occupies a genuinely unique position in the cognitive supplement space — most nootropics modulate existing neurotransmitter systems (acetylcholine via Alpha-GPC, GABA via L-theanine), while Lion&apos;s Mane may actually promote new neuronal growth via stimulation of nerve growth factor (NGF) and brain-derived neurotrophic factor (BDNF). The bioactive compounds — hericenones (concentrated in the fruiting body) and erinacines (concentrated in the mycelium) — cross the blood-brain barrier and stimulate NGF synthesis in astrocytes and neurons. The foundational human cognitive evidence is Mori 2009, a 16-week RCT in mild cognitive impairment patients showing significant cognitive improvement at 750 mg/day; benefits faded after supplementation stopped, suggesting ongoing use is required. Subsequent trials extend the evidence to acute cognitive effects in healthy young adults (Docherty 2023), anxiety and depression reduction (Nagano 2010, Vigna 2019), and emerging peripheral nerve regeneration applications (Wong 2012 animal models, with human translation in progress). The dominant practical challenge is product quality — many retail Lion&apos;s Mane products under-deliver due to grain-substrate contamination in mycelium-only products. Lion&apos;s Mane pairs naturally with{" "}
            <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">cognitive peptides like Semax and Selank</Link>{" "}
            via the BDNF axis Semax directly modulates.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Significant cognitive improvement in mild cognitive impairment (Mori 2009, 16-week RCT)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Acute single-dose processing speed and reduced subjective stress (Docherty 2023)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced anxiety and depression symptoms (Nagano 2010, Vigna 2019)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved sleep quality in depressed/anxious populations (Vigna 2019)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">NGF and BDNF upregulation via hericenones (fruiting body) and erinacines (mycelium)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Peripheral nerve regeneration in animal models (Wong 2012)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anti-inflammatory and antioxidant effects in brain tissue</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Gut-brain axis support via prebiotic effects</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common dose:</span> 500–1,500 mg/day for general cognitive maintenance; 1,500–3,000 mg/day for clinical-context use (MCI, mood support, nerve recovery). Mori 2009 used 750 mg/day; Docherty 2023 used 1,800 mg/day; Vigna 2019 used 1.5 g/day. Daily consistency over 8–12+ weeks for chronic effects.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Quality varies dramatically — grain-substrate contamination is common in mycelium-only products. Look for dual-extract (fruiting body + mycelium) standardized to beta-glucans ≥30%. Reputable brands: Real Mushrooms, Host Defense, Nootropics Depot. Review the quality-markers checklist in the Where to Buy section below.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=lions+mane+dual+extract&tag=profpeptide-20" label="Lion's Mane" />
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
        {["NGF", "BDNF", "Neurogenesis", "Hericenones", "Erinacines", "Cognitive"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/alpha-gpc" className="text-sm font-medium text-[#3A759F] hover:underline">Alpha-GPC</Link>
          <Link href="/supplements/bacopa-monnieri" className="text-sm font-medium text-[#3A759F] hover:underline">Bacopa Monnieri</Link>
          <Link href="/supplements/l-theanine" className="text-sm font-medium text-[#3A759F] hover:underline">L-Theanine</Link>
          <Link href="/supplements/phosphatidylserine" className="text-sm font-medium text-[#3A759F] hover:underline">Phosphatidylserine</Link>
          <Link href="/supplements/fish-oil" className="text-sm font-medium text-[#3A759F] hover:underline">Fish Oil</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Lion's Mane" pagePath="/supplements/lions-mane" />
    </div>
    </>
  );
}
