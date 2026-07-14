import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { AboutPersonalInfo } from './AboutPersonalInfo'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'br', changeLanguage: vi.fn() },
  }),
}))

describe('AboutPersonalInfo', () => {
  const props = {
    location: 'Sao Paulo, Brazil',
    address: 'Some street, 123',
    email: 'test@example.com',
    phone: '+55 11 99999-9999',
  }

  it('renders the section title', () => {
    render(<AboutPersonalInfo {...props} />)

    expect(screen.getByText('about.personalInfo')).toBeInTheDocument()
  })

  it('renders every personal info value', () => {
    render(<AboutPersonalInfo {...props} />)

    expect(screen.getByText(props.location)).toBeInTheDocument()
    expect(screen.getByText(props.address)).toBeInTheDocument()
    expect(screen.getByText(props.email)).toBeInTheDocument()
    expect(screen.getByText(props.phone)).toBeInTheDocument()
  })

  it('sets the section id from the translated title', () => {
    const { container } = render(<AboutPersonalInfo {...props} />)

    expect(container.querySelector('#about\\.personalInfo')).toBeInTheDocument()
  })
})
