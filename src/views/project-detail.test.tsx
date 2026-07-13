import { act, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { userBr } from '@/data/user-data'
import { useStorage } from '@/storage/use-storage'
import { ProjectDetail } from './ProjectDetail'

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
  useParams: () => ({ slug: 'expertgp' }),
  usePathname: () => '/projects/expertgp',
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
  notFound: vi.fn(() => {
    throw new Error('NEXT_NOT_FOUND')
  }),
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

describe('ProjectDetail', () => {
  beforeEach(() => {
    useStorage.setState({ user: userBr })
    mockMatchMedia(false)
    vi.stubGlobal('ResizeObserver', MockResizeObserver)
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: () => Promise.resolve({ totalCommits: 10 }),
      })
    )
  })

  it('renders the project title, back link and technologies used', async () => {
    render(
      <ThemeProvider>
        <ProjectDetail slug="expertgp" />
      </ThemeProvider>
    )
    await flushEffects()

    expect(
      screen.getByRole('heading', { name: 'ExpertGP' })
    ).toBeInTheDocument()
    expect(screen.getByText('projects.backToProjects')).toBeInTheDocument()
    expect(screen.getByText('projectCard.technologiesUsed')).toBeInTheDocument()
  })
})
