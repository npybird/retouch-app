/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: 'all',
      minSize: 20000,
      maxSize: 24000000,
    };
    config.optimization.removeEmptyChunks = true;
    return config;
  },
};

module.exports = nextConfig;