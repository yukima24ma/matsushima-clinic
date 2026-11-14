import Link from 'next/link'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import MobileBottomBar from '@/components/MobileBottomBar'
import { siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: '勤労感謝の日休業のお知らせ',
  description: '松島医院から、勤労感謝の日の休業についてのお知らせです。',
  alternates: {
    canonical: `${siteUrl}/news/labor-thanksgiving-day-holiday`,
  },
  openGraph: {
    title: '勤労感謝の日休業のお知らせ | 松島医院',
    description: '松島医院から、勤労感謝の日の休業についてのお知らせです。',
    url: `${siteUrl}/news/labor-thanksgiving-day-holiday`,
    type: 'article',
  },
}

export default function LaborThanksgivingDayHolidayPage() {
  return (
    <>
      <Nav />

      <main className="article-main">
        <article className="article-shell reveal">
          <p className="breadcrumb">
            <Link href="/#news" className="text-link">お知らせ</Link>
            {' '}&rsaquo;{' '}勤労感謝の日休業のお知らせ
          </p>

          <header className="article-header">
            <div className="article-meta">
              <span className="pill">お知らせ</span>
              <time dateTime="2026-11-14">2026.11.14</time>
            </div>
            <h1>勤労感謝の日休業のお知らせ</h1>
          </header>

          <div className="article-body">
            <p>松島医院では、2026年11月23日（月・祝）は勤労感謝の日のため休業いたします。</p>
            <p>診療は11月24日（火）より通常通り再開いたします。</p>
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
