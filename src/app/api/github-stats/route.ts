import { NextResponse } from 'next/server'
import { env } from '@/env'

const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql'
// GitHub launched in 2008, so no account has contributions before it.
const FIRST_GITHUB_YEAR = 2008
// Let the CDN serve the count for an hour and refresh it in the background,
// so visitors never wait on the GitHub API.
const SUCCESS_CACHE_CONTROL =
  'public, s-maxage=3600, stale-while-revalidate=86400'

interface ContributionsCollection {
  totalCommitContributions?: number
}

interface ContributionsResponse {
  data?: { user?: Record<string, ContributionsCollection | null> | null }
}

function getYearsUntil(currentYear: number) {
  return Array.from(
    { length: currentYear - FIRST_GITHUB_YEAR + 1 },
    (_, index) => FIRST_GITHUB_YEAR + index
  )
}

// contributionsCollection only spans up to one year, so every year gets its
// own aliased field - all of them resolved in a single request.
function buildContributionsQuery(years: number[]) {
  const fields = years
    .map(
      year =>
        `y${year}: contributionsCollection(` +
        `from: "${year}-01-01T00:00:00Z", to: "${year}-12-31T23:59:59Z"` +
        ') { totalCommitContributions }'
    )
    .join('\n')

  return `query($login: String!) { user(login: $login) { ${fields} } }`
}

function sumCommits(payload: ContributionsResponse) {
  return Object.values(payload.data?.user ?? {}).reduce(
    (total, collection) => total + (collection?.totalCommitContributions ?? 0),
    0
  )
}

export async function GET() {
  const { NEXT_GITHUB_TOKEN: token, NEXT_GITHUB_USER: username } = env

  if (!(token && username)) {
    return NextResponse.json({ totalCommits: 0 })
  }

  try {
    const years = getYearsUntil(new Date().getFullYear())
    const response = await fetch(GITHUB_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: buildContributionsQuery(years),
        variables: { login: username },
      }),
      cache: 'no-store',
    })

    if (!response.ok) {
      throw new Error('Erro ao consultar GraphQL')
    }

    const totalCommits = sumCommits(await response.json())

    return NextResponse.json(
      { totalCommits },
      { headers: { 'Cache-Control': SUCCESS_CACHE_CONTROL } }
    )
  } catch (error) {
    console.error(error)

    return NextResponse.json({ totalCommits: 0 })
  }
}
