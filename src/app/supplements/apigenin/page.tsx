import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/apigenin",
  title: "Apigenin: Chamomile Flavonoid for Sleep + CD38/NAD+ Longevity",
  description:
    "Apigenin dosing (50 mg), GABA-A partial agonist sleep mechanism, the CD38/NAD+ longevity arm, and how it stacks with DSIP, Selank, and Epitalon peptides.",
});

const faqs = [
  {
    q: "How much apigenin should I take?",
    a: "50 mg taken 30–60 minutes before bed is the most common protocol — popularized in part by Andrew Huberman's recommendations. This dose is extrapolated from animal data and chamomile extract studies rather than direct human RCTs of pure apigenin (the evidence base is thinner than the popularity suggests). Start at 50 mg and adjust based on individual response. Higher doses (100 mg) are sometimes used but lack additional evidence; lower doses (25 mg) may work for sensitive users. Take with a small amount of dietary fat for better absorption — apigenin is poorly water-soluble.",
  },
  {
    q: "How does apigenin compare to chamomile tea?",
    a: "Massive dose difference. A typical cup of chamomile tea provides ~1–5 mg apigenin; a 50 mg supplement provides 10–50× that amount in concentrated form. Chamomile extract products (standardized to specific apigenin content) sit between the two. The tea is pleasant as a wind-down ritual and provides apigenin alongside other chamomile flavonoids and aromatic compounds — meaningful for the overall sensory and habit-formation arm of sleep hygiene. The supplement provides the concentrated dose-dependent effect studied in animal models and extrapolated to human use. Use both if you want — the tea won't blunt the supplement.",
  },
  {
    q: "Will apigenin cause dependence or tolerance like Xanax?",
    a: "Current evidence suggests no. Apigenin is a partial agonist at the benzodiazepine binding site on GABA-A receptors — meaning it has a ceiling on receptor activation that prevents the deep receptor downregulation and chronic adaptation responsible for benzodiazepine dependence. Long-term human dependency studies on standalone apigenin are limited, but no concerning signals have emerged so far. The partial-agonist pharmacology is structurally distinct from full agonists like benzodiazepines and theoretically protects against dependence. Reasonable to use chronically without the withdrawal concerns of prescription anxiolytics.",
  },
  {
    q: "Is the CD38/NAD+ longevity story for real?",
    a: "The mechanism (CD38 inhibition preserving NAD+) is well-established in cell and animal studies. Apigenin inhibits CD38 — the enzyme that consumes NAD+ — meaning it acts on a different layer than NAD+ precursor supplements (NMN, NR, oral NAD+). The honest framing: combining a precursor (input side) with apigenin (consumption side) is mechanistically coherent. But whether oral apigenin at typical doses produces meaningful NAD+ elevation in humans, and whether this translates to longevity outcomes, remains unproven in humans. The mechanism is real; the clinical translation is mechanistically reasonable but not directly RCT-validated. Treat apigenin as a sleep aid with a possible longevity bonus, not a longevity intervention with sleep benefits.",
  },
  {
    q: "Can I stack apigenin with DSIP or other sleep peptides?",
    a: (
      <>
        Yes — and the stack is mechanistically natural and represents one of the strongest cluster-cohesive combinations in the Russian sleep + longevity territory.{" "}
        <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">DSIP</Link>{" "}
        (delta sleep-inducing peptide) operates directly on slow-wave sleep architecture — peptide-level intervention on sleep depth.{" "}
        <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>{" "}
        (a tuftsin analog) provides anxiolytic effects via GABA-A receptor sensitivity modulation — same broad GABA-A target as apigenin but at a different mechanism layer (Selank modulates receptor sensitivity; apigenin is partial agonist at the benzodiazepine binding site).{" "}
        <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>{" "}
        adds the pineal-axis longevity arm — telomere maintenance and circadian regulation. The four-component stack (DSIP + Selank + Epitalon + apigenin) covers sleep architecture, anxiolytic GABA-A modulation, pineal-axis longevity, and benzodiazepine-site partial agonism + CD38/NAD+ preservation from four distinct mechanism layers. Mechanistically complementary, no known negative interactions.
      </>
    ),
  },
  {
    q: "Apigenin combined with NMN or NAD+ — does that pairing make sense?",
    a: (
      <>
        Yes, and the mechanism layering is biochemically coherent.{" "}
        <Link href="/supplements/nmn" className="text-[#3A759F] hover:underline">NMN</Link>{" "}
        and{" "}
        <Link href="/supplements/nad-plus" className="text-[#3A759F] hover:underline">NAD+ precursors</Link>{" "}
        operate on the input side — feeding the salvage pathway to raise NAD+ levels. Apigenin operates on the consumption side — inhibiting CD38, the major NAD+-consuming enzyme that increases activity with aging and inflammation. Combining the two addresses both ends of the NAD+ balance equation: more substrate in (NMN/NR), less destruction (apigenin via CD38 inhibition). This is mechanistically natural for users building comprehensive NAD+ longevity protocols. The combination isn&apos;t rigorously RCT-validated as a combination, but the pharmacological rationale is mature.
      </>
    ),
  },
  {
    q: "What about apigenin during pregnancy?",
    a: "Avoid concentrated apigenin supplements during pregnancy. Chamomile (and by extension apigenin) has historically been associated with uterine activity concerns at high doses, with theoretical risk of triggering contractions. Culinary chamomile tea (1–2 cups daily) is generally considered safe during pregnancy in most clinical practice, but concentrated 50 mg supplements deliver far higher apigenin per dose than tea provides. The evidence base for supplemental apigenin in pregnancy is essentially absent; the conservative recommendation is to avoid until breastfeeding ends or coordinate with OB if there's a clinical indication.",
  },
  {
    q: "Does apigenin actually help with anxiety, or just sleep?",
    a: "Both, with related mechanisms — but anxiety evidence comes mostly from chamomile extract studies rather than standalone apigenin. Chamomile extract has shown anxiolytic effects in RCTs in adults with generalized anxiety disorder; apigenin is the principal active flavonoid in chamomile, so the effect likely operates through apigenin's GABA-A partial agonism. Effect sizes are modest — not benzodiazepine-class — but real. Standalone apigenin extracts at 50 mg may produce similar anxiolytic effects via the same mechanism, though direct standalone-apigenin anxiety trials are limited. For mild-to-moderate anxiety: reasonable adjunct. For severe clinical anxiety: not a substitute for established treatment.",
  },
];

