import type { NextConfig } from "next";

/** The site launched in Swedish at the root; those addresses now live under /sv. */
const swedishRoots = ["tjanster", "om-oss", "kontakt", "insikter"];

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    // Two root layouts (English and Swedish) need one 404 for unmatched URLs.
    globalNotFound: true,
    // Phosphor is not on Next.js's built-in list of optimized packages.
    optimizePackageImports: ["@phosphor-icons/react"],
  },
  async redirects() {
    return swedishRoots.flatMap((segment) => [
      { source: `/${segment}`, destination: `/sv/${segment}`, permanent: true },
      { source: `/${segment}/:path*`, destination: `/sv/${segment}/:path*`, permanent: true },
    ]);
  },
};

export default nextConfig;
