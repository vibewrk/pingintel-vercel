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
      {
        source: '/eirion-risk-underwriters-selects-ping-intel-for-property-underwriting',
        destination: '/newsroom/eirion-risk-underwriters-selects-ping-intel-for-property-underwriting',
        permanent: true,
      },
      {
        source: '/a-new-era-in-geospatial-intelligence',
        destination: '/newsroom/a-new-era-in-geospatial-intelligence',
        permanent: true,
      },
      {
        source: '/smarter-faster-systems-transforming-underwriting-from-submission-to-decision',
        destination: '/newsroom/smarter-faster-systems-transforming-underwriting-from-submission-to-decision',
        permanent: true,
      },
      {
        source: '/ping-data-fast-tracking-sovs-into-your-underwriting-ecosystem',
        destination: '/newsroom/ping-data-fast-tracking-sovs-into-your-underwriting-ecosystem',
        permanent: true,
      },
      {
        source: '/ping-unveils-new-ping-maps-a-platform-for-advanced-property-exposure-insights',
        destination: '/newsroom/ping-unveils-new-ping-maps-a-platform-for-advanced-property-exposure-insights',
        permanent: true,
      },
      {
        source: '/ping-intel-and-property-guardian-partner-to-deliver-best-in-class-wildfire-data-to-commercial-insurers',
        destination: '/newsroom/ping-intel-and-property-guardian-partner-to-deliver-best-in-class-wildfire-data-to-commercial-insurers',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
