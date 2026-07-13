import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import type { CarouselApi } from '@/components/ui/carousel'
import { useProjectImageCarousel } from './use-project-image-carousel'

function buildFakeApi(selectedIndex = 0) {
  const listeners: Record<string, () => void> = {}
  const api = {
    selectedScrollSnap: vi.fn(() => selectedIndex),
    on: vi.fn((event: string, callback: () => void) => {
      listeners[event] = callback
      return api
    }),
    off: vi.fn(),
  }
  return { api: api as unknown as CarouselApi, listeners }
}

describe('useProjectImageCarousel', () => {
  it('defaults currentImage to 0 and api/setApi are provided', () => {
    const { result } = renderHook(() =>
      useProjectImageCarousel(['a.png', 'b.png'])
    )

    expect(result.current.currentImage).toBe(0)
    expect(result.current.api).toBeUndefined()
    expect(typeof result.current.setApi).toBe('function')
  })

  it('falls back the pagination list to images when paginationImages is not provided', () => {
    const images = ['a.png', 'b.png', 'c.png']
    const { result } = renderHook(() => useProjectImageCarousel(images))

    expect(result.current.pagination).toBe(images)
  })

  it('uses paginationImages for pagination when provided', () => {
    const images = ['a.png', 'b.png']
    const paginationImages = ['thumb-a.png', 'thumb-b.png']
    const { result } = renderHook(() =>
      useProjectImageCarousel(images, paginationImages)
    )

    expect(result.current.pagination).toBe(paginationImages)
  })

  it('syncs currentImage to the api selected snap once an api is set', () => {
    const { api } = buildFakeApi(1)
    const { result } = renderHook(() =>
      useProjectImageCarousel(['a.png', 'b.png'])
    )

    act(() => {
      result.current.setApi(api)
    })

    expect(result.current.currentImage).toBe(1)
    expect(result.current.api).toBe(api)
  })

  it('updates currentImage when the api emits a select event', () => {
    const { api, listeners } = buildFakeApi(0)
    const { result } = renderHook(() =>
      useProjectImageCarousel(['a.png', 'b.png', 'c.png'])
    )

    act(() => {
      result.current.setApi(api)
    })

    ;(
      api as unknown as { selectedScrollSnap: () => number }
    ).selectedScrollSnap = vi.fn(() => 2)

    act(() => {
      listeners.select?.()
    })

    expect(result.current.currentImage).toBe(2)
  })

  it('allows setCurrentImage to update the index directly', () => {
    const { result } = renderHook(() =>
      useProjectImageCarousel(['a.png', 'b.png'])
    )

    act(() => {
      result.current.setCurrentImage(1)
    })

    expect(result.current.currentImage).toBe(1)
  })
})
