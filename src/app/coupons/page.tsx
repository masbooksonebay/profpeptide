export const metadata = {
  title: "Coupon Codes | Prof. Peptide",
  description: "Verified peptide supplier discount codes, updated regularly.",
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
      <span className="tag mb-3 inline-block">Updated Regularly</span>
      <h1 className="text-3xl font-bold text-[#1e2d3d] mb-3">Coupon Codes</h1>
      <p className="text-sm text-gray-500 mb-8 leading-relaxed max-w-lg">
        Verified discount codes for research-grade peptide suppliers. We test these regularly.
        Always check the vendor site for current terms before ordering.
      </p>
      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-8 text-xs text-amber-800">
        <strong>Research use only.</strong> Codes are provided for educational context only. Prof. Peptide does not endorse any specific vendor.
      </div>
      <div className="space-y-4">
        {coupons.map((c) => (
          <div key={c.vendor} className="card">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-base font-semibold text-[#1e2d3d]">{c.vendor}</h2>
                  {c.verified
                    ? <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full">Verified</span>
                    : <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Unverified</span>
                  }
                </div>
                <p className="text-xs text-gray-500 mb-3">{c.note}</p>
              </div>
              <span className="text-sm font-bold text-[#0D7377] whitespace-nowrap">{c.discount}</span>
            </div>
            <div className="flex items-center gap-3">
              <code className="bg-gray-100 px-4 py-2 rounded-md text-sm font-mono font-bold text-[#1e2d3d] tracking-widest">{c.code}</code>
              <span className="tag text-xs">{c.category}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-xs text-gray-400 leading-relaxed">
        Codes are periodically verified but may change without notice. Prof. Peptide is not affiliated with or compensated by these vendors. Research peptides are for laboratory use only.
      </p>
    </div>
  );
}
