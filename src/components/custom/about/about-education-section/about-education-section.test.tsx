import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { formationStatus } from '@/types/FormationType'
import { AboutEducationSection } from './AboutEducationSection'

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

describe('AboutEducationSection', () => {
  const baseFormation = {
    title: 'Computer Science',
    institution: 'Some University',
    duration: '4 years',
    startsDate: '2019',
    endsDate: '2023',
  }

  it('renders the section title and every formation', () => {
    render(
      <AboutEducationSection
        formations={[
          baseFormation,
          { ...baseFormation, title: 'Web Development' },
        ]}
      />
    )

    expect(screen.getByText('about.educationTitle')).toBeInTheDocument()
    expect(screen.getByText('Computer Science')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
  })

  it('shows a "graduated" badge when the formation is graduated', () => {
    render(
      <AboutEducationSection
        formations={[{ ...baseFormation, graduated: true }]}
      />
    )

    expect(screen.getByText('about.graduated')).toBeInTheDocument()
  })

  it('shows a "deferred" badge when the status indicates a pause', () => {
    render(
      <AboutEducationSection
        formations={[
          { ...baseFormation, currentStatus: formationStatus.DEFERRED },
        ]}
      />
    )

    expect(screen.getAllByText('about.deferred').length).toBeGreaterThan(0)
  })

  it('shows an "in progress" badge by default', () => {
    render(
      <AboutEducationSection
        formations={[
          { ...baseFormation, currentStatus: formationStatus.IN_PROGRESS },
        ]}
      />
    )

    expect(screen.getAllByText('about.inProgress').length).toBeGreaterThan(0)
  })

  it('renders the duration only when it is provided', () => {
    const { rerender } = render(
      <AboutEducationSection formations={[baseFormation]} />
    )
    expect(screen.getByText('4 years')).toBeInTheDocument()

    rerender(
      <AboutEducationSection
        formations={[{ ...baseFormation, duration: '' }]}
      />
    )
    expect(screen.queryByText('about.duration')).not.toBeInTheDocument()
  })

  it('renders nothing when there are no formations', () => {
    const { container } = render(<AboutEducationSection formations={[]} />)

    expect(screen.getByText('about.educationTitle')).toBeInTheDocument()
    expect(container.querySelectorAll('.p-6').length).toBe(0)
  })
})
