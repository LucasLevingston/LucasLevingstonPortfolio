import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const GRAPHQL_URL = 'https://api.github.com/graphql'
const YEAR_FIELD_PATTERN = /y\d{4}: contributionsCollection/gu

function mockEnv(token: string, user: string) {
  vi.doMock('@/env', () => ({
    env: { NEXT_GITHUB_TOKEN: token, NEXT_GITHUB_USER: user },
  }))
}

function graphqlResponse(user: unknown, ok = true) {
  return { ok, json: async () => ({ data: { user } }) }
}

describe('GET /api/github-stats', () => {
  beforeEach(() => {
    vi.resetModules()
    vi.useFakeTimers({ toFake: ['Date'] })
    vi.setSystemTime(new Date('2026-06-15T12:00:00Z'))
    vi.stubGlobal('fetch', vi.fn())
    vi.spyOn(console, 'error').mockImplementation(() => undefined)
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
    vi.doUnmock('@/env')
  })

  it('returns totalCommits 0 immediately when token or user is missing', async () => {
    mockEnv('', '')
    const { GET } = await import('./route')

    const body = await (await GET()).json()

    expect(body).toEqual({ totalCommits: 0 })
    expect(fetch).not.toHaveBeenCalled()
  })

  it('fetches every year in a single GraphQL request and sums the commits', async () => {
    mockEnv('test-token', 'test-user')
    vi.mocked(fetch).mockResolvedValueOnce(
      graphqlResponse({
        y2024: { totalCommitContributions: 10 },
        y2025: { totalCommitContributions: 5 },
        y2026: null,
      }) as unknown as Response
    )
    const { GET } = await import('./route')

    const response = await GET()

    expect(await response.json()).toEqual({ totalCommits: 15 })
    expect(fetch).toHaveBeenCalledTimes(1)

    const [url, init] = vi.mocked(fetch).mock.calls[0]
    const payload = JSON.parse(String(init?.body))
    expect(url).toBe(GRAPHQL_URL)
    expect(init?.headers).toMatchObject({ Authorization: 'Bearer test-token' })
    expect(payload.variables).toEqual({ login: 'test-user' })
    // 2008 through the mocked current year (2026), one aliased field each.
    expect(payload.query.match(YEAR_FIELD_PATTERN)).toHaveLength(19)
  })

  it('marks successful responses as cacheable by the CDN', async () => {
    mockEnv('test-token', 'test-user')
    vi.mocked(fetch).mockResolvedValueOnce(
      graphqlResponse({
        y2026: { totalCommitContributions: 1 },
      }) as unknown as Response
    )
    const { GET } = await import('./route')

    const response = await GET()

    expect(response.headers.get('Cache-Control')).toContain('s-maxage=3600')
  })

  it('returns totalCommits 0 without caching when GitHub responds with an error', async () => {
    mockEnv('test-token', 'test-user')
    vi.mocked(fetch).mockResolvedValueOnce(
      graphqlResponse(null, false) as unknown as Response
    )
    const { GET } = await import('./route')

    const response = await GET()

    expect(await response.json()).toEqual({ totalCommits: 0 })
    expect(response.headers.get('Cache-Control')).toBeNull()
  })

  it('returns totalCommits 0 when fetch rejects', async () => {
    mockEnv('test-token', 'test-user')
    vi.mocked(fetch).mockRejectedValueOnce(new Error('network error'))
    const { GET } = await import('./route')

    const body = await (await GET()).json()

    expect(body).toEqual({ totalCommits: 0 })
  })
})
