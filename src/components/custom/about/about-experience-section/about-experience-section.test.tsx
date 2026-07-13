import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { AboutExperienceSection } from './AboutExperienceSection'

class MockIntersectionObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}
// @ts-expect-error jsdom does not implement IntersectionObserver
global.IntersectionObserver = MockIntersectionObserver

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'br', changeLanguage: vi.fn() },
  }),
}))

describe('AboutExperienceSection', () => {
  const baseExperience = {
    enterprise: 'Acme Corp',
    location: 'Remote',
    startsDate: '2021',
    endsDate: '2023',
    role: 'Software Engineer',
    features: ['Built <strong>great</strong> things', 'Shipped fast'],
  }

  it('renders the section title and experience role/enterprise', () => {
    render(<AboutExperienceSection experiences={[baseExperience]} />)

    expect(screen.getByText('about.experiencesTitle')).toBeInTheDocument()
    expect(screen.getByText('Software Engineer')).toBeInTheDocument()
    expect(screen.getByText('Acme Corp')).toBeInTheDocument()
    expect(screen.getByText('Remote')).toBeInTheDocument()
  })

  it('parses HTML markup inside feature bullet points', () => {
    render(<AboutExperienceSection experiences={[baseExperience]} />)

    expect(screen.getByText('great')).toBeInTheDocument()
    expect(screen.getByText('great').tagName).toBe('STRONG')
    expect(screen.getByText('Shipped fast')).toBeInTheDocument()
  })

  it('renders a logo image only when the experience provides one', () => {
    const { rerender } = render(
      <AboutExperienceSection
        experiences={[
          { ...baseExperience, logo: 'https://logo.example/acme.png' },
        ]}
      />
    )
    expect(screen.getByAltText('Acme Corp logo')).toBeInTheDocument()

    rerender(<AboutExperienceSection experiences={[baseExperience]} />)
    expect(screen.queryByAltText('Acme Corp logo')).not.toBeInTheDocument()
  })

  it('renders multiple experiences', () => {
    render(
      <AboutExperienceSection
        experiences={[
          baseExperience,
          { ...baseExperience, enterprise: 'Beta Inc', role: 'Tech Lead' },
        ]}
      />
    )

    expect(screen.getByText('Acme Corp')).toBeInTheDocument()
    expect(screen.getByText('Beta Inc')).toBeInTheDocument()
    expect(screen.getByText('Tech Lead')).toBeInTheDocument()
  })
})
