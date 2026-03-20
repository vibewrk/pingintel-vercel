import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'PING.Location',
  description:
    'Know any location, inside and out. Perform single building lookups into physical aspects of your property portfolio.',
}

export default function PingLocationPage() {
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
          <img src="/images/ping-location@2x.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #141414 45%, transparent)' }} />
        </div>
        <div style={{ maxWidth: '1620px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#ffac4d18', border: '1px solid #ffac4d40', color: '#ffac4d', padding: '6px 16px', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif", marginBottom: '32px' }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ffac4d' }} />
            Location Intelligence
          </div>
          <h1 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(56px, 9vw, 150px)', fontWeight: 700, color: '#fff', lineHeight: 1.0, letterSpacing: '-0.03em', marginBottom: '28px' }}>
            .Location
          </h1>
          <p style={{ fontFamily: "'IvarDisplay', serif", fontSize: 'clamp(20px, 2.5vw, 36px)', fontWeight: 400, fontStyle: 'italic', color: 'rgba(255,255,255,0.75)', maxWidth: '700px', lineHeight: 1.4, marginBottom: '16px' }}>
            Know any location, inside and out.
          </p>
          <p style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(16px, 1.5vw, 20px)', color: 'rgba(255,255,255,0.6)', maxWidth: '620px', lineHeight: 1.65, marginBottom: '40px' }}>
            Perform single building lookups into physical aspects of your property portfolio to provide a true picture of location and building risk.
          </p>
          <Link href="/contact/" style={{ display: 'inline-block', backgroundColor: '#f32c01', color: '#fff', padding: '15px 36px', borderRadius: '100px', textDecoration: 'none', fontSize: '1rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif" }}>
            Book a Demo
          </Link>
        </div>
      </section>

      <section style={{ backgroundColor: '#141414', padding: 'clamp(70px,8vw,120px) clamp(20px,4vw,80px)' }}>
        <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(32px, 5vw, 72px)', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '56px', maxWidth: '700px' }}>
            Instant intelligence on any property
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="location-features-grid">
            {[
              { color: '#ffac4d', title: 'Building characteristics', desc: 'Year built, stories, square footage, construction type, occupancy, and more — pulled from authoritative sources.' },
              { color: '#4da0ff', title: 'Precise geocoding', desc: 'Rooftop-level geocoding with confidence scoring. Know exactly where every building sits on the map.' },
              { color: '#c94dff', title: 'Hazard intelligence', desc: 'Instant access to wind, flood, earthquake, wildfire, and other peril hazard scores for any address.' },
              { color: '#ffac4d', title: 'Valuation data', desc: 'Tax-assessed values, market data, and AI-driven replacement cost estimates for commercial properties.' },
              { color: '#4da0ff', title: 'Aerial & satellite imagery', desc: 'Access high-resolution imagery and analysis including roof condition, geometry, and materials.' },
              { color: '#c94dff', title: 'API-first design', desc: 'Simple REST API with fast response times. Integrate location lookups directly into your workflow or portal.' },
            ].map((feature, i) => (
              <div key={i} style={{ backgroundColor: '#191919', borderRadius: '16px', padding: '28px', border: `1px solid ${feature.color}20` }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: feature.color, marginBottom: '16px' }} />
                <h3 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>{feature.title}</h3>
                <p style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 900px) { .location-features-grid { grid-template-columns: 1fr 1fr !important; } }
            @media (max-width: 600px) { .location-features-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      <CTABanner label="Get started" heading="Know every location instantly" text="Book a demo and see PING.Location in action for your property portfolio." />
    </>
  )
}
