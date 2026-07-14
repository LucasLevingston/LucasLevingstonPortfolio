import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { AboutHardSkillsSection } from './AboutHardSkillsSection'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'br', changeLanguage: vi.fn() },
  }),
}))

describe('AboutHardSkillsSection', () => {
  it('renders the section title', () => {
    render(
      <AboutHardSkillsSection
        skills={[{ category: 'Frontend', technologies: ['react'] }]}
      />
    )

    expect(screen.getByText('about.technologiesTitle')).toBeInTheDocument()
  })

  it('renders a category heading for every skill group', () => {
    render(
      <AboutHardSkillsSection
        skills={[
          { category: 'Frontend', technologies: ['react'] },
          { category: 'Backend', technologies: ['nextjs'] },
        ]}
      />
    )

    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText('Backend')).toBeInTheDocument()
  })

  it('renders a technology icon for every technology in a group', () => {
    const { container } = render(
      <AboutHardSkillsSection
        skills={[{ category: 'Frontend', technologies: ['react', 'nextjs'] }]}
      />
    )

    expect(container.querySelector('i.devicon-react-plain')).toBeInTheDocument()
    expect(
      container.querySelector('i.devicon-nextjs-plain')
    ).toBeInTheDocument()
  })

  it('renders no category groups when skills is empty', () => {
    render(<AboutHardSkillsSection skills={[]} />)

    expect(screen.getByText('about.technologiesTitle')).toBeInTheDocument()
  })
})
