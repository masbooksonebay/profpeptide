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
  "tb-500": {
    name: "TB-500",
    category: "Tissue Repair Peptide",
    halfLife: "Unknown",
    route: "Subcutaneous injection",
    overview: "TB-500 is a synthetic fragment of Thymosin Beta-4, a naturally occurring peptide found in nearly all human and animal cells. It is studied primarily for wound healing, anti-inflammatory effects, and tissue repair.",
    mechanism: "Promotes actin polymerization, cell migration, and blood vessel formation. Thought to upregulate cell-surface receptors involved in repair processes and modulate inflammatory cytokines.",
    research: "Studied in animal models for cardiac repair, tendon healing, and corneal repair. Human clinical trials for cardiac repair have been conducted with mixed results. Most peptide research use extrapolates from animal data.",
    notes: "Often compared to BPC-157 and stacked with it in research protocols. Different mechanism of action suggests potential complementarity. TB-500 is not FDA approved for any medical use in humans.",
    tags: ["Recovery", "Inflammation", "Tissue Repair"],
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
      <Link href="/peptides" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
        Back to Peptide Library
      </Link>
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">{data.name}</h1>
        <span className="tag">{data.category}</span>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{data.overview}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Mechanism of Action</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{data.mechanism}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Key Research Areas</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{data.research}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Half-Life &amp; Stability</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-lg px-4 py-3">
              <p className="text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wide mb-1">Half-life</p>
              <p className="text-sm text-gray-700 dark:text-slate-200">{data.halfLife}</p>
            </div>
            <div className="bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-lg px-4 py-3">
              <p className="text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wide mb-1">Administration routes studied</p>
              <p className="text-sm text-gray-700 dark:text-slate-200">{data.route}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Research Limitations &amp; Regulatory Status</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{data.notes}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {data.tags.map((t) => (
          <span key={t} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{t}</span>
        ))}
      </div>

      <div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">Need to calculate a dose?</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Use the Prof. Peptide dosage calculator for accurate reconstitution and dosing math.</p>
        <Link href="/calculator" className="btn-primary text-sm">Open Calculator</Link>
      </div>
    </div>
  );
}
