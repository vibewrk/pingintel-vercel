import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Ping Intel Privacy Policy and Data Security information.',
}

export default function PrivacyPolicyPage() {
  const h2Style: React.CSSProperties = {
    fontFamily: "'MacanPan', sans-serif",
    fontSize: 'clamp(20px, 2vw, 28px)',
    fontWeight: 700,
    color: '#fff',
    marginBottom: '16px',
    marginTop: '48px',
    letterSpacing: '-0.01em',
  }
  const pStyle: React.CSSProperties = {
    fontFamily: "'MacanPan', sans-serif",
    fontSize: '0.95rem',
    color: 'rgba(255,255,255,0.65)',
    lineHeight: 1.8,
    marginBottom: '16px',
  }

  return (
    <section
      style={{
        backgroundColor: '#141414',
        paddingTop: 'calc(76px + clamp(60px, 6vw, 100px))',
        paddingBottom: 'clamp(70px, 8vw, 120px)',
        paddingLeft: 'clamp(20px, 4vw, 80px)',
        paddingRight: 'clamp(20px, 4vw, 80px)',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#f32c01', fontFamily: "'MacanPan', sans-serif", textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '24px' }}>
          Legal
        </div>
        <h1 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(36px, 5vw, 80px)', fontWeight: 700, color: '#fff', lineHeight: 1.0, letterSpacing: '-0.025em', marginBottom: '16px' }}>
          Privacy Policy
        </h1>
        <p style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.4)', fontSize: '0.88rem', marginBottom: '60px' }}>
          Last updated: January 1, 2026
        </p>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '48px' }}>
          <h2 style={h2Style}>1. Introduction</h2>
          <p style={pStyle}>
            Ping Intel, Inc. (&quot;Ping,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and the security of your data. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our platform and services.
          </p>

          <h2 style={h2Style}>2. Information We Collect</h2>
          <p style={pStyle}>
            <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Account Information:</strong> When you create an account, we collect your name, email address, company name, and other information you provide.
          </p>
          <p style={pStyle}>
            <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Usage Data:</strong> We collect information about how you use our services, including log data, API calls, and feature usage patterns.
          </p>
          <p style={pStyle}>
            <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Customer Data:</strong> We process property data, documents, and related information that you submit to our platform on your behalf. This data is subject to our Data Processing Agreement.
          </p>

          <h2 style={h2Style}>3. How We Use Your Information</h2>
          <p style={pStyle}>
            We use the information we collect to provide, maintain, and improve our services; process transactions; send administrative communications; and comply with legal obligations. We do not sell your personal information to third parties.
          </p>

          <h2 style={h2Style}>4. Data Security</h2>
          <p style={pStyle}>
            Ping takes data security seriously. We implement industry-standard security measures including:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
            {[
              'SOC 2 Type II certified infrastructure',
              'AES-256 encryption at rest',
              'TLS 1.3 encryption in transit',
              'Role-based access controls',
              'Regular security audits and penetration testing',
              'Data isolation between customer tenants',
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <span style={{ color: '#f32c01', flexShrink: 0 }}>→</span>
                <span style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)' }}>{item}</span>
              </li>
            ))}
          </ul>

          <h2 style={h2Style}>5. Data Retention</h2>
          <p style={pStyle}>
            We retain your data for as long as your account is active or as needed to provide services. You may request deletion of your account and associated data at any time by contacting us at{' '}
            <a href="mailto:privacy@pingintel.com" style={{ color: '#f32c01', textDecoration: 'none' }}>privacy@pingintel.com</a>.
          </p>

          <h2 style={h2Style}>6. Subprocessors</h2>
          <p style={pStyle}>
            We use certain third-party service providers (&quot;subprocessors&quot;) to assist in delivering our services. A current list of our subprocessors is available at{' '}
            <Link href="/subprocessors/" style={{ color: '#f32c01', textDecoration: 'none' }}>pingintel.com/subprocessors/</Link>.
          </p>

          <h2 style={h2Style}>7. Your Rights</h2>
          <p style={pStyle}>
            Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, contact us at{' '}
            <a href="mailto:privacy@pingintel.com" style={{ color: '#f32c01', textDecoration: 'none' }}>privacy@pingintel.com</a>.
          </p>

          <h2 style={h2Style}>8. Contact Us</h2>
          <p style={pStyle}>If you have questions about this Privacy Policy or our data practices, please contact us at:</p>
          <div style={{ backgroundColor: '#191919', borderRadius: '12px', padding: '24px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <p style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
              Ping Intel, Inc.<br />
              1111 Lincoln Rd<br />
              Miami Beach, FL 33139<br />
              <a href="mailto:privacy@pingintel.com" style={{ color: '#f32c01', textDecoration: 'none' }}>privacy@pingintel.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
