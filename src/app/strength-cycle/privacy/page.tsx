export const metadata = {
  alternates: { canonical: "/strength-cycle/privacy" },
  title: "Strength Cycle — Privacy Policy",
  description: "Privacy policy for the Strength Cycle iOS app — a 5/3/1 powerlifting tracker.",
};

export default function StrengthCyclePrivacyPage() {
  return (
    <div className="section max-w-3xl">
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-3">Strength Cycle — Privacy Policy</h1>
      <p className="text-xs text-gray-400 dark:text-slate-500 mb-8">Last updated: April 26, 2026</p>

      <div className="text-gray-600 dark:text-slate-300 space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
          <p>Strength Cycle (&ldquo;the App&rdquo;) is an iOS application developed by Strength Cycle Studios, LLC (&ldquo;we&rdquo;, &ldquo;us&rdquo;). This privacy policy explains how the App handles your information.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Data We Collect</h2>
          <p><strong className="text-gray-800 dark:text-slate-200">We do not collect any personal data from you through Strength Cycle.</strong></p>
          <p className="mt-2">The App stores all of your workout data &mdash; including training maxes, AMRAP performance, cycle history, and personal preferences &mdash; locally on your device only. This data is never transmitted to our servers, third-party servers, or any external service.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Data We Do Not Collect</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>We do not collect personal information (name, email, phone number, address)</li>
            <li>We do not collect device identifiers, IDFA, or analytics data</li>
            <li>We do not use third-party advertising networks</li>
            <li>We do not use third-party analytics SDKs</li>
            <li>We do not track your usage of the App</li>
            <li>We do not share data with advertisers, partners, or any third parties</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Apple Health Integration</h2>
          <p>The App does not currently integrate with Apple Health.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Ask Coach Feature</h2>
          <p>The &ldquo;Ask Coach&rdquo; feature allows you to ask questions about the 5/3/1 method. When you submit a question, the question text is sent to a third-party AI service (Anthropic) for processing. The question text is processed transiently and is not retained by us. Your question text may be temporarily processed on Anthropic&apos;s servers per their data handling policies. We do not associate your questions with any personally identifying information.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Data Storage</h2>
          <p>All workout and progress data is stored locally on your device using iOS standard storage mechanisms. If you delete the App or your iPhone, this data is removed and cannot be recovered.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Children&apos;s Privacy</h2>
          <p>The App is not directed at children under the age of 13. We do not knowingly collect data from children.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Changes to This Privacy Policy</h2>
          <p>We may update this privacy policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision. Continued use of the App after changes constitutes acceptance of the updated policy.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Contact</h2>
          <p>For questions about this privacy policy or about Strength Cycle, please contact:</p>
          <p className="mt-2">
            Strength Cycle Studios, LLC<br />
            9712 Ashbourn Drive<br />
            Burke, VA 22015<br />
            Email: <a href="mailto:strengthcyclestudios@gmail.com" className="text-[#0891b2] hover:underline">strengthcyclestudios@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
