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
    ];
  },
};
module.exports = nextConfig;
