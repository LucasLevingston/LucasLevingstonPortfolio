import { type ChangeEvent, type MouseEvent, useCallback } from 'react'
import type { ProjectTechnologyFilterPopoverProps } from './project-technology-filter-popover.types'

type FilterKey = Parameters<
  ProjectTechnologyFilterPopoverProps['onSetBooleanFilter']
>[0]

type UseProjectTechnologyFilterPopoverArgs = Pick<
  ProjectTechnologyFilterPopoverProps,
  | 'filter'
  | 'onSetBooleanFilter'
  | 'onTechnologySearchChange'
  | 'onToggleTechnology'
>

/**
 * Stable handlers for the popover. The toggles share one click handler each
 * and read what they control from data-* attributes, so no per-item closure
 * is created on every render.
 */
export function useProjectTechnologyFilterPopover({
  filter,
  onSetBooleanFilter,
  onTechnologySearchChange,
  onToggleTechnology,
}: UseProjectTechnologyFilterPopoverArgs) {
  const handleSearchChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onTechnologySearchChange(event.target.value)
    },
    [onTechnologySearchChange]
  )

  const handleTechnologyClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const { technology } = event.currentTarget.dataset
      if (technology) {
        onToggleTechnology(technology)
      }
    },
    [onToggleTechnology]
  )

  const handleBooleanFilterClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const filterKey = event.currentTarget.dataset.filterKey as
        | FilterKey
        | undefined
      if (filterKey) {
        onSetBooleanFilter(filterKey, !filter[filterKey])
      }
    },
    [filter, onSetBooleanFilter]
  )

  return { handleSearchChange, handleTechnologyClick, handleBooleanFilterClick }
}
