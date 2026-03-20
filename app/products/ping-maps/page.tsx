import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'PING.Maps',
  description:
    'See the complete picture like never before. Advanced geospatial intelligence for commercial property insurance.',
}

export default function PingMapsPage() {
  return (
    <>
      {/* Hero */}
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
          <img
            src="/images/Group-1321316853-1.png"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, #141414 45%, rgba(20,20,20,0.4))',
            }}
          />
        </div>
        <div style={{ maxWidth: '1620px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#4da0ff18',
              border: '1px solid #4da0ff40',
              color: '#4da0ff',
              padding: '6px 16px',
              borderRadius: '100px',
              fontSize: '0.78rem',
              fontWeight: 600,
              fontFamily: "'MacanPan', sans-serif",
              marginBottom: '32px',
            }}
          >
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4da0ff' }} />
            Geospatial Intelligence
          </div>
          <h1
            style={{
              fontFamily: "'MacanPan', sans-serif",
              fontSize: 'clamp(56px, 9vw, 150px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              marginBottom: '28px',
            }}
          >
            .Maps
          </h1>
          <p
            style={{
              fontFamily: "'IvarDisplay', serif",
              fontSize: 'clamp(20px, 2.5vw, 36px)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '700px',
              lineHeight: 1.4,
              marginBottom: '16px',
            }}
          >
            See the complete picture like never before.
          </p>
          <p
            style={{
              fontFamily: "'MacanPan', sans-serif",
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '620px',
              lineHeight: 1.65,
              marginBottom: '40px',
            }}
          >
            Bring your PING.Extraction insurance data to life with powerful mapping
            and rich visualizations. Understand your geospatial risk, filter primary
            parameters, and create market-ready presentations.
          </p>
          <Link href="/contact/" style={{ display: 'inline-block', backgroundColor: '#f32c01', color: '#fff', padding: '15px 36px', borderRadius: '100px', textDecoration: 'none', fontSize: '1rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif" }}>
            Book a Demo
          </Link>
        </div>
      </section>

      {/* Screenshot */}
      <section style={{ backgroundColor: '#0a0a0a', padding: 'clamp(60px,6vw,100px) clamp(20px,4vw,80px)' }}>
        <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
          <img
            src="/images/Group-1321316853-1.png"
            alt="PING.Maps platform screenshot"
            style={{ width: '100%', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)' }}
          />
        </div>
      </section>

      {/* Features */}
      <section style={{ backgroundColor: '#141414', padding: 'clamp(70px,8vw,120px) clamp(20px,4vw,80px)' }}>
        <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'MacanPan', sans-serif",
              fontSize: 'clamp(32px, 5vw, 72px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '60px',
              maxWidth: '700px',
            }}
          >
            A new era in geospatial intelligence
          </h2>

          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}
            className="maps-features-grid"
          >
            {[
              { color: '#4da0ff', title: 'Interactive portfolio maps', desc: 'Visualize your entire book of business on a single dynamic map. Filter by peril, class of business, geography, or any custom field.' },
              { color: '#c94dff', title: 'Geocoding quality scoring', desc: 'See the effect of ambiguous geocoding on your portfolio. Identify and remediate poor quality locations before they cost you.' },
              { color: '#ffac4d', title: 'Hazard overlays', desc: 'Layer wind, flood, earthquake, wildfire, and other peril data directly onto your portfolio map for instant risk visualization.' },
              { color: '#4da0ff', title: 'Presentation-ready exports', desc: 'Generate professional, market-ready mapping presentations in seconds. PDF, PNG, or interactive web exports.' },
              { color: '#c94dff', title: 'Concentration analysis', desc: "Identify dangerous concentrations of exposure before they become a problem. Our clustering algorithms highlight hidden aggregations in your book." },
              { color: '#ffac4d', title: 'Custom data layers', desc: 'Bring your own data and layer it alongside Ping enrichment data for a truly comprehensive view of your portfolio.' },
            ].map((feature, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#191919',
                  borderRadius: '16px',
                  padding: '28px',
                  border: `1px solid ${feature.color}18`,
                }}
              >
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: feature.color, marginBottom: '20px' }} />
                <h3 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
                  {feature.title}
                </h3>
                <p style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <style>{`
            @media (max-width: 900px) { .maps-features-grid { grid-template-columns: 1fr 1fr !important; } }
            @media (max-width: 600px) { .maps-features-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* Quote section */}
      <section style={{ backgroundColor: '#fff0e7', padding: 'clamp(70px,8vw,120px) clamp(20px,4vw,80px)' }}>
        <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
          <blockquote
            style={{
              fontFamily: "'IvarDisplay', serif",
              fontSize: 'clamp(24px, 4vw, 56px)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#171100',
              lineHeight: 1.35,
              maxWidth: '1000px',
            }}
          >
            &ldquo;Data transcends spreadsheets and becomes a visual command center
            for strategic decision-making.&rdquo;
          </blockquote>
          <div style={{ marginTop: '32px' }}>
            <Link href="/contact/" style={{ display: 'inline-block', backgroundColor: '#f32c01', color: '#fff', padding: '14px 32px', borderRadius: '100px', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif" }}>
              See PING.Maps in action
            </Link>
          </div>
        </div>
      </section>

      <CTABanner label="Get started" heading="Ready to see your portfolio come alive?" text="Book a demo and see PING.Maps transform how you visualize and understand your risk." />
    </>
  )
}
