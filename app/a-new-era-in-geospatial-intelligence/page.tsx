import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'A New Era in Geospatial Intelligence',
  description: 'How advanced geospatial analysis is transforming commercial property risk assessment.',
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
            <span style={{ color: '#ffac4d', fontSize: '0.75rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif", textTransform: 'uppercase', letterSpacing: '0.06em' }}>Blog</span>
          </div>
          <h1 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(36px, 5vw, 80px)', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '24px' }}>
            A New Era in Geospatial Intelligence
          </h1>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem' }}>July 18, 2025</span>
            <span style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.2)' }}>•</span>
            <span style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem' }}>Ping Intel</span>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 80px)' }}>
        <img src="/images/Group-1321316853-1.png" alt="Geospatial intelligence" style={{ width: '100%', borderRadius: '16px', marginBottom: '60px' }} />
      </div>

      <section style={{ backgroundColor: '#141414', padding: '0 clamp(20px, 4vw, 80px) clamp(70px, 8vw, 120px)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(16px, 1.4vw, 18px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '24px', fontSize: 'clamp(18px, 2vw, 22px)', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
            The commercial property insurance industry is undergoing a fundamental shift in how it understands, visualizes, and communicates risk. At the center of this transformation is geospatial intelligence.
          </p>
          <p style={{ marginBottom: '24px' }}>
            For decades, property risk has been captured in spreadsheets — rows and columns of addresses, construction types, and insured values. This format, while functional, fundamentally limits how underwriters, brokers, and risk managers can understand exposure. Geographic context, concentration risk, and the relationship between locations are invisible in a table.
          </p>
          <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 700, color: '#fff', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.015em' }}>
            From Spreadsheets to Spatial Understanding
          </h2>
          <p style={{ marginBottom: '24px' }}>
            PING.Maps represents a new approach to property exposure visualization. Rather than replacing the data tools teams already use, Ping.Maps enriches them — taking the structured data output from PING.Extraction and bringing it to life in a dynamic, interactive geospatial environment.
          </p>
          <p style={{ marginBottom: '24px' }}>
            Users can instantly see their entire portfolio on a map, filter by any attribute, overlay hazard data, and identify concentration risks that would be invisible in a spreadsheet. The platform is designed not just for analysis, but for communication — generating market-ready presentations that help brokers articulate risk to underwriters in a compelling, visual way.
          </p>
          <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 700, color: '#fff', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.015em' }}>
            The Geocoding Quality Problem
          </h2>
          <p style={{ marginBottom: '24px' }}>
            One of the most significant, and least discussed, challenges in property insurance is geocoding quality. When a location cannot be precisely geocoded, every downstream analysis is compromised. PING.Maps makes geocoding quality visible and actionable.
          </p>
          <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 700, color: '#fff', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.015em' }}>
            Hazard Intelligence at Every Location
          </h2>
          <p style={{ marginBottom: '24px' }}>
            Beyond the base map, PING.Maps allows users to layer hazard data directly onto their portfolio. Wind speed, flood zone, earthquake PGA, wildfire risk, and other peril layers can be toggled on and off, giving underwriters an immediate visual understanding of the hazard profile for any location.
          </p>
          <p style={{ marginBottom: '0' }}>
            The future of property insurance is spatial. And Ping is building the infrastructure to make that future a reality.
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

      <CTABanner label="See it in action" heading="Ready to visualize your portfolio?" text="Book a demo and see PING.Maps transform how you understand and communicate risk." />
    </>
  )
}
