import { renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { TestQueryClientProvider } from '@/test/test-query-client'
import { useCustomNavbar } from './use-custom-navbar'

let mockPathname = '/'

vi.mock('next/navigation', () => ({
  usePathname: () => mockPathname,
}))

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'br' },
  }),
}))

describe('useCustomNavbar', () => {
  it('exposes the user, translated projects and about sections', async () => {
    const { result } = renderHook(() => useCustomNavbar(), {
      wrapper: TestQueryClientProvider,
    })

    expect(result.current.user.name).toBe('Lucas Levingston')
    expect(result.current.projects).toHaveLength(4)
    expect(result.current.projects[0]).toHaveProperty('title')
    expect(result.current.projects[0]).toHaveProperty('description')

    expect(result.current.aboutSections).toEqual([
      {
        title: 'about.experiencesTitle',
        description: 'about.experiencesDescription',
        id: 'about.experiencesTitle',
      },
      {
        title: 'about.educationTitle',
        description: 'about.educationDescription',
        id: 'about.educationTitle',
      },
      {
        title: 'about.certificatesTitle',
        description: 'about.certificatesDescription',
        id: 'about.certificatesTitle',
      },
    ])

    await waitFor(() => expect(result.current).toBeDefined())
  })

  it('marks the current pathname as active', async () => {
    mockPathname = '/about'
    const { result } = renderHook(() => useCustomNavbar(), {
      wrapper: TestQueryClientProvider,
    })

    await waitFor(() => expect(result.current.isActive('/about')).toBe(true))
    expect(result.current.isActive('/')).toBe(false)
  })

  it('defaults isActive to false for a path that was never visited', () => {
    mockPathname = '/'
    const { result } = renderHook(() => useCustomNavbar(), {
      wrapper: TestQueryClientProvider,
    })
    expect(result.current.isActive('/projects')).toBe(false)
  })
})
