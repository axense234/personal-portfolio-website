import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: false,
  distDir: "build",
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // setup images here specifically for the meal prep images
};

export default withNextIntl(nextConfig);
