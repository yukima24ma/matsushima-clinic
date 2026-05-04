const items = [
  { label: '受付時間', value: '午前 9:00〜12:00 / 午後 16:30〜19:00' },
  { label: '休診日', value: '木曜・日曜・祝日' },
  { label: '電話番号', value: '0798-67-1071' },
]

export default function InfoBar() {
  return (
    <div style={{ background: '#1a4c7c', color: '#fff', flexShrink: 0 }}>
      <div
        className="infobar-inner"
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          padding: '0 40px',
        }}
      >
        {items.map((item, i) => (
          <div
            key={item.label}
            className="infobar-cell"
            style={{
              padding: '20px 32px',
              borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.2)' : 'none',
            }}
          >
            <p
              style={{
                fontSize: 10,
                letterSpacing: '0.18em',
                opacity: 0.65,
                marginBottom: 6,
                fontFamily: 'var(--font-noto-sans-jp), sans-serif',
              }}
            >
              {item.label}
            </p>
            <p
              style={{
                fontSize: 14,
                fontWeight: 500,
                fontFamily: 'var(--font-noto-sans-jp), sans-serif',
              }}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
