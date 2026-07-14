import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import TechnologyHoverIcon from './TechnologyHoverIcon'

describe('TechnologyHoverIcon', () => {
  it('renders the technology icon as the hover trigger', () => {
    const { container } = render(<TechnologyHoverIcon technology="nextjs" />)

    expect(
      container.querySelector('i.devicon-nextjs-plain')
    ).toBeInTheDocument()
  })

  it('shows the technology label, description and link after hovering', async () => {
    const user = userEvent.setup()
    render(<TechnologyHoverIcon technology="react" />)

    const trigger = screen.getByText('', {
      selector: 'i.devicon-react-plain',
    })
    await user.hover(trigger)

    const link = await screen.findByRole('link', {}, { timeout: 2000 })

    expect(
      await screen.findByText('React', {}, { timeout: 2000 })
    ).toBeInTheDocument()
    expect(
      screen.getByText('A JavaScript library for building user interfaces.')
    ).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://reactjs.org/')
  })

  it('merges a custom classname into the trigger icon', () => {
    const { container } = render(
      <TechnologyHoverIcon classname="custom-class" technology="nextjs" />
    )

    expect(container.querySelector('i.custom-class')).toBeInTheDocument()
  })
})
