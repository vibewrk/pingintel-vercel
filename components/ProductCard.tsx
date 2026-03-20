'use client'

import Link from 'next/link'
import { useState } from 'react'

interface ProductCardProps {
  name: string
  href: string
  color: string
  image: string
  desc: string
  tag: string
}

export default function ProductCard({ name, href, color, image, desc, tag }: ProductCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={href}
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#191919',
        borderRadius: '20px',
        overflow: 'hidden',
        textDecoration: 'none',
        border: `1px solid ${hovered ? color + '40' : 'rgba(255,255,255,0.06)'}`,
        transform: hovered ? 'translateY(-4px)' : 'none',
        transition: 'border-color 0.25s, transform 0.25s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
        <img
          src={`/images/${image}`}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(25,25,25,0.8) 0%, transparent 60%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            backgroundColor: color + '20',
            border: `1px solid ${color}40`,
            color: color,
            padding: '5px 14px',
            borderRadius: '100px',
            fontSize: '0.75rem',
            fontWeight: 600,
            fontFamily: "'MacanPan', sans-serif",
          }}
        >
          {tag}
        </div>
      </div>
      <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h2
          style={{
            fontFamily: "'MacanPan', sans-serif",
            fontSize: 'clamp(22px, 2.5vw, 36px)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '16px',
            letterSpacing: '-0.01em',
          }}
        >
          {name}
        </h2>
        <p
          style={{
            fontFamily: "'MacanPan', sans-serif",
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.65,
            flex: 1,
            marginBottom: '24px',
          }}
        >
          {desc}
        </p>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: color,
            fontSize: '0.88rem',
            fontWeight: 600,
            fontFamily: "'MacanPan', sans-serif",
          }}
        >
          Learn more →
        </span>
      </div>
    </Link>
  )
}
