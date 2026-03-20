import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Subprocessors',
  description: 'A list of third-party subprocessors used by Ping Intel in delivering its services.',
}

const subprocessors = [
  { name: 'Amazon Web Services (AWS)', purpose: 'Cloud infrastructure and hosting', country: 'United States', link: 'https://aws.amazon.com' },
  { name: 'Snowflake', purpose: 'Data warehouse and analytics', country: 'United States', link: 'https://snowflake.com' },
  { name: 'Google Cloud Platform', purpose: 'AI/ML processing and geocoding', country: 'United States', link: 'https://cloud.google.com' },
  { name: 'Stripe', purpose: 'Payment processing', country: 'United States', link: 'https://stripe.com' },
  { name: 'Intercom', purpose: 'Customer support and communications', country: 'United States', link: 'https://intercom.com' },
  { name: 'Datadog', purpose: 'Application monitoring and logging', country: 'United States', link: 'https://datadog.com' },
  { name: 'SendGrid (Twilio)', purpose: 'Transactional email delivery', country: 'United States', link: 'https://sendgrid.com' },
  { name: 'Auth0 (Okta)', purpose: 'Identity and access management', country: 'United States', link: 'https://auth0.com' },
]

export default function SubprocessorsPage() {
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
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#f32c01', fontFamily: "'MacanPan', sans-serif", textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '24px' }}>
          Legal
        </div>
        <h1 style={{ fontFamily: "'MacanPan', sans-serif", fontSize: 'clamp(36px, 5vw, 80px)', fontWeight: 700, color: '#fff', lineHeight: 1.0, letterSpacing: '-0.025em', marginBottom: '16px' }}>
          Subprocessors
        </h1>
        <p style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '600px', marginBottom: '16px' }}>
          The following third-party service providers (&quot;subprocessors&quot;) process personal data on behalf of Ping Intel in the course of providing our services.
        </p>
        <p style={{ fontFamily: "'MacanPan', sans-serif", color: 'rgba(255,255,255,0.3)', fontSize: '0.82rem', marginBottom: '48px' }}>
          Last updated: January 1, 2026
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
                {['Subprocessor', 'Purpose', 'Country'].map((header) => (
                  <th
                    key={header}
                    style={{
                      fontFamily: "'MacanPan', sans-serif",
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.4)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      padding: '12px 16px',
                      textAlign: 'left',
                    }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {subprocessors.map((sp, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '20px 16px' }}>
                    <a href={sp.link} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '0.95rem', fontWeight: 600, color: '#fff', textDecoration: 'none' }}>
                      {sp.name} ↗
                    </a>
                  </td>
                  <td style={{ padding: '20px 16px', fontFamily: "'MacanPan', sans-serif", fontSize: '0.92rem', color: 'rgba(255,255,255,0.6)' }}>
                    {sp.purpose}
                  </td>
                  <td style={{ padding: '20px 16px', fontFamily: "'MacanPan', sans-serif", fontSize: '0.92rem', color: 'rgba(255,255,255,0.6)' }}>
                    {sp.country}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '48px', padding: '24px', backgroundColor: '#191919', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ fontFamily: "'MacanPan', sans-serif", fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>
            For questions about our subprocessors or data processing practices, contact us at{' '}
            <a href="mailto:privacy@pingintel.com" style={{ color: '#f32c01', textDecoration: 'none' }}>privacy@pingintel.com</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
