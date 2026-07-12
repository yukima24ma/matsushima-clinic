'use client'

import { useEffect, useState } from 'react'

const navLinks = [
  { label: '診療科', href: '/#departments' },
  { label: '医師紹介', href: '/#doctors' },
  { label: 'はじめての方へ', href: '/#local-care' },
  { label: 'お知らせ', href: '/#news' },
  { label: 'アクセス', href: '/#access' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
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
      <nav className={`site-nav${scrolled ? ' is-scrolled' : ''}`}>
        <div className="nav-container">
          <a href="/" className="nav-brand" aria-label="松島医院 ホーム">
            <span>松島医院</span>
            <small>MATSUSHIMA CLINIC</small>
          </a>

          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            <a href="/#access" className="nav-cta">
              診療時間
            </a>
          </div>

          <button
            type="button"
            className="nav-hamburger icon-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 3L17 17M3 17L17 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
                <path d="M1 1H21M1 8H21M1 15H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`mobile-menu${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="mobile-nav-link">
            {link.label}
          </a>
        ))}
        <a href="/#access" onClick={() => setMenuOpen(false)} className="mobile-nav-cta">
          診療時間
        </a>
      </div>
    </>
  )
}
