import type { ComponentPropsWithoutRef, Ref } from 'react'

export interface ListItemProps extends ComponentPropsWithoutRef<'a'> {
  ref?: Ref<HTMLLIElement>
}
