'use client'
import { useState } from 'react'
import Link from 'next/link'

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#1e1e1e',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '10px',
    padding: '14px 18px',
    color: '#fff',
    fontFamily: "'MacanPan', sans-serif",
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '48px' }}>
        <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#f32c01', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l5 5L20 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>Thank you!</h3>
        <p style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
          We&apos;ve received your message and will be in touch within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-two-col">
        <div>
          <label style={{ display: 'block', fontFamily: "'MacanPan', sans-serif", fontSize: '0.8rem', fontWeight: 500, color: 'rgba(255,255,255,0.45)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Full Name *</label>
          <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Smith" style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = 'rgba(243,44,1,0.5)')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')} />
        </div>
        <div>
          <label style={{ display: 'block', fontFamily: "'MacanPan', sans-serif", fontSize: '0.8rem', fontWeight: 500, color: 'rgba(255,255,255,0.45)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Work Email *</label>
          <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jane@example.com" style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = 'rgba(243,44,1,0.5)')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')} />
        </div>
      </div>
      <div>
        <label style={{ display: 'block', fontFamily: "'MacanPan', sans-serif", fontSize: '0.8rem', fontWeight: 500, color: 'rgba(255,255,255,0.45)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Company</label>
        <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Acme Insurance" style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = 'rgba(243,44,1,0.5)')}
          onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')} />
      </div>
      <div>
        <label style={{ display: 'block', fontFamily: "'MacanPan', sans-serif", fontSize: '0.8rem', fontWeight: 500, color: 'rgba(255,255,255,0.45)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Message</label>
        <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your needs..." rows={5} style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
          onFocus={(e) => (e.target.style.borderColor = 'rgba(243,44,1,0.5)')}
          onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')} />
      </div>
      <button type="submit" style={{ backgroundColor: '#f32c01', color: '#fff', border: 'none', padding: '16px 36px', borderRadius: '100px', fontSize: '1rem', fontWeight: 600, fontFamily: "'MacanPan', sans-serif", cursor: 'pointer', alignSelf: 'flex-start' }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d30000')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f32c01')}>
        Send Message
      </button>
      <style>{`@media (max-width: 600px) { .form-two-col { grid-template-columns: 1fr !important; } }`}</style>
    </form>
  )
}

export default function ContactPage() {
  return (
    <section
      style={{
        backgroundColor: '#141414',
        paddingTop: 'calc(76px + clamp(60px, 8vw, 120px))',
        paddingBottom: 'clamp(70px, 8vw, 120px)',
        paddingLeft: 'clamp(20px, 4vw, 80px)',
        paddingRight: 'clamp(20px, 4vw, 80px)',
      }}
    >
      <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '80px', alignItems: 'start' }} className="contact-grid">
          {/* Left */}
          <div>
            <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#f32c01', fontFamily: "'MacanPan', sans-serif", textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '24px' }}>
              Get in touch
            </div>
            <h1 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(40px, 6vw, 100px)', fontWeight: 700, color: '#fff', lineHeight: 1.0, letterSpacing: '-0.025em', marginBottom: '24px' }}>
              Book a Demo
            </h1>
            <p style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(16px, 1.4vw, 18px)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '40px' }}>
              Ready to see Ping in action? Fill out the form and we&apos;ll be in touch within one business day to schedule a personalized demo.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.35)', fontFamily: "'MacanPan', sans-serif", textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Address</div>
                <div style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  1111 Lincoln Rd<br />Miami Beach, FL 33139
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.35)', fontFamily: "'MacanPan', sans-serif", textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Email</div>
                <a href="mailto:info@pingintel.com" style={{ fontFamily: "'MacanPan', sans-serif", color: '#f32c01', fontSize: '0.95rem', textDecoration: 'none' }}>
                  info@pingintel.com
                </a>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.35)', fontFamily: "'MacanPan', sans-serif", textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Connect</div>
                <a href="https://www.linkedin.com/company/ping-data-intelligence" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', textDecoration: 'none' }}>
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div style={{ backgroundColor: '#161616', borderRadius: '20px', padding: 'clamp(28px, 3vw, 48px)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h2 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Request a Demo</h2>
            <p style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)', marginBottom: '32px' }}>
              We typically respond within one business day.
            </p>
            <ContactForm />
          </div>
        </div>

        <style>{`@media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  )
}
