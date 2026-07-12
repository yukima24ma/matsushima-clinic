import type { CSSProperties } from 'react'

const departments = [
  { en: 'INTERNAL MEDICINE', ja: '内科', desc: '風邪・生活習慣病・高血圧・動脈硬化症など、幅広い内科疾患の診療を行います。' },
  { en: 'DIABETES & METABOLISM', ja: '糖尿病・代謝内科', desc: '糖尿病・脂質異常症を専門に診療。インスリン治療の外来導入にも対応しています。' },
  { en: 'PEDIATRICS', ja: '小児科', desc: '乳幼児から中学生まで、お子様の健康を専門的にサポートします。' },
  { en: 'HEALTH CHECK-UP', ja: '健康診断', desc: '企業健診・定期健診・生命保険診査など、各種健康診断を実施しています。' },
  { en: 'VACCINATION', ja: '予防接種', desc: 'インフルエンザ・各種ワクチン接種を実施。地域のかかりつけ医として幅広く対応しています。' },
]

export default function Departments() {
  return (
    <section id="departments" className="section section-muted">
      <div className="section-inner">
        <div className="section-header reveal">
          <p className="eyebrow">DEPARTMENTS</p>
          <h2>診療科</h2>
          <p>専門的な医療をわかりやすく、丁寧にご提供します。</p>
        </div>

        <div className="dept-grid">
          {departments.map((dept, index) => (
            <article key={dept.en} className="department-card reveal" style={{ '--reveal-delay': `${index * 55}ms` } as CSSProperties}>
              <p className="card-kicker">{dept.en}</p>
              <h3>{dept.ja}</h3>
              <p>{dept.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
