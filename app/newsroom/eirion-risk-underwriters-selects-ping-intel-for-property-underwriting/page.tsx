import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Eirion Risk Underwriters selects Ping Intel for Property Underwriting',
  description: 'Ping Intel announces a new partnership with Eirion Risk Underwriters to power their property underwriting workflow.',
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
            Eirion Risk Underwriters selects Ping Intel for Property Underwriting
          </h1>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem' }}>March 12, 2026</span>
            <span style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.2)' }}>•</span>
            <span style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem' }}>Ping Intel</span>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 80px)' }}>
        <img src="/images/image-2889.jpg" alt="Eirion Risk partnership" style={{ width: '100%', borderRadius: '16px', marginBottom: '60px' }} />
      </div>

      <section style={{ backgroundColor: '#141414', padding: '0 clamp(20px, 4vw, 80px) clamp(70px, 8vw, 120px)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(16px, 1.4vw, 18px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '24px', fontSize: 'clamp(18px, 2vw, 22px)', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
            Ping Intel, the leading provider of AI-powered exposure technology for the commercial property insurance industry, today announced that Eirion Risk Underwriters has selected its platform to power their property underwriting workflow.
          </p>
          <p style={{ marginBottom: '24px' }}>
            Eirion Risk Underwriters will deploy PING.Extraction and PING.Maps to automate their submission intake process and enhance their geospatial risk analysis capabilities. The integration marks a significant step in Eirion&apos;s digital transformation strategy.
          </p>
          <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 700, color: '#fff', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.015em' }}>
            Streamlining Submission to Decision
          </h2>
          <p style={{ marginBottom: '24px' }}>
            Prior to implementing Ping, Eirion&apos;s underwriting team spent significant time manually processing and cleansing submission data. With PING.Extraction, the entire intake process is automated. Documents are submitted through the API and returned as clean, structured, geocoded data within minutes.
          </p>
          <blockquote style={{ borderLeft: '3px solid #f32c01', paddingLeft: '24px', marginLeft: 0, marginBottom: '24px', fontFamily: "'IvarDisplay', serif", fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.55 }}>
            &ldquo;Ping has given us the ability to process submissions faster and with greater confidence in the underlying data quality. The combination of automated extraction and geospatial visualization has materially changed how our team works.&rdquo;
          </blockquote>
          <p style={{ marginBottom: '24px' }}>
            This partnership reflects the growing adoption of Ping&apos;s platform among specialty property underwriters who are seeking to modernize their workflows without disrupting their existing systems and processes.
          </p>
          <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 700, color: '#fff', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.015em' }}>
            About Ping Intel
          </h2>
          <p style={{ marginBottom: '0' }}>
            Ping Intel provides AI-powered exposure technology for the commercial property insurance industry. For more information, visit{' '}
            <Link href="/" style={{ color: '#f32c01', textDecoration: 'none' }}>pingintel.com</Link>
            {' '}or contact{' '}
            <a href="mailto:info@pingintel.com" style={{ color: '#f32c01', textDecoration: 'none' }}>info@pingintel.com</a>.
          </p>

          <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact/" style={{ display: 'inline-block', backgroundColor: '#f32c01', color: '#fff', padding: '12px 28px', borderRadius: '100px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif" }}>
              Book a Demo
            </Link>
            <Link href="/newsroom/" style={{ display: 'inline-block', backgroundColor: 'transparent', color: 'rgba(255,255,255,0.7)', padding: '12px 28px', borderRadius: '100px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, fontFamily: "'MacanPan', sans-serif", border: '1px solid rgba(255,255,255,0.15)' }}>
              ← Back to Newsroom
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
