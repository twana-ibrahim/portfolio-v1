/** @type {import('next').NextConfig} */
const nextConfig = {};

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  reloadOnOnline: true,
  cacheOnFrontEndNav: true,
  scope: "/app",
  clientsClaim: true,
  runtimeCaching: [{ handler: "CacheFirst", urlPattern: "/" }],
  cacheId: "initial-assets",
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA(nextConfig);
