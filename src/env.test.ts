import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

describe('env', () => {
  const ORIGINAL_ENV = process.env

  beforeEach(() => {
    vi.resetModules()
    process.env = { ...ORIGINAL_ENV }
  })

  afterEach(() => {
    process.env = ORIGINAL_ENV
  })

  it('parses valid env vars', async () => {
    process.env.NEXT_GITHUB_TOKEN = 'token'
    process.env.NEXT_GITHUB_USER = 'someuser'
    const { env } = await import('./env')
    expect(env.NEXT_GITHUB_TOKEN).toBe('token')
    expect(env.NEXT_GITHUB_USER).toBe('someuser')
  })

  it('throws when required vars are missing', async () => {
    const {
      NEXT_GITHUB_TOKEN: _token,
      NEXT_GITHUB_USER: _user,
      ...rest
    } = process.env
    process.env = rest
    await expect(import('./env')).rejects.toThrow()
  })

  it('throws when NEXT_GITHUB_USER is shorter than the minimum length', async () => {
    process.env.NEXT_GITHUB_TOKEN = 'token'
    process.env.NEXT_GITHUB_USER = 'a'
    await expect(import('./env')).rejects.toThrow()
  })

  it('throws when NEXT_GITHUB_USER exceeds the maximum length', async () => {
    process.env.NEXT_GITHUB_TOKEN = 'token'
    process.env.NEXT_GITHUB_USER = 'a'.repeat(40)
    await expect(import('./env')).rejects.toThrow()
  })
})
