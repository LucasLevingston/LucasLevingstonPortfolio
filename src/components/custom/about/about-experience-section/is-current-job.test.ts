import { describe, expect, it } from 'vitest'
import { isCurrentJob } from './is-current-job'

describe('isCurrentJob', () => {
  it('returns true for the Portuguese "Atual" marker', () => {
    expect(isCurrentJob('Atual')).toBe(true)
  })

  it('returns true for the English "Present" marker', () => {
    expect(isCurrentJob('Present')).toBe(true)
  })

  it('is case-insensitive', () => {
    expect(isCurrentJob('ATUAL')).toBe(true)
    expect(isCurrentJob('present')).toBe(true)
  })

  it('returns false for a real end date', () => {
    expect(isCurrentJob('06/2024')).toBe(false)
  })
})
