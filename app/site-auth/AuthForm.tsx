'use client'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function AuthForm() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password.toLowerCase() === 'portia') {
      document.cookie = 'ping_auth=1; path=/; SameSite=Lax'
      const from = searchParams.get('from') || '/'
      router.push(from)
    } else {
      setError(true)
      setPassword('')
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#141414',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
      }}
    >
      {/* PING Logo */}
      <div style={{ marginBottom: '48px', textAlign: 'center' }}>
        <div
          style={{
            fontFamily: "'MacanPan', sans-serif",
            fontSize: '2.2rem',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: '-0.02em',
          }}
        >
          PING
        </div>
        <div
          style={{
            fontFamily: "'MacanPan', sans-serif",
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginTop: '4px',
          }}
        >
          Data Intelligence
        </div>
      </div>

      {/* Card */}
      <div
        style={{
          backgroundColor: '#191919',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '20px',
          padding: '40px',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <h1
          style={{
            fontFamily: "'MacanPan', sans-serif",
            fontSize: '1.4rem',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '8px',
          }}
        >
          Site Preview
        </h1>
        <p
          style={{
            fontFamily: "'MacanPan', sans-serif",
            fontSize: '0.88rem',
            color: 'rgba(255,255,255,0.45)',
            marginBottom: '32px',
            lineHeight: 1.6,
          }}
        >
          Enter the password to continue.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label
              style={{
                display: 'block',
                fontFamily: "'MacanPan', sans-serif",
                fontSize: '0.78rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.45)',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError(false)
              }}
              placeholder="Enter password"
              autoFocus
              style={{
                width: '100%',
                backgroundColor: '#1e1e1e',
                border: `1px solid ${error ? '#f32c01' : 'rgba(255,255,255,0.12)'}`,
                borderRadius: '10px',
                padding: '14px 18px',
                color: '#fff',
                fontFamily: "'MacanPan', sans-serif",
                fontSize: '0.95rem',
                outline: 'none',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => {
                if (!error) e.target.style.borderColor = 'rgba(243,44,1,0.5)'
              }}
              onBlur={(e) => {
                if (!error) e.target.style.borderColor = 'rgba(255,255,255,0.12)'
              }}
            />
            {error && (
              <p
                style={{
                  fontFamily: "'MacanPan', sans-serif",
                  fontSize: '0.82rem',
                  color: '#f32c01',
                  marginTop: '8px',
                }}
              >
                Incorrect password. Please try again.
              </p>
            )}
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#f32c01',
              color: '#fff',
              border: 'none',
              padding: '14px 36px',
              borderRadius: '100px',
              fontSize: '0.95rem',
              fontWeight: 600,
              fontFamily: "'MacanPan', sans-serif",
              cursor: 'pointer',
              width: '100%',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d30000')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f32c01')}
          >
            Continue
          </button>
        </form>
      </div>

      {/* Footer hint */}
      <p
        style={{
          fontFamily: "'MacanPan', sans-serif",
          fontSize: '0.78rem',
          color: 'rgba(255,255,255,0.2)',
          marginTop: '32px',
        }}
      >
        &copy; {new Date().getFullYear()} PING Data Intelligence
      </p>
    </div>
  )
}
