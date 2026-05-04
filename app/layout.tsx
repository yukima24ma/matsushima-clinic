import type { Metadata } from 'next'
import { Noto_Serif_JP, Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '松島医院 | Matsushima Clinic',
  description: '松島医院は地域の皆様に寄り添い、丁寧で温かな医療を提供しています。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${notoSansJP.variable}`}>
      <body>{children}</body>
    </html>
  )
}
