import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ProjectImageCarousel } from './ProjectImageCarousel'

const GO_TO_IMAGE_PATTERN = /Go to image/i

vi.mock('embla-carousel-react', () => {
  const api = {
    selectedScrollSnap: vi.fn(() => 0),
    scrollSnapList: vi.fn(() => []),
    canScrollPrev: vi.fn(() => false),
    canScrollNext: vi.fn(() => true),
    scrollPrev: vi.fn(),
    scrollNext: vi.fn(),
    scrollTo: vi.fn(),
    on: vi.fn(),
    off: vi.fn(),
  }
  return {
    default: () => [vi.fn(), api],
  }
})

describe('ProjectImageCarousel', () => {
  const images = ['a.png', 'b.png', 'c.png']

  it('renders one slide per image', () => {
    const { container } = render(<ProjectImageCarousel images={images} />)

    expect(container.querySelectorAll('[role="group"]')).toHaveLength(3)
  })

  it('renders images inside a desktop frame when isMobile is not set', () => {
    render(<ProjectImageCarousel images={images} />)

    expect(screen.getAllByAltText('Screenshot 1').length).toBeGreaterThan(0)
  })

  it('renders images inside a phone frame when isMobile is true', () => {
    const { container } = render(
      <ProjectImageCarousel images={images} isMobile />
    )

    expect(container.querySelectorAll('[role="group"] img')).toHaveLength(
      images.length
    )
  })

  it('renders one pagination dot per image', () => {
    render(<ProjectImageCarousel images={images} />)

    expect(
      screen.getAllByRole('button', { name: GO_TO_IMAGE_PATTERN })
    ).toHaveLength(3)
  })

  it('uses paginationImages for the pagination dot count when provided', () => {
    render(
      <ProjectImageCarousel
        images={images}
        paginationImages={['t1.png', 't2.png']}
      />
    )

    expect(
      screen.getAllByRole('button', { name: GO_TO_IMAGE_PATTERN })
    ).toHaveLength(2)
  })

  it('disables the "previous" pagination control on the first image', () => {
    render(<ProjectImageCarousel images={images} />)

    expect(
      screen.getByRole('button', { name: 'Previous image' })
    ).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Next image' })).toBeEnabled()
  })

  it('moves to the next image when a pagination dot is clicked', async () => {
    const user = userEvent.setup()
    render(<ProjectImageCarousel images={images} />)

    await user.click(screen.getByRole('button', { name: 'Go to image 2' }))

    expect(screen.getByRole('button', { name: 'Previous image' })).toBeEnabled()
  })
})
