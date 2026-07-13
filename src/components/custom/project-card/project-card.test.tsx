import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import '@/i18n'
import type { ProjectType } from '@/types/ProjectType'
import ProjectCard from './ProjectCard'

const OVERFLOW_BADGE_PATTERN = /^\+\d+$/

function makeProject(overrides: Partial<ProjectType> = {}): ProjectType {
  return {
    title: 'My Cool Project',
    description: 'A description',
    technologies: [
      'react',
      'typescript',
      'nodejs',
      'mongodb',
      'express',
      'vite',
      'docker',
    ],
    ...overrides,
  }
}

describe('ProjectCard', () => {
  it('renders the project title, description and a link to its detail page', () => {
    const project = makeProject()
    render(<ProjectCard allProjects={[project]} project={project} />)

    expect(screen.getByText('My Cool Project')).toBeInTheDocument()
    expect(screen.getByText('A description')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      '/projects/my-cool-project'
    )
  })

  it('caps visible technology icons at 6 and shows a "+N" badge for the rest', () => {
    const project = makeProject()
    render(<ProjectCard allProjects={[project]} project={project} />)

    expect(screen.getByText('+1')).toBeInTheDocument()
  })

  it('does not show an overflow badge when there are 6 or fewer technologies', () => {
    const project = makeProject({ technologies: ['react', 'typescript'] })
    render(<ProjectCard allProjects={[project]} project={project} />)

    expect(screen.queryByText(OVERFLOW_BADGE_PATTERN)).not.toBeInTheDocument()
  })

  it('shows a favorite star when the project is marked as favorite', () => {
    const project = makeProject({ favorite: true })
    const { container } = render(
      <ProjectCard allProjects={[project]} project={project} />
    )

    expect(container.querySelector('.lucide-star')).toBeInTheDocument()
  })

  it('does not show a favorite star when the project is not marked as favorite', () => {
    const project = makeProject({ favorite: false })
    const { container } = render(
      <ProjectCard allProjects={[project]} project={project} />
    )

    expect(container.querySelector('.lucide-star')).not.toBeInTheDocument()
  })

  it('shows a git branch icon when showEvolution is set and there are versions', () => {
    const project = makeProject({
      showEvolution: true,
      versions: [{ technologies: ['react'] }],
    })
    const { container } = render(
      <ProjectCard allProjects={[project]} project={project} />
    )

    expect(container.querySelector('.lucide-git-branch')).toBeInTheDocument()
  })

  it('renders a phone frame preview when the project is mobile', () => {
    const project = makeProject({ isMobile: true, thumbnail: '/preview.png' })
    render(<ProjectCard allProjects={[project]} project={project} />)

    expect(
      screen.getByAltText('Preview of My Cool Project')
    ).toBeInTheDocument()
  })

  it('does not render a preview frame when there is no thumbnail or images', () => {
    const project = makeProject()
    render(<ProjectCard allProjects={[project]} project={project} />)

    expect(
      screen.queryByAltText('Preview of My Cool Project')
    ).not.toBeInTheDocument()
  })
})
