import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { HardSkillsSection } from './HardSkillsSection'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'br', changeLanguage: vi.fn() },
  }),
}))

const skills = [
  { category: 'Languages', technologies: ['typescript', 'javascript'] },
  { category: 'Frameworks', technologies: ['react'] },
]

describe('HardSkillsSection', () => {
  it('renders a section item title for each skill category', () => {
    render(<HardSkillsSection skills={skills} />)
    expect(screen.getByText('Languages')).toBeInTheDocument()
    expect(screen.getByText('Frameworks')).toBeInTheDocument()
  })

  it('renders a technology icon trigger for every technology', () => {
    const { container } = render(<HardSkillsSection skills={skills} />)
    expect(container.querySelectorAll('a')).toHaveLength(3)
  })

  it('renders nothing when there are no skills', () => {
    const { container } = render(<HardSkillsSection skills={[]} />)
    expect(container.querySelectorAll('a')).toHaveLength(0)
  })
})
