import { act, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { userBr } from '@/data/user-data'
import { useStorage } from '@/storage/use-storage'
import { TestQueryClientProvider } from '@/test/test-query-client'
import { Projects } from './Projects'

const noop = () => {
  // intentionally silences window.scrollTo during this test
}

function mockMatchMedia(matches = false) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
}

class MockResizeObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}

class MockIntersectionObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
  takeRecords = vi.fn()
  root = null
  rootMargin = ''
  thresholds: number[] = []
}

vi.mock('next/navigation', () => ({
  useParams: () => ({}),
  usePathname: () => '/projects',
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
}))

vi.mock('react-i18next', async importOriginal => {
  const actual = await importOriginal<typeof import('react-i18next')>()
  return {
    ...actual,
    useTranslation: () => ({
      t: (key: string) => key,
      i18n: { language: 'br', changeLanguage: vi.fn() },
    }),
  }
})

async function flushEffects() {
  await act(async () => {
    await Promise.resolve()
    await Promise.resolve()
    await Promise.resolve()
  })
}

describe('Projects', () => {
  beforeEach(() => {
    useStorage.setState({ user: userBr })
    mockMatchMedia(false)
    vi.stubGlobal('ResizeObserver', MockResizeObserver)
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
    vi.spyOn(window, 'scrollTo').mockImplementation(noop)
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: () => Promise.resolve({ totalCommits: 10 }),
      })
    )
  })

  it('renders the projects title, filter bar and the project list', async () => {
    render(
      <TestQueryClientProvider>
        <ThemeProvider>
          <Projects />
        </ThemeProvider>
      </TestQueryClientProvider>
    )
    await flushEffects()

    expect(screen.getByText('projects.title')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('projects.search')).toBeInTheDocument()
    expect(screen.getByText('ExpertGP')).toBeInTheDocument()
  })
})
