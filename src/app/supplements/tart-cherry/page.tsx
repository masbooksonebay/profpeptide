import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/tart-cherry",
  title: "Tart Cherry: Montmorency Sleep + Recovery — Dose, Evidence, Stacks",
  description:
    "Tart cherry dosing (Montmorency), the Howatson sleep RCT, the DOMS/recovery meta-analysis, and how it stacks with sleep peptides like DSIP plus the apigenin cluster.",
});

const faqs = [
  {
    q: "How much tart cherry should I take for sleep?",
    a: "Most published sleep trials use 30 mL of Montmorency tart cherry concentrate twice daily (morning and evening) for 7–14 days, or equivalent doses of powder (~480 mg) or whole-fruit juice (8 oz / 240 mL). Effects build with consistent use rather than appearing after a single dose. The Howatson 2012 study extended sleep by ~40 minutes after 7 days; the LSU pilot in older adults with insomnia extended total sleep time by ~84 minutes after 2 weeks. Cultivar matters: Montmorency (Prunus cerasus) is what trials use — sweet cherries are not bioequivalent.",
  },
  {
    q: "Tart cherry vs melatonin supplement — which is better?",
    a: (
      <>
        Different tools, different use cases. A{" "}
        <Link href="/supplements/melatonin" className="text-[#0891b2] hover:underline">melatonin supplement</Link>{" "}
        delivers a much higher direct dose of melatonin (0.5–5 mg per tablet) and is more useful for acute circadian disruptions like jet lag, shift work, or DSPD. Tart cherry provides a much smaller natural melatonin dose (~0.135 mcg per typical study dose — orders of magnitude lower) alongside tryptophan, anthocyanins, and other bioactive compounds. The combined botanical effect appears to gently nudge sleep parameters without the next-morning grogginess some users get from melatonin tablets. Tart cherry also has recovery benefits melatonin doesn&apos;t. For acute circadian issues: melatonin. For gentle daily sleep support plus exercise recovery: tart cherry.
      </>
    ),
  },
  {
    q: "Can I take tart cherry every day long-term?",
    a: "Yes — daily long-term use as a whole food appears safe with no concerning signals across the published trial base (durations up to 4 weeks; whole-food consumption extends much longer epidemiologically). The main practical consideration is sugar intake if you're using sweetened juice or concentrate daily. Powder and capsule forms minimize sugar exposure while preserving the bioactive compounds. For users targeting recovery from specific training blocks, 7–10 days surrounding hard training events is sufficient; for chronic sleep support, daily use is fine.",
  },
  {
    q: "Does tart cherry help with running or endurance recovery?",
    a: "Yes — and this is actually where the tart cherry evidence is strongest. The 2021 Hill meta-analysis (14 studies) found a small beneficial effect on muscle soreness (effect size −0.44) and a moderate effect on strength recovery after strenuous exercise. Multiple studies in marathon runners (Howatson 2010), soccer players, and intermittent-sprint athletes show faster recovery of strength and power, reduced DOMS, and lower inflammatory markers (notably IL-6) with 7–10 days of supplementation surrounding hard training. The recovery effect is stronger in endurance and intermittent-sprint contexts than in pure resistance training, where some trials show null results.",
  },
  {
    q: "What's the difference between Montmorency and sweet cherries?",
    a: "Different species and meaningfully different bioactive content. Montmorency (Prunus cerasus) is a tart/sour cherry cultivar with melatonin concentrations of roughly 2–13 ng/g and high anthocyanin content. Sweet cherries (Prunus avium) have far lower melatonin and a different anthocyanin profile. Almost all published tart cherry trials specifically use Montmorency — sweet cherries are not interchangeable for supplementation purposes. Reputable products specifically state Montmorency on the label; if a product just says \"cherry extract\" without species/cultivar, you can't be sure what you're buying.",
  },
  {
    q: "Can I stack tart cherry with DSIP or sleep peptides?",
    a: (
      <>
        Yes — and the stack is mechanistically natural for users layering sleep interventions.{" "}
        <Link href="/peptides/dsip" className="text-[#0891b2] hover:underline">DSIP</Link>{" "}
        (delta sleep-inducing peptide) operates directly on slow-wave sleep architecture — peptide-level intervention on sleep depth. Tart cherry operates at a different layer: natural melatonin content nudges the circadian signal, tryptophan supports endogenous serotonin/melatonin pathways, and anthocyanins reduce inflammation that disrupts sleep quality. The peptide does direct sleep-architecture modulation; tart cherry handles the circadian-nudge and inflammation-driven sleep disruption arms. Mechanistically complementary, no known negative interactions. The Russian-origin sleep peptide cluster pairs naturally with the botanical sleep stack (tart cherry + apigenin + magnesium + glycine).
      </>
    ),
  },
  {
    q: "Will tart cherry help with gout or arthritis?",
    a: "Some evidence, particularly for gout. Several small trials suggest tart cherry consumption may reduce gout attack frequency and lower uric acid levels — likely via anthocyanin-mediated xanthine oxidase inhibition (the same enzyme allopurinol targets). The 2012 Zhang study found a 35% reduction in gout attacks with tart cherry intake. For osteoarthritis, the anti-inflammatory anthocyanin effect produces modest symptom improvement in some trials. The evidence is smaller than for sleep or recovery but mechanistically reasonable; tart cherry is a low-risk adjunct in inflammatory contexts.",
  },
  {
    q: "Sugar content — should I worry about juice/concentrate forms?",
    a: "For occasional or recovery-focused use, no — the bioactive benefit outweighs the modest sugar load. For chronic daily use, yes worth considering: 30 mL of tart cherry concentrate has ~30 g sugar (depending on brand); 8 oz juice has ~25 g. Daily consumption may matter for blood-sugar-managing users, low-carb dieters, and users with insulin resistance. Powder and capsule forms eliminate the sugar issue while preserving the bioactive profile — for daily-use users targeting sleep or chronic inflammation, powder is the practical default.",
  },
];

