import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CustomButton } from './CustomButton'

describe('CustomButton', () => {
  it('renders as a plain button when no href is given', () => {
    render(<CustomButton>Click me</CustomButton>)
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('border-mainColor')
  })

  it('renders a link wrapping a button when href is given', () => {
    render(<CustomButton href="/about">Go</CustomButton>)
    const link = screen.getByRole('link', { name: 'Go' })
    expect(link).toHaveAttribute('href', '/about')
    expect(link).toHaveAttribute('target', 'noopener noreferrer')
  })

  it('uses a custom target when provided', () => {
    render(
      <CustomButton href="/about" target="_self">
        Go
      </CustomButton>
    )
    expect(screen.getByRole('link', { name: 'Go' })).toHaveAttribute(
      'target',
      '_self'
    )
  })

  it('merges a custom className with the default styles', () => {
    render(<CustomButton className="custom-class">Click me</CustomButton>)
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toHaveClass('custom-class')
    expect(button).toHaveClass('border-mainColor')
  })

  it('defaults to the outline variant class', () => {
    render(<CustomButton>Click me</CustomButton>)
    expect(screen.getByRole('button', { name: 'Click me' })).toHaveClass(
      'hover:bg-accent',
      'hover:text-accent-foreground'
    )
  })

  it('respects an explicit variant', () => {
    render(<CustomButton variant="destructive">Delete</CustomButton>)
    expect(screen.getByRole('button', { name: 'Delete' })).toHaveClass(
      'text-destructive-foreground',
      'hover:bg-destructive/90'
    )
  })

  it('renders CustomButton.Icon with the main color text class', () => {
    render(<CustomButton.Icon>icon</CustomButton.Icon>)
    expect(screen.getByText('icon')).toHaveClass('text-mainColor')
  })

  it('renders CustomButton.Label as plain text', () => {
    render(<CustomButton.Label>label</CustomButton.Label>)
    expect(screen.getByText('label')).toBeInTheDocument()
  })
})
