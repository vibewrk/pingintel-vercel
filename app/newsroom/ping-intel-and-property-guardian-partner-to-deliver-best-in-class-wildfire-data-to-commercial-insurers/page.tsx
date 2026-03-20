import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Ping Intel and Property Guardian Partner to Deliver Best-in-Class Wildfire Data to Commercial Insurers',
  description:
    'Ping Intel and Property Guardian announce a strategic partnership to provide unparalleled wildfire risk data to the commercial insurance market.',
}

export default function ArticlePage() {
  return (
    <>
      {/* Article Hero */}
      <section
        style={{
          backgroundColor: '#141414',
          paddingTop: 'calc(76px + clamp(60px, 6vw, 100px))',
          paddingBottom: 'clamp(40px, 4vw, 60px)',
          paddingLeft: 'clamp(20px, 4vw, 80px)',
          paddingRight: 'clamp(20px, 4vw, 80px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
            <Link href="/newsroom/" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', fontFamily: "'MacanPan', sans-serif", textDecoration: 'none' }}>
              Newsroom
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.85rem' }}>→</span>
            <span style={{ color: '#c94dff', fontSize: '0.75rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif", textTransform: 'uppercase', letterSpacing: '0.06em' }}>Press Release</span>
          </div>
          <h1
            style={{
              fontFamily: "'MacanPan', sans-serif",
              fontSize: 'clamp(32px, 4.5vw, 72px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
            }}
          >
            Ping Intel and Property Guardian Partner to Deliver Best-in-Class Wildfire Data to Commercial Insurers
          </h1>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem' }}>November 17, 2025</span>
            <span style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.2)', fontSize: '0.88rem' }}>•</span>
            <span style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem' }}>Press Release</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section style={{ backgroundColor: '#141414', padding: 'clamp(40px, 4vw, 60px) clamp(20px, 4vw, 80px) clamp(70px, 8vw, 120px)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div
            style={{
              fontFamily: "'MacanPan', sans-serif",
              fontSize: 'clamp(16px, 1.4vw, 18px)',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.8,
            }}
          >
            <p style={{ marginBottom: '24px', fontSize: 'clamp(16px, 1.5vw, 19px)', color: 'rgba(255,255,255,0.6)', fontStyle: 'italic' }}>
              Miami Beach, FL — November 17, 2025
            </p>

            <p style={{ marginBottom: '24px', fontSize: 'clamp(18px, 2vw, 22px)', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
              Ping Intel, the leading AI-powered data infrastructure platform for commercial property insurance, today announced a strategic partnership with Property Guardian, a pioneer in wildfire risk intelligence, to deliver best-in-class wildfire data directly into underwriting workflows.
            </p>

            <p style={{ marginBottom: '24px' }}>
              The partnership combines Ping Intel&apos;s industry-leading data extraction and enrichment capabilities with Property Guardian&apos;s proprietary wildfire risk models, creating an integrated solution that gives commercial insurers and MGAs unprecedented insight into wildfire exposure at the individual property level.
            </p>

            <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 700, color: '#fff', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.015em' }}>
              Addressing the Wildfire Data Gap
            </h2>

            <p style={{ marginBottom: '24px' }}>
              Wildfire has emerged as one of the most significant and rapidly evolving perils in commercial property insurance. Events in California, Texas, and the Mountain West have demonstrated that traditional hazard scoring models are insufficient for the nuanced, parcel-level risk assessment that modern underwriting demands.
            </p>

            <p style={{ marginBottom: '24px' }}>
              Property Guardian&apos;s wildfire risk platform provides granular, real-time wildfire risk scores derived from satellite imagery, fuel load modeling, topographic analysis, and historical fire behavior data. These scores go far beyond simple proximity-to-fire-history metrics — they reflect the actual conditions that drive wildfire risk at any given location on any given day.
            </p>

            <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 700, color: '#fff', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.015em' }}>
              Seamless Integration into the Ping Platform
            </h2>

            <p style={{ marginBottom: '24px' }}>
              Through the partnership, Property Guardian&apos;s wildfire risk scores are now available as an enrichment layer within PING.Data and PING.Extraction. For every location processed through the Ping platform, underwriters and brokers can access Property Guardian wildfire risk scores alongside geocodes, construction attributes, and other hazard data — all in a single, seamless workflow.
            </p>

            <p style={{ marginBottom: '24px' }}>
              There is no additional integration work required. Clients who already use Ping for SOV processing will automatically have access to Property Guardian wildfire data on every submission.
            </p>

            <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 700, color: '#fff', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.015em' }}>
              Quotes from Leadership
            </h2>

            <p style={{ marginBottom: '24px' }}>
              &ldquo;Wildfire is the defining challenge of our era in commercial property insurance,&rdquo; said a spokesperson from Ping Intel. &ldquo;Our clients have been asking for better wildfire data for years. By partnering with Property Guardian — the best wildfire risk intelligence provider in the market — we can deliver that data exactly where and when it is needed: inside the underwriting workflow, attached to every location.&rdquo;
            </p>

            <p style={{ marginBottom: '24px' }}>
              &ldquo;Property Guardian was built to solve the wildfire data problem,&rdquo; said a Property Guardian representative. &ldquo;Partnering with Ping Intel allows us to put our data in the hands of every commercial property underwriter and broker who uses the Ping platform — which is exactly where it needs to be to make a difference.&rdquo;
            </p>

            <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 700, color: '#fff', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.015em' }}>
              Availability
            </h2>

            <p style={{ marginBottom: '0' }}>
              Property Guardian wildfire risk scores are available to all Ping Intel clients effective immediately. Contact Ping Intel at info@pingintel.com to learn more about enabling wildfire enrichment for your organization. The full press release is also available on{' '}
              <a
                href="https://www.businesswire.com/news/home/20251117823574/en/Ping-Intel-and-Property-Guardian-Partner-to-Deliver-Best-in-Class-Wildfire-Data-to-Commercial-Insurers"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#f32c01', textDecoration: 'none' }}
              >
                BusinessWire ↗
              </a>.
            </p>
          </div>

          <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/products/ping-data/" style={{ display: 'inline-block', backgroundColor: '#f32c01', color: '#fff', padding: '12px 28px', borderRadius: '100px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif" }}>
              Explore PING.Data
            </Link>
            <Link href="/newsroom/" style={{ display: 'inline-block', backgroundColor: 'transparent', color: 'rgba(255,255,255,0.7)', padding: '12px 28px', borderRadius: '100px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, fontFamily: "'MacanPan', sans-serif", border: '1px solid rgba(255,255,255,0.15)' }}>
              ← Back to Newsroom
            </Link>
          </div>
        </div>
      </section>

      <CTABanner label="Learn more" heading="Want best-in-class wildfire data?" text="Book a demo to see how Ping Intel and Property Guardian deliver wildfire intelligence into your underwriting workflow." />
    </>
  )
}
