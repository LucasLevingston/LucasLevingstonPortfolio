import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DesktopFrame } from './DesktopFrame'

describe('DesktopFrame', () => {
  it('renders children inside the frame', () => {
    render(
      <DesktopFrame>
        <p>Screen content</p>
      </DesktopFrame>
    )
    expect(screen.getByText('Screen content')).toBeInTheDocument()
  })

  it('renders the three traffic-light dots', () => {
    const { container } = render(
      <DesktopFrame>
        <p>Screen content</p>
      </DesktopFrame>
    )
    expect(container.querySelectorAll('.rounded-full')).toHaveLength(3)
  })

  it('merges a custom className with the default frame styles', () => {
    const { container } = render(
      <DesktopFrame className="custom-frame">
        <p>Screen content</p>
      </DesktopFrame>
    )
    const root = container.firstElementChild
    expect(root).toHaveClass('custom-frame')
    expect(root).toHaveClass('rounded-xl')
  })
})
