/** @type {import("next").NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.profpeptide.com" }],
        destination: "https://profpeptide.com/:path*",
        permanent: true,
      },
      {
        source: "/compare/retatrutide-vs-tirzepatide",
        destination: "/compare/semaglutide-vs-tirzepatide-vs-retatrutide",
        permanent: true,
      },
      {
        source: "/compare/retatrutide-vs-semaglutide",
        destination: "/compare/semaglutide-vs-tirzepatide-vs-retatrutide",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
