import type { Metadata } from 'next'
import { Noto_Serif_JP, Noto_Sans_JP } from 'next/font/google'
import { clinic, siteUrl } from '@/lib/seo'
import './globals.css'
import './responsive.css'

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
  metadataBase: new URL(siteUrl),
  title: {
    default: '松島医院 | 西宮市甲子園口の地域に根ざした医院',
    template: '%s | 松島医院',
  },
  description: clinic.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteUrl,
    siteName: `${clinic.name} | ${clinic.englishName}`,
    title: '松島医院 | 西宮市甲子園口の地域に根ざした医院',
    description: clinic.description,
    images: [
      {
        url: '/clinic-exterior.jpg',
        width: 1448,
        height: 1086,
        alt: '西宮市甲子園口の松島医院 外観',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '松島医院 | 西宮市甲子園口の地域に根ざした医院',
    description: clinic.description,
    images: ['/clinic-exterior.jpg'],
  },
  category: 'medical clinic',
  formatDetection: {
    telephone: true,
    address: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" data-scroll-behavior="smooth" className={`${notoSerifJP.variable} ${notoSansJP.variable}`}>
      <body>{children}</body>
    </html>
  )
}
