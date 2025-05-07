/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Tüm görseller için optimizasyonu devre dışı bırak
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig 