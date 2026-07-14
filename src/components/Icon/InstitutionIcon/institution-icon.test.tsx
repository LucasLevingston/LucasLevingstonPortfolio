import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import InstitutionIcon from './InstitutionIcon'

describe('InstitutionIcon', () => {
  it('renders an initials badge for a mapped institution', () => {
    render(<InstitutionIcon institution="Udemy" institutionKey="udemy" />)

    const badge = screen.getByText('UD')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('bg-[#A435F0]')
  })

  it('renders a fallback initials badge when institutionKey is not provided', () => {
    render(<InstitutionIcon institution="Some College" />)

    expect(screen.getByText('SC')).toBeInTheDocument()
  })

  it('sets the institution name as the badge title for accessibility', () => {
    render(
      <InstitutionIcon institution="Rocketseat" institutionKey="rocketseat" />
    )

    expect(screen.getByText('RS')).toHaveAttribute('title', 'Rocketseat')
  })

  it('merges a custom className into the badge', () => {
    render(
      <InstitutionIcon
        className="custom-class"
        institution="Udemy"
        institutionKey="udemy"
      />
    )

    expect(screen.getByText('UD')).toHaveClass('custom-class')
  })
})
