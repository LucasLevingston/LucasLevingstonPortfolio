import { render, screen } from '@testing-library/react'
import type { ReactNode } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { ParticlesBackground } from './ParticlesBackground'

vi.mock('framer-motion', () => ({
  useReducedMotion: () => false,
}))

vi.mock('@tsparticles/slim', () => ({
  loadSlim: vi.fn(),
}))

vi.mock('@tsparticles/react', () => ({
  ParticlesProvider: (props: {
    children: ReactNode
    init?: (engine: unknown) => Promise<void>
  }) => (
    <div data-init-type={typeof props.init} data-testid="provider">
      {props.children}
    </div>
  ),
  Particles: (props: {
    className?: string
    options?: { particles?: { number?: { value?: number } } }
  }) => (
    <div
      className={props.className}
      data-num-particles={props.options?.particles?.number?.value}
      data-testid="particles"
    />
  ),
}))

describe('ParticlesBackground', () => {
  it('renders the Particles component with a pointer-events-none fixed background className', () => {
    render(<ParticlesBackground />)

    const particles = screen.getByTestId('particles')
    expect(particles).toHaveClass('pointer-events-none')
    expect(particles).toHaveClass('fixed')
    expect(particles).toHaveClass('inset-0')
  })

  it('wires the init function and options produced by useParticlesBackground', () => {
    render(<ParticlesBackground />)

    expect(screen.getByTestId('provider')).toHaveAttribute(
      'data-init-type',
      'function'
    )
    expect(screen.getByTestId('particles')).toHaveAttribute(
      'data-num-particles',
      '55'
    )
  })
})
