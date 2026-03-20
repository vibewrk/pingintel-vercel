import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'PING.Extraction',
  description:
    'Cleanse and enrich your property SOV data in record time and with unparalleled accuracy and completeness.',
}

const outputs = [
  'Normalized address & geocodes',
  'Building construction details',
  'Occupancy classification',
  'Year built & floor count',
  'Replacement cost validation',
  'Coverage terms & conditions',
  'Loss history linkage',
  'COPE data standardization',
  'Secondary modifiers',
  'Custom field mapping',
]

const features = [
  {
    color: '#c94dff',
    title: 'Any format, any structure',
    desc: 'Excel, PDF, CSV, Word — Ping.Extraction reads and normalizes data from any document format your clients send you.',
  },
  {
    color: '#4da0ff',
    title: 'AI + human validation',
    desc: 'Our multi-model AI pipeline is backed by domain-expert validation rules built specifically for commercial property insurance.',
  },
  {
    color: '#ffac4d',
    title: 'Geocoding & enrichment',
    desc: 'Every location is geocoded, validated, and enriched with hazard scores, building data, and geospatial risk attributes.',
  },
  {
    color: '#f32c01',
    title: 'Real-time API',
    desc: 'Submit documents via API and receive structured data in minutes. Direct integrations with major agency management systems.',
  },
]

export default function PingExtractionPage() {
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
            src="/images/Ping-Extraction.jpg"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18 }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, #141414 40%, transparent)',
            }}
          />
        </div>
        <div style={{ maxWidth: '1620px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#c94dff18',
              border: '1px solid #c94dff40',
              color: '#c94dff',
              padding: '6px 16px',
              borderRadius: '100px',
              fontSize: '0.78rem',
              fontWeight: 600,
              fontFamily: "'MacanPan', sans-serif",
              marginBottom: '32px',
            }}
          >
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#c94dff' }} />
            Data Extraction
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
            .Extraction
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
            Unstructured data in, structured data out.
          </p>
          <p
            style={{
              fontFamily: "'MacanPan', sans-serif",
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '600px',
              lineHeight: 1.65,
              marginBottom: '40px',
            }}
          >
            Cleanse and enrich your property SOV data in record time and with
            unparalleled accuracy and completeness.
          </p>
          <Link
            href="/contact/"
            style={{
              display: 'inline-block',
              backgroundColor: '#f32c01',
              color: '#fff',
              padding: '15px 36px',
              borderRadius: '100px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              fontFamily: "'MacanPan', sans-serif",
            }}
          >
            Book a Demo
          </Link>
        </div>
      </section>

      {/* What it does */}
      <section
        style={{
          backgroundColor: '#fff0e7',
          padding: 'clamp(70px,8vw,120px) clamp(20px,4vw,80px)',
        }}
      >
        <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}
            className="ext-grid"
          >
            <div>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'rgba(23,17,0,0.4)',
                  fontFamily: "'MacanPan', sans-serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginBottom: '16px',
                }}
              >
                How it works
              </div>
              <h2
                style={{
                  fontFamily: "'MacanPan', sans-serif",
                  fontSize: 'clamp(32px, 4vw, 60px)',
                  fontWeight: 700,
                  color: '#171100',
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  marginBottom: '24px',
                }}
              >
                From raw documents to enriched, structured data
              </h2>
              <p
                style={{
                  fontFamily: "'MacanPan', sans-serif",
                  fontSize: '1.05rem',
                  color: 'rgba(23,17,0,0.65)',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                }}
              >
                Globally, cleansing exposure data costs the insurance industry billions
                of dollars annually. Lost time, missed opportunity, mispriced risk, and
                high support costs become a thing of the past with PING.Extraction.
              </p>
              <p
                style={{
                  fontFamily: "'MacanPan', sans-serif",
                  fontSize: '1.05rem',
                  color: 'rgba(23,17,0,0.65)',
                  lineHeight: 1.7,
                }}
              >
                Ping fits into your existing workflow, converting your data within
                minutes into a structured database preserving full data provenance
                and metadata.
              </p>
            </div>
            <div>
              <img
                src="/images/extraction-chart-1.png"
                alt="Extraction process diagram"
                style={{ width: '100%', borderRadius: '16px' }}
              />
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) { .ext-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* Features Grid */}
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
              marginBottom: '56px',
              maxWidth: '700px',
            }}
          >
            Everything you need to weaponize your data
          </h2>

          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}
            className="features-grid"
          >
            {features.map((feature, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#191919',
                  borderRadius: '16px',
                  padding: '32px',
                  border: `1px solid ${feature.color}20`,
                }}
              >
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: feature.color, marginBottom: '20px' }} />
                <h3 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
                  {feature.title}
                </h3>
                <p style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '0.92rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <style>{`
            @media (max-width: 600px) { .features-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* Output fields */}
      <section style={{ backgroundColor: '#0f0f0f', padding: 'clamp(70px,8vw,120px) clamp(20px,4vw,80px)' }}>
        <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}
            className="outputs-grid"
          >
            <div>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.4)',
                  fontFamily: "'MacanPan', sans-serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginBottom: '16px',
                }}
              >
                Output options
              </div>
              <h2
                style={{
                  fontFamily: "'MacanPan', sans-serif",
                  fontSize: 'clamp(32px, 4vw, 60px)',
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  marginBottom: '24px',
                }}
              >
                Rich, structured data fields
              </h2>
              <p
                style={{
                  fontFamily: "'MacanPan', sans-serif",
                  fontSize: '1.05rem',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.7,
                }}
              >
                Every document processed by PING.Extraction yields a comprehensive
                structured dataset covering all critical risk attributes for commercial
                property underwriting.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignContent: 'flex-start' }}>
              {outputs.map((output, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'rgba(201,77,255,0.08)',
                    border: '1px solid rgba(201,77,255,0.2)',
                    color: 'rgba(255,255,255,0.8)',
                    padding: '10px 18px',
                    borderRadius: '100px',
                    fontSize: '0.88rem',
                    fontFamily: "'MacanPan', sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {output}
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) { .outputs-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      <CTABanner
        label="Get started"
        heading="Ready to transform your SOV workflow?"
        text="Join leading brokers and carriers who rely on Ping.Extraction to process thousands of submissions every day."
      />
    </>
  )
}
