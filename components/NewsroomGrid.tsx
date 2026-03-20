'use client'

import Link from 'next/link'

const articles = [
  {
    id: 1,
    title: 'Eirion Risk Underwriters selects Ping Intel for Property Underwriting',
    category: 'News',
    date: 'March 12, 2026',
    excerpt: 'Ping Intel announces a new partnership with Eirion Risk Underwriters to power their property underwriting workflow.',
    href: '/eirion-risk-underwriters-selects-ping-intel-for-property-underwriting/',
    image: 'image-2889.jpg',
    external: false,
  },
  {
    id: 2,
    title: 'Ping Intel and Property Guardian Partner to Deliver Best-in-Class Wildfire Data to Commercial Insurers',
    category: 'Press Release',
    date: 'November 17, 2025',
    excerpt: 'Ping Intel and Property Guardian announce a strategic partnership to provide unparalleled wildfire risk data to the commercial insurance market.',
    href: '/newsroom/ping-intel-and-property-guardian-partner-to-deliver-best-in-class-wildfire-data-to-commercial-insurers/',
    image: null,
    external: false,
  },
  {
    id: 3,
    title: 'PING.Data: Fast-Tracking SOVs into Your Underwriting Ecosystem',
    category: 'Blog',
    date: 'October 2025',
    excerpt: 'How PING.Data accelerates the journey from raw SOV to actionable underwriting data, cutting days of manual work to minutes.',
    href: '/newsroom/ping-data-fast-tracking-sovs-into-your-underwriting-ecosystem/',
    image: 'ping-data@2x.jpg',
    external: false,
  },
  {
    id: 4,
    title: 'A New Era in Geospatial Intelligence',
    category: 'Blog',
    date: 'July 18, 2025',
    excerpt: 'How advanced geospatial analysis is transforming commercial property risk assessment.',
    href: '/a-new-era-in-geospatial-intelligence/',
    image: 'Group-1321316853-1.png',
    external: false,
  },
  {
    id: 5,
    title: 'Ping Unveils New Ping.Maps; A Platform for Advanced Property Exposure Insights',
    category: 'News',
    date: 'June 16, 2025',
    excerpt: 'Ping announces the launch of Ping.Maps, a next-generation geospatial platform for commercial property insurance.',
    href: '/ping-unveils-new-ping-maps-a-platform-for-advanced-property-exposure-insights/',
    image: 'Group-1321316853-1.png',
    external: false,
  },
  {
    id: 6,
    title: 'Smarter, Faster Systems: Transforming Underwriting from Submission to Decision',
    category: 'Blog',
    date: 'May 2025',
    excerpt: 'How automation and AI are reshaping the E&S commercial property underwriting workflow.',
    href: '/smarter-faster-systems-transforming-underwriting-from-submission-to-decision/',
    image: 'lance-anderson-uevmkfCH98Q-unsplash.jpg',
    external: false,
  },
]

const categoryColors: Record<string, string> = {
  News: '#4da0ff',
  Blog: '#ffac4d',
  'Press Release': '#c94dff',
}

export default function NewsroomGrid() {
  return (
    <section style={{ backgroundColor: '#141414', padding: 'clamp(60px,6vw,100px) clamp(20px,4vw,80px)' }}>
      <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
          {articles.map((article) => (
            <Link
              key={article.id}
              href={article.href}
              target={article.external ? '_blank' : '_self'}
              rel={article.external ? 'noopener noreferrer' : undefined}
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#191919',
                borderRadius: '16px',
                overflow: 'hidden',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'border-color 0.25s, transform 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.transform = 'none'
              }}
            >
              <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                {article.image ? (
                  <img src={`/images/${article.image}`} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: "'MacanStencilPan', sans-serif", fontSize: '3rem', fontWeight: 700, color: 'rgba(255,255,255,0.06)' }}>PING</span>
                  </div>
                )}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(25,25,25,0.6) 0%, transparent 60%)' }} />
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.72rem', color: categoryColors[article.category] || 'rgba(255,255,255,0.4)', fontFamily: "'MacanPan', sans-serif", textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>
                    {article.category}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', fontFamily: "'MacanPan', sans-serif" }}>
                    {article.date}
                  </span>
                </div>
                <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '1rem', fontWeight: 600, color: '#fff', lineHeight: 1.45, flex: 1, marginBottom: '12px' }}>
                  {article.title}
                </h2>
                <p style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {article.excerpt}
                </p>
                <span style={{ color: '#f32c01', fontSize: '0.85rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif" }}>
                  {article.external ? 'Read on BusinessWire →' : 'Read more →'}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
