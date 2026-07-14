import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import type { ProjectType } from '@/types/ProjectType'
import { ProjectList } from './ProjectList'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'br', changeLanguage: vi.fn() },
  }),
}))

vi.mock('@/components/custom/project-card', () => ({
  default: ({ project }: { project: ProjectType }) => (
    <div data-testid="project-card">{project.title}</div>
  ),
}))

class MockIntersectionObserver implements IntersectionObserver {
  readonly root = null
  readonly rootMargin = ''
  readonly thresholds: readonly number[] = []
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}
global.IntersectionObserver = MockIntersectionObserver

function buildProjects(count: number): ProjectType[] {
  return Array.from({ length: count }, (_, index) => ({
    title: `Project ${index + 1}`,
    description: 'A project',
    technologies: ['react'],
  }))
}

describe('ProjectList', () => {
  it('renders the empty state when there are no projects', () => {
    render(
      <ProjectList allProjects={[]} onClearFilters={vi.fn()} projects={[]} />
    )

    expect(screen.getByText('Nenhum projeto encontrado')).toBeInTheDocument()
    expect(screen.queryByTestId('project-card')).not.toBeInTheDocument()
  })

  it('calls onClearFilters from the empty state', async () => {
    const user = userEvent.setup()
    const onClearFilters = vi.fn()
    render(
      <ProjectList
        allProjects={[]}
        onClearFilters={onClearFilters}
        projects={[]}
      />
    )

    await user.click(screen.getByRole('button', { name: 'projects.clear' }))

    expect(onClearFilters).toHaveBeenCalledTimes(1)
  })

  it('renders a card per visible project', () => {
    const projects = buildProjects(3)
    render(
      <ProjectList
        allProjects={projects}
        onClearFilters={vi.fn()}
        projects={projects}
      />
    )

    expect(screen.getAllByTestId('project-card')).toHaveLength(3)
    expect(screen.getByText('Project 1')).toBeInTheDocument()
    expect(screen.getByText('Project 3')).toBeInTheDocument()
  })

  it('only reveals the first 6 projects when more than 6 are passed', () => {
    const projects = buildProjects(9)
    render(
      <ProjectList
        allProjects={projects}
        onClearFilters={vi.fn()}
        projects={projects}
      />
    )

    expect(screen.getAllByTestId('project-card')).toHaveLength(6)
  })
})
