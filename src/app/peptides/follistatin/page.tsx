import Link from "next/link";

export const metadata = {
  title: "Follistatin — Research Profile, Mechanism & Dosage Guide | Prof. Peptide",
  description:
    "Follistatin research profile covering myostatin inhibition, gene therapy trials for muscular dystrophy, muscle growth data, and safety information.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "Follistatin is a naturally occurring glycoprotein and secreted protein found throughout the body — in the ovaries, testes, liver, skeletal muscle, and other tissues. It was originally identified for its ability to suppress follicle-stimulating hormone (FSH) from the pituitary gland, but has since been recognized as one of the most potent regulators of muscle growth through its inhibition of myostatin — the body's primary biological brake on muscle development. Myostatin (also known as GDF-8, or growth differentiation factor-8) is a member of the TGF-\u03B2 superfamily that limits skeletal muscle mass by inhibiting muscle cell growth and differentiation. By binding to and neutralizing myostatin, follistatin removes this restraint, enabling significantly greater muscle cell proliferation, hypertrophy, and regeneration. Transgenic mice overexpressing follistatin show increases in muscle mass of 194–327% compared to controls — substantially greater than the doubling seen in myostatin knockout animals alone — indicating follistatin acts through additional pathways beyond myostatin inhibition. Follistatin exists in two primary isoforms: FS288 (short isoform) and FS315 (long isoform, derived from the FS344 precursor). FS315 is the preferred isoform for muscle-targeted research and gene therapy, as it has significantly lower affinity for reproductive activins compared to FS288, reducing off-target hormonal effects. As a peptide research compound, follistatin is not FDA approved for therapeutic use but is being studied in gene therapy trials for muscular dystrophy and other neuromuscular conditions.",
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "Myostatin Inhibition [1] — Follistatin's primary mechanism is direct binding to myostatin (GDF-8), a potent inhibitor of muscle growth. By binding myostatin, follistatin prevents it from engaging with its receptor (activin receptor type IIB, ActRIIB) on muscle cells, blocking the downstream Smad2/Smad3 signaling cascade that suppresses muscle growth. This effectively removes the biological ceiling on muscle hypertrophy.",
      "TGF-\u03B2 Superfamily Antagonism [2] — Follistatin inhibits multiple members of the TGF-\u03B2 superfamily beyond myostatin, including activin A. This broader inhibitory profile contributes to its muscle-enhancing effects beyond what myostatin inhibition alone would predict — explaining why follistatin-overexpressing mice show greater muscle mass than myostatin-knockout mice.",
      "Satellite Cell Proliferation [3] — Follistatin promotes muscle growth through satellite cell activation and proliferation. Research demonstrates that approximately 20% of follistatin-induced muscle hypertrophy is attributable to satellite cell proliferation, with the remainder driven by direct myostatin inhibition.",
      "Reduced Fibrosis [1] — By inhibiting myostatin's activation of Smad3 phosphorylation in fibroblasts, follistatin reduces fibrotic remodeling in muscle tissue — a significant consideration in muscular dystrophy and injury recovery research.",
      "Nutrient Partitioning [4] — Follistatin overexpression is associated with decreased fat accumulation alongside increased muscle mass, suggesting a role in partitioning nutrients toward muscle rather than adipose tissue through activin A inhibition in fat cells.",
      "FSH Suppression [1] — Follistatin was originally named for its suppression of follicle-stimulating hormone (FSH) from the pituitary gland via activin inhibition. This represents a significant off-target effect when considering systemic follistatin administration, and is a key reason why the FS315 isoform (lower activin affinity) is preferred in muscle-targeted research.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Muscular Dystrophy — Gene Therapy Trials [2] — The most clinically advanced follistatin research involves gene therapy delivery of the FS344 construct (which produces the FS315 isoform) via adeno-associated virus (AAV) vectors. The first human clinical trial in Becker muscular dystrophy demonstrated safety and improvements in ambulation. Studies in mdx mice (a model for Duchenne muscular dystrophy) showed significant improvements in muscle mass, strength, and pathology.",
      "Non-Human Primate Studies [5] — Injection of AAV1-FS344 into the quadriceps of cynomolgus macaque monkeys produced pronounced and durable increases in muscle size and strength, with long-term expression showing no abnormal changes in organ morphology or function — an important safety milestone for clinical translation.",
      "Sarcopenia and Age-Related Muscle Loss [3] — Follistatin's myostatin-blocking action is under investigation as a therapeutic strategy for preventing or reversing sarcopenia, the age-related loss of muscle mass and strength that reduces mobility and metabolic health.",
      "Muscle Wasting Disorders [1] — Research across multiple muscular dystrophy models (Duchenne, Becker, limb-girdle) supports follistatin-based myostatin inhibition as a potential therapeutic approach, with efficacy varying depending on the specific disease state.",
      "Body Composition [4] — The combination of increased muscle mass and decreased fat accumulation makes follistatin relevant in metabolic research examining body composition modulation.",
    ],
  },
  {
    id: "benefits",
    title: "Observed Benefits in Research",
    body: [
      "Muscle mass increases of 194–327% in follistatin-overexpressing transgenic mouse models",
      "Approximately 37% increase in muscle weight with follistatin overexpression in controlled animal studies",
      "Significant improvements in muscle strength alongside mass increases",
      "Reduced muscle fibrosis and improved pathology in muscular dystrophy models",
      "Safety and efficacy demonstrated in non-human primate studies",
      "Decreased fat accumulation alongside increased muscle mass",
      "Durable effects lasting over 2 years in long-term mouse studies",
      "First human gene therapy trial in Becker muscular dystrophy showed safety and improved ambulation",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations",
    content:
      "Important caveats apply to follistatin research: (1) Most evidence for muscle enhancement comes from preclinical animal models and gene therapy delivery systems — not direct peptide administration. Direct exogenous peptide administration data in humans is very limited. (2) Follistatin's inhibition of FSH via activin represents a significant off-target effect on reproductive hormones — a major clinical concern for systemic administration. (3) The FS315 isoform significantly reduces but does not eliminate activin effects, requiring careful monitoring of reproductive hormone levels. (4) The profound muscle-enhancing effects raise ethical and anti-doping concerns — follistatin is banned by WADA. (5) Concerns exist about potential cancer-promoting effects given follistatin's role in cell proliferation signaling. (6) Optimal dosing, administration route, and cycling protocols for peptide administration in humans are unknown. (7) Follistatin is not FDA approved for any therapeutic use. Current clinical applications are limited to gene therapy trials.",
  },
  {
    id: "stacking",
    title: "Common Research Stacking",
    content:
      "In preclinical research contexts, follistatin is studied alongside: IGF-1 LR3 — for complementary anabolic effects (myostatin inhibition + direct IGF-1 signaling); CJC-1295 and Ipamorelin — growth hormone secretagogues for broader anabolic support; BPC-157 and TB-500 — tissue repair peptides for recovery-focused protocols.",
  },
  {
    id: "references",
    title: "References",
    body: [
      "PMC. Inhibition of Myostatin with Emphasis on Follistatin as a Therapy for Muscle Disease. 2009. https://pmc.ncbi.nlm.nih.gov/articles/PMC2717722/",
      "PMC. Follistatin Gene Therapy Improves Ambulation in Becker Muscular Dystrophy. 2017. https://pmc.ncbi.nlm.nih.gov/articles/PMC5240576/",
      "American Journal of Physiology. Follistatin induces muscle hypertrophy through satellite cell proliferation and inhibition of myostatin and activin. 2009. https://journals.physiology.org/doi/full/10.1152/ajpendo.00193.2009",
      "Nature/Experimental and Molecular Medicine. Follistatin N terminus differentially regulates muscle size and fat in vivo. 2017. https://www.nature.com/articles/emm2017135",
      "PMC. Follistatin Gene Delivery Enhances Muscle Growth and Strength in Nonhuman Primates. 2009. https://pmc.ncbi.nlm.nih.gov/articles/PMC2852878/",
    ],
  },
];

export default function FollistatinPage() {
  return (
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Follistatin</h1>
        <span className="tag">Performance &amp; Energy</span>
        <span className="text-xs bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-700/50 px-2.5 py-1 rounded-full font-medium">
          Not FDA Approved — Research and Gene Therapy Trials
        </span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: FST, FS344, FS315, Follistatin-344
      </p>

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id}>
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              {s.title}
            </h2>
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
        {["Myostatin Inhibitor", "Muscle Growth", "Gene Therapy", "Preclinical"].map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">Need to calculate a dose?</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">
          Use the Prof. Peptide dosage calculator for accurate reconstitution and dosing math.
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
            href="https://www.amazon.com/s?k=performance+energy+supplements&tag=profpeptide-20"
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
  );
}
