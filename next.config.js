/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["video.chowdhuryinfotech.com"],
  },
  // The output directory
  outputDirectory: "./build",

  // The optimization settings
  optimization: {
    // Enable minification
    minimize: true,
  },

  // The plugins that are used
  plugins: [
    // Enable image optimization
    ["next-transpile-modules", { transpileModules: ["next/image"] }],
  ],
};

module.exports = nextConfig;
