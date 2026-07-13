import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
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
    render(<Sidebar />)
    expect(
      screen.getByRole('heading', { name: 'Lucas Levingston' })
    ).toBeInTheDocument()
  })

  it('renders the translated greeting and welcome copy', () => {
    render(<Sidebar />)
    expect(screen.getByText('sidebar.welcome')).toBeInTheDocument()
    expect(screen.getByText(GREETING_PATTERN)).toBeInTheDocument()
  })

  it("renders the user's email as a mailto link", () => {
    render(<Sidebar />)
    const emailLink = screen.getByText('lucaslevingston94@gmail.com')
    expect(emailLink.closest('a')).toHaveAttribute(
      'href',
      'mailto:lucaslevingston94@gmail.com'
    )
  })

  it('renders the formatted phone number', () => {
    render(<Sidebar />)
    expect(screen.getByText('(83) 99961-6220')).toBeInTheDocument()
  })
})
