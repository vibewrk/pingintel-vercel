import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'PING.Ready',
  description:
    'Complete human-aided ML processing. A full-service data-extraction solution for the property insurance marketplace.',
}

export default function PingReadyPage() {
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
          <img src="/images/Firefly_show-me-someone-working-on-their-computer-with-excel-in-their-screen.-make-the-colors-143918.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #141414 45%, transparent)' }} />
        </div>
        <div style={{ maxWidth: '1620px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#ffac4d18', border: '1px solid #ffac4d40', color: '#ffac4d', padding: '6px 16px', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif", marginBottom: '32px' }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ffac4d' }} />
            Managed Service
          </div>
          <h1 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(56px, 9vw, 150px)', fontWeight: 700, color: '#fff', lineHeight: 1.0, letterSpacing: '-0.03em', marginBottom: '28px' }}>
            .Ready
          </h1>
          <p style={{ fontFamily: "'IvarDisplay', serif", fontSize: 'clamp(20px, 2.5vw, 36px)', fontWeight: 400, fontStyle: 'italic', color: 'rgba(255,255,255,0.75)', maxWidth: '700px', lineHeight: 1.4, marginBottom: '16px' }}>
            Complete human-aided ML processing.
          </p>
          <p style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(16px, 1.5vw, 20px)', color: 'rgba(255,255,255,0.6)', maxWidth: '620px', lineHeight: 1.65, marginBottom: '40px' }}>
            A full-service data-extraction solution for the property insurance marketplace. PING.Ready combines the power of ML with human expert review for guaranteed accuracy on every submission.
          </p>
          <Link href="/contact/" style={{ display: 'inline-block', backgroundColor: '#f32c01', color: '#fff', padding: '15px 36px', borderRadius: '100px', textDecoration: 'none', fontSize: '1rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif" }}>
            Book a Demo
          </Link>
        </div>
      </section>

      <section style={{ backgroundColor: '#fff0e7', padding: 'clamp(70px,8vw,120px) clamp(20px,4vw,80px)' }}>
        <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="ready-grid">
            <div>
              <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(32px, 4vw, 60px)', fontWeight: 700, color: '#171100', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '24px' }}>
                The best of ML and human intelligence
              </h2>
              <p style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '1.05rem', color: 'rgba(23,17,0,0.65)', lineHeight: 1.7, marginBottom: '24px' }}>
                PING.Ready is our white-glove managed service offering. You submit your documents — we handle everything else. Our team of insurance data specialists reviews every submission, ensuring 99.9% accuracy.
              </p>
              <p style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '1.05rem', color: 'rgba(23,17,0,0.65)', lineHeight: 1.7 }}>
                Perfect for high-value accounts, complex submissions, or any situation where you need guaranteed accuracy without building an internal team.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: 'Turnaround time', value: '< 4 hours', color: '#ffac4d' },
                { label: 'Data accuracy', value: '99.9%', color: '#4da0ff' },
                { label: 'Supported formats', value: 'All', color: '#c94dff' },
                { label: 'Human review', value: 'Every submission', color: '#f32c01' },
              ].map((stat, i) => (
                <div key={i} style={{ backgroundColor: '#fff', borderRadius: '14px', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '0.95rem', color: 'rgba(23,17,0,0.65)' }}>{stat.label}</span>
                  <span style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '1.05rem', fontWeight: 700, color: stat.color }}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .ready-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      <CTABanner label="Get started" heading="Guaranteed accuracy on every submission" text="Book a demo and learn how PING.Ready can handle your most demanding property submissions." />
    </>
  )
}
