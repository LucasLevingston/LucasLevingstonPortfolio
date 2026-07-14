import type { ComponentProps } from 'react'
import type { Toggle } from '@/components/ui/toggle'

export interface CustomToggleIconProps extends ComponentProps<'p'> {}

export interface CustomToggleLabelProps extends ComponentProps<'p'> {}

export interface CustomToggleProps extends ComponentProps<typeof Toggle> {
  href?: string
}
