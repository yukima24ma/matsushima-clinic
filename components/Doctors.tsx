const doctors = [
  {
    name: '松島 洋之',
    title: '院長',
    dept: '内科・糖尿病・代謝内科・小児科',
    tag: '院長',
    desc: '糖尿病・動脈硬化症を専門とし、インスリン治療の外来導入にも積極的に取り組んでいます。地域の皆様に寄り添い、丁寧で温かな医療を提供しています。',
  },
]

export default function Doctors() {
  return (
    <section id="doctors" style={{ background: '#fff', padding: '88px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ marginBottom: 48 }}>
          <p
            style={{
              fontSize: 11,
              color: '#3a7fd4',
              letterSpacing: '0.24em',
              marginBottom: 12,
              fontFamily: 'var(--font-noto-sans-jp), sans-serif',
            }}
          >
            DOCTORS
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-noto-serif-jp), serif',
              fontSize: 32,
              fontWeight: 400,
              color: '#1e2530',
              marginBottom: 12,
            }}
          >
            医師紹介
          </h2>
          <p
            style={{
              fontSize: 14,
              color: '#5a6472',
              fontFamily: 'var(--font-noto-sans-jp), sans-serif',
              fontWeight: 300,
            }}
          >
            経験豊富な医師が、皆様の健康をサポートします。
          </p>
        </div>

        {/* single doctor: photo left, info right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '300px 1fr',
            gap: 48,
            alignItems: 'start',
          }}
        >
          {/* Photo */}
          <div
            style={{
              height: 360,
              borderRadius: 3,
              background: 'repeating-linear-gradient(45deg, #dde6f0 0px, #dde6f0 10px, #eaf0f7 10px, #eaf0f7 20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontSize: 12,
                color: '#8a96a3',
                fontFamily: 'var(--font-noto-sans-jp), sans-serif',
                background: 'rgba(255,255,255,0.7)',
                padding: '6px 12px',
                borderRadius: 3,
              }}
            >
              写真
            </span>
          </div>

          {/* Info */}
          <div style={{ paddingTop: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span
                style={{
                  background: '#d0e4f5',
                  color: '#1a4c7c',
                  fontSize: 10,
                  padding: '3px 8px',
                  borderRadius: 2,
                  fontFamily: 'var(--font-noto-sans-jp), sans-serif',
                }}
              >
                院長
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: '#8a96a3',
                  fontFamily: 'var(--font-noto-sans-jp), sans-serif',
                }}
              >
                {doctors[0].dept}
              </span>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-noto-serif-jp), serif',
                fontSize: 28,
                color: '#1e2530',
                marginBottom: 20,
                letterSpacing: '0.05em',
              }}
            >
              {doctors[0].name}
            </p>

            <p
              style={{
                fontSize: 14,
                fontWeight: 300,
                color: '#5a6472',
                lineHeight: 2,
                fontFamily: 'var(--font-noto-sans-jp), sans-serif',
                marginBottom: 24,
              }}
            >
              {doctors[0].desc}
            </p>

            <div
              style={{
                borderTop: '1px solid #d8e2ec',
                paddingTop: 20,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              {[
                { label: '専門', value: '糖尿病・動脈硬化症' },
                { label: '専門外来', value: '予防接種・健康診断・生命保険診査' },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', gap: 24 }}>
                  <span style={{ fontSize: 11, color: '#8a96a3', fontFamily: 'var(--font-noto-sans-jp), sans-serif', minWidth: 72 }}>{label}</span>
                  <span style={{ fontSize: 13, color: '#1e2530', fontFamily: 'var(--font-noto-sans-jp), sans-serif', fontWeight: 300 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
