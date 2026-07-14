import { describe, expect, it } from 'vitest'
import { mountReveal, pageEnter, riseIn, scrollReveal } from './motion-reveal'

const EASE_OUT = [0.16, 1, 0.3, 1]

describe('scrollReveal', () => {
  it('has no delay for the first index', () => {
    const result = scrollReveal(0)
    expect(result.initial).toEqual({ opacity: 0, y: 20 })
    expect(result.whileInView).toEqual({ opacity: 1, y: 0 })
    expect(result.viewport).toEqual({ once: true, amount: 0.2 })
    expect(result.transition).toEqual({
      duration: 0.5,
      delay: 0,
      ease: EASE_OUT,
    })
  })

  it('scales delay with the index', () => {
    const result = scrollReveal(2)
    expect(result.transition.delay).toBeCloseTo(0.12)
  })

  it('clamps the delay at 0.3 for large indexes', () => {
    const result = scrollReveal(100)
    expect(result.transition.delay).toBe(0.3)
  })
})

describe('mountReveal', () => {
  it('builds the initial/animate/transition shape', () => {
    const result = mountReveal(0)
    expect(result.initial).toEqual({ opacity: 0, y: 20 })
    expect(result.animate).toEqual({ opacity: 1, y: 0 })
    expect(result.transition).toEqual({
      duration: 0.4,
      delay: 0,
      ease: EASE_OUT,
    })
  })

  it('clamps the delay at 0.3 for large indexes', () => {
    const result = mountReveal(10)
    expect(result.transition.delay).toBe(0.3)
  })
})

describe('riseIn', () => {
  it('uses the given delay verbatim', () => {
    const result = riseIn(0.5)
    expect(result.initial).toEqual({ opacity: 0, y: 16 })
    expect(result.animate).toEqual({ opacity: 1, y: 0 })
    expect(result.transition).toEqual({
      duration: 0.5,
      delay: 0.5,
      ease: EASE_OUT,
    })
  })

  it('accepts a zero delay', () => {
    const result = riseIn(0)
    expect(result.transition.delay).toBe(0)
  })

  it('does not clamp the given delay', () => {
    const result = riseIn(10)
    expect(result.transition.delay).toBe(10)
  })
})

describe('pageEnter', () => {
  it('returns a fixed animation shape with no delay', () => {
    const result = pageEnter()
    expect(result.initial).toEqual({ opacity: 0, y: 20 })
    expect(result.animate).toEqual({ opacity: 1, y: 0 })
    expect(result.transition).toEqual({
      duration: 0.5,
      ease: EASE_OUT,
    })
  })
})
