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
  comingSoon?: boolean;
}

interface VendorSection {
  label: string;
  vendors: Vendor[];
}

const sections: VendorSection[] = [
  {
    label: "Featured Vendors",
    vendors: [
      {
        name: "Peptide Partners",
        url: "https://peptide.partners/ref/48/",
        code: "PROFPEPTIDE",
        discount: "10% off",
        region: "US",
        editorsPick: true,
        detailPage: "/coupons/peptide-partners",
      },
      {
        name: "Spartan Peptides",
        url: "https://spartanpeptides.com/?a_aid=profpeptide&a_bid=ce6347d0",
        code: "PROFPEPTIDE",
        discount: "10% off",
        region: "US",
        purityBadge: "\u226598% Purity Verified",
        detailPage: "/coupons/spartan-peptides",
      },
      {
        name: "Vital Core Research",
        url: "https://vitalcoreresearch.com/?ref=nbwnvhnu",
        code: "PROFPEPTIDE",
        discount: "20% off",
        region: "US",
        detailPage: "/coupons/vital-core-research",
      },
    ],
  },
  {
    label: "Best Deals",
    vendors: [
      {
        name: "Ascension Peptides",
        url: "https://ascensionpeptides.com/ref/profpeptide/",
        code: "PROFPEPTIDE",
        discount: "50% off",
        region: "US",
        bestDeal: true,
        detailPage: "/coupons/ascension-peptides",
      },
      {
        name: "Almighty Peptides",
        url: "https://www.almightypeptides.com/?sld=profpeptide",
        code: "PROFPEPTIDE",
        discount: "20% off",
        region: "US",
        detailPage: "/coupons/almighty-peptides",
      },
    ],
  },
  {
    label: "US Vendors",
    vendors: [
      {
        name: "Apollo Peptide Sciences",
        url: "https://apollopeptidesciences.com/?rfsn=8846124.8bdc49",
        code: "PROFPEPTIDE",
        discount: "10% off",
        region: "US",
        detailPage: "/coupons/apollo-peptide-sciences",
      },
      {
        name: "Ignite Peptides",
        url: "https://ignitepeptides.com/ref/profpeptide/",
        code: "PROFPEPTIDE",
        discount: "10% off",
        region: "US",
        detailPage: "/coupons/ignite-peptides",
      },
      {
        name: "Integrative Peptides",
        url: "https://integrativepeptides.com/affiliate/profpeptide/",
        code: "PROFPEPTIDE",
        discount: "10% off",
        region: "US",
        detailPage: "/coupons/integrative-peptides",
      },
      {
        name: "Limitless Biotech",
        url: "https://www.limitlesslifenootropics.com/?_ef_transaction_id=&oid=1&affid=10477",
        code: "PROFPEPTIDE",
        discount: "10% off",
        region: "US",
        detailPage: "/coupons/limitless-biotech",
      },
      {
        name: "Oasis Labs",
        url: "https://myoasislabs.com/?sld=profpeptide",
        code: "PROFPEPTIDE",
        discount: "10% off",
        region: "US",
        detailPage: "/coupons/oasis-labs",
      },
      {
        name: "Royal Peptides",
        url: "https://royal-peptides.com/?ref=urunwnog",
        code: "PROFPEPTIDE",
        discount: "10% off",
        region: "US",
        detailPage: "/coupons/royal-peptides",
      },
      {
        name: "Fusion Peptide",
        url: "https://fusionpeptide.com/?ref=PROFPEPTIDE",
        code: "PROFPEPTIDE",
        discount: "15% off",
        region: "US",
        detailPage: "/coupons/fusion-peptide",
        specialBadge: "Topicals & Nasal Sprays Available",
        specialBadgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
        description: "Unique delivery formats including topical creams and nasal sprays alongside injectable research peptides. 99% purity verified.",
      },
      {
        name: "EZ Peptides",
        url: "https://ezpeptides.com/?ref=nldbbgvs",
        code: "PROFPEPTIDE",
        discount: "10% off",
        region: "US",
        detailPage: "/coupons/ez-peptides",
      },
    ],
  },
  {
    label: "International",
    vendors: [
      {
        name: "Particle Peptides",
        url: "https://particlepeptides.com/en/?refs=18075",
        code: "PROFPEPTIDE",
        discount: "10% off",
        region: "\uD83C\uDDEC\uD83C\uDDE7 UK",
        detailPage: "/coupons/particle-peptides",
      },
      {
        name: "Nordic Peptides",
        url: "https://nordicpeptides.is?tracking=YPIYKOnVzjUxFUBzUjMguT01DrDOfTcsJhXEfi15i6MMovBJRFEwZguHeWt7mRkR",
        code: "",
        discount: "Code coming soon",
        region: "\uD83C\uDDEE\uD83C\uDDF8 Iceland",
        comingSoon: true,
        detailPage: "/coupons/nordic-peptides",
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
      className="block w-full bg-gray-50 dark:bg-[#1e293b] border border-gray-200 dark:border-slate-600 px-4 py-2.5 rounded-lg text-sm font-mono font-bold text-[#1e2d3d] dark:text-slate-100 tracking-widest text-center cursor-pointer hover:bg-gray-100 dark:bg-slate-700 transition-colors"
    >
      {copied ? (
        <span className="text-[#0891b2] font-sans font-medium tracking-normal">Copied!</span>
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
            ? "border border-gray-200 dark:border-slate-600 shadow-sm hover:shadow-md hover:border-[#0891b2]/40 bg-white dark:bg-[#0f172a]"
            : "border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md bg-white dark:bg-[#0f172a]"
      }`}
    >
      <div
        className={`border-b border-gray-100 dark:border-slate-700 flex items-center justify-between ${
          "px-5 py-3.5 bg-gray-50 dark:bg-[#1e293b]"
        }`}
      >
        <h2
          className={`font-bold leading-tight ${
            "text-base"
          }`}
        >
          {v.detailPage ? (
            <Link href={v.detailPage} className="inline-block text-[#1e2d3d] dark:text-slate-100 hover:text-[#0891b2] transition-all duration-150 hover:scale-105 origin-left">
              {v.name}
            </Link>
          ) : (
            <span className="text-[#1e2d3d] dark:text-slate-100">{v.name}</span>
          )}
        </h2>
        <span className="text-xs font-bold text-[#0891b2] bg-[#0891b2]/15 px-2.5 py-1 rounded-full whitespace-nowrap">
          {v.discount}
        </span>
      </div>

      <div className="px-5 py-4">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">
            Verified
          </span>
          {v.editorsPick && (
            <span className="text-xs bg-amber-700 text-amber-100 border border-amber-600 px-2 py-0.5 rounded-full font-semibold">
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
            <span className={`text-xs border px-2 py-0.5 rounded-full font-medium ${v.specialBadgeColor || "bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 border-gray-300"}`}>
              {v.specialBadge}
            </span>
          )}
          {v.region && (
            <span className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-600 px-2 py-0.5 rounded-full">
              {v.region}
            </span>
          )}
        </div>

        {v.description && (
          <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed mb-3">{v.description}</p>
        )}

        <div className="mb-4">
          <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-medium mb-1">Click to copy code</p>
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
            className="block w-full text-center text-xs font-medium text-[#0891b2] hover:text-[#0a5c60] mt-3 py-2 rounded-lg hover:bg-[#0891b2]/10 transition-colors"
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
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">Discount Codes</h1>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-3 leading-relaxed max-w-lg">
        Verified discount codes for peptide vendors with third-party lab testing.
      </p>
      <p className="text-xs text-gray-400 dark:text-slate-500 mb-8 leading-relaxed max-w-lg">
        All discount codes, promo codes, and coupon codes are verified by Prof. Peptide and updated regularly.
      </p>

      <div className="space-y-8 mb-10">
        {sections.map((section) => (
          <div key={section.label}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3 pb-1.5 border-b border-gray-100 dark:border-slate-700">
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

      <p className="text-xs text-gray-400 dark:text-slate-500 leading-relaxed">
        Prof. Peptide may earn a commission when you use our discount codes. This never influences our editorial content or research.
      </p>
    </div>
  );
}
