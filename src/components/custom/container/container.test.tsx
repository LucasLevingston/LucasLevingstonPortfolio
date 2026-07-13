import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Container from './Container'

describe('Container', () => {
  it('renders children', () => {
    render(<Container>Content</Container>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('applies the default layout classes', () => {
    render(<Container data-testid="container">Content</Container>)
    expect(screen.getByTestId('container')).toHaveClass(
      'ml-auto',
      'h-full',
      'p-6'
    )
  })

  it('forwards extra props to the root div', () => {
    render(
      <Container data-testid="container" id="main-container">
        Content
      </Container>
    )
    expect(screen.getByTestId('container')).toHaveAttribute(
      'id',
      'main-container'
    )
  })

  it('wraps children in a min-h-screen inner div', () => {
    render(<Container data-testid="container">Content</Container>)
    const inner = screen.getByTestId('container').firstElementChild
    expect(inner).toHaveClass('min-h-screen')
    expect(inner).toHaveTextContent('Content')
  })
})
