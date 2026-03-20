import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'PING.Catastrophe',
  description:
    'Transform your CAT modeling capabilities. Rapidly model Ping-extracted submissions via industry-favored CAT tools.',
}

export default function PingCatPage() {
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
          <img src="/images/pexels-pixabay-76969.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #141414 45%, transparent)' }} />
        </div>
        <div style={{ maxWidth: '1620px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#4da0ff18', border: '1px solid #4da0ff40', color: '#4da0ff', padding: '6px 16px', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif", marginBottom: '32px' }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4da0ff' }} />
            CAT Modeling
          </div>
          <h1 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(56px, 9vw, 150px)', fontWeight: 700, color: '#fff', lineHeight: 1.0, letterSpacing: '-0.03em', marginBottom: '28px' }}>
            .Catastrophe
          </h1>
          <p style={{ fontFamily: "'IvarDisplay', serif", fontSize: 'clamp(20px, 2.5vw, 36px)', fontWeight: 400, fontStyle: 'italic', color: 'rgba(255,255,255,0.75)', maxWidth: '700px', lineHeight: 1.4, marginBottom: '16px' }}>
            Transform your CAT modeling capabilities.
          </p>
          <p style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(16px, 1.5vw, 20px)', color: 'rgba(255,255,255,0.6)', maxWidth: '620px', lineHeight: 1.65, marginBottom: '40px' }}>
            Rapidly model PING.Extracted submissions via industry-favored CAT tools. Specify flexible policy terms, generate acc/loc CSV import files, or directly trigger cloud-based modeling — without human intervention.
          </p>
          <Link href="/contact/" style={{ display: 'inline-block', backgroundColor: '#f32c01', color: '#fff', padding: '15px 36px', borderRadius: '100px', textDecoration: 'none', fontSize: '1rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif" }}>
            Book a Demo
          </Link>
        </div>
      </section>

      <section style={{ backgroundColor: '#141414', padding: 'clamp(70px,8vw,120px) clamp(20px,4vw,80px)' }}>
        <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(32px, 5vw, 72px)', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '56px', maxWidth: '700px' }}>
            CAT modeling, automated end-to-end
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }} className="cat-grid">
            {[
              { color: '#4da0ff', title: 'Multi-model support', desc: 'Supports AIR, RMS, and other industry-leading CAT models via direct API integration or standardized import file generation.' },
              { color: '#c94dff', title: 'Flexible policy terms', desc: 'Specify policy terms, deductibles, limits, and conditions per location or portfolio-wide with granular control.' },
              { color: '#ffac4d', title: 'Cloud-based modeling', desc: 'Trigger cloud modeling jobs and retrieve results automatically. No manual file management, no waiting around.' },
              { color: '#4da0ff', title: 'Portfolio analytics', desc: 'Built-in analytics tools let you slice and dice results by geography, construction class, occupancy, and more.' },
              { color: '#c94dff', title: 'ELT/OEP curves', desc: 'Generate exceedance probability curves, expected loss tables, and standard reporting outputs automatically.' },
              { color: '#ffac4d', title: 'Submission integration', desc: 'Direct pipeline from PING.Extraction to PING.Catastrophe — structured data flows straight into your CAT model.' },
            ].map((feature, i) => (
              <div key={i} style={{ backgroundColor: '#191919', borderRadius: '16px', padding: '28px', border: `1px solid ${feature.color}20` }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: feature.color, marginBottom: '16px' }} />
                <h3 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>{feature.title}</h3>
                <p style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 600px) { .cat-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      <CTABanner label="Get started" heading="Automate your CAT modeling pipeline" text="Book a demo and see how PING.Catastrophe eliminates manual CAT modeling bottlenecks." />
    </>
  )
}
