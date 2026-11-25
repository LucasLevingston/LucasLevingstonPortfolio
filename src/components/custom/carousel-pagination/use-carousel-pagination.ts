import { type MouseEvent, useCallback } from 'react'
import type { CarouselPaginationProps } from './carousel-pagination.types'

type UseCarouselPaginationArgs = Pick<
  CarouselPaginationProps,
  'api' | 'currentImage' | 'setCurrentImage'
>

export function useCarouselPagination({
  api,
  currentImage,
  setCurrentImage,
}: UseCarouselPaginationArgs) {
  const goTo = useCallback(
    (index: number) => {
      setCurrentImage(index)
      api?.scrollTo(index)
    },
    [api, setCurrentImage]
  )

  const goToPrevious = useCallback(
    () => goTo(currentImage - 1),
    [goTo, currentImage]
  )

  const goToNext = useCallback(
    () => goTo(currentImage + 1),
    [goTo, currentImage]
  )

  // One shared handler for every dot; the target index rides on data-index.
  const handleDotClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      goTo(Number(event.currentTarget.dataset.index))
    },
    [goTo]
  )

  return { goToPrevious, goToNext, handleDotClick }
}
