import { ComponentProps } from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils/cn'

interface CustomBadgeProps extends ComponentProps<typeof Badge> {}

export const CustomBadge = ({ ...props }: CustomBadgeProps) => {
  return (
    <Badge
      {...props}
      className={cn(
        'border-mainColor bg-transparent text-sm  dark:border-mainBorderDark  border-[2px]',
        props.className
      )}
      variant="outline"
    />
  )
}
