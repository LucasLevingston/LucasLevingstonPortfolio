import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { TestQueryClientProvider } from '@/test/test-query-client'
import Sidebar from './Sidebar'

const GREETING_PATTERN = /sidebar.greeting/

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'br', changeLanguage: vi.fn() },
  }),
  initReactI18next: { type: '3rdParty', init: vi.fn() },
}))

describe('Sidebar', () => {
  it("renders the user's name as a heading", () => {
    render(
      <TestQueryClientProvider>
        <Sidebar />
      </TestQueryClientProvider>
    )
    expect(
      screen.getByRole('heading', { name: 'Lucas Levingston' })
    ).toBeInTheDocument()
  })

  it('renders the translated greeting and welcome copy', () => {
    render(
      <TestQueryClientProvider>
        <Sidebar />
      </TestQueryClientProvider>
    )
    expect(screen.getByText('sidebar.welcome')).toBeInTheDocument()
    expect(screen.getByText(GREETING_PATTERN)).toBeInTheDocument()
  })

  it("renders the user's email as a mailto link", () => {
    render(
      <TestQueryClientProvider>
        <Sidebar />
      </TestQueryClientProvider>
    )
    const emailLink = screen.getByText('lucaslevingston94@gmail.com')
    expect(emailLink.closest('a')).toHaveAttribute(
      'href',
      'mailto:lucaslevingston94@gmail.com'
    )
  })

  it('renders the formatted phone number', () => {
    render(
      <TestQueryClientProvider>
        <Sidebar />
      </TestQueryClientProvider>
    )
    expect(screen.getByText('(83) 99961-6220')).toBeInTheDocument()
  })
})
