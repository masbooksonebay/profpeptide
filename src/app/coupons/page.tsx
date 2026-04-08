"use client";

import { useState } from "react";
import Link from "next/link";

interface Vendor {
  name: string;
  url: string;
  code: string;
  discount: string;
  region: string;
  editorsPick?: boolean;
  bestDeal?: boolean;
  purityBadge?: string;
  specialBadge?: string;
  specialBadgeColor?: string;
  description?: string;
  detailPage?: string;
}

interface VendorSection {
  label: string;
  vendors: Vendor[];
}

const sections: VendorSection[] = [
  {
    label: "\uD83C\uDFC6 Featured Vendors",
    vendors: [
      {
        name: "Peptide Partners",
        url: "https://peptide.partners/",
        code: "PROFPEPTIDE",
        discount: "10% off",
        region: "\uD83C\uDDFA\uD83C\uDDF8 US",
        editorsPick: true,
        detailPage: "/coupons/peptide-partners",
      },
      {
        name: "Spartan Peptides",
        url: "https://spartanpeptides.com/?a_aid=profpeptide&a_bid=ce6347d0",
        code: "PROFPEPTIDE",
        discount: "10% off",
        region: "\uD83C\uDDFA\uD83C\uDDF8 US",
        purityBadge: "\u226598% Purity Verified",
        detailPage: "/coupons/spartan-peptides",
      },
    ],
  },
  {
    label: "\uD83D\uDCB0 Best Deals",
    vendors: [
      {
        name: "Ascension Peptides",
        url: "https://ascensionpeptides.com",
        code: "PROFPEPTIDE",
        discount: "50% off",
        region: "\uD83C\uDDFA\uD83C\uDDF8 US",
        bestDeal: true,
        detailPage: "/coupons/ascension-peptides",
      },
      {
        name: "Fusion Peptide",
        url: "https://fusionpeptide.com/?ref=PROFPEPTIDE",
        code: "MARK15",
        discount: "15% off",
        region: "\uD83C\uDDFA\uD83C\uDDF8 US",
        detailPage: "/coupons/fusion-peptide",
        specialBadge: "Topicals & Nasal Sprays Available",
        specialBadgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
        description: "Unique delivery formats including topical creams and nasal sprays alongside injectable research peptides. 99% purity verified.",
      },
    ],
  },
  {
    label: "\uD83C\uDDFA\uD83C\uDDF8 US Vendors",
    vendors: [
      {
        name: "Apollo Peptide Sciences",
        url: "https://apollopeptidesciences.com/",
        code: "PROFPEPTIDE",
        discount: "10% off",
        region: "\uD83C\uDDFA\uD83C\uDDF8 US",
        detailPage: "/coupons/apollo-peptide-sciences",
      },
      {
        name: "Ignite Peptides",
        url: "https://ignitepeptides.com/ref/profpeptide/",
        code: "welcome10",
        discount: "10% off",
        region: "\uD83C\uDDFA\uD83C\uDDF8 US",
        detailPage: "/coupons/ignite-peptides",
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
        detailPage: "/coupons/limitless-biotech",
      },
      {
        name: "Oasis Labs",
        url: "https://myoasislabs.com",
        code: "PROFPEPTIDE",
        discount: "10% off",
        region: "\uD83C\uDDFA\uD83C\uDDF8 US",
        detailPage: "/coupons/oasis-labs",
      },
      {
        name: "Royal Peptides",
        url: "https://royal-peptides.com/",
        code: "PROFPEPTIDE",
        discount: "10% off",
        region: "\uD83C\uDDFA\uD83C\uDDF8 US",
        detailPage: "/coupons/royal-peptides",
      },
      {
        name: "Vital Core Research",
        url: "https://vitalcoreresearch.com",
        code: "PROFPEPTIDE",
        discount: "10% off",
        region: "\uD83C\uDDFA\uD83C\uDDF8 US",
        detailPage: "/coupons/vital-core-research",
      },
      {
        name: "Almighty Peptides",
        url: "https://www.almightypeptides.com/?sld=profpeptide",
        code: "profpep",
        discount: "10% off",
        region: "\uD83C\uDDFA\uD83C\uDDF8 US",
      },
    ],
  },
  {
    label: "\uD83C\uDF0D International",
    vendors: [
      {
        name: "Particle Peptides",
        url: "https://particlepeptides.com/en/",
        code: "PROFPEPTIDE",
        discount: "10% off",
        region: "\uD83C\uDDEC\uD83C\uDDE7 UK",
      },
    ],
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

function VendorCard({ v }: { v: Vendor }) {
  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-200 ${
        v.detailPage
            ? "border border-gray-200 shadow-sm hover:shadow-md hover:border-[#0D7377]/40 bg-white"
            : "border border-gray-100 shadow-sm hover:shadow-md bg-white"
      }`}
    >
      <div
        className={`border-b border-gray-100 flex items-center justify-between ${
          "px-5 py-3.5 bg-gray-50"
        }`}
      >
        <h2
          className={`font-bold leading-tight ${
            "text-base"
          }`}
        >
          {v.detailPage ? (
            <Link href={v.detailPage} className="inline-block text-[#1e2d3d] hover:text-[#0D7377] transition-all duration-150 hover:scale-105 origin-left">
              {v.name}
            </Link>
          ) : (
            <span className="text-[#1e2d3d]">{v.name}</span>
          )}
        </h2>
        <span className="text-xs font-bold text-[#0D7377] bg-[#d0eeef] px-2.5 py-1 rounded-full whitespace-nowrap">
          {v.discount}
        </span>
      </div>

      <div className="px-5 py-4">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">
            Verified
          </span>
          {v.editorsPick && (
            <span className="text-xs bg-amber-100 text-amber-800 border border-amber-300 px-2 py-0.5 rounded-full font-medium">
              Editor&apos;s Pick
            </span>
          )}
          {v.bestDeal && (
            <span className="text-xs bg-green-100 text-green-800 border border-green-300 px-2 py-0.5 rounded-full font-medium">
              Best Deal
            </span>
          )}
          {v.purityBadge && (
            <span className="text-xs bg-slate-100 text-slate-700 border border-slate-300 px-2 py-0.5 rounded-full font-medium">
              {v.purityBadge}
            </span>
          )}
          {v.specialBadge && (
            <span className={`text-xs border px-2 py-0.5 rounded-full font-medium ${v.specialBadgeColor || "bg-gray-100 text-gray-600 border-gray-300"}`}>
              {v.specialBadge}
            </span>
          )}
          {v.region && (
            <span className="text-xs bg-gray-50 text-gray-500 border border-gray-200 px-2 py-0.5 rounded-full">
              {v.region}
            </span>
          )}
        </div>

        {v.description && (
          <p className="text-xs text-gray-500 leading-relaxed mb-3">{v.description}</p>
        )}

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

        {v.detailPage && (
          <Link
            href={v.detailPage}
            className="block w-full text-center text-xs font-medium text-[#0D7377] hover:text-[#0a5c60] mt-3 py-2 rounded-lg hover:bg-[#f0fafa] transition-colors"
          >
            Learn More &rarr;
          </Link>
        )}
      </div>
    </div>
  );
}

export default function CouponsPage() {
  return (
    <div className="section max-w-3xl">
      <span className="tag mb-3 inline-block">Updated Regularly</span>
      <h1 className="text-3xl font-bold text-[#1e2d3d] mb-3">Discount Codes</h1>
      <p className="text-sm text-gray-500 mb-3 leading-relaxed max-w-lg">
        Verified discount codes for peptide vendors with third-party lab testing.
      </p>
      <p className="text-xs text-gray-400 mb-8 leading-relaxed max-w-lg">
        All discount codes, promo codes, and coupon codes are verified by Prof. Peptide and updated regularly.
      </p>

      <div className="space-y-8 mb-10">
        {sections.map((section) => (
          <div key={section.label}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3 pb-1.5 border-b border-gray-100">
              {section.label}
            </p>
            <div className="space-y-4">
              {section.vendors.map((v) => (
                <VendorCard key={v.name} v={v} />
              ))}
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
