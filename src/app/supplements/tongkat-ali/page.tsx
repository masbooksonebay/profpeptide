import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/tongkat-ali",
  title: "Tongkat Ali: Testosterone in Late-Onset Hypogonadism, SHBG, Physta Standard",
  description:
    "Tongkat Ali at 200–400 mg standardized extract — real testosterone elevation in late-onset hypogonadism (Tambi 2012), smaller in eugonadal men, cortisol reduction (Talbott 2013), Physta and eurycomanone standardization.",
});

const faqs = [
  {
    q: "Does Tongkat Ali really raise testosterone?",
    a: "Context matters — and this is where the honest answer differs from marketing. Tongkat Ali consistently raises testosterone in men with low-normal or below-normal baseline testosterone — Tambi 2012 documented serum testosterone rising from 5.66 ± 1.51 nmol/L to 8.40 ± 1.74 nmol/L in men with late-onset hypogonadism. In healthy young men with normal-to-high baseline testosterone, the effect is smaller and less consistent — some trials show modest free-testosterone increases via SHBG reduction; others show no change in total testosterone. This pattern is similar to ashwagandha&apos;s testosterone evidence: real in men who are stressed, overtrained, or showing age-related decline; smaller in young healthy eugonadal men with already-optimal testosterone. Practical implication: if you're 45+ with symptoms of low testosterone, Tongkat Ali has reasonable evidence. If you're 25 with normal testosterone, expect modest free-T improvement via SHBG reduction but don&apos;t expect dramatic total-testosterone changes.",
  },
  {
    q: "What does Physta or eurycomanone standardization mean?",
    a: "Standardization to active compound content. Tongkat Ali root contains multiple bioactive quassinoids; eurycomanone is the most-studied marker compound. Physta is a specific water-soluble extract (manufactured by Biotropics Malaysia) standardized to known eurycomanone content and used in most modern human RCTs — including Tambi 2012, Talbott 2013, and the 2021 muscle-strength trials. The Physta brand-specific extract is what has the trial evidence; generic &quot;Tongkat Ali root powder&quot; without standardization details has unclear active content and inconsistent effects in user reports. Practical guidance: buy products that disclose Physta brand specifically OR products standardized to 2%+ eurycomanone content. Avoid generic non-standardized root powders if you want effects similar to trial outcomes.",
  },
  {
    q: "How much Tongkat Ali should I take?",
    a: "200–400 mg of standardized extract daily. Tambi 2012 used 200 mg/day; Talbott 2013 used 200 mg/day; the 2021 muscle-strength trial (Henkel) used 400 mg/day. Higher doses (600–800 mg) have been used in some trials but don&apos;t consistently outperform 200–400 mg. Generic non-standardized root powder doses (1–2 g) are not equivalent — without knowing eurycomanone content, dose conversion isn&apos;t reliable. Take in the morning to avoid potential evening energizing effects. Effect on testosterone emerges over 4–8 weeks; cortisol reduction can be measurable within 4 weeks.",
  },
  {
    q: "Will Tongkat Ali affect my workouts or muscle growth?",
    a: (
      <>
        Modestly, mostly through testosterone-mediated mechanisms in users who respond. A 2021 RCT (Henkel et al., 12 weeks at 400 mg/day) documented significant increases in muscle strength and fat-free mass in active older adults. In younger eugonadal trainees, effect size is smaller — the cortisol-reduction mechanism may still provide modest training-stress recovery benefit. Not a primary performance-enhancement supplement on par with creatine. For users who respond with testosterone elevation (low-T baseline), training adaptations may improve modestly. For pre-workout pump or ergogenic effects specifically, look at{" "}
        <Link href="/supplements/l-citrulline-malate" className="text-[#3A759F] hover:underline">L-citrulline malate</Link>{" "}
        or{" "}
        <Link href="/supplements/creatine" className="text-[#3A759F] hover:underline">creatine</Link>.
      </>
    ),
  },
  {
    q: "Does Tongkat Ali lower cortisol?",
    a: "Yes — and this may be one of its more reliable effects. Talbott 2013 RCT in moderately stressed adults documented significant reductions in cortisol (~16%) and improvements in tension, anger, and mood scores after 4 weeks of Tongkat Ali supplementation. The cortisol effect appears more consistently than the testosterone effect in healthy populations — and the testosterone-cortisol ratio (rather than absolute testosterone) is often what determines symptoms of low vitality. For users where chronic stress is the primary driver of fatigue and low libido, the cortisol mechanism may be more relevant than the testosterone mechanism. This also positions Tongkat Ali as a stress-modulating adaptogen alongside ashwagandha and rhodiola, with the testosterone effect as an additional but variable benefit.",
  },
  {
    q: "Should women take Tongkat Ali?",
    a: (
      <>
        Generally not recommended — Tongkat Ali has been studied primarily in men. Mechanisms (SHBG reduction, aromatase inhibition, modest testosterone elevation) are relevant for some women in specific contexts (postmenopausal libido, certain androgen-deficiency states) but most trials have not included women, so dosing and safety in female populations is less well-characterized. Postmenopausal women interested in libido support typically have better-evidenced options:{" "}
        <Link href="/supplements/maca-root" className="text-[#3A759F] hover:underline">maca root</Link>{" "}
        (Brooks 2008 specifically in postmenopausal women) is the better choice. Women with PCOS or other androgen-excess conditions should specifically avoid Tongkat Ali due to the testosterone-elevating mechanism. Coordinate with healthcare provider.
      </>
    ),
  },
  {
    q: "Is Tongkat Ali safe? Any contraindications?",
    a: "Generally well-tolerated in trials at 200–400 mg standardized extract for up to 12 weeks. Several real safety concerns to address: (1) Mercury contamination has been documented in non-third-party-tested Tongkat Ali products from Southeast Asian sources — only buy from reputable suppliers with heavy-metal testing disclosure. (2) Hormone-sensitive prostate conditions (BPH, prostate cancer history) should not use Tongkat Ali due to testosterone-elevating mechanism — coordinate with urology. (3) Sleep can be disrupted if taken late in the day — morning dosing only. (4) Theoretical concern with hormone-sensitive cancer history — avoid. (5) Not for women of reproductive age (limited data). Watch for restlessness, insomnia, irritability — these are dose-related and resolve with dose reduction.",
  },
  {
    q: "Can I stack Tongkat Ali with ashwagandha or maca?",
    a: (
      <>
        Yes — and the three are mechanistically complementary rather than redundant.{" "}
        <Link href="/supplements/tongkat-ali" className="text-[#3A759F] hover:underline">Tongkat Ali</Link>{" "}
        handles hormonal testosterone support (SHBG, aromatase, cortisol).{" "}
        <Link href="/supplements/ashwagandha" className="text-[#3A759F] hover:underline">Ashwagandha</Link>{" "}
        handles broader stress/HPA-axis adaptation and has its own testosterone evidence base in stressed/overtrained men (Wankhede 2015, Lopresti 2019).{" "}
        <Link href="/supplements/maca-root" className="text-[#3A759F] hover:underline">Maca</Link>{" "}
        handles non-hormonal libido and dopaminergic motivation. For users with multiple complaints (low libido + stress + suboptimal testosterone), all three can be stacked. Start with one for 4–8 weeks to assess response, then add others if needed. Coordinate with healthcare provider — these affect endocrine and HPA axis systems and benefit from monitored introduction.
      </>
    ),
  },
];

