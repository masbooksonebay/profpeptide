import Link from "next/link";

export const metadata = {
  title: "NAD+ — Research Profile, Mechanism & Dosage Guide | Prof. Peptide",
  description:
    "NAD+ research profile covering sirtuin activation, mitochondrial function, NMN and NR precursors, DNA repair support, and longevity research.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "Nicotinamide adenine dinucleotide (NAD+) is a fundamental coenzyme found in every living cell that plays a central role in energy metabolism and serves as an essential co-substrate for a broad class of enzymes critical to genomic maintenance, epigenetics, and stress response. Unlike most peptides in this library, NAD+ is not a peptide \u2014 it is a small molecule coenzyme derived from vitamin B3 (niacin). It is included here because it occupies a central position in longevity research alongside peptide-based interventions, and because NAD+ precursors (particularly NMN and NR) are among the most widely studied longevity supplements in the world. NAD+ levels decline dramatically with age \u2014 by up to 50% between youth and old age in mammals \u2014 and this age-related decline has been causally linked to physiological deterioration and numerous age-associated diseases. The link between NAD+ and aging operates primarily through its role as the essential cofactor for sirtuins (SIRT1-7) \u2014 a family of enzymes often called \"longevity proteins\" that regulate metabolism, DNA repair, inflammation, and cellular stress responses. When NAD+ declines, sirtuin activity diminishes, impairing DNA repair, antioxidant defense, mitochondrial function, and metabolic efficiency. Restoring NAD+ levels through precursors like NMN or NR has shown promising rejuvenating effects across multiple aging models. NAD+ is not FDA approved as a drug but NMN and NR are available as dietary supplements.",
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "Sirtuin Activation \u2014 The Longevity Pathway [1] \u2014 Sirtuins (SIRT1\u20137) are NAD+-dependent deacylase enzymes that require NAD+ as an essential cofactor for all their activity. They regulate histone deacetylation (epigenetic control of gene expression), DNA repair, mitochondrial biogenesis, inflammation suppression, and metabolic efficiency. NAD+ availability directly links the cell's metabolic state to sirtuin activity \u2014 when NAD+ declines with age, sirtuin activity falls proportionally. Overexpression of sirtuins has been shown to extend lifespan in yeast, worms, and flies.",
      "PARP-Mediated DNA Repair [2] \u2014 Poly(ADP-ribose) polymerases (PARPs) are NAD+-consuming enzymes that orchestrate DNA damage repair. When DNA damage accumulates \u2014 as it does with aging \u2014 PARP activity increases, consuming NAD+ and creating a cycle where more DNA damage leads to more NAD+ depletion, further impairing sirtuin-dependent repair mechanisms.",
      "Mitochondrial Function and Energy Production [3] \u2014 NAD+ is essential for the electron transport chain \u2014 the core energy production pathway in mitochondria. Age-related NAD+ decline impairs mitochondrial function, reducing energy production and increasing reactive oxygen species (ROS). Restoring NAD+ improves mitochondrial efficiency and reduces oxidative stress.",
      "CD38 and Inflammation [2] \u2014 CD38, an enzyme that consumes NAD+, increases with age and is activated by the senescence-associated secretory phenotype (SASP) \u2014 the inflammatory signaling released by senescent cells. This creates a vicious cycle: senescent cells increase CD38, which depletes NAD+, which impairs sirtuin activity, which allows more senescence and inflammation.",
      "NAD+ Salvage Pathway [1] \u2014 The body maintains NAD+ levels primarily through the salvage pathway, converting nicotinamide (NAM) to nicotinamide mononucleotide (NMN) via NAMPT (nicotinamide phosphoribosyltransferase), then to NAD+ via NMNAT enzymes. NMN and NR supplements replenish NAD+ by feeding directly into this pathway. NAMPT activity declines with age, limiting the body's own NAD+ production capacity.",
      "Telomere and Genomic Stability [3] \u2014 NAD+-dependent sirtuins (particularly SIRT1 and SIRT6) play direct roles in telomere maintenance and genomic stability. Telomere dysfunction has been shown to suppress sirtuin activity, creating a feedback loop between telomere shortening and NAD+/sirtuin decline.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Aging and Healthspan [3] \u2014 Extensive research across multiple species demonstrates that NAD+ levels decline with age correlating with hallmarks of aging including mitochondrial dysfunction, genomic instability, and altered cellular communication. NAD+ supplementation via NMN or NR improves healthspan metrics in animal models, though effects on maximum lifespan are more modest.",
      "Cardiovascular Health [4] \u2014 NAD+ and sirtuins play central roles in vascular endothelial function, angiogenesis, and metabolic regulation in the heart. SIRT1 protects against vascular endothelial dysfunction, metabolic syndrome, obesity, and cardiomyopathy. NMN has been shown to increase SIRT1-dependent angiogenesis in aging mouse muscle.",
      "Neurodegeneration [3] \u2014 NAD+ repletion via precursors improved mitochondrial function and reduced neurodegeneration in animal models of premature aging disorders. A clinical trial using NR (nicotinamide riboside) as part of a longevity cocktail showed reversal of neurodegeneration markers and improved mitochondrial function in Alzheimer's patients.",
      "Metabolic Health [5] \u2014 A 2024 study demonstrated NMN increases glucose uptake through UCP1 upregulation and ketone body production. A clinical study in 30 overweight and obese adults found 500 mg NMN twice daily for 28 days significantly reduced LDL cholesterol, body weight, and diastolic blood pressure.",
      "Telomere Length [5] \u2014 A study in adults aged 45\u201360 found 300 mg NMN per day for 90 days caused significant increase in telomere length in white blood cells by increasing NAD+ levels \u2014 connecting NAD+ metabolism directly to the telomere biology shared with Epitalon research.",
      "Rare Aging Diseases [2] \u2014 NAD+ supplementation has shown particularly promising results in rare diseases characterized by premature aging and DNA damage including Werner syndrome, Cockayne syndrome, and ataxia telangiectasia \u2014 conditions where NAD+ depletion is a key molecular feature.",
    ],
  },
  {
    id: "benefits",
    title: "Observed Benefits in Research",
    body: [
      "Extended lifespan and healthspan improvements in multiple animal models",
      "Improved mitochondrial function and energy production",
      "Enhanced sirtuin activity supporting DNA repair and epigenetic regulation",
      "Reduced markers of cardiovascular aging and improved endothelial function",
      "Reversal of neurodegeneration markers in Alzheimer's model clinical trial",
      "Significant reduction in LDL cholesterol, body weight, and blood pressure in human study",
      "Increased telomere length in white blood cells in 90-day human study",
      "Promising results in rare premature aging diseases with NAD+ depletion",
    ],
  },
  {
    id: "pharmacokinetics",
    title: "Pharmacokinetics",
    body: [
      "NAD+ itself is not efficiently absorbed orally \u2014 precursors NMN and NR are used instead",
      "NMN: Converted to NAD+ via NRK or direct NMN transporter (Slc12a8)",
      "NR: Converted to NMN then to NAD+ via nicotinamide riboside kinases",
      "Administration: Oral supplementation (NMN or NR); intravenous NAD+ infusions used in clinical settings",
      "Typical doses studied: NMN 250\u2013500 mg/day; NR 250\u20131000 mg/day",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations",
    content:
      "(1) Most longevity effects are from preclinical animal models \u2014 large-scale human RCT data is still emerging. (2) Human clinical trials show NAD+ precursors safely increase blood NAD+ levels, but functional benefits in healthy aging humans are less consistently demonstrated. (3) The optimal form (NMN vs NR vs direct NAD+), dose, and timing are not fully established. (4) NAD+ precursors are dietary supplements not FDA-approved drugs \u2014 quality and dosing accuracy vary between products. (5) The role of CD38 as an NAD+-consuming enzyme may limit the effectiveness of supplementation in high-inflammation states. (6) Whether benefits translate to maximum lifespan extension in humans remains unknown.",
  },
  {
    id: "related",
    title: "Related Supplements",
    links: [
      { name: "NMN \u2014 NAD+ precursor profiled in the Supplement Library", href: "/supplements/nmn" },
      { name: "Resveratrol \u2014 sirtuin activator often studied in combination with NAD+", href: "/supplements/resveratrol" },
    ],
  },
  {
    id: "references",
    title: "References",
    body: [
      "Nature/npj Aging. It takes two to tango: NAD+ and sirtuins in aging/longevity control. 2016. https://www.nature.com/articles/npjamd201617",
      "PMC/Aging Cell. Promising Results With NAD Supplementation in Rare Diseases With Premature Aging and DNA Damage. 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC12727671/",
      "ChemRxiv. Boosting NAD+ for Anti-Aging: Mechanisms, Interventions, and Opportunities. 2025. https://chemrxiv.org/doi/pdf/10.26434/chemrxiv-2025-nl80r",
      "Circulation Research. Sirtuins and NAD+ in the Development and Treatment of Metabolic and Cardiovascular Diseases. 2018. https://www.ahajournals.org/doi/10.1161/CIRCRESAHA.118.312498",
      "Renue By Science. Latest Breakthroughs in NAD+ Research: What the Science Says in 2025. https://renuebyscience.com/blogs/research/latest-breakthroughs-in-nad-research-what-the-science-says-in-2025",
    ],
  },
];

