import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import PhoneFrame from './PhoneFrame'

describe('PhoneFrame', () => {
  it('renders its children', () => {
    render(
      <PhoneFrame>
        <p>Screen content</p>
      </PhoneFrame>
    )

    expect(screen.getByText('Screen content')).toBeInTheDocument()
  })

  it('applies the default phone frame styling', () => {
    const { container } = render(
      <PhoneFrame>
        <p>Screen content</p>
      </PhoneFrame>
    )

    const frame = container.firstElementChild
    expect(frame).toHaveClass('rounded-[2rem]')
    expect(frame).toHaveClass('aspect-[9/19]')
  })

  it('merges a custom className with the default styles', () => {
    const { container } = render(
      <PhoneFrame className="custom-frame">
        <p>Screen content</p>
      </PhoneFrame>
    )

    const frame = container.firstElementChild
    expect(frame).toHaveClass('custom-frame')
    expect(frame).toHaveClass('rounded-[2rem]')
  })
})
