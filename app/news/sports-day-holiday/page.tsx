import Link from 'next/link'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import MobileBottomBar from '@/components/MobileBottomBar'
import { siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'スポーツの日休業のお知らせ',
  description: '松島医院から、スポーツの日の休業についてのお知らせです。',
  alternates: {
    canonical: `${siteUrl}/news/sports-day-holiday`,
  },
  openGraph: {
    title: 'スポーツの日休業のお知らせ | 松島医院',
    description: '松島医院から、スポーツの日の休業についてのお知らせです。',
    url: `${siteUrl}/news/sports-day-holiday`,
    type: 'article',
  },
}

export default function SportsDayHolidayPage() {
  return (
    <>
      <Nav />

      <main className="article-main">
        <article className="article-shell reveal">
          <p className="breadcrumb">
            <Link href="/#news" className="text-link">お知らせ</Link>
            {' '}&rsaquo;{' '}スポーツの日休業のお知らせ
          </p>

          <header className="article-header">
            <div className="article-meta">
              <span className="pill">お知らせ</span>
              <time dateTime="2026-10-05">2026.10.05</time>
            </div>
            <h1>スポーツの日休業のお知らせ</h1>
          </header>

          <div className="article-body">
            <p>松島医院では、2026年10月12日（月・祝）はスポーツの日のため休業いたします。</p>
            <p>診療は10月13日（火）より通常通り再開いたします。</p>
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
