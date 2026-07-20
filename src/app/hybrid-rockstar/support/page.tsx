export const metadata = {
  alternates: { canonical: "/hybrid-rockstar/support" },
  title: "Hybrid Rockstar — Support",
  description: "Support and contact for the Hybrid Rockstar iOS app.",
};

export default function HybridRockstarSupportPage() {
  return (
    <div className="section max-w-3xl">
      <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-8">Hybrid Rockstar — Support</h1>

      <div className="text-gray-600 dark:text-slate-300 space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Contact</h2>
          <p>For questions, bug reports, or feature requests for the Hybrid Rockstar iOS app, please reach out:</p>
          <p className="mt-2"><strong className="text-gray-800 dark:text-slate-200">Email:</strong> <a href="mailto:support@hybridrockstar.app" className="text-[#3A759F] hover:underline">support@hybridrockstar.app</a></p>
          <p className="mt-2">We typically respond within 1&ndash;2 business days.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-3">Common Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-1">Does Hybrid Rockstar work on Apple Watch?</h3>
              <p>Not currently. The App is designed for iPhone use during training. Apple Watch support may be added in a future update.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-1">Does my data sync across devices?</h3>
              <p>No. All data is stored locally on the device where the App is installed. If you reinstall the App or get a new iPhone, your data will not transfer automatically. We&apos;re evaluating iCloud sync for a future update.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-1">How do I reset my training data?</h3>
              <p>Open the App, tap Settings, then &ldquo;Reset Training Data.&rdquo; This action cannot be undone, so confirm before proceeding.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-1">What training programs are supported?</h3>
              <p>The App currently supports two 12-week cycle structures: FullRox (full Hyrox-style training volume, 55&ndash;60 minute sessions) and HalfRox (reduced volume for athletes balancing other training, ~30 minute sessions). Additional templates may be added in future updates.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-1">Is Hybrid Rockstar affiliated with Hyrox?</h3>
              <p>No. Hybrid Rockstar is an independent app and is not affiliated with Hyrox or any official Hyrox organizing body. The App provides Hyrox-style hybrid training programming for personal use.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Bug Reports</h2>
          <p>When reporting a bug, please include:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Your iPhone model and iOS version</li>
            <li>The Hybrid Rockstar version (Settings &rarr; About)</li>
            <li>Steps to reproduce the issue</li>
            <li>Screenshots if applicable</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Feature Requests</h2>
          <p>We welcome feature suggestions. Email us at <a href="mailto:support@hybridrockstar.app" className="text-[#3A759F] hover:underline">support@hybridrockstar.app</a> &mdash; we read everything, even if we can&apos;t always respond immediately.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">About</h2>
          <p>Hybrid Rockstar is developed and maintained by Strength Cycle Studios, LLC, a Virginia limited liability company.</p>
        </section>

        <p className="text-xs text-gray-400 dark:text-slate-500 pt-6 border-t border-gray-100 dark:border-slate-800">&copy; 2026 Strength Cycle Studios, LLC</p>
      </div>
    </div>
  );
}
