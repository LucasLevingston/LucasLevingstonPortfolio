import { render, screen } from '@testing-library/react'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import '@/i18n'
import type { ProjectType } from '@/types/ProjectType'
import { ProjectDetails } from './ProjectDetails'

const START_DATE_LABEL_PATTERN = /Início|Start/

beforeAll(() => {
  class ResizeObserverStub {
    observe() {
      // noop
    }
    unobserve() {
      // noop
    }
    disconnect() {
      // noop
    }
  }
  class IntersectionObserverStub {
    observe() {
      // noop
    }
    unobserve() {
      // noop
    }
    disconnect() {
      // noop
    }
  }

  // embla-carousel-react (used by ProjectImageCarousel) needs
  // ResizeObserver, IntersectionObserver and matchMedia, none of which
  // jsdom implements.
  vi.stubGlobal('ResizeObserver', ResizeObserverStub)
  vi.stubGlobal('IntersectionObserver', IntersectionObserverStub)
  vi.stubGlobal(
    'matchMedia',
    vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))
  )
})

function makeProject(overrides: Partial<ProjectType> = {}): ProjectType {
  return {
    title: 'My Cool Project',
    description: 'A description',
    about: 'About this project',
    technologies: ['react', 'typescript'],
    ...overrides,
  }
}

describe('ProjectDetails', () => {
  it('renders the about text, start and end dates', () => {
    const project = makeProject({
      startsDate: 'Jan 2023',
      endsDate: 'Feb 2024',
    })
    render(<ProjectDetails allProjects={[project]} project={project} />)

    expect(screen.getByText('About this project')).toBeInTheDocument()
    expect(screen.getByText('Jan 2023')).toBeInTheDocument()
    expect(screen.getByText('Feb 2024')).toBeInTheDocument()
  })

  it('does not render start/end date rows when they are absent', () => {
    const project = makeProject()
    render(<ProjectDetails allProjects={[project]} project={project} />)

    expect(screen.queryByText(START_DATE_LABEL_PATTERN)).not.toBeInTheDocument()
  })

  it('renders the features list when features are provided', () => {
    const project = makeProject({ features: ['Fast', 'Reliable'] })
    render(<ProjectDetails allProjects={[project]} project={project} />)

    expect(screen.getByText('Fast')).toBeInTheDocument()
    expect(screen.getByText('Reliable')).toBeInTheDocument()
  })

  it('does not render a features section when there are no features', () => {
    const project = makeProject()
    render(<ProjectDetails allProjects={[project]} project={project} />)

    expect(screen.queryByText('Fast')).not.toBeInTheDocument()
  })

  it('renders the technologies section when there are no versions to show', () => {
    const project = makeProject({ technologies: ['react', 'nodejs'] })
    const { container } = render(
      <ProjectDetails allProjects={[project]} project={project} />
    )

    expect(container.querySelectorAll('img, i, svg').length).toBeGreaterThan(0)
  })

  it('renders version tabs instead of the technologies section when showEvolution is set with versions', () => {
    const project = makeProject({
      showEvolution: true,
      versions: [
        { name: 'v1', technologies: ['react'] },
        { name: 'v2', technologies: ['nodejs'] },
      ],
    })
    render(<ProjectDetails allProjects={[project]} project={project} />)

    expect(screen.getByText('v1')).toBeInTheDocument()
    expect(screen.getByText('v2')).toBeInTheDocument()
  })

  it('renders an image carousel when images are provided and there are no versions', () => {
    const project = makeProject({ images: ['/a.png', '/b.png'] })
    render(<ProjectDetails allProjects={[project]} project={project} />)

    expect(screen.getByAltText('Screenshot 1')).toBeInTheDocument()
    expect(screen.getByAltText('Screenshot 2')).toBeInTheDocument()
  })

  it('renders project links when repository and site links are provided', () => {
    const project = makeProject({
      repositoryUrl: 'https://github.com/example/repo',
      link: 'https://example.com',
    })
    render(<ProjectDetails allProjects={[project]} project={project} />)

    const links = screen.getAllByRole('link')
    const hrefs = links.map(link => link.getAttribute('href'))
    expect(hrefs).toContain('https://github.com/example/repo')
    expect(hrefs).toContain('https://example.com')
  })
})
