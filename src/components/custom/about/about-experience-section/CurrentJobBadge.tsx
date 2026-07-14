import { Radio } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils/cn'
import { isCurrentJob } from './is-current-job'

const CURRENT_JOB_BADGE_CLASS_NAME = cn(
  'border-blue-300 bg-blue-100 text-base text-blue-800',
  'hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300'
)

export function CurrentJobBadge({ endsDate }: { endsDate: string }) {
  const { t } = useTranslation()

  if (!isCurrentJob(endsDate)) {
    return null
  }

  return (
    <Badge className={CURRENT_JOB_BADGE_CLASS_NAME}>
      <Radio className="mr-1 h-3 w-3" />
      {t('about.currentJob')}
    </Badge>
  )
}
