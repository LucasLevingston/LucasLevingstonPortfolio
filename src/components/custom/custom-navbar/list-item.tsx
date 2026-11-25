import { CustomButton } from '@/components/custom/custom-button'
import { cn } from '@/lib/utils/cn'
import type { ListItemProps } from './list-item.types'

const DESCRIPTION_CLASS_NAME = cn(
  'text-xs leading-relaxed text-black dark:text-white',
  'break-words whitespace-normal'
)

// React 19 passes `ref` as a regular prop, so no forwardRef wrapper.
export function ListItem({
  className,
  title,
  children,
  href,
  ref,
}: ListItemProps) {
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
          <p className={DESCRIPTION_CLASS_NAME}>{children}</p>{' '}
        </div>
      </CustomButton>
    </li>
  )
}
