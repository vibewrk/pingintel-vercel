interface HeroSimpleProps {
  label?: string
  heading: string
  subheading?: string
  accentColor?: string
  bgImage?: string
  dark?: boolean
}

export default function HeroSimple({
  label,
  heading,
  subheading,
  accentColor = '#f32c01',
  bgImage,
  dark = true,
}: HeroSimpleProps) {
  return (
    <section
      style={{
        backgroundColor: dark ? '#141414' : '#fff0e7',
        paddingTop: 'calc(76px + clamp(60px, 8vw, 120px))',
        paddingBottom: 'clamp(60px, 8vw, 120px)',
        paddingLeft: 'clamp(20px, 4vw, 80px)',
        paddingRight: 'clamp(20px, 4vw, 80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {bgImage && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(/images/${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.12,
          }}
        />
      )}
      <div
        style={{
          maxWidth: '1620px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {label && (
          <div
            style={{
              fontSize: '0.78rem',
              fontWeight: 600,
              color: accentColor,
              fontFamily: "'MacanPan', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '24px',
            }}
          >
            {label}
          </div>
        )}
        <h1
          style={{
            fontFamily: "'MacanPan', sans-serif",
            fontSize: 'clamp(48px, 8vw, 140px)',
            fontWeight: 700,
            color: dark ? '#fff' : '#171100',
            lineHeight: 1.0,
            letterSpacing: '-0.025em',
            maxWidth: '900px',
          }}
        >
          {heading}
        </h1>
        {subheading && (
          <p
            style={{
              fontFamily: "'MacanPan', sans-serif",
              fontSize: 'clamp(17px, 1.8vw, 22px)',
              color: dark ? 'rgba(255,255,255,0.6)' : 'rgba(23,17,0,0.6)',
              marginTop: '28px',
              maxWidth: '620px',
              lineHeight: 1.6,
            }}
          >
            {subheading}
          </p>
        )}
      </div>

      {/* Decorative gradient */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          right: '-15%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${accentColor}09 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
    </section>
  )
}
