import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Ping for Carriers and MGAs',
  description:
    'Structured, enriched data straight into your underwriting workflow. Eliminate manual data entry and speed up time-to-quote.',
}

export default function CarrierPage() {
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
          <img src="/images/pexels-peter-olexa-2214257-3875821.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #141414 40%, transparent)' }} />
        </div>
        <div style={{ maxWidth: '1620px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#ffac4d18', border: '1px solid #ffac4d40', color: '#ffac4d', padding: '6px 16px', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif", marginBottom: '32px' }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ffac4d' }} />
            Solutions for Carriers & MGAs
          </div>
          <h1 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(48px, 8vw, 120px)', fontWeight: 700, color: '#fff', lineHeight: 1.0, letterSpacing: '-0.025em', marginBottom: '28px', maxWidth: '900px' }}>
            Ping for Carriers and MGAs
          </h1>
          <p style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(16px, 1.5vw, 20px)', color: 'rgba(255,255,255,0.6)', maxWidth: '620px', lineHeight: 1.65, marginBottom: '40px' }}>
            Deliver structured, enriched data straight into your underwriting workflow. Eliminate manual data entry, reduce E&O risk, and accelerate time-to-quote.
          </p>
          <Link href="/contact/" style={{ display: 'inline-block', backgroundColor: '#f32c01', color: '#fff', padding: '15px 36px', borderRadius: '100px', textDecoration: 'none', fontSize: '1rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif" }}>
            Book a Demo
          </Link>
        </div>
      </section>

      <section style={{ backgroundColor: '#fff0e7', padding: 'clamp(70px,8vw,120px) clamp(20px,4vw,80px)' }}>
        <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="carrier-content-grid">
            <div>
              <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(32px, 4vw, 60px)', fontWeight: 700, color: '#171100', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '24px' }}>
                Underwriting intelligence at scale
              </h2>
              <p style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '1.05rem', color: 'rgba(23,17,0,0.65)', lineHeight: 1.7, marginBottom: '32px' }}>
                For carriers and MGAs processing hundreds or thousands of submissions per month, PING delivers consistent, structured data that plugs directly into your underwriting systems, pricing models, and CAT tools.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Automated submission intake via API',
                  'Standardized data schema across all submissions',
                  'Direct CAT model integration (AIR, RMS)',
                  'Portfolio aggregation and analytics',
                  'Geocoding quality scoring & remediation',
                  'Full audit trail and data provenance',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#ffac4d', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '0.95rem', color: 'rgba(23,17,0,0.75)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/images/pexels-peter-olexa-2214257-3875821.jpg" alt="Carrier using Ping" style={{ width: '100%', borderRadius: '16px' }} />
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .carrier-content-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      <section style={{ backgroundColor: '#141414', padding: 'clamp(70px,8vw,120px) clamp(20px,4vw,80px)' }}>
        <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <blockquote style={{ fontFamily: "'IvarDisplay', serif", fontSize: 'clamp(22px, 3vw, 40px)', fontWeight: 400, fontStyle: 'italic', color: '#fff', lineHeight: 1.45, marginBottom: '32px' }}>
              &ldquo;Ping replaced what has historically been a manual and error prone piece of the underwriting workflow with a more efficient, scalable, precise, and repeatable process.&rdquo;
            </blockquote>
            <div style={{ textAlign: 'left', display: 'inline-block' }}>
              <div style={{ fontFamily: "'MacanPan', sans-serif", fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>Brandon Beauregard</div>
              <div style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem' }}>Chief Underwriting Officer • Trium Property</div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner label="For carriers & MGAs" heading="Scale your underwriting operations" text="Book a demo and see how Ping transforms submission intake for carriers and MGAs." />
    </>
  )
}