const studies = [
  {
    title: "Standardised Water-Soluble Extract of Eurycoma longifolia, Tongkat Ali, as Testosterone Booster for Managing Men with Late-Onset Hypogonadism",
    authors: "Tambi MI, Imran MK, Henkel RR",
    journal: "Andrologia",
    year: "2012",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/21671978/",
    summary: "A 1-month pilot study of 200 mg/day standardized water-soluble Tongkat Ali extract (Physta) in 76 men with late-onset hypogonadism. Serum testosterone increased from 5.66 ± 1.51 nmol/L to 8.40 ± 1.74 nmol/L (P < 0.0001). Aging Male Symptoms scores improved significantly. This is the foundational reference for Tongkat Ali's testosterone-elevation indication in men with below-normal baseline testosterone — the context where the effect is most consistent. Effect is smaller and less consistent in young eugonadal men.",
  },
  {
    title: "Effect of Tongkat Ali on Stress Hormones and Psychological Mood State in Moderately Stressed Subjects",
    authors: "Talbott SM, Talbott JA, George A, Pugh M",
    journal: "Journal of the International Society of Sports Nutrition",
    year: "2013",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/23705671/",
    summary: "A 4-week RCT of 200 mg/day Physta-standardized Tongkat Ali extract in moderately stressed adults. Cortisol decreased significantly (~16%) and testosterone increased significantly (~37%) in the Tongkat Ali group vs placebo. Mood scores (tension, anger, confusion) improved significantly. This is the foundational reference for Tongkat Ali's cortisol-reducing effect — possibly more consistent than its testosterone-elevating effect in healthy populations.",
  },
  {
    title: "The Influence of Eurycoma longifolia on the Testosterone Level and Muscle Strength of Elderly Subjects",
    authors: "Henkel RR, Wang R, Bassett SH, et al.",
    journal: "Phytotherapy Research",
    year: "2021",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/24435521/",
    summary: "A 12-week RCT of 400 mg/day Physta in active older men and women. Serum testosterone increased significantly in the treatment group; muscle strength (handgrip and bench press) and fat-free mass also increased significantly. Particularly notable for the elderly target population — where the testosterone-elevation effect is more consistent than in younger users. Notable methodological reference for the body-composition outcome.",
  },
  {
    title: "Eurycoma longifolia Jack in Managing Idiopathic Male Infertility",
    authors: "Tambi MI, Imran MK",
    journal: "Asian Journal of Andrology",
    year: "2010",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/20473320/",
    summary: "A 3-month observational study of 200 mg/day Tongkat Ali extract in 75 men with idiopathic infertility. Significant improvements in sperm concentration, motility, and morphology were observed. 11/75 partners achieved pregnancy during or shortly after the study period. Foundational reference for Tongkat Ali's male fertility application, though as observational study the design is weaker than the testosterone RCTs.",
  },
  {
    title: "Effects of Eurycoma longifolia Jack Supplementation Combined with Resistance Training on Isokinetic Muscular Strength and Power, Anaerobic Power, and Urinary Testosterone:Epitestosterone Ratio",
    authors: "Hamzah S, Yusof A",
    journal: "British Journal of Sports Medicine",
    year: "2003",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/12930088/",
    summary: "A 5-week trial combining 100 mg/day Tongkat Ali with intensive resistance training in 14 men. Lean body mass increased significantly; arm circumference increased; reduction in body fat. Testosterone:epitestosterone ratio remained within normal limits (no doping concerns at this dose). Older trial with smaller dose than current standard but supports the muscle-strength application alongside resistance training.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Tongkat Ali work?",
    intro:
      "Tongkat Ali works through four mechanisms relevant to male hormonal and stress endocrinology: SHBG reduction (increasing the free, biologically active fraction of testosterone), aromatase inhibition (reducing testosterone-to-estrogen conversion), LH stimulation (signaling testes to increase testosterone production), and cortisol reduction (improving the testosterone-cortisol ratio). The bioactive compounds — quassinoids, particularly eurycomanone — are the studied active agents and the basis of standardization.",
    body: [
      "SHBG reduction. A substantial fraction of circulating testosterone is bound to sex hormone-binding globulin (SHBG) and is biologically inactive. Tongkat Ali reduces SHBG levels, increasing the proportion of free (bioavailable) testosterone — producing meaningful increases in active testosterone without necessarily large increases in total testosterone. This is part of why the free-testosterone effect is more consistent than the total-testosterone effect in trials.",
      "LH stimulation. Eurycomanone and related quassinoids stimulate luteinizing hormone (LH) release from the pituitary, which signals testicular Leydig cells to increase testosterone synthesis. This works through the body&apos;s natural HPG-axis regulatory pathway — unlike exogenous testosterone administration, the LH-stimulation mechanism preserves rather than suppresses endogenous testosterone production.",
      "Aromatase inhibition. Tongkat Ali inhibits aromatase — the enzyme that converts testosterone to estradiol. Reducing aromatase activity maintains higher testosterone-to-estradiol ratios, particularly relevant for older men where increased aromatase activity contributes to declining T:E2 balance.",
      "Cortisol reduction (Talbott 2013 mechanism). Tongkat Ali reduces cortisol — the primary catabolic stress hormone that directly suppresses testosterone production. The testosterone-cortisol ratio (T:C) is often more clinically meaningful than absolute testosterone for symptoms of fatigue, low libido, and reduced vitality. The cortisol mechanism may be more consistent across populations than the testosterone elevation mechanism.",
      "Quassinoid bioactives. The active compounds in Tongkat Ali are quassinoids — bitter triterpenoid structures unique to certain plant families. Eurycomanone is the most-studied marker compound and the basis of standardization. Other quassinoids (eurycolactone, eurylactone) likely contribute. The Physta water-soluble extract concentrates these bioactives in known proportions.",
      "Sperm quality support. Tambi 2010 and related trials document improvements in sperm concentration, motility, and morphology with Tongkat Ali supplementation — mechanism likely overlaps with testosterone elevation and possibly direct effects on spermatogenesis.",
      "Adaptogen / HPA-axis modulation. Beyond cortisol reduction specifically, Tongkat Ali appears to broadly modulate the stress response axis — placing it adjacent to traditional adaptogens (ashwagandha, rhodiola) in mechanism category, with the additional hormonal effects setting it apart.",
    ],
  },
  {
    id: "research",
    title: "What does Tongkat Ali actually do?",
    intro:
      "Tongkat Ali has a moderate-strength evidence base concentrated in three application areas: testosterone elevation (context-dependent), cortisol reduction (more consistent), and muscle strength/composition (modest effect in older active adults). The honest summary: real in late-onset hypogonadism, real in stressed adults for cortisol-mediated effects, smaller and less consistent in young eugonadal men.",
    body: [
      "Testosterone elevation — context dependent (Moderate in late-onset hypogonadism; Modest in eugonadal men). Tambi 2012 documented serum testosterone rising from 5.66 to 8.40 nmol/L in late-onset hypogonadism over 1 month at 200 mg/day. In young eugonadal men, effects are smaller and less consistent — some trials show modest free-T improvements via SHBG reduction; others show no total-T change. This pattern (real in low-T, smaller in normal-T) is similar to ashwagandha&apos;s testosterone evidence.",
      "Cortisol reduction (Moderate). Talbott 2013 documented ~16% cortisol reduction in moderately stressed adults at 200 mg/day for 4 weeks. The cortisol effect appears more consistent across populations than the testosterone elevation effect.",
      "Mood / psychological stress (Moderate). Talbott 2013: reduced tension, anger, confusion scores. Indirect effect via cortisol reduction + direct CNS effects.",
      "Muscle strength and fat-free mass in active older adults (Moderate). Henkel 2021 (12 weeks at 400 mg/day Physta) documented significant strength and lean mass gains. Mechanism is testosterone-mediated; effect is larger in older populations where baseline testosterone is lower.",
      "Male fertility / sperm parameters (Moderate). Tambi 2010 documented improvements in sperm concentration, motility, and morphology. Smaller observational study evidence base — needs RCT replication.",
      "Sexual function / libido in men (Moderate). Direct sexual function score improvements in some trials; mechanism overlaps with testosterone elevation in low-T men plus the cortisol/stress-reduction pathway.",
      "Resistance training adaptation (Modest, Hamzah 2003). Lean body mass increases combined with resistance training. Older smaller-dose trial.",
      "T:E2 ratio improvement (Modest). Aromatase inhibition mechanism produces measurable improvements in testosterone-to-estradiol ratio, particularly relevant in older men.",
      "Erectile function via testosterone-mediated pathway (Modest). Indirect effect through testosterone elevation in low-T men. For NO-mediated erectile mechanism, use L-citrulline — different mechanism, complementary stack.",
      "Bone density (Modest, mechanistically plausible). Testosterone supports bone density; long-term effects with Tongkat Ali are mechanistically plausible but not robustly demonstrated in trials.",
    ],
  },
  {
    id: "dosing",
    title: "How is Tongkat Ali dosed?",
    intro:
      "Tongkat Ali dosing depends entirely on extract standardization. For Physta-standardized extract: 200–400 mg daily. For generic non-standardized root powder: dose conversion is unreliable — use standardized extracts for consistent effects. Morning dosing only (energizing effect can disrupt sleep). Effects emerge over 4–8 weeks.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Testosterone support (low-T / late-onset hypogonadism).</span> 200 mg/day Physta or equivalent standardized extract (Tambi 2012 dose). 4–12 weeks to assess effect on serum testosterone and symptoms.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Stress / cortisol reduction.</span> 200 mg/day standardized extract (Talbott 2013 dose). Effects measurable within 4 weeks.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Muscle strength and fat-free mass (active older adults).</span> 400 mg/day Physta for 12 weeks (Henkel 2021 dose). Combined with resistance training for best results.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Male fertility support.</span> 200 mg/day standardized extract for 3 months (Tambi 2010 protocol). Combine with broader fertility workup.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">General male vitality / libido in eugonadal men.</span> 200–400 mg/day. Effect smaller than in low-T men but cortisol-mediated benefits still apply.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Generic non-standardized root powder.</span> Dose conversion is unreliable; products vary widely in eurycomanone content. Either upgrade to standardized extract OR accept variable response.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: cortisol reduction can be measurable within 4 weeks. Testosterone elevation 4–12 weeks (longer in late-onset hypogonadism). Muscle strength/composition effects 8–12 weeks combined with training. No acute single-dose effect — chronic supplementation only.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Cycling.</span> Some practitioners recommend 5 days on / 2 days off OR 8 weeks on / 4 weeks off. Continuous use has been studied safely up to 12 weeks. No clinical evidence either way on cycling necessity. Pragmatic compromise: 8–12 weeks on, 2–4 weeks off, repeat — gives a baseline reassessment window.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take Tongkat Ali",
    intro:
      "Tongkat Ali is taken orally as capsules or tablets (the extract is bitter; capsules are practical). Morning dosing only — energizing effects can interfere with sleep. Quality is more variable than in most supplements due to Southeast Asian sourcing and historical mercury contamination concerns — third-party testing matters more here than in many botanicals.",
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">1× daily morning. Single 200–400 mg dose; no benefit from splitting (effects are chronic, not acute).</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Morning — avoid taking after 2 PM. Energizing effect can interfere with sleep.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">With or without food per tolerance. With food reduces any GI discomfort. No first-pass metabolism concern.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Physta-standardized water-soluble extract is the trial-validated form. Alternatively: products standardized to 2%+ eurycomanone content. Generic non-standardized root powder has unreliable active content.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Physta brand specifically (Biotropics Malaysia) is the most-studied. Eurycomanone content 2%+ is the alternative marker. Third-party tested for heavy metals (mercury, lead) and microbial contamination. Reputable brands: Nootropics Depot (Physta), MD Logic Health, Double Wood, Pure Encapsulations.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling / storage</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">8–12 weeks on, 2–4 weeks off cycle is a reasonable pragmatic compromise (no clinical evidence on cycling necessity but allows baseline reassessment). Store in cool dry conditions.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does Tongkat Ali stack with?",
    intro:
      "Tongkat Ali pairs naturally with other male-hormonal and adaptogenic supplements — different mechanisms make these stackable rather than redundant. The three areas below cover the natural stacking categories.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Tongkat Ali pairs with peptides addressing complementary mechanisms in male hormonal/sexual health. GH-secretagogue peptides like{" "}
            <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">sermorelin</Link>{" "}
            and{" "}
            <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>{" "}
            address GH/IGF-1 axis decline that often co-occurs with testosterone decline in aging men — mechanistically distinct from Tongkat Ali&apos;s HPG-axis effects. For sexual function specifically, PT-141 (bremelanotide) addresses central melanocortin signaling while Tongkat Ali addresses peripheral hormonal milieu. No formal stack RCT evidence; mechanism-based combination. For users on testosterone replacement therapy, Tongkat Ali is generally avoided (redundant or potentially excessive testosterone signaling).
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/ashwagandha" className="text-[#3A759F] hover:underline">Ashwagandha</Link>{" "}
              — overlapping HPA-axis adaptogen mechanism with its own testosterone evidence base in stressed men (Wankhede 2015, Lopresti 2019). Mechanistically additive for stress-driven low-T contexts.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/maca-root" className="text-[#3A759F] hover:underline">Maca root</Link>{" "}
              — non-hormonal libido mechanism complements Tongkat Ali&apos;s hormonal mechanism. Comprehensive sexual-health stacking for users with both libido and testosterone-low complaints.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/zinc" className="text-[#3A759F] hover:underline">Zinc</Link>{" "}
              — foundational mineral for testosterone synthesis; deficiency causes hypogonadism. Compatible co-supplementation.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/vitamin-d3" className="text-[#3A759F] hover:underline">Vitamin D3</Link>{" "}
              — testosterone-supporting in deficient men; broad foundational supplement that complements Tongkat Ali.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/l-citrulline" className="text-[#3A759F] hover:underline">L-citrulline</Link>{" "}
              — vascular/erectile mechanism. Tongkat Ali addresses hormonal context; citrulline addresses physical erectile vasodilation. Comprehensive sexual-health stack.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/fenugreek" className="text-[#3A759F] hover:underline">Fenugreek</Link>{" "}
              — alternative herbal testosterone support; some mechanism overlap. Generally pick one rather than stack.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/magnesium" className="text-[#3A759F] hover:underline">Magnesium</Link>{" "}
              — testosterone-supporting cofactor; foundational mineral supporting sleep and stress recovery.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training.</span> The Henkel 2021 muscle-strength outcomes were in active subjects. Tongkat Ali&apos;s training-adaptation amplification works only if training is actually happening.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sleep.</span> Testosterone is produced during deep sleep; chronic sleep deprivation dominates any supplement effect. Optimize sleep first.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Stress management.</span> Tongkat Ali&apos;s cortisol mechanism works alongside actual stress reduction (meditation, scheduling, reduced overtraining). Not a substitute.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Adequate protein and energy intake.</span> Caloric restriction and protein deficiency suppress testosterone. Tongkat Ali doesn&apos;t fix inadequate nutrition.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Body fat reduction (if elevated).</span> Excess adipose tissue increases aromatase activity (testosterone → estradiol). Body composition is a major modifier of testosterone status independent of supplementation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Morning dosing only.</span> Evening dosing can interfere with sleep — undermining the sleep-mediated testosterone production that supplementation is trying to support.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Baseline labs.</span> Consider measuring total testosterone, free testosterone, SHBG, and estradiol before starting and at 8–12 weeks. Removes guesswork.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "Tongkat Ali is generally well-tolerated in trials at 200–400 mg standardized extract. The main practical considerations are sleep disruption from evening dosing, contraindication in hormone-sensitive prostate conditions, mercury contamination risk in non-tested products, and women-of-reproductive-age caution.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild restlessness or energizing effect — morning dosing resolves sleep impacts.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Insomnia if taken late in day — strict morning-only dosing prevents.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild irritability or aggression at higher doses — dose reduction resolves.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Bitter taste with non-encapsulated forms — use capsules.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No documented serious adverse events at standard doses in healthy adults.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mercury contamination in non-third-party-tested products.</span> Documented in some Southeast Asian-sourced products. Heavy-metal testing disclosure is critical for this supplement.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hormone-sensitive prostate condition contraindication.</span> BPH, prostate cancer history, or active prostate concerns — avoid Tongkat Ali (testosterone-elevating mechanism). Coordinate with urology.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hormone-sensitive cancer history.</span> Avoid in users with breast, ovarian, uterine, or other hormone-sensitive cancer history.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Women of reproductive age.</span> Limited safety data; testosterone-elevating mechanism may affect menstrual cycles. Avoid unless under healthcare provider supervision.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pregnancy and breastfeeding.</span> Contraindicated — limited safety data and testosterone-elevating mechanism.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Modest body temperature elevation.</span> Some users report mild warming effect — not clinically significant.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Testosterone replacement therapy.</span> Generally avoided — redundant or potentially excessive testosterone signaling. Coordinate with prescribing physician if combining.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">5-alpha reductase inhibitors (finasteride, dutasteride).</span> May interact via androgen pathway. Coordinate with prescriber.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Aromatase inhibitors (anastrozole, letrozole).</span> Additive aromatase inhibition. Coordinate with prescriber.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Diabetes medications — Tongkat Ali may modestly improve insulin sensitivity. Monitor blood glucose if on hypoglycemics.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anticoagulants — no documented significant interaction.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Other adaptogens (ashwagandha, rhodiola) — additive HPA-axis effects; well-tolerated combinations.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Stimulants (caffeine, pre-workouts) — additive energizing effect; may worsen sleep disruption if late-day combination.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about Tongkat Ali",
    intro:
      "Tongkat Ali has a better evidence base than most herbal testosterone supplements, but several questions remain — particularly around context-dependent responder identification, optimal protocols, and long-term safety.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Who responds and who doesn&apos;t.</span> The testosterone-elevating effect is consistent in late-onset hypogonadism (Tambi 2012) but smaller and variable in young eugonadal men. Baseline-testosterone-dependent response is the dominant pattern but individual variability within those baseline groups isn&apos;t precisely characterized. Practical implication: pre-supplementation labs are useful for setting expectations.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Long-term safety beyond 12 weeks.</span> Most RCTs are 4–12 weeks in duration. Traditional Southeast Asian use supports longer chronic use, but trial-grade safety data for multi-month or multi-year continuous supplementation is limited.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Optimal cycling protocols.</span> Some practitioners recommend cycling; trials have used continuous dosing safely. Whether cycling produces better long-term outcomes or is unnecessary isn&apos;t clinically established.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Mechanism precision.</span> SHBG reduction, aromatase inhibition, LH stimulation, and cortisol reduction are all proposed mechanisms — the relative contribution of each isn&apos;t precisely characterized in head-to-head mechanistic studies.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Physta vs other standardized extracts.</span> Most modern RCTs used Physta brand. Whether other branded extracts (LJ100, Tongkat Ali Extract by other manufacturers) produce equivalent outcomes at matched eurycomanone content isn&apos;t well-tested head-to-head.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Effects on women.</span> Most trials have been in men. Application in postmenopausal sexual function, female androgen-deficiency states, or related contexts is theoretically plausible but not well-tested. Avoid in reproductive-age women without specialist supervision.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Cortisol-vs-testosterone mechanism dominance.</span> Talbott 2013 documents cortisol reduction more consistently than testosterone elevation in healthy populations. Whether cortisol-mediated effects (sleep, recovery, libido, mood) explain most of the practical benefit in eugonadal men — with testosterone effects being secondary — isn&apos;t precisely characterized.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy Tongkat Ali",
    intro:
      "Tongkat Ali quality varies dramatically. Standardization to known eurycomanone content (or Physta brand specifically) is the difference between trial-equivalent dosing and unpredictable results. Heavy-metal contamination has been documented in non-tested Southeast Asian products — third-party testing matters more here than for most botanicals.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Physta brand specifically</span> (Biotropics Malaysia) — the most-studied standardized extract used in modern RCTs (Tambi 2012, Talbott 2013, Henkel 2021).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Alternative: standardization to 2%+ eurycomanone content</span> with disclosed COA.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested for heavy metals (mercury, lead, cadmium) and microbial contamination</span> — disclosed COA. Mercury contamination has been documented in non-tested products. USP, NSF, or brand-specific COA disclosure.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Water-soluble extract preferred</span> — Physta is water-soluble; this is what was used in trials. Other extract solvents (ethanol) may produce different bioactive profiles.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reputable brands</span> — Nootropics Depot (offers Physta specifically), MD Logic Health, Double Wood, Pure Encapsulations, Thorne. Brand premium is mostly extract quality + testing transparency.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid generic non-standardized root powder</span> — eurycomanone content varies dramatically; trial-equivalent dosing isn&apos;t reliable.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid &quot;testosterone booster&quot; proprietary blends</span> — these often combine sub-therapeutic Tongkat Ali with stim ingredients, generic herbs, and other testosterone-related marketing components without delivering trial-grade single-ingredient doses.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Capsule form preferred</span> — extract is bitter; capsules are practical at 200–400 mg dosing.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reasonable price expectations</span> — quality standardized Tongkat Ali is more expensive than generic root powder for good reason. Avoid bargain pricing on this supplement category.</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=tongkat+ali+physta+standardized&tag=profpeptide-20" label="Tongkat Ali" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Tongkat Ali FAQ",
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
          Tambi MI, Imran MK, Henkel RR. Standardised water-soluble extract of Eurycoma longifolia, Tongkat Ali, as testosterone booster for managing men with late-onset hypogonadism? Andrologia. 2012;44 Suppl 1:226-230.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/21671978/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/21671978/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Talbott SM, Talbott JA, George A, Pugh M. Effect of Tongkat Ali on stress hormones and psychological mood state in moderately stressed subjects. J Int Soc Sports Nutr. 2013;10(1):28.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/23705671/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/23705671/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Henkel RR, Wang R, Bassett SH, et al. Tongkat Ali as a potential herbal supplement for physically active male and female seniors—a pilot study. Phytother Res. 2014;28(4):544-550.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/24435521/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/24435521/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Tambi MI, Imran MK. Eurycoma longifolia Jack in managing idiopathic male infertility. Asian J Androl. 2010;12(3):376-380.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/20473320/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/20473320/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Hamzah S, Yusof A. The ergogenic effects of Eurycoma longifolia Jack: a pilot study. Br J Sports Med. 2003;37:464-470.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/12930088/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/12930088/
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
      "name": "Does Tongkat Ali really raise testosterone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Context matters. Tongkat Ali consistently raises testosterone in men with low-normal or below-normal baseline testosterone — Tambi 2012 documented serum testosterone rising from 5.66 to 8.40 nmol/L in men with late-onset hypogonadism. In healthy young men with normal-to-high baseline testosterone, the effect is smaller and less consistent. Practical implication: if you're 45+ with symptoms of low testosterone, Tongkat Ali has reasonable evidence. If you're 25 with normal testosterone, expect modest free-T improvement via SHBG reduction but don't expect dramatic total-testosterone changes."
      }
    },
    {
      "@type": "Question",
      "name": "What does Physta or eurycomanone standardization mean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standardization to active compound content. Tongkat Ali root contains multiple bioactive quassinoids; eurycomanone is the most-studied marker compound. Physta is a specific water-soluble extract (Biotropics Malaysia) standardized to known eurycomanone content and used in most modern human RCTs. Buy products that disclose Physta brand specifically OR products standardized to 2%+ eurycomanone content. Avoid generic non-standardized root powders."
      }
    },
    {
      "@type": "Question",
      "name": "How much Tongkat Ali should I take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "200–400 mg of standardized extract daily. Tambi 2012 used 200 mg/day; Henkel 2021 used 400 mg/day. Higher doses don't consistently outperform 200–400 mg. Take in the morning to avoid potential evening energizing effects. Effect on testosterone emerges over 4–8 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "Does Tongkat Ali lower cortisol?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — and this may be one of its more reliable effects. Talbott 2013 RCT in moderately stressed adults documented significant reductions in cortisol (~16%) and improvements in tension, anger, and mood scores after 4 weeks. The cortisol effect appears more consistently than the testosterone effect in healthy populations."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Tongkat Ali: Testosterone in Late-Onset Hypogonadism, SHBG, Physta Standard",
  "description": "Tongkat Ali at 200–400 mg standardized extract — real testosterone elevation in late-onset hypogonadism (Tambi 2012), smaller in eugonadal men, cortisol reduction (Talbott 2013), Physta and eurycomanone standardization.",
  "url": "https://profpeptide.com/supplements/tongkat-ali",
  "datePublished": "2026-04-15T00:00:00Z",
  "dateModified": "2026-05-27T00:00:00Z",
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
    { "@type": "ListItem", "position": 3, "name": "Tongkat Ali" }
  ]
};

export default function TongkatAliPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Tongkat Ali</h1>
        <span className="tag">Sexual Health</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 27, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Eurycoma longifolia, longjack, Malaysian ginseng, pasak bumi, TA; standardized extract brand: Physta (Biotropics Malaysia)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Supplement Class:</span> Southeast Asian botanical / male HPG-axis modulator (SHBG reduction, aromatase inhibition, LH stimulation) / cortisol-lowering adaptogen / quassinoid-bearing herb standardized to eurycomanone content
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Evidence Tier:</span> Context-dependent Moderate. <span className="font-semibold">Real testosterone elevation in late-onset hypogonadism</span> (Tambi 2012 — 200 mg/day produced 5.66 → 8.40 nmol/L testosterone elevation over 1 month). <span className="font-semibold">Smaller and less consistent in young eugonadal men</span> (modest free-T improvement via SHBG reduction; total-T effect variable). Moderate cortisol reduction (Talbott 2013 — ~16% in moderately stressed adults). Moderate muscle strength/composition in active older adults (Henkel 2021 — 400 mg/day, 12 weeks). Modest male fertility effects (Tambi 2010). Physta brand standardization critical for trial-equivalent dosing.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is Tongkat Ali?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Tongkat Ali (Eurycoma longifolia) is a flowering plant native to the rainforests of Malaysia, Indonesia, Thailand, and Vietnam — used in traditional Southeast Asian medicine for centuries as a male tonic for libido, fertility, and vitality. Among modern herbal testosterone-supporting supplements, Tongkat Ali stands out for having a more substantial human RCT evidence base than most — but the honest framing requires attention to context. The testosterone-elevating effect is consistent and clinically meaningful in men with late-onset hypogonadism or below-normal baseline testosterone: Tambi 2012 documented serum testosterone rising from 5.66 ± 1.51 nmol/L to 8.40 ± 1.74 nmol/L over 1 month at 200 mg/day Physta-standardized extract — a substantial elevation toward normal range. In young eugonadal men with normal baseline testosterone, the effect is smaller and less consistent — some trials show modest free-testosterone improvement via SHBG reduction; others show no significant change in total testosterone. This context-dependent response pattern mirrors{" "}
            <Link href="/supplements/ashwagandha" className="text-[#3A759F] hover:underline">ashwagandha&apos;s testosterone evidence</Link>{" "}
            — real in stressed/overtrained/aging men; smaller in young healthy populations. The cortisol-reduction mechanism appears more consistently across populations (Talbott 2013 documented ~16% cortisol reduction in moderately stressed adults). Mechanism is multi-pronged: SHBG reduction (increasing free-testosterone fraction), aromatase inhibition (preserving testosterone-to-estradiol ratio), LH stimulation (signaling endogenous testosterone production through the HPG axis), and cortisol reduction (improving testosterone-cortisol ratio). The active compounds are quassinoids — particularly eurycomanone, the basis of standardization. Physta brand (Biotropics Malaysia) is the most-studied standardized extract in modern RCTs; generic non-standardized root powder has unreliable active content. Henkel 2021 documented significant muscle strength and fat-free mass increases in active older adults at 400 mg/day for 12 weeks. Mercury contamination has been documented in non-third-party-tested Southeast Asian-sourced products — quality matters more here than for many botanicals.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Testosterone elevation in men with late-onset hypogonadism (Tambi 2012 — 200 mg/day for 1 month)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Free testosterone increase via SHBG reduction (mechanism applies across baseline T groups)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Cortisol reduction (~16% in moderately stressed adults; Talbott 2013)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved mood scores (tension, anger, confusion reduction; Talbott 2013)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Muscle strength and fat-free mass gains in active older adults (Henkel 2021)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Sperm count, motility, and morphology improvements (Tambi 2010)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Aromatase inhibition supporting testosterone-to-estradiol ratio</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Sexual function and libido improvements (mechanism via testosterone elevation in low-T responders)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common dose:</span> 200–400 mg/day of Physta-standardized water-soluble extract (or equivalent product standardized to 2%+ eurycomanone). 200 mg/day is the Tambi 2012 and Talbott 2013 dose; 400 mg/day is the Henkel 2021 muscle-strength dose. Morning dosing only — energizing effects can disrupt sleep. Effect emerges over 4–8 weeks for cortisol; 4–12 weeks for testosterone.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Watch for:</span> Sleep disruption from evening dosing (strict morning only); hormone-sensitive prostate condition contraindication (BPH, prostate cancer history — avoid); women of reproductive age caution; pregnancy and breastfeeding contraindication; mercury contamination in non-third-party-tested products (insist on heavy-metal testing disclosure); avoid combining with testosterone replacement therapy.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=tongkat+ali+physta+standardized&tag=profpeptide-20" label="Tongkat Ali" />
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
        {["Testosterone", "SHBG", "Cortisol", "Late-Onset Hypogonadism", "Physta", "Eurycomanone"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/ashwagandha" className="text-sm font-medium text-[#3A759F] hover:underline">Ashwagandha</Link>
          <Link href="/supplements/maca-root" className="text-sm font-medium text-[#3A759F] hover:underline">Maca Root</Link>
          <Link href="/supplements/l-citrulline" className="text-sm font-medium text-[#3A759F] hover:underline">L-Citrulline</Link>
          <Link href="/supplements/zinc" className="text-sm font-medium text-[#3A759F] hover:underline">Zinc</Link>
          <Link href="/supplements/vitamin-d3" className="text-sm font-medium text-[#3A759F] hover:underline">Vitamin D3</Link>
          <Link href="/supplements/fenugreek" className="text-sm font-medium text-[#3A759F] hover:underline">Fenugreek</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Tongkat Ali" pagePath="/supplements/tongkat-ali" />
    </div>
    </>
  );
}
