// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plantmurmurstorage.blob.core.windows.net',
        port: '',
        pathname: '/photos/**',
      },
    ],
  },
};

export default nextConfig;
