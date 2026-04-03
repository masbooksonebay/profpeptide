import Link from "next/link";

export const metadata = {
  title: "Get the App | Prof. Peptide",
  description: "The Prof. Peptide iOS app is coming soon. Join the waitlist.",
};

const features = [
  { icon: "\u{1F9EC}", title: "Full Peptide Library", desc: "Every profile, offline. Search, filter, and save your most-used compounds." },
  { icon: "\u{1F4D0}", title: "Dosage Calculator", desc: "The same trusted calculator from the site, available offline on your phone." },
  { icon: "\u{1F4CB}", title: "Protocol Logging", desc: "Track your research protocols with date, dose, compound, and custom notes." },
  { icon: "\u23F0", title: "Reminders", desc: "Set dosing schedule reminders for time-sensitive research protocols." },
  { icon: "\u{1F512}", title: "Private by Design", desc: "No account required. All data stays on your device. No tracking." },
  { icon: "\u{1F4AC}", title: "Research Notes", desc: "Attach notes to any compound or protocol. Export anytime." },
];

export default function AppPage() {
  return (
    <div className="section max-w-3xl">
      <div className="text-center mb-14">
        <span className="tag mb-4 inline-block">Coming Soon</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1e2d3d] mb-4">
          Prof. Peptide for iPhone
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto mb-8">
          The full power of Prof. Peptide in a clean, private iOS app. Track protocols,
          calculate doses, and access the library offline.
        </p>
        <div className="bg-[#f0fafa] border border-[#d0eeef] rounded-2xl px-6 py-8 max-w-sm mx-auto">
          <div className="w-16 h-16 bg-[#0D7377] rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl">Pp</span>
          </div>
          <p className="font-semibold text-[#1e2d3d] mb-1">Prof. Peptide</p>
          <p className="text-xs text-gray-500 mb-6">Research & Education</p>
          <div className="bg-[#0D7377] text-white rounded-xl py-3 px-6 text-sm font-medium opacity-60 cursor-not-allowed">
            Available Soon on the App Store
          </div>
          <p className="text-xs text-gray-400 mt-3">iOS 16.0 or later required</p>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-xl font-bold text-[#1e2d3d] mb-6 text-center">What's included</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-xl flex-shrink-0 mt-0.5">{f.icon}</span>
              <div>
                <p className="text-sm font-semibold text-[#1e2d3d] mb-0.5">{f.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-[#1e2d3d] mb-2">Join the Waitlist</h2>
        <p className="text-sm text-gray-500 mb-6 max-w-sm mx-auto">
          Be first to know when the app launches. No spam — one email when it goes live.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7377] focus:border-transparent"
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Notify Me
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-3">By joining you agree to receive one launch notification email only.</p>
      </div>
    </div>
  );
}