import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

vi.mock('@/components/custom/particles-background', () => ({
  ParticlesBackground: () => null,
}))

import { Providers } from './providers'

describe('Providers', () => {
  it('renders children wrapped in the app providers', () => {
    render(
      <Providers>
        <div>child content</div>
      </Providers>
    )
    expect(screen.getByText('child content')).toBeInTheDocument()
  })

  it('applies the default dark theme to the document root', () => {
    render(
      <Providers>
        <div>themed content</div>
      </Providers>
    )
    expect(document.documentElement).toHaveClass('dark')
  })
})
