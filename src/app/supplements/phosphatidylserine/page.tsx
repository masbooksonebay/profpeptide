import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/phosphatidylserine",
  title: "Phosphatidylserine: FDA-Qualified Memory + Cortisol-Blunting Phospholipid",
  description:
    "Phosphatidylserine dosing, the FDA qualified health claim, the cortisol-blunting trial evidence, and how it stacks with cognitive peptides Semax and Selank.",
});

const faqs = [
  {
    q: "What does the FDA qualified health claim actually mean?",
    a: "The FDA permits two qualified health claims for phosphatidylserine: \"Consumption of phosphatidylserine may reduce the risk of dementia in the elderly\" and \"Consumption of phosphatidylserine may reduce the risk of cognitive dysfunction in the elderly\" — both with the qualifier that scientific evidence is \"very limited and preliminary.\" The qualified health claim is rarer for supplements than the unqualified version, and PS is one of the few supplements to have earned even the qualified status. Practically: it means the FDA reviewed the evidence and concluded there's enough mechanistic and trial support to permit the claim with caveat — not endorsement, but a higher evidence bar than typical supplement marketing.",
  },
  {
    q: "Sunflower vs soy-derived PS — does the source matter?",
    a: "For most users, the active molecule is identical regardless of source — soy lecithin-derived and sunflower lecithin-derived PS are bioequivalent. The practical reasons to choose between them: soy allergy (sunflower obviously preferred), soy/estrogen concerns (sunflower preferred for those avoiding any soy products), or cost (soy-derived is typically cheaper). Most published clinical trials used soy-derived PS (Crook 1991, Cenacchi trials, sport cortisol studies). Bovine brain-derived PS — used in some early European trials — is no longer commercially available due to BSE (mad cow disease) concerns from the 1990s.",
  },
  {
    q: "What's the cortisol-blunting effect, and why would I want that?",
    a: "Phosphatidylserine inhibits ACTH-mediated cortisol release after acute stress — including intense exercise. The Starks 2008 trial documented 600 mg PS reduced post-exercise cortisol by ~20% versus placebo following high-intensity cycling. The use case: athletes wanting to mitigate the catabolic cortisol spike that intense training produces, particularly during overreaching or high-stress training blocks. Chronic users targeting cortisol-driven sleep disruption or stress-eating may also benefit. The effect is acute (dose-coupled to the stressor) rather than chronic, so timing matters — take 400–800 mg 30–60 minutes before the high-stress event.",
  },
  {
    q: "Does PS actually improve memory in healthy adults?",
    a: "Modestly, in older adults with age-associated memory decline — but not robustly in healthy younger adults. The strongest evidence is in elderly populations with mild cognitive impairment or age-associated memory impairment: Crook 1991 (300 mg/day, 12 weeks) showed significant memory improvements; the Cenacchi trials (n=494 across three RCTs) demonstrated similar effects. In healthy younger adults, trial evidence is sparse and effect sizes are smaller. The realistic expectation: cognitive benefit increases with age and baseline cognitive decline; younger users may notice less.",
  },
  {
    q: "Can I stack PS with Semax or Selank?",
    a: (
      <>
        Yes — the stack is mechanistically natural and addresses different layers of cognitive function.{" "}
        <Link href="/peptides/semax" className="text-[#0891b2] hover:underline">Semax</Link>{" "}
        (an ACTH(4-10) analog) modulates BDNF and neurotrophic signaling — acute focus and resilience effects.{" "}
        <Link href="/peptides/selank" className="text-[#0891b2] hover:underline">Selank</Link>{" "}
        (a tuftsin analog) provides anxiolytic effects via GABA modulation. Phosphatidylserine operates at a structural layer: it&apos;s a major neuronal membrane phospholipid (~15% of brain phospholipid content), and supplementation supports membrane fluidity, neurotransmitter release, and cortisol regulation. The peptides handle direct receptor-level signaling; PS handles the membrane substrate and HPA-axis modulation. Mechanistically complementary, no known negative interactions.
      </>
    ),
  },
  {
    q: "How does PS compare to Alpha-GPC and other cognitive supplements?",
    a: (
      <>
        Different mechanism, often stacked together.{" "}
        <Link href="/supplements/alpha-gpc" className="text-[#0891b2] hover:underline">Alpha-GPC</Link>{" "}
        is the acetylcholine substrate — fast-acting, attention and reaction-time effects, evidence in dementia and acute exercise GH.{" "}
        <Link href="/supplements/bacopa-monnieri" className="text-[#0891b2] hover:underline">Bacopa monnieri</Link>{" "}
        works through chronic synaptic remodeling — 8–12 weeks for full effect, evidence in healthy-adult memory retention. PS works at the neuronal membrane layer — structural phospholipid support, neurotransmitter release facilitation, cortisol blunting. The three address different layers of cognitive function and stack cleanly together. PS uniquely contributes the cortisol arm — distinguishing it from acetylcholine-substrate or synaptic-remodeling supplements.
      </>
    ),
  },
  {
    q: "What dose should I take for cortisol blunting vs cognitive support?",
    a: "Different dose protocols. For cognitive support (memory, attention, age-related cognitive decline): 100–300 mg/day total, often split as 100 mg three times daily with meals. The Crook 1991 trial dose. For cortisol blunting around intense exercise: 400–800 mg taken 30–60 minutes before training. The Starks 2008 cortisol-blunting trial used 600 mg. For chronic high-stress users wanting general HPA-axis support: 100–200 mg/day. Doses above 800 mg/day occasionally cause insomnia or GI upset. Most users plateau on benefit above 600 mg/day total.",
  },
  {
    q: "Is PS safe to take long-term?",
    a: "Generally yes, with one important caveat. Trial evidence extends to 6+ months at 300 mg/day with no concerning safety signals. Multi-year daily use is not directly RCT-characterized but is reasonable given the safety profile. The caveat: PS has mild blood-thinning effects — modestly relevant for users on anticoagulants (warfarin, apixaban, rivaroxaban) or NSAIDs at high doses. Coordinate with prescribing clinician if you're on chronic anticoagulation. Pregnancy: insufficient data; avoid mega-dose supplementation. Otherwise long-term safety is reassuring.",
  },
];

