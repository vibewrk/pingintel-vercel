'use client'

const logos = [
  { src: 'Velocity@2x.png', alt: 'Velocity Risk' },
  { src: 'TRIUM@2x.png', alt: 'Trium' },
  { src: 'MSI@2x.png', alt: 'MSI' },
  { src: 'Risk-Smith@2x.png', alt: 'Risk Smith' },
  { src: 'hub@2x.png', alt: 'Hub' },
  { src: 'Assured-Partners@2x.png', alt: 'Assured Partners' },
  { src: 'Amwins@2x.png', alt: 'Amwins' },
  { src: 'adgo@2x.png', alt: 'ADGO' },
  { src: 'acord@2x.png', alt: 'ACORD' },
  { src: 'Aon-social-logo.jpg', alt: 'Aon' },
  { src: 'arris_specialty_logo.jpeg', alt: 'Arris Specialty' },
  { src: 'augmented.png', alt: 'Augmented' },
  { src: 'TransRe_Logo.jpg', alt: 'TransRe' },
  { src: 'gc-logo.png', alt: 'GC' },
  { src: 'westfielld.png', alt: 'Westfield' },
  { src: 'marsh.png', alt: 'Marsh' },
  { src: 'gallagher.png', alt: 'Gallagher' },
]

function LogoCard({ logo }: { logo: typeof logos[0] }) {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '18px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '150px',
        height: '76px',
        flexShrink: 0,
      }}
    >
      <img
        src={`/images/${logo.src}`}
        alt={logo.alt}
        style={{
          maxHeight: '38px',
          maxWidth: '110px',
          objectFit: 'contain',
          filter: 'grayscale(100%)',
          opacity: 0.65,
        }}
      />
    </div>
  )
}

export default function Marquee() {
  const row2 = [...logos.slice(9), ...logos.slice(0, 9)]

  return (
    <section
      style={{
        backgroundColor: '#fff0e7',
        padding: 'clamp(60px, 7vw, 100px) 0 clamp(60px, 7vw, 100px)',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          maxWidth: '1620px',
          margin: '0 auto',
          padding: '0 clamp(20px, 4vw, 80px)',
          marginBottom: '48px',
        }}
      >
        <div
          style={{
            fontSize: '0.78rem',
            fontWeight: 500,
            color: 'rgba(23,17,0,0.45)',
            fontFamily: "'MacanPan', sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '16px',
          }}
        >
          Trusted by leading insurers
        </div>
        <h2
          style={{
            fontFamily: "'MacanPan', sans-serif",
            fontSize: 'clamp(32px, 5vw, 80px)',
            fontWeight: 700,
            color: '#171100',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          Innovation built on<br />
          dynamic{' '}
          <span style={{ color: '#3895FF' }}>data</span>
        </h2>
      </div>

      {/* Marquee row 1 - scroll left */}
      <div style={{ overflow: 'hidden', marginBottom: '16px' }}>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            animation: 'marquee-left 35s linear infinite',
            width: 'max-content',
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <LogoCard key={i} logo={logo} />
          ))}
        </div>
      </div>

      {/* Marquee row 2 - scroll right */}
      <div style={{ overflow: 'hidden' }}>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            animation: 'marquee-right 35s linear infinite',
            width: 'max-content',
          }}
        >
          {[...row2, ...row2].map((logo, i) => (
            <LogoCard key={i} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  )
}