export default function NADPlusPage() {
  return (
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0D7377] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">NAD+</h1>
        <span className="tag">Longevity</span>
        <span className="text-xs bg-gray-200 text-gray-600 border border-gray-300 px-2.5 py-1 rounded-full font-medium">
          Not FDA Approved as Drug — Supplements Widely Available
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-8">
        Also Known As: Nicotinamide Adenine Dinucleotide, NAD, Coenzyme I. Precursors: NMN (Nicotinamide Mononucleotide), NR (Nicotinamide Riboside)
      </p>

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id}>
            <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">
              {s.title}
            </h2>
            {s.content && (
              <p className="text-sm text-gray-600 leading-relaxed">{s.content}</p>
            )}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ol>
            )}
            {s.links && (
              <div className="space-y-2">
                {s.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-medium text-[#0D7377] hover:underline"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D7377] flex-shrink-0" />
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Longevity", "Sirtuins", "NAD+", "Mitochondria"].map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-12 p-5 bg-gray-50 border border-gray-100 rounded-xl">
        <p className="text-sm font-medium text-gray-700 mb-1">Explore the Supplement Library</p>
        <p className="text-xs text-gray-500 mb-3">
          NAD+ precursors NMN and NR are profiled in our Supplement Library alongside other longevity compounds.
        </p>
        <Link href="/supplements" className="btn-primary text-sm">
          Browse Supplements
        </Link>
      </div>
    </div>
  );
}
