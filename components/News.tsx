import Link from 'next/link'

const newsItems = [
  { date: '2026.07.16', tag: 'お知らせ', title: '海の日休診のお知らせ', href: '/news/marine-day-holiday' },
  { date: '2026.07.12', tag: 'お知らせ', title: 'ホームページリニューアルのお知らせ', href: '/news/homepage-renewal' },
]

export default function News() {
  return (
    <section id="news" className="section section-muted">
      <div className="section-inner">
        <div className="section-header reveal">
          <p className="eyebrow">NEWS</p>
          <h2>お知らせ</h2>
        </div>

        <div className="news-list reveal">
          {newsItems.map((item) => (
            <Link key={item.href} href={item.href} className="news-item">
              <span className="news-date">{item.date}</span>
              <span className="pill">{item.tag}</span>
              <span className="news-item-title">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
