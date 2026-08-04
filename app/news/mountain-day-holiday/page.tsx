import Link from 'next/link'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import MobileBottomBar from '@/components/MobileBottomBar'
import { siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: '山の日休業のお知らせ',
  description: '松島医院から、山の日の休業についてのお知らせです。',
  alternates: {
    canonical: `${siteUrl}/news/mountain-day-holiday`,
  },
  openGraph: {
    title: '山の日休業のお知らせ | 松島医院',
    description: '松島医院から、山の日の休業についてのお知らせです。',
    url: `${siteUrl}/news/mountain-day-holiday`,
    type: 'article',
  },
}

export default function MountainDayHolidayPage() {
  return (
    <>
      <Nav />

      <main className="article-main">
        <article className="article-shell reveal">
          <p className="breadcrumb">
            <Link href="/#news" className="text-link">お知らせ</Link>
            {' '}&rsaquo;{' '}山の日休業のお知らせ
          </p>

          <header className="article-header">
            <div className="article-meta">
              <span className="pill">お知らせ</span>
              <time dateTime="2026-08-05">2026.08.05</time>
            </div>
            <h1>山の日休業のお知らせ</h1>
          </header>

          <div className="article-body">
            <p>松島医院では、2026年8月11日（火・祝）は山の日のため休業いたします。</p>
            <p>診療は8月12日（水）より通常通り再開いたします。</p>
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
