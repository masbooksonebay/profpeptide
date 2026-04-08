import Link from "next/link";

export const metadata = {
  title: "MOTS-c — Research Profile, Mechanism & Dosage Guide | Prof. Peptide",
  description:
    "MOTS-c research profile covering mitochondrial-derived exercise mimetic mechanism, AMPK activation, insulin sensitivity, and aging research.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "MOTS-c (Mitochondrial ORF of the 12S rRNA Type-C) is a 16-amino acid peptide with a uniquely novel origin \u2014 it is encoded not by nuclear DNA like most peptides, but by a short open reading frame within the mitochondrial 12S rRNA gene. This makes MOTS-c one of a small class of mitochondrial-derived peptides (MDPs) \u2014 bioactive peptides produced by mitochondria that serve as signaling molecules between mitochondria, the nucleus, and other cellular compartments. First identified in 2015 by Lee et al. at the University of Southern California, MOTS-c represents a new category of endogenous metabolic regulator \u2014 one that is produced in response to exercise and metabolic stress and plays a central role in glucose metabolism, insulin sensitivity, and energy homeostasis. What makes MOTS-c particularly compelling is its classification as an exercise mimetic \u2014 endogenous MOTS-c levels increase approximately 11.9-fold in skeletal muscle following exercise and 1.6-fold in circulation during exercise. This means MOTS-c is a molecule the body naturally produces to mediate some of the metabolic benefits of physical activity. Plasma MOTS-c levels decline with age and are lower in people with obesity, insulin resistance, and type 2 diabetes \u2014 positioning it as a potential therapeutic target for metabolic disease and aging. It is not FDA approved and remains a research compound, but has been added to the WADA prohibited list reflecting its potential for performance enhancement.",
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "AMPK and SIRT1 Activation [1] \u2014 MOTS-c's primary mechanism involves activation of AMPK (AMP-activated protein kinase) \u2014 the master metabolic sensor \u2014 and SIRT1, both of which are central to exercise-induced metabolic adaptations. AMPK activation promotes glucose uptake via GLUT4 translocation, fatty acid oxidation, and mitochondrial biogenesis. SIRT1 activation supports epigenetic regulation of metabolic gene expression. Together these pathways reproduce key metabolic effects of exercise.",
      "Nuclear Translocation During Stress [2] \u2014 Unlike most peptides that act at cell surface receptors, MOTS-c is uniquely transported to the nucleus during metabolic stress where it directly regulates nuclear gene expression \u2014 influencing genes related to metabolism, proteostasis, and stress response. This mitochondria-to-nucleus communication represents a novel signaling axis.",
      "GLUT4 Upregulation [3] \u2014 MOTS-c increases GLUT4 glucose transporter expression and translocation to the cell surface in skeletal muscle, directly improving glucose uptake and insulin sensitivity \u2014 a mechanism shared with exercise and metformin.",
      "Insulin Sensitivity Improvement [1] \u2014 MOTS-c improves insulin sensitivity in skeletal muscle by activating AMPK-dependent glucose uptake pathways, and has been shown to inhibit weight gain and insulin resistance caused by high-fat diet in animal models.",
      "Anti-inflammatory Effects [2] \u2014 MOTS-c suppresses inflammatory markers including IL-1\u03B2 and IL-6 in adipose tissue, reducing the chronic low-grade inflammation that drives metabolic dysfunction. This anti-inflammatory mechanism is particularly relevant in the context of obesity-associated metabolic disease.",
      "Mitochondrial Biogenesis [3] \u2014 Through AMPK and SIRT1 activation, MOTS-c stimulates PGC-1\u03B1 \u2014 the master regulator of mitochondrial biogenesis \u2014 promoting the creation of new, healthy mitochondria and improving overall mitochondrial function.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Insulin Resistance and Type 2 Diabetes [1] \u2014 The landmark 2015 study by Lee et al. in Cell Metabolism established MOTS-c as a regulator of metabolic homeostasis \u2014 demonstrating that MOTS-c administration reduces obesity and insulin resistance in high-fat diet mouse models. Blood MOTS-c levels are significantly lower in people with type 2 diabetes, gestational diabetes, and insulin resistance \u2014 establishing a clear clinical association.",
      "Exercise Mimicry and Physical Performance [2] \u2014 A landmark 2021 Nature Communications study by Reynolds et al. demonstrated that MOTS-c treatment significantly enhanced physical performance in young, middle-aged, and old mice \u2014 and that late-life MOTS-c treatment increased healthspan. In humans, exercise induces endogenous MOTS-c expression in skeletal muscle and circulation, confirming its role as an exercise-induced metabolic regulator.",
      "Aging and Healthspan [2] \u2014 MOTS-c levels decline with age in parallel with declining metabolic function and physical capacity. The Reynolds et al. study showed intermittent MOTS-c treatment initiated late in life (equivalent to human old age) still produced meaningful improvements in physical capacity and healthspan in mice \u2014 suggesting therapeutic potential even when started later in life.",
      "Cardiovascular Health [3] \u2014 Plasma MOTS-c levels are positively correlated with coronary endothelial function in humans, and MOTS-c improves endothelial function in animal models \u2014 suggesting cardiovascular protective effects beyond its metabolic benefits.",
      "Menopause and Hormonal Metabolic Dysfunction [1] \u2014 MOTS-c treatment prevented weight gain and insulin resistance in an ovariectomized mouse model of menopause \u2014 suppressing inflammatory markers in adipose tissue and suggesting potential applications for metabolic dysfunction associated with hormonal changes.",
    ],
  },
  {
    id: "benefits",
    title: "Observed Benefits in Research",
    body: [
      "11.9-fold increase in endogenous MOTS-c in skeletal muscle following exercise",
      "Reduced obesity and insulin resistance in high-fat diet mouse models",
      "Significantly enhanced physical performance across all age groups in mice",
      "Late-life treatment improved healthspan in aged mice",
      "Lower plasma levels consistently found in type 2 diabetes and insulin resistance",
      "Improved endothelial function and cardiovascular markers",
      "Prevention of menopause-associated metabolic dysfunction in animal models",
      "Anti-inflammatory effects in adipose tissue",
    ],
  },
  {
    id: "pharmacokinetics",
    title: "Pharmacokinetics",
    body: [
      "Structure: 16 amino acid peptide encoded by mitochondrial 12S rRNA gene",
      "Origin: Mitochondrial-derived \u2014 unique among peptide therapeutics",
      "Administration: Subcutaneous injection in research protocols",
      "Endogenous regulation: Produced in response to exercise and metabolic stress",
      "Age-related decline: Plasma levels decline with age and in metabolic disease",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations",
    content:
      "(1) Most robust research is from animal models \u2014 human clinical trial data is limited. (2) No large-scale human RCTs have been completed. (3) Optimal dosing for human therapeutic use has not been established \u2014 animal doses vary widely (0.5\u201350 mg/kg). (4) Not FDA approved and added to the WADA prohibited list in 2024, reflecting both its performance-enhancing potential and unresolved regulatory status. (5) The mechanisms of action while well-studied in animals require further confirmation in humans. (6) Long-term safety data in humans is not available.",
  },
  {
    id: "wada",
    title: "WADA Status",
    content:
      "MOTS-c is listed on the WADA prohibited list and is banned in competitive sport. Athletes in WADA-governed competitions should not use MOTS-c.",
  },
  {
    id: "stacking",
    title: "Common Research Stacking",
    content:
      "MOTS-c is studied alongside other metabolic peptides including AOD-9604 for fat metabolism and is positioned alongside Epitalon and NAD+ in longevity research given its role in mitochondrial function and aging.",
  },
  {
    id: "references",
    title: "References",
    body: [
      "PMC. MOTS-c: A promising mitochondrial-derived peptide for therapeutic exploitation. Frontiers in Endocrinology. 2023. https://pmc.ncbi.nlm.nih.gov/articles/PMC9905433/",
      "Nature Communications. MOTS-c is an exercise-induced mitochondrial-encoded regulator of age-dependent physical decline and muscle homeostasis. 2021. https://www.nature.com/articles/s41467-020-20790-0",
      "Frontiers in Physiology. Mitochondria-derived peptide MOTS-c restores mitochondrial respiration in type 2 diabetic heart. 2025. https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2025.1602271/full",
    ],
  },
];

export default function MOTSCPage() {
  return (
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0D7377] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">MOTS-c</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
        <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full font-medium">
          Not FDA Approved — Research Use Only
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-8">
        Also Known As: Mitochondrial ORF of the 12S rRNA Type-C, mitochondrial-derived peptide
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
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Exercise Mimetic", "Mitochondrial", "AMPK", "WADA Prohibited"].map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-12 p-5 bg-gray-50 border border-gray-100 rounded-xl">
        <p className="text-sm font-medium text-gray-700 mb-1">Need to calculate a dose?</p>
        <p className="text-xs text-gray-500 mb-3">
          Use the Prof. Peptide dosage calculator for accurate reconstitution and dosing math.
        </p>
        <Link href="/calculator" className="btn-primary text-sm">
          Open Calculator
        </Link>
      </div>
    </div>
  );
}
