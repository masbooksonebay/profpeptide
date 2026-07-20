import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/melatonin",
  title: "Melatonin: Dose-Response Curve, Long-Term Safety Questions",
  description:
    "Melatonin dosing (the 4 mg plateau), the AHA 2025 long-term safety question, and how it pairs with sleep peptides like DSIP and the apigenin botanical stack.",
});

const faqs = [
  {
    q: "What's the best dose of melatonin to start with?",
    a: "0.5–3 mg taken 30–60 minutes before bed, lower is better. The 2024 Journal of Pineal Research dose-response meta-analysis mapped the sleep-effect curve and found it plateaus around 4 mg/day — going higher produces no additional benefit and increases next-day grogginess and vivid dreams. Most retail products are dosed at 3, 5, or 10 mg — far above the curve plateau and 10–30× higher than your body's natural peak nighttime production (~0.3 mg equivalent). Start at 0.3–1 mg; escalate to 3 mg only if needed. The 5–10 mg supermarket doses are marketing optimization, not biology.",
  },
  {
    q: "Is melatonin actually safe for nightly long-term use?",
    a: "Short-term use (up to a few months) at low doses appears safe with no concerning signal across the trial base. Long-term nightly use — particularly stretching beyond 12 months — has been less studied, and a November 2025 American Heart Association preliminary observational analysis of >130,000 adults raised concerning signals about elevated heart failure hospitalization and all-cause mortality in long-term users vs non-users. This is observational data, not peer-reviewed RCT evidence, and cannot prove causation — but it does mean the long-term safety picture is genuinely incomplete in a way earlier research hadn't surfaced. For nightly use beyond a few months, talk to your doctor and consider whether you actually need it nightly or can use it situationally for circadian disruptions.",
  },
  {
    q: "Does melatonin cause grogginess in the morning?",
    a: "At low doses (0.5–3 mg), most users don't experience next-day grogginess. Higher doses (5–10 mg) and extended-release formulations are significantly more likely to cause morning fogginess, vivid dreams, and that 'hung over' feeling. If you wake up groggy, lower your dose first; switch from extended-release to immediate-release second. Slow CYP1A2 metabolizers (about half the population, same enzyme that metabolizes caffeine) may experience longer-lasting effects and benefit from even lower doses (0.1–0.3 mg).",
  },
  {
    q: "Is melatonin a sedative, or just a circadian signal?",
    a: "More a circadian signal than a sedative. Melatonin works through MT1 and MT2 receptors to communicate 'it's nighttime' to your brain and body — it doesn't knock you out the way benzodiazepines or Z-drugs do. This is why it's most useful for circadian rhythm disruption (jet lag, shift work, delayed sleep phase disorder) and less useful for forcing sleep when your body isn't ready. Effect sizes in general insomnia trials are modest (~7 minutes faster sleep onset, ~8 minutes additional total sleep time per 2013 meta-analysis) — meaningful but not dramatic. For severe insomnia, melatonin is rarely sufficient as monotherapy.",
  },
  {
    q: "Can I stack melatonin with DSIP or other sleep peptides?",
    a: (
      <>
        Yes — and the stack is mechanistically natural for users layering sleep interventions across different mechanisms.{" "}
        <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">DSIP</Link>{" "}
        (delta sleep-inducing peptide) operates directly on slow-wave sleep architecture — peptide-level intervention on sleep depth at a different layer than melatonin&apos;s circadian signaling.{" "}
        <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>{" "}
        (a tuftsin analog) provides anxiolytic effects via GABA modulation — useful when sleep is blocked by anxious arousal rather than circadian timing. The melatonin + DSIP + Selank stack covers three different sleep mechanism layers: circadian signaling (melatonin), slow-wave architecture (DSIP), and arousal/anxiety modulation (Selank). Add{" "}
        <Link href="/supplements/apigenin" className="text-[#3A759F] hover:underline">apigenin</Link>{" "}
        (GABA-A modulator) for a botanical fourth layer. Mechanistically complementary, no known negative interactions. Particularly useful for travel, shift work, or chronic sleep disruption where single-mechanism interventions underperform.
      </>
    ),
  },
  {
    q: "Can children take melatonin?",
    a: "Under medical supervision for specific clinical indications — yes. For routine self-administration in healthy children — no. Melatonin is a hormone, and there are open questions about whether chronic supplementation during development affects puberty timing, growth hormone axis, or other hormonal pathways. Most pediatric guidelines reserve melatonin for children with neurodevelopmental sleep disturbances (autism spectrum disorder, ADHD-related sleep issues), and only under pediatrician guidance. The recent explosion in retail melatonin gummies marketed for kids is poorly aligned with the available evidence base. Talk to your pediatrician before starting.",
  },
  {
    q: "Why are EU and UK melatonin doses different from US?",
    a: "Regulatory framing differs significantly. In the US, melatonin is sold as a dietary supplement (not FDA-regulated as a drug), available over-the-counter at any dose. In the EU and UK, melatonin is regulated as a prescription medication (under brand names like Circadin), typically at 2 mg extended-release for primary insomnia in adults over 55. The European regulatory bodies took a more conservative position on melatonin's hormone status; the US treats it as a supplement. Practical effect: US users have access to a wider dose range with less quality control; EU/UK users get tighter pharmaceutical-grade dosing but need a prescription.",
  },
  {
    q: "How long until melatonin works, and how long does the effect last?",
    a: "Peak plasma concentration in 30–60 minutes after oral dose. The half-life of immediate-release melatonin is 30–50 minutes — short enough that effects are largely gone by morning. Extended-release formulations (Circadin and similar) extend the effect over 6–8 hours but are more likely to cause morning grogginess. For sleep onset (the most common use case): take 30–60 minutes before target bedtime. For circadian phase-shifting protocols (jet lag, shift work): timing varies based on the specific shift direction. Don't take melatonin in the middle of the night — the circadian signaling can backfire.",
  },
];

