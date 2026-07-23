import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import ProfileTOC from "@/components/ProfileTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd, isWhereToBuy } from "@/lib/faq-schema";

export const metadata = buildPageMetadata({
  path: "/peptides/nad-mots-c-5-amino-1mq",
  title: "Metabolic Blend (NAD+ + MOTS-c + 5-Amino-1MQ) Research Profile | Prof. Peptide",
  description:
    "Metabolic Blend research profile: 3-component NAD+ + MOTS-c + 5-Amino-1MQ longevity and metabolic formulation. Mechanism, dosing, reconstitution, side effects, FAQ.",
});

const faqs = [
  {
    q: "What is the Metabolic Blend (NAD+ + MOTS-c + 5-Amino-1MQ)?",
    a: (
      <>
        The Metabolic Blend is a research-grade 3-component metabolic/longevity formulation combining{" "}
        <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>{" "}
        (nicotinamide adenine dinucleotide),{" "}
        <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-c</Link>{" "}
        (a mitochondrial-derived peptide), and 5-Amino-1MQ (a small-molecule NNMT inhibitor). All three components converge on mitochondrial energy metabolism and NAD+ pathway signaling, making this one of the most targeted metabolic stacks available from research-grade vendors. It is a community- and vendor-formulated product with no controlled clinical trial of the combination.
      </>
    ),
  },
  {
    q: "How does MOTS-c differ from NAD+ in this blend?",
    a: (
      <>
        <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>{" "}
        is the direct coenzyme substrate — it replenishes the cellular pool of nicotinamide adenine dinucleotide that declines with age and metabolic stress.{" "}
        <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-c</Link>{" "}
        is a mitochondrial-derived signaling peptide that activates AMPK — the cell&apos;s master energy sensor — and promotes metabolic flexibility upstream of NAD+ utilization. NAD+ refills the tank; MOTS-c improves how efficiently the engine runs. The two mechanisms are additive on the same metabolic axis.
      </>
    ),
  },
  {
    q: "What does 5-Amino-1MQ add to the blend?",
    a: "5-Amino-1MQ is a small-molecule inhibitor of NNMT (nicotinamide N-methyltransferase). NNMT consumes NAD+ precursors by methylating nicotinamide into 1-methylnicotinamide — a metabolic “sink.” By blocking NNMT, 5-Amino-1MQ raises intracellular NAD+ and SAM (S-adenosylmethionine) levels and has been studied for adipocyte metabolism and fat-mass reduction. It is often described as an NNMT inhibitor that boosts the efficiency of the NAD+ system the other two components are feeding. Human data are limited; most evidence is from preclinical adipocyte models.",
  },
  {
    q: "How is 5-Amino-1MQ delivered in combined vial products?",
    a: "5-Amino-1MQ is a small molecule rather than a peptide, and it is typically dosed orally (capsule or tablet) as a standalone compound. When included in combined single-vial research products, it is dissolved into the lyophilized powder alongside NAD+ and MOTS-c, and reconstituted for subcutaneous injection. This is a vendor formulation choice, not a standard clinical practice, and researchers should review the vendor's Certificate of Analysis for the actual delivery format of their specific product.",
  },
  {
    q: "Is this blend FDA-approved?",
    a: "No. None of the three components are FDA-approved as injectable research compounds. NAD+ infusion has been administered in clinical research settings but has no approved injectable indication. MOTS-c has no human clinical approval. 5-Amino-1MQ has no approved human indication. The combined blend has no clinical trial evidence as a product. All three are sold as research compounds for laboratory use only.",
  },
  {
    q: "How long does the Metabolic Blend take to show effects?",
    a: "NAD+ replenishment effects on energy and cellular signaling can emerge within days of IV or SC administration in research contexts. MOTS-c's AMPK-activation and metabolic flexibility effects have been observed within 1–4 weeks in animal and limited human pharmacodynamic studies. 5-Amino-1MQ's adipocyte metabolic effects in preclinical models required sustained dosing over several weeks. Community-reported timelines for noticeable subjective effects from the combined blend range from 2–6 weeks, with metabolic biomarker changes (if tracked) appearing later. No controlled human trial has defined a timeline for the combination.",
  },
  {
    q: "Where can I buy the Metabolic Blend?",
    a: (
      <>
        This combination blend is sold by specialty research peptide vendors, typically as a lyophilized powder vial. Availability of the 3-component combined vial varies by vendor &mdash; some stock each component separately. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
        <Link href="/coupons" className="text-[#3A759F] hover:underline">
          Verified Discount Codes &rarr;
        </Link>
        .
      </>
    ),
  },
];

