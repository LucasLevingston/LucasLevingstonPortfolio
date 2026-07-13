import { describe, expect, it } from 'vitest'
import { formatPhoneNumber } from './format-number'

describe('formatPhoneNumber', () => {
  it('formats an 11-digit phone number', () => {
    expect(formatPhoneNumber('11987654321')).toBe('(11) 98765-4321')
  })

  it('formats a different valid 11-digit phone number', () => {
    expect(formatPhoneNumber('21998765432')).toBe('(21) 99876-5432')
  })

  it('returns the original value when it has fewer than 11 digits', () => {
    expect(formatPhoneNumber('123')).toBe('123')
  })

  it('returns the original value when it has more than 11 digits', () => {
    expect(formatPhoneNumber('119876543210')).toBe('119876543210')
  })

  it('returns the original value for non-numeric input', () => {
    expect(formatPhoneNumber('abcdefghijk')).toBe('abcdefghijk')
  })

  it('returns an empty string unchanged', () => {
    expect(formatPhoneNumber('')).toBe('')
  })
})
