import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Smarter, Faster Systems: Transforming Underwriting from Submission to Decision',
  description: 'How automation and AI are reshaping the E&S commercial property underwriting workflow.',
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
            <span style={{ color: '#ffac4d', fontSize: '0.75rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif", textTransform: 'uppercase', letterSpacing: '0.06em' }}>Blog</span>
          </div>
          <h1 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(32px, 5vw, 72px)', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '24px' }}>
            Smarter, Faster Systems: Transforming Underwriting from Submission to Decision
          </h1>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem' }}>May 2025</span>
            <span style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.2)' }}>•</span>
            <span style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem' }}>Ping Intel</span>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 80px)' }}>
        <img src="/images/lance-anderson-uevmkfCH98Q-unsplash.jpg" alt="Modern underwriting technology" style={{ width: '100%', borderRadius: '16px', marginBottom: '60px' }} />
      </div>

      <section style={{ backgroundColor: '#141414', padding: '0 clamp(20px, 4vw, 80px) clamp(70px, 8vw, 120px)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(16px, 1.4vw, 18px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '24px', fontSize: 'clamp(18px, 2vw, 22px)', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
            The E&S commercial property market is facing a productivity crisis. The gap between submission volume and underwriting capacity is widening. The answer isn&apos;t more headcount — it&apos;s smarter systems.
          </p>
          <p style={{ marginBottom: '24px' }}>
            Across the industry, underwriting teams are spending 40-60% of their time on non-underwriting tasks: reformatting SOVs, chasing down missing data, manually entering locations into modeling tools, and building submission packages from scratch. This is a structural problem, and AI-powered data infrastructure is the solution.
          </p>
          <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 700, color: '#fff', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.015em' }}>
            The Submission Problem
          </h2>
          <p style={{ marginBottom: '24px' }}>
            Every submission starts with data — usually an SOV in some form. That SOV arrives in whatever format the insured or their broker chose: a custom Excel template, a PDF export, an ACORD form, sometimes just a list of addresses in an email. Each one is different. Each one requires manual interpretation and normalization before the underwriting process can begin.
          </p>
          <p style={{ marginBottom: '24px' }}>
            This isn&apos;t a minor inconvenience. For a team processing 500 submissions per month, even 30 minutes of data prep per submission represents 250 hours of lost underwriting time every month. That&apos;s the equivalent of six full-time employees doing nothing but data entry.
          </p>
          <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 700, color: '#fff', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.015em' }}>
            Automation as a Competitive Advantage
          </h2>
          <p style={{ marginBottom: '24px' }}>
            The firms that are winning in today&apos;s E&S market are not simply those with the best underwriters. They are the ones who have automated the administrative layers of the underwriting process, freeing their underwriters to focus on risk judgment rather than data management.
          </p>
          <p style={{ marginBottom: '24px' }}>
            PING.Extraction automates submission intake end-to-end. SOVs in any format are processed, normalized, geocoded, and enriched automatically. The output is a structured, validated dataset ready for underwriting analysis, CAT modeling, and portfolio management — in minutes, not hours.
          </p>
          <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 700, color: '#fff', marginBottom: '16px', marginTop: '48px', letterSpacing: '-0.015em' }}>
            The Infrastructure Opportunity
          </h2>
          <p style={{ marginBottom: '24px' }}>
            The real opportunity is not just in individual workflow automation — it is in building data infrastructure that compounds over time. Every submission processed by Ping is stored in a structured data warehouse. Every location geocoded, every hazard score computed, every coverage term normalized adds to a growing corpus of proprietary risk data.
          </p>
          <p style={{ marginBottom: '0' }}>
            Teams that build this infrastructure today will have a meaningful data advantage in 24 months. The question is not whether to invest in data automation — it is how fast to move.
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

      <CTABanner label="Transform your workflow" heading="Ready to automate your underwriting process?" text="Book a demo and see how Ping can transform your submission-to-decision pipeline." />
    </>
  )
}
