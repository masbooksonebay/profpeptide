export const metadata = {
  alternates: { canonical: "/strength-cycle/support" },
  title: "Strength Cycle — Support",
  description: "Support and contact for the Strength Cycle iOS app.",
};

export default function StrengthCycleSupportPage() {
  return (
    <div className="section max-w-3xl">
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-8">Strength Cycle — Support</h1>

      <div className="text-gray-600 dark:text-slate-300 space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Contact</h2>
          <p>For questions, bug reports, or feature requests for the Strength Cycle iOS app, please reach out:</p>
          <p className="mt-2"><strong className="text-gray-800 dark:text-slate-200">Email:</strong> <a href="mailto:strengthcyclestudios@gmail.com" className="text-[#0891b2] hover:underline">strengthcyclestudios@gmail.com</a></p>
          <p className="mt-2">We typically respond within 1&ndash;2 business days.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Common Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">Does Strength Cycle work on Apple Watch?</h3>
              <p>Not currently. The App is designed for iPhone use during workouts. Apple Watch support may be added in a future update.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">Does my data sync across devices?</h3>
              <p>No. All data is stored locally on the device where the App is installed. If you reinstall the App or get a new iPhone, your data will not transfer automatically. We&apos;re evaluating iCloud sync for a future update.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">How do I reset my training maxes?</h3>
              <p>Open the App, tap Settings, then &ldquo;Reset Training Maxes.&rdquo; This action cannot be undone, so confirm before proceeding.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">How does the e1RM calculation work?</h3>
              <p>Strength Cycle uses the Epley formula to estimate your one-rep max from AMRAP set performance: e1RM = weight &times; (1 + reps/30). The displayed e1RM reflects your most recent AMRAP set&apos;s calculated value.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">What 5/3/1 templates are supported?</h3>
              <p>The App currently supports the standard 5/3/1 program structure: four-week cycles with AMRAP sets in weeks 1&ndash;3 and a deload in week 4. Additional Beyond 5/3/1 templates may be added in future updates.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">Is Strength Cycle affiliated with Jim Wendler?</h3>
              <p>No. Strength Cycle is an independent app and is not affiliated with Jim Wendler or 5/3/1 Inc. We highly recommend purchasing Jim Wendler&apos;s books to fully understand the 5/3/1 methodology.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Bug Reports</h2>
          <p>When reporting a bug, please include:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Your iPhone model and iOS version</li>
            <li>The Strength Cycle version (Settings &rarr; About)</li>
            <li>Steps to reproduce the issue</li>
            <li>Screenshots if applicable</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Feature Requests</h2>
          <p>We welcome feature suggestions. Email us at <a href="mailto:strengthcyclestudios@gmail.com" className="text-[#0891b2] hover:underline">strengthcyclestudios@gmail.com</a> &mdash; we read everything, even if we can&apos;t always respond immediately.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">About</h2>
          <p>Strength Cycle is developed and maintained by Strength Cycle Studios, LLC, a Virginia limited liability company.</p>
        </section>
      </div>
    </div>
  );
}