const studies = [
  {
    title: "Effect of Tart Cherry Juice (Prunus cerasus) on Melatonin Levels and Enhanced Sleep Quality",
    authors: "Howatson G, Bell PG, Tallent J, Middleton B, McHugh MP, Ellis J",
    journal: "European Journal of Nutrition",
    year: "2012",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/22038497/",
    summary: "A randomized double-blind placebo-controlled crossover trial of 30 mL Montmorency tart cherry juice concentrate twice daily for 7 days in 20 healthy adults. Tart cherry increased total sleep time by ~40 minutes, improved sleep efficiency by ~6%, and significantly elevated urinary melatonin metabolites (6-sulfatoxymelatonin) versus placebo. The Howatson 2012 trial established that the natural melatonin content of tart cherry is bioavailable and produces measurable sleep changes — and remains the foundational human trial for tart cherry sleep evidence.",
  },
  {
    title: "Influence of Tart Cherry Juice on Indices of Recovery Following Marathon Running",
    authors: "Howatson G, McHugh MP, Hill JA, et al.",
    journal: "Scandinavian Journal of Medicine & Science in Sports",
    year: "2010",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/19883392/",
    summary: "A randomized placebo-controlled trial of Montmorency tart cherry juice in 20 marathon runners, supplemented for 5 days pre-race and 2 days post-race. Tart cherry significantly reduced muscle pain, attenuated isometric strength loss, and reduced inflammatory markers (CRP, uric acid) versus placebo. The Howatson 2010 marathon trial established tart cherry's exercise-recovery use case beyond sleep and is one of the cleaner endurance-recovery trials in the supplement literature.",
  },
  {
    title: "Effects of Tart Cherry Juice in Older Adults with Insomnia",
    authors: "Pigeon WR, Carr M, Gorman C, Perlis ML",
    journal: "Journal of Medicinal Food",
    year: "2010",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/20438325/",
    summary: "A pilot RCT of 8 oz tart cherry juice twice daily for 2 weeks in 15 older adults with chronic insomnia. Tart cherry increased total sleep time by ~84 minutes versus placebo, with modest improvements in sleep efficiency. The Pigeon trial extended tart cherry sleep evidence into clinically relevant insomnia populations — though sample size is small, the larger effect magnitude in older adults with established sleep complaints is notable.",
  },
  {
    title: "Effects of Montmorency Tart Cherry Supplementation on Recovery from Strenuous Exercise: A Systematic Review and Meta-Analysis",
    authors: "Hill JA, Keane KM, Quinlan R, Howatson G",
    journal: "International Journal of Sports Nutrition and Exercise Metabolism",
    year: "2021",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/34010816/",
    summary: "A systematic review and meta-analysis of 14 RCTs (n=210) of Montmorency tart cherry supplementation in exercise recovery contexts. Tart cherry produced a small beneficial effect on muscle soreness (effect size −0.44, p=0.005) and a moderate beneficial effect on muscular strength recovery (effect size +0.43, p<0.001). Effects were stronger in endurance and intermittent-sprint contexts than in pure resistance training. The Hill 2021 meta-analysis is the cleanest evidence summary for tart cherry's recovery effect.",
  },
  {
    title: "Effects of Tart Cherry Juice on Biomarkers of Inflammation and Oxidative Stress",
    authors: "Bell PG, Walshe IH, Davison GW, Stevenson E, Howatson G",
    journal: "Nutrients",
    year: "2014",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/24859636/",
    summary: "A crossover trial of Montmorency tart cherry concentrate in 16 well-trained athletes during 3 days of intensive cycling. Tart cherry significantly reduced inflammatory markers (IL-6, hsCRP) and oxidative stress (lipid peroxidation) versus placebo. The anti-inflammatory anthocyanin mechanism arm — distinct from melatonin/sleep — is what underlies the exercise-recovery benefits and the gout/arthritis adjunct case.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does tart cherry work?",
    intro:
      "Tart cherry works through three parallel mechanisms — natural melatonin content for circadian signaling, tryptophan for endogenous serotonin/melatonin pathway support, and anthocyanin-rich polyphenol content for anti-inflammatory and antioxidant effects. The combined botanical effect is gentler and broader than any single bioactive arm alone — and explains why tart cherry has evidence in both sleep and exercise recovery contexts.",
    body: [
      "Natural melatonin content. Montmorency cherries contain melatonin at ~2–13 ng/g of fruit — far below pharmacological doses but biologically active. The Howatson 2012 trial documented elevated urinary melatonin metabolites (6-sulfatoxymelatonin) after tart cherry supplementation, confirming the natural melatonin is bioavailable. The dose is orders of magnitude smaller than melatonin tablets, which is why the effect is gentler.",
      "Tryptophan supplementation. Tart cherries contain tryptophan, the amino acid precursor to both serotonin and endogenous melatonin. Dietary tryptophan supports the entire serotonin→melatonin pathway, contributing to the sleep effect through endogenous synthesis support rather than direct melatonin delivery.",
      "Anthocyanin-mediated anti-inflammatory effects. Cyanidin glycosides and procyanidins (the dark pigments giving tart cherries their color) inhibit cyclooxygenase enzymes (COX-1 and COX-2) and modulate NF-κB inflammatory signaling. The Bell 2014 trial documented reductions in IL-6, hsCRP, and lipid peroxidation markers in athletes. This is the mechanism arm underlying exercise-recovery benefits.",
      "Xanthine oxidase inhibition. Anthocyanins inhibit xanthine oxidase — the enzyme that produces uric acid (and the same enzyme allopurinol targets). This is the mechanistic basis for tart cherry's gout-prevention effects in some trials.",
      "Antioxidant capacity. Tart cherry has one of the highest ORAC (oxygen radical absorbance capacity) scores of any food, contributing to free-radical scavenging in muscle and circulation. The antioxidant arm partly drives the exercise-recovery effect on muscle damage markers.",
      "Combined botanical effect. The package effect — melatonin + tryptophan + anthocyanins + antioxidants — is what distinguishes tart cherry from isolated melatonin or NSAIDs. The trials measure outcomes of the whole-food matrix rather than individual constituents.",
    ],
  },
  {
    id: "research",
    title: "What does tart cherry actually do?",
    intro:
      "Tart cherry has cleaner evidence in exercise recovery than in sleep, despite the marketing emphasis. The Hill 2021 meta-analysis documents reliable recovery effects across 14 RCTs; the Howatson 2012 + Pigeon 2010 sleep evidence is real but modest in effect size. Inflammatory and gout adjunct evidence is emerging.",
    body: [
      "Exercise recovery — endurance and intermittent-sprint (Strong). Hill 2021 meta-analysis (14 RCTs, n=210) demonstrated small effect on soreness and moderate effect on strength recovery. Howatson 2010 marathon trial replicated in soccer players, cyclists, and other endurance/intermittent-sprint athletes. Reliable, consistent directional signal.",
      "Sleep duration and efficiency (Moderate). Howatson 2012 (n=20 healthy adults) extended total sleep by ~40 minutes after 7 days. Pigeon 2010 (n=15 older adults with insomnia) extended sleep by ~84 minutes after 2 weeks. The 2025 Food Sci Nutr systematic review found consistent direction across 7 trials but noted heterogeneity in dose, form, and study population.",
      "Inflammation reduction (Moderate). Bell 2014 documented reductions in IL-6, hsCRP, and lipid peroxidation in athletes. Replicated in several smaller trials. The anti-inflammatory arm is mechanistically well-supported by the anthocyanin pharmacology.",
      "Gout prevention (Moderate). Zhang 2012 trial documented ~35% reduction in gout attacks with tart cherry intake. Smaller follow-up trials show similar directional benefit. Reasonable adjunct in gout management protocols.",
      "Osteoarthritis symptom relief (Modest). Anti-inflammatory anthocyanin effect produces modest symptom improvement in some OA trials. Effect sizes are small relative to NSAIDs but real.",
      "Cardiovascular biomarkers (Emerging). Improvements in LDL cholesterol, blood pressure, and arterial stiffness documented in some trials, likely via anti-inflammatory and antioxidant mechanisms. Evidence base is thinner than for sleep or recovery.",
      "Resistance-training recovery (Mixed). Some resistance-training trials show benefit, others show null. The recovery effect appears more pronounced in endurance and intermittent-sprint contexts than in pure resistance training — possibly because endurance produces more inflammatory damage that anthocyanins can mitigate.",
      "Healthy young-adult subjective sleep (Modest). The 2024 trial in overweight/obese adults found no sleep or inflammation improvement at a common dose — suggesting effects may be population-dependent. Don&apos;t expect dramatic sleep changes in already-healthy young adults.",
    ],
  },
  {
    id: "dosing",
    title: "How is tart cherry dosed?",
    intro:
      "Tart cherry dosing varies by goal and form. The most-studied protocol is 30 mL of Montmorency tart cherry concentrate twice daily (morning + evening) for 7–14 days. Equivalent doses are available in powder (~480 mg standardized) or whole-fruit juice (8 oz / 240 mL). Cultivar (Montmorency) and form (cold-processed for anthocyanin preservation) matter more than brand.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sleep protocol (concentrate).</span> 30 mL Montmorency tart cherry concentrate twice daily (morning + evening) for 7–14 days. The Howatson 2012 + Pigeon 2010 trial dose. Effects build over the first week.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sleep protocol (powder).</span> ~480 mg Montmorency tart cherry powder once or twice daily. Equivalent bioactive content; avoids the sugar load of concentrate or juice. Practical default for chronic daily use.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sleep protocol (whole-fruit juice).</span> 8 oz (240 mL) Montmorency tart cherry juice once or twice daily. Same bioactive content as concentrate diluted; watch for added sugar in some commercial juices.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Exercise recovery protocol.</span> Same doses as sleep protocol, taken for 7–10 days surrounding hard training events (5 days pre + 2 days post is the Howatson 2010 marathon protocol). Daily during competition blocks.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Gout prevention adjunct.</span> 1 oz concentrate or equivalent daily, ongoing. The Zhang 2012 trial dose range.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: sleep effects emerge within first week of consistent use; recovery effects are measurable within 24–72 hours post-exercise; inflammatory marker reductions are dose-coupled to ongoing supplementation. Stopping supplementation reverses effects over similar timescales — tart cherry is not a habit-builder.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Label math.</span> Read for &ldquo;Montmorency&rdquo; specifically — not just &ldquo;cherry extract.&rdquo; Standardization to anthocyanin content (e.g., &ldquo;3% anthocyanins&rdquo;) is a quality marker. Concentrate at 30 mL serves typically contains ~30 g sugar; powder forms have minimal sugar.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take tart cherry",
    intro:
      "Tart cherry is taken orally as juice concentrate (the most-studied form), powder, capsules, or freeze-dried whole fruit. The two practical considerations are sugar content (relevant for chronic daily use) and Montmorency cultivar confirmation. The points below cover the details that experienced users converge on.",
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Twice daily (morning + evening) for sleep protocol; daily during recovery blocks; ongoing for gout adjunct.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Sleep: 1–2 hours before bedtime (evening dose) plus a morning dose to build steady-state. Recovery: post-training is fine; or split AM/PM.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Either — absorption is fine with or without food. Concentrate on empty stomach may cause mild stomach upset in sensitive users; dilute in water.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Concentrate is the most-studied form (30 mL = trial dose). Powder is the practical default for chronic daily use (no sugar load, easier dosing). Whole-fruit juice works but contains more sugar. Capsules are convenient but read for actual Montmorency content. Freeze-dried whole fruit preserves the most bioactive compounds.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Look for &ldquo;Montmorency&rdquo; explicitly on the label (Prunus cerasus, not sweet cherry / Prunus avium). Anthocyanin-content standardization (e.g., &ldquo;3% anthocyanins&rdquo;) is a quality marker. Established brands used in trials: CherryPharm, Cheribundi, and research-grade Montmorency suppliers.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No pharmacological need to cycle. Sleep users typically run continuous daily; recovery users naturally pulse around training blocks; gout users go continuous. No tolerance development documented.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does tart cherry stack with?",
    intro:
      "Tart cherry pairs naturally with the broader sleep, recovery, and anti-inflammatory toolkit. The botanical mechanism (natural melatonin + tryptophan + anthocyanins) complements pharmacological sleep aids, neurotrophic peptides, and other anti-inflammatory adjuncts. The three areas below cover the natural stacking categories.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Tart cherry pairs naturally with the Russian-origin sleep + cognitive peptide cluster.{" "}
            <Link href="/peptides/dsip" className="text-[#0891b2] hover:underline">DSIP</Link>{" "}
            (delta sleep-inducing peptide) operates directly on slow-wave sleep architecture — peptide-level intervention on sleep depth.{" "}
            <Link href="/peptides/selank" className="text-[#0891b2] hover:underline">Selank</Link>{" "}
            (a tuftsin analog) provides anxiolytic effects via GABA modulation — useful when sleep is blocked by anxious arousal. Tart cherry operates at a different layer: natural melatonin nudges the circadian signal, tryptophan supports endogenous serotonin/melatonin pathways, and anthocyanins reduce inflammation that disrupts sleep quality. The peptides do direct sleep-architecture modulation; tart cherry handles the circadian-nudge and inflammation-driven arms. Mechanistically complementary, no known negative interactions. The full Russian sleep peptide cluster pairs naturally with the botanical sleep stack (tart cherry + apigenin + magnesium + glycine).
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/apigenin" className="text-[#0891b2] hover:underline">Apigenin</Link>{" "}
              — GABA-A positive allosteric modulator with sleep and longevity arms. Pairs cleanly with tart cherry&apos;s melatonin-pathway and anti-inflammatory arms.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/glycine" className="text-[#0891b2] hover:underline">Glycine</Link>{" "}
              — body-temperature regulation for sleep onset. Different sleep mechanism; mechanistically complementary.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/melatonin" className="text-[#0891b2] hover:underline">Melatonin (low-dose)</Link>{" "}
              — for acute circadian disruption layered on top of the chronic tart cherry baseline. Use cases differ; not redundant.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/magnesium" className="text-[#0891b2] hover:underline">Magnesium glycinate</Link>{" "}
              — GABAergic and neuromuscular relaxation. Standard sleep-stack co-occupant.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/curcumin" className="text-[#0891b2] hover:underline">Curcumin</Link>{" "}
              — additional anti-inflammatory arm for recovery and chronic inflammation contexts. Compatible with tart cherry&apos;s anthocyanin mechanism.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pre-bed timing.</span> Evening dose 1–2 hours before bedtime to align with the natural melatonin&apos;s circadian-nudge effect.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Surrounding hard training blocks.</span> 5 days pre + 2 days post for major competitions or training peaks (the Howatson 2010 protocol).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Consistent daily use for sleep.</span> Effects build with consistent use; sporadic dosing doesn&apos;t replicate the trial protocols.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Choose form by use case.</span> Concentrate for trial-validated dosing; powder for chronic low-sugar use; whole-fruit juice for recovery; freeze-dried for travel.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Track sugar intake.</span> 30 mL concentrate ≈ 30 g sugar; 8 oz juice ≈ 25 g sugar. Relevant for low-carb dieters, blood-sugar managers, and chronic daily users.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "Tart cherry is one of the cleanest safety profiles in the supplement space — it's a whole-food extract with extensive culinary history. The main practical considerations are sugar intake from juice/concentrate forms and modest drug interactions through anthocyanin effects on certain enzyme systems.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild GI discomfort — occasional, particularly with concentrate on empty stomach. Dilute in water or take with food.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Sugar load from juice/concentrate forms — natural fruit sugars (~30 g per 30 mL concentrate). Relevant for chronic daily use.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No documented serious adverse events across the human trial base — extensive whole-food culinary history.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Hypoglycemia in diabetic users on insulin or sulfonylureas — modest blood-glucose-lowering effect from anthocyanins. Monitor glucose during titration.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild blood-pressure lowering — relevant if combined with antihypertensive medications. Generally modest and well tolerated.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Vivid dreams — occasionally reported with consistent evening dosing, likely tied to melatonin and serotonin pathway support.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Diabetes medications.</span> Anthocyanins modestly improve glucose control; additive effect with insulin, sulfonylureas, or GLP peptides. Monitor glucose during titration.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Antihypertensive medications.</span> Modest additive BP lowering. Generally well tolerated; monitor BP if combining.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anticoagulants (warfarin, apixaban, rivaroxaban).</span> Anthocyanins have mild antiplatelet effects; modest additive bleeding-risk consideration. Coordinate with prescribing clinician for chronic high-dose use.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Sedatives (benzodiazepines, Z-drugs) — additive mild sedation possible at evening doses; rarely clinically significant.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Allopurinol or other gout medications — same xanthine oxidase mechanism; additive effect. Coordinate with rheumatologist.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pregnancy — whole-food tart cherry consumption is fine; mega-dose concentrate or powder supplementation not well-studied. Default to whole-fruit forms.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about tart cherry",
    intro:
      "Tart cherry has cleaner exercise-recovery evidence than sleep evidence, despite the marketing emphasis on sleep. Several open questions affect how confidently it can be recommended for specific use cases.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Effect-size heterogeneity in sleep trials.</span> Howatson 2012 documented ~40 minutes extended sleep; Pigeon 2010 documented ~84 minutes in older adults with insomnia; the 2024 trial in overweight adults found no benefit. The 2025 Food Sci Nutr systematic review noted significant heterogeneity in dose, form, and population. Which subgroups respond most isn&apos;t fully characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Form equivalence (concentrate vs powder vs whole fruit).</span> Most published trials use concentrate. Whether powder, capsules, or whole-fruit consumption deliver equivalent bioactive content is mechanistically plausible but not directly RCT-tested head-to-head at scale.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Long-term daily safety at supplemental doses.</span> Trial data extends to 4 weeks; whole-food culinary history extends much longer but at lower doses than supplemental concentrate. Multi-year daily 30 mL concentrate use is not directly RCT-characterized — though the safety profile is reassuring.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Active-compound attribution.</span> Tart cherry&apos;s effects likely stem from the combined botanical matrix (melatonin + tryptophan + anthocyanins + procyanidins + other polyphenols). Which compounds drive which effects isn&apos;t fully resolved. Isolated extracts of single bioactive arms may not replicate whole-food results.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Resistance-training recovery null results.</span> Some pure resistance-training recovery trials show no benefit, while endurance and intermittent-sprint contexts consistently show benefit. The exercise-modality dependence isn&apos;t mechanistically resolved.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Diagnosed insomnia transfer.</span> Pigeon 2010 in older adults with chronic insomnia is the closest clinical-insomnia trial — sample size of 15. Whether tart cherry meaningfully helps diagnosed primary insomnia disorder at scale is plausible but not well-tested.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Cardiovascular-outcome long-term.</span> Anti-inflammatory and antioxidant effects suggest plausible cardiovascular benefit over years/decades; trial evidence at this timescale doesn&apos;t exist.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy tart cherry",
    intro:
      "Tart cherry products are widely available from supplement retailers, health food stores, and online. Quality varies significantly — particularly around cultivar disclosure (Montmorency specifically) and form processing (cold-processed for anthocyanin preservation). The screen below is what we use before clicking through.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Montmorency cultivar (Prunus cerasus) explicitly stated</span> — not just &ldquo;cherry extract&rdquo;. Sweet cherries are not bioequivalent.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anthocyanin-content standardization disclosed</span> — e.g., &ldquo;3% anthocyanins&rdquo; or &ldquo;X mg anthocyanins per serving&rdquo;. Quality marker for the active bioactive content.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cold-pressed or freeze-dried processing for powder/concentrate</span> — preserves heat-sensitive anthocyanins. Avoid heat-processed extracts.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">For juice/concentrate: no added sugar or sweeteners</span> — added sugar partially defeats the purpose for sleep use.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Established trial-grade brands</span> — CherryPharm, Cheribundi, and research-grade Montmorency suppliers used in published RCTs.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested</span> — USP, NSF, or ConsumerLab certifications signal independent verification.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar for any supplement.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">For chronic daily use: prefer powder over juice/concentrate</span> — avoids the sugar load (~30 g per 30 mL concentrate) while preserving bioactive content.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Fresh manufacture date</span> — anthocyanins degrade with prolonged storage; avoid jars sitting on warehouse shelves &gt;12 months pre-purchase.</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=tart+cherry+extract&tag=profpeptide-20" label="Tart Cherry" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Tart Cherry FAQ",
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
          Howatson G, Bell PG, Tallent J, Middleton B, McHugh MP, Ellis J. Effect of tart cherry juice (Prunus cerasus) on melatonin levels and enhanced sleep quality. Eur J Nutr. 2012;51(8):909-916.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22038497/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22038497/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Howatson G, McHugh MP, Hill JA, et al. Influence of tart cherry juice on indices of recovery following marathon running. Scand J Med Sci Sports. 2010;20(6):843-852.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/19883392/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/19883392/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Pigeon WR, Carr M, Gorman C, Perlis ML. Effects of a tart cherry juice beverage on the sleep of older adults with insomnia: a pilot study. J Med Food. 2010;13(3):579-583.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/20438325/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/20438325/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Hill JA, Keane KM, Quinlan R, Howatson G. Tart cherry supplementation and recovery from strenuous exercise: a systematic review and meta-analysis. Int J Sport Nutr Exerc Metab. 2021;31(2):154-167.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/34010816/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/34010816/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Bell PG, Walshe IH, Davison GW, Stevenson E, Howatson G. Montmorency cherries reduce the oxidative stress and inflammatory responses to repeated days high-intensity stochastic cycling. Nutrients. 2014;6(2):829-843.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/24859636/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/24859636/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Zhang Y, Neogi T, Chen C, Chaisson C, Hunter DJ, Choi HK. Cherry consumption and decreased risk of recurrent gout attacks. Arthritis Rheum. 2012;64(12):4004-4011.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/23023818/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/23023818/
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
      "name": "How much tart cherry should I take for sleep?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most published sleep trials use 30 mL of Montmorency tart cherry concentrate twice daily (morning and evening) for 7–14 days, or equivalent doses of powder (~480 mg) or whole-fruit juice (8 oz / 240 mL). Effects build with consistent use rather than appearing after a single dose. The Howatson 2012 study extended sleep by ~40 minutes after 7 days; the LSU pilot in older adults with insomnia extended total sleep time by ~84 minutes after 2 weeks. Cultivar matters: Montmorency (Prunus cerasus) is what trials use — sweet cherries are not bioequivalent."
      }
    },
    {
      "@type": "Question",
      "name": "Tart cherry vs melatonin supplement — which is better?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Different tools, different use cases. A melatonin supplement delivers a much higher direct dose of melatonin (0.5–5 mg per tablet) and is more useful for acute circadian disruptions like jet lag, shift work, or DSPD. Tart cherry provides a much smaller natural melatonin dose (~0.135 mcg per typical study dose — orders of magnitude lower) alongside tryptophan, anthocyanins, and other bioactive compounds. The combined botanical effect appears to gently nudge sleep parameters without the next-morning grogginess some users get from melatonin tablets. Tart cherry also has recovery benefits melatonin doesn't."
      }
    },
    {
      "@type": "Question",
      "name": "Can I take tart cherry every day long-term?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — daily long-term use as a whole food appears safe with no concerning signals across the published trial base (durations up to 4 weeks; whole-food consumption extends much longer epidemiologically). The main practical consideration is sugar intake if you're using sweetened juice or concentrate daily. Powder and capsule forms minimize sugar exposure while preserving the bioactive compounds. For users targeting recovery from specific training blocks, 7–10 days surrounding hard training events is sufficient; for chronic sleep support, daily use is fine."
      }
    },
    {
      "@type": "Question",
      "name": "Does tart cherry help with running or endurance recovery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — and this is actually where the tart cherry evidence is strongest. The 2021 Hill meta-analysis (14 studies) found a small beneficial effect on muscle soreness (effect size −0.44) and a moderate effect on strength recovery after strenuous exercise. Multiple studies in marathon runners (Howatson 2010), soccer players, and intermittent-sprint athletes show faster recovery of strength and power, reduced DOMS, and lower inflammatory markers (notably IL-6) with 7–10 days of supplementation surrounding hard training."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between Montmorency and sweet cherries?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Different species and meaningfully different bioactive content. Montmorency (Prunus cerasus) is a tart/sour cherry cultivar with melatonin concentrations of roughly 2–13 ng/g and high anthocyanin content. Sweet cherries (Prunus avium) have far lower melatonin and a different anthocyanin profile. Almost all published tart cherry trials specifically use Montmorency — sweet cherries are not interchangeable for supplementation purposes. Reputable products specifically state Montmorency on the label."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stack tart cherry with DSIP or sleep peptides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — and the stack is mechanistically natural for users layering sleep interventions. DSIP (delta sleep-inducing peptide) operates directly on slow-wave sleep architecture — peptide-level intervention on sleep depth. Tart cherry operates at a different layer: natural melatonin content nudges the circadian signal, tryptophan supports endogenous serotonin/melatonin pathways, and anthocyanins reduce inflammation that disrupts sleep quality. The peptide does direct sleep-architecture modulation; tart cherry handles the circadian-nudge and inflammation-driven sleep disruption arms."
      }
    },
    {
      "@type": "Question",
      "name": "Will tart cherry help with gout or arthritis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some evidence, particularly for gout. Several small trials suggest tart cherry consumption may reduce gout attack frequency and lower uric acid levels — likely via anthocyanin-mediated xanthine oxidase inhibition (the same enzyme allopurinol targets). The 2012 Zhang study found a 35% reduction in gout attacks with tart cherry intake. For osteoarthritis, the anti-inflammatory anthocyanin effect produces modest symptom improvement in some trials. The evidence is smaller than for sleep or recovery but mechanistically reasonable; tart cherry is a low-risk adjunct in inflammatory contexts."
      }
    },
    {
      "@type": "Question",
      "name": "Sugar content — should I worry about juice/concentrate forms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For occasional or recovery-focused use, no — the bioactive benefit outweighs the modest sugar load. For chronic daily use, yes worth considering: 30 mL of tart cherry concentrate has ~30 g sugar (depending on brand); 8 oz juice has ~25 g. Daily consumption may matter for blood-sugar-managing users, low-carb dieters, and users with insulin resistance. Powder and capsule forms eliminate the sugar issue while preserving the bioactive profile — for daily-use users targeting sleep or chronic inflammation, powder is the practical default."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Tart Cherry: Montmorency Sleep + Recovery — Dose, Evidence, Stacks",
  "description": "Tart cherry dosing (Montmorency), the Howatson sleep RCT, the DOMS/recovery meta-analysis, and how it stacks with sleep peptides like DSIP plus the apigenin cluster.",
  "url": "https://profpeptide.com/supplements/tart-cherry",
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
    { "@type": "ListItem", "position": 3, "name": "Tart Cherry" }
  ]
};

