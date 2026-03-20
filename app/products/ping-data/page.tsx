import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'PING.Data',
  description:
    'A universe of data sources at your fingertips. Seamlessly access property-relevant data for commercial insurance.',
}

const dataSources = [
  { name: 'Geocoding', color: '#c94dff', desc: 'High-precision geocoding with quality scoring and validation.' },
  { name: 'Tax Records', color: '#4da0ff', desc: 'Property ownership, valuation, and tax assessment data.' },
  { name: 'Satellite Imagery', color: '#ffac4d', desc: 'High-resolution satellite and aerial imagery for any location.' },
  { name: 'Building Valuation', color: '#c94dff', desc: 'AI-driven replacement cost estimates for commercial properties.' },
  { name: 'Hazard Scores', color: '#4da0ff', desc: 'Multi-peril hazard scores including wind, flood, quake, wildfire.' },
  { name: 'Occupancy Data', color: '#ffac4d', desc: 'Business classification, SIC codes, and occupancy verification.' },
  { name: 'Roof Data', color: '#c94dff', desc: 'Roof shape, material, age, and condition from aerial analysis.' },
  { name: 'Flood Zones', color: '#4da0ff', desc: 'FEMA NFIP flood zone designations and BFE data.' },
]

export default function PingDataPage() {
  return (
    <>
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#141414',
          paddingTop: 'calc(76px + clamp(60px, 8vw, 120px))',
          paddingBottom: 'clamp(60px, 8vw, 120px)',
          paddingLeft: 'clamp(20px, 4vw, 80px)',
          paddingRight: 'clamp(20px, 4vw, 80px)',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/images/ping-data@2x.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #141414 45%, transparent)' }} />
        </div>
        <div style={{ maxWidth: '1620px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#c94dff18', border: '1px solid #c94dff40', color: '#c94dff', padding: '6px 16px', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif", marginBottom: '32px' }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#c94dff' }} />
            Data Enrichment
          </div>
          <h1 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(56px, 9vw, 150px)', fontWeight: 700, color: '#fff', lineHeight: 1.0, letterSpacing: '-0.03em', marginBottom: '28px' }}>
            .Data
          </h1>
          <p style={{ fontFamily: "'IvarDisplay', serif", fontSize: 'clamp(20px, 2.5vw, 36px)', fontWeight: 400, fontStyle: 'italic', color: 'rgba(255,255,255,0.75)', maxWidth: '700px', lineHeight: 1.4, marginBottom: '16px' }}>
            A universe of data sources at your fingertips.
          </p>
          <p style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(16px, 1.5vw, 20px)', color: 'rgba(255,255,255,0.6)', maxWidth: '620px', lineHeight: 1.65, marginBottom: '40px' }}>
            Delve into the incredible array of property-relevant data sources across the web. Fast, easy-to-integrate, consistent, and reliable access to every data point you need.
          </p>
          <Link href="/contact/" style={{ display: 'inline-block', backgroundColor: '#f32c01', color: '#fff', padding: '15px 36px', borderRadius: '100px', textDecoration: 'none', fontSize: '1rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif" }}>
            Book a Demo
          </Link>
        </div>
      </section>

      <section style={{ backgroundColor: '#141414', padding: 'clamp(70px,8vw,120px) clamp(20px,4vw,80px)' }}>
        <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(32px, 5vw, 72px)', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '56px', maxWidth: '700px' }}>
            Every data point you need
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }} className="data-sources-grid">
            {dataSources.map((source, i) => (
              <div key={i} style={{ backgroundColor: '#191919', borderRadius: '16px', padding: '28px', border: `1px solid ${source.color}20` }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: source.color, marginBottom: '16px' }} />
                <h3 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>{source.name}</h3>
                <p style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{source.desc}</p>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 900px) { .data-sources-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 500px) { .data-sources-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      <section style={{ backgroundColor: '#fff0e7', padding: 'clamp(70px,8vw,120px) clamp(20px,4vw,80px)' }}>
        <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="data-content-grid">
            <div>
              <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(32px, 4vw, 60px)', fontWeight: 700, color: '#171100', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '24px' }}>
                Your data. Your advantage.
              </h2>
              <p style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '1.05rem', color: 'rgba(23,17,0,0.65)', lineHeight: 1.7, marginBottom: '24px' }}>
                Every time you interact with Ping, your data gets securely stored in a Snowflake data warehouse. Through Ping, you can have immediate and limitless access to your risk portfolio.
              </p>
              <p style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '1.05rem', color: 'rgba(23,17,0,0.65)', lineHeight: 1.7 }}>
                Your data. Your advantage. Always available. Always secure.
              </p>
            </div>
            <div>
              <img src="/images/ping-data@2x.jpg" alt="PING.Data dashboard" style={{ width: '100%', borderRadius: '16px' }} />
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .data-content-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      <CTABanner label="Get started" heading="Access every data point you need" text="Book a demo and explore the full PING.Data catalog of property intelligence sources." />
    </>
  )
}
