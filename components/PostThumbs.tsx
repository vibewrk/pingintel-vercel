'use client'

import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: 'Eirion Risk Underwriters selects Ping Intel for Property Underwriting',
    category: 'News',
    date: '03.12.2026',
    href: '/eirion-risk-underwriters-selects-ping-intel-for-property-underwriting/',
    external: false,
    image: 'image-2889.jpg',
  },
  {
    id: 2,
    title:
      'Ping Intel and Property Guardian Partner to Deliver Best-in-Class Wildfire Data to Commercial Insurers',
    category: 'Press Release',
    date: '11.17.2025',
    href: 'https://www.businesswire.com/news/home/20251117823574/en/Ping-Intel-and-Property-Guardian-Partner-to-Deliver-Best-in-Class-Wildfire-Data-to-Commercial-Insurers',
    external: true,
    image: null,
  },
  {
    id: 3,
    title: 'A New Era in Geospatial Intelligence',
    category: 'Blog',
    date: '07.18.2025',
    href: '/a-new-era-in-geospatial-intelligence/',
    external: false,
    image: 'Group-1321316853-1.png',
  },
  {
    id: 4,
    title:
      'Ping Unveils New Ping.Maps; A Platform for Advanced Property Exposure Insights',
    category: 'News',
    date: '06.16.2025',
    href: '/ping-unveils-new-ping-maps-a-platform-for-advanced-property-exposure-insights/',
    external: false,
    image: 'Group-1321316853-1.png',
  },
  {
    id: 5,
    title:
      'Smarter, Faster Systems: Transforming Underwriting from Submission to Decision',
    category: 'Blog',
    date: '05.2025',
    href: '/smarter-faster-systems-transforming-underwriting-from-submission-to-decision/',
    external: false,
    image: 'lance-anderson-uevmkfCH98Q-unsplash.jpg',
  },
]

const categoryColors: Record<string, string> = {
  News: '#4da0ff',
  Blog: '#ffac4d',
  'Press Release': '#c94dff',
  'Blog Sector': '#ffac4d',
}

export default function PostThumbs() {
  return (
    <section
      style={{
        backgroundColor: '#141414',
        padding: 'clamp(70px, 8vw, 110px) clamp(20px, 4vw, 80px)',
      }}
    >
      <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '56px',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '0.78rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.4)',
                fontFamily: "'MacanPan', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '12px',
              }}
            >
              From the newsroom
            </div>
            <h2
              style={{
                fontFamily: "'MacanStencilPan', sans-serif",
                fontSize: 'clamp(48px, 10vw, 140px)',
                fontWeight: 700,
                color: '#ffac4d',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              Latest
            </h2>
          </div>
          <Link
            href="/newsroom/"
            style={{
              backgroundColor: 'transparent',
              color: '#fff',
              padding: '12px 28px',
              borderRadius: '100px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 600,
              fontFamily: "'MacanPan', sans-serif",
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'border-color 0.2s, background 0.2s',
              alignSelf: 'flex-end',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            View all articles →
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {posts.map((post) => (
            <Link
              key={post.id}
              href={post.href}
              target={post.external ? '_blank' : '_self'}
              rel={post.external ? 'noopener noreferrer' : undefined}
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
              {/* Thumbnail */}
              <div
                style={{
                  height: '200px',
                  overflow: 'hidden',
                  backgroundColor: '#222',
                  position: 'relative',
                }}
              >
                {post.image ? (
                  <img
                    src={`/images/${post.image}`}
                    alt={post.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'MacanStencilPan', sans-serif",
                        fontSize: '3rem',
                        fontWeight: 700,
                        color: 'rgba(255,255,255,0.08)',
                      }}
                    >
                      PING
                    </span>
                  </div>
                )}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(25,25,25,0.5) 0%, transparent 60%)',
                  }}
                />
              </div>

              {/* Content */}
              <div
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '14px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.72rem',
                      color: categoryColors[post.category] || 'rgba(255,255,255,0.4)',
                      fontFamily: "'MacanPan', sans-serif",
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      fontWeight: 600,
                    }}
                  >
                    {post.category}
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      color: 'rgba(255,255,255,0.35)',
                      fontFamily: "'MacanPan', sans-serif",
                    }}
                  >
                    {post.date}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'MacanPan', sans-serif",
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#fff',
                    lineHeight: 1.45,
                    flex: 1,
                    marginBottom: '20px',
                  }}
                >
                  {post.title}
                </h3>
                <div>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#f32c01',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      fontFamily: "'MacanPan', sans-serif",
                    }}
                  >
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
