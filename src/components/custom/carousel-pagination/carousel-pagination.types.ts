import type { CarouselApi } from '@/components/ui/carousel'

export interface CarouselPaginationProps {
  api: CarouselApi
  currentImage: number
  images: string[]
  setCurrentImage: (index: number) => void
}
