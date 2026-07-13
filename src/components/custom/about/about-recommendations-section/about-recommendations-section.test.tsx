import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { AboutRecommendationsSection } from './AboutRecommendationsSection'

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

describe('AboutRecommendationsSection', () => {
  const recommendation = {
    name: 'Jane Doe',
    date: '2023-01-01',
    position: 'Engineering Manager',
    linkedinUrl: 'https://linkedin.com/in/jane-doe',
    linkedinImageUrl: 'https://linkedin.com/jane-doe.png',
    comments: 'Great teammate and problem solver.',
    company: 'Acme Corp',
  }

  it('renders the section title', () => {
    render(<AboutRecommendationsSection recommendations={[recommendation]} />)

    expect(screen.getByText('about.recommendationsTitle')).toBeInTheDocument()
  })

  it('renders the recommender name, position, company, date and comment', () => {
    render(<AboutRecommendationsSection recommendations={[recommendation]} />)

    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
    expect(screen.getByText('Engineering Manager')).toBeInTheDocument()
    expect(screen.getByText('Acme Corp')).toBeInTheDocument()
    expect(screen.getByText('2023-01-01')).toBeInTheDocument()
    expect(
      screen.getByText('"Great teammate and problem solver."')
    ).toBeInTheDocument()
  })

  it('renders a linkedin link pointing to the recommender profile', () => {
    render(<AboutRecommendationsSection recommendations={[recommendation]} />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', recommendation.linkedinUrl)
  })

  it('renders multiple recommendations', () => {
    render(
      <AboutRecommendationsSection
        recommendations={[
          recommendation,
          { ...recommendation, name: 'John Smith', date: '2023-02-02' },
        ]}
      />
    )

    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
    expect(screen.getByText('John Smith')).toBeInTheDocument()
  })

  it('renders no recommendation cards when the list is empty', () => {
    render(<AboutRecommendationsSection recommendations={[]} />)

    expect(screen.getByText('about.recommendationsTitle')).toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })
})
