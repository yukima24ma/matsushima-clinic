export default function MobileBottomBar() {
  return (
    <div
      className="mobile-bar"
      style={{
        display: 'none',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#1a4c7c',
        zIndex: 100,
        borderTop: '2px solid rgba(255,255,255,0.15)',
      }}
    >
      <a
        href="tel:0798-67-1071"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          padding: '10px 4px',
          textDecoration: 'none',
          color: '#fff',
          fontFamily: 'var(--font-noto-sans-jp), sans-serif',
          borderRight: '1px solid rgba(255,255,255,0.15)',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .93h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
        <span style={{ fontSize: 11, letterSpacing: '0.04em' }}>電話する</span>
      </a>
      <a
        href="/#access"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          padding: '10px 4px',
          textDecoration: 'none',
          color: '#fff',
          fontFamily: 'var(--font-noto-sans-jp), sans-serif',
          borderRight: '1px solid rgba(255,255,255,0.15)',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span style={{ fontSize: 11, letterSpacing: '0.04em' }}>アクセス</span>
      </a>
      <a
        href="/#access"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          padding: '10px 4px',
          textDecoration: 'none',
          color: '#fff',
          fontFamily: 'var(--font-noto-sans-jp), sans-serif',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span style={{ fontSize: 11, letterSpacing: '0.04em' }}>診療時間</span>
      </a>
    </div>
  )
}
