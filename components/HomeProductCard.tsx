'use client'

import Link from 'next/link'
import { useState } from 'react'

interface HomeProductCardProps {
  name: string
  href: string
  color: string
  desc: string
}

export default function HomeProductCard({ name, href, color, desc }: HomeProductCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={href}
      style={{
        display: 'block',
        backgroundColor: '#191919',
        borderRadius: '16px',
        padding: '28px',
        textDecoration: 'none',
        border: `1px solid ${hovered ? color + '40' : 'rgba(255,255,255,0.06)'}`,
        transform: hovered ? 'translateY(-4px)' : 'none',
        transition: 'border-color 0.25s, transform 0.25s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '10px',
          backgroundColor: color + '18',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        <span
          style={{
            display: 'block',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: color,
          }}
        />
      </div>
      <h3
        style={{
          fontFamily: "'MacanPan', sans-serif",
          fontSize: '1.05rem',
          fontWeight: 700,
          color: '#fff',
          marginBottom: '10px',
        }}
      >
        {name}
      </h3>
      <p
        style={{
          fontFamily: "'MacanPan', sans-serif",
          fontSize: '0.88rem',
          color: 'rgba(255,255,255,0.5)',
          lineHeight: 1.6,
        }}
      >
        {desc}
      </p>
    </Link>
  )
}
