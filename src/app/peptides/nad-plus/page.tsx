import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/nad-plus",
  title: "NAD+ — Cellular Metabolism, Longevity, Sirtuin Activator | Prof. Peptide",
  description:
    "NAD+ research profile: cellular metabolism cofactor, sirtuin activation, dosing protocols (SC, IV, oral), side effects, FAQ, and longevity applications.",
});

const faqs = [
  {
    q: "Is NAD+ a peptide?",
    a: "Technically no. NAD+ is a dinucleotide cofactor — not a peptide. It's included on Prof. Peptide because it's commonly stacked with peptide therapies in longevity protocols, sold by the same specialty vendors, and serves as the cofactor for the same sirtuin and PARP pathways targeted by other anti-aging interventions.",
  },
  {
    q: "Is NAD+ FDA-approved?",
    a: "NAD+ is NOT FDA-approved as an injectable therapy. Oral precursors (NMN, NR) are sold as dietary supplements in the US, though the FDA has issued warnings to some manufacturers. NAD+ IV infusion is offered in clinical settings (functional medicine clinics) under physician supervision. Subcutaneous and oral research-grade NAD+ is sold by specialty vendors.",
  },
  {
    q: "NAD+ vs NMN vs NR — which is best?",
    a: "Different positions in the same metabolic pathway. NAD+ is the active cofactor itself; NMN (nicotinamide mononucleotide) and NR (nicotinamide riboside) are precursors the body converts to NAD+. Direct NAD+ injection is most bioavailable but most painful (subcutaneous burning) and most controversial. Oral NMN and NR avoid injection but require the body to convert them. Most longevity research focuses on NMN and NR for practical reasons; clinical settings use IV NAD+.",
  },
  {
    q: "Does subcutaneous NAD+ really burn that much?",
    a: "Yes. Subcutaneous NAD+ injection is notoriously painful at the injection site — burning sensation that can last several minutes. Slow injection over 30–60 seconds and site rotation help reduce this. IV infusion (clinical setting) is more tolerable; oral precursors (NMN, NR) avoid the issue entirely. Many users start oral, then move to clinical IV if they want stronger effects.",
  },
  {
    q: "How is NAD+ different from B vitamins?",
    a: "NAD+ is synthesized in the body from niacin (vitamin B3) and other precursors. Niacin supplementation increases NAD+ levels through this conversion pathway, which is part of why niacin has been used historically for aging-related applications. The advantage of direct NAD+ or NMN/NR over niacin is bypassing some of the conversion steps that decline with age, particularly the ones limited by CD38 enzyme activity in older adults.",
  },
  {
    q: "Can NAD+ help with cognitive decline?",
    a: "Animal models show NAD+ supports neuronal energy metabolism and mitochondrial health. Studies in cognitive decline, Parkinson's disease, and post-traumatic brain injury are early-stage but promising. Human clinical trials are limited compared to the marketing volume around NAD+ products. Some users report subjective cognitive benefits within 1–2 weeks, but controlled efficacy data is thinner than the marketing implies.",
  },
  {
    q: "Is it safe to take NAD+ long-term?",
    a: (
      <>
        Short-term safety is excellent at therapeutic doses. Long-term human safety data is growing but still limited compared to decades of clinical use peptides like{" "}
        <Link href="/peptides/thymosin-alpha-1" className="text-[#0891b2] hover:underline">Thymosin Alpha-1</Link>
        . Most longevity protocols cycle 3 months on / 1 month off. At very high doses, methylation depletion can occur &mdash; methyl donors (TMG, B12) are sometimes added to counter this. Cancer patients should consult their oncologist; NAD+ supports both healthy AND theoretically cancer cells.
      </>
    ),
  },
  {
    q: "How does NAD+ compare to Epitalon for longevity?",
    a: (
      <>
        Both are foundational longevity research compounds with different mechanisms. NAD+ restores cellular metabolism cofactor levels and sirtuin activity (energy + cellular repair). Epitalon activates telomerase (chromosome end maintenance + pineal melatonin restoration). The two are commonly stacked together because they target non-overlapping aging hallmarks. See the{" "}
        <Link href="/compare/epitalon-vs-nad-plus" className="text-[#0891b2] hover:underline">Epitalon vs NAD+ comparison</Link>{" "}
        for a side-by-side breakdown.
      </>
    ),
  },
  {
    q: "Where can I buy NAD+?",
    a: (
      <>
        Subcutaneous and oral research-grade NAD+ is sold by specialty peptide and longevity vendors. IV infusion is offered in functional medicine clinics. Quality varies; verify Certificate of Analysis. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
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
    title: "Chronic Nicotinamide Riboside Supplementation Is Well-Tolerated and Elevates NAD+ in Healthy Middle-Aged and Older Adults",
    authors: "Martens CR, Denman BA, Mazzo MR, et al.",
    journal: "Nature Communications / PubMed",
    year: "2018",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/29599478/",
    summary: "The landmark human trial establishing that oral NR supplementation safely and effectively raises NAD+ levels in middle-aged and older adults. In this 2×6-week randomized, double-blind, placebo-controlled crossover trial, NR supplementation significantly increased whole blood NAD+ metabolism without adverse effects. The study also found initial signals of benefit for blood pressure and arterial stiffness — suggesting NAD+ restoration may have downstream vascular benefits beyond metabolic function.",
  },
  {
    title: "Chronic Nicotinamide Mononucleotide Supplementation Elevates Blood NAD+ Levels and Alters Muscle Function in Healthy Older Men",
    authors: "Igarashi M, Miura M, Williams E, et al.",
    journal: "NPJ Aging / PMC",
    year: "2022",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9158788/",
    summary: "A randomized, double-blind, placebo-controlled trial of 250mg daily NMN supplementation in healthy older men over 6–12 weeks. NMN significantly elevated whole blood NAD+ and NAD+ metabolite concentrations, with nominally significant improvements in gait speed and left grip strength.",
  },
  {
    title: "A Randomized Placebo-Controlled Trial of Nicotinamide Riboside in Older Adults with Mild Cognitive Impairment",
    authors: "Orr ME, Garber G, Ramsay MT, et al.",
    journal: "GeroScience / PMC",
    year: "2023",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10828186/",
    summary: "A pilot RCT examining NR's effects on cognition in 20 older adults with mild cognitive impairment. NR at 1g/day raised blood NAD+ and reduced epigenetic age as measured by PhenoAge and GrimAge clocks. Cognitive test scores did not significantly improve over 10 weeks — likely due to small sample size and short duration.",
  },
  {
    title: "The Safety and Anti-Aging Effects of Nicotinamide Mononucleotide in Human Clinical Trials — An Update",
    authors: "PubMed Research Group",
    journal: "Journal of Nutritional Biochemistry / PubMed",
    year: "2023",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/37619764/",
    summary: "A review summarizing the growing human clinical trial pipeline for NMN. The paper documents how NAD+ levels decline with aging and explains why restoration is theoretically significant — NAD+ is an essential substrate for sirtuins, PARPs, and hundreds of redox reactions governing mitochondrial function.",
  },
  {
    title: "Efficacy of Oral NMN Supplementation on Glucose and Lipid Metabolism — A Systematic Review with Meta-Analysis",
    authors: "PubMed Research Group",
    journal: "Diabetes & Metabolic Syndrome / PubMed",
    year: "2024",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/39116016/",
    summary: "A 2024 meta-analysis of 12 RCTs (513 participants) examining NMN's effects on metabolic health markers. The analysis confirmed NMN consistently and significantly elevates blood NAD+ levels, but found most clinically relevant outcomes (fasting glucose, triglycerides, cholesterol) were not significantly different from placebo. An important counterbalance to enthusiastic popular coverage.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does NAD+ work?",
    intro:
      "NAD+ is required for hundreds of enzymatic reactions including the citric acid cycle, electron transport chain, and beta-oxidation — ATP production fundamentally depends on adequate NAD+ levels. It's also the obligate substrate for sirtuin enzymes (the 'longevity gene' pathway) and PARPs (DNA damage repair). The age-related NAD+ decline is driven largely by CD38, an NAD-degrading enzyme that increases with aging and chronic inflammation — supplementation overcomes this consumption.",
    body: [
      "Cofactor for Cellular Metabolism [1]. NAD+ is required for hundreds of enzymatic reactions including the citric acid cycle, electron transport chain, and beta-oxidation. ATP production fundamentally depends on adequate NAD+ levels.",
      "Sirtuin Activation [2]. NAD+ is the obligate substrate for sirtuin enzymes (SIRT1–7). Sirtuins regulate gene expression, DNA repair, mitochondrial biogenesis, and cellular senescence — collectively the \"longevity gene\" pathway.",
      "PARP Activation [3]. Poly-ADP-ribose polymerases use NAD+ for DNA damage repair. Adequate NAD+ supports genome integrity, particularly under oxidative stress.",
      "CD38 Substrate [4]. CD38, an NAD-degrading enzyme, increases with aging and chronic inflammation. This drives the age-related NAD+ decline. NAD+ supplementation overcomes the consumption.",
      "Mitochondrial Biogenesis. Adequate NAD+ supports PGC-1α activation and mitochondrial biogenesis. Critical for muscle, brain, and metabolic tissue function.",
    ],
  },
  {
    id: "research",
    title: "What is NAD+ used for?",
    intro:
      "NAD+'s research evidence base spans aging and longevity (the central application — most-studied longevity intervention of the past decade), cognitive function and neuroprotection, cellular repair, metabolic syndrome, and recovery/athletic performance. Human clinical trials have grown substantially since 2018 (NR-Martens), 2022 (NMN-Igarashi), and 2023 (NR-Orr), though the 2024 meta-analysis tempers some clinical efficacy claims — NAD+ elevation is consistent, downstream functional benefits need more data.",
    body: [
      "Aging & Longevity [5]. NAD+ decline is a hallmark of aging. Restoration in animal models extends healthspan, reduces age-related cognitive decline, and improves muscle function. Most-studied longevity intervention of the past decade.",
      "Cognitive Function & Neuroprotection. NAD+ supports neuronal energy metabolism and mitochondrial health. Studies in cognitive decline, Parkinson's disease, and post-traumatic brain injury.",
      "Cellular Repair. DNA repair via PARP, mitochondrial repair via sirtuins. Critical in oxidative stress contexts.",
      "Metabolic Syndrome. NAD+ supports metabolic flexibility, insulin sensitivity, and lipid metabolism. Research interest in obesity and Type 2 diabetes — though 2024 meta-analysis found most metabolic markers (glucose, lipids) not significantly different from placebo despite NAD+ elevation.",
      "Recovery & Athletic Performance. Anecdotal community use for post-workout recovery, jet lag, and energy. Limited controlled athlete data.",
    ],
  },
  {
    id: "timeline",
    title: "How long does NAD+ take to work?",
    intro:
      "NAD+ effects develop on multiple timescales. Acute energy/recovery effects within hours of injection. Cognitive effects: 1–2 weeks of consistent use. Long-term anti-aging effects: months. Most users assess benefit after 4–8 week protocols. Subjective improvements in energy and recovery often appear before measurable changes.",
    content:
      "Acute energy and recovery effects appear within hours of injection. Subjective cognitive effects develop over 1–2 weeks of consistent use. Long-term anti-aging effects accumulate over months — sirtuin activation and DNA repair are not acute pharmacology but cumulative cellular processes. Most users assess benefit after 4–8 week protocols. Subjective improvements in energy and recovery often appear before measurable changes in biomarkers like blood NAD+ levels.",
  },
  {
    id: "dosing",
    title: "How is NAD+ dosed?",
    intro:
      "NAD+ dosing varies dramatically by route of administration. Subcutaneous and IV produce direct NAD+ elevation; oral precursors (NMN, NR) require conversion in the body. Subcutaneous is notoriously painful (burning at injection site for several minutes). IV infusion is clinical-setting only. Sublingual and oral precursors avoid injection but with different absorption profiles.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Subcutaneous injection.</span> 50–100 mg once or twice weekly.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">IV infusion (clinical).</span> 250–1000 mg over 2–4 hours, monthly to weekly.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sublingual.</span> 50–125 mg daily.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Oral NMN/NR (precursors).</span> 250–1000 mg daily &mdash; different absorption profile, less direct.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle length.</span> Continuous protocols common. Some users cycle 3 months on / 1 month off.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Morning preferred (some users report sleep disruption with evening dosing).</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Subcutaneous NAD+ is notoriously painful at the injection site &mdash; slow injection over 30–60 seconds reduces burning. IV infusion is more tolerable but requires a clinical setting. Oral precursors (NMN, NR) avoid the injection burning.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Need to calculate your dose? Convert mg to syringe units and plan reconstitution with the{" "}
          <Link href="/calculator" className="text-[#0891b2] hover:underline">dosage calculator &rarr;</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How is NAD+ administered?",
    intro: (
      <>
        NAD+ is administered through multiple routes: subcutaneous injection (most painful but accessible), IV infusion (clinical-setting, most tolerable), sublingual (moderate absorption), or oral precursors NMN/NR (avoids injection but indirect). The route choice has the biggest impact on tolerability and convenience &mdash; many users start oral and move to clinical IV if they want stronger effects. For the practical mechanics of subcutaneous injection technique, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Subcutaneous route.</span> Site rotation between abdomen, thigh, upper arm. Slow injection over 30–60 seconds significantly reduces burning sensation.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">IV infusion.</span> Clinical setting only. 2–4 hour infusion under physician supervision.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sublingual.</span> Hold under tongue for 60 seconds before swallowing for absorption through oral mucosa.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Oral precursors.</span> NMN or NR capsules with or without food.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Morning preferred to avoid sleep disruption &mdash; many users report stimulant-like effects.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reconstitution.</span> Bacteriostatic water, swirl gently &mdash; do not shake. Light-sensitive &mdash; degrades quickly in sunlight.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> NAD+&apos;s biological effects accumulate via gene expression (sirtuin activation), DNA repair (PARP), and mitochondrial biogenesis rather than acute pharmacology. The route choice affects tolerability more than timing. Subcutaneous and IV produce direct NAD+ elevation; oral precursors require multi-step conversion to active NAD+, with absorption affected by gut metabolism and aging-related conversion-pathway decline.
        </p>

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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">SC: 1–2× weekly. IV: monthly to weekly. Oral: daily.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Morning preferred &mdash; some users report stimulant-like effects that disrupt sleep if dosed late</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No fasting required for any route</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Route choice</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Oral NMN/NR for entry-level (no injection); SC for direct NAD+ (painful); IV for max bioavailability (clinical setting)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Short plasma half-life; cellular NAD+ pools persist via downstream conversion</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Blood NAD+ levels rise measurably within days; downstream functional effects accumulate over weeks-months</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> Choose your bacteriostatic water volume based on dose precision. NAD+ research vials are typically 500 mg &mdash; significantly larger than peptide vials. Because per-dose amounts are large (50–100 mg subcutaneous, up to 250 mg sublingual equivalent), 1–2 mL reconstitution keeps draws within insulin syringe capacity. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 500 mg vial.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">25 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">50 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">100 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">250 mg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">500 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">50 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">250 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">40 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">100 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">5 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">100 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">25 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">50 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">100 units</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400 italic leading-relaxed">
          *Draw exceeds standard 100-unit insulin syringe capacity at this reconstitution volume &mdash; would require split injections or a lower reconstitution volume.
        </p>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> At a 500 mg vial, each unit drawn delivers 5 mg of NAD+ at 1 mL reconstitution, 2.5 mg at 2 mL, and 1 mg at 5 mL &mdash; the reconstitution volume determines the mg-per-unit conversion. For a primer on reading insulin syringes and choosing the right barrel size, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does NAD+ stack well with?",
    intro:
      "NAD+'s canonical pairing is with Epitalon (cellular metabolism + telomere maintenance — two non-overlapping aging hallmarks). NMN or NR oral precursors are sometimes combined with injectable NAD+ for sustained levels. Resveratrol pairs mechanically (sirtuin activator). Methyl donors (TMG, B12) counter NAD+ methylation depletion at high doses.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Epitalon.</span>{" "}
          <Link href="/peptides/epitalon" className="text-[#0891b2] hover:underline">Epitalon</Link>{" "}
          is the most common longevity stack pairing (cellular metabolism + telomere maintenance). See the{" "}
          <Link href="/compare/epitalon-vs-nad-plus" className="text-[#0891b2] hover:underline">Epitalon vs NAD+ comparison</Link>{" "}
          for protocol differences.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">NMN or NR oral precursors.</span> Sometimes combined with injectable NAD+ for sustained levels between injections.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resveratrol.</span> Sirtuin activator that pairs mechanically with NAD+ &mdash; sirtuins require NAD+ as substrate, and resveratrol activates SIRT1.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">CoQ10 + MOTS-c.</span> Mitochondrial support pairing.{" "}
          <Link href="/peptides/mots-c" className="text-[#0891b2] hover:underline">MOTS-c</Link>{" "}
          activates AMPK through a non-overlapping pathway.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">GHK-Cu.</span>{" "}
          <Link href="/peptides/ghk-cu" className="text-[#0891b2] hover:underline">GHK-Cu</Link>{" "}
          for combined gene expression modulation + NAD+ metabolism. Common longevity pairing.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Methyl donors (TMG, B12).</span> Counter NAD+ methylation depletion at high doses &mdash; particularly relevant for chronic high-dose protocols.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of NAD+?",
    intro:
      "Subcutaneous NAD+ is notoriously painful at the injection site (burning sensation lasting several minutes — major reason many users start with oral precursors). IV infusion is more tolerable but requires a clinical setting. Most-reported user effects are flushing (most common with IV/SC), mild nausea, and transient warmth. Methylation depletion at very high doses is real but counterable with methyl donors. Cancer patients should consult their oncologist.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Flushing.</span> Most common with IV/SC routes.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild nausea.</span> Common with rapid administration.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Transient warmth sensation.</span> Often paired with flushing.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection site pain/burning.</span> Notable with subcutaneous &mdash; the primary tolerability issue.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild headache.</span> Inconsistent across users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Brief anxiety or restlessness.</span> During IV infusion (slow the drip).</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No major adverse events at therapeutic doses.</span></li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Very rare allergic reactions.</span></li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Methylation depletion at very high doses.</span> Counter with methyl donors (TMG, B12).</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Subcutaneous NAD+ is notoriously painful at the injection site. IV infusion is more tolerable but requires a clinical setting. Oral precursors (NMN, NR) avoid the injection burning entirely. The pain at the injection site is a major reason many users start with oral precursors.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does NAD+ interact with other drugs?",
    intro:
      "NAD+ has limited documented drug interactions at therapeutic doses. Theoretical concern with methotrexate (folate metabolism). Cancer therapies have complex interactions — NAD+ supports both healthy and theoretically cancer cells; oncology consultation recommended. SSRIs have no documented interactions. Most other supplements and medications are generally compatible.",
    body: [
      "Methotrexate. Theoretical concern; NAD+ may affect folate metabolism.",
      "Cancer therapies. Complex interaction. NAD+ supports both healthy cells AND theoretically cancer cells. Cancer patients should consult oncologist.",
      "SSRIs. No documented interactions.",
      "Most other supplements and medications. Generally compatible.",
    ],
  },
  {
    id: "storage",
    title: "How should NAD+ be stored?",
    body: [
      "Lyophilized: -20°C long-term, 2–8°C short-term.",
      "Reconstituted: 2–8°C, use within 14 days.",
      "Light-sensitive — degrades quickly in sunlight.",
      "Do NOT freeze reconstituted solution.",
      "Reconstitute with bacteriostatic water for injection. Swirl gently — do not shake.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of NAD+ research?",
    intro:
      "NAD+ is NOT FDA-approved as an injectable therapy. Oral precursors (NMN, NR) are sold as dietary supplements but the FDA has issued warnings to some manufacturers. Most clinical evidence for longevity claims comes from animal models — the 2024 meta-analysis found NMN consistently raises blood NAD+ but most clinically relevant outcomes (fasting glucose, triglycerides, cholesterol) were not significantly different from placebo. NAD+ is technically a dinucleotide cofactor, not a peptide. NOT on the WADA prohibited list.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          NAD+ is NOT FDA-approved as an injectable therapy. Oral precursors (NMN, NR) are sold as dietary supplements in the US but the FDA has issued warnings to some manufacturers. NAD+ IV infusion is offered in clinical settings (functional medicine clinics) under physician supervision.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Most clinical evidence for longevity claims comes from animal models. Human clinical trials are growing but still limited compared to the marketing volume around NAD+ products. The 2024 NMN meta-analysis tempered some clinical efficacy claims &mdash; NAD+ elevation is consistent, downstream functional benefits in humans need more data.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade material is sold by specialty peptide/longevity vendors. Quality varies; verify Certificate of Analysis. Subcutaneous injection burning is commonly reported and should be expected.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping: NAD+ is NOT currently on the WADA prohibited list. Some athletic federations may have stricter rules.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The &ldquo;is NAD+ a peptide&rdquo; question &mdash; technically NAD+ is a dinucleotide cofactor, not a peptide. It&apos;s included on Prof. Peptide because of its prevalence in longevity stacks alongside peptide therapies and its sale by the same specialty vendors.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source NAD+",
    intro:
      "Subcutaneous and oral research-grade NAD+ is sold by specialty peptide and longevity vendors. IV infusion is offered in functional medicine clinics. Quality varies — verify Certificate of Analysis. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "vital-core-research" },
            { slug: "spartan-peptides", note: "Included in Energizer Bunny blend" },
          ]}
        />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          <Link href="/coupons" className="text-[#0891b2] hover:underline">
            See all 17 verified vendors &rarr;
          </Link>
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "NAD+ FAQ",
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
          Verdin E. NAD+ in aging, metabolism, and neurodegeneration. Science. 2015;350(6265):1208-13.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Imai S, Guarente L. NAD+ and sirtuins in aging and disease. Trends Cell Biol. 2014;24(8):464-71.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Cantó C, Menzies KJ, Auwerx J. NAD+ Metabolism and the Control of Energy Homeostasis: A Balancing Act between Mitochondria and the Nucleus. Cell Metab. 2015;22(1):31-53.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Camacho-Pereira J, Tarragó MG, Chini CCS, et al. CD38 Dictates Age-Related NAD Decline and Mitochondrial Dysfunction through an SIRT3-Dependent Mechanism. Cell Metab. 2016;23(6):1127-1139.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4911708/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC4911708/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Yoshino J, Baur JA, Imai SI. NAD+ Intermediates: The Biology and Therapeutic Potential of NMN and NR. Cell Metab. 2018;27(3):513-528.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Wikipedia. Nicotinamide adenine dinucleotide.{" "}
          <a href="https://en.wikipedia.org/wiki/Nicotinamide_adenine_dinucleotide" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://en.wikipedia.org/wiki/Nicotinamide_adenine_dinucleotide
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

export default function NADPlusPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"NAD+","description":"NAD+ research profile: cellular metabolism cofactor, sirtuin activation, dosing protocols (SC, IV, oral), side effects, FAQ, and longevity applications.","url":"https://profpeptide.com/peptides/nad-plus","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"NAD+"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">NAD+</h1>
        <span className="tag">Longevity</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 24, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Nicotinamide Adenine Dinucleotide, NAD, NADH (reduced form), Coenzyme 1
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Dinucleotide Cofactor (NOT a peptide) &mdash; Sirtuin Substrate / Mitochondrial Cofactor
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Not FDA-approved as injectable therapy. Oral precursors (NMN, NR) sold as dietary supplements. IV offered in clinical settings. Not WADA-prohibited.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is NAD+?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            NAD+ (nicotinamide adenine dinucleotide) is a coenzyme present in every cell of every living organism. It plays a central role in cellular metabolism, energy production, DNA repair, and gene expression regulation. Unlike most peptides on Prof. Peptide, NAD+ is technically a small-molecule cofactor rather than a peptide &mdash; but it&apos;s included because it&apos;s commonly stacked with peptides in longevity protocols and sold by the same vendors. NAD+ levels decline ~50% from age 20 to 60, and this decline is implicated in many hallmarks of aging including mitochondrial dysfunction, accumulated DNA damage, and reduced sirtuin activity. NAD+ supplementation has emerged as one of the most researched longevity interventions of the past decade. Often paired with{" "}
            <Link href="/peptides/epitalon" className="text-[#0891b2] hover:underline">Epitalon</Link>{" "}
            for combined cellular metabolism + telomere maintenance. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#0891b2] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Restoration of cellular NAD+ levels to youthful range</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Sirtuin enzyme activation (SIRT1, SIRT3, SIRT6) &mdash; longevity gene activation</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Enhanced mitochondrial function and ATP production</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved DNA repair via PARP activation</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Cognitive support and neuroprotection</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Combined energy + recovery + longevity effects</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Subcutaneous injection: 50–100 mg once or twice weekly. IV infusion (clinical settings): 250–1000 mg over 2–4 hours. Oral precursors (NMN, NR): 250–1000 mg daily. Sublingual NAD+: 50–125 mg daily.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> PP maintains a vetted list of peptide vendors with verified discount codes. See{" "}
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
        {["Longevity", "Cellular Metabolism", "Sirtuin Activator", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/epitalon" className="text-sm font-medium text-[#0891b2] hover:underline">Epitalon</Link>
        <Link href="/peptides/ghk-cu" className="text-sm font-medium text-[#0891b2] hover:underline">GHK-Cu</Link>
        <Link href="/peptides/mots-c" className="text-sm font-medium text-[#0891b2] hover:underline">MOTS-c</Link>
        <Link href="/peptides/thymosin-alpha-1" className="text-sm font-medium text-[#0891b2] hover:underline">Thymosin Alpha-1</Link>
        </div>
      </div>

      <div className="mt-6 p-5 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Comparisons</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/compare/epitalon-vs-nad-plus" className="text-sm font-medium text-[#0891b2] hover:underline">Epitalon vs NAD+ &rarr;</Link>
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
    <ContactLink pageName="NAD+" pagePath="/peptides/nad-plus" />
    </div>
    </>
  );
}
