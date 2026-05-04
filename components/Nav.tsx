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
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
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
          className="nav-container"
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
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

          {/* Desktop nav links + CTA */}
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
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
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
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
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
            >
              受診のご案内
            </a>
          </div>

          {/* Hamburger button (mobile only) */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 3L17 17M3 17L17 3" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                <path d="M1 1H21M1 8H21M1 15H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 68,
            left: 0,
            right: 0,
            background: '#1a4c7c',
            zIndex: 49,
            borderTop: '1px solid rgba(255,255,255,0.15)',
            paddingBottom: 16,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '14px 28px',
                fontFamily: 'var(--font-noto-sans-jp), sans-serif',
                fontSize: 15,
                color: 'rgba(255,255,255,0.9)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#access"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block',
              margin: '16px 28px 4px',
              padding: '12px 20px',
              background: '#3a7fd4',
              borderRadius: 4,
              fontFamily: 'var(--font-noto-sans-jp), sans-serif',
              fontSize: 14,
              color: '#fff',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            受診のご案内
          </a>
        </div>
      )}
    </>
  )
}
