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
    editorsPick: true,
  },
  {
    name: "Apollo Peptide Sciences",
    url: "https://apollopeptides.co",
    code: "PROFPEPTIDE",
    discount: "10% off",
  },
  {
    name: "Ascension Peptides",
    url: "https://ascensionpeptides.com",
    code: "PROFPEPTIDE",
    discount: "20% off",
  },
  {
    name: "Fusion Peptide",
    url: "https://fusionpeptide.com/?ref=PROFPEPTIDE",
    code: "MARK15",
    discount: "15% off",
  },
  {
    name: "Integrative Peptides",
    url: "https://integrativepeptides.com/affiliate/profpeptide/",
    code: "PROFPEPTIDE",
    discount: "10% off",
  },
  {
    name: "Limitless Biotech",
    url: "https://limitlessbiotech.com",
    code: "PROFPEPTIDE",
    discount: "10% off",
  },
  {
    name: "Oasis Labs",
    url: "https://myoasislabs.com",
    code: "PROFPEPTIDE",
    discount: "10% off",
  },
  {
    name: "Royal Peptides",
    url: "https://royalpeptides.com",
    code: "PROFPEPTIDE",
    discount: "10% off",
  },
  {
    name: "Vital Core Research",
    url: "https://vitalcoreresearch.com",
    code: "PROFPEPTIDE",
    discount: "10% off",
  },
];

export default function CouponsPage() {
  return (
    <div className="section max-w-3xl">
      <span className="tag mb-3 inline-block">Updated Regularly</span>
      <h1 className="text-3xl font-bold text-[#1e2d3d] mb-3">Discount Codes</h1>
      <p className="text-sm text-gray-500 mb-8 leading-relaxed max-w-lg">
        Verified discount codes for peptide vendors with third-party lab testing.
      </p>

      <div className="space-y-4 mb-10">
        {vendors.map((v) => (
          <div
            key={v.name}
            className={`border rounded-xl overflow-hidden transition-shadow ${
              v.editorsPick
                ? "border-amber-200 shadow-md hover:shadow-lg"
                : "border-gray-100 shadow-sm hover:shadow-md"
            }`}
          >
            <div
              className={`bg-[#1B3A4B] flex items-center justify-between ${
                v.editorsPick ? "px-6 py-5" : "px-5 py-4"
              }`}
            >
              <h2
                className={`font-bold text-white leading-tight ${
                  v.editorsPick ? "text-lg" : "text-base"
                }`}
              >
                {v.name}
              </h2>
              <span className="text-xs font-bold text-white/90 bg-white/20 px-2.5 py-1 rounded-full whitespace-nowrap">
                {v.discount}
              </span>
            </div>

            <div className={`bg-white ${v.editorsPick ? "px-6 py-5" : "px-5 py-4"}`}>
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
                className="block w-full text-center text-sm font-medium text-white py-2.5 rounded-lg bg-[#1B3A4B] transition-opacity hover:opacity-90"
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
