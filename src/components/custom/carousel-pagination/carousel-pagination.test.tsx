import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import type { CarouselApi } from '@/components/ui/carousel'
import CarouselPagination from './CarouselPagination'

const images = ['a.png', 'b.png', 'c.png']

function makeApi() {
  return { scrollTo: vi.fn() } as unknown as CarouselApi
}

describe('CarouselPagination', () => {
  it('renders a dot button for every image', () => {
    render(
      <CarouselPagination
        api={makeApi()}
        currentImage={0}
        images={images}
        setCurrentImage={vi.fn()}
      />
    )
    expect(screen.getByLabelText('Go to image 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to image 2')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to image 3')).toBeInTheDocument()
  })

  it('marks the current image dot as active', () => {
    render(
      <CarouselPagination
        api={makeApi()}
        currentImage={1}
        images={images}
        setCurrentImage={vi.fn()}
      />
    )
    expect(screen.getByLabelText('Go to image 2')).toHaveClass('bg-mainColor')
    expect(screen.getByLabelText('Go to image 1')).not.toHaveClass(
      'bg-mainColor'
    )
  })

  it('disables the previous button on the first image', () => {
    render(
      <CarouselPagination
        api={makeApi()}
        currentImage={0}
        images={images}
        setCurrentImage={vi.fn()}
      />
    )
    expect(screen.getByLabelText('Previous image')).toBeDisabled()
    expect(screen.getByLabelText('Next image')).not.toBeDisabled()
  })

  it('disables the next button on the last image', () => {
    render(
      <CarouselPagination
        api={makeApi()}
        currentImage={2}
        images={images}
        setCurrentImage={vi.fn()}
      />
    )
    expect(screen.getByLabelText('Next image')).toBeDisabled()
    expect(screen.getByLabelText('Previous image')).not.toBeDisabled()
  })

  it('navigates to the next image on click', async () => {
    const user = userEvent.setup()
    const api = makeApi()
    const setCurrentImage = vi.fn()
    render(
      <CarouselPagination
        api={api}
        currentImage={0}
        images={images}
        setCurrentImage={setCurrentImage}
      />
    )
    await user.click(screen.getByLabelText('Next image'))
    expect(setCurrentImage).toHaveBeenCalledWith(1)
    expect(api?.scrollTo).toHaveBeenCalledWith(1)
  })

  it('navigates to the previous image on click', async () => {
    const user = userEvent.setup()
    const api = makeApi()
    const setCurrentImage = vi.fn()
    render(
      <CarouselPagination
        api={api}
        currentImage={1}
        images={images}
        setCurrentImage={setCurrentImage}
      />
    )
    await user.click(screen.getByLabelText('Previous image'))
    expect(setCurrentImage).toHaveBeenCalledWith(0)
    expect(api?.scrollTo).toHaveBeenCalledWith(0)
  })

  it('navigates directly to a clicked dot', async () => {
    const user = userEvent.setup()
    const api = makeApi()
    const setCurrentImage = vi.fn()
    render(
      <CarouselPagination
        api={api}
        currentImage={0}
        images={images}
        setCurrentImage={setCurrentImage}
      />
    )
    await user.click(screen.getByLabelText('Go to image 3'))
    expect(setCurrentImage).toHaveBeenCalledWith(2)
    expect(api?.scrollTo).toHaveBeenCalledWith(2)
  })
})
