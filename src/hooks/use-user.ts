import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { useStorage } from '@/storage/use-storage'

let inFlightCommitCountFetch: Promise<void> | null = null

function fetchCommitCount() {
  if (!inFlightCommitCountFetch) {
    inFlightCommitCountFetch = (async () => {
      try {
        const response = await fetch('/api/github-stats')
        const { totalCommits } = await response.json()
        useStorage.setState(state => ({
          user: { ...state.user, totalCommits },
        }))
      } catch (error) {
        console.error('Erro ao buscar commits:', error)
      } finally {
        inFlightCommitCountFetch = null
      }
    })()
  }
  return inFlightCommitCountFetch
}

export const useUser = () => {
  const { i18n } = useTranslation()
  const { user, setLanguage } = useStorage()

  useEffect(() => {
    fetchCommitCount()
  }, [])

  useEffect(() => {
    setLanguage(i18n.language)
  }, [i18n.language, setLanguage])

  return { user, setLanguage }
}
