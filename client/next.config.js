/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: 991781203,
    NEXT_PUBLIC_ZEGO_SERVER_ID: "6d8c58a5006e605067fb2bbb9f9507a4"
  },
  images: {
    domains: ["localhost"]
  }
};

module.exports = nextConfig;
