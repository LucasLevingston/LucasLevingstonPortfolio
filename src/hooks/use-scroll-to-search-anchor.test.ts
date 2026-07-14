import { renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

let searchParamsValue = new URLSearchParams()
const noop = () => {
  // intentionally silences window.scrollTo during this test
}

vi.mock('next/navigation', () => ({
  useSearchParams: () => searchParamsValue,
}))

import { useScrollToSearchAnchor } from './use-scroll-to-search-anchor'

describe('useScrollToSearchAnchor', () => {
  beforeEach(() => {
    searchParamsValue = new URLSearchParams()
    vi.spyOn(window, 'scrollTo').mockImplementation(noop)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('scrolls to the top when there is no search param', () => {
    renderHook(() => useScrollToSearchAnchor())

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0)
  })

  it('scrolls the matching element into view when its id equals the "search" param value', () => {
    searchParamsValue = new URLSearchParams({
      search: 'about.experiencesTitle',
    })
    const element = document.createElement('div')
    element.id = 'about.experiencesTitle'
    const scrollIntoView = vi.fn()
    element.scrollIntoView = scrollIntoView
    document.body.appendChild(element)

    renderHook(() => useScrollToSearchAnchor())

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
    expect(window.scrollTo).not.toHaveBeenCalled()

    document.body.removeChild(element)
  })

  it('does nothing when the search param does not match any element', () => {
    searchParamsValue = new URLSearchParams({ search: 'unknown-anchor' })

    renderHook(() => useScrollToSearchAnchor())

    expect(window.scrollTo).not.toHaveBeenCalled()
  })
})
