import type { NextConfig } from "next";

/**
 * STATIC_EXPORT=1 builds a plain HTML copy of the public website into `out/`,
 * used only for the review preview. The real deployment (Vercel) runs without
 * it, because the portal phases need server features.
 */
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  // Year for the footer copyright line, fixed at each build/deployment.
  env: { NEXT_PUBLIC_BUILD_YEAR: String(new Date().getFullYear()) },
  // Cache Components and partial prefetching are not available in static
  // export mode, so they are switched off for the preview build only.
  cacheComponents: !isStaticExport,
  partialPrefetching: !isStaticExport,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  ...(isStaticExport
    ? { output: "export" as const, trailingSlash: true, images: { unoptimized: true } }
    : {}),
};

export default nextConfig;
