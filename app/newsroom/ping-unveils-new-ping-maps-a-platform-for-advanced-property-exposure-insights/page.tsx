import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Ping Unveils New Ping.Maps; A Platform for Advanced Property Exposure Insights',
  description: 'Ping announces the launch of Ping.Maps, a next-generation geospatial platform for commercial property insurance.',
}

export default function ArticlePage() {
  return (
    <>
      <section
        style={{
          backgroundColor: '#141414',
          paddingTop: 'calc(76px + clamp(60px, 6vw, 100px))',
          paddingBottom: 'clamp(40px, 4vw, 60px)',
          paddingLeft: 'clamp(20px, 4vw, 80px)',
          paddingRight: 'clamp(20px, 4vw, 80px)',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
            <Link href="/newsroom/" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', fontFamily: "'MacanPan', sans-serif", textDecoration: 'none' }}>Newsroom</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>→</span>
            <span style={{ color: '#4da0ff', fontSize: '0.75rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif", textTransform: 'uppercase', letterSpacing: '0.06em' }}>News</span>
          </div>
          <h1 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(32px, 5vw, 72px)', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '24px' }}>
            Ping Unveils New Ping.Maps; A Platform for Advanced Property Exposure Insights
          </h1>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem' }}>June 16, 2025</span>
            <span style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.2)' }}>•</span>
            <span style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem' }}>Ping Intel</span>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 80px)' }}>
        <img src="/images/Group-1321316853-1.png" alt="PING.Maps launch" style={{ width: '100%', borderRadius: '16px', marginBottom: '60px' }} />
      </div>

      <section style={{ backgroundColor: '#141414', padding: '0 clamp(20px, 4vw, 80px) clamp(70px, 8vw, 120px)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(16px, 1.4vw, 18px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '24px', fontSize: 'clamp(18px, 2vw, 22px)', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
            Ping Intel today announced the launch of PING.Maps, a next-generation geospatial platform purpose-built for the commercial property insurance industry. PING.Maps transforms raw property data into dynamic, interactive visualizations that help underwriters, brokers, and risk managers make faster, better-informed decisions.
          </p>
          <p style={{ marginBottom: '24px' }}>
            PING.Maps is the latest addition to the Ping platform, integrating natively with PING.Extraction to provide an end-to-end workflow from unstructured document to geospatial intelligence. Users can upload any SOV, have it processed and enriched by PING.Extraction, and immediately visualize the results on an interactive map.
          </p>
          <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 700, color: '#fff', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.015em' }}>
            Key Capabilities
          </h2>
          <p style={{ marginBottom: '24px' }}>
            PING.Maps launches with a comprehensive feature set designed to address the most pressing geospatial challenges in commercial property insurance:
          </p>
          <ul style={{ listStyle: 'none', marginBottom: '24px', padding: 0 }}>
            {[
              'Interactive portfolio mapping with unlimited filtering and layering',
              'Geocoding quality scoring and remediation tools',
              'Multi-peril hazard overlays including wind, flood, earthquake, and wildfire',
              'Concentration analysis and aggregation visualization',
              'Market-ready presentation exports in PDF and PNG formats',
              'Custom data layer support for proprietary risk data',
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                <span style={{ color: '#4da0ff', marginTop: '2px', flexShrink: 0 }}>→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 700, color: '#fff', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.015em' }}>
            Designed for the Insurance Workflow
          </h2>
          <p style={{ marginBottom: '24px' }}>
            Unlike general-purpose mapping tools, PING.Maps is designed from the ground up for insurance-specific workflows. Every feature is built around the specific needs of underwriters and brokers: how they analyze risk, how they communicate with markets, and how they need to present information.
          </p>
          <p style={{ marginBottom: '0' }}>
            PING.Maps is available now for all Ping customers. For more information or to schedule a demonstration, contact the Ping team at{' '}
            <a href="mailto:info@pingintel.com" style={{ color: '#f32c01', textDecoration: 'none' }}>info@pingintel.com</a>.
          </p>

          <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/products/ping-maps/" style={{ display: 'inline-block', backgroundColor: '#f32c01', color: '#fff', padding: '12px 28px', borderRadius: '100px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif" }}>
              Explore PING.Maps
            </Link>
            <Link href="/newsroom/" style={{ display: 'inline-block', backgroundColor: 'transparent', color: 'rgba(255,255,255,0.7)', padding: '12px 28px', borderRadius: '100px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, fontFamily: "'MacanPan', sans-serif", border: '1px solid rgba(255,255,255,0.15)' }}>
              ← Back to Newsroom
            </Link>
          </div>
        </div>
      </section>

      <CTABanner label="New feature" heading="See PING.Maps in action" text="Book a demo today and experience the new standard in property exposure visualization." />
    </>
  )
}
