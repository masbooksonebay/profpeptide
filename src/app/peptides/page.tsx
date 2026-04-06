import Link from "next/link";

export const metadata = {
    title: "Peptide Library | Prof. Peptide",
    description: "Research profiles organized by category.",
};

const categories = [
  {
        name: "Metabolic & Weight Loss",
        peptides: [
          { name: "Semaglutide", slug: "semaglutide" },
          { name: "Tirzepatide", slug: "tirzepatide" },
          { name: "Retatrutide", slug: "retatrutide" },
          { name: "MOTS-c", slug: "mots-c" },
              ],
  },
  {
        name: "Recovery & Tissue Repair",
        peptides: [
          { name: "BPC-157", slug: "bpc-157" },
          { name: "TB-500", slug: "tb-500" },
              ],
  },
  {
        name: "Growth Hormone",
        peptides: [
          { name: "CJC-1295", slug: "cjc-1295" },
          { name: "Ipamorelin", slug: "ipamorelin" },
              ],
  },
  {
        name: "Cognitive & Nootropic",
        peptides: [
          { name: "Selank", slug: "selank" },
          { name: "Semax", slug: "semax" },
              ],
  },
  {
        name: "Longevity",
        peptides: [
          { name: "Epitalon", slug: "epitalon" },
              ],
  },
  {
        name: "Sexual Health & Melanocortin",
        peptides: [
          { name: "PT-141", slug: "pt-141" },
              ],
  },
  ];

export default function PeptidesPage() {
    return (
          <div className="section">
                <div className="mb-10">
                        <span className="tag mb-3 inline-block">Research Profiles</span>span>
                        <h1 className="text-3xl font-bold text-[#1e2d3d] mb-3">Peptide Library</h1>h1>
                        <p className="text-gray-500 max-w-xl text-sm leading-relaxed">
                                  Research profiles organized by category. Click any peptide to read the full profile including mechanism of action, key research findings, and references.
                        </p>p>
                </div>div>
          
                <div className="space-y-10">
                  {categories.map((cat) => (
                      <div key={cat.name}>
                                  <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 pb-2 border-b border-gray-100">
                                    {cat.name}
                                  </h2>h2>
                                  <ul className="space-y-2">
                                    {cat.peptides.map((p) => (
                                        <li key={p.slug}>
                                                          <Link
                                                                                href={`/peptides/${p.slug}`}
                                                                                className="inline-flex items-center gap-2 text-sm font-medium text-[#1e2d3d] hover:text-[#0D7377] transition-colors group"
                                                                              >
                                                                              <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#0D7377] transition-colors flex-shrink-0" />
                                                            {p.name}
                                                          </Link>Link>
                                        </li>li>
                                      ))}
                                  </ul>ul>
                      </div>div>
                    ))}
                </div>div>
          
                <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mt-10 text-xs text-amber-800">
                        <strong>Disclaimer:</strong>strong> All information is for educational and research purposes only. Not medical advice. Not for human use.
                </div>div>
          </div>div>
        );
}</div>
