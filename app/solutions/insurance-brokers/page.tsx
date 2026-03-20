import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Ping for Insurance Brokers',
  description:
    'Automate the most time-consuming parts of the submission process. From SOV cleansing to market presentations.',
}

export default function BrokersPage() {
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
          <img src="/images/aaron-gilmore-aQLdDgROIZQ-unsplash.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #141414 40%, transparent)' }} />
        </div>
        <div style={{ maxWidth: '1620px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#c94dff18', border: '1px solid #c94dff40', color: '#c94dff', padding: '6px 16px', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif", marginBottom: '32px' }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#c94dff' }} />
            Solutions for Brokers
          </div>
          <h1 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(48px, 8vw, 130px)', fontWeight: 700, color: '#fff', lineHeight: 1.0, letterSpacing: '-0.025em', marginBottom: '28px', maxWidth: '900px' }}>
            Ping for Insurance Brokers
          </h1>
          <p style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(16px, 1.5vw, 20px)', color: 'rgba(255,255,255,0.6)', maxWidth: '620px', lineHeight: 1.65, marginBottom: '40px' }}>
            Automate the most time-consuming parts of the submission process. Spend more time with clients, less time fighting spreadsheets.
          </p>
          <Link href="/contact/" style={{ display: 'inline-block', backgroundColor: '#f32c01', color: '#fff', padding: '15px 36px', borderRadius: '100px', textDecoration: 'none', fontSize: '1rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif" }}>
            Book a Demo
          </Link>
        </div>
      </section>

      <section style={{ backgroundColor: '#fff0e7', padding: 'clamp(70px,8vw,120px) clamp(20px,4vw,80px)' }}>
        <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="brokers-content-grid">
            <div>
              <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(32px, 4vw, 60px)', fontWeight: 700, color: '#171100', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '24px' }}>
                Speed and accuracy from submission to placement
              </h2>
              <p style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '1.05rem', color: 'rgba(23,17,0,0.65)', lineHeight: 1.7, marginBottom: '32px' }}>
                Insurance brokers receive SOVs in every format imaginable — messy Excel files, scanned PDFs, incomplete ACORDs. PING.Extraction normalizes all of it in minutes, giving your team clean, enriched data ready for submission.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Cleanse and normalize SOVs in any format',
                  'Geocode and enrich every location automatically',
                  'Generate market-ready submission packages',
                  'Trigger CAT models directly from Ping',
                  'Visualize portfolios on interactive maps',
                  'Access all your data in Snowflake',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#c94dff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
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
              <img src="/images/Ping-Extraction.jpg" alt="Broker using Ping" style={{ width: '100%', borderRadius: '16px' }} />
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .brokers-content-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      <section style={{ backgroundColor: '#141414', padding: 'clamp(70px,8vw,120px) clamp(20px,4vw,80px)' }}>
        <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <blockquote style={{ fontFamily: "'IvarDisplay', serif", fontSize: 'clamp(22px, 3vw, 40px)', fontWeight: 400, fontStyle: 'italic', color: '#fff', lineHeight: 1.45, marginBottom: '32px' }}>
              &ldquo;Ping has been a transformational tool for our business. The ability to cleanse and normalize SOVs has created a level of speed and accuracy not previously achieved.&rdquo;
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px' }}>
              <img src="/images/Velocity@2x.png" alt="Velocity Risk" style={{ height: '28px', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.7 }} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: "'MacanPan', sans-serif", fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>Rod Harden</div>
                <div style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem' }}>President of Claims & Operations • Velocity Risk</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner label="For brokers" heading="Ready to automate your submissions?" text="Join leading brokers who process submissions in minutes, not days." />
    </>
  )
}
