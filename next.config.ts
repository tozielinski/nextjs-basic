import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
    allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', 'localhost', '192.168.2.22'],
};

export default nextConfig;
