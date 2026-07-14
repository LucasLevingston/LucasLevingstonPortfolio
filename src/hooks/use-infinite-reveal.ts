'use client'

import { useEffect, useRef, useState } from 'react'

export function useInfiniteReveal<T>(
  items: T[],
  initialVisible: number,
  step: number
) {
  const [visibleCount, setVisibleCount] = useState(initialVisible)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setVisibleCount(initialVisible)
  }, [items, initialVisible])

  useEffect(() => {
    const node = sentinelRef.current
    if (!node) {
      return
    }
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisibleCount(prev => Math.min(prev + step, items.length))
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [items.length, step])

  return {
    visibleItems: items.slice(0, visibleCount),
    hasMore: visibleCount < items.length,
    sentinelRef,
  }
}
