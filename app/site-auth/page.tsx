import { Suspense } from 'react'
import AuthForm from './AuthForm'

export const metadata = {
  title: 'Password Protected — PING',
  robots: 'noindex,nofollow',
}

export default function AuthPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: '100vh',
            backgroundColor: '#141414',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      }
    >
      <AuthForm />
    </Suspense>
  )
}
