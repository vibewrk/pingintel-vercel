'use client'
import { useState } from 'react'

const testimonials = [
  {
    quote:
      '"Ping has been a transformational tool for our business. The ability to cleanse and normalize SOVs has created a level of speed and accuracy not previously achieved."',
    name: 'Rod Harden',
    title: 'President of Claims & Operations • Velocity Risk',
    photo: 'Stocksy_txp5702104fHB6400_Medium_1245677-1-e1745847318857-150x150.jpg',
  },
  {
    quote:
      '"Ping has been a critical partner for us in our transformation journey. Their entrepreneurial approach and innovative platform have helped us improve processes and generate efficiency gains."',
    name: 'Sonia Ahuja',
    title: 'EVP of Operations • Velocity Risk',
    photo: null,
  },
  {
    quote:
      '"Ping replaced what has historically been a manual and error prone piece of the underwriting workflow with a more efficient, scalable, precise, and repeatable process."',
    name: 'Brandon Beauregard',
    title: 'Chief Underwriting Officer • Trium Property',
    photo: null,
  },
]

export default function TestimonialSwiper() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section
      style={{
        backgroundColor: '#0f0f0f',
        padding: 'clamp(70px, 8vw, 130px) clamp(20px, 4vw, 80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
        <div
          style={{
            fontSize: '0.78rem',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.4)',
            fontFamily: "'MacanPan', sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '48px',
          }}
        >
          What our clients say
        </div>

        <div style={{ maxWidth: '860px' }}>
          <blockquote
            key={current}
            style={{
              fontFamily: "'IvarDisplay', serif",
              fontSize: 'clamp(20px, 2.8vw, 38px)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#ffffff',
              lineHeight: 1.45,
              marginBottom: '40px',
            }}
          >
            {t.quote}
          </blockquote>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {t.photo ? (
              <img
                src={`/images/${t.photo}`}
                alt={t.name}
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  flexShrink: 0,
                }}
              />
            ) : (
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: '#2a2a2a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '1.2rem',
                  color: 'rgba(255,255,255,0.4)',
                }}
              >
                {t.name[0]}
              </div>
            )}
            <div>
              <div
                style={{
                  fontFamily: "'MacanPan', sans-serif",
                  fontWeight: 600,
                  color: '#fff',
                  fontSize: '1rem',
                  marginBottom: '3px',
                }}
              >
                {t.name}
              </div>
              <div
                style={{
                  fontFamily: "'MacanPan', sans-serif",
                  color: 'rgba(255,255,255,0.45)',
                  fontSize: '0.85rem',
                }}
              >
                {t.title}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginTop: '48px',
          }}
        >
          <span
            style={{
              fontFamily: "'MacanPan', sans-serif",
              color: 'rgba(255,255,255,0.35)',
              fontSize: '0.88rem',
              minWidth: '48px',
            }}
          >
            {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </span>
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#fff',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.1rem',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#fff',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.1rem',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
          >
            →
          </button>
          {/* Dots */}
          <div style={{ display: 'flex', gap: '8px', marginLeft: '8px' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '100px',
                  background: i === current ? '#f32c01' : 'rgba(255,255,255,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decoration */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(243,44,1,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
    </section>
  )
}
