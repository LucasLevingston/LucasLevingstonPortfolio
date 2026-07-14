import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import '@/i18n'
import { TestQueryClientProvider } from '@/test/test-query-client'
import { useStats } from './use-stats'

beforeEach(() => {
  vi.stubGlobal(
    'fetch',
    vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ totalCommits: 42 }),
      })
    ) as unknown as typeof fetch
  )
})

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('useStats', () => {
  it('returns four stat entries with translated labels and numeric values', async () => {
    const { result } = await act(async () =>
      renderHook(() => useStats(), { wrapper: TestQueryClientProvider })
    )

    expect(result.current).toHaveLength(4)

    const [years, projects, technologies, commits] = result.current
    expect(years).toEqual({ num: 3, text: 'Anos de experiência' })
    expect(projects.text).toBe('Projetos feitos')
    expect(typeof projects.num).toBe('number')
    expect(technologies.text).toBe('Tecnologias dominadas')
    expect(typeof technologies.num).toBe('number')
    expect(commits.text).toBe('Commits de códigos')
  })
})
