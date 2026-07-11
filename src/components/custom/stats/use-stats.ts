import { useTranslation } from 'react-i18next'
import { technologiesDataBr } from '@/data/technology-data'
import { useUser } from '@/hooks/use-user'

export function useStats() {
  const { user } = useUser()
  const { t } = useTranslation()

  return [
    { num: 3, text: t('stats.years') },
    { num: user.projects.length + 1, text: t('stats.projectsCompleted') },
    {
      num: Object.keys(technologiesDataBr).length,
      text: t('stats.technologiesMastered'),
    },
    { num: user.totalCommits, text: t('stats.codeCommits') },
  ]
}
