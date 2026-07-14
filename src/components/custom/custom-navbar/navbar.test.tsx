import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import { TestQueryClientProvider } from '@/test/test-query-client'
import { Navbar } from './Navbar'

let mockPathname = '/'

vi.mock('next/navigation', () => ({
  usePathname: () => mockPathname,
}))

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'br', changeLanguage: vi.fn() },
  }),
  initReactI18next: { type: '3rdParty', init: vi.fn() },
}))

beforeAll(() => {
  if (!('ResizeObserver' in window)) {
    class ResizeObserverMock {
      observe() {
        /* noop */
      }
      unobserve() {
        /* noop */
      }
      disconnect() {
        /* noop */
      }
    }
    // @ts-expect-error - test polyfill
    window.ResizeObserver = ResizeObserverMock
  }
})

describe('Navbar', () => {
  it('renders the desktop navigation triggers', () => {
    mockPathname = '/'
    render(
      <TestQueryClientProvider>
        <Navbar />
      </TestQueryClientProvider>
    )
    expect(
      within(screen.getAllByRole('navigation')[0]).getByText('navbar.about')
    ).toBeInTheDocument()
    expect(
      within(screen.getAllByRole('navigation')[0]).getByText('navbar.home')
    ).toBeInTheDocument()
    expect(
      within(screen.getAllByRole('navigation')[0]).getByText('navbar.projects')
    ).toBeInTheDocument()
  })

  it('highlights the active route', () => {
    mockPathname = '/'
    render(
      <TestQueryClientProvider>
        <Navbar />
      </TestQueryClientProvider>
    )
    const homeLink = screen.getAllByText('navbar.home')[0]
    expect(homeLink).toHaveClass('bg-mainColor')
  })

  it('does not highlight an inactive route', () => {
    mockPathname = '/about'
    render(
      <TestQueryClientProvider>
        <Navbar />
      </TestQueryClientProvider>
    )
    const homeLink = screen.getAllByText('navbar.home')[0]
    expect(homeLink).not.toHaveClass('bg-mainColor')
  })

  it('opens the mobile sheet with the user info on trigger click', async () => {
    mockPathname = '/'
    const user = userEvent.setup()
    render(
      <TestQueryClientProvider>
        <Navbar />
      </TestQueryClientProvider>
    )

    const menuButtons = screen.getAllByRole('button')
    const trigger = menuButtons.find(button =>
      button.querySelector('svg.lucide-menu')
    )
    expect(trigger).toBeDefined()

    await user.click(trigger as HTMLElement)

    expect(
      (await screen.findAllByText('Lucas Levingston')).length
    ).toBeGreaterThan(0)
  })
})
