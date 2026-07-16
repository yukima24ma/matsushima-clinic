import Link from 'next/link'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import MobileBottomBar from '@/components/MobileBottomBar'
import { siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'ホームページリニューアルのお知らせ',
  description: '松島医院から、ホームページリニューアルについてのお知らせです。',
  alternates: {
    canonical: `${siteUrl}/news/homepage-renewal`,
  },
  openGraph: {
    title: 'ホームページリニューアルのお知らせ | 松島医院',
    description: '松島医院から、ホームページリニューアルについてのお知らせです。',
    url: `${siteUrl}/news/homepage-renewal`,
    type: 'article',
  },
}

export default function HomepageRenewalPage() {
  return (
    <>
      <Nav />

      <main className="article-main">
        <article className="article-shell reveal">
          <p className="breadcrumb">
            <Link href="/#news" className="text-link">お知らせ</Link>
            {' '}&rsaquo;{' '}ホームページリニューアルのお知らせ
          </p>

          <header className="article-header">
            <div className="article-meta">
              <span className="pill">お知らせ</span>
              <time dateTime="2026-07-12">2026.07.12</time>
            </div>
            <h1>ホームページリニューアルのお知らせ</h1>
          </header>

          <div className="article-body">
            <p>このたび、松島医院のホームページをリニューアルいたしました。</p>
            <p>
              診療内容やアクセス、お知らせなどをより見やすく掲載しておりますので、公式サイト
              （<Link href={siteUrl} className="text-link">{siteUrl}</Link>）よりご確認ください。
            </p>
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
