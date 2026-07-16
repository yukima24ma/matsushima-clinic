import Link from 'next/link'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import MobileBottomBar from '@/components/MobileBottomBar'
import { siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: '海の日休診のお知らせ',
  description: '松島医院から、海の日の休診についてのお知らせです。',
  alternates: {
    canonical: `${siteUrl}/news/marine-day-holiday`,
  },
  openGraph: {
    title: '海の日休診のお知らせ | 松島医院',
    description: '松島医院から、海の日の休診についてのお知らせです。',
    url: `${siteUrl}/news/marine-day-holiday`,
    type: 'article',
  },
}

export default function MarineDayHolidayPage() {
  return (
    <>
      <Nav />

      <main className="article-main">
        <article className="article-shell reveal">
          <p className="breadcrumb">
            <Link href="/#news" className="text-link">お知らせ</Link>
            {' '}&rsaquo;{' '}海の日休診のお知らせ
          </p>

          <header className="article-header">
            <div className="article-meta">
              <span className="pill">お知らせ</span>
              <time dateTime="2026-07-16">2026.07.16</time>
            </div>
            <h1>海の日休診のお知らせ</h1>
          </header>

          <div className="article-body">
            <p>松島医院では、2026年7月20日（月・祝）は海の日のため休診いたします。</p>
            <p>診療は7月21日（火）より通常通り再開いたします。</p>
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
