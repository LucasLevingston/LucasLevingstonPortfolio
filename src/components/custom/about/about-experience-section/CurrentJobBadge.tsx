import { Radio } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils/cn'
import { isCurrentJob } from './is-current-job'

const CURRENT_JOB_BADGE_CLASS_NAME = cn(
  'border-mainColor/40 bg-mainColor/10 text-base text-mainColor',
  'hover:bg-mainColor/10'
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
