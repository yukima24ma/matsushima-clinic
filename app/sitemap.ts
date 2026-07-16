import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-07-12T00:00:00+09:00')

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      images: [`${siteUrl}/clinic-exterior.jpg`],
    },
    {
      url: `${siteUrl}/news/homepage-renewal`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ]
}
