import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import HeroSimple from '@/components/HeroSimple'

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Tailored data solutions for insurance brokers, carriers, MGAs, and reinsurers.',
}

export default function SolutionsPage() {
  return (
    <>
      <HeroSimple
        label="Solutions"
        heading="Tailored Data Solutions"
        subheading="Whether you are a broker managing hundreds of submissions or a carrier modeling your portfolio, Ping has a solution built for your workflow."
      />

      <section style={{ backgroundColor: '#141414', padding: 'clamp(70px,8vw,120px) clamp(20px,4vw,80px)' }}>
        <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="solutions-grid">
            {[
              {
                title: 'Insurance Brokers',
                href: '/solutions/insurance-brokers/',
                color: '#c94dff',
                image: 'aaron-gilmore-aQLdDgROIZQ-unsplash.jpg',
                desc: 'Ping helps brokers automate the most time-consuming parts of the submission process — from SOV cleansing to geocoding to market presentation creation. Spend more time with clients, less time fighting spreadsheets.',
                features: ['SOV normalization', 'Automated submissions', 'Market-ready presentations', 'CAT modeling', 'Portfolio analytics'],
              },
              {
                title: 'Carriers & MGAs',
                href: '/solutions/solutions-carrier/',
                color: '#ffac4d',
                image: 'pexels-peter-olexa-2214257-3875821.jpg',
                desc: 'For carriers and MGAs, Ping delivers structured, enriched data straight into your underwriting workflow. Eliminate manual data entry, reduce E&O risk, and speed up time-to-quote across your entire book.',
                features: ['Automated intake', 'Data enrichment', 'CAT model integration', 'Portfolio aggregation', 'API access'],
              },
            ].map((solution) => (
              <div
                key={solution.href}
                style={{
                  backgroundColor: '#191919',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: `1px solid ${solution.color}20`,
                }}
              >
                <div style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
                  <img src={`/images/${solution.image}`} alt={solution.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(25,25,25,0.9) 0%, transparent 50%)' }} />
                </div>
                <div style={{ padding: '40px' }}>
                  <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: 700, color: '#fff', marginBottom: '20px', letterSpacing: '-0.015em' }}>
                    {solution.title}
                  </h2>
                  <p style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '28px' }}>
                    {solution.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                    {solution.features.map((feature, i) => (
                      <span key={i} style={{ backgroundColor: solution.color + '15', border: `1px solid ${solution.color}30`, color: solution.color, padding: '6px 14px', borderRadius: '100px', fontSize: '0.82rem', fontWeight: 500, fontFamily: "'MacanPan', sans-serif" }}>
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link href={solution.href} style={{ display: 'inline-block', backgroundColor: solution.color, color: '#fff', padding: '12px 28px', borderRadius: '100px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif" }}>
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 768px) { .solutions-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
