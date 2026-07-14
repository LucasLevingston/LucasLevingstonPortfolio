import { ChevronLeft, ChevronRight } from 'lucide-react'
import type React from 'react'
import type { CarouselApi } from '@/components/ui/carousel'
import { cn } from '@/lib/utils/cn'

interface CarouselPaginationProps {
  currentImage: number
  setCurrentImage: (index: number) => void
  api: CarouselApi
  images: string[]
}

const CarouselPagination: React.FC<CarouselPaginationProps> = ({
  currentImage,
  setCurrentImage,
  api,
  images,
}) => {
  const goTo = (index: number) => {
    setCurrentImage(index)
    api?.scrollTo(index)
  }

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        aria-label="Previous image"
        className="text-mainColor transition-opacity hover:opacity-70 disabled:pointer-events-none disabled:opacity-30"
        disabled={currentImage === 0}
        onClick={() => goTo(currentImage - 1)}
        type="button"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <div className="flex items-center gap-1.5">
        {images.map((_, index) => (
          <button
            aria-label={`Go to image ${index + 1}`}
            className={cn(
              'h-1.5 rounded-full transition-all duration-200',
              index === currentImage
                ? 'w-4 bg-mainColor'
                : 'w-1.5 bg-mainColor/30 hover:bg-mainColor/60'
            )}
            key={index}
            onClick={() => goTo(index)}
            type="button"
          />
        ))}
      </div>

      <button
        aria-label="Next image"
        className="text-mainColor transition-opacity hover:opacity-70 disabled:pointer-events-none disabled:opacity-30"
        disabled={currentImage === images.length - 1}
        onClick={() => goTo(currentImage + 1)}
        type="button"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}

export default CarouselPagination
