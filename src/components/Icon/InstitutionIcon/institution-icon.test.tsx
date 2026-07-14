import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

vi.mock('@/data/institutions-data', () => ({
  INSTITUTIONS: {
    udemy: {
      initials: 'UD',
      colorClassName: 'bg-[#A435F0]',
      logo: '/udemy-logo.png',
    },
  },
}))

const { default: InstitutionIcon } = await import('./InstitutionIcon')

describe('InstitutionIcon', () => {
  it('renders a logo image for a mapped institution with a known logo', () => {
    render(<InstitutionIcon institution="Udemy" institutionKey="udemy" />)

    const logo = screen.getByAltText('Udemy')
    expect(logo).toBeInTheDocument()
    expect(logo.tagName).toBe('IMG')
  })

  it('merges a custom className into the logo image', () => {
    render(
      <InstitutionIcon
        className="custom-class"
        institution="Udemy"
        institutionKey="udemy"
      />
    )

    expect(screen.getByAltText('Udemy')).toHaveClass('custom-class')
  })

  it('renders a fallback initials badge when institutionKey is not provided', () => {
    render(<InstitutionIcon institution="Some College" />)

    expect(screen.getByText('SC')).toBeInTheDocument()
  })

  it('sets the institution name as the fallback badge title for accessibility', () => {
    render(<InstitutionIcon institution="Some College" />)

    expect(screen.getByText('SC')).toHaveAttribute('title', 'Some College')
  })

  it('merges a custom className into the fallback badge', () => {
    render(
      <InstitutionIcon className="custom-class" institution="Some College" />
    )

    expect(screen.getByText('SC')).toHaveClass('custom-class')
  })
})
