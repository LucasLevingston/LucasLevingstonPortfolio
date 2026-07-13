import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ProjectStatusIcons } from './ProjectStatusIcons'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'br', changeLanguage: vi.fn() },
  }),
}))

describe('ProjectStatusIcons', () => {
  it('renders nothing extra when no props are set', () => {
    const { container } = render(<ProjectStatusIcons />)
    expect(container.querySelector('svg')).not.toBeInTheDocument()
    expect(
      screen.queryByText('projectCard.inDevelopment')
    ).not.toBeInTheDocument()
  })

  it('shows the "in development" badge when isDeveloping is true', () => {
    render(<ProjectStatusIcons isDeveloping />)
    expect(screen.getByText('projectCard.inDevelopment')).toBeInTheDocument()
  })

  it('shows the image icon when images are present', () => {
    const { container } = render(<ProjectStatusIcons images={['a.png']} />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('does not show the image icon when images is an empty array', () => {
    const { container } = render(<ProjectStatusIcons images={[]} />)
    expect(container.querySelector('svg')).not.toBeInTheDocument()
  })

  it('shows the github icon when any repository url is set', () => {
    const { container } = render(
      <ProjectStatusIcons repositoryUrl="https://github.com/x" />
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('shows the github icon when only frontEndRepositoryUrl is set', () => {
    const { container } = render(
      <ProjectStatusIcons frontEndRepositoryUrl="https://github.com/x" />
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('shows the external link icon when link is set', () => {
    const { container } = render(
      <ProjectStatusIcons link="https://example.com" />
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders custom children after the built-in indicators', () => {
    render(
      <ProjectStatusIcons>
        <span>extra indicator</span>
      </ProjectStatusIcons>
    )
    expect(screen.getByText('extra indicator')).toBeInTheDocument()
  })

  it('applies a custom className to the wrapper', () => {
    const { container } = render(
      <ProjectStatusIcons className="custom-class" />
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
