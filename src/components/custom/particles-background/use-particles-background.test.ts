import { act, renderHook, waitFor } from '@testing-library/react'
import { useReducedMotion } from 'framer-motion'
import { loadSlim } from 'tsparticles-slim'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useParticlesBackground } from './use-particles-background'

vi.mock('framer-motion', () => ({
  useReducedMotion: vi.fn(),
}))

vi.mock('tsparticles-slim', () => ({
  loadSlim: vi.fn(),
}))

describe('useParticlesBackground', () => {
  afterEach(() => {
    document.documentElement.classList.remove('dark')
    vi.mocked(useReducedMotion).mockReset()
  })

  it('returns light-mode colors and enabled motion when reduced motion is off and dark mode is inactive', () => {
    vi.mocked(useReducedMotion).mockReturnValue(false)

    const { result } = renderHook(() => useParticlesBackground())

    expect(result.current.options.particles.color.value).toBe('#2563eb')
    expect(result.current.options.particles.links.opacity).toBe(0.15)
    expect(result.current.options.particles.opacity.value).toBe(0.35)
    expect(result.current.options.particles.move.enable).toBe(true)
    expect(result.current.options.interactivity.events.onHover.enable).toBe(
      true
    )
    expect(result.current.options.fullScreen.enable).toBe(false)
    expect(result.current.options.particles.number.value).toBe(55)
  })

  it('returns dark-mode colors when the html element has the dark class', async () => {
    vi.mocked(useReducedMotion).mockReturnValue(false)
    document.documentElement.classList.add('dark')

    const { result } = renderHook(() => useParticlesBackground())

    await waitFor(() => {
      expect(result.current.options.particles.color.value).toBe('#3b82f6')
    })
    expect(result.current.options.particles.links.opacity).toBe(0.25)
    expect(result.current.options.particles.opacity.value).toBe(0.5)
    expect(result.current.options.interactivity.modes.grab.links.opacity).toBe(
      0.5
    )
  })

  it('reacts to the dark class being toggled after mount', async () => {
    vi.mocked(useReducedMotion).mockReturnValue(false)

    const { result } = renderHook(() => useParticlesBackground())
    expect(result.current.options.particles.color.value).toBe('#2563eb')

    await act(async () => {
      document.documentElement.classList.add('dark')
      await Promise.resolve()
    })

    await waitFor(() => {
      expect(result.current.options.particles.color.value).toBe('#3b82f6')
    })
  })

  it('disables movement and hover interactivity when reduced motion is preferred', () => {
    vi.mocked(useReducedMotion).mockReturnValue(true)

    const { result } = renderHook(() => useParticlesBackground())

    expect(result.current.options.particles.move.enable).toBe(false)
    expect(result.current.options.interactivity.events.onHover.enable).toBe(
      false
    )
  })

  it('exposes an init function that loads the slim tsparticles engine', async () => {
    vi.mocked(useReducedMotion).mockReturnValue(false)

    const { result } = renderHook(() => useParticlesBackground())
    const fakeEngine = {} as never

    await result.current.init(fakeEngine)

    expect(loadSlim).toHaveBeenCalledWith(fakeEngine)
  })
})
