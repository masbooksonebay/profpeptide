import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import ProfileTOC from "@/components/ProfileTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd, isWhereToBuy } from "@/lib/faq-schema";

export const metadata = buildPageMetadata({
  path: "/peptides/pt-141-oxytocin",
  title: "PT-141 + Oxytocin — Sexual Health & Intimacy Blend Research Profile | Prof. Peptide",
  description:
    "PT-141 + Oxytocin research profile: melanocortin agonist + bonding neuropeptide blend for sexual desire, arousal, and intimacy. Mechanism, dosing, delivery routes, side effects, FAQ.",
});

const faqs = [
  {
    q: "What is the PT-141 + Oxytocin blend?",
    a: (
      <>
        The PT-141 + Oxytocin blend is a 2-component research-grade peptide combination pairing{" "}
        <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>{" "}
        (bremelanotide, a melanocortin receptor agonist) with oxytocin (the prosocial bonding neuropeptide). PT-141 acts centrally in the brain to drive sexual desire and arousal through MC3R and MC4R receptor activation. Oxytocin modulates social bonding, trust, intimacy, and has been studied in the context of orgasm intensity and sexual satisfaction. The research thesis is that PT-141 addresses the desire/arousal axis while oxytocin adds the emotional-connection and bonding layer &mdash; a libido-plus-intimacy pairing.
      </>
    ),
  },
  {
    q: "How does PT-141 differ from ED drugs like sildenafil?",
    a: "PT-141 works centrally in the brain via melanocortin receptors (MC3R/MC4R) to increase sexual desire and arousal — it addresses the motivation/desire axis. Sildenafil (Viagra) and tadalafil (Cialis) work peripherally by inhibiting PDE5 in penile vasculature to increase blood flow in response to arousal. PT-141 can generate desire when it is absent; PDE5 inhibitors facilitate the physical response once desire is already present. PT-141 is also effective in women, which PDE5 inhibitors are generally not. The two mechanisms are complementary, though combining them without medical supervision is not recommended due to potential additive cardiovascular effects.",
  },
  {
    q: "Is PT-141 FDA-approved?",
    a: (
      <>
        Yes &mdash; as Vyleesi (bremelanotide injection, 1.75 mg/0.3 mL autoinjector), approved by the FDA in June 2019 for hypoactive sexual desire disorder (HSDD) in premenopausal women. Research-grade{" "}
        <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>{" "}
        is a distinct product from the approved pharmaceutical: it is sold as a lyophilized research peptide for laboratory use only and is not the approved drug. The existence of the FDA-approved product gives the compound one of the strongest regulatory analogs of any research peptide, but does not make research-grade material equivalent to or interchangeable with Vyleesi.
      </>
    ),
  },
  {
    q: "What delivery route does oxytocin use in this blend?",
    a: "Oxytocin in research and compounded contexts is most commonly administered as a sublingual troche or intranasal spray — not by subcutaneous injection, which is the route used for PT-141. Intranasal oxytocin crosses the blood-brain barrier efficiently and is the route used in published human social-bonding research. Sublingual troches are often compounded for convenience. The practical implication for this blend is that the two peptides are administered by different routes: PT-141 is reconstituted from lyophilized powder and injected subcutaneously; oxytocin is typically used as a nasal spray or troche around the same time window.",
  },
  {
    q: "Has the PT-141 + Oxytocin combination been studied in a controlled trial?",
    a: "No. There is no controlled clinical trial of PT-141 and oxytocin used together. The combination thesis rests on each peptide's independent mechanism and research literature. PT-141 has robust human data including the RECONNECT Phase 3 trials that supported FDA approval for HSDD. Oxytocin has extensive human pharmacodynamic data for social bonding, but its prosocial and sexual effects in healthy adults are context-dependent and sometimes inconsistent across studies. The synergy of combining them is mechanistically plausible but experimentally untested.",
  },
  {
    q: "What are the most important side effects to know?",
    a: (
      <>
        For{" "}
        <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>
        : nausea is the most common side effect (reported in approximately 40% of subjects in RECONNECT trials), followed by flushing, transient blood pressure increase (particularly diastolic), and headache. With repeated use, focal hyperpigmentation at injection sites has been reported. Serious cardiovascular events are rare but the transient BP increase means PT-141 is contraindicated with high-risk cardiovascular disease. For oxytocin (intranasal/sublingual): generally mild &mdash; nasal irritation with intranasal use, occasional headache, mild nausea. Oxytocin at typical research doses does not produce the uterotonic effects seen with IV clinical doses.
      </>
    ),
  },
  {
    q: "Where can I source these peptides?",
    a: (
      <>
        PT-141 is available from several research peptide vendors as a lyophilized vial. Oxytocin availability varies &mdash; it is more commonly sourced through compounding pharmacies as a nasal spray or troche than as an injectable research peptide. See the{" "}
        <Link href="/coupons" className="text-[#3A759F] hover:underline">
          Verified Discount Codes &rarr;
        </Link>{" "}
        page for current vetted vendor options with verified codes.
      </>
    ),
  },
];