const studies = [
  {
    title: "Effects of Phosphatidylserine in Age-Associated Memory Impairment",
    authors: "Crook TH, Tinklenberg J, Yesavage J, Petrie W, Nunzi MG, Massari DC",
    journal: "Neurology",
    year: "1991",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/2011243/",
    summary: "A 12-week randomized double-blind placebo-controlled trial of 300 mg/day bovine cortex-derived PS in 149 patients with age-associated memory impairment. PS produced significant improvements in name-face recall, telephone-number recall, and other memory-task performance versus placebo. The Crook trial is the foundational human cognitive evidence for PS and the basis for the FDA qualified health claim on dementia risk reduction. (Bovine-derived PS used in this trial is no longer marketed; modern soy/sunflower-derived PS is functionally equivalent.)",
  },
  {
    title: "Cognitive Decline in the Elderly: A Double-Blind, Placebo-Controlled Multicenter Study on Efficacy of Phosphatidylserine Administration",
    authors: "Cenacchi T, Bertoldin T, Farina C, et al.",
    journal: "Aging Clinical and Experimental Research",
    year: "1993",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/8323999/",
    summary: "A 6-month multicenter RCT of 300 mg/day PS in 494 elderly Italian patients with cognitive decline. PS significantly improved cognitive function and behavioral parameters versus placebo across multiple assessment instruments. The Cenacchi multicenter trial is the largest single PS cognitive study and a key piece of the evidence base supporting the FDA qualified health claim. Sample size and 6-month duration give it meaningful weight in the cognitive-decline evidence landscape.",
  },
  {
    title: "The Effects of Phosphatidylserine on Endocrine Response to Moderate Intensity Exercise",
    authors: "Starks MA, Starks SL, Kingsley M, Purpura M, Jäger R",
    journal: "Journal of the International Society of Sports Nutrition",
    year: "2008",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/18662395/",
    summary: "A crossover RCT in 10 endurance-trained athletes evaluating 600 mg/day soy-derived PS versus placebo for 10 days, with cortisol response measured after intensive cycling exercise. PS significantly blunted post-exercise cortisol release by ~20% versus placebo, with concomitant reductions in ACTH. The Starks trial established PS's acute cortisol-blunting effect as a documented physiological action and the dose protocol (600 mg pre-stress) for the cortisol use case.",
  },
  {
    title: "Phosphatidylserine and the Human Brain",
    authors: "Glade MJ, Smith K",
    journal: "Nutrition",
    year: "2015",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/25933483/",
    summary: "A comprehensive review of PS biology and supplementation evidence covering neuronal membrane biology, cognitive trials in age-related decline, the FDA qualified health claim regulatory pathway, cortisol modulation, and exercise applications. Useful as a single-source reference for the PS evidence landscape and the membrane-phospholipid mechanism case.",
  },
  {
    title: "The Effect of Phosphatidylserine Administration on Memory and Symptoms of Attention-Deficit Hyperactivity Disorder",
    authors: "Hirayama S, Terasawa K, Rabeler R, et al.",
    journal: "Journal of Human Nutrition and Dietetics",
    year: "2014",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/24579822/",
    summary: "A randomized double-blind placebo-controlled trial of 200 mg/day soy-derived PS in 36 children with ADHD over 2 months. PS produced significant improvements in ADHD symptoms, inattention, short-term auditory memory, and impulsivity versus placebo. The Hirayama trial is one of the cleaner pediatric ADHD trials for PS and supports the emerging use case for cognitive/attention support beyond age-related decline populations.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does phosphatidylserine work?",
    intro:
      "Phosphatidylserine works at the neuronal membrane structural layer — it's a major phospholipid component of brain cell membranes (~15% of total brain phospholipid content). Supplementation supports membrane fluidity, facilitates neurotransmitter release at synaptic terminals, and modulates HPA-axis cortisol response. The mechanism is structural rather than receptor-level signaling, which is why effects build over weeks rather than appearing acutely (except for the cortisol-blunting arm, which is acute and dose-coupled).",
    body: [
      "Neuronal membrane structural support. PS is one of the four major phospholipids of brain cell membranes (alongside phosphatidylcholine, phosphatidylethanolamine, and sphingomyelin). It maintains membrane fluidity — essential for membrane protein function, receptor activity, ion channel behavior, and signal transduction. Age-related PS decline correlates with reduced cognitive function; supplementation can partially restore membrane PS content.",
      "Neurotransmitter release facilitation. PS supports the membrane fusion events required for synaptic vesicle exocytosis — the release of acetylcholine, dopamine, norepinephrine, and serotonin at synaptic terminals. By supporting this fusion machinery, PS modestly enhances neurotransmitter availability across multiple systems.",
      "Cortisol blunting via HPA-axis modulation. PS inhibits hypothalamic-pituitary-adrenal axis activation in response to physical and psychological stress, reducing ACTH release and downstream cortisol output. The Starks 2008 trial demonstrated ~20% post-exercise cortisol reduction with 600 mg PS. This is one of the cleanest documented physiological effects of PS supplementation.",
      "Apoptosis regulation. PS plays a critical role in phospholipid-dependent cell signaling and the regulation of programmed cell death (apoptosis). When cells signal for apoptosis, PS flips from the inner to the outer membrane leaflet — a recognition signal for clearance by macrophages. This biology is fundamental to neuronal turnover and brain homeostasis.",
      "Myelin sheath support. PS is incorporated into myelin — the lipid sheath around axons that enables fast nerve conduction. Adequate PS supports myelin integrity, which contributes to processing speed and cognitive efficiency.",
    ],
  },
  {
    id: "research",
    title: "What does phosphatidylserine actually do?",
    intro:
      "PS has one of the better cognitive-supplement evidence bases — substantial enough to earn an FDA qualified health claim for dementia and cognitive dysfunction risk reduction in the elderly. The strongest evidence is in age-related cognitive decline; the cortisol-blunting effect is well-documented in exercise contexts; the ADHD evidence is emerging; healthy-younger-adult cognitive evidence is weaker.",
    body: [
      "Age-related cognitive decline (Strong). Crook 1991 (n=149) demonstrated significant memory improvements with 300 mg/day for 12 weeks. Cenacchi 1993 (n=494) replicated the cognitive benefit in elderly populations over 6 months. These trials underpin the FDA qualified health claim.",
      "FDA qualified health claim (Regulatory). The FDA permits two qualified claims for PS: dementia risk reduction and cognitive dysfunction risk reduction in the elderly. The qualified status (\"scientific evidence very limited and preliminary\") sits between unsupported marketing claims and unqualified health claims. PS is one of the few supplements at this regulatory tier.",
      "Cortisol blunting in exercise stress (Strong). Starks 2008 (n=10 endurance athletes) documented ~20% post-exercise cortisol reduction with 600 mg PS. Replicated in several smaller athletic trials. The cortisol arm is acute (dose-coupled) and one of the cleaner documented physiological effects.",
      "ADHD symptoms in children (Moderate). Hirayama 2014 (n=36 pediatric ADHD) found significant improvements in inattention, short-term auditory memory, and impulsivity at 200 mg/day for 2 months. Emerging evidence; cleaner methodology than many supplement trials in this population.",
      "General stress and HPA-axis dysfunction (Moderate). PS reduces psychological-stress-induced cortisol elevation in several smaller trials. Use case is broad: chronic stress, sleep disruption from elevated cortisol, stress-eating, training overreaching.",
      "Healthy young-adult cognition (Weak). Trial evidence in healthy adults under 40 is sparse and effect sizes are smaller. PS works better against a backdrop of decline than as a cognitive enhancer in fully replete young adults.",
    ],
  },
  {
    id: "dosing",
    title: "How is phosphatidylserine dosed?",
    intro:
      "PS dosing depends on goal. For cognitive support: 100–300 mg/day total, the Crook/Cenacchi trial range. For acute cortisol blunting around intense exercise or high-stress events: 400–800 mg taken 30–60 minutes before. Always with fat-containing meals — PS is fat-soluble and absorption is meaningfully fat-dependent.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cognitive support / age-related decline.</span> 300 mg/day total, often split as 100 mg three times daily with meals — the Crook 1991 and Cenacchi 1993 trial dose. The standard cognitive-use protocol.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cortisol blunting (acute, pre-stress).</span> 400–800 mg taken 30–60 minutes before intense training or a high-stress event. The Starks 2008 dose protocol. Pre-event dosing only; chronic dosing dilutes the acute cortisol effect.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Chronic stress / HPA-axis support.</span> 100–300 mg/day, split AM/PM. Lower than the acute cortisol protocol; reflects chronic-use evidence.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pediatric ADHD adjunct.</span> 200 mg/day (the Hirayama 2014 dose). Specialist supervision; not a substitute for established ADHD treatment.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: cognitive effects emerge over 4–8 weeks of consistent use; the FDA qualified-claim trial base is built on 12-week to 6-month protocols. Cortisol-blunting effect is acute (within 30–60 minutes of dosing). Don&apos;t expect acute cognitive effects from a single dose.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Label math.</span> &ldquo;Phosphatidylserine complex 500 mg&rdquo; may contain only 100 mg actual PS (the rest is the phospholipid matrix). Read for &ldquo;PS&rdquo; or &ldquo;phosphatidylserine&rdquo; content explicitly disclosed per serving. Most healthy users plateau on benefit above 600 mg/day total.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take phosphatidylserine",
    intro:
      "PS is taken orally, typically as softgels in oil base (the practical default for fat-soluble absorption) or capsules. Source choice (soy vs sunflower) is the second-biggest decision. The points below cover the practical details that experienced users converge on.",
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Three times daily (100 mg each) for cognitive use; once pre-stress for cortisol blunting; AM/PM split for general HPA-axis support.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">For cognitive use: with meals throughout the day. For cortisol blunting: 30–60 minutes before intense training or high-stress event. Avoid evening dosing if PS produces insomnia for you (uncommon but reported at high doses).</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">With fat-containing meals — PS is fat-soluble and absorption is meaningfully fat-dependent. Empty-stomach dosing wastes much of the dose.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Softgels in oil base (best absorption); standard capsules also work; powder is uncommon. Sunflower-derived (Sharp-PS) preferred for soy-sensitive users; soy-derived is bioequivalent and typically cheaper.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Look for &ldquo;phosphatidylserine&rdquo; mg per serving explicitly disclosed — not &ldquo;phosphatidylserine complex&rdquo; mass. Sharp-PS (Enzymotec, sunflower-derived) is a quality-trademarked source; soy-derived PS from reputable manufacturers is functionally equivalent. Avoid bovine-derived PS (no longer marketed due to BSE concerns).</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No cycling needed for cognitive use — chronic daily use is the trial-validated model. Cortisol-blunting protocol is naturally pulsatile (only on high-stress days).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does phosphatidylserine stack with?",
    intro:
      "PS pairs naturally with the broader cognitive and stress-modulation toolkit. The mechanism is membrane-structural + HPA-axis modulation, which complements neurotransmitter substrates, neurotrophic stimulators, and adaptogenic stress modulators. The three areas below cover the natural stacking categories.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            PS pairs naturally with the Russian-origin cognitive peptide cluster.{" "}
            <Link href="/peptides/semax" className="text-[#0891b2] hover:underline">Semax</Link>{" "}
            (an ACTH(4-10) analog) modulates BDNF and neurotrophic signaling — acute focus and resilience effects.{" "}
            <Link href="/peptides/selank" className="text-[#0891b2] hover:underline">Selank</Link>{" "}
            (a tuftsin analog) provides anxiolytic and mild nootropic effects via GABA modulation. PS operates at a different layer — it&apos;s the structural neuronal membrane phospholipid (~15% of brain phospholipid content), and supplementation supports membrane fluidity, neurotransmitter release at synaptic terminals, and HPA-axis cortisol modulation. The peptides handle receptor-level signaling; PS handles membrane substrate and cortisol regulation. Mechanistically complementary, no known negative interactions. Introduce one variable at a time when starting a new stack so you can tell what&apos;s actually doing what.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/alpha-gpc" className="text-[#0891b2] hover:underline">Alpha-GPC</Link>{" "}
              — acetylcholine substrate. PS supports the membrane environment; Alpha-GPC supplies the cholinergic fuel. Classic complementary cognitive pairing.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/bacopa-monnieri" className="text-[#0891b2] hover:underline">Bacopa monnieri</Link>{" "}
              — chronic synaptic remodeling and memory consolidation. Different timescale (8–12 weeks); compatible with PS&apos;s membrane-structural arm.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/lions-mane" className="text-[#0891b2] hover:underline">Lion&apos;s Mane</Link>{" "}
              — NGF/BDNF stimulation. Neurotrophic support complements PS&apos;s membrane-structural and cortisol arms.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/fish-oil" className="text-[#0891b2] hover:underline">Omega-3 fish oil</Link>{" "}
              — EPA/DHA are essential phospholipid fatty-acid components that incorporate alongside PS into neuronal membranes. The phospholipid + omega-3 combination is one of the more mechanistically natural pairings.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/ashwagandha" className="text-[#0891b2] hover:underline">Ashwagandha</Link>{" "}
              — adaptogenic cortisol-blunting at a different mechanism layer. Stacks naturally with PS&apos;s acute cortisol-modulation arm for chronic stress management.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Always with fat-containing meals.</span> PS absorption is fat-dependent. Take with breakfast, lunch, or dinner — empty-stomach dosing wastes much of the dose.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pre-training cortisol-blunting timing.</span> For high-intensity training blocks or competition contexts, 400–800 mg 30–60 minutes before. The Starks 2008 protocol.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">High-stress work blocks.</span> The acute cortisol-blunting effect applies to psychological stress, not just exercise. Pre-event dosing for high-stakes presentations or deadlines is mechanistically reasonable.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Consistent cognitive-use timing.</span> For cognitive support, daily consistency matters more than time-of-day precision. Pair with an existing daily habit (meals) to anchor adherence.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "PS has a clean safety profile at standard doses. The main practical considerations are mild GI effects, blood-thinning effects relevant for anticoagulant users, and rare insomnia at high evening doses.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild GI discomfort — occasional nausea or stomach upset, particularly on empty stomach. Resolves with food coadministration.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Insomnia at high evening doses — uncommon, dose-related (600 mg+ in the evening). Switch to morning/midday dosing.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No documented serious adverse events at supplemental doses across the human trial base.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild blood-thinning effect — relevant for anticoagulant users; modest additive effect. Documented but rarely clinically significant.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Soy allergy with soy-derived PS — switch to sunflower-derived (Sharp-PS).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Headache — occasionally reported, generally mild and dose-related.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anticoagulants (warfarin, apixaban, rivaroxaban, dabigatran).</span> PS has mild blood-thinning effects; modest additive interaction. Monitor for unusual bruising or bleeding; coordinate with prescribing clinician.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">NSAIDs at high chronic doses — similar mild additive bleeding-risk consideration.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Cholinergic medications (donepezil, rivastigmine — Alzheimer&apos;s drugs) — PS supports cholinergic neurotransmission and may be additive. Coordinate with prescribing clinician.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pregnancy — limited data; avoid mega-dose supplementation. Standard dietary PS is fine.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about phosphatidylserine",
    intro:
      "PS has earned a regulatory tier (FDA qualified health claim) that few supplements achieve, but several open questions remain — particularly around healthy young-adult cognitive transfer, the modern soy/sunflower-derived form vs the original bovine-derived trial form, and the long-term high-dose safety horizon.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Healthy young-adult cognitive transfer.</span> The strongest cognitive evidence (Crook 1991, Cenacchi 1993) is in elderly populations with age-related memory impairment. Effect sizes in healthy adults under 40 are smaller and less consistently positive. Treat &ldquo;works for elderly therefore works for you&rdquo; with appropriate skepticism.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Bovine-derived vs plant-derived equivalence.</span> The original cognitive trials used bovine cortex-derived PS — no longer commercially available due to BSE concerns. Modern PS is soy or sunflower lecithin-derived. The active molecule is the same, but the trial evidence base is built on the bovine source. Whether soy/sunflower-derived produces fully equivalent cognitive effects is mechanistically reasonable but not directly head-to-head RCT-tested.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Optimal dose-response curve.</span> Most healthy users plateau above 600 mg/day total. The Crook/Cenacchi cognitive dose is 300 mg/day. The Starks cortisol-blunting dose is 600 mg pre-stress. Whether higher doses (800–1200 mg) produce additional benefit or are wasted is not well-characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Multi-year safety at supplemental doses.</span> Trial data extends to 6 months at 300 mg/day. Multi-year use at higher doses (600 mg+/day) is not characterized in controlled trials — though the safety profile of moderate dosing is reassuring.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">ADHD efficacy beyond Hirayama 2014.</span> The Hirayama pediatric ADHD trial is positive and clean, but the replication base is thin. Whether PS is effective for adult ADHD is plausible but not well-tested.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Cortisol-blunting beyond exercise.</span> Starks 2008 was in exercise stress. PS&apos;s effect on cortisol from psychological stress (work stress, sleep deprivation, anxiety) is mechanistically reasonable but the trial base is smaller. Effect sizes in non-exercise contexts are not as well-quantified.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">FDA qualified-claim caveat.</span> The qualified health claim itself comes with the FDA disclaimer that &ldquo;scientific evidence is very limited and preliminary.&rdquo; This is a higher evidence tier than typical supplements but not full FDA endorsement.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy phosphatidylserine",
    intro:
      "PS is available over-the-counter from supplement retailers. Quality varies — particularly around source (soy vs sunflower), oil-base formulation, and dose disclosure. The screen below is what we use before clicking through.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Phosphatidylserine mg per serving explicitly disclosed</span> — not &ldquo;phosphatidylserine complex&rdquo; mass. Reputable brands list 100–300 mg actual PS per capsule.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sharp-PS (Enzymotec sunflower-derived) or reputable soy-derived</span> — both bioequivalent. Sunflower preferred for soy-sensitive users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Softgels in oil base preferred</span> — meaningfully better absorption than dry capsules for fat-soluble PS.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested</span> — USP, NSF, or ConsumerLab certifications signal independent verification.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar for any supplement.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid bovine-derived PS</span> — no longer marketed in reputable channels due to BSE concerns from the 1990s.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No proprietary cognitive blends</span> that obscure the actual PS dose alongside other ingredients.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Fresh manufacture date</span> — phospholipids degrade with prolonged storage; avoid jars sitting on warehouse shelves &gt;18 months pre-purchase.</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=phosphatidylserine&tag=profpeptide-20" label="Phosphatidylserine" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Phosphatidylserine FAQ",
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
          Crook TH, Tinklenberg J, Yesavage J, et al. Effects of phosphatidylserine in age-associated memory impairment. Neurology. 1991;41(5):644-649.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/2011243/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/2011243/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Cenacchi T, Bertoldin T, Farina C, et al. Cognitive decline in the elderly: a double-blind, placebo-controlled multicenter study on efficacy of phosphatidylserine administration. Aging (Milano). 1993;5(2):123-133.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/8323999/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/8323999/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Starks MA, Starks SL, Kingsley M, Purpura M, Jäger R. The effects of phosphatidylserine on endocrine response to moderate intensity exercise. J Int Soc Sports Nutr. 2008;5:11.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18662395/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18662395/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Glade MJ, Smith K. Phosphatidylserine and the human brain. Nutrition. 2015;31(6):781-786.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/25933483/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/25933483/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Hirayama S, Terasawa K, Rabeler R, et al. The effect of phosphatidylserine administration on memory and symptoms of attention-deficit hyperactivity disorder: a randomised, double-blind, placebo-controlled clinical trial. J Hum Nutr Diet. 2014;27 Suppl 2:284-291.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/24579822/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/24579822/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          U.S. Food and Drug Administration. Qualified health claim: phosphatidylserine and cognitive dysfunction and dementia (Letter of Enforcement Discretion). 2003.{" "}
          <a href="https://www.fda.gov/food/qualified-health-claims/qualified-health-claims-letters-enforcement-discretion" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.fda.gov/food/qualified-health-claims/qualified-health-claims-letters-enforcement-discretion
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

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does the FDA qualified health claim actually mean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The FDA permits two qualified health claims for phosphatidylserine: \"Consumption of phosphatidylserine may reduce the risk of dementia in the elderly\" and \"Consumption of phosphatidylserine may reduce the risk of cognitive dysfunction in the elderly\" — both with the qualifier that scientific evidence is \"very limited and preliminary.\" The qualified health claim is rarer for supplements than the unqualified version, and PS is one of the few supplements to have earned even the qualified status."
      }
    },
    {
      "@type": "Question",
      "name": "Sunflower vs soy-derived PS — does the source matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For most users, the active molecule is identical regardless of source — soy lecithin-derived and sunflower lecithin-derived PS are bioequivalent. The practical reasons to choose between them: soy allergy (sunflower obviously preferred), soy/estrogen concerns (sunflower preferred for those avoiding any soy products), or cost (soy-derived is typically cheaper). Most published clinical trials used soy-derived PS. Bovine brain-derived PS is no longer commercially available due to BSE concerns from the 1990s."
      }
    },
    {
      "@type": "Question",
      "name": "What's the cortisol-blunting effect, and why would I want that?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Phosphatidylserine inhibits ACTH-mediated cortisol release after acute stress — including intense exercise. The Starks 2008 trial documented 600 mg PS reduced post-exercise cortisol by ~20% versus placebo following high-intensity cycling. The use case: athletes wanting to mitigate the catabolic cortisol spike that intense training produces, particularly during overreaching or high-stress training blocks. Chronic users targeting cortisol-driven sleep disruption or stress-eating may also benefit."
      }
    },
    {
      "@type": "Question",
      "name": "Does PS actually improve memory in healthy adults?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modestly, in older adults with age-associated memory decline — but not robustly in healthy younger adults. The strongest evidence is in elderly populations with mild cognitive impairment or age-associated memory impairment: Crook 1991 (300 mg/day, 12 weeks) showed significant memory improvements; the Cenacchi trials (n=494 across three RCTs) demonstrated similar effects. In healthy younger adults, trial evidence is sparse and effect sizes are smaller."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stack PS with Semax or Selank?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — the stack is mechanistically natural and addresses different layers of cognitive function. Semax (an ACTH(4-10) analog) modulates BDNF and neurotrophic signaling — acute focus and resilience effects. Selank (a tuftsin analog) provides anxiolytic effects via GABA modulation. Phosphatidylserine operates at a structural layer: it's a major neuronal membrane phospholipid, and supplementation supports membrane fluidity, neurotransmitter release, and cortisol regulation. The peptides handle direct receptor-level signaling; PS handles the membrane substrate and HPA-axis modulation."
      }
    },
    {
      "@type": "Question",
      "name": "How does PS compare to Alpha-GPC and other cognitive supplements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Different mechanism, often stacked together. Alpha-GPC is the acetylcholine substrate — fast-acting, attention and reaction-time effects. Bacopa monnieri works through chronic synaptic remodeling — 8–12 weeks for full effect. PS works at the neuronal membrane layer — structural phospholipid support, neurotransmitter release facilitation, cortisol blunting. The three address different layers of cognitive function and stack cleanly together. PS uniquely contributes the cortisol arm."
      }
    },
    {
      "@type": "Question",
      "name": "What dose should I take for cortisol blunting vs cognitive support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Different dose protocols. For cognitive support (memory, attention, age-related cognitive decline): 100–300 mg/day total, often split as 100 mg three times daily with meals. The Crook 1991 trial dose. For cortisol blunting around intense exercise: 400–800 mg taken 30–60 minutes before training. The Starks 2008 cortisol-blunting trial used 600 mg. For chronic high-stress users wanting general HPA-axis support: 100–200 mg/day. Most users plateau on benefit above 600 mg/day total."
      }
    },
    {
      "@type": "Question",
      "name": "Is PS safe to take long-term?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generally yes, with one important caveat. Trial evidence extends to 6+ months at 300 mg/day with no concerning safety signals. Multi-year daily use is not directly RCT-characterized but is reasonable given the safety profile. The caveat: PS has mild blood-thinning effects — modestly relevant for users on anticoagulants or NSAIDs at high doses. Coordinate with prescribing clinician if you're on chronic anticoagulation. Otherwise long-term safety is reassuring."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Phosphatidylserine: FDA-Qualified Memory + Cortisol-Blunting Phospholipid",
  "description": "Phosphatidylserine dosing, the FDA qualified health claim, the cortisol-blunting trial evidence, and how it stacks with cognitive peptides Semax and Selank.",
  "url": "https://profpeptide.com/supplements/phosphatidylserine",
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
    { "@type": "ListItem", "position": 3, "name": "Phosphatidylserine" }
  ]
};

