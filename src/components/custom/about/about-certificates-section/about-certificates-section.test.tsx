import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { AboutCertificatesSection } from './AboutCertificatesSection'

class MockIntersectionObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}
// @ts-expect-error jsdom does not implement IntersectionObserver
global.IntersectionObserver = MockIntersectionObserver

class MockResizeObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}
global.ResizeObserver = MockResizeObserver

window.matchMedia =
  window.matchMedia ||
  ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'br', changeLanguage: vi.fn() },
  }),
}))

const certificates = [
  {
    title: 'Certificate A',
    image: 'https://example.com/a.png',
    description: ['Learned a lot about React.'],
    technologies: ['react', 'nextjs'],
    hours: 10,
    startsDate: '2022-01-01',
    completionDate: '2022-02-01',
  },
  {
    title: 'Certificate B',
    image: 'https://example.com/b.png',
    description: ['Learned about testing.'],
    technologies: ['nextjs'],
    hours: 20,
    startsDate: '2022-03-01',
    completionDate: '2022-04-01',
  },
]

describe('AboutCertificatesSection', () => {
  it('renders the section title', () => {
    render(<AboutCertificatesSection certificates={certificates} />)

    expect(screen.getByText('about.certificatesTitle')).toBeInTheDocument()
  })

  it('shows the first certificate title, description and technologies', () => {
    const { container } = render(
      <AboutCertificatesSection certificates={certificates} />
    )

    expect(screen.getByText('Certificate A')).toBeInTheDocument()
    expect(screen.getByText('Learned a lot about React.')).toBeInTheDocument()
    expect(screen.getByText('about.usedTechnologies:')).toBeInTheDocument()
    expect(container.querySelector('i.devicon-react-plain')).toBeInTheDocument()
  })

  it('renders carousel pagination controls for every certificate image', () => {
    render(<AboutCertificatesSection certificates={certificates} />)

    expect(
      screen.getByRole('button', { name: 'Go to image 1' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Go to image 2' })
    ).toBeInTheDocument()
  })

  it('does not render the image carousel when the current certificate has no image', () => {
    const certificatesWithoutImage = [{ ...certificates[0], image: '' }]
    render(<AboutCertificatesSection certificates={certificatesWithoutImage} />)

    expect(screen.queryByRole('region')).not.toBeInTheDocument()
  })
})
