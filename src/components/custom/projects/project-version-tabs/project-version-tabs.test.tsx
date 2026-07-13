import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import type { ProjectVersion } from '@/types/ProjectType'
import { ProjectVersionTabs } from './ProjectVersionTabs'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'br', changeLanguage: vi.fn() },
  }),
}))

vi.mock('@/components/custom/projects/project-image-carousel', () => ({
  ProjectImageCarousel: ({ images }: { images: string[] }) => (
    <div data-testid="project-image-carousel">{images.length} images</div>
  ),
}))

function buildVersions(): ProjectVersion[] {
  return [
    {
      name: 'v1',
      description: 'First version',
      technologies: ['react'],
    },
    {
      name: 'v2',
      description: 'Second version',
      technologies: ['typescript'],
      images: ['a.png', 'b.png'],
    },
  ]
}

describe('ProjectVersionTabs', () => {
  it('renders a tab trigger per version', () => {
    render(<ProjectVersionTabs versions={buildVersions()} />)

    expect(screen.getByRole('tab', { name: 'v1' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'v2' })).toBeInTheDocument()
  })

  it('selects the last version by default', () => {
    render(<ProjectVersionTabs versions={buildVersions()} />)

    expect(screen.getByText('Second version')).toBeInTheDocument()
    expect(screen.queryByText('First version')).not.toBeInTheDocument()
  })

  it('falls back to a generated name for a version without a name', () => {
    render(
      <ProjectVersionTabs
        versions={[{ technologies: ['react'] }, { technologies: ['nodejs'] }]}
      />
    )

    expect(screen.getByRole('tab', { name: 'v1' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'v2' })).toBeInTheDocument()
  })

  it('falls back to a generated description when the version has none', () => {
    render(
      <ProjectVersionTabs
        versions={[{ name: 'Alpha', technologies: ['react'] }]}
      />
    )

    expect(screen.getByText('Alpha do projeto')).toBeInTheDocument()
  })

  it('renders the image carousel only for versions that have images', () => {
    render(<ProjectVersionTabs versions={buildVersions()} />)

    expect(screen.getByTestId('project-image-carousel')).toHaveTextContent(
      '2 images'
    )
  })

  it('does not render the image carousel for a version without images', async () => {
    const user = userEvent.setup()
    render(<ProjectVersionTabs versions={buildVersions()} />)

    await user.click(screen.getByRole('tab', { name: 'v1' }))

    expect(screen.getByText('First version')).toBeInTheDocument()
    expect(
      screen.queryByTestId('project-image-carousel')
    ).not.toBeInTheDocument()
  })

  it('switches the visible version content when a different tab is clicked', async () => {
    const user = userEvent.setup()
    render(<ProjectVersionTabs versions={buildVersions()} />)

    await user.click(screen.getByRole('tab', { name: 'v1' }))
    expect(screen.getByText('First version')).toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: 'v2' }))
    expect(screen.getByText('Second version')).toBeInTheDocument()
  })
})
