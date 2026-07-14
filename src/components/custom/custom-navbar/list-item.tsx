import React from 'react'
import { CustomButton } from '@/components/custom/custom-button'
import { cn } from '@/lib/utils/cn'

export const ListItem = React.forwardRef<
  React.ElementRef<'li'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, href }, ref) => {
  return (
    <li ref={ref}>
      <CustomButton
        className={cn(
          'max-w-[130px] justify-start text-left h-auto p-3 flex-col items-start',
          className
        )}
        href={`${href}${title}`}
      >
        <div className="w-full space-y-1">
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="text-xs leading-relaxed text-black dark:text-white break-words whitespace-normal">
            {children}
          </p>{' '}
        </div>
      </CustomButton>
    </li>
  )
})
ListItem.displayName = 'ListItem'
