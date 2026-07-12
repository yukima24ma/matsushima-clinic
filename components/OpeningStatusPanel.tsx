'use client'

import { useEffect, useState } from 'react'
import type { OpeningStatus } from '@/lib/opening-status'
import { fallbackOpeningStatus } from '@/lib/opening-status'

const initialStatus = fallbackOpeningStatus()

export default function OpeningStatusPanel() {
  const [status, setStatus] = useState<OpeningStatus>(initialStatus)

  useEffect(() => {
    let active = true

    async function loadOpeningStatus() {
      try {
        const response = await fetch('/api/opening-status', {
          headers: {
            Accept: 'application/json',
          },
        })

        if (!response.ok) return

        const nextStatus = (await response.json()) as OpeningStatus
        if (active) setStatus(nextStatus)
      } catch {
        // Keep the static clinic schedule when Google is unavailable.
      }
    }

    loadOpeningStatus()

    return () => {
      active = false
    }
  }, [])

  return (
    <div className={`hero-status-panel ${status.openNow === false ? 'is-closed' : ''}`}>
      <span>{status.label}</span>
      <strong>{status.primary}</strong>
      <small>{status.secondary}</small>
    </div>
  )
}
