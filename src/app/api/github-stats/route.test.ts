import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

describe('GET /api/github-stats', () => {
  beforeEach(() => {
    vi.resetModules()
    vi.stubGlobal('fetch', vi.fn())
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.doUnmock('@/env')
  })

  it('returns totalCommits 0 immediately when token or user is missing', async () => {
    vi.doMock('@/env', () => ({
      env: { NEXT_GITHUB_TOKEN: '', NEXT_GITHUB_USER: '' },
    }))
    const { GET } = await import('./route')
    const response = await GET()
    const body = await response.json()

    expect(body).toEqual({ totalCommits: 0 })
    expect(fetch).not.toHaveBeenCalled()
  })

  it('sums commits across every repo on success', async () => {
    vi.doMock('@/env', () => ({
      env: { NEXT_GITHUB_TOKEN: 'test-token', NEXT_GITHUB_USER: 'test-user' },
    }))
    const fetchMock = fetch as unknown as ReturnType<typeof vi.fn>
    fetchMock
      .mockResolvedValueOnce({
        json: async () => [{ name: 'repo-a' }, { name: 'repo-b' }],
      })
      .mockResolvedValueOnce({
        json: async () => [{ sha: '1' }, { sha: '2' }, { sha: '3' }],
      })
      .mockResolvedValueOnce({
        json: async () => [{ sha: '4' }],
      })

    const { GET } = await import('./route')
    const response = await GET()
    const body = await response.json()

    expect(body).toEqual({ totalCommits: 4 })
    expect(fetch).toHaveBeenCalledTimes(3)
    expect(fetch).toHaveBeenCalledWith(
      'https://api.github.com/users/test-user/repos',
      { cache: 'no-store', headers: { Authorization: 'token test-token' } }
    )
  })

  it('returns totalCommits 0 when a commits response is not an array', async () => {
    vi.doMock('@/env', () => ({
      env: { NEXT_GITHUB_TOKEN: 'test-token', NEXT_GITHUB_USER: 'test-user' },
    }))
    const fetchMock = fetch as unknown as ReturnType<typeof vi.fn>
    fetchMock
      .mockResolvedValueOnce({ json: async () => [{ name: 'repo-a' }] })
      .mockResolvedValueOnce({ json: async () => ({ message: 'error' }) })

    const { GET } = await import('./route')
    const response = await GET()
    const body = await response.json()

    expect(body).toEqual({ totalCommits: 0 })
  })

  it('returns totalCommits 0 when fetch rejects', async () => {
    vi.doMock('@/env', () => ({
      env: { NEXT_GITHUB_TOKEN: 'test-token', NEXT_GITHUB_USER: 'test-user' },
    }))
    const fetchMock = fetch as unknown as ReturnType<typeof vi.fn>
    fetchMock.mockRejectedValueOnce(new Error('network error'))

    const { GET } = await import('./route')
    const response = await GET()
    const body = await response.json()

    expect(body).toEqual({ totalCommits: 0 })
  })
})
