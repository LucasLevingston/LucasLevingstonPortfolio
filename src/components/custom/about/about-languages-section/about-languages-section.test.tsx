import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { AboutLanguagesSection } from './AboutLanguagesSection'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'br', changeLanguage: vi.fn() },
  }),
}))

describe('AboutLanguagesSection', () => {
  it('renders nothing when languages is not provided', () => {
    const { container } = render(<AboutLanguagesSection />)

    expect(container).toBeEmptyDOMElement()
  })

  it('renders the section title and every language with its type', () => {
    const languages = [
      { language: 'English', type: 'Fluent' },
      { language: 'Portuguese', type: 'Native' },
    ]
    render(<AboutLanguagesSection languages={languages} />)

    expect(screen.getByText('about.languagesTitle')).toBeInTheDocument()
    expect(screen.getByText('English')).toBeInTheDocument()
    expect(screen.getByText('Fluent')).toBeInTheDocument()
    expect(screen.getByText('Portuguese')).toBeInTheDocument()
    expect(screen.getByText('Native')).toBeInTheDocument()
  })

  it('renders no language rows when the list is empty', () => {
    render(<AboutLanguagesSection languages={[]} />)

    expect(screen.getByText('about.languagesTitle')).toBeInTheDocument()
  })
})
