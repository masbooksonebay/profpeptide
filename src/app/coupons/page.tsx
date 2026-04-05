export const metadata = {
          title: "Coupon Codes | Prof. Peptide",
          description: "Verified discount codes for research-grade peptide suppliers. All supplier peptides are third-party tested for purity and quality.",
};

const coupons = [
        {
                    vendor: "Apollo Peptide Sciences",
                    code: "PROFPEPTIDE",
                    discount: "10% off",
                    category: "General",
                    verified: true,
                    note: "Use code at checkout for 10% off.",
        },
        {
                    vendor: "Ascension Peptides",
                    code: "PROFPEPTIDE",
                    discount: "20% off",
                    category: "General",
                    verified: true,
                    note: "Use code at checkout for 20% off.",
        },
        {
                    vendor: "Integrative Peptides",
                    code: "PROFPEPTIDE",
                    discount: "10% off",
                    category: "General",
                    verified: true,
                    note: "Use code at checkout for 10% off.",
        },
        {
                    vendor: "Limitless Biotech",
                    code: "PROFPEPTIDE",
                    discount: "10% off",
                    category: "General",
                    verified: true,
                    note: "Use code at checkout for 10% off.",
        },
        {
                    vendor: "Oasis Labs",
                    code: "PROFPEPTIDE",
                    discount: "10% off",
                    category: "General",
                    verified: true,
                    note: "Use code at checkout for 10% off.",
        },
        {
                    vendor: "Peptide Partners",
                    code: "PROFPEPTIDE",
                    discount: "10% off",
                    category: "General",
                    verified: true,
                    note: "Use code at checkout for 10% off.",
        },
        {
                    vendor: "Royal Peptides",
                    code: "PROFPEPTIDE",
                    discount: "10% off",
                    category: "General",
                    verified: true,
                    note: "Use code at checkout for 10% off.",
        },
        {
                    vendor: "Vital Core Research",
                    code: "PROFPEPTIDE",
                    discount: "10% off",
                    category: "General",
                    verified: true,
                    note: "Use code at checkout for 10% off.",
        },
        ];

export default function CouponsPage() {
          return (
                      <div className="section max-w-3xl">
                            <span className="tag mb-3 inline-block">Updated Regularly</span>span>
                            <h1 className="text-3xl font-bold text-[#1e2d3d] mb-3">Coupon Codes</h1>h1>
                            <p className="text-sm text-gray-500 mb-8 leading-relaxed max-w-lg">
                                    Verified discount codes for research-grade peptide suppliers. All supplier peptides are third-party tested for purity and quality.
                            </p>p>
                            <div className="space-y-4">
                                    {coupons.map((c) => (
                                        <div key={c.vendor} className="card">
                                                    <div className="flex items-start justify-between gap-4">
                                                                  <div>
                                                                                  <div className="flex items-center gap-2 mb-1">
                                                                                                    <h2 className="text-base font-semibold text-[#1e2d3d]">{c.vendor}</h2>h2>
                                                                                          {c.verified ? <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full">Verified</span>span> : <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Unverified</span>span>}
                                                                                  </div>div>
                                                                                  <p className="text-xs text-gray-500 mb-3">{c.note}</p>p>
                                                                  </div>div>
                                                                  <span className="text-sm font-bold text-[#0D7377] whitespace-nowrap">{c.discount}</span>span>
                                                    </div>div>
                                                    <div className="flex items-center gap-3">
                                                                  <code className="bg-gray-100 px-4 py-2 rounded-md text-sm font-mono font-bold text-[#1e2d3d] tracking-widest">{c.code}</code>code>
                                                                  <span className="tag text-xs">{c.category}</span>span>
                                                    </div>div>
                                        </div>div>
                                      ))}
                            </div>div>
                      </div>div>
                    );
}</div>
