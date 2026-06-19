import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/carolina-site",
  assetPrefix: "/carolina-site",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;