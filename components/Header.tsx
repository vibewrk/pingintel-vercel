'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const products = [
  { name: 'PING.Extraction', href: '/products/ping-extraction/', color: '#c94dff' },
  { name: 'PING.Maps', href: '/products/ping-maps/', color: '#4da0ff' },
  { name: 'PING.Ready', href: '/products/ping-ready/', color: '#ffac4d' },
  { name: 'PING.Data', href: '/products/ping-data/', color: '#c94dff' },
  { name: 'PING.Catastrophe', href: '/products/ping-cat/', color: '#4da0ff' },
  { name: 'PING.Location', href: '/products/ping-location/', color: '#ffac4d' },
]

const solutions = [
  { name: 'Insurance Brokers', href: '/solutions/insurance-brokers/', description: 'Brokers', color: '#c94dff' },
  { name: 'Carriers', href: '/solutions/solutions-carrier/', description: 'Carriers/MGAs/ReInsurers', color: '#ffac4d' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(20,20,20,0.97)' : 'rgba(20,20,20,0.7)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1620px',
          margin: '0 auto',
          padding: '0 clamp(20px, 4vw, 80px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "'MacanStencilPan', sans-serif",
            fontSize: '1.6rem',
            fontWeight: 700,
            color: '#ffffff',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
            flexShrink: 0,
          }}
        >
          PING
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.5rem',
          }}
          className="header-desktop-nav"
        >
          <Link
            href="/"
            style={{
              color: pathname === '/' ? '#f32c01' : 'rgba(255,255,255,0.75)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              fontFamily: "'MacanPan', sans-serif",
              transition: 'color 0.2s',
            }}
          >
            Home
          </Link>

          {/* Products Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setActiveDropdown('products')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/products/"
              style={{
                color: pathname.startsWith('/products') ? '#f32c01' : 'rgba(255,255,255,0.75)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                fontFamily: "'MacanPan', sans-serif",
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'color 0.2s',
              }}
            >
              Products
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.6 }}>
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            {activeDropdown === 'products' && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 12px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#1c1c1c',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '14px',
                  padding: '8px',
                  minWidth: '230px',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    padding: '10px 14px 14px',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    marginBottom: '6px',
                  }}
                >
                  <Link
                    href="/products/"
                    style={{
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                      fontFamily: "'MacanPan', sans-serif",
                    }}
                  >
                    All Products →
                  </Link>
                </div>
                {products.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '0.88rem',
                      fontFamily: "'MacanPan', sans-serif",
                      transition: 'background 0.15s, color 0.15s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'
                      e.currentTarget.style.color = '#fff'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: p.color,
                        flexShrink: 0,
                      }}
                    />
                    {p.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setActiveDropdown('solutions')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/solutions/"
              style={{
                color: pathname.startsWith('/solutions') ? '#f32c01' : 'rgba(255,255,255,0.75)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                fontFamily: "'MacanPan', sans-serif",
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'color 0.2s',
              }}
            >
              Solutions
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.6 }}>
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            {activeDropdown === 'solutions' && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 12px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#1c1c1c',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '14px',
                  padding: '8px',
                  minWidth: '260px',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    padding: '10px 14px 14px',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    marginBottom: '6px',
                  }}
                >
                  <Link
                    href="/solutions/"
                    style={{
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                      fontFamily: "'MacanPan', sans-serif",
                    }}
                  >
                    All Solutions →
                  </Link>
                </div>
                {solutions.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '0.88rem',
                      fontFamily: "'MacanPan', sans-serif",
                      transition: 'background 0.15s, color 0.15s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'
                      e.currentTarget.style.color = '#fff'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: s.color,
                        flexShrink: 0,
                      }}
                    />
                    <span>
                      <div style={{ fontWeight: 500 }}>{s.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: '1px' }}>
                        {s.description}
                      </div>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/newsroom/"
            style={{
              color: pathname.startsWith('/newsroom') ? '#f32c01' : 'rgba(255,255,255,0.75)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              fontFamily: "'MacanPan', sans-serif",
              transition: 'color 0.2s',
            }}
          >
            Newsroom
          </Link>
        </nav>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link
            href="/contact/"
            className="header-cta-btn"
            style={{
              backgroundColor: '#f32c01',
              color: '#fff',
              padding: '10px 24px',
              borderRadius: '100px',
              textDecoration: 'none',
              fontSize: '0.88rem',
              fontWeight: 600,
              fontFamily: "'MacanPan', sans-serif",
              transition: 'background 0.2s',
              display: 'inline-block',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d30000')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f32c01')}
          >
            Book a Demo
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="header-mobile-toggle"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              padding: '8px',
            }}
            aria-label="Toggle navigation menu"
          >
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                backgroundColor: '#fff',
                transition: 'transform 0.3s',
                transformOrigin: 'center',
                transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                backgroundColor: '#fff',
                transition: 'opacity 0.3s',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                backgroundColor: '#fff',
                transition: 'transform 0.3s',
                transformOrigin: 'center',
                transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: '#141414',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '0 clamp(20px, 4vw, 80px) 24px',
          }}
        >
          <Link
            href="/"
            style={{
              display: 'block',
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              fontFamily: "'MacanPan', sans-serif",
              padding: '16px 0',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            Home
          </Link>

          {/* Mobile Products */}
          <button
            onClick={() =>
              setActiveDropdown(activeDropdown === 'products-mob' ? null : 'products-mob')
            }
            style={{
              background: 'none',
              border: 'none',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              color: 'rgba(255,255,255,0.8)',
              fontSize: '1rem',
              fontWeight: 500,
              fontFamily: "'MacanPan', sans-serif",
              padding: '16px 0',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              cursor: 'pointer',
            }}
          >
            Products
            <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>
              {activeDropdown === 'products-mob' ? '−' : '+'}
            </span>
          </button>
          {activeDropdown === 'products-mob' && (
            <div style={{ padding: '8px 0 8px 16px' }}>
              {products.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'rgba(255,255,255,0.65)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontFamily: "'MacanPan', sans-serif",
                    padding: '10px 0',
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: p.color,
                      flexShrink: 0,
                    }}
                  />
                  {p.name}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Solutions */}
          <button
            onClick={() =>
              setActiveDropdown(activeDropdown === 'solutions-mob' ? null : 'solutions-mob')
            }
            style={{
              background: 'none',
              border: 'none',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              color: 'rgba(255,255,255,0.8)',
              fontSize: '1rem',
              fontWeight: 500,
              fontFamily: "'MacanPan', sans-serif",
              padding: '16px 0',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              cursor: 'pointer',
            }}
          >
            Solutions
            <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>
              {activeDropdown === 'solutions-mob' ? '−' : '+'}
            </span>
          </button>
          {activeDropdown === 'solutions-mob' && (
            <div style={{ padding: '8px 0 8px 16px' }}>
              {solutions.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'rgba(255,255,255,0.65)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontFamily: "'MacanPan', sans-serif",
                    padding: '10px 0',
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: s.color,
                      flexShrink: 0,
                    }}
                  />
                  {s.name}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/newsroom/"
            style={{
              display: 'block',
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              fontFamily: "'MacanPan', sans-serif",
              padding: '16px 0',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            Newsroom
          </Link>

          <Link
            href="/contact/"
            style={{
              display: 'inline-block',
              marginTop: '20px',
              backgroundColor: '#f32c01',
              color: '#fff',
              padding: '12px 28px',
              borderRadius: '100px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 600,
              fontFamily: "'MacanPan', sans-serif",
            }}
          >
            Book a Demo
          </Link>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .header-mobile-toggle { display: none !important; }
        }
        @media (max-width: 899px) {
          .header-desktop-nav { display: none !important; }
          .header-cta-btn { display: none !important; }
        }
      `}</style>
    </header>
  )
}
