import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { HomeHero } from './HomeHero'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'br', changeLanguage: vi.fn() },
  }),
  initReactI18next: { type: '3rdParty', init: vi.fn() },
}))

describe('HomeHero', () => {
  it('renders the greeting followed by the given name', () => {
    render(<HomeHero description="<span>Hello there</span>" name="Jane Doe" />)
    expect(screen.getByText('home.greeting')).toBeInTheDocument()
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
  })

  it('parses the html description', () => {
    render(
      <HomeHero
        description="<span>Full-stack <strong>developer</strong></span>"
        name="Jane Doe"
      />
    )
    expect(screen.getByText('developer')).toBeInTheDocument()
    expect(screen.getByText('developer').tagName).toBe('STRONG')
  })

  it('renders the name inside the main heading', () => {
    render(<HomeHero description="<span>desc</span>" name="Jane Doe" />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Jane Doe')
  })
})
