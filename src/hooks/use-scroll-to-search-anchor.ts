'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Scrolls to the element whose id matches the current `search` query
 * param (e.g. `?search=about.experiencesTitle`), or to the top of the
 * page when there's no query. Shared by pages that support deep-linking
 * to a section via the sidebar/nav search.
 */
export function useScrollToSearchAnchor() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const search = searchParams.toString()
    if (!search) {
      window.scrollTo(0, 0)
      return
    }
    const element = document.getElementById(search)
    element?.scrollIntoView({ behavior: 'smooth' })
  }, [searchParams])
}
