import Link from 'next/link'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import MobileBottomBar from '@/components/MobileBottomBar'
import { siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'お盆休みのお知らせ',
  description: '松島医院から、お盆休みについてのお知らせです。',
  alternates: {
    canonical: `${siteUrl}/news/obon-holiday`,
  },
  openGraph: {
    title: 'お盆休みのお知らせ | 松島医院',
    description: '松島医院から、お盆休みについてのお知らせです。',
    url: `${siteUrl}/news/obon-holiday`,
    type: 'article',
  },
}

export default function ObonHolidayPage() {
  return (
    <>
      <Nav />

      <main className="article-main">
        <article className="article-shell reveal">
          <p className="breadcrumb">
            <Link href="/#news" className="text-link">お知らせ</Link>
            {' '}&rsaquo;{' '}お盆休みのお知らせ
          </p>

          <header className="article-header">
            <div className="article-meta">
              <span className="pill">お知らせ</span>
              <time dateTime="2026-08-05">2026.08.05</time>
            </div>
            <h1>お盆休みのお知らせ</h1>
          </header>

          <div className="article-body">
            <p>松島医院では、2026年8月13日（木）から8月16日（日）まで、お盆休みのため休業いたします。</p>
            <p>診療は8月17日（月）より通常通り再開いたします。</p>
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
