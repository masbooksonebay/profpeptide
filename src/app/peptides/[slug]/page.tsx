import Link from "next/link";
import { notFound } from "next/navigation";

type PeptideData = {
    name: string;
    category: string;
    halfLife: string;
    route: string;
    overview: string;
    mechanism: string;
    research: string;
    notes: string;
    tags: string[];
};

const peptideData: Record<string, PeptideData> = {
    "semaglutide": {
          name: "Semaglutide",
          category: "GLP-1 Receptor Agonist",
          halfLife: "~7 days",
          route: "Subcutaneous injection or oral",
          overview: "Semaglutide is a long-acting GLP-1 receptor agonist originally developed for type 2 diabetes (Ozempic) and later approved for weight management (Wegovy). It is one of the most studied peptides in metabolic research.",
          mechanism: "Acts on GLP-1 receptors in the pancreas (stimulating insulin, suppressing glucagon), brain (reducing appetite via hypothalamic pathways), and gut (slowing gastric emptying). The 7-day half-life is achieved via a C18 fatty acid chain enabling albumin binding.",
          research: "Multiple large Phase III trials (SUSTAIN, STEP) demonstrated significant reductions in HbA1c and body weight. The STEP 1 trial showed approximately 15% average body weight reduction over 68 weeks at 2.4mg weekly dose.",
          notes: "Common side effects in clinical trials: nausea, vomiting, diarrhea (usually transient). Gradual dose titration is standard protocol. Research interest growing in cardiovascular and renal outcomes.",
          tags: ["Metabolic", "Weight", "GLP-1", "Long-acting"],
    },
    "bpc-157": {
          name: "BPC-157",
          category: "Tissue Repair Peptide",
          halfLife: "Under 30 minutes",
          route: "Subcutaneous injection, intraperitoneal, oral, intraarticular",
          overview: "Body Protection Compound-157 is a pentadecapeptide (15 amino acids) derived from a protein found in human gastric juice. It is extensively studied in animal models for tissue healing, gastroprotection, and organ-protective properties.",
          mechanism: "BPC-157 appears to modulate nitric oxide synthesis, upregulate growth factor expression (VEGF, EGR-1), and interact with dopaminergic and serotonergic systems. It promotes angiogenesis and collagen synthesis in wound models.",
          research: "Primarily preclinical (rodent models). Studies show accelerated healing of tendons, muscles, bones, and corneal tissue. Gastroprotective effects demonstrated in NSAID-induced injury models. No completed human clinical trials as of 2025.",
          notes: "No human clinical trial data yet. Animal data is robust but direct extrapolation carries significant uncertainty. Oral and injectable routes both studied in animals with comparable results in some models.",
          tags: ["Gut", "Recovery", "Tissue Repair", "Preclinical"],
    },
    "tb-500": {
          name: "TB-500",
          category: "Tissue Repair Peptide",
          halfLife: "Unknown",
          route: "Subcutaneous injection",
          overview: "TB-500 is a synthetic fragment of Thymosin Beta-4, a naturally occurring peptide found in nearly all human and animal cells. It is studied primarily for wound healing, anti-inflammatory effects, and tissue repair.",
          mechanism: "Promotes actin polymerization, cell migration, and blood vessel formation. Thought to upregulate cell-surface receptors involved in repair processes and modulate inflammatory cytokines.",
          research: "Studied in animal models for cardiac repair, tendon healing, and corneal repair. Human clinical trials for cardiac repair have been conducted with mixed results. Most peptide research use extrapolates from animal data.",
          notes: "Often compared to BPC-157 and stacked with it in research protocols. Different mechanism of action suggests potential complementarity.",
          tags: ["Recovery", "Inflammation", "Tissue Repair"],
    },
    "ipamorelin": {
          name: "Ipamorelin",
          category: "Growth Hormone Releasing Peptide",
          halfLife: "~2 hours",
          route: "Subcutaneous injection",
          overview: "Ipamorelin is a selective GHRP and ghrelin receptor agonist that stimulates GH release from the pituitary with high selectivity, meaning minimal elevation of cortisol or prolactin compared to older GHRPs.",
          mechanism: "Binds ghrelin/GHS-R1a receptors in the pituitary and hypothalamus, triggering pulsatile GH release. Unlike GHRP-6, it does not significantly stimulate appetite or ACTH/cortisol. Often combined with CJC-1295 for synergistic GH stimulation.",
          research: "Phase I/II studies showed dose-dependent GH release. Most research has focused on its use in cachexia and post-operative recovery. Favorable selectivity profile makes it a popular research choice.",
          notes: "Typically studied in combination with a GHRH analogue (CJC-1295). Timing relative to meals matters in research protocols.",
          tags: ["GH axis", "Sleep", "Recovery", "Selective"],
    },
    "cjc-1295": {
          name: "CJC-1295",
          category: "GHRH Analogue",
          halfLife: "~6-8 days (with DAC)",
          route: "Subcutaneous injection",
          overview: "CJC-1295 is a synthetic analogue of growth hormone-releasing hormone (GHRH) that significantly extends the half-life of GHRH through albumin binding via a drug affinity complex (DAC).",
          mechanism: "Binds GHRH receptors on pituitary somatotrophs, stimulating GH secretion. The DAC modification enables binding to serum albumin, extending half-life from minutes to days. Creates sustained elevation of GH and IGF-1.",
          research: "Studies demonstrate dose-dependent increases in GH and IGF-1. Phase I/II trials showed well-tolerated profiles. Most commonly studied with Ipamorelin for synergistic effects.",
          notes: "Available as CJC-1295 with DAC (long-acting) or without DAC (shorter acting, similar to Mod GRF 1-29). The distinction matters significantly for research protocols.",
          tags: ["GH axis", "Recovery", "GHRH"],
    },
    "selank": {
          name: "Selank",
          category: "Peptide Nootropic",
          halfLife: "~2 minutes (intranasal)",
          route: "Intranasal or subcutaneous",
          overview: "Selank is a synthetic heptapeptide derived from the immune peptide tuftsin, developed in Russia. It is studied for anxiolytic, nootropic, and immunomodulatory properties.",
          mechanism: "Influences GABA-A receptors and modulates brain-derived neurotrophic factor (BDNF) expression. May inhibit enkephalin-degrading enzymes, potentially modulating opioid signaling. Affects monoamine neurotransmitter systems.",
          research: "Russian clinical research suggests anxiolytic effects comparable to benzodiazepines without dependence or sedation. Limited Western peer-reviewed literature. BDNF upregulation may support cognitive function.",
          notes: "Intranasal administration is most studied due to very short systemic half-life. Stability requires careful storage. Most available literature originates from Russian research institutions.",
          tags: ["Anxiety", "Cognitive", "Nootropic"],
    },
};

