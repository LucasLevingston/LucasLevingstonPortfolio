import { useQuery } from '@tanstack/react-query'

async function fetchCommitCount(): Promise<number> {
  try {
    const response = await fetch('/api/github-stats')
    const { totalCommits } = await response.json()
    return totalCommits
  } catch (error) {
    console.error('Erro ao buscar commits:', error)
    throw error
  }
}

export function useCommitCount() {
  const { data } = useQuery({
    queryKey: ['github-stats', 'commit-count'],
    queryFn: fetchCommitCount,
    staleTime: 5 * 60 * 1000,
  })

  return data
}
