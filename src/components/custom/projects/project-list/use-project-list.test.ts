import { renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import type { ProjectType } from '@/types/ProjectType'
import { useProjectList } from './use-project-list'

class MockIntersectionObserver implements IntersectionObserver {
  readonly root = null
  readonly rootMargin = ''
  readonly thresholds: readonly number[] = []
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}
global.IntersectionObserver = MockIntersectionObserver

function buildProjects(count: number): ProjectType[] {
  return Array.from({ length: count }, (_, index) => ({
    title: `Project ${index + 1}`,
    description: 'A project',
    technologies: ['react'],
  }))
}

describe('useProjectList', () => {
  it('reports isEmpty when there are no projects', () => {
    const { result } = renderHook(() => useProjectList([]))

    expect(result.current.isEmpty).toBe(true)
    expect(result.current.visibleItems).toEqual([])
    expect(result.current.hasMore).toBe(false)
  })

  it('reports isEmpty as false when there are projects', () => {
    const { result } = renderHook(() => useProjectList(buildProjects(3)))

    expect(result.current.isEmpty).toBe(false)
  })

  it('initially reveals only the first 6 projects when more are available', () => {
    const { result } = renderHook(() => useProjectList(buildProjects(9)))

    expect(result.current.visibleItems).toHaveLength(6)
    expect(result.current.hasMore).toBe(true)
  })

  it('reveals all projects and reports hasMore as false when 6 or fewer exist', () => {
    const { result } = renderHook(() => useProjectList(buildProjects(4)))

    expect(result.current.visibleItems).toHaveLength(4)
    expect(result.current.hasMore).toBe(false)
  })

  it('exposes a sentinel ref', () => {
    const { result } = renderHook(() => useProjectList(buildProjects(9)))

    expect(result.current.sentinelRef).toHaveProperty('current')
  })
})
