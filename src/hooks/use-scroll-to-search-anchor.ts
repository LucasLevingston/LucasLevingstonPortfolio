'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const SELECTOR_SPECIAL_CHARS = /["\\]/gu

/**
 * Scrolls to the element whose id matches the current `search` query
 * param (e.g. `?search=about.experiencesTitle`), or to the top of the
 * page when there's no query. Shared by pages that support deep-linking
 * to a section via the sidebar/nav search.
 */
export function useScrollToSearchAnchor() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const search = searchParams.get('search')
    if (!search) {
      window.scrollTo(0, 0)
      return
    }
    // Attribute selector instead of `#id`: section ids may contain spaces.
    const escaped = search.replace(SELECTOR_SPECIAL_CHARS, '\\$&')
    const element = document.querySelector(`[id="${escaped}"]`)
    element?.scrollIntoView({ behavior: 'smooth' })
  }, [searchParams])
}
