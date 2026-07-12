import Image from 'next/image'
import InfoBar from './InfoBar'

export default function Hero() {
  return (
    <section className="hero-outer">
      <div className="hero-stage">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">地域に根ざした医療</p>
            <h1 className="hero-h1">
              あなたの健康を、<br />ともに守ります。
            </h1>
            <p className="hero-lead">
              西宮市甲子園口の松島医院は、地域の皆様に寄り添い、日々の不調から生活習慣病、小児診療まで丁寧で温かな医療を提供しています。
            </p>
            <div className="hero-actions">
              <a href="#access" className="btn-primary">
                診療時間・アクセス
              </a>
              <a href="#departments" className="btn-secondary">
                診療科のご案内
              </a>
            </div>
          </div>

          <div className="hero-visual-wrap">
            <div className="hero-image-col">
              <Image
                src="/clinic-exterior.jpg"
                alt="松島医院 外観"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="hero-image"
                priority
              />
            </div>
            <div className="hero-status-panel">
              <span>本日の診療</span>
              <strong>9:00-12:00 / 16:30-19:00</strong>
              <small>木曜・日曜・祝日休診</small>
            </div>
          </div>
        </div>
      </div>
      <InfoBar />
    </section>
  )
}