const studies = [
  {
    title: "Apigenin as a Bioactive Compound from Plants for Mental Health and Sleep",
    authors: "Salehi B, Venditti A, Sharifi-Rad M, et al.",
    journal: "Molecules",
    year: "2019",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/30901869/",
    summary: "A comprehensive review of apigenin's bioactive properties covering GABAergic mechanism (benzodiazepine-site partial agonism on GABA-A receptors), CD38 inhibition for NAD+ preservation, anti-inflammatory effects, anxiolytic and sedative effects in animal models, and emerging human evidence primarily via chamomile extract trials. The Salehi 2019 review is the most-cited single-source reference for the apigenin evidence landscape and mechanism case.",
  },
  {
    title: "Chamomile (Matricaria recutita) May Provide Anti-Anxiety and Anti-Depressant Effects in Patients with Generalized Anxiety Disorder",
    authors: "Mao JJ, Xie SX, Keefe JR, Soeller I, Li QS, Amsterdam JD",
    journal: "Phytomedicine",
    year: "2016",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/27912875/",
    summary: "A 38-week randomized clinical trial of chamomile extract (1,500 mg/day, standardized to 1.2% apigenin) in 179 patients with generalized anxiety disorder. Chamomile produced significant clinically meaningful reductions in GAD severity, with effect maintained over the long-term follow-up. The Mao 2016 trial is the cleanest human RCT evidence for chamomile-apigenin in anxiety — though it studies chamomile extract rather than pure standalone apigenin.",
  },
  {
    title: "Long-Term Chamomile (Matricaria chamomilla L.) Treatment for Generalized Anxiety Disorder: A Randomized Clinical Trial",
    authors: "Amsterdam JD, Shults J, Soeller I, Mao JJ, Rockwell K, Newberg AB",
    journal: "Alternative Therapies in Health and Medicine",
    year: "2012",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/22894890/",
    summary: "A randomized double-blind placebo-controlled trial of chamomile extract in 57 adults with mild-to-moderate GAD over 8 weeks. Chamomile significantly reduced anxiety scores versus placebo with good tolerability. Foundational evidence for the chamomile-apigenin anxiety effect and one of the most-cited single-RCT references for the chamomile clinical use case.",
  },
  {
    title: "CD38 Inhibitors Protect Against Age-Related NAD+ Decline and Improve Healthspan",
    authors: "Tarragó MG, Chini CCS, Kanamori KS, et al.",
    journal: "Cell Metabolism",
    year: "2018",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/29886346/",
    summary: "A mechanistic study demonstrating CD38 inhibition (including by apigenin) preserves NAD+ levels and improves healthspan markers in aged mice. CD38 activity increases with age and inflammation, consuming NAD+ and contributing to age-related NAD+ decline. Apigenin's CD38 inhibition provides a mechanism for the longevity-relevant arm of its supplement profile. The Tarragó 2018 paper is the foundational mechanism reference for apigenin's NAD+ preservation effect.",
  },
  {
    title: "The Effects of Chamomile Extract on Sleep Quality Among Elderly People: A Clinical Trial",
    authors: "Adib-Hajbaghery M, Mousavi SN",
    journal: "Complementary Therapies in Medicine",
    year: "2017",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/29154054/",
    summary: "An open-label trial of chamomile extract (400 mg twice daily) in 60 elderly adults with poor sleep quality. Chamomile significantly improved sleep quality scores versus baseline over 28 days. Methodology is weaker than placebo-controlled trials but supports the sleep-effect use case in older populations where endogenous GABAergic tone declines with age.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does apigenin work?",
    intro:
      "Apigenin works primarily through partial agonism at the benzodiazepine binding site of GABA-A receptors — same receptor family targeted by Xanax, Valium, and alcohol, but with a ceiling on activation that prevents the deep receptor adaptation responsible for benzodiazepine dependence. Secondary mechanism: CD38 inhibition, which preserves NAD+ levels and provides a longevity-relevant arm distinct from the sleep mechanism.",
    body: [
      "GABA-A partial agonism at the benzodiazepine site. Apigenin binds to the benzodiazepine binding site on GABA-A receptors — the same site targeted by Xanax, Valium, Klonopin, and similar prescription anxiolytics. Critically, apigenin is a partial agonist, meaning it produces submaximal receptor activation even at high doses. The partial-agonist pharmacology is structurally distinct from full agonists like benzodiazepines and theoretically protects against the deep receptor downregulation that drives benzodiazepine dependence.",
      "Inhibitory neurotransmission modulation. By enhancing GABA-A receptor activity, apigenin amplifies the inhibitory neurotransmitter tone in the CNS — reducing neuronal firing and producing the calming, sleep-supporting effects. The effect is milder than benzodiazepines but mechanistically similar.",
      "CD38 inhibition and NAD+ preservation. CD38 is an enzyme that consumes NAD+, particularly in immune cells and tissues with high inflammation. CD38 activity increases with age, contributing to the age-related NAD+ decline that drives multiple aging-biology pathways. Apigenin inhibits CD38, reducing NAD+ consumption and preserving NAD+ pools — a mechanism distinct from NAD+ precursor supplementation (NMN, NR) which works on the input side.",
      "Anti-inflammatory effects. Apigenin modulates NF-κB signaling and reduces inflammatory cytokine production. Anti-inflammatory effect supports the broader longevity-relevant case and contributes to the chamomile-apigenin evidence in GI and skin inflammation contexts.",
      "Mast cell stabilization. Apigenin has been documented as a mast cell stabilizer in some research — reducing histamine release and inflammatory mediator production. This supports the antihistamine-adjacent applications of chamomile in allergy and skin contexts.",
      "Bioavailability constraint. Apigenin is poorly water-soluble — bioavailability of oral apigenin is modest. Taking with dietary fat (small amount of nuts, olive oil) modestly improves absorption. This is the central practical constraint for translating in-vitro and animal effects to clinical outcomes.",
    ],
  },
  {
    id: "research",
    title: "What does apigenin actually do?",
    intro:
      "Apigenin's evidence base is heterogeneous. Strongest evidence comes from chamomile extract studies (where apigenin is the principal active flavonoid) for anxiety and sleep in clinical populations. Standalone pure-apigenin trials are sparse and mostly animal-based. CD38/NAD+ longevity mechanism is animal-strong but human-untested.",
    body: [
      "Chamomile extract for anxiety (Strong via chamomile, indirect for apigenin). Mao 2016 (38-week RCT, n=179) and Amsterdam 2012 (8-week RCT, n=57) document significant anxiolytic effects of chamomile extract standardized to apigenin content in generalized anxiety disorder. Effect sizes are clinically meaningful. Apigenin is the principal active flavonoid driving the effect.",
      "Standalone pure apigenin for anxiety/sleep (Limited human, animal-supported). Animal models consistently show sedative and anxiolytic effects of pure apigenin via the GABA-A benzodiazepine-site mechanism. Sedative effects are blocked by flumazenil (the benzodiazepine antagonist), confirming the mechanism. Direct standalone-apigenin human RCTs at the 50 mg evening dose are sparse — the popular protocol is extrapolated from animal data + chamomile evidence.",
      "Sleep in older adults (Moderate via chamomile). Adib-Hajbaghery 2017 documented sleep quality improvement with chamomile extract in elderly adults. Methodology weaker than ideal (open-label) but supports the use case in age-related GABAergic decline contexts.",
      "CD38 inhibition and NAD+ preservation (Animal-strong, Human-emerging). Tarragó 2018 demonstrated CD38 inhibitors (including apigenin) preserve NAD+ levels and improve healthspan markers in aged mice. Human clinical NAD+ elevation from oral apigenin at typical doses is not directly demonstrated.",
      "Anti-inflammatory effects (Mechanistic). NF-κB inhibition and cytokine reduction documented across multiple in vitro and animal studies. Translation to human clinical outcomes is mechanistically plausible but not robustly RCT-tested for specific inflammatory conditions.",
      "Cancer adjunct research (Preclinical/Early). Extensive preclinical work suggests apigenin has anti-cancer effects via apoptosis induction and angiogenesis inhibition. Human trial data is essentially absent. Treat as mechanistically interesting research direction, not clinical recommendation.",
      "Skin and allergy applications (Modest via chamomile). Chamomile (apigenin-containing) has traditional use for skin inflammation and allergic contexts. Mast cell stabilization mechanism supports the use case. Human evidence is modest.",
      "Pediatric sleep and colic (Traditional, limited modern evidence). Chamomile has long traditional use for infant colic and sleep — mostly under medical supervision, with limited modern RCT evidence. Adult supplemental apigenin not indicated for pediatric use.",
    ],
  },
  {
    id: "dosing",
    title: "How is apigenin dosed?",
    intro:
      "Apigenin dosing is relatively simple — 50 mg pre-bed is the dominant supplemental protocol, popularized by Andrew Huberman's recommendations. The 50 mg dose is extrapolated from animal data and chamomile extract scaling rather than direct human RCT validation. Doses range from 25–100 mg with limited evidence for the higher end.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard pre-bed dose.</span> 50 mg pure apigenin taken 30–60 minutes before bed, with a small amount of dietary fat (a few nuts, olive oil) for absorption. The popular Huberman-protocol dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Lower starting dose.</span> 25 mg for sensitive users or initial tolerance check. Some users find this sufficient for sleep effects.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Chamomile extract alternative.</span> 400–1,500 mg/day chamomile extract standardized to apigenin content (~1.2% apigenin in the Mao 2016 trial product). Provides apigenin alongside other chamomile flavonoids; better-RCT-validated than standalone apigenin.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Higher dose.</span> 75–100 mg occasionally used but limited additional evidence. Doesn&apos;t clearly add benefit and may increase CYP enzyme inhibition.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Chamomile tea (culinary).</span> 1–2 cups per evening provides ~1–10 mg apigenin. Pleasant wind-down ritual; far below supplemental dose. Use as adjunct, not substitute for the supplement if you want documented effects.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: acute sleep effects within 30–60 minutes. Anxiolytic chronic effects (chamomile-extract trials) emerge over 4–8 weeks. CD38/NAD+ effects (if clinically relevant) require chronic dosing.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Label math.</span> &ldquo;Apigenin 50 mg&rdquo; should mean 50 mg pure apigenin (typically from chamomile extract concentrated to 98%+ apigenin). &ldquo;Chamomile extract 500 mg standardized to 5% apigenin&rdquo; provides 25 mg apigenin per serving. Read for the actual apigenin content, not just extract mass.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take apigenin",
    intro:
      "Apigenin is taken orally as capsules of standardized extract, occasionally as powder. The practical considerations are bioavailability (poorly water-soluble — take with fat), timing (30–60 min pre-bed for sleep), and source quality (chamomile-derived 98%+ pure apigenin is the studied form).",
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once nightly for sleep protocol. Chronic anxiolytic use: once daily (evening preferred to leverage the sleep-supportive effect).</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">30–60 minutes before bed. Avoid morning dosing if you don&apos;t want the calming effect during waking hours.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">With a small amount of dietary fat — apigenin is poorly water-soluble. A few nuts, a teaspoon of olive oil, or a small piece of dark chocolate is sufficient to modestly improve absorption.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Pure apigenin extract (typically 98%+ from chamomile source) — the form most studied. Synthetic apigenin exists but rare in commercial products. Chamomile extract standardized to apigenin content is an evidence-supported alternative.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Look for &ldquo;98% apigenin&rdquo; or &ldquo;pure apigenin&rdquo; with chamomile source disclosed. Independent testing has occasionally found products with significantly less apigenin than labeled — third-party testing is the relevant screen. Reputable brands: Nootropics Depot, Double Wood, Pure Encapsulations.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No cycling required pharmacologically — partial-agonist pharmacology theoretically prevents tolerance development. No tolerance documented at clinical doses.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does apigenin stack with?",
    intro:
      "Apigenin is one of the more naturally stackable supplements — its GABA-A partial agonism + CD38 inhibition spans both the sleep cluster and the longevity cluster. Pairs cleanly with sleep peptides, NAD+ precursors, and other GABAergic supplements. The three areas below cover the natural stacking categories.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Apigenin pairs naturally with the Russian-origin sleep + longevity peptide cluster — and is one of the few supplements that spans both Russian-sleep and NAD+/longevity peptide clusters via its dual mechanism.{" "}
            <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">DSIP</Link>{" "}
            (delta sleep-inducing peptide) operates directly on slow-wave sleep architecture — peptide-level intervention on sleep depth.{" "}
            <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>{" "}
            (a tuftsin analog) provides anxiolytic effects via GABA-A receptor sensitivity modulation — same broad target as apigenin but at a different mechanism layer.{" "}
            <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>{" "}
            adds the pineal-axis longevity arm — telomere maintenance and circadian regulation, complementary to apigenin&apos;s CD38/NAD+ longevity arm. Add{" "}
            <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+ peptide</Link>{" "}
            for users wanting direct NAD+ delivery alongside apigenin&apos;s consumption-side preservation. Mechanistically complementary across the cluster, no known negative interactions.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/nmn" className="text-[#3A759F] hover:underline">NMN</Link>{" "}
              or{" "}
              <Link href="/supplements/nad-plus" className="text-[#3A759F] hover:underline">NAD+ precursors</Link>{" "}
              — apigenin&apos;s CD38 inhibition preserves the NAD+ that NMN/NR provide. Combining the two addresses both sides of the NAD+ balance equation (more substrate in, less destruction).
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/magnesium" className="text-[#3A759F] hover:underline">Magnesium glycinate</Link>{" "}
              — magnesium is a GABA-A positive allosteric modulator. Pairs cleanly with apigenin&apos;s benzodiazepine-site partial agonism at the same receptor.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/glycine" className="text-[#3A759F] hover:underline">Glycine</Link>{" "}
              — body-temperature regulation for sleep onset + inhibitory neurotransmission. Different sleep mechanism; mechanistically complementary.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/l-theanine" className="text-[#3A759F] hover:underline">L-theanine</Link>{" "}
              — alpha-wave induction + GABAergic enhancement via different mechanism. Compatible.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/melatonin" className="text-[#3A759F] hover:underline">Melatonin</Link>{" "}
              — circadian signaling. Different mechanism (MT1/MT2 receptor) from apigenin&apos;s GABA-A target; fully compatible.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/tart-cherry" className="text-[#3A759F] hover:underline">Tart cherry</Link>{" "}
              — natural melatonin + tryptophan + anthocyanin botanical matrix. Compatible botanical sleep-stack pairing.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/quercetin" className="text-[#3A759F] hover:underline">Quercetin</Link>{" "}
              — another flavonoid with anti-inflammatory and CD38-adjacent effects. Common longevity-stack co-occupant.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pre-bed timing with dietary fat.</span> 30–60 minutes before target bedtime, taken with a small amount of fat (few nuts, olive oil) for absorption.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid combining with alcohol or sedatives.</span> Same GABA-A receptor system as benzodiazepines and alcohol; additive CNS depression risk. Separate dosing.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Chamomile tea as adjunct.</span> Pleasant wind-down ritual that adds a small amount of apigenin alongside other chamomile flavonoids; complements supplemental dosing.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Track sleep impact.</span> Effects on sleep onset and quality are modest — track subjectively or with sleep-tracking tools to assess individual response over 2–4 weeks.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid during pregnancy.</span> Concentrated supplemental doses; uterine activity concerns at high doses. Culinary chamomile tea generally considered safer in pregnancy but defer to OB.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "Apigenin has a favorable safety profile at supplemental doses. The main practical considerations are CYP enzyme inhibition (affecting metabolism of certain medications), asteraceae allergy contraindications, and additive sedation with other CNS depressants.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild drowsiness — intentional for sleep applications; undesirable if dosed during waking hours.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild GI discomfort — occasional, generally at higher doses or empty stomach.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Vivid dreams — occasionally reported; likely tied to GABAergic effects on sleep architecture.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No documented serious adverse events at standard supplemental doses across the human research base.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Asteraceae (daisy family) allergy reactions.</span> Users with allergies to ragweed, chrysanthemums, daisies, marigolds may react to chamomile-derived apigenin. Switch to synthetic source if available, or avoid.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pregnancy uterine activity concerns.</span> Concentrated apigenin theoretically may trigger uterine activity at high doses. Avoid supplemental apigenin during pregnancy; culinary chamomile tea generally considered safer.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Hypotension at very high doses — apigenin has modest blood-pressure-lowering effects in some animal studies.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">CYP2C9 and CYP3A4 substrates.</span> Apigenin inhibits these cytochrome P450 enzymes; may affect metabolism of warfarin, statins, certain antidepressants (SSRIs metabolized by CYP3A4), and some calcium channel blockers. Clinically meaningful for narrow-therapeutic-index drugs. Coordinate with prescribing clinician.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anticoagulants (warfarin, apixaban, rivaroxaban).</span> Mild antiplatelet effect + CYP2C9 inhibition affecting warfarin metabolism. Monitor INR for warfarin users; coordinate with prescribing clinician.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Alcohol and benzodiazepines.</span> Same GABA-A receptor system; additive CNS depression possible. Avoid combining with alcohol or benzodiazepines without medical guidance.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Z-drugs (Ambien, Lunesta).</span> Same GABA-A target; additive sedation. Avoid combining.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Other GABAergic supplements — generally compatible (see Stacks section) but watch total inhibitory tone if stacking aggressively.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pregnancy — avoid supplemental apigenin. Culinary chamomile generally safer.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about apigenin",
    intro:
      "Apigenin has rapidly gained popularity (largely via Andrew Huberman's recommendations) but the evidence base for standalone pure apigenin remains thinner than the popularity suggests. Several open questions affect how confidently it can be recommended.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Standalone apigenin vs chamomile extract evidence gap.</span> The strongest human RCT evidence is for chamomile extract (Mao 2016, Amsterdam 2012) standardized to apigenin content — not standalone purified apigenin. The 50 mg supplemental dose is extrapolated from animal data and chamomile dosing rather than direct human RCT validation of standalone apigenin. Whether pure apigenin at 50 mg produces the same effects as chamomile extract&apos;s broader flavonoid matrix is mechanistically reasonable but not directly demonstrated.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">CD38/NAD+ human translation.</span> Tarragó 2018 mechanism is animal-strong. Whether oral apigenin at supplemental doses meaningfully elevates human NAD+ levels, and whether this translates to longevity outcomes, is essentially untested. The longevity claim is mechanistically reasonable but not RCT-validated.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Bioavailability constraint.</span> Apigenin is poorly water-soluble. Oral bioavailability is modest, even with dietary fat coadministration. The translation of in-vitro effective concentrations to clinical outcomes is gated by absorption — and may explain why some apigenin trials show smaller effects than the preclinical work would predict.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Long-term safety beyond a few weeks.</span> Most clinical trials extend to weeks or a few months. Multi-year continuous supplemental apigenin use is not directly RCT-characterized — though the partial-agonist pharmacology theoretically protects against tolerance and dependence.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">CYP inhibition clinical significance.</span> CYP2C9 and CYP3A4 inhibition is documented mechanism. The clinical-significance threshold for users on chronic CYP-substrate medications isn&apos;t precisely characterized — modest interaction is likely for most users but could be clinically meaningful for narrow-therapeutic-index drugs.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Product quality variance.</span> Independent testing has occasionally found apigenin products with significantly less apigenin than labeled. Some may also contain other chamomile flavonoids or undisclosed compounds. Third-party tested products are the practical mitigation.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Healthy young-adult evidence.</span> Most chamomile-apigenin trials are in older adults or anxiety populations. Whether apigenin produces meaningful effects in healthy young adults beyond mild relaxation is mechanistically reasonable but not directly demonstrated.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy apigenin",
    intro:
      "Apigenin is available primarily as standalone extract supplements (typically 50 mg capsules) and as chamomile extract products with varying apigenin standardization. Quality varies — independent testing has found products with significantly less apigenin than labeled. The screen below is what we use before clicking through.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">98%+ pure apigenin</span> standardized extract — the studied form. Lower-purity products dilute the per-mg apigenin content.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Source disclosed</span> — chamomile extract is the conventional source; some products use parsley or synthetic apigenin. Chamomile-derived is the trial-validated source.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">50 mg per capsule</span> — matching the popular evening protocol. Lower-dose products (25 mg) and higher-dose products (75–100 mg) also available.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested</span> — USP, NSF, or ConsumerLab certifications signal independent verification. HPLC verification of apigenin content is particularly relevant given documented label variance.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar for any supplement.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reputable brands</span> — Nootropics Depot, Double Wood, Pure Encapsulations, Life Extension typically have cleaner quality control than generic supplement brands.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Certificate of Analysis (COA) on request</span> — signals manufacturer transparency about testing.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No proprietary sleep blends</span> that obscure the actual apigenin dose alongside other ingredients.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid implausibly low-priced products</span> — high-purity apigenin extraction is moderately expensive; very cheap products often underdeliver on actual content.</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=apigenin&tag=profpeptide-20" label="Apigenin" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Apigenin FAQ",
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
          Salehi B, Venditti A, Sharifi-Rad M, et al. The therapeutic potential of apigenin. Molecules. 2019;24(6):1129.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/30901869/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/30901869/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Mao JJ, Xie SX, Keefe JR, Soeller I, Li QS, Amsterdam JD. Long-term chamomile (Matricaria chamomilla L.) treatment for generalized anxiety disorder: a randomized clinical trial. Phytomedicine. 2016;23(14):1735-1742.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/27912875/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/27912875/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Amsterdam JD, Shults J, Soeller I, Mao JJ, Rockwell K, Newberg AB. Chamomile (Matricaria recutita) may provide antidepressant activity in anxious, depressed humans: an exploratory study. Altern Ther Health Med. 2012;18(5):44-49.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22894890/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22894890/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Tarragó MG, Chini CCS, Kanamori KS, et al. A potent and specific CD38 inhibitor ameliorates age-related metabolic dysfunction by reversing tissue NAD+ decline. Cell Metab. 2018;27(5):1081-1095.e10.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29886346/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29886346/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Adib-Hajbaghery M, Mousavi SN. The effects of chamomile extract on sleep quality among elderly people: a clinical trial. Complement Ther Med. 2017;35:109-114.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29154054/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29154054/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Avallone R, Zanoli P, Puia G, Kleinschnitz M, Schreier P, Baraldi M. Pharmacological profile of apigenin, a flavonoid isolated from Matricaria chamomilla. Biochem Pharmacol. 2000;59(11):1387-1394.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/10751547/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/10751547/
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
      "name": "How much apigenin should I take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "50 mg taken 30–60 minutes before bed is the most common protocol — popularized in part by Andrew Huberman's recommendations. This dose is extrapolated from animal data and chamomile extract studies rather than direct human RCTs of pure apigenin. Start at 50 mg and adjust based on individual response. Higher doses (100 mg) are sometimes used but lack additional evidence; lower doses (25 mg) may work for sensitive users. Take with a small amount of dietary fat for better absorption — apigenin is poorly water-soluble."
      }
    },
    {
      "@type": "Question",
      "name": "How does apigenin compare to chamomile tea?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Massive dose difference. A typical cup of chamomile tea provides ~1–5 mg apigenin; a 50 mg supplement provides 10–50× that amount in concentrated form. Chamomile extract products (standardized to specific apigenin content) sit between the two. The tea is pleasant as a wind-down ritual and provides apigenin alongside other chamomile flavonoids and aromatic compounds. The supplement provides the concentrated dose-dependent effect studied in animal models and extrapolated to human use."
      }
    },
    {
      "@type": "Question",
      "name": "Will apigenin cause dependence or tolerance like Xanax?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Current evidence suggests no. Apigenin is a partial agonist at the benzodiazepine binding site on GABA-A receptors — meaning it has a ceiling on receptor activation that prevents the deep receptor downregulation and chronic adaptation responsible for benzodiazepine dependence. Long-term human dependency studies on standalone apigenin are limited, but no concerning signals have emerged so far. The partial-agonist pharmacology is structurally distinct from full agonists like benzodiazepines."
      }
    },
    {
      "@type": "Question",
      "name": "Is the CD38/NAD+ longevity story for real?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The mechanism (CD38 inhibition preserving NAD+) is well-established in cell and animal studies. Apigenin inhibits CD38 — the enzyme that consumes NAD+ — meaning it acts on a different layer than NAD+ precursor supplements (NMN, NR, oral NAD+). The honest framing: combining a precursor (input side) with apigenin (consumption side) is mechanistically coherent. But whether oral apigenin at typical doses produces meaningful NAD+ elevation in humans, and whether this translates to longevity outcomes, remains unproven in humans."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stack apigenin with DSIP or other sleep peptides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — and the stack is mechanistically natural and represents one of the strongest cluster-cohesive combinations in the Russian sleep + longevity territory. DSIP operates directly on slow-wave sleep architecture. Selank provides anxiolytic effects via GABA-A receptor sensitivity modulation — same broad target as apigenin but at a different mechanism layer. Epitalon adds the pineal-axis longevity arm — complementary to apigenin's CD38/NAD+ longevity arm. The four-component stack covers sleep architecture, anxiolytic GABA-A modulation, pineal-axis longevity, and benzodiazepine-site partial agonism + CD38/NAD+ preservation."
      }
    },
    {
      "@type": "Question",
      "name": "Apigenin combined with NMN or NAD+ — does that pairing make sense?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, and the mechanism layering is biochemically coherent. NMN and NAD+ precursors operate on the input side — feeding the salvage pathway to raise NAD+ levels. Apigenin operates on the consumption side — inhibiting CD38, the major NAD+-consuming enzyme that increases activity with aging and inflammation. Combining the two addresses both ends of the NAD+ balance equation: more substrate in (NMN/NR), less destruction (apigenin via CD38 inhibition). The combination isn't rigorously RCT-validated as a combination, but the pharmacological rationale is mature."
      }
    },
    {
      "@type": "Question",
      "name": "What about apigenin during pregnancy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Avoid concentrated apigenin supplements during pregnancy. Chamomile (and by extension apigenin) has historically been associated with uterine activity concerns at high doses, with theoretical risk of triggering contractions. Culinary chamomile tea (1–2 cups daily) is generally considered safe during pregnancy in most clinical practice, but concentrated 50 mg supplements deliver far higher apigenin per dose than tea provides. The evidence base for supplemental apigenin in pregnancy is essentially absent; the conservative recommendation is to avoid."
      }
    },
    {
      "@type": "Question",
      "name": "Does apigenin actually help with anxiety, or just sleep?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both, with related mechanisms — but anxiety evidence comes mostly from chamomile extract studies rather than standalone apigenin. Chamomile extract has shown anxiolytic effects in RCTs in adults with generalized anxiety disorder; apigenin is the principal active flavonoid in chamomile, so the effect likely operates through apigenin's GABA-A partial agonism. Effect sizes are modest — not benzodiazepine-class — but real. For mild-to-moderate anxiety: reasonable adjunct. For severe clinical anxiety: not a substitute for established treatment."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Apigenin: Chamomile Flavonoid for Sleep + CD38/NAD+ Longevity",
  "description": "Apigenin dosing (50 mg), GABA-A partial agonist sleep mechanism, the CD38/NAD+ longevity arm, and how it stacks with DSIP, Selank, and Epitalon peptides.",
  "url": "https://profpeptide.com/supplements/apigenin",
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
    { "@type": "ListItem", "position": 3, "name": "Apigenin" }
  ]
};

export default function ApigeninPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Apigenin</h1>
        <span className="tag">Sleep &amp; Recovery</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 26, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> 4&apos;,5,7-trihydroxyflavone, chamomile flavonoid, Matricaria chamomilla active flavonoid
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Supplement Class:</span> Plant flavonoid / GABA-A receptor partial agonist (benzodiazepine binding site) / CD38 inhibitor (NAD+ preservation)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Evidence Tier:</span> Moderate (chamomile extract) — Mao 2016 38-week GAD RCT (n=179) + Amsterdam 2012 + Adib-Hajbaghery 2017 elderly sleep trial — all using chamomile extract standardized to apigenin content. Limited (standalone pure apigenin) — animal evidence strong via Avallone 2000 + Tarragó 2018 CD38 mechanism work; direct human RCTs of standalone 50 mg apigenin are sparse and the popular dose is extrapolated rather than directly validated
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is apigenin?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Apigenin is a plant flavonoid found highest in dried chamomile flowers (the source of chamomile tea), parsley, celery, and citrus peels. It is the principal active flavonoid driving chamomile&apos;s traditional calming and sleep-supporting effects, and has gained substantial recent popularity (largely via Andrew Huberman&apos;s recommendations) as a standalone supplement at 50 mg pre-bed. The primary mechanism is partial agonism at the benzodiazepine binding site of GABA-A receptors — same site targeted by Xanax, Valium, and alcohol, but with a ceiling on activation that theoretically prevents the deep receptor adaptation responsible for benzodiazepine dependence. Secondary mechanism: CD38 inhibition (Tarragó 2018), preserving NAD+ levels by reducing the major NAD+-consuming enzyme — a longevity-relevant arm that complements (rather than duplicates) NAD+ precursor supplements (NMN, NR). The strongest human evidence is from chamomile extract RCTs (Mao 2016 GAD trial, Amsterdam 2012, Adib-Hajbaghery 2017 elderly sleep) where apigenin is the principal active. Standalone pure-apigenin trials at the 50 mg supplemental dose are sparse — the popular protocol is extrapolated from animal data and chamomile dosing rather than directly RCT-validated. Apigenin pairs naturally with{" "}
            <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">sleep peptides like DSIP, Selank, and Epitalon</Link>{" "}
            via complementary mechanism layers spanning both Russian-sleep and NAD+/longevity peptide clusters.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anxiolytic effect in GAD (Mao 2016, Amsterdam 2012 chamomile-extract RCTs)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved sleep quality in elderly populations (Adib-Hajbaghery 2017)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">GABA-A receptor partial agonism at the benzodiazepine binding site (mechanism strong, dependence risk theoretically minimal)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">CD38 inhibition preserving NAD+ levels (Tarragó 2018 animal evidence)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anti-inflammatory effects via NF-κB modulation</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mast cell stabilization (antihistamine-adjacent)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mechanism-based longevity case complementing NAD+ precursor supplementation</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common dose:</span> 50 mg pure apigenin taken 30–60 minutes before bed, with a small amount of dietary fat (poorly water-soluble — fat improves absorption). The Huberman-protocol dose; extrapolated from animal data and chamomile evidence rather than direct human RCT validation. Lower (25 mg) for sensitive users; higher (75–100 mg) occasionally used without additional evidence.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Watch for:</span> CYP2C9 and CYP3A4 inhibition — affects metabolism of warfarin, statins, some antidepressants (coordinate with prescribing clinician). Asteraceae allergies (ragweed, daisies, chrysanthemums) — possible cross-reactivity with chamomile-derived apigenin. Pregnancy contraindication for concentrated supplements.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=apigenin&tag=profpeptide-20" label="Apigenin" />
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
        {["Chamomile", "GABA-A Partial Agonist", "CD38 Inhibitor", "NAD+ Preservation", "Anxiolytic", "Sleep"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/nmn" className="text-sm font-medium text-[#3A759F] hover:underline">NMN</Link>
          <Link href="/supplements/nad-plus" className="text-sm font-medium text-[#3A759F] hover:underline">NAD+</Link>
          <Link href="/supplements/magnesium" className="text-sm font-medium text-[#3A759F] hover:underline">Magnesium</Link>
          <Link href="/supplements/glycine" className="text-sm font-medium text-[#3A759F] hover:underline">Glycine</Link>
          <Link href="/supplements/melatonin" className="text-sm font-medium text-[#3A759F] hover:underline">Melatonin</Link>
          <Link href="/supplements/tart-cherry" className="text-sm font-medium text-[#3A759F] hover:underline">Tart Cherry</Link>
          <Link href="/supplements/quercetin" className="text-sm font-medium text-[#3A759F] hover:underline">Quercetin</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Apigenin" pagePath="/supplements/apigenin" />
    </div>
    </>
  );
}
