import { type ComponentProps } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils/cn'

interface CustomButtonIconProps extends ComponentProps<'p'> {}

export function CustomButtonIcon(props: CustomButtonIconProps) {
  return <p {...props} className={cn('text-mainColor', props.className)} />
}

interface CustomButtonLabelProps extends ComponentProps<'p'> {}

export function CustomButtonLabel(props: CustomButtonLabelProps) {
  return <p {...props} />
}

interface CustomButtonProps extends ComponentProps<typeof Button> {
  href?: string
  target?: string
}

const defaultClassNameButton =
  'gap-2 border-mainColor bg-transparent text-sm hover:opacity-70 dark:border-mainColor dark:hover:bg-lightMainColorDark cursor-pointer border-2'

function CustomButton({ href, target, ...props }: CustomButtonProps) {
  if (href) {
    return (
      <Link
        className="cursor-pointer"
        target={target || 'noopener noreferrer'}
        to={href}
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
CustomButton.Label = CustomButtonLabel

export { CustomButton }
