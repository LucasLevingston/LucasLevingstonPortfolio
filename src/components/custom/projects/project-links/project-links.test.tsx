import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ProjectLinks } from './ProjectLinks'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'br', changeLanguage: vi.fn() },
  }),
}))

describe('ProjectLinks', () => {
  it('renders nothing when no links are provided', () => {
    render(<ProjectLinks />)

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('renders a front-end repo link when frontEndRepositoryUrl is set', () => {
    render(
      <ProjectLinks frontEndRepositoryUrl="https://github.com/user/front" />
    )

    const link = screen.getByRole('link', {
      name: 'projectCard.viewFrontEndRepo',
    })
    expect(link).toHaveAttribute('href', 'https://github.com/user/front')
  })

  it('renders a back-end repo link when backEndRepositoryUrl is set', () => {
    render(<ProjectLinks backEndRepositoryUrl="https://github.com/user/back" />)

    expect(
      screen.getByRole('link', { name: 'projectCard.viewBackEndRepo' })
    ).toHaveAttribute('href', 'https://github.com/user/back')
  })

  it('renders both front-end and back-end links together, without the generic GitHub link', () => {
    render(
      <ProjectLinks
        backEndRepositoryUrl="https://github.com/user/back"
        frontEndRepositoryUrl="https://github.com/user/front"
        repositoryUrl="https://github.com/user/repo"
      />
    )

    expect(
      screen.getByRole('link', { name: 'projectCard.viewFrontEndRepo' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'projectCard.viewBackEndRepo' })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: 'projectCard.viewGitHub' })
    ).not.toBeInTheDocument()
  })

  it('falls back to the generic GitHub link when there is no front/back-end split', () => {
    render(<ProjectLinks repositoryUrl="https://github.com/user/repo" />)

    expect(
      screen.getByRole('link', { name: 'projectCard.viewGitHub' })
    ).toHaveAttribute('href', 'https://github.com/user/repo')
  })

  it('renders the deploy link when link is set', () => {
    render(<ProjectLinks link="https://example.com" />)

    expect(
      screen.getByRole('link', { name: 'projectCard.visitSite' })
    ).toHaveAttribute('href', 'https://example.com')
  })

  it('renders all links together when every prop is set', () => {
    render(
      <ProjectLinks
        backEndRepositoryUrl="https://github.com/user/back"
        frontEndRepositoryUrl="https://github.com/user/front"
        link="https://example.com"
        repositoryUrl="https://github.com/user/repo"
      />
    )

    expect(screen.getAllByRole('link')).toHaveLength(3)
  })
})
