import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { CurrentJobBadge } from './CurrentJobBadge'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}))

describe('CurrentJobBadge', () => {
  it('renders the badge when the role is ongoing', () => {
    render(<CurrentJobBadge endsDate="Atual" />)

    expect(screen.getByText('about.currentJob')).toBeInTheDocument()
  })

  it('renders nothing when the role has ended', () => {
    const { container } = render(<CurrentJobBadge endsDate="06/2024" />)

    expect(container).toBeEmptyDOMElement()
  })
})
