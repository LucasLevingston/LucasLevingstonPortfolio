import Link from 'next/link'
import { Toggle } from '@/components/ui/toggle'
import { cn } from '@/lib/utils/cn'
import type {
  CustomToggleIconProps,
  CustomToggleLabelProps,
  CustomToggleProps,
} from './custom-toggle.types'

export function CustomToggleIcon(props: CustomToggleIconProps) {
  return <p className="text-mainColor" {...props} />
}

export function CustomToggleLabel(props: CustomToggleLabelProps) {
  return <p {...props} />
}

const defaultClassNameToggle = cn(
  'm-2 h-12 justify-center gap-2 cursor-pointer',
  'data-[state=on]:border-mainColor data-[state=on]:border',
  'dark:data-[state=on]:bg-light-main-color-dark'
)

function CustomToggle({ href, className, ...props }: CustomToggleProps) {
  if (href) {
    return (
      <Link className="cursor-pointer" href={href} target="_blank">
        <Toggle className={cn(defaultClassNameToggle, className)} {...props} />
      </Link>
    )
  }
  return <Toggle className={cn(defaultClassNameToggle, className)} {...props} />
}

CustomToggle.Icon = CustomToggleIcon
CustomToggle.Label = CustomToggleLabel

export { CustomToggle }
