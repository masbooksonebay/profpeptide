import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/nad-plus" },
  title: "NAD+ — Cellular Metabolism, Longevity, Sirtuin Activator | Prof. Peptide",
  description:
    "NAD+ research profile: cellular metabolism cofactor, sirtuin activation, dosing protocols (SC, IV, oral), side effects, and longevity applications.",
};

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
    a: "Short-term safety is excellent at therapeutic doses. Long-term human safety data is growing but still limited compared to decades of clinical use peptides like Thymosin Alpha-1. Most longevity protocols cycle 3 months on / 1 month off. At very high doses, methylation depletion can occur — methyl donors (TMG, B12) are sometimes added to counter this. Cancer patients should consult their oncologist; NAD+ supports both healthy AND theoretically cancer cells.",
  },
  {
    q: "Where can I buy NAD+?",
    a: (
      <>
        Subcutaneous and oral research-grade NAD+ is sold by specialty peptide and longevity vendors. IV infusion is offered in functional medicine clinics. Quality varies; verify Certificate of Analysis. PP maintains a list of vetted vendors with verified discount codes — see{" "}
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
    summary: "The landmark human trial establishing that oral NR supplementation safely and effectively raises NAD+ levels in middle-aged and older adults. In this 2\u00D76-week randomized, double-blind, placebo-controlled crossover trial, NR supplementation significantly increased whole blood NAD+ metabolism without adverse effects. The study also found initial signals of benefit for blood pressure and arterial stiffness \u2014 two key markers of cardiovascular aging \u2014 suggesting that NAD+ restoration may have downstream vascular benefits beyond metabolic function. This was the first rigorous human pharmacokinetic study confirming that oral NR meaningfully translates to elevated tissue NAD+ levels in humans.",
  },
  {
    title: "Chronic Nicotinamide Mononucleotide Supplementation Elevates Blood NAD+ Levels and Alters Muscle Function in Healthy Older Men",
    authors: "Igarashi M, Miura M, Williams E, et al.",
    journal: "NPJ Aging / PMC",
    year: "2022",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9158788/",
    summary: "A randomized, double-blind, placebo-controlled trial of 250mg daily NMN supplementation in healthy older men over 6\u201312 weeks. NMN significantly elevated whole blood NAD+ and NAD+ metabolite concentrations. There were nominally significant improvements in gait speed and left grip strength \u2014 physical performance measures relevant to age-related muscle decline (sarcopenia) \u2014 though these require validation in larger trials. The study confirmed NMN\u2019s safety and tolerability while establishing that oral NMN effectively raises NAD+ in humans, mirroring findings seen in animal models that showed broad anti-aging benefits.",
  },
  {
    title: "A Randomized Placebo-Controlled Trial of Nicotinamide Riboside in Older Adults with Mild Cognitive Impairment",
    authors: "Orr ME, Garber G, Ramsay MT, et al.",
    journal: "GeroScience / PMC",
    year: "2023",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10828186/",
    summary: "A pilot randomized controlled trial examining NR\u2019s effects on cognition in 20 older adults with mild cognitive impairment (MCI). NR at 1g/day significantly raised blood NAD+ levels and was well tolerated. While cognitive test scores did not significantly improve over 10 weeks \u2014 likely due to the small sample size and short duration \u2014 the study documented a reduction in epigenetic age as measured by PhenoAge and GrimAge clocks, a finding with implications for biological aging beyond cognition. The authors called for larger, longer-duration trials to properly assess NR\u2019s cognitive potential. This study represents the state of the human clinical evidence: NAD+ elevation is consistently demonstrated; downstream functional benefits require larger trials to confirm.",
  },
  {
    title: "The Safety and Anti-Aging Effects of Nicotinamide Mononucleotide in Human Clinical Trials \u2014 An Update",
    authors: "PubMed Research Group",
    journal: "Journal of Nutritional Biochemistry / PubMed",
    year: "2023",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/37619764/",
    summary: "A review summarizing the growing human clinical trial pipeline for NMN, covering approximately a dozen trials underway as of 2023. The paper documents how NAD+ levels decline with aging and explains why restoration is theoretically significant \u2014 NAD+ is an essential substrate for sirtuins (longevity-associated enzymes), PARPs (DNA repair enzymes), and hundreds of redox reactions governing mitochondrial function. Animal studies show NMN mitigates oxidative stress, DNA damage, neurodegeneration, and inflammatory responses. The review is candid that while preclinical data is compelling, human trials remain early-stage and benefits beyond NAD+ elevation itself need further validation in larger controlled studies.",
  },
  {
    title: "Efficacy of Oral NMN Supplementation on Glucose and Lipid Metabolism \u2014 A Systematic Review with Meta-Analysis",
    authors: "PubMed Research Group",
    journal: "Diabetes & Metabolic Syndrome / PubMed",
    year: "2024",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/39116016/",
    summary: "A 2024 meta-analysis of 12 randomized controlled trials (513 participants) examining NMN\u2019s effects on metabolic health markers. The analysis confirmed that NMN consistently and significantly elevates blood NAD+ levels \u2014 but found that most clinically relevant outcomes (fasting glucose, triglycerides, cholesterol) were not significantly different from placebo. The authors noted high risk of bias in several studies and suggested an exaggeration of NMN\u2019s metabolic benefits may exist in the field. This is an important counterbalance to enthusiastic popular coverage \u2014 NAD+ elevation is real and consistent, but the clinical translation into measurable metabolic improvements in humans remains to be firmly established.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "Cofactor for Cellular Metabolism [1] — NAD+ is required for hundreds of enzymatic reactions including the citric acid cycle, electron transport chain, and beta-oxidation. ATP production fundamentally depends on adequate NAD+ levels.",
      "Sirtuin Activation [2] — NAD+ is the obligate substrate for sirtuin enzymes (SIRT1–7). Sirtuins regulate gene expression, DNA repair, mitochondrial biogenesis, and cellular senescence — collectively the &ldquo;longevity gene&rdquo; pathway.",
      "PARP Activation [3] — Poly-ADP-ribose polymerases use NAD+ for DNA damage repair. Adequate NAD+ supports genome integrity, particularly under oxidative stress.",
      "CD38 Substrate [4] — CD38, an NAD-degrading enzyme, increases with aging and chronic inflammation. This drives the age-related NAD+ decline. NAD+ supplementation overcomes the consumption.",
      "Mitochondrial Biogenesis — Adequate NAD+ supports PGC-1α activation and mitochondrial biogenesis. Critical for muscle, brain, and metabolic tissue function.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Aging & Longevity [5] — NAD+ decline is a hallmark of aging. Restoration in animal models extends healthspan, reduces age-related cognitive decline, and improves muscle function. Most-studied longevity intervention of the past decade.",
      "Cognitive Function & Neuroprotection — NAD+ supports neuronal energy metabolism and mitochondrial health. Studies in cognitive decline, Parkinson's disease, and post-traumatic brain injury.",
      "Cellular Repair — DNA repair via PARP, mitochondrial repair via sirtuins. Critical in oxidative stress contexts.",
      "Metabolic Syndrome — NAD+ supports metabolic flexibility, insulin sensitivity, and lipid metabolism. Research interest in obesity and Type 2 diabetes.",
      "Recovery & Athletic Performance — Anecdotal community use for post-workout recovery, jet lag, and energy. Limited controlled athlete data.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "NAD+ effects develop on multiple timescales. Acute energy/recovery effects within hours of injection. Cognitive effects: 1–2 weeks of consistent use. Long-term anti-aging effects: months. Most users assess benefit after 4–8 week protocols. Subjective improvements in energy and recovery often appear before measurable changes.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          NAD+ dosing varies dramatically by route of administration. Subcutaneous and IV produce direct NAD+ elevation; oral precursors require conversion in the body.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Subcutaneous injection: 50–100 mg once or twice weekly.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">IV infusion (clinical): 250–1000 mg over 2–4 hours, monthly to weekly.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Sublingual: 50–125 mg daily.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Oral NMN/NR (precursors): 250–1000 mg daily — different absorption profile, less direct.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Cycle length: continuous protocols common. Some users cycle 3 months on / 1 month off.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Time of day: morning preferred (some users report sleep disruption with evening dosing).</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Subcutaneous NAD+ is notoriously painful at the injection site — slow injection over 30–60 seconds reduces burning. IV infusion is more tolerable but requires a clinical setting. Oral precursors (NMN, NR) avoid the injection burning.
        </p>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side Effects & Safety",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Flushing (most common with IV/SC)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild nausea</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Transient warmth sensation</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Injection site pain/burning (notable with subcutaneous)</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild headache</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Brief anxiety or restlessness during IV infusion</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">No major adverse events documented at therapeutic doses</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Very rare allergic reactions</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Methylation depletion at very high doses (methyl donors counter this)</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Subcutaneous NAD+ is notoriously painful at the injection site. IV infusion is more tolerable but requires a clinical setting. Oral precursors (NMN, NR) avoid the injection burning entirely. The pain at the injection site is a major reason many users start with oral precursors.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Subcutaneous: site rotation between abdomen, thigh, upper arm. Slow injection over 30–60 seconds reduces burning.",
      "IV: clinical setting only.",
      "Sublingual: hold under tongue for 60 seconds before swallowing.",
      "Oral: with or without food.",
      "Time of day: morning preferred to avoid sleep disruption.",
      "Reconstitution (injectable): bacteriostatic water, swirl gently — do not shake.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    body: [
      "Epitalon — common longevity stack pairing (cellular metabolism + telomere maintenance).",
      "NMN or NR (oral precursors) — sometimes combined with injectable NAD+ for sustained levels.",
      "Resveratrol — sirtuin activator that pairs mechanically with NAD+.",
      "CoQ10 — mitochondrial support pairing.",
      "Methyl donors (TMG, B12) — counter NAD+ methylation depletion at high doses.",
    ],
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "Methotrexate — theoretical concern; NAD+ may affect folate metabolism.",
      "Cancer therapies — complex interaction. NAD+ supports both healthy cells AND theoretically cancer cells. Cancer patients should consult oncologist.",
      "SSRIs — no documented interactions.",
      "Most other supplements and medications — generally compatible.",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
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
    title: "Research Limitations & Regulatory Status",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          NAD+ is NOT FDA-approved as an injectable therapy. Oral precursors (NMN, NR) are sold as dietary supplements in the US but the FDA has issued warnings to some manufacturers. NAD+ IV infusion is offered in clinical settings (functional medicine clinics) under physician supervision.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Most clinical evidence for longevity claims comes from animal models. Human clinical trials are growing but still limited compared to the marketing volume around NAD+ products.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade material is sold by specialty peptide/longevity vendors. Quality varies; verify Certificate of Analysis. Subcutaneous injection burning is commonly reported and should be expected.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping: NAD+ is NOT currently on the WADA prohibited list. Some athletic federations may have stricter rules.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          The &ldquo;is NAD+ a peptide&rdquo; question — technically NAD+ is a dinucleotide cofactor, not a peptide. It&apos;s included on Prof. Peptide because of its prevalence in longevity stacks alongside peptide therapies and its sale by the same specialty vendors.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "FAQ",
    node: (
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i}>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">
              {f.q}
            </h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
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
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Verdin E. NAD+ in aging, metabolism, and neurodegeneration. Science. 2015;350(6265):1208-13.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Imai S, Guarente L. NAD+ and sirtuins in aging and disease. Trends Cell Biol. 2014;24(8):464-71.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Cantó C, Menzies KJ, Auwerx J. NAD+ Metabolism and the Control of Energy Homeostasis: A Balancing Act between Mitochondria and the Nucleus. Cell Metab. 2015;22(1):31-53.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Camacho-Pereira J, Tarragó MG, Chini CCS, et al. CD38 Dictates Age-Related NAD Decline and Mitochondrial Dysfunction through an SIRT3-Dependent Mechanism. Cell Metab. 2016;23(6):1127-1139.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4911708/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC4911708/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Yoshino J, Baur JA, Imai SI. NAD+ Intermediates: The Biology and Therapeutic Potential of NMN and NR. Cell Metab. 2018;27(3):513-528.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
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
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Plain-English summaries of the peer-reviewed studies behind the claims above. Click any title to read the source paper.
        </p>
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#0891b2] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 hover:text-[#0891b2] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
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
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"NAD+","description":"NAD+ research profile: cellular metabolism cofactor, sirtuin activation, dosing protocols (SC, IV, oral), side effects, and longevity applications.","url":"https://profpeptide.com/peptides/nad-plus","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
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
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Nicotinamide Adenine Dinucleotide, NAD, NADH (reduced form), Coenzyme 1
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            NAD+ (nicotinamide adenine dinucleotide) is a coenzyme present in every cell of every living organism. It plays a central role in cellular metabolism, energy production, DNA repair, and gene expression regulation. Unlike most peptides on Prof. Peptide, NAD+ is technically a small-molecule cofactor rather than a peptide — but it&apos;s included because it&apos;s commonly stacked with peptides in longevity protocols and sold by the same vendors. NAD+ levels decline ~50% from age 20 to 60, and this decline is implicated in many hallmarks of aging including mitochondrial dysfunction, accumulated DNA damage, and reduced sirtuin activity. NAD+ supplementation (oral, sublingual, or injectable) has emerged as one of the most researched longevity interventions of the past decade, with growing clinical evidence for cellular metabolism, neuroprotection, and anti-aging effects. Direct NAD+ injection is the most bioavailable but also most controversial form.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Restoration of cellular NAD+ levels to youthful range</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Sirtuin enzyme activation (SIRT1, SIRT3, SIRT6) — longevity gene activation</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Enhanced mitochondrial function and ATP production</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Improved DNA repair via PARP activation</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Cognitive support and neuroprotection</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Combined energy + recovery + longevity effects</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Subcutaneous injection: 50–100 mg once or twice weekly. IV infusion (clinical settings): 250–1000 mg over 2–4 hours. Oral precursors (NMN, NR): 250–1000 mg daily — different absorption profile. Sublingual NAD+: 50–125 mg daily. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for details.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> NAD+ is not FDA-approved as injectable therapy. Oral precursors (NMN, NR) are sold as dietary supplements; injectable NAD+ is sold by specialty research/longevity vendors. See{" "}
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
            {s.node && s.node}
            {s.content && (
              <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{s.content}</p>
            )}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
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
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/coupons" className="btn-primary text-sm text-center">
            View Verified Discount Codes &rarr;
          </Link>
          <a
            href="https://www.amazon.com/s?k=longevity+supplements&tag=profpeptide-20"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm text-center"
          >
            Search Related Supplements on Amazon &rarr;
          </a>
        </div>
        <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">As an Amazon Associate, Prof. Peptide earns from qualifying purchases.</p>
      </div>
    </div>
    </>
  );
}
