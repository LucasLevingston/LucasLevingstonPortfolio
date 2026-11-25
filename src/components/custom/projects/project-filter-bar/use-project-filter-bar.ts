import { type ChangeEvent, useCallback } from 'react'

export function useProjectFilterBar(onSearchChange: (value: string) => void) {
  const handleSearchInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onSearchChange(event.target.value)
    },
    [onSearchChange]
  )

  return { handleSearchInputChange }
}
