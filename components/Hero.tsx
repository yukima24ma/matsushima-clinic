'use client'

import Image from 'next/image'
import InfoBar from './InfoBar'

export default function Hero() {
  return (
    <div className="hero-outer" style={{ height: 'calc(100vh - 68px)', display: 'flex', flexDirection: 'column' }}>
      {/* Hero body */}
      <div
        style={{
          flex: 1,
          background: '#f4f7fb',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          className="hero-inner"
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            width: '100%',
            padding: '80px 40px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'center',
          }}
        >
          {/* Left column */}
          <div>
            <p
              style={{
                fontSize: 11,
                letterSpacing: '0.22em',
                color: '#8a96a3',
                marginBottom: 20,
                fontFamily: 'var(--font-noto-sans-jp), sans-serif',
              }}
            >
              地域に根ざした医療 ——
            </p>
            <h1
              className="hero-h1"
              style={{
                fontFamily: 'var(--font-noto-serif-jp), serif',
                fontSize: 44,
                fontWeight: 400,
                color: '#1e2530',
                lineHeight: 1.55,
                letterSpacing: '0.05em',
                marginBottom: 24,
              }}
            >
              あなたの健康を、<br />ともに守ります。
            </h1>
            <p
              style={{
                fontSize: 15,
                fontWeight: 300,
                color: '#5a6472',
                lineHeight: 1.9,
                marginBottom: 40,
                fontFamily: 'var(--font-noto-sans-jp), sans-serif',
              }}
            >
              松島医院は地域の皆様に寄り添い、<br />丁寧で温かな医療を提供しています。
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href="#access"
                style={{
                  fontSize: 13,
                  color: '#fff',
                  background: '#1a4c7c',
                  padding: '13px 26px',
                  borderRadius: 3,
                  letterSpacing: '0.08em',
                  textDecoration: 'none',
                  transition: 'opacity 0.15s',
                  fontFamily: 'var(--font-noto-sans-jp), sans-serif',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
              >
                診療時間・アクセス
              </a>
              <a
                href="#departments"
                style={{
                  fontSize: 13,
                  color: '#1a4c7c',
                  background: 'transparent',
                  border: '1px solid #d8e2ec',
                  padding: '13px 26px',
                  borderRadius: 3,
                  letterSpacing: '0.08em',
                  textDecoration: 'none',
                  transition: 'opacity 0.15s',
                  fontFamily: 'var(--font-noto-sans-jp), sans-serif',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7' }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
              >
                診療科のご案内
              </a>
            </div>
          </div>

          {/* Right column: clinic exterior photo */}
          <div
            className="hero-image-col"
            style={{
              height: 380,
              borderRadius: 4,
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <Image
              src="/clinic-exterior.jpg"
              alt="松島医院 外観"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Info bar at bottom */}
      <InfoBar />
    </div>
  )
}
