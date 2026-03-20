import Link from 'next/link'

export default function NotFound() {
  return (
    <section
      style={{
        backgroundColor: '#141414',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px clamp(20px, 4vw, 80px)',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            fontFamily: "'MacanStencilPan', sans-serif",
            fontSize: 'clamp(100px, 20vw, 200px)',
            fontWeight: 700,
            color: 'rgba(255,255,255,0.05)',
            lineHeight: 1,
            marginBottom: '24px',
          }}
        >
          404
        </div>
        <h1
          style={{
            fontFamily: "'MacanPan', sans-serif",
            fontSize: 'clamp(28px, 4vw, 56px)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '16px',
          }}
        >
          Page not found
        </h1>
        <p
          style={{
            fontFamily: "'MacanPan', sans-serif",
            color: 'rgba(255,255,255,0.55)',
            fontSize: '1.1rem',
            marginBottom: '40px',
            maxWidth: '400px',
            lineHeight: 1.6,
            margin: '0 auto 40px',
          }}
        >
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
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
          Back to Home
        </Link>
      </div>
    </section>
  )
}
