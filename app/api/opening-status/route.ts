import { fallbackOpeningStatus, formatGoogleOpeningStatus } from '@/lib/opening-status'

export const dynamic = 'force-dynamic'

type GooglePlaceResponse = {
  currentOpeningHours?: {
    openNow?: boolean
    weekdayDescriptions?: string[]
  }
}

export async function GET() {
  const fallback = fallbackOpeningStatus()
  const apiKey = process.env.GOOGLE_MAPS_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return Response.json(fallback, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    })
  }

  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=ja&regionCode=JP`, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'currentOpeningHours',
      },
      next: {
        revalidate: 1800,
      },
    })

    if (!response.ok) {
      return Response.json(fallback, {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        },
      })
    }

    const data = (await response.json()) as GooglePlaceResponse
    const googleStatus = formatGoogleOpeningStatus(data.currentOpeningHours)

    return Response.json(googleStatus ?? fallback, {
      headers: {
        'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600',
      },
    })
  } catch {
    return Response.json(fallback, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    })
  }
}
