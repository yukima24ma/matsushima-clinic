'use client'

import { useEffect, useState } from 'react'

const navLinks = [
  { label: '診療科', href: '/#departments' },
  { label: '医師紹介', href: '/#doctors' },
  { label: 'お知らせ', href: '/#news' },
  { label: 'アクセス', href: '/#access' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        height: 68,
        background: '#1a4c7c',
        boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.10)' : 'none',
        transition: 'box-shadow 0.2s',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
        }}
      >
        {/* Logo */}
        <a href="/" style={{ textDecoration: 'none' }}>
          <p
            style={{
              fontFamily: 'var(--font-noto-serif-jp), serif',
              fontSize: 20,
              fontWeight: 500,
              color: '#fff',
              letterSpacing: '0.08em',
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            松島医院
          </p>
          <p
            style={{
              fontSize: 10,
              color: 'rgba(255,255,255,0.6)',
              letterSpacing: '0.12em',
              margin: 0,
              marginTop: 2,
            }}
          >
            MATSUSHIMA CLINIC
          </p>
        </a>

        {/* Nav links + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-noto-sans-jp), sans-serif',
                fontSize: 13,
                color: 'rgba(255,255,255,0.9)',
                padding: '8px 14px',
                borderRadius: 4,
                textDecoration: 'none',
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#access"
            style={{
              fontFamily: 'var(--font-noto-sans-jp), sans-serif',
              fontSize: 13,
              color: '#fff',
              background: '#3a7fd4',
              padding: '8px 18px',
              borderRadius: 4,
              textDecoration: 'none',
              marginLeft: 8,
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.85'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1'
            }}
          >
            受診のご案内
          </a>
        </div>
      </div>
    </nav>
  )
}
