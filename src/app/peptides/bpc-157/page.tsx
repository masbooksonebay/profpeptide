import Link from "next/link";

export default function BPC157Page() {
    return (
          <div className="section max-w-3xl">
                <Link href="/peptides" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">
                        ← Back to Peptide Library
                </Link>Link>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h1 className="text-3xl font-bold text-[#1e2d3d]">BPC-157</h1>h1>
                        <span className="tag">Recovery &amp; Tissue Repair</span>span>
                </div>div>
                <p className="text-sm text-gray-500 mb-8">
                        <strong className="text-gray-700">Also Known As:</strong>strong> Body Protection Compound-157, Bepecin, PL-14736, Gastric Pentadecapeptide
                </p>p>
          
                <div className="space-y-8">
                        <div>
                                  <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">Overview</h2>h2>
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                              BPC-157 is a synthetic pentadecapeptide consisting of 15 amino acids, derived from a naturally occurring protein found in human gastric juice. First described in the scientific literature in 1993, it has since become one of the most extensively studied peptides in preclinical research. BPC-157 is notable for its chemical stability — it resists enzymatic degradation and retains biological activity even under harsh conditions. Research has explored its potential across a wide range of tissue types, with a particular focus on musculoskeletal repair, gastrointestinal protection, and systemic cytoprotection.
                                  </p>p>
                        </div>div>
                
                        <div>
                                  <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">Mechanism of Action</h2>h2>
                                  <div className="space-y-4">
                                    {[
            {
                              title: "Angiogenesis via VEGF Upregulation",
                              body: "BPC-157 stimulates vascular endothelial growth factor (VEGF) protein and gene expression, promoting the formation of new blood vessels. This is considered a primary mechanism underlying its observed tissue-healing properties.",
                              refs: "[1][2]",
            },
            {
                              title: "ERK1/2 Signaling",
                              body: "BPC-157 significantly enhances phosphorylation of extracellular signal-regulated kinases (ERK1/2) in a dose-dependent manner, driving cellular proliferation, migration, and vascular tube formation — all critical processes in tissue regeneration.",
                              refs: "[2]",
            },
            {
                              title: "Nitric Oxide Synthesis",
                              body: "BPC-157 activates the Akt-eNOS axis, modulating nitric oxide production. Nitric oxide plays a central role in vascular tone, endothelial protection, and tissue repair.",
                              refs: "[2]",
            },
            {
                              title: "Growth Hormone Receptor Upregulation",
                              body: "Research demonstrates that BPC-157 dose-dependently increases growth hormone receptor expression in tendon fibroblasts, enhancing cellular sensitivity to growth hormone and supporting tissue regeneration.",
                              refs: "[3]",
            },
            {
                              title: "FAK-Paxillin Pathway",
                              body: "BPC-157 activates focal adhesion kinase (FAK) and paxillin, promoting fibroblast migration and outgrowth from tendon tissue — key processes in the repair of injured tendons and ligaments.",
                              refs: "[4]",
            },
            {
                              title: "Anti-Inflammatory Modulation",
                              body: "BPC-157 reduces pro-inflammatory cytokines including IL-6 and TNF-α, and suppresses myeloperoxidase (MPO) activity, contributing to its observed cytoprotective effects.",
                              refs: "[1]",
            },
                        ].map((item) => (
                                        <div key={item.title} className="border-l-2 border-gray-200 pl-4">
                                                        <p className="text-sm font-medium text-[#1e2d3d] mb-1">
                                                          {item.title}{" "}
                                                                          <span className="text-xs text-gray-400 font-normal">{item.refs}</span>span>
                                                        </p>p>
                                                        <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>p>
                                        </div>div>
                                      ))}
                                  </div>div>
                        </div>div>
                
                        <div>
                                  <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">Key Research Areas</h2>h2>
                                  <div className="space-y-4">
                                    {[
            {
                              title: "Musculoskeletal Repair",
                              body: "A 2024 systematic review of 36 preclinical studies found BPC-157 consistently improved functional, structural, and biomechanical outcomes in models of muscle, tendon, ligament, and bone injury. A retrospective clinical observation of 12 patients with chronic knee pain found 7 of 12 reported relief lasting more than 6 months following intraarticular injection.",
                              refs: "[1]",
            },
            {
                              title: "Gastrointestinal Protection",
                              body: "BPC-157 has been studied extensively for its GI protective effects. Research indicates potential benefit in models of inflammatory bowel disease, GI ulceration, NSAID-induced injury, and GI fistula repair.",
                              refs: "[6]",
            },
            {
                              title: "Central Nervous System",
                              body: "Preclinical studies have explored BPC-157's interactions with the dopamine, serotonin, and nitric oxide systems in the brain. Research has shown neuroprotective effects in models of stroke and ischemia/reperfusion injury.",
                              refs: "[5]",
            },
            {
                              title: "Systemic Cytoprotection",
                              body: "BPC-157 has demonstrated protective effects across multiple organ systems in preclinical models, including the endothelium, liver, pancreas, and heart.",
                              refs: "[6]",
            },
                        ].map((item) => (
                                        <div key={item.title} className="border-l-2 border-gray-200 pl-4">
                                                        <p className="text-sm font-medium text-[#1e2d3d] mb-1">
                                                          {item.title}{" "}
                                                                          <span className="text-xs text-gray-400 font-normal">{item.refs}</span>span>
                                                        </p>p>
                                                        <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>p>
                                        </div>div>
                                      ))}
                                  </div>div>
                        </div>div>
                
                        <div>
                                  <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">Observed Benefits in Research</h2>h2>
                                  <ul className="space-y-2">
                                    {[
                          "Accelerated tendon, ligament, and muscle healing in preclinical models",
                          "Enhanced fibroblast migration and outgrowth",
                          "Gastrointestinal mucosal protection",
                          "Reduced inflammation via cytokine modulation",
                          "Neuroprotective effects in stroke models",
                          "Endothelial protection and vascular integrity support",
                          "No minimum toxic dose or lethal dose identified in preclinical safety studies",
                        ].map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0D7377] flex-shrink-0" />
                                          {item}
                                        </li>li>
                                      ))}
                                  </ul>ul>
                        </div>div>
                
                        <div>
                                  <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">Half-Life &amp; Stability</h2>h2>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {[
            { label: "Half-life", value: "Under 30 minutes" },
            { label: "Stability", value: "Chemically stable; resistant to enzymatic degradation" },
            { label: "Metabolism", value: "Hepatic; renally cleared" },
            { label: "Administration routes studied", value: "Subcutaneous injection, intraperitoneal, oral, intraarticular" },
                        ].map((item) => (
                                        <div key={item.label} className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-3">
                                                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">{item.label}</p>p>
                                                        <p className="text-sm text-gray-700">{item.value}</p>p>
                                        </div>div>
                                      ))}
                                  </div>div>
                        </div>div>
                
                        <div>
                                  <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">Research Limitations &amp; Regulatory Status</h2>h2>
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                              The vast majority of BPC-157 research has been conducted in rodent models. No completed randomized controlled human clinical trials have been published as of 2025. The FDA has not approved BPC-157 for any medical use and has stated that compounded drugs containing BPC-157 may cause immune reactions, citing insufficient human safety data. WADA temporarily listed BPC-157 as a banned substance in 2022, though it is not currently on the prohibited list. Results from animal studies cannot be freely extrapolated to humans, and further clinical research is needed.
                                  </p>p>
                        </div>div>
                
                        <div>
                                  <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">Common Research Stacking</h2>h2>
                                  <div className="space-y-3">
                                    {[
            { name: "TB-500", desc: "for synergistic tissue repair and anti-inflammatory effects", href: "/peptides/tb-500" },
            { name: "CJC-1295 / Ipamorelin", desc: "in recovery-focused research protocols", href: "/peptides/cjc-1295" },
                        ].map((item) => (
                                        <div key={item.name} className="flex items-start gap-3 border border-gray-100 rounded-lg px-4 py-3">
                                                        <div>
                                                                          <Link href={item.href} className="text-sm font-medium text-[#0D7377] hover:underline">
                                                                            {item.name}
                                                                          </Link>Link>
                                                                          <span className="text-sm text-gray-500"> — {item.desc}</span>span>
                                                        </div>div>
                                        </div>div>
                                      ))}
                                  </div>div>
                        </div>div>
                
                        <div>
                                  <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">References</h2>h2>
                                  <ol className="space-y-3">
                                    {[
            {
                              num: 1,
                              citation: "Vasireddi N, et al. Emerging Use of BPC-157 in Orthopaedic Sports Medicine: A Systematic Review. Orthopaedic Journal of Sports Medicine. 2025.",
                              url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/",
            },
            {
                              num: 2,
                              citation: "Knez D, et al. Regeneration or Risk? A Narrative Review of BPC-157 for Musculoskeletal Healing. PMC. 2025.",
                              url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12446177/",
            },
            {
                              num: 3,
                              citation: "Chang CH, et al. Pentadecapeptide BPC 157 Enhances the Growth Hormone Receptor Expression in Tendon Fibroblasts. PMC. 2018.",
                              url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6271067/",
            },
            {
                              num: 4,
                              citation: "Chang CH, et al. The promoting effect of pentadecapeptide BPC 157 on tendon healing. PubMed. 2011.",
                              url: "https://pubmed.ncbi.nlm.nih.gov/21030672/",
            },
            {
                              num: 5,
                              citation: "Sikiric P, et al. Pentadecapeptide BPC 157 and the central nervous system. PMC. 2021.",
                              url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8504390/",
            },
            {
                              num: 6,
                              citation: "Gadek Z, et al. Multifunctionality and Possible Medical Application of the BPC 157 Peptide. Pharmaceuticals (MDPI). 2025.",
                              url: "https://www.mdpi.com/1424-8247/18/2/185",
            },
                        ].map((ref) => (
                                        <li key={ref.num} className="flex gap-3 text-sm text-gray-600">
                                                        <span className="text-gray-400 font-medium flex-shrink-0">[{ref.num}]</span>span>
                                                        <span>
                                                          {ref.citation}{" "}
                                                                          <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-[#0D7377] hover:underline break-all">
                                                                            {ref.url}
                                                                          </a>a>
                                                        </span>span>
                                        </li>li>
                                      ))}
                                  </ol>ol>
                        </div>div>
                </div>div>
          
                <div className="flex flex-wrap gap-2 mt-8">
                  {["Recovery", "Tissue Repair", "Gut", "Preclinical", "Anti-inflammatory"].map((t) => (
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
