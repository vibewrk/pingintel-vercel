'use client'

import Link from 'next/link'
import { useState } from 'react'

interface Article {
  id: number
  title: string
  category: string
  date: string
  excerpt: string
  href: string
  image: string | null
  external: boolean
}

const categoryColors: Record<string, string> = {
  News: '#4da0ff',
  Blog: '#ffac4d',
  'Press Release': '#c94dff',
}

export default function ArticleCard({ article }: { article: Article }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={article.href}
      target={article.external ? '_blank' : '_self'}
      rel={article.external ? 'noopener noreferrer' : undefined}
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#191919',
        borderRadius: '16px',
        overflow: 'hidden',
        textDecoration: 'none',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.06)'}`,
        transform: hovered ? 'translateY(-4px)' : 'none',
        transition: 'border-color 0.25s, transform 0.25s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
        {article.image ? (
          <img
            src={`/images/${article.image}`}
            alt={article.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: "'MacanStencilPan', sans-serif",
                fontSize: '3rem',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.06)',
              }}
            >
              PING
            </span>
          </div>
        )}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(25,25,25,0.6) 0%, transparent 60%)',
          }}
        />
      </div>
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '14px',
          }}
        >
          <span
            style={{
              fontSize: '0.72rem',
              color: categoryColors[article.category] || 'rgba(255,255,255,0.4)',
              fontFamily: "'MacanPan', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              fontWeight: 600,
            }}
          >
            {article.category}
          </span>
          <span
            style={{
              fontSize: '0.72rem',
              color: 'rgba(255,255,255,0.35)',
              fontFamily: "'MacanPan', sans-serif",
            }}
          >
            {article.date}
          </span>
        </div>
        <h2
          style={{
            fontFamily: "'MacanPan', sans-serif",
            fontSize: '1rem',
            fontWeight: 600,
            color: '#fff',
            lineHeight: 1.45,
            flex: 1,
            marginBottom: '12px',
          }}
        >
          {article.title}
        </h2>
        <p
          style={{
            fontFamily: "'MacanPan', sans-serif",
            fontSize: '0.88rem',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.6,
            marginBottom: '20px',
          }}
        >
          {article.excerpt}
        </p>
        <span
          style={{
            color: '#f32c01',
            fontSize: '0.85rem',
            fontWeight: 600,
            fontFamily: "'MacanPan', sans-serif",
          }}
        >
          Read more →
        </span>
      </div>
    </Link>
  )
}
