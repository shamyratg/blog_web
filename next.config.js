/** @type {import('next').NextConfig} */
const nextConfig = {
    // External Pics
  images: {
    remotePatterns: [{ protocol: "https", hostname: "www.thename.com" }],
  },
};

module.exports = nextConfig;
