import Image from "next/image";
import { Icon } from "@/components/CategoryIcon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/app",
  title: "Prof. Peptide — All-in-One Peptide Tracker for iOS",
  description:
    "The all-in-one peptide tracker for iPhone: log doses, see estimated levels, calculate reconstitution, and search 60+ peptides by name or brand.",
  ogTitle: "Prof. Peptide — All-in-One Peptide Tracker",
  ogDescription:
    "Log doses, see estimated levels, calculate reconstitution, and search 60+ peptides by name or brand. Free on the App Store.",
  ogImage: {
    url: "/og/app-thumbnail.png",
    width: 1200,
    height: 630,
    alt: "Prof. Peptide iOS App — All-in-One Peptide Tracker",
  },
});

const APP_STORE_URL = "https://apps.apple.com/app/prof-peptide/id6761995269";

// Each panel is a full App Store slide with its headline baked in (700x1517).
// `caption` is the supporting sentence only — never a duplicate of the headline.
const panels = [
  {
    src: "/app-screenshots/panel1.png",
    icon: "trending-up-outline",
    alt: "Estimated compound levels over time",
    caption: "Estimated compound levels over time, modeled from published half-life data — including multi-dose and titration schedules.",
  },
  {
    src: "/app-screenshots/panel2.png",
    icon: "search-outline",
    alt: "Peptide library searchable by name or brand",
    caption: "Search 60+ peptides by name or brand — Wegovy, Ozempic, Mounjaro, Zepbound, and more — with blends and stacks included.",
  },
  {
    src: "/app-screenshots/panel3.png",
    icon: "chatbubble-outline",
    alt: "AI research assistant",
    caption: "An AI research assistant answers questions drawn from the research literature. Informational only — not medical or dosing advice.",
  },
  {
    src: "/app-screenshots/panel4.png",
    icon: "time-outline",
    alt: "Dose logging with reminders",
    caption: "Log doses and set reminders on daily, weekly, cyclical, or custom schedules.",
  },
  {
    src: "/app-screenshots/panel5.png",
    icon: "calculator-outline",
    alt: "Reconstitution calculator",
    caption: "Reconstitution calculator: enter vial size, BAC water, and desired dose to get the exact units to draw.",
  },
  {
    src: "/app-screenshots/panel6.png",
    icon: "clipboard-outline",
    alt: "Results and trends over time",
    caption: "Follow results and trends — such as weight and body composition — over time.",
  },
];

const also = [
  { icon: "flask-outline", title: "Protocols & stacks", desc: "Build and run full protocols and multi-compound stacks." },
  { icon: "time-outline", title: "Native date & time pickers", desc: "Fast, native iOS scheduling for every log and reminder." },
  { icon: "lock-closed-outline", title: "Private, with backup", desc: "No account required — data stays on your device, with import/export backup." },
];

export default function AppPage() {
  return (
    <div className="section max-w-4xl">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <span className="tag mb-3 inline-block">Now on iOS</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-4">
          The All-in-One Peptide Tracker
        </h1>
        <p className="text-gray-500 dark:text-slate-400 text-base leading-relaxed max-w-xl mx-auto mb-8">
          Prof. Peptide for iPhone brings the full toolkit into one private app &mdash; log doses,
          see estimated levels, run protocols and stacks, calculate reconstitution, and ask an AI
          research assistant. For informational and educational use only.
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
          <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">iOS 15.1 or later required</p>
        </div>
      </div>

      {/* Screenshot gallery — horizontal scroll strip; each panel's headline is baked in */}
      <div className="mb-14">
        <h2 className="text-xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-1 text-center">A closer look</h2>
        <p className="text-sm text-gray-500 dark:text-slate-400 text-center mb-6">Swipe through what the app does.</p>
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {panels.map((p) => (
            <figure key={p.src} className="snap-start shrink-0 w-[224px] sm:w-[236px]">
              <Image
                src={p.src}
                alt={p.alt}
                width={700}
                height={1517}
                sizes="(max-width: 640px) 224px, 236px"
                className="w-full h-auto rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm"
              />
              <figcaption className="mt-3 flex items-start gap-2 text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
                <span className="text-[#0891b2] flex-shrink-0 mt-0.5"><Icon name={p.icon} /></span>
                <span>{p.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Also included */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-6 text-center">Also included</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {also.map((f) => (
            <div key={f.title} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#1e293b] rounded-xl border border-gray-100 dark:border-slate-700">
              <span className="text-[#0891b2] flex-shrink-0 mt-0.5"><Icon name={f.icon} /></span>
              <div>
                <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-0.5">{f.title}</p>
                <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Download Prof. Peptide on the App Store" className="inline-block hover:opacity-90 transition-opacity">
            <Image src="/app-store-badge.svg" alt="Download Prof. Peptide on the App Store" width={180} height={60} className="mx-auto" />
          </a>
        </div>

        <p className="text-xs text-gray-400 dark:text-slate-500 leading-relaxed text-center max-w-xl mx-auto">
          Prof. Peptide is for informational and educational purposes only. It does not provide medical,
          therapeutic, or dosing advice. Estimated levels are model-based approximations from published
          half-life data, not measurements.
        </p>
      </div>
    </div>
  );
}
