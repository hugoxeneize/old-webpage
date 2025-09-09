/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: process.env.TEST_URL,
  },
}

export default nextConfig