const studies = [
  {
    title: "The Mitochondrial-Derived Peptide MOTS-c Promotes Metabolic Homeostasis and Reduces Obesity and Insulin Resistance",
    authors: "Lee C, Zeng J, Drew BG, et al.",
    journal: "Cell Metabolism",
    year: "2015",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/25738459/",
    summary: "The foundational MOTS-c paper. Lee and colleagues identified MOTS-c as a peptide encoded in the mitochondrial 12S rRNA region and demonstrated it activates AMPK signaling to promote glucose homeostasis, reduce obesity, and improve insulin sensitivity in diet-induced obese mice. Peripheral injection of MOTS-c prevented high-fat-diet-induced obesity and insulin resistance — establishing MOTS-c as an exercise-mimetic mitochondrial signal peptide and the primary mechanistic rationale for its inclusion in metabolic blends. PMID 25738459.",
  },
  {
    title: "MOTS-c Is an Exercise-Induced Mitochondrial-Encoded Regulator of Age-Dependent Physical Decline and Muscle Homeostasis",
    authors: "Reynolds JC, Lai RW, Woodhead JST, et al.",
    journal: "Nature Communications",
    year: "2021",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/33473109/",
    summary: "Reynolds et al. demonstrated that endogenous MOTS-c levels rise in blood during exercise and that exogenous MOTS-c administration improved physical performance and muscle homeostasis in aged mice. This study established MOTS-c as a translatable exercise-mimetic signal and supported its potential for countering age-associated metabolic decline — directly relevant to the longevity framing of this metabolic blend. The work also confirmed that MOTS-c is mitochondrially encoded and acts as a retrograde mitochondria-to-nucleus signal under metabolic stress. PMID 33473109.",
  },
  {
    title: "Therapeutic Potential of NAD-Boosting Molecules: The In Vivo Evidence",
    authors: "Rajman L, Chwalek K, Sinclair DA",
    journal: "Cell Metabolism",
    year: "2018",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/29514064/",
    summary: "A landmark review by Sinclair and colleagues synthesizing in vivo evidence for NAD+ precursor and direct NAD+ supplementation strategies across aging, metabolic disease, and organ protection models. The review documents the universal decline in NAD+ with aging and metabolic stress, and evaluates the downstream effects on sirtuins, PARP enzymes, and mitochondrial function — the mechanistic basis for NAD+ replenishment research. This paper is the primary published foundation for NAD+ as a longevity and metabolic research target. PMID 29514064.",
  },
  {
    title: "Selective and Membrane-Permeable Small Molecule Inhibitors of NNMT Reverse High-Fat-Diet-Induced Obesity in Mice",
    authors: "Neelakantan H, Vance V, Wetzel MD, et al.",
    journal: "Biochemical Pharmacology",
    year: "2018",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/29155147/",
    summary: "Neelakantan et al. characterized 5-Amino-1MQ as a selective NNMT inhibitor and demonstrated that it prevented fat mass gain, raised adipose NAD+ and SAM levels, and improved glycemic control in diet-induced obese mice. This is the primary preclinical evidence for 5-Amino-1MQ&apos;s mechanism of action in adipocyte metabolism and the paper most cited in vendor literature for the compound&apos;s inclusion in metabolic blends. The study confirmed that NNMT inhibition elevates intracellular NAD+ levels by reducing the methylation sink on NAD+ precursors — directly linking 5-Amino-1MQ to the NAD+ axis shared by the other two components. PMID 29155147.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does the Metabolic Blend work?",
    intro:
      "The Metabolic Blend combines three components that all converge on mitochondrial energy metabolism and the NAD+ signaling network, each from a different angle. NAD+ replenishes the coenzyme substrate that powers cellular energy production and activates longevity enzymes. MOTS-c activates AMPK — the cell&apos;s master energy sensor — to promote metabolic flexibility and exercise-mimetic signaling. 5-Amino-1MQ blocks the enzyme that normally &ldquo;wastes&rdquo; NAD+ precursors, raising the cellular NAD+ and SAM pool. Together they form a triple-entry approach to the same metabolic axis.",
    body: [
      "NAD+ — Coenzyme Replenishment and Sirtuin/PARP Activation [3]. Nicotinamide adenine dinucleotide (NAD+) is the central redox coenzyme in mitochondrial electron transport — the NADH/NAD+ cycle is the engine of ATP production. Beyond energy transfer, NAD+ is the obligate substrate for sirtuins (SIRT1-7, longevity-associated deacetylases) and PARP enzymes (DNA repair). NAD+ levels decline 40–60% between young adulthood and midlife, reducing mitochondrial capacity, sirtuin activity, and DNA repair efficiency. Direct NAD+ administration via SC injection (or IV) bypasses the multi-step precursor conversion required by NMN or NR supplementation and may raise cellular NAD+ more acutely. In the blended formulation, NAD+ acts as the substrate backbone that the other two components help protect and amplify.",
      "MOTS-c — Mitochondrial Signal Peptide and AMPK Activator [1][2]. MOTS-c is a 16-amino-acid peptide encoded in the mitochondrial genome&apos;s 12S ribosomal RNA region — one of the few biologically active peptides known to be encoded in mitochondrial DNA. It is released from mitochondria under metabolic stress and translocates to the nucleus to regulate gene expression. Its primary downstream effector is AMPK (AMP-activated protein kinase), the cell&apos;s master energy sensor, which upregulates fatty acid oxidation, glucose uptake, and mitochondrial biogenesis while suppressing anabolic processes that consume ATP. In animal models, MOTS-c injection recapitulates many of the metabolic benefits of exercise — improved insulin sensitivity, reduced adiposity, and preserved muscle function with age. These are exercise-mimetic effects that complement NAD+-driven energy substrate availability.",
      "5-Amino-1MQ — NNMT Inhibitor and NAD+ Amplifier [4]. 5-Amino-1MQ is a small molecule that selectively inhibits NNMT (nicotinamide N-methyltransferase), an enzyme highly expressed in adipose tissue. NNMT converts nicotinamide (a NAD+ precursor) into 1-methylnicotinamide — effectively shunting NAD+ precursors into a metabolic dead end. By blocking NNMT, 5-Amino-1MQ raises intracellular NAD+ levels and SAM (S-adenosylmethionine, the universal methyl donor), promotes fatty acid mobilization in adipocytes, and may reduce fat mass accumulation in preclinical obesity models. The NAD+-amplification effect of 5-Amino-1MQ is directly synergistic with the NAD+ replenishment provided by the first component.",
      "Convergent Metabolic Thesis. The three components form a rational mechanistic stack: NAD+ supplies the substrate, MOTS-c activates the signaling pathways that optimize its use, and 5-Amino-1MQ blocks a major consumption pathway to raise the steady-state NAD+ pool. No controlled trial has tested the combination, but the mechanistic complementarity is well-founded in the literature of each individual component.",
      "Note on 5-Amino-1MQ Delivery. Unlike NAD+ and MOTS-c — which are larger molecules requiring SC injection and lyophilized-powder reconstitution — 5-Amino-1MQ is a small molecule that is conventionally dosed orally (typically as a capsule). Combined vial products dissolve it into the lyophilized blend for SC reconstitution alongside NAD+ and MOTS-c. Researchers should review the vendor&apos;s Certificate of Analysis for the specific formulation and delivery format.",
    ],
  },
  {
    id: "research",
    title: "What is the Metabolic Blend used for?",
    intro:
      "Researchers use this blend for metabolic health, longevity, and energy-production applications. The combination targets aging-associated NAD+ decline, metabolic inflexibility, and adipose metabolism — making it one of the more mechanistically coherent multi-compound metabolic formulations on the research-grade market. No controlled trial exists for the combination; all research evidence below is from independent component studies.",
    body: [
      "NAD+ Decline and Cellular Energy — The leading research use case. Age-related NAD+ depletion reduces mitochondrial function, sirtuin activity, and DNA repair capacity. Direct NAD+ supplementation via injection is studied for restoring these functions more acutely than oral precursor routes [3].",
      "Metabolic Flexibility and Insulin Sensitivity — MOTS-c&apos;s AMPK-activating effects improve glucose uptake and insulin sensitivity in preclinical obesity and diet-induced metabolic syndrome models. Reynolds et al. (2021) confirmed the exercise-mimetic mechanism in aged animals, with relevance for age-associated metabolic decline [1][2].",
      "Fat-Mass Reduction and Adipocyte Metabolism — 5-Amino-1MQ&apos;s NNMT inhibition in adipose tissue has demonstrated fat-mass prevention and improved glycemic control in obese mouse models [4]. This is the most preliminary of the three research use cases — human data are not established.",
      "Mitochondrial Biogenesis and Longevity Signaling — MOTS-c drives mitochondrial biogenesis via AMPK/PGC-1α signaling; NAD+ activates SIRT1 which converges on the same PGC-1α axis. The combination creates a dual-entry stimulus to mitochondrial quality-control and biogenesis pathways linked to longevity in animal research.",
      "Muscle Homeostasis and Physical Performance with Aging — MOTS-c injection in aged mice improved physical performance and preserved muscle fiber composition. Paired with NAD+-dependent sirtuin activity on muscle metabolism, the blend has theoretical application in sarcopenia and age-related performance decline [2].",
      "Post-Exercise Recovery and Metabolic Reset — Community use often pairs this blend with training to amplify the post-exercise metabolic signal. MOTS-c rises naturally during exercise; exogenous administration amplifies this signal. NAD+ supports ATP regeneration capacity in muscle. All research framing applies; user self-reports are not clinical evidence.",
    ],
  },
  {
    id: "timeline",
    title: "How long does the Metabolic Blend take to work?",
    intro:
      "Effects develop at different rates for each component. NAD+ replenishment can shift cellular energy markers acutely — within days in IV/SC research contexts. MOTS-c&apos;s AMPK-mediated metabolic effects in animal studies emerged over 1&ndash;4 weeks of daily injection. 5-Amino-1MQ&apos;s adipocyte effects in preclinical obesity models required several weeks of sustained dosing.",
    content:
      "Community and vendor protocols for the combined blend typically describe a 4&ndash;8 week active cycle, with subjective energy and recovery effects emerging in weeks 1&ndash;2 and metabolic or body-composition changes (if tracked with biomarkers) requiring weeks 4&ndash;8 or longer. There are no controlled human pharmacodynamic data for the combination. Off-cycle washout is typically 4&ndash;6 weeks. Some researchers repeat cycles 2&ndash;3 times per year, consistent with sirtuin biology suggesting episodic NAD+ restoration may be more effective than continuous supplementation.",
  },
  {
    id: "dosing",
    title: "How is the Metabolic Blend dosed?",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Dosing for this blend is extrapolated from each component&apos;s individual research literature and vendor protocols. There is no clinically validated combination dosing standard. NAD+ and MOTS-c are administered by subcutaneous injection after reconstitution; 5-Amino-1MQ is a small molecule conventionally dosed orally but may be included in single-vial SC formulations.
        </p>
        <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">
          Standard component research doses:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">NAD+.</span> 50&ndash;100 mg subcutaneously once daily. Some protocols front-load with higher doses (100&ndash;250 mg) in early weeks. IV administration at higher doses (250&ndash;1000 mg) is used in clinical research settings, typically infused slowly to avoid flushing and cardiovascular reactions.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">MOTS-c.</span> 5&ndash;10 mg per week subcutaneously, often split into daily or alternate-day injections (e.g., 1&ndash;2 mg/day or 5 mg twice weekly). Some vendor protocols start at a lower dose (2&ndash;3 mg/week) for the first 2 weeks.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">5-Amino-1MQ (standalone oral).</span> Approximately 50 mg/day orally in capsule form, as reported in vendor and community protocols derived from the Neelakantan preclinical data.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">5-Amino-1MQ (combined vial SC).</span> Vendor-determined by the vial&apos;s fixed ratio. Review the Certificate of Analysis for per-dose 5-Amino-1MQ content.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle length.</span> 4&ndash;8 weeks active, followed by a 4&ndash;6 week off period.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Abdomen, thigh, upper arm. Subcutaneous injections only &mdash; not intramuscular.</li>
        </ol>
        <div className="pt-4">
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Pre-blended combined vial formulations
          </h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Vial format.</span> Combined single-vial products contain all three components as a lyophilized powder. The vial label shows total milligrams and per-component breakdown. Vendor SKUs vary &mdash; verify the ratio on the Certificate of Analysis before planning a protocol.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">Reconstitution.</span> Use bacteriostatic water for injection (BAC water). Volume depends on the target per-dose concentration &mdash; use the dosing calculator to convert mg targets to syringe units. Swirl gently to dissolve; do not shake.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">5-Amino-1MQ delivery nuance.</span> Because 5-Amino-1MQ is a small molecule rather than a peptide, its stability and absorption profile when SC-injected in a combined vial differs from its standard oral route. Human pharmacokinetic data for SC 5-Amino-1MQ are not published. Researchers considering the oral route for 5-Amino-1MQ while injecting NAD+ and MOTS-c separately retain more control over each component&apos;s delivery.
          </p>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          This blend is not FDA-approved. Dosing is community-derived from individual component research &mdash; no approved retail dosing standards exist for the combination.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Need to calculate your dose? Convert mg to syringe units and plan reconstitution with the{" "}
          <Link href="/calculator" className="text-[#3A759F] hover:underline">dosage calculator &rarr;</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How is the Metabolic Blend administered?",
    intro:
      "NAD+ and MOTS-c are administered by subcutaneous injection after reconstitution from lyophilized powder. 5-Amino-1MQ may be included in the combined vial (SC) or taken separately as an oral capsule. All SC injections use a small insulin syringe.",
    body: [
      "Route. Subcutaneous injection for NAD+ and MOTS-c. Common sites are the abdomen (avoiding a 2-inch radius around the navel), upper outer thighs, and back of the upper arms. 5-Amino-1MQ may be oral or SC depending on the vendor&apos;s formulation.",
      "Time of day. Morning injection on an empty stomach is the most common protocol for metabolic compounds. Some protocols split the daily NAD+ dose into morning and evening to spread the NAD+ replenishment stimulus.",
      "With or without food. Inject on an empty stomach or at least 2 hours after a meal. Elevated insulin postprandially may attenuate some of the metabolic signaling effects.",
      "Site rotation. Alternate injection sites each dose to avoid local accumulation and reduce injection-site reactions.",
      "Reconstitution. Use bacteriostatic water for injection. Swirl gently to dissolve &mdash; do not shake. Discard if the solution is cloudy, discolored, or particulate.",
      "IV vs SC for NAD+. NAD+ in full research protocols is often delivered by slow IV infusion (to reduce flushing and cardiovascular pressure symptoms). SC delivery is more practical and is used in research-community protocols, typically at lower doses per injection than IV protocols.",
      "Missed dose. Resume on the next scheduled day. Do not double-dose to compensate for a missed injection.",
    ],
  },
  {
    id: "stacks",
    title: "What does the Metabolic Blend stack well with?",
    intro:
      "This blend is already a 3-component metabolic formulation. The cleanest additions are non-peptide interventions that amplify the same metabolic axis &mdash; exercise (which naturally raises MOTS-c and NAD+ consumption), caloric restriction, and low-GI diet. Within the research-grade peptide space, a few specific additions are commonly discussed.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Resistance training and aerobic exercise.</span> MOTS-c rises endogenously during exercise; exogenous administration amplifies this signal. NAD+ turnover increases with exercise, making replenishment more relevant in active research subjects. The strongest natural multiplier for this blend.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Epitalon (longevity/anti-aging addition).</span> Epitalon is a synthetic tetrapeptide studied for telomerase activation, pineal regulation, and anti-aging effects. In the longevity framing, Epitalon adds a different mechanistic angle (telomere/epigenetic) to this blend&apos;s mitochondrial/NAD+ focus. See{" "}
          <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon &rarr;</Link>.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time-restricted feeding or caloric restriction.</span> AMPK activation from MOTS-c is synergistic with the fasted metabolic state produced by time-restricted feeding. The NNMT inhibition from 5-Amino-1MQ was studied in the context of diet-induced obesity; a low-glycemic dietary context maximizes the relevance of its adipocyte effects.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid: redundant NAD+ precursors.</span> Stacking oral NMN or NR supplementation on top of direct injectable NAD+ creates potential for oversaturation of the NAD+ pathway and unnecessary PARP activation. Researchers tracking NAD+ levels should choose one primary replenishment strategy.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid: other GLP-1 agonists or metabolic injectables.</span> Compounds like semaglutide or tirzepatide act on a different metabolic axis (GLP-1/GIP receptor signaling, appetite and gastric motility) and can be stacked contextually, but their metabolic effects overlap in ways that make dosing harder to attribute. See the{" "}
          <Link href="/peptides/semaglutide-bpc-157" className="text-[#3A759F] hover:underline">Semaglutide + BPC-157 blend &rarr;</Link>{" "}
          or{" "}
          <Link href="/peptides/tirzepatide-bpc-157" className="text-[#3A759F] hover:underline">Tirzepatide + BPC-157 blend &rarr;</Link>{" "}
          if GLP-1-mediated weight loss is the primary goal.
        </li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of the Metabolic Blend?",
    intro:
      "The combined safety profile of this 3-component blend has not been formally studied. Side effects are extrapolated from each component&apos;s individual literature plus user reports. NAD+ injection has a distinct and clinically documented side-effect profile at higher doses; MOTS-c appears generally well tolerated in limited human research; 5-Amino-1MQ has very limited human safety data.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection site reactions.</span> Mild redness, irritation, or transient pinkness at the SC injection site. The most commonly reported side effect for any peptide injection protocol.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Flushing (NAD+ specific).</span> NAD+ injected rapidly, at high dose, or via IV can cause significant flushing &mdash; warmth, redness, and tingling across the skin. SC injection at lower doses produces this less frequently than IV. Slowing the infusion rate or reducing the SC dose typically resolves it.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Transient nausea or GI discomfort.</span> Reported with NAD+ at higher doses. Generally self-limiting and resolves within 30&ndash;60 minutes of injection.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Fatigue or lightheadedness.</span> Some users report transient fatigue or dizziness in the hours after injection, more commonly in early cycle weeks.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Headache.</span> Particularly associated with NAD+ administration. More common in early doses and often resolves as the cycle progresses.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Chest pressure or discomfort (NAD+ IV/high-dose SC).</span> Reported with rapid IV NAD+ infusion &mdash; mechanistically attributed to NAD+-driven PARP activation in cardiac tissue or vasodilation effects. Typically resolves by slowing infusion rate. At standard SC doses this is less commonly reported but warrants awareness.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sleep changes.</span> Some researchers report vivid dreaming or altered sleep architecture in early cycle weeks &mdash; possibly related to MOTS-c&apos;s AMPK effects on circadian metabolic signaling.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Serious (rare or theoretical)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Unknown long-term effects of 5-Amino-1MQ in humans.</span> 5-Amino-1MQ has very limited published human safety data. NNMT has roles in diverse metabolic processes beyond NAD+ precursor handling, and broad NNMT inhibition&apos;s long-term effects on methylation homeostasis, liver metabolism, and SAM utilization are not fully characterized in humans.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">PARP hyperactivation risk (NAD+).</span> Supraphysiological NAD+ availability may over-activate PARP enzymes, which consume NAD+ in DNA repair signaling. This is a theoretical balance concern at very high sustained doses &mdash; not documented at standard SC research dosing.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Compound interaction uncertainty.</span> The combined pharmacodynamic and pharmacokinetic interactions of all three components when co-administered have not been studied. No serious adverse event signal has been reported in published literature for the combination, but the absence of data is not evidence of safety.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          None of the three components are FDA-approved as injectable compounds. Research-grade product quality varies significantly by vendor. Third-party HPLC testing of each component is strongly recommended.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does the Metabolic Blend interact with other drugs?",
    intro:
      "No well-documented systemic drug interactions exist for MOTS-c or NAD+ at standard research doses. 5-Amino-1MQ&apos;s NNMT inhibition raises SAM levels, which has theoretical downstream implications for methylation-sensitive drugs and cofactor-dependent pathways. These are not documented clinical interactions.",
    body: [
      "Metformin. Metformin also activates AMPK &mdash; the same pathway as MOTS-c. Theoretical additive hypoglycemic risk. Researchers managing blood glucose should monitor carefully if combining.",
      "Anticoagulants (warfarin, DOACs). NAD+ at high doses activates PARP and SIRT1, which may interact with vitamin K cycle and coagulation factor acetylation pathways. Theoretical only &mdash; no documented clinical events.",
      "Methylation-sensitive medications. 5-Amino-1MQ raises SAM levels by blocking NNMT-mediated methyl group consumption. Elevated SAM could theoretically affect drugs whose metabolism depends on SAM-dependent methyltransferases. No clinical events documented.",
      "Niacin (high-dose). NAD+ and high-dose niacin (which converts to NAD+) may overlap in mechanism. Combining could saturate the pathway or amplify flushing effects.",
      "Alcohol. Alcohol metabolism consumes NAD+ via alcohol dehydrogenase (NAD+ &rarr; NADH), reducing the available NAD+ pool. Concurrent alcohol use during a NAD+ replenishment protocol counteracts the protocol&apos;s primary goal.",
      "Component-level interactions. Cross-reference the individual NAD+ and MOTS-c peptide pages for full per-component interaction profiles.",
    ],
  },
  {
    id: "storage",
    title: "How should the Metabolic Blend be stored?",
    body: [
      "Lyophilized (powder) form: -20°C long-term, 2–8°C short-term (refrigerated).",
      "Reconstituted solution: 2–8°C, use within 30 days.",
      "Reconstitution: bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Do not freeze the reconstituted solution. Freezing damages the peptide components (MOTS-c) and may destabilize NAD+.",
      "Protect from light — store in the original container or amber vial.",
      "Discard if the solution is cloudy, discolored, or contains visible particles.",
      "Note: 5-Amino-1MQ as a small molecule may have different stability characteristics from the peptide components. Review the vendor’s storage guidelines for combined-vial products.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of Metabolic Blend research?",
    intro:
      "The Metabolic Blend is a community- and vendor-formulated product. No controlled trial has evaluated the three-component combination as a single product. Evidence is thin for each component individually in humans, and essentially absent for the combination. The 5-Amino-1MQ component is the least characterized in human research.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          This blend is NOT FDA-approved as a combination or as individual components. NAD+ injection is used in clinical research but has no approved injectable indication for metabolic or longevity use. MOTS-c has no approved human indication. 5-Amino-1MQ has no human clinical trials published and no approved indication. All three are sold as research compounds for laboratory use only.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The evidence base is heavily preclinical. MOTS-c&apos;s foundational studies [1][2] are in mice; human pharmacodynamic data are limited to small observational and pharmacokinetic studies. NAD+ precursor human trials (NMN, NR) are more developed, but direct NAD+ injection&apos;s longevity and metabolic effects in controlled human trials are limited. 5-Amino-1MQ&apos;s primary evidence [4] is from a mouse obesity model &mdash; there are no published human trials for this compound.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Synergy of the combination is mechanistic, not empirical. The proposition that 5-Amino-1MQ&apos;s NNMT inhibition enhances NAD+ availability to amplify MOTS-c&apos;s AMPK signaling is scientifically plausible but untested as a combination. No study has compared the three-component blend against any two-component subset or against individual monotherapy.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Compounded blends are sold as &ldquo;research peptides.&rdquo; Quality, ratio accuracy, and 5-Amino-1MQ stability in SC formulation vary dramatically by vendor. Third-party HPLC testing of all three components is strongly recommended.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping status: MOTS-c is classified as a peptide hormone related to mitochondrial signaling and may fall under WADA Section S0 (non-approved substances). Athletes subject to testing should consult their sport authority before use. NAD+ and 5-Amino-1MQ are not currently listed as prohibited substances, but WADA&apos;s list evolves.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source the Metabolic Blend",
    intro:
      "This blend is not FDA-approved and is sold by specialty research peptide vendors for laboratory research use only &mdash; as a combined single vial or as individual components. The vendors highlighted below carry NAD+, MOTS-c, and metabolic blend products and have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "ez-peptides", note: "Stocks NAD+, MOTS-c, and metabolic blends" },
            { slug: "glacier-aminos" },
            { slug: "peptide-partners" },
          ]}
        />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          <Link href="/coupons" className="text-[#3A759F] hover:underline">
            See all verified vendors &rarr;
          </Link>
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Metabolic Blend FAQ",
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
          Lee C, Zeng J, Drew BG, et al. The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance. Cell Metab. 2015;21(3):443-454.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/25738459/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/25738459/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Reynolds JC, Lai RW, Woodhead JST, et al. MOTS-c is an exercise-induced mitochondrial-encoded regulator of age-dependent physical decline and muscle homeostasis. Nat Commun. 2021;12(1):470.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/33473109/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/33473109/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Rajman L, Chwalek K, Sinclair DA. Therapeutic Potential of NAD-Boosting Molecules: The In Vivo Evidence. Cell Metab. 2018;27(3):529-547.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29514064/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29514064/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Neelakantan H, Vance V, Wetzel MD, et al. Selective and membrane-permeable small molecule inhibitors of NNMT reverse high fat diet-induced obesity in mouse model of obesity. Biochem Pharmacol. 2018;147:27-34.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29155147/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29155147/
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
          The Metabolic Blend has no controlled trial as a combination. The studies below are the key peer-reviewed sources for each individual component&apos;s mechanism &mdash; the empirical basis for the blend&apos;s mechanistic rationale.
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

const tocSections = [
  { id: "overview", title: "What is NAD+ + MOTS-c + 5-Amino-1MQ?" },
  ...sections.map((s) => ({ id: s.id, title: s.title })),
];

export default function MetabolicBlendPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Metabolic Blend (NAD+ + MOTS-c + 5-Amino-1MQ)","description":"Metabolic Blend research profile: 3-component NAD+ + MOTS-c + 5-Amino-1MQ longevity and metabolic formulation. Mechanism, dosing, reconstitution, side effects, FAQ.","url":"https://profpeptide.com/peptides/nad-mots-c-5-amino-1mq","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Metabolic Blend (NAD+ + MOTS-c + 5-Amino-1MQ)"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#16181B] dark:text-slate-100 tracking-tight">Metabolic Blend (NAD+ + MOTS-c + 5-Amino-1MQ)</h1>
        <span className="tag">Metabolic &amp; Longevity</span>
        <span className="tag">Research-Grade</span>
        <span className="tag">Combination Blend</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-500 mb-8">
        Last reviewed: May 29, 2026
      </p>

      {/* Quick Facts — key facts already present on this page, in a scannable grid */}
      <section aria-label="Quick Facts" className="panel-card mb-10 overflow-hidden">
        <div className="px-5 py-4">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-[#16181B] dark:text-slate-100 mb-3">
            Quick Facts
          </h2>
          <dl className="space-y-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">What it is</dt>
              <dd className="text-base text-[#16181B] dark:text-slate-100">A combination of NAD+ (an energy-metabolism coenzyme), MOTS-c (a mitochondrial-derived metabolic peptide), and 5-Amino-1MQ (a small-molecule NNMT inhibitor), stacked for metabolism and longevity.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">How it&apos;s taken</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Mixed route &mdash; NAD+ subcutaneous or IV, MOTS-c subcutaneous injection, 5-Amino-1MQ oral (or dissolved into the combined vial for SC)</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Half-life</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Varies by component; not characterized for the combination</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Typical research dose</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">NAD+ 50&ndash;100 mg SC daily + MOTS-c 5&ndash;10 mg/week SC + 5-Amino-1MQ ~50 mg/day oral; 4&ndash;8 week cycles</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Research status</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">None FDA-approved &mdash; research use only.</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Mobile "Jump to section" (collapses cleanly; rail TOC is hidden on mobile) */}
      <ProfileTOC sections={tocSections} variant="mobile" />

      {/* Two-column: primary content + right rail */}
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12 lg:items-start">
        <main className="min-w-0">

      <div id="overview" className="scroll-mt-24">
        <h2 className="section-heading mb-3">What is NAD+ + MOTS-c + 5-Amino-1MQ?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            The Metabolic Blend is a research-grade 3-component formulation combining{" "}
            <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>{" "}
            (nicotinamide adenine dinucleotide),{" "}
            <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-c</Link>{" "}
            (a mitochondrial-derived peptide), and{" "}
            <Link href="/peptides/5-amino-1mq" className="text-[#3A759F] hover:underline">5-Amino-1MQ</Link>{" "}
            (a small-molecule NNMT inhibitor) in a single lyophilized vial. All three converge on the same metabolic axis &mdash; mitochondrial energy production and the NAD+ signaling network that powers cellular longevity, metabolic flexibility, and fat metabolism. NAD+ replenishes the coenzyme substrate that declines with age; MOTS-c activates AMPK to improve how cells use that substrate; 5-Amino-1MQ blocks a major NAD+ precursor consumption pathway to raise the steady-state intracellular NAD+ pool. It is a vendor- and community-formulated product with no controlled clinical trial as a combination.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mitochondrial NAD+ replenishment and sirtuin/PARP activation via direct NAD+ delivery</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">AMPK-mediated metabolic flexibility, insulin sensitivity, and exercise-mimetic signaling via MOTS-c</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Raised intracellular NAD+ and SAM via NNMT inhibition (5-Amino-1MQ)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Adipocyte fat-metabolism modulation and body-composition effects (preclinical evidence only for 5-Amino-1MQ)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mitochondrial biogenesis support via convergent AMPK/PGC-1α and SIRT1 signaling</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Age-related muscle homeostasis and physical performance preservation (preclinical MOTS-c data)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common research dose:</span> NAD+ 50&ndash;100 mg SC once daily + MOTS-c 5&ndash;10 mg/week SC (split daily or alternate-day) + 5-Amino-1MQ ~50 mg/day (oral as standalone, or per vial ratio if combined SC). Combined vial products vary by vendor &mdash; verify per-component breakdown on Certificate of Analysis.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Where to buy:</span> Sold as a pre-blended lyophilized vial or as individual components by specialty research peptide vendors. None of the three components are FDA-approved as injectables. See{" "}
            <Link href="/coupons" className="text-[#3A759F] hover:underline">
              Verified Discount Codes &rarr;
            </Link>{" "}
            for current options.
          </p>
        </div>
      </div>

      {sections.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-24 mt-12 border-t-2 border-brand/30 pt-12">
            <h2 className="section-heading mb-3">
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

      <div className="flex flex-wrap gap-2 mt-8">
        {["Metabolic", "Longevity", "Mitochondria", "NAD+", "AMPK", "Combination Blend", "Preclinical"].map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related Peptides</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/peptides/nad-plus" className="text-sm font-medium text-[#3A759F] hover:underline">NAD+</Link>
          <Link href="/peptides/mots-c" className="text-sm font-medium text-[#3A759F] hover:underline">MOTS-c</Link>
          <Link href="/peptides/epitalon" className="text-sm font-medium text-[#3A759F] hover:underline">Epitalon</Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related Blends</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/peptides/semaglutide-bpc-157" className="text-sm font-medium text-[#3A759F] hover:underline">Semaglutide + BPC-157</Link>
          <Link href="/peptides/tirzepatide-bpc-157" className="text-sm font-medium text-[#3A759F] hover:underline">Tirzepatide + BPC-157</Link>
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
      <ContactLink pageName="Metabolic Blend (NAD+ + MOTS-c + 5-Amino-1MQ)" pagePath="/peptides/nad-mots-c-5-amino-1mq" />
        </main>

        <aside className="hidden lg:block lg:mt-0 lg:sticky lg:top-24 lg:self-start">
          <ProfileTOC sections={tocSections} variant="rail" />
        </aside>
      </div>
    </div>
    </>
  );
}
