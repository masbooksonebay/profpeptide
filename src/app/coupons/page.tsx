"use client";

import { useState } from "react";

const vendors = [
  {
    name: "Peptide Partners",
    url: "https://peptide.partners/",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "\uD83C\uDDFA\uD83C\uDDF8 US",
    editorsPick: true,
  },
  {
    name: "Almighty Peptides",
    url: "https://www.almightypeptides.com/?sld=profpeptide",
    code: "profpep",
    discount: "10% off",
    region: "\uD83C\uDDFA\uD83C\uDDF8 US",
  },
  {
    name: "Apollo Peptide Sciences",
    url: "https://apollopeptidesciences.com/",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "\uD83C\uDDFA\uD83C\uDDF8 US",
  },
  {
    name: "Ascension Peptides",
    url: "https://ascensionpeptides.com",
    code: "PROFPEPTIDE",
    discount: "50% off",
    bestDeal: true,
    region: "\uD83C\uDDFA\uD83C\uDDF8 US",
  },
  {
    name: "Fusion Peptide",
    url: "https://fusionpeptide.com/?ref=PROFPEPTIDE",
    code: "MARK15",
    discount: "15% off",
    region: "\uD83C\uDDFA\uD83C\uDDF8 US",
  },
  {
    name: "Ignite Peptides",
    url: "https://ignitepeptides.com/ref/profpeptide/",
    code: "welcome10",
    discount: "10% off",
    region: "\uD83C\uDDFA\uD83C\uDDF8 US",
  },
  {
    name: "Integrative Peptides",
    url: "https://integrativepeptides.com/affiliate/profpeptide/",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "\uD83C\uDDFA\uD83C\uDDF8 US",
  },
  {
    name: "Limitless Biotech",
    url: "https://limitlessbiotech.com",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "\uD83C\uDDFA\uD83C\uDDF8 US",
  },
  {
    name: "Oasis Labs",
    url: "https://myoasislabs.com",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "\uD83C\uDDFA\uD83C\uDDF8 US",
  },
  {
    name: "Particle Peptides",
    url: "https://particlepeptides.com/en/",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "\uD83C\uDDEC\uD83C\uDDE7 UK",
  },
  {
    name: "Royal Peptides",
    url: "https://royal-peptides.com/",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "\uD83C\uDDFA\uD83C\uDDF8 US",
  },
  {
    name: "Vital Core Research",
    url: "https://vitalcoreresearch.com",
    code: "PROFPEPTIDE",
    discount: "10% off",
    region: "\uD83C\uDDFA\uD83C\uDDF8 US",
  },
];

function CodeBox({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="block w-full bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-lg text-sm font-mono font-bold text-[#1e2d3d] tracking-widest text-center cursor-pointer hover:bg-gray-100 transition-colors"
    >
      {copied ? (
        <span className="text-[#0D7377] font-sans font-medium tracking-normal">Copied!</span>
      ) : (
        code
      )}
    </button>
  );
}

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
            className={`rounded-xl overflow-hidden transition-shadow ${
              v.editorsPick
                ? "border-l-4 border-l-amber-400 border border-amber-200 shadow-md hover:shadow-lg bg-[#FFFBEB]"
                : "border border-gray-100 shadow-sm hover:shadow-md bg-white"
            }`}
          >
            <div
              className={`border-b border-gray-100 flex items-center justify-between ${
                v.editorsPick ? "px-6 py-4 bg-[#FFFBEB]" : "px-5 py-3.5 bg-gray-50"
              }`}
            >
              <h2
                className={`font-bold text-[#1e2d3d] leading-tight ${
                  v.editorsPick ? "text-xl" : "text-base"
                }`}
              >
                {v.name}
              </h2>
              <span className="text-xs font-bold text-[#0D7377] bg-[#d0eeef] px-2.5 py-1 rounded-full whitespace-nowrap">
                {v.discount}
              </span>
            </div>

            <div className={v.editorsPick ? "px-6 py-5" : "px-5 py-4"}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">
                  Verified
                </span>
                {v.editorsPick && (
                  <span className="text-xs bg-amber-100 text-amber-800 border border-amber-300 px-2 py-0.5 rounded-full font-medium">
                    Editor&apos;s Pick
                  </span>
                )}
                {"bestDeal" in v && v.bestDeal && (
                  <span className="text-xs bg-green-100 text-green-800 border border-green-300 px-2 py-0.5 rounded-full font-medium">
                    Best Deal
                  </span>
                )}
                {v.region && (
                  <span className="text-xs bg-gray-50 text-gray-500 border border-gray-200 px-2 py-0.5 rounded-full">
                    {v.region}
                  </span>
                )}
              </div>

              <div className="mb-4">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Click to copy code</p>
                <CodeBox code={v.code} />
              </div>

              <a
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block"
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