const studies = [
  {
    title: "Bremelanotide for the Treatment of Hypoactive Sexual Desire Disorder: Two Randomized Phase 3 Trials",
    authors: "Kingsberg SA, Clayton AH, Portman D, et al.",
    journal: "Obstetrics & Gynecology",
    year: "2019",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/31599840/",
    summary: "The pivotal Phase 3 RECONNECT trials that supported FDA approval of bremelanotide (Vyleesi) for HSDD in premenopausal women. Two randomized, double-blind, placebo-controlled trials (n=1,247 total) demonstrated that bremelanotide 1.75 mg SC significantly increased the number of satisfying sexual events and reduced distress scores versus placebo. Nausea was the most common adverse event (~40% of subjects); transient blood pressure increases were noted. This is the highest-quality evidence base for PT-141&apos;s clinical efficacy and safety profile in a controlled human trial.",
  },
  {
    title: "Long-Term Safety and Efficacy of Bremelanotide for Hypoactive Sexual Desire Disorder",
    authors: "Simon JA, Kingsberg SA, Portman D, et al.",
    journal: "Obstetrics & Gynecology",
    year: "2019",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/31599847/",
    summary: "Pooled safety and efficacy analysis of the two RECONNECT trials covering 1,247 premenopausal women with HSDD. Confirmed that bremelanotide produced statistically significant improvements in desire and distress endpoints. Detailed safety data documented transient mean increases in blood pressure (8 mmHg systolic, 5 mmHg diastolic) peaking ~4 hours post-dose and resolving within 12 hours. Focal hyperpigmentation with repeated use was identified as a dose-frequency-dependent concern. This analysis provides the most detailed combined safety dataset for PT-141 in human subjects.",
  },
  {
    title: "The Orgasmic History of Oxytocin: Love, Lust, and Labor",
    authors: "Magon N, Kalra S",
    journal: "Indian Journal of Endocrinology and Metabolism",
    year: "2011",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3183515/",
    summary: "A review examining oxytocin&apos;s role in sexual physiology including orgasm, pair bonding, and arousal. Documents the surge in endogenous oxytocin at orgasm and explores the hypothesis that exogenous oxytocin may enhance sexual satisfaction and bonding. Covers the neuropeptide&apos;s central and peripheral mechanisms relevant to intimacy. This is the most-cited review supporting the rationale for oxytocin in a sexual-health blend context. PMID 22145130.",
  },
  {
    title: "The Social Salience Hypothesis of Oxytocin",
    authors: "Shamay-Tsoory SG, Abu-Akel A",
    journal: "Biological Psychiatry",
    year: "2016",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/26321019/",
    summary: "Meta-analysis examining intranasal oxytocin&apos;s effects on social cognition, trust, and empathy in humans. A key cautionary dataset: oxytocin effects are context-dependent and individual-variable &mdash; some studies show prosocial enhancement, others find no effect or even competitive/in-group bias amplification under certain conditions. This heterogeneity is critical to understanding the limitations of the PT-141 + Oxytocin combination thesis, which assumes oxytocin reliably promotes bonding and intimacy.",
  },
  {
    title: "An Effect on the Subjective Sexual Response in Premenopausal Women with Sexual Arousal Disorder by Bremelanotide (PT-141)",
    authors: "Diamond LE, Earle DC, Heiman JR, et al.",
    journal: "Journal of Sexual Medicine",
    year: "2006",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/16839319/",
    summary: "Early characterization of bremelanotide&apos;s pharmacology and human arousal data from pre-Phase 3 research. Documented centrally mediated sexual arousal in both male and female subjects, distinguishing PT-141&apos;s mechanism from peripheral PDE5 inhibitors. Established the MC3R/MC4R receptor pathway in hypothalamic regions as the likely anatomical site of action for the desire/arousal effect, which is the mechanistic foundation for pairing PT-141 with oxytocin&apos;s complementary hypothalamic bonding effects.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does the PT-141 + Oxytocin blend work?",
    intro:
      "The PT-141 + Oxytocin blend targets sexual health through two distinct neuropeptide systems operating in the brain. PT-141 acts on melanocortin receptors in hypothalamic and limbic regions to generate sexual desire and arousal centrally. Oxytocin acts on oxytocin receptors in the hypothalamus, limbic system, and brainstem to modulate social bonding, trust, and emotional intimacy. Together they address both the motivational desire axis (PT-141) and the bonding/connection layer (oxytocin) &mdash; two separable but complementary dimensions of sexual experience.",
    body: [
      "PT-141 (Bremelanotide) &mdash; Melanocortin Receptor Activation [1][5]. PT-141 is a cyclic heptapeptide analog of alpha-MSH (alpha-melanocyte-stimulating hormone) that binds and activates MC3R and MC4R receptors in the central nervous system. The key anatomical sites are hypothalamic nuclei (paraventricular nucleus, dorsomedial hypothalamus) and limbic areas involved in motivation and reward. MC4R activation in these regions drives dopaminergic reward pathway engagement and produces sexual desire and arousal as centrally generated behaviors &mdash; not as a result of genital blood flow changes. This central mechanism is why PT-141 works in both males and females, and why it can generate desire when it is absent rather than merely facilitating the physical response to pre-existing desire.",
      "Oxytocin &mdash; Bonding Neuropeptide and Orgasm Modulation [3]. Oxytocin is a 9-amino-acid neuropeptide produced in hypothalamic paraventricular and supraoptic nuclei and released both centrally (as a neuromodulator) and peripherally (from the posterior pituitary). In the sexual-health context, it is studied for three roles: (1) endogenous oxytocin surges at orgasm and may modulate orgasm intensity; (2) intranasal oxytocin promotes trust and prosocial connection in controlled settings; (3) oxytocin may lower the threshold for pair-bonding and attachment behaviors. The PT-141 + Oxytocin combination thesis is that PT-141 drives the arousal/desire axis while oxytocin adds the emotional-bonding and intimacy layer, addressing a dimension of sexual experience that a pure arousal agent does not reach.",
      "Different Delivery Routes. PT-141 is administered subcutaneously as a reconstituted injection from a lyophilized research vial. Oxytocin in research and compounded contexts is most commonly used as an intranasal spray or sublingual troche because these routes provide efficient central nervous system access. The practical implication: the two peptides are given by different routes, typically within the same 30&ndash;60 minute pre-activity window.",
      "No Controlled Trial of the Combination. There is no clinical trial of PT-141 and oxytocin used together [4]. PT-141 has robust Phase 3 RECONNECT trial data supporting its independent efficacy [1][2]. Oxytocin has extensive human pharmacodynamic data but with context-dependent and sometimes inconsistent prosocial effects [4]. The combination rationale is mechanistically grounded but remains an extrapolation from each peptide&apos;s individual literature.",
      "Melanocortin Context &mdash; Related Compounds. PT-141 is structurally derived from Melanotan II, a non-selective melanocortin agonist (MC1R/MC3R/MC4R/MC5R) that also produces sexual arousal but has a broader side-effect profile including generalized tanning, nausea, and spontaneous erections. PT-141 was developed as a more selective MC3R/MC4R agonist to retain the sexual-arousal effect with reduced off-target melanocortin activity.",
    ],
  },
  {
    id: "research",
    title: "What is the PT-141 + Oxytocin blend used for?",
    intro:
      "The PT-141 + Oxytocin combination represents a new research vertical focused on sexual health and intimacy &mdash; distinct from the recovery, body composition, and metabolic blend categories. PT-141 has the strongest clinical evidence base of any research peptide in the sexual-health space, supported by FDA approval as Vyleesi. Oxytocin&apos;s contribution is supported by pharmacodynamic and neuroimaging research but is more variable across individuals and contexts. All applications below are extrapolated from each component&apos;s independent literature; the combination has not been studied in a controlled trial.",
    body: [
      "Hypoactive Sexual Desire (HSDD-Adjacent Research) [1][2]. PT-141 is the only FDA-approved centrally acting agent for HSDD in premenopausal women. Research-grade use extends these data to explore the compound in both sexes and in contexts beyond the HSDD indication. PT-141&apos;s MC4R-mediated central arousal generation is the strongest evidence-supported application.",
      "Sexual Arousal in Both Sexes [5]. Unlike PDE5 inhibitors, PT-141 generates arousal centrally and has been studied in both male and female subjects, including men with erectile dysfunction who did not respond to sildenafil. This mechanistic independence from genital blood flow makes it relevant across sexes.",
      "Orgasm Intensity and Satisfaction [3]. Endogenous oxytocin surges at orgasm, and exogenous oxytocin is studied as a means of modulating orgasm intensity and sexual satisfaction. The evidence here is less robust than for PT-141&apos;s desire/arousal effects, but the plausibility of the mechanism has sustained active research interest.",
      "Emotional Bonding and Relational Intimacy [3][4]. Intranasal oxytocin has been studied for enhancing trust, emotional connection, and prosocial cognition in couples and social dyads. The context-dependence of these effects is well-documented &mdash; oxytocin amplifies socially salient stimuli, which in an intimate relational context would theoretically favor bonding, but in a non-intimate context may not produce the same effects.",
      "Sexual Dysfunction Research (Male) [5]. Early bremelanotide trials showed efficacy in men with erectile dysfunction of psychogenic or mixed etiology. The compound is not approved for this indication but the mechanistic data support the application in research settings.",
    ],
  },
  {
    id: "timeline",
    title: "How quickly does the PT-141 + Oxytocin blend take effect?",
    intro:
      "PT-141 has a well-characterized pharmacokinetic onset: arousal effects emerge approximately 45 minutes after subcutaneous injection, peak around 60&ndash;90 minutes, and the active window lasts 6&ndash;12 hours. Intranasal oxytocin reaches central nervous system exposure within 15&ndash;30 minutes of nasal administration. The practical protocol aligns timing so both compounds are active in the same window.",
    content:
      "Timing the PT-141 + Oxytocin blend: administer PT-141 SC approximately 45&ndash;60 minutes before planned activity; administer oxytocin intranasal spray or sublingual troche approximately 20&ndash;30 minutes before activity. This staggered approach allows PT-141 to reach its onset while oxytocin is delivered closer to the activity window. PT-141 onset is the rate-limiting step &mdash; the 45-minute minimum pre-dose interval should not be compressed. The Vyleesi label documents that PT-141 should not be used more than once in 24 hours and no more than approximately 8 times per month. Oxytocin&apos;s short half-life (approximately 3&ndash;5 minutes in plasma; central effect duration longer via local CNS release) means it can be redosed without long washout, but typical intranasal research protocols use single pre-activity dosing.",
  },
  {
    id: "dosing",
    title: "How is the PT-141 + Oxytocin blend dosed?",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The PT-141 + Oxytocin blend has no clinically validated combination protocol. Research-community dosing layers each peptide&apos;s individual established protocol. PT-141 is dosed as a subcutaneous injection from a reconstituted lyophilized vial; oxytocin is typically administered as an intranasal spray or sublingual troche rather than by injection.
        </p>
        <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">
          PT-141 (Bremelanotide) &mdash; SC injection protocol:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Research dose range.</span> 1&ndash;2 mg subcutaneously per use. The FDA-approved Vyleesi dose is 1.75 mg; research-grade use typically starts at 1 mg to assess nausea tolerance and titrates up if needed.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Timing.</span> Inject approximately 45 minutes before planned sexual activity. Onset is slower than PDE5 inhibitors &mdash; the 45-minute minimum lead time should not be compressed.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Frequency limits.</span> No more than once per 24-hour period; no more than approximately 8 times per month (aligned with Vyleesi prescribing guidance). Frequency limits are particularly important for avoiding focal hyperpigmentation with repeated injection-site use.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site.</span> Abdomen or upper thigh. Rotate sites to reduce hyperpigmentation risk at any one location.</li>
        </ol>
        <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-3">
          Oxytocin &mdash; intranasal spray or sublingual troche:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Research dose range.</span> 20&ndash;40 IU intranasal or sublingual, approximately 20&ndash;30 minutes before activity. Published human social-bonding and sexual-function studies have used 24 IU intranasal as the most common dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Intranasal administration.</span> One spray (typically 4 IU per actuation) per nostril, repeating to reach total dose. Allow 30 seconds between actuations. Avoid blowing the nose immediately after.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sublingual troche.</span> Allow to dissolve completely under the tongue. Avoid eating or drinking during dissolution.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Source note.</span> Oxytocin is more commonly sourced through compounding pharmacies as a nasal spray or troche than through research peptide vendors. Availability from peptide vendors varies; verify with the specific vendor before ordering.</li>
        </ol>
        <div className="pt-4">
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            PT-141 reconstitution &mdash; research-grade vials
          </h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Typical SKUs.</span> PT-141 research vials are commonly sold as 5 mg or 10 mg lyophilized powder. Reconstitute with bacteriostatic water (BAC water). Swirl gently &mdash; do not shake.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">Reconstitution math (5 mg vial).</span> Adding 2.5 mL BAC water to a 5 mg vial yields 2 mg/mL. A 1 mg dose requires 0.5 mL (50 units on a U-100 syringe); a 1.75 mg dose requires 0.875 mL (~88 units). Adding 5 mL yields 1 mg/mL &mdash; 1 mg per 1 mL (100 units), which is easier to measure precisely.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            Need to calculate your dose? Use the{" "}
            <Link href="/calculator" className="text-[#3A759F] hover:underline">dosage calculator &rarr;</Link>.
          </p>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          This blend is not FDA-approved as a combination. Dosing guidance is derived from each component&apos;s individual research literature. There are no approved retail dosing standards for the combination.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How is the PT-141 + Oxytocin blend administered?",
    intro:
      "The PT-141 + Oxytocin blend uses two different administration routes because the two peptides are optimally delivered differently: PT-141 by subcutaneous injection (from a reconstituted lyophilized vial) and oxytocin by intranasal spray or sublingual troche. The practical protocol is sequential: PT-141 injection first (45&ndash;60 min before activity), then oxytocin intranasal or sublingual (20&ndash;30 min before activity).",
    body: [
      "PT-141 route. Subcutaneous injection using a small insulin syringe. Inject under the skin at the abdomen or upper thigh &mdash; not intramuscular. Pinch a fold of skin, insert at a 45-degree angle, inject slowly.",
      "Oxytocin route. Intranasal spray: tilt head forward slightly, insert nozzle gently into nostril, spray while breathing in slowly. Allow at least 30 seconds between actuations. Do not blow the nose for 10 minutes after dosing. Sublingual troche: place under the tongue, allow to dissolve fully (approximately 5&ndash;10 minutes), avoid eating or drinking during.",
      "Timing sequence. PT-141 SC approximately 45&ndash;60 minutes before activity; oxytocin intranasal or sublingual approximately 20&ndash;30 minutes before activity. This staggered approach ensures both compounds are in their active window simultaneously.",
      "Site rotation for PT-141. Rotate subcutaneous injection sites (abdomen, upper thigh alternating) to reduce the risk of focal hyperpigmentation, which is associated with repeated dosing at the same site.",
      "Food and alcohol. PT-141 does not require fasting, but nausea (the most common side effect) is typically less severe on a light stomach versus a heavy meal. Alcohol may amplify flushing and headache side effects.",
      "Reconstitution. PT-141 lyophilized vials require reconstitution with bacteriostatic water (BAC water) before injection. Swirl gently to dissolve &mdash; do not shake vigorously. Store the reconstituted solution refrigerated and use within 30 days.",
      "Missed or cancelled use. PT-141 is an on-demand peptide, not a daily chronic-dosing compound. It does not require cycling or consistent daily administration; it is used as needed within the frequency limits (once per 24 hours, approximately 8 times per month maximum).",
    ],
  },
  {
    id: "stacks",
    title: "What does the PT-141 + Oxytocin blend stack well with?",
    intro:
      "The PT-141 + Oxytocin blend is self-contained for the desire/arousal/bonding axis and does not typically require additional peptide stacking within the sexual-health vertical. The most commonly discussed additions are non-peptide (lifestyle factors). Combining PT-141 with other vasoactive compounds warrants caution due to the transient blood pressure effects PT-141 produces.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Lifestyle and physiological baseline.</span> PT-141&apos;s central arousal mechanism is more effective when underlying testosterone levels, sleep quality, and psychological readiness are optimized. Researchers studying PT-141 often control for these variables. Low testosterone (in either sex) may attenuate response.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Melanotan II context (related compound, not recommended for concurrent use).</span>{" "}
          <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>{" "}
          is PT-141&apos;s parent compound &mdash; a broader melanocortin agonist also active at MC1R (tanning) and MC5R. PT-141 was developed specifically to reduce the off-target MC1R activity of Melanotan II. Using both simultaneously would double melanocortin receptor loading without independent benefit and would increase side-effect risk. Reference Melanotan II for comparative context, not concurrent use.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">PDE5 inhibitors (with caution).</span> PT-141 and PDE5 inhibitors (sildenafil, tadalafil) address different axes &mdash; central desire versus peripheral blood flow. Mechanistically complementary, but PT-141 produces a transient increase in blood pressure while PDE5 inhibitors decrease it. The interaction may be counterbalancing or complex. This combination is not recommended without medical supervision; the Vyleesi prescribing information does not recommend concurrent use.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: other melanocortin agonists simultaneously.</span> Stacking PT-141 with Melanotan II or other alpha-MSH analogs simultaneously doubles melanocortin receptor activation without independent benefit and significantly increases side-effect burden (nausea, flushing, BP effects).
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: antihypertensives and cardiovascular-active compounds on the same dosing day.</span> PT-141&apos;s transient BP increase can interact unpredictably with medications that lower blood pressure, including calcium channel blockers, beta-blockers, and nitrate compounds.
        </li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of PT-141 + Oxytocin?",
    intro:
      "PT-141 has the most extensively characterized side-effect profile of any research peptide in the sexual-health category, with controlled Phase 3 trial data from 1,247 subjects. Nausea is by far the most common side effect. Oxytocin, at intranasal doses used in human research, has a mild and generally well-tolerated side-effect profile. The combination has not been studied in a controlled trial, so combined side-effect frequencies are not established.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Common (most users &mdash; PT-141)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Nausea.</span> The most commonly reported side effect &mdash; approximately 40% incidence in RECONNECT Phase 3 trial subjects. Usually mild to moderate and peaks 1&ndash;2 hours post-injection. Lower starting doses (1 mg vs 1.75 mg) reduce nausea incidence. Some researchers use antiemetics prophylactically.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Flushing.</span> Warmth and redness, particularly of the face, neck, and chest. Common, typically mild, and resolves within a few hours.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Transient blood pressure increase.</span> Mean increases of approximately 8 mmHg systolic and 5 mmHg diastolic, peaking around 4 hours post-dose and resolving within 12 hours. Clinically significant in individuals with hypertension or cardiovascular risk factors.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Headache.</span> Mild to moderate, common in the first few uses, often attenuates with repeated administration.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Less common (PT-141)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Focal hyperpigmentation.</span> With repeated SC injection at the same site, localized darkening of the skin can develop. Rotation of injection sites reduces this risk; it typically resolves after discontinuation but may be slow to fade.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection site reactions.</span> Mild redness, soreness, or induration at the injection site, resolving within hours to days.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vomiting.</span> In a minority of subjects, nausea progresses to vomiting. More common at 1.75 mg than at lower doses.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Oxytocin (intranasal/sublingual) side effects
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Nasal irritation.</span> The most common side effect with intranasal administration. Mild and typically transient.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Headache.</span> Occasional; generally mild.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild nausea.</span> Uncommon at standard intranasal doses.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Serious (rare or theoretical)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cardiovascular events (PT-141).</span> The transient blood pressure increase is the primary cardiovascular concern. PT-141 is contraindicated in individuals with known cardiovascular disease, uncontrolled hypertension, or significant cardiovascular risk. The Vyleesi label carries a cardiovascular warning.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hyperpigmentation (PT-141, chronic use).</span> Diffuse hyperpigmentation has been reported with frequent use, not just at injection sites. The Vyleesi prescribing information recommends discontinuation if diffuse hyperpigmentation develops, particularly affecting the gums, breasts, or face.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical melanocortin systemic effects.</span> At higher or more frequent doses, broader MC1R and MC5R activity from off-target melanocortin stimulation could theoretically produce pigmentation changes beyond injection sites.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The combined side-effect profile of PT-141 + Oxytocin has not been formally studied. The PT-141 nausea and cardiovascular effects are the primary clinical concerns. Oxytocin at intranasal doses is generally mild. Most researchers begin PT-141 at 1 mg to assess individual nausea and blood pressure tolerance before escalating to 1.75 mg.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does the PT-141 + Oxytocin blend interact with other drugs?",
    intro:
      "The most clinically significant interaction concern for PT-141 is with other cardiovascular-active compounds, given its transient blood pressure-raising effect. Oxytocin has limited documented drug interactions at intranasal research doses.",
    body: [
      "Antihypertensives and cardiovascular medications. PT-141 produces a transient mean BP increase (~8/5 mmHg) that can interact unpredictably with antihypertensives, beta-blockers, and calcium channel blockers. On-label, PT-141 should not be used by people with cardiovascular disease or uncontrolled hypertension.",
      "PDE5 inhibitors (sildenafil, tadalafil, vardenafil). PT-141 raises BP transiently; PDE5 inhibitors lower BP. Concurrent use could produce complex cardiovascular effects. Not recommended without medical supervision.",
      "Nitrates. PT-141 should not be combined with nitrate compounds (nitroglycerin, isosorbide mononitrate) due to additive cardiovascular risk. This is a hard contraindication in the Vyleesi prescribing information.",
      "Naltrexone and opioid-receptor modulators. Melanocortin and opioid systems interact centrally. Theoretical pharmacodynamic interaction; no documented clinical event, but awareness is warranted.",
      "Oxytocin interactions. At intranasal doses used in research, oxytocin has no well-documented drug interactions. Clinical IV oxytocin (uterotonic use) is known to interact with sympathomimetics and cause cardiovascular effects, but these do not apply to intranasal research doses.",
      "Alcohol. May amplify PT-141 flushing, headache, and nausea. No specific PT-141 + alcohol interaction data, but general caution applies.",
    ],
  },
  {
    id: "storage",
    title: "How should PT-141 + Oxytocin be stored?",
    body: [
      "PT-141 lyophilized (powder) form: -20°C long-term, 2–8°C short-term (refrigerated).",
      "PT-141 reconstituted solution: 2–8°C, use within 30 days.",
      "PT-141 reconstitution: bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Do not freeze the reconstituted PT-141 solution. Freezing damages the peptide.",
      "Oxytocin nasal spray (compounded): store per the pharmacist’s labeling, typically 2–8°C refrigerated and protected from light. Discard per labeled expiry.",
      "Oxytocin sublingual troches: typically stored at room temperature away from heat and moisture, or refrigerated; follow compounding pharmacy instructions.",
      "Protect all forms from light and temperature extremes. Discard any solution that is cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "where-to-buy",
    title: "Where to source PT-141 + Oxytocin",
    intro:
      "PT-141 is available from research peptide vendors as a lyophilized vial. Oxytocin is more commonly sourced through compounding pharmacies as an intranasal spray or sublingual troche than through research peptide vendors &mdash; availability varies by vendor. The vendors highlighted below carry PT-141 and have been vetted for third-party testing documentation and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "ez-peptides", note: "Stocks PT-141; oxytocin availability varies by vendor" },
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
    id: "limitations",
    title: "What are the limitations of PT-141 + Oxytocin research?",
    intro:
      "PT-141 (bremelanotide) has an unusually strong evidence base for a research peptide, anchored by FDA approval and Phase 3 RECONNECT trial data. Oxytocin has extensive human pharmacodynamic data but with well-documented context-dependence and individual variability in its prosocial effects. The combination has no controlled trial evidence whatsoever.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          PT-141 (bremelanotide) is FDA-approved as Vyleesi for HSDD in premenopausal women &mdash; the only FDA-approved centrally acting sexual-health peptide. Research-grade PT-141 is a distinct product from the approved pharmaceutical and is sold for laboratory use only. The approved drug context provides useful safety and efficacy data but does not legitimize off-label or research-grade use.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Oxytocin&apos;s prosocial effects in humans are context-dependent and sometimes inconsistent [4]. Meta-analyses find significant heterogeneity across studies &mdash; some show robust prosocial enhancement, others find no effect or context-specific in-group favoritism amplification. The assumption that exogenous oxytocin reliably and predictably enhances intimacy and bonding in all individuals or all relational contexts is not fully supported by the controlled-trial literature.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The PT-141 + Oxytocin combination has no controlled trial evidence as a combination. Mechanistic complementarity provides the scientific rationale, but the claim that combining them is superior to PT-141 alone has not been tested. Researchers should treat the combination rationale as a plausible hypothesis, not an established finding.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          PT-141&apos;s cardiovascular warning (transient BP increase, contraindication in cardiovascular disease) is the most important safety limitation. This applies to research-grade use of any bremelanotide-class compound.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Oxytocin is classified as a prescription drug when compounded. Intranasal oxytocin is available through compounding pharmacies in many jurisdictions with a prescription. Regulatory status varies by country.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "PT-141 + Oxytocin FAQ",
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
          Clayton AH, Kingsberg SA, Goldstein I. Evaluation and Management of Hypoactive Sexual Desire Disorder. Sex Med. 2018;6(2):59-74. (RECONNECT trial context){" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29523488/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29523488/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Simon JA, Kingsberg SA, Portman D, et al. Long-term Safety and Efficacy of Bremelanotide for Hypoactive Sexual Desire Disorder. Obstet Gynecol. 2019;134(5):909-917.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/31599847/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/31599847/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Magon N, Kalra S. The orgasmic history of oxytocin: Love, lust, and labor. Indian J Endocrinol Metab. 2011;15(Suppl 3):S156-S161. PMID 22145130.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3183515/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC3183515/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Shamay-Tsoory SG, Abu-Akel A. The Social Salience Hypothesis of Oxytocin. Biol Psychiatry. 2016;79(3):194-202.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/26321019/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/26321019/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Diamond LE, Earle DC, Heiman JR, et al. An Effect on the Subjective Sexual Response in Premenopausal Women with Sexual Arousal Disorder by Bremelanotide. J Sex Med. 2006;3(4):628-638.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/16839319/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/16839319/
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
          The PT-141 + Oxytocin blend has no controlled trial as a combination. The studies below are the key peer-reviewed sources for each component&apos;s mechanism and human evidence base &mdash; the empirical foundation for the blend&apos;s rationale.
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
  { id: "overview", title: "What is the PT-141 + Oxytocin blend?" },
  ...sections.map((s) => ({ id: s.id, title: s.title })),
];

export default function PT141OxytocinPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"PT-141 + Oxytocin","description":"PT-141 + Oxytocin research profile: melanocortin agonist + bonding neuropeptide blend for sexual desire, arousal, and intimacy. Mechanism, dosing, delivery routes, side effects, FAQ.","url":"https://profpeptide.com/peptides/pt-141-oxytocin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"PT-141 + Oxytocin"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#16181B] dark:text-slate-100 tracking-tight">PT-141 + Oxytocin</h1>
        <span className="tag">Sexual Health</span>
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
              <dd className="text-base text-[#16181B] dark:text-slate-100">A combination of PT-141 (bremelanotide, a melanocortin MC3R/MC4R agonist that raises sexual desire and arousal via the brain) and Oxytocin (the bonding/arousal neuropeptide), stacked for libido and intimacy research.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">How it&apos;s taken</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Two routes: PT-141 by subcutaneous injection; oxytocin by intranasal spray or sublingual troche</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Half-life</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">PT-141 active window ~6&ndash;12 hours; oxytocin ~3&ndash;5 minutes in plasma</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Typical research dose</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">PT-141 1&ndash;2 mg SC ~45 min before activity (max once/24h, ~8&times;/month) + oxytocin 20&ndash;40 IU intranasal or sublingual ~20&ndash;30 min before</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Research status</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">PT-141 is FDA-approved as Vyleesi and oxytocin as an obstetric drug (Pitocin), but the combination for libido/intimacy is not an approved product &mdash; research use only.</dd>
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
        <h2 className="section-heading mb-3">What is the PT-141 + Oxytocin blend?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            The PT-141 + Oxytocin blend is a 2-component research peptide combination pairing{" "}
            <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>{" "}
            (bremelanotide, a cyclic heptapeptide melanocortin receptor agonist) with{" "}
            <Link href="/peptides/oxytocin" className="text-[#3A759F] hover:underline">oxytocin</Link>{" "}
            (the hypothalamic neuropeptide governing bonding, trust, and intimacy). PT-141 acts centrally via MC3R and MC4R receptors in hypothalamic and limbic regions to generate sexual desire and arousal &mdash; the mechanism that led to FDA approval as Vyleesi for hypoactive sexual desire disorder (HSDD) in premenopausal women. Oxytocin is studied for its role in pair bonding, trust, emotional connection, and orgasm modulation. The combination addresses two distinct but complementary dimensions: the arousal/desire axis (PT-141) and the emotional-bonding/intimacy axis (oxytocin). This represents a new research vertical for the sexual-health space, distinct from recovery, body-composition, and metabolic peptide categories.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            A key practical note on delivery: PT-141 is administered by subcutaneous injection from a lyophilized research vial; oxytocin is typically used as an intranasal spray or sublingual troche. These are administered in sequence in the pre-activity window, not as a single co-injection.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Centrally generated sexual desire and arousal via MC3R/MC4R activation (PT-141) &mdash; mechanism independent of genital blood flow</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Efficacy in both males and females (unlike PDE5 inhibitors, which are primarily male-targeted)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Prosocial bonding and trust modulation studied with intranasal oxytocin in human trials</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Potential modulation of orgasm intensity and sexual satisfaction (oxytocin surge at orgasm is physiologically documented)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">On-demand dosing &mdash; not a chronic daily protocol; used as needed within frequency limits</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">PT-141 has Phase 3 RECONNECT trial data and FDA approval as the closest regulatory analog of any research peptide in its category</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common research dose:</span>{" "}
            PT-141 1&ndash;2 mg SC approximately 45 minutes before activity (max once per 24 hours, approximately 8 times per month) + oxytocin 20&ndash;40 IU sublingual or intranasal approximately 20&ndash;30 minutes before activity.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Where to buy:</span> PT-141 is available from research peptide vendors. Oxytocin is typically sourced through compounding pharmacies. Neither research-grade PT-141 nor compounded oxytocin is equivalent to FDA-approved products. See{" "}
            <Link href="/coupons" className="text-[#3A759F] hover:underline">
              Verified Discount Codes &rarr;
            </Link>{" "}
            for current vetted vendor options.
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
        {["Sexual Health", "Melanocortin", "Neuropeptide", "Combination Blend", "On-Demand Dosing"].map((tag) => (
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
          <Link href="/peptides/pt-141" className="text-sm font-medium text-[#3A759F] hover:underline">PT-141 (Bremelanotide)</Link>
          <Link href="/peptides/melanotan-ii" className="text-sm font-medium text-[#3A759F] hover:underline">Melanotan II</Link>
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
      <ContactLink pageName="PT-141 + Oxytocin" pagePath="/peptides/pt-141-oxytocin" />
        </main>

        <aside className="hidden lg:block lg:mt-0 lg:sticky lg:top-24 lg:self-start">
          <ProfileTOC sections={tocSections} variant="rail" />
        </aside>
      </div>
    </div>
    </>
  );
}