export function generateStaticParams() {
    return Object.keys(peptideData).map((slug) => ({ slug }));
}

export default function PeptidePage({ params }: { params: { slug: string } }) {
    const data = peptideData[params.slug];
    if (!data) notFound();

  return (
        <div className="section max-w-3xl">
              <Link href="/peptides" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">
                      ← Back to Peptide Library
              </Link>Link>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                      <h1 className="text-3xl font-bold text-[#1e2d3d]">{data.name}</h1>h1>
                      <span className="tag">{data.category}</span>span>
              </div>div>
        
              <div className="space-y-8">
                      <div>
                                <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">Overview</h2>h2>
                                <p className="text-sm text-gray-600 leading-relaxed">{data.overview}</p>p>
                      </div>div>
              
                      <div>
                                <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">Mechanism of Action</h2>h2>
                                <p className="text-sm text-gray-600 leading-relaxed">{data.mechanism}</p>p>
                      </div>div>
              
                      <div>
                                <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">Key Research Areas</h2>h2>
                                <p className="text-sm text-gray-600 leading-relaxed">{data.research}</p>p>
                      </div>div>
              
                      <div>
                                <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">Half-Life &amp; Stability</h2>h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <div className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-3">
                                                          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Half-life</p>p>
                                                          <p className="text-sm text-gray-700">{data.halfLife}</p>p>
                                            </div>div>
                                            <div className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-3">
                                                          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Administration routes studied</p>p>
                                                          <p className="text-sm text-gray-700">{data.route}</p>p>
                                            </div>div>
                                </div>div>
                      </div>div>
              
                      <div>
                                <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">Research Limitations &amp; Regulatory Status</h2>h2>
                                <p className="text-sm text-gray-600 leading-relaxed">{data.notes}</p>p>
                      </div>div>
              </div>div>
        
              <div className="flex flex-wrap gap-2 mt-8">
                {data.tags.map((t) => (
                    <span key={t} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{t}</span>span>
                  ))}
              </div>div>
        
              <div className="mt-12 p-5 bg-gray-50 border border-gray-100 rounded-xl">
                      <p className="text-sm font-medium text-gray-700 mb-1">Need to calculate a dose?</p>p>
                      <p className="text-xs text-gray-500 mb-3">Use the Prof. Peptide dosage calculator for accurate reconstitution and dosing math.</p>p>
                      <Link href="/calculator" className="btn-primary text-sm">Open Calculator →</Link>Link>
              </div>div>
        
              <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mt-8 text-xs text-amber-800">
                      For educational and research purposes only. Not medical advice. Not for human use.
              </div>div>
        </div>div>
      );
}</div>
