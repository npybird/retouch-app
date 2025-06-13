/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    modularizeImports: true,
  },
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: 'all',
      minSize: 20000, // 20KB
      maxSize: 24000000, // 24MB (ใกล้ลิมิต)
    };
    return config;
  },
};

export default nextConfig;