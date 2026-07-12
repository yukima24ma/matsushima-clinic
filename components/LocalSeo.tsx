const localPoints = [
  {
    title: '駅から歩いて通いやすく',
    body: 'JR神戸線 甲子園口駅から徒歩7分。日々の体調管理や継続的な診療にも通いやすい場所にあります。',
  },
  {
    title: '身近な不調から継続診療まで',
    body: '風邪、発熱、生活習慣病、高血圧、脂質異常症など、気になる症状を早めに相談できる診療を大切にしています。',
  },
  {
    title: '糖尿病・代謝の診療にも',
    body: '糖尿病や動脈硬化症について、専門性を持ちながらもわかりやすく、生活に寄り添った診療を行います。',
  },
]

export default function LocalSeo() {
  return (
    <section id="local-care" className="section section-local">
      <div className="section-inner">
        <div className="local-care-layout">
          <div className="section-header reveal">
            <p className="eyebrow">FOR VISITORS</p>
            <h2>地域の皆様が安心して相談できる場所であるために</h2>
            <p>
              松島医院は西宮市甲子園口で、地域のかかりつけ医として診療を続けています。はじめての方にも、長く通われている方にも、落ち着いて相談いただける医院を目指しています。
            </p>
          </div>

          <div className="local-card-list reveal">
            {localPoints.map((point) => (
              <article key={point.title} className="local-card">
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
