const linkCols = [
  {
    heading: '診療科',
    links: [
      { label: '内科', href: '/#departments' },
      { label: '糖尿病・代謝内科', href: '/#departments' },
      { label: '小児科', href: '/#departments' },
      { label: '健康診断・予防接種', href: '/#departments' },
      { label: '受診のご案内', href: '/#local-care' },
    ],
  },
  {
    heading: '案内',
    links: [
      { label: '医師紹介', href: '/#doctors' },
      { label: '受診のご案内', href: '/#local-care' },
      { label: 'お知らせ', href: '/#news' },
      { label: 'アクセス', href: '/#access' },
      { label: '受診のご案内', href: '/#access' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <p>松島医院</p>
            <span>MATSUSHIMA CLINIC</span>
          </div>

          <div className="footer-cols">
            {linkCols.map((col) => (
              <div key={col.heading}>
                <p>{col.heading}</p>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} 松島医院 All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