export default function TartCherryPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Tart Cherry</h1>
        <span className="tag">Sleep &amp; Recovery</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 26, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Montmorency cherry, sour cherry, Prunus cerasus, MTC, Montmorency tart cherry concentrate
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Supplement Class:</span> Polyphenol-rich whole-fruit botanical / natural melatonin + tryptophan + anthocyanin matrix / anti-inflammatory adjunct
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Evidence Tier:</span> Moderate — Howatson 2012 sleep RCT; Pigeon 2010 insomnia pilot; Hill 2021 meta-analysis (14 RCTs) for exercise recovery; Bell 2014 inflammation reduction in athletes; Zhang 2012 gout-prevention trial; exercise-recovery evidence is stronger than sleep evidence; effect sizes are modest but consistent across cleanly designed trials
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is tart cherry?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Tart cherry — particularly the Montmorency cultivar (Prunus cerasus) — is a polyphenol-rich whole-fruit botanical with a combined bioactive matrix of natural melatonin, tryptophan, anthocyanins (cyanidin glycosides), and other antioxidant compounds. Its supplement profile rests on two distinct evidence arms: sleep (Howatson 2012 documented ~40 min extended sleep + elevated urinary melatonin metabolites; Pigeon 2010 documented ~84 min extension in older adults with insomnia) and exercise recovery (Hill 2021 meta-analysis of 14 RCTs showed reliable reduction in muscle soreness and improved strength recovery). The natural melatonin content is small (orders of magnitude below melatonin tablets), suggesting benefits come from the combined botanical matrix rather than melatonin alone. Tart cherry pairs naturally with{" "}
            <Link href="/peptides/dsip" className="text-[#0891b2] hover:underline">sleep peptides like DSIP</Link>{" "}
            and with the broader botanical sleep cluster ({" "}
            <Link href="/supplements/apigenin" className="text-[#0891b2] hover:underline">apigenin</Link>,{" "}
            <Link href="/supplements/glycine" className="text-[#0891b2] hover:underline">glycine</Link>,{" "}
            <Link href="/supplements/magnesium" className="text-[#0891b2] hover:underline">magnesium</Link>{" "}
            ).
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Extended total sleep time (~40 min in healthy adults per Howatson 2012; ~84 min in older insomnia per Pigeon 2010)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced muscle soreness and DOMS post-exercise (Hill 2021 meta-analysis, effect size −0.44)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved strength recovery after strenuous endurance/sprint exercise (effect size +0.43)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced inflammatory markers (IL-6, hsCRP) and oxidative stress in athletes (Bell 2014)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Gout attack prevention via xanthine oxidase inhibition (~35% reduction per Zhang 2012)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest osteoarthritis symptom improvement via anthocyanin anti-inflammation</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved sleep efficiency (~6% increase per Howatson 2012)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common dose:</span> 30 mL Montmorency tart cherry concentrate twice daily (morning + evening) for 7–14 days — the trial-validated protocol. Equivalent doses: ~480 mg powder, 8 oz whole-fruit juice. For chronic daily use, powder form is the practical default (no sugar load). For recovery: 5 days pre + 2 days post hard training events.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Available from supplement retailers, health food stores, and online. Quality varies — particularly around cultivar disclosure (look for Montmorency specifically). Review the quality-markers checklist in the Where to Buy section below.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=tart+cherry+extract&tag=profpeptide-20" label="Tart Cherry" />
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
        {["Montmorency", "Anthocyanins", "DOMS", "Endurance Recovery", "Natural Melatonin", "Anti-Inflammatory"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/melatonin" className="text-sm font-medium text-[#0891b2] hover:underline">Melatonin</Link>
          <Link href="/supplements/apigenin" className="text-sm font-medium text-[#0891b2] hover:underline">Apigenin</Link>
          <Link href="/supplements/glycine" className="text-sm font-medium text-[#0891b2] hover:underline">Glycine</Link>
          <Link href="/supplements/magnesium" className="text-sm font-medium text-[#0891b2] hover:underline">Magnesium</Link>
          <Link href="/supplements/curcumin" className="text-sm font-medium text-[#0891b2] hover:underline">Curcumin</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Tart Cherry" pagePath="/supplements/tart-cherry" />
    </div>
    </>
  );
}
