import Image from 'next/image'

const doctor = {
  name: '松島 洋之',
  reading: 'まつしま ひろゆき',
  englishName: 'Hiroyuki Matsushima, M.D., Ph.D.',
  dept: '内科・糖尿病・代謝内科・小児科',
  desc: '国立大阪病院内科、大阪大学医学部第一内科、大阪府立病院消化器代謝内科で、糖尿病および動脈硬化症の診療・研究に従事。現在は松島医院院長として、糖尿病・代謝疾患を中心に、一般内科および小児科の診療を行っています。',
}

const details = [
  { label: '資格', value: '医師・博士（医学）' },
  { label: '役職', value: '日本糖尿病学会近畿支部評議員' },
  { label: '専門', value: '糖尿病・代謝疾患・動脈硬化症' },
]

export default function Doctors() {
  return (
    <section id="doctors" className="section section-white">
      <div className="section-inner">
        <div className="section-header reveal">
          <p className="eyebrow">DOCTORS</p>
          <h2>医師紹介</h2>
          <p>経験豊富な医師が、皆様の健康をサポートします。</p>
        </div>

        <div className="doctor-feature reveal">
          <div className="doctor-panel">
            <Image
              src="/matsushima-prof-pic.png"
              alt="院長 松島 洋之"
              fill
              sizes="(max-width: 768px) calc(100vw - 40px), 380px"
              className="doctor-photo"
            />
          </div>

          <div className="doctor-copy">
            <div className="doctor-meta">
              <span>院長</span>
              <small>{doctor.dept}</small>
            </div>
            <h3>
              {doctor.name}
              <small>（{doctor.reading}）</small>
            </h3>
            <p className="doctor-english-name">{doctor.englishName}</p>
            <p>{doctor.desc}</p>

            <dl className="doctor-details">
              {details.map(({ label, value }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
