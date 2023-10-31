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
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '',
          pathname: '/images/**',
        },
        {
          protocol: 'https',
          hostname: 'csbe69f7c4076f1x464dxbab.blob.core.windows.net',
          port: '',
          pathname: '/media/**',
        },
      ],
    },
  }
