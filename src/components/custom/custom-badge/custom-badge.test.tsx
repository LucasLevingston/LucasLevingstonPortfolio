import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CustomBadge } from './CustomBadge'

describe('CustomBadge', () => {
  it('renders children', () => {
    render(<CustomBadge>React</CustomBadge>)
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('merges a custom className with the default styles', () => {
    render(<CustomBadge className="custom-class">React</CustomBadge>)
    const badge = screen.getByText('React')
    expect(badge).toHaveClass('custom-class')
    expect(badge).toHaveClass('border-mainColor')
  })
})
