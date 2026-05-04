'use client'

import { useState } from 'react'
import Link from 'next/link'

const newsItems = [
  { date: '2026.04.25', tag: 'お知らせ', title: 'ゴールデンウィークの休診のお知らせ', href: '/news/gw-holiday' },
]

export default function News() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="news" className="resp-section" style={{ background: '#f4f7fb', padding: '88px 0' }}>
      <div className="resp-inner" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
        {/* Section header */}
        <div style={{ marginBottom: 40 }}>
          <p
            style={{
              fontSize: 11,
              color: '#3a7fd4',
              letterSpacing: '0.24em',
              marginBottom: 12,
              fontFamily: 'var(--font-noto-sans-jp), sans-serif',
            }}
          >
            NEWS
          </p>
          <h2
            className="resp-h2"
            style={{
              fontFamily: 'var(--font-noto-serif-jp), serif',
              fontSize: 32,
              fontWeight: 400,
              color: '#1e2530',
            }}
          >
            お知らせ
          </h2>
        </div>

        {/* News list */}
        <div>
          {newsItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="news-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                padding: '20px 0',
                borderBottom: '1px solid #d8e2ec',
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  color: '#8a96a3',
                  minWidth: 90,
                  fontFamily: 'var(--font-noto-sans-jp), sans-serif',
                  flexShrink: 0,
                }}
              >
                {item.date}
              </span>
              <span
                style={{
                  background: '#d0e4f5',
                  color: '#1a4c7c',
                  fontSize: 10,
                  padding: '3px 8px',
                  borderRadius: 2,
                  fontFamily: 'var(--font-noto-sans-jp), sans-serif',
                  flexShrink: 0,
                }}
              >
                {item.tag}
              </span>
              <span
                style={{
                  fontSize: 14,
                  color: hoveredIndex === i ? '#3a7fd4' : '#1e2530',
                  fontFamily: 'var(--font-noto-sans-jp), sans-serif',
                  transition: 'color 0.15s',
                }}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
