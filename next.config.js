/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.dummyjson.com',
          port: '',
          pathname: '/data/products/**',
        },
      ],
    },
  }
