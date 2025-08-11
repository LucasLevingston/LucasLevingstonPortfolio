import { ComponentProps } from 'react'
import { cn } from '@/lib/utils/cn'
import { Badge } from '../ui/badge'

interface CustomBadgeProps extends ComponentProps<typeof Badge> {}

export const CustomBadge = ({ ...props }: CustomBadgeProps) => {
  return (
    <Badge
      {...props}
      className={cn(
        props.className,
        'border-mainColor bg-transparent text-sm  dark:border-mainBorderDark  border-[2px]'
      )}
      variant="outline"
    />
  )
}
