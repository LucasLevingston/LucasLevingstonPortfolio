import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { useStorage } from '@/storage/use-storage'

export const useUser = () => {
  const { i18n } = useTranslation()
  const { user, setUser, setLanguage } = useStorage()

  const fetchCommitCount = async () => {
    try {
      const response = await fetch('/api/github-stats')
      const { totalCommits } = await response.json()

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
