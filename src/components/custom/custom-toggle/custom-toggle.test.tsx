import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CustomToggle } from './CustomToggle'

describe('CustomToggle', () => {
  it('renders as a toggle button when no href is given', () => {
    render(<CustomToggle>Toggle</CustomToggle>)
    const toggle = screen.getByRole('button', { name: 'Toggle' })
    expect(toggle).toBeInTheDocument()
    expect(toggle).toHaveClass('cursor-pointer')
  })

  it('renders a link wrapping the toggle when href is given', () => {
    render(<CustomToggle href="/about">Toggle</CustomToggle>)
    const link = screen.getByRole('link', { name: 'Toggle' })
    expect(link).toHaveAttribute('href', '/about')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('merges a custom className with the default styles', () => {
    render(<CustomToggle className="custom-class">Toggle</CustomToggle>)
    const toggle = screen.getByRole('button', { name: 'Toggle' })
    expect(toggle).toHaveClass('custom-class')
    expect(toggle).toHaveClass('data-[state=on]:border-mainColor')
  })

  it('reflects the pressed state via data-state', () => {
    render(<CustomToggle pressed>Toggle</CustomToggle>)
    expect(screen.getByRole('button', { name: 'Toggle' })).toHaveAttribute(
      'data-state',
      'on'
    )
  })

  it('renders CustomToggle.Icon with the main color text class', () => {
    render(<CustomToggle.Icon>icon</CustomToggle.Icon>)
    expect(screen.getByText('icon')).toHaveClass('text-mainColor')
  })

  it('renders CustomToggle.Label as plain text', () => {
    render(<CustomToggle.Label>label</CustomToggle.Label>)
    expect(screen.getByText('label')).toBeInTheDocument()
  })
})
