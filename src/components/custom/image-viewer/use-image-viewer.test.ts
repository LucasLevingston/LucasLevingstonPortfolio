import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { useImageViewer } from './use-image-viewer'

describe('useImageViewer', () => {
  it('starts with rotation at 0 and the viewer closed', () => {
    const { result } = renderHook(() => useImageViewer('/img.png', 'alt'))
    expect(result.current.rotation).toBe(0)
    expect(result.current.isOpen).toBe(false)
  })

  it('rotates by 90 degrees on each call and wraps back to 0 after 360', () => {
    const { result } = renderHook(() => useImageViewer('/img.png', 'alt'))

    act(() => result.current.handleRotate())
    expect(result.current.rotation).toBe(90)

    act(() => result.current.handleRotate())
    expect(result.current.rotation).toBe(180)

    act(() => result.current.handleRotate())
    expect(result.current.rotation).toBe(270)

    act(() => result.current.handleRotate())
    expect(result.current.rotation).toBe(0)
  })

  it('resets rotation back to 0', () => {
    const { result } = renderHook(() => useImageViewer('/img.png', 'alt'))

    act(() => result.current.handleRotate())
    act(() => result.current.resetRotation())

    expect(result.current.rotation).toBe(0)
  })

  it('updates isOpen through setIsOpen', () => {
    const { result } = renderHook(() => useImageViewer('/img.png', 'alt'))

    act(() => result.current.setIsOpen(true))
    expect(result.current.isOpen).toBe(true)

    act(() => result.current.setIsOpen(false))
    expect(result.current.isOpen).toBe(false)
  })

  it('creates and clicks a download link using the src and alt as filename', () => {
    const appendSpy = vi.spyOn(document.body, 'appendChild')
    const removeSpy = vi.spyOn(document.body, 'removeChild')
    const clickSpy = vi
      .spyOn(HTMLAnchorElement.prototype, 'click')
      .mockReturnValue(undefined)

    const { result } = renderHook(() =>
      useImageViewer('/img/photo.png', 'My Photo')
    )
    act(() => result.current.handleDownload())

    const anchorCall = appendSpy.mock.calls.find(
      call => (call[0] as HTMLElement).tagName === 'A'
    )
    const anchor = anchorCall?.[0] as HTMLAnchorElement
    expect(anchor.tagName).toBe('A')
    expect(anchor.getAttribute('href')).toBe('/img/photo.png')
    expect(anchor.download).toBe('My Photo')
    expect(clickSpy).toHaveBeenCalledTimes(1)
    expect(removeSpy).toHaveBeenCalledWith(anchor)

    appendSpy.mockRestore()
    removeSpy.mockRestore()
    clickSpy.mockRestore()
  })

  it('falls back to "image" as the filename when alt is empty', () => {
    const appendSpy = vi.spyOn(document.body, 'appendChild')
    vi.spyOn(document.body, 'removeChild')
    vi.spyOn(HTMLAnchorElement.prototype, 'click').mockReturnValue(undefined)

    const { result } = renderHook(() => useImageViewer('/img/photo.png', ''))
    act(() => result.current.handleDownload())

    const anchorCall = appendSpy.mock.calls.find(
      call => (call[0] as HTMLElement).tagName === 'A'
    )
    const anchor = anchorCall?.[0] as HTMLAnchorElement
    expect(anchor.download).toBe('image')

    vi.restoreAllMocks()
  })
})
