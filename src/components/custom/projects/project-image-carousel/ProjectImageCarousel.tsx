'use client'

import Image from 'next/image'
import CarouselPagination from '@/components/custom/carousel-pagination'
import { DesktopFrame } from '@/components/custom/desktop-frame'
import { ImageViewer } from '@/components/custom/image-viewer'
import PhoneFrame from '@/components/custom/phone-frame'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import type { ProjectImageCarouselProps } from './project-image-carousel.types'
import { useProjectImageCarousel } from './use-project-image-carousel'

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
                  <Image
                    alt={`Screenshot ${index + 1}`}
                    className="object-cover"
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
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
                  <Image
                    alt={`Screenshot ${index + 1}`}
                    className="rounded-lg object-contain"
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
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
