import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
  // output: 'standalone',
  /* config options here */
};

export default nextConfig;
