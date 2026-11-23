import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname),
  poweredByHeader: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "st.hzcdn.com", pathname: "/simgs/**" },
      { protocol: "https", hostname: "www.encompasslofts.com", pathname: "/wp-content/uploads/**" },
    ],
  },
};

export default nextConfig;
