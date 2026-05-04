const addressRows = [
  { label: '住所', value: '〒663-8113\n西宮市甲子園口３丁目２２番４号' },
  { label: '電話番号', value: '0798-67-1071' },
  { label: '最寄り駅', value: 'JR神戸線 甲子園口駅 徒歩7分\n駅南出口より本通り商店街を南へ6分\n栄徳大神で右折し1分' },
  { label: '駐車場', value: '1台完備' },
]

const days = ['月', '火', '水', '木', '金', '土', '日']
const hoursGrid = [
  { label: '午前 9:00〜12:00', slots: [true, true, true, false, true, true, false] },
  { label: '午後 16:30〜19:00', slots: [true, true, true, false, true, false, false] },
]

export default function Access() {
  return (
    <section id="access" className="resp-section-pad" style={{ background: '#fff', padding: '88px 40px' }}>
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
            ACCESS
          </p>
          <h2
            className="resp-h2"
            style={{
              fontFamily: 'var(--font-noto-serif-jp), serif',
              fontSize: 32,
              fontWeight: 400,
              color: '#1e2530',
            }}
          >
            アクセス
          </h2>
        </div>

        {/* 2-column layout */}
        <div
          className="access-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'start',
          }}
        >
          {/* Left: address + hours tables */}
          <div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {addressRows.map(({ label, value }) => (
                  <tr key={label} style={{ borderBottom: '1px solid #d8e2ec' }}>
                    <td style={{ padding: '18px 0', width: 100, verticalAlign: 'top' }}>
                      <span
                        style={{
                          fontSize: 11,
                          color: '#8a96a3',
                          fontFamily: 'var(--font-noto-sans-jp), sans-serif',
                          letterSpacing: '0.1em',
                        }}
                      >
                        {label}
                      </span>
                    </td>
                    <td style={{ padding: '18px 0 18px 24px', verticalAlign: 'top' }}>
                      <span
                        style={{
                          fontSize: 14,
                          color: '#1e2530',
                          fontFamily: 'var(--font-noto-sans-jp), sans-serif',
                          fontWeight: 300,
                          lineHeight: 1.7,
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {value}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Hours table */}
            <div style={{ marginTop: 40 }}>
              <p
                style={{
                  fontSize: 11,
                  color: '#8a96a3',
                  letterSpacing: '0.18em',
                  marginBottom: 16,
                  fontFamily: 'var(--font-noto-sans-jp), sans-serif',
                }}
              >
                診療時間
              </p>
              <div className="hours-table-scroll">
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, fontFamily: 'var(--font-noto-sans-jp), sans-serif' }}>
                  <thead>
                    <tr style={{ background: '#f4f7fb' }}>
                      <th style={{ padding: '10px 12px', fontWeight: 300, color: '#8a96a3', textAlign: 'left', border: '1px solid #d8e2ec', minWidth: 160 }} />
                      {days.map((d) => (
                        <th key={d} style={{ padding: '10px 0', fontWeight: 400, color: '#1e2530', textAlign: 'center', border: '1px solid #d8e2ec', width: 44 }}>
                          {d}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {hoursGrid.map(({ label, slots }) => (
                      <tr key={label} style={{ background: '#fafcfe' }}>
                        <td style={{ padding: '12px', color: '#5a6472', fontWeight: 300, border: '1px solid #d8e2ec' }}>
                          {label}
                        </td>
                        {slots.map((open, i) => (
                          <td key={i} style={{ padding: '12px 0', textAlign: 'center', border: '1px solid #d8e2ec', color: open ? '#1a4c7c' : '#8a96a3' }}>
                            {open ? '○' : '—'}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ marginTop: 10, fontSize: 12, color: '#8a96a3', fontFamily: 'var(--font-noto-sans-jp), sans-serif' }}>
                休診日：木、日、祝日
              </p>
            </div>
          </div>

          {/* Right: Google Maps embed */}
          <div>
            <iframe
              src="https://maps.google.com/maps?q=西宮市甲子園口３丁目２２番４号&hl=ja&output=embed"
              width="100%"
              height="340"
              style={{ border: 0, borderRadius: 3, display: 'block', maxWidth: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="松島医院 地図"
            />
            <p
              style={{
                color: '#8a96a3',
                fontSize: 12,
                fontFamily: 'var(--font-noto-sans-jp), sans-serif',
                marginTop: 8,
              }}
            >
              〒663-8113 西宮市甲子園口３丁目２２番４号
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
