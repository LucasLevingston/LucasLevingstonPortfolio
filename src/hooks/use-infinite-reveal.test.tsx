import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useInfiniteReveal } from './use-infinite-reveal'

let observerCallback: IntersectionObserverCallback | null = null
const observe = vi.fn()
const disconnect = vi.fn()

class MockIntersectionObserver {
  constructor(callback: IntersectionObserverCallback) {
    observerCallback = callback
  }
  observe = observe
  disconnect = disconnect
  unobserve = vi.fn()
  takeRecords = vi.fn()
  root = null
  rootMargin = ''
  thresholds: number[] = []
}

beforeEach(() => {
  observerCallback = null
  observe.mockClear()
  disconnect.mockClear()
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
})

afterEach(() => {
  vi.unstubAllGlobals()
})

interface HarnessProps {
  items: number[]
  initial: number
  step: number
}

function Harness({ items, initial, step }: HarnessProps) {
  const { visibleItems, hasMore, sentinelRef } = useInfiniteReveal(
    items,
    initial,
    step
  )

  return (
    <div>
      <span data-testid="count">{visibleItems.length}</span>
      <span data-testid="has-more">{String(hasMore)}</span>
      {hasMore && <div data-testid="sentinel" ref={sentinelRef} />}
    </div>
  )
}

describe('useInfiniteReveal', () => {
  it('reveals the initial number of items', () => {
    const items = Array.from({ length: 20 }, (_, i) => i)
    render(<Harness initial={6} items={items} step={6} />)

    expect(screen.getByTestId('count')).toHaveTextContent('6')
    expect(screen.getByTestId('has-more')).toHaveTextContent('true')
  })

  it('reveals every item when the list is shorter than the initial count', () => {
    const items = [1, 2, 3]
    render(<Harness initial={6} items={items} step={6} />)

    expect(screen.getByTestId('count')).toHaveTextContent('3')
    expect(screen.getByTestId('has-more')).toHaveTextContent('false')
  })

  it('observes the sentinel element while there are more items', () => {
    const items = Array.from({ length: 20 }, (_, i) => i)
    render(<Harness initial={6} items={items} step={6} />)

    expect(observe).toHaveBeenCalledWith(screen.getByTestId('sentinel'))
  })

  it('reveals more items when the sentinel intersects', () => {
    const items = Array.from({ length: 20 }, (_, i) => i)
    render(<Harness initial={6} items={items} step={6} />)

    act(() => {
      observerCallback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      )
    })

    expect(screen.getByTestId('count')).toHaveTextContent('12')
  })

  it('caps revealed items at the total item count', () => {
    const items = Array.from({ length: 8 }, (_, i) => i)
    render(<Harness initial={6} items={items} step={6} />)

    act(() => {
      observerCallback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      )
    })

    expect(screen.getByTestId('count')).toHaveTextContent('8')
    expect(screen.getByTestId('has-more')).toHaveTextContent('false')
  })

  it('resets the visible count when the items array changes', () => {
    const initialItems = Array.from({ length: 20 }, (_, i) => i)
    const { rerender } = render(
      <Harness initial={6} items={initialItems} step={6} />
    )

    act(() => {
      observerCallback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      )
    })
    expect(screen.getByTestId('count')).toHaveTextContent('12')

    const newItems = Array.from({ length: 30 }, (_, i) => i + 100)
    rerender(<Harness initial={6} items={newItems} step={6} />)

    expect(screen.getByTestId('count')).toHaveTextContent('6')
  })
})
