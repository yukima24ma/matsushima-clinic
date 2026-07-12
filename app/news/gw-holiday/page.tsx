import Link from 'next/link'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import MobileBottomBar from '@/components/MobileBottomBar'
import { siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'ゴールデンウィークの休診のお知らせ',
  description: '西宮市甲子園口の松島医院から、ゴールデンウィーク期間の休診日についてのお知らせです。',
  alternates: {
    canonical: `${siteUrl}/news/gw-holiday`,
  },
  openGraph: {
    title: 'ゴールデンウィークの休診のお知らせ | 松島医院',
    description: '西宮市甲子園口の松島医院から、ゴールデンウィーク期間の休診日についてのお知らせです。',
    url: `${siteUrl}/news/gw-holiday`,
    type: 'article',
  },
}

export default function GwHolidayPage() {
  return (
    <>
      <Nav />

      <main className="article-main">
        <article className="article-shell reveal">
          <p className="breadcrumb">
            <Link href="/#news" className="text-link">お知らせ</Link>
            {' '}&rsaquo;{' '}ゴールデンウィークの休診のお知らせ
          </p>

          <header className="article-header">
            <div className="article-meta">
              <span className="pill">お知らせ</span>
              <time dateTime="2026-04-25">2026.04.25</time>
            </div>
            <h1>ゴールデンウィークの休診のお知らせ</h1>
          </header>

          <div className="article-body">
            <p>平素より松島医院をご利用いただきまして、誠にありがとうございます。</p>
            <p>下記の期間、ゴールデンウィークのため休診とさせていただきます。</p>

            <div className="notice-box">
              <p>休診期間</p>
              <strong>5/X（X）- 5/X（X）</strong>
            </div>

            <p>ご不便をおかけいたしますが、何卒ご理解のほどよろしくお願いいたします。</p>
            <p>
              なお、<strong>5/X（X）より通常通り診療</strong>させていただきます。
            </p>
            <p>どうぞよろしくお願いいたします。</p>
          </div>

          <footer className="article-footer">
            <Link href="/#news" className="text-link">← お知らせ一覧へ戻る</Link>
          </footer>
        </article>
      </main>

      <Footer />
      <MobileBottomBar />
    </>
  )
}
