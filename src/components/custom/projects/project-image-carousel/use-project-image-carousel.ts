import { useEffect, useState } from 'react'
import type { CarouselApi } from '@/components/ui/carousel'

export function useProjectImageCarousel(
  images: string[],
  paginationImages?: string[]
) {
  const [currentImage, setCurrentImage] = useState(0)
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) {
      return
    }
    setCurrentImage(api.selectedScrollSnap())
    api.on('select', () => {
      setCurrentImage(api.selectedScrollSnap())
    })
  }, [api])

  const pagination = paginationImages ?? images

  return { currentImage, setCurrentImage, api, setApi, pagination }
}