export default function PhosphatidylserinePage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Phosphatidylserine</h1>
        <span className="tag">Cognitive &amp; Nootropic</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 26, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> PS, Sharp-PS (sunflower-derived branded), phosphatidyl serine, soy-PS
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Supplement Class:</span> Phospholipid / neuronal membrane structural component / HPA-axis modulator
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Evidence Tier:</span> Strong — FDA qualified health claim for dementia and cognitive dysfunction risk reduction in elderly; Crook 1991 + Cenacchi 1993 multicenter trials (n=494 combined) for cognitive decline; Starks 2008 documented cortisol blunting in exercise; Hirayama 2014 pediatric ADHD trial; one of the few supplements at FDA qualified-claim regulatory tier
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is phosphatidylserine?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Phosphatidylserine (PS) is a phospholipid — a fat-soluble molecule that forms a critical structural component of neuronal cell membranes. It is particularly concentrated in the brain, comprising approximately 15% of total neural-tissue phospholipid content. PS supports neuronal membrane fluidity, facilitates synaptic neurotransmitter release, modulates HPA-axis cortisol response under stress, and participates in apoptosis signaling. Its supplement evidence base is unusually strong: PS is one of the few supplements to have earned an FDA qualified health claim for &ldquo;reducing the risk of dementia and cognitive dysfunction in the elderly&rdquo; — a higher regulatory tier than typical supplement marketing claims. The cognitive evidence (Crook 1991, Cenacchi 1993 multicenter trials, n=494 combined) is strongest in age-related cognitive decline; the cortisol-blunting effect (Starks 2008, ~20% post-exercise cortisol reduction at 600 mg) is well-documented; pediatric ADHD evidence is emerging. PS pairs naturally with{" "}
            <Link href="/peptides/semax" className="text-[#0891b2] hover:underline">cognitive peptides like Semax and Selank</Link>{" "}
            because the membrane-structural and HPA-axis mechanisms operate on different layers than receptor-level peptide signaling.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">FDA qualified health claim for dementia and cognitive dysfunction risk reduction in elderly</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Memory and cognitive function improvements in age-related decline (Crook 1991, Cenacchi 1993)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">~20% post-exercise cortisol blunting at 600 mg pre-stress (Starks 2008)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pediatric ADHD symptom improvement at 200 mg/day (Hirayama 2014)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Neuronal membrane fluidity and integrity support (~15% of brain phospholipid)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Facilitated release of acetylcholine, dopamine, norepinephrine, serotonin at synapses</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">HPA-axis modulation reducing ACTH and cortisol output under stress</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common dose:</span> 100–300 mg/day total (often split 100 mg three times daily with meals) for cognitive support — the Crook/Cenacchi trial range. 400–800 mg taken 30–60 minutes pre-stress for acute cortisol blunting (Starks 2008 protocol). Always with fat-containing meals — PS is fat-soluble and absorption is fat-dependent.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Available over-the-counter from supplement retailers as sunflower-derived (Sharp-PS) or soy-derived softgels. Quality varies — particularly around dose disclosure (read for actual PS mg, not &ldquo;PS complex&rdquo;). Review the quality-markers checklist in the Where to Buy section below.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=phosphatidylserine&tag=profpeptide-20" label="Phosphatidylserine" />
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
        {["Phospholipid", "Memory", "Cortisol Blunting", "FDA Qualified Claim", "Neuronal Membrane", "HPA-Axis"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/alpha-gpc" className="text-sm font-medium text-[#0891b2] hover:underline">Alpha-GPC</Link>
          <Link href="/supplements/bacopa-monnieri" className="text-sm font-medium text-[#0891b2] hover:underline">Bacopa Monnieri</Link>
          <Link href="/supplements/lions-mane" className="text-sm font-medium text-[#0891b2] hover:underline">Lion&apos;s Mane</Link>
          <Link href="/supplements/fish-oil" className="text-sm font-medium text-[#0891b2] hover:underline">Fish Oil</Link>
          <Link href="/supplements/ashwagandha" className="text-sm font-medium text-[#0891b2] hover:underline">Ashwagandha</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Phosphatidylserine" pagePath="/supplements/phosphatidylserine" />
    </div>
    </>
  );
}
