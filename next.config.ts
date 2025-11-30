import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["cdn.dummyjson.com", "i.dummyjson.com", "dummyjson.com"],
  },
};

export default nextConfig;
