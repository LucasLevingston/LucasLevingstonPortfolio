import { render, screen } from '@testing-library/react'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import { TestQueryClientProvider } from '@/test/test-query-client'
import Header from './Header'

const changeLanguage = vi.fn()

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'br', changeLanguage },
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

describe('Header', () => {
  it('renders the site title', () => {
    render(
      <TestQueryClientProvider>
        <Header />
      </TestQueryClientProvider>
    )
    expect(screen.getByText('Lucas')).toBeInTheDocument()
    expect(screen.getByText('.dev')).toBeInTheDocument()
  })

  it('renders the Navbar', () => {
    render(
      <TestQueryClientProvider>
        <Header />
      </TestQueryClientProvider>
    )
    expect(screen.getByText('navbar.about')).toBeInTheDocument()
  })

  it('syncs the current language on mount via useHeader', () => {
    render(
      <TestQueryClientProvider>
        <Header />
      </TestQueryClientProvider>
    )
    expect(changeLanguage).toHaveBeenCalledWith('br')
  })
})
