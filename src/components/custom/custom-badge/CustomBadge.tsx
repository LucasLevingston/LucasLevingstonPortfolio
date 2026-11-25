import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils/cn'
import type { CustomBadgeProps } from './custom-badge.types'

export const CustomBadge = ({ ...props }: CustomBadgeProps) => (
  <Badge
    {...props}
    className={cn(
      'border-[2px] border-mainColor bg-transparent text-sm dark:border-mainBorder',
      props.className
    )}
    variant="outline"
  />
)
