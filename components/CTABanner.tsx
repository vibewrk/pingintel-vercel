import Link from 'next/link';

interface CTABannerProps {
  label?: string;
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonHref?: string;
  dark?: boolean;
}

export default function CTABanner({
  label = 'Get in touch',
  heading = 'Transform your<br />data today',
  text = 'Stay informed with the latest developments, news, and events.',
  buttonText = 'Book a Demo',
  buttonHref = '/contact/',
  dark = true,
}: CTABannerProps) {
  return (
    <section
      style={{
        background: dark
          ? 'linear-gradient(135deg, #170000 0%, #1a0a00 50%, #141414 100%)'
          : '#141414',
        padding: 'clamp(70px,8vw,120px) clamp(20px,4vw,80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1620px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: '0.78rem',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.45)',
            fontFamily: "'MacanPan', sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '24px',
          }}
        >
          {label}
        </div>
        <h2
          style={{
            fontFamily: "'MacanPan', sans-serif",
            fontSize: 'clamp(40px, 6vw, 100px)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.05,
            marginBottom: '24px',
            maxWidth: '700px',
            letterSpacing: '-0.02em',
          }}
          dangerouslySetInnerHTML={{ __html: heading }}
        />
        <p
          style={{
            fontFamily: "'MacanPan', sans-serif",
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '500px',
            marginBottom: '40px',
            lineHeight: 1.6,
          }}
        >
          {text}
        </p>
        <Link
          href={buttonHref}
          style={{
            display: 'inline-block',
            backgroundColor: '#f32c01',
            color: '#fff',
            padding: '14px 36px',
            borderRadius: '100px',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: 600,
            fontFamily: "'MacanPan', sans-serif",
          }}
        >
          {buttonText}
        </Link>
      </div>

      {/* Decorative orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(243,44,1,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-30%',
          left: '20%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(243,44,1,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
    </section>
  );
}
