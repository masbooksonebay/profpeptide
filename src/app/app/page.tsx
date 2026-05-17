import Image from "next/image";
import { Icon } from "@/components/CategoryIcon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/app",
  title: "Prof. Peptide for iOS — Peptide Research in Your Pocket",
  description: "Prof. Peptide for iOS: peptide dose calculator, 30+ compound profiles, latest research, and verified vendor discount codes. Free on the App Store.",
  ogTitle: "Prof. Peptide for iOS",
  ogDescription: "Calculate doses, browse 30+ peptide profiles, follow research, and find verified vendor codes. Free on the App Store.",
  useDefaultOgImage: false,
});

const APP_STORE_URL = "https://apps.apple.com/app/prof-peptide/id6761995269";

const features = [
  { icon: "calculator-outline", title: "Calculator", desc: "Step-by-step dose math for any peptide. Volume, concentration, blend support." },
  { icon: "flask-outline", title: "Compounds", desc: "30+ peptide profiles with mechanism, dosing, research, and references. Browse offline." },
  { icon: "book-outline", title: "Research", desc: "Latest peptide research news, study summaries, and regulatory updates." },
  { icon: "pricetag-outline", title: "Codes", desc: "Verified vendor discount codes, updated regularly." },
  { icon: "lock-closed-outline", title: "Private by Design", desc: "No account required. All data stays on your device. No tracking." },
];

export default function AppPage() {
  return (
    <div className="section max-w-3xl">
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-4">
          Prof. Peptide for iPhone
        </h1>
        <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed max-w-md mx-auto mb-8">
          The full power of Prof. Peptide in a clean, private iOS app. Calculate doses,
          browse the compound library, and access discount codes — all offline.
        </p>
        <div className="bg-[#0891b2]/10 border border-[#0891b2]/20 rounded-2xl px-6 py-8 max-w-sm mx-auto">
          <div className="w-16 h-16 bg-[#0891b2] rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl font-semibold">Pp</span>
          </div>
          <p className="font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">Prof. Peptide</p>
          <p className="text-xs text-gray-500 dark:text-slate-400 mb-6">Research &amp; Education</p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Prof. Peptide on the App Store"
            className="inline-block hover:opacity-90 transition-opacity"
          >
            <Image
              src="/app-store-badge.svg"
              alt="Download Prof. Peptide on the App Store"
              width={180}
              height={60}
              className="mx-auto"
              priority
            />
          </a>
          <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">iOS 16.0 or later required</p>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-6 text-center">What&apos;s included</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#1e293b] rounded-xl border border-gray-100 dark:border-slate-700">
              <span className="text-[#0891b2] flex-shrink-0 mt-0.5"><Icon name={f.icon} /></span>
              <div>
                <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-0.5">{f.title}</p>
                <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
