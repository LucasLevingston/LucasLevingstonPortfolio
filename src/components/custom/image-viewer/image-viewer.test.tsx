import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import { ImageViewer } from './ImageViewer'

beforeAll(() => {
  class ResizeObserverStub {
    observe() {
      // noop
    }
    unobserve() {
      // noop
    }
    disconnect() {
      // noop
    }
  }
  vi.stubGlobal('ResizeObserver', ResizeObserverStub)
})

describe('ImageViewer', () => {
  it('renders the trigger children without opening the dialog', () => {
    render(
      <ImageViewer alt="Screenshot" src="/img.png">
        <span>Open image</span>
      </ImageViewer>
    )

    expect(screen.getByText('Open image')).toBeInTheDocument()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens the dialog with the image and controls when the trigger is clicked', async () => {
    const user = userEvent.setup()
    render(
      <ImageViewer alt="Screenshot" src="/img.png">
        <span>Open image</span>
      </ImageViewer>
    )

    await user.click(screen.getByText('Open image'))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByAltText('Screenshot')).toHaveAttribute('src', '/img.png')
    expect(screen.getByText('100%')).toBeInTheDocument()
    expect(screen.getByText('Reset')).toBeInTheDocument()
  })

  it('rotates the image by 90 degrees when the rotate button is clicked', async () => {
    const user = userEvent.setup()
    render(
      <ImageViewer alt="Screenshot" src="/img.png">
        <span>Open image</span>
      </ImageViewer>
    )
    await user.click(screen.getByText('Open image'))

    const image = screen.getByAltText('Screenshot')
    expect(image).toHaveStyle({ transform: 'rotate(0deg)' })

    const buttons = screen.getAllByRole('button')
    const rotateButton = buttons[2]
    await user.click(rotateButton)

    expect(image).toHaveStyle({ transform: 'rotate(90deg)' })
  })

  it('resets rotation when the Reset button is clicked', async () => {
    const user = userEvent.setup()
    render(
      <ImageViewer alt="Screenshot" src="/img.png">
        <span>Open image</span>
      </ImageViewer>
    )
    await user.click(screen.getByText('Open image'))

    const image = screen.getByAltText('Screenshot')
    const buttons = screen.getAllByRole('button')
    const rotateButton = buttons[2]
    await user.click(rotateButton)
    expect(image).toHaveStyle({ transform: 'rotate(90deg)' })

    await user.click(screen.getByText('Reset'))
    expect(image).toHaveStyle({ transform: 'rotate(0deg)' })
  })

  it('triggers a download when the download button is clicked', async () => {
    const user = userEvent.setup()
    const appendSpy = vi.spyOn(document.body, 'appendChild')
    const clickSpy = vi
      .spyOn(HTMLAnchorElement.prototype, 'click')
      .mockReturnValue(undefined)

    render(
      <ImageViewer alt="Screenshot" src="/img/photo.png">
        <span>Open image</span>
      </ImageViewer>
    )
    await user.click(screen.getByText('Open image'))

    const buttons = screen.getAllByRole('button')
    const downloadButton = buttons[3]
    await user.click(downloadButton)

    const anchorCall = appendSpy.mock.calls.find(
      call => (call[0] as HTMLElement).tagName === 'A'
    )
    expect(anchorCall).toBeDefined()
    expect(clickSpy).toHaveBeenCalledTimes(1)

    appendSpy.mockRestore()
    clickSpy.mockRestore()
  })
})