const studies = [
  {
    title: "Meta-Analysis: Melatonin for the Treatment of Primary Sleep Disorders",
    authors: "Ferracioli-Oda E, Qawasmi A, Bloch MH",
    journal: "PLOS ONE",
    year: "2013",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/23691095/",
    summary: "A meta-analysis of 19 RCTs (n=1,683) of melatonin in primary sleep disorders. Melatonin reduced sleep onset latency by ~7 minutes (95% CI: -8.0 to -6.0), increased total sleep time by ~8 minutes (95% CI: 5.0 to 12.0), and moderately improved overall sleep quality versus placebo. Effect sizes are modest but consistent across the trial base — the cleanest quantitative summary of melatonin's general-insomnia effects and the reference document for the 'modest but reliable' framing.",
  },
  {
    title: "Effects of Melatonin Supplementation on Sleep Quality in Adults: A Dose-Response Meta-Analysis of Randomized Controlled Trials",
    authors: "Fatemeh G, Sajjad M, Niloufar R, et al.",
    journal: "Journal of Pineal Research",
    year: "2024",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/38323423/",
    summary: "A dose-response meta-analysis mapping the relationship between melatonin dose and sleep-effect magnitude. Sleep-promoting effect peaks around 4 mg/day; doses below 2 mg produce smaller effects, and doses above 4 mg provide no additional benefit. Plus melatonin improved PSQI score by -1.24 (weighted mean difference). The 2024 dose-response meta is the cleanest evidence supporting the 'lower-dose strategy' that most evidence-based clinicians recommend over the 5–10 mg retail standard.",
  },
  {
    title: "Effects of Melatonin on Sleep Quality of Shift Workers: A Systematic Review and Meta-Analysis",
    authors: "Liira J, Verbeek JH, Costa G, et al.",
    journal: "Cochrane Database of Systematic Reviews",
    year: "2014",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/25113164/",
    summary: "A Cochrane systematic review of melatonin in shift workers. Melatonin produced modest improvements in daytime sleep duration (~24 minutes) and night sleep after shifts (~17 minutes) versus placebo. Effects on shift-work-related sleep dysfunction were positive but small. Useful as the cleanest evidence summary for the shift-work use case where melatonin's circadian-phase-shifting effect is most relevant.",
  },
  {
    title: "Melatonin for Jet Lag: A Systematic Review",
    authors: "Herxheimer A, Petrie KJ",
    journal: "Cochrane Database of Systematic Reviews",
    year: "2002",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/12076414/",
    summary: "A Cochrane systematic review of melatonin for jet lag. Melatonin (0.5–5 mg) at destination bedtime significantly reduced jet lag symptoms across 10 trials, with effects most pronounced for eastward travel and for crossing 5+ time zones. The most-cited jet-lag intervention evidence — and the clearest demonstration of melatonin's circadian-phase-shifting use case where general-insomnia effect sizes don't apply.",
  },
  {
    title: "Long-Term Use of Melatonin and Adverse Cardiovascular Outcomes (American Heart Association Scientific Sessions Preliminary Abstract)",
    authors: "AHA Scientific Sessions 2025 preliminary data",
    journal: "AHA Scientific Sessions Abstract",
    year: "2025",
    access: "Open Access",
    url: "https://newsroom.heart.org/news/long-term-melatonin-use-may-be-linked-to-heart-failure-risk",
    summary: "An observational analysis of >130,000 adults with insomnia, comparing 12+ month melatonin users to non-users in electronic health records. Long-term melatonin users had ~90% higher rates of heart failure hospitalization and elevated all-cause mortality versus matched non-users. The analysis is observational (cannot prove causation), confounded by underlying insomnia severity in the user group, and has not been peer-reviewed at the time of this writing. However, it raises previously-absent questions about chronic nightly melatonin use that existing safety data didn't surface. Treat with appropriate uncertainty; consider intermittent rather than nightly use for chronic protocols pending more rigorous evidence.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does melatonin work?",
    intro:
      "Melatonin works as a circadian signal rather than a sedative. Your pineal gland produces it in response to darkness, peaking during night and falling toward morning — telling your body 'it's nighttime.' Supplemental melatonin binds the same MT1 and MT2 receptors as endogenous melatonin, primarily in the suprachiasmatic nucleus (the master circadian clock), pre-positioning the circadian phase for sleep onset.",
    body: [
      "MT1 and MT2 receptor binding. Melatonin binds MT1 receptors (involved in acute sleep promotion) and MT2 receptors (involved in circadian phase-shifting) in the suprachiasmatic nucleus and other brain regions. Both endogenous and supplemental melatonin work through these same receptors.",
      "Circadian phase-shifting (not sedation). The most consistent effect of melatonin is shifting circadian timing — moving your internal clock earlier (advance phase shift) or later (delay phase shift) depending on when in the cycle you take it. This is mechanistically distinct from sedation and explains why melatonin works best for jet lag, shift work, and delayed sleep phase disorder rather than for forcing sleep against an alert circadian state.",
      "Body-temperature drop facilitation. Melatonin promotes peripheral vasodilation and core-body-temperature drop — the same temperature-cooling cascade that signals sleep onset. This is part of why timing matters: melatonin works best in alignment with the body&apos;s natural pre-sleep temperature curve.",
      "Modest sleep-onset effect (Ferracioli-Oda 2013). The 2013 meta-analysis quantified the average effect: ~7 minutes faster sleep onset, ~8 minutes additional total sleep time. Effect sizes are modest in absolute terms; consistent across the trial base.",
      "Dose-response plateaus at ~4 mg (Fatemeh 2024). The 2024 dose-response meta-analysis mapped the sleep-promoting effect curve and found it plateaus around 4 mg/day. Higher doses produce no additional sleep benefit and increase next-day grogginess and vivid dreams.",
      "Antioxidant secondary effect. Melatonin is also a free-radical scavenger with antioxidant activity in cellular compartments — secondary mechanism that contributes to its emerging applications in oxidative-stress-related conditions but doesn&apos;t drive the sleep-onset effect.",
      "Pineal-axis cross-talk with other hormones. Melatonin interacts with gonadotropin signaling and growth hormone axis — relevant for the open questions about pediatric long-term use and the puberty-timing concerns flagged in pediatric guidelines.",
    ],
  },
  {
    id: "research",
    title: "What does melatonin actually do?",
    intro:
      "Melatonin has strong evidence for circadian-disruption use cases (jet lag, shift work, delayed sleep phase) and modest evidence for general insomnia. Effect sizes are reliable but small — not a sedative-class intervention. Long-term safety beyond 6–12 months has gotten less attention until the November 2025 AHA preliminary analysis raised concerning signals.",
    body: [
      "Jet lag (Strong). Herxheimer 2002 Cochrane review (10 RCTs) found melatonin (0.5–5 mg at destination bedtime) significantly reduced jet lag symptoms, particularly for eastward travel and crossing 5+ time zones. The clearest use case for melatonin&apos;s circadian-phase-shifting mechanism.",
      "Primary insomnia (Moderate). Ferracioli-Oda 2013 meta-analysis (19 RCTs, n=1,683) documented ~7 min faster sleep onset, ~8 min additional total sleep time. Modest but reliable. Fatemeh 2024 dose-response meta confirmed the 4 mg plateau.",
      "Shift work sleep dysfunction (Moderate). Liira 2014 Cochrane review found modest improvements in daytime sleep duration and night sleep after shifts.",
      "Delayed sleep phase disorder (Strong). Melatonin is first-line non-prescription intervention; particularly effective at low doses (0.3–1 mg) taken several hours before desired bedtime to shift circadian phase earlier.",
      "Older-adult insomnia (Moderate). Endogenous melatonin production declines with age; supplementation is more effective in older adults than in young healthy adults. Particularly relevant for adults over 55 (which is the EU/UK Circadin prescription population).",
      "Pediatric sleep disturbances with neurodevelopmental conditions (Moderate, supervised). Melatonin is used under pediatrician supervision for autism spectrum disorder, ADHD-related sleep issues, and other clinical pediatric contexts. Routine pediatric use without clinical indication is not recommended.",
      "Acute primary insomnia in young healthy adults (Weak/Modest). Effect sizes are smallest in this population — young adults with intact endogenous melatonin production get less benefit from supplementation than older adults or circadian-disrupted users.",
      "Long-term safety beyond 12 months (Uncertain — recent concerning signal). AHA 2025 preliminary observational analysis of >130,000 adults raised concerns about elevated cardiovascular outcomes and mortality in long-term users. Not peer-reviewed; cannot establish causation; observational confounding likely. But adds material uncertainty to the prior 'long-term safe' framing.",
    ],
  },
  {
    id: "dosing",
    title: "How is melatonin dosed?",
    intro:
      "Lower than the retail market suggests. The 2024 dose-response meta-analysis plateau is 4 mg/day; doses below 2 mg are smaller effect but still meaningful; doses above 4 mg provide no additional benefit and increase next-day fogginess. Most retail melatonin products at 5–10 mg are dosed 10–30× higher than your body's natural peak nighttime production.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Starting dose for general sleep.</span> 0.3–0.5 mg, 30–60 minutes before bed. Closer to natural peak nighttime production (~0.3 mg equivalent). Most users respond at this low dose; escalate only if needed.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Common dose for sleep.</span> 1–3 mg, 30–60 minutes before bed. The dose range used in most positive trials. Provides reliable circadian signal without next-day grogginess for most users.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Dose-response plateau.</span> 4 mg/day — Fatemeh 2024 meta-analytic peak effect. Going higher produces no additional benefit.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Jet lag protocol.</span> 0.5–5 mg at destination bedtime for 2–5 nights. Lower doses (0.5 mg) often sufficient for circadian phase-shifting. Take only at destination bedtime, not during flight.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Delayed sleep phase disorder.</span> 0.3–0.5 mg taken 4–6 hours before desired bedtime — earlier than general sleep dosing, leveraging circadian phase-advance effect.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Older adults (55+).</span> 2 mg extended-release (Circadin, prescription-only in EU/UK) — the European approved protocol for primary insomnia in this population.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid:</span> 5–10 mg supermarket doses — far above dose-response plateau, increased grogginess and vivid dreams with no additional sleep benefit.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: peak plasma in 30–60 minutes; immediate-release half-life 30–50 minutes. Extended-release covers 6–8 hours. Don&apos;t take melatonin in the middle of the night — circadian signaling can backfire.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Label math.</span> &ldquo;Melatonin 10 mg&rdquo; is 30× the natural peak nighttime production (~0.3 mg) and 2.5× the dose-response plateau. Lower-dose products (0.3, 0.5, 1 mg) are harder to find at retail but more aligned with evidence-supported use. Read for &ldquo;immediate-release&rdquo; vs &ldquo;extended-release&rdquo; — different use cases.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take melatonin",
    intro:
      "Melatonin is taken orally as immediate-release tablets, sublingual tablets (faster onset), capsules, gummies, or extended-release tablets. The practical considerations are timing (30–60 minutes before bed), dose (start low), and consistency (random timing confuses circadian rhythm). The points below cover the details experienced users converge on.",
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once nightly when needed. Consider intermittent rather than chronic nightly use for long-term protocols (situational use for circadian disruption rather than every night for years).</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">30–60 minutes before target bedtime for general sleep. 4–6 hours before desired bedtime for delayed sleep phase disorder (phase-advance protocol). Take at destination bedtime for jet lag.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Either — absorption is fast regardless of food. Avoid heavy meals just before bed for sleep-quality reasons (not melatonin-specific).</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Immediate-release for sleep onset (30–50 min half-life matches the body-temperature drop window); sublingual for fastest absorption; extended-release for sleep-maintenance issues (waking through the night) — but extended-release is more likely to cause morning grogginess. Avoid melatonin gummies for kids; pediatric use should be under medical supervision.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Look for explicit mg per dose disclosed and immediate-release vs extended-release labeling. ConsumerLab and independent testing has found label-vs-actual variance in some products (some contain meaningfully more or less than labeled). Third-party tested brands preferred.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Consider intermittent use rather than chronic nightly use given the November 2025 AHA preliminary long-term safety question. Reasonable patterns: situational use during travel/shift changes, every-other-night for circadian maintenance, or 5 nights on / 2 nights off rotation.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does melatonin stack with?",
    intro:
      "Melatonin pairs naturally with the broader sleep and circadian-modulation toolkit. The circadian-signaling mechanism complements peptide-level sleep architecture interventions, GABAergic anxiolytics, and other sleep-supportive supplements. The three areas below cover the natural stacking categories.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Melatonin pairs naturally with the Russian-origin sleep and cognitive peptide cluster.{" "}
            <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">DSIP</Link>{" "}
            (delta sleep-inducing peptide) operates directly on slow-wave sleep architecture — peptide-level intervention on sleep depth at a different layer than melatonin&apos;s circadian signaling.{" "}
            <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>{" "}
            (a tuftsin analog) provides anxiolytic effects via GABA modulation — useful when sleep is blocked by anxious arousal rather than circadian timing. The melatonin + DSIP + Selank stack covers three different sleep mechanism layers: circadian signaling (melatonin), slow-wave architecture (DSIP), and arousal/anxiety modulation (Selank). For longevity-focused users:{" "}
            <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>{" "}
            is a pineal-axis peptide that may support endogenous melatonin production — though melatonin supplementation and Epitalon&apos;s circadian effects partly overlap. Mechanistically complementary across the sleep peptide cluster; no known negative interactions.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/apigenin" className="text-[#3A759F] hover:underline">Apigenin</Link>{" "}
              — GABA-A positive allosteric modulator with botanical sleep + longevity arms. Pairs cleanly with melatonin&apos;s circadian arm via different receptor system.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/glycine" className="text-[#3A759F] hover:underline">Glycine</Link>{" "}
              — body-temperature regulation for sleep onset (3 g pre-bed). Different sleep mechanism from melatonin; mechanistically complementary. Both target sleep onset via different layers.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/magnesium" className="text-[#3A759F] hover:underline">Magnesium glycinate</Link>{" "}
              — GABAergic and neuromuscular relaxation. Standard sleep-stack co-occupant; doesn&apos;t interfere with melatonin&apos;s circadian signaling.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/tart-cherry" className="text-[#3A759F] hover:underline">Tart cherry</Link>{" "}
              — natural melatonin + tryptophan + anthocyanin botanical matrix. Provides gentle melatonin signal alongside supplemental melatonin; reasonable for users wanting smaller-dose supplemental melatonin with botanical layering.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/l-theanine" className="text-[#3A759F] hover:underline">L-theanine</Link>{" "}
              — alpha-wave relaxation for pre-sleep mental wind-down. Useful when sleep is blocked by mental chatter; complements melatonin&apos;s circadian signaling.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/gaba" className="text-[#3A759F] hover:underline">GABA</Link>{" "}
              — direct GABAergic supplementation. Variable absorption (blood-brain barrier penetration is debated); compatible with melatonin if effective for individual user.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Consistent sleep schedule.</span> Melatonin works best on top of consistent timing. Variable bedtimes undermine the circadian-signaling effect melatonin is designed to support.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Evening light reduction.</span> Dim/red light 1–2 hours before bed supports endogenous melatonin production; bright/blue light suppresses it. Light hygiene + supplemental melatonin is the standard circadian protocol.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cool bedroom (~65–68°F / 18–20°C).</span> Supports the body-temperature drop melatonin facilitates. Hot bedrooms blunt the cooling cascade.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pre-flight jet lag protocol.</span> Start adjusting melatonin timing 2–3 days before travel for eastward shifts (most disruptive direction). Take at destination bedtime, not flight bedtime.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Intermittent use preferred for chronic protocols.</span> Given the November 2025 AHA long-term safety question, situational/intermittent use rather than nightly multi-year use is the conservative approach pending more evidence.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">CBT-I for chronic insomnia.</span> Cognitive-behavioral therapy for insomnia is first-line for clinical insomnia disorder; melatonin is an adjunct, not a substitute for behavioral therapy when sleep issues are chronic and severe.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "Melatonin has a generally favorable short-term safety profile but several practical considerations. The November 2025 AHA preliminary long-term safety question is the most recent and important addition to the consideration list.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Morning grogginess — particularly with higher doses (5+ mg) and extended-release formulations. Resolves with lower dose or switch to immediate-release.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Vivid dreams or nightmares — relatively common, particularly at higher doses. Some users find this disturbing; others find it interesting. Lower dose typically reduces.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Headache — occasional, generally mild.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Daytime drowsiness — uncommon with proper timing; more likely with extended-release or evening dosing.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Long-term cardiovascular signal (AHA 2025 preliminary).</span> The November 2025 American Heart Association preliminary observational analysis of &gt;130,000 adults raised concerns about elevated heart failure hospitalization and all-cause mortality in long-term (12+ months) melatonin users. Observational data, not peer-reviewed RCT evidence, cannot prove causation. But it adds material uncertainty to the prior "long-term safe" framing. Consider intermittent rather than nightly use for chronic protocols.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Hormonal pathway concerns in children — melatonin is a hormone; chronic supplementation during development may affect puberty timing or related axes. Pediatric use should be under specialist supervision for clinical indications only.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Label-vs-actual content variance — independent testing has documented significant melatonin content variance from labeled dose in some commercial products. Third-party tested brands preferred.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mood changes — rare reports of depression or irritability worsening; mostly anecdotal.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anticoagulants (warfarin, apixaban, rivaroxaban).</span> Mild additive anticoagulant effect possible. Monitor INR for warfarin users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Immunosuppressants (cyclosporine, tacrolimus).</span> Melatonin can affect immune-modulator drug metabolism. Coordinate with prescribing clinician.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Diabetes medications.</span> Melatonin may affect glucose metabolism; modest interaction. Monitor glucose if combined with insulin or oral diabetes medications.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hormonal contraceptives.</span> Can increase circulating melatonin levels (estrogen affects melatonin metabolism). May amplify melatonin&apos;s effects.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sedatives (benzodiazepines, Z-drugs).</span> Additive sedation. Generally tolerated but watch total sedation load.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Fluvoxamine (SSRI) — significantly increases melatonin levels via CYP1A2 inhibition. Lower melatonin dose if on fluvoxamine.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pregnancy and breastfeeding — limited data; defer to clinician. Melatonin crosses the placenta and enters breast milk.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about melatonin",
    intro:
      "Melatonin is one of the most-used sleep supplements globally, but several open questions affect how confidently it can be recommended — particularly the November 2025 long-term safety question and the pediatric hormonal-pathway concerns.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Long-term safety beyond 12 months (most important open question).</span> The November 2025 AHA preliminary observational analysis raised concerns about elevated heart failure and mortality in long-term melatonin users. This is observational data, cannot prove causation, and is confounded by underlying insomnia severity in the user group — but adds material uncertainty to the prior &ldquo;long-term safe&rdquo; framing. RCT evidence at multi-year durations doesn&apos;t exist and is unlikely to be produced soon. Conservative interpretation: prefer intermittent/situational use over nightly multi-year use pending more rigorous evidence.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Pediatric long-term effects.</span> Melatonin is a hormone; chronic supplementation during development may affect puberty timing, growth hormone axis, or other endocrine pathways. The retail explosion of melatonin gummies for kids is not aligned with the evidence base. Pediatric use should be under specialist supervision for clinical indications only.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Optimal dose for specific use cases.</span> The 2024 Fatemeh dose-response meta plateaued at 4 mg/day for general sleep, but optimal doses for jet lag (smaller, 0.5 mg often sufficient), DSPD (0.3–0.5 mg taken 4–6 hours pre-bed), and shift work (variable) aren&apos;t precisely characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Extended-release vs immediate-release comparative outcomes.</span> Extended-release formulations (Circadin) are EU/UK prescription standard; immediate-release is US OTC standard. Head-to-head trials at equivalent total doses are limited. Extended-release theoretically better for sleep-maintenance issues; clinical evidence is mixed.</p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Quality control in US OTC market.</span> Multiple independent testing reports have documented significant label-vs-actual melatonin content variance. The US dietary-supplement regulatory framework doesn&apos;t enforce label accuracy the way EU prescription regulation does. Third-party tested brands are the practical mitigation.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Interaction with shift-work circadian disruption.</span> Melatonin helps shift workers modestly per Liira 2014, but doesn&apos;t fully reverse the metabolic and cardiovascular health costs of chronic shift work. The supplement is an adjunct, not a fix.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy melatonin",
    intro:
      "Melatonin is widely available over-the-counter in the US (dietary supplement) and prescription-only in EU/UK (Circadin and other branded extended-release formulations). Quality variance is unusually large for this supplement — third-party testing has documented label-vs-actual content variance. The screen below is what we use before clicking through.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Lower doses (0.3, 0.5, 1, or 3 mg)</span> — aligned with dose-response evidence. Avoid 5–10 mg products that dominate retail shelves.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Immediate-release vs extended-release explicitly labeled</span> — different use cases. Immediate for sleep onset; extended for sleep maintenance.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested</span> — USP Verified, NSF Certified, or ConsumerLab approved seals. Particularly important for melatonin given documented label variance.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar for any supplement.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No proprietary blends or sleep-stack mixes</span> — read for explicit melatonin mg per serving without other added compounds you can&apos;t individually evaluate.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid melatonin gummies for kids</span> — the marketing is poorly aligned with pediatric evidence base; defer to pediatrician for any pediatric use.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sublingual formulations for faster onset</span> — held under tongue 1–2 minutes; bypasses first-pass metabolism. Useful for users with delayed sleep-onset issues.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reputable brands aligned with low-dose evidence</span> — Thorne, Pure Encapsulations, Life Extension typically dose closer to evidence-supported range than mass-market brands.</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=melatonin&tag=profpeptide-20" label="Melatonin" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Melatonin FAQ",
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
          Ferracioli-Oda E, Qawasmi A, Bloch MH. Meta-analysis: melatonin for the treatment of primary sleep disorders. PLoS One. 2013;8(5):e63773.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/23691095/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/23691095/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Fatemeh G, Sajjad M, Niloufar R, et al. Effect of melatonin supplementation on sleep quality: a systematic review and meta-analysis of randomized controlled trials. J Pineal Res. 2024;76(2):e12939.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/38323423/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/38323423/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Liira J, Verbeek JH, Costa G, et al. Pharmacological interventions for sleepiness and sleep disturbances caused by shift work. Cochrane Database Syst Rev. 2014;(8):CD009776.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/25113164/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/25113164/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Herxheimer A, Petrie KJ. Melatonin for the prevention and treatment of jet lag. Cochrane Database Syst Rev. 2002;(2):CD001520.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/12076414/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/12076414/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          American Heart Association. Long-term melatonin use may be linked to heart failure risk: preliminary Scientific Sessions abstract. November 2025.{" "}
          <a href="https://newsroom.heart.org/news/long-term-melatonin-use-may-be-linked-to-heart-failure-risk" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://newsroom.heart.org/news/long-term-melatonin-use-may-be-linked-to-heart-failure-risk
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Erland LA, Saxena PK. Melatonin natural health products and supplements: presence of serotonin and significant variability of melatonin content. J Clin Sleep Med. 2017;13(2):275-281.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/27855744/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/27855744/
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
      "name": "What's the best dose of melatonin to start with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "0.5–3 mg taken 30–60 minutes before bed, lower is better. The 2024 Journal of Pineal Research dose-response meta-analysis mapped the sleep-effect curve and found it plateaus around 4 mg/day — going higher produces no additional benefit and increases next-day grogginess and vivid dreams. Most retail products are dosed at 3, 5, or 10 mg — far above the curve plateau and 10–30× higher than your body's natural peak nighttime production (~0.3 mg equivalent). Start at 0.3–1 mg; escalate to 3 mg only if needed."
      }
    },
    {
      "@type": "Question",
      "name": "Is melatonin actually safe for nightly long-term use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Short-term use (up to a few months) at low doses appears safe with no concerning signal across the trial base. Long-term nightly use — particularly stretching beyond 12 months — has been less studied, and a November 2025 American Heart Association preliminary observational analysis of >130,000 adults raised concerning signals about elevated heart failure hospitalization and all-cause mortality in long-term users vs non-users. This is observational data, not peer-reviewed RCT evidence, and cannot prove causation — but it does mean the long-term safety picture is genuinely incomplete in a way earlier research hadn't surfaced."
      }
    },
    {
      "@type": "Question",
      "name": "Does melatonin cause grogginess in the morning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At low doses (0.5–3 mg), most users don't experience next-day grogginess. Higher doses (5–10 mg) and extended-release formulations are significantly more likely to cause morning fogginess, vivid dreams, and that 'hung over' feeling. If you wake up groggy, lower your dose first; switch from extended-release to immediate-release second. Slow CYP1A2 metabolizers (about half the population, same enzyme that metabolizes caffeine) may experience longer-lasting effects and benefit from even lower doses (0.1–0.3 mg)."
      }
    },
    {
      "@type": "Question",
      "name": "Is melatonin a sedative, or just a circadian signal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "More a circadian signal than a sedative. Melatonin works through MT1 and MT2 receptors to communicate 'it's nighttime' to your brain and body — it doesn't knock you out the way benzodiazepines or Z-drugs do. This is why it's most useful for circadian rhythm disruption (jet lag, shift work, delayed sleep phase disorder) and less useful for forcing sleep when your body isn't ready. Effect sizes in general insomnia trials are modest (~7 minutes faster sleep onset, ~8 minutes additional total sleep time per 2013 meta-analysis)."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stack melatonin with DSIP or other sleep peptides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — and the stack is mechanistically natural for users layering sleep interventions across different mechanisms. DSIP (delta sleep-inducing peptide) operates directly on slow-wave sleep architecture — peptide-level intervention on sleep depth at a different layer than melatonin's circadian signaling. Selank (a tuftsin analog) provides anxiolytic effects via GABA modulation. The melatonin + DSIP + Selank stack covers three different sleep mechanism layers: circadian signaling (melatonin), slow-wave architecture (DSIP), and arousal/anxiety modulation (Selank). Add apigenin for a botanical fourth layer."
      }
    },
    {
      "@type": "Question",
      "name": "Can children take melatonin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under medical supervision for specific clinical indications — yes. For routine self-administration in healthy children — no. Melatonin is a hormone, and there are open questions about whether chronic supplementation during development affects puberty timing, growth hormone axis, or other hormonal pathways. Most pediatric guidelines reserve melatonin for children with neurodevelopmental sleep disturbances (autism spectrum disorder, ADHD-related sleep issues), and only under pediatrician guidance. The recent explosion in retail melatonin gummies marketed for kids is poorly aligned with the available evidence base."
      }
    },
    {
      "@type": "Question",
      "name": "Why are EU and UK melatonin doses different from US?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Regulatory framing differs significantly. In the US, melatonin is sold as a dietary supplement (not FDA-regulated as a drug), available over-the-counter at any dose. In the EU and UK, melatonin is regulated as a prescription medication (under brand names like Circadin), typically at 2 mg extended-release for primary insomnia in adults over 55. The European regulatory bodies took a more conservative position on melatonin's hormone status; the US treats it as a supplement. Practical effect: US users have access to a wider dose range with less quality control; EU/UK users get tighter pharmaceutical-grade dosing but need a prescription."
      }
    },
    {
      "@type": "Question",
      "name": "How long until melatonin works, and how long does the effect last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Peak plasma concentration in 30–60 minutes after oral dose. The half-life of immediate-release melatonin is 30–50 minutes — short enough that effects are largely gone by morning. Extended-release formulations (Circadin and similar) extend the effect over 6–8 hours but are more likely to cause morning grogginess. For sleep onset (the most common use case): take 30–60 minutes before target bedtime. For circadian phase-shifting protocols (jet lag, shift work): timing varies based on the specific shift direction. Don't take melatonin in the middle of the night."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Melatonin: Dose-Response Curve, Long-Term Safety Questions",
  "description": "Melatonin dosing (the 4 mg plateau), the AHA 2025 long-term safety question, and how it pairs with sleep peptides like DSIP and the apigenin botanical stack.",
  "url": "https://profpeptide.com/supplements/melatonin",
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
    { "@type": "ListItem", "position": 3, "name": "Melatonin" }
  ]
};

