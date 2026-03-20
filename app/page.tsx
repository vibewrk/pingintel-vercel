import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import Marquee from '@/components/Marquee'
import TestimonialSwiper from '@/components/TestimonialSwiper'
import PostThumbs from '@/components/PostThumbs'
import HomeProductCard from '@/components/HomeProductCard'

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
          backgroundColor: '#141414',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/images/daniel-lincoln-8LzUp51Ah3E-unsplash.jpg"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to bottom, rgba(20,20,20,0.25) 0%, rgba(20,20,20,0.55) 40%, rgba(20,20,20,0.95) 85%, #141414 100%)',
            }}
          />
        </div>

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            maxWidth: '1620px',
            margin: '0 auto',
            padding: 'calc(76px + 140px) clamp(20px,4vw,80px) clamp(80px,10vw,140px)',
          }}
        >
          <div
            style={{
              fontSize: '0.78rem',
              fontWeight: 500,
              color: '#f32c01',
              fontFamily: "'MacanPan', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '24px',
            }}
          >
            Dynamic Data Infrastructure
          </div>
          <h1
            style={{
              fontFamily: "'MacanPan', sans-serif",
              fontSize: 'clamp(56px, 9vw, 160px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              marginBottom: '36px',
              maxWidth: '1000px',
            }}
          >
            AI-Powered<br />
            Exposure<br />
            Technology
          </h1>
          <div style={{ maxWidth: '680px' }}>
            <p
              style={{
                fontFamily: "'MacanPan', sans-serif",
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.65,
                marginBottom: '40px',
              }}
            >
              We seamlessly deliver rich data directly into our clients&apos; workflows
              with speed, accuracy, and reliability. Ping is data superintelligence
              for the commercial property insurance industry.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link
                href="/contact/"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#f32c01',
                  color: '#fff',
                  padding: '16px 36px',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  fontFamily: "'MacanPan', sans-serif",
                }}
              >
                Book a Demo
              </Link>
              <Link
                href="/products/"
                style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  padding: '16px 36px',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  fontFamily: "'MacanPan', sans-serif",
                  border: '1px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee / Clients ── */}
      <Marquee />

      {/* ── Services Section ── */}
      <section
        style={{
          backgroundColor: '#fff0e7',
          padding: 'clamp(70px,8vw,130px) clamp(20px,4vw,80px)',
        }}
      >
        <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'start',
            }}
            className="services-grid"
          >
            <div>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'rgba(23,17,0,0.4)',
                  fontFamily: "'MacanPan', sans-serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginBottom: '16px',
                }}
              >
                What we do
              </div>
              <h2
                style={{
                  fontFamily: "'MacanPan', sans-serif",
                  fontSize: 'clamp(36px, 5vw, 80px)',
                  fontWeight: 700,
                  color: '#171100',
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  marginBottom: '48px',
                }}
              >
                From unstructured<br />data to dynamic<br />infrastructure
              </h2>

              {[
                {
                  num: '01',
                  color: '#c94dff',
                  heading: 'Automated property submissions',
                  text: 'Our solutions generate organized submissions for presentation and underwriting or bespoke submissions to suit your specific needs, taking the pain out of manual data entry and submission creation.',
                },
                {
                  num: '02',
                  color: '#4da0ff',
                  heading: 'CAT Modelling at your fingertips',
                  text: 'Ping provides sophisticated CAT import file generation to fully-automated cloud modeling, plus a growing suite of portfolio analytics tools that fit seamlessly into your existing workflow.',
                },
                {
                  num: '03',
                  color: '#ffac4d',
                  heading: 'Fill your data lake',
                  text: 'Every time you interact with Ping, your data gets securely stored in a Snowflake data warehouse. Your risk portfolio — always available, always secure, always queryable.',
                },
                {
                  num: '04',
                  color: '#f32c01',
                  heading: 'Advanced geospatial analysis',
                  text: "Deep dive into your risk assessments with Ping's immersive mapping experience. Watch your portfolio come alive on our dynamic geospatial platform.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  style={{
                    display: 'flex',
                    gap: '28px',
                    padding: '32px 0',
                    borderBottom: '1px solid rgba(23,17,0,0.1)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'MacanPan', sans-serif",
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: item.color,
                      flexShrink: 0,
                      paddingTop: '5px',
                      minWidth: '28px',
                    }}
                  >
                    {item.num}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'MacanPan', sans-serif",
                        fontSize: 'clamp(18px, 2vw, 26px)',
                        fontWeight: 600,
                        color: '#171100',
                        marginBottom: '12px',
                        lineHeight: 1.25,
                      }}
                    >
                      {item.heading}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'MacanPan', sans-serif",
                        fontSize: '0.95rem',
                        color: 'rgba(23,17,0,0.6)',
                        lineHeight: 1.65,
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: '40px' }}>
                <Link
                  href="/products/"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#171100',
                    color: '#fff',
                    padding: '14px 32px',
                    borderRadius: '100px',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    fontFamily: "'MacanPan', sans-serif",
                  }}
                >
                  View all products →
                </Link>
              </div>
            </div>

            {/* Right sticky image */}
            <div style={{ position: 'sticky', top: '100px' }} className="services-image-col">
              <img
                src="/images/aaron-gilmore-aQLdDgROIZQ-unsplash.jpg"
                alt="Professional working with data"
                style={{
                  width: '100%',
                  height: '70vh',
                  minHeight: '500px',
                  maxHeight: '700px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                }}
              />
              <div
                style={{
                  marginTop: '20px',
                  backgroundColor: '#fff',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    backgroundColor: '#f32c01',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#fff" />
                  </svg>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'MacanPan', sans-serif",
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      color: '#171100',
                    }}
                  >
                    10x Faster
                  </div>
                  <div
                    style={{
                      fontFamily: "'MacanPan', sans-serif",
                      fontSize: '0.85rem',
                      color: 'rgba(23,17,0,0.55)',
                    }}
                  >
                    SOV processing vs. manual workflows
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .services-grid { grid-template-columns: 1fr !important; }
            .services-image-col { display: none !important; }
          }
        `}</style>
      </section>

      {/* ── Product Cards Strip ── */}
      <section
        style={{
          backgroundColor: '#141414',
          padding: 'clamp(70px,8vw,120px) clamp(20px,4vw,80px)',
        }}
      >
        <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '48px',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <h2
              style={{
                fontFamily: "'MacanPan', sans-serif",
                fontSize: 'clamp(32px, 5vw, 72px)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              Our Products
            </h2>
            <Link
              href="/products/"
              style={{
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontFamily: "'MacanPan', sans-serif",
              }}
            >
              View all →
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
            }}
            className="products-grid"
          >
            {[
              {
                name: 'PING.Extraction',
                href: '/products/ping-extraction/',
                color: '#c94dff',
                desc: 'Extract and enrich critical data from SOVs, ACORDs, Loss Runs, and email bodies with AI precision.',
              },
              {
                name: 'PING.Maps',
                href: '/products/ping-maps/',
                color: '#4da0ff',
                desc: 'Bring insurance data to life with powerful mapping and rich geospatial visualizations.',
              },
              {
                name: 'PING.Ready',
                href: '/products/ping-ready/',
                color: '#ffac4d',
                desc: 'A full-service data-extraction solution for the property insurance marketplace.',
              },
              {
                name: 'PING.Data',
                href: '/products/ping-data/',
                color: '#c94dff',
                desc: 'Delve into an incredible array of property-relevant data sources across the web.',
              },
              {
                name: 'PING.Catastrophe',
                href: '/products/ping-cat/',
                color: '#4da0ff',
                desc: 'Rapidly model extracted submissions via industry-favored CAT tools.',
              },
              {
                name: 'PING.Location',
                href: '/products/ping-location/',
                color: '#ffac4d',
                desc: 'Perform single building lookups into physical aspects of your property portfolio.',
              },
            ].map((product) => (
              <HomeProductCard key={product.href} {...product} />
            ))}
          </div>

          <style>{`
            @media (max-width: 900px) {
              .products-grid { grid-template-columns: 1fr 1fr !important; }
            }
            @media (max-width: 600px) {
              .products-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <TestimonialSwiper />

      {/* ── Latest Posts ── */}
      <PostThumbs />

      {/* ── CTA Banner ── */}
      <CTABanner />
    </>
  )
}
