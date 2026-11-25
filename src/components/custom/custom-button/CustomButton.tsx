import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils/cn'
import type {
  CustomButtonIconProps,
  CustomButtonProps,
  CustomButtonTextProps,
} from './custom-button.types'

export function CustomButtonIcon(props: CustomButtonIconProps) {
  return <p {...props} className={cn('text-mainColor', props.className)} />
}

export function CustomButtonText(props: CustomButtonTextProps) {
  return <p {...props} />
}

const defaultClassNameButton = cn(
  'cursor-pointer gap-2 rounded-xl border-2 border-mainColor bg-transparent text-sm',
  'transition-[opacity,transform] duration-200 ease-out',
  'hover:-translate-y-0.5 hover:opacity-70 active:translate-y-0 active:duration-75',
  'dark:hover:shadow-lightMainColor'
)

function CustomButton({ href, target, ...props }: CustomButtonProps) {
  if (href) {
    return (
      <Link
        className="cursor-pointer"
        href={href}
        target={target || 'noopener noreferrer'}
      >
        <Button
          {...props}
          asChild={props.asChild}
          className={cn(defaultClassNameButton, props.className)}
          variant={props.variant || 'outline'}
        />
      </Link>
    )
  }

  return (
    <Button
      {...props}
      className={cn(defaultClassNameButton, props.className)}
      variant={props.variant || 'outline'}
    />
  )
}

CustomButton.Icon = CustomButtonIcon
CustomButton.Text = CustomButtonText

export { CustomButton }
