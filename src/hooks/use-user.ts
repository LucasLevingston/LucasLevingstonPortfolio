import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { env } from '@/env'
import { useStorage } from '@/storage/use-storage'

export const useUser = () => {
  const { i18n } = useTranslation()
  const { user, setUser, setLanguage } = useStorage()

  const { VITE_GITHUB_TOKEN, VITE_GITHUB_USER } = env

  const fetchCommitCount = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${VITE_GITHUB_USER}/repos`,
        {
          headers: {
            Authorization: `token ${VITE_GITHUB_TOKEN}`,
          },
        }
      )

      const repos = await response.json()

      const commitsResponses = await Promise.all(
        repos.map((repo: any) =>
          fetch(
            `https://api.github.com/repos/${VITE_GITHUB_USER}/${repo.name}/commits`,
            {
              headers: {
                Authorization: `token ${VITE_GITHUB_TOKEN}`,
              },
            }
          )
        )
      )

      const commitsArrays = await Promise.all(
        commitsResponses.map(res => res.json())
      )

      const totalCommits = commitsArrays.reduce(
        (sum, commits) => sum + commits.length,
        0
      )

      setUser({ ...user, totalCommits })
    } catch (error) {
      console.error('Erro ao buscar commits:', error)
    }
  }

  useEffect(() => {
    fetchCommitCount()
  }, [])

  useEffect(() => {
    setLanguage(i18n.language)
  }, [i18n.language, setUser])

  return { user, setLanguage }
}
