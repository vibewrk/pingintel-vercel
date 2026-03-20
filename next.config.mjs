/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pingintel.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/solutions/solutions-carrier',
        destination: '/solutions/solutions-carrier/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
