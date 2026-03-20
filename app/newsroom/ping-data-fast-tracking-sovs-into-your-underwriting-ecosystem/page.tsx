import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'PING.Data: Fast-Tracking SOVs into Your Underwriting Ecosystem',
  description:
    'How PING.Data accelerates the journey from raw SOV to actionable underwriting data, cutting days of manual work to minutes.',
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
            <span style={{ color: '#ffac4d', fontSize: '0.75rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif", textTransform: 'uppercase', letterSpacing: '0.06em' }}>Blog</span>
          </div>
          <h1
            style={{
              fontFamily: "'MacanPan', sans-serif",
              fontSize: 'clamp(36px, 5vw, 80px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
            }}
          >
            PING.Data: Fast-Tracking SOVs into Your Underwriting Ecosystem
          </h1>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem' }}>October 2025</span>
            <span style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.2)', fontSize: '0.88rem' }}>•</span>
            <span style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem' }}>Ping Intel</span>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 80px)' }}>
        <img
          src="/images/ping-data@2x.jpg"
          alt="PING.Data platform"
          style={{ width: '100%', borderRadius: '16px', marginBottom: '60px' }}
        />
      </div>

      {/* Article Body */}
      <section style={{ backgroundColor: '#141414', padding: '0 clamp(20px, 4vw, 80px) clamp(70px, 8vw, 120px)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div
            style={{
              fontFamily: "'MacanPan', sans-serif",
              fontSize: 'clamp(16px, 1.4vw, 18px)',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.8,
            }}
          >
            <p style={{ marginBottom: '24px', fontSize: 'clamp(18px, 2vw, 22px)', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
              For most commercial property insurers and brokers, the Schedule of Values — the SOV — sits at the center of every submission. It is also the single biggest source of friction in the underwriting process.
            </p>

            <p style={{ marginBottom: '24px' }}>
              SOVs arrive in every format imaginable: dense Excel files with inconsistent column headers, PDFs with scanned tables, email attachments with property schedules buried in dense paragraphs. Before any meaningful underwriting can happen, someone has to make sense of it all. That work — normalizing, geocoding, validating, enriching — has historically fallen to analysts and underwriters who have better things to do.
            </p>

            <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 700, color: '#fff', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.015em' }}>
              The SOV Problem is a Data Infrastructure Problem
            </h2>

            <p style={{ marginBottom: '24px' }}>
              The underlying challenge is not that SOVs are complicated — it is that every SOV is different. Column names vary. Address formats vary. Construction class conventions vary by carrier, by broker, by vintage. The data is rarely wrong, but it is rarely consistent.
            </p>

            <p style={{ marginBottom: '24px' }}>
              Traditional approaches — manual data entry, spreadsheet macros, offshore processing teams — solve the consistency problem by throwing time and labor at it. PING.Data takes a different approach: it treats the SOV as an input to an intelligent data pipeline, not a document to be manually transcribed.
            </p>

            <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 700, color: '#fff', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.015em' }}>
              What PING.Data Actually Does
            </h2>

            <p style={{ marginBottom: '24px' }}>
              PING.Data is the data enrichment and delivery layer of the Ping platform. Once PING.Extraction has parsed and normalized the raw SOV, PING.Data takes that structured output and runs it through a comprehensive enrichment pipeline.
            </p>

            <p style={{ marginBottom: '24px' }}>
              Every location in the submission is geocoded to the highest available precision — rooftop, parcel, or street level — with confidence scores attached. Property attributes are validated against authoritative sources: tax records, building permit databases, satellite imagery. Missing fields are inferred from comparable properties. Hazard scores — wind, flood, earthquake, wildfire — are appended for every location.
            </p>

            <p style={{ marginBottom: '24px' }}>
              The result is a clean, enriched, validated dataset that is ready to flow directly into your underwriting system, your CAT model, or your data warehouse — without anyone touching a spreadsheet.
            </p>

            <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 700, color: '#fff', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.015em' }}>
              Speed That Changes the Workflow
            </h2>

            <p style={{ marginBottom: '24px' }}>
              The impact of PING.Data is not just accuracy — it is speed. Submissions that previously required hours of analyst time to prepare are ready in minutes. That speed compounds across the portfolio: more submissions processed per day, faster turnaround to brokers, more time for underwriters to focus on judgment rather than data preparation.
            </p>

            <p style={{ marginBottom: '24px' }}>
              For brokers, the benefit is equally significant. A submission package that arrives clean, geocoded, and enriched moves through the market faster. Underwriters who receive high-quality data are more likely to engage, and more likely to quote competitively.
            </p>

            <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 700, color: '#fff', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.015em' }}>
              Integration Without Disruption
            </h2>

            <p style={{ marginBottom: '24px' }}>
              PING.Data is designed to integrate with the systems teams already use. Whether your team works in a proprietary underwriting platform, a Snowflake data warehouse, or a combination of tools, PING.Data delivers enriched data in the format your systems expect.
            </p>

            <p style={{ marginBottom: '0' }}>
              The goal is not to replace your existing workflow — it is to make the data that flows through it dramatically better, faster, and more reliable. That is the Ping promise: not disruption, but data superintelligence built seamlessly into the way you already work.
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

      <CTABanner label="See it in action" heading="Ready to transform your SOV workflow?" text="Book a demo and see how PING.Data can accelerate your underwriting ecosystem." />
    </>
  )
}
