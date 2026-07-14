import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useCommitCount } from '@/hooks/use-commit-count'
import { useStorage } from '@/storage/use-storage'

export const useUser = () => {
  const { i18n } = useTranslation()
  const { user, setLanguage } = useStorage()
  const totalCommits = useCommitCount()

  useEffect(() => {
    setLanguage(i18n.language)
  }, [i18n.language, setLanguage])

  return {
    user: { ...user, totalCommits: totalCommits ?? user.totalCommits },
    setLanguage,
  }
}
