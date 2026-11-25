import type { ComponentProps } from 'react'
import type { Button } from '@/components/ui/button'

export interface CustomButtonIconProps extends ComponentProps<'p'> {}

export interface CustomButtonTextProps extends ComponentProps<'p'> {}

export interface CustomButtonProps extends ComponentProps<typeof Button> {
  href?: string
  target?: string
}
