export type OpeningStatus = {
  label: string
  primary: string
  secondary: string
  openNow: boolean | null
  source: 'google' | 'fallback'
}

type GoogleOpeningHours = {
  openNow?: boolean
  weekdayDescriptions?: string[]
}

const fallbackWeek = [
  { day: '日', label: '日曜', hours: null },
  { day: '月', label: '月曜', hours: '9:00-12:00 / 16:30-19:00' },
  { day: '火', label: '火曜', hours: '9:00-12:00 / 16:30-19:00' },
  { day: '水', label: '水曜', hours: '9:00-12:00 / 16:30-19:00' },
  { day: '木', label: '木曜', hours: null },
  { day: '金', label: '金曜', hours: '9:00-12:00 / 16:30-19:00' },
  { day: '土', label: '土曜', hours: '9:00-12:00' },
]

const dayLabels = ['日', '月', '火', '水', '木', '金', '土']
const closedPattern = /(休業|定休日|休診|closed)/i

export function fallbackOpeningStatus(now = new Date()): OpeningStatus {
  const weekday = getTokyoWeekdayIndex(now)
  const today = fallbackWeek[weekday]
  const nextOpen = findNextFallbackOpenDay(weekday)

  if (!today.hours) {
    return {
      label: '本日の診療',
      primary: '本日は休診です',
      secondary: nextOpen ? `次回: ${nextOpen.label} ${nextOpen.hours}` : '木曜・日曜・祝日休診',
      openNow: false,
      source: 'fallback',
    }
  }

  return {
    label: '本日の診療',
    primary: today.hours,
    secondary: '木曜・日曜・祝日休診',
    openNow: null,
    source: 'fallback',
  }
}

export function formatGoogleOpeningStatus(hours?: GoogleOpeningHours): OpeningStatus | null {
  const weekdayDescriptions = hours?.weekdayDescriptions

  if (!weekdayDescriptions?.length) return null

  const todayIndex = getTokyoWeekdayIndex()
  const todayDescription = weekdayDescriptions.find((description) => getDescriptionDayIndex(description) === todayIndex)

  if (!todayDescription) return null

  const todayHours = normalizeGoogleDayDescription(todayDescription)
  const closedToday = closedPattern.test(todayDescription)
  const nextOpen = findNextGoogleOpenDay(weekdayDescriptions, todayIndex)

  if (closedToday) {
    return {
      label: '本日の診療',
      primary: '本日は休診です',
      secondary: nextOpen ? `次回: ${nextOpen}` : 'Googleマップの営業時間に基づく',
      openNow: false,
      source: 'google',
    }
  }

  return {
    label: hours?.openNow ? '現在の診療状況' : '本日の診療',
    primary: todayHours,
    secondary: hours?.openNow ? '現在診療中' : 'Googleマップの営業時間に基づく',
    openNow: hours?.openNow ?? null,
    source: 'google',
  }
}

function getTokyoWeekdayIndex(now = new Date()) {
  const shortDay = new Intl.DateTimeFormat('ja-JP', {
    timeZone: 'Asia/Tokyo',
    weekday: 'short',
  }).format(now)

  return Math.max(
    0,
    dayLabels.findIndex((day) => shortDay.includes(day)),
  )
}

function getDescriptionDayIndex(description: string) {
  const dayLabel = description.split(/[:：]/)[0]
  return dayLabels.findIndex((day) => dayLabel.includes(day))
}

function normalizeGoogleDayDescription(description: string) {
  return description
    .replace(/^[^:：]+[:：]\s*/, '')
    .replace(/\s+/g, ' ')
    .replace(/～/g, '-')
    .replace(/時(?=\d)/g, ':')
    .replace(/時/g, ':00')
    .replace(/分/g, '')
    .replace(/午前|午後/g, '')
    .trim()
}

function findNextGoogleOpenDay(weekdayDescriptions: string[], todayIndex: number) {
  for (let offset = 1; offset <= 7; offset += 1) {
    const targetDayIndex = (todayIndex + offset) % 7
    const description = weekdayDescriptions.find((item) => getDescriptionDayIndex(item) === targetDayIndex)
    if (description && !closedPattern.test(description)) {
      const dayLabel = description.split(/[:：]/)[0]
      return `${dayLabel} ${normalizeGoogleDayDescription(description)}`
    }
  }

  return null
}

function findNextFallbackOpenDay(todayIndex: number) {
  for (let offset = 1; offset <= 7; offset += 1) {
    const day = fallbackWeek[(todayIndex + offset) % 7]
    if (day.hours) return day
  }

  return null
}
