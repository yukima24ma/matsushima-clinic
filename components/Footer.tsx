'use client'

const linkCols = [
  {
    heading: '診療科',
    links: ['内科', '糖尿病・代謝内科', '小児科', '健康診断・予防接種'],
  },
  {
    heading: '案内',
    links: ['医師紹介', 'お知らせ', 'アクセス', '受診のご案内'],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#1a4c7c', color: '#fff', padding: '48px 40px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Top row: logo + link columns */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 40,
          }}
        >
          {/* Logo */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-noto-serif-jp), serif',
                fontSize: 20,
                letterSpacing: '0.08em',
                marginBottom: 6,
              }}
            >
              松島医院
            </p>
            <p
              style={{
                fontSize: 11,
                opacity: 0.55,
                letterSpacing: '0.12em',
                fontFamily: 'var(--font-noto-sans-jp), sans-serif',
              }}
            >
              MATSUSHIMA CLINIC
            </p>
          </div>

          {/* Link columns */}
          <div style={{ display: 'flex', gap: 64 }}>
            {linkCols.map((col) => (
              <div key={col.heading}>
                <p
                  style={{
                    fontSize: 11,
                    opacity: 0.5,
                    letterSpacing: '0.14em',
                    marginBottom: 16,
                    fontFamily: 'var(--font-noto-sans-jp), sans-serif',
                  }}
                >
                  {col.heading}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {col.links.map((link) => (
                    <li key={link} style={{ marginBottom: 10 }}>
                      <a
                        href="#"
                        style={{
                          fontSize: 13,
                          color: 'rgba(255,255,255,0.75)',
                          textDecoration: 'none',
                          fontFamily: 'var(--font-noto-sans-jp), sans-serif',
                          transition: 'opacity 0.15s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'rgba(255,255,255,1)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
                        }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom rule + copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.15)',
            paddingTop: 20,
          }}
        >
          <p
            style={{
              fontSize: 12,
              opacity: 0.45,
              fontFamily: 'var(--font-noto-sans-jp), sans-serif',
            }}
          >
            © {new Date().getFullYear()} 松島医院 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
