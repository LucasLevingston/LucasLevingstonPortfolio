import type { ComponentProps } from 'react'
import { Link } from 'react-router-dom'
import { Toggle } from '@/components/ui/toggle'
import { cn } from '@/lib/utils/cn'

interface CustomToggleIconProps extends ComponentProps<'p'> {}

export function CustomToggleIcon(props: CustomToggleIconProps) {
  return <p className="text-mainColor" {...props} />
}

interface CustomToggleLabelProps extends ComponentProps<'p'> {}

export function CustomToggleLabel(props: CustomToggleLabelProps) {
  return <p {...props} />
}

interface CustomToggleProps extends ComponentProps<typeof Toggle> {
  href?: string
}

const defaultClassNameToggle =
  'm-2 h-12 justify-center gap-2 data-[state=on]:border-mainColor data-[state=on]:border dark:data-[state=on]:bg-light-main-color-dark cursor-pointer'

function CustomToggle({ href, className, ...props }: CustomToggleProps) {
  if (href) {
    return (
      <Link className="cursor-pointer" target="_blank" to={href}>
        <Toggle className={cn(defaultClassNameToggle, className)} {...props} />
      </Link>
    )
  }
  return <Toggle className={cn(defaultClassNameToggle, className)} {...props} />
}

CustomToggle.Icon = CustomToggleIcon
CustomToggle.Label = CustomToggleLabel

export { CustomToggle }
