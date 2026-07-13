import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { AboutProfessionalProfile } from './AboutProfessionalProfile'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'br', changeLanguage: vi.fn() },
  }),
}))

describe('AboutProfessionalProfile', () => {
  it('renders the section title', () => {
    render(<AboutProfessionalProfile profile="A short bio." />)

    expect(screen.getByText('about.professionalProfile')).toBeInTheDocument()
  })

  it('parses and renders the profile HTML content', () => {
    render(
      <AboutProfessionalProfile profile="Passionate <strong>developer</strong>." />
    )

    expect(screen.getByText('developer')).toBeInTheDocument()
    expect(screen.getByText('developer').tagName).toBe('STRONG')
    expect(screen.getByText('Passionate', { exact: false })).toBeInTheDocument()
  })

  it('renders plain text profiles without markup', () => {
    render(<AboutProfessionalProfile profile="Just plain text." />)

    expect(screen.getByText('Just plain text.')).toBeInTheDocument()
  })
})
