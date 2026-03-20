'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#141414',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: 'clamp(60px,8vw,120px) clamp(20px,4vw,80px) 40px',
      }}
    >
      <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            gap: '40px',
            alignItems: 'start',
            marginBottom: '60px',
          }}
          className="footer-top"
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                fontFamily: "'MacanStencilPan', sans-serif",
                fontSize: '2rem',
                fontWeight: 700,
                color: '#fff',
                textDecoration: 'none',
                letterSpacing: '-0.02em',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              PING
            </Link>
            <p
              style={{
                color: 'rgba(255,255,255,0.35)',
                fontSize: '0.85rem',
                fontFamily: "'MacanPan', sans-serif",
                lineHeight: 1.6,
              }}
            >
              1111 Lincoln Rd<br />
              Miami Beach, FL 33139
            </p>
            <a
              href="mailto:info@pingintel.com"
              style={{
                color: 'rgba(255,255,255,0.35)',
                fontSize: '0.85rem',
                fontFamily: "'MacanPan', sans-serif",
                textDecoration: 'none',
                display: 'block',
                marginTop: '6px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
            >
              info@pingintel.com
            </a>
          </div>

          {/* Nav columns */}
          <div
            style={{
              display: 'flex',
              gap: '4rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.3)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontFamily: "'MacanPan', sans-serif",
                  marginBottom: '16px',
                }}
              >
                Products
              </div>
              {[
                { label: 'PING.Extraction', href: '/products/ping-extraction/' },
                { label: 'PING.Maps', href: '/products/ping-maps/' },
                { label: 'PING.Ready', href: '/products/ping-ready/' },
                { label: 'PING.Data', href: '/products/ping-data/' },
                { label: 'PING.Catastrophe', href: '/products/ping-cat/' },
                { label: 'PING.Location', href: '/products/ping-location/' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    fontFamily: "'MacanPan', sans-serif",
                    marginBottom: '10px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div>
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.3)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontFamily: "'MacanPan', sans-serif",
                  marginBottom: '16px',
                }}
              >
                Solutions
              </div>
              {[
                { label: 'Insurance Brokers', href: '/solutions/insurance-brokers/' },
                { label: 'Carriers & MGAs', href: '/solutions/solutions-carrier/' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    fontFamily: "'MacanPan', sans-serif",
                    marginBottom: '10px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div>
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.3)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontFamily: "'MacanPan', sans-serif",
                  marginBottom: '16px',
                }}
              >
                Company
              </div>
              {[
                { label: 'Newsroom', href: '/newsroom/' },
                { label: 'Contact', href: '/contact/' },
                { label: 'Privacy Policy', href: '/privacy-policy/' },
                { label: 'Subprocessors', href: '/subprocessors/' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    fontFamily: "'MacanPan', sans-serif",
                    marginBottom: '10px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'right' }}>
            <Link
              href="/contact/"
              style={{
                display: 'inline-block',
                backgroundColor: '#f32c01',
                color: '#fff',
                padding: '12px 28px',
                borderRadius: '100px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 600,
                fontFamily: "'MacanPan', sans-serif",
                marginBottom: '20px',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d30000')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f32c01')}
            >
              Book a Demo
            </Link>
            <div>
              <a
                href="https://www.linkedin.com/company/ping-data-intelligence"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontFamily: "'MacanPan', sans-serif",
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <span
            style={{
              color: 'rgba(255,255,255,0.3)',
              fontSize: '0.82rem',
              fontFamily: "'MacanPan', sans-serif",
            }}
          >
            © 2026 Ping. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <Link
              href="/privacy-policy/"
              style={{
                color: 'rgba(255,255,255,0.3)',
                fontSize: '0.82rem',
                fontFamily: "'MacanPan', sans-serif",
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
            >
              Privacy Policy
            </Link>
            <Link
              href="/subprocessors/"
              style={{
                color: 'rgba(255,255,255,0.3)',
                fontSize: '0.82rem',
                fontFamily: "'MacanPan', sans-serif",
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
            >
              Subprocessors
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-top {
            grid-template-columns: 1fr !important;
          }
          .footer-top > div:last-child {
            text-align: left !important;
          }
        }
      `}</style>

      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        alt=""
        src="https://px.ads.linkedin.com/collect/?pid=8532818&fmt=gif"
      />
    </footer>
  )
}
