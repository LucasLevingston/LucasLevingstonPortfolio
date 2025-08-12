import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import type React from 'react'
import type { CarouselApi } from '@/components/ui/carousel'
import { Pagination, PaginationContent } from '@/components/ui/pagination'
import { CustomButton } from './custom-button'

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
  return (
    <Pagination>
      <PaginationContent>
        <CustomButton
          disabled={currentImage === 0}
          onClick={() => {
            setCurrentImage(0)
            api?.scrollTo(0)
          }}
          size="sm"
          
        >
          <CustomButton.Icon>
            <ChevronsLeft />
          </CustomButton.Icon>
        </CustomButton>

        <CustomButton
          disabled={currentImage === 0}
          onClick={() => {
            setCurrentImage(currentImage - 1)
            api?.scrollPrev()
          }}
          size="sm"
          
        >
          
          <CustomButton.Icon>
            <ChevronLeft />
          </CustomButton.Icon>
        </CustomButton>

        {currentImage > 0 && (
          <CustomButton
            onClick={() => {
              setCurrentImage(currentImage - 1)
              api?.scrollTo(currentImage - 1)
            }}
            size="sm"
            
          >
            <CustomButton.Label>{currentImage}</CustomButton.Label>
          </CustomButton>
        )}

        <CustomButton disabled size="sm" >
          <CustomButton.Label>{currentImage + 1}</CustomButton.Label>
        </CustomButton>

        {currentImage < images.length - 1 && (
          <CustomButton
            onClick={() => {
              setCurrentImage(currentImage + 1)
              api?.scrollTo(currentImage + 1)
            }}
            size="sm"
            
          >
            <CustomButton.Label>{currentImage + 2}</CustomButton.Label>
          </CustomButton>
        )}

        <CustomButton
          disabled={currentImage === images.length - 1}
          onClick={() => {
            setCurrentImage(currentImage + 1)
            api?.scrollNext()
          }}
          size="sm"
          
        >
          {' '}
          <CustomButton.Icon>
            <ChevronRight />
          </CustomButton.Icon>
        </CustomButton>

        <CustomButton
          disabled={currentImage === images.length - 1}
          onClick={() => {
            setCurrentImage(images.length - 1)
            api?.scrollTo(images.length - 1)
          }}
          size="sm"
          
        >
          <CustomButton.Icon>
            <ChevronsRight />
          </CustomButton.Icon>
        </CustomButton>
      </PaginationContent>
    </Pagination>
  )
}

export default CarouselPagination
