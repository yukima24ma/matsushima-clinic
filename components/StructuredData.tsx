import { clinic, siteUrl, targetAreas, targetServices } from '@/lib/seo'

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  '@id': `${siteUrl}/#clinic`,
  name: clinic.name,
  alternateName: clinic.englishName,
  url: siteUrl,
  image: `${siteUrl}/clinic-exterior.jpg`,
  description: clinic.description,
  telephone: clinic.phone,
  address: {
    '@type': 'PostalAddress',
    postalCode: clinic.postalCode,
    addressRegion: '兵庫県',
    addressLocality: '西宮市',
    streetAddress: '甲子園口3丁目22番4号',
    addressCountry: 'JP',
  },
  areaServed: targetAreas.map((area) => ({
    '@type': 'AdministrativeArea',
    name: area,
  })),
  medicalSpecialty: ['InternalMedicine', 'Endocrine', 'Pediatric'],
  availableService: targetServices.map((service) => ({
    '@type': 'MedicalProcedure',
    name: service,
  })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
      opens: '09:00',
      closes: '12:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
      opens: '16:30',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '12:00',
    },
  ],
  hasMap: 'https://maps.google.com/maps?q=西宮市甲子園口３丁目２２番４号',
  publicAccess: true,
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: `${clinic.name} | ${clinic.englishName}`,
  url: siteUrl,
  inLanguage: 'ja',
  publisher: {
    '@id': `${siteUrl}/#clinic`,
  },
}

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  )
}
