import { NextResponse } from 'next/server'

export async function GET() {
  const token = process.env.GITHUB_TOKEN
  const user = process.env.GITHUB_USER

  if (!(token && user)) {
    return NextResponse.json({ totalCommits: 0 })
  }

  try {
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos`,
      { cache: 'no-store', headers: { Authorization: `token ${token}` } }
    )
    const repos = await reposResponse.json()

    const commitsResponses = await Promise.all(
      repos.map((repo: { name: string }) =>
        fetch(`https://api.github.com/repos/${user}/${repo.name}/commits`, {
          cache: 'no-store',
          headers: { Authorization: `token ${token}` },
        })
      )
    )
    const commitsArrays = await Promise.all(
      commitsResponses.map(res => res.json())
    )

    const totalCommits = commitsArrays.reduce(
      (sum, commits) => sum + (Array.isArray(commits) ? commits.length : 0),
      0
    )

    return NextResponse.json({ totalCommits })
  } catch (error) {
    console.error('Erro ao buscar commits:', error)
    return NextResponse.json({ totalCommits: 0 })
  }
}
