import { renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { userBr } from '@/data/user-data'
import '@/i18n'
import { useStorage } from '@/storage/use-storage'

vi.mock('next/navigation', () => ({
  useParams: () => ({ slug: 'some-project' }),
  usePathname: () => '/',
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
  notFound: vi.fn(() => {
    throw new Error('NEXT_NOT_FOUND')
  }),
}))

import { useProjectBySlug } from './use-project-by-slug'

describe('useProjectBySlug', () => {
  beforeEach(() => {
    useStorage.setState({ user: userBr })
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: () => Promise.resolve({ totalCommits: 1 }),
      })
    )
  })

  it('returns the project matching the slug', () => {
    const { result } = renderHook(() => useProjectBySlug('expertgp'))

    expect(result.current.title).toBe('ExpertGP')
  })

  it('calls notFound for a slug that does not match any project', () => {
    expect(() =>
      renderHook(() => useProjectBySlug('not-a-real-project'))
    ).toThrow()
  })
})
