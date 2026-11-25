import { ChevronLeft, ChevronRight } from 'lucide-react'
import type React from 'react'
import { cn } from '@/lib/utils/cn'
import type { CarouselPaginationProps } from './carousel-pagination.types'
import { useCarouselPagination } from './use-carousel-pagination'

const ARROW_CLASS_NAME = cn(
  'text-mainColor transition-opacity hover:opacity-70',
  'disabled:pointer-events-none disabled:opacity-30'
)

const CarouselPagination: React.FC<CarouselPaginationProps> = ({
  currentImage,
  setCurrentImage,
  api,
  images,
}) => {
  const { goToPrevious, goToNext, handleDotClick } = useCarouselPagination({
    api,
    currentImage,
    setCurrentImage,
  })

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        aria-label="Previous image"
        className={ARROW_CLASS_NAME}
        disabled={currentImage === 0}
        onClick={goToPrevious}
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
            data-index={index}
            key={index}
            onClick={handleDotClick}
            type="button"
          />
        ))}
      </div>

      <button
        aria-label="Next image"
        className={ARROW_CLASS_NAME}
        disabled={currentImage === images.length - 1}
        onClick={goToNext}
        type="button"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}

export default CarouselPagination
