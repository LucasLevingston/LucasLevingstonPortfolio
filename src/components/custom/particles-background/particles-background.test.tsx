import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ParticlesBackground } from './ParticlesBackground'

vi.mock('framer-motion', () => ({
  useReducedMotion: () => false,
}))

vi.mock('tsparticles-slim', () => ({
  loadSlim: vi.fn(),
}))

vi.mock('react-tsparticles', () => ({
  default: (props: {
    className?: string
    init?: (engine: unknown) => Promise<void>
    options?: { particles?: { number?: { value?: number } } }
  }) => (
    <div
      className={props.className}
      data-init-type={typeof props.init}
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

    const particles = screen.getByTestId('particles')
    expect(particles).toHaveAttribute('data-init-type', 'function')
    expect(particles).toHaveAttribute('data-num-particles', '55')
  })
})
