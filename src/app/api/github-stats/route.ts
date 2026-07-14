import { NextResponse } from 'next/server'
import { env } from '@/env'

export async function GET() {
  const { NEXT_GITHUB_TOKEN: token, NEXT_GITHUB_USER: username } = env

  if (!token || !username) {
    return NextResponse.json({ totalCommits: 0 })
  }

  try {
    const currentYear = new Date().getFullYear()
    let totalCommits = 0

    for (let year = 2008; year <= currentYear; year++) {
      const from = `${year}-01-01T00:00:00Z`
      const to = `${year}-12-31T23:59:59Z`

      // biome-ignore lint/nursery/noAwaitInLoop: sequential on purpose, avoids GraphQL rate limit
      const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query($login: String!, $from: DateTime!, $to: DateTime!) {
              user(login: $login) {
                contributionsCollection(from: $from, to: $to) {
                  totalCommitContributions
                }
              }
            }
          `,
          variables: {
            login: username,
            from,
            to,
          },
        }),
        cache: 'no-store',
      })

      if (!response.ok) {
        throw new Error('Erro ao consultar GraphQL')
      }

      const json = await response.json()

      totalCommits +=
        json.data?.user?.contributionsCollection?.totalCommitContributions ?? 0
    }

    return NextResponse.json({
      totalCommits,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json({
      totalCommits: 0,
    })
  }
}