export default function MelatoninPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Melatonin</h1>
        <span className="tag">Sleep &amp; Recovery</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 26, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Also Known As:</span> N-acetyl-5-methoxytryptamine, the &ldquo;sleep hormone,&rdquo; Circadin (EU/UK prescription brand), MEL
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Supplement Class:</span> Endogenous pineal hormone / MT1/MT2 receptor agonist / circadian phase shifter / mild antioxidant
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Evidence Tier:</span> Mixed — Strong for circadian disruption (Herxheimer 2002 jet lag, Liira 2014 shift work, delayed sleep phase disorder); Moderate for general primary insomnia (Ferracioli-Oda 2013 meta-analysis effect size modest); Fatemeh 2024 dose-response plateau at 4 mg/day; recent AHA November 2025 preliminary observational signal raises long-term safety concerns previously not surfaced
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">What is melatonin?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Melatonin is an endogenous hormone produced by the pineal gland in response to darkness — peaking during night, falling toward morning, and serving as the master circadian signal coordinating the sleep-wake cycle. Supplemental melatonin binds the same MT1 and MT2 receptors in the suprachiasmatic nucleus (master circadian clock) as endogenous melatonin, acting as a circadian phase shifter rather than a true sedative. This is the key conceptual distinction: melatonin tells your brain &ldquo;it&apos;s nighttime&rdquo; rather than knocking you out. Strongest evidence is for circadian disruption use cases — jet lag (Herxheimer 2002 Cochrane review), shift work (Liira 2014 Cochrane review), and delayed sleep phase disorder. Effect on general primary insomnia is modest but reliable: ~7 minutes faster sleep onset, ~8 minutes additional total sleep time (Ferracioli-Oda 2013 meta-analysis of 19 RCTs). The 2024 Fatemeh dose-response meta-analysis mapped the sleep-effect curve and found it plateaus at 4 mg/day — meaning most retail products at 5–10 mg are dosed far above evidence-supported range. The most consequential recent development is the November 2025 American Heart Association preliminary observational analysis of &gt;130,000 adults raising concerns about elevated heart failure and all-cause mortality in long-term (12+ months) melatonin users. This is observational data, cannot prove causation, but adds material uncertainty to the prior &ldquo;long-term safe&rdquo; framing. Melatonin pairs naturally with{" "}
            <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">sleep peptides like DSIP and Selank</Link>{" "}
            (Russian sleep cluster) and with the botanical sleep stack ({" "}
            <Link href="/supplements/apigenin" className="text-[#3A759F] hover:underline">apigenin</Link>,{" "}
            <Link href="/supplements/glycine" className="text-[#3A759F] hover:underline">glycine</Link>,{" "}
            <Link href="/supplements/tart-cherry" className="text-[#3A759F] hover:underline">tart cherry</Link>{" "}
            ).
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Significant jet lag symptom reduction (Herxheimer 2002 Cochrane review, particularly for eastward travel)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest shift-work sleep improvement (Liira 2014 Cochrane review)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest general-insomnia improvement (~7 min faster sleep onset, ~8 min total sleep time per Ferracioli-Oda 2013)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Strong evidence for delayed sleep phase disorder (low-dose phase-shifting protocol)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Greater effect in older adults (declining endogenous production with age)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Circadian phase-shifting via MT1/MT2 receptor signaling at suprachiasmatic nucleus</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Secondary free-radical scavenger antioxidant activity</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common dose:</span> 0.3–3 mg taken 30–60 minutes before bed. Lower is better — natural peak nighttime production is ~0.3 mg equivalent; 5–10 mg supermarket products are 10–30× higher and provide no additional sleep benefit beyond the 4 mg plateau (Fatemeh 2024). For jet lag: 0.5–5 mg at destination bedtime. For delayed sleep phase: 0.3–0.5 mg 4–6 hours before desired bedtime.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Long-term use caveat (important):</span> November 2025 AHA preliminary observational analysis of &gt;130,000 adults raised concerns about elevated heart failure hospitalization and all-cause mortality in long-term (12+ months) melatonin users. Observational data, not peer-reviewed RCT evidence. Conservative interpretation: prefer intermittent/situational use over nightly multi-year use pending more rigorous evidence.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=melatonin&tag=profpeptide-20" label="Melatonin" />
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
        {["Sleep Onset", "Circadian", "Jet Lag", "Hormone", "4mg Plateau", "AHA 2025 Signal"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/apigenin" className="text-sm font-medium text-[#3A759F] hover:underline">Apigenin</Link>
          <Link href="/supplements/glycine" className="text-sm font-medium text-[#3A759F] hover:underline">Glycine</Link>
          <Link href="/supplements/magnesium" className="text-sm font-medium text-[#3A759F] hover:underline">Magnesium</Link>
          <Link href="/supplements/tart-cherry" className="text-sm font-medium text-[#3A759F] hover:underline">Tart Cherry</Link>
          <Link href="/supplements/l-theanine" className="text-sm font-medium text-[#3A759F] hover:underline">L-Theanine</Link>
          <Link href="/supplements/gaba" className="text-sm font-medium text-[#3A759F] hover:underline">GABA</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Melatonin" pagePath="/supplements/melatonin" />
    </div>
    </>
  );
}
