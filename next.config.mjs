/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'gifdb.com',
            port: '',
            pathname: '/images/**',
          },
        ],
      },
};

export default nextConfig;
