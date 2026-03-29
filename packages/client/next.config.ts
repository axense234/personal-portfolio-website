import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  distDir: "build",
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async () => {
  const createNextIntlPlugin = (await import("next-intl/plugin")).default;
  const withNextIntl = createNextIntlPlugin();

  return withNextIntl(nextConfig);
};
