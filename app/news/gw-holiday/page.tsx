import Link from 'next/link'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import MobileBottomBar from '@/components/MobileBottomBar'

export const metadata: Metadata = {
  title: 'ゴールデンウィークの休診のお知らせ | 松島医院',
}

export default function GwHolidayPage() {
  return (
    <>
      <Nav />

      {/* Article */}
      <main className="article-main" style={{ background: '#f4f7fb', minHeight: 'calc(100vh - 68px)', padding: '64px 40px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>

          {/* Breadcrumb */}
          <p style={{ fontSize: 12, color: '#8a96a3', fontFamily: 'var(--font-noto-sans-jp), sans-serif', marginBottom: 32 }}>
            <Link href="/#news" style={{ color: '#3a7fd4', textDecoration: 'none' }}>お知らせ</Link>
            {' '}&rsaquo;{' '}ゴールデンウィークの休診のお知らせ
          </p>

          {/* Header */}
          <div style={{ borderBottom: '1px solid #d8e2ec', paddingBottom: 24, marginBottom: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span style={{ background: '#d0e4f5', color: '#1a4c7c', fontSize: 10, padding: '3px 8px', borderRadius: 2, fontFamily: 'var(--font-noto-sans-jp), sans-serif' }}>
                お知らせ
              </span>
              <span style={{ fontSize: 12, color: '#8a96a3', fontFamily: 'var(--font-noto-sans-jp), sans-serif' }}>
                2026.04.25
              </span>
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-noto-serif-jp), serif',
                fontSize: 28,
                fontWeight: 400,
                color: '#1e2530',
                lineHeight: 1.6,
                letterSpacing: '0.04em',
              }}
            >
              ゴールデンウィークの休診のお知らせ
            </h1>
          </div>

          {/* Body */}
          <div
            style={{
              fontSize: 15,
              fontFamily: 'var(--font-noto-sans-jp), sans-serif',
              fontWeight: 300,
              color: '#1e2530',
              lineHeight: 2,
              letterSpacing: '0.02em',
            }}
          >
            <p style={{ marginBottom: 24 }}>
              平素より松島医院をご利用いただきまして、誠にありがとうございます。
            </p>
            <p style={{ marginBottom: 24 }}>
              下記の期間、ゴールデンウィークのため休診とさせていただきます。
            </p>

            {/* Holiday period box */}
            <div
              style={{
                background: '#f4f7fb',
                border: '1px solid #d8e2ec',
                borderLeft: '3px solid #1a4c7c',
                borderRadius: 3,
                padding: '20px 24px',
                margin: '32px 0',
              }}
            >
              <p style={{ fontSize: 13, color: '#8a96a3', letterSpacing: '0.14em', marginBottom: 8, fontFamily: 'var(--font-noto-sans-jp), sans-serif' }}>
                休診期間
              </p>
              <p style={{ fontSize: 18, fontFamily: 'var(--font-noto-serif-jp), serif', color: '#1e2530', letterSpacing: '0.05em' }}>
                5/X（X）〜 5/X（X）
              </p>
            </div>

            <p style={{ marginBottom: 24 }}>
              ご不便をおかけいたしますが、何卒ご理解のほどよろしくお願いいたします。
            </p>
            <p style={{ marginBottom: 40 }}>
              なお、<strong style={{ fontWeight: 500 }}>5/X（X）より通常通り診療</strong>させていただきます。
            </p>
            <p>どうぞよろしくお願いいたします。</p>
          </div>

          {/* Back link */}
          <div style={{ marginTop: 56, paddingTop: 32, borderTop: '1px solid #d8e2ec' }}>
            <Link
              href="/#news"
              style={{
                fontSize: 13,
                color: '#3a7fd4',
                fontFamily: 'var(--font-noto-sans-jp), sans-serif',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              ← お知らせ一覧へ戻る
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <MobileBottomBar />
    </>
  )
}
