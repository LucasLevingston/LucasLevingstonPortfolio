import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import TechnologyIcon from './TechnologyIcon'

describe('TechnologyIcon', () => {
  it('renders an <i> devicon element for devicon-based technologies', () => {
    const { container } = render(<TechnologyIcon technology="nextjs" />)

    const icon = container.querySelector('i')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveClass('devicon-nextjs-plain')
    expect(icon).toHaveClass('text-3xl')
  })

  it('applies the larger hover size classes when hover is true', () => {
    const { container } = render(<TechnologyIcon hover technology="nextjs" />)

    const icon = container.querySelector('i')
    expect(icon).toHaveClass('text-7xl')
  })

  it('merges a custom className into the icon element', () => {
    const { container } = render(
      <TechnologyIcon className="custom-class" technology="nextjs" />
    )

    const icon = container.querySelector('i')
    expect(icon).toHaveClass('custom-class')
  })

  it('renders an <img> for svg-based technologies', () => {
    render(<TechnologyIcon technology="zod" />)

    const img = screen.getByAltText('')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://v3.zod.dev/logo.svg')
    expect(img).toHaveClass('w-[30px]')
  })

  it('renders a react element for element-based technologies', () => {
    render(<TechnologyIcon technology="rest" />)

    expect(screen.getByText('REST')).toBeInTheDocument()
  })

  it('does not render an <img> when the technology has no svg', () => {
    render(<TechnologyIcon technology="nextjs" />)

    expect(screen.queryByAltText('')).not.toBeInTheDocument()
  })
})
