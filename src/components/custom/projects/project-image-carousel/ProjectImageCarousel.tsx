'use client'

import CarouselPagination from '@/components/custom/carousel-pagination'
import { DesktopFrame } from '@/components/custom/desktop-frame'
import { ImageViewer } from '@/components/custom/image-viewer'
import PhoneFrame from '@/components/custom/phone-frame'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { useProjectImageCarousel } from './use-project-image-carousel'

interface ProjectImageCarouselProps {
  images: string[]
  isMobile?: boolean
  paginationImages?: string[]
}

export function ProjectImageCarousel({
  images,
  isMobile,
  paginationImages,
}: ProjectImageCarouselProps) {
  const { currentImage, setCurrentImage, api, setApi, pagination } =
    useProjectImageCarousel(images, paginationImages)

  return (
    <Carousel setApi={setApi}>
      <CarouselContent className="h-full w-[500px]">
        {images.map((image, index) =>
          isMobile ? (
            <CarouselItem className="flex justify-center" key={index}>
              <ImageViewer
                alt={`Screenshot ${index + 1}`}
                src={image || '/placeholder.svg'}
              >
                <PhoneFrame>
                  <img
                    alt={`Screenshot ${index + 1}`}
                    className="h-full w-full object-cover"
                    decoding="async"
                    loading="lazy"
                    src={image || '/placeholder.svg'}
                  />
                </PhoneFrame>
              </ImageViewer>
            </CarouselItem>
          ) : (
            <CarouselItem key={index}>
              <DesktopFrame>
                <ImageViewer
                  alt={`Screenshot ${index + 1}`}
                  src={image || '/placeholder.svg'}
                >
                  <img
                    alt={`Screenshot ${index + 1}`}
                    className="h-full w-full rounded-lg object-contain"
                    decoding="async"
                    loading="lazy"
                    src={image || '/placeholder.svg'}
                  />
                </ImageViewer>
              </DesktopFrame>
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <div className="py-2 text-center !text-mainColor text-xs dark:!text-mainColor">
        {pagination && (
          <CarouselPagination
            api={api}
            currentImage={currentImage}
            images={pagination}
            setCurrentImage={setCurrentImage}
          />
        )}
      </div>
    </Carousel>
  )
}
