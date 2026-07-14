import type { Metadata } from "next";
import ProfileDesignSandbox from "@/components/ProfileDesignSandbox";

// Permanent, committable DESIGN SANDBOX. Noindexed + excluded from the sitemap
// (see next-sitemap.config.js) + not linked from any nav/footer/page. Visit
// directly at /prototype/profile to preview profile-design options.
export const metadata: Metadata = {
  title: "Design Sandbox — Profile (dev preview)",
  robots: { index: false, follow: false },
};

export default function ProfileSandboxPage() {
  return <ProfileDesignSandbox />;
}
