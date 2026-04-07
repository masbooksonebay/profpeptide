import Link from "next/link";

export const metadata = {
  title: "Discount Codes | Prof. Peptide",
  description:
    "Verified discount codes for peptide vendors with third-party lab testing.",
};

const vendors = [
  {
    name: "Peptide Partners",
    url: "https://peptidespartners.com",
    code: "PROFPEPTIDE",
    discount: "10% off",
    color: "#1B2A4A",
    editorsPick: true,
  },
  {
    name: "Apollo Peptide Sciences",
    url: "https://apollopeptides.co",
    code: "PROFPEPTIDE",
    discount: "10% off",
    color: "#0D4F4F",
  },
  {
    name: "Ascension Peptides",
    url: "https://ascensionpeptides.com",
    code: "PROFPEPTIDE",
    discount: "20% off",
    color: "#2D1B69",
  },
  {
    name: "Fusion Peptide",
    url: "https://fusionpeptide.com/?ref=PROFPEPTIDE",
    code: "MARK15",
    discount: "15% off",
    color: "#8B0000",
  },
  {
    name: "Integrative Peptides",
    url: "https://integrativepeptides.com/affiliate/profpeptide/",
    code: "PROFPEPTIDE",
    discount: "10% off",
    color: "#1B4332",
  },
  {
    name: "Limitless Biotech",
    url: "https://limitlessbiotech.com",
    code: "PROFPEPTIDE",
    discount: "10% off",
    color: "#1C1C1E",
  },
  {
    name: "Oasis Labs",
    url: "https://myoasislabs.com",
    code: "PROFPEPTIDE",
    discount: "10% off",
    color: "#92400E",
  },
  {
    name: "Royal Peptides",
    url: "https://royalpeptides.com",
    code: "PROFPEPTIDE",
    discount: "10% off",
    color: "#1E3A5F",
  },
  {
    name: "Vital Core Research",
    url: "https://vitalcoreresearch.com",
    code: "PROFPEPTIDE",
    discount: "10% off",
    color: "#2D4A3E",
  },
];

export default function CouponsPage() {
  return (
    <div className="section max-w-4xl">
      <span className="tag mb-3 inline-block">Updated Regularly</span>
      <h1 className="text-3xl font-bold text-[#1e2d3d] mb-3">Discount Codes</h1>
      <p className="text-sm text-gray-500 mb-8 leading-relaxed max-w-lg">
        Verified discount codes for peptide vendors with third-party lab testing.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {vendors.map((v) => (
          <div key={v.name} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div
              className="px-5 py-4 flex items-center justify-between"
              style={{ backgroundColor: v.color }}
            >
              <h2 className="text-base font-bold text-white leading-tight">{v.name}</h2>
              <span className="text-xs font-bold text-white/90 bg-white/20 px-2.5 py-1 rounded-full whitespace-nowrap">
                {v.discount}
              </span>
            </div>

            <div className="px-5 py-4 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">
                  Verified
                </span>
                {v.editorsPick && (
                  <span className="text-xs bg-amber-100 text-amber-800 border border-amber-300 px-2 py-0.5 rounded-full font-medium">
                    Editor&apos;s Pick
                  </span>
                )}
              </div>

              <div className="mb-4">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Your Code</p>
                <code className="block bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-lg text-sm font-mono font-bold text-[#1e2d3d] tracking-widest text-center">
                  {v.code}
                </code>
              </div>

              <a
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center text-sm font-medium text-white py-2.5 rounded-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: v.color }}
              >
                Shop Now &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 leading-relaxed">
        Prof. Peptide may earn a commission when you use our discount codes. This never influences our editorial content or research.
      </p>
    </div>
  );
}
