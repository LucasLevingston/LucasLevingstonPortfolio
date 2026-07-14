import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AboutSoftSkillsSection } from './AboutSoftSkillsSection'

describe('AboutSoftSkillsSection', () => {
  it('renders the static "Soft Skills" title', () => {
    render(<AboutSoftSkillsSection skills={['Communication']} />)

    expect(screen.getAllByText('Soft Skills').length).toBeGreaterThan(0)
  })

  it('renders a badge for every skill', () => {
    const skills = ['Communication', 'Teamwork', 'Leadership']
    render(<AboutSoftSkillsSection skills={skills} />)

    for (const skill of skills) {
      expect(screen.getByText(skill)).toBeInTheDocument()
    }
  })

  it('renders no skill badges when the list is empty', () => {
    render(<AboutSoftSkillsSection skills={[]} />)

    expect(screen.getByText('Soft Skills')).toBeInTheDocument()
  })

  it('sets the section id to "Soft Skills"', () => {
    const { container } = render(<AboutSoftSkillsSection skills={[]} />)

    expect(container.querySelector('#Soft\\ Skills')).toBeInTheDocument()
  })
})
