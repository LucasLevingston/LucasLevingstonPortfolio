import { PauseCircle, PlayCircle, Trophy } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils/cn'
import type { FormationType } from '@/types/FormationType'

const GRADUATED_BADGE_CLASS_NAME = cn(
  'border-green-300 bg-green-100 text-base text-green-800',
  'hover:bg-green-100 dark:bg-green-900 dark:text-green-300'
)

const DEFERRED_BADGE_CLASS_NAME = cn(
  'border-red-300 bg-red-50 text-base text-red-700',
  'dark:bg-red-950 dark:text-red-300'
)

const IN_PROGRESS_BADGE_CLASS_NAME = cn(
  'border-blue-300 bg-blue-100 text-base text-blue-800',
  'hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300'
)

export function EducationStatusBadge({
  formation,
}: {
  formation: FormationType
}) {
  const { t } = useTranslation()

  if (formation.graduated) {
    return (
      <Badge className={GRADUATED_BADGE_CLASS_NAME}>
        <Trophy className="mr-1 h-3 w-3" />
        {t('about.graduated')}
      </Badge>
    )
  }

  if (
    formation.currentStatus?.toLowerCase().includes('trancado') ||
    formation.currentStatus?.toLowerCase().includes('deferred')
  ) {
    return (
      <Badge className={DEFERRED_BADGE_CLASS_NAME} variant="outline">
        <PauseCircle className="mr-1 h-3 w-3" />
        {t('about.deferred')}
      </Badge>
    )
  }

  return (
    <Badge className={IN_PROGRESS_BADGE_CLASS_NAME}>
      <PlayCircle className="mr-1 h-3 w-3" />
      {t('about.inProgress')}
    </Badge>
  )
}
