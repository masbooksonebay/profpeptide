import Link from "next/link";
import { Icon } from "@/components/CategoryIcon";

export const metadata = {
  title: "Get the Prof. Peptide App — Peptide Research in Your Pocket",
  description: "Access peptide profiles, supplement guides, dosage tools, and discount codes on the go. The Prof. Peptide app for iOS and Android.",
};

const features = [
  { icon: "dna", title: "Full Peptide Library", desc: "Every profile, offline. Search, filter, and save your most-used compounds." },
  { icon: "calculator", title: "Dosage Calculator", desc: "The same trusted calculator from the site, available offline on your phone." },
  { icon: "clipboard", title: "Protocol Logging", desc: "Track your research protocols with date, dose, compound, and custom notes." },
  { icon: "clock", title: "Reminders", desc: "Set dosing schedule reminders for time-sensitive research protocols." },
  { icon: "lock", title: "Private by Design", desc: "No account required. All data stays on your device. No tracking." },
  { icon: "chat", title: "Research Notes", desc: "Attach notes to any compound or protocol. Export anytime." },
];

export default function AppPage() {
  return (
    <div className="section max-w-3xl">
      <div className="text-center mb-14">
        <span className="tag mb-4 inline-block">Coming Soon</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-4">
          Prof. Peptide for iPhone
        </h1>
        <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed max-w-md mx-auto mb-8">
          The full power of Prof. Peptide in a clean, private iOS app. Track protocols,
          calculate doses, and access the library offline.
        </p>
        <div className="bg-[#0891b2]/10 border border-[#0891b2]/20 rounded-2xl px-6 py-8 max-w-sm mx-auto">
          <div className="w-16 h-16 bg-[#0891b2] rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl font-semibold">Pp</span>
          </div>
          <p className="font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">Prof. Peptide</p>
          <p className="text-xs text-gray-500 dark:text-slate-400 mb-6">Research &amp; Education</p>
          <div className="bg-[#0891b2] text-white rounded-xl py-3 px-6 text-sm font-medium opacity-60 cursor-not-allowed">
            Available Soon on the App Store
          </div>
          <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">iOS 16.0 or later required</p>
        </div>
      </div>
      <div className="mb-12">
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
      <div className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-slate-700 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-2">Join the Waitlist</h2>
        <p className="text-sm text-gray-500 dark:text-slate-400 mb-6 max-w-sm mx-auto">
          Be first to know when the app launches. No spam — one email when it goes live.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 border border-gray-200 dark:border-slate-600 rounded-md px-4 py-2.5 text-sm bg-white dark:bg-[#0f172a] text-gray-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0891b2] focus:border-transparent"
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Notify Me
          </button>
        </form>
        <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">By joining you agree to receive one launch notification email only.</p>
      </div>
    </div>
  );
}
