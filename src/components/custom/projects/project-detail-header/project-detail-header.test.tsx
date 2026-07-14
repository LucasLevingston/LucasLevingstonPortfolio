import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import type { ProjectType } from '@/types/ProjectType'
import { ProjectDetailHeader } from './ProjectDetailHeader'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'br', changeLanguage: vi.fn() },
  }),
}))

function buildProject(overrides: Partial<ProjectType> = {}): ProjectType {
  return {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with Next.js',
    technologies: ['react', 'typescript'],
    ...overrides,
  }
}

describe('ProjectDetailHeader', () => {
  it('renders the title and description', () => {
    render(<ProjectDetailHeader project={buildProject()} />)

    expect(screen.getByText('Portfolio Website')).toBeInTheDocument()
    expect(
      screen.getByText('A personal portfolio built with Next.js')
    ).toBeInTheDocument()
  })

  it('renders the desktop icon for a non-mobile project', () => {
    const { container } = render(
      <ProjectDetailHeader project={buildProject({ isMobile: false })} />
    )
    expect(container.querySelector('.lucide-monitor')).toBeInTheDocument()
    expect(
      container.querySelector('.lucide-smartphone')
    ).not.toBeInTheDocument()
  })

  it('renders the mobile icon for a mobile project', () => {
    const { container } = render(
      <ProjectDetailHeader project={buildProject({ isMobile: true })} />
    )
    expect(container.querySelector('.lucide-smartphone')).toBeInTheDocument()
    expect(container.querySelector('.lucide-monitor')).not.toBeInTheDocument()
  })

  it('shows the favorite star when favorite is true', () => {
    const { container } = render(
      <ProjectDetailHeader project={buildProject({ favorite: true })} />
    )
    expect(container.querySelector('.lucide-star')).toBeInTheDocument()
  })

  it('hides the favorite star when favorite is false', () => {
    const { container } = render(
      <ProjectDetailHeader project={buildProject({ favorite: false })} />
    )
    expect(container.querySelector('.lucide-star')).not.toBeInTheDocument()
  })

  it('shows the git branch icon only when showEvolution is true and versions exist', () => {
    const { container } = render(
      <ProjectDetailHeader
        project={buildProject({
          showEvolution: true,
          versions: [{ technologies: ['react'] }],
        })}
      />
    )
    expect(container.querySelector('.lucide-git-branch')).toBeInTheDocument()
  })

  it('hides the git branch icon when showEvolution is true but versions is empty', () => {
    const { container } = render(
      <ProjectDetailHeader
        project={buildProject({ showEvolution: true, versions: [] })}
      />
    )
    expect(
      container.querySelector('.lucide-git-branch')
    ).not.toBeInTheDocument()
  })

  it('hides the git branch icon when showEvolution is false', () => {
    const { container } = render(
      <ProjectDetailHeader
        project={buildProject({
          showEvolution: false,
          versions: [{ technologies: ['react'] }],
        })}
      />
    )
    expect(
      container.querySelector('.lucide-git-branch')
    ).not.toBeInTheDocument()
  })

  it('passes status-related props through to ProjectStatusIcons', () => {
    render(
      <ProjectDetailHeader
        project={buildProject({
          isDeveloping: true,
          repositoryUrl: 'https://github.com/user/repo',
          link: 'https://example.com',
        })}
      />
    )
    expect(screen.getByText('projectCard.inDevelopment')).toBeInTheDocument()
  })
})
